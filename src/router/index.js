import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from "../page/homePage.vue"
import about from "../page/about.vue"
import elyurt from "../page/elyurt.vue"
import servisPage from "../page/servisPage.vue"
import news from "../page/news.vue"
import iNews from "../page/iNews.vue"
import contact from "../page/contact.vue"
import openData from "../page/openData.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: about  
  },
  {
    path: '/elyurt',
    name: 'elyurt',
    component: elyurt  
  },
  {
    path: '/services',
    name: 'services',
    component: servisPage  
  },
  {
    path: '/news',
    name: 'news',
    component: news  
  },
  {
    path: '/international-news',
    name: 'services',
    component: iNews  
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact  
  },
  {
    path: '/open-data',
    name: 'opendata',
    component: openData  
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
