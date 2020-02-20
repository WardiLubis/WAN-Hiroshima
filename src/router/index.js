import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
///
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/destination',
        name: 'destination',
        component: () => import('../components/destination.vue')
      },
      {
        path: '/whattodo',
        name: 'Whattodo',
        component: () => import('../components/todo.vue')
      },
      {
        path: '/event',
        name: 'event',
        component: () => import('../components/event.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
