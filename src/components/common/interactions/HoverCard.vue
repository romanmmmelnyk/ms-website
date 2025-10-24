<template>
  <div
    :class="hoverCardClasses"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="hover-card-content">
      <slot />
    </div>
    <div v-if="showOverlay" class="hover-card-overlay">
      <slot name="overlay" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface Props {
  variant?: 'default' | 'elevated' | 'outlined' | 'glass'
  scale?: boolean
  showOverlay?: boolean
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  scale: true,
  showOverlay: false,
  className: ''
})

const isHovered = ref(false)

const hoverCardClasses = computed(() => [
  'hover-card',
  `hover-card-${props.variant}`,
  {
    'hover-card-hovered': isHovered.value,
    'hover-card-scale': props.scale
  },
  props.className
])

const handleMouseEnter = () => {
  isHovered.value = true
}

const handleMouseLeave = () => {
  isHovered.value = false
}
</script>

<style scoped>
.hover-card {
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  overflow: hidden;
}

.hover-card-content {
  position: relative;
  z-index: 1;
}

.hover-card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;
}

.hover-card:hover .hover-card-overlay {
  opacity: 1;
}

/* Variants */
.hover-card-default {
  background: #ffffff;
  border-radius: var(--radius-md);
}

.hover-card-elevated {
  background: #ffffff;
  border-radius: var(--radius-lg);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.hover-card-outlined {
  background: transparent;
  border: 2px solid var(--color-primary-purple);
  border-radius: var(--radius-md);
}

.hover-card-glass {
  background: var(--glass-bg-medium);
  backdrop-filter: blur(var(--blur-md));
  border-radius: var(--radius-md);
  border: 1px solid var(--glass-border-medium);
}

/* Hover effects */
.hover-card-scale:hover {
  transform: translateY(-4px);
}

.hover-card-elevated:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.hover-card-outlined:hover {
  background: var(--color-primary-purple);
  color: #ffffff;
}

.hover-card-glass:hover {
  background: var(--glass-bg-heavy);
  border-color: var(--glass-border-heavy);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hover-card-scale:hover {
    transform: translateY(-2px);
  }
  
  .hover-card-elevated:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
}
</style>
