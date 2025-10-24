<template>
  <component
    :is="tag"
    :class="buttonClasses"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'outline' | 'ghost' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  tag?: 'button' | 'a'
  href?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  tag: 'button'
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClasses = computed(() => [
  'btn',
  `btn-${props.variant}`,
  `btn-${props.size}`,
  {
    'btn-disabled': props.disabled
  }
])

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<style scoped>
.btn {
  padding: var(--spacing-lg) var(--spacing-3xl);
  border-radius: var(--radius-md);
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all var(--transition-normal);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  position: relative;
  overflow: hidden;
}

/* Variants */
.btn-primary {
  background: var(--gradient-primary);
  color: var(--color-text-primary);
}

.btn-primary:hover:not(.btn-disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(127, 0, 253, 0.3);
}

.btn-outline {
  background: transparent;
  color: var(--color-text-primary);
  border: 2px solid var(--color-primary-purple);
}

.btn-outline:hover:not(.btn-disabled) {
  background: var(--color-primary-purple);
  transform: translateY(-2px);
}

.btn-ghost {
  background: transparent;
  color: var(--color-text-primary);
  border: none;
}

.btn-ghost:hover:not(.btn-disabled) {
  background: var(--glass-bg-medium);
  transform: translateY(-2px);
}

.btn-secondary {
  background: var(--color-secondary);
  color: var(--color-text-primary);
}

.btn-secondary:hover:not(.btn-disabled) {
  background: var(--color-secondary-dark);
  transform: translateY(-2px);
}

/* Sizes */
.btn-sm {
  padding: var(--spacing-md) var(--spacing-2xl);
  font-size: 0.875rem;
}

.btn-md {
  padding: var(--spacing-lg) var(--spacing-3xl);
  font-size: 1rem;
}

.btn-lg {
  padding: var(--spacing-xl) var(--spacing-4xl);
  font-size: 1.125rem;
}

/* Disabled state */
.btn-disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
}

.btn-disabled:hover {
  transform: none !important;
  box-shadow: none !important;
}

/* Focus styles */
.btn:focus-visible {
  outline: 2px solid var(--color-primary-purple);
  outline-offset: 2px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .btn {
    padding: var(--spacing-md) var(--spacing-2xl);
    font-size: 0.9rem;
  }
  
  .btn-sm {
    padding: var(--spacing-sm) var(--spacing-xl);
    font-size: 0.8rem;
  }
  
  .btn-lg {
    padding: var(--spacing-lg) var(--spacing-3xl);
    font-size: 1rem;
  }
}
</style>
