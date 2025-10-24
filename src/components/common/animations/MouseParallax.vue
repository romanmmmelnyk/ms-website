<template>
  <div
    :class="parallaxClasses"
    :style="parallaxStyles"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'

interface Props {
  intensity?: number
  direction?: 'horizontal' | 'vertical' | 'both'
  disabled?: boolean
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  intensity: 0.3,
  direction: 'both',
  disabled: false,
  className: ''
})

const mousePosition = ref({ x: 0, y: 0 })
const elementRef = ref<HTMLElement | null>(null)

const parallaxClasses = computed(() => [
  'parallax',
  {
    'parallax-disabled': props.disabled
  },
  props.className
])

const parallaxStyles = computed(() => {
  if (props.disabled) return {}
  
  const x = mousePosition.value.x * props.intensity
  const y = mousePosition.value.y * props.intensity
  
  let transform = ''
  
  if (props.direction === 'horizontal' || props.direction === 'both') {
    transform += `translateX(${x}px) `
  }
  
  if (props.direction === 'vertical' || props.direction === 'both') {
    transform += `translateY(${y}px)`
  }
  
  return {
    transform: transform.trim()
  }
})

const handleMouseMove = (event: MouseEvent) => {
  if (props.disabled || !elementRef.value) return
  
  // Disable parallax on mobile devices
  if (window.innerWidth <= 768) {
    mousePosition.value = { x: 0, y: 0 }
    return
  }
  
  const rect = elementRef.value.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  
  // Calculate mouse position relative to center (-1 to 1)
  const mouseX = (event.clientX - centerX) / (rect.width / 2)
  const mouseY = (event.clientY - centerY) / (rect.height / 2)
  
  mousePosition.value = {
    x: mouseX * 20, // Max 20px movement
    y: mouseY * 20
  }
}

const handleMouseLeave = () => {
  mousePosition.value = { x: 0, y: 0 }
}

onMounted(() => {
  elementRef.value = document.querySelector('.parallax') as HTMLElement
})

onUnmounted(() => {
  mousePosition.value = { x: 0, y: 0 }
})
</script>

<style scoped>
.parallax {
  transition: transform 0.1s ease-out;
  will-change: transform;
}

.parallax-disabled {
  transform: none !important;
}

/* Smooth transitions */
@media (prefers-reduced-motion: reduce) {
  .parallax {
    transition: none;
  }
}
</style>
