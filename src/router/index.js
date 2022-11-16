import { createRouter, createWebHashHistory } from 'vue-router'
import Header from '../components/Header'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Header
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
