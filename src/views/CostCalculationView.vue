<template>
  <div class="cost-calculation-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <Container>
        <div class="hero-content">
          <div class="hero-text">
            <div class="hero-subtitle">
              <div class="vertical-line"></div>
              <span>Smart pricing wizard for your digital projects</span>
            </div>
            
            <h1 class="hero-title">
              Project Cost
              <span class="highlight">Wizard</span>
            </h1>
            
            <p class="hero-description">
              Let our friendly AI assistant guide you through a simple step-by-step process 
              to get an accurate project quote. No overwhelming forms - just smart questions!
            </p>
          </div>
          
          <div class="hero-visual">
            <div class="wizard-preview">
              <div class="preview-card">
                <div class="preview-header">
                  <div class="preview-icon">🤖</div>
                  <h3>AI Assistant</h3>
                </div>
                <p>Friendly guide through the process</p>
              </div>
              <div class="preview-card">
                <div class="preview-header">
                  <div class="preview-icon">📋</div>
                  <h3>Step by Step</h3>
                </div>
                <p>Simple questions, one at a time</p>
              </div>
              <div class="preview-card">
                <div class="preview-header">
                  <div class="preview-icon">💡</div>
                  <h3>Smart Logic</h3>
                </div>
                <p>Only relevant questions asked</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Wizard Section -->
    <section class="wizard-section">
      <Container>
        <div class="wizard-container">
          <!-- Wizard Steps - Now Full Width -->
          <div class="wizard-steps">
            <div class="wizard-header">
              <h2>Project Wizard</h2>
              <p>Step {{ currentStep }} of {{ totalSteps }}</p>
            </div>

            <!-- Progress Bar -->
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: `${(currentStep / totalSteps) * 100}%` }"></div>
              </div>

            <!-- AI Assistant Chat -->
            <div class="ai-assistant">
              <div class="assistant-avatar">🤖</div>
              <div class="assistant-message">
                <p>{{ currentStepData.assistantMessage }}</p>
                <div v-if="currentStepData.hint" class="assistant-hint">
                  💡 {{ currentStepData.hint }}
                    </div>
                </div>
              </div>

            <!-- Current Step Form -->
            <div class="step-form">
              <component 
                :is="currentStepData.component" 
                v-model="formData"
                @next="nextStep"
                @previous="previousStep"
                @skip="skipStep"
                :step-data="currentStepData"
              />
                  </div>
                  
            <!-- Navigation -->
            <div class="step-navigation">
              <button 
                v-if="currentStep > 1" 
                @click="previousStep" 
                class="nav-btn previous"
              >
                ← Previous
              </button>
              
              <button 
                v-if="currentStep < totalSteps" 
                @click="nextStep" 
                class="nav-btn next"
                :disabled="!canProceed"
              >
                {{ isLastStep ? 'Calculate Quote' : 'Next →' }}
              </button>
          </div>
            </div>
        </div>
      </Container>
    </section>

    <!-- Floating Summary Menu -->
    <div class="floating-summary" @click="toggleSummaryModal">
      <div class="summary-preview">
        <div class="summary-icon">📋</div>
        <div class="summary-info">
          <div class="summary-cost" v-if="quickEstimate">
            £{{ formatNumber(quickEstimate.low) }} - £{{ formatNumber(quickEstimate.high) }}
          </div>
          <div class="summary-complexity" v-if="formData.productType">
            {{ getProjectTypeLabel() }}
          </div>
        </div>
      </div>
    </div>

    <!-- Summary Modal -->
    <div v-if="showSummaryModal" class="summary-modal-overlay" @click="closeSummaryModal">
      <div class="summary-modal" @click.stop>
        <div class="modal-header">
          <h3>Project Summary</h3>
          <button class="close-btn" @click="closeSummaryModal">×</button>
        </div>
        
        <div class="modal-content">
          <!-- Project Summary -->
          <div class="project-summary">
            <div class="summary-section">
              <h4>Project Type</h4>
              <p>{{ getProjectTypeLabel() || 'Not selected yet' }}</p>
            </div>
            
            <div class="summary-section" v-if="formData.features.length > 0">
              <h4>Selected Features</h4>
              <div class="feature-tags">
                <span v-for="feature in formData.features" :key="feature" class="feature-tag">
                  {{ getFeatureLabel(feature) }}
                </span>
              </div>
            </div>

            <div class="summary-section" v-if="formData.designLevel">
              <h4>Design Quality</h4>
              <p>{{ getDesignLevelLabel() }}</p>
            </div>

            <div class="summary-section" v-if="formData.timeline">
              <h4>Timeline</h4>
              <p>{{ getTimelineLabel() }}</p>
            </div>
          </div>

          <!-- Quick Estimate -->
          <div v-if="quickEstimate" class="quick-estimate">
            <h4>Quick Estimate</h4>
            <div class="estimate-range">
              <span class="estimate-label">Estimated Range:</span>
              <span class="estimate-price">£{{ formatNumber(quickEstimate.low) }} - £{{ formatNumber(quickEstimate.high) }}</span>
            </div>
            <small class="estimate-note">This is a rough estimate based on current selections</small>
          </div>

          <!-- Results (when calculation is complete) -->
          <div v-if="quoteResult" class="quote-results">
            <h4>Your Quote</h4>
            <div class="quote-price">
              <span class="price-label">Total Cost:</span>
              <span class="price-amount">£{{ formatNumber(quoteResult.total) }}</span>
            </div>
            <div class="quote-range">
              <span>Range: £{{ formatNumber(quoteResult.rangeLow) }} - £{{ formatNumber(quoteResult.rangeHigh) }}</span>
            </div>
            <div class="quote-actions">
              <button @click="exportToPDF" class="action-btn pdf">📄 Export PDF</button>
              <button @click="copyToClipboard" class="action-btn copy">📋 Copy</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- How It Works Section -->
    <section class="how-it-works">
      <Container>
        <div class="works-header">
          <h2>How Our Wizard Works</h2>
          <p>Smart, conversational pricing that adapts to your needs</p>
        </div>
        
        <div class="works-grid">
          <div class="work-step">
            <div class="step-number">1</div>
            <h3>Tell Us About Your Project</h3>
            <p>Start with the basics - what type of project you're building and what you need.</p>
          </div>
          
          <div class="work-step">
            <div class="step-number">2</div>
            <h3>Smart Questions</h3>
            <p>Our AI asks only relevant questions based on your previous answers.</p>
          </div>
          
          <div class="work-step">
            <div class="step-number">3</div>
            <h3>Instant Quote</h3>
            <p>Get a detailed, accurate quote with cost breakdown and recommendations.</p>
          </div>
          
          <div class="work-step">
            <div class="step-number">4</div>
            <h3>Refine & Optimize</h3>
            <p>Adjust your requirements and see how they affect your project cost.</p>
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import Container from '@/components/Container.vue'
import { 
  makePricer, 
  defaultConfig,
  productTypes, 
  features, 
  designLevels, 
  timelines, 
  teams, 
  supportPlans,
  type Questionnaire,
  type QuoteResult
} from '@/utils/cost-calculation-algorithm'

