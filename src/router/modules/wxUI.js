/*
 * @Author: gm.chen
 * @Date: 2020-12-29 20:22:29
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-12-29 23:24:06
 * @Description: file content
 * @FilePath: /vux-demo/src/router/modules/wxUI.js
 */

import Layout from '@/layout'
const wxUIRouter = {
  path: '/wx',
  component: Layout,
  redirect: '/wx/index',
  name: 'wxUI',
  children: [
    {
      path: 'index',
      name: 'indexWX',
      component: () => import('@/views/wxUI')
    },
    {
      path: 'page/401',
      name: 'Page401',
      component: () => import('@/views/error-page/401')
    },
    {
      path: 'page/403',
      name: 'Page403',
      component: () => import('@/views/error-page/403')
    },
    {
      path: 'page/404',
      name: 'Page404',
      component: () => import('@/views/error-page/404')
    }
  ]
}
export default wxUIRouter
