<template>
  <div class="careers bg-black">
    <!-- Hero Section -->
    <section class="hero-section">
      <Container>
        <div class="hero-content">
          <h1 class="hero-title">Join Our Team</h1>
          <p class="hero-subtitle">Build the future with innovative IT solutions. We're looking for passionate developers, designers, and problem-solvers who want to make a difference.</p>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">50+</span>
              <span class="stat-label">Team Members</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">15+</span>
              <span class="stat-label">Open Positions</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">95%</span>
              <span class="stat-label">Employee Satisfaction</span>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Company Culture Section -->
    <section class="culture-section white-bg">
      <Container>
        <div class="section-header">
          <h2>Our Culture</h2>
          <p>We believe in fostering an environment where innovation thrives and every voice matters.</p>
        </div>
        <div class="culture-grid">
          <div class="culture-card">
            <div class="culture-icon">🚀</div>
            <h3>Innovation First</h3>
            <p>We encourage creative thinking and experimentation. Every team member has the freedom to propose and implement new ideas.</p>
          </div>
          <div class="culture-card">
            <div class="culture-icon">🤝</div>
            <h3>Collaboration</h3>
            <p>We work together as a team, sharing knowledge and supporting each other to achieve common goals.</p>
          </div>
          <div class="culture-card">
            <div class="culture-icon">📚</div>
            <h3>Continuous Learning</h3>
            <p>We invest in your growth with training programs, conferences, and opportunities to learn new technologies.</p>
          </div>
          <div class="culture-card">
            <div class="culture-icon">⚖️</div>
            <h3>Work-Life Balance</h3>
            <p>We understand the importance of balance and offer flexible working hours and remote work options.</p>
          </div>
        </div>
      </Container>
    </section>

    <!-- Benefits Section -->
    <section class="benefits-section white-bg">
      <Container>
        <div class="section-header">
          <h2>Benefits & Perks</h2>
          <p>We take care of our team with comprehensive benefits and exciting perks.</p>
        </div>
        <div class="benefits-grid">
          <div class="benefit-category">
            <h3>Health & Wellness</h3>
            <ul>
              <li>Private health insurance</li>
              <li>Mental health support</li>
              <li>Gym membership</li>
              <li>Wellness programs</li>
            </ul>
          </div>
          <div class="benefit-category">
            <h3>Professional Growth</h3>
            <ul>
              <li>Conference attendance</li>
              <li>Online courses & certifications</li>
              <li>Mentorship programs</li>
              <li>Career development planning</li>
            </ul>
          </div>
          <div class="benefit-category">
            <h3>Work Environment</h3>
            <ul>
              <li>Flexible working hours</li>
              <li>Remote work options</li>
              <li>Modern office spaces</li>
              <li>Latest tech equipment</li>
            </ul>
          </div>
          <div class="benefit-category">
            <h3>Team & Social</h3>
            <ul>
              <li>Team building events</li>
              <li>Friday happy hours</li>
              <li>Company retreats</li>
              <li>Birthday celebrations</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>

    <!-- Open Positions Section -->
    <section class="positions-section white-bg">
      <Container>
        <div class="section-header">
          <h2>Open Positions</h2>
          <p>Find your perfect role and join our growing team.</p>
        </div>
        <div class="positions-grid">
          <div class="position-card" v-for="position in openPositions" :key="position.id">
            <div class="position-header">
              <h3>{{ position.title }}</h3>
              <span class="position-type">{{ position.type }}</span>
            </div>
            <div class="position-details">
              <div class="detail-item">
                <span class="detail-icon">📍</span>
                <span>{{ position.location }}</span>
              </div>
              <div class="detail-item">
                <span class="detail-icon">⏰</span>
                <span>{{ position.duration }}</span>
              </div>
              <div class="detail-item">
                <span class="detail-icon">💼</span>
                <span>{{ position.experience }}</span>
              </div>
            </div>
            <p class="position-description">{{ position.description }}</p>
            <div class="position-tags">
              <span class="tag" v-for="tag in position.tags" :key="tag">{{ tag }}</span>
            </div>
            <button class="apply-btn" @click="openApplication(position)">Apply Now</button>
          </div>
        </div>
      </Container>
    </section>

    <!-- Application Modal -->
    <div class="modal-overlay" v-if="showModal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">&times;</button>
        <h3>Apply for {{ selectedPosition?.title }}</h3>
        <form class="application-form" @submit.prevent="submitApplication">
          <div class="form-group">
            <label for="name">Full Name *</label>
            <input type="text" id="name" v-model="application.name" required>
          </div>
          <div class="form-group">
            <label for="email">Email *</label>
            <input type="email" id="email" v-model="application.email" required>
          </div>
          <div class="form-group">
            <label for="phone">Phone</label>
            <input type="tel" id="phone" v-model="application.phone">
          </div>
          <div class="form-group">
            <label for="experience">Years of Experience</label>
            <select id="experience" v-model="application.experience">
              <option value="">Select experience level</option>
              <option value="0-1">0-1 years</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5+">5+ years</option>
            </select>
          </div>
          <div class="form-group">
            <label for="cover-letter">Cover Letter</label>
            <textarea id="cover-letter" v-model="application.coverLetter" rows="4" placeholder="Tell us why you're interested in this position..."></textarea>
          </div>
          <div class="form-group">
            <label for="resume">Resume/CV *</label>
            <input type="file" id="resume" @change="handleFileUpload" accept=".pdf,.doc,.docx" required>
          </div>
          <div class="form-actions">
            <button type="button" class="btn-secondary" @click="closeModal">Cancel</button>
            <button type="submit" class="btn-primary">Submit Application</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Contact Section -->
    <section class="contact-section black-bg">
      <Container>
        <div class="section-header">
          <h2>Still Have Questions?</h2>
          <p>We're here to help! Whether you're looking for the perfect role or want to learn more about our company, our team is ready to assist you.</p>
        </div>
        
        <div class="contact-content">
          <!-- FAQ Section -->
          <div class="faq-section">
            <h3>Frequently Asked Questions</h3>
            <div class="faq-grid">
              <div class="faq-item" v-for="(faq, index) in faqs" :key="index" @click="toggleFaq(index)">
                <div class="faq-question">
                  <h4>{{ faq.question }}</h4>
                  <span class="faq-icon" :class="{ 'rotated': faq.isOpen }">▼</span>
                </div>
                <div class="faq-answer" :class="{ 'open': faq.isOpen }">
                  <p>{{ faq.answer }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Methods -->
          <div class="contact-methods">
            <h3>Get in Touch</h3>
            <div class="contact-grid">
              <div class="contact-card">
                <div class="contact-icon-wrapper">
                  <span class="contact-icon">📧</span>
                </div>
                <div class="contact-details">
                  <h4>Email Our HR Team</h4>
                  <p>careers@moth.solutions</p>
                  <span class="response-time">We'll respond within 24 hours</span>
                </div>
                <a href="mailto:careers@moth.solutions" class="contact-action">Send Email</a>
              </div>
              
              <div class="contact-card">
                <div class="contact-icon-wrapper">
                  <span class="contact-icon">📱</span>
                </div>
                <div class="contact-details">
                  <h4>Call Us Directly</h4>
                  <p>+44 7787 292197</p>
                  <span class="response-time">Mon-Fri, 9:00 AM - 6:00 PM GMT</span>
                </div>
                <a href="tel:+447787292197" class="contact-action">Call Now</a>
              </div>
              
              <div class="contact-card">
                <div class="contact-icon-wrapper">
                  <span class="contact-icon">💼</span>
                </div>
                <div class="contact-details">
                  <h4>LinkedIn Connect</h4>
                  <p>Follow our company page</p>
                  <span class="response-time">Stay updated with our latest news</span>
                </div>
                <a href="#" class="contact-action">Connect</a>
              </div>
              
              <div class="contact-card">
                <div class="contact-icon-wrapper">
                  <span class="contact-icon">📋</span>
                </div>
                <div class="contact-details">
                  <h4>General Inquiries</h4>
                  <p>office@moth.solutions</p>
                  <span class="response-time">For non-career related questions</span>
                </div>
                <a href="mailto:office@moth.solutions" class="contact-action">Contact Us</a>
              </div>
            </div>
          </div>

          <!-- Additional Info -->
          <div class="additional-info">
            <div class="info-card">
              <h4>🏢 Office Location</h4>
              <p>London, United Kingdom</p>
              <p class="info-note">We also support remote work from anywhere in the UK and EU</p>
            </div>
            <div class="info-card">
              <h4>⏰ Application Process</h4>
              <p>We review applications within 48 hours and typically schedule interviews within 1 week</p>
            </div>
            <div class="info-card">
              <h4>🔄 Interview Process</h4>
              <p>Usually 2-3 rounds: initial screening, technical assessment, and final team interview</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Container from '../components/Container.vue'

interface Position {
  id: number
  title: string
  type: string
  location: string
  duration: string
  experience: string
  description: string
  tags: string[]
}

interface Application {
  name: string
  email: string
  phone: string
  experience: string
  coverLetter: string
  resume: File | null
}

const showModal = ref(false)
const selectedPosition = ref<Position | null>(null)
const application = ref<Application>({
  name: '',
  email: '',
  phone: '',
  experience: '',
  coverLetter: '',
  resume: null
})

const openPositions: Position[] = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    type: 'Full-time',
    location: 'London / Remote',
    duration: 'Permanent',
    experience: '3-5 years',
    description: 'Join our frontend team to build beautiful, responsive web applications using Vue.js, React, and modern CSS frameworks.',
    tags: ['Vue.js', 'React', 'TypeScript', 'CSS3', 'Responsive Design']
  },
  {
    id: 2,
    title: 'Backend Developer',
    type: 'Full-time',
    location: 'London / Remote',
    duration: 'Permanent',
    experience: '2-4 years',
    description: 'Develop robust backend services and APIs using Node.js, Python, and cloud technologies.',
    tags: ['Node.js', 'Python', 'AWS', 'REST APIs', 'Databases']
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    type: 'Full-time',
    location: 'London / Remote',
    duration: 'Permanent',
    experience: '2-5 years',
    description: 'Create intuitive and beautiful user experiences for web and mobile applications.',
    tags: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research', 'Design Systems']
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    type: 'Full-time',
    location: 'London / Remote',
    duration: 'Permanent',
    experience: '3-6 years',
    description: 'Build and maintain our infrastructure, CI/CD pipelines, and cloud infrastructure.',
    tags: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Infrastructure as Code']
  },
  {
    id: 5,
    title: 'Product Manager',
    type: 'Full-time',
    location: 'London / Remote',
    duration: 'Permanent',
    experience: '4-7 years',
    description: 'Lead product strategy, roadmap planning, and cross-functional team coordination.',
    tags: ['Product Strategy', 'Agile', 'User Research', 'Data Analysis', 'Stakeholder Management']
  },
  {
    id: 6,
    title: 'QA Engineer',
    type: 'Full-time',
    location: 'London / Remote',
    duration: 'Permanent',
    experience: '2-4 years',
    description: 'Ensure quality across our products through comprehensive testing and quality assurance processes.',
    tags: ['Manual Testing', 'Automated Testing', 'Selenium', 'Jest', 'Quality Assurance']
  }
]

