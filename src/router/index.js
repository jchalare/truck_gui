import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import menuRouter from '../modules/menu/router/index'
import companiaRouter from '../modules/compania/routes/routes'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/menu',
    ...menuRouter
  }
  ,
  {
    path: '/compania',
    ...companiaRouter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
