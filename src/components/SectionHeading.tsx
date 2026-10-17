interface SectionHeadingProps {
  id: string;
  title: string;
}

export function SectionHeading({ id, title }: SectionHeadingProps) {
  return (
    <h2
      className="mb-4 scroll-mt-6 text-xs font-medium tracking-heading text-foreground"
      id={id}
    >
      <span className="border-b border-accent pb-1">{title}</span>
    </h2>
  );
}
