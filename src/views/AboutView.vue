<template>
  <div class="about-page">
    <!-- Hero Section with 3D Parallax -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="floating-shapes">
          <div class="shape shape-1" ref="shape1"></div>
          <div class="shape shape-2" ref="shape2"></div>
          <div class="shape shape-3" ref="shape3"></div>
          <div class="shape shape-4" ref="shape4"></div>
        </div>
        <div class="particle-container" ref="particleContainer"></div>
      </div>
      
      <div class="hero-content">
        <h1 class="hero-title" ref="heroTitle">
          <span class="title-line">We're Not Just</span>
          <span class="title-line">A Company</span>
          <span class="title-line">We're A Movement</span>
        </h1>
        <p class="hero-subtitle" ref="heroSubtitle">
          Crafting digital experiences that transcend the ordinary
        </p>
        <div class="hero-cta">
          <button class="cta-button primary" @click="scrollToStory">
            Our Story
          </button>
          <button class="cta-button secondary" @click="scrollToTeam">
            Meet The Team
          </button>
        </div>
      </div>
    </section>

    <!-- Interactive Timeline -->
    <section class="timeline-section" ref="timelineSection">
      <div class="container">
        <h2 class="section-title" ref="timelineTitle">Our Journey</h2>
        <div class="timeline">
          <div class="timeline-item" v-for="(item, index) in timelineData" :key="index" ref="timelineItems">
            <div class="timeline-marker" :class="{ 'active': item.active }"></div>
            <div class="timeline-content" :class="{ 'active': item.active }">
              <div class="timeline-year">{{ item.year }}</div>
              <h3 class="timeline-title">{{ item.title }}</h3>
              <p class="timeline-description">{{ item.description }}</p>
              <div class="timeline-icon">
                <component :is="item.icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Team Section -->
    <section class="team-section" ref="teamSection">
      <div class="container">
        <h2 class="section-title" ref="teamTitle">The Dream Team</h2>
        <div class="team-grid">
          <div 
            v-for="(member, index) in teamData" 
            :key="index" 
            class="team-member"
            :class="{ 'hovered': hoveredMember === index }"
            @mouseenter="hoveredMember = index"
            @mouseleave="hoveredMember = null"
            ref="teamMembers"
          >
            <div class="member-avatar">
              <div class="avatar-image" :style="{ backgroundImage: `url(${member.avatar})` }"></div>
              <div class="avatar-overlay">
                <div class="social-links">
                  <a href="#" class="social-link">LinkedIn</a>
                  <a href="#" class="social-link">Twitter</a>
                  <a href="#" class="social-link">GitHub</a>
                </div>
              </div>
            </div>
            <div class="member-info">
              <h3 class="member-name">{{ member.name }}</h3>
              <p class="member-role">{{ member.role }}</p>
              <p class="member-bio">{{ member.bio }}</p>
              <div class="member-skills">
                <span v-for="skill in member.skills" :key="skill" class="skill-tag">{{ skill }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Values Section -->
    <section class="values-section" ref="valuesSection">
      <div class="container">
        <h2 class="section-title" ref="valuesTitle">Our Core Values</h2>
        <div class="values-grid">
          <div 
            v-for="(value, index) in valuesData" 
            :key="index" 
            class="value-card"
            :class="{ 'active': activeValue === index }"
            @mouseenter="activeValue = index"
            @mouseleave="activeValue = null"
            ref="valueCards"
          >
            <div class="value-icon">
              <component :is="value.icon" />
            </div>
            <h3 class="value-title">{{ value.title }}</h3>
            <p class="value-description">{{ value.description }}</p>
            <div class="value-animation">
              <div class="pulse-ring"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Stats Section -->
    <section class="stats-section" ref="statsSection">
      <div class="container">
        <h2 class="section-title" ref="statsTitle">Numbers That Matter</h2>
        <div class="stats-grid">
          <div 
            v-for="(stat, index) in statsData" 
            :key="index" 
            class="stat-item"
            ref="statItems"
          >
            <div class="stat-number" ref="statNumbers">{{ stat.current }}</div>
            <div class="stat-label">{{ stat.label }}</div>
            <div class="stat-icon">
              <component :is="stat.icon" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Contact CTA -->
    <section class="contact-cta" ref="contactCta">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title" ref="ctaTitle">Ready to Build Something Amazing?</h2>
          <p class="cta-description">Let's turn your vision into reality</p>
          <div class="cta-buttons">
            <button class="cta-button primary" @click="scrollToTop">
              Get Started
            </button>
            <button class="cta-button secondary" @click="scrollToTop">
              Learn More
            </button>
          </div>
        </div>
        <div class="cta-visual">
          <div class="floating-elements">
            <div class="element element-1"></div>
            <div class="element element-2"></div>
            <div class="element element-3"></div>
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

// Reactive refs
const heroTitle = ref<HTMLElement>()
const heroSubtitle = ref<HTMLElement>()
const timelineItems = ref<HTMLElement[]>([])
const teamMembers = ref<HTMLElement[]>([])
const valueCards = ref<HTMLElement[]>([])
const statItems = ref<HTMLElement[]>([])
const statNumbers = ref<HTMLElement[]>([])
const shape1 = ref<HTMLElement>()
const shape2 = ref<HTMLElement>()
const shape3 = ref<HTMLElement>()
const shape4 = ref<HTMLElement>()
const particleContainer = ref<HTMLElement>()

// State
const hoveredMember = ref<number | null>(null)
const activeValue = ref<number | null>(null)

// Mock data
const timelineData = ref([
  {
    year: '2020',
    title: 'The Beginning',
    description: 'Started as a small team with big dreams',
    icon: '🚀',
    active: false
  },
  {
    year: '2021',
    title: 'First Breakthrough',
    description: 'Launched our flagship product',
    icon: '💡',
    active: false
  },
  {
    year: '2022',
    title: 'Global Expansion',
    description: 'Reached customers in 50+ countries',
    icon: '🌍',
    active: false
  },
  {
    year: '2023',
    title: 'Innovation Hub',
    description: 'Became a leader in digital transformation',
    icon: '🏆',
    active: false
  },
  {
    year: '2024',
    title: 'Future Forward',
    description: 'Pioneering next-gen technologies',
    icon: '⚡',
    active: false
  }
])

const teamData = ref([
  {
    name: 'Alex Chen',
    role: 'CEO & Visionary',
    bio: 'Former Google engineer turned entrepreneur with a passion for disruptive innovation.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    skills: ['Leadership', 'Strategy', 'AI/ML']
  },
  {
    name: 'Sarah Rodriguez',
    role: 'CTO & Architect',
    bio: 'Full-stack wizard who can build anything from microservices to quantum algorithms.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
    skills: ['Full-Stack', 'DevOps', 'Cloud']
  },
  {
    name: 'Marcus Johnson',
    role: 'Head of Design',
    bio: 'Creative genius who believes design should solve problems, not just look pretty.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    skills: ['UX/UI', 'Branding', 'Prototyping']
  },
  {
    name: 'Zara Patel',
    role: 'VP of Growth',
    bio: 'Growth hacker extraordinaire who can scale anything from 0 to millions.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    skills: ['Marketing', 'Analytics', 'Growth']
  }
])

const valuesData = ref([
  {
    title: 'Innovation First',
    description: 'We never settle for the status quo. Every day is an opportunity to push boundaries.',
    icon: '🚀'
  },
  {
    title: 'Human-Centered',
    description: 'Technology serves people, not the other way around. We design with empathy.',
    icon: '❤️'
  },
  {
    title: 'Excellence',
    description: 'Good enough is never good enough. We strive for perfection in everything we do.',
    icon: '⭐'
  },
  {
    title: 'Collaboration',
    description: 'Great ideas come from great teams. We believe in the power of collective intelligence.',
    icon: '🤝'
  }
])

const statsData = ref([
  { label: 'Projects Completed', current: 0, target: 150, icon: '📊' },
  { label: 'Happy Clients', current: 0, target: 89, icon: '😊' },
  { label: 'Team Members', current: 0, target: 24, icon: '👥' },
  { label: 'Countries Reached', current: 0, target: 52, icon: '🌍' }
])

// Methods
const scrollToStory = () => {
  document.querySelector('.timeline-section')?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToTeam = () => {
  document.querySelector('.team-section')?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Animations
const initHeroAnimations = () => {
  if (heroTitle.value && heroSubtitle.value) {
    gsap.fromTo(heroTitle.value.children, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
    )
    
    gsap.fromTo(heroSubtitle.value,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.8, ease: 'power3.out' }
    )
  }
}

const initFloatingShapes = () => {
  if (shape1.value && shape2.value && shape3.value && shape4.value) {
    gsap.to(shape1.value, { y: -20, rotation: 360, duration: 8, repeat: -1, ease: 'none' })
    gsap.to(shape2.value, { y: 20, rotation: -360, duration: 10, repeat: -1, ease: 'none' })
    gsap.to(shape3.value, { x: 15, y: -15, rotation: 180, duration: 12, repeat: -1, ease: 'none' })
    gsap.to(shape4.value, { x: -20, y: 10, rotation: -180, duration: 9, repeat: -1, ease: 'none' })
  }
}

const initTimelineAnimations = () => {
  timelineItems.value.forEach((item, index) => {
    gsap.fromTo(item,
      { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        delay: index * 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  })
}

const initTeamAnimations = () => {
  teamMembers.value.forEach((member, index) => {
    gsap.fromTo(member,
      { y: 100, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: member,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  })
}

const initValueAnimations = () => {
  valueCards.value.forEach((card, index) => {
    gsap.fromTo(card,
      { y: 50, opacity: 0, rotationY: 45 },
      {
        y: 0,
        opacity: 1,
        rotationY: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  })
}

const initStatsAnimations = () => {
  statItems.value.forEach((item, index) => {
    gsap.fromTo(item,
      { y: 50, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  })
}

const animateStats = () => {
  statsData.value.forEach((stat, index) => {
    const target = stat.target
    const duration = 2
    
    gsap.to(stat, {
      current: target,
      duration: duration,
      delay: index * 0.2,
      ease: 'power2.out',
      onUpdate: () => {
        if (statNumbers.value[index]) {
          statNumbers.value[index].textContent = Math.round(stat.current).toString()
        }
      }
    })
  })
}

const createParticles = () => {
  if (!particleContainer.value) return
  
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div')
    particle.className = 'particle'
    particle.style.left = Math.random() * 100 + '%'
    particle.style.animationDelay = Math.random() * 20 + 's'
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's'
    particleContainer.value.appendChild(particle)
  }
}

// Lifecycle
onMounted(() => {
  initHeroAnimations()
  initFloatingShapes()
  createParticles()
  
  // Initialize scroll-triggered animations
  setTimeout(() => {
    initTimelineAnimations()
    initTeamAnimations()
    initValueAnimations()
    initStatsAnimations()
    
    // Trigger stats animation when stats section is visible
    ScrollTrigger.create({
      trigger: '.stats-section',
      start: 'top 80%',
      onEnter: animateStats
    })
  }, 100)
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: white;
  overflow-x: hidden;
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.shape-1 {
  width: 120px;
  height: 120px;
  top: 20%;
  left: 10%;
}

.shape-2 {
  width: 80px;
  height: 80px;
  top: 60%;
  right: 15%;
}

.shape-3 {
  width: 100px;
  height: 100px;
  bottom: 20%;
  left: 20%;
}

.shape-4 {
  width: 60px;
  height: 60px;
  top: 30%;
  right: 30%;
}

.particle-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  animation: float linear infinite;
}

@keyframes float {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 0 2rem;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title-line {
  display: block;
  transform: translateY(100px);
  opacity: 0;
}

.hero-subtitle {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  margin-bottom: 3rem;
  opacity: 0.9;
  line-height: 1.6;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-button {
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.cta-button.primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.cta-button.secondary {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.cta-button.primary:hover {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
}

.cta-button.secondary:hover {
  border-color: rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.1);
}

/* Timeline Section */
.timeline-section {
  padding: 8rem 0;
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #667eea, #764ba2);
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateX(-100px);
}

.timeline-item:nth-child(even) {
  transform: translateX(100px);
}

.timeline-item:nth-child(even) .timeline-content {
  margin-left: auto;
  text-align: right;
}

.timeline-marker {
  position: absolute;
  left: 50%;
  top: 0;
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 2;
  transition: all 0.3s ease;
}

.timeline-marker.active {
  width: 30px;
  height: 30px;
  box-shadow: 0 0 20px rgba(102, 126, 234, 0.6);
}

.timeline-content {
  width: 45%;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.timeline-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.timeline-year {
  font-size: 1.5rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.timeline-title {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: white;
}

.timeline-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

.timeline-icon {
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 2rem;
  opacity: 0.7;
}

/* Team Section */
.team-section {
  padding: 8rem 0;
  background: rgba(255, 255, 255, 0.02);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.team-member {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.team-member:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
  border-color: rgba(102, 126, 234, 0.3);
}

.member-avatar {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  overflow: hidden;
}

.avatar-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: all 0.3s ease;
}

.avatar-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(102, 126, 234, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.team-member:hover .avatar-overlay {
  opacity: 1;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.member-name {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: white;
}

.member-role {
  color: #667eea;
  font-weight: 600;
  margin-bottom: 1rem;
}

.member-bio {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.member-skills {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.skill-tag {
  background: rgba(102, 126, 234, 0.2);
  color: #667eea;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid rgba(102, 126, 234, 0.3);
}

/* Values Section */
.values-section {
  padding: 8rem 0;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.value-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border-color: rgba(102, 126, 234, 0.3);
}

.value-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.value-title {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: white;
}

.value-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

.value-animation {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.pulse-ring {
  width: 100px;
  height: 100px;
  border: 2px solid rgba(102, 126, 234, 0.3);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

/* Stats Section */
.stats-section {
  padding: 8rem 0;
  background: rgba(255, 255, 255, 0.02);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.stat-item {
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.stat-number {
  font-size: 3rem;
  font-weight: 900;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.stat-icon {
  font-size: 2rem;
  opacity: 0.7;
}

/* Contact CTA */
.contact-cta {
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
}

.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.cta-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cta-description {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-visual {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.floating-elements {
  position: relative;
  width: 100%;
  height: 100%;
}

.element {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  border: 1px solid rgba(102, 126, 234, 0.2);
}

.element-1 {
  width: 80px;
  height: 80px;
  top: 20%;
  left: 10%;
  animation: float-slow 8s ease-in-out infinite;
}

.element-2 {
  width: 120px;
  height: 120px;
  top: 60%;
  right: 15%;
  animation: float-slow 10s ease-in-out infinite reverse;
}

.element-3 {
  width: 60px;
  height: 60px;
  bottom: 30%;
  left: 20%;
  animation: float-slow 12s ease-in-out infinite;
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-cta {
    flex-direction: column;
    align-items: center;
  }
  
  .timeline::before {
    left: 20px;
  }
  
  .timeline-item {
    transform: none !important;
  }
  
  .timeline-content {
    width: calc(100% - 60px);
    margin-left: 60px !important;
    text-align: left !important;
  }
  
  .timeline-marker {
    left: 20px;
  }
  
  .team-grid {
    grid-template-columns: 1fr;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .container {
    padding: 0 1rem;
  }
}
</style>
