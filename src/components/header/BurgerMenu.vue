<template>
  <button class="burger-menu" :class="{ 'is-open': isOpen, 'light-theme': isLightTheme, 'navigation-open': isNavigationOpen }" @click="toggleMenu" aria-label="Toggle menu">
    <svg class="circle-svg" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:var(--color-accent-teal);stop-opacity:1" />
          <stop offset="100%" style="stop-color:var(--color-accent-blue);stop-opacity:1" />
        </linearGradient>
      </defs>
      <circle 
        cx="30" 
        cy="30" 
        r="28" 
        stroke="url(#circleGradient)" 
        stroke-width="2" 
        fill="none"
        class="circle-outline"
      />
    </svg>
    <div class="burger-lines" :class="{ 'is-open': isOpen }">
      <span class="line line-1"></span>
      <span class="line line-2"></span>
    </div>
  </button>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

interface Props {
  isLightTheme?: boolean
  isNavigationOpen?: boolean
}

const props = defineProps<Props>()
const isOpen = ref(false)

const emit = defineEmits<{
  toggle: []
}>()

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  emit('toggle')
}

// Watch for when navigation closes and reset burger menu state
watch(() => props.isNavigationOpen, (newValue) => {
  if (!newValue) {
    isOpen.value = false
  }
})
</script>

<style scoped>
.burger-menu {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 12px;
  border-radius: 50%;
  transition: background-color 0.2s;
  width: 60px;
  height: 60px;
}

.burger-menu:hover {
  background-color: var(--color-hover-light);
}

.burger-menu.light-theme:hover {
  background-color: var(--color-hover-dark);
}

.burger-menu.navigation-open:hover {
  background-color: var(--color-hover-light) !important;
}

.circle-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.circle-outline {
  stroke-dasharray: 176;
  stroke-dashoffset: 176;
  transition: stroke-dashoffset 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.burger-menu:hover .circle-outline {
  stroke-dashoffset: 0;
}

/* Keep circle visible when menu is open (cross mode) */
.burger-menu.is-open .circle-outline {
  stroke-dashoffset: 0;
}

/* Hide circle when menu is closed and not hovered */
.burger-menu:not(.is-open):not(:hover) .circle-outline {
  stroke-dashoffset: 176;
}

.burger-lines {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  z-index: 1;
  position: relative;
}

.line {
  width: 28px;
  height: 2px;
  background-color: var(--color-white-90);
  border-radius: 1px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

/* Light theme styles - when over white background */
.burger-menu.light-theme .line {
  background-color: var(--color-black-90);
}

/* Navigation open styles - force white colors when navigation is open */
.burger-menu.navigation-open .line {
  background-color: var(--color-white-90) !important;
}

.line-1 {
  transform: translateY(0);
}

.line-2 {
  transform: translateY(0);
}

/* Animation when menu is open */
.burger-lines.is-open .line-1 {
  transform: translateY(7px) rotate(45deg);
}

.burger-lines.is-open .line-2 {
  transform: translateY(-7px) rotate(-45deg);
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .circle-outline {
    transition: none;
  }
  
  .burger-menu:hover .circle-outline {
    stroke-dashoffset: 0;
  }
  
  .line {
    transition: none;
  }
}

@media (max-width: 640px) {
  .burger-menu {
    width: 50px;
    height: 50px;
    padding: 10px;
  }
  
  .line {
    width: 24px;
    height: 1.5px;
  }
  
  .burger-lines {
    gap: 10px;
  }
  
  .burger-lines.is-open .line-1 {
    transform: translateY(6px) rotate(45deg);
  }
  
  .burger-lines.is-open .line-2 {
    transform: translateY(-6px) rotate(-45deg);
  }
}
</style>
