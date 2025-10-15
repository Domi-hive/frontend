import { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right';
  delay?: number;
}

export function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fade',
  delay = 0 
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);

  const animationClasses = {
    fade: isVisible ? 'opacity-100' : 'opacity-0',
    'slide-up': isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
    'slide-left': isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12',
    'slide-right': isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12',
  }[animation];

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-1000 ease-out ${animationClasses} ${className}`}
    >
      {children}
    </div>
  );
}
