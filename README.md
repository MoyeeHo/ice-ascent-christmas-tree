# Ice Ascent · 冰岩圣诞树

冷色岩点圣诞树，24 条路线：V3 × 4、V4 × 5、V5 × 8、V6 × 7。

点击岩点启动火柴人攀爬，登顶后弹出对应视频并跳下。攀爬期间暂停自动旋转，支持拖动或触屏滑动。角落按钮累计点击 7 次才显示控件；视频弹窗仅显示画面与关闭按钮。

包含 16 个视频，后 8 条路线复用前 8 个视频。默认沉浸查看，流光关闭。

## 运行

通过静态服务器访问，例如在本目录运行 python -m http.server 8000。Three.js 0.160.0 随网站提供；可选摄像头手势功能仍需联网加载 MediaPipe。

## 来源

基于 [Vita0519/ChristmasTree](https://github.com/Vita0519/ChristmasTree) 修改。Three.js 的 MIT 许可证位于 vendor/three/LICENSE。路线评级和火柴人动作是视觉动画设计，并非实体岩壁定线或人体物理仿真。

