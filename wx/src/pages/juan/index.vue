<template>
  <div class="page">
    <div class="weui-cells__title">Select</div>
    <div class="weui-cells weui-cells_after-title">
      <div class="weui-cell weui-cell_switch">
        <div class="weui-cell__bd">请选择新约/旧约</div>
        <div class="weui-cell__ft">
          <switch checked @change = "switchChange"/>
        </div>
      </div>
    </div>
    <div class="weui-cells__title">卷列表</div>
    <div v-if="select" class="weui-cells weui-cells_after-title">
      <div v-for="i in old_list" :key="i" class="weui-cell" @click="tozhang(i)">
        <div class="weui-cell__bd">{{ i.ch }}</div>
        <div class="weui-cell__ft weui-cell__ft_in-access"></div>
      </div>
    </div>
    <div v-else="" class="weui-cells weui-cells_after-title">
      <div v-for="i in new_list" :key="i" class="weui-cell" @click="tozhang(i)">
        <div class="weui-cell__bd">{{ i.ch }}</div>
        <div class="weui-cell__ft weui-cell__ft_in-access"></div>
      </div>
    </div>
  </div>
</template>

<script>
import store from './store'
export default {
  data() {
    return {
      info: {},
      to: '../select/select?info=' + JSON.stringify(this.info),
      info: {},
      select: true,
      old_list: [],
      new_list: []
    }
  },
  methods: {
    tozhang: function (info) {
      this.info = info
      wx.navigateTo({
        url: '../zhang/zhang?info=' + JSON.stringify(info) 
      })
    },
    switchChange: function (e) {
      console.log("switch发生change事件，携带value值为："+ e.mp.detail.value)
      this.select = e.mp.detail.value
    }
  },
  created: function () {
    this.old_list = store.state.juan_old
    this.new_list = store.state.juan_new
  }

}
</script>

<style>
.nones {
  color: red;
}
</style>