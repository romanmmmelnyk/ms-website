<template>
  <Transition name="cookie-banner">
    <div v-if="showBanner" class="cookie-consent-banner">
      <div class="cookie-content">
        <div class="cookie-text">
          <p class="cookie-description">
            We use cookies to enhance your experience and analyze our traffic. 
            <a href="/cookie-policy" class="cookie-link">Learn more</a>
          </p>
        </div>
        
        <div class="cookie-actions">
          <button class="cookie-btn cookie-btn-secondary" @click="rejectAll">
            Decline
          </button>
          <button class="cookie-btn cookie-btn-tertiary" @click="openSettings">
            Customize
          </button>
          <button class="cookie-btn cookie-btn-primary" @click="acceptAll">
            Accept
          </button>
        </div>
      </div>
      
      <!-- Cookie Settings Modal -->
      <Transition name="modal">
        <div v-if="showSettings" class="cookie-settings-modal" @click.self="closeSettings">
          <div class="cookie-settings-content">
            <div class="settings-header">
              <h2 class="settings-title">Cookie Settings</h2>
              <button class="close-btn" @click="closeSettings">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
            
            <div class="settings-content">
              <div class="cookie-category">
                <div class="category-header">
                  <div class="category-info">
                    <h3 class="category-title">Essential Cookies</h3>
                    <p class="category-description">These cookies are necessary for the website to function and cannot be switched off.</p>
                  </div>
                  <div class="cookie-toggle disabled">
                    <input type="checkbox" checked disabled>
                    <span class="toggle-slider"></span>
                  </div>
                </div>
              </div>
              
              <div class="cookie-category">
                <div class="category-header">
                  <div class="category-info">
                    <h3 class="category-title">Analytics Cookies</h3>
                    <p class="category-description">These cookies help us understand how visitors interact with our website.</p>
                  </div>
                  <div class="cookie-toggle">
                    <input type="checkbox" v-model="cookieSettings.analytics" @change="updateSettings">
                    <span class="toggle-slider"></span>
                  </div>
                </div>
              </div>
              
              <div class="cookie-category">
                <div class="category-header">
                  <div class="category-info">
                    <h3 class="category-title">Marketing Cookies</h3>
                    <p class="category-description">These cookies are used to track visitors across websites for marketing purposes.</p>
                  </div>
                  <div class="cookie-toggle">
                    <input type="checkbox" v-model="cookieSettings.marketing" @change="updateSettings">
                    <span class="toggle-slider"></span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="settings-actions">
              <button class="cookie-btn cookie-btn-secondary" @click="rejectAll">
                Reject All
              </button>
              <button class="cookie-btn cookie-btn-primary" @click="saveSettings">
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showBanner = ref(false)
const showSettings = ref(false)
const cookieSettings = ref({
  analytics: true,
  marketing: true
})

const COOKIE_CONSENT_KEY = 'cookie-consent'
const COOKIE_SETTINGS_KEY = 'cookie-settings'

onMounted(() => {
  // Check if user has already made a choice
  const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
  const settings = localStorage.getItem(COOKIE_SETTINGS_KEY)
  
  if (!consent) {
    showBanner.value = true
  }
  
  if (settings) {
    cookieSettings.value = JSON.parse(settings)
  }
})

const acceptAll = () => {
  localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted')
  localStorage.setItem(COOKIE_SETTINGS_KEY, JSON.stringify({
    analytics: true,
    marketing: true
  }))
  showBanner.value = false
  initializeCookies()
}

const rejectAll = () => {
  localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected')
  localStorage.setItem(COOKIE_SETTINGS_KEY, JSON.stringify({
    analytics: false,
    marketing: false
  }))
  showBanner.value = false
  showSettings.value = false
}

const saveSettings = () => {
  localStorage.setItem(COOKIE_CONSENT_KEY, 'customized')
  localStorage.setItem(COOKIE_SETTINGS_KEY, JSON.stringify(cookieSettings.value))
  showBanner.value = false
  showSettings.value = false
  initializeCookies()
}

const openSettings = () => {
  showSettings.value = true
}

const closeSettings = () => {
  showSettings.value = false
}

const updateSettings = () => {
  // This could trigger real-time cookie updates
  console.log('Cookie settings updated:', cookieSettings.value)
}

const initializeCookies = () => {
  const settings = JSON.parse(localStorage.getItem(COOKIE_SETTINGS_KEY) || '{}')
  
  // Initialize analytics cookies if enabled
  if (settings.analytics) {
    // Initialize Google Analytics or other analytics tools
    console.log('Analytics cookies enabled')
  }
  
  // Initialize marketing cookies if enabled
  if (settings.marketing) {
    // Initialize marketing tracking tools
    console.log('Marketing cookies enabled')
  }
}
</script>

