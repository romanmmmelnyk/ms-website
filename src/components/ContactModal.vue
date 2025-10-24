<template>
  <Transition name="modal">
    <div v-if="isOpen" class="modal-overlay" @click="handleOverlayClick">
      <!-- Animated Background Particles -->
      <div class="modal-particles">
        <div class="particle" v-for="i in 20" :key="`particle-${i}`" :style="getParticleStyle(i)"></div>
      </div>
      
      <div class="modal-container" @click.stop>
        <!-- Close Button -->
        <button class="modal-close" @click="$emit('close')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        <!-- Modal Content -->
        <div class="modal-content">
          <div class="modal-header">
            <div class="header-decoration">
              <div class="decoration-line"></div>
              <div class="decoration-dot"></div>
              <div class="decoration-line"></div>
            </div>
            <h2 class="modal-title">Get in Touch</h2>
            <p class="modal-subtitle">Tell us about your project and we'll get back to you within 24 hours</p>
          </div>

          <!-- Contact Form -->
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-row">
              <div class="form-group">
                <label for="firstName" class="form-label">First Name *</label>
                <div class="input-wrapper">
                  <input
                    id="firstName"
                    v-model="form.firstName"
                    type="text"
                    class="form-input"
                    :class="{ 'error': errors.firstName, 'filled': form.firstName }"
                    placeholder="Enter your first name"
                    required
                  />
                  <div class="input-focus-border"></div>
                </div>
                <span v-if="errors.firstName" class="error-message">{{ errors.firstName }}</span>
              </div>

              <div class="form-group">
                <label for="lastName" class="form-label">Last Name *</label>
                <div class="input-wrapper">
                  <input
                    id="lastName"
                    v-model="form.lastName"
                    type="text"
                    class="form-input"
                    :class="{ 'error': errors.lastName, 'filled': form.lastName }"
                    placeholder="Enter your last name"
                    required
                  />
                  <div class="input-focus-border"></div>
                </div>
                <span v-if="errors.lastName" class="error-message">{{ errors.lastName }}</span>
              </div>
            </div>

            <div class="form-group">
              <label for="email" class="form-label">Email Address *</label>
              <div class="input-wrapper">
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  class="form-input"
                  :class="{ 'error': errors.email, 'filled': form.email }"
                  placeholder="Enter your email address"
                  required
                />
                <div class="input-focus-border"></div>
              </div>
              <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
            </div>

            <div class="form-group">
              <label for="company" class="form-label">Company</label>
              <div class="input-wrapper">
                <input
                  id="company"
                  v-model="form.company"
                  type="text"
                  class="form-input"
                  :class="{ 'filled': form.company }"
                  placeholder="Enter your company name (optional)"
                />
                <div class="input-focus-border"></div>
              </div>
            </div>

            <div class="form-group">
              <label for="projectType" class="form-label">Project Type *</label>
              <div class="select-wrapper">
                <select
                  id="projectType"
                  v-model="form.projectType"
                  class="form-select"
                  :class="{ 'error': errors.projectType, 'filled': form.projectType }"
                  required
                >
                  <option value="">Select project type</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="consulting">IT Consulting</option>
                  <option value="other">Other</option>
                </select>
                <div class="select-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </div>
              </div>
              <span v-if="errors.projectType" class="error-message">{{ errors.projectType }}</span>
            </div>

            <div class="form-group">
              <label for="budget" class="form-label">Budget Range</label>
              <div class="select-wrapper">
                <select
                  id="budget"
                  v-model="form.budget"
                  class="form-select"
                  :class="{ 'filled': form.budget }"
                >
                  <option value="">Select budget range</option>
                  <option value="under-10k">Under $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="over-100k">Over $100,000</option>
                </select>
                <div class="select-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="timeline" class="form-label">Timeline</label>
              <div class="select-wrapper">
                <select
                  id="timeline"
                  v-model="form.timeline"
                  class="form-select"
                  :class="{ 'filled': form.timeline }"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="1-3-months">1-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="6-12-months">6-12 months</option>
                  <option value="flexible">Flexible</option>
                </select>
                <div class="select-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="message" class="form-label">Project Description *</label>
              <div class="textarea-wrapper">
                <textarea
                  id="message"
                  v-model="form.message"
                  class="form-textarea"
                  :class="{ 'error': errors.message, 'filled': form.message }"
                  rows="5"
                  placeholder="Describe your project requirements, goals, and any specific features you need..."
                  required
                ></textarea>
                <div class="textarea-focus-border"></div>
              </div>
              <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
            </div>

            <div class="form-group">
              <label class="checkbox-label">
                <input
                  v-model="form.newsletter"
                  type="checkbox"
                  class="form-checkbox"
                />
                <div class="checkbox-custom">
                  <svg class="checkmark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <span class="checkbox-text">
                  Subscribe to our newsletter for updates and insights
                </span>
              </label>
            </div>

            <!-- Submit Button -->
            <div class="form-actions">
              <button
                type="submit"
                class="btn btn-primary"
                :disabled="isSubmitting"
              >
                <div class="btn-content">
                  <span v-if="isSubmitting" class="loading-spinner"></span>
                  <span class="btn-text">{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
                </div>
                <div class="btn-background"></div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'

interface Props {
  isOpen: boolean
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  company: string
  projectType: string
  budget: string
  timeline: string
  message: string
  newsletter: boolean
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  projectType?: string
  message?: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  close: []
}>()

const isSubmitting = ref(false)
const form = reactive<FormData>({
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  projectType: '',
  budget: '',
  timeline: '',
  message: '',
  newsletter: false
})

const errors = reactive<FormErrors>({})

// Reset form when modal opens
watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    resetForm()
  }
})

