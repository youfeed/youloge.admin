# Youloge.Console

开放平台控制台 Console

## 自行编译配置修改`\src\main.js`

```js
const config = {
  APIKEY:'8rR/lr0ugwqzUvB....2o25WQ', // 开发者KEY
  APIURL:"https://api.youloge.com", // API地址
  VIPURL:"https://vip.youloge.com", // VIP地址
  WWWURL:"https://www.youloge.com", // 开发者接口地址
}
```



##### 目录结构(无UI依赖)

```
├── src
│   ├── main.js // 入口文件
│   ├── App.vue // 入口模板
│   ├── assets
│   │   ├── css
│   │   │   ├── index.css
│   │   │   └── reset.css
│   │   └── js
│   │       └── index.js
│   ├── components // 组件
│   │   ├── App.vue
│   │   ├── ....vue
│   ├── composables // 组合式API
│   │   ├── useFetch.vue
│   │   ├── ....vue
│   ├── directives // 指令
│   │   ├── vCopy.vue
│   │   ├── ....vue
│   ├── utils // 工具
│   │   ├── index.js