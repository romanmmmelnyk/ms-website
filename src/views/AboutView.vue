<template>
  <div class="about-page">
    <!-- Hero Section with Creative Layout -->
    <section class="hero-section">
      <div class="hero-grid">
        <div class="hero-text">
          <div class="text-container">
            <h1 class="main-title">
              <span class="title-word title-word-1">We</span>
              <span class="title-word title-word-2">Create</span>
              <span class="title-word title-word-3">Digital</span>
              <span class="title-word title-word-4">Magic</span>
            </h1>
            <p class="hero-description">
              A team of passionate innovators, designers, and developers crafting extraordinary digital experiences that inspire and transform.
            </p>
            <div class="hero-actions">
              <button class="action-btn primary" @click="scrollToStory">
                <span>Discover Our Story</span>
                <div class="btn-glow"></div>
              </button>
              <button class="action-btn secondary" @click="scrollToTeam">
                <span>Meet The Team</span>
                <div class="btn-glow"></div>
              </button>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="visual-container">
            <div class="floating-card card-1">
              <div class="card-content">
                <div class="card-icon">🚀</div>
                <h3>Innovation</h3>
                <p>Pushing boundaries</p>
              </div>
            </div>
            <div class="floating-card card-2">
              <div class="card-content">
                <div class="card-icon">💡</div>
                <h3>Creativity</h3>
                <p>Thinking outside the box</p>
              </div>
            </div>
            <div class="floating-card card-3">
              <div class="card-content">
                <div class="card-icon">⚡</div>
                <h3>Speed</h3>
                <p>Lightning fast delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-indicator">
        <div class="scroll-line"></div>
        <span>Scroll to explore</span>
      </div>
    </section>

    <!-- Mission Statement with Parallax -->
    <section class="mission-section">
      <div class="mission-bg">
        <div class="bg-pattern"></div>
        <div class="bg-overlay"></div>
      </div>
      <div class="mission-content">
        <div class="mission-text">
          <h2 class="section-title">Our Mission</h2>
          <p class="mission-statement">
            To revolutionize the digital landscape by creating experiences that don't just meet expectations—they exceed them. 
            We believe in the power of technology to connect, inspire, and transform the world around us.
          </p>
          <div class="mission-stats">
            <div class="stat-item">
              <div class="stat-number">5+</div>
              <div class="stat-label">Years of Excellence</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">200+</div>
              <div class="stat-label">Projects Delivered</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">50+</div>
              <div class="stat-label">Happy Clients</div>
            </div>
          </div>
        </div>
        <div class="mission-visual">
          <div class="geometric-shapes">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
            <div class="shape shape-3"></div>
            <div class="shape shape-4"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section with Creative Cards -->
    <section class="team-section" ref="teamSection">
      <div class="container">
        <h2 class="section-title">The Visionaries</h2>
        <div class="team-grid">
          <div 
            v-for="(member, index) in teamData" 
            :key="index" 
            class="team-card"
            :class="{ 'active': activeMember === index }"
            @mouseenter="activeMember = index"
            @mouseleave="activeMember = null"
          >
            <div class="card-front">
              <div class="member-photo">
                <img :src="member.avatar" :alt="member.name">
                <div class="photo-overlay"></div>
              </div>
              <div class="member-info">
                <h3 class="member-name">{{ member.name }}</h3>
                <p class="member-role">{{ member.role }}</p>
                <div class="member-expertise">
                  <span v-for="expertise in member.expertise" :key="expertise" class="expertise-tag">
                    {{ expertise }}
                  </span>
                </div>
              </div>
            </div>
            <div class="card-back">
              <div class="back-content">
                <h4>About {{ member.name.split(' ')[0] }}</h4>
                <p>{{ member.bio }}</p>
                <div class="member-achievements">
                  <div v-for="achievement in member.achievements" :key="achievement" class="achievement">
                    <span class="achievement-icon">🏆</span>
                    <span>{{ achievement }}</span>
                  </div>
                </div>
                <div class="social-links">
                  <a href="#" class="social-link">LinkedIn</a>
                  <a href="#" class="social-link">Twitter</a>
                  <a href="#" class="social-link">Portfolio</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section with Interactive Grid -->
    <section class="values-section">
      <div class="container">
        <h2 class="section-title">What Drives Us</h2>
        <div class="values-grid">
          <div 
            v-for="(value, index) in valuesData" 
            :key="index" 
            class="value-item"
            :class="{ 'expanded': expandedValue === index }"
            @click="toggleValue(index)"
          >
            <div class="value-header">
              <div class="value-icon">{{ value.icon }}</div>
              <h3 class="value-title">{{ value.title }}</h3>
              <div class="expand-indicator">+</div>
            </div>
            <div class="value-content">
              <p class="value-description">{{ value.description }}</p>
              <div class="value-examples">
                <h4>Examples:</h4>
                <ul>
                  <li v-for="example in value.examples" :key="example">{{ example }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Journey Timeline -->
    <section class="journey-section" ref="timelineSection">
      <div class="container">
        <h2 class="section-title">Our Journey</h2>
        <div class="journey-timeline">
          <div class="timeline-line"></div>
          <div 
            v-for="(milestone, index) in journeyData" 
            :key="index" 
            class="timeline-milestone"
            :class="{ 'left': index % 2 === 0, 'right': index % 2 === 1 }"
          >
            <div class="milestone-marker">
              <div class="marker-dot"></div>
              <div class="marker-pulse"></div>
            </div>
            <div class="milestone-content">
              <div class="milestone-year">{{ milestone.year }}</div>
              <h3 class="milestone-title">{{ milestone.title }}</h3>
              <p class="milestone-description">{{ milestone.description }}</p>
              <div class="milestone-achievements">
                <span v-for="achievement in milestone.achievements" :key="achievement" class="achievement-badge">
                  {{ achievement }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section">
      <div class="cta-container">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Create Something Extraordinary?</h2>
          <p class="cta-description">
            Let's collaborate to bring your vision to life with cutting-edge technology and innovative design.
          </p>
          <div class="cta-actions">
            <button class="cta-btn primary" @click="scrollToTop">
              Start Your Project
            </button>
            <button class="cta-btn secondary" @click="scrollToTop">
              Schedule a Call
            </button>
          </div>
        </div>
        <div class="cta-visual">
          <div class="animated-elements">
            <div class="element elem-1"></div>
            <div class="element elem-2"></div>
            <div class="element elem-3"></div>
            <div class="element elem-4"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// State
const activeMember = ref<number | null>(null)
const expandedValue = ref<number | null>(null)

// Mock data
const teamData = ref([
  {
    name: 'Alex Chen',
    role: 'CEO & Visionary',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    expertise: ['Leadership', 'Strategy', 'AI/ML'],
    bio: 'Former Google engineer turned entrepreneur with a passion for disruptive innovation. Led teams that built products used by millions.',
    achievements: ['Ex-Google Engineer', '3 Successful Exits', 'Forbes 30 Under 30']
  },
  {
    name: 'Sarah Rodriguez',
    role: 'CTO & Architect',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
    expertise: ['Full-Stack', 'DevOps', 'Cloud'],
    bio: 'Full-stack wizard who can build anything from microservices to quantum algorithms. Expert in scalable architecture.',
    achievements: ['AWS Certified', 'Open Source Contributor', 'Tech Conference Speaker']
  },
  {
    name: 'Marcus Johnson',
    role: 'Head of Design',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    expertise: ['UX/UI', 'Branding', 'Prototyping'],
    bio: 'Creative genius who believes design should solve problems, not just look pretty. Award-winning designer.',
    achievements: ['Design Awards Winner', 'Published Author', 'Design Mentor']
  },
  {
    name: 'Zara Patel',
    role: 'VP of Growth',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    expertise: ['Marketing', 'Analytics', 'Growth'],
    bio: 'Growth hacker extraordinaire who can scale anything from 0 to millions. Data-driven strategist.',
    achievements: ['Growth Expert', 'Marketing Innovator', 'Industry Speaker']
  }
])

const valuesData = ref([
  {
    title: 'Innovation First',
    icon: '🚀',
    description: 'We never settle for the status quo. Every day is an opportunity to push boundaries and explore new possibilities.',
    examples: [
      'Pioneering AI-powered solutions',
      'Experimenting with emerging technologies',
      'Challenging conventional approaches'
    ]
  },
  {
    title: 'Human-Centered',
    icon: '❤️',
    description: 'Technology serves people, not the other way around. We design with empathy and focus on real user needs.',
    examples: [
      'User research and testing',
      'Accessibility-first design',
      'Emotional design principles'
    ]
  },
  {
    title: 'Excellence',
    icon: '⭐',
    description: 'Good enough is never good enough. We strive for perfection in everything we do, from code to customer service.',
    examples: [
      'Code quality standards',
      'Performance optimization',
      'Continuous improvement'
    ]
  },
  {
    title: 'Collaboration',
    icon: '🤝',
    description: 'Great ideas come from great teams. We believe in the power of collective intelligence and diverse perspectives.',
    examples: [
      'Cross-functional teams',
      'Knowledge sharing',
      'Open communication'
    ]
  }
])

const journeyData = ref([
  {
    year: '2020',
    title: 'The Beginning',
    description: 'Started as a small team with big dreams, working from a garage with nothing but passion and determination.',
    achievements: ['Team of 3', 'First Client', 'MVP Launch']
  },
  {
    year: '2021',
    title: 'First Breakthrough',
    description: 'Launched our flagship product and secured our first major client, proving our concept was viable.',
    achievements: ['Product Launch', '10 Clients', 'Team Growth']
  },
  {
    year: '2022',
    title: 'Global Expansion',
    description: 'Reached customers in 50+ countries and expanded our team to handle the growing demand.',
    achievements: ['50+ Countries', '50 Team Members', 'Series A Funding']
  },
  {
    year: '2023',
    title: 'Innovation Hub',
    description: 'Became a recognized leader in digital transformation and started our innovation lab.',
    achievements: ['Industry Recognition', 'Innovation Lab', '100+ Projects']
  },
  {
    year: '2024',
    title: 'Future Forward',
    description: 'Pioneering next-gen technologies and preparing for the next decade of digital innovation.',
    achievements: ['AI Integration', 'Quantum Computing', 'Sustainability Focus']
  }
])

// Methods
const scrollToStory = () => {
  document.querySelector('.journey-section')?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToTeam = () => {
  document.querySelector('.team-section')?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const toggleValue = (index: number) => {
  expandedValue.value = expandedValue.value === index ? null : index
}
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  background: #0a0a0a;
  color: white;
  overflow-x: hidden;
}

/* Hero Section */
.hero-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero-text {
  z-index: 2;
}

.text-container {
  max-width: 600px;
}

.main-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 2rem;
  position: relative;
}

.title-word {
  display: block;
  animation: color-animation 4s linear infinite;
}

.title-word-1 { animation-delay: 0s; }
.title-word-2 { animation-delay: 1s; }
.title-word-3 { animation-delay: 2s; }
.title-word-4 { animation-delay: 3s; }

@keyframes color-animation {
  0%    { color: #667eea; }
  32%   { color: #764ba2; }
  33%   { color: #f093fb; }
  65%   { color: #f5576c; }
  66%   { color: #4facfe; }
  99%   { color: #00f2fe; }
  100%  { color: #667eea; }
}

.hero-description {
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  line-height: 1.6;
  margin-bottom: 3rem;
  opacity: 0.9;
  color: #e0e0e0;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.action-btn {
  position: relative;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  background: transparent;
  color: white;
}

.action-btn.primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.action-btn.secondary {
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.action-btn:hover .btn-glow {
  left: 100%;
}

.action-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.hero-visual {
  position: relative;
  height: 600px;
}

.visual-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.floating-card {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  width: 200px;
  animation: float 6s ease-in-out infinite;
}

.card-1 {
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.card-2 {
  top: 40%;
  right: 20%;
  animation-delay: 2s;
}

.card-3 {
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

.card-content {
  text-align: center;
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.card-content h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: white;
}

.card-content p {
  font-size: 0.9rem;
  color: #b0b0b0;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  opacity: 0.7;
}

.scroll-line {
  width: 2px;
  height: 40px;
  background: linear-gradient(to bottom, #667eea, transparent);
  margin: 0 auto 1rem;
  animation: scroll-pulse 2s ease-in-out infinite;
}

@keyframes scroll-pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

/* Mission Section */
.mission-section {
  padding: 8rem 0;
  position: relative;
  background: #111111;
}

.mission-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.bg-pattern {
  position: absolute;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: pattern-move 20s linear infinite;
}

@keyframes pattern-move {
  0% { transform: translate(0, 0); }
  100% { transform: translate(-50px, -50px); }
}

.bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4));
}

.mission-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.mission-text {
  max-width: 600px;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.mission-statement {
  font-size: 1.3rem;
  line-height: 1.7;
  margin-bottom: 3rem;
  color: #e0e0e0;
}

.mission-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.stat-item {
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 900;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: #b0b0b0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.mission-visual {
  position: relative;
  height: 500px;
}

.geometric-shapes {
  position: relative;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3));
  animation: rotate 20s linear infinite;
}

.shape-1 {
  width: 120px;
  height: 120px;
  top: 20%;
  left: 20%;
  animation-delay: 0s;
}

.shape-2 {
  width: 80px;
  height: 80px;
  top: 60%;
  right: 30%;
  animation-delay: 5s;
}

.shape-3 {
  width: 100px;
  height: 100px;
  bottom: 20%;
  left: 40%;
  animation-delay: 10s;
}

.shape-4 {
  width: 60px;
  height: 60px;
  top: 40%;
  right: 10%;
  animation-delay: 15s;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Team Section */
.team-section {
  padding: 8rem 0;
  background: #0a0a0a;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.team-card {
  position: relative;
  height: 400px;
  perspective: 1000px;
  cursor: pointer;
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: transform 0.8s ease;
  border-radius: 20px;
  overflow: hidden;
}

.card-front {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.card-back {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transform: rotateY(180deg);
}

.team-card.active .card-front {
  transform: rotateY(180deg);
}

.team-card.active .card-back {
  transform: rotateY(0deg);
}

.member-photo {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.member-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.photo-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7));
}

.member-info {
  padding: 1.5rem;
  text-align: center;
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

.member-expertise {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.expertise-tag {
  background: rgba(102, 126, 234, 0.2);
  color: #667eea;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid rgba(102, 126, 234, 0.3);
}

.back-content {
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.back-content h4 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: white;
}

.back-content p {
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.member-achievements {
  margin-bottom: 1.5rem;
}

.achievement {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
}

.achievement-icon {
  font-size: 1rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.social-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}

/* Values Section */
.values-section {
  padding: 8rem 0;
  background: #111111;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.value-item {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.value-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border-color: rgba(102, 126, 234, 0.3);
}

.value-item.expanded {
  background: rgba(102, 126, 234, 0.1);
  border-color: rgba(102, 126, 234, 0.5);
}

.value-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.value-icon {
  font-size: 2rem;
}

.value-title {
  font-size: 1.3rem;
  color: white;
  flex: 1;
}

.expand-indicator {
  font-size: 1.5rem;
  color: #667eea;
  transition: transform 0.3s ease;
}

.value-item.expanded .expand-indicator {
  transform: rotate(45deg);
}

.value-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.value-item.expanded .value-content {
  max-height: 500px;
}

.value-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.value-examples h4 {
  color: #667eea;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.value-examples ul {
  list-style: none;
  padding: 0;
}

.value-examples li {
  color: rgba(255, 255, 255, 0.7);
  padding: 0.3rem 0;
  position: relative;
  padding-left: 1.5rem;
}

.value-examples li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #667eea;
}

/* Journey Timeline */
.journey-section {
  padding: 8rem 0;
  background: #0a0a0a;
}

.journey-timeline {
  position: relative;
  margin-top: 4rem;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #667eea, #764ba2);
  transform: translateX(-50%);
}

.timeline-milestone {
  position: relative;
  margin-bottom: 4rem;
  width: 45%;
}

.timeline-milestone.left {
  margin-left: 0;
}

.timeline-milestone.right {
  margin-left: 55%;
}

.milestone-marker {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  z-index: 2;
}

.marker-dot {
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  border: 3px solid #0a0a0a;
}

.marker-pulse {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border: 2px solid rgba(102, 126, 234, 0.3);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0;
  }
}

.milestone-content {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.timeline-milestone.left .milestone-content {
  margin-right: 2rem;
  text-align: right;
}

.timeline-milestone.right .milestone-content {
  margin-left: 2rem;
  text-align: left;
}

.milestone-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.milestone-year {
  font-size: 1.5rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.milestone-title {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: white;
}

.milestone-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.milestone-achievements {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.achievement-badge {
  background: rgba(102, 126, 234, 0.2);
  color: #667eea;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid rgba(102, 126, 234, 0.3);
}

/* CTA Section */
.cta-section {
  padding: 8rem 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
  position: relative;
  overflow: hidden;
}

.cta-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.cta-content {
  max-width: 600px;
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
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #e0e0e0;
}

.cta-actions {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.cta-btn {
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

.cta-btn.primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.cta-btn.secondary {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.cta-visual {
  position: relative;
  height: 400px;
}

.animated-elements {
  position: relative;
  width: 100%;
  height: 100%;
}

.element {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
  border: 1px solid rgba(102, 126, 234, 0.3);
  animation: float-slow 8s ease-in-out infinite;
}

.elem-1 {
  width: 80px;
  height: 80px;
  top: 20%;
  left: 20%;
  animation-delay: 0s;
}

.elem-2 {
  width: 120px;
  height: 120px;
  top: 50%;
  right: 30%;
  animation-delay: 2s;
}

.elem-3 {
  width: 60px;
  height: 60px;
  bottom: 30%;
  left: 40%;
  animation-delay: 4s;
}

.elem-4 {
  width: 100px;
  height: 100px;
  top: 10%;
  right: 10%;
  animation-delay: 6s;
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-grid,
  .mission-content,
  .cta-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .hero-visual {
    height: 400px;
  }
  
  .mission-visual {
    height: 300px;
  }
  
  .cta-visual {
    height: 300px;
  }
}

@media (max-width: 768px) {
  .hero-actions,
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .timeline-line {
    left: 20px;
  }
  
  .timeline-milestone {
    width: calc(100% - 60px);
    margin-left: 60px !important;
    text-align: left !important;
  }
  
  .timeline-milestone.left .milestone-content,
  .timeline-milestone.right .milestone-content {
    margin: 0 0 0 2rem !important;
    text-align: left !important;
  }
  
  .milestone-marker {
    left: 20px;
  }
  
  .team-grid {
    grid-template-columns: 1fr;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
  }
  
  .mission-stats {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-grid,
  .mission-content,
  .cta-container {
    padding: 0 1rem;
  }
  
  .main-title {
    font-size: 2.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .floating-card {
    width: 150px;
    padding: 1.5rem;
  }
}
</style>

