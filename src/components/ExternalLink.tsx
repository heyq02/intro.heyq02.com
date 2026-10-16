interface ExternalLinkProps {
  href: string;
  children: string;
}

export function ExternalLink({ href, children }: ExternalLinkProps) {
  const isExternal = href.startsWith('http');

  return (
    <a
      className="underline decoration-foreground/25 underline-offset-4 transition-colors hover:decoration-foreground"
      href={href}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      target={isExternal ? '_blank' : undefined}
    >
      {children}
    </a>
  );
}
