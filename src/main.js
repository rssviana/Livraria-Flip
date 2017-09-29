import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import Products from './components/products.vue'
import Checkout from './components/checkout.vue'
import { store } from './store'

Vue.use(VueRouter)

const routes = [
  { path: '/products', alias: '/', props: true, component: Products },
  { path: '/checkout', component: Checkout },
  { path: '/checkout/:id', component: Checkout }
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
