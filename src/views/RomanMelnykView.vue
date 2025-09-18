<template>
  <div class="roman-page">
    <!-- Hero Section -->
    <section class="hero-section" ref="heroSection">
      <div class="hero-background">
        <div class="floating-particles">
          <div class="particle" v-for="i in 20" :key="i" :style="getParticleStyle(i)"></div>
        </div>
        <div class="hero-gradient"></div>
      </div>
      
      <div class="hero-content">
        <div class="container">
          <div class="hero-grid">
            <div class="hero-text">
              <div class="greeting">
                <span class="greeting-text">Hello, I'm</span>
                <div class="name-highlight">
                  <h1 class="hero-name">Roman Melnyk</h1>
                  <div class="name-underline"></div>
                </div>
              </div>
              <h2 class="hero-title">Co-Founder & CEO</h2>
              <p class="hero-subtitle">
                Full Stack Developer & IT Consultant specializing in Node.js, TypeScript, and GraphQL. 
                Expert in scalable microservices, cloud infrastructure, and digital transformation.
              </p>
              <div class="hero-stats">
                <div class="stat-item">
                  <span class="stat-number">4+</span>
                  <span class="stat-label">Years Experience</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">40%</span>
                  <span class="stat-label">Efficiency Boost</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">London</span>
                  <span class="stat-label">Based</span>
                </div>
              </div>
              <div class="hero-actions">
                <router-link to="/contact" class="btn btn-primary">Let's Connect</router-link>
                <router-link to="/portfolio" class="btn btn-secondary">View My Work</router-link>
              </div>
            </div>
            
            <div class="hero-image">
              <div class="image-container">
                <img src="/roman-melnyk.jpg" alt="Roman Melnyk" class="profile-image" />
                <div class="image-glow"></div>
                <div class="floating-elements">
                  <div class="floating-element element-1">💡</div>
                  <div class="floating-element element-2">🚀</div>
                  <div class="floating-element element-3">⚡</div>
                  <div class="floating-element element-4">🎯</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">About Me</h2>
          <p class="section-subtitle">The journey of innovation and leadership</p>
        </div>
        
        <div class="about-content">
          <div class="about-text">
            <div class="about-card">
              <h3>Professional Summary</h3>
              <p>
                Full Stack Developer & IT Consultant with expertise in Node.js, TypeScript, and GraphQL, 
                focusing on scalable microservices, high-performance APIs, and cloud infrastructure. 
                Currently based in London, exploring opportunities to build scalable backend solutions 
                and optimize technology-driven business processes.
              </p>
            </div>
            
            <div class="about-card">
              <h3>Technical Expertise</h3>
              <p>
                Backend Development: Design and optimization of microservices architectures, 
                database migrations (NoSQL → SQL), and GraphQL-powered APIs. Cloud & DevOps: 
                Experience with Docker, Kubernetes, AWS (EC2, S3, RDS, Lambda), CI/CD pipelines 
                for automated deployments.
              </p>
            </div>
            
            <div class="about-card">
              <h3>Current Focus</h3>
              <p>
                Frontend Proficiency: Vue.js & React.js for enterprise solutions. System Architecture: 
                Development of CRM systems, administration panels, and workflow automation tools. 
                Mentorship & Consultancy: Training junior developers and advising on business 
                process automation.
              </p>
            </div>
          </div>
          
          <div class="about-skills">
            <h3>Core Competencies</h3>
            <div class="skills-grid">
              <div class="skill-item" v-for="skill in skills" :key="skill.name">
                <div class="skill-icon">{{ skill.icon }}</div>
                <h4 class="skill-name">{{ skill.name }}</h4>
                <p class="skill-description">{{ skill.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="experience-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Professional Journey</h2>
          <p class="section-subtitle">Key milestones and achievements</p>
        </div>
        
        <div class="timeline">
          <div class="timeline-item" v-for="(item, index) in experience" :key="index">
            <div class="timeline-marker">
              <div class="marker-dot"></div>
              <div class="marker-line"></div>
            </div>
            <div class="timeline-content">
              <div class="timeline-year">{{ item.year }}</div>
              <h3 class="timeline-title">{{ item.title }}</h3>
              <h4 class="timeline-company">{{ item.company }}</h4>
              <p class="timeline-description">{{ item.description }}</p>
              <div class="timeline-tags">
                <span class="tag" v-for="tag in item.tags" :key="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section class="education-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Education</h2>
          <p class="section-subtitle">Continuous learning and academic achievements</p>
        </div>
        
        <div class="education-content">
          <div class="education-item">
            <div class="education-year">2025 - Current</div>
            <div class="education-details">
              <h3 class="education-degree">Bachelor of Science: Computing</h3>
              <h4 class="education-school">University of Central Lancashire, London</h4>
              <p class="education-description">
                Currently pursuing advanced studies in computing, focusing on modern software development 
                practices, system architecture, and emerging technologies.
              </p>
            </div>
          </div>
          
          <div class="education-item">
            <div class="education-year">Previous</div>
            <div class="education-details">
              <h3 class="education-degree">Secondary Education</h3>
              <h4 class="education-school">School N2 - Ivano-Frankivsk</h4>
              <p class="education-description">
                Foundation education that sparked interest in technology and problem-solving, 
                leading to a career in software development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Core Values</h2>
          <p class="section-subtitle">What drives me every day</p>
        </div>
        
        <div class="values-grid">
          <div class="value-card" v-for="(value, index) in values" :key="index">
            <div class="value-icon">{{ value.icon }}</div>
            <h3 class="value-title">{{ value.title }}</h3>
            <p class="value-description">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA Section -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-content">
          <h2 class="contact-title">Let's Build Something Amazing Together</h2>
          <p class="contact-subtitle">
            Ready to transform your ideas into digital reality? Let's discuss your next project.
          </p>
          <div class="contact-actions">
            <router-link to="/contact" class="btn btn-primary btn-large">Start a Project</router-link>
            <a href="mailto:roman@moth.solutions" class="btn btn-secondary btn-large">Send Email</a>
          </div>
          <div class="contact-info">
            <div class="contact-item">
              <span class="contact-label">Email:</span>
              <a href="mailto:roman@moth.solutions" class="contact-value">roman@moth.solutions</a>
            </div>
            <div class="contact-item">
              <span class="contact-label">LinkedIn:</span>
              <a href="https://linkedin.com/in/roman-melnyk-74a831327" target="_blank" class="contact-value">linkedin.com/in/roman-melnyk-74a831327</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// Refs
const heroSection = ref<HTMLElement>()

// Data
const skills = ref([
  {
    name: 'Backend Development',
    icon: '⚙️',
    description: 'Node.js, TypeScript, GraphQL, microservices architecture'
  },
  {
    name: 'Cloud & DevOps',
    icon: '☁️',
    description: 'Docker, Kubernetes, AWS (EC2, S3, RDS, Lambda), CI/CD'
  },
  {
    name: 'Frontend Development',
    icon: '💻',
    description: 'Vue.js, React.js, enterprise solutions and dashboards'
  },
  {
    name: 'System Architecture',
    icon: '🏗️',
    description: 'CRM systems, automation tools, workflow optimization'
  },
  {
    name: 'Database Management',
    icon: '🗄️',
    description: 'PostgreSQL, NoSQL migrations, query optimization'
  },
  {
    name: 'Team Leadership',
    icon: '👥',
    description: 'Project management, mentorship, technical training'
  }
])

const experience = ref([
  {
    year: '2024-2025',
    title: 'IT Consultant – Digital Transformation & Automation',
    company: 'Financial Art Group Limited - London, United Kingdom',
    description: 'Built custom CRM for client management and workflow automation (+40% efficiency). Developed SEO-optimized corporate website and automated document handling processes.',
    tags: ['CRM Development', 'Process Automation', 'Digital Transformation']
  },
  {
    year: '2024',
    title: 'Programming Teacher',
    company: 'RedMonkey - Kalush, Ukraine',
    description: 'Mentored students in programming languages and technologies. Designed lessons focusing on coding fundamentals, problem-solving, and software development practices.',
    tags: ['Teaching', 'Mentorship', 'Technical Training']
  },
  {
    year: '2023',
    title: 'Project Lead - "Teleparser"',
    company: 'Teleparser - Kyiv, Ukraine',
    description: 'Led end-to-end development lifecycle from technical planning to deployment. Designed high-performance data processing pipeline and managed team coordination.',
    tags: ['Project Leadership', 'Microservices', 'Cloud Infrastructure']
  },
  {
    year: '2023',
    title: 'Middle Full Stack Developer',
    company: 'Boost - Kyiv, Ukraine',
    description: 'Led database optimizations, migrating services from NoSQL to PostgreSQL. Built Vue.js dashboards for real-time data visualization and implemented JWT authentication.',
    tags: ['Full Stack', 'Database Migration', 'Vue.js']
  },
  {
    year: '2021-2023',
    title: 'Trainee Node.js Developer',
    company: 'Boost - Kyiv, Ukraine',
    description: 'Contributed to "Boost" motivation service for taxi drivers in TaxiUA network. Gained experience with Nest.js, GraphQL, and Prisma in partnership with Bolt.',
    tags: ['Node.js', 'GraphQL', 'Nest.js']
  }
])

const values = ref([
  {
    icon: '🚀',
    title: 'Innovation',
    description: 'Always pushing boundaries and exploring new possibilities in technology and business.'
  },
  {
    icon: '🤝',
    title: 'Collaboration',
    description: 'Believing that the best results come from working together towards common goals.'
  },
  {
    icon: '🎯',
    title: 'Excellence',
    description: 'Committed to delivering exceptional quality in everything we do.'
  },
  {
    icon: '💡',
    title: 'Learning',
    description: 'Continuously growing and adapting to stay ahead in a rapidly changing world.'
  }
])

// Methods
const getParticleStyle = (index: number) => {
  const size = Math.random() * 4 + 2
  const left = Math.random() * 100
  const top = Math.random() * 100
  const animationDelay = Math.random() * 5
  
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    top: `${top}%`,
    animationDelay: `${animationDelay}s`
  }
}

// Animations
const initAnimations = () => {
  // Hero animations
  gsap.fromTo('.hero-name', 
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
  )
  
  gsap.fromTo('.hero-title',
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power3.out' }
  )
  
  gsap.fromTo('.hero-subtitle',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, delay: 0.6, ease: 'power3.out' }
  )
  
  gsap.fromTo('.profile-image',
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1, delay: 0.4, ease: 'power3.out' }
  )
  
  gsap.fromTo('.hero-stats .stat-item',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, delay: 0.9, stagger: 0.1, ease: 'power3.out' }
  )
  
  // Floating elements animation
  gsap.utils.toArray('.floating-element').forEach((element, index) => {
    gsap.to(element as Element, {
      y: -20,
      rotation: 360,
      duration: 3 + index,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: index * 0.5
    })
  })
  
  // Section animations
  gsap.utils.toArray('.about-card').forEach((card, index) => {
    gsap.fromTo(card as Element,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: card as Element,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  })
  
  gsap.utils.toArray('.timeline-item').forEach((item, index) => {
    gsap.fromTo(item as Element,
      { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: item as Element,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  })
  
  gsap.utils.toArray('.value-card').forEach((card, index) => {
    gsap.fromTo(card as Element,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card as Element,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  })
}

onMounted(() => {
  setTimeout(() => {
    initAnimations()
  }, 100)
})
</script>

<style scoped>
.roman-page {
  background: var(--color-bg-dark-dark);
  color: var(--color-text-primary);
  overflow-x: hidden;
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.floating-particles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  background: var(--gradient-primary);
  border-radius: 50%;
  opacity: 0.3;
  animation: float 6s ease-in-out infinite;
}

.hero-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 20%, rgba(127, 0, 253, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(34, 252, 176, 0.2) 0%, transparent 50%);
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-text {
  animation: slideInLeft 1s ease-out;
}

.greeting {
  margin-bottom: 1rem;
}

.greeting-text {
  font-size: 1.2rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 2px;
}

.name-highlight {
  position: relative;
  margin-bottom: 1rem;
}

.hero-name {
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 800;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  line-height: 1.1;
}

.name-underline {
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100px;
  height: 4px;
  background: var(--gradient-accent);
  border-radius: 2px;
}

.hero-title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: var(--color-secondary-teal);
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 500px;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-image {
  display: flex;
  justify-content: center;
  animation: slideInRight 1s ease-out;
}

.image-container {
  position: relative;
  width: 300px;
  height: 300px;
}

.profile-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--color-primary-purple);
  position: relative;
  z-index: 2;
}

.image-glow {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: var(--gradient-primary);
  border-radius: 50%;
  opacity: 0.3;
  filter: blur(20px);
  z-index: 1;
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
}

.floating-element {
  position: absolute;
  font-size: 2rem;
  animation: float 3s ease-in-out infinite;
}

.element-1 {
  top: 10%;
  right: -10%;
  animation-delay: 0s;
}

.element-2 {
  bottom: 20%;
  left: -15%;
  animation-delay: 1s;
}

.element-3 {
  top: 50%;
  right: -20%;
  animation-delay: 2s;
}

.element-4 {
  bottom: 10%;
  right: 10%;
  animation-delay: 0.5s;
}

/* Section Styles */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 1rem;
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
}

