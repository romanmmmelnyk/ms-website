<template>
  <div class="legal-page">
    <Container>
      <div class="legal-content">
        <div class="legal-header">
          <h1>Privacy Policy</h1>
          <p class="last-updated">Last updated: January 15, 2024</p>
        </div>

        <div class="legal-body">
          <section class="legal-section">
            <h2>1. Introduction</h2>
            <p>Moth Solutions ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website mothsolutions.com or use our services.</p>
          </section>

          <section class="legal-section">
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

          <section class="legal-section">
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

          <section class="legal-section">
            <h2>4. Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
            <ul>
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
              <li>With trusted service providers who assist in our operations</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>5. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>

          <section class="legal-section">
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

          <section class="legal-section">
            <h2>7. Cookies and Tracking</h2>
            <p>We use cookies and similar technologies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.</p>
          </section>

          <section class="legal-section">
            <h2>8. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <div class="contact-info">
              <p><strong>Email:</strong> hello@mothsolutions.com</p>
              <p><strong>Phone:</strong> +44 7787 292197</p>
            </div>
          </section>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import Container from '@/components/Container.vue'
</script>

<style scoped>
.legal-page {
  min-height: 100vh;
  background: var(--gradient-secondary);
  padding: 120px 0 80px;
}

.legal-content {
  max-width: 800px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 60px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.legal-header {
  text-align: center;
  margin-bottom: 60px;
  padding-bottom: 30px;
  border-bottom: 2px solid rgba(127, 0, 253, 0.3);
}

.legal-header h1 {
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 20px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.last-updated {
  color: var(--color-text-muted);
  font-size: 1.1rem;
  font-style: italic;
}

.legal-body {
  color: var(--color-text-primary);
  line-height: 1.7;
}

.legal-section {
  margin-bottom: 40px;
}

.legal-section h2 {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--color-primary-purple);
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(127, 0, 253, 0.2);
}

.legal-section h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-secondary-teal);
  margin: 25px 0 15px 0;
}

.legal-section p {
  margin-bottom: 15px;
  font-size: 1.1rem;
}

.legal-section ul {
  margin: 15px 0;
  padding-left: 30px;
}

.legal-section li {
  margin-bottom: 8px;
  font-size: 1.1rem;
}

.contact-info {
  background: rgba(127, 0, 253, 0.1);
  padding: 25px;
  border-radius: 12px;
  border-left: 4px solid var(--color-primary-purple);
  margin-top: 20px;
}

.contact-info p {
  margin-bottom: 10px;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .legal-page {
    padding: 100px 0 60px;
  }
  
  .legal-content {
    padding: 30px;
    margin: 0 20px;
  }
  
  .legal-header h1 {
    font-size: 2.5rem;
  }
  
  .legal-section h2 {
    font-size: 1.5rem;
  }
  
  .legal-section h3 {
    font-size: 1.2rem;
  }
  
  .legal-section p,
  .legal-section li {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .legal-content {
    padding: 20px;
    margin: 0 10px;
  }
  
  .legal-header h1 {
    font-size: 2rem;
  }
  
  .legal-section h2 {
    font-size: 1.3rem;
  }
}
</style>
