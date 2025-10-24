<template>
  <div :class="iconClasses">
    <svg
      :width="size"
      :height="size"
      :viewBox="viewBox"
      :fill="fill"
      :stroke="stroke"
      :stroke-width="strokeWidth"
      :class="svgClasses"
    >
      <slot />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number
  variant?: 'default' | 'primary' | 'secondary' | 'muted' | 'success' | 'warning' | 'error'
  fill?: string
  stroke?: string
  strokeWidth?: number | string
  viewBox?: string
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  variant: 'default',
  fill: 'currentColor',
  stroke: 'none',
  strokeWidth: 0,
  viewBox: '0 0 24 24',
  className: ''
})

const iconClasses = computed(() => [
  'icon',
  `icon-${props.variant}`,
  props.className
])

const svgClasses = computed(() => [
  'icon-svg',
  `icon-svg-${props.variant}`
])

const size = computed(() => {
  if (typeof props.size === 'number') {
    return props.size
  }
  
  const sizeMap = {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 32,
    xl: 40
  }
  
  return sizeMap[props.size]
})
</script>

<style scoped>
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.icon-svg {
  transition: all 0.2s ease;
}

/* Variants */
.icon-default .icon-svg {
  color: var(--color-text-primary);
}

.icon-primary .icon-svg {
  color: var(--color-primary-purple);
}

.icon-secondary .icon-svg {
  color: var(--color-secondary);
}

.icon-muted .icon-svg {
  color: var(--color-text-muted);
  opacity: 0.7;
}

.icon-success .icon-svg {
  color: #10b981;
}

.icon-warning .icon-svg {
  color: #f59e0b;
}

.icon-error .icon-svg {
  color: #ef4444;
}

/* Hover effects */
.icon:hover .icon-svg {
  transform: scale(1.1);
}

.icon-primary:hover .icon-svg {
  color: var(--color-primary-purple-dark);
}

.icon-secondary:hover .icon-svg {
  color: var(--color-secondary-dark);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .icon-lg {
    width: 28px;
    height: 28px;
  }
  
  .icon-xl {
    width: 32px;
    height: 32px;
  }
}
</style>