/* About Section */
.about-section {
  padding: 6rem 0;
  background: var(--color-bg-dark-light);
}

.about-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: start;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.about-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.about-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-secondary-teal);
}

.about-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-primary-purple);
  margin-bottom: 1rem;
}

.about-card p {
  color: var(--color-text-muted);
  line-height: 1.6;
}

.about-skills h3 {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--color-white);
}

.skills-grid {
  display: grid;
  gap: 1.5rem;
}

.skill-item {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.skill-item:hover {
  transform: translateX(10px);
  border-color: var(--color-secondary-teal);
}

.skill-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.skill-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-primary-purple);
  margin-bottom: 0.5rem;
}

.skill-description {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Experience Section */
.experience-section {
  padding: 6rem 0;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--gradient-primary);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 80px;
}

.timeline-marker {
  position: absolute;
  left: 0;
  top: 0;
}

.marker-dot {
  width: 20px;
  height: 20px;
  background: var(--gradient-primary);
  border-radius: 50%;
  border: 4px solid var(--color-bg-dark-dark);
  position: relative;
  z-index: 2;
}

.marker-line {
  position: absolute;
  top: 20px;
  left: 8px;
  width: 4px;
  height: 60px;
  background: var(--gradient-primary);
  opacity: 0.3;
}

.timeline-content {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.timeline-content:hover {
  transform: translateY(-5px);
  border-color: var(--color-secondary-teal);
}

.timeline-year {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-secondary-teal);
  margin-bottom: 0.5rem;
}

