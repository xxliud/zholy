<template>
  <div class="page" @click="goto_select()">
    <img src="http://oiilv6zo9.bkt.clouddn.com/wx-logo.jpeg" style="display:block;margin:0 auto;height:700px; width: auto;"/>
  </div>
</template>

<script>
import base64 from '../../../static/images/base64'
export default {
  data() {
    return {
      fn: true
    }
  },
  components: {
  },
  methods: {
    goto_select: function () {
      var _this = this
      this.fn = false
      wx.navigateTo({
        url: '../juan/juan',
        success: function(){
          _this.fn = true
        }
      })
    }
  },

  created() {
    if (this.fn) {
      setTimeout(this.goto_select, 1500)
    }
  }
}
</script>

<style scoped>
page {
  margin-top: 50px;
}
</style>
