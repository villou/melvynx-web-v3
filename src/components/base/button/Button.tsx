import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  variant?: 'light' | 'primary';
  icon?: React.ReactNode;
  href?: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const getLinkElement = (href: string) => (href.includes('http') ? 'a' : Link);

export function Button({ icon, children, href = '', ...props }: ButtonProps) {
  const LinkIfNeeded = href ? getLinkElement(href) : 'div';

  return (
    <button {...props}>
      <LinkIfNeeded href={href}>
        <span
          className={clsx(
            styles.button,
            'px-4 py-3 bg-paper rounded-full flex gap-2 items-center text-white text-xl transition',
            'hover:bg-paperLight'
          )}
        >
          {icon}
          <span>{children}</span>
        </span>
      </LinkIfNeeded>
    </button>
  );
}
