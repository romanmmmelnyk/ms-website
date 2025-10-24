<script setup lang="ts">
import { ref } from 'vue'
import { Header } from './components/header'
import Footer from './components/Footer.vue'
import Navigation from './components/header/Navigation.vue'
import ErrorBoundary from './components/ErrorBoundary.vue'
import CookieConsent from './components/CookieConsent.vue'
import PageTransition from './components/PageTransition.vue'

const isNavigationOpen = ref(false)

const toggleNavigation = () => {
  isNavigationOpen.value = !isNavigationOpen.value
}

const closeNavigation = () => {
  isNavigationOpen.value = false
}
</script>

<template>
  <div id="app">
    <Header :is-navigation-open="isNavigationOpen" @toggle="toggleNavigation" />
    
    <Navigation :is-open="isNavigationOpen" @close="closeNavigation" />
    
    <main class="main">
      <ErrorBoundary>
        <PageTransition />
      </ErrorBoundary>
    </main>

    <Footer />
    
    <CookieConsent />
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
}
</style>
