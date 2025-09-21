import { ref, computed } from 'vue'
import siteConfig from '@/config/site-config.json'

// Type definitions for better TypeScript support
export interface CompanyInfo {
  name: string
  tagline: string
  description: string
  founded: string
  website: string
}

export interface ContactInfo {
  email: {
    primary: string
    support: string
    careers: string
    roman: string
  }
  phone: {
    primary: string
    formatted: string
    international: string
  }
  address: {
    country: string
    region: string
    city: string
    full: string
  }
  business_hours: {
    timezone: string
    weekdays: string
    weekends: string
  }
}

export interface SocialMedia {
  linkedin: {
    url: string
    company_id: string
    username: string
  }
  instagram: {
    url: string
    username: string
  }
  facebook: {
    url: string
    username: string
  }
  twitter: {
    url: string
    username: string
  }
  github: {
    url: string
    username: string
  }
}

export interface ReviewPlatform {
  rating: string
  review_count: string
  url: string
}

export interface Reviews {
  clutch: ReviewPlatform
  goodfirms: ReviewPlatform
}

export interface SEOInfo {
  meta: {
    title: string
    description: string
    keywords: string
  }
  social: {
    twitter: {
      card: string
      site: string
      creator: string
      image: string
    }
    open_graph: {
      title: string
      description: string
      image: string
      url: string
    }
  }
}

export interface Service {
  id: string
  name: string
  url: string
  description: string
}

export interface NavigationItem {
  name: string
  url: string
}

export interface Navigation {
  main: NavigationItem[]
  legal: NavigationItem[]
}

export interface Testimonial {
  text: string
  name: string
  title: string
  company: string
  initials: string
}

export interface FAQ {
  question: string
  answer: string
  isOpen: boolean
}

export interface SiteConfig {
  company: CompanyInfo
  contact: ContactInfo
  social: SocialMedia
  reviews: Reviews
  seo: SEOInfo
  services: {
    main: Service[]
  }
  navigation: Navigation
  testimonials: Testimonial[]
  faq: FAQ[]
}

// Create a reactive reference to the config
const config = ref<SiteConfig>(siteConfig as SiteConfig)

export function useSiteConfig() {
  // Company information
  const company = computed(() => config.value.company)
  const companyName = computed(() => config.value.company.name)
  const companyTagline = computed(() => config.value.company.tagline)
  const companyDescription = computed(() => config.value.company.description)

  // Contact information
  const contact = computed(() => config.value.contact)
  const email = computed(() => config.value.contact.email.primary)
  const phone = computed(() => config.value.contact.phone.primary)
  const phoneFormatted = computed(() => config.value.contact.phone.formatted)
  const address = computed(() => config.value.contact.address.full)
  const businessHours = computed(() => config.value.contact.business_hours)

  // Social media
  const social = computed(() => config.value.social)
  const socialLinks = computed(() => ({
    linkedin: config.value.social.linkedin.url,
    instagram: config.value.social.instagram.url,
    facebook: config.value.social.facebook.url,
    twitter: config.value.social.twitter.url,
    github: config.value.social.github.url
  }))

  // Reviews
  const reviews = computed(() => config.value.reviews)
  const clutchRating = computed(() => config.value.reviews.clutch.rating)
  const goodfirmsRating = computed(() => config.value.reviews.goodfirms.rating)

  // SEO
  const seo = computed(() => config.value.seo)
  const metaTitle = computed(() => config.value.seo.meta.title)
  const metaDescription = computed(() => config.value.seo.meta.description)
  const metaKeywords = computed(() => config.value.seo.meta.keywords)

  // Services
  const services = computed(() => config.value.services.main)

  // Navigation
  const navigation = computed(() => config.value.navigation)
  const mainNavigation = computed(() => config.value.navigation.main)
  const legalNavigation = computed(() => config.value.navigation.legal)

  // Testimonials
  const testimonials = computed(() => config.value.testimonials)

  // FAQ
  const faq = computed(() => config.value.faq)

  // Helper functions
  const getEmailLink = (emailType: keyof ContactInfo['email'] = 'primary') => {
    return `mailto:${config.value.contact.email[emailType]}`
  }

  const getPhoneLink = (phoneType: keyof ContactInfo['phone'] = 'formatted') => {
    return `tel:${config.value.contact.phone[phoneType]}`
  }

  const getSocialLink = (platform: keyof SocialMedia) => {
    return config.value.social[platform].url
  }

  const getServiceUrl = (serviceId: string) => {
    const service = config.value.services.main.find(s => s.id === serviceId)
    return service?.url || '#'
  }

  const getNavigationUrl = (name: string, section: 'main' | 'legal' = 'main') => {
    const nav = config.value.navigation[section].find(item => item.name === name)
    return nav?.url || '#'
  }

  // Update config (for future dynamic updates)
  const updateConfig = (newConfig: Partial<SiteConfig>) => {
    config.value = { ...config.value, ...newConfig }
  }

  // Get full config
  const getConfig = () => config.value

  return {
    // Direct access to config sections
    config: computed(() => config.value),
    company,
    contact,
    social,
    reviews,
    seo,
    services,
    navigation,
    testimonials,
    faq,

    // Computed properties for easy access
    companyName,
    companyTagline,
    companyDescription,
    email,
    phone,
    phoneFormatted,
    address,
    businessHours,
    socialLinks,
    clutchRating,
    goodfirmsRating,
    metaTitle,
    metaDescription,
    metaKeywords,
    mainNavigation,
    legalNavigation,

    // Helper functions
    getEmailLink,
    getPhoneLink,
    getSocialLink,
    getServiceUrl,
    getNavigationUrl,
    updateConfig,
    getConfig
  }
}
