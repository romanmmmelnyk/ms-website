<template>
  <div class="model-apply-page">
    <Container>
      <div class="apply-content">
        <!-- Step Indicator -->
        <div v-if="currentStep < 5" class="step-indicator">
          <div 
            class="step-dot" 
            :class="{ active: currentStep >= 1, completed: currentStep > 1 }"
          >
            <span v-if="currentStep > 1">✓</span>
            <span v-else>1</span>
          </div>
          <div class="step-line" :class="{ active: currentStep > 1 }"></div>
          <div 
            class="step-dot" 
            :class="{ active: currentStep >= 2, completed: currentStep > 2 }"
          >
            <span v-if="currentStep > 2">✓</span>
            <span v-else>2</span>
          </div>
          <div class="step-line" :class="{ active: currentStep > 2 }"></div>
          <div 
            class="step-dot" 
            :class="{ active: currentStep >= 3, completed: currentStep > 3 }"
          >
            <span v-if="currentStep > 3">✓</span>
            <span v-else>3</span>
          </div>
          <div class="step-line" :class="{ active: currentStep > 3 }"></div>
          <div 
            class="step-dot" 
            :class="{ active: currentStep >= 4, completed: currentStep > 4 }"
          >
            <span v-if="currentStep > 4">✓</span>
            <span v-else>4</span>
          </div>
          <div class="step-line" :class="{ active: currentStep > 4 }"></div>
          <div 
            class="step-dot" 
            :class="{ active: currentStep >= 5, completed: currentStep > 5 }"
          >
            <span v-if="currentStep > 5">✓</span>
            <span v-else>5</span>
          </div>
        </div>

        <!-- Step 1: Email Verification -->
        <div v-if="currentStep === 1" class="step-container">
          <h1 class="step-title" v-if="!codeSent">Get Started</h1>
          <h1 class="step-title" v-else>Verify Your Email</h1>
          <p class="step-subtitle" v-if="!codeSent">Enter your email to begin your application</p>
          <p class="step-subtitle" v-else>We've sent a verification code to {{ formData.email }}</p>
          
          <form @submit.prevent="handleEmailVerification" class="apply-form">
            <!-- Email Input (shown when code not sent) -->
            <div v-if="!codeSent" class="form-group">
              <label for="email">Email Address *</label>
              <input 
                type="text" 
                id="email" 
                v-model="formData.email"
                @input="checkEmail(formData.email)"
                placeholder="your.email@example.com"
                required
                class="form-input"
                :class="{
                  'email-checking': emailStatus === 'checking',
                  'email-available': emailStatus === 'available',
                  'email-taken': emailStatus === 'taken'
                }"
              />
              <div class="email-status-message" v-if="emailStatus !== 'idle'">
                <span v-if="emailStatus === 'checking'" class="status-checking">Checking...</span>
                <span v-else-if="emailStatus === 'available'" class="status-available">✓ Email available</span>
                <span v-else-if="emailStatus === 'taken'" class="status-taken">✗ This email is already registered</span>
              </div>
            </div>

            <!-- Verification Code Input (shown when code sent) -->
            <div v-else class="form-group">
              <label for="verificationCode">Verification Code *</label>
              <input 
                type="text" 
                id="verificationCode"
                v-model="verificationCode"
                placeholder="Enter 6-digit code"
                maxlength="6"
                required
                class="form-input code-input"
              />
              <p class="code-resend" v-if="!isResendingCode">
                Didn't receive it? 
                <button 
                  type="button" 
                  @click="resendCode" 
                  class="resend-link"
                >
                  Resend code
                </button>
              </p>
              <p class="code-resend" v-else>
                <span class="status-checking">Sending...</span>
              </p>
            </div>
            
            <button 
              type="submit" 
              class="btn btn-primary"
              :disabled="(emailStatus === 'taken' || emailStatus === 'checking' || (codeSent && verificationCode.length !== 6))"
              :class="{ 'disabled': (emailStatus === 'taken' || emailStatus === 'checking' || (codeSent && verificationCode.length !== 6)) }"
            >
              <span v-if="isSendingCode">Sending...</span>
              <span v-else-if="isVerifyingCode">Verifying...</span>
              <span v-else>{{ codeSent ? 'Verify' : 'Send Verification Code' }}</span>
            </button>
          </form>
        </div>

        <!-- Step 2: Name and Surname -->
        <div v-if="currentStep === 2" class="step-container">
          <h1 class="step-title">Your Name</h1>
          <p class="step-subtitle">Let us know how to address you</p>
          
          <form @submit.prevent="handleNameSubmit" class="apply-form">
            <div class="form-row">
              <div class="form-group">
                <label for="firstName">First Name *</label>
                <input 
                  type="text" 
                  id="firstName" 
                  v-model="formData.firstName"
                  placeholder="John"
                  required
                  class="form-input"
                />
              </div>
              
              <div class="form-group">
                <label for="lastName">Last Name *</label>
                <input 
                  type="text" 
                  id="lastName" 
                  v-model="formData.lastName"
                  placeholder="Doe"
                  required
                  class="form-input"
                />
              </div>
            </div>

            <div class="form-actions">
              <button type="submit" class="btn btn-primary">Continue</button>
              <button type="button" @click="goBack" class="btn btn-secondary">Back</button>
            </div>
          </form>
        </div>

        <!-- Step 3: Tell us about yourself -->
        <div v-if="currentStep === 3" class="step-container">
          <h1 class="step-title">Tell Us About Yourself</h1>
          <p class="step-subtitle">Help us understand your needs</p>
          
          <form @submit.prevent="handleAboutSubmit" class="apply-form">
            <div class="form-group">
              <label for="about">Tell us about yourself *</label>
              <textarea 
                id="about" 
                v-model="formData.about"
                placeholder="Share your background, interests, or what brings you here..."
                rows="6"
                required
                class="form-input"
              ></textarea>
            </div>

            <div class="form-actions">
              <button type="submit" class="btn btn-primary">Continue</button>
              <button type="button" @click="goBack" class="btn btn-secondary">Back</button>
            </div>
          </form>
        </div>

        <!-- Step 4: Service Purposes -->
        <div v-if="currentStep === 4" class="step-container">
          <h1 class="step-title">Service Purposes</h1>
          <p class="step-subtitle">What are the purposes of using our services?</p>
          
          <form @submit.prevent="handlePurposeSubmit" class="apply-form">
            <div class="form-group">
              <div class="checkbox-group">
                <label class="checkbox-option">
                  <input 
                    type="checkbox" 
                    v-model="formData.purposes"
                    value="management-board"
                  />
                  <span>Management Board</span>
                </label>
                
                <label class="checkbox-option">
                  <input 
                    type="checkbox" 
                    v-model="formData.purposes"
                    value="personal-website"
                  />
                  <span>Personal Website</span>
                </label>
                
                <label class="checkbox-option">
                  <input 
                    type="checkbox" 
                    v-model="formData.purposes"
                    value="booking-system"
                  />
                  <span>Booking System</span>
                </label>
              </div>
            </div>

            <div class="form-actions">
              <button 
                type="submit" 
                class="btn btn-primary"
                :disabled="formData.purposes.length === 0"
                :class="{ 'disabled': formData.purposes.length === 0 }"
              >
                Continue
              </button>
              <button type="button" @click="goBack" class="btn btn-secondary">Back</button>
            </div>
          </form>
        </div>

        <!-- Step 5: Pre-Checkout -->
        <div v-if="currentStep === 5" class="step-container step-container-checkout">
          <h1 class="step-title">Review Your Order</h1>
          <p class="step-subtitle">Review what's included in your package</p>
          
          <form @submit.prevent="handleCheckoutSubmit" class="apply-form">
            <!-- Payment Plan Selection -->
            <div class="form-group">
              <label class="form-label">Select Payment Plan *</label>
              <div class="payment-plan-group">
                <label class="payment-plan-option" :class="{ selected: formData.paymentPlan === 'monthly' }">
                  <input 
                    type="radio" 
                    v-model="formData.paymentPlan"
                    value="monthly"
                    required
                  />
                  <div class="payment-plan-content">
                    <div class="payment-plan-main">
                      <div class="payment-plan-header">
                        <span class="payment-plan-name">Monthly</span>
                        <span class="payment-plan-badge">Popular</span>
                      </div>
                      <span class="payment-plan-subtitle">Billed monthly</span>
                    </div>
                    <div class="payment-plan-price">
                      <span class="price-amount">£24.99</span>
                      <span class="price-period">/month</span>
                    </div>
                  </div>
                </label>
                
                <label class="payment-plan-option" :class="{ selected: formData.paymentPlan === 'annual' }">
                  <input 
                    type="radio" 
                    v-model="formData.paymentPlan"
                    value="annual"
                    required
                  />
                  <div class="payment-plan-content">
                    <div class="payment-plan-main">
                      <div class="payment-plan-header">
                        <span class="payment-plan-name">Annual</span>
                        <span class="payment-plan-badge annual">Save ~20%</span>
                      </div>
                      <span class="payment-plan-subtitle">Billed annually</span>
                    </div>
                    <div class="payment-plan-price">
                      <span class="price-amount">£19.99</span>
                      <span class="price-period">/month</span>
                      <span class="price-yearly-note">£239.88/year</span>
                    </div>
                  </div>
                </label>
              </div>
              
              <p class="setup-fee-notice">* A one-time setup fee of £60 applies</p>
            </div>

            <!-- Custom Design Option -->
            <div class="form-group">
              <div class="custom-design-option">
                <label class="custom-design-checkbox">
                  <input 
                    type="checkbox" 
                    v-model="formData.customDesign"
                  />
                  <div class="custom-design-content">
                    <div class="custom-design-header">
                      <span class="custom-design-label">Custom Design Option</span>
                      <span class="custom-design-price">+£99</span>
                    </div>
                    <p class="custom-design-description">Get a fully customized, unique website design tailored to your brand</p>
                  </div>
                </label>
              </div>
            </div>

            <!-- Total -->
            <div class="checkout-total-box">
              <div class="checkout-total-item">
                <span>Setup Fee</span>
                <span>£60</span>
              </div>
              <div v-if="formData.paymentPlan === 'monthly'" class="checkout-total-item">
                <span>First Month</span>
                <span>£24.99</span>
              </div>
              <div v-if="formData.paymentPlan === 'annual'" class="checkout-total-item">
                <span>Annual Payment</span>
                <span>£239.88</span>
              </div>
              <div v-if="formData.customDesign" class="checkout-total-item">
                <span>Custom Design</span>
                <span>£99</span>
              </div>
              <div class="checkout-total-item total-row">
                <span class="total-label">Total:</span>
                <span class="total-price">
                  £{{ calculateTotal() }}
                </span>
              </div>
              <div v-if="formData.paymentPlan === 'monthly'" class="checkout-total-note">
                Then £24.99/month
              </div>
            </div>

            <div class="terms-checkbox">
              <label>
                <input 
                  type="checkbox" 
                  v-model="agreedToTerms"
                  required
                />
                <span>I agree to the <router-link to="/models/terms-of-service" target="_blank">Moth Models Terms of Service</router-link> and <router-link to="/privacy-policy" target="_blank">Privacy Policy</router-link></span>
              </label>
            </div>

            <div class="form-actions">
              <button 
                type="submit" 
                class="btn btn-primary"
                :disabled="!agreedToTerms || isSubmitting"
                :class="{ 'disabled': !agreedToTerms || isSubmitting }"
              >
                <span v-if="isSubmitting">Processing...</span>
                <span v-else>Proceed to Checkout</span>
              </button>
              <button type="button" @click="goBack" class="btn btn-secondary">Back</button>
            </div>
          </form>
        </div>

        <!-- Success Step (Shown if payment processing fails) -->
        <div v-if="currentStep === 6" class="success-container">
          <div class="success-icon">✓</div>
          <h1 class="step-title">Redirecting to Checkout...</h1>
          <p class="step-subtitle">Please wait while we process your payment.</p>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Container from '@/components/Container.vue'

