import {
  SiAngular,
  SiCsharp,
  SiMaterialui,
  SiNextdotjs,
  SiReact,
} from 'react-icons/si';
import { Project } from './projects.types';

export const projectsData: Project[] = [
  {
    title: 'Random student',
    description:
      'App made in course to random the student for presentation.In react with many thing very cool and I was happy to do that.',
    emoji: '🎲',
    technologies: [
      {
        title: 'React',
        icon: <SiReact />,
      },
      {
        title: 'NextJS',
        icon: <SiNextdotjs />,
      },
      {
        title: 'Mui',
        icon: <SiMaterialui />,
      },
    ],
    links: {
      github: 'ht',
      website: 'ht',
    },
  },
  {
    title: 'HolyDraw',
    description:
      'It was a great experience to create HolyDraw, my first web game and I am very happy with the result. Unfortunately, the game is now closed.',
    emoji: '🎨',
    technologies: [
      {
        title: 'React',
        icon: <SiReact />,
      },
      {
        title: 'csharp',
        icon: <SiCsharp />,
      },
      {
        title: 'mui',
        icon: <SiMaterialui />,
      },
    ],
    links: {
      github: 'ht',
      website: 'ht',
    },
  },
  {
    title: 'QoQlick',
    description:
      'Clicker app to win some items. The project was created during a course and inspired by QoQa.ch',
    emoji: '🖱',
    technologies: [
      {
        title: 'Angular',
        icon: <SiReact />,
      },
      {
        title: 'csharp',
        icon: <SiCsharp />,
      },
    ],
    links: {
      github: 'ht',
      website: 'ht',
    },
  },
];
