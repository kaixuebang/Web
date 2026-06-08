# 凯学邦官网 (Kaixuebang Web)

这是 **凯学邦 (Kaixuebang)** 的官方网站前端仓库。

## 🌐 网站预览
- **访问地址**: [https://kaixuebang.com](https://kaixuebang.com)
- **关于我们**: [https://kaixuebang.com/about](https://kaixuebang.com/about)

## 🚀 技术栈
- **框架**: Next.js 16 (App Router)
- **国际化**: next-intl(中文 / 英文双语)
- **样式**: Tailwind CSS 4
- **动效**: CSS 动画 / 滚动渐显
- **可视化**: Canvas 知识图谱引擎
- **部署**: Cloudflare Pages(静态导出 `output: 'export'`)

## 📖 项目定位
凯学邦致力于构建全场景教育智能化基础设施。本仓库承载了品牌形象展示、产品矩阵导航以及公司愿景的传递。

## 🛠️ 开发指南

```bash
# 安装依赖
npm install

# 启动开发服务器(访问 http://localhost:3000/zh 或 /en)
npm run dev
```

> 站点采用语言前缀路由(`/zh`、`/en`)。根路径 `/` 的语言自动跳转由
> Cloudflare Pages Function(`functions/index.js`)在线上处理,本地开发请直接访问 `/zh` 或 `/en`。

## 🚢 部署(Cloudflare Pages)

仓库已接入 Cloudflare Pages,推送到 `main` 即自动构建发布:

| 配置项 | 值 |
| --- | --- |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node 版本 | 22(见 `.nvmrc`) |

`functions/` 目录会被 Cloudflare 自动识别为边缘函数,负责根路径按浏览器语言自动跳转。

```bash
# 本地完整预览(含边缘函数,需 wrangler)
npm run build
npx wrangler pages dev out
```

## 📬 联系我们
- **商务合作**: [contact@kaixuebang.com](mailto:contact@kaixuebang.com)
- **GitHub**: [@kaixuebang](https://github.com/kaixuebang)

---
© 2025 上海凯学邦信息咨询有限公司
