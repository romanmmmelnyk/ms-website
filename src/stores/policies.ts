import { ref, computed } from 'vue'

export interface PolicyVersion {
  id: string
  version: string
  effectiveDate: string
  description: string
  content?: string
  lastModified?: string
  status: 'active' | 'draft' | 'archived'
}

export interface PolicyDocument {
  id: string
  title: string
  documentType: string
  companyName: string
  currentVersion: string
  versions: PolicyVersion[]
}

// Mock data - in production, this would come from an API
const privacyPolicyVersions: PolicyVersion[] = [
  {
    id: 'v1.0',
    version: '1.0',
    effectiveDate: '15 January 2024',
    description: 'Initial privacy policy version with comprehensive data protection guidelines',
    lastModified: '15 January 2024',
    status: 'active',
    content: `
      <div class="policy-content">
        <section>
          <h2>1. General Information</h2>
          <p>Moth Solutions ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website moth.solutions or use our services.</p>
          <p>We are a digital development company based in the United Kingdom, specializing in web development, software solutions, and digital marketing services.</p>
        </section>
        
        <section>
          <h2>2. Information We Collect</h2>
          <h3>2.1 Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us, including:</p>
          <ul>
            <li>Name and contact information (email address, phone number)</li>
            <li>Company information</li>
            <li>Project details and requirements</li>
            <li>Communication preferences</li>
          </ul>
          
          <h3>2.2 Technical Information</h3>
          <p>We automatically collect certain technical information, including:</p>
          <ul>
            <li>IP address and location data</li>
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>Website usage data and analytics</li>
          </ul>
        </section>
        
        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li>Providing and improving our services</li>
            <li>Communicating with you about projects and services</li>
            <li>Processing quotes and project calculations</li>
            <li>Marketing and promotional activities (with your consent)</li>
            <li>Legal compliance and fraud prevention</li>
          </ul>
        </section>
        
        <section>
          <h2>4. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
        </section>
        
        <section>
          <h2>5. Your Rights</h2>
          <p>Under applicable data protection laws, you have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing</li>
            <li>Data portability</li>
          </ul>
        </section>
        
        <section>
          <h2>6. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <div class="contact-info">
            <p><strong>Email:</strong> hello@moth.solutions</p>
            <p><strong>Phone:</strong> +44 7787 292197</p>
            <p><strong>Address:</strong> United Kingdom</p>
          </div>
        </section>
      </div>
    `
  },
  {
    id: 'v0.9',
    version: '0.9',
    effectiveDate: '1 December 2023',
    description: 'Draft version for legal review and stakeholder feedback',
    lastModified: '1 December 2023',
    status: 'archived',
    content: `
      <div class="policy-content">
        <section>
          <h2>1. Introduction</h2>
          <p>This is a draft version of our privacy policy that was created for internal review and stakeholder feedback.</p>
          <p><em>Note: This version is no longer active and is kept for historical reference only.</em></p>
        </section>
        
        <section>
          <h2>2. Data Collection</h2>
          <p>Draft content regarding data collection practices...</p>
        </section>
      </div>
    `
  }
]

