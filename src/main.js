import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

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

Vue.use(VueRouter)

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
