import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _20ace682 = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _243dddb4 = () => interopDefault(import('../pages/blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _31b23650 = () => interopDefault(import('../pages/blog-one.vue' /* webpackChunkName: "pages/blog-one" */))
const _01563e3d = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _16b87a3a = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _07739c13 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _1ab4bad6 = () => interopDefault(import('../pages/diction-three.vue' /* webpackChunkName: "pages/diction-three" */))
const _4fb4b884 = () => interopDefault(import('../pages/diction-two.vue' /* webpackChunkName: "pages/diction-two" */))
const _4339565e = () => interopDefault(import('../pages/gallery-one.vue' /* webpackChunkName: "pages/gallery-one" */))
const _8e3594c8 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _4a0deffe = () => interopDefault(import('../pages/products.vue' /* webpackChunkName: "pages/products" */))
const _9fc92a16 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _2137f6be = () => interopDefault(import('../pages/products-details/_id.vue' /* webpackChunkName: "pages/products-details/_id" */))
const _2184daf6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _20ace682,
    name: "admin"
  }, {
    path: "/blog-details",
    component: _243dddb4,
    name: "blog-details"
  }, {
    path: "/blog-one",
    component: _31b23650,
    name: "blog-one"
  }, {
    path: "/cart",
    component: _01563e3d,
    name: "cart"
  }, {
    path: "/checkout",
    component: _16b87a3a,
    name: "checkout"
  }, {
    path: "/contact",
    component: _07739c13,
    name: "contact"
  }, {
    path: "/diction-three",
    component: _1ab4bad6,
    name: "diction-three"
  }, {
    path: "/diction-two",
    component: _4fb4b884,
    name: "diction-two"
  }, {
    path: "/gallery-one",
    component: _4339565e,
    name: "gallery-one"
  }, {
    path: "/login",
    component: _8e3594c8,
    name: "login"
  }, {
    path: "/products",
    component: _4a0deffe,
    name: "products"
  }, {
    path: "/signup",
    component: _9fc92a16,
    name: "signup"
  }, {
    path: "/products-details/:id?",
    component: _2137f6be,
    name: "products-details-id"
  }, {
    path: "/",
    component: _2184daf6,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
