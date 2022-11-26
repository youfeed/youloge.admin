# 这是一个学习项目 欢迎PR [副仓库]

这是 二个项目 `自己构建UI组健库` 和 `vue-route 单页应用` 这套准备来开发一个管理后台的，

今天找vue admin 时候看到 [ArcoDesign 今日头条](https://arco.design/) 觉得很不错，所以将之前用`vue-cli` 搭建学习的ui组件库，转移到`vite`来，折腾了一整天，刚开始我在哪里狂整`rollup.config.js` 各种缺失报错，其实 `vite build lib`直接可以用的，`scss` 以及 `css 变量`，整通了就发现哇这弯路走的，干～

### 项目结构


``` TREE
project
│
└───packages 不用npm install
│   │   
│   │   index.js UI组件库的入口
│   │
│   └───components
│       │   button
│       │   input
│       │   components.js 统一导出组件
│       │   ...
│       │   
│   └───function
│       │   alert
│       │   ...
│       │   function.js 统一导出函数组件
│   └───...
│   
└───src
    │   assets 静态资源
    │   route 路由
    │   components 组件
    │   views 视图文件
    │   ...
│   vite.config.js 项目默认的配置
│   libs.config.js 打包组件库配置
│   package.json   项目依赖和脚本
 
```

> `git pull` 项目之后 `npm i`

1. 先到 `package.json` 运行 `npm run build:lib` 打包出`UI目录`，项目需要依赖这个UI库。

2. 再次运行  `npm run dev` ...

3. 然后爬组件 写项目吧


#### 我边学边写，前端真好玩，哈哈哈～～ 欢迎加微信 交流 11247005，如果你提交代码，我认真学习谢谢

> 参考链接 也是我后面更新学习来源

- [前端小野森森-1](https://space.bilibili.com/378372969)
- [MZL 轻量级Vue3组件库](https://mzlui.codeym.com/#/)
- [ArcoDesign 今日头条](https://arco.design/)
- [Vant 有赞UI库*](https://vant3.uihtm.com/#/zh-CN)


