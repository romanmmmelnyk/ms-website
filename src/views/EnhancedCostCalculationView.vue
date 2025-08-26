<template>
  <div class="enhanced-calculator">
    <!-- Progress Bar -->
    <div class="progress-container">
      <div class="progress-bar">
        <div 
          class="progress-fill" 
          :style="{ width: `${(currentStep / totalSteps) * 100}%` }"
        ></div>
      </div>
      <div class="progress-text">
        Step {{ currentStep }} of {{ totalSteps }}
      </div>
    </div>
    
    <!-- Step Navigation -->
    <div class="step-navigation">
      <div 
        v-for="(step, index) in getActiveSteps" 
        :key="step.key"
        class="step-indicator"
        :class="{ 
          'completed': index < currentStep - 1,
          'current': index === currentStep - 1,
          'upcoming': index > currentStep - 1
        }"
        @click="goToStep(index + 1)"
      >
        <div class="step-number">
          <span v-if="index < currentStep - 1">✓</span>
          <span v-else>{{ index + 1 }}</span>
        </div>
        <span class="step-label">{{ step.label }}</span>
      </div>
    </div>
    
    <!-- Main Content Area -->
    <div class="calculator-content">
      <!-- Welcome Step -->
      <div v-if="currentStep === 1" class="welcome-step">
        <div class="welcome-content">
          <div class="welcome-header">
            <h1>🚀 Project Cost Calculator</h1>
            <p class="welcome-subtitle">
              Get an accurate estimate for your web development project in just a few steps
            </p>
          </div>
          
          <div class="welcome-features">
            <div class="feature-item">
              <span class="feature-icon">⚡</span>
              <div class="feature-content">
                <h3>Quick & Accurate</h3>
                <p>Get detailed estimates in minutes, not days</p>
              </div>
            </div>
            
            <div class="feature-item">
              <span class="feature-icon">🎯</span>
              <div class="feature-content">
                <h3>Smart Recommendations</h3>
                <p>AI-powered suggestions based on your needs</p>
              </div>
            </div>
            
            <div class="feature-item">
              <span class="feature-icon">💰</span>
              <div class="feature-content">
                <h3>Transparent Pricing</h3>
                <p>See exactly what affects your project cost</p>
              </div>
            </div>
            
            <div class="feature-item">
              <span class="feature-icon">📋</span>
              <div class="feature-content">
                <h3>Detailed Breakdown</h3>
                <p>Complete cost analysis and timeline</p>
              </div>
            </div>
          </div>
          
          <div class="welcome-actions">
            <button @click="startCalculator" class="btn btn-primary">
              Start Calculator
            </button>
            <button @click="loadSavedProject" class="btn btn-secondary">
              Load Saved Project
            </button>
          </div>
        </div>
      </div>
      
      <!-- Step Components -->
      <component
        v-else
        :is="getCurrentStepComponent()"
        :model-value="questionnaire"
        @update:model-value="updateQuestionnaire"
        @next="nextStep"
        @previous="previousStep"
        @skip="skipStep"
      />
    </div>
    
    <!-- Navigation Buttons -->
    <div v-if="currentStep > 1 && currentStep < totalSteps" class="navigation-buttons">
      <button @click="previousStep" class="btn btn-secondary">
        ← Previous
      </button>
      
      <div class="step-actions">
        <button @click="skipStep" class="btn btn-outline">
          Skip This Step
        </button>
        <button @click="nextStep" class="btn btn-primary" :disabled="!canProceed()">
          Next →
        </button>
      </div>
    </div>
    
    <!-- Final Actions -->
    <div v-if="currentStep === totalSteps" class="final-actions">
      <button @click="previousStep" class="btn btn-secondary">
        ← Back to Previous Step
      </button>
      
      <button @click="startOver" class="btn btn-outline">
        Start Over
      </button>
      
      <button @click="saveProject" class="btn btn-primary">
        💾 Save Project
      </button>
    </div>
    
    <!-- Floating Progress -->
    <div class="floating-progress">
      <div class="progress-circle">
        <svg viewBox="0 0 36 36" class="progress-ring">
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            stroke-width="2"
          />
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="var(--color-secondary-teal)"
            stroke-width="2"
            :stroke-dasharray="`${(currentStep / totalSteps) * 100}, 100`"
            stroke-linecap="round"
          />
        </svg>
        <span class="progress-percentage">{{ Math.round((currentStep / totalSteps) * 100) }}%</span>
      </div>
    </div>
    
    <!-- Smart Recommendations -->
    <div v-if="questionnaire.productType && getSmartRecommendations()" class="smart-recommendations">
      <div class="recommendations-header">
        <span class="recommendations-icon">💡</span>
        <span class="recommendations-title">Smart Recommendations</span>
      </div>
      <div class="recommendations-content">
        <div class="recommendation-item">
          <span class="recommendation-label">Design Level:</span>
          <span class="recommendation-value">{{ getSmartRecommendations()?.designLevel.join(', ') }}</span>
        </div>
        <div class="recommendation-item">
          <span class="recommendation-label">Timeline:</span>
          <span class="recommendation-value">{{ getSmartRecommendations()?.timeline.join(', ') }}</span>
        </div>
        <div class="recommendation-item">
          <span class="recommendation-label">Team Size:</span>
          <span class="recommendation-value">{{ getSmartRecommendations()?.team.join(', ') }}</span>
        </div>
        <div class="recommendation-item">
          <span class="recommendation-label">Support Plan:</span>
          <span class="recommendation-value">{{ getSmartRecommendations()?.supportPlan.join(', ') }}</span>
        </div>
      </div>
    </div>
    
    <!-- Help & Support -->
    <div class="help-support">
      <button @click="showHelp = !showHelp" class="help-toggle">
        <span>❓</span>
        <span>Need Help?</span>
      </button>
      
      <div v-if="showHelp" class="help-panel">
        <div class="help-content">
          <h3>How to use the calculator</h3>
          <ol>
            <li><strong>Project Type:</strong> Choose what you're building</li>
            <li><strong>Features:</strong> Select the functionality you need</li>
            <li><strong>Design:</strong> Pick your desired quality level</li>
            <li><strong>Timeline:</strong> Set your deadline preferences</li>
            <li><strong>Team:</strong> Choose your preferred team size</li>
            <li><strong>Support:</strong> Select maintenance level</li>
            <li><strong>Business Context:</strong> Tell us about your industry</li>
            <li><strong>Summary:</strong> Review your complete quote</li>
          </ol>
          
          <div class="help-tips">
            <h4>💡 Tips</h4>
            <ul>
              <li>Use "Not sure" options if you're uncertain</li>
              <li>Click help sections for detailed explanations</li>
              <li>You can go back and change answers anytime</li>
              <li>Save your project to return later</li>
            </ul>
          </div>
          
          <button @click="contactSupport" class="btn btn-accent">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import type { Questionnaire } from '@/utils/cost_calculation.algorythm'
