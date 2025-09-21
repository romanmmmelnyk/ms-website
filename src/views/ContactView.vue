<template>
  <div class="contact-view">
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
        <div class="contact-hero" ref="heroSection">
          <div class="contact-header">
            <div class="contact-subtitle" ref="subtitle">
              <div class="vertical-line"></div>
              <span>Ready to start your project?</span>
            </div>
            
            <h1 class="contact-title" ref="title">
              Let's create something
              <span class="highlight">amazing</span>
              together
            </h1>
            
            <p class="contact-description" ref="description">
              Get in touch with our team of experts and let's discuss how we can bring your vision to life.
            </p>
          </div>

          <!-- Contact Methods -->
          <div class="contact-methods" ref="contactMethods">
            <div class="contact-method" @click="openContactModal" ref="method1">
              <div class="method-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <div class="method-content">
                <h3>Send us a message</h3>
                <p>Fill out our contact form and we'll get back to you within 24 hours</p>
              </div>
              <div class="method-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

            <div class="contact-method" ref="method2">
              <div class="method-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div class="method-content">
                <h3>Call us directly</h3>
                <p>Speak with our team at {{ phone }}</p>
              </div>
            </div>

            <div class="contact-method" ref="method3">
              <div class="method-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div class="method-content">
                <h3>Email us</h3>
                <p>Send us an email at {{ email }}</p>
              </div>
            </div>
          </div>

          <!-- CTA Button -->
          <div class="contact-cta" ref="ctaButton">
            <button class="btn btn-primary" @click="openContactModal">
              Start Your Project
            </button>
          </div>
        </div>
      </Container>
    </div>

    <!-- Testimonials Section -->
    <section class="testimonials-section" ref="testimonialsSection">
      <Container>
        <div class="testimonials-content">
          <div class="section-header" ref="testimonialsHeader">
            <h2 class="section-title">What Our Clients Say</h2>
            <p class="section-subtitle">Don't just take our word for it - hear from the people we've helped</p>
          </div>
          
          <div class="testimonials-grid" ref="testimonialsGrid">
            <div class="testimonial-card" v-for="(testimonial, index) in testimonialsData" :key="index" :ref="`testimonial${index}`">
              <div class="testimonial-content">
                <div class="quote-icon">"</div>
                <p class="testimonial-text">{{ testimonial.text }}</p>
                <div class="testimonial-author">
                  <div class="author-avatar">
                    <div class="avatar-placeholder">{{ testimonial.initials }}</div>
                  </div>
                  <div class="author-info">
                    <h4 class="author-name">{{ testimonial.name }}</h4>
                    <p class="author-title">{{ testimonial.title }}</p>
                    <p class="author-company">{{ testimonial.company }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section" ref="faqSection">
      <Container>
        <div class="faq-content">
          <div class="section-header" ref="faqHeader">
            <h2 class="section-title">Frequently Asked Questions</h2>
            <p class="section-subtitle">Get answers to common questions about working with us</p>
          </div>
          
          <div class="faq-list" ref="faqList">
            <div 
              class="faq-item" 
              v-for="(faq, index) in faqsData" 
              :key="index" 
              :ref="`faq${index}`"
              @click="toggleFaq(index)"
            >
              <div class="faq-question">
                <h3>{{ faq.question }}</h3>
                <div class="faq-toggle" :class="{ 'active': faq.isOpen }">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </div>
              </div>
              <div class="faq-answer" :class="{ 'active': faq.isOpen }">
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Contact Modal -->
    <ContactModal 
      :is-open="isModalOpen" 
      @close="closeContactModal"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import Container from '@/components/Container.vue'
import ContactModal from '@/components/ContactModal.vue'
import { useSiteConfig } from '@/composables/useSiteConfig'

const {
  email,
  phone,
  testimonials,
  faq,
  getEmailLink,
  getPhoneLink
} = useSiteConfig()

const isModalOpen = ref(false)
const heroSection = ref<HTMLElement>()
const subtitle = ref<HTMLElement>()
const title = ref<HTMLElement>()
const description = ref<HTMLElement>()
const contactMethods = ref<HTMLElement>()
const ctaButton = ref<HTMLElement>()
const testimonialsSection = ref<HTMLElement>()
const testimonialsHeader = ref<HTMLElement>()
const testimonialsGrid = ref<HTMLElement>()
const faqSection = ref<HTMLElement>()
const faqHeader = ref<HTMLElement>()
const faqList = ref<HTMLElement>()

// Create reactive copies of testimonials and FAQ from config
const testimonialsData = reactive([...testimonials.value])
const faqsData = reactive([...faq.value])

const openContactModal = () => {
  isModalOpen.value = true
}

const closeContactModal = () => {
  isModalOpen.value = false
}

const toggleFaq = (index: number) => {
  faqsData[index].isOpen = !faqsData[index].isOpen
}

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
  if (contactMethods.value) observer.observe(contactMethods.value)
  if (ctaButton.value) observer.observe(ctaButton.value)
  if (testimonialsHeader.value) observer.observe(testimonialsHeader.value)
  if (testimonialsGrid.value) observer.observe(testimonialsGrid.value)
  if (faqHeader.value) observer.observe(faqHeader.value)
  if (faqList.value) observer.observe(faqList.value)
  
  // Add scroll listener for parallax
  window.addEventListener('scroll', updateParallax)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateParallax)
})
</script>

