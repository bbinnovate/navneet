"use client";
import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  scrollIntoView?: boolean;
};

const FadeInFromRight = ({ children, scrollIntoView }: Props) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollIntoView) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    if (domRef.current) observer.observe(domRef.current);

    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, [scrollIntoView]);

  return (
    // 👇 This prevents horizontal scroll
    <div className="overflow-hidden">
      <div
        ref={domRef}
        className={`transition-all duration-1000 ease-out transform ${
          isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-12"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default FadeInFromRight;

