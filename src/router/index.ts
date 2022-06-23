import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import UiKitPage from '@/pages/UiKitPage.vue'
import ContactsPage from '@/pages/ContactsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/ui',
      name: 'ui',
      component: UiKitPage,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsPage,
    }
  ]
})

export default router
