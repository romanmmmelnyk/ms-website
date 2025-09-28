<template>
  <section class="black-block-section" ref="portfolioSection" :class="{ 'animate-in': isPortfolioVisible, 'fullscreen': isFullscreen }" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
    <Container>
      <div class="black-block" :style="{ background: currentStage.background }" :class="{ 'transitioning': isTransitioning }" @click="toggleFullscreen">
        <img :src="currentStage.image" :alt="currentStage.title" class="portfolio-image" ref="portfolioImage" :class="{ 'animate-in': isPortfolioImageVisible, 'transitioning': isTransitioning }" :style="{ transform: `translate(-50%, -50%) translate(${mouseParallax.x * 0.3}px, ${mouseParallax.y * 0.3}px)` }" />
        <h2 class="portfolio-title" ref="portfolioTitle" :class="{ 'animate-in': isPortfolioTitleVisible, 'transitioning': isTransitioning }" :style="{ color: textColor, transform: `translate(-50%, -50%) scaleY(2) translate(${mouseParallax.x * 0.2}px, ${mouseParallax.y * 0.2}px)` }">{{ currentStage.title }}</h2>
        <h2 class="portfolio-title-stroke" ref="portfolioTitleStroke" :class="{ 'animate-in': isPortfolioTitleStrokeVisible, 'transitioning': isTransitioning }" :style="{ '-webkit-text-stroke': `2px ${strokeColor}`, transform: `translate(-50%, -50%) scaleY(2) translate(${mouseParallax.x * 0.2}px, ${mouseParallax.y * 0.2}px)` }">{{ currentStage.title }}</h2>
        <div class="futuristic-beauty" ref="futuristicBeauty" :class="{ 'animate-in': isFuturisticBeautyVisible, 'transitioning': isTransitioning }" :style="{ transform: `translate(${mouseParallax.x * 0.4}px, ${mouseParallax.y * 0.4}px)` }">
          <span class="futuristic-beauty-line" :style="{ color: textColor }">{{ currentStage.beautyText.split(' ')[0] }}</span>
          <span class="futuristic-beauty-line" :style="{ color: textColor }">{{ currentStage.beautyText.split(' ')[1] }}</span>
        </div>
        <div class="portfolio-arrow" ref="portfolioArrow" :class="{ 'animate-in': isPortfolioArrowVisible }" @click.stop="nextPortfolioStage">
          <svg width="120" height="20" viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10L100 10M100 10L80 0M100 10L80 20" :stroke="textColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="portfolio-socials" ref="portfolioSocials" :class="{ 'animate-in': isPortfolioSocialsVisible }" :style="{ transform: `translate(${mouseParallax.x * 0.3}px, ${mouseParallax.y * 0.3}px)` }">
          <a href="https://instagram.com/moth.solutions" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" :fill="textColor"/>
            </svg>
          </a>
          <a href="https://facebook.com/mothsolutions" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Facebook">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" :fill="textColor"/>
            </svg>
          </a>
          <a href="https://x.com/mothsolutions" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="X (Twitter)">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" :fill="textColor"/>
            </svg>
          </a>
        </div>
        
        <!-- Close button for fullscreen -->
        <button v-if="isFullscreen" class="close-button" @click.stop="toggleFullscreen" aria-label="Close fullscreen">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" :stroke="textColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import Container from './Container.vue'

// Portfolio stages data
const portfolioStages = [
  {
    title: 'PORTFOLIO',
    beautyText: 'FUTURISTIC BEAUTY',
    image: '/model-hero.png',
    background: 'radial-gradient(circle, #cdf2f6 0%, #768c9e 100%)'
  },
  {
    title: 'PORTFOLIO',
    beautyText: 'NATURAL BEAUTY',
    image: '/model2-hero.png',
    background: 'radial-gradient(circle, #645543 0%, #b6b6b6 100%)'
  }
]

// Refs
const portfolioSection = ref<HTMLElement | null>(null)
const portfolioTitle = ref<HTMLElement | null>(null)
const portfolioTitleStroke = ref<HTMLElement | null>(null)
const portfolioImage = ref<HTMLElement | null>(null)
const futuristicBeauty = ref<HTMLElement | null>(null)
const portfolioArrow = ref<HTMLElement | null>(null)
const portfolioSocials = ref<HTMLElement | null>(null)

// Animation states
const isPortfolioVisible = ref(false)
const isPortfolioTitleVisible = ref(false)
const isPortfolioTitleStrokeVisible = ref(false)
const isPortfolioImageVisible = ref(false)
const isFuturisticBeautyVisible = ref(false)
const isPortfolioArrowVisible = ref(false)
const isPortfolioSocialsVisible = ref(false)

