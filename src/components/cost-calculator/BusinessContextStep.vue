<template>
  <div class="step-component">
    <h3 class="step-title">Tell us about your business context</h3>
    
    <div class="business-context-grid">
      <!-- Industry Selection -->
      <div class="context-section">
        <h4 class="section-title">🏭 Industry</h4>
        <div class="industry-options">
          <label 
            v-for="industry in industries" 
            :key="industry.key"
            class="industry-option"
            :class="{ selected: modelValue.industry === industry.key }"
          >
            <input 
              type="radio" 
              :value="industry.key" 
              :name="'industry'" 
              v-model="modelValue.industry"
              class="industry-input"
            >
            <div class="industry-content">
              <span class="industry-icon">{{ industry.icon }}</span>
              <span class="industry-name">{{ industry.name }}</span>
            </div>
          </label>
        </div>
      </div>
      
      <!-- Market Position -->
      <div class="context-section">
        <h4 class="section-title">📈 Market Position</h4>
        <div class="market-options">
          <label 
            v-for="position in marketPositions" 
            :key="position.key"
            class="market-option"
            :class="{ selected: modelValue.marketPosition === position.key }"
          >
            <input 
              type="radio" 
              :value="position.key" 
              :name="'marketPosition'" 
              v-model="modelValue.marketPosition"
              class="market-input"
            >
            <div class="market-content">
              <span class="market-icon">{{ position.icon }}</span>
              <span class="market-name">{{ position.name }}</span>
              <span class="market-description">{{ position.description }}</span>
            </div>
          </label>
        </div>
      </div>
      
      <!-- Regulatory Environment -->
      <div class="context-section">
        <h4 class="section-title">🔒 Regulatory Environment</h4>
        <div class="regulatory-options">
          <label 
            v-for="level in regulatoryLevels" 
            :key="level.key"
            class="regulatory-option"
            :class="{ selected: modelValue.regulatoryEnvironment === level.key }"
          >
            <input 
              type="radio" 
              :value="level.key" 
              :name="'regulatoryEnvironment'" 
              v-model="modelValue.regulatoryEnvironment"
              class="regulatory-input"
            >
            <div class="regulatory-content">
              <span class="regulatory-icon">{{ level.icon }}</span>
              <span class="regulatory-name">{{ level.name }}</span>
              <span class="regulatory-impact">{{ level.impact }}</span>
            </div>
          </label>
        </div>
      </div>
      
      <!-- Business Criticality -->
      <div class="context-section">
        <h4 class="section-title">🎯 Business Criticality</h4>
        <div class="criticality-options">
          <label 
            v-for="level in criticalityLevels" 
            :key="level.key"
            class="criticality-option"
            :class="{ selected: modelValue.businessCriticality === level.key }"
          >
            <input 
              type="radio" 
              :value="level.key" 
              :name="'businessCriticality'" 
              v-model="modelValue.businessCriticality"
              class="criticality-input"
            >
            <div class="criticality-content">
              <span class="criticality-icon">{{ level.icon }}</span>
              <span class="criticality-name">{{ level.name }}</span>
              <span class="criticality-description">{{ level.description }}</span>
            </div>
          </label>
        </div>
      </div>
    </div>
    
    <!-- Industry Impact Calculator -->
    <div class="industry-impact">
      <h4 class="impact-title">💼 Industry Impact Calculator</h4>
      <div class="impact-content">
        <div class="impact-summary">
          <div class="summary-item">
            <span class="summary-label">Selected Industry:</span>
            <span class="summary-value">{{ getIndustryName() }}</span>
          </div>
          <div class="summary-item">
            <span class="summary-label">Market Position:</span>
            <span class="summary-value">{{ getMarketPositionName() }}</span>
          </div>
          <div class="summary-item">
            <span class="summary-label">Regulatory Level:</span>
            <span class="summary-value">{{ getRegulatoryLevelName() }}</span>
          </div>
          <div class="summary-item">
            <span class="summary-label">Business Criticality:</span>
            <span class="summary-value">{{ getCriticalityLevelName() }}</span>
          </div>
        </div>
        
        <div class="impact-breakdown">
          <h5>Cost Impact Breakdown:</h5>
          <div class="breakdown-items">
            <div class="breakdown-item">
              <span class="item-label">Industry Factor:</span>
              <span class="item-value">{{ getIndustryFactor() }}x</span>
              <span class="item-reason">{{ getIndustryReason() }}</span>
            </div>
            <div class="breakdown-item">
              <span class="item-label">Market Position:</span>
              <span class="item-value">{{ getMarketFactor() }}x</span>
              <span class="item-reason">{{ getMarketReason() }}</span>
            </div>
            <div class="breakdown-item">
              <span class="item-label">Regulatory Compliance:</span>
              <span class="item-value">{{ getRegulatoryFactor() }}x</span>
              <span class="item-reason">{{ getRegulatoryReason() }}</span>
            </div>
            <div class="breakdown-item">
              <span class="item-label">Business Criticality:</span>
              <span class="item-value">{{ getCriticalityFactor() }}x</span>
              <span class="item-reason">{{ getCriticalityReason() }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Compliance Requirements -->
    <div v-if="hasComplianceRequirements()" class="compliance-section">
      <h4 class="compliance-title">📋 Compliance Requirements</h4>
      <div class="compliance-grid">
        <div 
          v-for="requirement in getComplianceRequirements()" 
          :key="requirement.name"
          class="compliance-item"
        >
          <div class="compliance-header">
            <span class="compliance-icon">{{ requirement.icon }}</span>
            <span class="compliance-name">{{ requirement.name }}</span>
          </div>
          <p class="compliance-description">{{ requirement.description }}</p>
          <div class="compliance-impact">
            <span class="impact-label">Cost Impact:</span>
            <span class="impact-value">{{ requirement.costImpact }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Help Section -->
    <div class="help-section">
      <div class="help-toggle" @click="showHelp = !showHelp">
        <span>💡 How does business context affect project cost?</span>
        <span class="help-arrow" :class="{ expanded: showHelp }">▼</span>
      </div>
      
      <div v-if="showHelp" class="help-content">
        <div class="help-tips">
          <div class="help-tip">
            <h5>🏭 Industry Standards</h5>
            <p>Different industries have different requirements, security standards, and compliance needs that affect development complexity.</p>
          </div>
          
          <div class="help-tip">
            <h5>📈 Market Position</h5>
            <p>Startups often need cost-effective solutions, while enterprises require enterprise-grade features and support.</p>
          </div>
          
          <div class="help-tip">
            <h5>🔒 Regulatory Compliance</h5>
            <p>Compliance requirements (GDPR, HIPAA, SOX) add significant development time and testing requirements.</p>
          </div>
          
          <div class="help-tip">
            <h5>🎯 Business Criticality</h5>
            <p>Mission-critical systems require more rigorous testing, security measures, and reliability features.</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Quick Decision Helper -->
    <div class="decision-helper">
      <h4>🤔 Need help choosing?</h4>
      <div class="helper-questions">
        <div class="helper-question">
          <p><strong>What industry are you in?</strong></p>
          <div class="helper-options">
            <button @click="selectTechIndustry" class="helper-btn">Technology</button>
            <button @click="selectFintechIndustry" class="helper-btn">Fintech</button>
            <button @click="selectHealthcareIndustry" class="helper-btn">Healthcare</button>
            <button @click="selectEcommerceIndustry" class="helper-btn">E-commerce</button>
          </div>
        </div>
        
        <div class="helper-question">
          <p><strong>How established is your business?</strong></p>
          <div class="helper-options">
            <button @click="selectStartup" class="helper-btn">Startup</button>
            <button @click="selectGrowth" class="helper-btn">Growing</button>
            <button @click="selectEstablished" class="helper-btn">Established</button>
            <button @click="selectEnterprise" class="helper-btn">Enterprise</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Questionnaire } from '@/utils/cost-calculation-algorithm'

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

// Industry options
const industries = [
  { key: 'technology', name: 'Technology', icon: '💻' },
  { key: 'fintech', name: 'Fintech', icon: '💰' },
  { key: 'healthcare', name: 'Healthcare', icon: '🏥' },
  { key: 'ecommerce', name: 'E-commerce', icon: '🛒' },
  { key: 'education', name: 'Education', icon: '🎓' },
  { key: 'manufacturing', name: 'Manufacturing', icon: '🏭' },
  { key: 'real_estate', name: 'Real Estate', icon: '🏠' },
  { key: 'consulting', name: 'Consulting', icon: '💼' },
  { key: 'other', name: 'Other', icon: '🔧' }
]

// Market positions
const marketPositions = [
  { key: 'startup', name: 'Startup', icon: '🚀', description: '0-2 years, seeking market fit' },
  { key: 'growth', name: 'Growth Stage', icon: '📈', description: '2-5 years, expanding rapidly' },
  { key: 'established', name: 'Established', icon: '🏢', description: '5-10 years, stable business' },
  { key: 'enterprise', name: 'Enterprise', icon: '🏭', description: '10+ years, large organization' },
  { key: 'government', name: 'Government', icon: '🏛️', description: 'Public sector organization' }
]

// Regulatory levels
const regulatoryLevels = [
  { key: 'none', name: 'No special regulations', icon: '✅', impact: 'No additional cost' },
  { key: 'light', name: 'Light regulations', icon: '⚠️', impact: 'Minimal additional cost' },
  { key: 'moderate', name: 'Moderate regulations', icon: '🔒', impact: 'Moderate additional cost' },
  { key: 'heavy', name: 'Heavy regulations', icon: '🚨', impact: 'Significant additional cost' },
  { key: 'critical', name: 'Critical regulations', icon: '⚡', impact: 'Major additional cost' }
]

// Business criticality levels
const criticalityLevels = [
  { key: 'nice_to_have', name: 'Nice to have', icon: '😊', description: 'Not critical for operations' },
  { key: 'important', name: 'Important', icon: '📋', description: 'Improves efficiency but not critical' },
  { key: 'critical', name: 'Critical for operations', icon: '⚡', description: 'Essential for daily operations' },
  { key: 'existential', name: 'Existential for business', icon: '💀', description: 'Business survival depends on it' }
]

// Industry-specific data
const industryData = {
  technology: {
    name: 'Technology',
    factor: 1.05,
    reason: 'Standard development practices, moderate security requirements'
  },
  fintech: {
    name: 'Fintech',
    factor: 1.20,
    reason: 'High security requirements, financial compliance, audit trails'
  },
  healthcare: {
    name: 'Healthcare',
    factor: 1.25,
    reason: 'HIPAA compliance, patient data security, medical regulations'
  },
  ecommerce: {
    name: 'E-commerce',
    factor: 1.10,
    reason: 'Payment processing, inventory management, customer data'
  },
  education: {
    name: 'Education',
    factor: 1.15,
    reason: 'Student data protection, accessibility requirements, scalability'
  },
  manufacturing: {
    name: 'Manufacturing',
    factor: 1.10,
    reason: 'Industrial standards, safety requirements, integration needs'
  },
  real_estate: {
    name: 'Real Estate',
    factor: 1.15,
    reason: 'Property data management, transaction security, compliance'
  },
  consulting: {
    name: 'Consulting',
    factor: 1.05,
    reason: 'Standard business requirements, moderate complexity'
  },
  other: {
    name: 'Other',
    factor: 1.0,
    reason: 'Standard development practices'
  }
}

// Market position factors
const marketFactors = {
  startup: { factor: 0.95, reason: 'Cost-sensitive, MVP approach' },
  growth: { factor: 1.0, reason: 'Balanced approach, standard quality' },
  established: { factor: 1.10, reason: 'Quality-focused, proven solutions' },
  enterprise: { factor: 1.25, reason: 'Enterprise-grade features, high reliability' },
  government: { factor: 1.30, reason: 'Government standards, extensive compliance' }
}

// Regulatory factors
const regulatoryFactors = {
  none: { factor: 1.0, reason: 'No additional compliance requirements' },
  light: { factor: 1.05, reason: 'Basic compliance documentation' },
  moderate: { factor: 1.15, reason: 'Standard compliance frameworks' },
  heavy: { factor: 1.25, reason: 'Extensive compliance requirements' },
  critical: { factor: 1.40, reason: 'Critical compliance with penalties' }
}

// Criticality factors
const criticalityFactors = {
  nice_to_have: { factor: 0.90, reason: 'Lower priority, basic quality acceptable' },
  important: { factor: 1.0, reason: 'Standard quality and testing' },
  critical: { factor: 1.20, reason: 'High reliability, extensive testing' },
  existential: { factor: 1.35, reason: 'Mission-critical, maximum reliability' }
}

// Compliance requirements
const complianceRequirements = {
  fintech: [
    {
      name: 'PCI DSS Compliance',
      icon: '💳',
      description: 'Payment card industry security standards for handling credit card data',
      costImpact: '+15-25%'
    },
    {
      name: 'Financial Regulations',
      icon: '🏦',
      description: 'Anti-money laundering (AML) and know-your-customer (KYC) requirements',
      costImpact: '+10-20%'
    }
  ],
  healthcare: [
    {
      name: 'HIPAA Compliance',
      icon: '🏥',
      description: 'Health Insurance Portability and Accountability Act requirements',
      costImpact: '+20-30%'
    },
    {
      name: 'Medical Data Security',
      icon: '🔒',
      description: 'Enhanced security measures for patient health information',
      costImpact: '+15-25%'
    }
  ],
  ecommerce: [
    {
      name: 'GDPR Compliance',
      icon: '🇪🇺',
      description: 'General Data Protection Regulation for EU customer data',
      costImpact: '+10-20%'
    },
    {
      name: 'Payment Security',
      icon: '💳',
      description: 'Secure payment processing and transaction security',
      costImpact: '+15-25%'
    }
  ]
}

// Helper functions
const getIndustryName = () => {
  return industryData[props.modelValue.industry as keyof typeof industryData]?.name || 'Not selected'
}

const getMarketPositionName = () => {
  return marketPositions.find(p => p.key === props.modelValue.marketPosition)?.name || 'Not selected'
}

const getRegulatoryLevelName = () => {
  return regulatoryLevels.find(r => r.key === props.modelValue.regulatoryEnvironment)?.name || 'Not selected'
}

const getCriticalityLevelName = () => {
  return criticalityLevels.find(c => c.key === props.modelValue.businessCriticality)?.name || 'Not selected'
}

const getIndustryFactor = () => {
  return industryData[props.modelValue.industry as keyof typeof industryData]?.factor || 1.0
}

const getIndustryReason = () => {
  return industryData[props.modelValue.industry as keyof typeof industryData]?.reason || 'Standard requirements'
}

const getMarketFactor = () => {
  return marketFactors[props.modelValue.marketPosition as keyof typeof marketFactors]?.factor || 1.0
}

const getMarketReason = () => {
  return marketFactors[props.modelValue.marketPosition as keyof typeof marketFactors]?.reason || 'Standard approach'
}

const getRegulatoryFactor = () => {
  return regulatoryFactors[props.modelValue.regulatoryEnvironment as keyof typeof regulatoryFactors]?.factor || 1.0
}

const getRegulatoryReason = () => {
  return regulatoryFactors[props.modelValue.regulatoryEnvironment as keyof typeof regulatoryFactors]?.reason || 'No special requirements'
}

const getCriticalityFactor = () => {
  return criticalityFactors[props.modelValue.businessCriticality as keyof typeof criticalityFactors]?.factor || 1.0
}

const getCriticalityReason = () => {
  return criticalityFactors[props.modelValue.businessCriticality as keyof typeof criticalityFactors]?.reason || 'Standard quality'
}

const hasComplianceRequirements = () => {
  return props.modelValue.industry && complianceRequirements[props.modelValue.industry as keyof typeof complianceRequirements]
}

const getComplianceRequirements = () => {
  if (!props.modelValue.industry) return []
  return complianceRequirements[props.modelValue.industry as keyof typeof complianceRequirements] || []
}

// Quick decision helpers
const selectTechIndustry = () => {
  props.modelValue.industry = 'technology'
  emit('update:modelValue', props.modelValue)
}

const selectFintechIndustry = () => {
  props.modelValue.industry = 'fintech'
  emit('update:modelValue', props.modelValue)
}

const selectHealthcareIndustry = () => {
  props.modelValue.industry = 'healthcare'
  emit('update:modelValue', props.modelValue)
}

const selectEcommerceIndustry = () => {
  props.modelValue.industry = 'ecommerce'
  emit('update:modelValue', props.modelValue)
}

const selectStartup = () => {
  props.modelValue.marketPosition = 'startup'
  emit('update:modelValue', props.modelValue)
}

const selectGrowth = () => {
  props.modelValue.marketPosition = 'growth'
  emit('update:modelValue', props.modelValue)
}

const selectEstablished = () => {
  props.modelValue.marketPosition = 'established'
  emit('update:modelValue', props.modelValue)
}

const selectEnterprise = () => {
  props.modelValue.marketPosition = 'enterprise'
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

/* Business Context Grid */
.business-context-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 32px;
  margin-bottom: 32px;
}

.context-section {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
}

.section-title {
  color: var(--color-text-primary);
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 20px 0;
  text-align: center;
}

/* Industry Options */
.industry-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 12px;
}

