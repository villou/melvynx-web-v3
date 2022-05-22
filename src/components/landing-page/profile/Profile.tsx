/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import Image from 'next/image';
import { animated, useSpring } from 'react-spring';
import ContactButtons from '../ContactButtons';
import styles from './Profile.module.css';
import { IoIosArrowDown } from 'react-icons/io';
import { useHasScroll } from '~/hooks/useHasScroll';

type ProfileProps = {
  className?: string;
  upperName?: string;
  name?: string;
  descriptionHighlight?: string;
  description?: string;
  fullScreenSize?: boolean;
};

export const Profile = ({
  className,
  upperName = "Hey there! I'm -",
  name = 'Melvyn Malherbe',
  descriptionHighlight = 'Software Enginner.',
  description = 'Self-taught since I was 12 years old, then apprenticed in a company',
  fullScreenSize = true,
}: ProfileProps) => (
  <div
    className={clsx(
      'relative flex justify-center sm:justify-between w-full items-center gap-6 sm:gap-12 flex-col-reverse sm:flex-row',
      { [styles.profileHeight]: fullScreenSize },
      className
    )}
  >
    <div className="flex flex-col gap-6 sm:gap-10 w-full">
      <div className="w-fit flex flex-col gap-2 relative">
        <img
          src="/images/point-bg.svg"
          alt="decoration point"
          className={styles.pointBg}
        />
        <p className="text-gradient-primary text-2xl font-bold relative right-2">
          {upperName}
        </p>

        <h1 className="header-h1-fluid font-bold text-gradient-primary">
          {name}
        </h1>
        <p className="header-h2-fluid text-textSecondary">
          <b className="text-textPrimary">{descriptionHighlight}</b>{' '}
          {description}
        </p>
      </div>
      <ContactButtons
        activeLinks={['github', 'newsletter', 'linkedin', 'twitter']}
      />
    </div>
    <div className="w-fit">
      <Picture />
    </div>
    <ScrollMore />
  </div>
);

const ScrollMore = () => {
  const hasScroll = useHasScroll();

  const style = useSpring({
    from: { transform: 'translateY(0px)', opacity: 0 },
    to: { transform: 'translateY(20px)', opacity: 1 },
    loop: hasScroll ? false : { reverse: true },
    delay: 5000,
    config: {
      tension: 100,
      friction: 12,
      mass: 1.2,
    },
  });

  if (hasScroll) {
    return null;
  }

  return (
    <div className="absolute hidden md:flex bottom-4 left-0 right-0 items-center flex-col">
      <animated.div style={style}>
        <IoIosArrowDown style={{ width: 40, height: 40 }} />
      </animated.div>
      <animated.div style={style}>
        <IoIosArrowDown
          style={{ width: 40, height: 40, position: 'relative', bottom: 30 }}
        />
      </animated.div>
    </div>
  );
};

const Picture = () => {
  const [style, api] = useSpring(() => ({
    from: { transform: 'scale(0.5) rotate(-20deg)' },
    to: { transform: 'scale(1) rotate(0deg)' },
    config: {
      tension: 100,
      friction: 12,
      mass: 1.2,
    },
  }));
  return (
    <animated.div
      style={style}
      onClick={() => {
        api.start();
      }}
      className="w-44 h-44 sm:w-fit sm:h-fit"
    >
      <Image
        width={400}
        height={400}
        className={clsx('rounded-full')}
        src="/images/my-face.png"
        alt="face of melvyn"
      />
    </animated.div>
  );
};
