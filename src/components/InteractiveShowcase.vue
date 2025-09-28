<template>
  <div 
    class="interactive-showcase"
    :style="{
      width: width,
      height: height,
      aspectRatio: aspectRatio,
      background: backgroundGradient
    }"
  >
    <div v-if="format === 1" class="format-1-welcome">
      Welcome page
    </div>
    <div v-if="format === 1" class="format-1-date-arrow">
      <span class="arrow">⟶</span>
    </div>
    <div v-if="format === 1" class="format-1-socials">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="#333"/>
      </svg>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#333"/>
      </svg>
    </div>
    <div class="showcase-content" :class="`format-${format}`">
      <!-- Format 1: Centered text with Montserrat bold -->
      <div v-if="format === 1" class="format-1-content">
        <div v-if="pic" class="format-1-image">
          <img :src="pic" :alt="title || 'Showcase image'" />
        </div>
        <div v-if="title" class="format-1-text">
          {{ title }}
        </div>
        <div v-if="title" class="format-1-text-stroke">
          {{ title }}
        </div>
      </div>

      <!-- Rapid-1 format: Clean model showcase layout -->
      <div v-else-if="format === 'rapid-1'" class="rapid-1-content">
        <!-- Top bar with Welcome and Burger menu -->
        <div class="rapid-1-topbar">
          <div class="rapid-1-welcome">Welcome</div>
          <div class="rapid-1-burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <!-- Header with model name -->
        <div class="rapid-1-header">
          <div class="rapid-1-intro-text">My name is</div>
          <h1 class="rapid-1-model-name">{{ modelName || title || 'SUH KAPAPI' }}</h1>
        </div>
        
        <!-- Location -->
        <div class="rapid-1-location">
          {{ location || 'DALLAS, TX' }}
        </div>
        
        <!-- Model specifications -->
        <div class="rapid-1-specs">
          <span v-if="modelSpecs?.height" class="spec-item">Height:<span class="spec-value">{{ modelSpecs.height }}</span></span>
          <span v-if="modelSpecs?.weight" class="spec-separator">|</span>
          <span v-if="modelSpecs?.weight" class="spec-item">Weight:<span class="spec-value">{{ modelSpecs.weight }}</span></span>
          <span v-if="modelSpecs?.suit" class="spec-separator">|</span>
          <span v-if="modelSpecs?.suit" class="spec-item">Suit:<span class="spec-value">{{ modelSpecs.suit }}</span></span>
          <span v-if="modelSpecs?.waist" class="spec-separator">|</span>
          <span v-if="modelSpecs?.waist" class="spec-item">Waist:<span class="spec-value">{{ modelSpecs.waist }}</span></span>
          <span v-if="modelSpecs?.inseam" class="spec-separator">|</span>
          <span v-if="modelSpecs?.inseam" class="spec-item">Inseam:<span class="spec-value">{{ modelSpecs.inseam }}</span></span>
          <span v-if="modelSpecs?.eyes" class="spec-separator">|</span>
          <span v-if="modelSpecs?.eyes" class="spec-item">Eyes:<span class="spec-value">{{ modelSpecs.eyes }}</span></span>
          <span v-if="modelSpecs?.hair" class="spec-separator">|</span>
          <span v-if="modelSpecs?.hair" class="spec-item">Hair:<span class="spec-value">{{ modelSpecs.hair }}</span></span>
        </div>
        
        <!-- Gallery block -->
        <div class="rapid-1-gallery">
          <div class="gallery-images">
            <div class="gallery-main-image">
              <img src="/models/model shoot 1.jpg" alt="Model shoot 1" />
            </div>
            <div class="gallery-side-images">
              <div class="gallery-small-image">
                <img src="/models/model shoot 2.jpg" alt="Model shoot 2" />
              </div>
              <div class="gallery-small-image">
                <img src="/models/model shoot 3.jpg" alt="Model shoot 3" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Default format: Original layout -->
      <template v-else>
        <div v-if="pic" class="showcase-image">
          <img :src="pic" :alt="title || 'Showcase image'" />
        </div>
        <div v-if="title" class="showcase-title">
          {{ title }}
        </div>
        <div v-if="additionalItems && additionalItems.length" class="showcase-additional">
          <div 
            v-for="(item, index) in additionalItems" 
            :key="index" 
            class="additional-item"
          >
            {{ item }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  width?: string
  height?: string
  aspectRatio?: string
  pic?: string
  title?: string
  additionalItems?: string[]
  innerColor?: string
  outerColor?: string
  format?: number | string
  // Rapid-1 format specific props
  modelName?: string
  location?: string
  modelSpecs?: {
    height?: string
    weight?: string
    suit?: string
    waist?: string
    inseam?: string
    eyes?: string
    hair?: string
    shoe?: string
  }
  navigationItems?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: 'auto',
  aspectRatio: '16 / 9',
  pic: undefined,
  title: undefined,
  additionalItems: () => [],
  innerColor: 'rgba(255, 255, 255, 0.1)',
  outerColor: 'rgba(255, 255, 255, 0.05)',
  format: 0,
  modelName: undefined,
  location: undefined,
  modelSpecs: () => ({}),
  navigationItems: () => ['Home', 'Work', 'Contact']
})