import { 
  shouldSkipStep, 
  getRequiredStepsForProjectType,
  getAutoSelectFeaturesForProjectType,
  getRecommendationsForProjectType
} from '@/utils/smart-logic'
import ProjectTypeStep from '@/components/cost-calculator/ProjectTypeStep.vue'
import FeaturesStep from '@/components/cost-calculator/FeaturesStep.vue'
import DesignStep from '@/components/cost-calculator/DesignStep.vue'
import TimelineStep from '@/components/cost-calculator/TimelineStep.vue'
import TeamStep from '@/components/cost-calculator/TeamStep.vue'
import SupportStep from '@/components/cost-calculator/SupportStep.vue'
import BusinessContextStep from '@/components/cost-calculator/BusinessContextStep.vue'
import SummaryStep from '@/components/cost-calculator/SummaryStep.vue'

const router = useRouter()

// State
const currentStep = ref(1)
const showHelp = ref(false)
const questionnaire = ref<Questionnaire>({
  productType: '',
  features: [],
  designLevel: '',
  timeline: '',
  team: '',
  supportPlan: '',
  industry: '',
  marketPosition: '',
  regulatoryEnvironment: '',
  businessCriticality: ''
})

// Step configuration
const steps = [
  { key: 'welcome', label: 'Welcome', component: null },
  { key: 'project-type', label: 'Project Type', component: ProjectTypeStep },
  { key: 'features', label: 'Features', component: FeaturesStep },
  { key: 'design', label: 'Design', component: DesignStep },
  { key: 'timeline', label: 'Timeline', component: TimelineStep },
  { key: 'team', label: 'Team', component: TeamStep },
  { key: 'support', label: 'Support', component: SupportStep },
  { key: 'business-context', label: 'Business Context', component: BusinessContextStep },
  { key: 'summary', label: 'Summary', component: SummaryStep }
]

