<template>
  <div class="models-page">
    <section class="hero-section">
      <Container>
        <div class="hero-content">
          <!-- Left Side - Text Content -->
          <div class="hero-text">
            <div class="hero-status">
              <div class="status-indicator"></div>
              <span>Booking open - 2 spots left</span>
            </div>

            <h1 class="hero-title">
              Turn Your Name
              <br />
              Into a <span class="highlight">Brand</span>
            </h1>

            <p class="hero-subtitle">Your website is your runway</p>

            <div class="hero-button">
              <button class="btn btn-primary" @click="navigateToContact">BOOK A CALL</button>
            </div>
          </div>

          <!-- Right Side - Hero SVG -->
          <div class="hero-visual">
            <img
              src="/hero.svg"
              alt="Hero illustration"
              class="hero-svg"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        </Container>
      </section>

      <!-- Featured Article Section -->
      <section class="featured-article-section white-bg">
        <Container>
          <div class="article-content">
            <!-- Left Side - Article Introduction -->
            <div class="article-intro">
              <h2 class="article-intro-title">How the website gives a model <span class="highlight-text">an image</span>.</h2>
              <p class="article-intro-subtitle">Reviewed article can light up the truth of success in modeling career</p>
              <button class="btn btn-article" @click="navigateToArticle">READ THE ARTICLE</button>
            </div>

            <!-- Right Side - Featured Article Card -->
            <div class="featured-article-card" @click="navigateToArticle">
              <div class="article-image">
                <img src="/model-article.jpg" alt="Model Portfolio" class="model-photo" />
              </div>
              
              <div class="article-card-content">
                <div class="article-meta">
                  <div class="article-tags">
                    <span class="tag fashion">Fashion</span>
                    <span class="tag model">Model</span>
                  </div>
                  <div class="article-date">April 25, 2025</div>
                </div>
                
                <h3 class="article-card-title">How the website gives a model an image.</h3>
                <p class="article-excerpt">In today's fashion world, first impressions happen online. A personal website is not just photos — it's the image that defines how agencies and clients see you</p>
                
                <div class="article-card-footer">
                  <a href="#" class="read-article-link" @click="navigateToArticle">
                    Read the article
                    <svg class="arrow-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M4.5 3L8.5 6L4.5 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <!-- Booking Management Section -->
      <section class="booking-management-section white-bg">
        <Container>
          <div class="booking-content">
            <h2 class="booking-title">
              Manage your
              <br />
              <span class="highlight-text">bookings</span>
            </h2>
            
            <div class="booking-options">
              <div 
                class="booking-option client-option" 
                :class="{ active: selectedView === 'client' }"
                @click="switchView('client')"
              >
                <span class="option-label">Client</span>
              </div>
              <div 
                class="booking-option admin-option" 
                :class="{ active: selectedView === 'admin' }"
                @click="switchView('admin')"
              >
                <span class="option-label">Your side</span>
              </div>
            </div>
          </div>
          
          <!-- Client View -->
          <div v-if="selectedView === 'client'" class="client-banner">
            <!-- Model Profile Section -->
            <div class="client-model-profile">
              <div class="client-model-photo">
                <img src="/model-hero.png" alt="Model Photo" class="client-model-image" />
              </div>
              <h3 class="model-name">Anna M.</h3>
              <div class="model-measurements">
                <div class="measurement-item">
                  <span class="measurement-label">Height:</span>
                  <span class="measurement-value">180 / 5'11"</span>
                </div>
                <div class="measurement-item">
                  <span class="measurement-label">Breast:</span>
                  <span class="measurement-value">80 / 32"</span>
                </div>
                <div class="measurement-item">
                  <span class="measurement-label">Waist:</span>
                  <span class="measurement-value">60 / 24"</span>
                </div>
                <div class="measurement-item">
                  <span class="measurement-label">Hips:</span>
                  <span class="measurement-value">90 / 35"</span>
                </div>
              </div>
              <a href="#" class="profile-link">
                View Full Profile
                <svg class="external-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3.5 3.5L8.5 8.5M8.5 8.5H3.5M8.5 8.5V3.5" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>

            <!-- Booking Calendar Section -->
            <div class="booking-calendar">
              <Transition name="booking-stage" mode="out-in">
                <!-- Calendar Stage -->
                <div v-if="bookingStage === 'calendar'" key="calendar" class="booking-stage">
                  <h3 class="calendar-title">Book a model</h3>
                  
                  <div class="calendar-header">
                    <button class="nav-arrow" @click="navigateMonth('prev')">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M10 12L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                    <div class="month-year-container">
                      <Transition name="month-slide" mode="out-in">
                        <span :key="currentDate.getMonth() + currentDate.getFullYear()" class="month-year">{{ getMonthYear() }}</span>
                      </Transition>
                    </div>
                    <button class="nav-arrow" @click="navigateMonth('next')">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                  </div>

                  <div class="calendar-days">
                    <div class="day-header">SUN</div>
                    <div class="day-header">MON</div>
                    <div class="day-header">TUE</div>
                    <div class="day-header">WED</div>
                    <div class="day-header">THU</div>
                    <div class="day-header">FRI</div>
                    <div class="day-header">SAT</div>
                  </div>

                  <div class="calendar-grid-container">
                    <Transition name="calendar-slide" mode="out-in">
                      <div :key="currentDate.getMonth() + currentDate.getFullYear()" class="calendar-grid">
                        <div 
                          v-for="date in 30" 
                          :key="date"
                          class="calendar-date"
                          :class="{ 
                            selected: selectedDate === date,
                            unavailable: [3, 7, 11, 15, 19, 23, 27].includes(date)
                          }"
                          @click="selectDate(date)"
                        >
                          {{ date }}
                        </div>
                      </div>
                    </Transition>
                  </div>

                  <div class="booking-actions">
                    <button class="btn-cancel" @click="resetBooking">Cancel</button>
                    <button 
                      class="btn-book" 
                      @click="openBookingForm"
                      :disabled="!selectedDate"
                    >
                      Book Now
                    </button>
                  </div>
                </div>

                <!-- Booking Form Stage -->
                <div v-else-if="bookingStage === 'form'" key="form" class="booking-stage">
                  <h3 class="calendar-title">Booking Details</h3>
                  
                  <div class="selected-date-card">
                    <div class="selected-date-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#7f00fd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.695 13.7H15.704M15.695 16.7H15.704M11.995 13.7H12.005M11.995 16.7H12.005M8.294 13.7H8.304M8.294 16.7H8.304" stroke="#7f00fd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div class="selected-date-content">
                      <div class="selected-date-label">Selected Date</div>
                      <div class="selected-date-value">{{ getMonthYear() }} {{ selectedDate }}</div>
                    </div>
                  </div>
                  
                  <div class="booking-form">
                    <div class="form-group">
                      <label for="name">Full name</label>
                      <input 
                        type="text" 
                        id="name" 
                        v-model="bookingForm.name" 
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div class="form-group">
                      <label for="organisation">Organisation or freelance</label>
                      <input 
                        type="text" 
                        id="organisation" 
                        v-model="bookingForm.organisation" 
                        placeholder="Enter your organisation or freelance"
                        required
                      />
                    </div>
                    
                    <div class="form-group">
                      <label for="price">Price</label>
                      <div class="price-input-wrapper">
                        <span class="currency-symbol">$</span>
                        <input 
                          type="number" 
                          id="price" 
                          v-model="bookingForm.price" 
                          placeholder="0"
                          min="0"
                          step="0.01"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div class="booking-actions">
                    <button class="btn-cancel" @click="resetBooking">Back</button>
                    <button 
                      class="btn-book" 
                      @click="submitBooking"
                      :disabled="!bookingForm.name || !bookingForm.organisation || !bookingForm.price"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </div>

                <!-- Success Stage -->
                <div v-else-if="bookingStage === 'success'" key="success" class="booking-stage">
                  <div class="success-content">
                    <div class="success-icon">
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#22FCB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <h3 class="success-title">Booked Successfully!</h3>
                    <p class="success-message">
                      Your booking for {{ getMonthYear() }} {{ selectedDate }} has been confirmed.
                      We'll send you a confirmation email shortly.
                    </p>
                    <button class="btn-book" @click="resetBooking">
                      Book Another Date
                    </button>
                  </div>
                </div>
              </Transition>
            </div>
          </div>

          <!-- Admin/Your Side View -->
          <div v-if="selectedView === 'admin'" class="admin-banner">
            <!-- Admin Dashboard Section -->
            <div class="admin-dashboard">
              <h3 class="dashboard-title">Your Bookings Dashboard</h3>
              <div class="stats-grid">
                <div class="stat-card">
                  <div class="stat-number">12</div>
                  <div class="stat-label">Total Bookings</div>
                </div>
                <div class="stat-card">
                  <div class="stat-number">8</div>
                  <div class="stat-label">Confirmed</div>
                </div>
                <div class="stat-card">
                  <div class="stat-number">3</div>
                  <div class="stat-label">Pending</div>
                </div>
                <div class="stat-card">
                  <div class="stat-number">1</div>
                  <div class="stat-label">Cancelled</div>
                </div>
              </div>
            </div>

            <!-- Recent Bookings Section -->
            <div class="recent-bookings">
              <h3 class="bookings-title">Recent Bookings</h3>
              <div class="bookings-list">
                <div class="booking-item">
                  <div class="booking-info">
                    <div class="booking-date">April 25, 2025</div>
                    <div class="booking-client">Fashion Studio NYC</div>
                  </div>
                  <div class="booking-status confirmed">Confirmed</div>
                </div>
                <div class="booking-item">
                  <div class="booking-info">
                    <div class="booking-date">April 28, 2025</div>
                    <div class="booking-client">Commercial Photoshoot</div>
                  </div>
                  <div class="booking-status pending">Pending</div>
                </div>
                <div class="booking-item">
                  <div class="booking-info">
                    <div class="booking-date">May 2, 2025</div>
                    <div class="booking-client">Editorial Magazine</div>
                  </div>
                  <div class="booking-status confirmed">Confirmed</div>
                </div>
              </div>
              
              <div class="admin-actions">
                <button class="btn-view-all">View All Bookings</button>
                <button class="btn-manage-availability">Manage Availability</button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  </template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import Container from '../components/Container.vue'
