import Vue from 'vue'
import Router from 'vue-router'
import {login,home,life} from "@/router/components";
import Wrap from '@/components/Wrap.vue'
Vue.use(Router)

const routes =[
  {path: '/', name: 'login',menu:true, component: login},//登录页面
  {path:'/home',name:'home',menu:true,component:home,},//主页面
  {path:'/life',name:'life',menu:true,text:'生活测试页面',component:life},//测试菜单路由页面
]
export default new Router({
  mode: 'hash',
  routes,
  strict: process.env.NODE_ENV !== 'production'
})
