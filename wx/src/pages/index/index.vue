<template>
  <div class="page" @click="goto_select">
    <div class="page__bd">
      <div class="weui-grids">
        <block v-for="item in grids" :key="item">
          <navigator url="item.url" class="weui-grid" hover-class="weui-grid_active">
            <image class="weui-grid__icon" :src="item.src" />
            <div class="weui-grid__label">{{item.name}}</div>
          </navigator>
        </block>
      </div>
    </div>
  </div>
</template>

<script>
import base64 from '../../../static/images/base64'
export default {
  data() {
    return {
      grids: [
        { src: '../../../static/images/icon_nav_button.png', name: 'Read', url: '../juan/juan'},
        { src: '../../../static/images/icon_nav_cell.png', name: 'Search', url: '../juan/juan' },
        { src: '../../../static/images/icon_nav_toast.png', name: 'WeCenter', url: '../juan/juan'}
      ]
    }
  },
  components: {
  },
  methods: {
    goto_select: function () {
      wx.navigateTo({
        url: '../juan/juan'
      })
    },
    multiLinkagePicker: function () {
      wx.navigateTo({
        url: '../select/select?zcbb=' + JSON.stringify(this.zcbb) 
      })
    }
  },

  created() {
    // setTimeout(this.goto_select, 3000)
  }
}
</script>

<style scoped>
page {
  margin-top: 50px;
}
</style>
