import React from 'react';
import { SkillItem } from './types';
import styles from './SkillsList.module.css';
import clsx from 'clsx';

type SkillsListType = {
  title: string;
  items: SkillItem[];
};

export function SkillsList({ title, items }: SkillsListType) {
  return (
    <div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <ul className="flex flex-col gap-2 mt-4">
        {items.map((item) => (
          <SkillItem key={item.title} {...item}>
            {item.title}
          </SkillItem>
        ))}
      </ul>
    </div>
  );
}

const SkillItem = ({
  children,
  icon,
  isRainbow,
}: React.PropsWithChildren<Omit<SkillItem, 'title'>>) => {
  return (
    <li className={clsx('flex items-center gap-2 text-lg', {})}>
      <span className={clsx(styles.icon, { [styles.rainbowIcon]: isRainbow })}>
        {icon}
      </span>
      <span className={clsx({ 'text-gradient-primary': isRainbow })}>
        {children}
      </span>
    </li>
  );
};
