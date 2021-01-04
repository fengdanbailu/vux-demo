<!--
 * @Author: gm.chen
 * @Date: 2020-12-24 16:11:16
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-01-04 23:34:32
 * @Description: file content
 * @FilePath: /vux-demo/src/views/vuxComponent/basic/x-button.vue
-->

<template>
  <div >
      组件名：{{componentName}}
    <box gap="10px 10px">
      <divider>type</divider>
      <x-button type="default">default</x-button>
      <x-button type="primary">primary</x-button>
      <x-button type="warn">warn</x-button>

      <divider>Link & Disabled</divider>
      <x-button type="primary" :disabled="false" link="/vux/index">Link</x-button>
      <x-button type="primary" :disabled="true" link="/vux/index">Disable Link</x-button>
      <x-button type="primary" :disabled="false" link="BACK">返回</x-button>

      <x-button type="default" :disabled="false" link="/vux/index">Link</x-button>
      <x-button type="default" :disabled="true" link="/vux/index">Disable Link</x-button>
      <x-button type="default" :disabled="false" link="BACK">返回</x-button>

      <x-button type="warn" :disabled="false" link="/vux/index">Link</x-button>
      <x-button type="warn" :disabled="true" link="/vux/index">Disable Link</x-button>
      <x-button type="warn" :disabled="false" link="BACK">返回</x-button>

      <divider>action type</divider>
      <x-button type="primary" action-type="submit">submit</x-button>
      <x-button type="primary" action-type="button">button</x-button>
      <x-button type="primary" action-type="reset">reset</x-button>

      <divider>loading</divider>
      <x-button type="default" show-loading>default</x-button>
      <x-button type="primary" show-loading>primary</x-button>
      <x-button type="warn" show-loading>warn</x-button>

      <divider>mini</divider>
      <x-button mini>submit</x-button>
      <x-button mini type="primary">primary</x-button>
      <x-button mini type="warn">warn</x-button>
      
      <x-button mini plain>default-plain</x-button>
      <x-button mini plain type="primary">primary-plain</x-button>
      <x-button mini plain type="warn">warn-plain</x-button>

      <x-button mini disabled>disable mini default</x-button>
      <x-button mini type="primary" disabled>disable mini primary</x-button>
      <x-button mini type="warn" disabled>disable mini Delete</x-button>

      <x-button mini plain disabled>default-plain-mini-disabled</x-button>
      <x-button mini plain type="primary" disabled>primary-plain-mini-disabled</x-button>
      <x-button mini plain type="warn" disabled>warn-plain-mini-disabled</x-button>


      <divider>plain</divider>
      <x-button plain>submit</x-button>
      <x-button plain type="primary">primary</x-button>
      <x-button plain type="warn">warn</x-button>

      <x-button plain disabled>disable plain</x-button>
      <x-button plain type="primary" disabled>disable plain primary</x-button>

      <divider>you can customize styles</divider>
      <x-button plain type="primary" style="border-radius:99px;">primary</x-button>
      <x-button plain type="primary" class="custom-primary-red">primary</x-button>

      <divider>use :text and :disabled</divider>
      <x-button :text="submit001" :disabled="disable001" @click.native="processButton001" type="primary"></x-button>

      <divider>combined with flexbox</divider>
      <flexbox>
        <flexbox-item>
          <x-button type="primary">primary</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button type="warn">Delete</x-button>
        </flexbox-item>
      </flexbox>
      
      <flexbox style="margin-top:10px;">
        <flexbox-item>
          <x-button type="default">default</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button type="primary">primary</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button type="warn">Delete</x-button>
        </flexbox-item>
      </flexbox>

    </box>

    <divider>iOS Gradients(v2.7.4)</divider>
    <box gap="10px 10px">
      <x-button :gradients="['#1D62F0', '#19D5FD']">iOS Gradients</x-button>
      <x-button :gradients="['#A644FF', '#FC5BC4']">iOS Gradients</x-button>
      <x-button :gradients="['#FF2719', '#FF61AD']">iOS Gradients</x-button>
      <x-button :gradients="['#6F1BFE', '#9479DF']">iOS Gradients</x-button>
      <x-button :gradients="['#FF5E3A', '#FF9500']">iOS Gradients</x-button>
    </box>
  </div>
</template>

<script>

import { XButton, Box, GroupTitle, Group, Flexbox, FlexboxItem, Divider } from 'vux'

export default {
  name: 'BasicIcon',
  data() {
    return {
      componentName:"xButton"
    }
  },
  components: {
    XButton,
    Box,
    GroupTitle,
    Group,
    Flexbox,
    FlexboxItem,
    Divider
  },
  methods: {
    change (value) {
      console.log('change:', value)
    },
    processButton001 () {
      this.submit001 = 'processing'
      this.disable001 = true
    }
  },
  data () {
    return {
      submit001: 'click me',
      disable001: false
    }
  }
}

</script>

<style scoped>

</style>
