// src/hooks/useInView.ts

import { useEffect, useRef, useState } from 'react';

/**
 * Custom Hook που επιστρέφει true αν το στοιχείο είναι ορατό (in view).
 * @param options - Οι επιλογές του IntersectionObserver (π.χ. { threshold: 0.1 })
 */
export const useInView = (options: IntersectionObserverInit = { threshold: 0.1 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Όταν το στοιχείο μπει στο viewport
      if (entry.isIntersecting) {
        setInView(true);
        // Μπορούμε να σταματήσουμε να παρακολουθούμε μόλις εμφανιστεί
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // Καθαρισμός όταν το component "ξεφορτωθεί"
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, inView };
};