<template>
  <header class="header" :class="{ 'light-theme': isOverLightBackground, 'navigation-open': isNavigationOpen }">
    <Container>
      <div class="header-content">
        <Logo :is-light-theme="isOverLightBackground" :is-navigation-open="isNavigationOpen" />
        <BurgerMenu :is-light-theme="isOverLightBackground" :is-navigation-open="isNavigationOpen" @toggle="$emit('toggle')" />
      </div>
    </Container>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Container from '../Container.vue'
import Logo from '@/components/header/Logo.vue'
import BurgerMenu from '@/components/header/BurgerMenu.vue'

interface Props {
  isNavigationOpen?: boolean
}

const props = defineProps<Props>()
const isOverLightBackground = ref(false)
let scrollHandler: (() => void) | null = null

defineEmits<{
  toggle: []
}>()

const checkBackgroundBehindHeader = () => {
  // Get the header element
  const header = document.querySelector('.header') as HTMLElement
  if (!header) return

  // Get header position and dimensions
  const headerRect = header.getBoundingClientRect()
  const headerBottom = headerRect.bottom
  const headerCenterX = headerRect.left + headerRect.width / 2

  // Find the element behind the header
  const elementBehind = document.elementFromPoint(headerCenterX, headerBottom + 10)
  
  if (elementBehind) {
    // Check if the element or its parents have background classes
    let currentElement: Element | null = elementBehind
    let hasWhiteBg = false
    
    while (currentElement && currentElement !== document.body) {
      if (currentElement.classList.contains('white-bg')) {
        hasWhiteBg = true
        break
      }
      if (currentElement.classList.contains('black-bg')) {
        hasWhiteBg = false
        break
      }
      currentElement = currentElement.parentElement
    }
    
    // Update the theme state
    isOverLightBackground.value = hasWhiteBg
  }
}

onMounted(() => {
  // Create scroll handler
  scrollHandler = () => {
    requestAnimationFrame(checkBackgroundBehindHeader)
  }
  
  // Add scroll listener
  window.addEventListener('scroll', scrollHandler, { passive: true })
  
  // Initial check
  setTimeout(checkBackgroundBehindHeader, 100)
})

onUnmounted(() => {
  if (scrollHandler) {
    window.removeEventListener('scroll', scrollHandler)
  }
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10002;
  background-color: transparent;
  padding: 24px 0;
  transition: all 0.3s ease;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Light theme styles - when header is over white background */
.header.light-theme {
  /* Add any additional styling for light theme if needed */
}

/* Navigation open styles - when navigation menu is open */
.header.navigation-open {
  /* Add any additional styling for navigation open state if needed */
}

@media (max-width: 640px) {
  .header {
    padding: 18px 0;
  }
}
</style>
