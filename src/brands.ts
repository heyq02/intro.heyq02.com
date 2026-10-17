import type { SimpleIcon } from 'simple-icons';
import {
  siBilibili,
  siCss,
  siDocker,
  siFigma,
  siGit,
  siGithub,
  siGithubactions,
  siHtml5,
  siJavascript,
  siJuejin,
  siLinux,
  siNginx,
  siNodedotjs,
  siReact,
  siRust,
  siSpringboot,
  siTypescript,
  siVim,
  siVite,
  siVuedotjs,
  siWebpack,
  siX,
} from 'simple-icons';

const brands: { name: string; href: string; icon?: SimpleIcon }[] = [
  {
    name: 'JavaScript',
    href: 'https://developer.mozilla.org/docs/Web/JavaScript',
    icon: siJavascript,
  },
  {
    name: 'TypeScript',
    href: 'https://www.typescriptlang.org/',
    icon: siTypescript,
  },
  { name: 'Node.js', href: 'https://nodejs.org/', icon: siNodedotjs },
  {
    name: 'HTML',
    href: 'https://developer.mozilla.org/docs/Web/HTML',
    icon: siHtml5,
  },
  {
    name: 'CSS',
    href: 'https://developer.mozilla.org/docs/Web/CSS',
    icon: siCss,
  },
  { name: 'Rust', href: 'https://www.rust-lang.org/', icon: siRust },
  { name: 'Vue', href: 'https://vuejs.org/', icon: siVuedotjs },
  { name: 'React', href: 'https://react.dev/', icon: siReact },
  { name: 'Taro', href: 'https://docs.taro.zone/' },
  { name: 'Webpack', href: 'https://webpack.js.org/', icon: siWebpack },
  { name: 'Vite', href: 'https://vite.dev/', icon: siVite },
  {
    name: 'Spring Boot',
    href: 'https://spring.io/projects/spring-boot',
    icon: siSpringboot,
  },
  {
    name: 'GitHub Actions',
    href: 'https://github.com/features/actions',
    icon: siGithubactions,
  },
  { name: 'Rspack', href: 'https://rspack.rs/' },
  { name: 'GitHub', href: 'https://github.com/', icon: siGithub },
  { name: 'Git', href: 'https://git-scm.com/', icon: siGit },
  { name: 'Figma', href: 'https://www.figma.com/', icon: siFigma },
  { name: 'Linux', href: 'https://www.kernel.org/', icon: siLinux },
  { name: 'Docker', href: 'https://www.docker.com/', icon: siDocker },
  { name: 'Vim', href: 'https://www.vim.org/', icon: siVim },
  { name: 'Nginx', href: 'https://nginx.org/', icon: siNginx },
  { name: 'X', href: 'https://x.com/', icon: siX },
  { name: 'Bilibili', href: 'https://www.bilibili.com/', icon: siBilibili },
  { name: 'Juejin', href: 'https://juejin.cn/', icon: siJuejin },
];

function matchBrand(label: string) {
  return brands.find(
    ({ name }) =>
      label === name ||
      label.startsWith(`${name}（`) ||
      label.startsWith(`${name} `),
  );
}

export function brandIcon(label: string) {
  return matchBrand(label)?.icon;
}

export function brandOf(label: string) {
  return matchBrand(label);
}
