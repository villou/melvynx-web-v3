import clsx from 'clsx';
import styles from './Loader.module.css';

type LoaderProps = {
  strokeColor?: string;
};

export const Loader = ({ strokeColor }: LoaderProps) => (
  // By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL
  <svg
    width="38"
    height="38"
    viewBox="0 0 38 38"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#fff"
    className={clsx(styles.loader)}
  >
    <g fill="none" fillRule="evenodd">
      <g transform="translate(1 1)" strokeWidth="2">
        <circle
          stroke={strokeColor}
          strokeOpacity=".25"
          cx="18"
          cy="18"
          r="18"
        />
        <path stroke={strokeColor} d="M36 18c0-9.94-8.06-18-18-18" />
      </g>
    </g>
  </svg>
);
