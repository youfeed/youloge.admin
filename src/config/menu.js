export default {
  left:[
    {
      name: '云盘文件',
      path: '/drive',
      icon: 'center-focus-strong',
      children: [
        {
          name: '文件概述',
          path: '/drive/overview',
          icon: 'rainbow',
        },
        {
          name: '文件预览',
          path: '/drive/review',
          icon: 'rainbow',
        }
      ]
    },{
      name: '文章新闻',
      path: '/article',
      icon: 'center-focus-strong',
      children:[
        {
          name: '文件概述',
          path: '/article/overview',
          icon: 'rainbow',
        },
      ]
    }
  ],
  right:[
    {
      name: '个人中心',
      path: '/profile',
      icon: 'user-circle',
      children:[
        {
          name: '开发者账户',
          path: '/profile/index',
          icon: 'rainbow',
        },
      ]
    }
  ]
}
