import { useEffect, useState } from 'react';

export function useWindowResize(handler: { (): void }, initialWindowSize?: number) {
  const [windowSize, setWindowSize] = useState<undefined | number>(initialWindowSize);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
      handler();
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [windowSize]);
}
