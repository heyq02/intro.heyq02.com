import { useEffect, useState } from 'react';
import { brandIcon } from '../brands';
import { BrandIcon } from '../components/BrandIcon';
import { SectionHeading } from '../components/SectionHeading';
import { Page } from '../layout';
import { avatar, marks, places, projects } from '../site';

function beijingClock(date: Date) {
  return new Intl.DateTimeFormat('zh-CN', {
    timeZone: 'Asia/Shanghai',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).format(date);
}

function markAbbr(mark: string) {
  return mark.slice(0, 2);
}

export function Home() {
  const [time, setTime] = useState(() => beijingClock(new Date()));

  useEffect(() => {
    const id = window.setInterval(() => {
      setTime(beijingClock(new Date()));
    }, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <Page kicker="PROFILE" page="home" wide>
      <div className="grid items-start gap-8 lg:grid-cols-[13.5rem_minmax(0,1fr)_11.5rem] lg:gap-12">
        <header>
          <div className="relative mb-5 w-fit">
            <span
              aria-hidden="true"
              className="absolute top-2 left-2 size-28 rounded-full bg-accent/15 sm:size-32"
            />
            <img
              alt=""
              className="relative size-28 rounded-full object-cover ring-4 ring-background sm:size-32"
              height={128}
              src={avatar}
              width={128}
            />
          </div>
          <h1 className="text-3xl font-medium tracking-tight text-accent">
            贺永琪
          </h1>
          <p className="mt-1 text-sm text-muted">Ari</p>
          <p className="mt-3 text-sm leading-relaxed text-pretty">
            前端开发，南京邮电大学生物医学工程，编写 Rspack 插件与 Rstack 预设。
          </p>
          <dl className="mt-5 grid grid-cols-[4.75rem_minmax(0,1fr)] gap-x-3 gap-y-1.5 text-sm">
            {places.map((place) => (
              <div className="contents" key={place.label}>
                <dt className="text-muted">{place.label}</dt>
                <dd className="min-w-0">
                  <a
                    className="break-words transition-colors hover:text-accent"
                    href={place.href}
                    rel="noreferrer"
                    target={
                      place.href.startsWith('http') ? '_blank' : undefined
                    }
                  >
                    {place.detail}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-xs text-muted">
            <time dateTime={time}>北京 {time}</time>
          </p>
        </header>

        <section aria-labelledby="code-heading">
          <SectionHeading id="code-heading" title="开源" />
          <ul className="divide-y divide-border">
            {projects.map((project) => (
              <li className="py-2.5 first:pt-0 last:pb-0" key={project.name}>
                <a
                  className="group block"
                  href={project.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="flex items-baseline justify-between gap-3">
                    <span
                      className="font-medium break-words transition-colors group-hover:text-accent"
                      translate="no"
                    >
                      {project.name}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-sm text-accent/70 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
                    >
                      ↗
                    </span>
                  </span>
                  <span className="mt-0.5 block text-sm leading-snug text-muted">
                    {project.summary}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="skills-heading">
          <SectionHeading id="skills-heading" title="技能" />
          <ul className="grid grid-cols-3 gap-x-2 gap-y-4">
            {marks.map((mark) => {
              const icon = brandIcon(mark);

              return (
                <li
                  className="flex flex-col items-center gap-1.5 text-center"
                  key={mark}
                  translate="no"
                >
                  <span className="flex size-12 items-center justify-center rounded-full border border-accent/40 text-accent">
                    {icon ? (
                      <BrandIcon icon={icon} size="md" />
                    ) : (
                      <span className="text-xs font-medium">
                        {markAbbr(mark)}
                      </span>
                    )}
                  </span>
                  <span className="text-[11px] leading-tight text-muted">
                    {mark}
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </Page>
  );
}
