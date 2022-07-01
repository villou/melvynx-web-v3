import clsx from 'clsx';
import Image from 'next/image';
import { FadeUpInView } from '~/components/hooks-based/InView';
import { Section } from '../Section';
import styles from './CoursesSection.module.css';

const height = 350;

type Course = {
  src: string;
  alt: string;
  width: number;
  className?: string;
};

const courses: Course[] = [
  {
    src: '/images/epic-react.png',
    alt: 'Epic React dev',
    width: 1144,
    className: clsx(styles.epicReact, styles.forceHeight),
  },
  {
    src: '/images/threejs-journey.png',
    alt: 'Threejs journey',
    width: 1200,
    className: styles.threeJs,
  },
  {
    src: '/images/css-for-js-dev.jpeg',
    alt: 'CSS for JS dev',
    width: 1280,
    className: styles.cssForJsDev,
  },
  {
    src: '/images/android-dev.png',
    alt: 'android dev courses',
    width: 640,
    className: styles.androidDev,
  },
];

export function CoursesSection() {
  return (
    <Section title="Courses">
      <div className={clsx(styles.grid, 'h-fit')}>
        {courses.map((course) => (
          <CourseImage
            src={course.src}
            className={course.className}
            key={course.src}
            alt={course.alt}
            width={course.width}
            height={height}
          />
        ))}
      </div>
    </Section>
  );
}

function CourseImage({
  className,
  src,
  alt,
  width,
  height,
}: Course & {
  height: number;
}) {
  return (
    <FadeUpInView delay={400}>
      <div className={className}>
        <Image
          layout="fill"
          objectFit="cover"
          src={src}
          width={width}
          height={height}
          alt={alt}
        />
      </div>
    </FadeUpInView>
  );
}
