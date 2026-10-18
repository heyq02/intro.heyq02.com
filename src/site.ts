export interface Project {
  name: string;
  href: string;
  summary: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
}

export interface Place {
  label: string;
  href: string;
  detail: string;
}

export interface Experience {
  company: string;
  href: string;
  start: string;
  end: string;
  points: string[];
}

export const avatar = 'https://avatars.githubusercontent.com/u/206218794?v=4';

export const marks = [
  'Vue',
  'React',
  'Next',
  'Rolldown',
  'Vite',
  'Oxc',
  'Spring',
  'Redis',
  'RabbitMQ',
  'Nginx',
  'Docker',
];

export const markSummary: Record<string, string> = {
  Vue: 'Progressive JavaScript framework for building web UIs',
  React: 'The library for web and native user interfaces',
  Next: 'The React framework for the web',
  Rolldown: 'Rust-based JavaScript bundler with a Rollup-compatible API',
  Vite: 'Frontend build tool for the web',
  Oxc: 'High-performance JavaScript tools written in Rust',
  Spring: 'Framework for creating Java enterprise applications',
  Redis: 'In-memory store for databases, cache, and messaging',
  RabbitMQ: 'Open-source messaging and streaming broker',
  Nginx: 'HTTP server, reverse proxy, and load balancer',
  Docker: 'Open platform for building, shipping, and running apps',
};

export const projects: Project[] = [
  {
    name: 'jd-opensource/taro-ui',
    href: 'https://github.com/jd-opensource/taro-ui',
    summary: '一款基于 Taro 框架开发的多端 UI 组件库',
    language: 'TypeScript',
    languageColor: '#3178c6',
    stars: 4730,
    forks: 743,
  },
  {
    name: 'simpleicons.dev',
    href: 'https://github.com/heyq02/simpleicons.dev',
    summary: 'Showcase your skills on your GitHub readme or resumé with ease.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    stars: 171,
    forks: 0,
  },
];

export const experiences: Experience[] = [
  {
    company: 'JD.com, Inc.',
    href: 'https://www.jd.com/',
    start: '2024.06',
    end: 'Present',
    points: [
      'Owned iterations for JD Takeout across the mini program, H5, and admin console',
      'Upgraded the admin console off its legacy architecture and improved TP95',
      'Built C3-level AI Infra for Local Life product and engineering, improving R&D efficiency',
    ],
  },
];

export const phone = '+86 135****8086';

export const email = 'hello@heyq02.com';

export const places: Place[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/heyq02',
    detail: 'heyq02',
  },
  {
    label: 'X',
    href: 'https://x.com/heyq02',
    detail: '@heyq02',
  },
  {
    label: 'Bilibili',
    href: 'https://space.bilibili.com/3493273159075938',
    detail: '全栈糕手Ari',
  },
  {
    label: 'Juejin',
    href: 'https://juejin.cn/user/708557910842296',
    detail: '编程糕手Ari',
  },
  {
    label: 'WeChat',
    href: '/wechat.jpg',
    detail: 'Scan to add',
  },
];
