<template>
  <div class="models-page">
    <section class="hero-section">
      <Container>
        <div class="hero-content">
          <!-- Left Side - Text Content -->
          <div class="hero-text">
            <div class="hero-status">
              <div class="status-indicator"></div>
              <span>Booking open - 2 spots left</span>
            </div>

            <h1 class="hero-title">
              Turn Your Name
              <br />
              Into a <span class="highlight">Brand</span>
            </h1>

            <p class="hero-subtitle">Your website is your runway</p>

            <div class="hero-button">
              <button class="btn btn-primary" @click="navigateToContact">Apply</button>
            </div>
          </div>

          <!-- Right Side - Hero SVG -->
          <div class="hero-visual">
            <img
              src="/holographic runway.png"
              alt="Hero illustration"
              class="hero-svg"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        </Container>
      </section>

      <!-- Portfolio Section -->
      <PortfolioSection />

      <!-- Featured Article Section -->
      <section ref="articleSection" class="featured-article-section white-bg" :class="{ 'animate-in': isArticleVisible }">
        <Container>
          <div class="article-content">
            <!-- Left Side - Article Introduction -->
            <div ref="articleIntro" class="article-intro" :class="{ 'animate-in': isIntroVisible }">
              <h2 class="article-intro-title" :class="{ 'animate-in': isIntroVisible }">How the website gives a model <span class="highlight-text">an image</span>.</h2>
              <p class="article-intro-subtitle" :class="{ 'animate-in': isIntroVisible }">Reviewed article can light up the truth of success in modeling career</p>
              <button class="btn btn-article" :class="{ 'animate-in': isIntroVisible }" @click="navigateToArticle">READ THE ARTICLE</button>
            </div>

            <!-- Right Side - Featured Article Card -->
            <div ref="articleCard" class="featured-article-card" :class="{ 'animate-in': isCardVisible }" @click="navigateToArticle">
              <div ref="articleImage" class="article-image" :class="{ 'animate-in': isCardVisible }">
                <img src="/model-article.jpg" alt="Model Portfolio" class="model-photo" />
              </div>
              
              <div ref="articleContent" class="article-card-content" :class="{ 'animate-in': isCardVisible }">
                <div ref="articleMeta" class="article-meta" :class="{ 'animate-in': isCardVisible }">
                  <div class="article-tags">
                    <span class="tag fashion">Fashion</span>
                    <span class="tag model">Model</span>
                  </div>
                  <div class="article-date">April 25, 2025</div>
                </div>
                
                <h3 ref="articleTitle" class="article-card-title" :class="{ 'animate-in': isCardVisible }">How the website gives a model an image.</h3>
                <p ref="articleExcerpt" class="article-excerpt" :class="{ 'animate-in': isCardVisible }">In today's fashion world, first impressions happen online. A personal website is not just photos - it's the image that defines how agencies and clients see you</p>
                
                <div ref="articleFooter" class="article-card-footer" :class="{ 'animate-in': isCardVisible }">
                  <a href="#" class="read-article-link" @click="navigateToArticle">
                    Read the article
                    <svg class="arrow-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M4.5 3L8.5 6L4.5 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <!-- Be the Top Result Section -->
      <section ref="topResultSection" class="top-result-section white-bg" :class="{ 'animate-in': isTopResultVisible }">
        <Container>
          <div class="top-result-content">
            <!-- Left Side - Google Search Mockup -->
            <div ref="googleMockup" class="google-mockup" :class="{ 'animate-in': isGoogleMockupVisible }">
              <div class="google-container">
                <div class="google-header">
                  <img src="/google.png" alt="Google" class="google-logo" />
                </div>
                <div class="search-bar">
                  <svg class="search-icon" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_75_1983)">
                      <path d="M12.9166 11.8933H12.2583L12.025 11.6683C13.025 10.5016 13.5416 8.90993 13.2583 7.21826C12.8666 4.9016 10.9333 3.0516 8.59997 2.76826C5.07497 2.33493 2.10831 5.3016 2.54164 8.8266C2.82497 11.1599 4.67497 13.0933 6.99164 13.4849C8.68331 13.7683 10.275 13.2516 11.4416 12.2516L11.6666 12.4849V13.1433L15.2083 16.6849C15.55 17.0266 16.1083 17.0266 16.45 16.6849C16.7916 16.3433 16.7916 15.7849 16.45 15.4433L12.9166 11.8933ZM7.91664 11.8933C5.84164 11.8933 4.16664 10.2183 4.16664 8.14326C4.16664 6.06826 5.84164 4.39326 7.91664 4.39326C9.99164 4.39326 11.6666 6.06826 11.6666 8.14326C11.6666 10.2183 9.99164 11.8933 7.91664 11.8933Z" fill="#9AA0A6"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_75_1983">
                        <rect width="20" height="20" fill="white" transform="translate(0 0.226562)"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <span ref="searchQuery" class="search-query" :class="{ 'typing': isSearchQueryTyping }">{{ typedText }}</span>
                  <div class="search-icons">
                    <svg class="mic-icon" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 15.2266C13.66 15.2266 15 13.9166 15 12.2566V5.23656C15 3.57656 13.66 2.22656 12 2.22656C10.34 2.22656 9 3.56656 9 5.23656V12.2566C9 13.9166 10.34 15.2266 12 15.2266Z" fill="#4285F4"/>
                      <path d="M11 18.3066H13V22.2266H11V18.3066Z" fill="#34A853"/>
                      <path d="M7.05 17.0966C5.78 15.7666 5 14.2666 5 12.2266H7C7 13.6766 7.56 14.6466 8.47 15.6066V15.9266L7.32 17.1066L7.05 17.0966Z" fill="#FBBC05"/>
                      <path d="M12 17.1566C11.3422 17.1585 10.6906 17.0225 10.0829 16.7565C9.47521 16.4904 8.92358 16.0995 8.45999 15.6066L7.04999 17.0966C8.30999 18.4366 10.07 19.2266 12 19.2266C15.87 19.2266 18.99 16.3066 18.99 12.2266H17C17 15.1466 14.76 17.1566 12 17.1566Z" fill="#EA4335"/>
                    </svg>
                    <svg class="camera-icon" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_75_1992)">
                        <path d="M12 16.7454C13.933 16.7454 15.5 15.1784 15.5 13.2454C15.5 11.3124 13.933 9.74536 12 9.74536C10.067 9.74536 8.5 11.3124 8.5 13.2454C8.5 15.1784 10.067 16.7454 12 16.7454Z" fill="#4285F4"/>
                        <path d="M20 9.22656V14.2453V17.2266C20 17.4378 19.9575 17.6378 19.8975 17.8291C19.7012 18.4441 19.2188 18.9266 18.6038 19.1228C18.4125 19.1841 18.2125 19.2253 18.0012 19.2253H8.25L10.25 21.2253H16.5H18C18.5525 21.2253 19.0788 21.1128 19.5575 20.9116C20.0363 20.7091 20.4675 20.4166 20.8288 20.0541C21.01 19.8728 21.1737 19.6753 21.3175 19.4616C21.605 19.0366 21.8125 18.5516 21.9188 18.0316C21.9725 17.7716 22 17.5016 22 17.2253V15.7253V12.2453V10.7266L21.25 8.35156L19.8975 8.62406C19.9575 8.81531 20 9.01531 20 9.22656Z" fill="#EA4335"/>
                        <path d="M4 9.22656C4 9.01531 4.0425 8.81531 4.1025 8.62406C4.29875 8.00906 4.78125 7.52656 5.39625 7.33031C5.58875 7.26906 5.78875 7.22656 6 7.22656H18C18.2113 7.22656 18.4113 7.26906 18.6025 7.32906L18.625 5.85156L16.5 5.22656L14.5 3.22656H12.82H12H11.18H9.5L7.5 5.22656H6C3.79125 5.22656 2 7.01781 2 9.22656V10.7266V13.2266L4 15.2266V9.22656Z" fill="#4285F4"/>
                        <path d="M18 5.22656H16.5L18.6038 7.33031C18.7575 7.37906 18.9025 7.44656 19.0375 7.52906C19.3075 7.69406 19.5337 7.92031 19.6987 8.19031C19.7812 8.32531 19.8487 8.47031 19.8975 8.62406L22 10.7266V9.22656C22 7.01781 20.2088 5.22656 18 5.22656Z" fill="#34A853"/>
                        <path d="M6 21.2265H10.9862L8.98625 19.2265H6C4.8975 19.2265 4 18.329 4 17.2265V14.2402L2 12.2402V17.2265C2 19.4352 3.79125 21.2265 6 21.2265Z" fill="#FBBC04"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_75_1992">
                          <rect width="24" height="24" fill="white" transform="translate(0 0.226562)"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div class="search-result-label">Search result</div>
                <div ref="modelProfiles" class="model-profiles" :class="{ 'animate-in': isModelProfilesVisible }">
                  <div class="model-profile active" :class="{ 'fade-in': isModelProfilesVisible }">
                    <img src="/colton.png" alt="Colton Haynes" class="model-photo" />
                    <span class="model-name">Colton Haynes</span>
                  </div>
                  <div class="model-profile blurred" :class="{ 'fade-in': isModelProfilesVisible }">
                    <img src="/chase.png" alt="Chace Crawford" class="model-photo" />
                    <span class="model-name">Chace Crawford</span>
                  </div>
                  <div class="model-profile blurred" :class="{ 'fade-in': isModelProfilesVisible }">
                    <img src="/dean geyers.png" alt="Dean Geyer" class="model-photo" />
                    <span class="model-name">Dean Geyer</span>
                  </div>
                  <div class="model-profile blurred mobile-hidden" :class="{ 'fade-in': isModelProfilesVisible }">
                    <img src="/zac.png" alt="Zac Efron" class="model-photo" />
                    <span class="model-name">Zac Efron</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Side - Content -->
            <div ref="topResultText" class="top-result-text" :class="{ 'animate-in': isTopResultTextVisible }">
              <h2 class="top-result-title" :class="{ 'fade-in': isTopResultTextVisible }">
                Be the <span class="highlight-text">Top Result</span>.
              </h2>
              <p class="top-result-description" :class="{ 'fade-in': isTopResultTextVisible }">
                If we can type 'tall brunette blue eyed male model' in the search and get Colton Haynes
              </p>
              <p class="top-result-description" :class="{ 'fade-in': isTopResultTextVisible }">
                So we can type 'the most attractive person in the world' and we will get <strong>YOU</strong>
              </p>
              <button class="btn btn-primary" :class="{ 'fade-in': isTopResultTextVisible }" @click="navigateToContact">Apply</button>
            </div>
          </div>
        </Container>
      </section>

      <!-- Booking Management Section -->
      <section class="booking-management-section white-bg" ref="bookingManagementSection" :class="{ 'animate-in': isBookingManagementVisible }">
        <Container>
          <div class="booking-content">
            <h2 class="booking-title">
              Manage your
              <br />
              <span class="highlight-text">bookings</span>
            </h2>
            
            <div class="booking-options">
              <div 
                class="booking-option client-option" 
                :class="{ active: selectedView === 'client' }"
                @click="switchView('client')"
              >
                <span class="option-label">Client</span>
              </div>
              <div 
                class="booking-option admin-option" 
                :class="{ active: selectedView === 'admin' }"
                @click="switchView('admin')"
              >
                <span class="option-label">Your side</span>
              </div>
            </div>
          </div>
          
          <!-- Client View -->
          <div v-if="selectedView === 'client'" class="client-banner" ref="clientBookingSection" :class="{ 'animate-in': selectedView === 'client' && !isViewTransitioning, 'transitioning': isViewTransitioning }">
            <!-- Model Profile Section -->
            <div class="client-model-profile">
              <div class="client-model-photo">
                <img src="/model-hero.png" alt="Model Photo" class="client-model-image" />
              </div>
              <h3 class="model-name">Anna M.</h3>
              <div class="model-measurements">
                <div class="measurement-item">
                  <span class="measurement-label">Height:</span>
                  <span class="measurement-value">180 / 5'11"</span>
                </div>
                <div class="measurement-item">
                  <span class="measurement-label">Breast:</span>
                  <span class="measurement-value">80 / 32"</span>
                </div>
                <div class="measurement-item">
                  <span class="measurement-label">Waist:</span>
                  <span class="measurement-value">60 / 24"</span>
                </div>
                <div class="measurement-item">
                  <span class="measurement-label">Hips:</span>
                  <span class="measurement-value">90 / 35"</span>
                </div>
              </div>
              <a href="#" class="profile-link">
                View Full Profile
                <svg class="external-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3.5 3.5L8.5 8.5M8.5 8.5H3.5M8.5 8.5V3.5" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>

            <!-- Booking Calendar Section -->
            <div class="booking-calendar">
              <Transition name="booking-stage" mode="out-in">
                <!-- Calendar Stage -->
                <div v-if="bookingStage === 'calendar'" key="calendar" class="booking-stage">
                  <h3 class="calendar-title">Book a model</h3>
                  
                  <div class="calendar-header">
                    <button class="nav-arrow" @click="navigateMonth('prev')">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M10 12L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                    <div class="month-year-container">
                      <Transition name="month-slide" mode="out-in">
                        <span :key="currentDate.getMonth() + currentDate.getFullYear()" class="month-year">{{ getMonthYear() }}</span>
                      </Transition>
                    </div>
                    <button class="nav-arrow" @click="navigateMonth('next')">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                  </div>

                  <div class="calendar-days">
                    <div class="day-header">SUN</div>
                    <div class="day-header">MON</div>
                    <div class="day-header">TUE</div>
                    <div class="day-header">WED</div>
                    <div class="day-header">THU</div>
                    <div class="day-header">FRI</div>
                    <div class="day-header">SAT</div>
                  </div>

                  <div class="calendar-grid-container">
                    <Transition name="calendar-slide" mode="out-in">
                      <div :key="currentDate.getMonth() + currentDate.getFullYear()" class="calendar-grid">
                        <div 
                          v-for="date in 30" 
                          :key="date"
                          class="calendar-date"
                          :class="{ 
                            selected: selectedDate === date,
                            unavailable: [3, 7, 11, 15, 19, 23, 27].includes(date)
                          }"
                          @click="selectDate(date)"
                        >
                          {{ date }}
                        </div>
                      </div>
                    </Transition>
                  </div>

                  <div class="booking-actions">
                    <button class="btn-cancel" @click="resetBooking">Cancel</button>
                    <button 
                      class="btn-book" 
                      @click="openBookingForm"
                      :disabled="!selectedDate"
                    >
                      Book Now
                    </button>
                  </div>
                </div>

                <!-- Booking Form Stage -->
                <div v-else-if="bookingStage === 'form'" key="form" class="booking-stage">
                  <h3 class="calendar-title">Booking Details</h3>
                  
                  <div class="selected-date-card">
                    <div class="selected-date-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#7f00fd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.695 13.7H15.704M15.695 16.7H15.704M11.995 13.7H12.005M11.995 16.7H12.005M8.294 13.7H8.304M8.294 16.7H8.304" stroke="#7f00fd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div class="selected-date-content">
                      <div class="selected-date-label">Selected Date</div>
                      <div class="selected-date-value">{{ getMonthYear() }} {{ selectedDate }}</div>
                    </div>
                  </div>
                  
                  <div class="booking-form">
                    <div class="form-group">
                      <label for="name">Full name</label>
                      <input 
                        type="text" 
                        id="name" 
                        v-model="bookingForm.name" 
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div class="form-group">
                      <label for="organisation">Organisation or freelance</label>
                      <input 
                        type="text" 
                        id="organisation" 
                        v-model="bookingForm.organisation" 
                        placeholder="Enter your organisation or freelance"
                        required
                      />
                    </div>
                    
                    <div class="form-group">
                      <label for="price">Price</label>
                      <div class="price-input-wrapper">
                        <span class="currency-symbol">$</span>
                        <input 
                          type="number" 
                          id="price" 
                          v-model="bookingForm.price" 
                          placeholder="0"
                          min="0"
                          step="0.01"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div class="booking-actions">
                    <button class="btn-cancel" @click="resetBooking">Back</button>
                    <button 
                      class="btn-book" 
                      @click="submitBooking"
                      :disabled="!bookingForm.name || !bookingForm.organisation || !bookingForm.price"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </div>

                <!-- Success Stage -->
                <div v-else-if="bookingStage === 'success'" key="success" class="booking-stage">
                  <div class="success-content">
                    <div class="success-icon">
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#22FCB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <h3 class="success-title">Booked Successfully!</h3>
                    <p class="success-message">
                      Your booking for {{ getMonthYear() }} {{ selectedDate }} has been confirmed.
                      We'll send you a confirmation email shortly.
                    </p>
                    <button class="btn-book" @click="resetBooking">
                      Book Another Date
                    </button>
                  </div>
                </div>
              </Transition>
            </div>
          </div>

          <!-- Admin/Your Side View -->
          <div v-if="selectedView === 'admin'" class="admin-banner" ref="adminBookingSection" :class="{ 'animate-in': selectedView === 'admin' && !isViewTransitioning, 'transitioning': isViewTransitioning }">
            <!-- Bookings Management Section -->
            <div class="recent-bookings">
              <div class="bookings-header">
                <h3 class="bookings-title">Upcoming Bookings</h3>
                <div class="view-toggle">
                  <button class="toggle-btn" :class="{ active: currentView === 'list' }" @click="switchBookingView('list')">List</button>
                  <button class="toggle-btn" :class="{ active: currentView === 'calendar' }" @click="switchBookingView('calendar')">Calendar</button>
                </div>
              </div>
              
              <!-- List View -->
              <div v-if="currentView === 'list'" class="bookings-list">
                <div v-for="booking in bookings" :key="booking.id" class="booking-item">
                  <div class="booking-main">
                    <div class="booking-info">
                      <div class="booking-client">{{ booking.client }}</div>
                      <div class="booking-details">
                        <span class="booking-date">{{ booking.date }}</span>
                        <span class="booking-time">{{ booking.time }}</span>
                        <span class="booking-location">{{ booking.location }} <a href="#" class="maps-link">[On Maps]</a></span>
                      </div>
                    </div>
                    <div class="booking-actions">
                      <button v-if="booking.status === 'confirmed'" class="action-btn chat" title="Chat">💬</button>
                      <button v-if="booking.status === 'pending'" class="action-btn confirm" @click="confirmBooking(booking.id)" title="Confirm">✓</button>
                      <button class="action-btn cancel" @click="cancelBooking(booking.id)" :disabled="booking.status === 'cancelled'" :title="booking.status === 'confirmed' ? 'Cancel' : booking.status === 'pending' ? 'Cancel' : 'Already Cancelled'">×</button>
                    </div>
                  </div>
                  <div class="booking-status" :class="booking.status">
                    <span class="status-dot"></span>
                    {{ booking.status === 'confirmed' ? 'Confirmed' : booking.status === 'pending' ? 'Pending Approval' : 'Cancelled' }}
                  </div>
                </div>
              </div>

              <!-- Calendar View -->
              <div v-if="currentView === 'calendar'" class="calendar-view">
                <div class="calendar-header">
                  <button class="calendar-nav-btn" @click="previousMonth">←</button>
                  <h3 class="calendar-month">{{ currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) }}</h3>
                  <button class="calendar-nav-btn" @click="nextMonth">→</button>
                </div>
                
                <div class="calendar-grid">
                  <div class="calendar-day-header" v-for="day in ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']" :key="day">
                    {{ day }}
                  </div>
                  
                  <div 
                    v-for="day in getCalendarDays()" 
                    :key="day.toISOString()" 
                    class="calendar-day"
                    :class="{ 
                      'other-month': !isCurrentMonth(day),
                      'today': isToday(day),
                      'has-confirmed': getBookingsForDate(day).some(booking => booking.status === 'confirmed'),
                      'has-pending': getBookingsForDate(day).some(booking => booking.status === 'pending'),
                      'has-cancelled': getBookingsForDate(day).some(booking => booking.status === 'cancelled')
                    }"
                  >
                    <div class="day-number">{{ day.getDate() }}</div>
                    <div class="day-bookings">
                      <div 
                        v-for="booking in getBookingsForDate(day)" 
                        :key="booking.id"
                        class="booking-dot"
                        :class="booking.status"
                        :title="`${booking.client} - ${booking.time}`"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Pagination (only for list view) -->
              <div v-if="currentView === 'list'" class="pagination">
                <button class="page-btn" @click="goToPreviousPage" :disabled="currentPage === 1">← Previous</button>
                <span class="page-info">Page {{ currentPage }} of {{ totalPages }}</span>
                <button class="page-btn" @click="goToNextPage" :disabled="currentPage === totalPages">Next →</button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  </template>

