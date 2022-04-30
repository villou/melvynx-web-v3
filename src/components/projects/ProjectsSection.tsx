import React from 'react';
import { Section } from '../landing-page/Section';
import { ProjectCard } from './project-card/ProjectCard';
import { projectsData } from './projects.data';

export default function ProjectsSection() {
  return (
    <Section title="Projects">
      <div className="flex flex-wrap gap-8">
        {projectsData.map((project) => (
          <ProjectCard className="flex-1" project={project} />
        ))}
      </div>
    </Section>
  );
}
