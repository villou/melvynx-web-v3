import clsx from 'clsx';
import Image from 'next/image';
import { FadeUpInView } from '~/components/hooks-based/InView';
import { Section } from '../Section';
import styles from './CoursesSection.module.css';

const height = 350;

export function CoursesSection() {
  return (
    <Section title="Courses">
      <div className={clsx(styles.grid, 'h-fit')}>
        <FadeUpInView delay={100}>
          <div className={clsx(styles.epicReact, styles.forceHeight)}>
            <Image
              objectFit="cover"
              src="/images/epic-react.png"
              width={1144}
              height={height}
              alt="epic react dev"
            />
          </div>
        </FadeUpInView>
        <FadeUpInView delay={200}>
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
        </FadeUpInView>
        <FadeUpInView delay={300}>
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
        </FadeUpInView>
        <FadeUpInView delay={400}>
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
        </FadeUpInView>
      </div>
    </Section>
  );
}
