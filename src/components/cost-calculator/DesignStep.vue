<template>
  <div class="step-component">
    <h3 class="step-title">What level of design quality do you want?</h3>
    
    <div class="design-options">
      <label 
        v-for="level in designLevels" 
        :key="level.key"
        class="design-option"
        :class="{ selected: modelValue.designLevel === level.key }"
      >
        <input 
          type="radio" 
          :value="level.key" 
          :name="'designLevel'" 
          v-model="modelValue.designLevel"
          class="design-input"
          @change="onSelectionChange"
        >
        
        <div class="design-content">
          <div class="design-header">
            <div class="design-icon">{{ getDesignIcon(level.key) }}</div>
            <div class="design-text">
              <h4>{{ level.label }}</h4>
              <p class="design-description">{{ getDesignDescription(level.key) }}</p>
            </div>
          </div>
          
          <div class="design-visual">
            <div class="visual-preview" :class="level.key">
              <div class="preview-header">
                <div class="preview-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="preview-content">
                <div class="preview-element" :class="getPreviewClass(level.key, 1)"></div>
                <div class="preview-element" :class="getPreviewClass(level.key, 2)"></div>
                <div class="preview-element" :class="getPreviewClass(level.key, 3)"></div>
              </div>
            </div>
          </div>
          
          <div class="design-details">
            <div class="detail-item">
              <span class="detail-label">Cost Impact:</span>
              <span class="detail-value">{{ level.factor }}x</span>
            </div>
            
            <div class="detail-item">
              <span class="detail-label">Development Time:</span>
              <span class="detail-value">{{ getDevTimeText(level.key) }}</span>
            </div>
            
            <div class="detail-item">
              <span class="detail-label">User Experience:</span>
              <span class="detail-value">{{ getUserExperienceText(level.key) }}</span>
            </div>
          </div>
          
          <div class="design-benefits">
            <h5>What you get:</h5>
            <ul>
              <li v-for="benefit in getDesignBenefits(level.key)" :key="benefit">{{ benefit }}</li>
            </ul>
          </div>
        </div>
      </label>
    </div>
    
    <!-- Design Comparison -->
    <div class="design-comparison">
      <h4 class="comparison-title">💡 Design Quality Comparison</h4>
      <div class="comparison-grid">
        <div class="comparison-item">
          <h5>🎨 Visual Appeal</h5>
          <div class="comparison-bars">
            <div class="bar basic" style="width: 40%">Basic</div>
            <div class="bar standard" style="width: 60%">Standard</div>
            <div class="bar custom" style="width: 80%">Custom</div>
            <div class="bar luxury" style="width: 100%">Luxury</div>
          </div>
        </div>
        
        <div class="comparison-item">
          <h5>⚡ Performance</h5>
          <div class="comparison-bars">
            <div class="bar basic" style="width: 90%">Basic</div>
            <div class="bar standard" style="width: 85%">Standard</div>
            <div class="bar custom" style="width: 75%">Custom</div>
            <div class="bar luxury" style="width: 60%">Luxury</div>
          </div>
        </div>
        
        <div class="comparison-item">
          <h5>💰 Cost</h5>
          <div class="comparison-bars">
            <div class="bar basic" style="width: 30%">Basic</div>
            <div class="bar standard" style="width: 50%">Standard</div>
            <div class="bar custom" style="width: 70%">Custom</div>
            <div class="bar luxury" style="width: 100%">Luxury</div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Help Section -->
    <div class="help-section">
      <div class="help-toggle" @click="showHelp = !showHelp">
        <span>💡 How do I choose the right design level?</span>
        <span class="help-arrow" :class="{ expanded: showHelp }">▼</span>
      </div>
      
      <div v-if="showHelp" class="help-content">
        <div class="help-tips">
          <div class="help-tip">
            <h5>🚀 Start Simple</h5>
            <p>Begin with a basic design and upgrade later. It's easier to enhance design than to simplify complex layouts.</p>
          </div>
          
          <div class="help-tip">
            <h5>🎯 Consider Your Audience</h5>
            <p>Professional B2B clients expect polished designs, while internal tools can be simpler.</p>
          </div>
          
          <div class="help-tip">
            <h5>💰 Budget vs. Impact</h5>
            <p>Design quality directly affects user perception and conversion rates. Good design often pays for itself.</p>
          </div>
          
          <div class="help-tip">
            <h5>⏱️ Timeline Impact</h5>
            <p>Custom designs take longer but create unique experiences that set you apart from competitors.</p>
          </div>
        </div>
        
        <div class="help-examples">
          <h5>Real Examples:</h5>
          <div class="examples-grid">
            <div class="example-item">
              <strong>Basic:</strong> Company intranet, simple dashboards
            </div>
            <div class="example-item">
              <strong>Standard:</strong> Business websites, SaaS applications
            </div>
            <div class="example-item">
              <strong>Custom:</strong> Brand-focused sites, premium products
            </div>
            <div class="example-item">
              <strong>Luxury:</strong> High-end brands, premium services
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Quick Decision Helper -->
    <div class="decision-helper">
      <h4>🤔 Still not sure?</h4>
      <div class="helper-questions">
        <div class="helper-question">
          <p><strong>Is this for internal use or customer-facing?</strong></p>
          <div class="helper-options">
            <button @click="selectForInternal" class="helper-btn">Internal</button>
            <button @click="selectForCustomers" class="helper-btn">Customer-facing</button>
          </div>
        </div>
        
        <div class="helper-question">
          <p><strong>What's your budget priority?</strong></p>
          <div class="helper-options">
            <button @click="selectBudgetPriority" class="helper-btn">Save money</button>
            <button @click="selectQualityPriority" class="helper-btn">Best quality</button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Continue Button -->
    <div class="continue-section">
      <button 
        @click="continueToNext" 
        class="continue-btn"
        :disabled="!modelValue.designLevel"
      >
        {{ modelValue.designLevel ? 'Continue to Timeline →' : 'Select a design level to continue' }}
      </button>
      <p class="continue-hint">
        {{ modelValue.designLevel ? 'Ready to move to the next step' : 'Choose your design level above' }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { designLevels, type Questionnaire } from '@/utils/cost-calculation-algorithm'

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

const showHelp = ref(false)

// Design level data with enhanced information
const designLevelData = {
  basic_template: {
    icon: '📄',
    description: 'Simple, functional design using pre-made templates and standard components.',
    devTime: '1-2 weeks',
    userExperience: 'Functional',
    benefits: [
      'Fastest to implement',
      'Lowest cost',
      'Proven functionality',
      'Easy to maintain'
    ]
  },
  standard_modern: {
    icon: '🎨',
    description: 'Contemporary design with modern UI patterns and responsive layouts.',
    devTime: '2-3 weeks',
    userExperience: 'Good',
    benefits: [
      'Professional appearance',
      'Good user experience',
      'Responsive design',
      'Modern standards'
    ]
  },
  custom_premium: {
    icon: '✨',
    description: 'Custom-designed interface with unique visual elements and interactions.',
    devTime: '4-6 weeks',
    userExperience: 'Excellent',
    benefits: [
      'Unique brand identity',
      'Enhanced user engagement',
      'Custom interactions',
      'Premium feel'
    ]
  },
  luxury: {
    icon: '💎',
    description: 'High-end design with advanced animations, micro-interactions, and premium aesthetics.',
    devTime: '6-10 weeks',
    userExperience: 'Exceptional',
    benefits: [
      'Luxury brand positioning',
      'Memorable user experience',
      'Advanced animations',
      'Competitive advantage'
    ]
  }
}

// Helper functions
const getDesignIcon = (key: string) => {
  return designLevelData[key as keyof typeof designLevelData]?.icon || '❓'
}

const getDesignDescription = (key: string) => {
  return designLevelData[key as keyof typeof designLevelData]?.description || 'Design description'
}

const getDevTimeText = (key: string) => {
  return designLevelData[key as keyof typeof designLevelData]?.devTime || 'Unknown'
}

const getUserExperienceText = (key: string) => {
  return designLevelData[key as keyof typeof designLevelData]?.userExperience || 'Unknown'
}

const getDesignBenefits = (key: string) => {
  return designLevelData[key as keyof typeof designLevelData]?.benefits || ['Professional quality']
}

const getPreviewClass = (level: string, element: number) => {
  const baseClass = `preview-${element}`
  return `${baseClass} ${level}`
}

// Event handlers
const onSelectionChange = () => {
  emit('update:modelValue', props.modelValue)
  
  // Auto-advance to next step after selection
  setTimeout(() => {
    emit('next')
  }, 500)
}

// Quick decision helpers
const selectForInternal = () => {
  props.modelValue.designLevel = 'basic_template'
  emit('update:modelValue', props.modelValue)
}

const selectForCustomers = () => {
  props.modelValue.designLevel = 'standard_modern'
  emit('update:modelValue', props.modelValue)
}

const selectBudgetPriority = () => {
  props.modelValue.designLevel = 'basic_template'
  emit('update:modelValue', props.modelValue)
}

const selectQualityPriority = () => {
  props.modelValue.designLevel = 'custom_premium'
  emit('update:modelValue', props.modelValue)
}

const continueToNext = () => {
  if (props.modelValue.designLevel) {
    emit('next')
  }
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

/* Design Options */
.design-options {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
}

.design-option {
  background: rgba(255, 255, 255, 0.02);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.design-option:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--color-primary-purple);
  transform: translateY(-2px);
}

.design-option.selected {
  border-color: var(--color-secondary-teal);
  background: rgba(34, 252, 176, 0.05);
}

.design-input {
  display: none;
}

.design-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.design-header {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.design-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.design-text h4 {
  color: var(--color-text-primary);
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 8px 0;
}

.design-description {
  color: var(--color-text-muted);
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
}

/* Design Visual Preview */
.design-visual {
  display: flex;
  justify-content: center;
}

.visual-preview {
  width: 200px;
  height: 120px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
}

.preview-header {
  height: 20px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  padding: 0 8px;
}

.preview-dots {
  display: flex;
  gap: 4px;
}

.preview-dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
}

.preview-content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.preview-element {
  height: 12px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.1);
}

