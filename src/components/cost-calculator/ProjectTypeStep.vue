<template>
  <div class="step-component">
    <h3 class="step-title">What type of project are you building?</h3>
    
    <div class="options-grid">
      <label 
        v-for="type in productTypes" 
        :key="type.key" 
        class="option-card"
        :class="{ selected: modelValue.productType === type.key }"
        @click="selectProjectType(type.key)"
      >
        <div class="option-content">
          <div class="option-header">
            <div class="option-icon">{{ getProjectIcon(type.key) }}</div>
            <div class="option-text">
              <h4>{{ type.label }}</h4>
              <p class="option-description">{{ getProjectDescription(type.key) }}</p>
            </div>
          </div>
          
          <div class="option-details">
            <div class="complexity-indicator">
              <span class="complexity-label">Complexity:</span>
              <div class="complexity-bars">
                <div 
                  v-for="i in 5" 
                  :key="i" 
                  class="complexity-bar"
                  :class="{ active: i <= getComplexityLevel(type.key) }"
                ></div>
              </div>
            </div>
            
            <div class="typical-range">
              <span class="range-label">Typical Range:</span>
              <span class="range-price">£{{ formatNumber(getTypicalRange(type.key).min) }} - £{{ formatNumber(getTypicalRange(type.key).max) }}</span>
            </div>
          </div>
        </div>
      </label>
    </div>
    
    <!-- Don't Know Option -->
    <div class="dont-know-section" v-if="!showRecommendQuestions">
      <button @click="showRecommendationQuestions" class="dont-know-btn">
        🤔 Not sure? Let me recommend something
      </button>
      <p class="dont-know-hint">I'll suggest the best option based on common business needs</p>
    </div>
    
    <!-- Recommendation Questions -->
    <div class="recommendation-section" v-if="showRecommendQuestions">
      <div class="recommendation-header">
        <h4 class="recommendation-title">Let me help you choose the right option</h4>
        <p class="recommendation-subtitle">What's your main goal?</p>
      </div>
      
      <div class="goal-options">
        <button @click="recommendBasedOnGoal('sell')" class="goal-btn">
          <span class="goal-icon">🛒</span>
          <div class="goal-content">
            <h5>Sell Products or Services</h5>
            <p>I want to sell things online</p>
          </div>
        </button>
        
        <button @click="recommendBasedOnGoal('present')" class="goal-btn">
          <span class="goal-icon">📱</span>
          <div class="goal-content">
            <h5>Present Information</h5>
            <p>I want to showcase my business or portfolio</p>
          </div>
        </button>
        
        <button @click="recommendBasedOnGoal('build')" class="goal-btn">
          <span class="goal-icon">⚙️</span>
          <div class="goal-content">
            <h5>Build a Product</h5>
            <p>I want to create a tool or platform</p>
          </div>
        </button>
      </div>
      
      <button @click="showRecommendQuestions = false" class="back-to-options">
        Learn more →
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { productTypes, type Questionnaire } from '@/utils/cost-calculation-algorithm'

interface Props {
  modelValue: Questionnaire
}

