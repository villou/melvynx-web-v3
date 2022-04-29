import React from 'react';

type HeaderItemProps = {
  place: number;
  text: string;
  link: string;
};

export default function HeaderItem({ place, text, link }: HeaderItemProps) {
  return (
    <li>
      <a href={link} className="text-base">
        <span className="font-mono text-primary">{place}.</span>{' '}
        <span>{text}</span>
      </a>
    </li>
  );
}
