// in progress

import clsx from 'clsx';
import { cloneElement, RefObject, useRef } from 'react';
import { useInView } from '~/hooks/useInView';

export function InView({
  children,
}: {
  children: (ref: RefObject<never>, inView: boolean) => JSX.Element;
}): JSX.Element {
  const ref = useRef<never>(null);
  const inView = useInView(ref, { threshold: 0.5 });

  return children(ref, inView);
}

export function FadeUpInView({
  children,
  delay = 0,
  threshold = 0.5,
}: {
  children: JSX.Element;
  delay?: number;
  threshold?: number;
}): JSX.Element {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: threshold, triggerOnce: true });

  return cloneElement(children, {
    ref: ref,
    className: clsx(children.props.className, 'fadeup-enter', {
      'fadeup-enter-done': inView,
    }),
    style: { transitionDelay: `${delay}ms`, ...children.props.style },
  });
}
