import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import './plugins/element.js';
import api from './plugins/axios.js';
import './plugins/bootstrap-vue.js';
import '@/assets/style/element.scss';
import '@/assets/style/stilo-responsive.scss';
import '@/assets/style/stylos-personalizados.scss';
import VueSweetalert2 from 'vue-sweetalert2';

// Si no necesita los estilos, no conecte 
import  'sweetalert2/dist/sweetalert2.min.css' ;
import Vue2Filters from 'vue2-filters'

Vue.use(Vue2Filters)
Vue.use(VueSweetalert2);

Vue.config.productionTip = false;
Vue.directive('uppercase', {
  update(el) {
    el.value = el.value.toUpperCase()
  },
})
new Vue({
  router,
  store,
  axios,
  api,
  render: (h) => h(App),
}).$mount("#app");
