// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import $ from 'jquery'
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

axios.interceptors.response.use(response => {
  //拦截器
  return response;
},error => {
  return Promise.reject(error)
});

Vue.prototype.$axios = axios;
