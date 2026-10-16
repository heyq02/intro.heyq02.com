export interface Span {
  start: string;
  end: string;
  bullets: string[];
}

export type Experience = Span & {
  company: string;
  href: string;
  role: string;
};

export type ResumeProject = Span & {
  name: string;
  role: string;
};

export const skillGroups = [
  { id: 'languages', label: '语言' },
  { id: 'frameworks', label: '框架' },
  { id: 'engineering', label: '工程化' },
  { id: 'tools', label: '工具' },
  { id: 'infra', label: '基础设施' },
] as const;

export type SkillId = (typeof skillGroups)[number]['id'];

export const resume = {
  name: '贺永琪',
  title: '前端开发工程师',
  email: 'mail@heyq02.cn',
  github: 'https://github.com/heyq02',
  summary:
    '南京邮电大学生物医学工程本科，2024 校招加入京东做前端。从 M 站和 Taro 转 H5 做起，后来负责到店订详、囤好券、自流帝，以及外卖商家的财务、结算和发票。2026 年下半年起负责家政运营后台。',
  skills: {
    languages: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Rust（基础）'],
    frameworks: ['Vue', 'React', 'Taro'],
    engineering: [
      'Webpack',
      'Vite',
      'Rspack（配置与插件）',
      'Node.js 原生插件（了解）',
    ],
    tools: ['Git', 'CI/CD', 'Lint', 'Figma', '抓包调试'],
    infra: ['Linux', 'Docker', 'Vim', 'Nginx（基础）'],
  } satisfies Record<SkillId, string[]>,
  experiences: [
    {
      company: '北京京东世纪贸易有限公司',
      href: 'https://www.jd.com/',
      role: '软件开发工程师（前端）',
      start: '2024.06',
      end: '至今',
      bullets: [
        '2024 年下半年在 M 站做榜单，并把榜单页做成 H5；同时参与品牌馆、LOC、自流帝的 Taro 转 H5，以及到家官网、店铺装修、主数据等 PC 需求。',
        '2024 年四季度独立支撑 LOC，上线 4 个迭代。同一季度完成 18 个需求，全部如期提测。另写了 M 站脚手架：按配置打包、初始化模板、锁定依赖，12 月接上预发和正式环境的自动构建。',
        '2025 年上半年负责到店订详和囤好券订详。上半年承接 63 个需求，写出 33 篇技术方案。LOC 核心链路新增 61 个埋点，告警收到会阻断操作的点上。',
        '对象存储做成 Node 服务，用私有包接到 M 站生产环境。微信原生标签引流收成可复用的 React 组件。',
        '2025 年下半年起负责外卖财务、结算、发票和自流帝。商家中心用 CDN 和 Chunk 拆包，编译时间缩短 65%，包体积减小 68%。',
        '写了 mcli，四套环境一键部署，接入百补和囤好券频道，累计部署超过 100 次。jss-node-sdk 把 M 站、商家中心和运营平台的静态资源迁到对象存储。',
        '参与财务管理页面的性能指标，7 个页面首屏时间低于 2.6 秒。售后管理规则页用 AI 从 Vue 2 迁到 Vue 3 并上线；单文件组件转 Web Components 做到预发。',
        '2026 年上半年同时负责财务、结算、发票、自流帝、到店订详和服务商系统，需求全部如期交付，平均缺陷密度 0.03。埋点方案可以落到 Vue 组件的 SPM 调用，NPS 宣发浮层已上线。',
      ],
    },
    {
      company: '江苏群杰物联科技有限公司',
      href: 'https://www.qunje.com/',
      role: '前端开发工程师',
      start: '2023.07',
      end: '2024.02',
      bullets: [
        '从零搭建并迭代政务版小程序前端，用 Vue 实现动态交互。',
        '维护后台管理系统，修复缺陷并做响应与处理效率方面的优化。',
        '与后端对齐数据交互，编写规范代码与技术文档。',
      ],
    },
    {
      company: '江苏汇鑫融智软件科技有限公司',
      href: 'http://www.joinforwin.com/',
      role: '前端开发工程师',
      start: '2023.02',
      end: '2023.07',
      bullets: ['基于公司低代码平台二次开发后台管理页面。'],
    },
  ] satisfies Experience[],
  projects: [
    {
      name: '京东家政运营管理系统',
      role: '前端需求开发',
      start: '2026.08',
      end: '至今',
      bullets: [
        '负责运营后台前端需求（React）：劳动者正向激励任务的配置与导出、供应商信息与服务范围、履约时效和操作日志、奖惩金额与开票入口，以及线上问题修复。',
      ],
    },
    {
      name: '服务商系统',
      role: '主研发',
      start: '2026.01',
      end: '2026.06',
      bullets: ['负责服务商系统的需求交付，并补上核心链路监控。'],
    },
    {
      name: '外卖商家中心',
      role: '财务、结算、发票负责人',
      start: '2025.07',
      end: '至今',
      bullets: [
        '负责商家端财务、结算和发票。CDN 与 Chunk 拆包后，编译时间缩短 65%，包体积减小 68%；7 个财务管理页面首屏时间低于 2.6 秒。',
        '2026 年上半年把商家端和运营平台共 2 个 Vue 2 页面升到 Vue 3，新需求和存量改造改用 dong 组件。',
      ],
    },
    {
      name: '到店订详',
      role: '主研发',
      start: '2024.10',
      end: '至今',
      bullets: [
        '从 LOC 订详接到到店订详，2025 年同时负责囤好券订详。核心链路补了 61 个埋点，并按监控做回滚和降级。',
      ],
    },
    {
      name: '自流帝',
      role: '主研发',
      start: '2024.10',
      end: '至今',
      bullets: [
        '参与 Taro 转 H5，之后负责这条业务的需求交付，并去掉未登录告警的无效上报。',
      ],
    },
    {
      name: '商品榜单',
      role: '前端开发',
      start: '2024.07',
      end: '2024.12',
      bullets: [
        '做榜单需求，服务线下开单收银。四季度把榜单做成 H5 并达到提测，主要配合测试改样式和缺陷。',
      ],
    },
  ] satisfies ResumeProject[],
  education: {
    school: '南京邮电大学',
    degree: '本科',
    major: '生物医学工程',
    start: '2020',
    end: '2024',
    certificates: ['大学英语四级'],
  },
};
