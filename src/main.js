import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import './plugins/element.js';
import './plugins/bootstrap-vue.js';
import '@/assets/style/element.scss';
import '@/assets/style/stilo-responsive.scss';
import '@/assets/style/stylos-personalizados.scss';
// import VueSweetalert2 from 'vue-sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js'
// Si no necesita los estilos, no conecte 
// import  'sweetalert2/dist/sweetalert2.min.css' ;

// Vue.use(Swal);

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
  Swal,
  render: (h) => h(App),
}).$mount("#app");
