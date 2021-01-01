/*
 * @Author: gm.chen
 * @Date: 2020-12-29 20:22:29
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-01-01 23:02:16
 * @Description: file content
 * @FilePath: /vux-demo/src/router/modules/vuxComponent.js
 */

import Layout from '@/layout'
const vuxComponentRouter = {
  path: '/vux',
  component: Layout,
  redirect: '/vux/index',
  name: 'vuxComponent',
  children: [
    {
      path: 'index',
      name: 'indexVux',
      component: () => import('@/views/vuxComponent')
    },
    {
      path: 'basic/icon',
      name: 'BasicIcon',
      component: () => import('@/views/vuxComponent/basic/icon')
    },
    {
      path: 'basic/x-button',
      name: 'BasicXButton',
      component: () => import('@/views/vuxComponent/basic/x-button')
    },
    {
      path: 'basic/x-icon',
      name: 'BasicXIcon',
      component: () => import('@/views/vuxComponent/basic/x-icon')
    },
    {
      path: 'vchart/1',
      name: 'vchart1',
      component: () => import('@/views/vuxComponent/vchart/1')
    },
    {
      path: 'vchart/2',
      name: 'vchart2',
      component: () => import('@/views/vuxComponent/vchart/2')
    }
  ]
}
export default vuxComponentRouter
