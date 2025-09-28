<template>
  <footer class="footer">
    <!-- Logo Section -->
    <div class="footer-logo">
      <LogoShort /> 
      <h3 class="company-name">{{ companyName }}</h3>
    </div>

    <!-- Main Footer Content -->
    <div class="footer-content">
      <!-- Left Column - Contact & Socials -->
      <div class="footer-column">
        <!-- Reviewed On Section -->
        <div class="reviewed-section">
          <h4>REVIEWED ON</h4>
          <div class="clutch-section">
            <div class="clutch-header">
              <span class="clutch-dot"></span>
              <span class="clutch-text">Clutch</span>
            </div>
            <div class="clutch-rating">
              <div class="clutch-stars">★★★★★</div>
              <div class="clutch-score">{{ clutchRating }} RATING</div>
            </div>
          </div>
          <div class="goodfirms-section">
            <div class="goodfirms-stars">★★★★★</div>
            <div class="goodfirms-logo">
              <span class="goodfirms-icon">G</span>
              <span>GoodFirms</span>
            </div>
          </div>
        </div>

        <!-- Contact Section -->
        <div class="contact-section">
          <h4>Contact</h4>
          <div class="contact-item">
            <svg class="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <a :href="getEmailLink()" class="contact-link">{{ email }}</a>
          </div>
          <div class="contact-item">
            <svg class="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <a :href="getPhoneLink()" class="contact-link">{{ phone }}</a>
          </div>
          <div class="contact-item">
            <svg class="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="contact-link">{{ address }}</span>
          </div>
        </div>

        <!-- Socials Section -->
        <div class="socials-section">
          <h4>Socials</h4>
          <div class="social-links">
            <a :href="socialLinks.linkedin" target="_blank" rel="noopener noreferrer" class="social-link">
              <div class="social-icon linkedin">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <span>LinkedIn</span>
            </a>
            <a :href="socialLinks.instagram" target="_blank" rel="noopener noreferrer" class="social-link">
              <div class="social-icon instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <span>Instagram</span>
            </a>
            <a :href="socialLinks.facebook" target="_blank" rel="noopener noreferrer" class="social-link">
              <div class="social-icon facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
            </div>
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Middle Column - Services -->
      <div class="footer-column">
        <h4>Services</h4>
        <ul class="footer-links">
          <li v-for="service in services" :key="service.id">
            <a :href="service.url">{{ service.name }}</a>
          </li>
          <li><a href="/cost-calculator">Cost Calculator</a></li>
        </ul>
      </div>

      <!-- Right Column - Company -->
      <div class="footer-column">
        <h4>Company</h4>
        <ul class="footer-links">
          <li v-for="item in mainNavigation" :key="item.name">
            <a :href="item.url">{{ item.name }}</a>
          </li>
        </ul>
        
        <h4 class="legal-title">Legal</h4>
        <ul class="footer-links">
          <li v-for="item in legalNavigation" :key="item.name">
            <a :href="item.url">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Copyright Section -->
    <div class="copyright-section">
      <hr class="footer-divider">
      <p class="copyright-text">Copyright @ 2025. {{ companyName }}. All rights reserved</p>
    </div>
  </footer>
</template>

<script setup>
import LogoShort from '@/assets/logo-short.svg'
import { useSiteConfig } from '@/composables/useSiteConfig'

const {
  companyName,
  email,
  phone,
  address,
  socialLinks,
  clutchRating,
  goodfirmsRating,
  services,
  mainNavigation,
  legalNavigation,
  getEmailLink,
  getPhoneLink
} = useSiteConfig()
</script>

<style scoped>
.footer {
  background: #0a0a0f;
  color: #d1d5db;
  padding: 3rem 2rem 2rem;
  font-family: 'Open Sans', sans-serif;
}

.footer-logo {
  text-align: center;
  margin-bottom: 3rem;
}

.moth-logo {
  margin-bottom: 1rem;
}

.company-name {
  font-size: 1.5rem;
  font-weight: 600;
  color: #e5e7eb;
  margin: 0;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto 3rem;
}

.footer-column h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #e5e7eb;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.legal-title {
  margin-top: 2rem !important;
}

/* Reviewed On Section */
.reviewed-section {
  margin-bottom: 2rem;
}

.reviewed-section h4 {
  font-size: 0.75rem;
  font-weight: 400;
  color: #9ca3af;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.clutch-section {
  margin-bottom: 1.5rem;
}

.clutch-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.clutch-dot {
  width: 0.5rem;
  height: 0.5rem;
  background: #dc2626;
  border-radius: 50%;
}

.clutch-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: #e5e7eb;
}

.clutch-rating {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.clutch-stars {
  color: #dc2626;
  font-size: 1rem;
}

.clutch-score {
  font-size: 0.75rem;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.goodfirms-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.goodfirms-stars {
  color: #fbbf24;
  font-size: 1rem;
}

.goodfirms-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.goodfirms-icon {
  background: #3b82f6;
  color: white;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.75rem;
}

.goodfirms-logo span:last-child {
  color: #3b82f6;
  font-size: 1rem;
  font-weight: 500;
}

/* Contact Section */
.contact-section {
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
}

.contact-icon {
  color: #a14bff;
  flex-shrink: 0;
}

.contact-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;
}

.contact-link:hover {
  color: #a14bff;
}

/* Socials Section */
.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: inherit;
  font-size: 0.875rem;
  transition: color 0.2s;
}

.social-link:hover {
  color: #a14bff;
}

.social-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.social-icon svg {
  width: 18px;
  height: 18px;
}

.social-icon.linkedin {
  background: #0077b5;
  color: white;
}

.social-icon.linkedin:hover {
  background: #005885;
  transform: translateY(-2px);
}

.social-icon.instagram {
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  color: white;
}

.social-icon.instagram:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(220, 38, 67, 0.4);
}

.social-icon.facebook {
  background: #1877f2;
  color: white;
}

.social-icon.facebook:hover {
  background: #166fe5;
  transform: translateY(-2px);
}

/* Footer Links */
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  color: inherit;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: #a14bff;
}

/* Copyright Section */
.copyright-section {
  text-align: center;
}

.footer-divider {
  border: none;
  height: 1px;
  background: #374151;
  margin: 0 0 1.5rem;
}

.copyright-text {
  font-size: 0.875rem;
  color: #9ca3af;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer {
    padding: 2rem 1rem 1.5rem;
  }
  
  .footer-logo {
    margin-bottom: 2rem;
  }
}

@media (max-width: 480px) {
  .clutch-rating {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .footer-content {
    gap: 1.5rem;
  }
}
</style>