.industry-option {
  background: rgba(255, 255, 255, 0.02);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
}

.industry-option:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--color-primary-purple);
}

.industry-option.selected {
  border-color: var(--color-secondary-teal);
  background: rgba(34, 252, 176, 0.05);
}

.industry-input {
  display: none;
}

.industry-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
}

.industry-icon {
  font-size: 24px;
}

.industry-name {
  color: var(--color-text-primary);
  font-size: 14px;
  font-weight: 500;
}

/* Market Options */
.market-options {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.market-option {
  background: rgba(255, 255, 255, 0.02);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.market-option:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--color-primary-purple);
}

.market-option.selected {
  border-color: var(--color-secondary-teal);
  background: rgba(34, 252, 176, 0.05);
}

.market-input {
  display: none;
}

.market-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.market-icon {
  font-size: 20px;
}

.market-name {
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 600;
  flex: 1;
}

.market-description {
  color: var(--color-text-muted);
  font-size: 12px;
  text-align: right;
}

/* Regulatory Options */
.regulatory-options {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.regulatory-option {
  background: rgba(255, 255, 255, 0.02);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.regulatory-option:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--color-primary-purple);
}

.regulatory-option.selected {
  border-color: var(--color-secondary-teal);
  background: rgba(34, 252, 176, 0.05);
}

