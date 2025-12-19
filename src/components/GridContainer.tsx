import { ReactNode } from "react";

interface GridContainerProps {
  children: ReactNode;
  className?: string;
}

interface GridWrapperProps {
  children: ReactNode;
  full?: boolean;
  className?: string;
}

/**
 * Grid Container - Main grid with 18/22/30 columns and responsive margins
 * Margins: 1.25rem (base) → 2.734375rem (768px) → 3.75rem (1180px) → 5rem (1920px)
 */
export function GridContainer({
  children,
  className = "",
}: GridContainerProps) {
  return <div className={`article-section-grid ${className}`}>{children}</div>;
}

export function GridContent({ children, className }: GridContainerProps) {
  return <div className={`article-section-content ${className}`}>{children}</div>;
}

/**
 * Grid Wrapper - Constrained width content wrapper
 * Base: cols 2-17 (16 columns)
 * Tablet (768px): cols 3-20 (18 columns)
 * Desktop (1180px): cols 3-28 (26 columns)
 */
export function GridWrapper({ children, className = "" }: GridWrapperProps) {
  return <div className={`article-wrapper-constrained ${className}`}>{children}</div>;
}
