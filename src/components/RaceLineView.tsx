import { useEffect, useMemo, useRef } from 'react';
import { MapContainer, TileLayer, Polyline, Circle, useMap } from 'react-leaflet';
import { GpsSample, Track } from '@/types/racing';
import 'leaflet/dist/leaflet.css';

interface RaceLineViewProps {
  samples: GpsSample[];
  currentIndex: number;
  track: Track | null;
  bounds: {
    minLat: number;
    maxLat: number;
    minLon: number;
    maxLon: number;
  };
}

// Component to update map view when bounds change
function MapUpdater({ bounds }: { bounds: RaceLineViewProps['bounds'] }) {
  const map = useMap();
  
  useEffect(() => {
    if (bounds.minLat !== bounds.maxLat || bounds.minLon !== bounds.maxLon) {
      const padding = 0.0005; // Small padding around bounds
      map.fitBounds([
        [bounds.minLat - padding, bounds.minLon - padding],
        [bounds.maxLat + padding, bounds.maxLon + padding]
      ]);
    }
  }, [bounds, map]);
  
  return null;
}

// Component to show current position marker
function CurrentPositionMarker({ position }: { position: [number, number] | null }) {
  if (!position) return null;
  
  return (
    <>
      {/* Outer glow */}
      <Circle
        center={position}
        radius={8}
        pathOptions={{
          color: 'transparent',
          fillColor: 'hsl(180, 70%, 55%)',
          fillOpacity: 0.3,
        }}
      />
      {/* Inner marker */}
      <Circle
        center={position}
        radius={4}
        pathOptions={{
          color: 'hsl(220, 20%, 10%)',
          weight: 2,
          fillColor: 'hsl(180, 70%, 55%)',
          fillOpacity: 1,
        }}
      />
    </>
  );
}

// Get speed color (green -> yellow -> orange -> red)
function getSpeedColor(speedMph: number, maxSpeed: number): string {
  const ratio = Math.min(speedMph / Math.max(maxSpeed, 1), 1);
  
  if (ratio < 0.33) {
    const t = ratio / 0.33;
    const r = Math.round(76 + t * (230 - 76));
    const g = Math.round(175 + t * (180 - 175));
    const b = Math.round(80 - t * 80);
    return `rgb(${r},${g},${b})`;
  } else if (ratio < 0.66) {
    const t = (ratio - 0.33) / 0.33;
    const r = Math.round(230 + t * (240 - 230));
    const g = Math.round(180 - t * 80);
    const b = Math.round(0 + t * 50);
    return `rgb(${r},${g},${b})`;
  } else {
    const t = (ratio - 0.66) / 0.34;
    const r = Math.round(240 - t * 40);
    const g = Math.round(100 - t * 60);
    const b = Math.round(50 - t * 10);
    return `rgb(${r},${g},${b})`;
  }
}

export function RaceLineView({ samples, currentIndex, track, bounds }: RaceLineViewProps) {
  const mapRef = useRef<L.Map | null>(null);
  
  // Calculate max speed for color scaling
  const maxSpeed = useMemo(() => {
    return Math.max(...samples.map(s => s.speedMph), 1);
  }, [samples]);
  
  // Create polyline segments with colors based on speed
  const polylineSegments = useMemo(() => {
    const segments: { positions: [number, number][]; color: string }[] = [];
    
    for (let i = 0; i < samples.length - 1; i++) {
      const color = getSpeedColor(samples[i].speedMph, maxSpeed);
      const positions: [number, number][] = [
        [samples[i].lat, samples[i].lon],
        [samples[i + 1].lat, samples[i + 1].lon]
      ];
      segments.push({ positions, color });
    }
    
    return segments;
  }, [samples, maxSpeed]);
  
  // Start/finish line
  const startFinishLine = useMemo(() => {
    if (!track) return null;
    return [
      [track.startFinishA.lat, track.startFinishA.lon] as [number, number],
      [track.startFinishB.lat, track.startFinishB.lon] as [number, number]
    ];
  }, [track]);
  
  // Current position
  const currentPosition = useMemo(() => {
    if (currentIndex >= 0 && currentIndex < samples.length) {
      return [samples[currentIndex].lat, samples[currentIndex].lon] as [number, number];
    }
    return null;
  }, [samples, currentIndex]);
  
  // Center of the track for initial view
  const center = useMemo(() => {
    return [
      (bounds.minLat + bounds.maxLat) / 2,
      (bounds.minLon + bounds.maxLon) / 2
    ] as [number, number];
  }, [bounds]);

  if (samples.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-background text-muted-foreground">
        No GPS data loaded
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <MapContainer
        center={center}
        zoom={16}
        className="w-full h-full"
        ref={mapRef}
        zoomControl={false}
      >
        {/* Dark satellite/street tiles - using CartoDB dark theme */}
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        
        <MapUpdater bounds={bounds} />
        
        {/* Draw race line segments with speed coloring */}
        {polylineSegments.map((segment, i) => (
          <Polyline
            key={i}
            positions={segment.positions}
            pathOptions={{
              color: segment.color,
              weight: 4,
              opacity: 0.9,
            }}
          />
        ))}
        
        {/* Start/finish line */}
        {startFinishLine && (
          <Polyline
            positions={startFinishLine}
            pathOptions={{
              color: 'hsl(0, 75%, 55%)',
              weight: 5,
              opacity: 1,
            }}
          />
        )}
        
        {/* Current position marker */}
        <CurrentPositionMarker position={currentPosition} />
      </MapContainer>
      
      {/* Speed legend */}
      <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm border border-border rounded p-2 z-[1000]">
        <div className="text-xs text-muted-foreground mb-1">Speed</div>
        <div className="w-24 h-3 speed-gradient rounded" />
        <div className="flex justify-between text-xs text-muted-foreground mt-1 font-mono">
          <span>Slow</span>
          <span>Fast</span>
        </div>
      </div>
    </div>
  );
}
