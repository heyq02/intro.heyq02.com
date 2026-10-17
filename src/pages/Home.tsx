import { useEffect, useState } from 'react';
import { brandIcon } from '../brands';
import { BrandIcon } from '../components/BrandIcon';
import { SectionHeading } from '../components/SectionHeading';
import { Page } from '../layout';
import { avatar, experiences, marks, places, projects } from '../site';

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

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-3.5 shrink-0"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
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
      <div className="grid items-start gap-8 lg:grid-cols-[13.5rem_minmax(0,1fr)_11.5rem] lg:gap-x-12 lg:gap-y-10">
        <header className="lg:row-span-2">
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
            Ari · 贺
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-pretty">
            AI 全栈研发，南京邮电大学生物医学工程本科毕业。专注前端工程化，推动
            AI 在业务场景中落地。
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {places.map((place) => {
              const icon = brandIcon(place.label);

              return (
                <li key={place.label}>
                  <a
                    aria-label={`${place.label} ${place.detail}`}
                    className="flex size-9 items-center justify-center rounded-full border border-accent/40 text-accent transition-colors hover:border-accent hover:bg-accent hover:text-background"
                    href={place.href}
                    rel="noreferrer"
                    target={
                      place.href.startsWith('http') ? '_blank' : undefined
                    }
                    title={place.detail}
                  >
                    {icon ? <BrandIcon icon={icon} /> : <MailIcon />}
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="mt-4 text-xs text-muted">
            <time dateTime={time}>北京 {time}</time>
          </p>
        </header>

        <section aria-labelledby="work-heading">
          <SectionHeading id="work-heading" title="经历" />
          <ul className="divide-y divide-border">
            {experiences.map((job) => (
              <li
                className="py-3 first:pt-0 last:pb-0"
                key={`${job.company}-${job.start}`}
              >
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                  <h3 className="flex min-w-0 flex-wrap items-center gap-1.5 font-medium">
                    <a
                      className="leading-none transition-colors hover:text-accent"
                      href={job.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {job.company}
                    </a>
                    {job.intern ? (
                      <span className="inline-flex h-4 shrink-0 items-center rounded-full border border-accent/40 px-1.5 text-[10px] leading-none text-accent">
                        实习
                      </span>
                    ) : null}
                  </h3>
                  <p className="shrink-0 text-xs text-muted tabular-nums">
                    {job.start} – {job.end}
                  </p>
                </div>
                <p className="text-xs text-muted">{job.role}</p>
                <p className="mt-1 text-sm leading-relaxed text-pretty">
                  {job.summary}
                </p>
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

        <section
          aria-labelledby="code-heading"
          className="lg:col-span-2 lg:col-start-2"
        >
          <SectionHeading id="code-heading" title="开源" />
          <ul className="grid gap-x-8 sm:grid-cols-2">
            {projects.map((project) => (
              <li className="border-b border-border py-2.5" key={project.name}>
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
      </div>
    </Page>
  );
}
