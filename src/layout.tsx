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
}: {
  page: SitePage;
  children: ReactNode;
  dense?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user" transition={{ ease: easeOutQuart }}>
        <div className="min-h-dvh bg-background pt-[env(safe-area-inset-top)] pr-[env(safe-area-inset-right)] pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)] font-sans text-foreground">
          <div
            className={`mx-auto max-w-3xl px-5 sm:px-6 ${dense ? 'resume-page py-10 sm:py-12' : 'py-12 sm:py-16'}`}
          >
            <a
              className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:top-[max(1rem,env(safe-area-inset-top))] focus-visible:left-[max(1rem,env(safe-area-inset-left))] focus-visible:z-50 focus-visible:inline-block focus-visible:rounded-full focus-visible:bg-card focus-visible:px-3 focus-visible:py-1.5 focus-visible:text-sm focus-visible:shadow-card"
              href="#main"
            >
              跳到正文
            </a>
            <m.nav
              animate={{ opacity: 1 }}
              aria-label="站点"
              className="mb-section flex flex-wrap gap-2 text-sm"
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
                        ? 'rounded-full bg-card px-3 py-1 font-medium text-foreground shadow-card'
                        : 'rounded-full px-3 py-1 text-muted transition-colors hover:text-foreground'
                    }
                    href={link.href}
                    key={link.id}
                  >
                    {link.label}
                  </a>
                );
              })}
            </m.nav>
            <main className="scroll-mt-6" id="main" tabIndex={-1}>
              {children}
            </main>
          </div>
        </div>
      </MotionConfig>
    </LazyMotion>
  );
}
