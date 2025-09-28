<template>
  <div class="about-page">
    <!-- Hero Section with 3D Parallax -->
    <section class="hero-section" ref="heroSection">
      <div class="hero-background">
        <div class="floating-shapes">
          <div class="shape shape-1" ref="shape1"></div>
          <div class="shape shape-2" ref="shape2"></div>
          <div class="shape shape-3" ref="shape3"></div>
          <div class="shape shape-4" ref="shape4"></div>
        </div>
        <div class="hero-sphere" ref="heroSphere"></div>
      </div>
      
      <div class="hero-content">
        <div class="container">
                      <h1 class="hero-title">
              <span class="title-line">WE BUILD</span>
              <span class="title-line digital-gradient">DIGITAL</span>
              <span class="title-line">EXPERIENCES</span>
            </h1>
          <p class="hero-subtitle">
            Transforming ideas into powerful digital solutions that drive business growth and innovation
          </p>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">50+</span>
              <span class="stat-label">Projects Delivered</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">3+</span>
              <span class="stat-label">Years Experience</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">20+</span>
              <span class="stat-label">Team Experts</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section class="story-section">
      <div class="story-background">
        <div class="story-pattern"></div>
        <div class="story-overlay"></div>
      </div>
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Story</h2>
          <p class="section-subtitle">From humble beginnings to industry innovation</p>
        </div>
        
        <div class="story-timeline">
          <div class="timeline-item" v-for="(item, index) in timelineItems" :key="index">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3 class="timeline-year">{{ item.year }}</h3>
              <h4 class="timeline-title">{{ item.title }}</h4>
              <p class="timeline-description">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What We Do</h2>
          <p class="section-subtitle">Comprehensive digital solutions for modern businesses</p>
        </div>
        
        <div class="services-grid">
          <div class="service-card" v-for="(service, index) in services" :key="index">
            <div class="service-icon">
              <span>{{ service.icon }}</span>
            </div>
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
            <ul class="service-features">
              <li v-for="feature in service.features" :key="feature">{{ feature }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Meet Our Team</h2>
          <p class="section-subtitle">The brilliant minds behind our success</p>
        </div>
        
        <div class="team-grid">
          <div 
            class="team-member" 
            v-for="(member, index) in teamMembers" 
            :key="index"
            @mouseenter="handleMemberHover(index)"
            @mouseleave="handleMemberLeave(index)"
          >
            <div class="member-photo">
              <div class="photo-placeholder" v-if="!member.photo">
                <span>{{ member.initials }}</span>
              </div>
              <img v-else :src="(member as any).photo" :alt="member.name" class="member-image" />
            </div>
            <div class="member-info">
              <h3 class="member-name">{{ member.name }}</h3>
              <p class="member-role">{{ member.role }}</p>
              <p class="member-bio">{{ member.bio }}</p>
            </div>
            <div class="member-social">
              <a href="#" class="social-link linkedin">LinkedIn</a>
              <a href="#" class="social-link twitter">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Section -->
    <section class="tech-section white-bg">
      <div class="container">
        <div class="tech-header">
          <div class="tech-title-section">
            <div class="tech-line"></div>
            <span class="tech-background-text">Experience</span>
            <h2 class="tech-main-title">Technology we use</h2>
          </div>
        </div>
        
        <div class="tech-grid">
          <div class="tech-item" v-for="tech in technologies" :key="tech.name">
            <div class="tech-logo">
              <span class="tech-name">{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Start Your Project?</h2>
          <p class="cta-subtitle">Let's discuss how we can bring your vision to life</p>
          <div class="cta-buttons">
            <router-link to="/contact" class="btn btn-primary">Get Started</router-link>
            <router-link to="/portfolio" class="btn btn-secondary">View Our Work</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// Refs for DOM elements
const heroSection = ref<HTMLElement>()
const heroSphere = ref<HTMLElement>()
const shape1 = ref<HTMLElement>()
const shape2 = ref<HTMLElement>()
const shape3 = ref<HTMLElement>()
const shape4 = ref<HTMLElement>()

// Data
const timelineItems = ref([
  {
    year: '2021',
    title: 'Company Founded',
    description: 'Started with a vision to revolutionize digital development'
  },
  {
    year: '2022',
    title: 'First Major Project',
    description: 'Delivered our first enterprise solution to a Fortune 500 company'
  },
  {
    year: '2023',
    title: 'Team Expansion',
    description: 'Grew to 20+ experts across multiple disciplines'
  },
  {
    year: '2024',
    title: 'Industry Recognition',
    description: 'Named one of the top development agencies in the region'
  }
])

const services = ref([
  {
    title: 'Web Development',
    description: 'Custom web applications and websites built with modern technologies',
    icon: '🌐',
    features: ['Responsive Design', 'E-commerce Solutions', 'CMS Integration', 'Performance Optimization']
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    icon: '📱',
    features: ['iOS Development', 'Android Development', 'Cross-platform Apps', 'App Store Optimization']
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design that creates engaging digital experiences',
    icon: '🎨',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
  },

])

const teamMembers = ref([
  {
    name: 'Roman Nikotov',
    role: 'Co-Founder, CEO',
    bio: 'Visionary leader with extensive experience in digital transformation and business strategy',
    initials: 'RN'
  },
  {
    name: 'Anton Fomenko',
    role: 'Co-Founder, CTO',
    bio: 'Tech expert specializing in scalable architecture and innovative solutions',
    initials: 'AF'
  },
  {
    name: 'Daniil',
    role: 'Full Stack Developer',
    bio: 'Experienced developer with expertise in both frontend and backend technologies',
    initials: 'D'
  },
  {
    name: 'Anton',
    role: 'Backend Developer',
    bio: 'Specialized in server-side development and database optimization',
    initials: 'A'
  },
  {
    name: 'Evgenii',
    role: 'Web Designer',
    bio: 'Creative designer focused on user experience and modern web aesthetics',
    initials: 'E'
  },
  {
    name: 'Artur',
    role: 'SEO Specialist',
    bio: 'Expert in search engine optimization and digital marketing strategies',
    initials: 'AR'
  },
  {
    name: 'Oleksii',
    role: 'DevOps Engineer',
    bio: 'Infrastructure specialist ensuring smooth deployment and system reliability',
    initials: 'O'
  },
  {
    name: 'Olga',
    role: 'Project Manager',
    bio: 'Experienced project coordinator ensuring timely delivery and client satisfaction',
    initials: 'OL'
  }
])

const technologies = ref([
  { name: 'PHP' },
  { name: 'Vue.js' },
  { name: 'Laravel' },
  { name: 'Android' },
  { name: 'Swift' },
  { name: 'Kotlin' },
  { name: 'Java' },
  { name: 'Python' },
  { name: 'React' },
  { name: 'JavaScript' },
  { name: 'Node.js' },
  { name: 'iOS' },
  { name: 'C#' },
  { name: 'Flutter' },
  { name: 'C++' },
  { name: 'TypeScript' }
])

// Event handlers
const handleMemberHover = (index: number) => {
  // Add hover effects for team members
}

const handleMemberLeave = (index: number) => {
  // Remove hover effects for team members
}

// GSAP Animations
const initAnimations = () => {
  // Hero section animations
  gsap.fromTo('.hero-title .title-line', 
    { y: 100, opacity: 0 },
    { 
      y: 0, 
      opacity: 1, 
      duration: 1, 
      stagger: 0.2, 
      ease: 'power3.out' 
    }
  )

  gsap.fromTo('.hero-subtitle',
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, delay: 0.8, ease: 'power3.out' }
  )

  gsap.fromTo('.hero-stats .stat-item',
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, delay: 1.2, stagger: 0.2, ease: 'power3.out' }
  )

  // Floating shapes animation
  const shapes = [shape1.value, shape2.value, shape3.value, shape4.value].filter(Boolean) as HTMLElement[]
  if (shapes.length > 0) {
    gsap.to(shapes, {
      y: -20,
      rotation: 360,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: 1
    })
  }

  // Hero sphere animation
  if (heroSphere.value) {
    gsap.to(heroSphere.value, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'none'
    })
  }

  // Timeline animations
  gsap.utils.toArray('.timeline-item').forEach((item, index) => {
    gsap.fromTo(item as Element,
      { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: item as Element,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  })

  // Services cards animation
  gsap.utils.toArray('.service-card').forEach((card, index) => {
    gsap.fromTo(card as Element,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: card as Element,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  })

  // Team members animation
  gsap.utils.toArray('.team-member').forEach((member, index) => {
    gsap.fromTo(member as Element,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: member as Element,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  })

  // Technology items animation
  gsap.utils.toArray('.tech-item').forEach((item, index) => {
    gsap.fromTo(item as Element,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: item as Element,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  })

  // CTA section animation
  gsap.fromTo('.cta-content',
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  )
}

// Parallax effect
let ticking = false
const handleScroll = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      if (heroSection.value) {
        const scrolled = window.pageYOffset
        const rate = scrolled * -0.5
        
        if (heroSphere.value) {
          heroSphere.value.style.transform = `translateY(${rate}px) rotate(${scrolled * 0.1}deg)`
        }
        
        if (shape1.value) shape1.value.style.transform = `translateY(${scrolled * 0.3}px) rotate(${scrolled * 0.05}deg)`
        if (shape2.value) shape2.value.style.transform = `translateY(${scrolled * 0.2}px) rotate(${scrolled * -0.03}deg)`
        if (shape3.value) shape3.value.style.transform = `translateY(${scrolled * 0.4}px) rotate(${scrolled * 0.07}deg)`
        if (shape4.value) shape4.value.style.transform = `translateY(${scrolled * 0.25}px) rotate(${scrolled * -0.04}deg)`
      }
      ticking = false
    })
    ticking = true
  }
}