const openApplication = (position: Position) => {
  selectedPosition.value = position
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  selectedPosition.value = null
  // Reset form
  application.value = {
    name: '',
    email: '',
    phone: '',
    experience: '',
    coverLetter: '',
    resume: null
  }
}

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    application.value.resume = target.files[0]
  }
}

const submitApplication = () => {
  // Here you would typically send the application to your backend
  console.log('Application submitted:', application.value)
  alert('Thank you for your application! We will get back to you soon.')
  closeModal()
}

// FAQ Data
const faqs = ref([
  {
    question: "What's the typical interview process like?",
    answer: "Our interview process usually consists of 2-3 rounds: an initial screening call with HR, a technical assessment or coding challenge, and a final interview with the team lead and potential colleagues. We aim to complete the entire process within 2 weeks.",
    isOpen: false
  },
  {
    question: "Do you offer remote work options?",
    answer: "Yes! We're a remote-first company and support flexible working arrangements. Most of our team works remotely, with occasional in-person meetings and team building events in London.",
    isOpen: false
  },
  {
    question: "What technologies do you use?",
    answer: "We work with a modern tech stack including Vue.js, React, Node.js, Python, AWS, and more. We're always exploring new technologies and encourage our team to learn and grow.",
    isOpen: false
  },
  {
    question: "What's the company culture like?",
    answer: "We foster a collaborative, innovative environment where every team member's voice matters. We believe in work-life balance, continuous learning, and having fun while building amazing products.",
    isOpen: false
  },
  {
    question: "Do you sponsor work visas?",
    answer: "Yes, we can sponsor work visas for exceptional candidates. We're committed to building a diverse, global team and will work with you to make the relocation process smooth.",
    isOpen: false
  }
])

