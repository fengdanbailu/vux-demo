<!--
 * @Author: gm.chen
 * @Date: 2020-12-25 14:15:01
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-01-01 23:03:20
 * @Description: file content
 * @FilePath: /vux-demo/src/views/vuxComponent/index.vue
-->
<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="@/assets/vux_logo.png">
      <h1> vux</h1>
    </div>
    <group title="基础组件">
      <cell title="Icon组件" link="/vux/basic/icon"  value="" is-link></cell>
      <cell title="XButton组件"  link="/vux/basic/x-button" value="" is-link></cell>
      <cell title="XIcon组件"  link="/vux/basic/x-icon" value="" is-link></cell>
    </group>
    <group title="表单">
      <cell title="Calendar组件" link=""  value="" is-link></cell>
      <cell title="CellBox组件"  link="" value="" is-link></cell>
      <cell title="CellFormPreview组件"  link="" value="" is-link></cell>
      <cell title="Cell组件"  link="" value="" is-link></cell>
      <cell title="CheckIcon组件"  link="" value="" is-link></cell>
      <cell title="Checker组件"  link="" value="" is-link></cell>
      <cell title="Checklist组件"  link="" value="" is-link></cell>
      <cell title="DatetimeRange组件"  link="" value="" is-link></cell>
      <cell title="DateTimeView组件"  link="" value="" is-link></cell>
      <cell title="DateTime组件"  link="" value="" is-link></cell>
      <cell title="FormPreview组件"  link="" value="" is-link></cell>
      <cell title="Group组件"  link="" value="" is-link></cell>
      <cell title="InlineCalendar组件"  link="" value="" is-link></cell>
      <cell title="InlineXNumber组件"  link="" value="" is-link></cell>
      <cell title="InlineXSwitch组件"  link="" value="" is-link></cell>
      <cell title="Picker组件"  link="" value="" is-link></cell>
      <cell title="PopupPicker组件"  link="" value="" is-link></cell>
      <cell title="PopupRadio组件"  link="" value="" is-link></cell>
      <cell title="Radio组件"  link="" value="" is-link></cell>
      <cell title="Range组件"  link="" value="" is-link></cell>
      <cell title="Rater组件"  link="" value="" is-link></cell>
      <cell title="Search组件"  link="" value="" is-link></cell>
      <cell title="Selector组件"  link="" value="" is-link></cell>
      <cell title="Swipeout组件"  link="" value="" is-link></cell>
      <cell title="XAddress组件"  link="" value="" is-link></cell>
      <cell title="XInput组件"  link="" value="" is-link></cell>
      <cell title="XNumber组件"  link="" value="" is-link></cell>
      <cell title="XSwitch组件"  link="" value="" is-link></cell>
      <cell title="XTextarea组件"  link="" value="" is-link></cell>
    </group>
    <group title="导航">
      <cell title="ButtonTab组件" link=""  value="" is-link></cell>
      <cell title="Drawer组件"  link="" value="" is-link></cell>
      <cell title="Tab组件"  link="" value="" is-link></cell>
      <cell title="Tabbar组件"  link="" value="" is-link></cell>
      <cell title="XHeader组件"  link="" value="" is-link></cell>
    </group>
    <group title="布局">
      <cell title="Divider组件" link=""  value="" is-link></cell>
      <cell title="Flexbox组件"  link="" value="" is-link></cell>
      <cell title="Grid组件"  link="" value="" is-link></cell>
      <cell title="Sticky组件"  link="" value="" is-link></cell>
      <cell title="ViewBox组件"  link="" value="" is-link></cell>
    </group>
    <group title="弹窗提示">
      <cell title="Actionsheet组件" link=""  value="" is-link></cell>
      <cell title="Alert组件"  link="" value="" is-link></cell>
      <cell title="Confirm组件"  link="" value="" is-link></cell>
      <cell title="InlineLoading组件"  link="" value="" is-link></cell>
      <cell title="LoadMore组件"  link="" value="" is-link></cell>
      <cell title="Loading组件"  link="" value="" is-link></cell>
      <cell title="Msg组件"  link="" value="" is-link></cell>
      <cell title="Popover组件"  link="" value="" is-link></cell>
      <cell title="PopupHeader组件"  link="" value="" is-link></cell>
      <cell title="Popup组件"  link="" value="" is-link></cell>
      <cell title="Spinner组件"  link="" value="" is-link></cell>
      <cell title="Toast组件"  link="" value="" is-link></cell>
      <cell title="XDialog组件"  link="" value="" is-link></cell>
    </group>
    <group title="图表展示">
      <cell title="Timeline组件" link=""  value="" is-link></cell>
      <cell title="VChart组件"  link="" value="" is-link></cell>
      <cell title="XCircle组件"  link="" value="" is-link></cell>
    </group>
    <group title="数据展示">
      <cell title="Badge组件" link=""  value="" is-link></cell>
      <cell title="Card组件"  link="" value="" is-link></cell>
      <cell title="Clocker组件"  link="" value="" is-link></cell>
      <cell title="Countup组件"  link="" value="" is-link></cell>
      <cell title="Flow组件"  link="" value="" is-link></cell>
      <cell title="Loading组件"  link="" value="" is-link></cell>
      <cell title="Marquee组件"  link="" value="" is-link></cell>
      <cell title="Panel组件"  link="" value="" is-link></cell>
      <cell title="Previewer组件"  link="" value="" is-link></cell>
      <cell title="Qrcode组件"  link="" value="" is-link></cell>
      <cell title="Step组件"  link="" value="" is-link></cell>
      <cell title="Swiper组件"  link="" value="" is-link></cell>
      <cell title="XImg组件"  link="" value="" is-link></cell>
      <cell title="XProgress组件"  link="" value="" is-link></cell>
      <cell title="XTable组件"  link="" value="" is-link></cell>
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