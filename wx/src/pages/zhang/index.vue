<template>
  <div class="page">
    <div class="box9">
       <h1>{{ info.ch }}</h1>   
        <p>
         本卷书共{{ max }}章, 请选择.
       </p>
       <br />
      <div class="out">
        <div v-for="i in max" :key="i" class="in">
          <p @click="goto_holy(i)" style="text-align:center;border:2px solid #F7F7F7;padding:3px;margin:3px;border-radius:30px;">{{ i+1 }}</p>
        </div>
      </div>
    </div>
    <div >
      <p style="text-align:center;border:2px solid #F7F7F7;padding:3px;margin:3px;border-radius:10px;" @click="goback">✝️ 返回经卷选择页面</p>
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
      select: {
        juan: '',
        zhang: 1,
        total: 1
      },
      num: 1,
      info: {},
      max: 1
    }
  },
  methods: {
    goback: function () {
     wx.navigateTo({
        url: '../juan/juan'
      }) 
    },
    goto_holy: function (i) {
      this.select.zhang = i
      console.log(this.select)
      wx.navigateTo({
        url: '../holy/holy?select=' + JSON.stringify(this.select) 
      })
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
    this.select.juan = this.info.en
    this.select.total = this.max
  }
}
</script>

<style>
slider {
  margin-bottom: 60px;
}
body {
    font-size: 11px;
    font-family: 'Open Sans', sans-serif;
    color: #4A4A4A ;
    text-align: center; 
}

.box9{
    margin: 40px auto;
    width: 300px;
    min-height: 450px;
    padding: 10px;
    position:relative;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius:20px;
    background: white;
    -webkit-box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
}

.box9:before{
    content: '';
    width: 110%;
    left: 0; 
    height: 111%;
    z-index:-1;
    position:absolute;
    border-radius:20px;
    border: 1px solid rgba(0,0,0, 0.1);
    background: rgba(0, 0, 0, 0.0);
    -webkit-box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    -webkit-transform:     translate(-5%,-5%);
}

.box9:after{
    content: '';
    position:absolute;
    top:-25px; left: 30%;
    width: 130px;
    height: 40px;
    background: -webkit-gradient(linear, 555% 20%, 0% 92%, from(rgba(0, 0, 0, 0.1)), to(rgba(0, 0, 0, 0.0)), color-stop(.1,rgba(0, 0, 0, 0.2)));
    border-left: 1px dashed rgba(0, 0, 0, 0.1);
    border-right: 1px dashed rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
}

.box9 img {
    width: 100%;
    margin-top: 15px;
}

p{ 
    margin-top: 15px;
    text-align: justify;
}

h1{
    font-size: 20px;
    font-weight: bold;
    margin-top: 5px; 
    text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
}

a{
    text-decoration: none;
    color: #4A4A4A !important;
}

a:hover{
    text-decoration: underline;
    color: #6B6B6B !important ;
}
.out {
  width:100%;
}
.in {
  width:12.5%;
  height: 30px;
  float: left;
}
</style>