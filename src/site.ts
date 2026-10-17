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
    summary: '用一行 Markdown 嵌入技能图标。',
  },
  {
    name: 'rspack-plugin-git-revision',
    href: 'https://github.com/heyq02/rspack-plugin-git-revision',
    summary: '构建时写入版本、提交、时间与分支。',
  },
  {
    name: 'rspack-plugin-last-call',
    href: 'https://github.com/heyq02/rspack-plugin-last-call',
    summary: '在构建产物上增删改资源。',
  },
  {
    name: 'rstack-config',
    href: 'https://github.com/heyq02/rstack-config',
    summary: 'Rstack 预设，按路径提供 lint、打包与格式化。',
  },
  {
    name: 'rslint-config',
    href: 'https://github.com/heyq02/rslint-config',
    summary: 'Rslint 配置，包含规则与 import 排序。',
  },
  {
    name: 'rslib-config',
    href: 'https://github.com/heyq02/rslib-config',
    summary: 'Rslib 的 ESM 库预设，生成类型声明并运行 publint。',
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
