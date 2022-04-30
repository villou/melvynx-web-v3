import clsx from 'clsx';
import Image from 'next/image';
import ContactButton from './ContactButton';
import styles from './Profile.module.css';

export const Profile = ({ className }: { className?: string }) => (
  <div
    className={clsx(
      'flex justify-center sm:justify-between w-full items-center gap-6 sm:gap-12  flex-col-reverse sm:flex-row',
      styles.profileHeight
    )}
  >
    <div className="flex flex-col gap-6 sm:gap-10 w-full">
      <div className="w-fit flex flex-col gap-2 relative">
        <img src="/images/point-bg.svg" className={styles.pointBg} />
        <p className="text-gradient-primary text-2xl font-bold relative right-2">
          Hey there! I'm -
        </p>
        <h1 className="text-7xl font-bold text-gradient-primary">
          Melvyn Malherbe.
        </h1>
      </div>
      <p className="text-4xl text-textSecondary">
        <b className="text-textPrimary">Software Enginner.</b> Self-taught from
        a young age and then in a company
      </p>
      <ContactButton />
    </div>
    <div className="w-fit">
      <div className="w-32 h-32 sm:w-fit sm:h-fit">
        <Image
          width={400}
          height={400}
          className={clsx('rounded-full', styles.picture)}
          src="/images/my-face.png"
          alt="face of melvyn"
        />
      </div>
    </div>
  </div>
);
