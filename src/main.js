/*
 * @Author: gm.chen
 * @Date: 2020-12-24 16:11:16
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-12-29 00:18:11
 * @Description: file content
 * @FilePath: /vux-demo/src/main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from '@/App'
import router from '@/router'

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
