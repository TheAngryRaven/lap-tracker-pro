import { useState, useCallback, useRef, useEffect } from "react";

interface ResizableSplitProps {
  topPanel: React.ReactNode;
  bottomPanel: React.ReactNode;
  defaultRatio?: number; // 0-1, top panel height ratio
  minTopHeight?: number;
  minBottomHeight?: number;
}

export function ResizableSplit({
  topPanel,
  bottomPanel,
  defaultRatio = 0.7,
  minTopHeight = 150,
  minBottomHeight = 100,
}: ResizableSplitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const ratioRef = useRef(defaultRatio);

  const DIVIDER_HEIGHT = 8;

  // Store top panel height in pixels. We'll compute this from the container height.
  const [topPx, setTopPx] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Clamp the top panel height to valid range
  const clampTopPx = useCallback(
    (desiredTopPx: number, containerHeight: number) => {
      const availableHeight = containerHeight - DIVIDER_HEIGHT;
      const maxTop = Math.max(minTopHeight, availableHeight - minBottomHeight);
      return Math.max(minTopHeight, Math.min(maxTop, desiredTopPx));
    },
    [minTopHeight, minBottomHeight],
  );

  // Measure container and set topPx from ratio
  const syncFromRatio = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerHeight = container.clientHeight;
    if (containerHeight <= 0) return;

    const availableHeight = containerHeight - DIVIDER_HEIGHT;
    const desired = availableHeight * ratioRef.current;
    const clamped = clampTopPx(desired, containerHeight);

    // Update ratio to reflect clamped value
    ratioRef.current = clamped / availableHeight;
    setTopPx(clamped);
  }, [clampTopPx]);

  // Initial measurement + resize observer
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initial sync
    syncFromRatio();

    const ro = new ResizeObserver(() => {
      syncFromRatio();
    });

    ro.observe(container);
    return () => ro.disconnect();
  }, [syncFromRatio]);

  // Handle drag start
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  // Handle drag movement
  useEffect(() => {
    if (!isDragging) return;

    const handleMove = (clientY: number) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const containerHeight = rect.height;
      if (containerHeight <= 0) return;

      const desiredTop = clientY - rect.top;
      const clamped = clampTopPx(desiredTop, containerHeight);

      const availableHeight = containerHeight - DIVIDER_HEIGHT;
      ratioRef.current = clamped / availableHeight;
      setTopPx(clamped);
    };

    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientY);

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      e.preventDefault();
      handleMove(e.touches[0].clientY);
    };

    const handleEnd = () => setIsDragging(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleEnd);
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleEnd);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleEnd);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, clampTopPx]);

  // Compute bottom panel height
  const getBottomPx = () => {
    const container = containerRef.current;
    if (!container || topPx === null) return 0;
    return container.clientHeight - topPx - DIVIDER_HEIGHT;
  };

  const bottomPx = topPx !== null ? getBottomPx() : 0;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden"
    >
      {/* Top Panel - absolute positioned from top */}
      <div
        className="absolute top-0 left-0 right-0 overflow-hidden"
        style={{ height: topPx !== null ? `${topPx}px` : '70%' }}
      >
        {topPanel}
      </div>

      {/* Divider - absolute positioned */}
      <div
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        className={`
          absolute left-0 right-0 cursor-row-resize flex items-center justify-center select-none touch-none z-10
          bg-border hover:bg-primary/30 transition-colors
          ${isDragging ? "bg-primary/50" : ""}
        `}
        style={{
          top: topPx !== null ? `${topPx}px` : '70%',
          height: `${DIVIDER_HEIGHT}px`,
        }}
      >
        <div className="w-12 h-1 bg-muted-foreground/30 rounded-full" />
      </div>

      {/* Bottom Panel - absolute positioned, anchored to bottom */}
      <div
        className="absolute left-0 right-0 bottom-0 overflow-hidden"
        style={{ height: bottomPx > 0 ? `${bottomPx}px` : '30%' }}
      >
        {bottomPanel}
      </div>
    </div>
  );
}
