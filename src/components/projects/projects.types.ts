import React from 'react';

export type Project = {
  title: string;
  emoji: string;
  description: string;
  technologies: Technologies[];
  links: {
    github?: string;
    website?: string;
  };
};

export type Technologies = {
  title: string;
  icon: React.ReactNode;
};