.timeline-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-white);
  margin-bottom: 0.5rem;
}

.timeline-company {
  font-size: 1.1rem;
  color: var(--color-primary-purple);
  margin-bottom: 1rem;
}

.timeline-description {
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.timeline-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background: var(--gradient-primary);
  color: var(--color-white);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* Education Section */
.education-section {
  padding: 6rem 0;
  background: var(--color-bg-dark-light);
}

.education-content {
  max-width: 800px;
  margin: 0 auto;
}

.education-item {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.education-item:hover {
  transform: translateY(-5px);
  border-color: var(--color-secondary-teal);
}

.education-year {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-secondary-teal);
  min-width: 120px;
  text-align: center;
  padding: 1rem;
  background: rgba(34, 252, 176, 0.1);
  border-radius: 12px;
  height: fit-content;
}

.education-details {
  flex: 1;
}

.education-degree {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-white);
  margin-bottom: 0.5rem;
}

.education-school {
  font-size: 1.1rem;
  color: var(--color-primary-purple);
  margin-bottom: 1rem;
}

.education-description {
  color: var(--color-text-muted);
  line-height: 1.6;
}

/* Values Section */
.values-section {
  padding: 6rem 0;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.value-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.value-card:hover {
  transform: translateY(-10px);
  border-color: var(--color-secondary-teal);
}

.value-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.value-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--color-primary-purple);
  margin-bottom: 1rem;
}

