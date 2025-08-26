/**
 * Smart Logic System for Conditional Question Flow
 * --------------------------------------------------------------
 * This system determines which features, questions, and steps are relevant
 * based on the selected project type, eliminating irrelevant questions
 * and providing a more focused user experience.
 */

export interface SmartLogicRule {
  projectType: string;
  relevantFeatures: string[];
  irrelevantFeatures: string[];
  skipSteps: string[];
  requiredSteps: string[];
  autoSelectFeatures: string[];
  recommendations: {
    designLevel: string[];
    timeline: string[];
    team: string[];
    supportPlan: string[];
  };
  businessContextRelevance: {
    industry: boolean;
    marketPosition: boolean;
    regulatoryEnvironment: boolean;
    businessCriticality: boolean;
  };
}

export interface FeatureCategory {
  key: string;
  label: string;
  description: string;
  relevantFor: string[];
  irrelevantFor: string[];
}

// Feature categories with relevance rules
export const featureCategories: FeatureCategory[] = [
  {
    key: 'core',
    label: 'Core Functionality',
    description: 'Essential features for basic operation',
    relevantFor: ['landing', 'corporate', 'ecommerce', 'marketplace', 'saas_webapp', 'mobile_native', 'mobile_cross', 'desktop_app'],
    irrelevantFor: ['design_only']
  },
  {
    key: 'payments',
    label: 'Payment & Commerce',
    description: 'Financial transactions and e-commerce features',
    relevantFor: ['ecommerce', 'marketplace', 'saas_webapp'],
    irrelevantFor: ['landing', 'corporate', 'design_only', 'mobile_native', 'mobile_cross', 'desktop_app']
  },
  {
    key: 'data',
    label: 'Data & API',
    description: 'Database, APIs, and data management',
    relevantFor: ['saas_webapp', 'marketplace', 'ecommerce', 'mobile_native', 'mobile_cross', 'desktop_app'],
    irrelevantFor: ['landing', 'corporate', 'design_only']
  },
  {
    key: 'ai',
    label: 'AI & Advanced Features',
    description: 'Machine learning and intelligent features',
    relevantFor: ['saas_webapp', 'marketplace', 'desktop_app'],
    irrelevantFor: ['landing', 'corporate', 'ecommerce', 'design_only', 'mobile_native', 'mobile_cross']
  },
  {
    key: 'admin',
    label: 'Admin & Management',
    description: 'Backend administration and user management',
    relevantFor: ['saas_webapp', 'marketplace', 'ecommerce', 'corporate'],
    irrelevantFor: ['landing', 'design_only', 'mobile_native', 'mobile_cross', 'desktop_app']
  },
  {
    key: 'comm',
    label: 'Communication',
    description: 'Chat, messaging, and communication features',
    relevantFor: ['saas_webapp', 'marketplace', 'mobile_native', 'mobile_cross'],
    irrelevantFor: ['landing', 'corporate', 'ecommerce', 'design_only', 'desktop_app']
  },
  {
    key: 'integrations',
    label: 'Integrations',
    description: 'Third-party service integrations',
    relevantFor: ['saas_webapp', 'marketplace', 'ecommerce', 'corporate'],
    irrelevantFor: ['landing', 'design_only', 'mobile_native', 'mobile_cross', 'desktop_app']
  },
  {
    key: 'i18n',
    label: 'Internationalization',
    description: 'Multi-language and localization support',
    relevantFor: ['corporate', 'ecommerce', 'marketplace', 'saas_webapp'],
    irrelevantFor: ['landing', 'design_only', 'mobile_native', 'mobile_cross', 'desktop_app']
  },
  {
    key: 'ux',
    label: 'User Experience',
    description: 'Animations, interactions, and UX enhancements',
    relevantFor: ['landing', 'corporate', 'ecommerce', 'marketplace', 'saas_webapp', 'design_only'],
    irrelevantFor: ['mobile_native', 'mobile_cross', 'desktop_app']
  },
  {
    key: 'security',
    label: 'Security',
    description: 'Advanced security features and compliance',
    relevantFor: ['saas_webapp', 'marketplace', 'ecommerce', 'corporate'],
    irrelevantFor: ['landing', 'design_only', 'mobile_native', 'mobile_cross', 'desktop_app']
  },
  {
    key: 'seo',
    label: 'SEO & Marketing',
    description: 'Search engine optimization and marketing tools',
    relevantFor: ['landing', 'corporate', 'ecommerce', 'marketplace'],
    irrelevantFor: ['saas_webapp', 'design_only', 'mobile_native', 'mobile_cross', 'desktop_app']
  },
  {
    key: 'analytics',
    label: 'Analytics & Tracking',
    description: 'Data analysis and user behavior tracking',
    relevantFor: ['corporate', 'ecommerce', 'marketplace', 'saas_webapp'],
    irrelevantFor: ['landing', 'design_only', 'mobile_native', 'mobile_cross', 'desktop_app']
  },
  {
    key: 'maps',
    label: 'Maps & Location',
    description: 'Geographic and location-based features',
    relevantFor: ['ecommerce', 'marketplace', 'mobile_native', 'mobile_cross'],
    irrelevantFor: ['landing', 'corporate', 'saas_webapp', 'design_only', 'desktop_app']
  },
  {
    key: 'storage',
    label: 'File Storage',
    description: 'File uploads and storage management',
    relevantFor: ['saas_webapp', 'marketplace', 'ecommerce', 'corporate'],
    irrelevantFor: ['landing', 'design_only', 'mobile_native', 'mobile_cross', 'desktop_app']
  },
  {
    key: 'realtime',
    label: 'Real-time Features',
    description: 'WebSocket and real-time communication',
    relevantFor: ['saas_webapp', 'marketplace', 'chat'],
    irrelevantFor: ['landing', 'corporate', 'ecommerce', 'design_only', 'mobile_native', 'mobile_cross', 'desktop_app']
  },
  {
    key: 'notifications',
    label: 'Notifications',
    description: 'Push notifications and email alerts',
    relevantFor: ['saas_webapp', 'marketplace', 'ecommerce', 'mobile_native', 'mobile_cross'],
    irrelevantFor: ['landing', 'corporate', 'design_only', 'desktop_app']
  },
  {
    key: 'search',
    label: 'Search & Discovery',
    description: 'Advanced search and content discovery',
    relevantFor: ['ecommerce', 'marketplace', 'saas_webapp', 'corporate'],
    irrelevantFor: ['landing', 'design_only', 'mobile_native', 'mobile_cross', 'desktop_app']
  },
  {
    key: 'roles',
    label: 'User Roles & Permissions',
    description: 'Multi-user access control and permissions',
    relevantFor: ['saas_webapp', 'marketplace', 'ecommerce', 'corporate'],
    irrelevantFor: ['landing', 'design_only', 'mobile_native', 'mobile_cross', 'desktop_app']
  },
  {
    key: 'booking',
    label: 'Booking & Scheduling',
    description: 'Appointment booking and calendar management',
    relevantFor: ['saas_webapp', 'marketplace'],
    irrelevantFor: ['landing', 'corporate', 'ecommerce', 'design_only', 'mobile_native', 'mobile_cross', 'desktop_app']
  },
  {
    key: 'cms',
    label: 'Content Management',
    description: 'Content management system for easy updates',
    relevantFor: ['corporate', 'ecommerce', 'marketplace'],
    irrelevantFor: ['landing', 'saas_webapp', 'design_only', 'mobile_native', 'mobile_cross', 'desktop_app']
  },
  {
    key: 'marketplace',
    label: 'Marketplace Features',
    description: 'Multi-vendor and marketplace functionality',
    relevantFor: ['marketplace'],
    irrelevantFor: ['landing', 'corporate', 'ecommerce', 'saas_webapp', 'design_only', 'mobile_native', 'mobile_cross', 'desktop_app']
  },
  {
    key: 'compliance',
    label: 'Compliance & Legal',
    description: 'GDPR, legal compliance, and regulatory features',
    relevantFor: ['saas_webapp', 'marketplace', 'ecommerce', 'corporate'],
    irrelevantFor: ['landing', 'design_only', 'mobile_native', 'mobile_cross', 'desktop_app']
  }
];

