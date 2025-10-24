<template>
  <section class="page-header" :class="headerClasses">
    <div class="hero-content">
      <nav v-if="breadcrumbs && breadcrumbs.length > 0" class="breadcrumbs">
        <template v-for="(crumb, index) in breadcrumbs" :key="index">
          <router-link 
            v-if="crumb.href" 
            :to="crumb.href" 
            class="breadcrumb-link"
          >
            {{ crumb.label }}
          </router-link>
          <span v-else class="breadcrumb-current">{{ crumb.label }}</span>
          <span 
            v-if="index < breadcrumbs.length - 1" 
            class="breadcrumb-separator"
          >
            /
          </span>
        </template>
      </nav>
      
      <h1 class="hero-title" :class="titleClasses">{{ title }}</h1>
      
      <p v-if="subtitle" class="hero-subtitle" :class="subtitleClasses">
        {{ subtitle }}
      </p>
      
      <div v-if="$slots.actions" class="hero-actions">
        <slot name="actions" />
      </div>
    </div>
    
    <!-- Background decoration -->
    <div v-if="showBackground" class="hero-background"></div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Breadcrumb {
  label: string
  href?: string
}

interface Props {
  title: string
  subtitle?: string
  breadcrumbs?: Breadcrumb[]
  variant?: 'default' | 'gradient' | 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
  showBackground?: boolean
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'gradient',
  size: 'md',
  showBackground: true,
  className: ''
})

const headerClasses = computed(() => [
  'page-header',
  `page-header-${props.variant}`,
  `page-header-${props.size}`,
  props.className
])

const titleClasses = computed(() => [
  'hero-title',
  `hero-title-${props.size}`
])

const subtitleClasses = computed(() => [
  'hero-subtitle',
  `hero-subtitle-${props.size}`
])
</script>

<style scoped>
.page-header {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: calc(var(--spacing-3xl) + 80px); /* Account for fixed header */
  padding-bottom: var(--spacing-lg); /* Small bottom padding */
}

/* Variants */
.page-header-default {
  background: var(--color-background) !important;
  color: var(--color-text-primary) !important;
}

.page-header-gradient {
  background: linear-gradient(135deg, rgba(76, 0, 151, 0.9) 0%, rgba(51, 0, 102, 0.95) 100%) !important;
  color: #ffffff !important;
}

.page-header-dark {
  background: #1a1a1a !important;
  color: #ffffff !important;
}

.page-header-light {
  background: #f8f9fa !important;
  color: var(--color-text-primary) !important;
}

/* Sizes */
.page-header-sm {
  height: 300px;
}

.page-header-md {
  height: 400px;
}

.page-header-lg {
  height: 500px;
}

/* Background decoration */
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/assets/logos/hero.svg') no-repeat center center;
  background-size: cover;
  opacity: 0.05;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 0 var(--spacing-3xl);
}

/* Breadcrumbs */
.breadcrumbs {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-2xl);
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}

.breadcrumb-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color var(--transition-normal);
}

.breadcrumb-link:hover {
  color: rgba(255, 255, 255, 1);
}

.breadcrumb-current {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  font-weight: 500;
}

.breadcrumb-separator {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  margin: 0 var(--spacing-xs);
}

/* Light variant breadcrumbs */
.page-header-light .breadcrumb-link {
  color: var(--color-text-muted);
}

.page-header-light .breadcrumb-link:hover {
  color: var(--color-primary-purple);
}

.page-header-light .breadcrumb-current {
  color: var(--color-text-muted);
  opacity: var(--text-opacity-muted);
}

.page-header-light .breadcrumb-separator {
  color: var(--color-text-muted);
  opacity: var(--text-opacity-muted);
}

/* Titles */
.hero-title {
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  margin: 0 0 var(--spacing-lg) 0;
  line-height: 1.2;
}

.hero-title-sm {
  font-size: 2rem;
}

.hero-title-md {
  font-size: 3rem;
}

.hero-title-lg {
  font-size: 3.5rem;
}

/* Subtitles */
.hero-subtitle {
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0 0 var(--spacing-3xl) 0;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-subtitle-sm {
  font-size: 1rem;
}

.hero-subtitle-md {
  font-size: 1.1rem;
}

.hero-subtitle-lg {
  font-size: 1.25rem;
}

/* Actions */
.hero-actions {
  display: flex;
  gap: var(--spacing-lg);
  justify-content: center;
  flex-wrap: wrap;
}

/* Responsive Design */
@media (max-width: 768px) {
  .page-header {
    padding-top: calc(var(--spacing-xl) + 100px); /* Extra spacing for mobile */
  }
  
  .page-header-sm {
    height: 250px;
  }
  
  .page-header-md {
    height: 300px;
  }
  
  .page-header-lg {
    height: 350px;
  }
  
  .hero-content {
    padding: 0 var(--spacing-xl);
  }
  
  .hero-title-sm {
    font-size: 1.75rem;
  }
  
  .hero-title-md {
    font-size: 2.25rem;
  }
  
  .hero-title-lg {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .breadcrumbs {
    margin-bottom: var(--spacing-lg);
  }
  
  .breadcrumb-link,
  .breadcrumb-current,
  .breadcrumb-separator {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .page-header {
    padding-top: calc(var(--spacing-lg) + 90px); /* Extra spacing for small mobile */
  }
  
  .page-header-sm {
    height: 200px;
  }
  
  .page-header-md {
    height: 250px;
  }
  
  .page-header-lg {
    height: 300px;
  }
  
  .hero-content {
    padding: 0 var(--spacing-lg);
  }
  
  .hero-title-sm {
    font-size: 1.5rem;
  }
  
  .hero-title-md {
    font-size: 2rem;
  }
  
  .hero-title-lg {
    font-size: 2.25rem;
  }
  
  .hero-subtitle {
    font-size: 0.95rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>