const router = useRouter()

const currentStep = ref(1)
const agreedToTerms = ref(false)
const isSubmitting = ref(false)
const emailStatus = ref<'idle' | 'checking' | 'available' | 'taken'>('idle')
const emailTimeout = ref<number | null>(null)
const codeSent = ref(false)
const verificationCode = ref('')
const isSendingCode = ref(false)
const isVerifyingCode = ref(false)
const isResendingCode = ref(false)

const formData = ref({
  email: '',
  firstName: '',
  lastName: '',
  about: '',
  purposes: [] as string[],
  customDesign: false,
  paymentPlan: 'monthly' as 'monthly' | 'annual'
})

// Helper function to get headers for models API requests
const getModelsApiHeaders = (additionalHeaders: Record<string, string> = {}) => {
  const token = import.meta.env.VITE_MODEL_API_TOKEN
  return {
    'Content-Type': 'application/json',
    ...(token && { 'X-Admin-Token': token }),
    ...additionalHeaders
  }
}

const checkEmail = async (email: string) => {
  // Testing bypass - mark test emails as available
  if (email.toLowerCase() === 'test@test.com' || email.toLowerCase() === 'test') {
    emailStatus.value = 'available'
    return
  }

  if (!email || !email.includes('@')) {
    emailStatus.value = 'idle'
    return
  }

  emailStatus.value = 'checking'
  
  // Clear previous timeout
  if (emailTimeout.value) {
    clearTimeout(emailTimeout.value)
  }
  
  // Debounce the API call
  emailTimeout.value = window.setTimeout(async () => {
    try {
      const apiUrl = import.meta.env.VITE_MODELS_API || 'http://localhost:8210'
      const response = await fetch(`${apiUrl}/api/auth/check-email?email=${encodeURIComponent(email)}`, {
        headers: getModelsApiHeaders()
      })
      
      if (response.ok) {
        const data = await response.json()
        emailStatus.value = data.available ? 'available' : 'taken'
      } else {
        emailStatus.value = 'idle'
      }
    } catch (error) {
      console.error('Error checking email:', error)
      emailStatus.value = 'idle'
    }
  }, 500) // Wait 500ms after user stops typing
}

