<template>
  <div class="in-development-page">
    <!-- Animated Background -->
    <div class="animated-bg">
      <div class="bg-gradient"></div>
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
        <div class="shape shape-5"></div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="content-container">
      <!-- Animated Icon -->
      <div class="icon-container">
        <div class="icon-wrapper">
          <!-- Outer rotating ring -->
          <div class="outer-ring"></div>
          <!-- Middle pulsing ring -->
          <div class="middle-ring"></div>
          <!-- Inner core -->
          <div class="inner-core">
            <div class="core-icon">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="text-content">
        <div class="subtitle-line">
          <div class="vertical-line"></div>
          <span>Something amazing is brewing</span>
        </div>
        
        <h1 class="main-title">
          In Development
        </h1>
        

        <!-- Progress Animation -->
        <div class="progress-section">
          <div class="progress-bar">
            <div class="progress-fill"></div>
          </div>
          <div class="progress-dots">
            <div class="dot dot-1"></div>
            <div class="dot dot-2"></div>
            <div class="dot dot-3"></div>
            <div class="dot dot-4"></div>
            <div class="dot dot-5"></div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="action-buttons">
          <button 
            @click="goBack"
            class="btn btn-outline"
          >
            <svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Go Back
          </button>
          <button 
            @click="navigateToContact"
            class="btn btn-primary"
          >
            <svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            Get in Touch
          </button>
        </div>

        <!-- Additional Info -->
        <div class="additional-info">
          <p class="info-text">This page is currently under construction.</p>
          <p class="info-text">Check back soon for updates!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  // Go back to previous page or home if no history
  if (window.history.length > 1) {
    router.go(-1)
  } else {
    router.push('/')
  }
}

const navigateToContact = () => {
  router.push('/contact')
}
</script>

<style scoped>
.in-development-page {
  min-height: 100vh;
  position: relative;
  background: var(--gradient-secondary);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
}

/* Animated Background */
.animated-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.bg-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--gradient-secondary);
  opacity: 0.8;
}

.floating-shapes {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: var(--gradient-primary);
  opacity: 0.1;
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 80px;
  height: 80px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 120px;
  height: 120px;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.shape-3 {
  width: 60px;
  height: 60px;
  top: 80%;
  left: 20%;
  animation-delay: 4s;
}

.shape-4 {
  width: 100px;
  height: 100px;
  top: 30%;
  right: 30%;
  animation-delay: 1s;
}

.shape-5 {
  width: 140px;
  height: 140px;
  top: 70%;
  left: 60%;
  animation-delay: 3s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

/* Main Content */
.content-container {
  position: relative;
  z-index: 2;
  max-width: 600px;
  width: 100%;
  text-align: center;
}

/* Icon Container */
.icon-container {
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
}

.icon-wrapper {
  position: relative;
  width: 120px;
  height: 120px;
}

.outer-ring {
  position: absolute;
  inset: 0;
  border: 3px solid transparent;
  border-top: 3px solid var(--color-primary-purple);
  border-right: 3px solid var(--color-secondary-teal);
  border-radius: 50%;
  animation: rotate 3s linear infinite;
}

.middle-ring {
  position: absolute;
  inset: 15px;
  border: 2px solid transparent;
  border-bottom: 2px solid var(--color-secondary-blue);
  border-left: 2px solid var(--color-accent-teal);
  border-radius: 50%;
  animation: rotate 2s linear infinite reverse;
}

.inner-core {
  position: absolute;
  inset: 30px;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pulse 2s ease-in-out infinite;
}

.core-icon {
  color: white;
  animation: bounce 1.5s ease-in-out infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(127, 0, 253, 0.4);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 20px rgba(127, 0, 253, 0);
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

/* Text Content */
.text-content {
  animation: fadeInUp 1s ease-out;
}

.subtitle-line {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  gap: 1rem;
}

.vertical-line {
  width: 2px;
  height: 40px;
  background: var(--gradient-accent);
  border-radius: 1px;
}

.subtitle-line span {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.main-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 1.5rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: titleGlow 3s ease-in-out infinite;
}

@keyframes titleGlow {
  0%, 100% {
    filter: drop-shadow(0 0 10px rgba(127, 0, 253, 0.3));
  }
  50% {
    filter: drop-shadow(0 0 20px rgba(127, 0, 253, 0.6));
  }
}

.description {
  font-size: 1.1rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

/* Progress Section */
.progress-section {
  margin-bottom: 2.5rem;
}

.progress-bar {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.progress-fill {
  height: 100%;
  background: var(--gradient-accent);
  border-radius: 2px;
  animation: progressFill 3s ease-in-out infinite;
}

@keyframes progressFill {
  0% {
    width: 0%;
  }
  50% {
    width: 70%;
  }
  100% {
    width: 100%;
  }
}

.progress-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-primary-purple);
  animation: dotPulse 1.5s ease-in-out infinite;
}

.dot-1 { animation-delay: 0s; }
.dot-2 { animation-delay: 0.2s; }
.dot-3 { animation-delay: 0.4s; }
.dot-4 { animation-delay: 0.6s; }
.dot-5 { animation-delay: 0.8s; }

@keyframes dotPulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
}

/* Action Buttons */
.action-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
}

.btn-icon {
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
}

.btn-outline {
  background: transparent;
  color: var(--color-text-primary);
  border: 2px solid var(--color-primary-purple);
}

.btn-outline:hover {
  background: var(--color-primary-purple);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(127, 0, 253, 0.3);
}

.btn-primary {
  background: var(--gradient-primary);
  color: white;
  border: 2px solid transparent;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(127, 0, 253, 0.4);
}

/* Additional Info */
.additional-info {
  animation: fadeInUp 1s ease-out 0.5s both;
}

.info-text {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  margin-bottom: 0.5rem;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .main-title {
    font-size: 2.5rem;
  }
  
  .description {
    font-size: 1rem;
  }
  
  .action-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 250px;
    justify-content: center;
  }
  
  .icon-wrapper {
    width: 100px;
    height: 100px;
  }
  
  .inner-core {
    inset: 25px;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 2rem;
  }
  
  .content-container {
    padding: 0 1rem;
  }
}
</style>
