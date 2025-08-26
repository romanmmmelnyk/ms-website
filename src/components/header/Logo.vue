<template>
  <router-link to="/" class="logo-link">
    <div class="logo" :class="{ 'light-theme': isLightTheme, 'navigation-open': isNavigationOpen }">
        <LogoShort/>    
      <div class="divider"></div>
      <span class="logo-text">mothsolutions</span>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import LogoShort from '@/assets/logo-short.svg'

interface Props {
  isLightTheme?: boolean
  isNavigationOpen?: boolean
}

defineProps<Props>()
</script>

<style scoped>

.logo-link {
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.logo-link:hover {
  transform: scale(1.02);
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 15px;
  white-space: nowrap;
}

.logo-icon {
  overflow: visible;
  padding: 15px;
  flex-shrink: 0;
}

.logo-icon svg {
  width: 120px;
  height: 120px;
  min-width: 120px;
  min-height: 120px;
}

.divider {
  width: 1px;
  height: 60px;
  background-color: var(--color-white-80);
  flex-shrink: 0;
  transition: background-color 0.3s ease;
}

.logo-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-white-90);
  letter-spacing: 0.025em;
  flex-shrink: 0;
  white-space: nowrap;
  transition: color 0.3s ease;
}

/* Light theme styles - when over white background */
.logo.light-theme .divider {
  background-color: var(--color-black-80);
}

.logo.light-theme .logo-text {
  color: var(--color-black-90);
}

/* Navigation open styles - force white colors when navigation is open */
.logo.navigation-open .divider {
  background-color: var(--color-white-80) !important;
}

.logo.navigation-open .logo-text {
  color: var(--color-white-90) !important;
}

@media (max-width: 640px) {
  .logo-icon svg {
    width: 60px;
    height: 60px;
    min-width: 60px;
    min-height: 60px;
  }
  
  .logo-icon {
    padding: 8px;
  }
  
  .divider {
    display: none;
  }
  
  .logo-text {
    display: none;
  }
  
  .logo {
    gap: 0;
  }
}
</style>
