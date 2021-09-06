import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from '../store/index'
import router from '@/router';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import "./vee-validate"



Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(Buefy)



new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
