import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import modpackView from "../views/Modpack.vue"
import NotFound from "../views/NotFound.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
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
