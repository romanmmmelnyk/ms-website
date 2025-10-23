<template>
  <div class="services-view">
    <!-- Top Section with Title -->
    <section class="services-header">
      <div class="header-content">
        <nav class="breadcrumbs">
          <a href="/" class="breadcrumb-link">Home</a>
          <span class="breadcrumb-separator">/</span>
          <span class="breadcrumb-current">Services</span>
        </nav>
        <h1 class="services-title">Services</h1>
      </div>
    </section>
    
    <!-- Main Content Section -->
    <section class="services-content">
      <div class="services-grid-container">
        <!-- First Row -->
        <div class="services-grid services-grid-row-1">
          <!-- CRM Development -->
          <div class="service-card gradient-purple">
            <div class="card-content">
              <h3 class="card-title">CRM development</h3>
              <p class="card-description">CRM system is an indispensable assistant for customer-oriented business.</p>
              <a href="#" class="card-link">See more →</a>
            </div>
          </div>

          <!-- Web Applications -->
          <div class="service-card gradient-blue-green">
            <div class="card-content">
              <h3 class="card-title">Web applications</h3>
              <p class="card-description">Web applications. An interactive solution for business on the Internet.</p>
              <a href="#" class="card-link">See more →</a>
            </div>
          </div>

          <!-- Mobile Applications -->
          <div class="service-card gradient-blue-purple">
            <div class="card-content">
              <h3 class="card-title">Mobile applications</h3>
              <p class="card-description">Mobile application for business. Much more than an icon on your phone.</p>
              <a href="#" class="card-link">See more →</a>
            </div>
            <div class="card-image-container">
              <img src="/services/vecteezy_mobile-app-ui-design-icons-graphics-and-user-interface_56409761.png" alt="Mobile App UI Design" class="card-image" />
            </div>
          </div>
        </div>

        <!-- Second Row -->
        <div class="services-grid services-grid-row-2">
          <!-- Website Development -->
          <div class="service-card gradient-purple">
            <div class="card-content">
              <h3 class="card-title">Website development</h3>
              <p class="card-description">A professional website is a stable effect of market presence.</p>
              <a href="#" class="card-link">See more →</a>
            </div>
            <div class="card-image-container">
              <img src="/services/vecteezy_streamlined-task-management-system-ui-design_56410213.png" alt="Task Management System UI Design" class="card-image" />
            </div>
          </div>

          <!-- ERP Development -->
          <div class="service-card gradient-blue-green">
            <div class="card-content">
              <h3 class="card-title">ERP development</h3>
              <p class="card-description">ERP system - a comprehensive smart solution for precise business management.</p>
              <a href="#" class="card-link">See more →</a>
            </div>
          </div>

          <!-- Marketplaces -->
          <div class="service-card gradient-purple">
            <div class="card-content">
              <h3 class="card-title">Marketplaces</h3>
              <p class="card-description">Development of marketplaces. E-commerce is developing rapidly in the market.</p>
              <a href="#" class="card-link">See more →</a>
            </div>
            <div class="card-visual">
              <!-- E-commerce illustration placeholder -->
            </div>
          </div>
        </div>

        <!-- Third Row -->
        <div class="services-grid services-grid-row-3">
          <!-- PWA Applications -->
          <div class="service-card gradient-purple">
            <div class="card-content">
              <h3 class="card-title">PWA applications</h3>
              <p class="card-description">Progressive Web Apps are the best of websites and mobile apps. A PWA combines the best of both worlds.</p>
              <a href="#" class="card-link">See more →</a>
            </div>
          </div>

          <!-- Admin Panels -->
          <div class="service-card gradient-blue-green">
            <div class="card-content">
              <h3 class="card-title">Admin panels</h3>
              <p class="card-description">How to create a functional admin panel. The admin panel is a tool that helps manage your business efficiently.</p>
              <a href="#" class="card-link">See more →</a>
            </div>
          </div>

          <!-- Web Interfaces -->
          <div class="service-card gradient-blue-purple">
            <div class="card-content">
              <h3 class="card-title">Web interfaces</h3>
              <p class="card-description">Development of web interfaces. The web interface is the most important part of user interaction.</p>
              <a href="#" class="card-link">See more →</a>
            </div>
            <div class="card-image-container">
              <img src="/services/vecteezy_checklist-app-manage-tasks-boost-productivity_56411901.png" alt="Checklist App Productivity UI Design" class="card-image" />
            </div>
          </div>
        </div>

        <!-- Fourth Row -->
        <div class="services-grid services-grid-row-4">
          <!-- SPA Applications -->
          <div class="service-card gradient-blue-green">
            <div class="card-content">
              <h3 class="card-title">SPA applications</h3>
              <p class="card-description">Single-Page Application is a seamless and highly converting solution for your business needs.</p>
              <a href="#" class="card-link">See more →</a>
            </div>
            <div class="card-visual">
              <!-- 3D smartphone illustration placeholder -->
            </div>
          </div>

          <!-- Chatbots Development -->
          <div class="service-card gradient-purple">
            <div class="card-content">
              <h3 class="card-title">Chatbots development</h3>
              <p class="card-description">Intelligent chatbots that automate customer service and enhance user engagement with AI-powered conversations.</p>
              <a href="#" class="card-link">See more →</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Services page logic will go here
