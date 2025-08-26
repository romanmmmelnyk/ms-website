<template>
  <div class="step-component">
    <h3 class="step-title">What kind of team do you want working on your project?</h3>
    
    <div class="team-options">
      <label 
        v-for="team in teams" 
        :key="team.key"
        class="team-option"
        :class="{ selected: modelValue.team === team.key }"
      >
        <input 
          type="radio" 
          :value="team.key" 
          :name="'team'" 
          v-model="modelValue.team"
          class="team-input"
          @change="onSelectionChange"
        >
        
        <div class="team-content">
          <div class="team-header">
            <div class="team-icon">{{ getTeamIcon(team.key) }}</div>
            <div class="team-text">
              <h4>{{ team.label }}</h4>
              <p class="team-description">{{ getTeamDescription(team.key) }}</p>
            </div>
          </div>
          
          <div class="team-visual">
            <div class="team-composition">
              <div 
                v-for="member in getTeamMembers(team.key)" 
                :key="member.role"
                class="team-member"
                :class="member.type"
              >
                <div class="member-avatar">{{ member.avatar }}</div>
                <span class="member-role">{{ member.role }}</span>
              </div>
            </div>
          </div>
          
          <div class="team-details">
            <div class="detail-item">
              <span class="detail-label">Cost Impact:</span>
              <span class="detail-value">{{ team.factor }}x</span>
            </div>
            
            <div class="detail-item">
              <span class="detail-label">Development Speed:</span>
              <span class="detail-value">{{ getSpeedText(team.key) }}</span>
            </div>
            
            <div class="detail-item">
              <span class="detail-label">Communication:</span>
              <span class="detail-value" :class="getCommunicationClass(team.key)">{{ getCommunicationText(team.key) }}</span>
            </div>
          </div>
          
          <div class="team-benefits">
            <h5>What this means:</h5>
            <ul>
              <li v-for="benefit in getTeamBenefits(team.key)" :key="benefit">{{ benefit }}</li>
            </ul>
          </div>
        </div>
      </label>
    </div>
    
    <!-- Team Size Calculator -->
    <div class="team-calculator">
      <h4 class="calculator-title">👥 Team Size Calculator</h4>
      <div class="calculator-content">
        <div class="calculator-inputs">
          <div class="input-group">
            <label>Project complexity:</label>
            <select v-model="projectComplexity" class="complexity-select">
              <option value="simple">Simple (landing page, basic site)</option>
              <option value="moderate">Moderate (business app, e-commerce)</option>
              <option value="complex">Complex (SaaS platform, marketplace)</option>
              <option value="very_complex">Very Complex (enterprise system)</option>
            </select>
          </div>
          
          <div class="input-group">
            <label>Your timeline preference:</label>
            <select v-model="timelinePreference" class="timeline-select">
              <option value="relaxed">Relaxed (3+ months)</option>
              <option value="standard">Standard (2-3 months)</option>
              <option value="urgent">Urgent (1 month)</option>
              <option value="very_urgent">Very Urgent (< 2 weeks)</option>
            </select>
          </div>
        </div>
        
        <div class="calculator-result">
          <div class="result-header">
            <h5>Recommended Team:</h5>
          </div>
          <div class="result-content">
            <div class="recommendation">
              <span class="rec-icon">{{ getRecommendationIcon() }}</span>
              <span class="rec-text">{{ getRecommendationText() }}</span>
            </div>
            <div class="team-breakdown">
              <div class="breakdown-item" v-for="member in getRecommendedTeam()" :key="member.role">
                <span class="member-name">{{ member.role }}</span>
                <span class="member-count">{{ member.count }}x</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Team Comparison -->
    <div class="team-comparison">
      <h4 class="comparison-title">📊 Team Comparison</h4>
      <div class="comparison-grid">
        <div class="comparison-item">
          <h5>💰 Cost Efficiency</h5>
          <div class="comparison-bars">
            <div class="bar solo" style="width: 100%">Solo</div>
            <div class="bar small" style="width: 70%">Small</div>
            <div class="bar full" style="width: 100%">Full</div>
          </div>
        </div>
        
        <div class="comparison-item">
          <h5>⚡ Development Speed</h5>
          <div class="comparison-bars">
            <div class="bar solo" style="width: 40%">Solo</div>
            <div class="bar small" style="width: 70%">Small</div>
            <div class="bar full" style="width: 100%">Full</div>
          </div>
        </div>
        
        <div class="comparison-item">
          <h5>🎯 Quality Assurance</h5>
          <div class="comparison-bars">
            <div class="bar solo" style="width: 60%">Solo</div>
            <div class="bar small" style="width: 80%">Small</div>
            <div class="bar full" style="width: 100%">Full</div>
          </div>
        </div>
        
        <div class="comparison-item">
          <h5>🔄 Maintenance</h5>
          <div class="comparison-bars">
            <div class="bar solo" style="width: 50%">Solo</div>
            <div class="bar small" style="width: 75%">Small</div>
            <div class="bar full" style="width: 100%">Full</div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Help Section -->
    <div class="help-section">
      <div class="help-toggle" @click="showHelp = !showHelp">
        <span>💡 How do I choose the right team size?</span>
        <span class="help-arrow" :class="{ expanded: showHelp }">▼</span>
      </div>
      
      <div v-if="showHelp" class="help-content">
        <div class="help-tips">
          <div class="help-tip">
            <h5>👤 Solo Developer</h5>
            <p>Perfect for simple projects, MVPs, and when you have a tight budget. Expect longer development time but lower cost.</p>
          </div>
          
          <div class="help-tip">
            <h5>👥 Small Team</h5>
            <p>Ideal for most business projects. Good balance of cost, speed, and quality. Includes developer, designer, and project manager.</p>
          </div>
          
          <div class="help-tip">
            <h5>🏢 Full Team</h5>
            <p>Best for complex projects requiring multiple specialists. Fastest delivery but highest cost. Includes all roles plus QA and DevOps.</p>
          </div>
        </div>
        
        <div class="help-scenarios">
          <h5>Real Examples:</h5>
          <div class="scenarios-grid">
            <div class="scenario-item">
              <strong>Startup MVP:</strong> Solo developer or small team for cost efficiency and quick validation.
            </div>
            <div class="scenario-item">
              <strong>Business Website:</strong> Small team for professional quality and reasonable timeline.
            </div>
            <div class="scenario-item">
              <strong>Enterprise Platform:</strong> Full team for comprehensive development and quality assurance.
            </div>
            <div class="scenario-item">
              <strong>E-commerce Site:</strong> Small to full team depending on complexity and timeline requirements.
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
          <p><strong>What's your budget priority?</strong></p>
          <div class="helper-options">
            <button @click="selectBudgetPriority" class="helper-btn">Save money</button>
            <button @click="selectBalancedApproach" class="helper-btn">Balanced</button>
            <button @click="selectQualityPriority" class="helper-btn">Best quality</button>
          </div>
        </div>
        
        <div class="helper-question">
          <p><strong>How complex is your project?</strong></p>
          <div class="helper-options">
            <button @click="selectSimpleProject" class="helper-btn">Simple</button>
            <button @click="selectModerateProject" class="helper-btn">Moderate</button>
            <button @click="selectComplexProject" class="helper-btn">Complex</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { teams, type Questionnaire } from '@/utils/cost_calculation.algorythm'

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
const projectComplexity = ref('moderate')
const timelinePreference = ref('standard')

