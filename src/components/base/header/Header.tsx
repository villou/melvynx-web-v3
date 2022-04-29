import React from 'react';
import { headerData } from './header-data';
import HeaderItem from './HeaderItem';

export function Header() {
  return (
    <div className="flex items-center">
      <img
        className="w-10 h-10 mr-auto"
        src="/icons/melvynx.svg"
        alt="Melvynx"
      />
      <nav>
        <ul className="flex items-baseline gap-4">
          {headerData.map((item, index) => (
            <HeaderItem key={index} place={index} {...item} />
          ))}
        </ul>
      </nav>
    </div>
  );
}
