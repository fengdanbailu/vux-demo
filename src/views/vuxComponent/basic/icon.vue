<!--
 * @Author: gm.chen
 * @Date: 2020-12-24 16:11:16
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-01-01 23:16:49
 * @Description: file content
 * @FilePath: /vux-demo/src/views/vuxComponent/basic/icon.vue
-->

<template>
  <div >
      组件名：{{componentName}}
      <icon type="success"></icon>
      <icon type="info"></icon>
      <icon type="info-circle"></icon>
      <icon type="warn"></icon>
      <icon type="waiting"></icon>
      <icon type="waiting-circle"></icon>
      <icon type="safe-success"></icon>
      <icon type="safe_warn"></icon>
      <icon type="success-circle"></icon>
      <icon type="success-no-circle"></icon>
      <icon type="circle"></icon>
      <icon type="download"></icon>
      <icon type="cancel"></icon>
      <icon type="search"></icon>
      <icon type="clear"></icon>
      <br/>
      <icon type="success" is-msg></icon>
      <icon type="info" is-msg></icon>
      <icon type="warn" is-msg></icon>
      <icon type="waiting" is-msg></icon>
      <icon type="safe_success" is-msg></icon>
      <icon type="safe_warn" is-msg></icon>
  </div>
</template>

<script>
import { Icon } from 'vux'

export default {
    name: 'BasicIcon',
    components: {
        Icon
    },
    data() {
        return {
        componentName:"icon"
        }
    }
}
</script>

<style scoped>

</style>
