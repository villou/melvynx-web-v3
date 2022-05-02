import React, { PropsWithChildren } from 'react';

export function Section({
  children,
  title,
}: PropsWithChildren<{ title: string }>) {
  return (
    <div className="w-full">
      <h2 className="mb-8 sm:mb-10 text-4xl text-center" id={title}>
        {title}
      </h2>
      {children}
    </div>
  );
}
