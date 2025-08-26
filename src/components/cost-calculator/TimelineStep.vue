<template>
  <div class="step-component">
    <h3 class="step-title">How quickly do you need this project completed?</h3>
    
    <div class="timeline-options">
      <label 
        v-for="timeline in timelines" 
        :key="timeline.key"
        class="timeline-option"
        :class="{ selected: modelValue.timeline === timeline.key }"
      >
        <input 
          type="radio" 
          :value="timeline.key" 
          :name="'timeline'" 
          v-model="modelValue.timeline"
          class="timeline-input"
          @change="onSelectionChange"
        >
        
        <div class="timeline-content">
          <div class="timeline-header">
            <div class="timeline-icon">{{ getTimelineIcon(timeline.key) }}</div>
            <div class="timeline-text">
              <h4>{{ timeline.label }}</h4>
              <p class="timeline-description">{{ getTimelineDescription(timeline.key) }}</p>
            </div>
          </div>
          
          <div class="timeline-visual">
            <div class="timeline-bar" :class="timeline.key">
              <div class="timeline-start">Start</div>
              <div class="timeline-duration">{{ getTimelineDuration(timeline.key) }}</div>
              <div class="timeline-end">Launch</div>
            </div>
          </div>
          
          <div class="timeline-details">
            <div class="detail-item">
              <span class="detail-label">Cost Impact:</span>
              <span class="detail-value">{{ timeline.factor }}x</span>
            </div>
            
            <div class="detail-item">
              <span class="detail-label">Team Size:</span>
              <span class="detail-value">{{ getTeamSizeText(timeline.key) }}</span>
            </div>
            
            <div class="detail-item">
              <span class="detail-label">Quality Risk:</span>
              <span class="detail-value" :class="getRiskClass(timeline.key)">{{ getRiskText(timeline.key) }}</span>
            </div>
          </div>
          
          <div class="timeline-benefits">
            <h5>What this means:</h5>
            <ul>
              <li v-for="benefit in getTimelineBenefits(timeline.key)" :key="benefit">{{ benefit }}</li>
            </ul>
          </div>
        </div>
      </label>
    </div>
    
    <!-- Timeline Impact Calculator -->
    <div class="timeline-impact">
      <h4 class="impact-title">⏱️ Timeline Impact Calculator</h4>
      <div class="impact-calculator">
        <div class="calculator-inputs">
          <div class="input-group">
            <label>Your preferred timeline:</label>
            <select v-model="preferredTimeline" class="timeline-select">
              <option value="relaxed">Relaxed (> 3 months)</option>
              <option value="standard">Standard (2-3 months)</option>
              <option value="urgent">Urgent (~ 1 month)</option>
              <option value="very_urgent">Very Urgent (< 2 weeks)</option>
            </select>
          </div>
          
          <div class="input-group">
            <label>Your budget flexibility:</label>
            <select v-model="budgetFlexibility" class="budget-select">
              <option value="tight">Tight budget</option>
              <option value="moderate">Moderate flexibility</option>
              <option value="flexible">Flexible budget</option>
            </select>
          </div>
        </div>
        
        <div class="calculator-result">
          <div class="result-header">
            <h5>Recommended Approach:</h5>
          </div>
          <div class="result-content">
            <div class="recommendation">
              <span class="rec-icon">{{ getRecommendationIcon() }}</span>
              <span class="rec-text">{{ getRecommendationText() }}</span>
            </div>
            <div class="cost-impact">
              <span class="impact-label">Cost Impact:</span>
              <span class="impact-value">{{ getCostImpact() }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Timeline Comparison -->
    <div class="timeline-comparison">
      <h4 class="comparison-title">📊 Timeline Comparison</h4>
      <div class="comparison-chart">
        <div class="chart-header">
          <span>Timeline</span>
          <span>Cost</span>
          <span>Quality</span>
          <span>Risk</span>
        </div>
        <div class="chart-rows">
          <div class="chart-row" v-for="timeline in timelines" :key="timeline.key">
            <span class="row-label">{{ timeline.label }}</span>
            <div class="row-bar cost" :style="{ width: getCostBarWidth(timeline.factor) }">
              {{ (timeline.factor * 100).toFixed(0) }}%
            </div>
            <div class="row-bar quality" :style="{ width: getQualityBarWidth(timeline.key) }">
              {{ getQualityPercentage(timeline.key) }}%
            </div>
            <div class="row-bar risk" :style="{ width: getRiskBarWidth(timeline.key) }">
              {{ getRiskPercentage(timeline.key) }}%
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Help Section -->
    <div class="help-section">
      <div class="help-toggle" @click="showHelp = !showHelp">
        <span>💡 How does timeline affect my project?</span>
        <span class="help-arrow" :class="{ expanded: showHelp }">▼</span>
      </div>
      
      <div v-if="showHelp" class="help-content">
        <div class="help-tips">
          <div class="help-tip">
            <h5>🚀 Faster = More Expensive</h5>
            <p>Rushing a project requires more developers, overtime work, and can increase costs by 30-70%.</p>
          </div>
          
          <div class="help-tip">
            <h5>⚖️ Quality vs. Speed</h5>
            <p>Very tight timelines often mean cutting corners, which can affect user experience and long-term maintenance.</p>
          </div>
          
          <div class="help-tip">
            <h5>👥 Team Scaling</h5>
            <p>Adding more developers doesn't always make things faster due to coordination overhead and communication costs.</p>
          </div>
          
          <div class="help-tip">
            <h5>🎯 Sweet Spot</h5>
            <p>The 2-3 month timeline usually offers the best balance of cost, quality, and speed for most projects.</p>
          </div>
        </div>
        
        <div class="help-scenarios">
          <h5>Real Scenarios:</h5>
          <div class="scenarios-grid">
            <div class="scenario-item">
              <strong>Startup Launch:</strong> Often choose urgent timelines to beat competitors, but should budget accordingly.
            </div>
            <div class="scenario-item">
              <strong>Enterprise Project:</strong> Usually prefer relaxed timelines for thorough planning and quality assurance.
            </div>
            <div class="scenario-item">
              <strong>Seasonal Business:</strong> May need urgent timelines to hit specific market windows.
            </div>
            <div class="scenario-item">
              <strong>MVP Development:</strong> Standard timeline allows for iteration and user feedback integration.
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
          <p><strong>What's driving your timeline?</strong></p>
          <div class="helper-options">
            <button @click="selectBusinessDeadline" class="helper-btn">Business deadline</button>
            <button @click="selectBudgetConstraint" class="helper-btn">Budget constraint</button>
            <button @click="selectCompetitivePressure" class="helper-btn">Competitive pressure</button>
          </div>
        </div>
        
        <div class="helper-question">
          <p><strong>What's most important to you?</strong></p>
          <div class="helper-options">
            <button @click="selectSpeedPriority" class="helper-btn">Speed</button>
            <button @click="selectQualityPriority" class="helper-btn">Quality</button>
            <button @click="selectCostPriority" class="helper-btn">Cost</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { timelines, type Questionnaire } from '@/utils/cost_calculation.algorythm'

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
const preferredTimeline = ref('standard')
const budgetFlexibility = ref('moderate')

// Timeline data with enhanced information
const timelineData = {
  relaxed: {
    icon: '🐌',
    description: 'Comfortable timeline with room for thorough planning, testing, and refinement.',
    duration: '3+ months',
    teamSize: 'Standard team',
    risk: 'Low',
    benefits: [
      'Best quality outcome',
      'Thorough testing',
      'Room for iteration',
      'Lower stress levels'
    ]
  },
  standard: {
    icon: '⚡',
    description: 'Balanced timeline that allows for quality work while maintaining reasonable costs.',
    duration: '2-3 months',
    teamSize: 'Standard team',
    risk: 'Low',
    benefits: [
      'Good quality',
      'Reasonable cost',
      'Adequate testing',
      'Industry standard'
    ]
  },
  urgent: {
    icon: '🏃',
    description: 'Accelerated timeline requiring additional resources and potential overtime.',
    duration: '~1 month',
    teamSize: 'Larger team',
    risk: 'Medium',
    benefits: [
      'Faster delivery',
      'Competitive advantage',
      'Quick market entry',
      'Flexible scope'
    ]
  },
  very_urgent: {
    icon: '🚀',
    description: 'Extremely fast timeline with maximum resource allocation and premium pricing.',
    duration: '< 2 weeks',
    teamSize: 'Maximum team',
    risk: 'High',
    benefits: [
      'Fastest delivery',
      'Maximum priority',
      'Premium service',
      'Urgent needs met'
    ]
  }
}

// Helper functions
const getTimelineIcon = (key: string) => {
  return timelineData[key as keyof typeof timelineData]?.icon || '⏰'
}

const getTimelineDescription = (key: string) => {
  return timelineData[key as keyof typeof timelineData]?.description || 'Timeline description'
}

const getTimelineDuration = (key: string) => {
  return timelineData[key as keyof typeof timelineData]?.duration || 'Unknown'
}

const getTeamSizeText = (key: string) => {
  return timelineData[key as keyof typeof timelineData]?.teamSize || 'Standard'
}

const getRiskClass = (key: string) => {
  const risk = timelineData[key as keyof typeof timelineData]?.risk || 'Low'
  if (risk === 'Low') return 'low'
  if (risk === 'Medium') return 'medium'
  return 'high'
}

const getRiskText = (key: string) => {
  return timelineData[key as keyof typeof timelineData]?.risk || 'Unknown'
}

const getTimelineBenefits = (key: string) => {
  return timelineData[key as keyof typeof timelineData]?.benefits || ['Professional delivery']
}

// Calculator functions
const getRecommendationIcon = () => {
  if (preferredTimeline.value === 'very_urgent') return '⚠️'
  if (preferredTimeline.value === 'urgent') return '⚡'
  if (preferredTimeline.value === 'standard') return '✅'
  return '🐌'
}

const getRecommendationText = () => {
  if (preferredTimeline.value === 'very_urgent') {
    return 'Consider if this timeline is absolutely necessary - costs will be significantly higher'
  }
  if (preferredTimeline.value === 'urgent') {
    return 'Good choice for competitive projects, but expect 30-50% cost increase'
  }
  if (preferredTimeline.value === 'standard') {
    return 'Excellent choice! Best balance of cost, quality, and speed'
  }
  return 'Great for quality-focused projects with flexible deadlines'
}

const getCostImpact = () => {
  const timeline = timelines[preferredTimeline.value as keyof typeof timelines]
  return timeline ? `${(timeline.factor * 100).toFixed(0)}% of base cost` : 'Unknown'
}

// Chart functions
const getCostBarWidth = (factor: number) => {
  return `${Math.min(factor * 100, 100)}%`
}

const getQualityBarWidth = (key: string) => {
  const qualityMap = { relaxed: 100, standard: 90, urgent: 75, very_urgent: 60 }
  return `${qualityMap[key as keyof typeof qualityMap] || 80}%`
}

const getQualityPercentage = (key: string) => {
  const qualityMap = { relaxed: 100, standard: 90, urgent: 75, very_urgent: 60 }
  return qualityMap[key as keyof typeof qualityMap] || 80
}

const getRiskBarWidth = (key: string) => {
  const riskMap = { relaxed: 20, standard: 30, urgent: 60, very_urgent: 90 }
  return `${riskMap[key as keyof typeof riskMap] || 50}%`
}

const getRiskPercentage = (key: string) => {
  const riskMap = { relaxed: 20, standard: 30, urgent: 60, very_urgent: 90 }
  return riskMap[key as keyof typeof riskMap] || 50
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
const selectBusinessDeadline = () => {
  props.modelValue.timeline = 'urgent'
  emit('update:modelValue', props.modelValue)
  setTimeout(() => emit('next'), 500)
}

const selectBudgetConstraint = () => {
  props.modelValue.timeline = 'standard'
  emit('update:modelValue', props.modelValue)
  setTimeout(() => emit('next'), 500)
}

const selectCompetitivePressure = () => {
  props.modelValue.timeline = 'urgent'
  emit('update:modelValue', props.modelValue)
  setTimeout(() => emit('next'), 500)
}

const selectSpeedPriority = () => {
  props.modelValue.timeline = 'urgent'
  emit('update:modelValue', props.modelValue)
  setTimeout(() => emit('next'), 500)
}

const selectQualityPriority = () => {
  props.modelValue.timeline = 'standard'
  emit('update:modelValue', props.modelValue)
  setTimeout(() => emit('next'), 500)
}

const selectCostPriority = () => {
  props.modelValue.timeline = 'relaxed'
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

/* Timeline Options */
.timeline-options {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
}

.timeline-option {
  background: rgba(255, 255, 255, 0.02);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.timeline-option:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--color-primary-purple);
  transform: translateY(-2px);
}

.timeline-option.selected {
  border-color: var(--color-secondary-teal);
  background: rgba(34, 252, 176, 0.05);
}

.timeline-input {
  display: none;
}

.timeline-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.timeline-header {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.timeline-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.timeline-text h4 {
  color: var(--color-text-primary);
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 8px 0;
}

.timeline-description {
  color: var(--color-text-muted);
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
}

/* Timeline Visual */
.timeline-visual {
  display: flex;
  justify-content: center;
}

.timeline-bar {
  width: 100%;
  height: 60px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: relative;
  overflow: hidden;
}

.timeline-bar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, var(--color-secondary-teal), var(--color-primary-purple));
  opacity: 0.1;
  border-radius: 30px;
}

.timeline-start,
.timeline-end {
  color: var(--color-text-primary);
  font-size: 12px;
  font-weight: 600;
  z-index: 1;
}

.timeline-duration {
  color: var(--color-secondary-teal);
  font-size: 14px;
  font-weight: 700;
  z-index: 1;
}

/* Timeline-specific styles */
.timeline-bar.relaxed::before {
  background: linear-gradient(90deg, var(--color-secondary-teal), var(--color-secondary-teal));
}

.timeline-bar.standard::before {
  background: linear-gradient(90deg, var(--color-secondary-teal), var(--color-primary-purple));
}

.timeline-bar.urgent::before {
  background: linear-gradient(90deg, var(--color-primary-purple), #FFC107);
}

.timeline-bar.very_urgent::before {
  background: linear-gradient(90deg, #FFC107, #FF6B6B);
}

/* Timeline Details */
.timeline-details {
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

.detail-value.low {
  color: var(--color-secondary-teal);
}

.detail-value.medium {
  color: #FFC107;
}

.detail-value.high {
  color: #FF6B6B;
}

/* Timeline Benefits */
.timeline-benefits {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
}

.timeline-benefits h5 {
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 16px 0;
}

.timeline-benefits ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.timeline-benefits li {
  color: var(--color-text-muted);
  font-size: 14px;
  padding-left: 20px;
  position: relative;
}

.timeline-benefits li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-secondary-teal);
  font-weight: bold;
}

/* Timeline Impact Calculator */
.timeline-impact {
  background: rgba(127, 0, 253, 0.05);
  border: 1px solid rgba(127, 0, 253, 0.2);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 32px;
}

.impact-title {
  color: var(--color-text-primary);
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 20px 0;
  text-align: center;
}

.impact-calculator {
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

.timeline-select,
.budget-select {
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

.cost-impact {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: rgba(34, 252, 176, 0.1);
  border-radius: 8px;
}

.impact-label {
  color: var(--color-text-muted);
  font-size: 14px;
}

.impact-value {
  color: var(--color-secondary-teal);
  font-size: 16px;
  font-weight: 600;
}

/* Timeline Comparison Chart */
.timeline-comparison {
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

.comparison-chart {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
}

.chart-header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.1);
  font-weight: 600;
  color: var(--color-text-primary);
  font-size: 14px;
}

.chart-rows {
  display: flex;
  flex-direction: column;
}

.chart-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;
  padding: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  align-items: center;
}

.chart-row:last-child {
  border-bottom: none;
}

.row-label {
  color: var(--color-text-primary);
  font-size: 14px;
  font-weight: 500;
}

.row-bar {
  height: 24px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  color: var(--color-white);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  min-width: 60px;
}

.row-bar.cost {
  background: var(--color-secondary-teal);
}

.row-bar.quality {
  background: var(--color-primary-purple);
}

.row-bar.risk {
  background: #FF6B6B;
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
  .timeline-header {
    flex-direction: column;
    text-align: center;
  }
  
  .timeline-details {
    grid-template-columns: 1fr;
  }
  
  .impact-calculator {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .chart-header,
  .chart-row {
    grid-template-columns: 1fr;
    gap: 8px;
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