<script setup lang="ts">
import { onMounted, ref, nextTick, computed } from 'vue'
import { useRouter } from 'vue-router'
import Container from '../components/Container.vue'
import PortfolioSection from '../components/PortfolioSection.vue'
import { performanceMonitor } from '@/utils/performance'

const router = useRouter()
const componentStartTime = performance.now()

// Booking view state
const selectedView = ref<'client' | 'admin'>('client')

// Calendar state
const currentDate = ref(new Date())
const selectedDate = ref<number | null>(25)
const bookingStage = ref<'calendar' | 'form' | 'success'>('calendar')

// Booking form state
const bookingForm = ref({
  name: '',
  organisation: '',
  price: ''
})

// Animation refs
const articleSection = ref<HTMLElement>()
const articleIntro = ref<HTMLElement>()
const articleCard = ref<HTMLElement>()
const articleImage = ref<HTMLElement>()
const articleContent = ref<HTMLElement>()
const articleMeta = ref<HTMLElement>()
const articleTitle = ref<HTMLElement>()
const articleExcerpt = ref<HTMLElement>()
const articleFooter = ref<HTMLElement>()

// Top Result section refs
const topResultSection = ref<HTMLElement>()
const googleMockup = ref<HTMLElement>()
const searchQuery = ref<HTMLElement>()
const modelProfiles = ref<HTMLElement>()
const topResultText = ref<HTMLElement>()

