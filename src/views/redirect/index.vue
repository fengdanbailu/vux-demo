<!--
 * @Author: gm.chen
 * @Date: 2020-12-29 20:02:20
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-12-29 20:02:21
 * @Description: file content
 * @FilePath: /vux-demo/src/views/redirect/index.vue
-->
<script>
export default {
  created() {
    const { params, query } = this.$route
    const { path } = params
    this.$router.replace({ path: '/' + path, query })
  },
  render: function(h) {
    return h() // avoid warning message
  }
}
</script>