const toggleFaq = (index: number) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}
</script>

<style scoped>
.careers {
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%);
  color: white;
  padding: 120px 0 80px;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #7b2cff 0%, #a14bff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  color: #d1d5db;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: #7b2cff;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Section Headers */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1f2937;
}

.section-header p {
  font-size: 1.1rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
}

/* Culture Section */
.culture-section {
  padding: 80px 0;
}

.culture-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.culture-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.culture-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.culture-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.culture-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1f2937;
}

.culture-card p {
  color: #6b7280;
  line-height: 1.6;
}

/* Benefits Section */
.benefits-section {
  padding: 80px 0;
  background: white;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.benefit-category {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 1rem;
  border-left: 4px solid #7b2cff;
}

.benefit-category h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1f2937;
}

.benefit-category ul {
  list-style: none;
  padding: 0;
}

.benefit-category li {
  padding: 0.5rem 0;
  color: #6b7280;
  position: relative;
  padding-left: 1.5rem;
}

.benefit-category li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #7b2cff;
  font-weight: bold;
}

/* Positions Section */
.positions-section {
  padding: 80px 0;
  background: #f9fafb;
}

.positions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.position-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.position-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.position-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.position-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.position-type {
  background: #7b2cff;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
}

.position-details {
  margin-bottom: 1rem;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: #6b7280;
  font-size: 0.9rem;
}

