import { useState, useEffect } from 'react';

interface Type {
  width: number
  height: number
}

export function useWindowResize() {
  const [windowSize, setWindowSize] = useState<Type>({ width: 0, height: 0 });

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return windowSize;
}