// Lifecycle
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // Initialize GSAP animations after a short delay
  setTimeout(() => {
    initAnimations()
  }, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  
  // Clean up ScrollTrigger
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>

<style scoped>
.about-page {
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

.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: var(--gradient-primary);
  opacity: 0.15;
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 200px;
  height: 200px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 150px;
  height: 150px;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
  background: var(--gradient-accent);
}

.shape-3 {
  width: 100px;
  height: 100px;
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
  background: linear-gradient(135deg, var(--color-secondary-teal), var(--color-secondary-blue));
}

.shape-4 {
  width: 120px;
  height: 120px;
  top: 30%;
  right: 30%;
  animation-delay: 1s;
  background: var(--gradient-primary);
}

.hero-sphere {
  position: absolute;
  width: 400px;
  height: 400px;
  top: 50%;
  right: 10%;
  background: radial-gradient(circle, var(--color-primary-purple), var(--color-primary-purple-dark));
  border-radius: 50%;
  opacity: 0.3;
  filter: blur(2px);
  transition: transform 0.3s ease;
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

.hero-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  line-height: 0.9;
  margin-bottom: 2rem;
}

.title-line {
  display: block;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.digital-gradient {
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  color: var(--color-text-muted);
  margin-bottom: 3rem;
  max-width: 600px;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  max-width: 500px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--color-secondary-teal), var(--color-secondary-blue));
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

/* Section Styles */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 3;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 1rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--color-white);
  max-width: 600px;
  margin: 0 auto;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

