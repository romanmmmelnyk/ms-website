<template>
  <div class="home">
    <HeroSection />
    
    <!-- Services Section -->
    <section class="services-section white-bg">
      <Container>
        <div v-if="isLoading" class="services-loading">
          <LoadingSpinner text="Loading services..." />
        </div>
        
        <div v-else class="services-content">
          <div class="services-header">
            <h2 class="services-title">How can we service you</h2>
            <div class="services-subtitle">
              <div class="vertical-line-dark"></div>
              <span>We provide range of services that can fit your goals.</span>
            </div>
          </div>
          
          <div class="services-grid">
          <!-- 01 Web Development -->
          <div class="service-category">
            <div class="category-header">
              <span class="category-number">01</span>
              <h3 class="category-title">Web Development</h3>
            </div>
            <div class="service-cards">
              <div class="service-card gradient-1">
                <div class="card-header">
                  <div class="card-icon">
                    <div class="icon-inner">
                      <Globe class="icon-svg" />
                    </div>
                  </div>
                  <h4>Custom Websites</h4>
                </div>
                <p>Tailored web solutions designed to meet your specific business needs and objectives.</p>
              </div>
              <div class="service-card gradient-1">
                <div class="card-header">
                  <div class="card-icon">
                    <div class="icon-inner">
                      <ShoppingCart class="icon-svg" />
                    </div>
                  </div>
                  <h4>E-commerce Platforms</h4>
                </div>
                <p>Robust online stores with secure payment systems and inventory management.</p>
              </div>
              <div class="service-card gradient-1">
                <div class="card-header">
                  <div class="card-icon">
                    <div class="icon-inner">
                      <Code class="icon-svg" />
                    </div>
                  </div>
                  <h4>Web Applications</h4>
                </div>
                <p>Interactive web applications that streamline your business processes.</p>
              </div>
            </div>
          </div>
          
          <!-- 02 Software Solutions -->
          <div class="service-category">
            <div class="category-header">
              <span class="category-number">02</span>
              <h3 class="category-title">Software Solutions</h3>
            </div>
            <div class="service-cards">
              <div class="service-card gradient-2">
                <div class="card-header">
                  <div class="card-icon">
                    <div class="icon-inner">
                      <Users class="icon-svg" />
                    </div>
                  </div>
                  <h4>CRM Systems</h4>
                </div>
                <p>Comprehensive solutions to optimize client relationships and streamline business workflows.</p>
              </div>
              <div class="service-card gradient-2">
                <div class="card-header">
                  <div class="card-icon">
                    <div class="icon-inner">
                      <Database class="icon-svg" />
                    </div>
                  </div>
                  <h4>ERP Systems</h4>
                </div>
                <p>Real-time business management systems to enhance organizational efficiency and decision-making.</p>
              </div>
              <div class="service-card gradient-2">
                <div class="card-header">
                  <div class="card-icon">
                    <div class="icon-inner">
                      <TrendingUp class="icon-svg" />
                    </div>
                  </div>
                  <h4>SEO Optimization</h4>
                </div>
                <p>Advanced SEO strategies to boost your website's visibility and attract more clients.</p>
              </div>
            </div>
          </div>
          
          <!-- 03 Digital Marketing -->
          <div class="service-category">
            <div class="category-header">
              <span class="category-number">03</span>
              <h3 class="category-title">Digital Marketing</h3>
            </div>
            <div class="service-cards">
              <div class="service-card gradient-3">
                <div class="card-header">
                  <div class="card-icon">
                    <div class="icon-inner">
                      <BarChart3 class="icon-svg" />
                    </div>
                  </div>
                  <h4>Social Media</h4>
                </div>
                <p>Strategic social media campaigns to build brand awareness and engage your audience.</p>
              </div>
              <div class="service-card gradient-3">
                <div class="card-header">
                  <div class="card-icon">
                    <div class="icon-inner">
                      <Target class="icon-svg" />
                    </div>
                  </div>
                  <h4>Content Marketing</h4>
                </div>
                <p>Compelling content strategies that drive traffic and convert visitors into customers.</p>
              </div>
              <div class="service-card gradient-3">
                <div class="card-header">
                  <div class="card-icon">
                    <div class="icon-inner">
                      <Zap class="icon-svg" />
                    </div>
                  </div>
                  <h4>PPC Campaigns</h4>
                </div>
                <p>Targeted paid advertising campaigns to maximize your return on investment.</p>
              </div>
            </div>
          </div>
          
          <!-- 04 Design and Automation -->
          <div class="service-category">
            <div class="category-header">
              <span class="category-number">04</span>
              <h3 class="category-title">Design and Automation</h3>
            </div>
            <div class="service-cards">
              <div class="service-card gradient-4">
                <div class="card-header">
                  <div class="card-icon">
                    <div class="icon-inner">
                      <Globe class="icon-svg" />
                    </div>
                  </div>
                  <h4>Design and UX/UI</h4>
                </div>
                <p>Cutting-edge designs that enhance usability and ensure a seamless experience for users.</p>
              </div>
              <div class="service-card gradient-4">
                <div class="card-header">
                  <div class="card-icon">
                    <div class="icon-inner">
                      <Code class="icon-svg" />
                    </div>
                  </div>
                  <h4>Chatbots</h4>
                </div>
                <p>Smart chatbots to automate customer interactions and improve service quality.</p>
              </div>
              <div class="service-card gradient-4">
                <div class="card-header">
                  <div class="card-icon">
                    <div class="icon-inner">
                      <Zap class="icon-svg" />
                    </div>
                  </div>
                  <h4>Process Automation</h4>
                </div>
                <p>Streamline business workflows and automate repetitive tasks for increased efficiency.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </Container>
    </section>

    <!-- Cost Calculator CTA Section -->
    <section class="cost-calculator-cta black-bg">
      <Container>
        <div class="cta-content">
          <div class="cta-text">
            <h2>Need a Project Quote?</h2>
            <p>Get instant, transparent pricing for your software project using our advanced cost calculation algorithm.</p>
            <div class="cta-features">
              <div class="cta-feature">
                <div class="feature-icon">💰</div>
                <span>Instant Quotes</span>
              </div>
              <div class="cta-feature">
                <div class="feature-icon">📊</div>
                <span>Detailed Breakdown</span>
              </div>
              <div class="cta-feature">
                <div class="feature-icon">⚡</div>
                <span>Smart Algorithm</span>
              </div>
            </div>
            <a href="/cost-calculator" class="cta-button">
              Calculate Your Project Cost
              <svg class="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
          <div class="cta-visual">
            <div class="calculator-mockup">
              <div class="mockup-header">
                <div class="mockup-dots">
                  <div class="dot red"></div>
                  <div class="dot yellow"></div>
                  <div class="dot green"></div>
                </div>
                <span>Cost Calculator</span>
              </div>
              <div class="mockup-content">
                <div class="mockup-line"></div>
                <div class="mockup-line short"></div>
                <div class="mockup-line"></div>
                <div class="mockup-line short"></div>
                <div class="mockup-button">Calculate Quote</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Container from '../components/Container.vue'
