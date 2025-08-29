<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="title-line">We're Not Just</span>
          <span class="title-line">A Company</span>
          <span class="title-line">We're A Movement</span>
        </h1>
        <p class="hero-subtitle">
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
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="timeline-section" ref="timelineSection">
      <div class="container">
        <h2 class="section-title">Our Journey</h2>
        <div class="timeline">
          <div class="timeline-item" v-for="(item, index) in timelineData" :key="index">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-year">{{ item.year }}</div>
              <h3 class="timeline-title">{{ item.title }}</h3>
              <p class="timeline-description">{{ item.description }}</p>
              <div class="timeline-icon">{{ item.icon }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section" ref="teamSection">
      <div class="container">
        <h2 class="section-title">The Dream Team</h2>
        <div class="team-grid">
          <div 
            v-for="(member, index) in teamData" 
            :key="index" 
            class="team-member"
            @mouseenter="hoveredMember = index"
            @mouseleave="hoveredMember = null"
          >
            <div class="member-avatar">
              <div class="avatar-image" :style="{ backgroundImage: `url(${member.avatar})` }"></div>
              <div class="avatar-overlay" v-show="hoveredMember === index">
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

    <!-- Values Section -->
    <section class="values-section">
      <div class="container">
        <h2 class="section-title">Our Core Values</h2>
        <div class="values-grid">
          <div 
            v-for="(value, index) in valuesData" 
            :key="index" 
            class="value-card"
            @mouseenter="activeValue = index"
            @mouseleave="activeValue = null"
          >
            <div class="value-icon">{{ value.icon }}</div>
            <h3 class="value-title">{{ value.title }}</h3>
            <p class="value-description">{{ value.description }}</p>
            <div class="value-animation" v-show="activeValue === index">
              <div class="pulse-ring"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section">
      <div class="container">
        <h2 class="section-title">Numbers That Matter</h2>
        <div class="stats-grid">
          <div 
            v-for="(stat, index) in statsData" 
            :key="index" 
            class="stat-item"
          >
            <div class="stat-number">{{ stat.target }}</div>
            <div class="stat-label">{{ stat.label }}</div>
            <div class="stat-icon">{{ stat.icon }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="contact-cta">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Build Something Amazing?</h2>
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
import { ref } from 'vue'

// State
const hoveredMember = ref<number | null>(null)
const activeValue = ref<number | null>(null)

// Mock data
const timelineData = ref([
  {
    year: '2020',
    title: 'The Beginning',
    description: 'Started as a small team with big dreams',
    icon: '🚀'
  },
  {
    year: '2021',
    title: 'First Breakthrough',
    description: 'Launched our flagship product',
    icon: '💡'
  },
  {
    year: '2022',
    title: 'Global Expansion',
    description: 'Reached customers in 50+ countries',
    icon: '🌍'
  },
  {
    year: '2023',
    title: 'Innovation Hub',
    description: 'Became a leader in digital transformation',
    icon: '🏆'
  },
  {
    year: '2024',
    title: 'Future Forward',
    description: 'Pioneering next-gen technologies',
    icon: '⚡'
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
  { label: 'Projects Completed', target: 150, icon: '📊' },
  { label: 'Happy Clients', target: 89, icon: '😊' },
  { label: 'Team Members', target: 24, icon: '👥' },
  { label: 'Countries Reached', target: 52, icon: '🌍' }
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
  animation: fadeInUp 1s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

.title-line:nth-child(1) { animation-delay: 0.2s; }
.title-line:nth-child(2) { animation-delay: 0.4s; }
.title-line:nth-child(3) { animation-delay: 0.6s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-subtitle {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  margin-bottom: 3rem;
  opacity: 0.9;
  line-height: 1.6;
  animation: fadeInUp 1s ease-out 0.8s forwards;
  opacity: 0;
  transform: translateY(30px);
}

.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInUp 1s ease-out 1s forwards;
  opacity: 0;
  transform: translateY(30px);
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

.floating-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: float 8s ease-in-out infinite;
}

.shape-1 {
  width: 120px;
  height: 120px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 80px;
  height: 80px;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.shape-3 {
  width: 100px;
  height: 100px;
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

.shape-4 {
  width: 60px;
  height: 60px;
  top: 30%;
  right: 30%;
  animation-delay: 6s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
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
  animation: slideInFromLeft 0.8s ease-out forwards;
}

.timeline-item:nth-child(even) {
  animation: slideInFromRight 0.8s ease-out forwards;
}

.timeline-item:nth-child(1) { animation-delay: 0.2s; }
.timeline-item:nth-child(2) { animation-delay: 0.4s; }
.timeline-item:nth-child(3) { animation-delay: 0.6s; }
.timeline-item:nth-child(4) { animation-delay: 0.8s; }
.timeline-item:nth-child(5) { animation-delay: 1s; }

@keyframes slideInFromLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
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
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

.team-member:nth-child(1) { animation-delay: 0.1s; }
.team-member:nth-child(2) { animation-delay: 0.2s; }
.team-member:nth-child(3) { animation-delay: 0.3s; }
.team-member:nth-child(4) { animation-delay: 0.4s; }

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
  transition: all 0.3s ease;
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
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

.value-card:nth-child(1) { animation-delay: 0.1s; }
.value-card:nth-child(2) { animation-delay: 0.2s; }
.value-card:nth-child(3) { animation-delay: 0.3s; }
.value-card:nth-child(4) { animation-delay: 0.4s; }

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
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

.stat-item:nth-child(1) { animation-delay: 0.1s; }
.stat-item:nth-child(2) { animation-delay: 0.2s; }
.stat-item:nth-child(3) { animation-delay: 0.3s; }
.stat-item:nth-child(4) { animation-delay: 0.4s; }

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
  animation: float-slow 8s ease-in-out infinite;
}

.element-1 {
  width: 80px;
  height: 80px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.element-2 {
  width: 120px;
  height: 120px;
  top: 60%;
  right: 15%;
  animation-delay: 4s;
}

.element-3 {
  width: 60px;
  height: 60px;
  bottom: 30%;
  left: 20%;
  animation-delay: 8s;
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
