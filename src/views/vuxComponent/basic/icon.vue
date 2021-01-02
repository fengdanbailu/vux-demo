<!--
 * @Author: gm.chen
 * @Date: 2020-12-24 16:11:16
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-01-02 21:35:47
 * @Description: file content
 * @FilePath: /vux-demo/src/views/vuxComponent/basic/icon.vue
-->

<template>
  <div >
    组件名：{{componentName}}
    <br/>
    <template v-for="icon in iconList">
        <span :key="icon" class="rect-layout">
            <icon :type="icon" ></icon>
            <span class="right-space">{{icon}}</span>
        </span>
    </template>
    
    <br/><br/>
     <template v-for="icon in iconList">
        <div :key="icon+'_big'" class="rect-layout-big"> 
            <icon :type="icon"  is-msg></icon>
            <div class="align-center">{{icon}}</div>
        </div>

    </template>
  </div>
</template>

<script>
/**
 * 组件路径 /Users/gmchen/go/src/github.com/fengdanbailu/vux-demo/node_modules/vux/src/components/icon/index.vue
 * 支持的图标 /Users/gmchen/go/src/github.com/fengdanbailu/vux-demo/node_modules/vux/src/styles/weui/icon/weui_icon_font.less
 * 小结：支持的图标比较少
 */

import { Icon } from 'vux'

export default {
    name: 'BasicIcon',
    components: {
        Icon
    },
    data() {
        return {
            componentName:"icon",
            iconList:["success","waiting","warn","info","success-circle","success-no-circle","waiting-circle","circle","download","info-circle","safe-success","safe-warn","cancel","search","clear","delete"]
        }
    }
}
</script>

<style scoped>
.right-space{
    margin-right:20px;
}
.align-center{
    text-align:center
}
.rect-layout{
    margin:10px 10px;
}
.rect-layout-big{
    width:93px;
    height:130px;
    float:left;
    margin:10px 10px;

}
</style>
