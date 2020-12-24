/*
 * @Author: gm.chen
 * @Date: 2020-12-24 16:11:16
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-12-24 23:19:20
 * @Description: file content
 * @FilePath: /vux-demo/src/router/index.js
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/home')
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: () => import('@/views/test/HelloWorld')
    }, {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/test/HelloFromVux')
    },
    {
      path: '/v-chart/1',
      name: '1',
      component: () => import('@/views/v-chart/1')
    },
    {
      path: '/v-chart/2',
      name: '2',
      component: () => import('@/views/v-chart/2')
    }
  ]
})
