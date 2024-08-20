import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import RestaurantPage from '@/views/RestaurantPage.vue'

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/restaurant/:id', name: 'RestaurantPage', component: RestaurantPage, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
