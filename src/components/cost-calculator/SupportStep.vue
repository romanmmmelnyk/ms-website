<template>
  <div class="step-component">
    <h3 class="step-title">What level of support and maintenance do you need?</h3>
    
    <div class="support-options">
      <label 
        v-for="plan in supportPlans" 
        :key="plan.key"
        class="support-option"
        :class="{ selected: modelValue.supportPlan === plan.key }"
      >
        <input 
          type="radio" 
          :value="plan.key" 
          :name="'supportPlan'" 
          v-model="modelValue.supportPlan"
          class="support-input"
          @change="onSelectionChange"
        >
        
        <div class="support-content">
          <div class="support-header">
            <div class="support-icon">{{ getSupportIcon(plan.key) }}</div>
            <div class="support-text">
              <h4>{{ plan.label }}</h4>
              <p class="support-description">{{ getSupportDescription(plan.key) }}</p>
            </div>
          </div>
          
          <div class="support-visual">
            <div class="support-timeline">
              <div class="timeline-start">Launch</div>
              <div class="timeline-period" :class="plan.key">{{ getSupportPeriod(plan.key) }}</div>
              <div class="timeline-end">Support Ends</div>
            </div>
          </div>
          
          <div class="support-details">
            <div class="detail-item">
              <span class="detail-label">Cost Impact:</span>
              <span class="detail-value">{{ plan.factor }}x</span>
            </div>
            
            <div class="detail-item">
              <span class="detail-label">Support Duration:</span>
              <span class="detail-value">{{ getSupportDuration(plan.key) }}</span>
            </div>
            
            <div class="detail-item">
              <span class="detail-label">Response Time:</span>
              <span class="detail-value" :class="getResponseClass(plan.key)">{{ getResponseTime(plan.key) }}</span>
            </div>
          </div>
          
          <div class="support-benefits">
            <h5>What's included:</h5>
            <ul>
              <li v-for="benefit in getSupportBenefits(plan.key)" :key="benefit">{{ benefit }}</li>
            </ul>
          </div>
        </div>
      </label>
    </div>
    
    <!-- Support Calculator -->
    <div class="support-calculator">
      <h4 class="calculator-title">🛠️ Support Plan Calculator</h4>
      <div class="calculator-content">
        <div class="calculator-inputs">
          <div class="input-group">
            <label>Your technical expertise:</label>
            <select v-model="technicalExpertise" class="expertise-select">
              <option value="none">No technical knowledge</option>
              <option value="basic">Basic technical knowledge</option>
              <option value="intermediate">Intermediate technical knowledge</option>
              <option value="advanced">Advanced technical knowledge</option>
            </select>
          </div>
          
          <div class="input-group">
            <label>Expected user traffic:</label>
            <select v-model="userTraffic" class="traffic-select">
              <option value="low">Low (< 1,000 users/month)</option>
              <option value="medium">Medium (1,000-10,000 users/month)</option>
              <option value="high">High (10,000+ users/month)</option>
            </select>
          </div>
        </div>
        
        <div class="calculator-result">
          <div class="result-header">
            <h5>Recommended Support:</h5>
          </div>
          <div class="result-content">
            <div class="recommendation">
              <span class="rec-icon">{{ getRecommendationIcon() }}</span>
              <span class="rec-text">{{ getRecommendationText() }}</span>
            </div>
            <div class="support-reasons">
              <div class="reason-item" v-for="reason in getSupportReasons()" :key="reason">
                <span class="reason-icon">💡</span>
                <span class="reason-text">{{ reason }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Support Comparison -->
    <div class="support-comparison">
      <h4 class="comparison-title">📊 Support Plan Comparison</h4>
      <div class="comparison-grid">
        <div class="comparison-item">
          <h5>🔧 Bug Fixes</h5>
          <div class="comparison-bars">
            <div class="bar none" style="width: 30%">None</div>
            <div class="bar basic" style="width: 60%">Basic</div>
            <div class="bar standard" style="width: 80%">Standard</div>
            <div class="bar full" style="width: 100%">Full</div>
          </div>
        </div>
        
        <div class="comparison-item">
          <h5>📱 Updates</h5>
          <div class="comparison-bars">
            <div class="bar none" style="width: 20%">None</div>
            <div class="bar basic" style="width: 50%">Basic</div>
            <div class="bar standard" style="width: 80%">Standard</div>
            <div class="bar full" style="width: 100%">Full</div>
          </div>
        </div>
        
        <div class="comparison-item">
          <h5>📞 Help Desk</h5>
          <div class="comparison-bars">
            <div class="bar none" style="width: 0%">None</div>
            <div class="bar basic" style="width: 40%">Email</div>
            <div class="bar standard" style="width: 70%">Chat</div>
            <div class="bar full" style="width: 100%">Phone</div>
          </div>
        </div>
        
        <div class="comparison-item">
          <h5>📚 Training</h5>
          <div class="comparison-bars">
            <div class="bar none" style="width: 0%">None</div>
            <div class="bar basic" style="width: 30%">Basic</div>
            <div class="bar standard" style="width: 60%">Standard</div>
            <div class="bar full" style="width: 100%">Full</div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Help Section -->
    <div class="help-section">
      <div class="help-toggle" @click="showHelp = !showHelp">
        <span>💡 Why do I need support and maintenance?</span>
        <span class="help-arrow" :class="{ expanded: showHelp }">▼</span>
      </div>
      
      <div v-if="showHelp" class="help-content">
        <div class="help-tips">
          <div class="help-tip">
            <h5>🐛 Bugs Happen</h5>
            <p>Even the best code has bugs. Support ensures issues are fixed quickly to maintain user experience.</p>
          </div>
          
          <div class="help-tip">
            <h5>🔄 Technology Changes</h5>
            <p>Browsers, devices, and security requirements change. Regular updates keep your project current.</p>
          </div>
          
          <div class="help-tip">
            <h5>📈 Business Growth</h5>
            <p>As your business grows, your project needs to scale. Support helps with performance and feature updates.</p>
          </div>
          
          <div class="help-tip">
            <h5>🛡️ Security</h5>
            <p>Security threats evolve constantly. Regular updates and monitoring protect your users and data.</p>
          </div>
        </div>
        
        <div class="help-scenarios">
          <h5>Real Examples:</h5>
          <div class="scenarios-grid">
            <div class="scenario-item">
              <strong>E-commerce Site:</strong> Needs regular security updates and performance monitoring for high traffic.
            </div>
            <div class="scenario-item">
              <strong>Business App:</strong> Requires bug fixes and feature updates as business processes evolve.
            </div>
            <div class="scenario-item">
              <strong>Landing Page:</strong> Minimal support needed, mainly for occasional content updates.
            </div>
            <div class="scenario-item">
              <strong>SaaS Platform:</strong> Critical to have ongoing support for user management and system updates.
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Quick Decision Helper -->
    <div class="decision-helper">
      <h4>🤔 Need help choosing?</h4>
      <div class="helper-questions">
        <div class="helper-question">
          <p><strong>How critical is your project to business operations?</strong></p>
          <div class="helper-options">
            <button @click="selectLowCriticality" class="helper-btn">Not critical</button>
            <button @click="selectMediumCriticality" class="helper-btn">Somewhat critical</button>
            <button @click="selectHighCriticality" class="helper-btn">Very critical</button>
          </div>
        </div>
        
        <div class="helper-question">
          <p><strong>What's your budget for ongoing support?</strong></p>
          <div class="helper-options">
            <button @click="selectLowBudget" class="helper-btn">Minimal budget</button>
            <button @click="selectMediumBudget" class="helper-btn">Moderate budget</button>
            <button @click="selectHighBudget" class="helper-btn">Flexible budget</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { supportPlans, type Questionnaire } from '@/utils/cost_calculation.algorythm'

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
const technicalExpertise = ref('basic')
const userTraffic = ref('medium')

// Support plan data with enhanced information
const supportPlanData = {
  none: {
    icon: '❌',
    description: 'No ongoing support or maintenance after project completion.',
    period: '0 months',
    duration: 'No support',
    responseTime: 'N/A',
    benefits: [
      'Lowest cost',
      'Full control',
      'No dependencies',
      'Suitable for simple projects'
    ]
  },
  basic: {
    icon: '🔧',
    description: 'Basic bug fixes and essential updates for 1 month after launch.',
    period: '1 month',
    duration: '1 month',
    responseTime: '48 hours',
    benefits: [
      'Bug fixes',
      'Essential updates',
      'Email support',
      'Basic troubleshooting'
    ]
  },
  standard: {
    icon: '🛠️',
    description: 'Comprehensive support including updates, monitoring, and training for 3 months.',
    period: '3 months',
    duration: '3 months',
    responseTime: '24 hours',
    benefits: [
      'Bug fixes & updates',
      'Performance monitoring',
      'Chat support',
      'Basic training',
      'Security updates'
    ]
  },
  full: {
    icon: '🚀',
    description: 'Full support package with priority support, training, and ongoing development for 12 months.',
    period: '12 months',
    duration: '12 months',
    responseTime: '4 hours',
    benefits: [
      'Priority bug fixes',
      'Feature updates',
      'Phone support',
      'Comprehensive training',
      'Performance optimization',
      'Security monitoring',
      'Backup management'
    ]
  }
}

// Helper functions
const getSupportIcon = (key: string) => {
  return supportPlanData[key as keyof typeof supportPlanData]?.icon || '❓'
}

const getSupportDescription = (key: string) => {
  return supportPlanData[key as keyof typeof supportPlanData]?.description || 'Support description'
}

const getSupportPeriod = (key: string) => {
  return supportPlanData[key as keyof typeof supportPlanData]?.period || 'Unknown'
}

const getSupportDuration = (key: string) => {
  return supportPlanData[key as keyof typeof supportPlanData]?.duration || 'Unknown'
}

const getResponseClass = (key: string) => {
  const response = supportPlanData[key as keyof typeof supportPlanData]?.responseTime || 'N/A'
  if (response === 'N/A') return 'none'
  if (response === '48 hours') return 'slow'
  if (response === '24 hours') return 'medium'
  return 'fast'
}

const getResponseTime = (key: string) => {
  return supportPlanData[key as keyof typeof supportPlanData]?.responseTime || 'Unknown'
}

const getSupportBenefits = (key: string) => {
  return supportPlanData[key as keyof typeof supportPlanData]?.benefits || ['Basic support']
}

// Calculator functions
const getRecommendationIcon = () => {
  if (technicalExpertise.value === 'none' || userTraffic.value === 'high') return '🚀'
  if (technicalExpertise.value === 'basic' || userTraffic.value === 'medium') return '🛠️'
  return '🔧'
}

const getRecommendationText = () => {
  if (technicalExpertise.value === 'none' || userTraffic.value === 'high') {
    return 'Full support recommended for non-technical users or high-traffic projects'
  }
  if (technicalExpertise.value === 'basic' || userTraffic.value === 'medium') {
    return 'Standard support recommended for moderate technical expertise and traffic'
  }
  return 'Basic support sufficient for technical users with low-traffic projects'
}

const getSupportReasons = () => {
  const reasons = []
  
  if (technicalExpertise.value === 'none') {
    reasons.push('You have no technical knowledge - full support ensures smooth operation')
  }
  
  if (userTraffic.value === 'high') {
    reasons.push('High user traffic requires ongoing monitoring and quick issue resolution')
  }
  
  if (technicalExpertise.value === 'basic') {
    reasons.push('Basic technical knowledge benefits from regular support and training')
  }
  
  if (userTraffic.value === 'medium') {
    reasons.push('Medium traffic requires reliable support for business continuity')
  }
  
  return reasons
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
const selectLowCriticality = () => {
  props.modelValue.supportPlan = 'basic'
  emit('update:modelValue', props.modelValue)
  setTimeout(() => emit('next'), 500)
}

const selectMediumCriticality = () => {
  props.modelValue.supportPlan = 'standard'
  emit('update:modelValue', props.modelValue)
  setTimeout(() => emit('next'), 500)
}

const selectHighCriticality = () => {
  props.modelValue.supportPlan = 'full'
  emit('update:modelValue', props.modelValue)
  setTimeout(() => emit('next'), 500)
}

const selectLowBudget = () => {
  props.modelValue.supportPlan = 'none'
  emit('update:modelValue', props.modelValue)
  setTimeout(() => emit('next'), 500)
}

const selectMediumBudget = () => {
  props.modelValue.supportPlan = 'standard'
  emit('update:modelValue', props.modelValue)
  setTimeout(() => emit('next'), 500)
}

const selectHighBudget = () => {
  props.modelValue.supportPlan = 'full'
  emit('update:modelValue', props.modelValue)
  setTimeout(() => emit('next'), 500)
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

/* Support Options */
.support-options {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
}

.support-option {
  background: rgba(255, 255, 255, 0.02);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.support-option:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--color-primary-purple);
  transform: translateY(-2px);
}

.support-option.selected {
  border-color: var(--color-secondary-teal);
  background: rgba(34, 252, 176, 0.05);
}

.support-input {
  display: none;
}

.support-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.support-header {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.support-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.support-text h4 {
  color: var(--color-text-primary);
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 8px 0;
}

.support-description {
  color: var(--color-text-muted);
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
}

/* Support Visual */
.support-visual {
  display: flex;
  justify-content: center;
}

.support-timeline {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  min-width: 300px;
}

.timeline-start,
.timeline-end {
  color: var(--color-text-primary);
  font-size: 14px;
  font-weight: 600;
}

.timeline-period {
  flex: 1;
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Support period styles */
.timeline-period.none {
  background: rgba(255, 107, 107, 0.3);
  color: #FF6B6B;
}

.timeline-period.basic {
  background: rgba(255, 193, 7, 0.3);
  color: #FFC107;
}

.timeline-period.standard {
  background: rgba(34, 252, 176, 0.3);
  color: var(--color-secondary-teal);
}

.timeline-period.full {
  background: rgba(127, 0, 253, 0.3);
  color: var(--color-primary-purple);
}

/* Support Details */
.support-details {
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

.detail-value.none {
  color: #FF6B6B;
}

.detail-value.slow {
  color: #FFC107;
}

.detail-value.medium {
  color: var(--color-secondary-teal);
}

.detail-value.fast {
  color: var(--color-primary-purple);
}

/* Support Benefits */
.support-benefits {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
}

.support-benefits h5 {
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 16px 0;
}

.support-benefits ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.support-benefits li {
  color: var(--color-text-muted);
  font-size: 14px;
  padding-left: 20px;
  position: relative;
}

.support-benefits li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-secondary-teal);
  font-weight: bold;
}

/* Support Calculator */
.support-calculator {
  background: rgba(127, 0, 253, 0.05);
  border: 1px solid rgba(127, 0, 253, 0.2);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 32px;
}

.calculator-title {
  color: var(--color-text-primary);
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 20px 0;
  text-align: center;
}

.calculator-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: start;
}

.calculator-inputs {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-group label {
  color: var(--color-text-primary);
  font-size: 14px;
  font-weight: 500;
}

.expertise-select,
.traffic-select {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 12px 16px;
  color: var(--color-text-primary);
  font-size: 14px;
}

.calculator-result {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 20px;
}

.result-header h5 {
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 16px 0;
}

.result-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.recommendation {
  display: flex;
  align-items: center;
  gap: 12px;
}

.rec-icon {
  font-size: 24px;
}

.rec-text {
  color: var(--color-text-primary);
  font-size: 14px;
  line-height: 1.5;
}

.support-reasons {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.reason-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: rgba(34, 252, 176, 0.1);
  border-radius: 6px;
}

.reason-icon {
  font-size: 16px;
}

.reason-text {
  color: var(--color-text-primary);
  font-size: 13px;
}

/* Support Comparison */
.support-comparison {
  background: rgba(34, 252, 176, 0.05);
  border: 1px solid rgba(34, 252, 176, 0.2);
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

.bar.none {
  background: rgba(255, 107, 107, 0.3);
}

.bar.basic {
  background: rgba(255, 193, 7, 0.3);
}

.bar.standard {
  background: rgba(34, 252, 176, 0.3);
}

.bar.full {
  background: rgba(127, 0, 253, 0.4);
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

.help-scenarios h5 {
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 16px 0;
}

.scenarios-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}

.scenario-item {
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

/* Responsive Design */
@media (max-width: 768px) {
  .support-header {
    flex-direction: column;
    text-align: center;
  }
  
  .support-details {
    grid-template-columns: 1fr;
  }
  
  .calculator-content {
    grid-template-columns: 1fr;
    gap: 20px;
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
  
  .scenarios-grid {
    grid-template-columns: 1fr;
  }
}
</style>
