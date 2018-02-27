import Vue from 'vue';
import App from './App';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

new Vue({
  el        : '#app',
  router,
  components: {App},
  template  : '<App/>'
});
