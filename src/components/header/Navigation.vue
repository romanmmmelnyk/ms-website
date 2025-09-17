<template>
  <Transition name="navigation">
    <div v-if="isOpen" class="navigation-overlay" @click="$emit('close')">
      <div class="navigation-container">
        <div class="navigation-menu">
          <nav class="nav-list">
            <ul>
              <li><a @click="navigateTo('/about')">ABOUT US</a></li>
              <li><a @click="navigateTo('/portfolio')">PORTFOLIO</a></li>
              <li><a @click="navigateTo('/careers')">CAREERS</a></li>
              <li><a @click="navigateTo('/cost-calculator')">COST CALCULATOR</a></li>
              <li><a @click="navigateTo('/apply')">APPLY</a></li>
              <li><a @click="navigateTo('/contact')">CONTACT US</a></li>
            </ul>
          </nav>
        </div>
        <div class="content-right">
          <div class="phone-section" @click="makePhoneCall">
            <div class="phone-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="url(#phoneGradient)"/>
                <defs>
                  <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:var(--color-secondary-teal)"/>
                    <stop offset="100%" style="stop-color:var(--color-secondary-blue)"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span class="phone-number">+44 7787 292197</span>
          </div>
          
          <div class="company-stats">
            <div class="stat-item">
              <span class="stat-number gradient-text">3+</span>
              <span class="stat-text">YEARS OF EXPERIENCE</span>
            </div>
            <div class="stat-item">
              <span class="stat-text">TEAM OF</span>
              <span class="stat-number gradient-text-primary">20</span>
              <span class="stat-text">EXPERTS</span>
            </div>
            <div class="stat-item">
              <span class="stat-text">AND JUST</span>
              <span class="stat-number gradient-text">7</span>
              <span class="stat-text">HAPPY CLIENTS</span>
            </div>
          </div>
          
          <div class="social-media">
            <div class="social-item">
              <div class="social-icon linkedin">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" fill="white"/>
                  <rect x="2" y="9" width="4" height="12" fill="white"/>
                  <circle cx="4" cy="4" r="2" fill="white"/>
                </svg>
              </div>
              <span class="social-text">LinkedIn</span>
            </div>
            <div class="social-item">
              <div class="social-icon instagram">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="socialGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style="stop-color:var(--color-secondary-teal)"/>
                      <stop offset="100%" style="stop-color:var(--color-secondary-blue)"/>
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="white"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="url(#socialGradient)"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="url(#socialGradient)" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </div>
              <span class="social-text">Instagram</span>
            </div>
            <div class="social-item">
              <div class="social-icon facebook">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="white"/>
                </svg>
              </div>
              <span class="social-text">Facebook</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

interface Props {
  isOpen: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  close: []
}>()

const router = useRouter()

const navigateTo = (path: string) => {
  router.push(path)
  emit('close')
}

const makePhoneCall = () => {
  window.location.href = 'tel:+447787292197'
}
</script>

<style scoped>
.navigation-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  overflow: hidden;
}

.navigation-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
}

.navigation-menu {
  width: 40%;
  height: 100%;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  padding: 0 60px;
  z-index: 1;
  transform: translateX(-100%);
  animation: slideIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes slideIn {
  to {
    transform: translateX(0);
  }
}

.nav-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-list li {
  margin-bottom: 30px;
  opacity: 0;
  transform: translateX(-20px);
  animation: fadeInSlide 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.nav-list li:nth-child(1) { animation-delay: 0.1s; }
.nav-list li:nth-child(2) { animation-delay: 0.2s; }
.nav-list li:nth-child(3) { animation-delay: 0.3s; }
.nav-list li:nth-child(4) { animation-delay: 0.4s; }
.nav-list li:nth-child(5) { animation-delay: 0.5s; }
.nav-list li:nth-child(6) { animation-delay: 0.6s; }

@keyframes fadeInSlide {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.nav-list a {
  color: var(--color-text-primary);
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.nav-list a::before {
  content: '•';
  color: var(--color-text-primary);
  margin-right: 15px;
  font-size: 1.2rem;
}

.nav-list a:hover {
  transform: translateX(10px);
  opacity: 0.8;
}

.content-right {
  width: 60%;
  height: 100%;
  background: var(--gradient-secondary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 60px;
  color: var(--color-text-primary);
  font-family: 'Montserrat', sans-serif;
  position: relative;
}

.phone-section {
  position: absolute;
  top: 50px;
  left: 60px;
  display: flex;
  align-items: center;
  gap: 15px;
  transform: translateX(-50px);
  opacity: 0;
  animation: slideInFromLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
}

@keyframes slideInFromLeft {
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInFromRight {
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.phone-section {
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.phone-section:hover {
  transform: translateX(5px);
}

.phone-icon {
  width: 24px;
  height: 24px;
}

.phone-icon svg {
  width: 100%;
  height: 100%;
}

.phone-number {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--color-text-primary);
}

.company-stats {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  text-align: center;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.02em;
}

.stat-number {
  font-size: 2.8rem;
  font-weight: 800;
}

.gradient-text {
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: none;
}

.gradient-text-primary {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: none;
}

.social-media {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 40px;
}

.social-item {
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.social-item:hover {
  transform: translateX(10px);
}

.social-icon {
  width: 45px;
  height: 45px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-accent);
  overflow: hidden;
}

.social-icon svg {
  width: 24px;
  height: 24px;
}

.social-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Navigation overlay animation */
.navigation-enter-active,
.navigation-leave-active {
  transition: opacity 0.4s ease;
}

.navigation-enter-from,
.navigation-leave-to {
  opacity: 0;
}

.navigation-enter-to,
.navigation-leave-from {
  opacity: 1;
}

@media (max-width: 768px) {
  .navigation-menu {
    width: 50%;
    padding: 0 40px;
  }
  
  .content-right {
    width: 50%;
    padding: 40px;
  }
  
  .nav-list a {
    font-size: 1.2rem;
  }
  
  .nav-list li {
    margin-bottom: 25px;
  }
  
  .phone-section {
    top: 30px;
    left: 40px;
  }
  
  .stat-item {
    font-size: 1.8rem;
  }
  
  .stat-number {
    font-size: 2.2rem;
  }
  
  .social-icon {
    width: 40px;
    height: 40px;
  }
  
  .social-icon svg {
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 480px) {
  .navigation-menu {
    width: 60%;
    padding: 0 30px;
  }
  
  .content-right {
    width: 40%;
    padding: 30px;
  }
  
  .nav-list a {
    font-size: 1rem;
  }
  
  .nav-list li {
    margin-bottom: 20px;
  }
  
  .phone-section {
    top: 20px;
    left: 30px;
  }
  
  .stat-item {
    font-size: 1.4rem;
  }
  
  .stat-number {
    font-size: 1.8rem;
  }
  
  .phone-number {
    font-size: 1rem;
  }
  
  .social-icon {
    width: 35px;
    height: 35px;
  }
  
  .social-icon svg {
    width: 18px;
    height: 18px;
  }
  
  .social-text {
    font-size: 1rem;
  }
}

@media (max-width: 640px) {
  .content-right {
    display: none;
  }
  
  .navigation-menu {
    width: 100%;
    padding: 0 40px;
  }
}
</style>
