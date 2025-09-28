<template>
  <div class="step-component">
    <h3 class="step-title">
      {{ isDesignProject ? 'What design deliverables do you need?' : 'What features does your project need?' }}
    </h3>
    
    <!-- UI/UX Design Specific Questions -->
    <div v-if="isDesignProject" class="design-features">
      <div class="design-categories">
        <div class="design-category">
          <h4 class="category-title">🎨 Design Deliverables</h4>
          <div class="design-options">
            <label class="design-option">
              <input 
                type="checkbox" 
                v-model="modelValue.designDeliverables.wireframes"
                class="design-input"
              >
              <div class="design-content">
                <h5>Wireframes & User Flows</h5>
                <p>Low-fidelity layouts and user journey maps</p>
                <span class="design-price">+£800</span>
              </div>
            </label>
            
            <label class="design-option">
              <input 
                type="checkbox" 
                v-model="modelValue.designDeliverables.mockups"
                class="design-input"
              >
              <div class="design-content">
                <h5>High-Fidelity Mockups</h5>
                <p>Detailed visual designs with realistic content</p>
                <span class="design-price">+£1,200</span>
              </div>
            </label>
            
            <label class="design-option">
              <input 
                type="checkbox" 
                v-model="modelValue.designDeliverables.prototype"
                class="design-input"
              >
              <div class="design-content">
                <h5>Interactive Prototype</h5>
                <p>Clickable prototype for user testing</p>
                <span class="design-price">+£1,500</span>
              </div>
            </label>
            
            <label class="design-option">
              <input 
                type="checkbox" 
                v-model="modelValue.designDeliverables.designSystem"
                class="design-input"
              >
              <div class="design-content">
                <h5>Design System & Style Guide</h5>
                <p>Reusable components and brand guidelines</p>
                <span class="design-price">+£2,000</span>
              </div>
            </label>
          </div>
        </div>
        
        <div class="design-category">
          <h4 class="category-title">📱 Platform Requirements</h4>
          <div class="design-options">
            <label class="design-option">
              <input 
                type="checkbox" 
                v-model="modelValue.designDeliverables.mobile"
                class="design-input"
              >
              <div class="design-content">
                <h5>Mobile-First Design</h5>
                <p>Responsive design optimized for mobile devices</p>
                <span class="design-price">+£600</span>
              </div>
            </label>
            
            <label class="design-option">
              <input 
                type="checkbox" 
                v-model="modelValue.designDeliverables.desktop"
                class="design-input"
              >
              <div class="design-content">
                <h5>Desktop Design</h5>
                <p>Full desktop experience with advanced layouts</p>
                <span class="design-price">+£400</span>
              </div>
            </label>
            
            <label class="design-option">
              <input 
                type="checkbox" 
                v-model="modelValue.designDeliverables.tablet"
                class="design-input"
              >
              <div class="design-content">
                <h5>Tablet Design</h5>
                <p>Optimized layouts for tablet devices</p>
                <span class="design-price">+£300</span>
              </div>
            </label>
          </div>
        </div>
        
        <div class="design-category">
          <h4 class="category-title">🔍 Research & Testing</h4>
          <div class="design-options">
            <label class="design-option">
              <input 
                type="checkbox" 
                v-model="modelValue.designDeliverables.userResearch"
                class="design-input"
              >
              <div class="design-content">
                <h5>User Research</h5>
                <p>Interviews, surveys, and user behavior analysis</p>
                <span class="design-price">+£1,800</span>
              </div>
            </label>
            
            <label class="design-option">
              <input 
                type="checkbox" 
                v-model="modelValue.designDeliverables.usabilityTesting"
                class="design-input"
              >
              <div class="design-content">
                <h5>Usability Testing</h5>
                <p>User testing sessions and feedback analysis</p>
                <span class="design-price">+£1,200</span>
              </div>
            </label>
            
            <label class="design-option">
              <input 
                type="checkbox" 
                v-model="modelValue.designDeliverables.accessibility"
                class="design-input"
              >
              <div class="design-content">
                <h5>Accessibility Design</h5>
                <p>WCAG compliant design for all users</p>
                <span class="design-price">+£800</span>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Regular Feature Categories (for non-design projects) -->
    <div v-else class="feature-categories">
      <div 
        v-for="category in featureCategories" 
        :key="category.key"
        class="category-section"
      >
        <div class="category-header">
          <h4 class="category-title">{{ category.icon }} {{ category.name }}</h4>
          <p class="category-description">{{ category.description }}</p>
        </div>
        
        <div class="features-grid">
          <label 
            v-for="feature in category.features" 
            :key="feature.key"
            class="feature-card"
            :class="{ selected: modelValue.features.includes(feature.key) }"
          >
            <input 
              type="checkbox" 
              :value="feature.key" 
              v-model="modelValue.features" 
              class="design-input"
            >
            
            <div class="feature-content">
              <div class="feature-header">
                <h5>{{ feature.label }}</h5>
                <div class="feature-impact">
                  <span class="impact-label">Impact:</span>
                  <span class="impact-value" :class="getImpactClass(feature.weight)">
                    {{ getImpactText(feature.weight) }}
                  </span>
                </div>
              </div>
              
              <p class="feature-description">{{ feature.description }}</p>
              
              <div class="feature-details">
                <div class="cost-impact">
                  <span class="cost-label">Cost Impact:</span>
                  <span class="cost-value">{{ feature.factor }}x</span>
                </div>
                
                <div class="development-time">
                  <span class="time-label">Dev Time:</span>
                  <span class="time-value">{{ getDevTimeText(feature.weight) }}</span>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
    
    <!-- Smart Recommendations -->
    <div v-if="showRecommendations" class="recommendations-section">
      <h4 class="recommendations-title">💡 Smart Recommendations</h4>
      <div class="recommendations-grid">
        <div 
          v-for="rec in smartRecommendations" 
          :key="rec.feature"
          class="recommendation-item"
        >
          <div class="recommendation-header">
            <span class="recommendation-icon">{{ rec.icon }}</span>
            <span class="recommendation-text">{{ rec.reason }}</span>
          </div>
          <button 
            @click="addRecommendedFeature(rec.feature)"
            class="add-feature-btn"
            :disabled="modelValue.features.includes(rec.feature)"
          >
            {{ modelValue.features.includes(rec.feature) ? '✓ Added' : 'Add Feature' }}
          </button>
        </div>
      </div>
    </div>
    
    <!-- Feature Summary -->
    <div class="feature-summary">
      <div class="summary-header">
        <h4>Selected Features ({{ modelValue.features.length }})</h4>
        <button @click="clearAllFeatures" class="clear-btn">Clear All</button>
      </div>
      
      <div v-if="modelValue.features.length > 0" class="selected-features">
        <div 
          v-for="featureKey in modelValue.features" 
          :key="featureKey"
          class="selected-feature"
        >
          <span class="feature-name">{{ getFeatureLabel(featureKey) }}</span>
          <button @click="removeFeature(featureKey)" class="remove-btn">×</button>
        </div>
      </div>
      
      <div v-else class="no-features">
        <p>No features selected yet. Choose the features your project needs above.</p>
      </div>
    </div>
    
    <!-- Help Section -->
    <div class="help-section">
      <div class="help-toggle" @click="showHelp = !showHelp">
        <span>💡 How do I choose the right features?</span>
        <span class="help-arrow" :class="{ expanded: showHelp }">▼</span>
      </div>
      
      <div v-if="showHelp" class="help-content">
        <div class="help-tips">
          <div class="help-tip">
            <h5>🚀 Start with Essentials</h5>
            <p>Begin with core features that are absolutely necessary for your project to function.</p>
          </div>
          
          <div class="help-tip">
            <h5>💰 Consider Budget Impact</h5>
            <p>Each feature adds complexity and cost. Focus on features that provide real value to your users.</p>
          </div>
          
          <div class="help-tip">
            <h5>⏱️ Think About Timeline</h5>
            <p>More features mean longer development time. Consider launching with a minimal viable product (MVP).</p>
          </div>
          
          <div class="help-tip">
            <h5>🔄 Plan for Growth</h5>
            <p>Some features are easier to add later than others. Choose features that support your long-term goals.</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Continue Button -->
    <div class="continue-section">
      <button 
        @click="continueToNext" 
        class="continue-btn"
        :disabled="!modelValue.features || modelValue.features.length === 0"
      >
        {{ modelValue.features && modelValue.features.length > 0 ? 'Continue to Design →' : 'Select at least one feature to continue' }}
      </button>
      <p class="continue-hint">
        {{ modelValue.features && modelValue.features.length > 0 ? 'Ready to move to the next step' : 'Choose your features above' }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { features, type Questionnaire } from '@/utils/cost-calculation-algorithm'

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

// Check if this is a design-only project
const isDesignProject = computed(() => props.modelValue.productType === 'design_only')

const showHelp = ref(false)

const continueToNext = () => {
  if (props.modelValue.features && props.modelValue.features.length > 0) {
    emit('next')
  }
}

// Feature categories with enhanced information
const featureCategories = [
  {
    key: 'core',
    name: 'Core Functionality',
    icon: '🔧',
    description: 'Essential features that make your project functional',
    features: [
      {
        key: 'auth',
        label: 'User Authentication',
        description: 'User registration, login, password management, and profile system',
        factor: 1.1,
        weight: 2,
        category: 'core'
      },
      {
        key: 'database',
        label: 'Database & API',
        description: 'Backend database design, API development, and data management',
        factor: 1.3,
        weight: 3,
        category: 'core'
      },
      {
        key: 'admin',
        label: 'Admin Panel / CRM',
        description: 'Administrative dashboard for managing users, content, and business operations',
        factor: 1.4,
        weight: 3,
        category: 'core'
      }
    ]
  },
  {
    key: 'payments',
    name: 'Payment & Commerce',
    icon: '💳',
    description: 'Features for handling money and transactions',
    features: [
      {
        key: 'payments',
        label: 'Payment Processing',
        description: 'Secure payment gateway integration, subscription billing, and invoicing',
        factor: 1.2,
        weight: 3,
        category: 'payments'
      },
      {
        key: 'marketplace_multivendor',
        label: 'Multi-vendor Marketplace',
        description: 'Platform where multiple sellers can list and sell products',
        factor: 1.3,
        weight: 4,
        category: 'payments'
      }
    ]
  },
  {
    key: 'ai',
    name: 'AI & Advanced Features',
    icon: '🤖',
    description: 'Artificial intelligence and machine learning capabilities',
    features: [
      {
        key: 'ai',
        label: 'AI/ML Features',
        description: 'Machine learning algorithms, predictive analytics, and intelligent automation',
        factor: 1.6,
        weight: 4,
        category: 'ai'
      },
      {
        key: 'search',
        label: 'Advanced Search',
        description: 'Intelligent search with filters, suggestions, and relevance scoring',
        factor: 1.15,
        weight: 2,
        category: 'ai'
      }
    ]
  },
  {
    key: 'communication',
    name: 'Communication & Social',
    icon: '💬',
    description: 'Features for user interaction and communication',
    features: [
      {
        key: 'chat',
        label: 'Chat & Messaging',
        description: 'Real-time chat, direct messaging, and communication tools',
        factor: 1.2,
        weight: 2,
        category: 'comm'
      },
      {
        key: 'notifications',
        label: 'Push & Email Notifications',
        description: 'Automated notifications, email campaigns, and push alerts',
        factor: 1.1,
        weight: 1,
        category: 'notifications'
      }
    ]
  },
  {
    key: 'enhancement',
    name: 'Enhancement & Polish',
    icon: '✨',
    description: 'Features that improve user experience and functionality',
    features: [
      {
        key: 'custom_animations',
        label: 'Custom Animations',
        description: 'Smooth transitions, micro-interactions, and engaging animations',
        factor: 1.1,
        weight: 1,
        category: 'ux'
      },
      {
        key: 'i18n',
        label: 'Multi-language Support',
        description: 'Internationalization for multiple languages and regions',
        factor: 1.2,
        weight: 2,
        category: 'i18n'
      },
      {
        key: 'seo',
        label: 'SEO Setup',
        description: 'Search engine optimization, meta tags, and structured data',
        factor: 1.05,
        weight: 1,
        category: 'seo'
      },
      {
        key: 'analytics',
        label: 'Analytics & Events',
        description: 'User behavior tracking, conversion analytics, and performance metrics',
        factor: 1.05,
        weight: 1,
        category: 'analytics'
      }
    ]
  },
  {
    key: 'security',
    name: 'Security & Compliance',
    icon: '🔒',
    description: 'Security features and regulatory compliance',
    features: [
      {
        key: 'security',
        label: 'Enhanced Security',
        description: 'Two-factor authentication, JWT tokens, and advanced security measures',
        factor: 1.2,
        weight: 2,
        category: 'security'
      },
      {
        key: 'gdpr',
        label: 'GDPR/Compliance',
        description: 'Data protection, privacy controls, and regulatory compliance features',
        factor: 1.15,
        weight: 3,
        category: 'compliance'
      }
    ]
  }
]

// Smart recommendations based on project type
const smartRecommendations = computed(() => {
  const recommendations = []
  
  // Always recommend core features
  if (!props.modelValue.features.includes('auth')) {
    recommendations.push({
      feature: 'auth',
      icon: '🔐',
      reason: 'Most projects need user accounts and authentication'
    })
  }
  
  if (!props.modelValue.features.includes('database')) {
    recommendations.push({
      feature: 'database',
      icon: '🗄️',
      reason: 'Essential for storing and managing data'
    })
  }
  
  // Project-specific recommendations
  if (props.modelValue.productType === 'ecommerce' && !props.modelValue.features.includes('payments')) {
    recommendations.push({
      feature: 'payments',
      icon: '💳',
      reason: 'E-commerce sites need payment processing'
    })
  }
  
  if (props.modelValue.productType === 'saas_webapp' && !props.modelValue.features.includes('admin')) {
    recommendations.push({
      feature: 'admin',
      icon: '⚙️',
      reason: 'SaaS apps need admin panels to manage users and content'
    })
  }
  
  if (props.modelValue.productType === 'marketplace' && !props.modelValue.features.includes('marketplace_multivendor')) {
    recommendations.push({
      feature: 'marketplace_multivendor',
      icon: '🏪',
      reason: 'Marketplaces need multi-vendor functionality'
    })
  }
  
  return recommendations
})

const showRecommendations = computed(() => smartRecommendations.value.length > 0)

// Helper functions
const getFeatureLabel = (key: string) => {
  const feature = features.find(f => f.key === key)
  return feature?.label || key
}

const getImpactClass = (weight: number) => {
  if (weight <= 1) return 'low'
  if (weight <= 2) return 'medium'
  if (weight <= 3) return 'high'
  return 'critical'
}

const getImpactText = (weight: number) => {
  if (weight <= 1) return 'Low'
  if (weight <= 2) return 'Medium'
  if (weight <= 3) return 'High'
  return 'Critical'
}

const getDevTimeText = (weight: number) => {
  if (weight <= 1) return '1-2 weeks'
  if (weight <= 2) return '2-4 weeks'
  if (weight <= 3) return '4-8 weeks'
  return '8+ weeks'
}

// Event handlers
const onFeatureChange = () => {
  emit('update:modelValue', props.modelValue)
}

const addRecommendedFeature = (featureKey: string) => {
  if (!props.modelValue.features.includes(featureKey)) {
    props.modelValue.features.push(featureKey)
    emit('update:modelValue', props.modelValue)
  }
}

const removeFeature = (featureKey: string) => {
  const index = props.modelValue.features.indexOf(featureKey)
  if (index > -1) {
    props.modelValue.features.splice(index, 1)
    emit('update:modelValue', props.modelValue)
  }
}

const clearAllFeatures = () => {
  props.modelValue.features = []
  emit('update:modelValue', props.modelValue)
}
</script>

<style scoped>
.step-component {
  max-width: 900px;
  margin: 0 auto;
}

.step-title {
  color: var(--color-text-primary);
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 32px;
}

/* Design Features */
.design-features {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.design-categories {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.design-category {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
}

.design-category .category-title {
  color: var(--color-text-primary);
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.design-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}

.design-option {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.design-option:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--color-secondary-teal);
}

.design-input {
  width: 20px;
  height: 20px;
  margin-top: 4px;
  flex-shrink: 0;
}

.design-content {
  flex: 1;
}

.design-content h5 {
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 8px 0;
}

.design-content p {
  color: var(--color-text-muted);
  font-size: 14px;
  margin: 0 0 12px 0;
  line-height: 1.4;
}

.design-price {
  color: var(--color-secondary-teal);
  font-size: 16px;
  font-weight: 700;
}

/* Feature Categories */
.feature-categories {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 32px;
}

.category-section {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
}

.category-header {
  margin-bottom: 24px;
  text-align: center;
}

.category-title {
  color: var(--color-text-primary);
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 8px 0;
}

.category-description {
  color: var(--color-text-muted);
  font-size: 14px;
  margin: 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.02);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.feature-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--color-secondary-teal);
  transform: translateY(-2px);
}