// Get active steps based on project type
const getActiveSteps = computed(() => {
  if (!questionnaire.value.productType) return steps
  
  const requiredSteps = getRequiredStepsForProjectType(questionnaire.value.productType)
  return steps.filter(step => {
    if (step.key === 'welcome') return true
    return requiredSteps.includes(step.key)
  })
})

const totalSteps = computed(() => getActiveSteps.value.length - 1) // Exclude welcome step

// Computed
const getCurrentStepComponent = () => {
  if (currentStep.value === 1) return null
  return getActiveSteps.value[currentStep.value - 1]?.component
}

// Methods
const startCalculator = () => {
  currentStep.value = 2
}

const nextStep = () => {
  if (currentStep.value < totalSteps.value) {
    let nextStepNumber = currentStep.value + 1
    
    // Check if next step should be skipped based on smart logic
    while (nextStepNumber <= totalSteps.value) {
      const nextStepKey = getActiveSteps.value[nextStepNumber - 1]?.key
      if (nextStepKey && shouldSkipStep(questionnaire.value.productType, nextStepKey)) {
        nextStepNumber++
      } else {
        break
      }
    }
    
    currentStep.value = nextStepNumber
    
    // Scroll to top of the step with smooth animation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }
}

const previousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
    
    // Scroll to top of the step with smooth animation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }
}

const goToStep = (stepNumber: number) => {
  if (stepNumber >= 1 && stepNumber <= totalSteps.value) {
    currentStep.value = stepNumber
    
    // Scroll to top of the step with smooth animation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }
}

const skipStep = () => {
  nextStep()
}

const canProceed = () => {
  // Basic validation - can be enhanced based on step requirements
  switch (currentStep.value) {
    case 2: // Project Type
      return !!questionnaire.value.productType
    case 3: // Features
      return questionnaire.value.features.length > 0
    case 4: // Design
      return !!questionnaire.value.designLevel
    case 5: // Timeline
      return !!questionnaire.value.timeline
    case 6: // Team
      return !!questionnaire.value.team
    case 7: // Support
      return !!questionnaire.value.supportPlan
    case 8: // Business Context
      return !!questionnaire.value.industry && !!questionnaire.value.marketPosition
    default:
      return true
  }
}

const updateQuestionnaire = (newValue: Questionnaire) => {
  questionnaire.value = { ...newValue }
  
  // Auto-select features based on project type
  if (newValue.productType && newValue.productType !== questionnaire.value.productType) {
    const autoSelectFeatures = getAutoSelectFeaturesForProjectType(newValue.productType)
    if (autoSelectFeatures.length > 0) {
      newValue.features = [...(newValue.features || []), ...autoSelectFeatures]
      questionnaire.value = { ...newValue }
    }
  }
}

const startOver = () => {
  questionnaire.value = {
    productType: '',
    features: [],
    designLevel: '',
    timeline: '',
    team: '',
    supportPlan: '',
    industry: '',
    marketPosition: '',
    regulatoryEnvironment: '',
    businessCriticality: ''
  }
  currentStep.value = 1
}

const saveProject = () => {
  const projectData = {
    questionnaire: questionnaire.value,
    timestamp: new Date().toISOString(),
    id: Date.now().toString()
  }
  
  localStorage.setItem('savedProject', JSON.stringify(projectData))
  
  // Show success message
  alert('Project saved successfully!')
}

const loadSavedProject = () => {
  const saved = localStorage.getItem('savedProject')
  if (saved) {
    try {
      const projectData = JSON.parse(saved)
      questionnaire.value = projectData.questionnaire
      currentStep.value = 2
      alert('Project loaded successfully!')
    } catch (error) {
      alert('Error loading saved project')
    }
  } else {
    alert('No saved project found')
  }
}

const getSmartRecommendations = () => {
  if (!questionnaire.value.productType) return null
  return getRecommendationsForProjectType(questionnaire.value.productType)
}

const contactSupport = () => {
  // Implementation for contacting support
  console.log('Contacting support...')
}

// Lifecycle
onMounted(() => {
  // Check for saved project
  const saved = localStorage.getItem('savedProject')
  if (saved) {
    try {
      const projectData = JSON.parse(saved)
      // Offer to load saved project
      if (confirm('Found a saved project. Would you like to load it?')) {
        questionnaire.value = projectData.questionnaire
        currentStep.value = 2
      }
    } catch (error) {
      console.error('Error parsing saved project:', error)
    }
  }
})
</script>

<style scoped>
.enhanced-calculator {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--color-black) 0%, #1a1a2e 100%);
  padding: 20px;
  position: relative;
}

