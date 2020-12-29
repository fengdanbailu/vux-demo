/*
 * @Author: gm.chen
 * @Date: 2020-12-29 20:22:29
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-12-29 22:53:35
 * @Description: file content
 * @FilePath: /vux-demo/src/router/modules/myResume.js
 */
import Layout from '@/layout'
const resumeRouter = {
  path: '/me',
  component: Layout,
  name: 'myResume',
  children: [
    {
      path: 'home',
      name: 'Home',
      component: () => import('@/views/vuxComponent/home')
    }, {
      path: 'helloWorld',
      name: 'HelloWorld',
      component: () => import('@/views/vuxComponent/home/HelloWorld')
    }
  ]
}
export default resumeRouter
