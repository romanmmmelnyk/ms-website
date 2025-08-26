<template>
  <div class="portfolio">
    <section class="section black-bg first-section">
      <Container>
        <h1>Portfolio</h1>
        <p>Portfolio content will go here.</p>
      </Container>
    </section>
    
    <section class="section white-bg">
      <Container>
        <h2>Our Work</h2>
        <p>Showcasing our best projects and achievements.</p>
      </Container>
    </section>
    
    <section class="section black-bg">
      <Container>
        <h2>Case Studies</h2>
        <p>Detailed analysis of our successful projects.</p>
      </Container>
    </section>
  </div>
</template>

<script setup lang="ts">
import Container from '../components/Container.vue'
</script>

<style scoped>
.portfolio {
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
}

.section {
  padding: 80px 0;
  min-height: 400px;
  display: flex;
  align-items: center;
}

.first-section {
  padding-top: 200px;
}

.black-bg {
  background-color: var(--color-black);
  color: var(--color-white);
}

.white-bg {
  background-color: var(--color-white);
  color: var(--color-black);
}

h1, h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  text-align: center;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: center;
}

@media (max-width: 640px) {
  .first-section {
    padding-top: 120px;
  }
}
</style>
