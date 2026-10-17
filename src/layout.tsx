import {
  LazyMotion,
  MotionConfig,
  domAnimation,
  m,
  useReducedMotion,
} from 'motion/react';
import type { ReactNode } from 'react';
import { MeteorsBackground } from './components/MeteorsBackground';
import { easeOutQuart, hoverDuration } from './motion';

export type SitePage = 'home' | 'blog';

const links: { id: SitePage; href: string; label: string }[] = [
  { id: 'home', href: '/', label: '首页' },
  { id: 'blog', href: '/blog/', label: '博客' },
];

export function Page({
  page,
  children,
  kicker,
}: {
  page: SitePage;
  children: ReactNode;
  kicker?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user" transition={{ ease: easeOutQuart() }}>
        <div className="relative min-h-dvh bg-background pt-[env(safe-area-inset-top)] pr-[env(safe-area-inset-right)] pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)] font-sans text-foreground">
          <MeteorsBackground />
          <div className="relative mx-auto w-full max-w-page px-page-x py-page-y md:px-page-x-md xl:px-page-x-xl">
            <a
              className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:top-[max(1rem,env(safe-area-inset-top))] focus-visible:left-[max(1rem,env(safe-area-inset-left))] focus-visible:z-50 focus-visible:inline-block focus-visible:rounded-full focus-visible:bg-card focus-visible:px-3 focus-visible:py-1.5 focus-visible:text-sm"
              href="#main"
            >
              跳到正文
            </a>
            <div className="mb-8 flex min-h-nav items-center justify-between">
              {kicker ? (
                <p className="text-sm font-medium text-title">{kicker}</p>
              ) : (
                <a className="text-sm font-medium" href="/">
                  永琪（Ari）
                </a>
              )}
              <m.nav
                animate={{ opacity: 1 }}
                aria-label="站点"
                className="flex shrink-0 gap-6 text-sm"
                initial={reduce ? false : { opacity: 0 }}
                transition={{ duration: reduce ? 0 : hoverDuration() }}
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
