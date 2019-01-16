// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import '../node_modules/element-ui/lib/theme-chalk/index.css';//elementUI的样式文件要单独引入
Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


var httpClient = axios.create();
httpClient.defaults.timeout = 5000;
httpClient.defaults.baseURL = "http://47.105.61.82";

Vue.prototype.$axios = httpClient;//将axios改写为Vue的原型属性，解决其它组件中无法使用axios命令的问题


