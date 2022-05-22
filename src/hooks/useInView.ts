import { useState, useEffect, RefObject, useRef } from 'react';

export function useInView(
  target: RefObject<HTMLElement>,
  options: IntersectionObserverInit = {
    threshold: 20,
    rootMargin: '20px',
    root: null,
  }
) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries) => {
      setIsIntersecting(entries[0].isIntersecting);
    };

    observer.current?.disconnect();

    if (target.current) {
      observer.current = new IntersectionObserver(callback, options);
      observer.current.observe(target.current);
    }
  }, [options, target]);

  return isIntersecting;
}
