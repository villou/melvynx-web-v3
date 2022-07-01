import React from 'react';
import { isServerSide } from '~/utils/isServerSide';

const QUERY = '(prefers-reduced-motion: no-preference)';

const getInitialState = () =>
  isServerSide() ? true : !window.matchMedia(QUERY).matches;

// from https://www.joshwcomeau.com/snippets/react-hooks/use-prefers-reduced-motion/
function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] =
    React.useState(getInitialState);

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY);
    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(!event.matches);
    };
    mediaQueryList.addEventListener('change', listener);
    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
  }, []);
  return prefersReducedMotion;
}

export default usePrefersReducedMotion;
