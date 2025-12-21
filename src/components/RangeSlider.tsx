import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

interface RangeSliderProps {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
  formatLabel?: (value: number) => string;
  minRange?: number;
  className?: string;
}

export function RangeSlider({
  min,
  max,
  value,
  onChange,
  formatLabel,
  minRange = 10,
  className,
}: RangeSliderProps) {
  const handleValueChange = (newValue: number[]) => {
    if (newValue.length !== 2) return;
    
    let [start, end] = newValue;
    
    // Enforce minimum range
    if (end - start < minRange) {
      // Determine which handle moved and adjust the other
      if (start !== value[0]) {
        // Start handle moved - push end
        end = Math.min(max, start + minRange);
        if (end - start < minRange) {
          start = end - minRange;
        }
      } else {
        // End handle moved - push start
        start = Math.max(min, end - minRange);
        if (end - start < minRange) {
          end = start + minRange;
        }
      }
    }
    
    onChange([start, end]);
  };

  const startLabel = formatLabel ? formatLabel(value[0]) : value[0].toString();
  const endLabel = formatLabel ? formatLabel(value[1]) : value[1].toString();

  // Calculate percentage positions for labels
  const range = max - min;
  const startPercent = range > 0 ? ((value[0] - min) / range) * 100 : 0;
  const endPercent = range > 0 ? ((value[1] - min) / range) * 100 : 100;

  return (
    <div className={cn("relative px-2 py-3", className)}>
      {/* Labels */}
      <div className="absolute -top-1 left-0 right-0 pointer-events-none">
        <div
          className="absolute text-xs font-mono text-muted-foreground whitespace-nowrap transform -translate-x-1/2"
          style={{ left: `calc(${startPercent}% + 8px)` }}
        >
          {startLabel}
        </div>
        <div
          className="absolute text-xs font-mono text-muted-foreground whitespace-nowrap transform -translate-x-1/2"
          style={{ left: `calc(${endPercent}% + 8px)` }}
        >
          {endLabel}
        </div>
      </div>

      <SliderPrimitive.Root
        min={min}
        max={max}
        step={1}
        value={value}
        onValueChange={handleValueChange}
        className="relative flex w-full touch-none select-none items-center"
      >
        <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-secondary">
          <SliderPrimitive.Range className="absolute h-full bg-primary/60" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-ew-resize" />
        <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-ew-resize" />
      </SliderPrimitive.Root>
    </div>
  );
}