const backgroundGradient = computed(() => {
  return `radial-gradient(circle, ${props.innerColor} 0%, ${props.outerColor} 100%)`
})
</script>

<style scoped>
.interactive-showcase {
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
  overflow: hidden;
  position: relative;
  max-width: 100%;
}

@media (max-width: 768px) {
  .interactive-showcase {
    margin: 1.5rem auto;
    border-radius: 8px;
  }
}

@media (max-width: 480px) {
  .interactive-showcase {
    margin: 1rem auto;
    border-radius: 6px;
  }
}

.showcase-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  text-align: center;
  width: 100%;
  height: 100%;
}

.showcase-content.format-1 {
  padding: 0;
  gap: 0;
  position: relative;
}

/* Format 1: Centered content with image and text */
.format-1-content {
  position: relative !important;
  height: 100% !important;
  width: 100% !important;
}

.showcase-image img {
  max-width: 100%;
  max-height: 30vh;
  border-radius: 1%;
  object-fit: cover;
}

.showcase-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin: 0;
}

.showcase-additional {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.additional-item {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.format-1-welcome {
  position: absolute !important;
  top: 1vh !important;
  left: 2vw !important;
  font-family: 'Montserrat', sans-serif !important;
  font-weight: 400 !important;
  font-size: clamp(0.7rem, 1.5vw, 1.2rem) !important;
  color: #333 !important;
  z-index: 10 !important;
  padding: 2vh 2vw !important;
}

.format-1-date-arrow {
  position: absolute !important;
  top: -1vh !important;
  right: 2vw !important;
  font-family: 'Montserrat', sans-serif !important;
  font-weight: 400 !important;
  font-size: clamp(0.7rem, 1.5vw, 1.2rem) !important;
  color: #333 !important;
  z-index: 10 !important;
  padding: 2vh 2vw !important;
  display: flex !important;
  align-items: center !important;
  gap: 1vw !important;
}

.format-1-date-arrow .arrow {
  font-size: clamp(1rem, 2.5vw, 2rem) !important;
  font-weight: 50 !important;
  letter-spacing: -0.1em !important;
  transform: scaleX(2) scaleY(0.5) !important;
  display: inline-block !important;
}

.format-1-socials {
  position: absolute !important;
  bottom: 2vh !important;
  right: 2vw !important;
  display: flex !important;
  gap: 1.5vw !important;
  z-index: 10 !important;
}

.format-1-socials svg {
  width: clamp(14px, 2vw, 24px) !important;
  height: clamp(14px, 2vw, 24px) !important;
  cursor: pointer !important;
  transition: opacity 0.3s ease !important;
}

.format-1-socials svg:hover {
  opacity: 0.7 !important;
}

.format-1-image {
  position: absolute !important;
  top: 40% !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  z-index: 2 !important;
  animation: fadeInFromBottom 0.8s ease-out 0.3s both;
}

.format-1-image img {
  width: min(25vh, 25vw) !important;
  height: min(25vh, 25vw) !important;
  border-radius: 12px !important;
  object-fit: cover !important;
  overflow: visible !important;
}

.format-1-text {
  font-family: 'Montserrat', sans-serif !important;
  font-weight: 700 !important;
  font-size: clamp(2rem, 11vw, 11vh) !important;
  color: #333 !important;
  text-align: center !important;
  margin: 0 !important;
  letter-spacing: 0.1em !important;
  line-height: 1 !important;
  position: absolute !important;
  top: 43% !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  z-index: 1 !important;
  animation: fadeInFromTop 0.8s ease-out 0.1s both;
}

.format-1-text-stroke {
  font-family: 'Montserrat', sans-serif !important;
  font-weight: 900 !important;
  font-size: clamp(2rem, 11vw, 11vh) !important;
  color: transparent !important;
  text-align: center !important;
  margin: 0 !important;
  letter-spacing: 0.1em !important;
  line-height: 1 !important;
  position: absolute !important;
  top: 43% !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  z-index: 3 !important;
  -webkit-text-stroke: 2px #333 !important;
  animation: fadeInFromTop 0.8s ease-out 0.2s both;
}

/* Rapid-1 format styles */
.rapid-1-content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 4cqh 4cqw;
  background: transparent;
  color: #333;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  min-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  container-type: size;
}

/* Custom minimalistic scrollbar for rapid-1 */
.rapid-1-content::-webkit-scrollbar {
  width: 3px;
}

.rapid-1-content::-webkit-scrollbar-track {
  background: transparent;
}

.rapid-1-content::-webkit-scrollbar-thumb {
  background: rgba(51, 51, 51, 0.2);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.rapid-1-content::-webkit-scrollbar-thumb:hover {
  background: rgba(51, 51, 51, 0.4);
  width: 4px;
}

.rapid-1-content::-webkit-scrollbar-corner {
  background: transparent;
}

.rapid-1-topbar {
  position: absolute;
  top: 3cqh;
  left: 4cqw;
  right: 4cqw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  animation: fadeInDown 0.8s ease-out;
}

.rapid-1-welcome {
  font-size: 2cqw;
  font-weight: 400;
  color: #333;
  letter-spacing: 0.05em;
}

.rapid-1-burger {
  display: flex;
  flex-direction: column;
  gap: 0.8cqh;
  cursor: pointer;
  padding: 1.6cqh;
  transition: all 0.3s ease;
}

.rapid-1-burger span {
  width: 4.8cqw;
  height: 0.4cqh;
  background: #333;
  transition: all 0.3s ease;
  border-radius: 0.2cqh;
}

.rapid-1-burger:hover span {
  background: #555;
}

.rapid-1-burger:hover {
  transform: scale(1.1);
}

.rapid-1-header {
  margin-bottom: 2cqh;
  margin-top: 3cqh;
  text-align: center;
}

.rapid-1-intro-text {
  font-size: 1.8cqw;
  font-weight: 400;
  color: #666;
  margin-bottom: 0.1cqh;
  letter-spacing: 0.05em;
  animation: fadeInUp 0.8s ease-out 0.1s both;
}

.rapid-1-model-name {
  font-size: 8cqw;
  font-weight: 300;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin: 0;
  text-align: center;
  color: #333;
  position: relative;
  background: linear-gradient(135deg, #333 0%, #666 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: fadeInUp 0.8s ease-out;
  line-height: 0.9;
}

.rapid-1-location {
  font-size: 3.2cqw;
  font-weight: 300;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 2cqh;
  text-align: center;
  color: #333;
  position: relative;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.rapid-1-location::after {
  content: '';
  position: absolute;
  bottom: -1cqh;
  left: 50%;
  transform: translateX(-50%);
  width: 12cqw;
  height: 0.4cqh;
  background: linear-gradient(90deg, transparent, #333, transparent);
  animation: expandLine 1s ease-out 0.8s both;
}

.rapid-1-specs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1cqw;
  max-width: 90cqw;
  line-height: 1.6;
  font-size: 1.9cqw;
  color: #333;
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.spec-item {
  white-space: nowrap;
  font-weight: 400;
  transition: color 0.3s ease;
}

.spec-item:hover {
  color: #555;
}

.spec-value {
  font-weight: 700;
}

.spec-separator {
  color: #666;
  margin: 0 0.6cqw;
  opacity: 0.6;
}

.rapid-1-gallery {
  position: absolute;
  bottom: -25cqh;
  left: 0;
  right: 0;
  height: 80cqh;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #333;
  border-radius: 1cqh;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeInUp 0.8s ease-out 0.8s both;
}

.gallery-images {
  display: flex;
  width: 100%;
  height: 100%;
  gap: 2cqw;
  padding: 2cqh 3cqw;
}

.gallery-main-image {
  flex: 2;
  height: 100%;
  overflow: hidden;
  border-radius: 1cqh;
}

.gallery-main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-main-image:hover img {
  transform: scale(1.05);
}

.gallery-side-images {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2cqh;
  height: 100%;
}

.gallery-small-image {
  flex: 1;
  overflow: hidden;
  border-radius: 1cqh;
}

.gallery-small-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-small-image:hover img {
  transform: scale(1.05);
}

/* Container queries handle all responsive behavior automatically */

/* Keyframe animations for rapid-1 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes expandLine {
  from {
    width: 0;
  }
  to {
    width: 12cqw;
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Format-1 animations */
@keyframes fadeInFromTop {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

@keyframes fadeInFromBottom {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

/* Step 2 specific enhancements */
.step-two-layout .format-1-image img {
  width: min(35vh, 35vw) !important;
  height: min(35vh, 35vw) !important;
}

.step-two-layout .format-1-text {
  font-size: clamp(3.5rem, 14vw, 14vh) !important;
}

.step-two-layout .format-1-text-stroke {
  font-size: clamp(3.5rem, 14vw, 14vh) !important;
}

/* Responsive adjustments for non-format-1 elements */
@media (max-width: 768px) {
  .showcase-title {
    font-size: 1.3rem;
  }
  
  .additional-item {
    font-size: 0.9rem;
  }
  
  .showcase-content {
    padding: 0.5rem;
  }
}

@media (max-width: 480px) {
  .showcase-title {
    font-size: 1.1rem;
  }
  
  .additional-item {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
  
  .showcase-content {
    padding: 0;
    gap: 0.8rem;
  }
}
</style>
