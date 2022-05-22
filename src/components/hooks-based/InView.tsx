import React from 'react';

export default function InView() {
  const ref = React.useRef<HTMLDivElement>(null);

  return () => <div ref={ref}>InView</div>;
}
