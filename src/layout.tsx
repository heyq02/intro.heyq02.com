import {
  LazyMotion,
  MotionConfig,
  domAnimation,
  m,
  useReducedMotion,
} from 'motion/react';
import type { ReactNode } from 'react';
import { easeOutQuart, hoverDuration } from './motion';

export type SitePage = 'home' | 'resume' | 'blog';

const links: { id: SitePage; href: string; label: string }[] = [
  { id: 'home', href: '/', label: '首页' },
  { id: 'resume', href: '/resume/', label: '简历' },
  { id: 'blog', href: '/blog/', label: '博客' },
];

export function Page({
  page,
  children,
  dense = false,
  wide = false,
  kicker,
}: {
  page: SitePage;
  children: ReactNode;
  dense?: boolean;
  wide?: boolean;
  kicker?: string;
}) {
  const reduce = useReducedMotion();
  const width = wide ? 'max-w-5xl' : 'max-w-3xl';
  const padding = dense
    ? 'resume-page py-8 sm:py-10'
    : wide
      ? 'py-6 sm:py-8'
      : 'py-12 sm:py-16';

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user" transition={{ ease: easeOutQuart }}>
        <div className="min-h-dvh bg-background pt-[env(safe-area-inset-top)] pr-[env(safe-area-inset-right)] pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)] font-sans text-foreground">
          <div className={`mx-auto px-5 sm:px-8 ${width} ${padding}`}>
            <a
              className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:top-[max(1rem,env(safe-area-inset-top))] focus-visible:left-[max(1rem,env(safe-area-inset-left))] focus-visible:z-50 focus-visible:inline-block focus-visible:rounded-full focus-visible:bg-card focus-visible:px-3 focus-visible:py-1.5 focus-visible:text-sm"
              href="#main"
            >
              跳到正文
            </a>
            <div className="mb-8 flex items-center gap-4 sm:mb-10">
              {kicker ? (
                <p className="shrink-0 text-xs font-medium tracking-[0.22em] text-accent">
                  {kicker}
                </p>
              ) : (
                <a className="shrink-0 text-sm font-medium" href="/">
                  贺永琪
                </a>
              )}
              <span aria-hidden="true" className="h-px flex-1 bg-accent/25" />
              <m.nav
                animate={{ opacity: 1 }}
                aria-label="站点"
                className="flex shrink-0 gap-4 text-sm"
                initial={reduce ? false : { opacity: 0 }}
                transition={{ duration: reduce ? 0 : hoverDuration }}
              >
                {links.map((link) => {
                  const current = page === link.id;
                  return (
                    <a
                      aria-current={current ? 'page' : undefined}
                      className={
                        current
                          ? 'text-accent underline decoration-accent underline-offset-8'
                          : 'text-muted transition-colors hover:text-foreground'
                      }
                      href={link.href}
                      key={link.id}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </m.nav>
            </div>
            <main className="scroll-mt-6" id="main" tabIndex={-1}>
              {children}
            </main>
          </div>
        </div>
      </MotionConfig>
    </LazyMotion>
  );
}
