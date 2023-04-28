import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import modpackView from "../views/Modpack.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/modpack',
      name: 'about',
      component: modpackView
    }
  ]
})

export default router