<style scoped>
.contact-view {
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
  display: flex;
  align-items: center;
  padding: 120px 0 80px;
}

.contact-hero {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.contact-header {
  margin-bottom: 80px;
}

.contact-subtitle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
  color: var(--color-text-muted);
  font-size: 1.1rem;
  font-weight: 500;
  opacity: 0.8;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.contact-subtitle.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.vertical-line {
  width: 2px;
  height: 40px;
  background: var(--color-white);
  flex-shrink: 0;
}

.contact-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  color: var(--color-text-primary);
  margin-bottom: 30px;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease 0.2s;
}

.contact-title.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.highlight {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-description {
  font-size: 1.2rem;
  color: var(--color-text-muted);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease 0.4s;
}

.contact-description.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Contact Methods */
.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease 0.6s;
}

.contact-methods.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.contact-method {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 30px;
  text-align: left;
  transition: all 0.3s ease;
  cursor: pointer;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.contact-method::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s ease;
}

.contact-method:hover::before {
  left: 100%;
}

.contact-method:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--color-primary-purple);
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(127, 0, 253, 0.2);
}

.contact-method:first-child {
  background: rgba(127, 0, 253, 0.1);
  border-color: var(--color-primary-purple);
}

.contact-method:first-child:hover {
  background: rgba(127, 0, 253, 0.2);
}

.method-icon {
  width: 60px;
  height: 60px;
  background: var(--gradient-primary);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
}

.contact-method:hover .method-icon {
  transform: scale(1.1) rotate(5deg);
}

.method-icon svg {
  width: 28px;
  height: 28px;
  color: var(--color-white);
}

.method-content h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 10px;
}

.method-content p {
  color: var(--color-text-muted);
  line-height: 1.5;
}

.method-arrow {
  position: absolute;
  top: 30px;
  right: 30px;
  width: 24px;
  height: 24px;
  color: var(--color-primary-purple);
  transition: transform 0.3s ease;
}

.contact-method:hover .method-arrow {
  transform: translateX(5px);
}

/* CTA Button */
.contact-cta {
  margin-top: 40px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease 0.8s;
}

.contact-cta.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.btn {
  padding: 18px 40px;
  border-radius: 12px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.btn:hover::before {
  left: 100%;
}

.btn-primary {
  background: var(--gradient-primary);
  color: var(--color-text-primary);
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(127, 0, 253, 0.4);
}

/* Testimonials Section */
.testimonials-section {
  position: relative;
  z-index: 2;
  padding: 120px 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}

.testimonials-content {
  text-align: center;
}

.section-header {
  margin-bottom: 80px;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease;
}

.section-header.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 20px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--color-text-muted);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease 0.3s;
}

