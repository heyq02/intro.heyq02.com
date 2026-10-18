// Configuration guide: https://rstack.rs/config
import { define } from 'rstack';
import { rstack } from '@heyq02/rstack-config/rstack';

const pages = {
  index: {
    title: 'Ari He',
    description: 'Ari He, developer. Modern frontend, and AI in real products.',
  },
  blog: {
    title: 'Blog · Ari He',
    description: 'Blog of Ari He.',
  },
} as const;

define.extends([
  rstack({
    app: async () => {
      const { copyFileSync, rmSync } = await import('node:fs');
      const { pluginReact } = await import('@rsbuild/plugin-react');
      const { pluginTailwindcss } = await import('@rsbuild/plugin-tailwindcss');

      return {
        plugins: [
          pluginReact(),
          pluginTailwindcss(),
          {
            name: 'home-html-at-root',
            setup(api) {
              api.onAfterBuild(() => {
                copyFileSync('dist/index/index.html', 'dist/index.html');
                rmSync('dist/index', { recursive: true });
                // GitHub Pages reads this from the artifact and keeps the custom domain.
                copyFileSync('CNAME', 'dist/CNAME');
              });
            },
          },
        ],
        source: {
          entry: {
            index: './src/index.tsx',
            blog: './src/blog.tsx',
          },
        },
        html: {
          template: './index.html',
          outputStructure: 'nested',
          title({ entryName }) {
            return (
              pages[entryName as keyof typeof pages]?.title ?? pages.index.title
            );
          },
          meta({ entryName }) {
            const page = pages[entryName as keyof typeof pages] ?? pages.index;
            return {
              description: page.description,
            };
          },
        },
        server: {
          setup({ server }) {
            if (!('environments' in server)) {
              return;
            }

            const { environments } = server;

            server.middlewares.use(async (req, res, next) => {
              const url = req.url ?? '';
              if (
                url !== '/' &&
                !url.startsWith('/?') &&
                url !== '/index.html'
              ) {
                next();
                return;
              }

              const html = await environments.web.getTransformedHtml('index');
              res.setHeader('content-type', 'text/html; charset=utf-8');
              res.end(html);
            });
          },
        },
        output: {
          // https://intro.heyq02.com/ is served from the domain root.
          assetPrefix: '/',
        },
      };
    },
    test: false,
    lint: {
      typescript: true,
      react: true,
      jest: false,
      rstest: false,
      sortImports: true,
      unusedImports: true,
      regexp: true,
      deMorgan: true,
      eslintComments: true,
    },
    fmt: {
      singleQuote: true,
      sortPackageJson: true,
      ignorePatterns: ['.github/**'],
    },
    staged: {
      formatAll: true,
      lintFix: true,
    },
  }),
]);