import HeroSection from '../components/HeroSection.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import { performanceMonitor, measureSync } from '@/utils/performance'
import { 
  Globe, 
  Database, 
  TrendingUp, 
  Settings,
  Users,
  ShoppingCart,
  Code,
  Shield,
  BarChart3,
  Target,
  Zap
} from 'lucide-vue-next'

const isLoading = ref(true)
const componentStartTime = performance.now()

onMounted(() => {
  // Simulate loading time for demonstration
  setTimeout(() => {
    isLoading.value = false
    performanceMonitor.trackComponentRender('HomeView', componentStartTime)
  }, 500)
})
</script>

<style scoped>
.home {
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
}

























@media (max-width: 1024px) {
  /* Tablet service cards */
  .service-cards {
    position: relative;
  }
}

@media (max-width: 768px) {
  /* Services responsive */
  .services-title {
    font-size: 2.5rem;
  }
  
  .services-subtitle {
    font-size: 1rem;
  }
  
  .service-category {
    flex-direction: column;
    gap: 30px;
  }
  
  .category-header {
    min-width: auto;
    text-align: center;
  }
  
  .category-number {
    font-size: 1.5rem;
  }
  
  .category-title {
    font-size: 0.4rem;
  }
  
  .service-cards {
    display: flex;
    overflow-x: auto;
    gap: 20px;
    padding: 0 20px;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
    position: relative;
  }
  
  .service-cards::-webkit-scrollbar {
    display: none;
  }
  
  .service-card {
    min-width: 280px;
    flex-shrink: 0;
    scroll-snap-align: start;
    min-height: 300px;
    padding: 25px;
  }
  
  .service-card h4 {
    font-size: 1.1rem;
  }
  
  .service-card p {
    font-size: 0.9rem;
  }
  
  /* CTA responsive */
  .cta-content {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
  
  .cta-text h2 {
    font-size: 2.5rem;
    text-align: center;
  }
  
  .cta-text p {
    font-size: 1.1rem;
    text-align: center;
  }
  
  .cta-features {
    align-items: center;
  }
  
  .calculator-mockup {
    width: 250px;
  }
}

@media (max-width: 480px) {
  /* Services responsive for small mobile */
  .services-title {
    font-size: 1.2rem;
  }
  
  .services-subtitle {
    font-size: 0.9rem;
    flex-direction: column;
    gap: 15px;
  }
  
  .vertical-line-dark {
    width: 40px;
    height: 2px;
  }
  
  .category-number {
    font-size: 1.3rem;
  }
  
  .category-title {
    font-size: 0.3rem;
  }
  
  .service-cards {
    gap: 15px;
  }
  
  .service-card {
    padding: 20px;
  }
  
  .service-card h4 {
    font-size: 1rem;
  }
  
  .service-card p {
    font-size: 0.85rem;
  }
  
  /* CTA responsive for small mobile */
  .cta-text h2 {
    font-size: 2rem;
  }
  
  .cta-text p {
    font-size: 1rem;
  }
  
  .cta-button {
    padding: 16px 24px;
    font-size: 16px;
  }
  
  .calculator-mockup {
    width: 200px;
    padding: 16px;
  }
}

/* Other Sections */
.section {
  padding: 80px 0;
  min-height: 400px;
  display: flex;
  align-items: center;
}

/* Services Section */
.services-section {
  padding: 120px 0;
  background: linear-gradient(90deg, #FFFFFF 0%, #E6D1FF 100%);
  position: relative;
}

.services-loading {
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.services-content {
  width: 100%;
}

.services-header {
  text-align: center;
  margin-bottom: 80px;
}

.services-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--color-black);
  margin-bottom: 20px;
}

.services-subtitle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: var(--color-dark-gray);
  font-size: 1.2rem;
  font-weight: 400;
}