// Portfolio carousel state
const currentPortfolioStage = ref(0)
const isTransitioning = ref(false)

// Mouse parallax effect state
const mouseParallax = ref({ x: 0, y: 0 })

// Fullscreen state
const isFullscreen = ref(false)

// Computed properties for current portfolio stage
const currentStage = computed(() => portfolioStages[currentPortfolioStage.value])

// Dynamic colors based on current stage
const textColor = computed(() => {
  return currentPortfolioStage.value === 0 ? '#cdf2f6' : '#d9d9d9'
})

const strokeColor = computed(() => {
  return currentPortfolioStage.value === 0 ? '#cdf2f6' : '#d9d9d9'
})

// Portfolio carousel methods
const nextPortfolioStage = () => {
  if (isTransitioning.value) return
  
  isTransitioning.value = true
  
  // Fade out current content
  setTimeout(() => {
    currentPortfolioStage.value = (currentPortfolioStage.value + 1) % portfolioStages.length
    
    // Fade in new content
    setTimeout(() => {
      isTransitioning.value = false
    }, 400)
  }, 400)
}

// Mouse parallax effect handler
const handleMouseMove = (event: MouseEvent) => {
  if (!portfolioSection.value) return
  
  // Disable parallax on mobile devices (768px and below)
  if (window.innerWidth <= 768) {
    mouseParallax.value = { x: 0, y: 0 }
    return
  }
  
  const rect = portfolioSection.value.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  
  // Calculate mouse position relative to center (-1 to 1)
  const mouseX = (event.clientX - centerX) / (rect.width / 2)
  const mouseY = (event.clientY - centerY) / (rect.height / 2)
  
  // Apply subtle parallax effect (max 20px movement)
  mouseParallax.value = {
    x: mouseX * 20,
    y: mouseY * 20
  }
}

const handleMouseLeave = () => {
  // Reset to center when mouse leaves
  mouseParallax.value = { x: 0, y: 0 }
}

// Fullscreen toggle function
const toggleFullscreen = () => {
  isFullscreen.value = !isFullscreen.value
  
  if (isFullscreen.value) {
    // Prevent body scroll when in fullscreen
    document.body.style.overflow = 'hidden'
  } else {
    // Restore body scroll
    document.body.style.overflow = 'auto'
  }
}

// Keyboard navigation
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isFullscreen.value) {
    toggleFullscreen()
  }
}

// Intersection Observer for animations
const setupIntersectionObserver = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === portfolioSection.value) {
            isPortfolioVisible.value = true
            // Trigger portfolio title animation
            setTimeout(() => {
              isPortfolioTitleVisible.value = true
            }, 200)
            // Trigger portfolio title stroke animation
            setTimeout(() => {
              isPortfolioTitleStrokeVisible.value = true
            }, 400)
            // Trigger portfolio image animation
            setTimeout(() => {
              isPortfolioImageVisible.value = true
            }, 600)
            // Trigger futuristic beauty text animation
            setTimeout(() => {
              isFuturisticBeautyVisible.value = true
            }, 800)
            // Trigger portfolio arrow animation
            setTimeout(() => {
              isPortfolioArrowVisible.value = true
            }, 1000)
            // Trigger portfolio socials animation
            setTimeout(() => {
              isPortfolioSocialsVisible.value = true
            }, 1200)
          }
        }
      })
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  if (portfolioSection.value) {
    observer.observe(portfolioSection.value)
  }

  return observer
}

onMounted(() => {
  // Setup intersection observer after DOM is ready
  nextTick(() => {
    setupIntersectionObserver()
  })
  
  // Add keyboard event listener
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  // Cleanup
  document.removeEventListener('keydown', handleKeydown)
  // Ensure body scroll is restored
  document.body.style.overflow = 'auto'
})
</script>

<style scoped>
/* Black Block Section */
.black-block-section {
  background: #ffffff;
  padding: 0;
  margin: 0;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 50;
}

