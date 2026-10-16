interface BulletListProps {
  items: string[];
}

export function BulletList({ items }: BulletListProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed marker:text-muted">
      {items.map((item) => (
        <li className="break-words" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}