.vertical-line-dark {
  width: 2px;
  height: 30px;
  background: var(--color-dark-gray);
  flex-shrink: 0;
}

.services-grid {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.service-category {
  display: flex;
  gap: 40px;
  align-items: flex-start;
}

.category-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  min-width: 200px;
  flex-shrink: 0;
}

.category-number {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--color-dark-gray);
  opacity: 0.7;
}

.category-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-black);
  line-height: 1.2;
  margin: 0;
}

.service-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  flex: 1;
  max-width: 100%;
  align-items: stretch;
  grid-auto-rows: 1fr;
  align-content: start;
}

.service-card {
  background: linear-gradient(135deg, #F5E6FF 0%, #E6F0FF 100%);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  text-align: left;
  overflow: hidden;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 320px;
  justify-content: space-between;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  border-radius: 24px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 0;
  flex-shrink: 0;
  padding-bottom: 20px;
}

.card-icon {
  flex-shrink: 0;
}

.card-header h4 {
  margin: 0;
  opacity: 0.8;
  line-height: 1;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--color-black);
}

.icon-inner {
  width: 45px;
  height: 45px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin-top: 2px;
}

.icon-svg {
  width: 22px;
  height: 22px;
  color: var(--color-white);
  stroke-width: 2;
}

/* Gradient Classes - Using pseudo-elements for proper border-radius support */
.gradient-1::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  padding: 2px;
  background: linear-gradient(135deg, #22FCB0 0%, #2181FA 100%);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
}

