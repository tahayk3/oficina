import { createRouter, createWebHistory } from 'vue-router'
import Servicios from '../views/Servicios.vue'
import Contacto from '../views/Contacto.vue'
import Inicio from '../views/Inicio.vue'


const routes = [
  { path: '/', component: Inicio },
  { path: '/servicios', component: Servicios },
  { path: '/contacto', component: Contacto },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router