<template>
  <Transition name="cookie-banner">
    <div v-if="showBanner" class="cookie-consent-banner">
      <div class="cookie-content">
        <div class="cookie-icon">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="url(#cookieGradient)"/>
            <defs>
              <linearGradient id="cookieGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:var(--color-secondary-teal)"/>
                <stop offset="100%" style="stop-color:var(--color-secondary-blue)"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div class="cookie-text">
          <h3 class="cookie-title">We use cookies</h3>
          <p class="cookie-description">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
            By clicking "Accept All", you consent to our use of cookies.
          </p>
        </div>
        
        <div class="cookie-actions">
          <button class="cookie-btn cookie-btn-secondary" @click="openSettings">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" stroke-width="2"/>
            </svg>
            Settings
          </button>
          <button class="cookie-btn cookie-btn-primary" @click="acceptAll">
            Accept All
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
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(20, 20, 30, 0.95) 100%);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 24px;
  z-index: 1000;
  box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.3);
}

.cookie-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 20px;
}

.cookie-icon {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
}

.cookie-icon svg {
  width: 100%;
  height: 100%;
}

.cookie-text {
  flex: 1;
  color: var(--color-text-primary);
}

.cookie-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: var(--color-text-primary);
  font-family: 'Montserrat', sans-serif;
}

.cookie-description {
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
  color: var(--color-text-muted);
  font-family: 'Montserrat', sans-serif;
}

.cookie-actions {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
}

.cookie-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.cookie-btn-primary {
  background: var(--gradient-primary);
  color: var(--color-text-primary);
}

.cookie-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(127, 0, 253, 0.3);
}

.cookie-btn-secondary {
  background: transparent;
  color: var(--color-text-primary);
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.cookie-btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.btn-icon {
  width: 16px;
  height: 16px;
}

/* Cookie Settings Modal */
.cookie-settings-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  padding: 20px;
}

.cookie-settings-content {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(20, 20, 30, 0.95) 100%);
  border-radius: 20px;
  padding: 32px;
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.settings-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.settings-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: var(--color-text-primary);
  font-family: 'Montserrat', sans-serif;
}

.close-btn {
  background: none;
  border: none;
  color: var(--color-text-muted);
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-text-primary);
}

.close-btn svg {
  width: 20px;
  height: 20px;
}

.settings-content {
  margin-bottom: 24px;
}

.cookie-category {
  margin-bottom: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
}

.category-info {
  flex: 1;
}

.category-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: var(--color-text-primary);
  font-family: 'Montserrat', sans-serif;
}

.category-description {
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
  color: var(--color-text-muted);
  font-family: 'Montserrat', sans-serif;
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
  width: 50px;
  height: 24px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.toggle-slider:before {
  content: '';
  position: absolute;
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background: white;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.cookie-toggle input:checked + .toggle-slider {
  background: var(--gradient-primary);
}

.cookie-toggle input:checked + .toggle-slider:before {
  transform: translateX(26px);
}

.cookie-toggle.disabled .toggle-slider {
  background: rgba(255, 255, 255, 0.1);
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
    padding: 16px;
  }
  
  .cookie-content {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
  
  .cookie-icon {
    width: 36px;
    height: 36px;
  }
  
  .cookie-title {
    font-size: 1.1rem;
  }
  
  .cookie-description {
    font-size: 0.85rem;
  }
  
  .cookie-actions {
    width: 100%;
    justify-content: center;
    gap: 8px;
  }
  
  .cookie-btn {
    flex: 1;
    justify-content: center;
    padding: 10px 16px;
    font-size: 0.85rem;
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
    padding: 12px;
  }
  
  .cookie-content {
    gap: 10px;
  }
  
  .cookie-icon {
    width: 32px;
    height: 32px;
  }
  
  .cookie-title {
    font-size: 1rem;
  }
  
  .cookie-description {
    font-size: 0.8rem;
  }
  
  .cookie-btn {
    padding: 8px 12px;
    font-size: 0.8rem;
  }
  
  .cookie-settings-content {
    padding: 16px;
    margin: 12px;
  }
  
  .settings-title {
    font-size: 1.2rem;
  }
  
  .category-title {
    font-size: 1rem;
  }
  
  .category-description {
    font-size: 0.85rem;
  }
}
</style>
