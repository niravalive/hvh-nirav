import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Also scroll the snap-container on HomePage if it exists
    const snapContainer = document.querySelector('.hide-scrollbar');
    if (snapContainer) {
      snapContainer.scrollTo({ top: 0, behavior: 'instant' });
    }

    // Slight delay to ensure it catches cases where the browser restores scroll late
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
      if (snapContainer) {
        snapContainer.scrollTo({ top: 0, behavior: 'instant' });
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [pathname, search]);

  return null;
}
