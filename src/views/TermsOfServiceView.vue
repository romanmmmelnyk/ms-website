<template>
  <div class="legal-page">
    <Container>
      <div class="legal-content">
        <div class="legal-header">
          <h1>Terms of Service</h1>
          <p class="last-updated">Last updated: January 15, 2024</p>
        </div>

        <div class="legal-body">
          <section class="legal-section">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using Moth Solutions' website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
          </section>

          <section class="legal-section">
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

          <section class="legal-section">
            <h2>3. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials on Moth Solutions' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>4. Project Terms</h2>
            <h3>4.1 Project Scope</h3>
            <p>All project scopes will be clearly defined in written agreements before work begins. Any changes to scope may result in additional charges.</p>
            
            <h3>4.2 Payment Terms</h3>
            <p>Payment terms will be specified in individual project agreements. Generally, we require:</p>
            <ul>
              <li>50% deposit before project commencement</li>
              <li>50% upon project completion</li>
              <li>Payment within 30 days of invoice date</li>
            </ul>

            <h3>4.3 Timeline</h3>
            <p>Project timelines are estimates and may vary based on project complexity and client feedback cycles.</p>
          </section>

          <section class="legal-section">
            <h2>5. Intellectual Property</h2>
            <p>Upon full payment, clients will own the final deliverables created specifically for their project. Moth Solutions retains rights to:</p>
            <ul>
              <li>General methodologies and processes</li>
              <li>Pre-existing code libraries and frameworks</li>
              <li>Portfolio rights to showcase completed work</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>6. Client Responsibilities</h2>
            <p>Clients are responsible for:</p>
            <ul>
              <li>Providing accurate and complete project requirements</li>
              <li>Timely feedback and approvals</li>
              <li>Providing necessary access to systems and resources</li>
              <li>Payment according to agreed terms</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>7. Limitation of Liability</h2>
            <p>In no event shall Moth Solutions or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Moth Solutions' website, even if Moth Solutions or an authorized representative has been notified orally or in writing of the possibility of such damage.</p>
          </section>

          <section class="legal-section">
            <h2>8. Revisions and Errata</h2>
            <p>The materials appearing on Moth Solutions' website could include technical, typographical, or photographic errors. Moth Solutions does not warrant that any of the materials on its website are accurate, complete, or current.</p>
          </section>

          <section class="legal-section">
            <h2>9. Links</h2>
            <p>Moth Solutions has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Moth Solutions of the site.</p>
          </section>

          <section class="legal-section">
            <h2>10. Site Terms of Use Modifications</h2>
            <p>Moth Solutions may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.</p>
          </section>

          <section class="legal-section">
            <h2>11. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
          </section>

          <section class="legal-section">
            <h2>12. Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us:</p>
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
