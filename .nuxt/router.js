import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0474d6b0 = () => interopDefault(import('../pages/goshoku.vue' /* webpackChunkName: "pages/goshoku" */))
const _26f93e20 = () => interopDefault(import('../pages/information.vue' /* webpackChunkName: "pages/information" */))
const _5091b874 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/goshoku",
    component: _0474d6b0,
    name: "goshoku"
  }, {
    path: "/information",
    component: _26f93e20,
    name: "information"
  }, {
    path: "/",
    component: _5091b874,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