.value-description {
  color: var(--color-text-muted);
  line-height: 1.6;
}

/* Contact Section */
.contact-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--color-primary-purple), var(--color-primary-purple-dark));
  text-align: center;
}

.contact-content {
  max-width: 600px;
  margin: 0 auto;
}

.contact-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-white);
}

.contact-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.contact-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.contact-info {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.contact-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.contact-value {
  color: var(--color-white);
  text-decoration: none;
  font-weight: 500;
}

.contact-value:hover {
  color: var(--color-secondary-teal);
}

/* Buttons */
.btn {
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background: var(--color-secondary-teal);
  color: var(--color-black);
}

.btn-primary:hover {
  background: var(--color-white);
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: var(--color-white);
  border: 2px solid var(--color-white);
}

.btn-secondary:hover {
  background: var(--color-white);
  color: var(--color-black);
  transform: translateY(-2px);
}

.btn-large {
  padding: 1.2rem 2.5rem;
  font-size: 1.1rem;
}

/* Animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .hero-stats {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .timeline::before {
    left: 20px;
  }
  
  .timeline-item {
    padding-left: 60px;
  }
  
  .education-item {
    flex-direction: column;
    text-align: center;
  }
  
  .education-year {
    min-width: auto;
    width: fit-content;
    margin: 0 auto;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .contact-info {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 300px;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .hero-name {
    font-size: 2.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .image-container {
    width: 250px;
    height: 250px;
  }
  
  .floating-element {
    font-size: 1.5rem;
  }
}
</style>
