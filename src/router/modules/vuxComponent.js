/*
 * @Author: gm.chen
 * @Date: 2020-12-29 20:22:29
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-12-29 22:46:08
 * @Description: file content
 * @FilePath: /vux-demo/src/router/modules/vuxComponent.js
 */

import Layout from '@/layout'
const vuxComponentRouter = {
  path: '/vux',
  component: Layout,
  name: 'vuxComponent',
  children: [
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