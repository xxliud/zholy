<template>
<div id="app" v-title data-title="Vue-Home">
  <router-view></router-view>
  <Back-top></Back-top>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
