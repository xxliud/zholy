<template>
  <div class="page">
    <div class="page__desc">本卷书共{{ max }}章,当前第 {{ num }}章,请滑动选择.</div>
    <slider show-value @change="sliderChange3" min="1" :max="max" />
    <div style="margin-top:-15px;" class="weui-cells weui-cells_after-title">
      <div v-for="i in jw" :key="i" class="weui-cell">
        <div class="weui-cell__bd">
          {{ i.jie}}·{{ i.cvalue }}<br>
          {{ i.jie}}·{{ i.evalue }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import base64 from '../../../static/images/base64'
import store from './store'
export default {
  data() {
    return {
      icon: '',
      num: 1,
      info: {},
      max: 1,
      jw: [
        {jie: 1, cvalue: '期初神创造天地', evalue: 'at moment'},
        {jie: 2, cvalue: '期初神创造天地', evalue: 'at moment'},
        {jie: 3, cvalue: '期初神创造天地', evalue: 'at moment'},
        {jie: 4, cvalue: '期初神创造天地', evalue: 'at moment'},
        {jie: 5, cvalue: '期初神创造天地', evalue: 'at moment'},
        {jie: 6, cvalue: '期初神创造天地', evalue: 'at moment'},
        {jie: 7, cvalue: '期初神创造天地', evalue: 'at moment'},
        {jie: 8, cvalue: '期初神创造天地', evalue: 'at moment'},
        {jie: 9, cvalue: '期初神创造天地', evalue: 'at moment'},
        {jie: 10, cvalue: '期初神创造天地', evalue: 'at moment'},
        {jie: 11, cvalue: '期初神创造天地', evalue: 'at moment'},
      ]
    }
  },
  methods: {
    sliderChange3(e) {
      console.log('slider3 发生 change 事件，携带值为' + e.mp.detail.value)
      this.num = e.mp.detail.value
    }
  },
  created: function () {
  },
  mounted() {
    this.icon = base64.icon20;
  },
  onLoad: function (options) {
    this.info = JSON.parse(options.info)
    this.max = this.info.num
  }
}
</script>

<style>
slider {
  margin-bottom: 60px;
}
</style>