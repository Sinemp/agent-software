## 清理范围

* 删除/替换所有与 Gemini 相关的代码与依赖，保留页面核心功能（版本展示/下载）。

* 目标：不再需要任何环境变量或后端能力，保证静态构建与部署最简单稳定。

## 具体改动

* `services/geminiService.ts`

  * 用桩实现替换：移除 `@google/genai` 引用与初始化，导出同名函数 `summarizeChangelog`，返回空字符串或固定文案（如：“AI 功能已禁用”）。

  * 作用：保持调用方不报错，避免引入密钥与第三方包。

* `components/ReleaseCard.tsx`

  * 简化 UI：删除“AI 智能摘要”按钮、点击事件与“更新摘要 (AI)”展示区块的 JSX。

  * 若选择保留结构：可保留调用但基于桩函数返回空字符串，使摘要区域不渲染。

* `index.html`

  * 清理 `importmap` 中 `@google/genai` 的映射项。

* `package.json`

  * 移除依赖 `@google/genai`。

* `vite.config.ts`

  * 删除 `define: { 'process.env.API_KEY': ... }` 的注入（不再使用）。

* 文案（可选）

  * `App.tsx` 与 `metadata.json`：去除“AI 智能分析/AI-powered”相关介绍，避免误导。

  * `README.md`：移除关于 `.env.local` 与 Gemini 密钥的说明。

## 验证步骤

* 本地执行 `npm run build`，确认构建成功且产物中不含任何 Gemini 相关引用。

* 打开页面验证：版本列表、下载链接、搜索/筛选等核心功能正常；不再出现 AI 按钮与摘要区域。

* 代码检索：搜索 `genai`、`API_KEY`、`GEMINI_API_KEY`，确认已清理干净。

## 风险与回退

* 若某处仍直接导入 `@google/genai`，在移除依赖后会构建失败；通过桩实现与检索确保无遗漏。

* 如需回退：保留桩实现但不显示 UI，即可快速恢复到“禁用 AI”状态。

## 部署设置（Vercel）

* Framework Preset：Vite（自动识别）。

* Install：无锁文件则 `npm install`；后续可加锁文件改用 `npm ci`。

* Build Command：`npm run build`。

* Output Directory：`dist`。

* Node：选择 18 或 20（推荐 20）。

* 环境变量：不需要任何密钥，保持最简洁安全。

—— 若确认，我将按上述步骤进行清理、验证构建，并为 Vercel 部署准备好最小化配置。