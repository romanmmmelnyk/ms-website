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
// Unregister any existing service workers to prevent caching issues
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      registration.unregister().then((success) => {
        if (success) {
          console.log('Service worker unregistered successfully')
        }
      })
    }
  })
}
