interface SectionHeadingProps {
  id: string;
  title: string;
}

export function SectionHeading({ id, title }: SectionHeadingProps) {
  return (
    <h2 className="mb-5 scroll-mt-6 text-lg font-medium text-title" id={id}>
      <span className="border-b border-accent pb-1">{title}</span>
    </h2>
  );
}
