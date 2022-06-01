import React from 'react';
import WaveDivider from '../base/WaveDivider';

export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 items-center">
      <div className="mt-10 mb-5">
        <WaveDivider />
      </div>

      <p>Designed and built by Melvyn Malherbe</p>
      <p>@Copywrite Melvynx</p>
    </footer>
  );
}
