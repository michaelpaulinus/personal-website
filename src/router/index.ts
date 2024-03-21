import { createRouter, createWebHistory } from 'vue-router'
import About from '@/components/About.vue'
import Projects from '@/components/Projects.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    }
  ]
})

export default router
