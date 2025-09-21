import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import CareersView from '../views/CareersView.vue'
import CostCalculationView from '../views/CostCalculationView.vue'
import ContactView from '../views/ContactView.vue'
import AboutView from '../views/AboutView.vue'
import InDevelopmentView from '../views/InDevelopmentView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue'
import TermsOfServiceView from '../views/TermsOfServiceView.vue'
import PolicyHistoryView from '../views/PolicyHistoryView.vue'

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
      redirect: '/in-development'
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
      redirect: '/in-development'
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/in-development',
      name: 'in-development',
      component: InDevelopmentView
    },
    // Service pages that redirect to in-development
    {
      path: '/services/software-development',
      name: 'software-development',
      redirect: '/in-development'
    },
    {
      path: '/services/web-development',
      name: 'web-development',
      redirect: '/in-development'
    },
    {
      path: '/services/application-development',
      name: 'application-development',
      redirect: '/in-development'
    },
    {
      path: '/services/ui-ux-design',
      name: 'ui-ux-design',
      redirect: '/in-development'
    },
    {
      path: '/services/web-design',
      name: 'web-design',
      redirect: '/in-development'
    },
    {
      path: '/apply',
      name: 'apply',
      redirect: '/in-development'
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicyView
    },
    {
      path: '/terms-of-service',
      name: 'terms-of-service',
      component: TermsOfServiceView
    },
    // Policy history routes
    {
      path: '/terms-policies/:type/history/:versionId',
      name: 'policy-history',
      component: PolicyHistoryView,
      props: true
    },
    // Catch-all route for 404 pages
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new page
    return { top: 0 }
  }
})

export default router