.testimonials-grid.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px 30px;
  text-align: left;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.testimonial-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--gradient-primary);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.testimonial-card:hover::before {
  transform: scaleX(1);
}

.testimonial-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(127, 0, 253, 0.2);
  border-color: var(--color-primary-purple);
}

.quote-icon {
  font-size: 4rem;
  color: var(--color-primary-purple);
  line-height: 1;
  margin-bottom: 20px;
  opacity: 0.6;
}

.testimonial-text {
  font-size: 1.1rem;
  color: var(--color-text-primary);
  line-height: 1.6;
  margin-bottom: 30px;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 15px;
}

.author-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.avatar-placeholder {
  color: var(--color-white);
  font-weight: 600;
  font-size: 1.1rem;
}

.author-info h4 {
  color: var(--color-text-primary);
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 5px 0;
}

.author-title,
.author-company {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.4;
}

/* FAQ Section */
.faq-section {
  position: relative;
  z-index: 2;
  padding: 120px 0;
  background: rgba(127, 0, 253, 0.05);
}

.faq-content {
  max-width: 800px;
  margin: 0 auto;
}

.faq-list {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease 0.3s;
}

.faq-list.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.faq-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  margin-bottom: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  backdrop-filter: blur(10px);
}

.faq-item:hover {
  border-color: var(--color-primary-purple);
  box-shadow: 0 10px 30px rgba(127, 0, 253, 0.2);
}

.faq-question {
  padding: 25px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.3s ease;
}

.faq-item:hover .faq-question {
  background: rgba(255, 255, 255, 0.05);
}

.faq-question h3 {
  color: var(--color-text-primary);
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  flex: 1;
}

.faq-toggle {
  width: 24px;
  height: 24px;
  color: var(--color-primary-purple);
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.faq-toggle.active {
  transform: rotate(180deg);
}

.faq-toggle svg {
  width: 100%;
  height: 100%;
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  padding: 0 30px;
}

.faq-answer.active {
  max-height: 200px;
  padding: 0 30px 25px 30px;
}

.faq-answer p {
  color: var(--color-text-muted);
  line-height: 1.6;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .contact-title,
  .section-title {
    font-size: 2.5rem;
  }
  
  .contact-methods,
  .testimonials-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto 60px;
  }
  
  .testimonials-grid {
    margin-bottom: 0;
  }
}

@media (max-width: 768px) {
  .content-overlay,
  .testimonials-section,
  .faq-section {
    padding: 100px 0 60px;
  }
  
  .contact-title,
  .section-title {
    font-size: 2rem;
  }
  
  .contact-description,
  .section-subtitle {
    font-size: 1.1rem;
  }
  
  .contact-methods,
  .testimonials-grid {
    gap: 20px;
  }
  
  .contact-method,
  .testimonial-card {
    padding: 25px;
  }
  
  .method-icon {
    width: 50px;
    height: 50px;
  }
  
  .method-icon svg {
    width: 24px;
    height: 24px;
  }
  
  .faq-question {
    padding: 20px 25px;
  }
  
  .faq-answer.active {
    padding: 0 25px 20px 25px;
  }
}

@media (max-width: 480px) {
  .contact-title,
  .section-title {
    font-size: 1.8rem;
  }
  
  .contact-subtitle {
    flex-direction: column;
    gap: 15px;
  }
  
  .vertical-line {
    width: 40px;
    height: 2px;
  }
  
  .btn {
    padding: 16px 24px;
    font-size: 1rem;
  }
  
  .testimonial-card {
    padding: 25px 20px;
  }
  
  .faq-question {
    padding: 18px 20px;
  }
  
  .faq-answer.active {
    padding: 0 20px 18px 20px;
  }
}
</style>
