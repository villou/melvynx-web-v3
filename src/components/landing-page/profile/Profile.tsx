import clsx from 'clsx';
import Image from 'next/image';
import { PropsWithChildren } from 'react';
import { animated, useSpring } from 'react-spring';
import ContactButton from '../ContactButton';
import styles from './Profile.module.css';

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
      'flex justify-center sm:justify-between w-full items-center gap-6 sm:gap-12 flex-col-reverse sm:flex-row',
      { [styles.profileHeight]: fullScreenSize },
      className
    )}
  >
    <div className="flex flex-col gap-6 sm:gap-10 w-full">
      <div className="w-fit flex flex-col gap-2 relative">
        <img src="/images/point-bg.svg" className={styles.pointBg} />
        <p className="text-gradient-primary text-2xl font-bold relative right-2">
          {upperName}
        </p>
        <Title>{name}.</Title>
      </div>
      <p className="text-3xl sm:text-4xl text-textSecondary">
        <b className="text-textPrimary">{descriptionHighlight}</b> {description}
      </p>
      <ContactButton />
    </div>
    <div className="w-fit">
      <Picture />
    </div>
  </div>
);

const Picture = () => {
  const [style, api] = useSpring(() => ({
    from: { transform: 'scale(0) rotate(-160deg)' },
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
        className={clsx('rounded-full', styles.picture)}
        src="/images/my-face.png"
        alt="face of melvyn"
      />
    </animated.div>
  );
};

const Title = ({ children }: PropsWithChildren<{}>) => {
  const style = useSpring({
    from: { transform: 'scale(0)' },
    to: { transform: 'scale(1)' },
    config: {
      tension: 100,
      friction: 10,
    },
  });

  return (
    <animated.h1
      style={style}
      className="text-6xl sm:text-7xl font-bold text-gradient-primary"
    >
      {children}
    </animated.h1>
  );
};
