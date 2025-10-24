<template>
  <div :class="imageContainerClasses">
    <img
      :src="src"
      :alt="alt"
      :class="imageClasses"
      :loading="loading"
      :decoding="decoding"
      @load="handleLoad"
      @error="handleError"
    />
    <div v-if="showOverlay" class="image-overlay">
      <slot name="overlay" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface Props {
  src: string
  alt: string
  variant?: 'default' | 'rounded' | 'circle' | 'square'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none'
  loading?: 'lazy' | 'eager'
  decoding?: 'async' | 'sync' | 'auto'
  showOverlay?: boolean
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md',
  objectFit: 'cover',
  loading: 'lazy',
  decoding: 'async',
  showOverlay: false,
  className: ''
})

const emit = defineEmits<{
  load: [event: Event]
  error: [event: Event]
}>()

const isLoaded = ref(false)
const hasError = ref(false)

const imageContainerClasses = computed(() => [
  'image-container',
  `image-container-${props.variant}`,
  `image-container-${props.size}`,
  props.className
])

const imageClasses = computed(() => [
  'image',
  `image-${props.variant}`,
  `image-${props.size}`,
  `image-${props.objectFit}`,
  {
    'image-loaded': isLoaded.value,
    'image-error': hasError.value
  }
])

const handleLoad = (event: Event) => {
  isLoaded.value = true
  emit('load', event)
}

const handleError = (event: Event) => {
  hasError.value = true
  emit('error', event)
}
</script>

<style scoped>
.image-container {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.image {
  display: block;
  transition: opacity 0.3s ease;
  opacity: 0;
}

.image-loaded {
  opacity: 1;
}

.image-error {
  opacity: 0.5;
  background: #f3f4f6;
}

/* Variants */
.image-default {
  border-radius: 0;
}

.image-rounded {
  border-radius: 8px;
}

.image-circle {
  border-radius: 50%;
}

.image-square {
  border-radius: 0;
}

/* Sizes */
.image-container-xs {
  width: 24px;
  height: 24px;
}

.image-container-sm {
  width: 40px;
  height: 40px;
}

.image-container-md {
  width: 64px;
  height: 64px;
}

.image-container-lg {
  width: 120px;
  height: 120px;
}

.image-container-xl {
  width: 200px;
  height: 200px;
}

.image-container-full {
  width: 100%;
  height: auto;
}

.image-xs {
  width: 24px;
  height: 24px;
}

.image-sm {
  width: 40px;
  height: 40px;
}

.image-md {
  width: 64px;
  height: 64px;
}

.image-lg {
  width: 120px;
  height: 120px;
}

.image-xl {
  width: 200px;
  height: 200px;
}

.image-full {
  width: 100%;
  height: 100%;
}

/* Object fit */
.image-cover {
  object-fit: cover;
}

.image-contain {
  object-fit: contain;
}

.image-fill {
  object-fit: fill;
}

.image-scale-down {
  object-fit: scale-down;
}

.image-none {
  object-fit: none;
}

/* Overlay */
.image-overlay {
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
}

.image-container:hover .image-overlay {
  opacity: 1;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .image-container-xl {
    width: 150px;
    height: 150px;
  }
  
  .image-container-lg {
    width: 100px;
    height: 100px;
  }
  
  .image-xl {
    width: 150px;
    height: 150px;
  }
  
  .image-lg {
    width: 100px;
    height: 100px;
  }
}
</style>
