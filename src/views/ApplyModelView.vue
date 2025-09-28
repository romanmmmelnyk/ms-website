<template>
  <div class="apply-model-page">
    <Container>
      <div class="page-content">
        <!-- Step 1: Initial Landing -->
        <div v-if="currentStep === 1" class="step-content">
          <h1 class="title-animation">Model website application</h1>
          <img 
            src="/designs/DESIGNS-1.png" 
            alt="Design Portfolio" 
            class="showcase-animation step1-image step1-image-desktop"
          />
          <img 
            src="/designs/DESIGN-1-Mobile.png" 
            alt="Design Portfolio" 
            class="showcase-animation step1-image step1-image-mobile"
          />
          
          <!-- Terms Agreement Section -->
          <div class="terms-agreement terms-animation">
            <label class="terms-checkbox-label">
              <input 
                type="checkbox" 
                v-model="agreedToTerms" 
                class="terms-checkbox"
              />
              <span class="checkbox-custom"></span>
              <span class="terms-text">
                I agree to the 
                <router-link to="/terms-of-service" class="terms-link" target="_blank">
                  Terms of Service
                </router-link>
              </span>
            </label>
          </div>
          
          <button 
            class="get-started-btn button-animation" 
            :class="{ 'disabled': !agreedToTerms }"
            :disabled="!agreedToTerms"
            @click="nextStep"
          >
            Get Started
          </button>
        </div>

        <!-- Step 2: Two Screen Layout -->
        <div v-if="currentStep === 2" class="step-two-layout">
          <!-- Left Side: Interactive Showcase (4/6) -->
          <div class="interactive-showcase-section">
            <div class="showcase-container">
              <!-- Custom Content for Custom Option -->
              <div v-if="selectedOption === 'custom'" class="custom-content">
                <h3 class="custom-title">Custom Website Development</h3>
                <p class="custom-text">We design and develop fully custom websites tailored precisely to your requirements. Every element is crafted according to your specifications, without templates or limits - the only boundary is your imagination.</p>
                
                <!-- Chat Animation Section -->
                <div class="chat-section">
                  <div class="chat-container">
                    <div class="chat-message client-message" :class="{ 'animate-in': showClientMessage }">
                      <div class="message-avatar client-avatar">C</div>
                      <div class="message-bubble client-bubble">
                        <p>"I need a wedding bridal model website based in London. Something elegant and sophisticated that showcases our models perfectly."</p>
                      </div>
                    </div>
                    
                    <div class="chat-message response-message" :class="{ 'animate-in': showResponseMessage }">
                      <div class="message-bubble response-bubble">
                        <p>We've got you</p>
                      </div>
                      <div class="message-avatar response-avatar">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Generating Animation Section -->
                <div class="generating-section" :class="{ 'animate-in': showGenerating }">
                  <div class="generating-container">
                    <div class="generating-spinner">
                      <div class="spinner-ring"></div>
                      <div class="spinner-ring"></div>
                      <div class="spinner-ring"></div>
                    </div>
                    <p class="generating-text">Generating your website...</p>
                    <div class="generating-dots">
                      <span class="dot"></span>
                      <span class="dot"></span>
                      <span class="dot"></span>
                    </div>
                  </div>
                </div>
                
                <!-- Website Preview Section -->
                <div class="website-preview" :class="{ 'animate-in': showWebsitePreview }">
                  <img src="/bride-website.png" alt="Wedding Model Website Preview" class="website-preview-image" />
                </div>
              </div>
              
              <!-- Interactive Showcase for other options -->
              <InteractiveShowcase 
                v-else
                width="100%" 
                innerColor="#E8E7E7"
                outerColor="#E8E7E7"
                :format="showcaseFormat"
                title="PORTFOLIO"
                pic="/models/model male 1.png"
                modelName="John Doe"
                location="New York"
                :modelSpecs="{
                  height: '6ft 2in',
                  weight: '180lbs',
                  suit: '40R',
                  waist: '32in',
                  inseam: '34in',
                  eyes: 'Blue',
                  hair: 'Brown',
                  shoe: '11'
                }"
                class="showcase-animation showcase-transition"
              />
            </div>
          </div>

          <!-- Right Side: Options (2/6) -->
          <div class="options-section">
            <div class="options-container options-animation">
              <h3 class="structure-title">STRUCTURE. <span class="subtitle">Choose your best</span></h3>
              
              <button 
                class="option-card"
                :class="{ selected: selectedOption === 'rapid-portfolio' }"
                @click="handleOptionSelect('rapid-portfolio')"
              >
                  <div class="card-content">
                    <h4>Rapid Portfolio</h4>
                    <div class="card-price">
                      <span class="price-text">From 249£<br>or 25£/mo.</span>
                    </div>
                  </div>
                <div v-if="selectedOption === 'rapid-portfolio'" class="card-description">
                  <p>Quick and efficient portfolio setup with pre-designed templates. Perfect for getting your work online fast with minimal customization needed.</p>
                </div>
              </button>
              
              <button 
                class="option-card"
                :class="{ selected: selectedOption === 'licensed-layouts' }"
                @click="handleOptionSelect('licensed-layouts')"
              >
                  <div class="card-content">
                    <h4>Licensed Layouts</h4>
                    <div class="card-price">
                      <span class="price-text">From 599£<br>or 45£/mo.</span>
                    </div>
                  </div>
                <div v-if="selectedOption === 'licensed-layouts'" class="card-description">
                  <p>Build your website from professionally validated Moth Solutions components and unlock the full potential of your product.</p>
                </div>
              </button>
              
              <button 
                class="option-card"
                :class="{ selected: selectedOption === 'custom' }"
                @click="handleOptionSelect('custom')"
              >
                <div class="card-content">
                  <h4>Custom</h4>
                  <div class="card-price">
                    <span class="price-text">Price on request<br>(POR)</span>
                  </div>
                </div>
                <div v-if="selectedOption === 'custom'" class="card-description">
                  <p>Fully tailored solution designed specifically for your unique requirements. Complete creative control with <span class="highlight">unlimited revisions</span> and personalized support.</p>
                </div>
              </button>
              
              <button class="next-btn" @click="handleNextStep">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Container from '@/components/Container.vue'
