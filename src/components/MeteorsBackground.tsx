import { useEffect, useRef } from 'react';

const gridSize = 120;
const meteorCount = 3;

function gridLine(span: number) {
  const count = Math.floor(span / gridSize);
  const index = 1 + Math.floor(Math.random() * Math.max(0, count - 1));
  return index * gridSize;
}

enum Direction {
  Up,
  Right,
  Down,
  Left,
}

function tokenColor(name: string) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
}

function withAlpha(color: string, alpha: number) {
  const hex = color.replace('#', '');
  const value = Number.parseInt(hex, 16);
  const red = (value >> 16) & 255;
  const green = (value >> 8) & 255;
  const blue = value & 255;
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

class Meteor {
  x = 0;
  y = 0;
  direction = Direction.Up;
  speed = 0;
  length = 0;
  opacity = 0;

  constructor(
    private readonly size: {
      width: number;
      height: number;
    },
  ) {
    this.reset();
  }

  reset() {
    this.direction = Math.floor(Math.random() * 4);
    this.speed = 2 + Math.random() * 3;
    this.length = gridSize * (1 + Math.random() * 2);
    this.opacity = 0.6 + Math.random() * 0.4;

    switch (this.direction) {
      case Direction.Up:
        this.x = gridLine(this.size.width);
        this.y = this.size.height;
        break;
      case Direction.Right:
        this.x = 0;
        this.y = gridLine(this.size.height);
        break;
      case Direction.Down:
        this.x = gridLine(this.size.width);
        this.y = 0;
        break;
      case Direction.Left:
        this.x = this.size.width;
        this.y = gridLine(this.size.height);
        break;
    }
  }

  update() {
    switch (this.direction) {
      case Direction.Up:
        this.y -= this.speed;
        if (this.y + this.length < 0) {
          this.reset();
        }
        break;
      case Direction.Right:
        this.x += this.speed;
        if (this.x > this.size.width) {
          this.reset();
        }
        break;
      case Direction.Down:
        this.y += this.speed;
        if (this.y > this.size.height) {
          this.reset();
        }
        break;
      case Direction.Left:
        this.x -= this.speed;
        if (this.x + this.length < 0) {
          this.reset();
        }
        break;
    }
  }

  draw(ctx: CanvasRenderingContext2D, head: string, tail: string) {
    let endX = this.x;
    let endY = this.y;

    switch (this.direction) {
      case Direction.Up:
        endY = this.y + this.length;
        break;
      case Direction.Right:
        endX = this.x - this.length;
        break;
      case Direction.Down:
        endY = this.y - this.length;
        break;
      case Direction.Left:
        endX = this.x + this.length;
        break;
    }

    const gradient = ctx.createLinearGradient(this.x, this.y, endX, endY);
    gradient.addColorStop(0, withAlpha(head, this.opacity));
    gradient.addColorStop(0.02, withAlpha(head, this.opacity * 0.8));
    gradient.addColorStop(0.05, withAlpha(tail, this.opacity * 0.6));
    gradient.addColorStop(1, withAlpha(tail, 0));

    ctx.beginPath();
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2;
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  }
}

function drawGrid(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  color: string,
) {
  ctx.strokeStyle = withAlpha(color, 0.1);
  ctx.lineWidth = 1;
  ctx.beginPath();

  for (let x = 0; x <= width; x += gridSize) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
  }

  for (let y = 0; y <= height; y += gridSize) {
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
  }

  ctx.stroke();
}

export function MeteorsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) {
      return;
    }

    const size = { width: 0, height: 0 };
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      size.width = rect.width;
      size.height = rect.height;
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    const foreground = tokenColor('--color-foreground');
    const head = tokenColor('--color-meteor-head');
    const tail = tokenColor('--color-meteor-tail');

    if (reduced) {
      drawGrid(ctx, size.width, size.height, foreground);
      return () => observer.disconnect();
    }

    const meteors = Array.from({ length: meteorCount }, () => new Meteor(size));
    let frame = 0;

    const animate = () => {
      ctx.clearRect(0, 0, size.width, size.height);
      drawGrid(ctx, size.width, size.height, foreground);
      for (const meteor of meteors) {
        meteor.update();
        meteor.draw(ctx, head, tail);
      }
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      ref={canvasRef}
    />
  );
}
