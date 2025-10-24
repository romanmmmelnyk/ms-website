<template>
  <div :class="gridClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  cols?: 1 | 2 | 3 | 4 | 5 | 6
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  responsive?: boolean
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  cols: 3,
  gap: 'md',
  responsive: true,
  className: ''
})

const gridClasses = computed(() => [
  'grid',
  `grid-cols-${props.cols}`,
  `grid-gap-${props.gap}`,
  {
    'grid-responsive': props.responsive
  },
  props.className
])
</script>

<style scoped>
.grid {
  display: grid;
}

/* Column variants */
.grid-cols-1 {
  grid-template-columns: repeat(1, 1fr);
}

.grid-cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid-cols-3 {
  grid-template-columns: repeat(3, 1fr);
}

.grid-cols-4 {
  grid-template-columns: repeat(4, 1fr);
}

.grid-cols-5 {
  grid-template-columns: repeat(5, 1fr);
}

.grid-cols-6 {
  grid-template-columns: repeat(6, 1fr);
}

/* Gap variants */
.grid-gap-none {
  gap: 0;
}

.grid-gap-sm {
  gap: 16px;
}

.grid-gap-md {
  gap: 24px;
}

.grid-gap-lg {
  gap: 32px;
}

.grid-gap-xl {
  gap: 48px;
}

/* Responsive behavior */
.grid-responsive {
  /* Mobile first - single column */
}

@media (min-width: 640px) {
  .grid-responsive.grid-cols-2,
  .grid-responsive.grid-cols-3,
  .grid-responsive.grid-cols-4,
  .grid-responsive.grid-cols-5,
  .grid-responsive.grid-cols-6 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .grid-responsive.grid-cols-3,
  .grid-responsive.grid-cols-4,
  .grid-responsive.grid-cols-5,
  .grid-responsive.grid-cols-6 {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-responsive.grid-cols-4,
  .grid-responsive.grid-cols-5,
  .grid-responsive.grid-cols-6 {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 1280px) {
  .grid-responsive.grid-cols-5,
  .grid-responsive.grid-cols-6 {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media (min-width: 1536px) {
  .grid-responsive.grid-cols-6 {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
