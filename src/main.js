import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from '../store/index'
import router from '@/router';
// import {ValidationProvider} from 'vee-validate'
import { ValidationObserver } from 'vee-validate';
// import { max,email } from 'vee-validate/dist/rules';
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';

Vue.config.productionTip = false
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.use(Vuex)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
