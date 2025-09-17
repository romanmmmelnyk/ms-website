import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import CareersView from '../views/CareersView.vue'
import CostCalculationView from '../views/CostCalculationView.vue'
import EnhancedCostCalculationView from '../views/EnhancedCostCalculationView.vue'
import ContactView from '../views/ContactView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView
    },
    {
      path: '/careers',
      name: 'careers',
      component: CareersView
    },
    {
      path: '/cost-calculator',
      name: 'cost-calculator',
      component: CostCalculationView
    },
    {
      path: '/enhanced-calculator',
      name: 'enhanced-calculator',
      component: EnhancedCostCalculationView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new page
    return { top: 0 }
  }
})

export default router
