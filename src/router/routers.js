const routers = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: resolve => require(['../page/Index'], resolve),
    name: 'Index',
    meta: {
      navShow: false,
      tabShow: true,
      keepAlive: false,
      title: '主页'
    }
  },
    {
      path: '/frontend',
      component: resolve => require(['../components/FrontEnd'], resolve),
      name: 'FrontEnd',
      meta: {
        navShow: true,
        tabShow: true,
        keepAlive: false,
        title: '前端'
      }
    },
    {
      path: '/video',
      component: resolve => require(['../components/Video'], resolve),
      name: 'Video',
      meta: {
        navShow: false,
        tabShow: true,
        keepAlive: false,
        title: '休闲视频'
      }
    },
    {
      path: '/image',
      component: resolve => require(['../components/Image'], resolve),
      name: 'Image',
      meta: {
        navShow: false,
        tabShow: true,
        keepAlive: false,
        title: '图片'
      }
    },
    {
      path: '/resource',
      component: resolve => require(['../components/Resource'], resolve),
      name: 'Resource',
      meta: {
        navShow: false,
        tabShow: true,
        keepAlive: true,
        title: '资源'
      }
    },
  ]
  export default routers