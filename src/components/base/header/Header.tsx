import React from 'react';
import { CgClose } from 'react-icons/cg';
import { HiMenu } from 'react-icons/hi';
import { FadeUpInView } from '~/components/hooks-based/InView';
import { headerData } from './header.data';
import HeaderItem from './HeaderItem';

export function Header() {
  return (
    <header>
      <HeaderDesktop />
      <HeaderMobile />
    </header>
  );
}

const HeaderDesktop = () => (
  <div className="items-center hidden md:flex py-4">
    <FadeUpInView>
      <img
        className="w-10 h-10 mr-auto"
        src="/icons/melvynx.svg"
        alt="Melvynx"
      />
    </FadeUpInView>
    <nav>
      <FadeUpInView delay={100}>
        <ul className="flex items-baseline gap-6">
          {headerData.map((item, index) => (
            <HeaderItem
              key={index}
              place={index}
              className={item.customClasses}
              {...item}
            />
          ))}
        </ul>
      </FadeUpInView>
    </nav>
  </div>
);

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="items-center flex md:hidden">
      <img
        className="w-10 h-10 mr-auto"
        src="/icons/melvynx.svg"
        alt="Melvynx"
      />
      <button onClick={() => setIsOpen(true)}>
        <HiMenu style={{ width: 32, height: 32 }} />
      </button>
      {isOpen && <Drawer onClose={() => setIsOpen(false)} />}
    </div>
  );
};

const Drawer = ({ onClose }: { onClose: () => void }) => (
  <div
    className="fixed inset-0 z-10 backdrop-blur-sm"
    onClick={() => onClose()}
  >
    <nav className="w-2/4 flex flex-col items-end h-full animate-swipeFromLeft justify-center gap-8 p-8 bg-paper ml-auto">
      <button className="absolute top-4 right-4">
        <CgClose style={{ width: 32, height: 32 }} />
      </button>
      <img className="w-16 h-16 mb-4" src="/icons/melvynx.svg" alt="Melvynx" />
      <ul className="flex flex-col items-baseline gap-8">
        {headerData.map((item, index) => (
          <HeaderItem
            key={index}
            place={index}
            className={item.customClasses}
            {...item}
          />
        ))}
      </ul>
    </nav>
  </div>
);
