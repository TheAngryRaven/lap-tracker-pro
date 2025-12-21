import { ParsedData } from '@/types/racing';
import { parseDatalog } from './nmeaParser';
import { parseUbxFile, isUbxFormat } from './ubxParser';

/**
 * Unified datalog parser that auto-detects format and routes to appropriate parser.
 * Supports:
 * - UBX binary format (u-blox GPS receivers)
 * - NMEA text format (CSV with NMEA sentences, .nmea files)
 */
export async function parseDatalogFile(file: File): Promise<ParsedData> {
  const buffer = await file.arrayBuffer();
  
  // Check if it's UBX binary format
  if (isUbxFormat(buffer)) {
    return parseUbxFile(buffer);
  }
  
  // Otherwise, treat as NMEA text format
  const text = await file.text();
  return parseDatalog(text);
}

/**
 * Parse from raw content (for when you already have the data loaded)
 */
export function parseDatalogContent(content: string | ArrayBuffer): ParsedData {
  if (content instanceof ArrayBuffer) {
    if (isUbxFormat(content)) {
      return parseUbxFile(content);
    }
    // Convert to text and try NMEA
    const decoder = new TextDecoder();
    return parseDatalog(decoder.decode(content));
  }
  
  // String content - must be NMEA
  return parseDatalog(content);
}
