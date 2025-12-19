import { GpsSample, ParsedData } from '@/types/racing';

// UBX Protocol constants
const UBX_SYNC_1 = 0xB5;
const UBX_SYNC_2 = 0x62;
const UBX_NAV_CLASS = 0x01;
const UBX_NAV_PVT_ID = 0x07;

interface UbxNavPvt {
  iTOW: number; // GPS time of week in ms
  year: number;
  month: number;
  day: number;
  hour: number;
  min: number;
  sec: number;
  valid: number;
  tAcc: number;
  nano: number;
  fixType: number;
  flags: number;
  flags2: number;
  numSV: number;
  lon: number; // degrees * 1e-7
  lat: number; // degrees * 1e-7
  height: number; // mm
  hMSL: number; // mm above mean sea level
  hAcc: number; // mm horizontal accuracy
  vAcc: number; // mm vertical accuracy
  velN: number; // mm/s north velocity
  velE: number; // mm/s east velocity
  velD: number; // mm/s down velocity
  gSpeed: number; // mm/s ground speed
  headMot: number; // degrees * 1e-5 heading of motion
  sAcc: number; // mm/s speed accuracy
  headAcc: number; // degrees * 1e-5 heading accuracy
  pDOP: number; // 0.01 position DOP
  headVeh: number; // degrees * 1e-5 heading of vehicle
}

// Calculate UBX Fletcher checksum
function calculateChecksum(data: Uint8Array, start: number, length: number): { ckA: number; ckB: number } {
  let ckA = 0;
  let ckB = 0;
  for (let i = 0; i < length; i++) {
    ckA = (ckA + data[start + i]) & 0xFF;
    ckB = (ckB + ckA) & 0xFF;
  }
  return { ckA, ckB };
}

// Parse NAV-PVT payload
function parseNavPvt(view: DataView, offset: number): UbxNavPvt | null {
  try {
    return {
      iTOW: view.getUint32(offset, true),
      year: view.getUint16(offset + 4, true),
      month: view.getUint8(offset + 6),
      day: view.getUint8(offset + 7),
      hour: view.getUint8(offset + 8),
      min: view.getUint8(offset + 9),
      sec: view.getUint8(offset + 10),
      valid: view.getUint8(offset + 11),
      tAcc: view.getUint32(offset + 12, true),
      nano: view.getInt32(offset + 16, true),
      fixType: view.getUint8(offset + 20),
      flags: view.getUint8(offset + 21),
      flags2: view.getUint8(offset + 22),
      numSV: view.getUint8(offset + 23),
      lon: view.getInt32(offset + 24, true),
      lat: view.getInt32(offset + 28, true),
      height: view.getInt32(offset + 32, true),
      hMSL: view.getInt32(offset + 36, true),
      hAcc: view.getUint32(offset + 40, true),
      vAcc: view.getUint32(offset + 44, true),
      velN: view.getInt32(offset + 48, true),
      velE: view.getInt32(offset + 52, true),
      velD: view.getInt32(offset + 56, true),
      gSpeed: view.getInt32(offset + 60, true),
      headMot: view.getInt32(offset + 64, true),
      sAcc: view.getUint32(offset + 68, true),
      headAcc: view.getUint32(offset + 72, true),
      pDOP: view.getUint16(offset + 76, true),
      headVeh: view.getInt32(offset + 84, true),
    };
  } catch {
    return null;
  }
}