const resetForm = () => {
  Object.assign(form, {
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    newsletter: false
  })
  Object.keys(errors).forEach(key => delete errors[key as keyof FormErrors])
}

const validateForm = (): boolean => {
  const newErrors: FormErrors = {}

  if (!form.firstName.trim()) {
    newErrors.firstName = 'First name is required'
  }

  if (!form.lastName.trim()) {
    newErrors.lastName = 'Last name is required'
  }

  if (!form.email.trim()) {
    newErrors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    newErrors.email = 'Please enter a valid email address'
  }

  if (!form.projectType) {
    newErrors.projectType = 'Please select a project type'
  }

  if (!form.message.trim()) {
    newErrors.message = 'Project description is required'
  }

  // Clear previous errors
  Object.keys(errors).forEach(key => delete errors[key as keyof FormErrors])
  
  // Set new errors
  Object.assign(errors, newErrors)

  return Object.keys(newErrors).length === 0
}

const handleSubmit = async () => {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true

  try {
    // Prepare the data payload
    const payload = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      email: form.email.trim(),
      company: form.company.trim() || undefined,
      projectType: form.projectType,
      budget: form.budget || undefined,
      timeline: form.timeline || undefined,
      message: form.message.trim(),
      newsletter: form.newsletter
    }

    // Remove undefined values (optional fields that are empty)
    Object.keys(payload).forEach(key => 
      payload[key as keyof typeof payload] === undefined && delete payload[key as keyof typeof payload]
    )

    // Make the API call
    const response = await fetch('https://server.moth.solutions/enquiries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    })

    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}: ${response.statusText}`)
    }

    const result = await response.json()
    console.log('Form submitted successfully:', result)
    
    // Success - show success feedback
    alert('Thank you for your enquiry! We will get back to you within 24 hours.')
    
    // Close modal and reset form
    emit('close')
    resetForm()
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('There was an error submitting your enquiry. Please try again or contact us directly.')
  } finally {
    isSubmitting.value = false
  }
}

const handleOverlayClick = () => {
  emit('close')
}

const getParticleStyle = (index: number) => {
  const delay = index * 0.1
  const duration = 3 + Math.random() * 2
  const size = 2 + Math.random() * 4
  
  return {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

/* Animated Background Particles */
.modal-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.particle {
  position: absolute;
  background: var(--color-primary-purple);
  border-radius: 50%;
  opacity: 0.6;
  animation: particleFloat 3s ease-in-out infinite;
}

@keyframes particleFloat {
  0%, 100% {
    transform: translateY(0px) scale(1);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-20px) scale(1.2);
    opacity: 0.3;
  }
}

.modal-container {
  background: var(--gradient-secondary);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg) scale(1.1);
}

.modal-close svg {
  width: 20px;
  height: 20px;
  color: var(--color-white);
}

.modal-content {
  padding: var(--spacing-4xl);
}

.modal-header {
  text-align: center;
  margin-bottom: 40px;
}

.header-decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.decoration-line {
  width: 40px;
  height: 2px;
  background: var(--gradient-primary);
  border-radius: 1px;
}

.decoration-dot {
  width: 8px;
  height: 8px;
  background: var(--color-secondary-teal);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }
}

.modal-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 15px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.modal-subtitle {
  color: var(--color-text-muted);
  font-size: 1.1rem;
  line-height: 1.5;
}

/* Enhanced Form Styles */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  color: var(--color-text-primary);
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.form-group:focus-within .form-label {
  color: var(--color-primary-purple);
}

.input-wrapper,
.textarea-wrapper {
  position: relative;
}

.form-input,
.form-select,
.form-textarea {
  background: var(--glass-bg-light);
  border: 1px solid var(--glass-border-light);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg) var(--spacing-xl);
  color: var(--color-text-primary);
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  transition: all var(--transition-normal);
  backdrop-filter: blur(var(--blur-md));
  width: 100%;
  box-sizing: border-box;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-primary-purple);
  box-shadow: 0 0 0 3px rgba(127, 0, 253, 0.1);
  background: var(--glass-bg-medium);
}

.form-input.filled,
.form-select.filled,
.form-textarea.filled {
  border-color: var(--color-secondary-teal);
}

.form-input.error,
.form-select.error,
.form-textarea.error {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.input-focus-border,
.textarea-focus-border {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--gradient-primary);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.form-input:focus ~ .input-focus-border,
.form-textarea:focus ~ .textarea-focus-border {
  width: 100%;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--color-text-muted);
  opacity: 0.6;
}

.error-message {
  color: #ef4444;
  font-size: 0.85rem;
  margin-top: 5px;
  font-weight: 500;
  animation: shake 0.5s ease-in-out;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

/* Enhanced Select Styles */
.select-wrapper {
  position: relative;
}

.select-arrow {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: var(--color-text-muted);
  pointer-events: none;
  transition: transform 0.3s ease;
}

.form-select:focus ~ .select-arrow {
  transform: translateY(-50%) rotate(180deg);
  color: var(--color-primary-purple);
}

/* Enhanced Checkbox Styles */
.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
}

.form-checkbox {
  display: none;
}

.checkbox-custom {
  width: 24px;
  height: 24px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;
  margin-top: 2px;
}

.checkbox-custom:hover {
  border-color: var(--color-primary-purple);
  background: rgba(127, 0, 253, 0.1);
}

.checkmark {
  width: 16px;
  height: 16px;
  color: var(--color-white);
  opacity: 0;
  transform: scale(0);
  transition: all 0.3s ease;
}

.form-checkbox:checked ~ .checkbox-custom {
  background: var(--gradient-primary);
  border-color: var(--color-primary-purple);
}

.form-checkbox:checked ~ .checkbox-custom .checkmark {
  opacity: 1;
  transform: scale(1);
}

.checkbox-text {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  line-height: 1.4;
}

/* Enhanced Button Styles */
.form-actions {
  margin-top: 20px;
}

.btn {
  width: 100%;
  padding: 18px 32px;
  border-radius: 12px;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  overflow: hidden;
  background: transparent;
}

.btn-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--gradient-primary);
  transition: transform 0.3s ease;
  z-index: 1;
}

.btn:hover .btn-background {
  transform: scale(1.05);
}

.btn-primary {
  color: var(--color-text-primary);
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 15px 35px rgba(127, 0, 253, 0.4);
}

.btn-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

/* Enhanced Loading Spinner */
.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Modal Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-enter-from {
  opacity: 0;
  transform: scale(0.8) translateY(-30px);
}

.modal-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(30px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .modal-content {
    padding: 30px 25px;
  }
  
  .modal-title {
    font-size: 2rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .contact-form {
    gap: 20px;
  }
  
  .header-decoration {
    margin-bottom: 15px;
  }
  
  .decoration-line {
    width: 30px;
  }
}

@media (max-width: 480px) {
  .modal-overlay {
    padding: 15px;
  }
  
  .modal-content {
    padding: 25px 20px;
  }
  
  .modal-title {
    font-size: 1.8rem;
  }
  
  .modal-subtitle {
    font-size: 1rem;
  }
  
  .btn {
    padding: 16px 24px;
    font-size: 1rem;
  }
  
  .header-decoration {
    gap: 8px;
  }
  
  .decoration-line {
    width: 25px;
  }
  
  .decoration-dot {
    width: 6px;
    height: 6px;
  }
}
</style>
