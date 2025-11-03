import { createRouter, createWebHistory } from 'vue-router'
import indexRoute from './routes/modules'

const router = createRouter({
  history: createWebHistory(),
  routes: [indexRoute],
})

export default router
