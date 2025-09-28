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
    <div class="dont-know-section">
      <button @click="selectRecommended" class="dont-know-btn">
        🤔 Not sure? Let me recommend something
      </button>
      <p class="dont-know-hint">I'll suggest the best option based on common business needs</p>
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

// Project type data with essential information only
const projectTypeData = {
  landing: {
    icon: '📄',
    description: 'Single page website focused on one goal - lead generation, product launch, or simple information.',
    complexity: 2,
    typicalRange: { min: 2000, max: 8000 }
  },
  corporate: {
    icon: '🏢',
    description: 'Multi-page business website with company information, services, and contact details.',
    complexity: 3,
    typicalRange: { min: 5000, max: 25000 }
  },
  ecommerce: {
    icon: '🛒',
    description: 'Online store with product catalog, shopping cart, and payment processing.',
    complexity: 4,
    typicalRange: { min: 15000, max: 75000 }
  },
  marketplace: {
    icon: '🏪',
    description: 'Multi-vendor platform where different sellers can list and sell products.',
    complexity: 5,
    typicalRange: { min: 30000, max: 150000 }
  },
  saas_webapp: {
    icon: '💻',
    description: 'Software as a service application with user accounts, subscriptions, and recurring billing.',
    complexity: 5,
    typicalRange: { min: 25000, max: 100000 }
  },
  mobile_native: {
    icon: '📱',
    description: 'Native mobile application built specifically for iOS and Android platforms.',
    complexity: 4,
    typicalRange: { min: 20000, max: 80000 }
  },
  mobile_cross: {
    icon: '📱🔄',
    description: 'Cross-platform mobile app that works on both iOS and Android with shared codebase.',
    complexity: 4,
    typicalRange: { min: 25000, max: 90000 }
  },
  desktop_app: {
    icon: '🖥️',
    description: 'Desktop application for Windows, Mac, or Linux with offline capabilities.',
    complexity: 4,
    typicalRange: { min: 20000, max: 80000 }
  },
  design_only: {
    icon: '🎨',
    description: 'UI/UX design deliverables only - no development included.',
    complexity: 2,
    typicalRange: { min: 3000, max: 15000 }
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
  return projectTypeData[key as keyof typeof projectTypeData]?.typicalRange || { min: 10000, max: 50000 }
}

const formatNumber = (num: number) => {
  return num.toLocaleString('en-GB')
}

// Event handlers
const selectProjectType = (projectType: string) => {
  // Update the model value
  const updatedValue = { ...props.modelValue, productType: projectType }
  emit('update:modelValue', updatedValue)
  
  // Auto-advance to next step after a short delay
  setTimeout(() => {
    emit('next')
  }, 300)
}

const selectRecommended = () => {
  // Recommend corporate website as it's most common
  selectProjectType('corporate')
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
    margin-bottom: 24px;
  }
  
  .option-card {
    padding: 16px;
  }
  
  .option-icon {
    font-size: 28px;
  }
  
  .option-text h4 {
    font-size: 18px;
  }
  
  .option-description {
    font-size: 14px;
  }
}
</style>
