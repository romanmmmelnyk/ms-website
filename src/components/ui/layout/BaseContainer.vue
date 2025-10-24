<template>
  <div :class="containerClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  center?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'lg',
  padding: 'md',
  center: true
})

const containerClasses = computed(() => [
  'container',
  `container-${props.size}`,
  `container-padding-${props.padding}`,
  {
    'container-center': props.center
  }
])
</script>

<style scoped>
.container {
  width: 100%;
}

.container-center {
  margin: 0 auto;
}

/* Sizes */
.container-sm {
  max-width: 640px;
}

.container-md {
  max-width: 768px;
}

.container-lg {
  max-width: 1400px;
}

.container-xl {
  max-width: 1600px;
}

.container-full {
  max-width: none;
}

/* Padding */
.container-padding-none {
  padding: 0;
}

.container-padding-sm {
  padding: 0 16px;
}

.container-padding-md {
  padding: 0 20px;
}

.container-padding-lg {
  padding: 0 32px;
}

/* Responsive padding */
@media (min-width: 640px) {
  .container-padding-sm {
    padding: 0 20px;
  }
  
  .container-padding-md {
    padding: 0 24px;
  }
  
  .container-padding-lg {
    padding: 0 32px;
  }
}

@media (min-width: 1024px) {
  .container-padding-sm {
    padding: 0 24px;
  }
  
  .container-padding-md {
    padding: 0 32px;
  }
  
  .container-padding-lg {
    padding: 0 40px;
  }
}
</style>
