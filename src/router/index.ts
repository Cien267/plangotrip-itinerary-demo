import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/rAF',
      name: 'requestAnimationFrame',
      component: () => import('../views/RequestAnimationFrameDemo.vue'),
    },
    {
      path: '/3000-oxford-words',
      name: '3000-oxford-words',
      component: () => import('../views/OxfordWords.vue'),
    },
    {
      path: '/scss',
      name: 'plan-making-scss',
      component: () => import('../views/PlanMakingSCSS.vue'),
    },
    {
      path: '/tailwindcss',
      name: 'plan-making-tailwindcss',
      component: () => import('../views/PlanMakingTailwindcss.vue'),
    },
  ],
})

export default router
