import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as firebase from 'firebase';
import { firebaseConfig } from '../firebase_config';
import "jquery";
import "jqueryui";

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/style.css'
import '@/assets/css/perfect-scrollbar.css'
import '@/assets/css/main.css'
// import 'assets/vendors/jquery/jquery.min.js'
// import '@/assets/js/deznav-init.js'

Vue.config.productionTip = false

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