// Smart logic rules for each project type
export const smartLogicRules: SmartLogicRule[] = [
  {
    projectType: 'landing',
    relevantFeatures: ['custom_animations', 'seo', 'analytics', 'integrations'],
    irrelevantFeatures: ['auth', 'payments', 'database', 'ai', 'admin', 'chat', 'i18n', 'security', 'maps', 'storage', 'realtime', 'notifications', 'search', 'roles', 'booking', 'cms', 'marketplace_multivendor', 'gdpr'],
    skipSteps: ['business-context'],
    requiredSteps: ['project-type', 'features', 'design', 'timeline', 'team', 'support'],
    autoSelectFeatures: ['seo'],
    recommendations: {
      designLevel: ['standard_modern', 'custom_premium'],
      timeline: ['relaxed', 'standard'],
      team: ['solo', 'small'],
      supportPlan: ['none', 'basic']
    },
    businessContextRelevance: {
      industry: false,
      marketPosition: false,
      regulatoryEnvironment: false,
      businessCriticality: false
    }
  },
  {
    projectType: 'corporate',
    relevantFeatures: ['auth', 'admin', 'integrations', 'i18n', 'custom_animations', 'security', 'seo', 'analytics', 'storage', 'search', 'roles', 'cms', 'gdpr'],
    irrelevantFeatures: ['payments', 'database', 'ai', 'chat', 'maps', 'realtime', 'notifications', 'booking', 'marketplace_multivendor'],
    skipSteps: [],
    requiredSteps: ['project-type', 'features', 'design', 'timeline', 'team', 'support', 'business-context'],
    autoSelectFeatures: ['seo', 'analytics'],
    recommendations: {
      designLevel: ['standard_modern', 'custom_premium'],
      timeline: ['relaxed', 'standard'],
      team: ['small', 'full'],
      supportPlan: ['basic', 'standard']
    },
    businessContextRelevance: {
      industry: true,
      marketPosition: true,
      regulatoryEnvironment: true,
      businessCriticality: true
    }
  },
  {
    projectType: 'ecommerce',
    relevantFeatures: ['auth', 'payments', 'database', 'admin', 'integrations', 'i18n', 'custom_animations', 'security', 'seo', 'analytics', 'maps', 'storage', 'notifications', 'search', 'roles', 'cms', 'gdpr'],
    irrelevantFeatures: ['ai', 'chat', 'realtime', 'booking', 'marketplace_multivendor'],
    skipSteps: [],
    requiredSteps: ['project-type', 'features', 'design', 'timeline', 'team', 'support', 'business-context'],
    autoSelectFeatures: ['payments', 'seo', 'analytics'],
    recommendations: {
      designLevel: ['custom_premium', 'luxury'],
      timeline: ['standard', 'urgent'],
      team: ['small', 'full'],
      supportPlan: ['standard', 'full']
    },
    businessContextRelevance: {
      industry: true,
      marketPosition: true,
      regulatoryEnvironment: true,
      businessCriticality: true
    }
  },
  {
    projectType: 'marketplace',
    relevantFeatures: ['auth', 'payments', 'database', 'ai', 'admin', 'chat', 'integrations', 'i18n', 'custom_animations', 'security', 'seo', 'analytics', 'maps', 'storage', 'realtime', 'notifications', 'search', 'roles', 'booking', 'cms', 'marketplace_multivendor', 'gdpr'],
    irrelevantFeatures: [],
    skipSteps: [],
    requiredSteps: ['project-type', 'features', 'design', 'timeline', 'team', 'support', 'business-context'],
    autoSelectFeatures: ['payments', 'auth', 'admin', 'analytics'],
    recommendations: {
      designLevel: ['custom_premium', 'luxury'],
      timeline: ['standard', 'urgent'],
      team: ['full'],
      supportPlan: ['full']
    },
    businessContextRelevance: {
      industry: true,
      marketPosition: true,
      regulatoryEnvironment: true,
      businessCriticality: true
    }
  },
  {
    projectType: 'saas_webapp',
    relevantFeatures: ['auth', 'payments', 'database', 'ai', 'admin', 'chat', 'integrations', 'i18n', 'custom_animations', 'security', 'analytics', 'storage', 'realtime', 'notifications', 'search', 'roles', 'booking', 'gdpr'],
    irrelevantFeatures: ['seo', 'maps', 'cms', 'marketplace_multivendor'],
    skipSteps: [],
    requiredSteps: ['project-type', 'features', 'design', 'timeline', 'team', 'support', 'business-context'],
    autoSelectFeatures: ['auth', 'admin', 'analytics'],
    recommendations: {
      designLevel: ['custom_premium', 'luxury'],
      timeline: ['standard', 'urgent'],
      team: ['small', 'full'],
      supportPlan: ['standard', 'full']
    },
    businessContextRelevance: {
      industry: true,
      marketPosition: true,
      regulatoryEnvironment: true,
      businessCriticality: true
    }
  },
  {
    projectType: 'mobile_native',
    relevantFeatures: ['auth', 'payments', 'database', 'integrations', 'custom_animations', 'security', 'maps', 'storage', 'notifications', 'search', 'roles', 'gdpr'],
    irrelevantFeatures: ['ai', 'admin', 'chat', 'i18n', 'seo', 'analytics', 'realtime', 'booking', 'cms', 'marketplace_multivendor'],
    skipSteps: ['business-context'],
    requiredSteps: ['project-type', 'features', 'design', 'timeline', 'team', 'support'],
    autoSelectFeatures: ['auth', 'notifications'],
    recommendations: {
      designLevel: ['custom_premium', 'luxury'],
      timeline: ['standard', 'urgent'],
      team: ['small', 'full'],
      supportPlan: ['standard', 'full']
    },
    businessContextRelevance: {
      industry: false,
      marketPosition: false,
      regulatoryEnvironment: false,
      businessCriticality: false
    }
  },
  {
    projectType: 'mobile_cross',
    relevantFeatures: ['auth', 'payments', 'database', 'integrations', 'custom_animations', 'security', 'maps', 'storage', 'notifications', 'search', 'roles', 'gdpr'],
    irrelevantFeatures: ['ai', 'admin', 'chat', 'i18n', 'seo', 'analytics', 'realtime', 'booking', 'cms', 'marketplace_multivendor'],
    skipSteps: ['business-context'],
    requiredSteps: ['project-type', 'features', 'design', 'timeline', 'team', 'support'],
    autoSelectFeatures: ['auth', 'notifications'],
    recommendations: {
      designLevel: ['custom_premium', 'luxury'],
      timeline: ['standard', 'urgent'],
      team: ['small', 'full'],
      supportPlan: ['standard', 'full']
    },
    businessContextRelevance: {
      industry: false,
      marketPosition: false,
      regulatoryEnvironment: false,
      businessCriticality: false
    }
  },
  {
    projectType: 'desktop_app',
    relevantFeatures: ['auth', 'database', 'ai', 'integrations', 'custom_animations', 'security', 'storage', 'search', 'roles', 'gdpr'],
    irrelevantFeatures: ['payments', 'admin', 'chat', 'i18n', 'seo', 'analytics', 'maps', 'realtime', 'notifications', 'booking', 'cms', 'marketplace_multivendor'],
    skipSteps: ['business-context'],
    requiredSteps: ['project-type', 'features', 'design', 'timeline', 'team', 'support'],
    autoSelectFeatures: ['auth', 'storage'],
    recommendations: {
      designLevel: ['standard_modern', 'custom_premium'],
      timeline: ['standard', 'urgent'],
      team: ['small', 'full'],
      supportPlan: ['standard', 'full']
    },
    businessContextRelevance: {
      industry: false,
      marketPosition: false,
      regulatoryEnvironment: false,
      businessCriticality: false
    }
  },
  {
    projectType: 'design_only',
    relevantFeatures: ['custom_animations', 'integrations'],
    irrelevantFeatures: ['auth', 'payments', 'database', 'ai', 'admin', 'chat', 'i18n', 'security', 'seo', 'analytics', 'maps', 'storage', 'realtime', 'notifications', 'search', 'roles', 'booking', 'cms', 'marketplace_multivendor', 'gdpr'],
    skipSteps: ['features', 'business-context'],
    requiredSteps: ['project-type', 'design', 'timeline', 'team', 'support'],
    autoSelectFeatures: [],
    recommendations: {
      designLevel: ['custom_premium', 'luxury'],
      timeline: ['relaxed', 'standard'],
      team: ['solo', 'small'],
      supportPlan: ['none', 'basic']
    },
    businessContextRelevance: {
      industry: false,
      marketPosition: false,
      regulatoryEnvironment: false,
      businessCriticality: false
    }
  }
];

