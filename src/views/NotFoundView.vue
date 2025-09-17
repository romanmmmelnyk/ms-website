<template>
  <div class="not-found-page">
    <!-- Animated Background -->
    <div class="animated-bg">
      <div class="bg-gradient"></div>
      <div class="floating-particles">
        <div class="particle particle-1"></div>
        <div class="particle particle-2"></div>
        <div class="particle particle-3"></div>
        <div class="particle particle-4"></div>
        <div class="particle particle-5"></div>
        <div class="particle particle-6"></div>
        <div class="particle particle-7"></div>
        <div class="particle particle-8"></div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="content-container">
      <!-- 404 Number Animation -->
      <div class="error-number">
        <div class="number-container">
          <span class="number-4">4</span>
          <div class="floating-zero">
            <div class="zero-ring"></div>
            <div class="zero-inner">
              <div class="zero-icon">
                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.571M15 6.343A7.962 7.962 0 0112 4c-2.34 0-4.29 1.009-5.824 2.571"></path>
                </svg>
              </div>
            </div>
          </div>
          <span class="number-4">4</span>
        </div>
      </div>

      <!-- Content -->
      <div class="text-content">
        <div class="subtitle-line">
          <div class="vertical-line"></div>
          <span>Oops! Something went wrong</span>
        </div>
        
        <h1 class="main-title">
          Page Not Found
        </h1>
        
        <p class="description">
          The page you're looking for seems to have vanished into the digital void. 
          Don't worry, even the best developers lose things sometimes!
        </p>


        <!-- Action Buttons -->
        <div class="action-buttons">
          <button 
            @click="goHome"
            class="btn btn-primary"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            Go Home
          </button>
          <button 
            @click="goBack"
            class="btn btn-outline"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Go Back
          </button>
        </div>

        <!-- Additional Info -->
        <div class="additional-info">
          <p class="info-text">Lost in cyberspace? We're here to help!</p>
          <p class="info-text">Try one of the buttons above or check our navigation menu.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}

const goBack = () => {
  // Go back to previous page or home if no history
  if (window.history.length > 1) {
    router.go(-1)
  } else {
    router.push('/')
  }
}
</script>

<style scoped>
.not-found-page {
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
  opacity: 0.9;
}

.floating-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.particle {
  position: absolute;
  border-radius: 50%;
  background: var(--gradient-primary);
  opacity: 0.1;
  animation: floatParticle 8s ease-in-out infinite;
}

.particle-1 {
  width: 60px;
  height: 60px;
  top: 10%;
  left: 5%;
  animation-delay: 0s;
}

.particle-2 {
  width: 40px;
  height: 40px;
  top: 20%;
  right: 10%;
  animation-delay: 1s;
}

.particle-3 {
  width: 80px;
  height: 80px;
  top: 40%;
  left: 15%;
  animation-delay: 2s;
}

.particle-4 {
  width: 30px;
  height: 30px;
  top: 60%;
  right: 20%;
  animation-delay: 3s;
}

.particle-5 {
  width: 50px;
  height: 50px;
  top: 80%;
  left: 25%;
  animation-delay: 4s;
}

.particle-6 {
  width: 70px;
  height: 70px;
  top: 30%;
  right: 35%;
  animation-delay: 5s;
}

.particle-7 {
  width: 35px;
  height: 35px;
  top: 70%;
  left: 60%;
  animation-delay: 6s;
}

.particle-8 {
  width: 45px;
  height: 45px;
  top: 15%;
  left: 70%;
  animation-delay: 7s;
}

@keyframes floatParticle {
  0%, 100% {
    transform: translateY(0px) rotate(0deg) scale(1);
  }
  25% {
    transform: translateY(-30px) rotate(90deg) scale(1.1);
  }
  50% {
    transform: translateY(-60px) rotate(180deg) scale(0.9);
  }
  75% {
    transform: translateY(-30px) rotate(270deg) scale(1.1);
  }
}

/* Main Content */
.content-container {
  position: relative;
  z-index: 2;
  max-width: 700px;
  width: 100%;
  text-align: center;
}

/* Error Number */
.error-number {
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
}

.number-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
}

.number-4 {
  font-size: 8rem;
  font-weight: 900;
  color: var(--color-text-primary);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: numberGlow 3s ease-in-out infinite;
  text-shadow: 0 0 30px rgba(127, 0, 253, 0.5);
}

.floating-zero {
  position: relative;
  width: 120px;
  height: 120px;
}

.zero-ring {
  position: absolute;
  inset: 0;
  border: 4px solid transparent;
  border-top: 4px solid var(--color-primary-purple);
  border-right: 4px solid var(--color-secondary-teal);
  border-radius: 50%;
  animation: rotate 4s linear infinite;
}

.zero-inner {
  position: absolute;
  inset: 20px;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pulse 2s ease-in-out infinite;
}

.zero-icon {
  color: white;
  animation: bounce 1.5s ease-in-out infinite;
}

@keyframes numberGlow {
  0%, 100% {
    filter: drop-shadow(0 0 20px rgba(127, 0, 253, 0.4));
  }
  50% {
    filter: drop-shadow(0 0 40px rgba(127, 0, 253, 0.8));
  }
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
    box-shadow: 0 0 0 25px rgba(127, 0, 253, 0);
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
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
  font-size: 3rem;
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
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
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
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  text-decoration: none;
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
  .not-found-page {
    padding-top: 4rem;
    align-items: flex-start;
    padding-top: 6rem;
  }
  
  .content-container {
    margin-top: 2rem;
  }
  
  .main-title {
    font-size: 2.5rem;
  }
  
  .number-4 {
    font-size: 6rem;
  }
  
  .floating-zero {
    width: 100px;
    height: 100px;
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
}

@media (max-width: 480px) {
  .not-found-page {
    padding-top: 5rem;
  }
  
  .content-container {
    margin-top: 1rem;
  }
  
  .main-title {
    font-size: 2rem;
  }
  
  .number-4 {
    font-size: 4rem;
  }
  
  .floating-zero {
    width: 80px;
    height: 80px;
  }
  
  .content-container {
    padding: 0 1rem;
  }
  
  .number-container {
    gap: 0.5rem;
  }
}
</style>
