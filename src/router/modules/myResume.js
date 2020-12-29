/*
 * @Author: gm.chen
 * @Date: 2020-12-29 20:22:29
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-12-29 23:23:02
 * @Description: file content
 * @FilePath: /vux-demo/src/router/modules/myResume.js
 */
import Layout from '@/layout'
const resumeRouter = {
  path: '/me',
  component: Layout,
  redirect: '/me/index',
  name: 'myResume',
  children: [
    {
      path: 'index',
      name: 'indexMe',
      component: () => import('@/views/myResume')
    },
    {
      path: 'home',
      name: 'Home',
      component: () => import('@/views/vuxComponent/home')
    },
    {
      path: 'helloWorld',
      name: 'HelloWorld',
      component: () => import('@/views/vuxComponent/home/HelloWorld')
    }
  ]
}
export default resumeRouter