// Helper functions
export function getSmartLogicForProjectType(projectType: string): SmartLogicRule | null {
  return smartLogicRules.find(rule => rule.projectType === projectType) || null;
}

export function getRelevantFeaturesForProjectType(projectType: string): string[] {
  const rule = getSmartLogicForProjectType(projectType);
  return rule ? rule.relevantFeatures : [];
}

export function getIrrelevantFeaturesForProjectType(projectType: string): string[] {
  const rule = getSmartLogicForProjectType(projectType);
  return rule ? rule.irrelevantFeatures : [];
}

export function shouldSkipStep(projectType: string, stepKey: string): boolean {
  const rule = getSmartLogicForProjectType(projectType);
  return rule ? rule.skipSteps.includes(stepKey) : false;
}

export function getRequiredStepsForProjectType(projectType: string): string[] {
  const rule = getSmartLogicForProjectType(projectType);
  return rule ? rule.requiredSteps : [];
}

export function getAutoSelectFeaturesForProjectType(projectType: string): string[] {
  const rule = getSmartLogicForProjectType(projectType);
  return rule ? rule.autoSelectFeatures : [];
}

export function getRecommendationsForProjectType(projectType: string) {
  const rule = getSmartLogicForProjectType(projectType);
  return rule ? rule.recommendations : null;
}

