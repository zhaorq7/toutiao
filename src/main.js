import Vue from 'vue'
import App from './App.vue'
import router from './permission'
import ElementUI from 'element-ui'
import Component from './components' // 自定义组件
// import axios from 'axios'
import axios from './utils/axios.config'
import 'element-ui/lib/theme-chalk/index.css'
import './style/index.less'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Component)
// // axios.defaults.baseURL = 'http://yapi.demo.qunar.com/mock/87996/toutiao/v_1.0'
// axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
