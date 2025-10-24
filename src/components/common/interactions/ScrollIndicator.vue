<template>
  <div
    :class="scrollIndicatorClasses"
    @click="scrollToTarget"
    :title="title"
  >
    <div class="chevron" v-for="n in chevronCount" :key="n"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  target?: string
  direction?: 'down' | 'up' | 'left' | 'right'
  chevronCount?: number
  title?: string
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  target: '.services-section',
  direction: 'down',
  chevronCount: 2,
  title: 'Scroll to next section',
  className: ''
})

const scrollIndicatorClasses = computed(() => [
  'scroll-indicator',
  `scroll-indicator-${props.direction}`,
  props.className
])

const scrollToTarget = () => {
  const targetElement = document.querySelector(props.target)
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<style scoped>
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.scroll-indicator:hover .chevron {
  border-right-color: var(--color-primary-purple);
  border-bottom-color: var(--color-primary-purple);
  transform: rotate(45deg) scale(1.1);
}

.chevron {
  width: 20px;
  height: 20px;
  border-right: 2px solid var(--color-text-muted);
  border-bottom: 2px solid var(--color-text-muted);
  transform: rotate(45deg);
  animation: bounce 2s infinite;
  transition: all 0.3s ease;
}

.chevron:nth-child(2) {
  animation-delay: 0.2s;
}

.chevron:nth-child(3) {
  animation-delay: 0.4s;
}

/* Direction variants */
.scroll-indicator-up {
  bottom: auto;
  top: 40px;
  flex-direction: column-reverse;
}

.scroll-indicator-up .chevron {
  transform: rotate(-135deg);
}

.scroll-indicator-left {
  left: 40px;
  top: 50%;
  bottom: auto;
  transform: translateY(-50%);
  flex-direction: row-reverse;
}

.scroll-indicator-left .chevron {
  transform: rotate(135deg);
}

.scroll-indicator-right {
  left: auto;
  right: 40px;
  top: 50%;
  bottom: auto;
  transform: translateY(-50%);
  flex-direction: row;
}

.scroll-indicator-right .chevron {
  transform: rotate(-45deg);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) rotate(45deg);
  }
  40% {
    transform: translateY(-10px) rotate(45deg);
  }
  60% {
    transform: translateY(-5px) rotate(45deg);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .scroll-indicator {
    bottom: 30px;
  }
  
  .scroll-indicator-up {
    top: 30px;
  }
  
  .scroll-indicator-left,
  .scroll-indicator-right {
    display: none; /* Hide on mobile for better UX */
  }
  
  .chevron {
    width: 16px;
    height: 16px;
  }
}

@media (max-width: 480px) {
  .scroll-indicator {
    bottom: 20px;
  }
  
  .scroll-indicator-up {
    top: 20px;
  }
  
  .chevron {
    width: 14px;
    height: 14px;
  }
}
</style>
