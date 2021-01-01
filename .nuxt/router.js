import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0474d6b0 = () => interopDefault(import('../pages/goshoku.vue' /* webpackChunkName: "pages/goshoku" */))
const _26f93e20 = () => interopDefault(import('../pages/information.vue' /* webpackChunkName: "pages/information" */))
const _63047edb = () => interopDefault(import('../pages/limitedtime.vue' /* webpackChunkName: "pages/limitedtime" */))
const _65a28b18 = () => interopDefault(import('../pages/mr_ms.vue' /* webpackChunkName: "pages/mr_ms" */))
const _4ec55026 = () => interopDefault(import('../pages/sandan.vue' /* webpackChunkName: "pages/sandan" */))
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
    path: "/goshoku",
    component: _0474d6b0,
    name: "goshoku"
  }, {
    path: "/information",
    component: _26f93e20,
    name: "information"
  }, {
    path: "/limitedtime",
    component: _63047edb,
    name: "limitedtime"
  }, {
    path: "/mr_ms",
    component: _65a28b18,
    name: "mr_ms"
  }, {
    path: "/sandan",
    component: _4ec55026,
    name: "sandan"
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