/* Story Section */
.story-section {
  position: relative;
  padding: 6rem 0;
  background: var(--color-bg-dark-light);
  overflow: hidden;
}

.story-section .container {
  position: relative;
  z-index: 3;
}

.story-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.story-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(34, 252, 176, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(33, 129, 250, 0.1) 0%, transparent 50%),
    linear-gradient(45deg, rgba(127, 0, 253, 0.05) 0%, transparent 50%);
  background-size: 400px 400px, 300px 300px, 200px 200px;
  animation: patternMove 20s linear infinite;
}

.story-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, 
    rgba(22, 20, 28, 0.3) 0%, 
    rgba(9, 8, 11, 0.4) 100%);
}

.story-timeline {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.story-timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--color-secondary-teal), var(--color-secondary-blue));
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
}

.timeline-item:nth-child(odd) {
  flex-direction: row;
}

.timeline-item:nth-child(even) {
  flex-direction: row-reverse;
}

.timeline-marker {
  position: absolute;
  left: 50%;
  width: 20px;
  height: 20px;
  background: var(--gradient-primary);
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.timeline-content {
  width: 45%;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.timeline-item:nth-child(odd) .timeline-content {
  margin-right: 55%;
}

.timeline-item:nth-child(even) .timeline-content {
  margin-left: 55%;
}

.timeline-year {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary-purple);
  margin-bottom: 0.5rem;
}

.timeline-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.timeline-description {
  color: var(--color-text-muted);
  line-height: 1.6;
}

/* Services Section */
.services-section {
  padding: 6rem 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.service-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border-color: var(--color-secondary-teal);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.service-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--color-primary-purple);
}

