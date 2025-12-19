import { ReactNode } from "react";

interface CenteredContentProps {
  children: ReactNode;
  className?: string;
}

const CenteredContent = ({ children, className = "" }: CenteredContentProps) => {
  return (
    <div className="article-grid">
      <div className={`article-centered-content ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default CenteredContent;
