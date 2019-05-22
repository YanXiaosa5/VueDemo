import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import node from '@/components/node'
import Manifests from '@/components/manifests/Manifests'
import Daily from '@/components/daily/Daily'
import Yearly from '@/components/yearly/Yearly'
import Monthly from '@/components/monthly/Monthly'

Vue.use(Router)

export default new Router({
  routes: [
    { name: '子节点', path: '/', component: node },
    { name: "manifests", path: "/manifests", component: Manifests },
    { name: "daily", path: "/daily", component: Daily },
    { name: "monthly", path: "/monthly", component: Monthly },
    { name: "yearly", path: "/yearly", component: Yearly }
  ]
})
