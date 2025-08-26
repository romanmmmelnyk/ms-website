<template>
  <div v-if="hasError" class="error-boundary">
    <div class="error-content">
      <h2>Oops! Something went wrong</h2>
      <p>We're sorry, but something unexpected happened. Please try refreshing the page.</p>
      <button @click="resetError" class="error-button">
        Try Again
      </button>
    </div>
  </div>
  <slot v-else />
</template>

<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue'

const hasError = ref(false)
const error = ref<Error | null>(null)

onErrorCaptured((err: Error) => {
  hasError.value = true
  error.value = err
  console.error('Error caught by boundary:', err)
  return false // Prevent error from propagating
})

const resetError = () => {
  hasError.value = false
  error.value = null
  window.location.reload()
}
</script>

<style scoped>
.error-boundary {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 12px;
  margin: 2rem 0;
}

.error-content {
  text-align: center;
  max-width: 500px;
}

.error-content h2 {
  color: #e74c3c;
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

.error-content p {
  color: #555;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.error-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.error-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}
</style>