const sendVerificationCode = async (email: string) => {
  try {
    const apiUrl = import.meta.env.VITE_MODELS_API || 'http://localhost:8210'
    const response = await fetch(`${apiUrl}/api/auth/send-verification-code`, {
      method: 'POST',
      headers: getModelsApiHeaders(),
      body: JSON.stringify({ email })
    })

    if (response.ok) {
      return { success: true }
    } else {
      const data = await response.json()
      throw new Error(data.message || 'Failed to send verification code')
    }
  } catch (error) {
    console.error('Error sending verification code:', error)
    throw error
  }
}

const verifyEmailCode = async (email: string, code: string) => {
  try {
    const apiUrl = import.meta.env.VITE_MODELS_API || 'http://localhost:8210'
    const response = await fetch(`${apiUrl}/api/auth/verify-email-code`, {
      method: 'POST',
      headers: getModelsApiHeaders(),
      body: JSON.stringify({ email, code })
    })

    if (response.ok) {
      const data = await response.json()
      return { success: true, message: data.message }
    } else {
      const data = await response.json()
      throw new Error(data.message || 'Invalid verification code')
    }
  } catch (error) {
    console.error('Error verifying email code:', error)
    throw error
  }
}

const handleEmailVerification = async () => {
  // Testing bypass - skip verification for "test" email
  if (formData.value.email.toLowerCase() === 'test@test.com' || formData.value.email.toLowerCase() === 'test') {
    currentStep.value = 2
    return
  }

  if (!codeSent.value) {
    // Send verification code
    if (formData.value.email && emailStatus.value !== 'taken' && emailStatus.value !== 'checking') {
      isSendingCode.value = true
      try {
        await sendVerificationCode(formData.value.email)
        codeSent.value = true
      } catch (error) {
        alert('Failed to send verification code: ' + error.message)
      } finally {
        isSendingCode.value = false
      }
    }
  } else {
    // Verify the code
    if (verificationCode.value.length === 6) {
      isVerifyingCode.value = true
      try {
        await verifyEmailCode(formData.value.email, verificationCode.value)
        currentStep.value = 2
      } catch (error) {
        alert('Verification failed: ' + error.message)
        verificationCode.value = ''
      } finally {
        isVerifyingCode.value = false
      }
    }
  }
}

