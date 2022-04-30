import { SkillList } from './types';
import {
  SiMaterialui,
  SiStyledcomponents,
  SiThreedotjs,
  SiSvelte,
  SiCss3,
  SiAndroid,
  SiFastify,
  SiIos,
  SiCsharp,
  SiPostgresql,
  SiGithub,
  SiJest,
  SiVercel,
  SiFirebase,
  SiDocker,
} from 'react-icons/si';

export const skillsData: SkillList[] = [
  {
    title: 'Design',
    items: [
      {
        title: 'figma',
        icon: <img src="/icons/figma-rainbow.svg" alt="Figma" />,
        isRainbow: true,
      },
      {
        title: 'material-ui',
        icon: <SiMaterialui />,
      },
      {
        title: 'styled-components',
        icon: <SiStyledcomponents />,
      },
    ],
  },
  {
    title: 'Front-end',
    items: [
      {
        title: 'typescript',
        icon: <img src="/icons/typescript-rainbow.svg" alt="typescript" />,
        isRainbow: true,
      },
      {
        title: 'three.js',
        icon: <SiThreedotjs />,
      },
      {
        title: 'react',
        icon: <img src="/icons/react-rainbow.svg" alt="React" />,
        isRainbow: true,
      },
      {
        title: 'svelte',
        icon: <SiSvelte />,
      },
      {
        title: 'css',
        icon: <SiCss3 />,
      },
      {
        title: 'android',
        icon: <SiAndroid />,
      },
      {
        title: 'SwiftUI',
        icon: <SiIos />,
      },
    ],
  },
  {
    title: 'Back-end',
    items: [
      {
        title: 'rails',
        icon: <img src="/icons/rails-rainbow.svg" alt="Rails" />,
        isRainbow: true,
      },
      {
        title: 'fastify',
        icon: <SiFastify />,
      },
      { title: 'csharp', icon: <SiCsharp /> },
      {
        title: 'postgresql',
        icon: <SiPostgresql />,
      },
    ],
  },
  {
    title: 'Other',
    items: [
      {
        title: 'git & github',
        icon: <SiGithub />,
      },
      {
        title: 'test ruby & jest',
        icon: <SiJest />,
      },
      {
        title: 'vercel, aws & heroku',
        icon: <img src="/icons/vercel-rainbow.svg" />,
      },
      {
        title: 'firebase',
        icon: <SiFirebase />,
      },
      {
        title: 'docker',
        icon: <SiDocker />,
      },
    ],
  },
];