import { performanceMonitor } from '@/utils/performance'

const router = useRouter()
const componentStartTime = performance.now()

// Booking view state
const selectedView = ref<'client' | 'admin'>('client')

// Calendar state
const currentDate = ref(new Date())
const selectedDate = ref<number | null>(25)
const bookingStage = ref<'calendar' | 'form' | 'success'>('calendar')

// Booking form state
const bookingForm = ref({
  name: '',
  organisation: '',
  price: ''
})

const navigateToContact = () => {
  router.push('/contact')
}

const navigateToArticle = () => {
  // Navigate to article or open modal
  window.open('https://example.com/article', '_blank')
}

const switchView = (view: 'client' | 'admin') => {
  selectedView.value = view
}

// Calendar functions
const navigateMonth = (direction: 'prev' | 'next') => {
  const newDate = new Date(currentDate.value)
  if (direction === 'prev') {
    newDate.setMonth(newDate.getMonth() - 1)
  } else {
    newDate.setMonth(newDate.getMonth() + 1)
  }
  currentDate.value = newDate
}

const selectDate = (date: number) => {
  selectedDate.value = date
}

const getMonthYear = () => {
  return currentDate.value.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

// Booking functions
const openBookingForm = () => {
  bookingStage.value = 'form'
}

const submitBooking = () => {
  // Simulate booking submission
  setTimeout(() => {
    bookingStage.value = 'success'
  }, 1000)
}

const resetBooking = () => {
  bookingStage.value = 'calendar'
  selectedDate.value = null
  bookingForm.value = { name: '', organisation: '', price: '' }
}

onMounted(() => {
  // Track component render time
  performanceMonitor.trackComponentRender('ModelsView', componentStartTime)
})
</script>

<style scoped>
.models-page {
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
}

.hero-section {
  background: var(--gradient-secondary);
  display: flex;
  align-items: center;
  position: relative;
  padding: 120px 0 80px;
  overflow: hidden;
}

.hero-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 80px;
  align-items: center;
}

