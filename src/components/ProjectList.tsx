import type { Project } from '../types';
import { BulletList } from './BulletList';
import { SectionHeading } from './SectionHeading';

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="mb-section" aria-labelledby="projects-heading">
      <SectionHeading id="projects-heading" title="项目" />
      <div className="divide-y divide-border">
        {projects.map((project) => (
          <article className="py-4 first:pt-0 last:pb-0" key={project.name}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="min-w-0 text-lg font-medium break-words">
                {project.name}
              </h3>
              <p className="text-sm text-muted tabular-nums">
                {project.start} – {project.end}
              </p>
            </div>
            <p className="mt-1 text-sm text-muted">{project.role}</p>
            <BulletList items={project.bullets} />
          </article>
        ))}
      </div>
    </section>
  );
}
