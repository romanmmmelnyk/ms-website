<template>
  <component
    :is="tag"
    :class="textClasses"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  tag?: 'p' | 'span' | 'div' | 'small'
  variant?: 'default' | 'muted' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
  align?: 'left' | 'center' | 'right' | 'justify'
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'p',
  variant: 'default',
  size: 'md',
  weight: 'normal',
  align: 'left',
  className: ''
})

const textClasses = computed(() => [
  'text',
  `text-${props.variant}`,
  `text-${props.size}`,
  `text-${props.weight}`,
  `text-${props.align}`,
  props.className
])
</script>

<style scoped>
.text {
  font-family: 'Open Sans', sans-serif;
  line-height: 1.6;
  margin: 0;
  color: var(--color-text-primary);
}

/* Size variants */
.text-xs {
  font-size: 0.75rem;
  line-height: 1.4;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.5;
}

.text-md {
  font-size: 1rem;
  line-height: 1.6;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.6;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.6;
}

/* Weight variants */
.text-light {
  font-weight: 300;
}

.text-normal {
  font-weight: 400;
}

.text-medium {
  font-weight: 500;
}

.text-semibold {
  font-weight: 600;
}

.text-bold {
  font-weight: 700;
}

/* Color variants */
.text-default {
  color: var(--color-text-primary);
}

.text-muted {
  color: var(--color-text-muted);
  opacity: 0.8;
}

.text-primary {
  color: var(--color-primary-purple);
}

.text-secondary {
  color: var(--color-secondary);
}

.text-success {
  color: #10b981;
}

.text-warning {
  color: #f59e0b;
}

.text-error {
  color: #ef4444;
}

/* Alignment */
.text-left {
  text-align: left;
}

.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}

.text-justify {
  text-align: justify;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .text-xl {
    font-size: 1.125rem;
  }
  
  .text-lg {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .text-xl {
    font-size: 1rem;
  }
  
  .text-lg {
    font-size: 0.875rem;
  }
  
  .text-md {
    font-size: 0.875rem;
  }
}
</style>
