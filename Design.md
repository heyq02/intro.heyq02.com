# Design

个人介绍站，只有浅色。视觉基准是 [Lynx](https://lynxjs.org/zh/) 的文档内容盒，不是它的首页横幅，也不是带侧栏的文档壳。

后续改动先改 `src/App.css` 的 `@theme`，再改组件。动效时长从 CSS 变量读，不在 JS 里另写一套。

## 从 Lynx 留下的

内容盒最大宽度 1000px，含左右内边距。内边距：≥1280 为 80，≤1279 为 36，≤768 为 24；上下 48。导航高 64px，导航项间距 24px。正文 16px，行高 1.7。一级标题 32px。页头和正文共用这一层内边距。

强调色 `#ff351a`，辅色 `#12e5e5`，渐变中段 `rgba(239, 155, 255, 1)`，标题色 `#111113`。

这些不要搬过来：首页 56px 营销标题、960px 特性栅格、1015/500 断点、侧栏公式 `max((100vw - 1000 - 320 - 268) / 2, 20px)`。本站没有侧栏和大纲。

## 颜色

| 令牌                  | 值                         | 用途                                                                            |
| --------------------- | -------------------------- | ------------------------------------------------------------------------------- |
| `--color-background`  | `#fff`                     | 页面底                                                                          |
| `--color-foreground`  | `#242424`                  | 正文                                                                            |
| `--color-title`       | `#111113`                  | 标题、强调字                                                                    |
| `--color-muted`       | `#000000b3`                | 次级文字。已经带 0.7 透明度，图标上不要再叠 `opacity-70`                        |
| `--color-accent`      | `#ff351a`                  | 装饰：分区下划线、焦点环、姓名渐变、流星尾。白底对比约 3.6:1，不用作 14px 正文  |
| `--color-accent-text` | `#d62d16`                  | 小字强调、当前导航、链接悬停。白底对比约 4.9:1                                  |
| `--color-accent-glow` | `rgba(239, 155, 255, 1)`   | 渐变中段                                                                        |
| `--color-card`        | `#f8f8f9`                  | 备用表面                                                                        |
| `--color-border`      | `#0000001f`                | 备用描边                                                                        |
| `--color-grid`        | `rgba(128, 128, 128, 0.1)` | 背景网格。必须是这个 rgba。写成 `#808080` 会被 Tailwind 算成 `gray`，网格会发黑 |
| `--color-meteor-head` | `#12e5e5`                  | 流星头                                                                          |
| `--color-meteor-tail` | `#ff351a`                  | 流星尾                                                                          |
| `--color-ring`        | `var(--color-accent)`      | `:focus-visible` 轮廓，2px，偏移 3px                                            |

`--color-accent` 本身不加深，否则姓名渐变会一起变暗。

## 字体

京东朗正体，不换。

- 正文：`JINGDONGLangZhengTi1-Regular`
- `.font-medium`：`JINGDONGLangZhengTi1-Semibold`，`font-weight: 400`
- `.font-bold`：`JINGDONGLangZhengTi2-Bold`，`font-weight: 400`
- `font-synthesis: none`

回退：`ui-sans-serif, system-ui, sans-serif`。

## 字号

全站就这一档，卡片标题和公司名同一级，说明和元信息同一级。

| 角色                           | 规格                                                   |
| ------------------------------ | ------------------------------------------------------ |
| 姓名                           | 32px（`--text-h1`），中等字重，单行                    |
| 分区标题                       | 22px / 1.3，中等字重，底部 1px `--color-accent` 下划线 |
| 公司名、仓库名                 | 18px / 24px，中等字重                                  |
| 简介                           | 16px / 28px                                            |
| 经历条目、日期、仓库说明、星标 | 14px / 24px，`--color-muted`                           |
| 悬浮卡标题                     | 14px / 20px，中等字重                                  |
| 悬浮卡说明                     | 12px / 16px，`--color-muted`，可折成两行               |
| 页眉小标、导航                 | 14px                                                   |

## 版式

`lg`（1024px）起三列：`13.5rem`、弹性中栏、`11.5rem`，列距 48px，行距 40px。更窄时改成单列，间距 32px。

- 左栏：头像、姓名、简介、社交、电话、邮箱。左栏宽度保持 `13.5rem`，不要为姓名加宽。
- 中栏：经历。开源从中栏起，横跨中栏和右栏。
- 右栏：技能，三列图标。

头像 112px，`sm` 起 128px，圆形，4px 白色环，背后一圈 `--color-meteor-head` 20% 的光。

## 姓名

可见名称是「永琪（Ari）」。页标题和博客页头链接用这个全名。Bilibili 昵称「全栈糕手Ari」、掘金昵称「编程糕手Ari」保持原样。

打字：从空开始，打「永琪」，停 2s，删掉，打「Ari」，停 2s，删掉，循环。打字 140ms，删除 100ms。只给打出来的名字加渐变和闪烁光标。后面固定跟着「，全栈研发」，纯 `--color-title`，不带「AI」。

渐变方向 270deg：强调色、光晕、青色、光晕、强调色。

`prefers-reduced-motion` 时静态显示「永琪（Ari），全栈研发」，没有光标。`aria-label` 始终是全名。`useReducedMotion()` 只有在返回 `false` 时才播放。

## 经历

只保留北京京东世纪贸易有限公司。没有公司徽标，没有职位。公司名可点到官网，新标签打开。日期用 `tabular-nums`。

条目用 14px 圆点列表。现有三句保持用户原文，不改写。

## 开源

只展示 GitHub 置顶的两个仓库：`jd-opensource/taro-ui`、`heyq02/simpleicons.dev`。数据写在 `src/site.ts`，不在运行时请求。

信息参照 GitHub 置顶卡：仓库名、说明、语言色点、星标，fork 为 0 时不显示。外观参照 Lynx 的选项卡，不做成 GitHub 组件。

卡片：圆角 14px，`border-title/8`，白底，浅阴影。悬停描边收到 `border-title/16`。说明 `line-clamp-2`，截断是故意的。

星数：小于 1000 显示整数，否则一位小数加 `k`，去掉末尾 `.0`。

## 技能

顺序：

1. Vue、React、Next
2. Rolldown、Vite、Oxc
3. Spring、Redis、RabbitMQ
4. Nginx、Docker

图标 20px，点按区域 36×36，圆角 8px。悬停底 `title` 8%、描边 `title` 12%。点击新标签打开官网。

悬浮卡出现在图标下方，延迟 150ms，`pointer-events-none`，避免挡住点击。结构是图标、名称、一句说明。说明按各家官网的定义收短，可以两行，文字列宽 `11rem`。Next 的定义是「面向 Web 的 React 框架」，对应官网首页 _The React Framework for the Web_。

移动端没有悬停，点按直接跳转。不要为了移动端改成常驻卡片或状态面板。

品牌匹配在 `src/brands.ts`：全名相等，或标签以「名称 + 空格 / 中文括号」开头。更长的名字必须排在更短的前面，例如 Spring Boot 在 Spring 之前。目录里可以有未展示的品牌，不要因此把它们加回网格。

## 联系方式

图标 20px，点按区域 24×24，全部新标签打开。顺序：GitHub、X、Bilibili、掘金、微信。微信链到 `/wechat.jpg`。没有 Bluesky。

电话是掩码 `+86 135****8086`，纯文本，不是 `tel:` 链接。邮箱是 `mailto:`。

## 博客

空状态文案：「文章写在这个站点里。现在还没有篇目。」有文章时，标题 18px，日期和摘要 14px。

## 背景与标记

网格画在 `MeteorsBackground` 上。格子固定 120px，边缘余数留着，不把格子撑满视口。画布 `pointer-events-none absolute inset-0`，不要设 `z-index: -1`。`lineWidth` 是 1 CSS 像素：先按设备像素比设置画布尺寸，再 `setTransform(dpr)`。减少动效时只画网格。

站点图标是圆角方标上的「永」，字重为朗正粗体，沿品牌渐变（红在右、紫在中、青在左），角是透明的。文件是 `public/favicon.png`，256×256。换这个文件后要重启 `pnpm dev`，Rsbuild 会在启动时快照 `public`。

## 动效

- 默认过渡 180ms，`cubic-bezier(0.16, 1, 0.3, 1)`
- 慢过渡 420ms，用于出现
- 减少动效时动画和过渡压到接近 0，滚动改为 `auto`

## 已定边界

- 浅色唯一。
- 小字强调用 `--color-accent-text`，装饰用 `--color-accent`。
- 技能说明来自官网定义，彼此不要写成同一句。
- 开源说明保持两行截断。
- 技能交互就是悬停出卡片、点击跳转。
- 网格色保持 `rgba(128, 128, 128, 0.1)`。

已知限制：技能悬浮卡宽约 234px，比右栏 184px 更宽。1024px 附近和更窄的宽度上，透明度为 0 的卡片仍会把页面撑出横向滚动。改交互方式之前，先处理这个滚动。