import InteractiveShowcase from '@/components/InteractiveShowcase.vue'

// Simple step system
const currentStep = ref(1)
const agreedToTerms = ref(false)
const selectedOption = ref('licensed-layouts')

// Chat animation states
const showClientMessage = ref(false)
const showResponseMessage = ref(false)
const showGenerating = ref(false)
const showWebsitePreview = ref(false)

// Computed format based on selected option
const showcaseFormat = computed(() => {
  switch (selectedOption.value) {
    case 'rapid-portfolio':
      return 'rapid-1'
    case 'licensed-layouts':
      return 0
    case 'custom':
      return 'placeholder'
    default:
      return 1
  }
})

// Store original overflow values
let originalBodyOverflow = ''
let originalHtmlOverflow = ''

// Prevent scrolling when component mounts
onMounted(() => {
  originalBodyOverflow = document.body.style.overflow
  originalHtmlOverflow = document.documentElement.style.overflow
  
  document.body.style.overflow = 'hidden'
  document.documentElement.style.overflow = 'hidden'
})

// Restore scrolling when component unmounts
onUnmounted(() => {
  document.body.style.overflow = originalBodyOverflow
  document.documentElement.style.overflow = originalHtmlOverflow
})

const nextStep = () => {
  if (agreedToTerms.value) {
    currentStep.value++
  }
}

