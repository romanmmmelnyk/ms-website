<template>
  <div class="apply-view">
    <!-- Geometric Grid Pattern Background -->
    <div class="geometric-background">
      <!-- Grid Lines -->
      <div class="grid-lines">
        <div class="grid-line horizontal" v-for="i in 8" :key="`h-${i}`" :style="getGridLineStyle('horizontal', i)"></div>
        <div class="grid-line vertical" v-for="i in 12" :key="`v-${i}`" :style="getGridLineStyle('vertical', i)"></div>
      </div>
      
      <!-- Geometric Shapes -->
      <div class="geometric-shapes">
        <!-- Hexagons -->
        <div class="hexagon" v-for="i in 15" :key="`hex-${i}`" :style="getHexagonStyle(i)" :data-speed="getRandomSpeed()"></div>
        
        <!-- Triangles -->
        <div class="triangle" v-for="i in 12" :key="`tri-${i}`" :style="getTriangleStyle(i)" :data-speed="getRandomSpeed()"></div>
        
        <!-- Squares -->
        <div class="square" v-for="i in 8" :key="`sq-${i}`" :style="getSquareStyle(i)" :data-speed="getRandomSpeed()"></div>
        
        <!-- Circles -->
        <div class="circle" v-for="i in 10" :key="`cir-${i}`" :style="getCircleStyle(i)" :data-speed="getRandomSpeed()"></div>
      </div>
      
      <!-- Floating Elements -->
      <div class="floating-elements">
        <div class="floating-dot" v-for="i in 20" :key="`dot-${i}`" :style="getFloatingDotStyle(i)"></div>
      </div>
      
      <!-- Connection Lines -->
      <svg class="connections-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:var(--color-primary-purple);stop-opacity:0.3" />
            <stop offset="100%" style="stop-color:var(--color-secondary-teal);stop-opacity:0.1" />
          </linearGradient>
        </defs>
        <path 
          v-for="i in 18" 
          :key="`path-${i}`"
          :d="getConnectionPath()"
          stroke="url(#connectionGradient)"
          stroke-width="0.1"
          fill="none"
          opacity="0.4"
          class="connection-path"
        />
      </svg>
    </div>

    <!-- Content Overlay -->
    <div class="content-overlay">
      <!-- Hero Section -->
      <Container>
        <div class="apply-hero" ref="heroSection">
          <div class="apply-header">
            <div class="apply-subtitle" ref="subtitle">
              <div class="vertical-line"></div>
              <span>Ready to start your project?</span>
            </div>
            
            <h1 class="apply-title" ref="title">
              Start your
              <span class="highlight">project</span>
            </h1>
            
            <p class="apply-description" ref="description">
              Tell us about your project and we'll get back to you within 24 hours with a detailed proposal and next steps.
            </p>
          </div>

          <!-- Application Form -->
          <div class="application-form-container" ref="formContainer">
            <form @submit.prevent="handleSubmit" class="application-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="firstName">First Name *</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    v-model="form.firstName"
                    :class="{ 'error': errors.firstName }"
                    placeholder="Enter your first name"
                    required
                  >
                  <span v-if="errors.firstName" class="error-message">{{ errors.firstName }}</span>
                </div>
                
                <div class="form-group">
                  <label for="lastName">Last Name *</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    v-model="form.lastName"
                    :class="{ 'error': errors.lastName }"
                    placeholder="Enter your last name"
                    required
                  >
                  <span v-if="errors.lastName" class="error-message">{{ errors.lastName }}</span>
                </div>
              </div>

              <div class="form-group">
                <label for="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email"
                  :class="{ 'error': errors.email }"
                  placeholder="Enter your email address"
                  required
                >
                <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
              </div>

              <div class="form-group">
                <label for="company">Company</label>
                <input 
                  type="text" 
                  id="company" 
                  v-model="form.company"
                  placeholder="Enter your company name (optional)"
                >
              </div>

              <div class="form-group">
                <label for="projectType">Project Type *</label>
                <select 
                  id="projectType" 
                  v-model="form.projectType"
                  :class="{ 'error': errors.projectType }"
                  required
                >
                  <option value="">Select project type</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="saas-webapp">SaaS / Web Application</option>
                  <option value="consulting">IT Consulting</option>
                  <option value="other">Other</option>
                </select>
                <span v-if="errors.projectType" class="error-message">{{ errors.projectType }}</span>
              </div>

              <div class="form-group">
                <label for="budget">Budget Range</label>
                <select 
                  id="budget" 
                  v-model="form.budget"
                >
                  <option value="">Select budget range</option>
                  <option value="under-10k">Under £10,000</option>
                  <option value="10k-25k">£10,000 - £25,000</option>
                  <option value="25k-50k">£25,000 - £50,000</option>
                  <option value="50k-100k">£50,000 - £100,000</option>
                  <option value="over-100k">Over £100,000</option>
                </select>
              </div>

              <div class="form-group">
                <label for="timeline">Timeline</label>
                <select 
                  id="timeline" 
                  v-model="form.timeline"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="1-3-months">1-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="6-12-months">6-12 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">Project Description *</label>
                <textarea 
                  id="message" 
                  v-model="form.message"
                  :class="{ 'error': errors.message }"
                  rows="6"
                  placeholder="Describe your project requirements, goals, and any specific features you need..."
                  required
                ></textarea>
                <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
              </div>

              <div class="form-group checkbox-group">
                <label class="checkbox-label">
                  <input 
                    type="checkbox" 
                    v-model="form.newsletter"
                  >
                  <span class="checkbox-text">
                    Subscribe to our newsletter for updates and insights
                  </span>
                </label>
              </div>

              <!-- Submit Button -->
              <div class="form-actions">
                <button 
                  type="submit" 
                  class="submit-btn"
                  :disabled="isSubmitting"
                >
                  <span v-if="isSubmitting" class="loading-spinner"></span>
                  <span class="btn-text">{{ isSubmitting ? 'Sending...' : 'Send Enquiry' }}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import Container from '@/components/Container.vue'

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

