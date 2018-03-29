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
                <Col span="1" style="margin-top:8px;">
                  <Button shape="circle" type="ghost" icon="clipboard" @click="get_note(item.id)"></Button>
                </Col>
                <Col span="1" style="margin-top:8px;float:right;">
                  <Button v-if="zanlist.indexOf(item.id) >= 0" shape="circle" type="ghost" icon="ios-heart" @click="czan(item.id)"></Button>
                  <Button v-else="" shape="circle" type="ghost" icon="ios-heart-outline" @click="azan(item.id)"></Button>
                </Col>
              </Row>
            </Alert>
          </div>
        </div>
        <Modal
          v-model="modal1"
          title="Common Modal dialog box title"
          @on-ok="ok"
          @on-cancel="cancel">
          <Input v-model="value6" type="textarea" :rows="4" placeholder="暂时没有对本节经文进行笔记."></Input><br><br>
          <Button type="success" long @click="add_note()">SUBMIT</Button><br><br>
          <Alert v-for="j in notes">
            {{ j }}
          </Alert>
        </Modal>
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
    this.getzan()
    this.getTree()
    this.one(this.$store.state.holy.juan, this.$store.state.holy.zhang)
  },
  watch: function () {
  },
  computed: function () {
  },
  methods: {
    getzan: function () {
      this.zanlist = []
      this.$db.find({'type': 'zan'}, (err, res) => {
        if (!err) {
          for (var i in res) {
            this.zanlist.push(res[i]['id'])
          }
          console.log('****************')
          console.log(this.zanlist)
          console.log('****************')
        }
      })
    },
    azan: function (id) {
      this.$db.insert({
        'type': 'zan',
        'id': id
      }, (err, res) => {
        if (!err) {
          console.log(res)
          this.zanlist.push(id)
          console.log(this.zanlist)
        }
      })
    },
    czan: function (id) {
      console.log(this.zanlist)
      this.$db.remove({
        'type': 'zan',
        'id': id
      }, (err, res) => {
        if (!err) {
          console.log(res)
          this.remove(id)
          console.log(this.zanlist)
        }
      })
    },
    remove: function (val) {
      var index = this.zanlist.indexOf(val)
      if (index > -1) {
        this.zanlist.splice(index, 1)
      }
    },
    get_note: function (id) {
      this.$db.find({
        'type': 'note',
        'id': id
      }, (err, res) => {
        if (!err) {
          console.log(res)
          this.modal1 = true
          this.note_id = id
          this.notes = []
          for (var i in res) {
            this.notes.push(res[i]['text'])
          }
          console.log('****************')
          console.log(this.notes)
          console.log('****************')
        }
      })
    },
    add_note: function () {
      this.$db.insert({
        'type': 'note',
        'id': this.note_id,
        'text': this.value6
      }, (err, res) => {
        if (!err) {
          console.log(res)
          this.modal1 = false
          this.value6 = ''
        }
      })
    },
    info: function () {
      this.$db.find({'name': 'tom'}, (err, res) => {
        if (!err) {
          console.log(res)
        }
      })
    },
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
