import { createRouter, createWebHistory } from 'vue-router'
import pokedexView from '../views/PokedexView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: pokedexView
  },
  {
    path: '/pokemon/:id',
    name: 'PokemonView',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/PokemonView.vue')
  },
  {
    path: '/types',
    name: 'TypesView',
    component: () => import(/* webpackChunkName: "about" */ '../views/typesView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
