import { useEffect, useRef } from 'react';

export function useOutsideClick(callback: () => void) {
  const ref = useRef<HTMLDivElement | null>(null);
  const justMounted = useRef(true);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (justMounted.current) {
        justMounted.current = false;
        return;
      }
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [callback]);

  return ref;
}