// Animation state
const isArticleVisible = ref(false)
const isIntroVisible = ref(false)
const isCardVisible = ref(false)

// Top Result animation state
const isTopResultVisible = ref(false)
const isGoogleMockupVisible = ref(false)
const isSearchQueryTyping = ref(false)
const isModelProfilesVisible = ref(false)
const isTopResultTextVisible = ref(false)
const typedText = ref('')

// Booking management section animation refs
const bookingManagementSection = ref<HTMLElement | null>(null)
const isBookingManagementVisible = ref(false)

// Admin booking section animation refs
const adminBookingSection = ref<HTMLElement | null>(null)
const isAdminBookingVisible = ref(false)

// Switch animation state
const isViewTransitioning = ref(false)


// Booking management state
const currentPage = ref(1)
const totalPages = ref(3)
const currentView = ref('list') // 'list' or 'calendar'
const currentMonth = ref(new Date())
const bookings = ref([
  // Page 1 bookings
  {
    id: 1,
    client: 'Fashion Studio NYC',
    date: 'Apr 25, 2025',
    time: '10:00 AM - 2:00 PM',
    location: '📍 Manhattan Studio',
    status: 'confirmed'
  },
  {
    id: 2,
    client: 'Commercial Photoshoot',
    date: 'Apr 28, 2025',
    time: '9:00 AM - 5:00 PM',
    location: '📍 Brooklyn Warehouse',
    status: 'pending'
  },
  {
    id: 3,
    client: 'Editorial Magazine',
    date: 'May 2, 2025',
    time: '11:00 AM - 3:00 PM',
    location: '📍 Chelsea Gallery',
    status: 'confirmed'
  },
  {
    id: 4,
    client: 'Brand Campaign',
    date: 'May 5, 2025',
    time: '8:00 AM - 6:00 PM',
    location: '📍 SoHo Studio',
    status: 'pending'
  }
])

// All bookings data for pagination
const allBookings = ref([
  // Page 1
  { id: 1, client: 'Fashion Studio NYC', date: 'Apr 25, 2025', time: '10:00 AM - 2:00 PM', location: '📍 Manhattan Studio', status: 'confirmed' },
  { id: 2, client: 'Commercial Photoshoot', date: 'Apr 28, 2025', time: '9:00 AM - 5:00 PM', location: '📍 Brooklyn Warehouse', status: 'pending' },
  { id: 3, client: 'Editorial Magazine', date: 'May 2, 2025', time: '11:00 AM - 3:00 PM', location: '📍 Chelsea Gallery', status: 'confirmed' },
  { id: 4, client: 'Brand Campaign', date: 'May 5, 2025', time: '8:00 AM - 6:00 PM', location: '📍 SoHo Studio', status: 'pending' },
  // Page 2
  { id: 5, client: 'Wedding Photography', date: 'May 8, 2025', time: '2:00 PM - 6:00 PM', location: '📍 Central Park', status: 'confirmed' },
  { id: 6, client: 'Product Launch', date: 'May 12, 2025', time: '9:00 AM - 1:00 PM', location: '📍 Times Square', status: 'pending' },
  { id: 7, client: 'Fashion Week', date: 'May 15, 2025', time: '7:00 PM - 11:00 PM', location: '📍 Lincoln Center', status: 'confirmed' },
  { id: 8, client: 'Corporate Event', date: 'May 18, 2025', time: '6:00 PM - 10:00 PM', location: '📍 Grand Central', status: 'pending' },
  // Page 3
  { id: 9, client: 'Music Video', date: 'May 22, 2025', time: '12:00 PM - 8:00 PM', location: '📍 Brooklyn Bridge', status: 'confirmed' },
  { id: 10, client: 'Art Exhibition', date: 'May 25, 2025', time: '3:00 PM - 7:00 PM', location: '📍 MoMA', status: 'pending' },
  { id: 11, client: 'Charity Gala', date: 'May 28, 2025', time: '7:00 PM - 12:00 AM', location: '📍 Plaza Hotel', status: 'confirmed' },
  { id: 12, client: 'Tech Conference', date: 'May 30, 2025', time: '8:00 AM - 5:00 PM', location: '📍 Javits Center', status: 'pending' }
])