.detail-icon {
  font-size: 1rem;
}

.position-description {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.position-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  background: #f3f4f6;
  color: #374151;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
}

.apply-btn {
  background: #7b2cff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
}

.apply-btn:hover {
  background: #6b21a8;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #6b7280;
}

.modal-content h3 {
  margin-bottom: 2rem;
  color: #1f2937;
}

/* Form */
.application-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  color: #374151;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #7b2cff;
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.btn-primary,
.btn-secondary {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  flex: 1;
}

.btn-primary {
  background: #7b2cff;
  color: white;
}

.btn-primary:hover {
  background: #6b21a8;
}

.btn-secondary {
  background: #f3f4f6;
  color: #374151;
}

.btn-secondary:hover {
  background: #e5e7eb;
}

/* Contact Section */
.contact-section {
  padding: 80px 0;
  background: #1f2937;
  color: white;
}

.contact-section .section-header h2,
.contact-section .section-header p {
  color: white;
}

.contact-section .section-header p {
  color: #d1d5db;
}

.contact-content {
  max-width: 1200px;
  margin: 0 auto;
}

/* FAQ Section */
.faq-section {
  margin-bottom: 4rem;
}

.faq-section h3 {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: white;
  text-align: center;
}

.faq-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.75rem;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
}

.faq-item:hover {
  background: rgba(255, 255, 255, 0.08);
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
}

.faq-question h4 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 500;
  color: white;
}

.faq-icon {
  font-size: 0.8rem;
  color: #7b2cff;
  transition: transform 0.3s ease;
}

.faq-icon.rotated {
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: rgba(255, 255, 255, 0.02);
}

.faq-answer.open {
  max-height: 200px;
}

.faq-answer p {
  margin: 0;
  padding: 1.5rem;
  color: #d1d5db;
  line-height: 1.6;
}

/* Contact Methods */
.contact-methods {
  margin-bottom: 4rem;
}

.contact-methods h3 {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: white;
  text-align: center;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.contact-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(123, 44, 255, 0.3);
  transform: translateY(-2px);
}

.contact-icon-wrapper {
  margin-bottom: 1rem;
}

.contact-icon {
  font-size: 2.5rem;
}

.contact-details h4 {
  margin: 0 0 0.5rem 0;
  color: #7b2cff;
  font-size: 1.1rem;
}

.contact-details p {
  margin: 0 0 0.5rem 0;
  color: white;
  font-weight: 500;
}

.response-time {
  display: block;
  font-size: 0.8rem;
  color: #9ca3af;
  margin-bottom: 1rem;
}

.contact-action {
  display: inline-block;
  background: #7b2cff;
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.contact-action:hover {
  background: #6b21a8;
}

/* Additional Info */
.additional-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.info-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 0.75rem;
  padding: 1.5rem;
  border-left: 3px solid #7b2cff;
}

.info-card h4 {
  margin: 0 0 1rem 0;
  color: #7b2cff;
  font-size: 1.1rem;
}

.info-card p {
  margin: 0 0 0.5rem 0;
  color: white;
  line-height: 1.6;
}

.info-note {
  color: #9ca3af !important;
  font-size: 0.9rem;
  font-style: italic;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .hero-stats {
    gap: 2rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .culture-grid,
  .benefits-grid,
  .positions-grid {
    grid-template-columns: 1fr;
  }
  
  .position-header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .form-actions {
    flex-direction: column;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .additional-info {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 100px 0 60px;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .section-header h2 {
    font-size: 1.75rem;
  }
  
  .culture-card,
  .benefit-category,
  .position-card {
    padding: 1.5rem;
  }
  
  .modal-content {
    padding: 1.5rem;
  }
}
</style>