const handleOptionSelect = (option: string) => {
  selectedOption.value = option
  console.log('Selected option:', option)
  
  // Trigger chat animations for custom option
  if (option === 'custom') {
    // Reset animations first
    showClientMessage.value = false
    showResponseMessage.value = false
    showGenerating.value = false
    showWebsitePreview.value = false
    
    // Start client message animation after a short delay
    setTimeout(() => {
      showClientMessage.value = true
    }, 500)
    
    // Start response message animation after client message
    setTimeout(() => {
      showResponseMessage.value = true
    }, 2000)
    
    // Show generating animation after response
    setTimeout(() => {
      showGenerating.value = true
    }, 3500)
    
    // Show website preview after generating completes
    setTimeout(() => {
      showGenerating.value = false
      showWebsitePreview.value = true
    }, 6000)
  }
}

const handleNextStep = () => {
  currentStep.value++
}
</script>


<style scoped>
.apply-model-page {
  height: 100vh;
  background: var(--gradient-secondary);
  color: var(--color-text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow: hidden;
}

.apply-model-page:has(.step-two-layout) {
  padding: 0;
}

.page-content {
  text-align: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.step-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  max-height: 100vh;
  overflow: hidden;
  justify-content: center;
  padding-top: 4rem;
}

.step1-image {
  max-width: 600px;
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin: 1rem 0;
}

.step1-image-mobile {
  display: none;
}

.step1-image-desktop {
  display: block;
}

/* Mobile responsive images and text sizing */
@media (max-width: 768px) {
  .step1-image-desktop {
    display: none;
  }
  
  .step1-image-mobile {
    display: block;
    max-width: 220px;
    margin: 0.5rem 0;
  }
  
  /* Reduce step 1 text sizes and gaps on mobile */
  .step-content h1 {
    font-size: 1.6rem;
    margin-bottom: 0.3rem;
  }
  
  .step-content .terms-agreement {
    margin: 0.8rem 0;
  }
  
  .step-content .terms-text {
    font-size: 0.9rem;
  }
  
  .step-content .get-started-btn {
    margin-top: 0.8rem;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
  
  .step-content {
    padding-top: 2rem;
    gap: 0.5rem;
  }
}

/* Step 2: Two Screen Layout */
.step-two-layout {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 0;
  margin: 0;
}

/* Left Side: Interactive Showcase (4/6) */
.interactive-showcase-section {
  flex: 4;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 20px;
  padding-bottom: 20px;
  overflow: hidden;
}

.showcase-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.showcase-container .interactive-showcase {
  transform: translateY(50px);
}

/* Desktop only - reset showcase position */
@media (min-width: 769px) {
  .showcase-container {
    align-items: center;
  }
  
  .showcase-container .interactive-showcase {
    transform: translateY(0);
  }
}

.showcase-transition {
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.showcase-transition * {
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Right Side: Options (2/6) */
.options-section {
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow: hidden;
}


h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: white;
}

h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Entrance Animations */
.title-animation {
  animation: titleEntrance 1.2s ease-out;
  opacity: 0;
  transform: translateY(30px);
  animation-fill-mode: forwards;
}

@keyframes titleEntrance {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.showcase-animation {
  animation: showcaseEntrance 1.5s ease-out 0.3s;
  opacity: 0;
  transform: translateY(40px);
  animation-fill-mode: forwards;
}

@keyframes showcaseEntrance {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.terms-animation {
  animation: termsEntrance 1s ease-out 0.8s;
  opacity: 0;
  transform: translateY(20px);
  animation-fill-mode: forwards;
}

@keyframes termsEntrance {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.button-animation {
  animation: buttonEntrance 0.8s ease-out 1.2s;
  opacity: 0;
  transform: translateY(15px);
  animation-fill-mode: forwards;
}

@keyframes buttonEntrance {
  0% {
    opacity: 0;
    transform: translateY(15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.subtitle-animation {
  animation: subtitleEntrance 1s ease-out 0.4s;
  opacity: 0;
  transform: translateY(20px);
  animation-fill-mode: forwards;
}

@keyframes subtitleEntrance {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.options-animation {
  animation: optionsEntrance 1.2s ease-out 0.6s;
  opacity: 0;
  transform: translateY(30px);
  animation-fill-mode: forwards;
}

@keyframes optionsEntrance {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

p {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 3rem;
}

.get-started-btn {
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: not-allowed;
  margin-top: 1rem;
  transition: all 0.4s ease;
}

.get-started-btn:not(.disabled) {
  background: rgba(255, 255, 255, 0.1);
  color: #8B5CF6;
  border: 1px solid #8B5CF6;
  font-weight: 600;
  cursor: pointer;
}

.get-started-btn:not(.disabled):hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: #A78BFA;
  transform: translateY(-1px);
}

.get-started-btn.disabled {
  opacity: 0.8;
}

/* Terms Agreement Styles */
.terms-agreement {
  margin: 1rem 0;
  display: flex;
  justify-content: center;
}

.terms-checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 8px;
}

.terms-checkbox-label:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-1px);
}

.terms-checkbox {
  display: none;
}

.checkbox-custom {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 4px;
  background: transparent;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
  transform: scale(1);
}

.checkbox-custom:hover {
  border-color: rgba(255, 255, 255, 0.8);
  transform: scale(1.1);
}

.terms-checkbox:checked + .checkbox-custom {
  background: #8B5CF6;
  border-color: transparent;
  transform: scale(1.1);
  animation: checkboxPulse 0.6s ease-out;
}

.terms-checkbox:checked + .checkbox-custom::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  color: white;
  font-size: 14px;
  font-weight: bold;
  animation: checkmarkAppear 0.4s ease-out 0.2s forwards;
}

@keyframes checkboxPulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.4);
  }
  50% {
    transform: scale(1.2);
    box-shadow: 0 0 0 8px rgba(139, 92, 246, 0.1);
  }
  100% {
    transform: scale(1.1);
    box-shadow: 0 0 0 0 rgba(139, 92, 246, 0);
  }
}

@keyframes checkmarkAppear {
  0% {
    transform: translate(-50%, -50%) scale(0) rotate(-45deg);
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2) rotate(0deg);
    opacity: 0.8;
  }
  100% {
    transform: translate(-50%, -50%) scale(1) rotate(0deg);
    opacity: 1;
  }
}

.terms-text {
  line-height: 1.4;
  transition: all 0.3s ease;
}

.terms-checkbox:checked ~ .terms-text {
  color: rgba(255, 255, 255, 1);
  font-weight: 500;
  animation: textGlow 0.6s ease-out;
}

@keyframes textGlow {
  0% {
    text-shadow: 0 0 0 rgba(139, 92, 246, 0);
  }
  50% {
    text-shadow: 0 0 10px rgba(139, 92, 246, 0.3);
  }
  100% {
    text-shadow: 0 0 0 rgba(139, 92, 246, 0);
  }
}

.terms-link {
  color: #4A9EFF;
  text-decoration: underline;
  transition: all 0.3s ease;
  position: relative;
}

.terms-link:hover {
  color: #66B3FF;
  transform: translateY(-1px);
}

.terms-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #4A9EFF, #66B3FF);
  transition: width 0.3s ease;
}

.terms-link:hover::after {
  width: 100%;
}

/* Step 2 Options Styling */
.options-section .options-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.structure-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
  text-align: left;
  line-height: 1.2;
}

