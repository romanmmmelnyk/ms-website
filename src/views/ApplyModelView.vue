<template>
  <div class="apply-model-page">
    <Container>
      <div class="page-content">
        <h1>Apply Model</h1>
        <p>Coming soon...</p>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import Container from '@/components/Container.vue'
</script>

<style scoped>
.apply-model-page {
  min-height: 100vh;
  background: var(--gradient-secondary);
  color: var(--color-text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-content {
  text-align: center;
}

h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

p {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
}
</style>