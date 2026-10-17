interface SectionHeadingProps {
  id: string;
  title: string;
}

export function SectionHeading({ id, title }: SectionHeadingProps) {
  return (
    <h2
      className="mb-5 scroll-mt-6 text-[22px] leading-[1.3] font-medium text-title"
      id={id}
    >
      <span className="border-b border-accent pb-1">{title}</span>
    </h2>
  );
}
