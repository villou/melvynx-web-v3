import React from 'react';
import { SpringValue, useSpring } from '@react-spring/web';
import { isServerSide } from '~/utils/isServerSide';
import usePrefersReducedMotion from './usePrefersReducedMotion';

const defaultTransform = 'translate(0px, 0px) rotate(0deg) scale(1)';

// https://www.joshwcomeau.com/snippets/react-hooks/use-boop/
type BoopConfig = {
  x?: number;
  y?: number;
  rotation?: number;
  scale?: number;
  timing?: number;
  springConfig?: {
    mass?: number;
    tension?: number;
    friction?: number;
  };
};

type ReturnBoop = [{ transform?: SpringValue<string> | string }, () => void];

const getAppliedStyle = (
  prefersReducedMotion: boolean,
  style: { transform: SpringValue<string> }
): ReturnBoop[0] => {
  if (isServerSide()) {
    return { transform: defaultTransform };
  }
  return prefersReducedMotion ? {} : style;
};

function useBoop({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
  springConfig = {
    tension: 300,
    friction: 10,
  },
}: BoopConfig): ReturnBoop {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isBooped, setIsBooped] = React.useState(false);
  const style = useSpring({
    transform: isBooped
      ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
      : defaultTransform,
    config: springConfig,
  });

  React.useEffect(() => {
    if (!isBooped) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);

  const trigger = React.useCallback(() => {
    setIsBooped(true);
  }, []);

  return [getAppliedStyle(prefersReducedMotion, style), trigger];
}

export default useBoop;