<style scoped>
.cookie-consent-banner {
  position: fixed;
  bottom: 20px;
  left: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 20px;
  z-index: 1000;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  max-width: 600px;
  margin: 0 auto;
}

.cookie-content {
  display: flex;
  align-items: center;
  gap: 16px;
}

.cookie-text {
  flex: 1;
}

.cookie-description {
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
  color: #374151;
  font-family: 'Open Sans', sans-serif;
}

.cookie-link {
  color: #7f00fd;
  text-decoration: none;
  font-weight: 500;
}

.cookie-link:hover {
  text-decoration: underline;
}

.cookie-actions {
  display: flex;
  gap: 8px;
  flex-shrink: 0;
}

.cookie-btn {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 8px;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
}

.cookie-btn-primary {
  background: #7f00fd;
  color: white;
}

.cookie-btn-primary:hover {
  background: #6a00d4;
}

.cookie-btn-secondary {
  background: transparent;
  color: #6b7280;
  border: 1px solid #d1d5db;
}

.cookie-btn-secondary:hover {
  background: #f9fafb;
  color: #374151;
}

.cookie-btn-tertiary {
  background: transparent;
  color: #7f00fd;
  border: 1px solid #7f00fd;
}

.cookie-btn-tertiary:hover {
  background: #7f00fd;
  color: white;
}

/* Cookie Settings Modal */
.cookie-settings-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  padding: 20px;
}

.cookie-settings-content {
  background: white;
  border-radius: 16px;
  padding: 24px;
  max-width: 500px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  border: 1px solid #e5e7eb;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.settings-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.settings-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: #111827;
  font-family: 'Open Sans', sans-serif;
}

.close-btn {
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.close-btn:hover {
  background: #f3f4f6;
  color: #374151;
}

.close-btn svg {
  width: 20px;
  height: 20px;
}

.settings-content {
  margin-bottom: 24px;
}

.cookie-category {
  margin-bottom: 16px;
  padding: 16px;
  background: #f9fafb;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
}

.category-info {
  flex: 1;
}

.category-title {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 4px 0;
  color: #111827;
  font-family: 'Open Sans', sans-serif;
}

.category-description {
  font-size: 0.85rem;
  line-height: 1.5;
  margin: 0;
  color: #6b7280;
  font-family: 'Open Sans', sans-serif;
}

.cookie-toggle {
  position: relative;
  flex-shrink: 0;
}

.cookie-toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 22px;
  background: #d1d5db;
  border-radius: 22px;
  transition: all 0.2s ease;
  cursor: pointer;
}

.toggle-slider:before {
  content: '';
  position: absolute;
  height: 18px;
  width: 18px;
  left: 2px;
  bottom: 2px;
  background: white;
  border-radius: 50%;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.cookie-toggle input:checked + .toggle-slider {
  background: #7f00fd;
}

.cookie-toggle input:checked + .toggle-slider:before {
  transform: translateX(22px);
}

.cookie-toggle.disabled .toggle-slider {
  background: #e5e7eb;
  cursor: not-allowed;
}

.settings-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

/* Animations */
.cookie-banner-enter-active,
.cookie-banner-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.cookie-banner-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.cookie-banner-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .cookie-settings-content,
.modal-leave-to .cookie-settings-content {
  transform: scale(0.9) translateY(20px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .cookie-consent-banner {
    bottom: 10px;
    left: 10px;
    right: 10px;
    padding: 16px;
  }
  
  .cookie-content {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
  
  .cookie-description {
    font-size: 0.85rem;
  }
  
  .cookie-actions {
    width: 100%;
    justify-content: center;
    gap: 6px;
  }
  
  .cookie-btn {
    flex: 1;
    justify-content: center;
    padding: 8px 12px;
    font-size: 0.8rem;
  }
  
  .cookie-settings-content {
    padding: 20px;
    margin: 16px;
  }
  
  .category-header {
    flex-direction: column;
    gap: 10px;
  }
  
  .settings-actions {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .cookie-consent-banner {
    bottom: 8px;
    left: 8px;
    right: 8px;
    padding: 12px;
  }
  
  .cookie-content {
    gap: 10px;
  }
  
  .cookie-description {
    font-size: 0.8rem;
  }
  
  .cookie-btn {
    padding: 6px 10px;
    font-size: 0.75rem;
  }
  
  .cookie-settings-content {
    padding: 16px;
    margin: 12px;
  }
  
  .settings-title {
    font-size: 1.1rem;
  }
  
  .category-title {
    font-size: 0.95rem;
  }
  
  .category-description {
    font-size: 0.8rem;
  }
}
</style>
