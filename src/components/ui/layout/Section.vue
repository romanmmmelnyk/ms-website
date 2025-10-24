<template>
  <section :class="sectionClasses">
    <BaseContainer :size="containerSize" :padding="padding">
      <slot />
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseContainer from './BaseContainer.vue'

interface Props {
  background?: 'white' | 'gray' | 'dark' | 'gradient-primary' | 'gradient-secondary' | 'transparent'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  background: 'white',
  padding: 'lg',
  containerSize: 'lg',
  className: ''
})

const sectionClasses = computed(() => [
  'section',
  `section-${props.background}`,
  `section-padding-${props.padding}`,
  props.className
])
</script>

<style scoped>
.section {
  width: 100%;
}

/* Background variants */
.section-white {
  background: #ffffff;
}

.section-gray {
  background: #f8f9fa;
}

.section-dark {
  background: #1a1a1a;
  color: #ffffff;
}

.section-gradient-primary {
  background: var(--gradient-primary);
}

.section-gradient-secondary {
  background: var(--gradient-secondary);
}

.section-transparent {
  background: transparent;
}

/* Padding variants */
.section-padding-none {
  padding: 0;
}

.section-padding-sm {
  padding: 40px 0;
}

.section-padding-md {
  padding: 60px 0;
}

.section-padding-lg {
  padding: 80px 0;
}

/* Responsive padding */
@media (max-width: 768px) {
  .section-padding-sm {
    padding: 30px 0;
  }
  
  .section-padding-md {
    padding: 40px 0;
  }
  
  .section-padding-lg {
    padding: 60px 0;
  }
}

@media (max-width: 480px) {
  .section-padding-sm {
    padding: 20px 0;
  }
  
  .section-padding-md {
    padding: 30px 0;
  }
  
  .section-padding-lg {
    padding: 40px 0;
  }
}
</style>
