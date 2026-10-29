# 白炜钦 · UI / UX 设计师作品集

React + Vite 构建的个人作品集，包含太空动态首页、个人经历、车300与多点福利项目展示，以及个人生活相册。

## 本地运行

```sh
npm install
npm run dev
```

## GitHub Pages 发布

```sh
npm run build:pages
```

将源码和生成的 `docs/` 一起提交到 `main`。GitHub 仓库的 Settings → Pages 选择 **Deploy from a branch → main → /docs**。

构建使用相对资源路径，支持 GitHub Pages 仓库子目录。`docs/.nojekyll` 保证静态资源直接发布。项目页采用 hash 路由，可以直接分享对应地址。

## 内容与维护

- `src/main.jsx`：个人资料、项目内容与生活照片顺序。
- `src/ProjectDocument.jsx`：两个项目的连续长页展示。
- `public/projects/`：PDF 渲染后的项目图片与封面。
- `public/life/`：已去重并按登山、骑行旅行、陶艺分组的本人照片。
- `public/portrait.png`：个人名片彩色照片。

项目图片由本人提供的 PDF 按顺序导出，原始 PDF 保存在本地，不作为网站下载文件发布。

网站文字、设计作品、照片和封面素材的权利归原权利人所有；仓库公开不代表授予这些素材的转载或商用许可。素材记录见 `ASSETS.md`。