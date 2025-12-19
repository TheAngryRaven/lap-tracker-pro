import { useState, useCallback, useRef, useEffect } from 'react';

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
  minBottomHeight = 100
}: ResizableSplitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [topHeight, setTopHeight] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Initialize top height based on container size
  useEffect(() => {
    const container = containerRef.current;
    if (!container || topHeight !== null) return;

    const rect = container.getBoundingClientRect();
    const dividerHeight = 8;
    const availableHeight = rect.height - dividerHeight;
    setTopHeight(availableHeight * defaultRatio);
  }, [defaultRatio, topHeight]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
  }, []);

  useEffect(() => {
    if (!isDragging) return;

    const handleMove = (clientY: number) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const dividerHeight = 8;
      const availableHeight = rect.height - dividerHeight;
      const y = clientY - rect.top;
      
      // Constrain to min heights
      const newTopHeight = Math.max(
        minTopHeight, 
        Math.min(availableHeight - minBottomHeight, y)
      );
      
      setTopHeight(newTopHeight);
    };

    const handleMouseMove = (e: MouseEvent) => {
      handleMove(e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        handleMove(e.touches[0].clientY);
      }
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, minTopHeight, minBottomHeight]);

  // Handle window resize - adjust proportionally
  useEffect(() => {
    const container = containerRef.current;
    if (!container || topHeight === null) return;

    let lastContainerHeight = container.getBoundingClientRect().height;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const newContainerHeight = entry.contentRect.height;
        if (newContainerHeight === lastContainerHeight) return;
        
        const dividerHeight = 8;
        const oldAvailable = lastContainerHeight - dividerHeight;
        const newAvailable = newContainerHeight - dividerHeight;
        
        // Maintain the same ratio when container resizes
        const ratio = topHeight / oldAvailable;
        const newTopHeight = Math.max(
          minTopHeight,
          Math.min(newAvailable - minBottomHeight, newAvailable * ratio)
        );
        
        setTopHeight(newTopHeight);
        lastContainerHeight = newContainerHeight;
      }
    });

    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, [topHeight, minTopHeight, minBottomHeight]);

  const dividerHeight = 8;

  return (
    <div ref={containerRef} className="h-full overflow-hidden relative">
      {/* Top Panel - absolute positioning */}
      <div 
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: topHeight ?? '70%'
        }} 
        className="overflow-hidden"
      >
        {topPanel}
      </div>

      {/* Divider - absolute positioning */}
      <div
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        style={{
          position: 'absolute',
          top: topHeight ?? '70%',
          left: 0,
          right: 0,
          height: dividerHeight
        }}
        className={`
          bg-border cursor-row-resize flex items-center justify-center z-10
          hover:bg-primary/30 transition-colors
          ${isDragging ? 'bg-primary/50' : ''}
        `}
      >
        <div className="w-12 h-1 bg-muted-foreground/30 rounded-full" />
      </div>

      {/* Bottom Panel - absolute positioning */}
      <div 
        style={{ 
          position: 'absolute',
          top: (topHeight ?? 0) + dividerHeight,
          left: 0,
          right: 0,
          bottom: 0
        }} 
        className="overflow-hidden"
      >
        {bottomPanel}
      </div>
    </div>
  );
}
