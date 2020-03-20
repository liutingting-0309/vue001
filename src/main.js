// 入口文件
 import Vue from 'vue'

 Vue.config.devtools = true

//  导入MUI的样式
import './lib/mui/css/mui.min.css'

// 按需导入mint-ui 中的组件
import { Header} from 'mint-ui'
Vue.component(Header.name,Header)

//  导入App根组件
import app from './App.vue'

var vm =new Vue({
  el:'#app',
  render:c => c(app)
})