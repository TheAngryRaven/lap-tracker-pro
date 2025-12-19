import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`article-grid pb-12 md:pb-20 lg:pb-32 ${className}`}>
      {children}
    </section>
  );
}
