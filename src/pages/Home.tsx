import { useReducedMotion } from 'motion/react';
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

const names = ['永琪', 'Ari'] as const;
const nameSuffix = '，全栈研发';
const typeDelay = 140;
const deleteDelay = 100;
const holdDelay = 2000;

function TypedName() {
  const reduce = useReducedMotion();
  const [text, setText] = useState('');

  useEffect(() => {
    if (reduce !== false) {
      return;
    }

    let wordIndex = 0;
    let length = 0;
    let deleting = false;
    let timer = 0;

    const tick = () => {
      const word = names[wordIndex] ?? '';

      if (!deleting) {
        length += 1;
        setText(word.slice(0, length));
        if (length === word.length) {
          deleting = true;
          timer = window.setTimeout(tick, holdDelay);
          return;
        }
        timer = window.setTimeout(tick, typeDelay);
        return;
      }

      length -= 1;
      setText(word.slice(0, Math.max(length, 0)));
      if (length === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % names.length;
        timer = window.setTimeout(tick, typeDelay);
        return;
      }
      timer = window.setTimeout(tick, deleteDelay);
    };

    timer = window.setTimeout(tick, typeDelay);
    return () => window.clearTimeout(timer);
  }, [reduce]);

  if (reduce !== false) {
    return (
      <h1 className="text-h1 font-medium whitespace-nowrap">
        <span className="brand-text">永琪（Ari）</span>
        <span className="text-title">{nameSuffix}</span>
      </h1>
    );
  }

  return (
    <h1
      aria-label={`永琪（Ari）${nameSuffix}`}
      className="text-h1 font-medium whitespace-nowrap"
    >
      <span aria-hidden="true" className="brand-text name-caret">
        {text || '\u200b'}
      </span>
      <span className="text-title">{nameSuffix}</span>
    </h1>
  );
}

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

function formatCount(count: number) {
  if (count < 1000) {
    return String(count);
  }

  return `${(count / 1000).toFixed(1).replace(/\.0$/, '')}k`;
}

function StarIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-[13px] shrink-0 opacity-70"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
    </svg>
  );
}

function ForkIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-[13px] shrink-0 opacity-70"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.5.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
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
          <TypedName />
          <p className="mt-5 text-base leading-7 text-pretty">
            南京邮电大学生物医学工程本科毕业。专注前端工程化，推动 AI
            在业务场景中落地。
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
                  <h3 className="min-w-0 text-lg leading-6 font-medium">
                    <a
                      className="min-w-0 transition-colors hover:text-accent"
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
                <p className="mt-3 text-sm leading-6 text-pretty text-muted">
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
          <ul className="grid gap-3.5 sm:grid-cols-2">
            {projects.map((project) => (
              <li className="min-w-0" key={project.name}>
                <a
                  className="flex h-full flex-col rounded-[14px] border border-title/8 bg-background px-5 py-3 shadow-[0_1px_0_rgba(17,17,19,0.04),0_12px_28px_-6px_rgba(17,17,19,0.14)] transition-colors hover:border-title/16"
                  href={project.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span
                    className="text-base leading-tight font-medium tracking-[-0.01em] break-words text-title"
                    translate="no"
                  >
                    {project.name}
                  </span>
                  <span className="mt-2 line-clamp-2 text-[13.5px] leading-[1.45] text-muted">
                    {project.summary}
                  </span>
                  <span className="mt-2 flex items-center gap-3 text-[13px] text-muted">
                    <span className="flex items-center gap-1.5">
                      <span
                        className="size-2 rounded-full"
                        style={{ backgroundColor: project.languageColor }}
                      />
                      {project.language}
                    </span>
                    <span className="flex items-center gap-1">
                      <StarIcon />
                      {formatCount(project.stars)}
                    </span>
                    {project.forks > 0 ? (
                      <span className="flex items-center gap-1">
                        <ForkIcon />
                        {formatCount(project.forks)}
                      </span>
                    ) : null}
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
