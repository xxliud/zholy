<template>
  <div class="page">
    <div class="weui-cells__title">经文列表</div>
    <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell" v-for="i in holy" :key="i" >
          <div class="weui-cell__hd">
            <image :src="icon" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"></image>
          </div>
          <div class="weui-cell__bd">{{ i.jie }}·{{ i.cvalue }}</div>
        </div>
        <br><br><br>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      select: {},
      holy: []
    }
  },
  components: {
  },
  methods: {
    sliderChange(e) {
      console.log('滑动选择的值为：' + e.mp.detail.value);
    },
    one: function () {
      var _this = this
      wx.request({
        url: 'http://zholy.hk1.mofasuidao.cn/holy/fast/zhang', 
        data: {
          'juan': this.select.juan,
          'zhang': this.select.zhang
        },
        header: {
          'content-type': 'application/json' 
        },
        method: 'POST',
        success: function(res) {
          _this.holy = res.data.holy
        }
      })
    }
  },
  created() {
    this.one()
  },
  onLoad: function (options) {
    this.select = JSON.parse(options.select)
    console.log(this.select)
    this.one()
    // this.holy = [1, 2, 3]
  }
}
</script>

<style scoped>
page {
  margin-top: 50px;
}
</style>
