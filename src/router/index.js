import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/PokedexView.vue')
  },
  {
    path: '/pokemon/:id',
    name: 'PokemonView',
    props: true,
    component: () => import('../views/PokemonView.vue')
  },
  {
    path: '/types',
    name: 'TypesView',
    component: () => import('../views/typesView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
