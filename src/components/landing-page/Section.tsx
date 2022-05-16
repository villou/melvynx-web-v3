import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

export function Section({
  children,
  title,
  className,
}: PropsWithChildren<{ title: string; className?: string }>) {
  return (
    <div className={clsx(className, 'w-full')}>
      <h2
        className="mb-8 sm:mb-10 text-4xl text-center"
        id={title.toLowerCase()}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}