// Haversine distance in meters
function haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371000;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export function parseUbxFile(buffer: ArrayBuffer): ParsedData {
  const data = new Uint8Array(buffer);
  const view = new DataView(buffer);
  const samples: GpsSample[] = [];
  
  let baseTimeMs = 0;
  let i = 0;

  while (i < data.length - 8) {
    // Look for UBX sync bytes
    if (data[i] !== UBX_SYNC_1 || data[i + 1] !== UBX_SYNC_2) {
      i++;
      continue;
    }

    const msgClass = data[i + 2];
    const msgId = data[i + 3];
    const length = view.getUint16(i + 4, true);

    // Validate we have enough data
    if (i + 6 + length + 2 > data.length) {
      i++;
      continue;
    }

    // Verify checksum
    const { ckA, ckB } = calculateChecksum(data, i + 2, length + 4);
    const expectedCkA = data[i + 6 + length];
    const expectedCkB = data[i + 6 + length + 1];

    if (ckA !== expectedCkA || ckB !== expectedCkB) {
      i++;
      continue;
    }

    // Process NAV-PVT messages
    if (msgClass === UBX_NAV_CLASS && msgId === UBX_NAV_PVT_ID && length >= 84) {
      const pvt = parseNavPvt(view, i + 6);
      
      if (pvt && pvt.fixType >= 2 && (pvt.flags & 0x01)) {
        // Valid fix with gnssFixOK flag
        const lat = pvt.lat / 1e7;
        const lon = pvt.lon / 1e7;
        
        // Skip invalid coordinates
        if (lat !== 0 && lon !== 0 && Math.abs(lat) <= 90 && Math.abs(lon) <= 180) {
          // Calculate time in ms
          const timeMs = pvt.iTOW;
          
          if (samples.length === 0) {
            baseTimeMs = timeMs;
          }

          const t = timeMs - baseTimeMs;
          
          // Handle time wrap (week rollover)
          const adjustedT = t < 0 ? t + 604800000 : t; // 604800000 ms in a week

          // Ground speed from mm/s to m/s
          let speedMps = pvt.gSpeed / 1000;
          
          // Sanity check on speed (max ~150 m/s / 335 mph)
          if (speedMps > 150) {
            speedMps = samples.length > 0 ? samples[samples.length - 1].speedMps : 0;
          }

          // Teleportation filter
          if (samples.length > 0) {
            const prev = samples[samples.length - 1];
            const timeDiff = (adjustedT - prev.t) / 1000;
            if (timeDiff > 0 && timeDiff < 10) {
              const distance = haversineDistance(prev.lat, prev.lon, lat, lon);
              const maxDistance = 50 * (timeDiff / 0.04);
              if (distance > maxDistance && distance > 100) {
                i += 6 + length + 2;
                continue;
              }
            }
          }

          samples.push({
            t: adjustedT,
            lat,
            lon,
            speedMps,
            speedMph: speedMps * 2.23694,
            speedKph: speedMps * 3.6,
            extraFields: {
              satellites: pvt.numSV,
              hAcc: pvt.hAcc / 1000, // Convert to meters
              vAcc: pvt.vAcc / 1000,
              altitude: pvt.hMSL / 1000, // Convert to meters
              heading: pvt.headMot / 1e5,
            }
          });
        }
      }
    }

    // Move to next message
    i += 6 + length + 2;
  }

  if (samples.length === 0) {
    throw new Error('No valid GPS data found in UBX file');
  }

  // Sort samples by time (in case of out-of-order messages)
  samples.sort((a, b) => a.t - b.t);

  // Calculate bounds
  const lats = samples.map(s => s.lat);
  const lons = samples.map(s => s.lon);

  return {
    samples,
    fieldMappings: [
      { index: 1, name: 'satellites', enabled: true },
      { index: 2, name: 'hAcc', unit: 'm', enabled: true },
      { index: 3, name: 'altitude', unit: 'm', enabled: true },
      { index: 4, name: 'heading', unit: '°', enabled: true },
    ],
    bounds: {
      minLat: Math.min(...lats),
      maxLat: Math.max(...lats),
      minLon: Math.min(...lons),
      maxLon: Math.max(...lons)
    },
    duration: samples[samples.length - 1].t
  };
}

// Check if buffer looks like UBX data
export function isUbxData(buffer: ArrayBuffer): boolean {
  const data = new Uint8Array(buffer);
  // Look for UBX sync bytes in first 1KB
  const searchLen = Math.min(data.length, 1024);
  for (let i = 0; i < searchLen - 1; i++) {
    if (data[i] === UBX_SYNC_1 && data[i + 1] === UBX_SYNC_2) {
      return true;
    }
  }
  return false;
}