.structure-title .subtitle {
  font-weight: 400;
  font-size: 1.8rem;
}

/* Step 1 Options Container (original) */
.step-content .options-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 400px;
  margin: 0 auto;
}

.option-card {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0;
  text-align: left;
  cursor: pointer;
  color: white;
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  transform: translateY(0);
}

.option-card:hover {
  background: transparent;
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.option-card.selected {
  background: transparent;
  border: 2px solid #8B5CF6;
  transform: translateY(-1px);
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.15);
}

.option-card.selected:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(139, 92, 246, 0.2);
}

.card-content {
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-description {
  padding: 0 1.5rem 2rem 1.5rem;
  border-top: none;
  background: transparent;
  animation: slideDown 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  overflow: hidden;
}

@keyframes slideDown {
  0% {
    opacity: 0;
    max-height: 0;
    padding-top: 0;
    padding-bottom: 0;
    transform: translateY(-10px);
  }
  30% {
    opacity: 0.3;
    max-height: 60px;
    padding-top: 0;
    padding-bottom: 0.5rem;
    transform: translateY(-5px);
  }
  70% {
    opacity: 0.8;
    max-height: 160px;
    padding-top: 0;
    padding-bottom: 1.5rem;
    transform: translateY(-2px);
  }
  100% {
    opacity: 1;
    max-height: 200px;
    padding-top: 0;
    padding-bottom: 2rem;
    transform: translateY(0);
  }
}

.card-description p {
  margin: 1rem 0 0 0;
  font-size: 0.9rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.8);
}

