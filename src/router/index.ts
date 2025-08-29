import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import CareersView from '../views/CareersView.vue'
import CostCalculationView from '../views/CostCalculationView.vue'
import EnhancedCostCalculationView from '../views/EnhancedCostCalculationView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
})

export default router
