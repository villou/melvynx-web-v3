import React from 'react';
import { FadeUpInView } from '../hooks-based/InView';
import { Section } from '../landing-page/Section';
import { ProjectCard } from './project-card/ProjectCard';
import { projectsData } from './projects.data';

export default function ProjectsSection() {
  return (
    <Section title="Projects">
      <div className="flex flex-wrap gap-8">
        {projectsData.map((project, i) => (
          <FadeUpInView key={project.title} delay={100 * i}>
            <div className="flex-1">
              <ProjectCard key={project.title} project={project} />
            </div>
          </FadeUpInView>
        ))}
      </div>
    </Section>
  );
}
