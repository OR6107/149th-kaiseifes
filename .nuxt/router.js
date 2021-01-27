import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _26f93e20 = () => interopDefault(import('../pages/information.vue' /* webpackChunkName: "pages/information" */))
const _65a28b18 = () => interopDefault(import('../pages/mr_ms.vue' /* webpackChunkName: "pages/mr_ms" */))
const _45439ce2 = () => interopDefault(import('../pages/online.vue' /* webpackChunkName: "pages/online" */))
const _4b1c03f2 = () => interopDefault(import('../pages/online_additional.vue' /* webpackChunkName: "pages/online_additional" */))
const _bde062d6 = () => interopDefault(import('../pages/timetable.vue' /* webpackChunkName: "pages/timetable" */))
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
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/information",
    component: _26f93e20,
    name: "information"
  }, {
    path: "/mr_ms",
    component: _65a28b18,
    name: "mr_ms"
  }, {
    path: "/online",
    component: _45439ce2,
    name: "online"
  }, {
    path: "/online_additional",
    component: _4b1c03f2,
    name: "online_additional"
  }, {
    path: "/timetable",
    component: _bde062d6,
    name: "timetable"
  }, {
    path: "/",
    component: _5091b874,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
