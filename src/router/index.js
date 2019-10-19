import Vue from 'vue'
import VueRouter from 'vue-router'
import MainTab from '../views/main-tab/MainTab.vue'
import Home from '../views/main-tab/Home.vue'
import Goods from '../views/main-tab/Goods.vue'
import Message from '../views/main-tab/Message.vue'
import Personal from '../views/main-tab/Personal.vue'

Vue.use(VueRouter)

const routes = [
  // 主页 tab
  {
    path: '/',
    component: MainTab,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/goods',
        name: 'goods',
        component: Goods,
      },
      {
        path: '/message',
        name: 'message',
        component: Message,
      },
      {
        path: '/personal',
        name: 'personal',
        component: Personal,
      },
    ],
  },
  // 发布页
  {
    path: '/publish',
    name: 'publish',
    component: () => import(/* webpackChunkName: "publish" */ '../views/Publish.vue')
  },
  // 求带详情页
  {
    path: '/askDetail',
    name: 'askDetail',
    component: () => import(/* webpackChunkName: "askDetail" */ '../views/AskDetail.vue')
  },
  // 沟通页
  {
    path: '/chat',
    name: 'chat',
    component: () => import(/* webpackChunkName: "chat" */ '../views/Chat.vue')
  },
  // 带购确认页
  {
    path: '/buyConfirm',
    name: 'buyConfirm',
    component: () => import(/* webpackChunkName: "buyConfirm" */ '../views/BuyConfirm.vue')
  },
  // 带购清单
  {
    path: '/buyList',
    name: 'buyList',
    component: () => import(/* webpackChunkName: "buyList" */ '../views/BuyList.vue')
  },
  // 求带清单
  {
    path: '/askList',
    name: 'askList',
    component: () => import(/* webpackChunkName: "askList" */ '../views/AskList.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
