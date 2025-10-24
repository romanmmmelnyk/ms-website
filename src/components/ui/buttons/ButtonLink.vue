<template>
  <BaseButton
    :variant="variant"
    :size="size"
    :disabled="disabled"
    tag="a"
    :href="href"
    :target="target"
    :rel="rel"
    @click="handleClick"
  >
    <slot />
  </BaseButton>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue'

interface Props {
  variant?: 'primary' | 'outline' | 'ghost' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  href: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  rel?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  target: '_self'
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const rel = computed(() => {
  if (props.target === '_blank') {
    return 'noopener noreferrer'
  }
  return props.rel
})

const handleClick = (event: MouseEvent) => {
  emit('click', event)
}
</script>

<script lang="ts">
import { computed } from 'vue'
</script>
