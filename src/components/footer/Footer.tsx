import React from 'react';
import WaveDivider from '../base/WaveDivider';
import { Body } from '../library/Typography';

export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 items-center my-8">
      <div className="mt-10 mb-5">
        <WaveDivider />
      </div>

      <Body>Designed and built by Melvyn Malherbe</Body>
      <Body>©Copyright 2022 - Melvyn Malherbe</Body>
    </footer>
  );
}