interface Emits {
  (e: 'update:modelValue', value: Questionnaire): void
  (e: 'next'): void
  (e: 'previous'): void
  (e: 'skip'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

// Recommendation state
const showRecommendQuestions = ref(false)

// Project type data with essential information only
const projectTypeData = {
  landing: {
    icon: '📄',
    description: 'Single page website focused on one goal - lead generation, product launch, or simple information.',
    complexity: 2,
    typicalRange: { min: 999, max: 3999 }
  },
  corporate: {
    icon: '🏢',
    description: 'Multi-page business website with company information, services, and contact details.',
    complexity: 3,
    typicalRange: { min: 2499, max: 9999 }
  },
  ecommerce: {
    icon: '🛒',
    description: 'Online store with product catalog, shopping cart, and payment processing.',
    complexity: 4,
    typicalRange: { min: 7999, max: 29999 }
  },
  marketplace: {
    icon: '🏪',
    description: 'Multi-vendor platform where different sellers can list and sell products.',
    complexity: 5,
    typicalRange: { min: 14999, max: 59999 }
  },
  saas_webapp: {
    icon: '💻',
    description: 'Software as a service application with user accounts, subscriptions, and recurring billing.',
    complexity: 5,
    typicalRange: { min: 12499, max: 49999 }
  },
  mobile_native: {
    icon: '📱',
    description: 'Native mobile application built specifically for iOS and Android platforms.',
    complexity: 4,
    typicalRange: { min: 9999, max: 39999 }
  },
  mobile_cross: {
    icon: '📱🔄',
    description: 'Cross-platform mobile app that works on both iOS and Android with shared codebase.',
    complexity: 4,
    typicalRange: { min: 12499, max: 44999 }
  },
  desktop_app: {
    icon: '🖥️',
    description: 'Desktop application for Windows, Mac, or Linux with offline capabilities.',
    complexity: 4,
    typicalRange: { min: 9999, max: 39999 }
  },
  design_only: {
    icon: '🎨',
    description: 'UI/UX design deliverables only - no development included.',
    complexity: 2,
    typicalRange: { min: 1499, max: 7499 }
  }
}

// Helper functions
const getProjectIcon = (key: string) => {
  return projectTypeData[key as keyof typeof projectTypeData]?.icon || '❓'
}

const getProjectDescription = (key: string) => {
  return projectTypeData[key as keyof typeof projectTypeData]?.description || 'Project description'
}

const getComplexityLevel = (key: string) => {
  return projectTypeData[key as keyof typeof projectTypeData]?.complexity || 3
}

const getTypicalRange = (key: string) => {
  return projectTypeData[key as keyof typeof projectTypeData]?.typicalRange || { min: 4999, max: 24999 }
}

const formatNumber = (num: number) => {
  return num.toLocaleString('en-GB')
}

// Event handlers
const selectProjectType = (projectType: string) => {
  // Update the model value
  const updatedValue = { ...props.modelValue, productType: projectType }
  
  // Auto-select essential features for ecommerce and marketplace
  if (projectType === 'ecommerce' || projectType === 'marketplace') {
    // Initialize features array if it doesn't exist
    if (!updatedValue.features) {
      updatedValue.features = []
    }
    
    // Add essential features if not already present
    const essentialFeatures = ['database', 'payments', 'auth']
    essentialFeatures.forEach(feature => {
      if (!updatedValue.features.includes(feature)) {
        updatedValue.features.push(feature)
      }
    })
    
    // For marketplace, also add search and admin panel
    if (projectType === 'marketplace') {
      const marketplaceFeatures = ['search', 'admin']
      marketplaceFeatures.forEach(feature => {
        if (!updatedValue.features.includes(feature)) {
          updatedValue.features.push(feature)
        }
      })
    }
  }
  
  emit('update:modelValue', updatedValue)
  
  // Auto-advance to next step after a short delay
  setTimeout(() => {
    emit('next')
  }, 300)
}

const showRecommendationQuestions = () => {
  showRecommendQuestions.value = true
}

const recommendBasedOnGoal = (goal: 'sell' | 'present' | 'build') => {
  let recommendedType = 'corporate'
  
  if (goal === 'sell') {
    // If they want to sell, recommend e-commerce
    recommendedType = 'ecommerce'
  } else if (goal === 'present') {
    // If they want to present, recommend landing or corporate
    recommendedType = 'landing'
  } else if (goal === 'build') {
    // If they want to build a product, recommend SaaS/webapp
    recommendedType = 'saas_webapp'
  }
  
  selectProjectType(recommendedType)
  showRecommendQuestions.value = false
}
</script>

<style scoped>
.step-component {
  width: 100%;
  max-width: none;
  margin: 0;
}

.step-title {
  color: var(--color-text-primary);
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 40px;
}

.options-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 40px;
  width: 100%;
}

.option-card {
  background: rgba(255, 255, 255, 0.02);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 28px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.option-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--color-primary-purple);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(127, 0, 253, 0.2);
}

.option-card.selected {
  border-color: var(--color-secondary-teal);
  background: rgba(34, 252, 176, 0.05);
  box-shadow: 0 8px 25px rgba(34, 252, 176, 0.3);
}

.option-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
}

.option-header {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.option-icon {
  font-size: 36px;
  flex-shrink: 0;
}

.option-text h4 {
  color: var(--color-text-primary);
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 12px 0;
}

.option-description {
  color: var(--color-text-muted);
  font-size: 15px;
  line-height: 1.6;
  margin: 0;
}

.option-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  margin-top: auto;
}

.complexity-indicator {
  display: flex;
  align-items: center;
  gap: 10px;
}

.complexity-label {
  color: var(--color-text-muted);
  font-size: 13px;
  font-weight: 500;
}

