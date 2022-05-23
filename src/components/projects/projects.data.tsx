import { SiCsharp, SiMaterialui, SiNextdotjs, SiReact } from 'react-icons/si';
import { Project } from './projects.types';

export const projectsData: Project[] = [
  {
    title: 'Random student',
    description:
      'Random app to choose student to present his project. I made this app for my teacher who using an ugly website. You can use this site to random everything, obviously.',
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
      github: 'https://github.com/Melvynx/random-student',
      website: 'https://random-student.vercel.app/',
    },
  },
  {
    title: 'HolyDraw',
    description:
      "HolyDraw is a game application with the concept of GarticPhone. It's my first game app created with friends. I'm happy with the result. Unfortunately, the game is now closed.",
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
      github: 'https://github.com/Melvynx/holydraw',
      website: 'https://holydraw.vercel.app/',
    },
  },
  {
    title: 'QoQlick',
    description:
      'Clicker app to win items when you are the X th to click. The project was created during a course and inspired by QoQa.ch. The website can no longer work.',
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
      github: 'https://github.com/Melvynx/qoqo-app',
      website: 'https://qoqo.azurewebsites.net',
    },
  },
  // {
  //   title: '',
  // },
];
