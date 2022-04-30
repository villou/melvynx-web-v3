import React, { PropsWithChildren } from 'react';

export function Section({
  children,
  title,
}: PropsWithChildren<{ title: string }>) {
  return (
    <div className="w-full">
      <h2 className="mb-8 text-4xl text-center">{title}</h2>
      {children}
    </div>
  );
}
