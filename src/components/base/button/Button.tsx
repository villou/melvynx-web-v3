import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import { Loader } from '../loader/Loader';
import styles from './Button.module.css';

type ButtonProps = {
  variant?: 'light' | 'primary';
  icon?: React.ReactNode;
  href?: string;
  loading?: boolean;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const getLinkElement = (href: string) => (href.includes('http') ? 'a' : Link);

export function Button({
  icon,
  children,
  variant,
  href = '',
  loading,
  disabled,
  ...props
}: ButtonProps) {
  const LinkIfNeeded = href ? getLinkElement(href) : 'div';

  return (
    <button {...props} disabled={disabled}>
      <LinkIfNeeded href={href}>
        <span
          className={clsx(
            'px-4 py-3 bg-paper rounded-full flex gap-2 items-center justify-center text-white text-lg transition',
            'hover:bg-paperLight',
            {
              'bg-primary text-black hover:bg-primaryDark':
                variant === 'primary',
              [styles.button]: !disabled,
              'bg-gray-600 hover:bg-gray-600': disabled,
            }
          )}
        >
          {loading ? (
            <Loader />
          ) : (
            <>
              {icon}
              <span>{children}</span>
            </>
          )}
        </span>
      </LinkIfNeeded>
    </button>
  );
}