.feature-card.selected {
  border-color: var(--color-secondary-teal);
  background: rgba(34, 252, 176, 0.05);
}

.feature-input {
  display: none;
}

.feature-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.feature-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.feature-header h5 {
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  flex: 1;
}

.feature-impact {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
}

.impact-label {
  color: var(--color-text-muted);
  font-size: 10px;
  font-weight: 500;
}

.impact-value {
  font-size: 12px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.impact-value.low {
  background: rgba(34, 252, 176, 0.2);
  color: var(--color-secondary-teal);
}

.impact-value.medium {
  background: rgba(255, 193, 7, 0.2);
  color: #FFC107;
}

.impact-value.high {
  background: rgba(255, 107, 107, 0.2);
  color: #FF6B6B;
}

.impact-value.critical {
  background: rgba(220, 53, 69, 0.2);
  color: #DC3545;
}

.feature-description {
  color: var(--color-text-muted);
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
}

.feature-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
}

.cost-impact,
.development-time {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.cost-label,
.time-label {
  color: var(--color-text-muted);
  font-size: 10px;
  font-weight: 500;
}

.cost-value {
  color: var(--color-secondary-teal);
  font-size: 14px;
  font-weight: 600;
}

.time-value {
  color: var(--color-primary-purple);
  font-size: 12px;
  font-weight: 500;
}

/* Smart Recommendations */
.recommendations-section {
  background: rgba(127, 0, 253, 0.05);
  border: 1px solid rgba(127, 0, 253, 0.2);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 32px;
}

.recommendations-title {
  color: var(--color-text-primary);
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 20px 0;
  text-align: center;
}

.recommendations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}