const bookingsPerPage = 4


// Booking management functions
const confirmBooking = (bookingId: number) => {
  const booking = allBookings.value.find(b => b.id === bookingId)
  if (booking) {
    booking.status = 'confirmed'
    updateCurrentPageBookings()
  }
}

const cancelBooking = (bookingId: number) => {
  const booking = allBookings.value.find(b => b.id === bookingId)
  if (booking) {
    booking.status = 'cancelled'
    updateCurrentPageBookings()
  }
}

const updateCurrentPageBookings = () => {
  const startIndex = (currentPage.value - 1) * bookingsPerPage
  const endIndex = startIndex + bookingsPerPage
  bookings.value = allBookings.value.slice(startIndex, endIndex)
}

const goToPreviousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
    updateCurrentPageBookings()
  }
}

const goToNextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
    updateCurrentPageBookings()
  }
}

// Calendar functions
const switchBookingView = (view: string) => {
  currentView.value = view
  // When switching to calendar view, set to April 2025
  if (view === 'calendar') {
    currentMonth.value = new Date(2025, 3) // April is month 3 (0-indexed)
  }
}

const getCalendarDays = () => {
  const year = currentMonth.value.getFullYear()
  const month = currentMonth.value.getMonth()
  
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const startDate = new Date(firstDay)
  startDate.setDate(startDate.getDate() - firstDay.getDay())
  
  const days = []
  const currentDate = new Date(startDate)
  
  for (let i = 0; i < 42; i++) {
    days.push(new Date(currentDate))
    currentDate.setDate(currentDate.getDate() + 1)
  }
  
  return days
}

const getBookingsForDate = (date: Date) => {
  const dateStr = date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  })
  
  return allBookings.value.filter(booking => {
    const bookingDate = new Date(booking.date)
    return bookingDate.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    }) === dateStr
  })
}

const isToday = (date: Date) => {
  const today = new Date()
  return date.toDateString() === today.toDateString()
}

const isCurrentMonth = (date: Date) => {
  return date.getMonth() === currentMonth.value.getMonth()
}

const previousMonth = () => {
  currentMonth.value = new Date(currentMonth.value.getFullYear(), currentMonth.value.getMonth() - 1)
}

const nextMonth = () => {
  currentMonth.value = new Date(currentMonth.value.getFullYear(), currentMonth.value.getMonth() + 1)
}

const navigateToContact = () => {
  router.push('/apply-model')
}

const navigateToArticle = () => {
  // Navigate to article or open modal
  window.open('https://example.com/article', '_blank')
}

const switchView = (view: 'client' | 'admin') => {
  if (selectedView.value === view || isViewTransitioning.value) return
  
  isViewTransitioning.value = true
  
  // Fade out current view
  setTimeout(() => {
    selectedView.value = view
    
    // Fade in new view
    setTimeout(() => {
      isViewTransitioning.value = false
    }, 100) // Small delay to ensure smooth transition
  }, 200) // Half of the CSS transition duration
}

// Calendar functions
const navigateMonth = (direction: 'prev' | 'next') => {
  const newDate = new Date(currentDate.value)
  if (direction === 'prev') {
    newDate.setMonth(newDate.getMonth() - 1)
  } else {
    newDate.setMonth(newDate.getMonth() + 1)
  }
  currentDate.value = newDate
}

const selectDate = (date: number) => {
  selectedDate.value = date
}

const getMonthYear = () => {
  return currentDate.value.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

// Booking functions
const openBookingForm = () => {
  bookingStage.value = 'form'
}

const submitBooking = () => {
  // Simulate booking submission
  setTimeout(() => {
    bookingStage.value = 'success'
  }, 1000)
}

const resetBooking = () => {
  bookingStage.value = 'calendar'
  selectedDate.value = null
  bookingForm.value = { name: '', organisation: '', price: '' }
}

// Typing animation function
const typeText = (text: string, callback?: () => void) => {
  typedText.value = ''
  let index = 0
  
  const typeInterval = setInterval(() => {
    if (index < text.length) {
      typedText.value += text[index]
      index++
    } else {
      clearInterval(typeInterval)
      if (callback) callback()
    }
  }, 50) // 50ms per character
}

// Intersection Observer for animations
const setupIntersectionObserver = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement
          
          if (target === articleSection.value) {
            isArticleVisible.value = true
            // Trigger intro animation after a short delay
            setTimeout(() => {
              isIntroVisible.value = true
            }, 200)
            // Trigger card animation after intro
            setTimeout(() => {
              isCardVisible.value = true
            }, 600)
          }
          
          if (target === topResultSection.value) {
            isTopResultVisible.value = true
            // Trigger Google mockup animation
            setTimeout(() => {
              isGoogleMockupVisible.value = true
            }, 200)
            // Start typing animation after mockup appears
            setTimeout(() => {
              isSearchQueryTyping.value = true
              typeText('tall brunette blue eyed male model', () => {
                // Show model profiles after typing completes
                setTimeout(() => {
                  isModelProfilesVisible.value = true
                }, 500)
              })
            }, 800)
            // Show right side text
            setTimeout(() => {
              isTopResultTextVisible.value = true
            }, 1000)
          }
          
          
          if (target === adminBookingSection.value) {
            isAdminBookingVisible.value = true
          }
          
          if (target === bookingManagementSection.value) {
            isBookingManagementVisible.value = true
          }
        }
      })
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  if (articleSection.value) {
    observer.observe(articleSection.value)
  }
  
  if (topResultSection.value) {
    observer.observe(topResultSection.value)
  }
  
  
  if (adminBookingSection.value) {
    observer.observe(adminBookingSection.value)
  }
  
  if (bookingManagementSection.value) {
    observer.observe(bookingManagementSection.value)
  }

  return observer
}

onMounted(() => {
  // Track component render time
  performanceMonitor.trackComponentRender('ModelsView', componentStartTime)
  
  // Setup intersection observer after DOM is ready
  nextTick(() => {
    setupIntersectionObserver()
    updateCurrentPageBookings()
  })
})
</script>

<style scoped>
.models-page {
  min-height: 100vh;
  font-family: 'Open Sans', sans-serif;
}

.hero-section {
  background: var(--gradient-secondary);
  display: flex;
  align-items: center;
  position: relative;
  padding: 120px 0 300px;
  overflow: hidden;
  z-index: 0;
}

.hero-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 80px;
  align-items: center;
}

.hero-text {
  max-width: 900px;
  z-index: 20;
}

