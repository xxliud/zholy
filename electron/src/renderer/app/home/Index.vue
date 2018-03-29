<template>
  <div style="margin-top:10%; text-align:center; ">
    <div>
      <Row style="margin:0 auto">
        <img src="../../assets/images/holy.png" style="display:block;margin:0 auto;"/>
      </Row>
      <br>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  created: function () {
    this.myfunc()
  },
  mounted: function () {},
  methods: {
    login: function () {
      this.$router.push({'path': '/holy'})
    },
    myfunc: function () {
      setTimeout(this.login, 3000)
    }
  }
}
</script>
