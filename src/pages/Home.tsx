import { m } from 'motion/react';
import { useEffect, useState } from 'react';
import { brandIcon } from '../brands';
import { BrandIcon } from '../components/BrandIcon';
import { ExternalLink } from '../components/ExternalLink';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
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
    <Page page="home">
      <Reveal>
        <header>
          <div className="flex items-center gap-4">
            <img
              alt=""
              className="size-16 rounded-full sm:size-20"
              height={80}
              src={avatar}
              width={80}
            />
            <div>
              <h1 className="text-3xl font-medium tracking-tight">贺永琪</h1>
              <p className="mt-1 text-sm text-muted">Ari</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-pretty">
            南京邮电大学读的是生物医学工程，2020 到 2024。2024
            年校招进入京东做前端，人在北京。GitHub 上叫
            Ari，正在准备计算机方向的硕士。
          </p>
          <ul className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
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
          <p className="mt-3 text-xs text-muted">
            <time dateTime={time}>北京 {time}</time>
          </p>
          <ul className="mt-4 flex flex-col gap-1 text-sm sm:flex-row sm:flex-wrap sm:gap-x-5">
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
      </Reveal>

      <Reveal delay={0.06}>
        <section className="mt-section" aria-labelledby="work-heading">
          <SectionHeading id="work-heading" title="工作" />
          <p className="text-sm leading-relaxed text-pretty">
            现在手头有两块。一块是京东家政的运营后台，页面落在劳动者激励、供应商、履约和开票上。另一块从
            2025
            年下半年起，是外卖商家的财务、结算和发票，同时还负责到店订详和自流帝。
          </p>
          <p className="mt-3 text-sm leading-relaxed text-pretty">
            2024 年下半年先写 M 站和 Taro 转出来的 H5，榜单、品牌馆、LOC
            都在里面，PC
            侧做过到家官网和店铺装修。更早在南京写过政务小程序和后台。公司和每条职责在
            <ExternalLink href="/resume/">简历</ExternalLink>
            里。
          </p>
        </section>
      </Reveal>

      <Reveal delay={0.12}>
        <section className="mt-section" aria-labelledby="code-heading">
          <SectionHeading id="code-heading" title="开源" />
          <div className="grid gap-3 sm:grid-cols-2">
            {projects.map((project) => (
              <m.a
                className="group rounded-2xl border border-border bg-card p-5 shadow-card"
                href={project.href}
                key={project.name}
                rel="noopener noreferrer"
                target="_blank"
                transition={{ duration: hoverDuration, ease: easeOutQuart }}
                whileHover={{ y: -2 }}
              >
                <span className="flex items-baseline justify-between gap-3">
                  <span className="font-medium break-words" translate="no">
                    {project.name}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-sm text-muted transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
                  >
                    ↗
                  </span>
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-muted">
                  {project.summary}
                </span>
              </m.a>
            ))}
          </div>
        </section>
      </Reveal>
    </Page>
  );
}