/* Progress Bar */
.progress-container {
  max-width: 1200px;
  margin: 0 auto 32px;
  text-align: center;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 16px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary-purple), var(--color-secondary-teal));
  border-radius: 4px;
  transition: width 0.5s ease;
}

.progress-text {
  color: var(--color-text-muted);
  font-size: 14px;
  font-weight: 500;
}

/* Step Navigation */
.step-navigation {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.step-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 12px;
  border-radius: 12px;
  min-width: 80px;
}

.step-indicator:hover {
  background: rgba(255, 255, 255, 0.05);
}

.step-indicator.completed {
  opacity: 0.7;
}

.step-indicator.current {
  background: rgba(127, 0, 253, 0.1);
  border: 1px solid rgba(127, 0, 253, 0.3);
}

.step-indicator.upcoming {
  opacity: 0.5;
}

.step-number {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
}

.step-indicator.completed .step-number {
  background: var(--color-secondary-teal);
  color: var(--color-black);
}

.step-indicator.current .step-number {
  background: var(--color-primary-purple);
  color: white;
}

.step-indicator.upcoming .step-number {
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-text-muted);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.step-label {
  color: var(--color-text-muted);
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  line-height: 1.2;
}

.step-indicator.current .step-label {
  color: var(--color-text-primary);
}

/* Calculator Content */
.calculator-content {
  max-width: 1200px;
  margin: 0 auto;
  min-height: 600px;
}

/* Welcome Step */
.welcome-step {
  text-align: center;
  padding: 60px 20px;
}

.welcome-content {
  max-width: 800px;
  margin: 0 auto;
}

.welcome-header h1 {
  color: var(--color-text-primary);
  font-size: 48px;
  font-weight: 800;
  margin: 0 0 24px 0;
  background: linear-gradient(135deg, var(--color-primary-purple), var(--color-secondary-teal));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.welcome-subtitle {
  color: var(--color-text-muted);
  font-size: 20px;
  line-height: 1.6;
  margin: 0 0 48px 0;
}

.welcome-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
  margin-bottom: 48px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  text-align: left;
}

.feature-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.feature-content h3 {
  color: var(--color-text-primary);
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 8px 0;
}

.feature-content p {
  color: var(--color-text-muted);
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
}

.welcome-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Navigation Buttons */
.navigation-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 40px auto 0;
  padding: 0 20px;
}

.step-actions {
  display: flex;
  gap: 16px;
}

/* Final Actions */
.final-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  max-width: 1200px;
  margin: 40px auto 0;
  padding: 0 20px;
  flex-wrap: wrap;
}