const isSubmitting = ref(false)
const heroSection = ref<HTMLElement>()
const subtitle = ref<HTMLElement>()
const title = ref<HTMLElement>()
const description = ref<HTMLElement>()
const formContainer = ref<HTMLElement>()

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

// Geometric Grid Pattern Functions
const getGridLineStyle = (direction: 'horizontal' | 'vertical', index: number) => {
  if (direction === 'horizontal') {
    const top = (index * 12.5) + '%'
    return {
      top: top,
      left: '0%',
      width: '100%',
      height: '1px'
    }
  } else {
    const left = (index * 8.33) + '%'
    return {
      left: left,
      top: '0%',
      width: '1px',
      height: '100%'
    }
  }
}

const getHexagonStyle = (index: number) => {
  const size = 20 + Math.random() * 40
  const x = Math.random() * 100
  const y = Math.random() * 100
  const rotation = Math.random() * 360
  const delay = index * 0.2
  
  return {
    left: `${x}%`,
    top: `${y}%`,
    width: `${size}px`,
    height: `${size}px`,
    transform: `rotate(${rotation}deg)`,
    animationDelay: `${delay}s`
  }
}

const getTriangleStyle = (index: number) => {
  const size = 15 + Math.random() * 25
  const x = Math.random() * 100
  const y = Math.random() * 100
  const rotation = Math.random() * 360
  const delay = index * 0.15
  
  return {
    left: `${x}%`,
    top: `${y}%`,
    width: `${size}px`,
    height: `${size}px`,
    transform: `rotate(${rotation}deg)`,
    animationDelay: `${delay}s`
  }
}

const getSquareStyle = (index: number) => {
  const size = 12 + Math.random() * 20
  const x = Math.random() * 100
  const y = Math.random() * 100
  const rotation = Math.random() * 360
  const delay = index * 0.1
  
  return {
    left: `${x}%`,
    top: `${y}%`,
    width: `${size}px`,
    height: `${size}px`,
    transform: `rotate(${rotation}deg)`,
    animationDelay: `${delay}s`
  }
}

const getCircleStyle = (index: number) => {
  const size = 8 + Math.random() * 16
  const x = Math.random() * 100
  const y = Math.random() * 100
  const delay = index * 0.25
  
  return {
    left: `${x}%`,
    top: `${y}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${delay}s`
  }
}

