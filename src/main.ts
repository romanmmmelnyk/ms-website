import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import './assets/styles/reusable.css'

// Performance monitoring
import { performanceMonitor } from './utils/performance'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// Initialize performance monitoring
performanceMonitor.trackPageLoad()

// Service worker disabled during development to prevent caching issues
// Uncomment the following block when ready for production with offline functionality
/*
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration)
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError)
      })
  })
}
*/
