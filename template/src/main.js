import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { configRouter } from './route-config'
require('es6-promise').polyfill()

Vue.use(VueRouter)
Vue.use(VueResource)

var router = new VueRouter({
  history: true,
  saveScrollPosition: true
})

configRouter(router)

const App = Vue.extend(require('./App.vue'))

router.start(App, '#app')