const getFloatingDotStyle = (index: number) => {
  const size = 2 + Math.random() * 3
  const x = Math.random() * 100
  const y = Math.random() * 100
  const delay = index * 0.1
  const duration = 4 + Math.random() * 2
  
  return {
    left: `${x}%`,
    top: `${y}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`
  }
}

const getRandomSpeed = () => {
  return Math.random() * 0.3 + 0.1
}

const getConnectionPath = () => {
  const x1 = Math.random() * 100
  const y1 = Math.random() * 100
  const x2 = Math.random() * 100
  const y2 = Math.random() * 100
  
  return `M ${x1} ${y1} L ${x2} ${y2}`
}

// Parallax and Animation Effects
let scrollY = 0
let ticking = false

const updateParallax = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateParallaxElements()
      ticking = false
    })
    ticking = true
  }
}

const updateParallaxElements = () => {
  const scrolled = window.pageYOffset
  const rate = scrolled * -0.3
  
  // Update geometric shapes with parallax
  const shapes = document.querySelectorAll('.hexagon, .triangle, .square, .circle')
  shapes.forEach((shape, index) => {
    const speed = parseFloat(shape.getAttribute('data-speed') || '0.1')
    const yPos = rate * speed
    ;(shape as HTMLElement).style.transform = `translateY(${yPos}px) rotate(${index * 2}deg)`
  })
  
  // Update floating dots
  const dots = document.querySelectorAll('.floating-dot')
  dots.forEach((dot, index) => {
    const speed = 0.2 + (index * 0.05)
    const yPos = rate * speed
    ;(dot as HTMLElement).style.transform = `translateY(${yPos}px)`
  })
  
  // Update connection paths
  const paths = document.querySelectorAll('.connection-path')
  paths.forEach((path, index) => {
    const speed = 0.15 + (index * 0.03)
    const yPos = rate * speed
    ;(path as HTMLElement).style.transform = `translateY(${yPos}px)`
  })
}

// Form Handling
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
    console.log('Submitting payload:', payload)
    const response = await fetch('https://server.moth.solutions/enquiries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    })

    console.log('Response status:', response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Error response:', errorText)
      throw new Error(`Server responded with ${response.status}: ${response.statusText}`)
    }

    const result = await response.json()
    console.log('Form submitted successfully:', result)
    
    // Success - show success feedback
    alert('Thank you for your enquiry! We will get back to you within 24 hours.')
    
    // Reset form
    resetForm()
  } catch (error) {
    console.error('Error submitting form:', error)
    if (error instanceof Error) {
      alert(`Error: ${error.message}\n\nPlease try again or contact us directly.`)
    } else {
      alert('There was an error submitting your enquiry. Please try again or contact us directly.')
    }
  } finally {
    isSubmitting.value = false
  }
}

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

// Intersection Observer for animations
const createIntersectionObserver = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })
  
  return observer
}

onMounted(() => {
  const observer = createIntersectionObserver()
  
  // Observe elements for animation
  if (subtitle.value) observer.observe(subtitle.value)
  if (title.value) observer.observe(title.value)
  if (description.value) observer.observe(description.value)
  if (formContainer.value) observer.observe(formContainer.value)
  
  // Add scroll listener for parallax
  window.addEventListener('scroll', updateParallax)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateParallax)
})
</script>

<style scoped>
.apply-view {
  min-height: 100vh;
  position: relative;
  background: var(--gradient-secondary);
  overflow: hidden;
}

/* Geometric Grid Pattern Background */
.geometric-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

/* Grid Lines */
.grid-lines {
  position: absolute;
  width: 100%;
  height: 100%;
}

