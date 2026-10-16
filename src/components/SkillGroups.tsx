import { brandOf } from '../brands';
import type { SkillGroups as SkillGroupsData } from '../types';
import { BrandIcon } from './BrandIcon';
import { SectionHeading } from './SectionHeading';

interface SkillGroupsProps {
  skills: SkillGroupsData;
}

const GROUPS = [
  { key: 'languages', label: '语言' },
  { key: 'frameworks', label: '框架' },
  { key: 'engineering', label: '工程化' },
  { key: 'tools', label: '工具' },
  { key: 'infra', label: '基础设施' },
] as const;

export function SkillGroups({ skills }: SkillGroupsProps) {
  const visibleGroups = GROUPS.filter((group) => skills[group.key].length > 0);

  if (visibleGroups.length === 0) {
    return null;
  }

  return (
    <section className="mb-section" aria-labelledby="skills-heading">
      <SectionHeading id="skills-heading" title="技能" />
      <div className="grid gap-3">
        {visibleGroups.map((group) => {
          const items = skills[group.key];

          return (
            <div
              className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-baseline gap-x-4"
              key={group.key}
            >
              <h3 className="text-sm text-muted">{group.label}</h3>
              <ul className="flex flex-wrap gap-1.5">
                {items.map((skill) => {
                  const brand = brandOf(skill);
                  const chip =
                    'inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-sm';

                  return (
                    <li key={skill} translate="no">
                      {brand ? (
                        <a
                          className={`group cursor-pointer ${chip}`}
                          href={brand.href}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {brand.icon ? (
                            <BrandIcon colorOnHover icon={brand.icon} />
                          ) : null}
                          {skill}
                        </a>
                      ) : (
                        <span className={chip}>{skill}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
