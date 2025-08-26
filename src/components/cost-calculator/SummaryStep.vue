<template>
  <div class="step-component">
    <h3 class="step-title">📋 Project Summary & Cost Breakdown</h3>
    
    <!-- Project Overview -->
    <div class="project-overview">
      <h4 class="overview-title">🎯 Project Overview</h4>
      <div class="overview-grid">
        <div class="overview-item">
          <span class="overview-icon">🚀</span>
          <div class="overview-content">
            <span class="overview-label">Project Type</span>
            <span class="overview-value">{{ getProjectTypeName() }}</span>
          </div>
        </div>
        
        <div class="overview-item">
          <span class="overview-icon">⚙️</span>
          <div class="overview-content">
            <span class="overview-label">Features</span>
            <span class="overview-value">{{ getSelectedFeaturesCount() }} selected</span>
          </div>
        </div>
        
        <div class="overview-item">
          <span class="overview-icon">🎨</span>
          <div class="overview-content">
            <span class="overview-label">Design Level</span>
            <span class="overview-value">{{ getDesignLevelName() }}</span>
          </div>
        </div>
        
        <div class="overview-item">
          <span class="overview-icon">⏰</span>
          <div class="overview-content">
            <span class="overview-label">Timeline</span>
            <span class="overview-value">{{ getTimelineName() }}</span>
          </div>
        </div>
        
        <div class="overview-item">
          <span class="overview-icon">👥</span>
          <div class="overview-content">
            <span class="overview-label">Team Size</span>
            <span class="overview-value">{{ getTeamName() }}</span>
          </div>
        </div>
        
        <div class="overview-item">
          <span class="overview-icon">🔧</span>
          <div class="overview-content">
            <span class="overview-label">Support Plan</span>
            <span class="overview-value">{{ getSupportPlanName() }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Business Context Summary -->
    <div class="business-summary">
      <h4 class="summary-title">🏢 Business Context</h4>
      <div class="context-summary">
        <div class="context-item">
          <span class="context-icon">🏭</span>
          <span class="context-label">Industry:</span>
          <span class="context-value">{{ getIndustryName() }}</span>
        </div>
        
        <div class="context-item">
          <span class="context-icon">📈</span>
          <span class="context-label">Market Position:</span>
          <span class="context-value">{{ getMarketPositionName() }}</span>
        </div>
        
        <div class="context-item">
          <span class="context-icon">🔒</span>
          <span class="context-label">Regulatory Level:</span>
          <span class="context-value">{{ getRegulatoryLevelName() }}</span>
        </div>
        
        <div class="context-item">
          <span class="context-icon">🎯</span>
          <span class="context-label">Business Criticality:</span>
          <span class="context-value">{{ getCriticalityLevelName() }}</span>
        </div>
      </div>
    </div>
    
    <!-- Cost Breakdown -->
    <div class="cost-breakdown">
      <h4 class="cost-title">💰 Cost Breakdown</h4>
      
      <div class="cost-sections">
        <!-- Base Cost -->
        <div class="cost-section">
          <h5 class="section-title">Base Project Cost</h5>
          <div class="cost-items">
            <div class="cost-item">
              <span class="item-label">Project Type Base:</span>
              <span class="item-value">${{ formatNumber(getBaseCost()) }}</span>
            </div>
            
            <div class="cost-item">
              <span class="item-label">Features:</span>
              <span class="item-value">${{ formatNumber(getFeaturesCost()) }}</span>
            </div>
            
            <div class="cost-item">
              <span class="item-label">Design Level:</span>
              <span class="item-value">${{ formatNumber(getDesignCost()) }}</span>
            </div>
            
            <div class="cost-item">
              <span class="item-label">Timeline Factor:</span>
              <span class="item-value">${{ formatNumber(getTimelineCost()) }}</span>
            </div>
            
            <div class="cost-item">
              <span class="item-label">Team Size:</span>
              <span class="item-value">${{ formatNumber(getTeamCost()) }}</span>
            </div>
            
            <div class="cost-item">
              <span class="item-label">Support Plan:</span>
              <span class="item-value">${{ formatNumber(getSupportCost()) }}</span>
            </div>
          </div>
          
          <div class="cost-subtotal">
            <span class="subtotal-label">Subtotal:</span>
            <span class="subtotal-value">${{ formatNumber(getSubtotal()) }}</span>
          </div>
        </div>
        
        <!-- Business Context Factors -->
        <div class="cost-section">
          <h5 class="section-title">Business Context Factors</h5>
          <div class="cost-items">
            <div class="cost-item">
              <span class="item-label">Industry Factor:</span>
              <span class="item-value">{{ getIndustryFactor() }}x</span>
              <span class="item-impact">${{ formatNumber(getIndustryImpact()) }}</span>
            </div>
            
            <div class="cost-item">
              <span class="item-label">Market Position:</span>
              <span class="item-value">{{ getMarketFactor() }}x</span>
              <span class="item-impact">${{ formatNumber(getMarketImpact()) }}</span>
            </div>
            
            <div class="cost-item">
              <span class="item-label">Regulatory Compliance:</span>
              <span class="item-value">{{ getRegulatoryFactor() }}x</span>
              <span class="item-impact">${{ formatNumber(getRegulatoryImpact()) }}</span>
            </div>
            
            <div class="cost-item">
              <span class="item-label">Business Criticality:</span>
              <span class="item-value">{{ getCriticalityFactor() }}x</span>
              <span class="item-impact">${{ formatNumber(getCriticalityImpact()) }}</span>
            </div>
          </div>
          
          <div class="cost-subtotal">
            <span class="subtotal-label">Context Adjustment:</span>
            <span class="subtotal-value">${{ formatNumber(getContextAdjustment()) }}</span>
          </div>
        </div>
      </div>
      
      <!-- Total Cost -->
      <div class="total-cost">
        <div class="total-header">
          <h3>Total Project Cost</h3>
          <span class="total-amount">${{ formatNumber(getTotalCost()) }}</span>
        </div>
        
        <div class="total-breakdown">
          <div class="total-item">
            <span class="total-label">Base Cost:</span>
            <span class="total-value">${{ formatNumber(getSubtotal()) }}</span>
          </div>
          <div class="total-item">
            <span class="total-label">Context Adjustment:</span>
            <span class="total-value">${{ formatNumber(getContextAdjustment()) }}</span>
          </div>
          <div class="total-item total-final">
            <span class="total-label">Final Total:</span>
            <span class="total-value">${{ formatNumber(getTotalCost()) }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Project Timeline -->
    <div class="project-timeline">
      <h4 class="timeline-title">📅 Project Timeline</h4>
      <div class="timeline-content">
        <div class="timeline-estimate">
          <div class="estimate-item">
            <span class="estimate-icon">⏱️</span>
            <div class="estimate-content">
              <span class="estimate-label">Estimated Duration</span>
              <span class="estimate-value">{{ getEstimatedDuration() }}</span>
            </div>
          </div>
          
          <div class="estimate-item">
            <span class="estimate-icon">🚀</span>
            <div class="estimate-content">
              <span class="estimate-label">Launch Date</span>
              <span class="estimate-value">{{ getLaunchDate() }}</span>
            </div>
          </div>
          
          <div class="estimate-item">
            <span class="estimate-icon">📊</span>
            <div class="estimate-content">
              <span class="estimate-label">Development Phases</span>
              <span class="estimate-value">{{ getDevelopmentPhases() }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Recommendations -->
    <div class="recommendations">
      <h4 class="recommendations-title">💡 Recommendations</h4>
      <div class="recommendations-content">
        <div class="recommendation-item">
          <span class="recommendation-icon">🎯</span>
          <div class="recommendation-content">
            <h5>Project Scope</h5>
            <p>{{ getScopeRecommendation() }}</p>
          </div>
        </div>
        
        <div class="recommendation-item">
          <span class="recommendation-icon">💰</span>
          <div class="recommendation-content">
            <h5>Cost Optimization</h5>
            <p>{{ getCostRecommendation() }}</p>
          </div>
        </div>
        
        <div class="recommendation-item">
          <span class="recommendation-icon">⚡</span>
          <div class="recommendation-content">
            <h5>Timeline</h5>
            <p>{{ getTimelineRecommendation() }}</p>
          </div>
        </div>
        
        <div class="recommendation-item">
          <span class="recommendation-icon">🔒</span>
          <div class="recommendation-content">
            <h5>Security & Compliance</h5>
            <p>{{ getSecurityRecommendation() }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Action Buttons -->
    <div class="action-buttons">
      <button @click="emit('previous')" class="btn btn-secondary">
        ← Back to Previous Step
      </button>
      
      <button @click="downloadPDF" class="btn btn-primary">
        📄 Download PDF Quote
      </button>
      
      <button @click="scheduleConsultation" class="btn btn-accent">
        📞 Schedule Free Consultation
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Questionnaire } from '@/utils/cost_calculation.algorythm'

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

// Helper functions for getting names
const getProjectTypeName = () => {
  const projectTypes = {
    landing_page: 'Landing Page',
    corporate_website: 'Corporate Website',
    saas_web_app: 'SaaS Web Application',
    ecommerce_platform: 'E-commerce Platform',
    mobile_app: 'Mobile Application',
    enterprise_system: 'Enterprise System'
  }
  return projectTypes[props.modelValue.productType as keyof typeof projectTypes] || 'Not selected'
}

const getSelectedFeaturesCount = () => {
  return props.modelValue.features?.length || 0
}

const getDesignLevelName = () => {
  const designLevels = {
    basic: 'Basic / Template',
    standard: 'Standard Modern',
    custom: 'Custom Premium',
    luxury: 'Luxury'
  }
  return designLevels[props.modelValue.designLevel as keyof typeof designLevels] || 'Not selected'
}

const getTimelineName = () => {
  const timelines = {
    relaxed: 'Relaxed',
    standard: 'Standard',
    urgent: 'Urgent',
    very_urgent: 'Very Urgent'
  }
  return timelines[props.modelValue.timeline as keyof typeof timelines] || 'Not selected'
}

const getTeamName = () => {
  const teams = {
    solo: 'Solo Developer',
    small: 'Small Team',
    full: 'Full Team'
  }
  return teams[props.modelValue.team as keyof typeof teams] || 'Not selected'
}

const getSupportPlanName = () => {
  const supportPlans = {
    none: 'No Support',
    basic: 'Basic',
    standard: 'Standard',
    premium: 'Premium',
    full: 'Full'
  }
  return supportPlans[props.modelValue.supportPlan as keyof typeof supportPlans] || 'Not selected'
}

const getIndustryName = () => {
  const industries = {
    technology: 'Technology',
    fintech: 'Fintech',
    healthcare: 'Healthcare',
    ecommerce: 'E-commerce',
    education: 'Education',
    manufacturing: 'Manufacturing',
    real_estate: 'Real Estate',
    consulting: 'Consulting',
    other: 'Other'
  }
  return industries[props.modelValue.industry as keyof typeof industries] || 'Not selected'
}

const getMarketPositionName = () => {
  const marketPositions = {
    startup: 'Startup',
    growth: 'Growth Stage',
    established: 'Established',
    enterprise: 'Enterprise',
    government: 'Government'
  }
  return marketPositions[props.modelValue.marketPosition as keyof typeof marketPositions] || 'Not selected'
}

const getRegulatoryLevelName = () => {
  const regulatoryLevels = {
    none: 'No special regulations',
    light: 'Light regulations',
    moderate: 'Moderate regulations',
    heavy: 'Heavy regulations',
    critical: 'Critical regulations'
  }
  return regulatoryLevels[props.modelValue.regulatoryEnvironment as keyof typeof regulatoryLevels] || 'Not selected'
}

const getCriticalityLevelName = () => {
  const criticalityLevels = {
    nice_to_have: 'Nice to have',
    important: 'Important',
    critical: 'Critical for operations',
    existential: 'Existential for business'
  }
  return criticalityLevels[props.modelValue.businessCriticality as keyof typeof criticalityLevels] || 'Not selected'
}

// Cost calculation functions
const getBaseCost = () => {
  // Base costs for different project types
  const baseCosts = {
    landing_page: 5000,
    corporate_website: 15000,
    saas_web_app: 35000,
    ecommerce_platform: 25000,
    mobile_app: 40000,
    enterprise_system: 75000
  }
  return baseCosts[props.modelValue.productType as keyof typeof baseCosts] || 20000
}

const getFeaturesCost = () => {
  const featureCosts = {
    user_authentication: 3000,
    payment_processing: 4000,
    admin_panel: 2500,
    api_integration: 2000,
    analytics_dashboard: 3000,
    multi_language: 2000,
    mobile_responsive: 1500,
    seo_optimization: 1000,
    content_management: 2000,
    social_media_integration: 1500,
    email_marketing: 2000,
    chat_support: 1500,
    advanced_search: 2000,
    user_reviews: 1000,
    inventory_management: 3000,
    order_tracking: 2000,
    customer_portal: 3000,
    reporting_tools: 2500,
    backup_system: 1500,
    security_features: 4000
  }
  
  let total = 0
  props.modelValue.features?.forEach(feature => {
    total += featureCosts[feature as keyof typeof featureCosts] || 0
  })
  return total
}

const getDesignCost = () => {
  const designCosts = {
    basic: 0,
    standard: 5000,
    custom: 15000,
    luxury: 25000
  }
  return designCosts[props.modelValue.designLevel as keyof typeof designCosts] || 0
}

const getTimelineCost = () => {
  const timelineCosts = {
    relaxed: -2000,
    standard: 0,
    urgent: 5000,
    very_urgent: 12000
  }
  return timelineCosts[props.modelValue.timeline as keyof typeof timelineCosts] || 0
}

const getTeamCost = () => {
  const teamCosts = {
    solo: -5000,
    small: 0,
    full: 15000
  }
  return teamCosts[props.modelValue.team as keyof typeof teamCosts] || 0
}

const getSupportCost = () => {
  const supportCosts = {
    none: 0,
    basic: 2000,
    standard: 5000,
    premium: 10000,
    full: 20000
  }
  return supportCosts[props.modelValue.supportPlan as keyof typeof supportCosts] || 0
}

const getSubtotal = () => {
  return getBaseCost() + getFeaturesCost() + getDesignCost() + getTimelineCost() + getTeamCost() + getSupportCost()
}

// Business context factors
const getIndustryFactor = () => {
  const factors = {
    technology: 1.05,
    fintech: 1.20,
    healthcare: 1.25,
    ecommerce: 1.10,
    education: 1.15,
    manufacturing: 1.10,
    real_estate: 1.15,
    consulting: 1.05,
    other: 1.0
  }
  return factors[props.modelValue.industry as keyof typeof factors] || 1.0
}

const getMarketFactor = () => {
  const factors = {
    startup: 0.95,
    growth: 1.0,
    established: 1.10,
    enterprise: 1.25,
    government: 1.30
  }
  return factors[props.modelValue.marketPosition as keyof typeof factors] || 1.0
}

const getRegulatoryFactor = () => {
  const factors = {
    none: 1.0,
    light: 1.05,
    moderate: 1.15,
    heavy: 1.25,
    critical: 1.40
  }
  return factors[props.modelValue.regulatoryEnvironment as keyof typeof factors] || 1.0
}

const getCriticalityFactor = () => {
  const factors = {
    nice_to_have: 0.90,
    important: 1.0,
    critical: 1.20,
    existential: 1.35
  }
  return factors[props.modelValue.businessCriticality as keyof typeof factors] || 1.0
}

const getIndustryImpact = () => {
  return getSubtotal() * (getIndustryFactor() - 1)
}

const getMarketImpact = () => {
  return getSubtotal() * (getMarketFactor() - 1)
}

const getRegulatoryImpact = () => {
  return getSubtotal() * (getRegulatoryFactor() - 1)
}

const getCriticalityImpact = () => {
  return getSubtotal() * (getCriticalityFactor() - 1)
}

const getContextAdjustment = () => {
  return getIndustryImpact() + getMarketImpact() + getRegulatoryImpact() + getCriticalityImpact()
}

const getTotalCost = () => {
  return getSubtotal() + getContextAdjustment()
}

// Timeline calculations
const getEstimatedDuration = () => {
  const baseDuration = {
    landing_page: '2-3 weeks',
    corporate_website: '4-6 weeks',
    saas_web_app: '8-12 weeks',
    ecommerce_platform: '6-10 weeks',
    mobile_app: '10-16 weeks',
    enterprise_system: '16-24 weeks'
  }
  
  const timeline = baseDuration[props.modelValue.productType as keyof typeof baseDuration] || '6-8 weeks'
  
  // Adjust based on timeline urgency
  if (props.modelValue.timeline === 'urgent') {
    return timeline.replace(/(\d+)-(\d+)/, (_, min, max) => `${Math.floor(min * 0.7)}-${Math.floor(max * 0.7)}`)
  } else if (props.modelValue.timeline === 'very_urgent') {
    return timeline.replace(/(\d+)-(\d+)/, (_, min, max) => `${Math.floor(min * 0.5)}-${Math.floor(max * 0.5)}`)
  }
  
  return timeline
}

const getLaunchDate = () => {
  const weeks = parseInt(getEstimatedDuration().split('-')[1]) || 8
  const launchDate = new Date()
  launchDate.setDate(launchDate.getDate() + (weeks * 7))
  return launchDate.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

const getDevelopmentPhases = () => {
  const phases = {
    landing_page: 'Design → Development → Testing → Launch',
    corporate_website: 'Planning → Design → Development → Testing → Launch',
    saas_web_app: 'Discovery → Design → Development → Testing → Deployment → Launch',
    ecommerce_platform: 'Planning → Design → Development → Testing → Integration → Launch',
    mobile_app: 'Discovery → Design → Development → Testing → App Store → Launch',
    enterprise_system: 'Discovery → Architecture → Design → Development → Testing → Deployment → Launch'
  }
  return phases[props.modelValue.productType as keyof typeof phases] || 'Standard development phases'
}

// Recommendations
const getScopeRecommendation = () => {
  if (props.modelValue.features?.length && props.modelValue.features.length > 15) {
    return 'Consider breaking this into phases. Start with core features and add others incrementally.'
  } else if (props.modelValue.features?.length && props.modelValue.features.length < 5) {
    return 'This is a focused project. Consider if you need additional features for better user experience.'
  }
  return 'Good scope balance. The project has a clear focus without being too complex.'
}

const getCostRecommendation = () => {
  const total = getTotalCost()
  if (total > 100000) {
    return 'High-value project. Consider phased approach to manage budget and risk.'
  } else if (total < 20000) {
    return 'Cost-effective project. Good for MVP or testing market demand.'
  }
  return 'Reasonable investment for the scope and complexity.'
}

const getTimelineRecommendation = () => {
  if (props.modelValue.timeline === 'very_urgent') {
    return 'Very tight timeline. Consider if this urgency is necessary - it may impact quality and cost.'
  } else if (props.modelValue.timeline === 'urgent') {
    return 'Fast-track project. Ensure clear requirements to avoid delays.'
  }
  return 'Comfortable timeline. Allows for thorough development and testing.'
}

const getSecurityRecommendation = () => {
  if (props.modelValue.industry === 'fintech' || props.modelValue.industry === 'healthcare') {
    return 'High security requirements. Ensure compliance with industry standards and regulations.'
  } else if (props.modelValue.businessCriticality === 'existential') {
    return 'Mission-critical system. Invest in security, backup, and monitoring solutions.'
  }
  return 'Standard security measures should be sufficient for this project type.'
}

// Utility functions
const formatNumber = (num: number) => {
  return num.toLocaleString('en-US')
}

// Action functions
const downloadPDF = () => {
  // Implementation for PDF download
  console.log('Downloading PDF...')
}

const scheduleConsultation = () => {
  // Implementation for scheduling consultation
  console.log('Scheduling consultation...')
}
</script>

<style scoped>
.step-component {
  max-width: 1000px;
  margin: 0 auto;
}

.step-title {
  color: var(--color-text-primary);
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
}

/* Project Overview */
.project-overview {
  background: rgba(127, 0, 253, 0.05);
  border: 1px solid rgba(127, 0, 253, 0.2);
  border-radius: 20px;
  padding: 32px;
  margin-bottom: 32px;
}

.overview-title {
  color: var(--color-text-primary);
  font-size: 22px;
  font-weight: 600;
  margin: 0 0 24px 0;
  text-align: center;
}

.overview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.overview-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.overview-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.overview-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.overview-label {
  color: var(--color-text-muted);
  font-size: 14px;
  font-weight: 500;
}

.overview-value {
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 600;
}

/* Business Summary */
.business-summary {
  background: rgba(34, 252, 176, 0.05);
  border: 1px solid rgba(34, 252, 176, 0.2);
  border-radius: 20px;
  padding: 32px;
  margin-bottom: 32px;
}

.summary-title {
  color: var(--color-text-primary);
  font-size: 22px;
  font-weight: 600;
  margin: 0 0 24px 0;
  text-align: center;
}

.context-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

.context-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
}

.context-icon {
  font-size: 20px;
  flex-shrink: 0;
}

.context-label {
  color: var(--color-text-muted);
  font-size: 14px;
  font-weight: 500;
  flex: 1;
}

.context-value {
  color: var(--color-text-primary);
  font-size: 14px;
  font-weight: 600;
}

/* Cost Breakdown */
.cost-breakdown {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 32px;
  margin-bottom: 32px;
}

.cost-title {
  color: var(--color-text-primary);
  font-size: 22px;
  font-weight: 600;
  margin: 0 0 24px 0;
  text-align: center;
}

.cost-sections {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: 32px;
}

.cost-section {
  background: rgba(255, 255, 255, 0.05);
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

.cost-items {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
}

.cost-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
}

.item-label {
  color: var(--color-text-muted);
  font-size: 14px;
  flex: 1;
}

.item-value {
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 600;
  margin: 0 16px;
}

.item-impact {
  color: var(--color-secondary-teal);
  font-size: 14px;
  font-weight: 600;
  min-width: 80px;
  text-align: right;
}

.cost-subtotal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: rgba(34, 252, 176, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(34, 252, 176, 0.2);
}

.subtotal-label {
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 600;
}

.subtotal-value {
  color: var(--color-secondary-teal);
  font-size: 18px;
  font-weight: 700;
}

/* Total Cost */
.total-cost {
  background: linear-gradient(135deg, rgba(127, 0, 253, 0.1), rgba(34, 252, 176, 0.1));
  border: 2px solid rgba(127, 0, 253, 0.3);
  border-radius: 20px;
  padding: 32px;
  text-align: center;
}

.total-header {
  margin-bottom: 24px;
}

.total-header h3 {
  color: var(--color-text-primary);
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 16px 0;
}

.total-amount {
  color: var(--color-secondary-teal);
  font-size: 36px;
  font-weight: 800;
}

.total-breakdown {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  margin: 0 auto;
}

.total-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
}

.total-item.total-final {
  background: rgba(34, 252, 176, 0.2);
  border: 1px solid rgba(34, 252, 176, 0.3);
}

.total-label {
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 600;
}

.total-value {
  color: var(--color-secondary-teal);
  font-size: 18px;
  font-weight: 700;
}

/* Project Timeline */
.project-timeline {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 32px;
  margin-bottom: 32px;
}

.timeline-title {
  color: var(--color-text-primary);
  font-size: 22px;
  font-weight: 600;
  margin: 0 0 24px 0;
  text-align: center;
}

.timeline-content {
  display: flex;
  justify-content: center;
}

.timeline-estimate {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 800px;
}

.estimate-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.estimate-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.estimate-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.estimate-label {
  color: var(--color-text-muted);
  font-size: 14px;
  font-weight: 500;
}

.estimate-value {
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 600;
}

/* Recommendations */
.recommendations {
  background: rgba(34, 252, 176, 0.05);
  border: 1px solid rgba(34, 252, 176, 0.2);
  border-radius: 20px;
  padding: 32px;
  margin-bottom: 32px;
}

.recommendations-title {
  color: var(--color-text-primary);
  font-size: 22px;
  font-weight: 600;
  margin: 0 0 24px 0;
  text-align: center;
}

.recommendations-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.recommendation-item {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.recommendation-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.recommendation-content h5 {
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 8px 0;
}

.recommendation-content p {
  color: var(--color-text-muted);
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
}

/* Action Buttons */
.action-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

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

.btn-primary {
  background: var(--color-primary-purple);
  color: white;
}

.btn-primary:hover {
  background: var(--color-primary-purple);
  opacity: 0.9;
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

/* Responsive Design */
@media (max-width: 768px) {
  .overview-grid {
    grid-template-columns: 1fr;
  }
  
  .cost-sections {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .context-summary {
    grid-template-columns: 1fr;
  }
  
  .timeline-estimate {
    grid-template-columns: 1fr;
  }
  
  .recommendations-content {
    grid-template-columns: 1fr;
  }
  
  .action-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}
</style>
