import clsx from 'clsx';
import Image from 'next/image';
import { Section } from '../Section';
import styles from './CoursesSection.module.css';

const height = 350;

export function CoursesSection() {
  return (
    <Section title="Courses">
      <div className={clsx(styles.grid, 'h-fit')}>
        <div className={clsx(styles.epicReact, styles.forceHeight)}>
          <Image
            objectFit="cover"
            src="/images/epic-react.png"
            width={1144}
            height={height}
            alt="epic react dev"
          />
        </div>
        <div className={styles.threeJs}>
          <Image
            layout="fill"
            objectFit="cover"
            src="/images/threejs-journey.png"
            width={1200}
            height={height}
            alt="threejs journey"
          />
        </div>
        <div className={styles.cssForJsDev}>
          <Image
            layout="fill"
            objectFit="cover"
            src="/images/css-for-js-dev.jpeg"
            width={1280}
            height={height}
            alt="css-for-js dev courses"
          />
        </div>
        <div className={styles.androidDev}>
          <Image
            layout="fill"
            objectFit="cover"
            src="/images/android-dev.png"
            width={640}
            height={height}
            alt="android dev courses"
          />
        </div>
      </div>
    </Section>
  );
}
