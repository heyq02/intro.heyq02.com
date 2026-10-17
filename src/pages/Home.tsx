import { m } from 'motion/react';
import { useEffect, useState } from 'react';
import { brandIcon } from '../brands';
import { BrandIcon } from '../components/BrandIcon';
import { Page } from '../layout';
import { easeOutQuart, hoverDuration } from '../motion';
import { avatar, marks, places, projects } from '../site';

function beijingClock(date: Date) {
  return new Intl.DateTimeFormat('zh-CN', {
    timeZone: 'Asia/Shanghai',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).format(date);
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
    <Page compact page="home">
      <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-10">
        <header>
          <div className="flex items-center gap-4">
            <img
              alt=""
              className="size-14 rounded-full sm:size-16"
              height={64}
              src={avatar}
              width={64}
            />
            <div>
              <h1 className="text-3xl font-medium tracking-tight">贺永琪</h1>
              <p className="mt-1 text-sm text-muted">Ari</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-pretty">
            前端开发，南京邮电大学生物医学工程，编写 Rspack 插件与 Rstack 预设。
          </p>
          <ul className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
            {marks.map((mark) => {
              const icon = brandIcon(mark);

              return (
                <li
                  className="flex items-center gap-1.5"
                  key={mark}
                  translate="no"
                >
                  {icon ? <BrandIcon icon={icon} /> : null}
                  {mark}
                </li>
              );
            })}
          </ul>
          <p className="mt-2 text-xs text-muted">
            <time dateTime={time}>北京 {time}</time>
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {places.map((place) => {
              const icon = brandIcon(place.label);

              return (
                <li key={place.label}>
                  <a
                    aria-label={
                      place.detail === place.label
                        ? place.label
                        : `${place.label} ${place.detail}`
                    }
                    className="inline-flex items-center gap-1.5 underline decoration-foreground/25 underline-offset-4 hover:decoration-foreground"
                    href={place.href}
                    rel="noreferrer"
                    target={
                      place.href.startsWith('http') ? '_blank' : undefined
                    }
                  >
                    {icon ? (
                      <BrandIcon icon={icon} />
                    ) : (
                      <span className="text-muted">{place.label}</span>
                    )}
                    {place.detail}
                  </a>
                </li>
              );
            })}
          </ul>
        </header>

        <section aria-labelledby="code-heading">
          <h2 className="mb-3 text-base font-medium" id="code-heading">
            开源
          </h2>
          <div className="grid gap-1.5 sm:gap-2">
            {projects.map((project) => (
              <m.a
                className="group rounded-xl border border-border bg-card px-4 py-2.5 shadow-card sm:py-3"
                href={project.href}
                key={project.name}
                rel="noopener noreferrer"
                target="_blank"
                transition={{ duration: hoverDuration, ease: easeOutQuart }}
                whileHover={{ y: -2 }}
              >
                <span className="flex items-baseline justify-between gap-3">
                  <span
                    className="font-medium break-words leading-tight"
                    translate="no"
                  >
                    {project.name}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-sm text-muted transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
                  >
                    ↗
                  </span>
                </span>
                <span className="mt-1 block text-sm leading-snug text-muted">
                  {project.summary}
                </span>
              </m.a>
            ))}
          </div>
        </section>
      </div>
    </Page>
  );
}
