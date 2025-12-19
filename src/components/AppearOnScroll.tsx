import { ReactElement, forwardRef, useEffect, useImperativeHandle, useRef, cloneElement } from "react";

interface AppearOnScrollProps {
  delay?: number;
  children: ReactElement;
  className?: string;
}

const AppearOnScroll = forwardRef<HTMLElement, AppearOnScrollProps>(({ delay = 0, children, className = "" }, ref) => {
  const elementRef = useRef<HTMLElement>(null);

  useImperativeHandle(ref, () => elementRef.current as HTMLElement);

  const makeVisible = () => {
    if (elementRef.current) {
      elementRef.current.style.opacity = "1";
      elementRef.current.style.transform = "none";
    }
  };

  useEffect(() => {
    try {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              makeVisible();
              observer.disconnect();
            }
          });
        },
        {
          rootMargin: "0px 0px -120px 0px",
        },
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => {
        observer.disconnect();
      };
    } catch (error) {
      // Fallback: make visible immediately if IntersectionObserver fails
      makeVisible();
    }
  }, []);

  return cloneElement(children, {
    ...children.props,
    ref: elementRef,
    style: {
      ...children.props.style,
      "--delay": `${delay}ms`,
      opacity: 0,
      transform: "translateY(8rem)", // 5rem × 1.6 = 8rem (10px base)
      transition: "opacity 0.4s cubic-bezier(0.39, 0.57, 0.56, 1), transform 0.4s cubic-bezier(0.39, 0.57, 0.56, 1)",
      transitionDelay: "var(--delay), var(--delay)",
    } as React.CSSProperties,
    className: `${className} ${children.props.className || ""} appear-on-scroll`,
  });
});

AppearOnScroll.displayName = "AppearOnScroll";

export default AppearOnScroll;
