<!--
 * @Author: gm.chen
 * @Date: 2020-12-24 16:11:16
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-12-29 19:19:11
 * @Description: file content
 * @FilePath: /vux-demo/src/App.vue
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
body {
  background-color: #fbf9fe;
}
</style>
