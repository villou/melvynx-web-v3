import { useEffect, useState } from 'react';
import { isServerSide } from '~/utils/isServerSide';

const tailwindQueries = {
  xs: 'screen and (min-width: 0px)',
  sm: 'screen and (min-width: 576px)',
  md: 'screen and (min-width: 768px)',
  lg: 'screen and (min-width: 992px)',
  xl: 'screen and (min-width: 1200px)',
};

type QueryKeys = keyof typeof tailwindQueries;

function useMediaQuery(queryKey: QueryKeys): boolean {
  const query = tailwindQueries[queryKey];

  const getMatches = (query: string): boolean => {
    if (!isServerSide()) {
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

    handleChange();

    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return matches;
}

export default useMediaQuery;