// Import step components
import ProjectTypeStep from '@/components/cost-calculator/ProjectTypeStep.vue'
import FeaturesStep from '@/components/cost-calculator/FeaturesStep.vue'
import DesignStep from '@/components/cost-calculator/DesignStep.vue'
import TimelineStep from '@/components/cost-calculator/TimelineStep.vue'
import TeamStep from '@/components/cost-calculator/TeamStep.vue'
import SupportStep from '@/components/cost-calculator/SupportStep.vue'
import BusinessContextStep from '@/components/cost-calculator/BusinessContextStep.vue'
import SummaryStep from '@/components/cost-calculator/SummaryStep.vue'

// Wizard state
const currentStep = ref(1)
const totalSteps = ref(8)
const isCalculating = ref(false)

// Form data
const formData = ref<Questionnaire>({
  productType: '',
  features: [],
  designLevel: '',
  timeline: '',
  team: '',
  supportPlan: '',
  isRegulatedIndustry: false,
  contentProduction: 'client',
  testingLevel: 'standard',
  dataMigration: 'none',
  trainingSessions: 0,
  warrantyMonths: 1,
  extraLicensesCost: 0,
  extraHostingSetup: false,
  
  // Design deliverables for UI/UX projects
  designDeliverables: {
    wireframes: false,
    mockups: false,
    prototype: false,
    designSystem: false,
    mobile: false,
    desktop: false,
    tablet: false,
    userResearch: false,
    usabilityTesting: false,
    accessibility: false
  }
})