const resendCode = async () => {
  isResendingCode.value = true
  try {
    await sendVerificationCode(formData.value.email)
  } catch (error) {
    alert('Failed to resend verification code: ' + error.message)
  } finally {
    isResendingCode.value = false
  }
}

const handleNameSubmit = () => {
  if (formData.value.firstName && formData.value.lastName) {
    currentStep.value = 3
  }
}

const handleAboutSubmit = () => {
  if (formData.value.about) {
    currentStep.value = 4
  }
}

const handlePurposeSubmit = () => {
  if (formData.value.purposes.length > 0) {
    currentStep.value = 5
  }
}

const calculateTotal = () => {
  let total = 0
  
  if (formData.value.paymentPlan === 'monthly') {
    // Setup fee + first month (including custom design if selected)
    const monthlyPrice = 24.99 + (formData.value.customDesign ? 99 : 0)
    total = 60 + monthlyPrice
  } else {
    // Annual payment
    const annualPrice = 239.88 + (formData.value.customDesign ? 99 : 0)
    total = 60 + annualPrice
  }
  
  return Math.round(total * 100) / 100
}

const handleCheckoutSubmit = async () => {
  if (agreedToTerms.value) {
    isSubmitting.value = true
    
    try {
      // Send data to backend to create Stripe Checkout Session
      const apiUrl = import.meta.env.VITE_MODELS_API || 'http://localhost:8210'
      console.log('Sending request to:', `${apiUrl}/api/applications/checkout`)
      console.log('Payload:', {
        email: formData.value.email,
        firstName: formData.value.firstName,
        lastName: formData.value.lastName,
        about: formData.value.about,
        purposes: formData.value.purposes,
        customDesign: formData.value.customDesign,
        paymentPlan: formData.value.paymentPlan
      })
      
      const response = await fetch(`${apiUrl}/api/applications/checkout`, {
        method: 'POST',
        headers: getModelsApiHeaders(),
        body: JSON.stringify({
          email: formData.value.email,
          firstName: formData.value.firstName,
          lastName: formData.value.lastName,
          about: formData.value.about,
          purposes: formData.value.purposes,
          customDesign: formData.value.customDesign,
          paymentPlan: formData.value.paymentPlan
        })
      })

      console.log('Response status:', response.status)
      const responseData = await response.json()
      console.log('Response data:', responseData)

      if (response.ok && responseData.url) {
        // Redirect to Stripe Checkout
        window.location.href = responseData.url
      } else {
        console.error('Backend error:', responseData)
        throw new Error(responseData.error || 'Failed to create checkout session')
      }
    } catch (error) {
      console.error('Error creating checkout session:', error)
      alert('Error: ' + error.message + '\n\nPlease check your browser console for details.')
      isSubmitting.value = false
    }
  }
}

