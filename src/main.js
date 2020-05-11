import Vue from 'vue'
import App from './App.vue'
import store from './store/index'

//导入自定义插件 toast
import toast from 'components/common/toast/index'
//安装自定义插件
Vue.use(toast)

//导入vue-lazyload 插件（图片懒加载）
import VueLazyLoad from 'vue-lazyload'
//安装插件
Vue.use(VueLazyLoad,{
  loading: require('./assets/img/common/placeholder.png')
})

//导入路由
import router from './router'

//添加事件总线 $bus
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false

// 导入 fastclick 插件
import FastClick from 'fastclick'
//使用fastclick 解决移动端点击300ms 延迟
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
