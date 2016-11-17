// Plugins
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Toast from './plugins/toast'
import VueValidator from "vue-validator"
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Toast)
Vue.use(VueValidator)

// 把默认的{{ }} 改成ES6的模板字符串 ${ }
Vue.config.delimiters = ['${', '}']
    // 如果服务器不支持被编码为 application/json 的请求，需要开启 emulateJSON 选项，它会将请求作为 application/x-www-form-urlencoded 的MIME类型发送。
Vue.http.options.emulateJSON = true
    // 如果服务器不支持 PUT、PATCH、DELETE等 verbs ，需要开启 emulateHTTP 选项，它将设置 X-HTTP-Method-Override 头，将请求降级为正常的HTTP请求
Vue.http.options.emulateHTTP = true
Vue.config.devtools = true
Vue.config.debug = true

// // Style
// import '../../static/css/bootstrap.min.css';
// import '../../static/font-awesome/css/font-awesome.css';
// import '../../static/css/animate.css';
// import '../../static/css/style.css';
// import '../../static/css/stp.css';

// // // // Js
// import './static/js/plugins/pace/pace.min.js';
// Components
import App from './App'

// Directives
// import ColMenu from './directives/collapseMenu'
// Vue.directive('colmenu', ColMenu)

// Interceptors
import authConfig from './interceptors/auth_interceptor'
authConfig(Vue)

// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置
let router = new VueRouter()
require('./router')(router, Vue, App)
window.router = router



