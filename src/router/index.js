/*
 * @Author: gm.chen
 * @Date: 2020-12-24 16:11:16
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-12-29 22:54:14
 * @Description: file content
 * @FilePath: /vux-demo/src/router/index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

import resumeRouter from './modules/myResume'
import vuxRouter from './modules/vuxComponent'
import wxUIRouter from './modules/wxUI'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/401', component: () => import('@/views/error-page/401.vue') },
    { path: '/403', component: () => import('@/views/error-page/403.vue') },
    { path: '/404', component: () => import('@/views/error-page/404.vue') },
    {
      path: '/',
      name: 'Index',
      redirect: '/me/home'
    },
    {
      path: '/redirect',
      component: Layout,
      hidden: true,
      children: [
        {
          path: '/redirect/:path(.*)',
          component: () => import('@/views/redirect/index')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/login/index'),
      hidden: true
    },
    resumeRouter,
    vuxRouter,
    wxUIRouter,
    { path: '*', redirect: '/404' }
  ]
})
