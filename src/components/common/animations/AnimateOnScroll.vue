<template>
  <div
    :class="animationClasses"
    :style="animationStyles"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'

interface Props {
  type?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate'
  delay?: number
  duration?: number
  trigger?: 'onMount' | 'onScroll' | 'onHover' | 'manual'
  threshold?: number
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'fadeIn',
  delay: 0,
  duration: 600,
  trigger: 'onScroll',
  threshold: 0.1,
  className: ''
})

const emit = defineEmits<{
  animate: []
  complete: []
}>()

const isVisible = ref(false)
const isAnimated = ref(false)
let observer: IntersectionObserver | null = null

const animationClasses = computed(() => [
  'animation',
  `animation-${props.type}`,
  {
    'animation-visible': isVisible.value,
    'animation-animated': isAnimated.value
  },
  props.className
])

const animationStyles = computed(() => ({
  '--animation-delay': `${props.delay}ms`,
  '--animation-duration': `${props.duration}ms`
}))

const startAnimation = () => {
  if (isAnimated.value) return
  
  setTimeout(() => {
    isVisible.value = true
    emit('animate')
    
    setTimeout(() => {
      isAnimated.value = true
      emit('complete')
    }, props.duration)
  }, props.delay)
}

const setupIntersectionObserver = () => {
  if (props.trigger !== 'onScroll') return
  
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isAnimated.value) {
          startAnimation()
        }
      })
    },
    {
      threshold: props.threshold,
      rootMargin: '0px 0px -50px 0px'
    }
  )
  
  observer.observe(document.querySelector('.animation') as Element)
}

onMounted(() => {
  if (props.trigger === 'onMount') {
    startAnimation()
  } else if (props.trigger === 'onScroll') {
    setupIntersectionObserver()
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})

// Expose methods for manual triggering
defineExpose({
  startAnimation,
  isVisible: () => isVisible.value,
  isAnimated: () => isAnimated.value
})
</script>

<style scoped>
.animation {
  transition: all var(--animation-duration, 600ms) cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: var(--animation-delay, 0ms);
}

/* Fade In */
.animation-fadeIn {
  opacity: 0;
}

.animation-fadeIn.animation-visible {
  opacity: 1;
}

/* Slide Up */
.animation-slideUp {
  opacity: 0;
  transform: translateY(30px);
}

.animation-slideUp.animation-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Slide Down */
.animation-slideDown {
  opacity: 0;
  transform: translateY(-30px);
}

.animation-slideDown.animation-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Slide Left */
.animation-slideLeft {
  opacity: 0;
  transform: translateX(30px);
}

.animation-slideLeft.animation-visible {
  opacity: 1;
  transform: translateX(0);
}

/* Slide Right */
.animation-slideRight {
  opacity: 0;
  transform: translateX(-30px);
}

.animation-slideRight.animation-visible {
  opacity: 1;
  transform: translateX(0);
}

/* Scale */
.animation-scale {
  opacity: 0;
  transform: scale(0.9);
}

.animation-scale.animation-visible {
  opacity: 1;
  transform: scale(1);
}

/* Rotate */
.animation-rotate {
  opacity: 0;
  transform: rotate(-10deg) scale(0.9);
}

.animation-rotate.animation-visible {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}

/* Hover trigger */
.animation:hover {
  cursor: pointer;
}
</style>
