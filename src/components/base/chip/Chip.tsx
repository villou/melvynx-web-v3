import React from 'react';

type ChipProps = {
  icon: React.ReactNode;
  title: string;
};

export function Chip({ icon, title }: ChipProps) {
  return (
    <div className="flex border-4 border-primary rounded-full gap-2 items-center py-1 px-2 w-fit">
      {icon}
      <span>{title}</span>
    </div>
  );
}
