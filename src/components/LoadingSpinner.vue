<template>
  <div class="loading-spinner" :class="{ overlay: overlay }">
    <div class="spinner">
      <div class="spinner-ring"></div>
      <div class="spinner-text">{{ text }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  text?: string
  overlay?: boolean
}

withDefaults(defineProps<Props>(), {
  text: 'Loading...',
  overlay: false
})
</script>

<style scoped>
.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.loading-spinner.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  padding: 0;
}

.spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.spinner-ring {
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #7b2cff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.spinner-text {
  color: #7b2cff;
  font-weight: 600;
  font-size: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Dark theme for overlay */
.loading-spinner.overlay .spinner-text {
  color: white;
}

.loading-spinner.overlay .spinner-ring {
  border-color: rgba(255, 255, 255, 0.3);
  border-top-color: white;
}
</style>
