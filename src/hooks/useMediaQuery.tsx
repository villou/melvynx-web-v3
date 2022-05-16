import { useEffect, useState } from 'react';

const tailwindQueries = {
  xs: 'screen and (min-width: 0px)',
  sm: 'screen and (min-width: 576px)',
  md: 'screen and (min-width: 768px)',
  lg: 'screen and (min-width: 992px)',
  xl: 'screen and (min-width: 1200px)',
};

type QueryKeys = keyof typeof tailwindQueries;

const isRenderingOnServer = typeof window === 'undefined';

function useMediaQuery(queryKey: QueryKeys): boolean {
  const query = tailwindQueries[queryKey];

  const getMatches = (query: string): boolean => {
    // Prevents SSR issues

    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }

    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes

    handleChange();

    // Listen matchMedia

    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener('change', handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener('change', handleChange);
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return matches;
}

export default useMediaQuery;
