import React from 'react';
import { ProjectCard } from './project-card/ProjectCard';
import { projectsData } from './projects.data';

export default function ProjectsSection() {
  return (
    <div>
      <h2 className="text-4xl text-center">Projects</h2>
      <div className="flex flex-wrap gap-8 mt-8">
        {projectsData.map((project) => (
          <ProjectCard className="flex-1" project={project} />
        ))}
      </div>
    </div>
  );
}