export function isBusinessContextRelevant(projectType: string, contextKey: string): boolean {
  const rule = getSmartLogicForProjectType(projectType);
  if (!rule) return true;
  
  switch (contextKey) {
    case 'industry':
      return rule.businessContextRelevance.industry;
    case 'marketPosition':
      return rule.businessContextRelevance.marketPosition;
    case 'regulatoryEnvironment':
      return rule.businessContextRelevance.regulatoryEnvironment;
    case 'businessCriticality':
      return rule.businessContextRelevance.businessCriticality;
    default:
      return true;
  }
}

export function getFeatureRelevanceExplanation(featureKey: string, projectType: string): string {
  const category = featureCategories.find(cat => 
    cat.relevantFor.includes(projectType) || cat.irrelevantFor.includes(projectType)
  );
  
  if (!category) return 'This feature may be relevant depending on your specific needs.';
  
  if (category.relevantFor.includes(projectType)) {
    return `This feature is highly relevant for ${projectType} projects.`;
  } else if (category.irrelevantFor.includes(projectType)) {
    return `This feature is typically not needed for ${projectType} projects.`;
  }
  
  return 'This feature may be relevant depending on your specific needs.';
}

export function getProjectTypeInsights(projectType: string): {
  complexity: string;
  typicalDuration: string;
  teamRecommendation: string;
  costRange: string;
  commonChallenges: string[];
} {
  const insights = {
    landing: {
      complexity: 'Low to Medium',
      typicalDuration: '2-4 weeks',
      teamRecommendation: 'Solo developer or small team',
      costRange: '$3,000 - $15,000',
      commonChallenges: ['Conversion optimization', 'SEO performance', 'Loading speed']
    },
    corporate: {
      complexity: 'Medium',
      typicalDuration: '4-8 weeks',
      teamRecommendation: 'Small to medium team',
      costRange: '$8,000 - $25,000',
      commonChallenges: ['Content management', 'SEO optimization', 'Performance optimization']
    },
    ecommerce: {
      complexity: 'High',
      typicalDuration: '8-16 weeks',
      teamRecommendation: 'Medium to full team',
      costRange: '$15,000 - $50,000',
      commonChallenges: ['Payment integration', 'Inventory management', 'Security compliance']
    },
    marketplace: {
      complexity: 'Very High',
      typicalDuration: '16-24 weeks',
      teamRecommendation: 'Full team required',
      costRange: '$30,000 - $100,000+',
      commonChallenges: ['Multi-vendor management', 'Payment processing', 'User verification']
    },
    saas_webapp: {
      complexity: 'Very High',
      typicalDuration: '12-20 weeks',
      teamRecommendation: 'Medium to full team',
      costRange: '$25,000 - $80,000',
      commonChallenges: ['User authentication', 'Data security', 'Scalability planning']
    },
    mobile_native: {
      complexity: 'High',
      typicalDuration: '10-18 weeks',
      teamRecommendation: 'Medium to full team',
      costRange: '$20,000 - $60,000',
      commonChallenges: ['Platform guidelines', 'Performance optimization', 'App store approval']
    },
    mobile_cross: {
      complexity: 'High',
      typicalDuration: '12-20 weeks',
      teamRecommendation: 'Medium to full team',
      costRange: '$25,000 - $70,000',
      commonChallenges: ['Cross-platform compatibility', 'Performance optimization', 'Native feel']
    },
    desktop_app: {
      complexity: 'High',
      typicalDuration: '10-16 weeks',
      teamRecommendation: 'Medium to full team',
      costRange: '$20,000 - $50,000',
      commonChallenges: ['Cross-platform compatibility', 'Performance optimization', 'Distribution']
    },
    design_only: {
      complexity: 'Low to Medium',
      typicalDuration: '2-6 weeks',
      teamRecommendation: 'Solo designer or small team',
      costRange: '$2,000 - $12,000',
      commonChallenges: ['Design consistency', 'User experience', 'Client feedback integration']
    }
  };
  
  return insights[projectType as keyof typeof insights] || insights.corporate;
}