.regulatory-input {
  display: none;
}

.regulatory-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.regulatory-icon {
  font-size: 20px;
}

.regulatory-name {
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 600;
  flex: 1;
}

.regulatory-impact {
  color: var(--color-text-muted);
  font-size: 12px;
  text-align: right;
}

/* Criticality Options */
.criticality-options {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.criticality-option {
  background: rgba(255, 255, 255, 0.02);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.criticality-option:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--color-primary-purple);
}

.criticality-option.selected {
  border-color: var(--color-secondary-teal);
  background: rgba(34, 252, 176, 0.05);
}

.criticality-input {
  display: none;
}

.criticality-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.criticality-icon {
  font-size: 20px;
}

.criticality-name {
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 600;
  flex: 1;
}

.criticality-description {
  color: var(--color-text-muted);
  font-size: 12px;
  text-align: right;
}

/* Industry Impact */
.industry-impact {
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

.impact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: start;
}

.impact-summary {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 20px;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.summary-item:last-child {
  border-bottom: none;
}

.summary-label {
  color: var(--color-text-muted);
  font-size: 14px;
}

.summary-value {
  color: var(--color-text-primary);
  font-size: 14px;
  font-weight: 600;
}

.impact-breakdown {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 20px;
}

.impact-breakdown h5 {
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 16px 0;
}

.breakdown-items {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.breakdown-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px;
  background: rgba(34, 252, 176, 0.1);
  border-radius: 8px;
}

.item-label {
  color: var(--color-text-primary);
  font-size: 14px;
  font-weight: 600;
}

.item-value {
  color: var(--color-secondary-teal);
  font-size: 18px;
  font-weight: 700;
}

.item-reason {
  color: var(--color-text-muted);
  font-size: 12px;
  font-style: italic;
}

/* Compliance Section */
.compliance-section {
  background: rgba(34, 252, 176, 0.05);
  border: 1px solid rgba(34, 252, 176, 0.2);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 32px;
}

.compliance-title {
  color: var(--color-text-primary);
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 20px 0;
  text-align: center;
}

.compliance-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.compliance-item {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 20px;
}

.compliance-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.compliance-icon {
  font-size: 24px;
}

.compliance-name {
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 600;
}

.compliance-description {
  color: var(--color-text-muted);
  font-size: 14px;
  line-height: 1.5;
  margin: 0 0 16px 0;
}

.compliance-impact {
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
  flex-wrap: wrap;
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
  .business-context-grid {
    grid-template-columns: 1fr;
  }
  
  .impact-content {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .compliance-grid {
    grid-template-columns: 1fr;
  }
  
  .helper-options {
    flex-direction: column;
    align-items: center;
  }
  
  .help-tips {
    grid-template-columns: 1fr;
  }
}
</style>
