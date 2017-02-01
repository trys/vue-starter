import Vue from 'vue'
import VueRouter from 'vue-router'
import VueHead from 'vue-head'
import routes from './routes'

Vue.use(VueHead)
Vue.use(VueRouter)

var allRoutes = []
var templates = {}
routes.map(function(el) {
  var templateName = ( el.template || el.title )
  templates[templateName] = require('./pages/' + templateName)

  allRoutes.push({
    path: el.path,
    component: templates[templateName]
  })

})

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: allRoutes
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