.grid-line {
  position: absolute;
  background: linear-gradient(90deg, transparent, rgba(127, 0, 253, 0.1), transparent);
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.grid-line.horizontal {
  background: linear-gradient(90deg, transparent, rgba(127, 0, 253, 0.08), transparent);
}

.grid-line.vertical {
  background: linear-gradient(180deg, transparent, rgba(127, 0, 253, 0.08), transparent);
}

/* Geometric Shapes */
.geometric-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.hexagon {
  position: absolute;
  background: linear-gradient(45deg, var(--color-primary-purple), var(--color-secondary-teal));
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  opacity: 0.15;
  animation: float 8s ease-in-out infinite;
  transition: transform 0.1s ease-out;
}

.triangle {
  position: absolute;
  background: linear-gradient(45deg, var(--color-secondary-teal), var(--color-primary-purple));
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  opacity: 0.12;
  animation: float 10s ease-in-out infinite reverse;
  transition: transform 0.1s ease-out;
}

.square {
  position: absolute;
  background: linear-gradient(45deg, var(--color-primary-purple), var(--color-accent-teal));
  opacity: 0.1;
  animation: float 12s ease-in-out infinite;
  transition: transform 0.1s ease-out;
}

.circle {
  position: absolute;
  background: linear-gradient(45deg, var(--color-secondary-teal), var(--color-accent-blue));
  border-radius: 50%;
  opacity: 0.08;
  animation: float 6s ease-in-out infinite reverse;
  transition: transform 0.1s ease-out;
}

/* Floating Elements */
.floating-elements {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.floating-dot {
  position: absolute;
  background: var(--color-primary-purple);
  border-radius: 50%;
  opacity: 0.4;
  animation: float 4s ease-in-out infinite;
}

/* Connection Lines */
.connections-svg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.connection-path {
  transition: transform 0.1s ease-out;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) scale(1);
    opacity: 0.8;
  }
  50% {
    transform: translateY(-15px) scale(1.05);
    opacity: 0.4;
  }
}

/* Content Overlay */
.content-overlay {
  position: relative;
  z-index: 2;
  min-height: 100vh;
  padding: 140px 0 80px;
}

.apply-hero {
  max-width: 800px;
  margin: 0 auto;
}

.apply-header {
  text-align: center;
  margin-bottom: 60px;
}

.apply-subtitle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
  color: var(--color-text-muted);
  font-size: 1.1rem;
  font-weight: 500;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.apply-subtitle.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.vertical-line {
  width: 2px;
  height: 40px;
  background: var(--color-white);
  flex-shrink: 0;
}

.apply-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  color: var(--color-text-primary);
  margin-bottom: 30px;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease 0.2s;
}

.apply-title.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.highlight {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.apply-description {
  font-size: 1.2rem;
  color: var(--color-text-muted);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease 0.4s;
}

.apply-description.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Application Form */
.application-form-container {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease 0.6s;
}

.application-form-container.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.application-form {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  backdrop-filter: blur(10px);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  color: var(--color-text-primary);
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 8px;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  color: var(--color-text-primary);
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.12);
  border-color: var(--color-primary-purple);
  box-shadow: 0 0 0 3px rgba(127, 0, 253, 0.1);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--color-text-muted);
  opacity: 0.6;
}

.form-group input.error,
.form-group select.error,
.form-group textarea.error {
  border-color: #ef4444;
}

.error-message {
  display: block;
  color: #ef4444;
  font-size: 0.85rem;
  margin-top: 6px;
}

/* Checkbox */
.checkbox-group {
  margin-top: 10px;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: var(--color-primary-purple);
  margin-top: 2px;
}

.checkbox-text {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Form Actions */
.form-actions {
  text-align: center;
  margin-top: 30px;
}

.submit-btn {
  background: var(--gradient-primary);
  color: var(--color-text-primary);
  border: none;
  border-radius: 12px;
  padding: 18px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  overflow: hidden;
  min-width: 250px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.submit-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.submit-btn:hover:not(:disabled)::before {
  left: 100%;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(127, 0, 253, 0.4);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: var(--color-white);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.btn-text {
  display: inline-block;
}

/* Responsive Design */
@media (max-width: 768px) {
  .content-overlay {
    padding: 120px 0 60px;
  }

  .apply-title {
    font-size: 2.5rem;
  }

  .apply-description {
    font-size: 1.1rem;
  }

  .application-form {
    padding: 30px 25px;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
}

@media (max-width: 480px) {
  .apply-title {
    font-size: 2rem;
  }

  .apply-subtitle {
    flex-direction: column;
    gap: 15px;
  }

  .vertical-line {
    width: 40px;
    height: 2px;
  }

  .application-form {
    padding: 25px 20px;
  }

  .submit-btn {
    width: 100%;
    padding: 16px 24px;
    font-size: 1rem;
  }
}
</style>

