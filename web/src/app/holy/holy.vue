<template>
  <div v-title data-title="Holy">
    <Row>
      
    </Row>
    <Row>
      <Col span="6" style="margin-top:30px; height:400px; border-right:1px solid #EAEAEA">
        <div style="margin-left:20px; ">
          <Tree :data="data1"  @on-select-change="show" ref="tree"></Tree>
        </div>
      </Col>
      <Col span="18">
        <div style="margin:20px; margin-top:60px;">
          <Alert type="success">·当前卷节下有 {{ total }} 章经文 拖拽跳转章节·</Alert>
          <Slider v-model="value8" :min=1 :max="$store.state.holy.max" style="margin-top:23x;" @on-change="change"></Slider><br>
          <div v-for="item in jw" style="margin:2px;">
            <Alert>
              <Row>
                <Col span="22" style="margin-top:0px;">
                  {{item.jie}}·{{item.cvalue}}
                  <br>
                  {{item.jie}}·{{item.evalue}}
                </Col>
              </Row>
            </Alert>
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  components: {
  },
  data: function () {
    return {
      data1: [],
      jw: [],
      tree: {},
      total: 50,
      zanlist: [],
      note: '',
      modal1: false,
      value6: '',
      value8: 1,
      note_id: 0,
      notes: []
    }
  },
  created: function () {
    this.getTree()
    this.one(this.$store.state.holy.juan, this.$store.state.holy.zhang)
  },
  watch: function () {
  },
  computed: function () {
  },
  methods: {
    show: function () {
      this.value8 = 1
      var _ob = this.$refs.tree.getSelectedNodes()[0]
      if (_ob !== undefined) {
        this.tree = _ob
      } else {
        _ob = this.tree
      }
      this.$store.commit('update_holy_zhang', 1)
      this.$store.commit('update_holy_juan', _ob['title'].split('·')[1])
      this.$store.commit('update_holy_max', _ob['max'])
      this.total = this.$store.state.holy.max
      this.one()
      this.info()
    },
    change: function () {
      this.$store.commit('update_holy_zhang', this.value8)
      this.getzan()
      this.one()
    },
    one: function () {
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
    getTree: function () {
      var _d = {}
      var _l1 = []
      for (var i in this.$store.state.holy.juan_old) {
        var _d2 = {}
        _d2['title'] = this.$store.state.holy.juan_old[i]['ch'] + '·' + this.$store.state.holy.juan_old[i]['en']
        _d2['expand'] = false
        _d2['max'] = this.$store.state.holy.juan_old[i]['num']
        // _d2['max2'] = this.$store.state.holy.juan_old[i]['name']
        _l1.push(_d2)
      }
      _d['title'] = '旧约'
      _d['expand'] = true
      _d['children'] = _l1
      var _x = {}
      var _l2 = []
      for (var j in this.$store.state.holy.juan_new) {
        var _d3 = {}
        _d3['title'] = this.$store.state.holy.juan_new[j]['ch'] + '·' + this.$store.state.holy.juan_new[j]['en']
        _d3['expand'] = false
        _d3['max'] = this.$store.state.holy.juan_new[j]['num']
        // _d3['max2'] = this.$store.state.holy.juan_new[i]['name']
        _l2.push(_d3)
      }
      _x['title'] = '新约'
      _x['expand'] = true
      _x['children'] = _l2
      this.data1.push(_d)
      this.data1.push(_x)
    },
    ok: function () {
      this.$Message.info('Clicked ok')
    },
    cancel: function () {
      this.$Message.info('Clicked cancel')
    }
  }
}
</script>
<style scoped>

</style>
