<template>
  <div>
    <van-tabs :active="active1" @click="handleTabClick">
      <van-tab v-for="index in ['卷', '章']" :key="index" :title="index">
      </van-tab>
        <div v-if="noread">
          <div v-if="exist">
            <van-switch style="margin:4px;margin-left:30px;" v-model="checked" /><p style="margin:4px;margin-left:10px;">请选择新约/旧约</p>
            <van-list v-if="checked" v-model="loading1" :finished="finished1" @load="onLoad1">
              <van-cell v-for="item in list1" :key="item" :title="item.ch" @click="select(item)"/>
            </van-list>
            <van-list v-else="" v-model="loading2" :finished="finished2" @load="onLoad2">
              <van-cell v-for="item in list2" :key="item" :title="item.ch" @click="select(item)"/>
            </van-list>
          </div>
          <div v-else="">
            <div class="out">
              <div style="border-radius: 20px 40px;" v-for="i in total_zhang" :key="i" class="in">
                <van-button type="default" @click="goholy(i, true)">{{ i }}</van-button>
              </div>
            </div>
          </div>
        </div>
        <div v-else="">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          </van-pull-refresh>
          <van-button size="large" @click="reback">返回章列表</van-button>
          <van-list>
            <van-cell v-for="item in jw" :key="item">
              {{ item.jie }}·{{ item.cvalue }}<br>
              {{ item.jie }}·{{ item.evalue }}
            </van-cell>
          </van-list>
          <br><br><br><br>
        </div>
      </van-tab>
    </van-tabs>
    <van-tabbar v-model="active2" @change="handleTabClick2">
      <van-tabbar-item icon="shop">Contents</van-tabbar-item>
      <van-tabbar-item icon="records">Read</van-tabbar-item>
      <van-tabbar-item icon="gold-coin">Search</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  components: {
  },
  data: function () {
    return {
      exist: true,
      noread: true,
      checked: true,
      list1: [],
      list2: [],
      loading1: false,
      finished1: false,
      loading2: false,
      finished2: false,
      active1: 0,
      active2: 0,
      active3: 0,
      total_zhang: 50,
      jw: []
    }
  },
  created: function () {
  },
  watch: function () {
  },
  computed: function () {
  },
  methods: {
    reback: function () {
      this.active2 = 0
      this.noread = true
      this.jw = []
    },
    goholy: function (i, fn) {
      this.active2 = 1
      this.noread = false
      if (fn) {
        this.$store.commit('update_holy_zhang', i)
      } else {
        this.$store.commit('update_holy_zhang', 50)
        this.$store.commit('update_holy_juan', 'Genesis')
      }
      var url = 'http://119.27.166.193/holy/fast/zhang'
      this.$axios.post(
        url,
        {
          'juan': this.$store.state.holy.juan,
          'zhang': this.$store.state.holy.zhang
        }
      ).then((response) => {
        this.jw = response.data.holy
      }).catch(function (error) {
        this.$Notice.open({
          title: 'Notice.!',
          desc: error
        })
      })
    },
    onRefresh: function () {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
        this.count++
      }, 500)
    },
    handleTabClick: function (index) {
      if (index === 0) {
        this.exist = true
      } else {
        this.exist = false
      }
    },
    handleTabClick2: function (index) {
      if (index === 0) {
        this.noread = true
      } else if (index === 1) {
        this.noread = false
        this.goholy(0, false)
      }
    },
    select_juan: function () {
      this.active1 = 0
      this.checked = true
      this.onLoad1()
      this.exist = true
    },
    select_zhang: function () {
      this.active1 = 1
      this.exist = false
    },
    select: function (info) {
      this.$store.commit('update_holy_juan', info.en)
      this.exist = false
      this.active1 = 1
      this.total_zhang = info.num
    },
    onLoad1: function () {
      setTimeout(() => {
        for (var i in this.$store.state.holy.juan_old) {
          this.list1.push(this.$store.state.holy.juan_old[i])
        }
        this.loading1 = false

        if (this.list1.length >= this.$store.state.holy.juan_old.length) {
          this.finished1 = true
        }
      }, 500)
    },
    onLoad2: function () {
      setTimeout(() => {
        for (var i in this.$store.state.holy.juan_new) {
          this.list2.push(this.$store.state.holy.juan_new[i])
        }
        this.loading2 = false

        if (this.list2.length >= this.$store.state.holy.juan_new.length) {
          this.finished2 = true
        }
      }, 500)
    }
  }
}
</script>
<style scoped>
 .out {
  width:100%;
}
.in {
  width:12.5%;
  height: 50px;
  float: left;
}
</style>
