import React from 'react';
import { animated } from 'react-spring';
import useBoop from '~/hooks/useBoop';

type HeaderItemProps = {
  place: number;
  text: string;
  link: string;
  className?: string;
};

export default function HeaderItem({
  place,
  text,
  link,
  className,
}: HeaderItemProps) {
  const [style, trigger] = useBoop({ rotation: 4 });

  return (
    <animated.li
      style={style}
      onMouseEnter={() => trigger()}
      className={className}
    >
      <a href={link} className="text-lg md:text-base">
        <span className="font-mono text-primary">{place}.</span>{' '}
        <span>{text}</span>
      </a>
    </animated.li>
  );
}