.hero-text {
  max-width: 900px;
  z-index: 20;
}

.hero-status {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 30px;
  padding: 8px 16px;
  background: rgba(34, 252, 176, 0.1);
  border: 1px solid rgba(34, 252, 176, 0.2);
  border-radius: 20px;
  color: #22FCB0;
  font-size: 0.85rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.hero-status:hover {
  background: rgba(34, 252, 176, 0.15);
  border-color: rgba(34, 252, 176, 0.3);
  transform: translateY(-1px);
}

.status-indicator {
  width: 8px;
  height: 8px;
  background: #22FCB0;
  border-radius: 50%;
  flex-shrink: 0;
  animation: pulse 2s infinite;
  box-shadow: 0 0 8px rgba(34, 252, 176, 0.6);
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-title {
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1.1;
  color: var(--color-text-primary);
  margin-bottom: 20px;
  position: relative;
  animation: fadeInUp 1s ease-out 0.3s both;
  overflow: visible;
  padding: 10px 0;
}

.highlight {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
  font-style: italic;
  overflow: visible;
  padding: 5px 8px;
  margin: -5px -8px;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--gradient-primary);
  border-radius: 2px;
  opacity: 0.3;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: var(--color-text-muted);
  margin-bottom: 40px;
  font-weight: 400;
  opacity: 0.8;
  position: relative;
  animation: fadeInUp 1s ease-out 0.6s both;
  font-style: italic;
}

.hero-button {
  display: flex;
  gap: 20px;
  animation: fadeInUp 1s ease-out 0.9s both;
}

.btn {
  padding: 18px 36px;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.btn-primary {
  background: var(--gradient-primary);
  color: var(--color-text-primary);
  box-shadow: 0 4px 20px rgba(127, 0, 253, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(127, 0, 253, 0.4);
}

/* Right Side - Hero SVG */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-svg {
  width: 100%;
  max-width: 600px;
  height: auto;
  object-fit: contain;
  transform: scale(2.5) translateX(-50px);
  transition: transform 0.3s ease;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-content {
    gap: 60px;
  }

  .hero-title {
    font-size: 3rem;
  }

  .hero-svg {
    max-width: 500px;
    transform: scale(2.5) translateX(-50px);
  }
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
    justify-items: center;
  }

  .hero-text {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-status {
    font-size: 0.8rem;
    padding: 7px 14px;
  }

  .hero-button {
    justify-content: center;
    align-self: center;
  }

  .hero-visual {
    display: none;
  }

  .hero-section {
    padding: 100px 0 60px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    text-align: center;
    font-size: 1.85rem;
  }

  .hero-subtitle {
    text-align: center;
    font-size: 1rem;
  }

  .hero-status {
    text-align: center;
    font-size: 0.75rem;
    padding: 6px 12px;
  }

  .btn {
    padding: 14px 24px;
    font-size: 0.9rem;
  }

  .hero-button {
    flex-direction: column;
    align-items: center;
  }
}

/* Featured Article Section */
.featured-article-section {
  padding: 120px 0;
  background: linear-gradient(90deg, #FFFFFF 0%, #E6D1FF 100%);
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.featured-article-section.white-bg {
  background: var(--color-white);
}

.article-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

/* Left Side - Article Introduction */
.article-intro {
  padding-right: 40px;
}

.article-intro-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--color-black);
  margin-bottom: 24px;
  line-height: 1.1;
  overflow: visible;
  padding: 10px 0;
}

.article-intro-subtitle {
  font-size: 1.2rem;
  color: var(--color-dark-gray);
  margin-bottom: 40px;
  line-height: 1.6;
}

.btn-article {
  background: var(--gradient-primary);
  color: var(--color-text-primary);
  padding: 18px 36px;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 4px 20px rgba(127, 0, 253, 0.3);
}

.btn-article:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(127, 0, 253, 0.4);
}

/* Right Side - Featured Article Card */
.featured-article-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  max-width: 600px;
  margin: 0 auto;
  cursor: pointer;
  transition: all 0.3s ease;
}

.featured-article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.article-image {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.model-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.highlight-text {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  font-style: italic;
  overflow: visible;
  padding: 5px 8px;
  margin: -5px -8px;
}

.article-card-content {
  padding: 30px;
  background: linear-gradient(135deg, #E8F4FD 0%, #F0F8FF 100%);
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.article-tags {
  display: flex;
  gap: 8px;
}

.tag {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: rgba(128, 128, 128, 0.2);
  color: var(--color-dark-gray);
}

.article-date {
  font-size: 0.85rem;
  color: var(--color-dark-gray);
  font-weight: 600;
  opacity: 0.8;
  letter-spacing: 0.5px;
}

.article-card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-black);
  margin-bottom: 16px;
  line-height: 1.3;
}

.article-excerpt {
  font-size: 1rem;
  color: var(--color-dark-gray);
  line-height: 1.6;
  margin: 0 0 20px 0;
}

.article-card-footer {
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.read-article-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #7f00fd;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
}

.read-article-link:hover {
  color: #6b00d1;
  transform: translateX(2px);
}

.arrow-icon {
  transition: transform 0.3s ease;
}

.read-article-link:hover .arrow-icon {
  transform: translateX(2px);
}

/* Responsive Design for Article Section */
@media (max-width: 1024px) {
  .article-content {
    gap: 60px;
  }

  .article-intro-title {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .article-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .article-intro {
    padding-right: 0;
    text-align: center;
  }

  .article-intro-title {
    font-size: 2.5rem;
    text-align: center;
  }

  .article-intro-subtitle {
    text-align: center;
  }

  .featured-article-card {
    max-width: 100%;
    text-align: left;
  }

  .article-card-content {
    text-align: left;
  }
}

@media (max-width: 480px) {
  .featured-article-section {
    padding: 80px 0;
  }

  .article-intro {
    text-align: center;
  }

  .article-intro-title {
    font-size: 2rem;
    text-align: center;
  }

  .article-intro-subtitle {
    font-size: 1rem;
    text-align: center;
  }

  .featured-article-card {
    text-align: left;
  }

  .btn-article {
    padding: 14px 24px;
    font-size: 0.9rem;
  }

  .article-card-content {
    padding: 20px;
    text-align: left;
  }

  .article-card-title {
    font-size: 1.3rem;
  }

  .article-excerpt {
    font-size: 0.9rem;
  }

  .article-date {
    font-size: 0.75rem;
    text-align: right;
  }
}

/* Booking Management Section */
.booking-management-section {
  padding: 120px 0;
  background: #fafafa;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.booking-management-section.white-bg {
  background: var(--color-white);
}

.booking-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 80px auto;
}

.booking-title {
  font-size: 4rem;
  font-weight: 700;
  color: var(--color-black);
  margin-bottom: 60px;
  line-height: 1.1;
  font-family: 'Montserrat', sans-serif;
  overflow: visible;
  padding: 10px 0;
}

.booking-options {
  display: flex;
  justify-content: center;
  gap: 40px;
  align-items: center;
}

.booking-option {
  padding: 16px 32px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  background: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease;
}

.booking-option:hover {
  border-color: #d1d5db;
  background: #f9fafb;
}

.booking-option.active {
  background: #ffffff;
  border-color: #6b7280;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.booking-option.active .option-label {
  color: #374151;
  font-weight: 700;
}

.option-label {
  font-size: 1rem;
  font-weight: 500;
  color: #6b7280;
  letter-spacing: 0.025em;
}

/* Responsive Design for Booking Management */
@media (max-width: 768px) {
  .booking-management-section {
    padding: 80px 0;
  }

  .booking-content {
    margin-bottom: 60px;
  }

  .booking-title {
    font-size: 2.5rem;
    margin-bottom: 40px;
  }

  .booking-options {
    flex-direction: column;
    gap: 20px;
  }

  .booking-option {
    width: 100%;
    max-width: 300px;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .booking-content {
    margin-bottom: 40px;
  }

  .booking-title {
    font-size: 2rem;
  }

  .option-label {
    font-size: 0.9rem;
  }

  .booking-option {
    padding: 14px 24px;
  }
}

/* Client Banner - now part of booking management section */

.client-banner {
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 500px;
}

/* Client Model Profile Section */
.client-model-profile {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
}

.client-model-photo {
  width: 160px;
  height: 160px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 24px;
  background: linear-gradient(135deg, #22FCB0 0%, #00D4AA 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.client-model-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
}

.model-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 24px;
  font-family: 'Montserrat', sans-serif;
}

.model-measurements {
  width: 100%;
  margin-bottom: 32px;
}

.measurement-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid rgba(45, 55, 72, 0.1);
}

.measurement-item:last-child {
  border-bottom: none;
}

.measurement-label {
  font-size: 0.9rem;
  color: #718096;
  font-weight: 500;
}

.measurement-value {
  font-size: 0.9rem;
  color: #2d3748;
  font-weight: 600;
}

.profile-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #718096;
  text-decoration: underline;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.profile-link:hover {
  color: #4a5568;
}

.external-icon {
  opacity: 0.7;
  width: 12px;
  height: 12px;
}

/* Booking Calendar Section */
.booking-calendar {
  padding: 40px;
  display: flex;
  flex-direction: column;
}

.calendar-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 32px;
  font-family: 'Montserrat', sans-serif;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.nav-arrow {
  background: none;
  border: none;
  color: #718096;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.nav-arrow::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(127, 0, 253, 0.1);
  border-radius: 50%;
  transition: all 0.3s ease;
  transform: translate(-50%, -50%);
}

.nav-arrow:hover {
  background: #f7fafc;
  color: #7f00fd;
  transform: scale(1.1);
}

.nav-arrow:hover::before {
  width: 100%;
  height: 100%;
}

.nav-arrow:active {
  transform: scale(0.95);
}

.month-year-container {
  position: relative;
  overflow: hidden;
  min-width: 120px;
  text-align: center;
}

.month-year {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  display: inline-block;
}

/* Month slide animation */
.month-slide-enter-active,
.month-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.month-slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.month-slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.month-slide-enter-to,
.month-slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  margin-bottom: 16px;
}

.day-header {
  text-align: center;
  font-size: 0.8rem;
  font-weight: 600;
  color: #718096;
  padding: 8px 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.calendar-grid-container {
  position: relative;
  overflow: hidden;
  margin-bottom: 32px;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
}

/* Calendar slide animation */
.calendar-slide-enter-active,
.calendar-slide-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.calendar-slide-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

.calendar-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(1.05);
}

.calendar-slide-enter-to,
.calendar-slide-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.calendar-date {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 500;
  color: #2d3748;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  animation: dateFadeIn 0.6s ease-out;
}

@keyframes dateFadeIn {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.calendar-date:hover {
  background: #f7fafc;
  border-color: #cbd5e0;
}

.calendar-date.selected {
  background: #f3f4f6;
  color: #7f00fd;
  border: 2px solid #7f00fd;
  font-weight: 600;
  box-shadow: 0 0 0 1px rgba(127, 0, 253, 0.2);
}

.calendar-date.unavailable {
  background: #f9fafb;
  color: #9ca3af;
  border: 1px solid #e5e7eb;
  cursor: not-allowed;
  opacity: 0.6;
  text-decoration: line-through;
}

.calendar-date.unavailable:hover {
  background: #f9fafb;
  border-color: #e5e7eb;
}

.booking-actions {
  display: flex;
  gap: 12px;
  margin-top: auto;
}

.btn-cancel,
.btn-book {
  flex: 1;
  padding: 10px 16px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  font-family: 'Montserrat', sans-serif;
}

.btn-cancel {
  background: #ffffff;
  color: #2d3748;
  border: 1px solid #e2e8f0;
}

.btn-cancel:hover {
  background: #f7fafc;
  border-color: #cbd5e0;
}

.btn-book {
  background: #7f00fd;
  color: #ffffff;
}

.btn-book:hover {
  background: #6b00d1;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(127, 0, 253, 0.3);
}

.btn-book:disabled {
  background: #d1d5db;
  color: #9ca3af;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* Booking Stage Transitions */
.booking-stage-enter-active,
.booking-stage-leave-active {
  transition: all 0.3s ease;
}

.booking-stage-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.booking-stage-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* Selected Date Card Styles */
.selected-date-card {
  background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
  border: 1px solid #e0e7ff;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.selected-date-icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background: rgba(127, 0, 253, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.selected-date-content {
  flex: 1;
}

.selected-date-label {
  font-size: 0.8rem;
  color: #6b7280;
  font-weight: 500;
  margin-bottom: 2px;
}

.selected-date-value {
  font-size: 1rem;
  color: #7f00fd;
  font-weight: 600;
}

.booking-form {
  margin-bottom: 32px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
}

.form-group input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  background: #ffffff;
  font-family: 'Montserrat', sans-serif;
}

.form-group input:focus {
  outline: none;
  border-color: #7f00fd;
  box-shadow: 0 0 0 3px rgba(127, 0, 253, 0.1);
  transform: translateY(-1px);
}

.form-group input::placeholder {
  color: #9ca3af;
  font-weight: 400;
}

/* Price Input Wrapper */
.price-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.currency-symbol {
  position: absolute;
  left: 16px;
  color: #6b7280;
  font-weight: 600;
  font-size: 0.9rem;
  z-index: 1;
  pointer-events: none;
}

.price-input-wrapper input {
  padding-left: 32px;
  font-weight: 600;
  color: #374151;
}

.price-input-wrapper input::placeholder {
  color: #d1d5db;
  font-weight: 400;
}

/* Success Screen Styles */
.success-content {
  text-align: center;
  padding: 20px 0;
}

.success-icon {
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
}

.success-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #374151;
  margin-bottom: 16px;
  font-family: 'Montserrat', sans-serif;
}

.success-message {
  font-size: 1rem;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 32px;
}

/* Responsive Design for Client Banner */
@media (max-width: 768px) {
  .client-banner {
    grid-template-columns: 1fr;
    max-width: 100%;
    margin: 0 16px;
    min-height: auto;
  }

  .client-model-profile,
  .booking-calendar {
    padding: 20px;
  }

  .client-model-photo {
    width: 100px;
    height: 100px;
  }

  .model-name {
    font-size: 1rem;
  }

  .calendar-title {
    font-size: 1.1rem;
  }

  .calendar-grid {
    gap: 1px;
  }

  .calendar-date {
    font-size: 0.7rem;
    border-radius: 3px;
  }

  .booking-actions {
    flex-direction: column;
    gap: 8px;
  }

  .btn-cancel,
  .btn-book {
    padding: 14px 20px;
    font-size: 0.9rem;
    min-height: 48px;
  }
}

@media (max-width: 480px) {
  .client-banner {
    margin: 0 12px;
  }

  .client-model-profile,
  .booking-calendar {
    padding: 16px;
  }

  .client-model-photo {
    width: 80px;
    height: 80px;
  }

  .model-name {
    font-size: 0.9rem;
  }

  .measurement-label,
  .measurement-value {
    font-size: 0.7rem;
  }

  .calendar-title {
    font-size: 1rem;
  }

  .calendar-date {
    font-size: 0.65rem;
    padding: 4px;
  }

  .day-header {
    font-size: 0.6rem;
  }

  .btn-cancel,
  .btn-book {
    padding: 16px 24px;
    font-size: 0.95rem;
    min-height: 52px;
  }
}

/* Admin Banner Styles */
.admin-banner {
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 600px;
}

/* Admin Dashboard Section */
.admin-dashboard {
  padding: 40px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
}

.dashboard-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 32px;
  font-family: 'Montserrat', sans-serif;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.stat-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(127, 0, 253, 0.1);
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #7f00fd;
  margin-bottom: 8px;
  font-family: 'Montserrat', sans-serif;
}