.card-price {
  text-align: right;
}

.price-text {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.3;
}

.highlight {
  color: #8B5CF6;
  font-weight: 600;
}

.option-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

/* Compact icons for step 2 */
.options-section .option-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.option-card h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
}

.option-card h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  color: white;
}

.next-btn {
  background: #8B5CF6;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  width: 100%;
  margin-top: 1rem;
  transition: all 0.3s ease;
}

.next-btn:hover {
  background: #7C3AED;
  transform: translateY(-1px);
}

.option-card p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.4;
  margin: 0;
}

/* Compact text for step 2 */
.options-section .option-card p {
  font-size: 0.85rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .apply-model-page {
    padding: 1rem;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 15px;
  }
  
  h2 {
    font-size: 2rem;
  }
  
  .step-content .options-container {
    max-width: 100%;
  }
  
  /* Step 2 mobile layout */
  .step-two-layout {
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
  }
  
  .interactive-showcase-section {
    flex: none;
    height: 35vh;
    padding: 50px 10px 10px 10px;
    overflow: hidden;
  }
  
  .options-section {
    flex: none;
    height: 65vh;
    padding: 10px;
    overflow-y: auto;
  }
  
  
  .options-section .options-container {
    max-width: 100%;
  }
  
  .structure-title {
    font-size: 1.4rem;
    margin-top: 7rem;
    margin-bottom: 1rem;
  }
  
  .next-btn {
    margin-bottom: 40px;
  }
}

@media (max-width: 480px) {
  .apply-model-page {
    padding: 0.5rem;
  }
  
  h1 {
    font-size: 2rem;
    margin-bottom: 12px;
  }
  
  h2 {
    font-size: 1.8rem;
  }
  
  .option-card {
    padding: 0;
  }
  
  .option-icon {
    font-size: 2.5rem;
  }
}

@media (max-width: 320px) {
  h1 {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }
  
  h2 {
    font-size: 1.6rem;
  }
  
  .option-card {
    padding: 0;
  }
  
  .option-card h3 {
    font-size: 1.2rem;
  }
  
  .option-card p {
    font-size: 0.9rem;
  }
}

/* Custom Content Styling */
.custom-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  padding: 7rem 2rem 2rem 2rem;
  text-align: left;
  gap: 2rem;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
}

.custom-content::-webkit-scrollbar {
  width: 6px;
}

.custom-content::-webkit-scrollbar-track {
  background: transparent;
}

.custom-content::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}

.custom-content::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

.custom-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
  line-height: 1.2;
}

.custom-text {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin: 0;
  max-width: 500px;
}

/* Mobile responsive for custom content */
@media (max-width: 768px) {
  .custom-content {
    padding: 1rem;
    justify-content: flex-start;
    padding-top: 2rem;
  }
  
  .custom-title {
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
  }
  
  .custom-text {
    font-size: 1rem;
    line-height: 1.5;
  }
}

@media (max-width: 480px) {
  .custom-title {
    font-size: 1.2rem;
  }
  
  .custom-text {
    font-size: 0.9rem;
  }
}

/* Chat Animation Styling */
.chat-section {
  width: 100%;
}

