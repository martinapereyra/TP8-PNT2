import Vue from 'vue'
import App from './App.vue'

/* Formulario con vueForm */
import "./form"

/* Estilos */
import "./bootstrap"

/* ROUTER (vue-router) */
import {router} from "./router"


import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
