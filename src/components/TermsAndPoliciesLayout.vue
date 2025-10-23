<template>
  <div class="terms-policies-page white-bg">
    <Container>
      <div class="terms-policies-content">


        <!-- Main title section -->
        <div class="main-title-section">
          <p class="subtitle">{{ documentType }}</p>
          <h1 class="main-title">{{ title }}</h1>
        </div>

        <!-- Action buttons -->
        <div class="action-buttons">
          <div class="language-selector">
            <button class="btn btn-language">
              <span>{{ selectedLanguage }}</span>
              <svg class="chevron" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          
          <button class="btn btn-download" @click="downloadPDF" :disabled="isGeneratingPDF">
            <svg v-if="!isGeneratingPDF" class="icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14 14H2V2H8V6H14V14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 2V6H12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg v-else class="icon spinning" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="2" stroke-dasharray="31.416" stroke-dashoffset="31.416">
                <animate attributeName="stroke-dasharray" dur="2s" values="0 31.416;15.708 15.708;0 31.416" repeatCount="indefinite"/>
                <animate attributeName="stroke-dashoffset" dur="2s" values="0;-15.708;-31.416" repeatCount="indefinite"/>
              </circle>
            </svg>
            <span>{{ isGeneratingPDF ? 'Generating...' : 'Download PDF' }}</span>
          </button>
          
          <button class="btn btn-history" @click="showHistory">
            <svg class="icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="2"/>
              <path d="M8 4V8L11 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>History</span>
          </button>
        </div>

        <!-- Effective date -->
        <div class="effective-date">
          <p>These {{ documentType }} are effective as of <strong>{{ effectiveDate }}</strong> for all customers of <strong>{{ companyName }}</strong>.</p>
        </div>

        <!-- Document content -->
        <div class="document-content">
          <slot></slot>
        </div>
      </div>
    </Container>

    <!-- History Modal -->
    <div v-if="showHistoryModal" class="modal-overlay" @click="closeHistoryModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h2>{{ title }} - History</h2>
          <button class="close-btn" @click="closeHistoryModal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <div class="history-list">
          <div v-for="version in history" :key="version.id" class="history-item">
            <div class="version-info">
              <h3>Version {{ version.version }}</h3>
              <p class="version-date">Effective: {{ version.effectiveDate }}</p>
              <p class="version-description">{{ version.description }}</p>
            </div>
            <div class="version-actions">
              <button class="btn btn-view" @click="viewVersion(version.id)">View</button>
              <button class="btn btn-download-small" @click="downloadVersion(version.id)">PDF</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import Container from '@/components/Container.vue'
import { usePolicies } from '@/stores/policies'
import { downloadPolicyPDF } from '@/utils/pdfGenerator'

interface Props {
  title: string
  documentType: string
  effectiveDate: string
  companyName?: string
  policyId?: string
}

const props = withDefaults(defineProps<Props>(), {
  companyName: 'Moth Solutions',
  policyId: ''
})

const router = useRouter()
const showHistoryModal = ref(false)
const selectedLanguage = ref('United Kingdom (English)')
const isGeneratingPDF = ref(false)

const { getPolicy, getPolicyHistory } = usePolicies()

// Get policy data
const policy = computed(() => {
  if (props.policyId) {
    return getPolicy(props.policyId).value
  }
  return null
})

const history = computed(() => {
  if (props.policyId) {
    return getPolicyHistory(props.policyId).value
  }
  return []
})

const closeHistoryModal = () => {
  showHistoryModal.value = false
}

const showHistory = () => {
  showHistoryModal.value = true
}

const downloadPDF = async () => {
  if (isGeneratingPDF.value) return
  
  try {
    isGeneratingPDF.value = true
    
    if (props.policyId) {
      await downloadPolicyPDF(props.policyId)
    } else {
      // Fallback for when policyId is not provided
      console.warn('Policy ID not provided for PDF generation')
    }
  } catch (error) {
    console.error('Error downloading PDF:', error)
  } finally {
    isGeneratingPDF.value = false
  }
}

