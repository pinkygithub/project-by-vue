module.exports = function (router, Vue, App) {
  // 组件
  //   Vue.component('header-component', require('./components/header'))
  //   Vue.component('footer-component', require('./components/footer'))
  //   Vue.component('index-left', require('./components/indexleft'))
  // 配置路由跳转
  // 定义路由规则
  router.map({
    '/login': {
      name: 'login',
      component: function (resolve) {
        require(['./views/login.vue'], resolve)
      }
    },
    '/register': {
      name: 'register',
      component: function (resolve) {
        require(['./views/register.vue'], resolve)
      }
    },
    '/forgotpassword': {
      name: 'forgotpassword',
      component: function (resolve) {
        require(['./views/forgotpassword.vue'], resolve)
      }
    },
    '/resetpassword': {
      name: 'resetpassword',
      component: function (resolve) {
        require(['./views/resetpassword.vue'], resolve)
      }
    },
    '/entrance': {
      name: 'entrance',
      component: function (resolve) {
        require(['./views/layouts/base.vue'], resolve)
      },
      subRoutes: {
        '/index': {
          name: 'index',
          component: function (resolve) {
            require(['./views/index.vue'], resolve)
          }
        },
        '/staff/index': {
          name: '/staff/index',
          component: function (resolve) {
            require(['./views/safe/staff/index.vue'], resolve)
          }
        },
        '/staff/edit': {
          name: '/staff/edit',
          component: function (resolve) {
            require(['./views/safe/staff/edit.vue'], resolve)
          }
        }
      },
      auth: true
    }

  })

  router.redirect({
    '/entrance': '/entrance/index',
    '*': '/login'
  })

  router.beforeEach(function (transition) {
    if (transition.to.auth) {
      let token = localStorage.getItem('jwt_token')
      if (!token || token === null) {
        router.go('/login')
      }
    }
    transition.next()
  })

  // 启动，路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
  // 默认启动路径
  router.go({ 'path': '/entrance' })

  // 路由起始位置
  router.start(App, '#app')
}
