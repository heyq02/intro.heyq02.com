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
  Vue: '渐进式 JavaScript 框架，用来构建 Web 界面',
  React: '构建 Web 和原生用户界面的库',
  Next: '面向 Web 的 React 框架',
  Rolldown: '基于 Rust 的 JavaScript 打包器，API 兼容 Rollup',
  Vite: '用来构建 Web 应用的前端构建工具',
  Oxc: '用 Rust 编写的高性能 JavaScript 工具集',
  Spring: '用来创建 Java 企业级应用',
  Redis: '内存数据存储，可用作数据库、缓存和消息代理',
  RabbitMQ: '开源的消息与流代理',
  Nginx: 'HTTP 服务器、反向代理和负载均衡',
  Docker: '开发、交付和运行应用的开放平台',
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
    company: '北京京东世纪贸易有限公司',
    href: 'https://www.jd.com/',
    start: '2024.06',
    end: '至今',
    points: [
      '负责京东外卖跨端小程序&H5、管理后台需求迭代',
      '进行管理后台老旧架构升级，TP95性能优化',
      '本地生活产研C3层面 AI Infra 建设，提升研发效能',
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
    detail: '扫码添加',
  },
];