.complexity-bars {
  display: flex;
  gap: 3px;
}

.complexity-bar {
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.complexity-bar.active {
  background: var(--color-secondary-teal);
}

.typical-range {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
}

.range-label {
  color: var(--color-text-muted);
  font-size: 11px;
  font-weight: 500;
}

.range-price {
  color: var(--color-secondary-teal);
  font-size: 16px;
  font-weight: 600;
}

/* Don't Know Section */
.dont-know-section {
  text-align: center;
  margin-top: 20px;
}

.dont-know-btn {
  background: var(--gradient-accent);
  color: var(--color-black);
  border: none;
  border-radius: 12px;
  padding: 18px 36px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 12px;
}

.dont-know-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(34, 252, 176, 0.3);
}

.dont-know-hint {
  color: var(--color-text-muted);
  font-size: 14px;
  font-style: italic;
}

/* Recommendation Section */
.recommendation-section {
  text-align: center;
  margin-top: 20px;
  padding: 30px;
  background: rgba(127, 0, 253, 0.05);
  border: 1px solid rgba(127, 0, 253, 0.2);
  border-radius: 16px;
  animation: slideInUp 0.5s ease-out;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.recommendation-header {
  margin-bottom: 24px;
  animation: fadeIn 0.6s ease-out 0.2s both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.recommendation-title {
  color: var(--color-text-primary);
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 8px 0;
}

.recommendation-subtitle {
  color: var(--color-text-muted);
  font-size: 16px;
  margin: 0;
}

.goal-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 20px;
}

.goal-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 12px;
  animation: fadeInScale 0.5s ease-out both;
}

.goal-btn:nth-child(1) {
  animation-delay: 0.3s;
}

.goal-btn:nth-child(2) {
  animation-delay: 0.4s;
}

.goal-btn:nth-child(3) {
  animation-delay: 0.5s;
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.goal-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--color-secondary-teal);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(34, 252, 176, 0.2);
}

.goal-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.goal-content {
  flex: 1;
}

.goal-content h5 {
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 4px 0;
}

.goal-content p {
  color: var(--color-text-muted);
  font-size: 13px;
  margin: 0;
}

.back-to-options {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 12px 24px;
  color: var(--color-text-muted);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: fadeIn 0.5s ease-out 0.6s both;
}

.back-to-options:hover {
  border-color: var(--color-text-muted);
  color: var(--color-text-primary);
  transform: translateX(3px);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .options-grid {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  
  .option-card {
    padding: 24px;
  }
  
  .step-title {
    font-size: 24px;
    margin-bottom: 32px;
  }
}

@media (max-width: 768px) {
  .options-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .option-card {
    padding: 20px;
  }
  
  .step-title {
    font-size: 22px;
    margin-bottom: 28px;
  }
  
  .option-details {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
    text-align: center;
  }
  
  .typical-range {
    align-items: center;
  }
}

@media (max-width: 480px) {
  .step-title {
    font-size: 20px;
    margin-bottom: 20px;
  }
  
  .options-grid {
    gap: 12px;
    margin-bottom: 24px;
  }
  
  .option-card {
    padding: 12px;
  }
  
  .option-icon {
    font-size: 24px;
  }
  
  .option-header {
    gap: 10px;
    margin-bottom: 10px;
  }
  
  .option-text h4 {
    font-size: 16px;
    margin: 0;
  }
  
  .option-description {
    display: none;
  }
  
  .option-details {
    padding: 12px;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
  
  .complexity-indicator {
    gap: 8px;
  }
  
  .complexity-label {
    font-size: 11px;
  }
  
  .complexity-bars {
    gap: 2px;
  }
  
  .complexity-bar {
    width: 8px;
    height: 8px;
  }
  
  .typical-range {
    align-items: flex-start;
    gap: 4px;
  }
  
  .range-label {
    font-size: 10px;
  }
  
  .range-price {
    font-size: 14px;
  }
  
  .recommendation-section {
    padding: 20px;
  }
  
  .recommendation-title {
    font-size: 18px;
  }
  
  .recommendation-subtitle {
    font-size: 14px;
  }
  
  .goal-options {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  
  .goal-btn {
    padding: 16px;
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
  
  .goal-icon {
    font-size: 28px;
  }
  
  .goal-content h5 {
    font-size: 15px;
  }
  
  .goal-content p {
    font-size: 12px;
  }
}
</style>
