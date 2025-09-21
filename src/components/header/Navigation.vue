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
            <a class="phone-number" :href="getPhoneLink()">{{ phone }}</a>
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
              <span class="stat-text">AND</span>
              <span class="stat-number gradient-text">7</span>
              <span class="stat-text">HAPPY CLIENTS</span>
            </div>
          </div>

          <div class="social-media">
            <div class="social-item">
              <div class="social-icon linkedin">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <a :href="socialLinks.linkedin" target="_blank" rel="noopener noreferrer" class="social-text">LinkedIn</a>
            </div>
            <div class="social-item">
              <div class="social-icon instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <a :href="socialLinks.instagram" target="_blank" rel="noopener noreferrer" class="social-text">Instagram</a>
            </div>
            <div class="social-item">
              <div class="social-icon facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <a :href="socialLinks.facebook" target="_blank" rel="noopener noreferrer" class="social-text">Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useSiteConfig } from '@/composables/useSiteConfig'

interface Props {
  isOpen: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  close: []
}>()

const router = useRouter()
const { phone, getPhoneLink, socialLinks } = useSiteConfig()

const navigateTo = (path: string) => {
  router.push(path)
  emit('close')
}

const makePhoneCall = () => {
  window.location.href = getPhoneLink()
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
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--color-text-primary);
  text-decoration: none;
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
.social-item a {
  text-decoration: none;
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
