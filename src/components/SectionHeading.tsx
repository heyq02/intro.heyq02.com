interface SectionHeadingProps {
  id: string;
  title: string;
}

export function SectionHeading({ id, title }: SectionHeadingProps) {
  return (
    <h2 className="mb-5 scroll-mt-6 text-xl font-medium" id={id}>
      {title}
    </h2>
  );
}