/* Design-specific preview styles */
.basic_template .preview-element {
  background: rgba(255, 255, 255, 0.1);
}

.standard_modern .preview-element {
  background: linear-gradient(90deg, rgba(127, 0, 253, 0.3), rgba(34, 252, 176, 0.3));
}

.custom_premium .preview-element {
  background: linear-gradient(90deg, rgba(127, 0, 253, 0.5), rgba(34, 252, 176, 0.5));
  box-shadow: 0 2px 8px rgba(127, 0, 253, 0.2);
}

.luxury .preview-element {
  background: linear-gradient(90deg, rgba(127, 0, 253, 0.7), rgba(34, 252, 176, 0.7));
  box-shadow: 0 4px 16px rgba(127, 0, 253, 0.4);
}

/* Design Details */
.design-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: center;
}

.detail-label {
  color: var(--color-text-muted);
  font-size: 12px;
  font-weight: 500;
}

.detail-value {
  color: var(--color-secondary-teal);
  font-size: 16px;
  font-weight: 600;
}

/* Design Benefits */
.design-benefits {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
}

.design-benefits h5 {
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 16px 0;
}

.design-benefits ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.design-benefits li {
  color: var(--color-text-muted);
  font-size: 14px;
  padding-left: 20px;
  position: relative;
}