const viewVersion = (versionId: string) => {
  // Map policy ID to the correct route parameter
  let documentTypeSlug = ''
  if (props.policyId === 'privacy-policy') {
    documentTypeSlug = 'privacy-policy'
  } else if (props.policyId === 'terms-of-service') {
    documentTypeSlug = 'terms-of-service'
  } else {
    // Fallback: convert document type to slug
    documentTypeSlug = props.documentType.toLowerCase().replace(/\s+/g, '-')
  }
  
  const route = `/terms-policies/${documentTypeSlug}/history/${versionId}`
  router.push(route)
  closeHistoryModal()
}

const downloadVersion = async (versionId: string) => {
  if (isGeneratingPDF.value) return
  
  try {
    isGeneratingPDF.value = true
    
    if (props.policyId) {
      await downloadPolicyPDF(props.policyId, versionId)
    } else {
      console.warn('Policy ID not provided for PDF generation')
    }
  } catch (error) {
    console.error('Error downloading PDF for version:', error)
  } finally {
    isGeneratingPDF.value = false
  }
}
</script>

<style scoped>
.terms-policies-page {
  min-height: 100vh;
  background: #ffffff;
  color: #1a1a1a;
  padding: 40px 0 80px;
}

.terms-policies-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 100px 20px;
}


.logo h1 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
}

/* Main title section */
.main-title-section {
  text-align: center;
  margin-bottom: 40px;
}

.subtitle {
  font-size: 1rem;
  color: #666666;
  margin: 0 0 20px 0;
  font-weight: 400;
}

.main-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

/* Action buttons */
.action-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 8px;
  border: none;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
}

.btn-language {
  background: #f5f5f5;
  color: #666666;
  border: 1px solid #e0e0e0;
}

.btn-language:hover {
  background: #eeeeee;
}

.btn-download {
  background: #1a1a1a;
  color: #ffffff;
}

.btn-download:hover {
  background: #333333;
}

.btn-history {
  background: #1a1a1a;
  color: #ffffff;
}

.btn-history:hover {
  background: #333333;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.spinning {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.chevron {
  margin-left: 4px;
}

.icon {
  flex-shrink: 0;
}

/* Effective date */
.effective-date {
  text-align: center;
  margin-bottom: 40px;
}

.effective-date p {
  font-size: 0.875rem;
  color: #666666;
  margin: 0;
}

/* Document content */
.document-content {
  line-height: 1.6;
  color: #1a1a1a;
}

/* Modal styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background: #ffffff;
  border-radius: 12px;
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 0;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 24px;
}

.modal-header h2 {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: #1a1a1a;
}

.close-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  color: #666666;
  transition: all 0.2s ease;
}

.close-btn:hover {
  background: #f5f5f5;
  color: #1a1a1a;
}

.history-list {
  padding: 0 24px 24px;
  max-height: 60vh;
  overflow-y: auto;
}

.history-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid #f0f0f0;
}

.history-item:last-child {
  border-bottom: none;
}

.version-info h3 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 4px 0;
  color: #1a1a1a;
}

.version-date {
  font-size: 0.875rem;
  color: #666666;
  margin: 0 0 4px 0;
}

.version-description {
  font-size: 0.875rem;
  color: #888888;
  margin: 0;
}

.version-actions {
  display: flex;
  gap: 8px;
}

.btn-view {
  background: #f5f5f5;
  color: #1a1a1a;
  padding: 8px 16px;
  font-size: 0.875rem;
}

.btn-view:hover {
  background: #eeeeee;
}

.btn-download-small {
  background: #1a1a1a;
  color: #ffffff;
  padding: 8px 16px;
  font-size: 0.875rem;
}

.btn-download-small:hover {
  background: #333333;
}

/* Responsive design */
@media (max-width: 768px) {
  .terms-policies-page {
    padding-top: 110px;
  }
  
  .terms-policies-content {
    padding: 0 16px;
  }
  
  .main-title {
    font-size: 2rem;
  }
  
  .action-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
  
  .modal-content {
    margin: 20px;
    max-height: 90vh;
  }
  
  .modal-header {
    padding: 20px 20px 0;
  }
  
  .history-list {
    padding: 0 20px 20px;
  }
  
  .history-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  
  .version-actions {
    width: 100%;
    justify-content: flex-end;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 1.75rem;
  }
  
  .terms-header {
    margin-bottom: 30px;
  }
  
  .main-title-section {
    margin-bottom: 30px;
  }
}
</style>
