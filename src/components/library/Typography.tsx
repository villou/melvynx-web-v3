import { PropsWithChildren } from 'react';

export const Body = ({ children }: PropsWithChildren<unknown>) => (
  <p className="text-base text-textSecondary">{children}</p>
);
