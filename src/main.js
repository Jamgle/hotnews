import Vue from 'vue'
import App from './App.vue'
import router from "@/router";

Vue.config.productionTip = false
import './style/index.less'
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
