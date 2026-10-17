import type { CSSProperties } from 'react';
import type { SimpleIcon } from 'simple-icons';

interface BrandIconProps {
  icon: SimpleIcon;
  colorOnHover?: boolean;
  size?: 'sm' | 'md';
}

export function BrandIcon({
  icon,
  colorOnHover = false,
  size = 'sm',
}: BrandIconProps) {
  const sizeClass = size === 'md' ? 'size-5' : 'size-3.5';

  return (
    <svg
      aria-hidden="true"
      className={
        colorOnHover
          ? `skill-brand ${sizeClass} shrink-0`
          : `${sizeClass} shrink-0`
      }
      fill={colorOnHover ? undefined : 'currentColor'}
      style={
        colorOnHover
          ? // CSSProperties has no index signature for custom properties.
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            ({ '--brand': `#${icon.hex}` } as CSSProperties)
          : undefined
      }
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
}
