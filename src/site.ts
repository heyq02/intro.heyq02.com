export interface Project {
  name: string;
  href: string;
  summary: string;
}

export interface Place {
  label: string;
  href: string;
  detail: string;
}

export const avatar = 'https://avatars.githubusercontent.com/u/206218794?v=4';

export const marks = ['TypeScript', 'Vue', 'React', 'Taro', 'Rspack'];

export const projects: Project[] = [
  {
    name: 'simpleicons.dev',
    href: 'https://simpleicons.dev',
    summary: '用一行 Markdown，把技能图标放进 README 或简历。',
  },
  {
    name: 'rspack-plugin-git-revision',
    href: 'https://github.com/heyq02/rspack-plugin-git-revision',
    summary: '构建时写入版本号、提交哈希、时间和分支。',
  },
  {
    name: 'rspack-plugin-last-call',
    href: 'https://github.com/heyq02/rspack-plugin-last-call',
    summary: '在 Rspack 产物上跑最后一轮异步处理，可以改、加、删资源。',
  },
  {
    name: 'rstack-config',
    href: 'https://github.com/heyq02/rstack-config',
    summary: '给 Rstack 的一套预设。lint、库打包和格式化按路径引用。',
  },
  {
    name: 'rslint-config',
    href: 'https://github.com/heyq02/rslint-config',
    summary: 'Rslint 的 flat config，规则和 import 排序收在一个入口里。',
  },
  {
    name: 'rslib-config',
    href: 'https://github.com/heyq02/rslib-config',
    summary: 'Rslib 的 ESM 库预设，声明文件和 publint 跟着构建走。',
  },
];

export const places: Place[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/heyq02',
    detail: 'heyq02',
  },
  {
    label: '邮件',
    href: 'mailto:mail@heyq02.cn',
    detail: 'mail@heyq02.cn',
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