const goBack = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const goHome = () => {
  router.push('/')
}
</script>

<style scoped>
.model-apply-page {
  min-height: 100vh;
  background: var(--gradient-secondary);
  color: var(--color-text-primary);
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.apply-content {
  max-width: 600px;
  margin: -8vh auto 0;
}

/* Step Indicator */
.step-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.step-dot {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 600;
  transition: all 0.3s ease;
}

.step-dot.active {
  background: rgba(139, 92, 246, 0.2);
  border-color: #8B5CF6;
  color: #8B5CF6;
}

.step-dot.completed {
  background: #8B5CF6;
  border-color: #8B5CF6;
  color: white;
}

.step-line {
  flex: 1;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.step-line.active {
  background: #8B5CF6;
}

/* Step Container */
.step-container {
  animation: fadeIn 0.4s ease-in-out;
}

.step-container-checkout {
  padding-top: 4rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.step-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: center;
  color: white;
}

.step-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  margin-bottom: 2rem;
}

/* Form Styles */
.apply-form {
  margin-top: 2rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  font-size: 0.95rem;
}

.form-input {
  width: 100%;
  padding: 0.875rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #8B5CF6;
  background: rgba(255, 255, 255, 0.08);
}

.form-input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.form-input:required:invalid {
  border-color: rgba(255, 100, 100, 0.5);
}

/* Email Status Styles */
.email-checking {
  border-color: rgba(255, 200, 0, 0.5) !important;
}

.email-available {
  border-color: #10B981 !important;
  background: rgba(16, 185, 129, 0.05) !important;
}

.email-taken {
  border-color: #EF4444 !important;
  background: rgba(239, 68, 68, 0.05) !important;
}

.email-status-message {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.status-checking {
  color: rgba(255, 200, 0, 0.9);
  animation: pulse 1.5s ease-in-out infinite;
}

.status-available {
  color: #10B981;
  font-weight: 500;
}

.status-taken {
  color: #EF4444;
  font-weight: 500;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Verification Code Styles */
.code-input {
  text-align: center;
  font-size: 1.5rem;
  letter-spacing: 0.3rem;
  font-weight: 600;
}

.code-resend {
  margin-top: 0.75rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.resend-link {
  background: none;
  border: none;
  color: #8B5CF6;
  text-decoration: underline;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0;
  transition: color 0.3s ease;
}

.resend-link:hover {
  color: #A78BFA;
}

/* Buttons */
.btn {
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #8B5CF6;
  color: white;
}

.btn-primary:hover:not(.disabled) {
  background: #7C3AED;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
}

.btn-primary.disabled {
  background: rgba(139, 92, 246, 0.3);
  cursor: not-allowed;
  opacity: 0.6;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.form-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}

.form-actions .btn {
  flex: 1;
}

/* Review Section */
.review-section {
  margin: 2rem 0;
}

.review-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.review-card h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
}

.review-card p {
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
}

.review-card strong {
  color: white;
  font-weight: 600;
}

/* Checkbox Group */
.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.checkbox-option {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.checkbox-option:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
}

.checkbox-option input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.checkbox-option span {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  font-size: 1rem;
}

.checkbox-option input[type="checkbox"]:checked + span {
  color: white;
}

.checkbox-option:has(input[type="checkbox"]:checked) {
  background: rgba(139, 92, 246, 0.1);
  border-color: #8B5CF6;
}

/* Terms Checkbox */
.terms-checkbox {
  margin: 2rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
}

.terms-checkbox label {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  line-height: 1.5;
}

.terms-checkbox input[type="checkbox"] {
  margin-top: 0.1rem;
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.terms-checkbox a {
  color: #8B5CF6;
  text-decoration: underline;
}

.terms-checkbox a:hover {
  color: #A78BFA;
}

/* Pre-Checkout Box */
.pre-checkout-box {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.pre-checkout-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
}

.pre-checkout-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.pre-checkout-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
}

.pre-checkout-list li svg {
  color: #8B5CF6;
  flex-shrink: 0;
}

/* Custom Design Option */
.custom-design-option {
  margin-bottom: 1.5rem;
}

.custom-design-checkbox {
  display: block;
  cursor: pointer;
}

.custom-design-content {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 1.25rem;
  transition: all 0.3s ease;
}

.custom-design-checkbox:has(input:checked) .custom-design-content {
  background: rgba(139, 92, 246, 0.1);
  border-color: #8B5CF6;
}

.custom-design-checkbox input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.custom-design-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.custom-design-label {
  font-size: 1rem;
  font-weight: 600;
  color: white;
}

.custom-design-price {
  font-size: 1rem;
  font-weight: 700;
  color: #8B5CF6;
}

.custom-design-description {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  line-height: 1.5;
}

/* Checkout Total Box */
.checkout-total-box {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.checkout-total-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
}

.checkout-total-item.total-row {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.total-label {
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
}

.total-price {
  font-size: 1.3rem;
  font-weight: 700;
  color: #8B5CF6;
}

.checkout-total-note {
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
  text-align: center;
}

/* Payment Plan Styles */
.form-label {
  display: block;
  margin-bottom: 0.75rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  font-size: 0.95rem;
}

.payment-plan-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.payment-plan-option {
  display: block;
  cursor: pointer;
}

.payment-plan-option input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.payment-plan-content {
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 1rem;
  transition: all 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.payment-plan-option:has(input:checked) .payment-plan-content,
.payment-plan-option.selected .payment-plan-content {
  background: rgba(139, 92, 246, 0.1);
  border-color: #8B5CF6;
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.2);
}

.payment-plan-option:hover .payment-plan-content {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
}

.payment-plan-main {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
}

.payment-plan-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.payment-plan-name {
  font-size: 1rem;
  font-weight: 600;
  color: white;
}

.payment-plan-badge {
  background: #8B5CF6;
  color: white;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
}

.payment-plan-badge.lifetime {
  background: #10B981;
}

.payment-plan-price {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.1rem;
}

.payment-plan-price:has(.price-yearly-note) {
  gap: 0;
}

.price-amount {
  font-size: 1.4rem;
  font-weight: 700;
  color: white;
  line-height: 1;
}

.price-period {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
}

.price-yearly-note {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 400;
  margin-top: -0.2rem;
}

.payment-plan-subtitle {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  display: block;
}

.setup-fee-notice {
  margin-top: 0.75rem;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
}

/* Success */
.success-container {
  text-align: center;
  animation: fadeIn 0.4s ease-in-out;
}

.success-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #8B5CF6;
  color: white;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  animation: scaleIn 0.5s ease-out;
}

@keyframes scaleIn {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .model-apply-page {
    padding: 2rem 0;
  }

  .step-title {
    font-size: 2rem;
  }

  .step-subtitle {
    font-size: 1rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .step-indicator {
    margin-bottom: 2rem;
  }

  .step-dot {
    width: 32px;
    height: 32px;
    font-size: 0.9rem;
  }

  .step-line {
    min-width: 20px;
  }

  .form-actions {
    flex-direction: column;
  }

  .step-container-checkout {
    padding-top: 8rem;
  }
}
</style>

