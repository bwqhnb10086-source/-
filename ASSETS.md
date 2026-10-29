# 宇宙主视觉

工具：内置 image_gen。

最终提示词：

Create an ultrawide cinematic background image for a sophisticated UI designer portfolio website. Deep black blue space with a vast black hole centered in LOWER HALF, immense blue-white gravitational lensing halo, thin luminous electric blue outer ring, creamy white inner accretion glow, dark central sphere, lower half of ring partially cropped at bottom edge. Upper 40 percent mostly empty very dark space for centered typography to be added later. Extremely sparse realistic stars, no nebula rainbow, no spacecraft. Like a photorealistic IMAX Interstellar gravitational lensing scene, profound scale, restrained premium atmosphere, subtle film grain. Landscape 16:9 or wider. Absolutely no text, no UI, no lettering.

文件：public/space-hero.png。

行星纹理：Solar System Scope，CC BY 4.0，https://www.solarsystemscope.com/textures/ 。

## 当前首页封面
当前使用用户提供的第二张《星际穿越》黑洞剧照：public/interstellar-cover.png。只显示这一张，不做轮播。38 秒往返周期的缩放、平移与极轻旋转提供缓慢漂移效果；右下角可暂停，系统减少动态效果设置下停止动画。原生成图保留但已不作为首页背景。

动效调整：背景推进改为 18 秒单程，并叠加 10 秒柔和光带移动，以增强可感知性。保留暂停和减少动态效果支持。

## Galaxy 全站动态星空
采用用户粘贴的 React Bits Galaxy JavaScript + CSS 组件，基于 WebGL2，无新增运行时依赖。五层星空、缓慢飞行与旋转、轻微鼠标排斥；点击加速关闭。支持减少动态效果、后台停止绘制，WebGL2 不可用时显示静态星点。来源：https://reactbits.dev/backgrounds/galaxy 。

## ProfileCard 个人名片
采用用户提供的 React Bits ProfileCard JavaScript + CSS 组件，使用本人彩色照片与姓名，启用鼠标倾斜、照片视差与柔和全息高光。联系按钮跳转站内联系区；介绍、技能、工作及教育经历位于卡片下方。图标依赖为 @hugeicons/react 与 @hugeicons/core-free-icons。

Galaxy 最新配置：按用户第二份代码使用 density=0.45、starSize=0.5、starSpeed=0.5，白/暖金/淡蓝星色，关闭鼠标排斥与鼠标交互，关闭入场冲刺。背景层 z-index=0，主体层 z-index=1，背景不覆盖照片和按钮；点击按钮、链接或个人卡片不触发背景加速。

## FlexCarousel 生活相册
采用用户提供的 React Bits FlexCarousel，依赖 ogl。liquid 弯曲效果、rise 入场、拖动惯性、点击放大、方向键切换和 Esc 退出，5 秒自动切换；垂直滚轮不接管。三张临时生活示意图存放在 public/life-*.jpg，后续只需替换 src/main.jsx 顶部 lifeItems 列表。背景星空保持在相册下面。

生活相册已替换为用户提供的 12 张不同生活照片，原图存于 public/life/。15 个附件通过像素内容哈希去重，移除第 7 张（与第 6 张相同）、第 11 和第 12 张（与第 10 张相同）；保留不同角度、不同内容的照片及骑行记录图。

## HoloCard 项目入口
采用用户提供的 React Bits HoloCard，两个项目在 PC 端并排，链接分别进入独立项目页。没有使用 Pikachu 或其他示例角色图片；暂以项目名称与摘要作文字占位，收到封面后设置 src/main.jsx 中项目的 cover 路径即可。全息反光、边缘闪光、鼠标倾斜及轻微待机光效已启用。

## 车300 正式项目资料
用户提供的 0-2.pdf 至 0-17.pdf 按数字顺序合并为 public/projects/car300/car300-portfolio.pdf，共 16 页，已核验页内容与顺序。各页以原始比例渲染为 WebP，在独立项目页连续展示；封面从 0-2.pdf 顶部封面区域提取。Galaxy 背景参数和源代码没有变更。

## 多点福利正式资料与卡片简化
0-18.pdf 至 0-31.pdf 共 15 页，0-26-1.pdf 位于 0-26.pdf 后。已按序合并 public/projects/duodian/duodian-portfolio.pdf 并逐页核对内容，网站使用顺序长页展示。0-18 全页作为多点福利封面。两项目入口只渲染实际封面 img，不再渲染 HoloCard、全息纹理、彩色圆圈或文字叠层。Galaxy 背景不变。

导航与卡片统一：首页和独立项目页共用 SiteNavigation，固定磨砂条，只保留关于我、精选作品、设计之外，统一跳转首页相应位置。两项目卡片使用等宽等高 4:3 画框，封面等比裁切铺满，详情页保留完整比例。

## ChromaGrid 项目卡片
使用用户提供的 React Bits ChromaGrid，只传入车300和多点福利两项，PC 端两列等大。grayscale=0、dim=0，并关闭悬停亮度滤镜，保持原始颜色。保留跟随光标的边框高光与轻微悬浮。封面依旧取自0-2和0-18，CSS裁切焦点分别为50% 90%（手机）和82% 50%（小鸡IP），不修改原图。项目链接在当前页面打开。

## PillNav 顶部导航
采用用户提供的 React Bits PillNav，保留关于我/#about、精选作品/#projects、设计之外/#life。顶部固定、磨砂胶囊、滑动高亮。首页无Logo；单独项目展示页加左侧圆形返回按钮，路径为#projects，返回首页卡片区。
