<!--
 * @Author: gm.chen
 * @Date: 2020-12-24 16:11:16
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-12-30 22:56:09
 * @Description: file content
 * @FilePath: /vux-demo/src/views/vuxComponent/home/index.vue
-->
<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="@/assets/vux_logo.png">
      <h1> </h1>
    </div>
    
    <group title="家人">
      <cell title="陈国明" value="男" is-link></cell>
      <cell title="张哈哈" value="女" is-link></cell>
    </group>
    <group title="工作">
      <cell title="同事1" value="男" is-link></cell>
      <cell title="同事2" value="女" is-link></cell>
      <cell title="同事3" value="男" is-link></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  components: {
    Group,
    Cell
  },
  data() {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<style lang="less">
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
