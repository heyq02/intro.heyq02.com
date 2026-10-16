import { ExternalLink } from './ExternalLink';

interface HeroProps {
  name: string;
  title: string;
  email: string;
  github: string;
  blog: string;
  summary: string;
}

export function Hero({ name, title, email, github, blog, summary }: HeroProps) {
  const blogLabel = blog.startsWith('http') ? blog : '博客';

  return (
    <header className="mb-section">
      <p className="text-sm text-muted">{title}</p>
      <h1 className="mt-1 text-3xl font-medium tracking-tight">{name}</h1>
      <p className="mt-3 text-sm leading-relaxed text-pretty">{summary}</p>
      <nav aria-label="联系方式" className="mt-3">
        <ul className="flex flex-col gap-1 text-sm sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-1">
          <li>
            <ExternalLink href={`mailto:${email}`}>{email}</ExternalLink>
          </li>
          <li>
            <ExternalLink href={github}>{github}</ExternalLink>
          </li>
          <li>
            <ExternalLink href={blog}>{blogLabel}</ExternalLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
