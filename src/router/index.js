import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
    path: '/artworks',
    name: 'artworks',
    component: () => import(/* webpackChunkName: "artworks" */ '../views/ArtworkView.vue')
  },
  {
    path: '/artists',
    name: 'artists',
    component: () => import(/* webpackChunkName: "artists" */ '../views/ArtistView.vue')
  },
  {
    path: "/account",
    name: 'account',
    component: () => import(/*webpackChunkName: "Account" */ '../views/AccountView.vue')
  },
  {
    path: '/artworks/paintings',
    name: 'paintings',
    component: () => import(/* webpackChunkName: "paintings" */ '../views/ArtworkView.vue')
  },
  {
    path: '/artworks/sculptures',
    name: 'sculptures',
    component: () => import(/* webpackChunkName: "scluptures" */ '../views/ArtworkView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
