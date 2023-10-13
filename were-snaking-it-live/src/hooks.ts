import fitty from 'fitty';
import {useEffect, useRef} from 'react';

/**
 * React hook to provide an auto-fitting ref, if `fit` is true (default).
 */
export function useFit(fit = true) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (fit && ref.current) {
      fitty(ref.current);
    }
  }, [ref.current]);

  return ref;
}
