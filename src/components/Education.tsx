import type { Education as EducationData } from '../types';
import { BulletList } from './BulletList';
import { SectionHeading } from './SectionHeading';

interface EducationProps {
  education: EducationData;
}

export function Education({ education }: EducationProps) {
  return (
    <section className="mb-section" aria-labelledby="education-heading">
      <SectionHeading id="education-heading" title="教育" />
      <article>
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="min-w-0 text-lg font-medium break-words">
            {education.school}
          </h3>
          <p className="text-sm text-muted tabular-nums">
            {education.start} – {education.end}
          </p>
        </div>
        <p className="mt-1 text-sm text-muted">
          {education.degree} · {education.major}
        </p>
        {education.certificates.length > 0 ? (
          <>
            <h4 className="mt-3 text-sm text-muted">资格证书</h4>
            <BulletList items={education.certificates} />
          </>
        ) : null}
      </article>
    </section>
  );
}