// Results
const quoteResult = ref<QuoteResult | null>(null)
const quickEstimate = ref<{ low: number; high: number } | null>(null)

// Modal state for summary
const showSummaryModal = ref(false)

// Step definitions with smart logic
const stepDefinitions = computed(() => [
  {
    id: 1,
    title: 'Project Type',
    component: ProjectTypeStep,
    assistantMessage: "Hi! I'm here to help you get an accurate quote for your project. Let's start with the basics - what type of project are you building?",
    hint: "Choose the option that best describes your project. Don't worry if you're not sure - you can always change this later!",
    required: true,
    skipCondition: () => false
  },
  {
    id: 2,
    title: 'Core Features',
    component: FeaturesStep,
    assistantMessage: "Great choice! Now let's talk about what your project needs to do. What are the main features you want?",
    hint: "Start with the essentials. You can always add more features later, and I'll show you how they affect the cost.",
    required: true,
    skipCondition: () => false
  },
  {
    id: 3,
    title: 'Design Quality',
    component: DesignStep,
    assistantMessage: "Design is crucial for user experience! What level of design quality are you looking for?",
    hint: "This affects both the visual appeal and the development time. Premium designs take longer but look amazing!",
    required: true,
    skipCondition: () => formData.value.productType === 'design_only'
  },
  {
    id: 4,
    title: 'Timeline',
    component: TimelineStep,
    assistantMessage: "How quickly do you need this project completed?",
    hint: "Faster timelines often cost more due to increased team size and overtime work.",
    required: true,
    skipCondition: () => false
  },
  {
    id: 5,
    title: 'Team Size',
    component: TeamStep,
    assistantMessage: "What kind of team do you want working on your project?",
    hint: "Larger teams can work faster but cost more. Solo developers are cost-effective but take longer.",
    required: true,
    skipCondition: () => formData.value.productType === 'design_only'
  },
  {
    id: 6,
    title: 'Support & Maintenance',
    component: SupportStep,
    assistantMessage: "Projects need ongoing support after launch. What level of support do you need?",
    hint: "Longer support periods give you peace of mind and help with any issues that come up.",
    required: true,
    skipCondition: () => false
  },
  {
    id: 7,
    title: 'Business Context',
    component: BusinessContextStep,
    assistantMessage: "Let me understand your business better to give you the most accurate quote.",
    hint: "This helps me factor in industry-specific requirements and complexity.",
    required: false,
    skipCondition: () => !formData.value.productType || formData.value.productType === 'landing'
  },
  {
    id: 8,
    title: 'Final Review',
            component: SummaryStep,
    assistantMessage: "Perfect! Let me show you a summary of your project before calculating the final quote.",
    hint: "Review your selections and make any final adjustments.",
    required: true,
    skipCondition: () => false
  }
])

// Current step data
const currentStepData = computed(() => 
  stepDefinitions.value.find(step => step.id === currentStep.value) || stepDefinitions.value[0]
)

// Check if we can proceed to next step
const canProceed = computed(() => {
  const currentStepDef = currentStepData.value
  if (!currentStepDef.required) return true
  
  switch (currentStep.value) {
    case 1: return !!formData.value.productType
    case 2: 
      if (formData.value.productType === 'design_only') {
        // For design projects, check if at least one design deliverable is selected
        return formData.value.designDeliverables && 
               Object.values(formData.value.designDeliverables).some(deliverable => deliverable)
      }
      return formData.value.features.length > 0
    case 3: return !!formData.value.designLevel
    case 4: return !!formData.value.timeline
    case 5: return !!formData.value.team
    case 6: return !!formData.value.supportPlan
    case 7: return true // Optional step
    case 8: return true // Review step
    default: return false
  }
})

// Check if this is the last step
const isLastStep = computed(() => currentStep.value === totalSteps.value)

