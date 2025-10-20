<template>
  <div class="launch-view">
    <Container>
      <div class="launch-content">
        <h1 class="launch-title">Moth Launch</h1>
        <p class="launch-subtitle">Coming soon...</p>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import Container from '@/components/Container.vue'
</script>

<style scoped>
.launch-view {
  min-height: 100vh;
  background: var(--gradient-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 0;
}

.launch-content {
  text-align: center;
}

.launch-title {
  font-size: 4rem;
  font-weight: 700;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.launch-subtitle {
  font-size: 1.5rem;
  color: var(--color-text-muted);
}

@media (max-width: 768px) {
  .launch-title {
    font-size: 2.5rem;
  }
  
  .launch-subtitle {
    font-size: 1.2rem;
  }
}
</style>

