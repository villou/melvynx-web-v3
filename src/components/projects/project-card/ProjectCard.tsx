import { SiGithub } from 'react-icons/si';
import { Project } from '../projects.types';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { Chip } from '~/components/base/chip';
import clsx from 'clsx';
import styles from './ProjectCard.module.css';

export const ProjectCard = ({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        className,
        'bg-paper p-8 gap-8 rounded-2xl flex flex-col',
        styles.wrapper
      )}
    >
      <div className="flex justify-between items-center">
        <p className="text-2xl">{project.emoji}</p>
        <div className="flex gap-2">
          {project.links.github && (
            <a href={project.links.github} className={styles.iconWrapper}>
              <SiGithub />
            </a>
          )}
          {project.links.website && (
            <a href={project.links.website} className={styles.iconWrapper}>
              <HiOutlineExternalLink />
            </a>
          )}
        </div>
      </div>
      <h3 className="text-3xl">{project.title}</h3>
      <p>{project.description}</p>
      <div className="flex gap-2">
        {project.technologies.map((technology) => (
          <Chip icon={technology.icon} title={technology.title} />
        ))}
      </div>
    </div>
  );
};