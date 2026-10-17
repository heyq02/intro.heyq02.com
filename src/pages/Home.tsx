import { useEffect, useState } from 'react';
import { brandIcon } from '../brands';
import { BrandIcon } from '../components/BrandIcon';
import { SectionHeading } from '../components/SectionHeading';
import { Page } from '../layout';
import {
  avatar,
  email,
  experiences,
  marks,
  phone,
  places,
  projects,
} from '../site';

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

function companyFavicon(href: string) {
  return new URL('/favicon.ico', href).href;
}

function CompanyLogo({ href }: { href: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return null;
  }

  return (
    <img
      alt=""
      className="size-4 shrink-0 object-contain"
      decoding="async"
      height={16}
      onError={() => {
        setFailed(true);
      }}
      src={companyFavicon(href)}
      width={16}
    />
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4 shrink-0"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M6.62 10.79a15.1 15.1 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.4 11.4 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4 shrink-0"
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
    <Page kicker="PROFILE" page="home">
      <div className="grid items-start gap-8 lg:grid-cols-[13.5rem_minmax(0,1fr)_11.5rem] lg:gap-x-12 lg:gap-y-10">
        <header className="lg:row-span-2">
          <div className="relative mb-5 w-fit">
            <span
              aria-hidden="true"
              className="absolute top-2 left-2 size-28 rounded-full bg-meteor-head/20 sm:size-32"
            />
            <img
              alt=""
              className="relative size-28 rounded-full object-cover ring-4 ring-background sm:size-32"
              height={128}
              src={avatar}
              width={128}
            />
          </div>
          <h1 className="brand-text text-h1 font-medium">Ari · 贺</h1>
          <p className="mt-5 text-base leading-7 text-pretty">
            AI 全栈研发，南京邮电大学生物医学工程本科毕业。专注前端工程化，推动
            AI 在业务场景中落地。
          </p>
          <ul className="mt-5 flex flex-wrap items-center gap-4">
            {places.map((place) => {
              const icon = brandIcon(place.label);
              if (!icon) {
                return null;
              }

              return (
                <li key={place.label}>
                  <a
                    aria-label={`${place.label} ${place.detail}`}
                    className="transition-opacity hover:opacity-60"
                    href={place.href}
                    rel="noreferrer"
                    target={
                      place.href.startsWith('http') ? '_blank' : undefined
                    }
                    title={place.detail}
                  >
                    <BrandIcon colored icon={icon} size="md" />
                  </a>
                </li>
              );
            })}
          </ul>
          <ul className="mt-4 grid gap-2 text-sm">
            <li className="flex items-center gap-2">
              <PhoneIcon />
              <span>{phone}</span>
            </li>
            <li className="flex items-center gap-2">
              <MailIcon />
              <a
                className="break-all transition-colors hover:text-accent"
                href={`mailto:${email}`}
              >
                {email}
              </a>
            </li>
          </ul>
          <p className="mt-5 text-sm text-muted">
            <time dateTime={time}>北京 {time}</time>
          </p>
        </header>

        <section aria-labelledby="work-heading">
          <SectionHeading id="work-heading" title="经历" />
          <ul>
            {experiences.map((job) => (
              <li
                className="py-3 first:pt-0 last:pb-0"
                key={`${job.company}-${job.start}`}
              >
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                  <h3 className="flex min-w-0 flex-wrap items-center gap-1.5 font-medium">
                    <CompanyLogo href={job.href} />
                    <a
                      className="min-w-0 leading-none transition-colors hover:text-accent"
                      href={job.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {job.company}
                    </a>
                  </h3>
                  <p className="shrink-0 text-sm text-muted tabular-nums">
                    {job.start} – {job.end}
                  </p>
                </div>
                <p className="text-sm text-muted">{job.role}</p>
                <p className="mt-5 text-base leading-7 text-pretty">
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
                  className="flex items-center justify-center"
                  key={mark}
                  translate="no"
                >
                  {icon ? (
                    <BrandIcon colored icon={icon} size="md" />
                  ) : (
                    <span className="text-xs font-medium">
                      {markAbbr(mark)}
                    </span>
                  )}
                  <span className="sr-only">{mark}</span>
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
              <li className="py-2.5" key={project.name}>
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
                  <span className="mt-1 block text-base leading-7 text-muted">
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