/* Buttons */
.btn {
  padding: 16px 32px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-primary {
  background: var(--color-primary-purple);
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: var(--color-primary-purple);
  opacity: 0.9;
  transform: translateY(-2px);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-text-primary);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  color: var(--color-text-primary);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

.btn-accent {
  background: var(--color-secondary-teal);
  color: var(--color-black);
}

.btn-accent:hover {
  background: var(--color-secondary-teal);
  opacity: 0.9;
  transform: translateY(-2px);
}

/* Floating Progress */
.floating-progress {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 1000;
}

.progress-circle {
  position: relative;
  width: 60px;
  height: 60px;
}

.progress-ring {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.progress-percentage {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--color-text-primary);
  font-size: 12px;
  font-weight: 600;
}

/* Smart Recommendations */
.smart-recommendations {
  position: fixed;
  bottom: 120px;
  left: 32px;
  z-index: 1000;
  background: rgba(34, 252, 176, 0.1);
  border: 1px solid rgba(34, 252, 176, 0.3);
  border-radius: 16px;
  padding: 20px;
  width: 300px;
  max-width: 90vw;
}

.recommendations-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.recommendations-icon {
  font-size: 20px;
}

.recommendations-title {
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 600;
}

.recommendations-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.recommendation-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid rgba(34, 252, 176, 0.2);
}

.recommendation-item:last-child {
  border-bottom: none;
}

.recommendation-label {
  color: var(--color-text-muted);
  font-size: 14px;
  font-weight: 500;
}

.recommendation-value {
  color: var(--color-secondary-teal);
  font-size: 14px;
  font-weight: 600;
  text-align: right;
  max-width: 150px;
}

/* Help & Support */
.help-support {
  position: fixed;
  bottom: 32px;
  left: 32px;
  z-index: 1000;
}

.help-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: rgba(127, 0, 253, 0.1);
  border: 1px solid rgba(127, 0, 253, 0.3);
  border-radius: 25px;
  color: var(--color-text-primary);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.help-toggle:hover {
  background: rgba(127, 0, 253, 0.2);
  border-color: var(--color-primary-purple);
  transform: translateY(-2px);
}

.help-panel {
  position: absolute;
  bottom: 100%;
  left: 0;
  margin-bottom: 16px;
  background: rgba(0, 0, 0, 0.95);
  border: 1px solid rgba(127, 0, 253, 0.3);
  border-radius: 16px;
  padding: 24px;
  width: 350px;
  max-width: 90vw;
}

.help-content h3 {
  color: var(--color-text-primary);
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 16px 0;
}

.help-content ol {
  color: var(--color-text-muted);
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 20px 0;
  padding-left: 20px;
}

.help-content li {
  margin-bottom: 8px;
}

.help-content strong {
  color: var(--color-text-primary);
}

.help-tips {
  background: rgba(34, 252, 176, 0.1);
  border: 1px solid rgba(34, 252, 176, 0.2);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
}

.help-tips h4 {
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 12px 0;
}

.help-tips ul {
  color: var(--color-text-muted);
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  padding-left: 20px;
}

.help-tips li {
  margin-bottom: 6px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .enhanced-calculator {
    padding: 16px;
  }
  
  .welcome-header h1 {
    font-size: 32px;
  }
  
  .welcome-subtitle {
    font-size: 18px;
  }
  
  .welcome-features {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .step-navigation {
    gap: 4px;
  }
  
  .step-indicator {
    min-width: 60px;
    padding: 8px;
  }
  
  .step-label {
    font-size: 10px;
  }
  
  .navigation-buttons,
  .final-actions {
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }
  
  .step-actions {
    flex-direction: column;
    width: 100%;
  }
  
  .btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
  
  .floating-progress,
  .help-support,
  .smart-recommendations {
    position: static;
    margin: 32px auto;
    text-align: center;
  }
  
  .help-panel {
    position: static;
    margin: 16px auto;
    width: 100%;
  }
}
</style>