.service-description {
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.service-features {
  list-style: none;
  padding: 0;
}

.service-features li {
  color: var(--color-text-muted);
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  padding-left: 1.5rem;
}

.service-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-primary-purple);
  font-weight: bold;
}

.service-features li:last-child {
  border-bottom: none;
}

/* Team Section */
.team-section {
  padding: 6rem 0;
  background: var(--color-bg-dark-light);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.team-member {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.team-member:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.member-photo {
  margin-bottom: 1.5rem;
}

.photo-placeholder {
  width: 80px;
  height: 80px;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-white);
}

.member-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--color-primary-purple);
  transition: all 0.3s ease;
}

.member-image:hover {
  border-color: var(--color-secondary-teal);
  transform: scale(1.05);
}

.member-name {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-primary-purple);
}

.member-role {
  font-size: 1rem;
  color: var(--color-text-muted);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.member-bio {
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.member-social {
  display: flex;
  gap: 1rem;
}

.social-link {
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  color: var(--color-text-primary);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--gradient-primary);
  color: var(--color-white);
}

/* Technology Section */
.tech-section {
  padding: 6rem 0;
  background: var(--color-white);
  color: var(--color-black);
}

.tech-header {
  margin-bottom: 4rem;
}

.tech-title-section {
  position: relative;
  display: inline-block;
}

.tech-line {
  width: 60px;
  height: 3px;
  background: var(--color-black);
  margin-bottom: 1rem;
}

.tech-background-text {
  position: absolute;
  top: -20px;
  left: 0;
  font-size: 4rem;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.1);
  z-index: 1;
  text-transform: uppercase;
}

.tech-main-title {
  position: relative;
  z-index: 2;
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-black);
  margin: 0;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.tech-item {
  text-align: center;
  transition: all 0.3s ease;
}

.tech-item:hover {
  transform: scale(1.1);
}

.tech-logo {
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  background: var(--color-black);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.tech-item:hover .tech-logo {
  background: var(--gradient-accent);
  transform: rotate(360deg);
}

.tech-name {
  color: var(--color-white);
  font-weight: 600;
  font-size: 0.9rem;
}

.tech-item:hover .tech-name {
  color: var(--color-black);
}

/* CTA Section */
.cta-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--color-primary-purple), var(--color-primary-purple-dark));
  text-align: center;
}

.cta-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-white);
}

.cta-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
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

/* Animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes patternMove {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .hero-title {
    text-align: center;
    margin-top: 80px; /* Add space below header on mobile */
  }
  
  .hero-subtitle {
    text-align: center;
  }
  
  .hero-stats {
    justify-items: center;
  }
  
  .story-timeline::before {
    left: 20px;
  }
  
  .timeline-item {
    flex-direction: row !important;
  }
  
  .timeline-marker {
    left: 20px;
  }
  
  .timeline-content {
    width: calc(100% - 60px);
    margin-left: 60px !important;
    margin-right: 0 !important;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .team-grid {
    grid-template-columns: 1fr;
  }
  
  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .tech-main-title {
    font-size: 2.5rem;
  }
  
  .tech-background-text {
    font-size: 3rem;
  }
  
  .cta-buttons {
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
  .hero-title {
    font-size: 2.5rem;
    margin-top: 100px; /* Even more space on very small screens */
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .hero-stats {
    grid-template-columns: 1fr;
  }
  
  .tech-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .tech-main-title {
    font-size: 2rem;
  }
  
  .tech-background-text {
    font-size: 2.5rem;
  }
}
</style>