// Team data with enhanced information
const teamData = {
  solo: {
    icon: '👤',
    description: 'Single developer handling all aspects of the project from design to deployment.',
    members: [
      { role: 'Full-Stack Developer', avatar: '👨‍💻', type: 'developer' }
    ],
    speed: 'Slow',
    communication: 'Simple',
    benefits: [
      'Lowest cost',
      'Direct communication',
      'Full control',
      'No coordination overhead'
    ]
  },
  small: {
    icon: '👥',
    description: 'Small team with 2-3 specialists covering key development areas.',
    members: [
      { role: 'Developer', avatar: '👨‍💻', type: 'developer' },
      { role: 'Designer', avatar: '🎨', type: 'designer' },
      { role: 'Project Manager', avatar: '📋', type: 'manager' }
    ],
    speed: 'Medium',
    communication: 'Good',
    benefits: [
      'Good cost balance',
      'Specialized skills',
      'Faster than solo',
      'Professional quality'
    ]
  },
  full: {
    icon: '🏢',
    description: 'Complete team with specialists for every aspect of development.',
    members: [
      { role: 'Frontend Developer', avatar: '💻', type: 'developer' },
      { role: 'Backend Developer', avatar: '⚙️', type: 'developer' },
      { role: 'UI/UX Designer', avatar: '🎨', type: 'designer' },
      { role: 'Project Manager', avatar: '📋', type: 'manager' },
      { role: 'QA Engineer', avatar: '🔍', type: 'qa' },
      { role: 'DevOps Engineer', avatar: '🚀', type: 'devops' }
    ],
    speed: 'Fast',
    communication: 'Complex',
    benefits: [
      'Fastest delivery',
      'Highest quality',
      'Comprehensive coverage',
      'Scalable approach'
    ]
  }
}

// Helper functions
const getTeamIcon = (key: string) => {
  return teamData[key as keyof typeof teamData]?.icon || '👥'
}

const getTeamDescription = (key: string) => {
  return teamData[key as keyof typeof teamData]?.description || 'Team description'
}

const getTeamMembers = (key: string) => {
  return teamData[key as keyof typeof teamData]?.members || []
}

const getSpeedText = (key: string) => {
  return teamData[key as keyof typeof teamData]?.speed || 'Unknown'
}

const getCommunicationClass = (key: string) => {
  const communication = teamData[key as keyof typeof teamData]?.communication || 'Simple'
  if (communication === 'Simple') return 'simple'
  if (communication === 'Good') return 'good'
  return 'complex'
}

