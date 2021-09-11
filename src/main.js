import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as firebase from 'firebase';
import { firebaseConfig } from '../firebase_config';

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'

Vue.config.productionTip = false

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