.recommendation-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
}

.recommendation-header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.recommendation-icon {
  font-size: 20px;
}

.recommendation-text {
  color: var(--color-text-primary);
  font-size: 14px;
  font-weight: 500;
}

.add-feature-btn {
  background: var(--color-secondary-teal);
  color: var(--color-black);
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.add-feature-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(34, 252, 176, 0.3);
}

.add-feature-btn:disabled {
  background: var(--color-secondary-teal);
  opacity: 0.7;
  cursor: not-allowed;
}

/* Feature Summary */
.feature-summary {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 32px;
}

.summary-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.summary-header h4 {
  color: var(--color-text-primary);
  font-size: 18px;
  font-weight: 600;
  margin: 0;
}

.clear-btn {
  background: rgba(255, 107, 107, 0.1);
  color: #FF6B6B;
  border: 1px solid rgba(255, 107, 107, 0.3);
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.clear-btn:hover {
  background: rgba(255, 107, 107, 0.2);
  border-color: #FF6B6B;
}

.selected-features {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.selected-feature {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(34, 252, 176, 0.1);
  border: 1px solid rgba(34, 252, 176, 0.3);
  border-radius: 20px;
  padding: 8px 16px;
}

.feature-name {
  color: var(--color-text-primary);
  font-size: 14px;
  font-weight: 500;
}

.remove-btn {
  background: none;
  border: none;
  color: var(--color-secondary-teal);
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.remove-btn:hover {
  background: rgba(34, 252, 176, 0.2);
}

.no-features {
  text-align: center;
  padding: 40px 20px;
}

.no-features p {
  color: var(--color-text-muted);
  font-size: 16px;
  margin: 0;
}

/* Help Section */
.help-section {
  margin-bottom: 32px;
}

.help-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  background: rgba(127, 0, 253, 0.05);
  border: 1px solid rgba(127, 0, 253, 0.2);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--color-text-primary);
  font-weight: 500;
}

.help-toggle:hover {
  background: rgba(127, 0, 253, 0.1);
  border-color: var(--color-primary-purple);
}

.help-arrow {
  transition: transform 0.3s ease;
}

.help-arrow.expanded {
  transform: rotate(180deg);
}

.help-content {
  margin-top: 20px;
  padding: 24px;
  background: rgba(127, 0, 253, 0.05);
  border: 1px solid rgba(127, 0, 253, 0.2);
  border-radius: 12px;
}

.help-tips {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.help-tip h5 {
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 12px 0;
}

.help-tip p {
  color: var(--color-text-muted);
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
}

/* Continue Section */
.continue-section {
  text-align: center;
  margin-top: 32px;
  padding: 24px;
  background: rgba(127, 0, 253, 0.05);
  border: 1px solid rgba(127, 0, 253, 0.2);
  border-radius: 16px;
}

.continue-btn {
  background: var(--gradient-primary);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 12px;
}

.continue-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(127, 0, 253, 0.3);
}

.continue-btn:disabled {
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-text-muted);
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.continue-hint {
  color: var(--color-text-muted);
  font-size: 14px;
  font-style: italic;
}

/* Responsive Design */
@media (max-width: 768px) {
  .design-options {
    grid-template-columns: 1fr;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .feature-header {
    flex-direction: column;
    gap: 12px;
    align-items: stretch;
  }
  
  .feature-details {
    flex-direction: column;
    gap: 12px;
    align-items: stretch;
  }
  
  .recommendations-grid {
    grid-template-columns: 1fr;
  }
  
  .recommendation-item {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
  
  .help-tips {
    grid-template-columns: 1fr;
  }
}
</style>
