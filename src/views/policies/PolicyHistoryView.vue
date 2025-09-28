<template>
  <TermsAndPoliciesLayout
    :title="documentTitle"
    :document-type="policy?.documentType || ''"
    :effective-date="versionData?.effectiveDate || ''"
    :policy-id="policyId"
  >
    <div class="document-content">
      <div class="version-info">
        <h2>Version {{ versionData?.version }}</h2>
        <p class="version-date">Effective: {{ versionData?.effectiveDate }}</p>
        <p class="version-description">{{ versionData?.description }}</p>
      </div>
      
      <div v-if="versionData?.content" v-html="versionData.content"></div>
      <div v-else class="no-content">
        <p>Content for this version is not available yet.</p>
      </div>
    </div>
  </TermsAndPoliciesLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import TermsAndPoliciesLayout from '@/components/TermsAndPoliciesLayout.vue'
import { usePolicies } from '@/stores/policies'

const route = useRoute()
const { getPolicy, getPolicyVersion, getPolicyHistory } = usePolicies()

const documentType = computed(() => route.params.type as string)
const versionId = computed(() => route.params.versionId as string)

// Map route parameter to policy ID
const policyId = computed(() => {
  const type = documentType.value
  if (type === 'privacy-policy') return 'privacy-policy'
  if (type === 'terms-of-service') return 'terms-of-service'
  return ''
})

const policy = computed(() => {
  if (policyId.value) {
    return getPolicy(policyId.value).value
  }
  return null
})

const documentTitle = computed(() => policy.value?.title || '')
const history = computed(() => {
  if (policyId.value) {
    return getPolicyHistory(policyId.value).value
  }
  return []
})

const versionData = computed(() => {
  if (policyId.value && versionId.value) {
    return getPolicyVersion(policyId.value, versionId.value).value
  }
  return null
})
</script>

<style scoped>
.document-content {
  color: #1a1a1a;
  line-height: 1.6;
}

.version-info {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #007bff;
  margin-bottom: 32px;
}

.version-info h2 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 8px 0;
}

.version-date {
  font-size: 0.875rem;
  color: #666666;
  margin: 0 0 8px 0;
}

.version-description {
  font-size: 0.875rem;
  color: #4a4a4a;
  margin: 0;
}

.no-content {
  text-align: center;
  padding: 40px 20px;
  color: #666666;
  font-style: italic;
}

:deep(.document-content h2) {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e5e5e5;
}

:deep(.document-content h3) {
  font-size: 1.125rem;
  font-weight: 600;
  color: #333333;
  margin: 20px 0 12px 0;
}

:deep(.document-content p) {
  margin-bottom: 12px;
  font-size: 0.875rem;
  color: #4a4a4a;
}

:deep(.document-content ul) {
  margin: 12px 0;
  padding-left: 20px;
}

:deep(.document-content li) {
  margin-bottom: 6px;
  font-size: 0.875rem;
  color: #4a4a4a;
}

@media (max-width: 768px) {
  .version-info h2 {
    font-size: 1.125rem;
  }
  
  :deep(.document-content h2) {
    font-size: 1.125rem;
  }
  
  :deep(.document-content h3) {
    font-size: 1rem;
  }
  
  :deep(.document-content p),
  :deep(.document-content li) {
    font-size: 0.875rem;
  }
}
</style>