const termsOfServiceVersions: PolicyVersion[] = [
  {
    id: 'v1.0',
    version: '1.0',
    effectiveDate: '15 January 2024',
    description: 'Initial terms of service with comprehensive service agreements',
    lastModified: '15 January 2024',
    status: 'active',
    content: `
      <div class="policy-content">
        <section>
          <h2>1. General Information</h2>
          <p>By accessing and using Moth Solutions' website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
          <p>These Terms of Service govern your use of our website and all services provided by Moth Solutions.</p>
        </section>
        
        <section>
          <h2>2. Description of Service</h2>
          <p>Moth Solutions provides digital development services including:</p>
          <ul>
            <li>Web development and design</li>
            <li>Software development and solutions</li>
            <li>Digital marketing services</li>
            <li>UI/UX design and automation</li>
            <li>Project consultation and cost estimation</li>
          </ul>
        </section>
        
        <section>
          <h2>3. Project Terms</h2>
          <h3>3.1 Project Scope</h3>
          <p>All project scopes will be clearly defined in written agreements before work begins. Any changes to scope may result in additional charges.</p>
          
          <h3>3.2 Payment Terms</h3>
          <p>Payment terms will be specified in individual project agreements. Generally, we require:</p>
          <ul>
            <li>50% deposit before project commencement</li>
            <li>50% upon project completion</li>
            <li>Payment within 30 days of invoice date</li>
          </ul>
          
          <h3>3.3 Timeline</h3>
          <p>Project timelines are estimates and may vary based on project complexity and client feedback cycles.</p>
        </section>
        
        <section>
          <h2>4. Intellectual Property</h2>
          <p>Upon full payment, clients will own the final deliverables created specifically for their project. Moth Solutions retains rights to:</p>
          <ul>
            <li>General methodologies and processes</li>
            <li>Pre-existing code libraries and frameworks</li>
            <li>Portfolio rights to showcase completed work</li>
          </ul>
        </section>
        
        <section>
          <h2>5. Limitation of Liability</h2>
          <p>In no event shall Moth Solutions or its suppliers be liable for any damages arising out of the use or inability to use our services.</p>
        </section>
        
        <section>
          <h2>6. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom.</p>
        </section>
        
        <section>
          <h2>7. Contact Information</h2>
          <p>If you have any questions about these Terms of Service, please contact us:</p>
          <div class="contact-info">
            <p><strong>Email:</strong> hello@moth.solutions</p>
            <p><strong>Phone:</strong> +44 7787 292197</p>
            <p><strong>Address:</strong> United Kingdom</p>
          </div>
        </section>
      </div>
    `
  },
  {
    id: 'v0.9',
    version: '0.9',
    effectiveDate: '1 December 2023',
    description: 'Draft version for legal review and business requirements',
    lastModified: '1 December 2023',
    status: 'archived',
    content: `
      <div class="policy-content">
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>This is a draft version of our terms of service that was created for internal review and legal consultation.</p>
          <p><em>Note: This version is no longer active and is kept for historical reference only.</em></p>
        </section>
        
        <section>
          <h2>2. Service Description</h2>
          <p>Draft content regarding service descriptions...</p>
        </section>
      </div>
    `
  }
]

const policies = ref<PolicyDocument[]>([
  {
    id: 'privacy-policy',
    title: 'MOTH SOLUTIONS - PRIVACY POLICY',
    documentType: 'Privacy Policy',
    companyName: 'Moth Solutions',
    currentVersion: 'v1.0',
    versions: privacyPolicyVersions
  },
  {
    id: 'terms-of-service',
    title: 'MOTH SOLUTIONS - TERMS OF SERVICE',
    documentType: 'Terms of Service',
    companyName: 'Moth Solutions',
    currentVersion: 'v1.0',
    versions: termsOfServiceVersions
  }
])

export function usePolicies() {
  const getPolicy = (policyId: string) => {
    return computed(() => policies.value.find(p => p.id === policyId))
  }

  const getPolicyVersion = (policyId: string, versionId: string) => {
    return computed(() => {
      const policy = policies.value.find(p => p.id === policyId)
      return policy?.versions.find(v => v.id === versionId)
    })
  }

  const getPolicyHistory = (policyId: string) => {
    return computed(() => {
      const policy = policies.value.find(p => p.id === policyId)
      return policy?.versions || []
    })
  }

  const getCurrentVersion = (policyId: string) => {
    return computed(() => {
      const policy = policies.value.find(p => p.id === policyId)
      return policy?.versions.find(v => v.id === policy.currentVersion)
    })
  }

  const addPolicyVersion = (policyId: string, version: PolicyVersion) => {
    const policy = policies.value.find(p => p.id === policyId)
    if (policy) {
      policy.versions.unshift(version)
      policy.currentVersion = version.id
    }
  }

  const updatePolicyVersion = (policyId: string, versionId: string, updates: Partial<PolicyVersion>) => {
    const policy = policies.value.find(p => p.id === policyId)
    if (policy) {
      const version = policy.versions.find(v => v.id === versionId)
      if (version) {
        Object.assign(version, updates)
      }
    }
  }

  return {
    policies: computed(() => policies.value),
    getPolicy,
    getPolicyVersion,
    getPolicyHistory,
    getCurrentVersion,
    addPolicyVersion,
    updatePolicyVersion
  }
}