.black-block-section.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.black-block {
  width: 100%;
  height: 680px; /* Increased height for better visual impact */
  background: radial-gradient(circle, #cdf2f6 0%, #768c9e 100%);
  border-radius: 24px;
  margin: 0 auto;
  max-width: 1400px; /* Increased width for better visual impact */
  transform: translateY(-200px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
  z-index: 100;
}

.black-block.transitioning {
  transition: background 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Desktop centering - only apply on larger screens */
@media (min-width: 1024px) {
  .black-block-section {
    position: relative;
    left: 50%;
    margin-left: -50vw;
    width: 100vw;
  }
  
  .black-block {
    left: 50%;
    transform: translateX(-50%) translateY(-200px);
  }
}

.portfolio-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  z-index: 3;
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.9);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s ease-out;
}

.portfolio-image.animate-in {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

.portfolio-image.transitioning {
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
}

.portfolio-title {
  font-size: 9rem;
  font-weight: 900;
  color: #cdf2f6;
  text-align: center;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 0.1em;
  transform: scaleY(2);
  line-height: 0.7;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scaleY(2);
  z-index: 1;
  opacity: 0;
  transform: translate(-50%, -50%) scaleY(2) scale(0.8);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s ease-out;
}

.portfolio-title.animate-in {
  opacity: 1;
  transform: translate(-50%, -50%) scaleY(2) scale(1);
}

.portfolio-title.transitioning {
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
}

.portfolio-title-stroke {
  font-size: 9rem;
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 2px #cdf2f6;
  text-align: center;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 0.1em;
  transform: translate(-50%, -50%) scaleY(2);
  line-height: 0.7;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 4;
  opacity: 0;
  transform: translate(-50%, -50%) scaleY(2) scale(0.8);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s ease-out;
}

.portfolio-title-stroke.animate-in {
  opacity: 1;
  transform: translate(-50%, -50%) scaleY(2) scale(1);
}

.portfolio-title-stroke.transitioning {
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
}

.portfolio-arrow {
  position: absolute;
  top: 40px;
  right: 40px;
  z-index: 5;
  opacity: 0.8;
  transition: all 0.3s ease, transform 0.1s ease-out;
  cursor: pointer;
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.portfolio-arrow.animate-in {
  opacity: 0.8;
  transform: translateX(0);
}

.portfolio-arrow:hover {
  opacity: 1;
  transform: translateX(5px);
}

.futuristic-beauty {
  position: absolute;
  top: 40px;
  left: 40px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  gap: 4px;
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s ease-out;
}

.futuristic-beauty.animate-in {
  opacity: 1;
  transform: translateX(0);
}

.futuristic-beauty.transitioning {
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
}

.futuristic-beauty-line {
  font-size: 1.2rem;
  font-weight: 700;
  color: #cdf2f6;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  line-height: 1;
}

.portfolio-socials {
  position: absolute;
  bottom: 40px;
  right: 40px;
  z-index: 5;
  display: flex;
  gap: 16px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s ease-out;
}

.portfolio-socials.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.social-link:hover {
  transform: translateY(-2px);
}

/* Responsive Design for Black Block */
@media (max-width: 1200px) {
  .black-block {
    max-width: 100%;
    height: 510px;
  }
  
  .portfolio-title {
    font-size: 6.5rem;
  }
  
  .portfolio-title-stroke {
    font-size: 6.5rem;
  }
  
  .portfolio-arrow {
    top: 30px;
    right: 30px;
  }
  
  .portfolio-arrow svg {
    width: 100px;
    height: 18px;
  }
  
  .futuristic-beauty {
    top: 30px;
    left: 30px;
  }
  
  .portfolio-socials {
    bottom: 30px;
    right: 30px;
    gap: 12px;
  }
  
  .social-link {
    width: 36px;
    height: 36px;
  }
  
  .futuristic-beauty-line {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .black-block {
    height: 500px;
    transform: translateY(-160px);
  }
  
  .portfolio-image {
    top: 60%;
  }
  
  .portfolio-title {
    font-size: 3.5rem;
    top: 80%;
  }
  
  .portfolio-title-stroke {
    font-size: 3.5rem;
    -webkit-text-stroke: 1px #cdf2f6;
    top: 80%;
  }
  
  .portfolio-arrow {
    top: 20px;
    right: 20px;
  }
  
  .portfolio-arrow svg {
    width: 80px;
    height: 15px;
  }
  
  .futuristic-beauty {
    top: 20px;
    left: 20px;
  }
  
  .portfolio-socials {
    bottom: 20px;
    right: 20px;
    gap: 10px;
  }
  
  .social-link {
    width: 28px;
    height: 28px;
  }
  
  .social-link svg {
    width: 20px;
    height: 20px;
  }
  
  .futuristic-beauty-line {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .black-block {
    height: 350px;
    transform: translateY(-160px);
  }
  
  .portfolio-image {
    top: 60%;
  }
  
  .portfolio-title {
    font-size: 2.2rem;
    top: 80%;
  }
  
  .portfolio-title-stroke {
    font-size: 2.2rem;
    -webkit-text-stroke: 1px #cdf2f6;
    top: 80%;
  }
  
  .portfolio-arrow {
    top: 15px;
    right: 15px;
  }
  
  .portfolio-arrow svg {
    width: 60px;
    height: 12px;
  }
  
  .futuristic-beauty {
    top: 15px;
    left: 15px;
  }
  
  .portfolio-socials {
    bottom: 15px;
    right: 15px;
    gap: 8px;
  }
  
  .social-link {
    width: 24px;
    height: 24px;
  }
  
  .social-link svg {
    width: 18px;
    height: 18px;
  }
  
  .futuristic-beauty-line {
    font-size: 0.8rem;
  }
}

/* Fullscreen Styles */
.black-block-section.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}

/* Remove Container padding when in fullscreen */
.black-block-section.fullscreen :deep(.container) {
  padding-left: 0 !important;
  padding-right: 0 !important;
  margin: 0 !important;
  max-width: none !important;
}

.black-block-section.fullscreen .black-block {
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  border-radius: 0;
  transform: translateY(0);
  margin: 0;
  left: 0;
}

/* Desktop fullscreen centering */
@media (min-width: 1024px) {
  .black-block-section.fullscreen .black-block {
    transform: translateX(-50%) translateY(0);
    left: 50%;
  }
}

.black-block-section.fullscreen .portfolio-title {
  font-size: 12rem;
}

.black-block-section.fullscreen .portfolio-title-stroke {
  font-size: 12rem;
  -webkit-text-stroke: 3px #cdf2f6;
}

.black-block-section.fullscreen .futuristic-beauty-line {
  font-size: 2rem;
}

.black-block-section.fullscreen .portfolio-arrow {
  top: 60px;
  right: 60px;
}

.black-block-section.fullscreen .portfolio-arrow svg {
  width: 140px;
  height: 24px;
}

.black-block-section.fullscreen .portfolio-socials {
  bottom: 60px;
  right: 60px;
  gap: 20px;
}

.black-block-section.fullscreen .social-link {
  width: 50px;
  height: 50px;
}

.black-block-section.fullscreen .social-link svg {
  width: 32px;
  height: 32px;
}

/* Close Button */
.close-button {
  position: absolute;
  top: 30px;
  right: 30px;
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  opacity: 0.7;
}

.close-button:hover {
  opacity: 1;
  transform: scale(1.1);
}

.close-button:active {
  transform: scale(0.9);
}

/* Fullscreen Responsive Design */
@media (max-width: 768px) {
  .black-block-section.fullscreen .portfolio-title {
    font-size: 6rem;
  }
  
  .black-block-section.fullscreen .portfolio-title-stroke {
    font-size: 6rem;
    -webkit-text-stroke: 2px #cdf2f6;
  }
  
  .black-block-section.fullscreen .futuristic-beauty-line {
    font-size: 1.2rem;
  }
  
  .black-block-section.fullscreen .portfolio-arrow {
    top: 30px;
    right: 30px;
  }
  
  .black-block-section.fullscreen .portfolio-arrow svg {
    width: 100px;
    height: 18px;
  }
  
  .black-block-section.fullscreen .portfolio-socials {
    bottom: 30px;
    right: 30px;
    gap: 16px;
  }
  
  .black-block-section.fullscreen .social-link {
    width: 40px;
    height: 40px;
  }
  
  .black-block-section.fullscreen .social-link svg {
    width: 24px;
    height: 24px;
  }
  
  .close-button {
    top: 20px;
    right: 20px;
    width: 36px;
    height: 36px;
  }
}

@media (max-width: 480px) {
  .black-block-section.fullscreen .portfolio-title {
    font-size: 4rem;
  }
  
  .black-block-section.fullscreen .portfolio-title-stroke {
    font-size: 4rem;
    -webkit-text-stroke: 1px #cdf2f6;
  }
  
  .black-block-section.fullscreen .futuristic-beauty-line {
    font-size: 1rem;
  }
  
  .black-block-section.fullscreen .portfolio-arrow {
    top: 20px;
    right: 20px;
  }
  
  .black-block-section.fullscreen .portfolio-arrow svg {
    width: 80px;
    height: 15px;
  }
  
  .black-block-section.fullscreen .portfolio-socials {
    bottom: 20px;
    right: 20px;
    gap: 12px;
  }
  
  .black-block-section.fullscreen .social-link {
    width: 36px;
    height: 36px;
  }
  
  .black-block-section.fullscreen .social-link svg {
    width: 20px;
    height: 20px;
  }
  
  .close-button {
    top: 16px;
    right: 16px;
    width: 32px;
    height: 32px;
  }
  
  .close-button svg {
    width: 18px;
    height: 18px;
  }
}
</style>
