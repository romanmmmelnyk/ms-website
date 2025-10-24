<template>
  <section class="hero-section">
    <Container>
      <div class="hero-content">
        <!-- Left Side - Text Content -->
        <div class="hero-text">
          <div class="hero-subtitle">
            <div class="vertical-line"></div>
            <span>Creating innovative IT solutions for your business</span>
          </div>

          <h1 class="hero-title">
            We inspire ideas and turn them into functional digital
            <span class="highlight rotating-text">
              <span class="text-item" :class="{ active: currentTextIndex === 0 }">products.</span>
              <span class="text-item" :class="{ active: currentTextIndex === 1 }">designs.</span>
              <span class="text-item" :class="{ active: currentTextIndex === 2 }">apps.</span>
            </span>
          </h1>

          <div class="hero-buttons">
            <BaseButton variant="outline" @click="navigateToServices">Our services</BaseButton>
            <BaseButton variant="primary" @click="navigateToContact">Get in touch</BaseButton>
          </div>
        </div>

        <!-- Right Side - Hero SVG -->
        <div class="hero-visual">
          <img
            src="/assets/logos/hero.svg"
            alt="Hero illustration"
            class="hero-svg"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <!-- Scroll Indicator -->
      <ScrollIndicator target=".services-section" />
    </Container>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import Container from './Container.vue'
import { BaseButton } from './ui'
import { ScrollIndicator } from './common'
import { performanceMonitor, measureSync } from '@/utils/performance'

const router = useRouter()
const currentTextIndex = ref(0)
let intervalId: number | null = null
const componentStartTime = performance.now()

const texts = ['products.', 'designs.', 'applications.']

const startTextRotation = () => {
  intervalId = setInterval(() => {
    currentTextIndex.value = (currentTextIndex.value + 1) % texts.length
  }, 3000)
}

const navigateToContact = () => {
  router.push('/contact')
}

const navigateToServices = () => {
  router.push('/services')
}


onMounted(() => {
  startTextRotation()
  // Track component render time
  performanceMonitor.trackComponentRender('HeroSection', componentStartTime)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  background: var(--gradient-secondary);
  display: flex;
  align-items: center;
  position: relative;
  padding: 120px 0 80px;
  overflow: hidden;
}

.hero-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 80px;
  align-items: center;
}

.hero-text {
  max-width: 900px;
  z-index: 20;
}

.hero-subtitle {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  color: var(--color-text-muted);
  font-size: 1.1rem;
  font-weight: 500;
  opacity: 0.6;
}

.vertical-line {
  width: 2px;
  height: 40px;
  background: var(--color-white);
  flex-shrink: 0;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  color: var(--color-text-primary);
  margin-bottom: 40px;
}

.highlight {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Rotating Text Animation */
.rotating-text {
  position: relative;
  display: inline-block;
  min-width: 200px;
}

.text-item {
  position: absolute;
  top: -30px;
  left: 0;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-item.active {
  opacity: 1;
  transform: translateY(0);
}

.hero-buttons {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}


/* Right Side - Hero SVG */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-svg {
  width: 100%;
  max-width: 500px;
  height: auto;
  object-fit: contain;
  transform: scale(2) translateX(-50px);
  transition: transform 0.3s ease;
}


/* Responsive Design */
@media (min-width: 1025px) {
  .text-item {
    top: -50px;
  }
}

@media (max-width: 1024px) {
  .hero-content {
    gap: 60px;
  }

  .hero-title {
    font-size: 3rem;
  }

  .hero-svg {
    max-width: 400px;
    transform: scale(2) translateX(-50px);
  }

  .text-item {
    top: -50px;
  }
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .hero-text {
    max-width: 100%;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-visual {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hero-svg {
    max-width: 200px;
    opacity: 0.5;
    transform: scale(5) translate(-50px, -20px);
  }

  .hero-section {
    padding: 100px 0 60px;
  }

  .rotating-text {
    min-width: 150px;
  }

  .text-item {
    top: -39px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    text-align: start;
    font-size: 1.85rem;
  }

  .hero-subtitle {
    text-align: start;
    font-size: 1rem;
    flex-direction: column;
    gap: 15px;
  }

  .vertical-line {
    width: 40px;
    height: 2px;
  }

  .text-item {
    align-items: center;
    top: -30px;
  }

  .btn {
    padding: 14px 24px;
    font-size: 0.9rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .rotating-text {
    min-width: 120px;
  }

  .hero-svg {
    max-width: 120px;
    opacity: 0.2;
    transform: scale(6) translate(-15px, -20px);
  }
}
</style>