</script>

<style scoped>
.services-view {
  min-height: 100vh;
}

.services-header {
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(76, 0, 151, 0.9) 0%, rgba(51, 0, 102, 0.95) 100%);
  position: relative;
  overflow: hidden;
  padding-top: 2rem;
}

.services-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/hero.svg') no-repeat center center;
  background-size: cover;
  opacity: 0.05;
  z-index: 1;
}

.header-content {
  position: relative;
  z-index: 2;
}

.breadcrumbs {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  gap: 0.5rem;
}

.breadcrumb-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.breadcrumb-link:hover {
  color: var(--color-white);
}

.breadcrumb-separator {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

.breadcrumb-current {
  color: var(--color-white);
  font-size: 0.9rem;
  font-weight: 600;
}

.services-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-white);
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.services-content {
  background: var(--color-black);
  min-height: calc(100vh - 300px);
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.services-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/hero.svg') no-repeat center center;
  background-size: 30%;
  opacity: 0.05;
  z-index: 1;
}

.services-content > * {
  position: relative;
  z-index: 2;
}

.services-grid-container {
  max-width: 1200px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

/* First row: 1/4, 1/4, 2/4 */
.services-grid-row-1 {
  grid-template-columns: 1fr 1fr 2fr;
}

/* Second row: 2/4, 1/4, 1/4 (opposite order) */
.services-grid-row-2 {
  grid-template-columns: 2fr 1fr 1fr;
}

/* Third row: 1/4, 1/4, 2/4 */
.services-grid-row-3 {
  grid-template-columns: 1fr 1fr 2fr;
}

/* Fourth row: 1/2, 1/2 */
.services-grid-row-4 {
  grid-template-columns: 1fr 1fr;
}

.service-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  border-radius: 4px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Special layout for Mobile Applications card */
.service-card:has(.card-image-container) {
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}

.service-card:has(.card-image-container) .card-content {
  flex: 1;
}

.card-image-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.gradient-purple {
  background: linear-gradient(135deg, rgba(127, 0, 253, 0.2) 0%, rgba(76, 0, 151, 0.1) 100%);
}

.gradient-blue-green {
  background: linear-gradient(135deg, rgba(34, 252, 176, 0.2) 0%, rgba(33, 129, 250, 0.1) 100%);
}

.gradient-blue-purple {
  background: linear-gradient(135deg, rgba(33, 129, 250, 0.2) 0%, rgba(127, 0, 253, 0.1) 100%);
}

.card-content {
  flex: 1;
}

.card-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-white);
  margin-bottom: 1rem;
  line-height: 1.3;
}

.card-description {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  flex: 1;
}

.card-link {
  color: var(--color-secondary-blue);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.card-link:hover {
  color: var(--color-secondary-teal);
}

.card-visual {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.3;
  pointer-events: none;
}

.card-image {
  width: 100%;
  height: auto;
  max-width: 180px;
  object-fit: contain;
  filter: brightness(1.2) contrast(1.1);
}

/* Responsive design */
@media (max-width: 1024px) {
  .services-grid-row-1,
  .services-grid-row-2,
  .services-grid-row-3,
  .services-grid-row-4 {
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }
}

@media (max-width: 768px) {
  .services-grid-row-1,
  .services-grid-row-2,
  .services-grid-row-3,
  .services-grid-row-4 {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
  
  .services-grid-container {
    padding: 0 1rem;
  }
  
  .service-card {
    padding: 1.5rem;
    min-height: 180px;
  }
  
  /* Mobile layout for cards with images */
  .service-card:has(.card-image-container) {
    flex-direction: column;
    gap: 1rem;
  }
  
  .service-card:has(.card-image-container) .card-content {
    order: 1;
  }
  
  .service-card:has(.card-image-container) .card-image-container {
    order: 2;
  }
  
  .card-title {
    font-size: 1.25rem;
  }
  
  .card-description {
    font-size: 0.9rem;
  }
}
</style>
