import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/404'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '*', component: NotFound }
  ]
})

document.addEventListener('DOMContentLoaded', function () {
  /* eslint-disable no-new */
  new Vue({
    router,
    el: '#app',
    template: `
      <div id="app">
        <router-view class="view"></router-view>
      </div>
    `
  })
})
