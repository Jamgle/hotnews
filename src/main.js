import Vue from 'vue'
import App from './App.vue'
import router from "@/router"

import Vant from 'vant'
import 'vant/lib/index.css'

// 加载全局样式
import './style/index.less'

// 动态设置REM基准值
import 'amfe-flexible'

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
