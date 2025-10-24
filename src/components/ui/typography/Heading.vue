<template>
  <component
    :is="tag"
    :class="headingClasses"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  variant?: 'default' | 'gradient' | 'highlight' | 'muted'
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  align?: 'left' | 'center' | 'right'
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  level: 1,
  variant: 'default',
  size: 'lg',
  align: 'left',
  className: ''
})

const tag = computed(() => `h${props.level}`)

const headingClasses = computed(() => [
  'heading',
  `heading-${props.level}`,
  `heading-${props.variant}`,
  `heading-${props.size}`,
  `heading-${props.align}`,
  props.className
])
</script>

<style scoped>
.heading {
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  color: var(--color-text-primary);
}

/* Level variants */
.heading-1 {
  font-size: 3.5rem;
  font-weight: 700;
}

.heading-2 {
  font-size: 2.5rem;
  font-weight: 600;
}

.heading-3 {
  font-size: 2rem;
  font-weight: 600;
}

.heading-4 {
  font-size: 1.5rem;
  font-weight: 600;
}

.heading-5 {
  font-size: 1.25rem;
  font-weight: 600;
}

.heading-6 {
  font-size: 1.125rem;
  font-weight: 600;
}

/* Size overrides */
.heading-sm {
  font-size: 1.5rem;
}

.heading-md {
  font-size: 2rem;
}

.heading-lg {
  font-size: 2.5rem;
}

.heading-xl {
  font-size: 3rem;
}

.heading-2xl {
  font-size: 3.5rem;
}

.heading-3xl {
  font-size: 4rem;
}

.heading-4xl {
  font-size: 4.5rem;
}

/* Variants */
.heading-gradient {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.heading-highlight {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  font-style: italic;
}

.heading-muted {
  color: var(--color-text-muted);
  opacity: 0.8;
}

/* Alignment */
.heading-left {
  text-align: left;
}

.heading-center {
  text-align: center;
}

.heading-right {
  text-align: right;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .heading-1 {
    font-size: 3rem;
  }
  
  .heading-2 {
    font-size: 2.25rem;
  }
  
  .heading-3 {
    font-size: 1.75rem;
  }
  
  .heading-4xl {
    font-size: 3.5rem;
  }
  
  .heading-3xl {
    font-size: 3rem;
  }
  
  .heading-2xl {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .heading-1 {
    font-size: 2.5rem;
  }
  
  .heading-2 {
    font-size: 2rem;
  }
  
  .heading-3 {
    font-size: 1.5rem;
  }
  
  .heading-4xl {
    font-size: 2.5rem;
  }
  
  .heading-3xl {
    font-size: 2.25rem;
  }
  
  .heading-2xl {
    font-size: 2rem;
  }
  
  .heading-xl {
    font-size: 1.75rem;
  }
}

@media (max-width: 480px) {
  .heading-1 {
    font-size: 1.85rem;
  }
  
  .heading-2 {
    font-size: 1.5rem;
  }
  
  .heading-3 {
    font-size: 1.25rem;
  }
  
  .heading-4xl {
    font-size: 2rem;
  }
  
  .heading-3xl {
    font-size: 1.75rem;
  }
  
  .heading-2xl {
    font-size: 1.5rem;
  }
  
  .heading-xl {
    font-size: 1.25rem;
  }
}
</style>