.gradient-2::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  padding: 2px;
  background: linear-gradient(135deg, #FC2169 0%, #E221FF 100%);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
}

.gradient-3::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  padding: 2px;
  background: linear-gradient(135deg, #7F00FD 0%, #4C0097 100%);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
}

.gradient-4::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  padding: 2px;
  background: linear-gradient(135deg, #FF2525 0%, #FF836D 100%);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
}



.service-card h4 {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--color-black);
  margin-bottom: 15px;
  line-height: 1.3;
  text-align: left;
}

.service-card p {
  font-size: 1rem;
  color: var(--color-dark-gray);
  line-height: 1.6;
  margin: 0;
  text-align: left;
  flex: 1;
  display: flex;
  align-items: flex-start;
  padding-top: 20px;
}

/* Individual icon colors for each gradient */
.gradient-1 .icon-inner {
  background: linear-gradient(135deg, #22FCB0 0%, #2181FA 100%);
}

.gradient-2 .icon-inner {
  background: linear-gradient(135deg, #FC2169 0%, #E221FF 100%);
}

.gradient-3 .icon-inner {
  background: linear-gradient(135deg, #7F00FD 0%, #4C0097 100%);
}

.gradient-4 .icon-inner {
  background: linear-gradient(135deg, #FF2525 0%, #FF836D 100%);
}

/* Enhanced card backgrounds with more color */
.gradient-1 {
  background: linear-gradient(135deg, #D0F0FF 0%, #C0E0FF 100%);
}

.gradient-2 {
  background: linear-gradient(135deg, #FFD0E8 0%, #F0C0FF 100%);
}

.gradient-3 {
  background: linear-gradient(135deg, #E8D0FF 0%, #D8C0FF 100%);
}

.gradient-4 {
  background: linear-gradient(135deg, #FFD0C0 0%, #FFC0D8 100%);
}

.black-bg {
  background-color: var(--color-black);
  color: var(--color-white);
}

/* Cost Calculator CTA Section */
.cost-calculator-cta {
  padding: 80px 0;
  background: var(--gradient-secondary);
}

.cta-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.cta-text h2 {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 24px;
  text-align: left;
  line-height: 1.1;
}

.cta-text p {
  font-size: 1.3rem;
  line-height: 1.6;
  color: var(--color-text-muted);
  margin-bottom: 32px;
  text-align: left;
}

.cta-features {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
}

.cta-feature {
  display: flex;
  align-items: center;
  gap: 16px;
}

.feature-icon {
  font-size: 24px;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cta-feature span {
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 500;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: var(--gradient-accent);
  color: var(--color-black);
  text-decoration: none;
  padding: 18px 32px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(34, 252, 176, 0.3);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(34, 252, 176, 0.4);
}

.arrow-icon {
  transition: transform 0.3s ease;
}

.cta-button:hover .arrow-icon {
  transform: translateX(4px);
}

.cta-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.calculator-mockup {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  width: 300px;
  backdrop-filter: blur(10px);
}

.mockup-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.mockup-dots {
  display: flex;
  gap: 8px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red { background: #FF5F56; }
.dot.yellow { background: #FFBD2E; }
.dot.green { background: #27CA3F; }

.mockup-header span {
  color: var(--color-text-primary);
  font-size: 14px;
  font-weight: 500;
}

.mockup-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.mockup-line {
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}

.mockup-line.short {
  width: 70%;
}

.mockup-button {
  background: var(--gradient-accent);
  color: var(--color-black);
  padding: 12px 20px;
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  margin-top: 8px;
}

.white-bg {
  background-color: var(--color-white);
  color: var(--color-black);
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  text-align: center;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: center;
}
</style>
