import { createRouter, createWebHistory } from 'vue-router'
import GradView from '../views/GradView.vue'
import PoligonView from '../views/PoligonView.vue'
import TeorijaView from '../views/TeorijaView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/grad',
      name: 'grad',
      component: GradView
    },
    {
      path: '/poligon',
      name: 'poligon',
      component: PoligonView
    },
    {
      path: '/teorija',
      name: 'teorija',
      component: TeorijaView
    },
  ]
})

export default router
