import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1171c68e = () => interopDefault(import('../pages/example.vue' /* webpackChunkName: "pages/example" */))
const _1c97b86e = () => interopDefault(import('../pages/example2.vue' /* webpackChunkName: "pages/example2" */))
const _aa72891e = () => interopDefault(import('../pages/itm.vue' /* webpackChunkName: "pages/itm" */))
const _267d41e1 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/example",
    component: _1171c68e,
    name: "example"
  }, {
    path: "/example2",
    component: _1c97b86e,
    name: "example2"
  }, {
    path: "/itm",
    component: _aa72891e,
    name: "itm"
  }, {
    path: "/",
    component: _267d41e1,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
