function token(name: string) {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  if (!value) {
    throw new Error(`Missing design token ${name}`);
  }
  return value;
}

function cubicBezier(name: string): [number, number, number, number] {
  const parts = token(name).match(/-?\d*\.?\d+/g);
  if (!parts || parts.length !== 4) {
    throw new Error(`Design token ${name} is not a cubic-bezier`);
  }

  const [x1, y1, x2, y2] = parts.map(Number);
  if (
    x1 === undefined ||
    y1 === undefined ||
    x2 === undefined ||
    y2 === undefined
  ) {
    throw new Error(`Design token ${name} is not a cubic-bezier`);
  }

  return [x1, y1, x2, y2];
}

function seconds(name: string) {
  const value = token(name);
  const amount = Number.parseFloat(value);
  return value.endsWith('ms') ? amount / 1000 : amount;
}

let cachedEase: [number, number, number, number] | undefined;
let cachedHover: number | undefined;
let cachedRise: number | undefined;

export function easeOutQuart() {
  cachedEase ??= cubicBezier('--ease-out-quart');
  return cachedEase;
}

export function hoverDuration() {
  cachedHover ??= seconds('--default-transition-duration');
  return cachedHover;
}

export function riseDuration() {
  cachedRise ??= seconds('--transition-duration-slow');
  return cachedRise;
}