.hero-status {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 30px;
  padding: 8px 16px;
  background: rgba(34, 252, 176, 0.1);
  border: 1px solid rgba(34, 252, 176, 0.2);
  border-radius: 20px;
  color: #22FCB0;
  font-size: 0.85rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.hero-status:hover {
  background: rgba(34, 252, 176, 0.15);
  border-color: rgba(34, 252, 176, 0.3);
  transform: translateY(-1px);
}

.status-indicator {
  width: 8px;
  height: 8px;
  background: #22FCB0;
  border-radius: 50%;
  flex-shrink: 0;
  animation: pulse 2s infinite;
  box-shadow: 0 0 8px rgba(34, 252, 176, 0.6);
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-title {
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1.1;
  color: var(--color-text-primary);
  margin-bottom: 20px;
  position: relative;
  animation: fadeInUp 1s ease-out 0.3s both;
  overflow: visible;
  padding: 10px 0;
}

.highlight {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
  font-style: italic;
  overflow: visible;
  padding: 5px 8px;
  margin: -5px -8px;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--gradient-primary);
  border-radius: 2px;
  opacity: 0.3;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: var(--color-text-muted);
  margin-bottom: 40px;
  font-weight: 400;
  opacity: 0.8;
  position: relative;
  animation: fadeInUp 1s ease-out 0.6s both;
  font-style: italic;
}

.hero-button {
  display: flex;
  gap: 20px;
  animation: fadeInUp 1s ease-out 0.9s both;
}

.btn {
  padding: 18px 36px;
  border-radius: 8px;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.btn-primary {
  background: var(--gradient-primary);
  color: var(--color-text-primary);
  box-shadow: 0 4px 20px rgba(127, 0, 253, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(127, 0, 253, 0.4);
}

/* Right Side - Hero SVG */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.hero-visual::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120%;
  height: 120%;
  background: radial-gradient(ellipse at center, 
    rgba(59, 130, 246, 0.3) 0%,
    rgba(147, 197, 253, 0.2) 30%,
    rgba(59, 130, 246, 0.15) 50%,
    rgba(147, 197, 253, 0.1) 70%,
    transparent 100%);
  transform: translate(-35%, -35%);
  border-radius: 50%;
  z-index: 1;
  animation: lightning-pulse 3s ease-in-out infinite alternate;
  filter: blur(20px);
}

@keyframes lightning-pulse {
  0% {
    opacity: 0.4;
    transform: translate(-35%, -35%) scale(0.9);
  }
  50% {
    opacity: 0.7;
    transform: translate(-35%, -35%) scale(1.1);
  }
  100% {
    opacity: 0.5;
    transform: translate(-35%, -35%) scale(1.0);
  }
}

.hero-svg {
  width: 100%;
  max-width: 600px;
  height: auto;
  object-fit: contain;
  transform: scale(2.6) translateX(20px) translateY(30px);
  transition: transform 0.3s ease;
  mix-blend-mode: color-dodge;
  position: relative;
  z-index: 2;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-content {
    gap: 60px;
  }

  .hero-title {
    font-size: 3rem;
  }

  .hero-svg {
    max-width: 500px;
    transform: scale(2.6) translateX(20px) translateY(30px);
    mix-blend-mode: color-dodge;
    position: relative;
    z-index: 2;
  }
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
    justify-items: center;
  }

  .hero-text {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-status {
    font-size: 0.8rem;
    padding: 7px 14px;
  }

  .hero-button {
    justify-content: center;
    align-self: center;
  }

  .hero-visual {
    display: none;
  }

  .hero-visual::before {
    display: none;
  }

  .hero-section {
    padding: 100px 0 200px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    text-align: center;
    font-size: 1.85rem;
  }

  .hero-subtitle {
    text-align: center;
    font-size: 1rem;
  }

  .hero-status {
    text-align: center;
    font-size: 0.75rem;
    padding: 6px 12px;
  }

  .btn {
    padding: 14px 24px;
    font-size: 0.9rem;
  }

  .hero-button {
    flex-direction: column;
    align-items: center;
  }
}


/* Featured Article Section */
.featured-article-section {
  padding: 0 0 120px 0;
  background: linear-gradient(90deg, #FFFFFF 0%, #E6D1FF 100%);
  min-height: 80vh;
  display: flex;
  align-items: center;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.featured-article-section.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.featured-article-section.white-bg {
  background: var(--color-white);
}

.article-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

/* Left Side - Article Introduction */
.article-intro {
  padding-right: 40px;
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.article-intro.animate-in {
  opacity: 1;
  transform: translateX(0);
}

.article-intro-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--color-black);
  margin-bottom: 24px;
  line-height: 1.1;
  overflow: visible;
  padding: 10px 0;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0.2s;
}

.article-intro-title.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.article-intro-subtitle {
  font-size: 1.2rem;
  color: var(--color-dark-gray);
  margin-bottom: 40px;
  line-height: 1.6;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0.4s;
}

.article-intro-subtitle.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.btn-article {
  background: var(--gradient-primary);
  color: var(--color-text-primary);
  padding: 18px 36px;
  border-radius: 8px;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 4px 20px rgba(127, 0, 253, 0.3);
}

.btn-article:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(127, 0, 253, 0.4);
}

/* Right Side - Featured Article Card */
.featured-article-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  max-width: 600px;
  margin: 0 auto;
  cursor: pointer;
  transition: all 0.3s ease;
}

.featured-article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.article-image {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.model-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.highlight-text {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  font-style: italic;
  overflow: visible;
  padding: 5px 8px;
  margin: -5px -8px;
}

.article-card-content {
  padding: 30px;
  background: linear-gradient(135deg, #E8F4FD 0%, #F0F8FF 100%);
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.article-tags {
  display: flex;
  gap: 8px;
}

.tag {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: rgba(128, 128, 128, 0.2);
  color: var(--color-dark-gray);
}

.article-date {
  font-size: 0.85rem;
  color: var(--color-dark-gray);
  font-weight: 600;
  opacity: 0.8;
  letter-spacing: 0.5px;
}

.article-card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-black);
  margin-bottom: 16px;
  line-height: 1.3;
}

.article-excerpt {
  font-size: 1rem;
  color: var(--color-dark-gray);
  line-height: 1.6;
  margin: 0 0 20px 0;
}

.article-card-footer {
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.read-article-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #7f00fd;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
}

.read-article-link:hover {
  color: #6b00d1;
  transform: translateX(2px);
}

.arrow-icon {
  transition: transform 0.3s ease;
}

.read-article-link:hover .arrow-icon {
  transform: translateX(2px);
}

/* Responsive Design for Article Section */
@media (max-width: 1024px) {
  .article-content {
    gap: 60px;
  }

  .article-intro-title {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .article-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .article-intro {
    padding-right: 0;
    text-align: center;
  }

  .article-intro-title {
    font-size: 2.5rem;
    text-align: center;
  }

  .article-intro-subtitle {
    text-align: center;
  }

  .featured-article-card {
    max-width: 100%;
    text-align: left;
  }

  .article-card-content {
    text-align: left;
  }
}

@media (max-width: 480px) {
  .featured-article-section {
    padding: 0 0 80px 0;
  }

  .article-intro {
    text-align: center;
  }

  .article-intro-title {
    font-size: 2rem;
    text-align: center;
  }

  .article-intro-subtitle {
    font-size: 1rem;
    text-align: center;
  }

  .featured-article-card {
    text-align: left;
  }

  .btn-article {
    padding: 14px 24px;
    font-size: 0.9rem;
  }

  .article-card-content {
    padding: 20px;
    text-align: left;
  }

  .article-card-title {
    font-size: 1.3rem;
  }

  .article-excerpt {
    font-size: 0.9rem;
  }

  .article-date {
    font-size: 0.75rem;
    text-align: right;
  }
}

/* Be the Top Result Section */
.top-result-section {
  padding: 120px 0;
  background: #fafafa;
  min-height: 80vh;
  display: flex;
  align-items: center;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-x: hidden;
  width: 100%;
}

.top-result-section.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.top-result-section.white-bg {
  background: #ffffff;
}

.top-result-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: center;
}

/* Google Mockup */
.google-mockup {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.google-mockup.animate-in {
  opacity: 1;
  transform: translateX(0);
}

.google-container {
  background: #e8f4f8;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  overflow: hidden;
}

.google-header {
  margin-bottom: 20px;
  text-align: center;
}

.google-logo {
  height: 60px;
  width: auto;
}

.search-bar {
  background: #ffffff;
  border: 1px solid #dadce0;
  border-radius: 24px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.search-icon {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
}

.search-query {
  flex: 1;
  font-size: 0.9rem;
  color: #3c4043;
  font-family: 'Roboto', sans-serif;
  min-height: 1.2em;
}

.search-query.typing::after {
  content: '|';
  animation: blink 1s infinite;
  color: #3c4043;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.search-icons {
  display: flex;
  gap: 8px;
  align-items: center;
}

.mic-icon,
.camera-icon {
  flex-shrink: 0;
  cursor: pointer;
  transition: opacity 0.2s ease;
  width: 20px;
  height: 20px;
}

.mic-icon:hover,
.camera-icon:hover {
  opacity: 0.7;
}

.search-result-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #3c4043;
  margin-bottom: 16px;
  font-family: 'Roboto', sans-serif;
}

.google-container .model-profiles {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.google-container .model-profiles.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.google-container .model-profile {
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease;
  opacity: 0;
  transform: scale(0.8);
  animation: fadeInScale 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.google-container .model-profile.fade-in:nth-child(1) { animation-delay: 0.1s; }
.google-container .model-profile.fade-in:nth-child(2) { animation-delay: 0.2s; }
.google-container .model-profile.fade-in:nth-child(3) { animation-delay: 0.3s; }
.google-container .model-profile.fade-in:nth-child(4) { animation-delay: 0.4s; }

@keyframes fadeInScale {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.google-container .model-profile:hover {
  transform: translateY(-2px);
}

.google-container .model-profile.active .model-photo {
  border: 2px solid #4285f4;
  box-shadow: 0 4px 12px rgba(66, 133, 244, 0.3);
}

.google-container .model-profile.blurred .model-photo {
  filter: blur(0.5px);
  opacity: 0.9;
}

.google-container .model-profile.blurred .model-name {
  opacity: 0.8;
}

.google-container .model-photo {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 8px;
  border: 2px solid transparent;
  transition: all 0.2s ease;
}

.google-container .model-photo.placeholder {
  background: #4285f4;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 600;
}

.google-container .model-name {
  font-size: 0.85rem;
  color: #3c4043;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  line-height: 1.2;
}

/* Top Result Text */
.top-result-text {
  padding-left: 80px;
  padding-right: 40px;
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  max-width: 100%;
  box-sizing: border-box;
}

.top-result-text.animate-in {
  opacity: 1;
  transform: translateX(0);
}

.top-result-title {
  font-size: 4rem;
  font-weight: 700;
  color: var(--color-black);
  margin-bottom: 32px;
  line-height: 1.1;
  font-family: 'Open Sans', sans-serif;
  overflow: visible;
  padding: 10px 0;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.top-result-title.fade-in {
  animation-delay: 0.2s;
}

.top-result-description {
  font-size: 1.2rem;
  color: var(--color-dark-gray);
  margin-bottom: 20px;
  line-height: 1.6;
  font-family: 'Open Sans', sans-serif;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.top-result-description.fade-in:nth-of-type(1) {
  animation-delay: 0.4s;
}

.top-result-description.fade-in:nth-of-type(2) {
  animation-delay: 0.6s;
}

.top-result-description strong {
  color: #7f00fd;
  font-weight: 700;
}

/* Button animation for top result section */
.top-result-text .btn-primary {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.top-result-text .btn-primary.fade-in {
  animation-delay: 0.8s;
}

/* Responsive Design for Top Result Section */
@media (max-width: 1200px) {
  .top-result-content {
    gap: 30px;
  }

  .top-result-text {
    padding-left: 40px;
    padding-right: 20px;
  }
}

@media (max-width: 1024px) {
  .top-result-content {
    gap: 20px;
  }

  .top-result-title {
    font-size: 3.5rem;
  }

  .top-result-text {
    padding-left: 30px;
    padding-right: 15px;
  }

  .google-container {
    max-width: 450px;
    padding: 28px;
  }

  .google-logo {
    height: 50px;
  }
}

@media (max-width: 768px) {
  .top-result-section {
    padding: 80px 0;
  }

  .top-result-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .top-result-content > *:first-child {
    order: 2;
  }

  .top-result-content > *:last-child {
    order: 1;
  }

  .top-result-text {
    padding-left: 0;
    padding-right: 0;
    text-align: center;
  }

  .top-result-title {
    font-size: 3rem;
    text-align: center;
  }

  .top-result-description {
    text-align: center;
    font-size: 1.1rem;
  }

  .top-result-text .btn {
    display: none;
  }

  .google-container {
    max-width: 100%;
    padding: 20px;
    overflow: hidden;
    box-sizing: border-box;
  }

  .google-logo {
    height: 40px;
  }

  .search-bar {
    padding: 8px 10px;
    font-size: 0.8rem;
  }

  .search-query {
    font-size: 0.8rem;
  }

  .search-icon {
    width: 16px;
    height: 16px;
  }
  
  .mic-icon,
  .camera-icon {
    width: 16px;
    height: 16px;
  }

  .google-container .model-profiles {
    display: flex;
    gap: 8px;
    overflow-x: hidden;
    justify-content: flex-start;
    max-width: 100%;
    box-sizing: border-box;
  }

  .google-container .model-profile {
    flex: 1;
    min-width: 0;
    box-sizing: border-box;
  }

  .google-container .model-photo {
    width: 100%;
    height: 80px;
  }

  .google-container .model-name {
    font-size: 0.7rem;
  }

  .google-container .model-profile.mobile-hidden {
    display: none;
  }
}

@media (max-width: 480px) {
  .top-result-section {
    padding: 60px 0;
  }

  .top-result-title {
    font-size: 2.5rem;
  }

  .top-result-description {
    font-size: 1rem;
  }

  .google-container {
    padding: 16px;
    overflow: hidden;
    box-sizing: border-box;
    max-width: 100%;
  }

  .google-logo {
    height: 35px;
  }

  .search-bar {
    padding: 6px 8px;
    font-size: 0.7rem;
  }

  .search-query {
    font-size: 0.7rem;
  }

  .search-icon {
    width: 14px;
    height: 14px;
  }
  
  .mic-icon,
  .camera-icon {
    width: 14px;
    height: 14px;
  }

  .google-container .model-profiles {
    display: flex;
    gap: 6px;
    overflow-x: hidden;
    justify-content: flex-start;
    max-width: 100%;
    box-sizing: border-box;
  }

  .google-container .model-profile {
    flex: 1;
    min-width: 0;
    box-sizing: border-box;
  }

  .google-container .model-photo {
    width: 100%;
    height: 70px;
  }

  .google-container .model-name {
    font-size: 0.65rem;
  }

  .google-container .model-profile.mobile-hidden {
    display: none;
  }
}

@media (max-width: 360px) {
  .top-result-section {
    padding: 40px 0;
  }

  .top-result-title {
    font-size: 2rem;
  }

  .top-result-description {
    font-size: 0.9rem;
  }

  .google-container {
    padding: 12px;
    overflow: hidden;
    box-sizing: border-box;
    max-width: 100%;
  }

  .google-logo {
    height: 30px;
  }

  .search-bar {
    padding: 4px 6px;
    font-size: 0.6rem;
  }

  .search-query {
    font-size: 0.6rem;
  }

  .search-icon {
    width: 12px;
    height: 12px;
  }
  
  .mic-icon,
  .camera-icon {
    width: 12px;
    height: 12px;
  }

  .google-container .model-profiles {
    display: flex;
    gap: 4px;
    overflow-x: hidden;
    justify-content: flex-start;
    max-width: 100%;
    box-sizing: border-box;
  }

  .google-container .model-profile {
    flex: 1;
    min-width: 0;
    box-sizing: border-box;
  }

  .google-container .model-photo {
    width: 100%;
    height: 60px;
  }

  .google-container .model-name {
    font-size: 0.6rem;
  }

  .google-container .model-profile.mobile-hidden {
    display: none;
  }
}

/* Booking Management Section */
.booking-management-section {
  padding: 120px 0;
  background: #fafafa;
  min-height: 100vh;
  display: flex;
  align-items: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.booking-management-section.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.booking-management-section.white-bg {
  background: var(--color-white);
}

.booking-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 80px auto;
}

.booking-title {
  font-size: 4rem;
  font-weight: 700;
  color: var(--color-black);
  margin-bottom: 60px;
  line-height: 1.1;
  font-family: 'Open Sans', sans-serif;
  overflow: visible;
  padding: 10px 0;
}

.booking-options {
  display: flex;
  justify-content: center;
  gap: 40px;
  align-items: center;
}

.booking-option {
  padding: 16px 32px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  background: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease;
}

.booking-option:hover {
  border-color: #d1d5db;
  background: #f9fafb;
}

.booking-option.active {
  background: #ffffff;
  border-color: #6b7280;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.booking-option.active .option-label {
  color: #374151;
  font-weight: 700;
}

.option-label {
  font-size: 1rem;
  font-weight: 500;
  color: #6b7280;
  letter-spacing: 0.025em;
}

/* Responsive Design for Booking Management */
@media (max-width: 768px) {
  .booking-management-section {
    padding: 80px 0;
  }

  .booking-content {
    margin-bottom: 60px;
  }

  .booking-title {
    font-size: 2.5rem;
    margin-bottom: 40px;
  }

  .booking-options {
    flex-direction: column;
    gap: 20px;
  }

  .booking-option {
    width: 100%;
    max-width: 300px;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .booking-content {
    margin-bottom: 40px;
  }

  .booking-title {
    font-size: 2rem;
  }

  .option-label {
    font-size: 0.9rem;
  }

  .booking-option {
    padding: 14px 24px;
  }
}

/* Client Banner - now part of booking management section */

.client-banner {
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 500px;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.client-banner.transitioning {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.2s ease-out;
}

.client-banner.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Client Model Profile Section */
.client-model-profile {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
}

.client-model-photo {
  width: 160px;
  height: 160px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 24px;
  background: linear-gradient(135deg, #22FCB0 0%, #00D4AA 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.client-model-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
}

.model-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 24px;
  font-family: 'Open Sans', sans-serif;
}

.model-measurements {
  width: 100%;
  margin-bottom: 32px;
}

.measurement-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid rgba(45, 55, 72, 0.1);
}

.measurement-item:last-child {
  border-bottom: none;
}

.measurement-label {
  font-size: 0.9rem;
  color: #718096;
  font-weight: 500;
}

.measurement-value {
  font-size: 0.9rem;
  color: #2d3748;
  font-weight: 600;
}

.profile-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #718096;
  text-decoration: underline;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.profile-link:hover {
  color: #4a5568;
}

.external-icon {
  opacity: 0.7;
  width: 12px;
  height: 12px;
}

/* Booking Calendar Section */
.booking-calendar {
  padding: 40px;
  display: flex;
  flex-direction: column;
}

.calendar-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 32px;
  font-family: 'Open Sans', sans-serif;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.nav-arrow {
  background: none;
  border: none;
  color: #718096;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.nav-arrow::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(127, 0, 253, 0.1);
  border-radius: 50%;
  transition: all 0.3s ease;
  transform: translate(-50%, -50%);
}

.nav-arrow:hover {
  background: #f7fafc;
  color: #7f00fd;
  transform: scale(1.1);
}

.nav-arrow:hover::before {
  width: 100%;
  height: 100%;
}

.nav-arrow:active {
  transform: scale(0.95);
}

.month-year-container {
  position: relative;
  overflow: hidden;
  min-width: 120px;
  text-align: center;
}

.month-year {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  display: inline-block;
}

/* Month slide animation */
.month-slide-enter-active,
.month-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.month-slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.month-slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.month-slide-enter-to,
.month-slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  margin-bottom: 16px;
}

.day-header {
  text-align: center;
  font-size: 0.8rem;
  font-weight: 600;
  color: #718096;
  padding: 8px 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.calendar-grid-container {
  position: relative;
  overflow: hidden;
  margin-bottom: 32px;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
}

/* Calendar slide animation */
.calendar-slide-enter-active,
.calendar-slide-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.calendar-slide-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

.calendar-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(1.05);
}

.calendar-slide-enter-to,
.calendar-slide-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.calendar-date {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 500;
  color: #2d3748;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  animation: dateFadeIn 0.6s ease-out;
}

@keyframes dateFadeIn {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.calendar-date:hover {
  background: #f7fafc;
  border-color: #cbd5e0;
}

.calendar-date.selected {
  background: #f3f4f6;
  color: #7f00fd;
  border: 2px solid #7f00fd;
  font-weight: 600;
  box-shadow: 0 0 0 1px rgba(127, 0, 253, 0.2);
}

.calendar-date.unavailable {
  background: #f9fafb;
  color: #9ca3af;
  border: 1px solid #e5e7eb;
  cursor: not-allowed;
  opacity: 0.6;
  text-decoration: line-through;
}

.calendar-date.unavailable:hover {
  background: #f9fafb;
  border-color: #e5e7eb;
}

.booking-actions {
  display: flex;
  gap: 12px;
  margin-top: auto;
}

.btn-cancel,
.btn-book {
  flex: 1;
  padding: 10px 16px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  font-family: 'Open Sans', sans-serif;
}

.btn-cancel {
  background: #ffffff;
  color: #2d3748;
  border: 1px solid #e2e8f0;
}

.btn-cancel:hover {
  background: #f7fafc;
  border-color: #cbd5e0;
}

.btn-book {
  background: #7f00fd;
  color: #ffffff;
}

.btn-book:hover {
  background: #6b00d1;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(127, 0, 253, 0.3);
}

.btn-book:disabled {
  background: #d1d5db;
  color: #9ca3af;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* Booking Stage Transitions */
.booking-stage-enter-active,
.booking-stage-leave-active {
  transition: all 0.3s ease;
}

.booking-stage-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.booking-stage-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* Selected Date Card Styles */
.selected-date-card {
  background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
  border: 1px solid #e0e7ff;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.selected-date-icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background: rgba(127, 0, 253, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.selected-date-content {
  flex: 1;
}

.selected-date-label {
  font-size: 0.8rem;
  color: #6b7280;
  font-weight: 500;
  margin-bottom: 2px;
}

.selected-date-value {
  font-size: 1rem;
  color: #7f00fd;
  font-weight: 600;
}

.booking-form {
  margin-bottom: 32px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
}

.form-group input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  background: #ffffff;
  font-family: 'Open Sans', sans-serif;
}

.form-group input:focus {
  outline: none;
  border-color: #7f00fd;
  box-shadow: 0 0 0 3px rgba(127, 0, 253, 0.1);
  transform: translateY(-1px);
}

.form-group input::placeholder {
  color: #9ca3af;
  font-weight: 400;
}

/* Price Input Wrapper */
.price-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.currency-symbol {
  position: absolute;
  left: 16px;
  color: #6b7280;
  font-weight: 600;
  font-size: 0.9rem;
  z-index: 1;
  pointer-events: none;
}

.price-input-wrapper input {
  padding-left: 32px;
  font-weight: 600;
  color: #374151;
}

.price-input-wrapper input::placeholder {
  color: #d1d5db;
  font-weight: 400;
}

/* Success Screen Styles */
.success-content {
  text-align: center;
  padding: 20px 0;
}

.success-icon {
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
}

.success-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #374151;
  margin-bottom: 16px;
  font-family: 'Open Sans', sans-serif;
}

.success-message {
  font-size: 1rem;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 32px;
}

/* Responsive Design for Client Banner */
@media (max-width: 768px) {
  .client-banner {
    grid-template-columns: 1fr;
    max-width: 100%;
    margin: 0 16px;
    min-height: auto;
  }

  .client-model-profile,
  .booking-calendar {
    padding: 20px;
  }

  .client-model-photo {
    width: 100px;
    height: 100px;
  }

  .model-name {
    font-size: 1rem;
  }

  .calendar-title {
    font-size: 1.1rem;
  }

  .calendar-grid {
    gap: 1px;
  }

  .calendar-date {
    font-size: 0.7rem;
    border-radius: 3px;
  }

  .booking-actions {
    flex-direction: column;
    gap: 8px;
  }

  .btn-cancel,
  .btn-book {
    padding: 14px 20px;
    font-size: 0.9rem;
    min-height: 48px;
  }
}

@media (max-width: 480px) {
  .client-banner {
    margin: 0 12px;
  }

  .client-model-profile,
  .booking-calendar {
    padding: 16px;
  }

  .client-model-photo {
    width: 80px;
    height: 80px;
  }

  .model-name {
    font-size: 0.9rem;
  }

  .measurement-label,
  .measurement-value {
    font-size: 0.7rem;
  }

  .calendar-title {
    font-size: 1rem;
  }

  .calendar-date {
    font-size: 0.65rem;
    padding: 4px;
  }

  .day-header {
    font-size: 0.6rem;
  }

  .btn-cancel,
  .btn-book {
    padding: 16px 24px;
    font-size: 0.95rem;
    min-height: 52px;
  }
}

/* Admin Banner Styles */
.admin-banner {
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  max-width: 900px;
  margin: 0 auto;
  min-height: 600px;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.admin-banner.transitioning {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.2s ease-out;
}

.admin-banner.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Admin Dashboard Section */
.admin-dashboard {
  padding: 40px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
}

.dashboard-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
}

.dashboard-actions {
  display: flex;
  gap: 12px;
}

.btn-action {
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-action.primary {
  background: #7f00fd;
  color: white;
}

.btn-action.primary:hover {
  background: #6b00d4;
}

.btn-action.secondary {
  background: #e2e8f0;
  color: #4a5568;
}

.btn-action.secondary:hover {
  background: #cbd5e0;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 24px;
}

.stat-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(127, 0, 253, 0.1);
  transition: transform 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-2px);
}

.stat-card.total {
  border-left: 4px solid #4299e1;
}

.stat-card.confirmed {
  border-left: 4px solid #48bb78;
}

.stat-card.pending {
  border-left: 4px solid #ed8936;
}

.stat-card.cancelled {
  border-left: 4px solid #f56565;
}

.stat-icon {
  font-size: 1.5rem;
  opacity: 0.8;
}

.stat-content {
  flex: 1;
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 0.9rem;
  color: #718096;
  font-weight: 500;
}

.quick-filters {
  display: flex;
  gap: 8px;
}

.filter-btn {
  padding: 8px 16px;
  border: 1px solid #e2e8f0;
  background: white;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  color: #4a5568;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-btn:hover {
  border-color: #7f00fd;
  color: #7f00fd;
}

.filter-btn.active {
  background: #7f00fd;
  border-color: #7f00fd;
  color: white;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #7f00fd;
  margin-bottom: 8px;
  font-family: 'Open Sans', sans-serif;
}

.stat-label {
  font-size: 0.9rem;
  color: #718096;
  font-weight: 500;
}

/* Recent Bookings Section */
.recent-bookings {
  padding: 40px;
  display: flex;
  flex-direction: column;
}

.bookings-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.bookings-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
}

.view-toggle {
  display: flex;
  background: #f7fafc;
  border-radius: 8px;
  padding: 4px;
}

.toggle-btn {
  padding: 8px 16px;
  border: none;
  background: transparent;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  color: #4a5568;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Open Sans', sans-serif;
}

.toggle-btn.active {
  background: white;
  color: #7f00fd;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.bookings-list {
  flex: 1;
  margin-bottom: 24px;
}

.booking-item {
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  transition: all 0.2s ease;
}

.booking-item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-1px);
}

.booking-main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

.booking-info {
  flex: 1;
}

.booking-client {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 8px;
}

.booking-details {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 0.9rem;
  color: #718096;
}

.booking-date {
  font-weight: 500;
  color: #4a5568;
}

.booking-time {
  color: #718096;
}

.booking-location {
  color: #718096;
}

.maps-link {
  color: #7f00fd;
  text-decoration: none;
  font-weight: 500;
  margin-left: 4px;
}

.maps-link:hover {
  text-decoration: underline;
}

.booking-actions {
  display: flex;
  gap: 8px;
}

.action-btn {
  width: 32px;
  height: 32px;
  border: none;
  background: #f7fafc;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.action-btn:hover {
  background: #edf2f7;
}

.action-btn.edit:hover {
  background: #e6fffa;
  color: #38b2ac;
}

.action-btn.chat {
  color: #4a5568;
}

.action-btn.chat:hover {
  background: #e6f3ff;
  color: #3182ce;
}

.action-btn.confirm {
  color: #38a169;
  background: #e6f7ed;
  border: 1px solid #38a169;
}

.action-btn.confirm:hover {
  background: #d4edda;
  color: #2f855a;
}

.action-btn.cancel {
  color: #e53e3e;
  background: #f8d7da;
  border: 1px solid #e53e3e;
}

.action-btn.cancel:hover:not(:disabled) {
  background: #f5c6cb;
  color: #c53030;
}

.action-btn.cancel:disabled {
  background: #f7fafc;
  color: #a0aec0;
  border-color: #e2e8f0;
  cursor: not-allowed;
}

.booking-status {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 20px;
  width: fit-content;
}

.booking-status.confirmed {
  background: #f0fff4;
  color: #38a169;
}

.booking-status.pending {
  background: #fffaf0;
  color: #dd6b20;
}

.booking-status.cancelled {
  background: #fed7d7;
  color: #e53e3e;
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
}

.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid #e2e8f0;
}

.page-btn {
  padding: 8px 16px;
  border: 1px solid #e2e8f0;
  background: white;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #4a5568;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Open Sans', sans-serif;
}

.page-btn:hover:not(:disabled) {
  border-color: #7f00fd;
  color: #7f00fd;
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-info {
  font-size: 0.9rem;
  color: #718096;
  font-weight: 500;
}

/* Booking Management Calendar View Styles - Scoped to admin section */
.recent-bookings .calendar-view {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  margin-top: 16px;
}

.recent-bookings .calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f1f5f9;
}

.recent-bookings .calendar-nav-btn {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 1rem;
  font-weight: 500;
  color: #4a5568;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Open Sans', sans-serif;
  min-width: 40px;
}

.recent-bookings .calendar-nav-btn:hover {
  background: #edf2f7;
  border-color: #7f00fd;
  color: #7f00fd;
}

.recent-bookings .calendar-month {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  flex: 1;
}

.recent-bookings .calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background: #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
}

.recent-bookings .calendar-day-header {
  background: #f7fafc;
  padding: 12px 8px;
  text-align: center;
  font-size: 0.85rem;
  font-weight: 600;
  color: #4a5568;
  font-family: 'Open Sans', sans-serif;
  border-bottom: 2px solid #e2e8f0;
}

.recent-bookings .calendar-day {
  background: white;
  min-height: 80px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border-right: 1px solid #f1f5f9;
  border-bottom: 1px solid #f1f5f9;
}

.recent-bookings .calendar-day:hover {
  background: #f7fafc;
}

.recent-bookings .calendar-day.other-month {
  background: #f7fafc;
  color: #a0aec0;
}

.recent-bookings .calendar-day.today {
  background: #e6f3ff;
  border: 2px solid #7f00fd;
}

.recent-bookings .calendar-day.has-confirmed {
  background: #f0fff4;
  border: 1px solid #38a169;
}

.recent-bookings .calendar-day.has-pending {
  background: #fffaf0;
  border: 1px solid #f6ad55;
}

.recent-bookings .calendar-day.has-cancelled {
  background: #fed7d7;
  border: 1px solid #e53e3e;
}

.recent-bookings .calendar-day.today .day-number {
  background: #7f00fd;
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.recent-bookings .day-number {
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 4px;
  font-family: 'Open Sans', sans-serif;
}

.recent-bookings .day-bookings {
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
}

.recent-bookings .booking-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}

.recent-bookings .booking-dot.confirmed {
  background: #38a169;
}


.recent-bookings .booking-dot.pending {
  background: #f6ad55;
}

.recent-bookings .booking-dot.cancelled {
  background: #e53e3e;
}
/* Responsive Design for Admin Dashboard */
@media (max-width: 768px) {
  .admin-banner {
    grid-template-columns: 1fr;
    max-width: 100%;
    margin: 0 20px;
  }

  .recent-bookings {
    padding: 30px 24px;
  }

  .bookings-header {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }

  .view-toggle {
    width: 100%;
    justify-content: center;
  }

  .booking-item {
    position: relative;
    padding-bottom: 60px;
  }

  .booking-status {
    position: absolute;
    bottom: 12px;
    left: 12px;
  }

  .booking-main {
    flex-direction: column;
    gap: 12px;
  }

  .booking-actions {
    margin-top: 8px;
    width: 100%;
    justify-content: flex-end;
    flex-direction: row;
    gap: 8px;
  }

  .booking-details {
    flex-direction: column;
    gap: 8px;
  }

  /* Calendar mobile styles - scoped to booking management */
  .recent-bookings .calendar-view {
    padding: 12px;
    margin-top: 12px;
  }

  .recent-bookings .calendar-header {
    margin-bottom: 12px;
    padding-bottom: 8px;
  }

  .recent-bookings .calendar-nav-btn {
    padding: 6px 8px;
    font-size: 0.85rem;
    min-width: 32px;
  }

  .recent-bookings .calendar-month {
    font-size: 1rem;
  }

  .recent-bookings .calendar-day-header {
    padding: 8px 4px;
    font-size: 0.75rem;
  }

  .recent-bookings .calendar-day {
    min-height: 50px;
    padding: 4px;
  }

  .recent-bookings .day-number {
    font-size: 0.75rem;
    margin-bottom: 2px;
  }

  .recent-bookings .booking-dot {
    width: 3px;
    height: 3px;
  }

  .pagination {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }

  .page-info {
    order: 2;
    flex: 1;
    text-align: center;
    font-size: 0.85rem;
  }

  .page-btn:first-child {
    order: 1;
  }

  .page-btn:last-child {
    order: 3;
  }
}

@media (max-width: 480px) {
  .admin-banner {
    margin: 0 16px;
  }

  .recent-bookings {
    padding: 24px 20px;
  }

  .bookings-title {
    font-size: 1.3rem;
  }

  .booking-client {
    font-size: 1rem;
  }

  .booking-details {
    font-size: 0.8rem;
  }

  .action-btn {
    width: 28px;
    height: 28px;
    font-size: 0.8rem;
  }

  /* Calendar styles for small mobile */
  .recent-bookings .calendar-view {
    padding: 8px;
    margin-top: 8px;
  }

  .recent-bookings .calendar-header {
    margin-bottom: 8px;
    padding-bottom: 6px;
  }

  .recent-bookings .calendar-nav-btn {
    padding: 4px 6px;
    font-size: 0.8rem;
    min-width: 28px;
  }

  .recent-bookings .calendar-month {
    font-size: 0.9rem;
  }

  .recent-bookings .calendar-day-header {
    padding: 6px 2px;
    font-size: 0.7rem;
  }

  .recent-bookings .calendar-day {
    min-height: 40px;
    padding: 2px;
  }

  .recent-bookings .day-number {
    font-size: 0.7rem;
    margin-bottom: 1px;
  }

  /* Pagination styles for small mobile */
  .pagination {
    gap: 4px;
  }

  .page-info {
    font-size: 0.8rem;
  }

  .page-btn {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
}
</style>
