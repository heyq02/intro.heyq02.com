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
  summary: string;
}

export const avatar = 'https://avatars.githubusercontent.com/u/206218794?v=4';

export const marks = [
  'HTML',
  'CSS',
  'TypeScript',
  'Vue',
  'React',
  'Next',
  'Vite',
  'Vitest',
  'Oxc',
  'Git',
  'GitHub Actions',
  'GitHub Copilot',
  'DeepSeek',
  'Cursor',
  'Claude',
];

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
    company: '北京京东世纪贸易有限公司',
    href: 'https://www.jd.com/',
    start: '2024.06',
    end: '至今',
    summary:
      '负责商家端财务、结算与发票，以及到店订详和家政运营后台。商家中心拆包后，编译时间缩短 65%，包体积减小 68%。',
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
];
