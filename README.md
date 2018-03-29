## Welcome to this page.
![Image](http://oiilv6zo9.bkt.clouddn.com/holy3.jpeg)
### 简介
下面我将要介绍一下这个项目. 
1. 这个项目的初衷是为了服务大家能在线阅读圣经,为此我们提供了经文查询的api以及适配各个终端的客户端软件
2. pc端的软件统一由我进行打包发布,下载地址如下:[Link to Pc Holy](http://ilovezczm.com),请根据自己的电脑进行下载

### 开发框架

- electron: [electron-vue](https://www.gitbook.com/book/simulatedgreg/electron-vue/details)   
- app: [cordova+vue](http://cordova.axuer.com/)
- wx: [mpvue](http://mpvue.com/)+[weui](https://kuangpf.github.io/mpvue-weui/#/)


### 打包

electron

- window平台,请使用yarn进行依赖安装,不然有的包无法打入安装文件造成安装后空白的异常
  yarn i && yarn run build
- mac平台,使用yarn和cnpm均可成功安装

app
- ios平台 本人未尝试进行ipa打包,因为没有苹果开发着账号
- android平台 自行build apk文件

wx
- 小程序请自行搜索zholy

![Image](http://oiilv6zo9.bkt.clouddn.com/holywx.jpg)

```javascript
    console.log('愿上帝祝福你')
```