// Navigation methods
const nextStep = async () => {
  if (currentStep.value === totalSteps.value) {
    await calculateQuote()
    return
  }
  
  // Check if next step should be skipped
  let nextStepNum = currentStep.value + 1
  while (nextStepNum <= totalSteps.value) {
    const nextStepDef = stepDefinitions.value.find(step => step.id === nextStepNum)
    if (nextStepDef && !nextStepDef.skipCondition()) {
      break
    }
    nextStepNum++
  }
  
  if (nextStepNum <= totalSteps.value) {
    currentStep.value = nextStepNum
    updateQuickEstimate()
  }
}

const previousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
    updateQuickEstimate()
  }
}

const skipStep = () => {
  nextStep()
}

// Calculate quote
const calculateQuote = async () => {
  isCalculating.value = true
  
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const pricer = makePricer()
    const result = pricer.calculateQuote(formData.value)
    
    quoteResult.value = result
  } catch (error) {
    console.error('Error calculating quote:', error)
  } finally {
    isCalculating.value = false
  }
}

// Update quick estimate as user progresses
const updateQuickEstimate = () => {
  if (formData.value.productType && formData.value.features.length > 0) {
    const pricer = makePricer()
    const result = pricer.calculateQuote(formData.value)
    
    quickEstimate.value = {
      low: Math.round(result.rangeLow * 0.8),
      high: Math.round(result.rangeHigh * 1.2)
    }
  }
}

// Helper functions
const getProjectTypeLabel = () => {
  const type = productTypes[formData.value.productType as keyof typeof productTypes]
  return type?.label || ''
}

const getFeatureLabel = (key: string) => {
  const feature = features.find(f => f.key === key)
  return feature?.label || key
}

const getDesignLevelLabel = () => {
  const level = designLevels[formData.value.designLevel as keyof typeof designLevels]
  return level?.label || ''
}

const getTimelineLabel = () => {
  const timeline = timelines[formData.value.timeline as keyof typeof timelines]
  return timeline?.label || ''
}

const formatNumber = (num: number) => {
  return num.toLocaleString('en-GB')
}

// Export functions
const exportToPDF = () => {
  alert('PDF export coming soon!')
}

const copyToClipboard = async () => {
  if (!quoteResult.value) return
  
  const text = `Project Quote: £${formatNumber(quoteResult.value.total)}
Range: £${formatNumber(quoteResult.value.rangeLow)} - £${formatNumber(quoteResult.value.rangeHigh)}`
  
  try {
    await navigator.clipboard.writeText(text)
    alert('Quote details copied to clipboard!')
  } catch (error) {
    console.error('Failed to copy:', error)
  }
}

// Modal methods
const toggleSummaryModal = () => {
  showSummaryModal.value = !showSummaryModal.value
}

const closeSummaryModal = () => {
  showSummaryModal.value = false
}

// Initialize
onMounted(() => {
  updateQuickEstimate()
})
</script>

<style scoped>
.cost-calculation-view {
  background: var(--gradient-secondary);
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  padding: 120px 0 80px;
  background: var(--gradient-secondary);
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.hero-subtitle {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.vertical-line {
  width: 4px;
  height: 24px;
  background: var(--gradient-accent);
  border-radius: 2px;
}

.hero-subtitle span {
  color: var(--color-text-muted);
  font-size: 18px;
  font-weight: 500;
}

.hero-title {
  font-size: 64px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 24px;
  color: var(--color-text-primary);
}

.highlight {
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 20px;
  line-height: 1.6;
  color: var(--color-text-muted);
  margin-bottom: 32px;
}

.wizard-preview {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.preview-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  backdrop-filter: blur(10px);
}

.preview-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
}

.preview-icon {
  font-size: 24px;
}

.preview-card h3 {
  color: var(--color-text-primary);
  font-size: 18px;
  font-weight: 600;
  margin: 0;
}

.preview-card p {
  color: var(--color-text-muted);
  margin: 0;
  font-size: 14px;
}

/* Wizard Section */
.wizard-section {
  padding: 80px 0;
  background: var(--color-bg-dark-light);
}

.wizard-container {
  display: block;
  width: 100%;
  max-width: none;
  margin: 0;
}

.wizard-steps {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 60px;
  backdrop-filter: blur(10px);
  min-height: 600px;
}

.wizard-header {
  margin-bottom: 32px;
  text-align: center;
}

.wizard-header h2 {
  color: var(--color-text-primary);
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 16px;
}

.wizard-header p {
  color: var(--color-text-muted);
  font-size: 16px;
}

/* Progress Bar */
.progress-bar {
  width: 100%;
  height: 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  margin-bottom: 40px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--gradient-accent);
  border-radius: 6px;
  transition: width 0.5s ease;
}

