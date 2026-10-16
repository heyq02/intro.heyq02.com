import type { Experience } from '../types';
import { BulletList } from './BulletList';
import { SectionHeading } from './SectionHeading';

interface ExperienceListProps {
  experiences: Experience[];
}

function faviconOf(href: string) {
  return new URL('/favicon.ico', href).href;
}

export function ExperienceList({ experiences }: ExperienceListProps) {
  if (experiences.length === 0) {
    return null;
  }

  return (
    <section className="mb-section" aria-labelledby="experience-heading">
      <SectionHeading id="experience-heading" title="经历" />
      <div className="divide-y divide-border">
        {experiences.map((experience) => (
          <article
            className="py-4 first:pt-0 last:pb-0"
            key={`${experience.company}-${experience.start}`}
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="min-w-0 text-lg font-medium break-words">
                {experience.href ? (
                  <a
                    className="inline-flex items-center gap-2 underline decoration-foreground/25 underline-offset-4 hover:decoration-foreground"
                    href={experience.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      alt=""
                      className="size-5 rounded-sm object-contain"
                      height={20}
                      src={faviconOf(experience.href)}
                      width={20}
                      onError={(event) => {
                        event.currentTarget.hidden = true;
                      }}
                    />
                    {experience.company}
                  </a>
                ) : (
                  experience.company
                )}
              </h3>
              <p className="text-sm text-muted tabular-nums">
                {experience.start} – {experience.end}
              </p>
            </div>
            <p className="mt-1 text-sm text-muted">{experience.role}</p>
            <BulletList items={experience.bullets} />
          </article>
        ))}
      </div>
    </section>
  );
}