.design-benefits li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-secondary-teal);
  font-weight: bold;
}

/* Design Comparison */
.design-comparison {
  background: rgba(127, 0, 253, 0.05);
  border: 1px solid rgba(127, 0, 253, 0.2);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 32px;
}

.comparison-title {
  color: var(--color-text-primary);
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 20px 0;
  text-align: center;
}

.comparison-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
}

.comparison-item h5 {
  color: var(--color-text-primary);
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
}

.comparison-bars {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.bar {
  height: 24px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  font-size: 10px;
  font-weight: 600;
  color: var(--color-white);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.bar.basic {
  background: rgba(255, 255, 255, 0.2);
}

.bar.standard {
  background: rgba(34, 252, 176, 0.3);
}

.bar.custom {
  background: rgba(127, 0, 253, 0.4);
}

.bar.luxury {
  background: rgba(255, 193, 7, 0.5);
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
  margin-bottom: 24px;
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

.help-examples h5 {
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 16px 0;
}

.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}

.example-item {
  padding: 12px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  color: var(--color-text-muted);
  font-size: 14px;
}

/* Decision Helper */
.decision-helper {
  background: rgba(34, 252, 176, 0.05);
  border: 1px solid rgba(34, 252, 176, 0.2);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
}

.decision-helper h4 {
  color: var(--color-text-primary);
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 20px 0;
}

.helper-questions {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.helper-question p {
  color: var(--color-text-muted);
  font-size: 16px;
  margin: 0 0 16px 0;
}

.helper-options {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.helper-btn {
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-text-primary);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.helper-btn:hover {
  background: var(--color-secondary-teal);
  color: var(--color-black);
  border-color: var(--color-secondary-teal);
  transform: translateY(-2px);
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
  .design-header {
    flex-direction: column;
    text-align: center;
  }
  
  .design-details {
    grid-template-columns: 1fr;
  }
  
  .comparison-grid {
    grid-template-columns: 1fr;
  }
  
  .helper-options {
    flex-direction: column;
    align-items: center;
  }
  
  .help-tips {
    grid-template-columns: 1fr;
  }
  
  .examples-grid {
    grid-template-columns: 1fr;
  }
}
</style>