/* AI Assistant */
.ai-assistant {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  padding: 30px;
  background: rgba(127, 0, 253, 0.05);
  border: 1px solid rgba(127, 0, 253, 0.2);
  border-radius: 20px;
  min-height: 120px;
}

.assistant-avatar {
  font-size: 48px;
  flex-shrink: 0;
}

.assistant-message p {
  color: var(--color-text-primary);
  font-size: 20px;
  line-height: 1.6;
  margin: 0 0 16px 0;
}

.assistant-hint {
  color: var(--color-text-muted);
  font-size: 16px;
  font-style: italic;
}

/* Step Form */
.step-form {
  margin-bottom: 40px;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.step-form :deep(.step-component) {
  width: 100%;
  max-width: none;
}

/* Step Navigation */
.step-navigation {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

.nav-btn {
  padding: 16px 32px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--color-primary-purple);
}

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.nav-btn.next {
  background: var(--gradient-accent);
  color: var(--color-black);
  font-weight: 600;
}

.nav-btn.next:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(34, 252, 176, 0.3);
}

/* Wizard Summary */
.wizard-summary {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  backdrop-filter: blur(10px);
  position: sticky;
  top: 40px;
}

.summary-header {
  margin-bottom: 32px;
  text-align: center;
}

.summary-header h2 {
  color: var(--color-text-primary);
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 12px;
}

.summary-header p {
  color: var(--color-text-muted);
  font-size: 16px;
}

/* Project Summary */
.project-summary {
  margin-bottom: 32px;
}

.summary-section {
  margin-bottom: 24px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
}

.summary-section h3 {
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 12px 0;
}

.summary-section p {
  color: var(--color-text-muted);
  font-size: 14px;
  margin: 0;
}

.feature-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.feature-tag {
  background: var(--color-primary-purple);
  color: var(--color-white);
  font-size: 12px;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 20px;
}

/* Quick Estimate */
.quick-estimate {
  background: rgba(34, 252, 176, 0.05);
  border: 1px solid rgba(34, 252, 176, 0.2);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 32px;
  text-align: center;
}

.quick-estimate h3 {
  color: var(--color-text-primary);
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 16px 0;
}

.estimate-range {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.estimate-label {
  color: var(--color-text-muted);
  font-size: 14px;
}

.estimate-price {
  color: var(--color-secondary-teal);
  font-size: 20px;
  font-weight: 700;
}

.estimate-note {
  color: var(--color-text-muted);
  font-size: 12px;
  font-style: italic;
}

/* Quote Results */
.quote-results {
  background: rgba(127, 0, 253, 0.05);
  border: 1px solid rgba(127, 0, 253, 0.2);
  border-radius: 12px;
  padding: 24px;
  text-align: center;
}

.quote-results h3 {
  color: var(--color-text-primary);
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 16px 0;
}

.quote-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.price-label {
  color: var(--color-text-muted);
  font-size: 16px;
}

.price-amount {
  color: var(--color-primary-purple);
  font-size: 24px;
  font-weight: 700;
}

.quote-range {
  color: var(--color-text-muted);
  font-size: 14px;
  margin-bottom: 20px;
}

.quote-actions {
  display: flex;
  gap: 12px;
}

.action-btn {
  flex: 1;
  padding: 10px 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-text-primary);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--color-primary-purple);
}

.action-btn.pdf:hover {
  border-color: var(--color-secondary-teal);
}

.action-btn.copy:hover {
  border-color: var(--color-secondary-blue);
}

/* How It Works Section */
.how-it-works {
  padding: 80px 0;
  background: var(--color-bg-dark-dark);
}

.works-header {
  text-align: center;
  margin-bottom: 60px;
}

.works-header h2 {
  color: var(--color-text-primary);
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 16px;
}

