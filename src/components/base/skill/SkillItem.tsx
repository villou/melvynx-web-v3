import clsx from 'clsx';
import styles from './SkillsList.module.css';
import { SkillItem as SkillItemType } from './types';

export const SkillItem = ({
  children,
  icon,
  isRainbow,
}: React.PropsWithChildren<Omit<SkillItemType, 'title'>>) => (
  <li className={clsx('flex items-center gap-2 text-lg', {})}>
    <span className={clsx(styles.icon, { [styles.rainbowIcon]: isRainbow })}>
      {icon}
    </span>
    <span className={clsx({ 'text-gradient-primary font-bold': isRainbow })}>
      {children}
    </span>
  </li>
);
