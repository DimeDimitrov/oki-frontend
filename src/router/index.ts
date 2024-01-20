import { createRouter, createWebHistory } from 'vue-router'
import GradView from '../views/GradView.vue'
import PoligonView from '../views/PoligonView.vue'
import TeorijaView from '../views/TeorijaView.vue'
import HomeView from '../views/HomeView.vue'
import DetailsGradView from '../views/DetailsGradView.vue'
import DetailsTeorijaView from '../views/DetailsTeorijaView.vue'
import DetailsPoligonView from '../views/DetailsPoligonView.vue'

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
    {
      path: '/details/grad/:website',
      name: 'details-grad',
      component: DetailsGradView,
      props: true,
    },
    {
      path: '/details/teorija/:website',
      name: 'details-poligon',
      component: DetailsTeorijaView,
      props: true,
    },
    {
      path: '/details/poligon/:website',
      name: 'details-teorija',
      component: DetailsPoligonView,
      props: true,
    },
  ]
})

export default router