.stat-label {
  font-size: 0.9rem;
  color: #718096;
  font-weight: 500;
}

/* Recent Bookings Section */
.recent-bookings {
  padding: 40px;
  display: flex;
  flex-direction: column;
}

.bookings-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 24px;
  font-family: 'Montserrat', sans-serif;
}

.bookings-list {
  flex: 1;
  margin-bottom: 32px;
}

.booking-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #e2e8f0;
}

.booking-item:last-child {
  border-bottom: none;
}

.booking-info {
  flex: 1;
}

.booking-date {
  font-size: 0.9rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 4px;
}

.booking-client {
  font-size: 0.85rem;
  color: #718096;
}

.booking-status {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.booking-status.confirmed {
  background: rgba(34, 252, 176, 0.1);
  color: #22FCB0;
}

.booking-status.pending {
  background: rgba(255, 193, 7, 0.1);
  color: #FFC107;
}

.admin-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.btn-view-all,
.btn-manage-availability {
  padding: 14px 24px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  font-family: 'Montserrat', sans-serif;
}

.btn-view-all {
  background: #7f00fd;
  color: #ffffff;
}

.btn-view-all:hover {
  background: #6b00d1;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(127, 0, 253, 0.3);
}

.btn-manage-availability {
  background: #ffffff;
  color: #2d3748;
  border: 1px solid #e2e8f0;
}

.btn-manage-availability:hover {
  background: #f7fafc;
  border-color: #cbd5e0;
}

/* Responsive Design for Admin Banner */
@media (max-width: 768px) {
  .admin-banner {
    grid-template-columns: 1fr;
    max-width: 100%;
    margin: 0 20px;
  }

  .admin-dashboard,
  .recent-bookings {
    padding: 30px 24px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .stat-card {
    padding: 20px;
  }

  .stat-number {
    font-size: 1.5rem;
  }

  .booking-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .booking-status {
    align-self: flex-end;
  }

  .btn-view-all,
  .btn-manage-availability {
    padding: 14px 20px;
    font-size: 0.9rem;
    min-height: 48px;
  }
}

@media (max-width: 480px) {
  .admin-banner {
    margin: 0 16px;
  }

  .admin-dashboard,
  .recent-bookings {
    padding: 24px 20px;
  }

  .dashboard-title,
  .bookings-title {
    font-size: 1.3rem;
  }

  .stat-card {
    padding: 16px;
  }

  .stat-number {
    font-size: 1.3rem;
  }

  .booking-date {
    font-size: 0.85rem;
  }

  .booking-client {
    font-size: 0.8rem;
  }

  .btn-view-all,
  .btn-manage-availability {
    padding: 16px 24px;
    font-size: 0.95rem;
    min-height: 52px;
  }
}
</style>