.works-header p {
  color: var(--color-text-muted);
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto;
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.work-step {
  text-align: center;
  padding: 32px 24px;
}

.step-number {
  width: 60px;
  height: 60px;
  background: var(--gradient-accent);
  color: var(--color-black);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  margin: 0 auto 24px;
}

.work-step h3 {
  color: var(--color-text-primary);
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
}

.work-step p {
  color: var(--color-text-muted);
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
}

/* Floating Summary */
.floating-summary {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  background: var(--color-bg-dark-light);
  border: 2px solid rgba(34, 252, 176, 0.3);
  border-radius: 16px;
  padding: 16px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2), 0 0 20px rgba(34, 252, 176, 0.1);
  z-index: 9999;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: float 3s ease-in-out infinite;
}

.floating-summary::after {
  content: '👆 Click to view details';
  position: absolute;
  top: -30px;
  right: 0;
  background: var(--color-primary-purple);
  color: var(--color-white);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  white-space: nowrap;
}

.floating-summary:hover::after {
  opacity: 1;
  transform: translateY(0);
}

.floating-summary:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3), 0 0 30px rgba(34, 252, 176, 0.2);
  border-color: rgba(34, 252, 176, 0.5);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.summary-preview {
  display: flex;
  align-items: center;
  gap: 12px;
}

.summary-icon {
  font-size: 24px;
  color: var(--color-secondary-teal);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.summary-info {
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;
}

.floating-summary:hover .summary-info {
  transform: translateX(5px);
}

.summary-cost {
  color: var(--color-secondary-teal);
  font-size: 18px;
  font-weight: 600;
}

.summary-complexity {
  color: var(--color-text-muted);
  font-size: 14px;
  font-style: italic;
}

/* Summary Modal */
.summary-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  animation: overlayFadeIn 0.3s ease-out;
}

@keyframes overlayFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.summary-modal {
  background: var(--color-bg-dark-light);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: modalSlideIn 0.3s ease-out;
  z-index: 10001;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(135deg, rgba(127, 0, 253, 0.05), rgba(34, 252, 176, 0.05));
  margin: -40px -40px 32px -40px;
  padding: 40px 40px 24px 40px;
  border-radius: 20px 20px 0 0;
}

.modal-header h3 {
  color: var(--color-text-primary);
  font-size: 28px;
  font-weight: 700;
  margin: 0;
}

.close-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: var(--color-text-muted);
  cursor: pointer;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  color: var(--color-white);
  transform: scale(1.1);
}

.close-btn:hover {
  color: var(--color-white);
}

.modal-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.modal-content .summary-section {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 20px;
  border-left: 4px solid var(--color-secondary-teal);
}

.modal-content .summary-section h4 {
  color: var(--color-text-primary);
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 12px 0;
}

.modal-content .summary-section p {
  color: var(--color-text-muted);
  font-size: 16px;
  margin: 0;
}

.modal-content .quick-estimate {
  background: rgba(34, 252, 176, 0.05);
  border: 1px solid rgba(34, 252, 176, 0.2);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  border-left: 4px solid var(--color-secondary-teal);
}

.modal-content .quick-estimate h4 {
  color: var(--color-text-primary);
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 16px 0;
}

.modal-content .quote-results {
  background: rgba(127, 0, 253, 0.05);
  border: 1px solid rgba(127, 0, 253, 0.2);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  border-left: 4px solid var(--color-primary-purple);
}

.modal-content .feature-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.modal-content .feature-tag {
  background: var(--color-primary-purple);
  color: var(--color-white);
  font-size: 12px;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 20px;
  transition: all 0.2s ease;
}

.modal-content .feature-tag:hover {
  background: var(--color-secondary-teal);
  transform: translateY(-2px);
}

.modal-content .estimate-range {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding: 16px;
  background: rgba(34, 252, 176, 0.1);
  border-radius: 12px;
}

.modal-content .estimate-price {
  color: var(--color-secondary-teal);
  font-size: 22px;
  font-weight: 700;
}

.modal-content .quote-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding: 20px;
  background: rgba(127, 0, 253, 0.1);
  border-radius: 12px;
}

.modal-content .price-amount {
  color: var(--color-primary-purple);
  font-size: 26px;
  font-weight: 700;
}