.chat-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.chat-message {
  display: flex;
  align-items: flex-end;
  gap: 0.75rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.chat-message.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.client-message {
  align-self: flex-start;
}

.response-message {
  align-self: flex-end;
  flex-direction: row-reverse;
}

.message-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
  flex-shrink: 0;
}

.client-avatar {
  background: rgba(74, 158, 255, 0.2);
  color: #4A9EFF;
  border: 1px solid rgba(74, 158, 255, 0.3);
}

.response-avatar {
  background: rgba(139, 92, 246, 0.2);
  color: #8B5CF6;
  border: 1px solid rgba(139, 92, 246, 0.3);
}

.response-avatar svg {
  width: 16px;
  height: 16px;
}

.message-bubble {
  max-width: 500px;
  padding: 0.75rem 1rem;
  border-radius: 16px;
  position: relative;
}

.client-bubble {
  background: rgba(74, 158, 255, 0.1);
  border: 1px solid rgba(74, 158, 255, 0.2);
  border-bottom-left-radius: 4px;
}

.response-bubble {
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-bottom-right-radius: 4px;
}

.message-bubble p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.9);
}

.client-bubble p {
  font-style: italic;
}

/* Chat animation keyframes */
@keyframes messageSlideIn {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  50% {
    opacity: 0.7;
    transform: translateY(5px) scale(1.02);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Mobile responsive for chat */
@media (max-width: 768px) {
  .chat-section {
    max-width: 100%;
  }
  
  .message-bubble {
    max-width: 320px;
    padding: 0.6rem 0.8rem;
  }
  
  .message-bubble p {
    font-size: 0.85rem;
  }
  
  .message-avatar {
    width: 28px;
    height: 28px;
    font-size: 0.7rem;
  }
}

@media (max-width: 480px) {
  .message-bubble {
    max-width: 200px;
    padding: 0.5rem 0.7rem;
  }
  
  .message-bubble p {
    font-size: 0.8rem;
  }
}

/* Generating Animation Styling */
.generating-section {
  width: 100%;
  opacity: 0;
  transform: scale(0.95) translateY(10px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  position: absolute;
  pointer-events: none;
  z-index: -1;
}

.generating-section.animate-in {
  opacity: 1;
  transform: scale(1) translateY(0);
  position: relative;
  pointer-events: auto;
  z-index: 1;
}

.generating-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.generating-spinner {
  position: relative;
  width: 60px;
  height: 60px;
}

.spinner-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid transparent;
  border-top: 2px solid #8B5CF6;
  border-radius: 50%;
  animation: spin 1.5s linear infinite;
}

.spinner-ring:nth-child(2) {
  width: 80%;
  height: 80%;
  top: 10%;
  left: 10%;
  border-top-color: #A78BFA;
  animation-duration: 2s;
  animation-direction: reverse;
}

.spinner-ring:nth-child(3) {
  width: 60%;
  height: 60%;
  top: 20%;
  left: 20%;
  border-top-color: #C4B5FD;
  animation-duration: 1s;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.generating-text {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
}

.generating-dots {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 8px;
  height: 8px;
  background: #8B5CF6;
  border-radius: 50%;
  animation: dotPulse 1.5s ease-in-out infinite;
}

.dot:nth-child(2) {
  animation-delay: 0.2s;
}

.dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes dotPulse {
  0%, 100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

/* Website Preview Styling */
.website-preview {
  width: 100%;
  opacity: 0;
  transform: scale(0.95) translateY(10px);
  transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
}

.website-preview.animate-in {
  opacity: 1;
  transform: scale(1) translateY(0);
}


.website-preview-image {
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

/* Mobile responsive for website preview */
@media (max-width: 768px) {
  .website-preview {
    width: 100%;
  }
  
  .website-preview-image {
    width: 95%;
    max-height: 85%;
  }
}

@media (max-width: 480px) {
  .website-preview-image {
    width: 98%;
    max-height: 90%;
  }
}

</style>