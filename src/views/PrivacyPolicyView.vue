<template>
  <TermsAndPoliciesLayout
    title="MOTH SOLUTIONS - PRIVACY POLICY"
    document-type="Privacy Policy"
    effective-date="15 January 2024"
    policy-id="privacy-policy"
  >
    <div class="document-content">
      <section class="document-section">
        <h2>1. General information</h2>
        <p>Moth Solutions ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website mothsolutions.com or use our services.</p>
      </section>

      <section class="document-section">
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

      <section class="document-section">
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

      <section class="document-section">
        <h2>4. Information Sharing</h2>
        <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
        <ul>
          <li>With your explicit consent</li>
          <li>To comply with legal obligations</li>
          <li>To protect our rights and prevent fraud</li>
          <li>With trusted service providers who assist in our operations</li>
        </ul>
      </section>

      <section class="document-section">
        <h2>5. Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
      </section>

      <section class="document-section">
        <h2>6. Your Rights</h2>
        <p>Under applicable data protection laws, you have the right to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to processing</li>
          <li>Data portability</li>
        </ul>
      </section>

      <section class="document-section">
        <h2>7. Cookies and Tracking</h2>
        <p>We use cookies and similar technologies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.</p>
      </section>

      <section class="document-section">
        <h2>8. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us:</p>
        <div class="contact-info">
          <p><strong>Email:</strong> {{ email }}</p>
          <p><strong>Phone:</strong> {{ phone }}</p>
          <p><strong>Address:</strong> {{ address }}</p>
        </div>
      </section>
    </div>
  </TermsAndPoliciesLayout>
</template>

<script setup lang="ts">
import TermsAndPoliciesLayout from '@/components/TermsAndPoliciesLayout.vue'
import { useSiteConfig } from '@/composables/useSiteConfig'

const { email, phone, address } = useSiteConfig()
</script>

<style scoped>
.document-content {
  color: #1a1a1a;
  line-height: 1.6;
}

.document-section {
  margin-bottom: 32px;
}

.document-section h2 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e5e5e5;
}

.document-section h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #333333;
  margin: 20px 0 12px 0;
}

.document-section p {
  margin-bottom: 12px;
  font-size: 0.875rem;
  color: #4a4a4a;
}

.document-section ul {
  margin: 12px 0;
  padding-left: 20px;
}

.document-section li {
  margin-bottom: 6px;
  font-size: 0.875rem;
  color: #4a4a4a;
}

.contact-info {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #007bff;
  margin-top: 16px;
}

.contact-info p {
  margin-bottom: 8px;
  font-size: 0.875rem;
  color: #4a4a4a;
}

@media (max-width: 768px) {
  .document-section h2 {
    font-size: 1.125rem;
  }
  
  .document-section h3 {
    font-size: 1rem;
  }
  
  .document-section p,
  .document-section li {
    font-size: 0.875rem;
  }
}
</style>