const getCommunicationText = (key: string) => {
  return teamData[key as keyof typeof teamData]?.communication || 'Unknown'
}

const getTeamBenefits = (key: string) => {
  return teamData[key as keyof typeof teamData]?.benefits || ['Professional delivery']
}

// Calculator functions
const getRecommendationIcon = () => {
  if (projectComplexity.value === 'very_complex' || timelinePreference.value === 'very_urgent') return '🏢'
  if (projectComplexity.value === 'complex' || timelinePreference.value === 'urgent') return '👥'
  return '👤'
}

const getRecommendationText = () => {
  if (projectComplexity.value === 'very_complex' || timelinePreference.value === 'very_urgent') {
    return 'Full team recommended for complex requirements and tight timeline'
  }
  if (projectComplexity.value === 'complex' || timelinePreference.value === 'urgent') {
    return 'Small team recommended for moderate complexity and standard timeline'
  }
  return 'Solo developer sufficient for simple projects with relaxed timeline'
}

const getRecommendedTeam = () => {
  if (projectComplexity.value === 'very_complex' || timelinePreference.value === 'very_urgent') {
    return [
      { role: 'Frontend Dev', count: 1 },
      { role: 'Backend Dev', count: 1 },
      { role: 'Designer', count: 1 },
      { role: 'Project Manager', count: 1 },
      { role: 'QA Engineer', count: 1 }
    ]
  }
  if (projectComplexity.value === 'complex' || timelinePreference.value === 'urgent') {
    return [
      { role: 'Developer', count: 1 },
      { role: 'Designer', count: 1 },
      { role: 'Project Manager', count: 1 }
    ]
  }
  return [
    { role: 'Full-Stack Developer', count: 1 }
  ]
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
const selectBudgetPriority = () => {
  props.modelValue.team = 'solo'
  emit('update:modelValue', props.modelValue)
  setTimeout(() => emit('next'), 500)
}

const selectBalancedApproach = () => {
  props.modelValue.team = 'small'
  emit('update:modelValue', props.modelValue)
  setTimeout(() => emit('next'), 500)
}

const selectQualityPriority = () => {
  props.modelValue.team = 'full'
  emit('update:modelValue', props.modelValue)
  setTimeout(() => emit('next'), 500)
}

const selectSimpleProject = () => {
  props.modelValue.team = 'solo'
  emit('update:modelValue', props.modelValue)
  setTimeout(() => emit('next'), 500)
}

const selectModerateProject = () => {
  props.modelValue.team = 'small'
  emit('update:modelValue', props.modelValue)
  setTimeout(() => emit('next'), 500)
}

const selectComplexProject = () => {
  props.modelValue.team = 'full'
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

/* Team Options */
.team-options {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
}

.team-option {
  background: rgba(255, 255, 255, 0.02);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.team-option:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--color-primary-purple);
  transform: translateY(-2px);
}

.team-option.selected {
  border-color: var(--color-secondary-teal);
  background: rgba(34, 252, 176, 0.05);
}

.team-input {
  display: none;
}

.team-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.team-header {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.team-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.team-text h4 {
  color: var(--color-text-primary);
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 8px 0;
}

.team-description {
  color: var(--color-text-muted);
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
}

/* Team Visual */
.team-visual {
  display: flex;
  justify-content: center;
}

.team-composition {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}

.team-member {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  min-width: 80px;
}

.member-avatar {
  font-size: 24px;
}

.member-role {
  color: var(--color-text-primary);
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  line-height: 1.2;
}

/* Team member types */
.team-member.developer {
  border: 2px solid var(--color-primary-purple);
}

.team-member.designer {
  border: 2px solid var(--color-secondary-teal);
}

.team-member.manager {
  border: 2px solid #FFC107;
}

.team-member.qa {
  border: 2px solid #FF6B6B;
}

.team-member.devops {
  border: 2px solid #6C5CE7;
}

/* Team Details */
.team-details {
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

.detail-value.simple {
  color: var(--color-secondary-teal);
}

.detail-value.good {
  color: #FFC107;
}

.detail-value.complex {
  color: #FF6B6B;
}

/* Team Benefits */
.team-benefits {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
}

.team-benefits h5 {
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 16px 0;
}

.team-benefits ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.team-benefits li {
  color: var(--color-text-muted);
  font-size: 14px;
  padding-left: 20px;
  position: relative;
}

.team-benefits li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-secondary-teal);
  font-weight: bold;
}

/* Team Calculator */
.team-calculator {
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

.complexity-select,
.timeline-select {
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

.team-breakdown {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.breakdown-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: rgba(34, 252, 176, 0.1);
  border-radius: 6px;
}

.member-name {
  color: var(--color-text-primary);
  font-size: 14px;
}

.member-count {
  color: var(--color-secondary-teal);
  font-size: 14px;
  font-weight: 600;
}

/* Team Comparison */
.team-comparison {
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

.bar.solo {
  background: rgba(255, 255, 255, 0.2);
}

.bar.small {
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
  .team-header {
    flex-direction: column;
    text-align: center;
  }
  
  .team-details {
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
