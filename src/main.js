import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

//引入FastClick
import FastClick from 'fastclick'
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}

//2.引入全局样式
import './style/common.less'

//3.引入全局ui组件库-vant
import './plugins/vant'
//Vue.config.productionTip = false;


//4.引入rem
import './config/rem.js'

//引入全局过滤器
import './config/filters'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