.modal-content .quote-actions {
  display: flex;
  gap: 12px;
  margin-top: 20px;
}

.modal-content .action-btn {
  flex: 1;
  padding: 12px 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-text-primary);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.modal-content .action-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--color-primary-purple);
  transform: translateY(-2px);
}

.modal-content .action-btn.pdf:hover {
  border-color: var(--color-secondary-teal);
  background: rgba(34, 252, 176, 0.1);
}

.modal-content .action-btn.copy:hover {
  border-color: var(--color-secondary-blue);
  background: rgba(0, 123, 255, 0.1);
}

.modal-content .estimate-note {
  color: var(--color-text-muted);
  font-size: 13px;
  font-style: italic;
  margin-top: 8px;
  opacity: 0.8;
}

.modal-content .quote-range {
  color: var(--color-text-muted);
  font-size: 15px;
  margin-bottom: 20px;
  padding: 12px;
  background: rgba(127, 0, 253, 0.05);
  border-radius: 8px;
  border-left: 3px solid var(--color-primary-purple);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 60px;
    text-align: center;
  }
  
  .wizard-container {
    width: 100%;
  }
  
  .floating-summary {
    width: 280px;
    right: 15px;
    bottom: 15px;
  }
  
  .floating-summary::after {
    font-size: 11px;
    padding: 5px 10px;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 48px;
  }
  
  .wizard-steps {
    padding: 30px;
    min-height: 500px;
  }
  
  .wizard-header h2 {
    font-size: 28px;
  }
  
  .ai-assistant {
    padding: 24px;
    min-height: 100px;
  }
  
  .assistant-avatar {
    font-size: 36px;
  }
  
  .assistant-message p {
    font-size: 18px;
  }
  
  .step-form {
    min-height: 250px;
  }
  
  .wizard-container {
    width: 100%;
  }
  
  .floating-summary {
    width: 260px;
    right: 10px;
    bottom: 10px;
  }
  
  .floating-summary::after {
    display: none;
  }
  
  .summary-modal {
    width: 95%;
    padding: 24px;
  }
  
  .quote-actions {
    flex-direction: column;
  }
  
  .works-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 36px;
  }
  
  .hero-section {
    padding: 80px 0 60px;
  }
  
  .wizard-section {
    padding: 60px 0;
  }
  
  .wizard-steps {
    padding: 20px;
    min-height: 450px;
  }
  
  .wizard-header h2 {
    font-size: 24px;
  }
  
  .ai-assistant {
    padding: 20px;
    min-height: 80px;
    flex-direction: column;
    text-align: center;
  }
  
  .assistant-avatar {
    font-size: 32px;
  }
  
  .assistant-message p {
    font-size: 16px;
  }
  
  .step-form {
    min-height: 200px;
  }
  
  .nav-btn {
    padding: 12px 20px;
    font-size: 14px;
  }
  
  .floating-summary {
    width: 200px;
    right: 6px;
    bottom: 6px;
    padding: 8px;
  }
  
  .floating-summary::after {
    display: none;
  }
  
  .summary-preview {
    gap: 6px;
  }
  
  .summary-icon {
    font-size: 18px;
  }
  
  .summary-cost {
    font-size: 14px;
  }
  
  .summary-complexity {
    font-size: 11px;
  }
  
  .summary-modal {
    width: 98%;
    padding: 16px;
  }
  
  .modal-header {
    margin: -16px -16px 16px -16px;
    padding: 16px 16px 12px 16px;
  }
  
  .modal-header h3 {
    font-size: 24px;
  }
  
  .close-btn {
    width: 36px;
    height: 36px;
    font-size: 20px;
  }
  
  .modal-content .summary-section {
    padding: 12px;
  }
  
  .modal-content .quick-estimate,
  .modal-content .quote-results {
    padding: 16px;
  }
  
  .modal-content .quote-actions {
    flex-direction: column;
    gap: 8px;
  }
  
  .modal-content .estimate-range,
  .modal-content .quote-price {
    padding: 12px;
  }
  
  .modal-content .estimate-price {
    font-size: 18px;
  }
  
  .modal-content .price-amount {
    font-size: 22px;
  }
  
  .how-it-works {
    padding: 60px 0;
  }
}
</style>
