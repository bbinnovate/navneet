'use client';
import { useEffect, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
  scrollIntoView?: boolean;
};

const FadeInFromBottom = ({ children, scrollIntoView }: Props) => {
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
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible
          ? 'opacity-100 translate-y-0 visible'
          : 'opacity-0 translate-y-24 invisible'
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInFromBottom;
