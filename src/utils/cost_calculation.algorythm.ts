/**
 * Enterprise Cost Calculator Engine
 * --------------------------------------------------------------
 * A scalable, multi-tenant pricing platform for enterprise software projects:
 * - Multi-tenant architecture with white-labeling support
 * - AI-powered pricing optimization and market intelligence
 * - Advanced workflow management and approval systems
 * - Enterprise integrations (CRM, PM, Accounting, Analytics)
 * - Real-time analytics and business intelligence
 * - Advanced security and compliance features
 * - Custom pricing models and industry-specific algorithms
 * - Global scaling with edge computing capabilities
 *
 * Core Enterprise Features:
 * - Tenant isolation and custom branding
 * - Advanced pricing tiers and subscription models
 * - Machine learning pricing optimization
 * - Real-time market data integration
 * - Advanced workflow and approval systems
 * - Enterprise security and compliance
 * - Comprehensive analytics and reporting
 * - API-first architecture with developer portal
 *
 * Usage (Enterprise):
 *   const enterprisePricer = makeEnterprisePricer(enterpriseConfig);
 *   const result = await enterprisePricer.calculateQuote(sampleAnswers, {
 *     tenantId: 'enterprise-client-123',
 *     marketConditions: 'current',
 *     aiOptimization: true,
 *     complianceChecks: true
 *   });
 */

// ------------------------------
// Enterprise Types & Interfaces
// ------------------------------

export type Currency = "GBP" | "USD" | "EUR" | "UAH" | "CAD" | "AUD" | "JPY" | "CHF" | string;

export type TenantTier = "basic" | "professional" | "enterprise" | "custom";

export type MarketCondition = "bull" | "bear" | "stable" | "volatile" | "recession" | "growth";

export type ComplianceFramework = "gdpr" | "sox" | "iso27001" | "hipaa" | "pci-dss" | "fedramp";

export type IntegrationType = "crm" | "project_management" | "accounting" | "marketing" | "analytics" | "communication";

export type ApprovalStatus = "draft" | "pending" | "approved" | "rejected" | "escalated" | "expired";

export type RiskLevel = "low" | "medium" | "high" | "critical";

export type PricingStrategy = "cost_plus" | "value_based" | "market_based" | "dynamic" | "ai_optimized";

// ------------------------------
// Enterprise Configuration
// ------------------------------

export interface EnterpriseConfig {
  // Core Configuration
  baseRate: number;
  currency: Currency;
  regionMultiplier: number;
  defaultMarginPct: number;
  contingencyPct: number;
  discountPct: number;
  roundingQuantum: number;
  
  // Enterprise Features
  tenantId: string;
  companyName: string;
  tenantTier: TenantTier;
  customBranding: CustomBranding;
  pricingTiers: PricingTiers;
  marketIntelligence: MarketIntelligence;
  aiEngine: AIEngine;
  security: SecurityConfig;
  compliance: ComplianceConfig;
  integrations: IntegrationConfig;
  workflow: WorkflowConfig;
  analytics: AnalyticsConfig;
  api: APIConfig;
}

export interface CustomBranding {
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  customCSS: string;
  domain: string;
  favicon: string;
}

export interface PricingTiers {
  basic: TierConfig;
  professional: TierConfig;
  enterprise: TierConfig;
  custom: TierConfig;
}

export interface TierConfig {
  name: string;
  monthlyPrice: number;
  features: string[];
  limits: {
    maxQuotes: number;
    maxUsers: number;
    maxIntegrations: number;
    customBranding: boolean;
    aiOptimization: boolean;
    advancedAnalytics: boolean;
    prioritySupport: boolean;
  };
}

export interface MarketIntelligence {
  enabled: boolean;
  dataSources: MarketDataSource[];
  updateFrequency: "realtime" | "hourly" | "daily" | "weekly";
  regionalPricing: Record<string, RegionalPricing>;
  competitorAnalysis: CompetitorAnalysis;
  marketTrends: MarketTrend[];
}

export interface MarketDataSource {
  name: string;
  type: "api" | "database" | "webhook" | "manual";
  endpoint: string;
  apiKey?: string;
  reliability: number; // 0-1
  lastUpdate: Date;
}

export interface RegionalPricing {
  region: string;
  currency: Currency;
  baseRate: number;
  costOfLiving: number;
  marketDemand: number;
  competition: number;
  lastUpdated: Date;
}

export interface CompetitorAnalysis {
  competitors: Competitor[];
  marketShare: Record<string, number>;
  pricingBenchmarks: any[];
  winLossAnalysis: any[];
}

export interface Competitor {
  name: string;
  marketShare: number;
  pricingStrategy: string;
  strengths: string[];
  weaknesses: string[];
  lastAnalysis: Date;
}

export interface AIEngine {
  enabled: boolean;
  model: "gpt-4" | "claude" | "custom" | "hybrid";
  trainingData: TrainingData;
  optimizationFactors: OptimizationFactor[];
  learningRate: number;
  confidenceThreshold: number;
}

export interface TrainingData {
  historicalQuotes: number;
  successRate: number;
  marketData: number;
  competitorData: number;
  lastTraining: Date;
}

export interface OptimizationFactor {
  name: string;
  weight: number;
  impact: "positive" | "negative" | "neutral";
  confidence: number;
}

export interface SecurityConfig {
  authentication: AuthenticationConfig;
  authorization: AuthorizationConfig;
  dataProtection: DataProtectionConfig;
  audit: any;
  compliance: ComplianceConfig;
}

export interface AuthenticationConfig {
  sso: SSOConfig;
  mfa: MFAConfig;
  passwordPolicy: any;
  sessionManagement: any;
}

export interface SSOConfig {
  enabled: boolean;
  providers: SSOProvider[];
  defaultProvider: string;
  autoProvisioning: boolean;
}

export interface SSOProvider {
  name: string;
  type: "saml" | "oauth2" | "oidc";
  endpoint: string;
  certificate: string;
  attributes: Record<string, string>;
}

export interface MFAConfig {
  enabled: boolean;
  methods: MFAMethod[];
  required: boolean;
  gracePeriod: number;
}

export type MFAMethod = "totp" | "sms" | "email" | "hardware" | "biometric";

export interface AuthorizationConfig {
  rbac: RBACConfig;
  permissions: Permission[];
  roles: Role[];
  policies: Policy[];
}

export interface RBACConfig {
  enabled: boolean;
  hierarchical: boolean;
  inheritance: boolean;
  dynamic: boolean;
}

export interface Role {
  id: string;
  name: string;
  permissions: string[];
  inherits: string[];
  metadata: Record<string, any>;
}

export interface Permission {
  id: string;
  name: string;
  resource: string;
  action: string;
  conditions: Condition[];
}

export interface Condition {
  type: "time" | "location" | "device" | "custom";
  expression: string;
  parameters: Record<string, any>;
}

export interface DataProtectionConfig {
  encryption: EncryptionConfig;
  dataResidency: DataResidencyConfig;
  backup: BackupConfig;
  retention: RetentionConfig;
}

export interface EncryptionConfig {
  algorithm: "aes-256" | "rsa-4096" | "chacha20-poly1305";
  keyManagement: KeyManagementConfig;
  atRest: boolean;
  inTransit: boolean;
  endToEnd: boolean;
}

export interface KeyManagementConfig {
  provider: "aws-kms" | "azure-keyvault" | "gcp-kms" | "hashicorp-vault";
  rotation: boolean;
  rotationPeriod: number;
  backup: boolean;
}

export interface ComplianceConfig {
  frameworks: ComplianceFramework[];
  certifications: Certification[];
  audits: Audit[];
  policies: Policy[];
}

export interface Certification {
  name: string;
  issuer: string;
  validFrom: Date;
  validTo: Date;
  status: "active" | "expired" | "pending" | "suspended";
}

export interface IntegrationConfig {
  enabled: boolean;
  providers: IntegrationProvider[];
  webhooks: WebhookConfig[];
  api: ExternalAPIConfig;
}

export interface IntegrationProvider {
  name: string;
  type: IntegrationType;
  endpoint: string;
  authentication: AuthMethod;
  features: string[];
  rateLimits: RateLimit;
  status: "active" | "inactive" | "error";
}

export interface AuthMethod {
  type: "api_key" | "oauth2" | "basic" | "bearer" | "custom";
  credentials: Record<string, string>;
  scopes?: string[];
}

export interface RateLimit {
  requests: number;
  period: number;
  burst: number;
}

export interface WorkflowConfig {
  enabled: boolean;
  stages: WorkflowStage[];
  rules: WorkflowRule[];
  escalations: EscalationRule[];
  notifications: NotificationConfig;
}

export interface WorkflowStage {
  id: string;
  name: string;
  order: number;
  type: "approval" | "review" | "validation" | "execution";
  assignees: string[];
  required: boolean;
  timeout: number;
  actions: WorkflowAction[];
}

export interface WorkflowAction {
  type: "approve" | "reject" | "request_changes" | "escalate" | "auto_approve";
  conditions: Condition[];
  notifications: Notification[];
}

export interface WorkflowRule {
  id: string;
  name: string;
  conditions: Condition[];
  actions: WorkflowAction[];
  priority: number;
  active: boolean;
}

export interface EscalationRule {
  id: string;
  name: string;
  trigger: "timeout" | "manual" | "error" | "threshold";
  conditions: Condition[];
  actions: EscalationAction[];
  maxEscalations: number;
}

export interface EscalationAction {
  type: "notify_manager" | "notify_admin" | "auto_approve" | "create_ticket";
  parameters: Record<string, any>;
}

export interface AnalyticsConfig {
  enabled: boolean;
  tracking: TrackingConfig;
  reporting: ReportingConfig;
  dashboards: DashboardConfig;
  exports: ExportConfig;
}

export interface TrackingConfig {
  events: string[];
  properties: string[];
  userIdentification: boolean;
  sessionTracking: boolean;
  funnelAnalysis: boolean;
}

export interface ReportingConfig {
  scheduled: ScheduledReport[];
  adhoc: boolean;
  templates: ReportTemplate[];
  delivery: DeliveryConfig;
}

export interface ScheduledReport {
  id: string;
  name: string;
  schedule: string; // cron expression
  recipients: string[];
  format: "pdf" | "excel" | "csv" | "json";
  template: string;
  active: boolean;
}

export interface ReportTemplate {
  id: string;
  name: string;
  type: "executive" | "sales" | "operations" | "finance" | "custom";
  sections: ReportSection[];
  styling: ReportStyling;
}

export interface ReportSection {
  id: string;
  type: "chart" | "table" | "metric" | "text";
  data: string;
  options: Record<string, any>;
}

export interface DashboardConfig {
  default: string;
  custom: CustomDashboard[];
  sharing: SharingConfig;
  realtime: boolean;
}

export interface CustomDashboard {
  id: string;
  name: string;
  owner: string;
  widgets: DashboardWidget[];
  layout: LayoutConfig;
  permissions: Permission[];
}

export interface DashboardWidget {
  id: string;
  type: "chart" | "metric" | "table" | "iframe";
  data: string;
  position: Position;
  size: Size;
  options: Record<string, any>;
}

export interface APIConfig {
  version: string;
  rateLimiting: RateLimitConfig;
  authentication: APIAuthConfig;
  documentation: APIDocConfig;
  monitoring: APIMonitoringConfig;
}

export interface RateLimitConfig {
  enabled: boolean;
  limits: Record<string, RateLimit>;
  burst: boolean;
  sliding: boolean;
}

export interface APIAuthConfig {
  methods: APIAuthMethod[];
  keyRotation: boolean;
  ipWhitelist: string[];
  scopes: APIScope[];
}

export type APIAuthMethod = "api_key" | "jwt" | "oauth2" | "ip_whitelist";

export interface APIScope {
  name: string;
  permissions: string[];
  rateLimits: RateLimit;
}

export interface APIDocConfig {
  openapi: boolean;
  swagger: boolean;
  examples: CodeExample[];
  sdk: SDKConfig;
}

export interface CodeExample {
  language: string;
  code: string;
  description: string;
  output: string;
}

export interface SDKConfig {
  languages: string[];
  documentation: string;
  examples: string;
  support: string;
}

export interface APIMonitoringConfig {
  logging: boolean;
  metrics: boolean;
  alerting: boolean;
  tracing: boolean;
}

// ------------------------------
// Enhanced Questionnaire
// ------------------------------

export interface EnterpriseQuestionnaire extends Questionnaire {
  // Enterprise-specific fields
  tenantId: string;
  projectId: string;
  clientInfo: ClientInfo;
  businessContext: BusinessContext;
  compliance: ComplianceRequirements;
  integrations: IntegrationRequirements;
  workflow: WorkflowRequirements;
  marketData: MarketDataInput;
  aiPreferences: AIPreferences;
}

export interface ClientInfo {
  companyName: string;
  industry: string;
  size: "startup" | "sme" | "enterprise" | "government";
  region: string;
  timezone: string;
  contactPerson: ContactPerson;
  budget: BudgetRange;
  timeline: TimelineConstraints;
}

export interface ContactPerson {
  name: string;
  role: string;
  email: string;
  phone: string;
  decisionMaker: boolean;
}

export interface BudgetRange {
  min: number;
  max: number;
  currency: Currency;
  flexibility: "fixed" | "flexible" | "negotiable";
}

export interface TimelineConstraints {
  startDate: Date;
  endDate: Date;
  milestones: Milestone[];
  dependencies: string[];
  criticalPath: boolean;
}

export interface Milestone {
  id: string;
  name: string;
  date: Date;
  deliverables: string[];
  dependencies: string[];
}

export interface BusinessContext {
  businessGoals: string[];
  successMetrics: string[];
  constraints: string[];
  risks: RiskAssessment[];
  stakeholders: Stakeholder[];
  budgetApproval: ApprovalProcess;
}

export interface RiskAssessment {
  category: string;
  probability: number; // 0-1
  impact: "low" | "medium" | "high" | "critical";
  mitigation: string;
  contingency: number;
}

export interface Stakeholder {
  name: string;
  role: string;
  influence: "low" | "medium" | "high";
  interest: "low" | "medium" | "high";
  requirements: string[];
}

export interface ApprovalProcess {
  levels: number;
  stakeholders: string[];
  timeline: number;
  autoApproval: boolean;
  escalationRules: string[];
}

export interface ComplianceRequirements {
  frameworks: ComplianceFramework[];
  certifications: string[];
  auditTrails: boolean;
  dataRetention: number;
  securityLevel: "basic" | "standard" | "high" | "military";
  regionalCompliance: RegionalCompliance[];
}

export interface RegionalCompliance {
  region: string;
  frameworks: ComplianceFramework[];
  requirements: string[];
  penalties: string[];
}

export interface IntegrationRequirements {
  systems: IntegrationSystem[];
  apis: APIRequirement[];
  dataMigration: DataMigrationRequirement;
  realtimeSync: boolean;
  backup: BackupRequirement;
}

export interface IntegrationSystem {
  name: string;
  type: IntegrationType;
  version: string;
  customizations: string[];
  apiAccess: boolean;
}

export interface APIRequirement {
  type: "rest" | "graphql" | "soap" | "grpc";
  authentication: string;
  rateLimits: RateLimit;
  documentation: boolean;
  testing: boolean;
}

export interface DataMigrationRequirement {
  source: string;
  volume: number;
  format: string;
  validation: boolean;
  rollback: boolean;
}

export interface BackupRequirement {
  frequency: string;
  retention: number;
  location: string;
  encryption: boolean;
  testing: boolean;
}

export interface WorkflowRequirements {
  approvalStages: ApprovalStage[];
  notifications: NotificationRequirement[];
  escalations: EscalationRequirement[];
  reporting: ReportingRequirement[];
}

export interface ApprovalStage {
  order: number;
  approvers: string[];
  criteria: string[];
  timeline: number;
  autoApproval: boolean;
}

export interface NotificationRequirement {
  channels: string[];
  frequency: string;
  recipients: string[];
  templates: string[];
}

export interface EscalationRequirement {
  triggers: string[];
  actions: string[];
  timeline: number;
  maxLevels: number;
}

export interface ReportingRequirement {
  frequency: string;
  formats: string[];
  recipients: string[];
  dashboards: boolean;
  realtime: boolean;
}

export interface MarketDataInput {
  region: string;
  industry: string;
  competition: string[];
  marketTrends: string[];
  seasonalFactors: string[];
  economicConditions: string;
}

export interface AIPreferences {
  optimization: boolean;
  recommendations: boolean;
  marketIntelligence: boolean;
  riskAssessment: boolean;
  customAlgorithms: string[];
}

// ------------------------------
// Enhanced Results
// ------------------------------

export interface EnterpriseQuoteResult extends QuoteResult {
  // Enterprise-specific results
  tenantId: string;
  projectId: string;
  workflow: WorkflowResult;
  compliance: ComplianceResult;
  marketIntelligence: MarketIntelligenceResult;
  aiInsights: AIInsights;
  riskAssessment: RiskAssessmentResult;
  approvalStatus: ApprovalStatus;
  nextSteps: NextStep[];
  metadata: QuoteMetadata;
}

export interface WorkflowResult {
  currentStage: string;
  nextStage: string;
  approvers: string[];
  timeline: number;
  status: ApprovalStatus;
  history: WorkflowHistory[];
}

export interface WorkflowHistory {
  stage: string;
  action: string;
  user: string;
  timestamp: Date;
  comments: string;
  metadata: Record<string, any>;
}

export interface ComplianceResult {
  frameworks: ComplianceFramework[];
  status: "compliant" | "non_compliant" | "pending_review";
  requirements: ComplianceRequirement[];
  recommendations: string[];
  risks: ComplianceRisk[];
}

export interface ComplianceRequirement {
  framework: ComplianceFramework;
  requirement: string;
  status: "met" | "not_met" | "partial";
  evidence: string;
  nextReview: Date;
}

export interface ComplianceRisk {
  category: string;
  severity: RiskLevel;
  description: string;
  mitigation: string;
  timeline: number;
}

export interface MarketIntelligenceResult {
  marketPosition: MarketPosition;
  competitiveAnalysis: CompetitiveAnalysis;
  pricingRecommendations: PricingRecommendation[];
  marketTrends: MarketTrend[];
  regionalFactors: RegionalFactor[];
}

export interface MarketPosition {
  position: "leader" | "challenger" | "follower" | "niche";
  marketShare: number;
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

export interface CompetitiveAnalysis {
  competitors: Competitor[];
  pricingComparison: PricingComparison[];
  featureComparison: FeatureComparison[];
  winLossAnalysis: WinLossAnalysis;
}

export interface PricingComparison {
  competitor: string;
  price: number;
  difference: number;
  percentage: number;
  factors: string[];
}

export interface FeatureComparison {
  feature: string;
  ourImplementation: string;
  competitorImplementation: string;
  advantage: "us" | "them" | "equal";
}

export interface WinLossAnalysis {
  totalOpportunities: number;
  wins: number;
  losses: number;
  winRate: number;
  factors: WinLossFactor[];
}

export interface WinLossFactor {
  factor: string;
  impact: number;
  frequency: number;
  recommendations: string[];
}

export interface PricingRecommendation {
  strategy: PricingStrategy;
  price: number;
  confidence: number;
  factors: string[];
  risks: string[];
  alternatives: PricingAlternative[];
}

export interface PricingAlternative {
  strategy: string;
  price: number;
  pros: string[];
  cons: string[];
  recommendation: string;
}

export interface MarketTrend {
  category: string;
  direction: "up" | "down" | "stable";
  magnitude: number;
  confidence: number;
  timeframe: string;
  impact: string;
}

export interface RegionalFactor {
  region: string;
  factors: RegionalFactorDetail[];
  recommendations: string[];
  risks: string[];
}

export interface RegionalFactorDetail {
  name: string;
  value: number;
  impact: "positive" | "negative" | "neutral";
  description: string;
}

export interface AIInsights {
  optimizationScore: number;
  recommendations: AIRecommendation[];
  riskFactors: AIRiskFactor[];
  marketOpportunities: MarketOpportunity[];
  pricingOptimization: PricingOptimization;
}

export interface AIRecommendation {
  category: string;
  action: string;
  impact: number;
  confidence: number;
  implementation: string;
  timeline: number;
}

export interface AIRiskFactor {
  factor: string;
  probability: number;
  impact: number;
  riskScore: number;
  mitigation: string[];
}

export interface MarketOpportunity {
  category: string;
  description: string;
  potential: number;
  timeframe: string;
  requirements: string[];
}

export interface PricingOptimization {
  currentPrice: number;
  optimizedPrice: number;
  improvement: number;
  factors: string[];
  confidence: number;
  risks: string[];
}

export interface RiskAssessmentResult {
  overallRisk: RiskLevel;
  riskScore: number;
  categories: RiskCategory[];
  mitigation: RiskMitigation[];
  contingency: number;
}

export interface RiskCategory {
  name: string;
  riskLevel: RiskLevel;
  score: number;
  factors: string[];
  impact: string;
}

export interface RiskMitigation {
  risk: string;
  strategy: string;
  cost: number;
  effectiveness: number;
  timeline: number;
}

export interface NextStep {
  action: string;
  assignee: string;
  timeline: number;
  dependencies: string[];
  priority: "low" | "medium" | "high" | "critical";
}

export interface QuoteMetadata {
  createdAt: Date;
  updatedAt: Date;
  version: string;
  tenant: string;
  user: string;
  session: string;
  ipAddress: string;
  userAgent: string;
  tags: string[];
  customFields: Record<string, any>;
}

// ------------------------------
// Enterprise Calculator Engine
// ------------------------------

export class EnterpriseCostCalculator {
  private config: EnterpriseConfig;
  private aiEngine: AIEngine;
  private marketData: MarketIntelligence;
  private security: SecurityConfig;
  private workflow: WorkflowConfig;
  private analytics: AnalyticsConfig;

  constructor(config: EnterpriseConfig) {
    this.config = config;
    this.aiEngine = config.aiEngine;
    this.marketData = config.marketIntelligence;
    this.security = config.security;
    this.workflow = config.workflow;
    this.analytics = config.analytics;
  }

  async calculateQuote(
    questionnaire: EnterpriseQuestionnaire,
    options: QuoteCalculationOptions = {}
  ): Promise<EnterpriseQuoteResult> {
    // Validate and authenticate request
    await this.validateRequest(questionnaire, options);
    
    // Start workflow if enabled
    const workflowResult = await this.initializeWorkflow(questionnaire);
    
    // Calculate base quote
    const baseQuote = await this.calculateBaseQuote(questionnaire);
    
    // Apply AI optimization if enabled
    const aiOptimizedQuote = await this.applyAIOptimization(baseQuote, questionnaire);
    
    // Apply market intelligence
    const marketAdjustedQuote = await this.applyMarketIntelligence(aiOptimizedQuote, questionnaire);
    
    // Calculate compliance requirements
    const complianceResult = await this.calculateCompliance(questionnaire);
    
    // Assess risks
    const riskAssessment = await this.assessRisks(questionnaire, marketAdjustedQuote);
    
    // Generate final result
    const result = await this.generateFinalResult(
      marketAdjustedQuote,
      workflowResult,
      complianceResult,
      riskAssessment,
      questionnaire
    );
    
    // Track analytics
    await this.trackAnalytics(questionnaire, result);
    
    // Store in database
    await this.storeQuote(questionnaire, result);
    
    return result;
  }

  private async validateRequest(
    questionnaire: EnterpriseQuestionnaire,
    options: QuoteCalculationOptions
  ): Promise<void> {
    // Implement comprehensive validation
    // - Tenant authentication
    // - Rate limiting
    // - Input validation
    // - Security checks
  }

  private async initializeWorkflow(
    questionnaire: EnterpriseQuestionnaire
  ): Promise<WorkflowResult> {
    if (!this.workflow.enabled) {
      return this.createDefaultWorkflow();
    }
    
    // Initialize multi-stage approval workflow
    return await this.createWorkflow(questionnaire);
  }

  private async calculateBaseQuote(
    questionnaire: EnterpriseQuestionnaire
  ): Promise<QuoteResult> {
    // Use enhanced base calculation with enterprise factors
    const baseResult = await this.calculateEnhancedBase(questionnaire);
    
    // Apply tenant-specific pricing
    const tenantAdjusted = await this.applyTenantPricing(baseResult, questionnaire);
    
    // Apply regional factors
    const regionalAdjusted = await this.applyRegionalFactors(tenantAdjusted, questionnaire);
    
    return regionalAdjusted;
  }

  private async applyAIOptimization(
    baseQuote: QuoteResult,
    questionnaire: EnterpriseQuestionnaire
  ): Promise<QuoteResult> {
    if (!this.aiEngine.enabled) {
      return baseQuote;
    }
    
    // Apply machine learning optimization
    const optimized = await this.aiEngine.optimizePricing(baseQuote, questionnaire);
    
    return optimized;
  }

  private async applyMarketIntelligence(
    quote: QuoteResult,
    questionnaire: EnterpriseQuestionnaire
  ): Promise<QuoteResult> {
    if (!this.marketData.enabled) {
      return quote;
    }
    
    // Apply real-time market data
    const marketAdjusted = await this.applyMarketData(quote, questionnaire);
    
    // Apply competitive analysis
    const competitiveAdjusted = await this.applyCompetitiveAnalysis(marketAdjusted, questionnaire);
    
    return competitiveAdjusted;
  }

  private async calculateCompliance(
    questionnaire: EnterpriseQuestionnaire
  ): Promise<ComplianceResult> {
    // Calculate compliance requirements and costs
    const frameworks = questionnaire.compliance.frameworks;
    const requirements = await this.getComplianceRequirements(frameworks);

    return {
      frameworks,
      status: "compliant",
      requirements,
      recommendations: [],
      risks: []
    };
  }

  private async assessRisks(
    questionnaire: EnterpriseQuestionnaire,
    quote: QuoteResult
  ): Promise<RiskAssessmentResult> {
    // Comprehensive risk assessment
    const risks = await this.analyzeRisks(questionnaire, quote);
    const mitigation = await this.calculateMitigation(risks);
    
    return {
      overallRisk: this.calculateOverallRisk(risks),
      riskScore: this.calculateRiskScore(risks),
      categories: risks,
      mitigation,
      contingency: this.calculateContingency(risks)
    };
  }

  private async generateFinalResult(
    quote: QuoteResult,
    workflow: WorkflowResult,
    compliance: ComplianceResult,
    risk: RiskAssessmentResult,
    questionnaire: EnterpriseQuestionnaire
  ): Promise<EnterpriseQuoteResult> {
    // Combine all results into enterprise quote
    return {
      ...quote,
      tenantId: questionnaire.tenantId,
      projectId: questionnaire.projectId,
      workflow,
      compliance,
      marketIntelligence: await this.generateMarketIntelligence(questionnaire),
      aiInsights: await this.generateAIInsights(questionnaire, quote),
      riskAssessment: risk,
      approvalStatus: "pending",
      nextSteps: await this.generateNextSteps(questionnaire, workflow),
      metadata: await this.generateMetadata(questionnaire)
    };
  }

  private async trackAnalytics(
    questionnaire: EnterpriseQuestionnaire,
    result: EnterpriseQuoteResult
  ): Promise<void> {
    if (!this.analytics.enabled) return;
    
    // Track comprehensive analytics
    await this.trackQuoteAnalytics(questionnaire, result);
    await this.trackUserBehavior(questionnaire);
    await this.trackBusinessMetrics(result);
  }

  private async storeQuote(
    questionnaire: EnterpriseQuestionnaire,
    result: EnterpriseQuoteResult
  ): Promise<void> {
    // Store in enterprise database with full audit trail
    await this.database.storeQuote(questionnaire, result);
    await this.database.createAuditLog(questionnaire, result);
  }

  // Additional enterprise methods...
  async getQuoteHistory(tenantId: string, filters: QuoteFilters): Promise<EnterpriseQuoteResult[]> {
    // Implement quote history with advanced filtering
  }

  async generateReport(tenantId: string, reportType: string, filters: ReportFilters): Promise<Report> {
    // Generate comprehensive enterprise reports
  }

  async updateWorkflow(quoteId: string, action: WorkflowAction): Promise<WorkflowResult> {
    // Update workflow status and progress
  }

  async exportQuote(quoteId: string, format: ExportFormat): Promise<ExportResult> {
    // Export quote in various formats
  }
}

// ------------------------------
// Enterprise Factory & Utilities
// ------------------------------

export interface QuoteCalculationOptions {
  tenantId?: string;
  marketConditions?: MarketCondition;
  aiOptimization?: boolean;
  complianceChecks?: boolean;
  workflowEnabled?: boolean;
  realtimeUpdates?: boolean;
}

export const makeEnterprisePricer = (config: EnterpriseConfig) => {
  return new EnterpriseCostCalculator(config);
};

// Default enterprise configuration
export const defaultEnterpriseConfig: EnterpriseConfig = {
  baseRate: 1000,
  currency: "GBP",
  regionMultiplier: 1,
  defaultMarginPct: 0.25,
  contingencyPct: 0.10,
  discountPct: 0,
  roundingQuantum: 50,
  tenantId: "default",
  companyName: "Enterprise Cost Calculator",
  tenantTier: "enterprise",
  customBranding: {
    logo: "",
    primaryColor: "#7F00FD",
    secondaryColor: "#22FCB0",
    accentColor: "#2181FA",
    customCSS: "",
    domain: "",
    favicon: ""
  },
  pricingTiers: {
    basic: {
      name: "Basic",
      monthlyPrice: 99,
      features: ["Basic calculator", "Standard support"],
      limits: {
        maxQuotes: 100,
        maxUsers: 5,
        maxIntegrations: 2,
        customBranding: false,
        aiOptimization: false,
        advancedAnalytics: false,
        prioritySupport: false
      }
    },
    professional: {
      name: "Professional",
      monthlyPrice: 299,
      features: ["Advanced calculator", "Priority support", "Custom branding"],
      limits: {
        maxQuotes: 1000,
        maxUsers: 25,
        maxIntegrations: 10,
        customBranding: true,
        aiOptimization: false,
        advancedAnalytics: true,
        prioritySupport: true
      }
    },
    enterprise: {
      name: "Enterprise",
      monthlyPrice: 999,
      features: ["Full enterprise features", "AI optimization", "Advanced analytics"],
      limits: {
        maxQuotes: -1,
        maxUsers: -1,
        maxIntegrations: -1,
        customBranding: true,
        aiOptimization: true,
        advancedAnalytics: true,
        prioritySupport: true
      }
    },
    custom: {
      name: "Custom",
      monthlyPrice: 0,
      features: ["Fully customized solution"],
      limits: {
        maxQuotes: -1,
        maxUsers: -1,
        maxIntegrations: -1,
        customBranding: true,
        aiOptimization: true,
        advancedAnalytics: true,
        prioritySupport: true
      }
    }
  },
  marketIntelligence: {
    enabled: true,
    dataSources: [],
    updateFrequency: "daily",
    regionalPricing: {},
    competitorAnalysis: {
      competitors: [],
      marketShare: {},
      pricingBenchmarks: [],
      winLossAnalysis: []
    }
  },
  aiEngine: {
    enabled: true,
    model: "hybrid",
    trainingData: {
      historicalQuotes: 0,
      successRate: 0,
      marketData: 0,
      competitorData: 0,
      lastTraining: new Date()
    },
    optimizationFactors: [],
    learningRate: 0.01,
    confidenceThreshold: 0.8
  },
  security: {
    authentication: {
      sso: { enabled: false, providers: [], defaultProvider: "", autoProvisioning: false },
      mfa: { enabled: true, methods: ["totp"], required: false, gracePeriod: 0 },
      passwordPolicy: { minLength: 8, complexity: true, expiration: 90 },
      sessionManagement: { timeout: 3600, maxSessions: 5, concurrent: false }
    },
    authorization: {
      rbac: { enabled: true, hierarchical: true, inheritance: true, dynamic: false },
      permissions: [],
      roles: [],
      policies: []
    },
    dataProtection: {
      encryption: {
        algorithm: "aes-256",
        keyManagement: {
          provider: "aws-kms",
          rotation: true,
          rotationPeriod: 90,
          backup: true
        },
        atRest: true,
        inTransit: true,
        endToEnd: false
      },
      dataResidency: { regions: ["eu-west-1"], compliance: [] },
      backup: { frequency: "daily", retention: 365, location: "eu-west-1", encryption: true },
      retention: { period: 2555, archive: true, deletion: true }
    },
    audit: { enabled: true, retention: 2555, realtime: true, alerts: true },
    compliance: { frameworks: ["gdpr"], certifications: [], audits: [], policies: [] }
  },
  compliance: {
    frameworks: ["gdpr"],
    certifications: [],
    audits: [],
    policies: []
  },
  integrations: {
    enabled: true,
    providers: [],
    webhooks: [],
    api: { rateLimiting: true, authentication: true, monitoring: true }
  },
  workflow: {
    enabled: true,
    stages: [],
    rules: [],
    escalations: [],
    notifications: { email: true, sms: false, slack: false, teams: false }
  },
  analytics: {
    enabled: true,
    tracking: {
      events: ["quote_created", "quote_viewed", "quote_exported"],
      properties: ["tenant", "user", "project_type", "features"],
      userIdentification: true,
      sessionTracking: true,
      funnelAnalysis: true
    },
    reporting: {
      scheduled: [],
      adhoc: true,
      templates: [],
      delivery: { email: true, api: true, webhook: false }
    },
    dashboards: {
      default: "executive",
      custom: [],
      sharing: { enabled: true, permissions: ["view", "edit", "admin"] },
      realtime: true
    },
    exports: {
      formats: ["pdf", "excel", "csv", "json"],
      destinations: ["email", "api", "webhook"],
      scheduling: { enabled: true, maxFrequency: "daily" }
    }
  },
  api: {
    version: "v2.0.0",
    rateLimiting: {
      enabled: true,
      limits: { default: { requests: 1000, period: 3600, burst: 100 } },
      burst: true,
      sliding: true
    },
    authentication: {
      methods: ["api_key", "jwt", "oauth2"],
      keyRotation: true,
      ipWhitelist: [],
      scopes: []
    },
    documentation: {
      openapi: true,
      swagger: true,
      examples: [],
      sdk: { languages: ["javascript", "python", "java", "csharp"], documentation: "", examples: "", support: "" }
    },
    monitoring: { logging: true, metrics: true, alerting: true, tracing: true }
  }
};

// Example usage for enterprise clients
export const sampleEnterpriseAnswers: EnterpriseQuestionnaire = {
  // ... existing questionnaire fields
  productType: "saas_webapp",
  features: ["auth", "payments", "database", "ai", "admin", "analytics"],
  designLevel: "custom_premium",
  timeline: "standard",
  team: "full",
  supportPlan: "full",
  
  // Enterprise-specific fields
  tenantId: "enterprise-client-123",
  projectId: "proj-2024-001",
  clientInfo: {
    companyName: "Enterprise Corp",
    industry: "Fintech",
    size: "enterprise",
    region: "EU",
    timezone: "Europe/London",
    contactPerson: {
      name: "John Smith",
      role: "CTO",
      email: "john.smith@enterprise.com",
      phone: "+44 20 1234 5678",
      decisionMaker: true
    },
    budget: {
      min: 50000,
      max: 200000,
      currency: "GBP",
      flexibility: "flexible"
    },
    timeline: {
      startDate: new Date("2024-06-01"),
      endDate: new Date("2024-12-31"),
      milestones: [],
      dependencies: [],
      criticalPath: false
    }
  },
  businessContext: {
    businessGoals: ["Increase efficiency", "Reduce costs", "Improve user experience"],
    successMetrics: ["User adoption", "Cost savings", "Performance improvement"],
    constraints: ["Budget limitations", "Timeline constraints", "Compliance requirements"],
    risks: [],
    stakeholders: [],
    budgetApproval: {
      levels: 3,
      stakeholders: ["CTO", "CFO", "CEO"],
      timeline: 30,
      autoApproval: false,
      escalationRules: ["Escalate after 7 days", "Notify CEO after 14 days"]
    }
  },
  compliance: {
    frameworks: ["gdpr", "sox"],
    certifications: ["ISO 27001"],
    auditTrails: true,
    dataRetention: 2555,
    securityLevel: "high",
    regionalCompliance: []
  },
  integrations: {
    systems: [],
    apis: [],
    dataMigration: {
      source: "Legacy system",
      volume: 1000000,
      format: "CSV",
      validation: true,
      rollback: true
    },
    realtimeSync: true,
    backup: {
      frequency: "hourly",
      retention: 90,
      location: "EU",
      encryption: true,
      testing: true
    }
  },
  workflow: {
    approvalStages: [],
    notifications: {
      channels: ["email", "slack"],
      frequency: "realtime",
      recipients: ["project-manager", "stakeholders"],
      templates: ["quote_created", "approval_required", "quote_approved"]
    },
    escalations: {
      triggers: ["timeout", "rejection"],
      actions: ["notify_manager", "create_ticket"],
      timeline: 24,
      maxLevels: 3
    },
    reporting: {
      frequency: "weekly",
      formats: ["pdf", "excel"],
      recipients: ["executives", "project-team"],
      dashboards: true,
      realtime: true
    }
  },
  marketData: {
    region: "EU",
    industry: "Fintech",
    competition: ["Competitor A", "Competitor B"],
    marketTrends: ["AI adoption", "Cloud migration"],
    seasonalFactors: ["Q4 budget flush"],
    economicConditions: "Stable growth"
  },
  aiPreferences: {
    optimization: true,
    recommendations: true,
    marketIntelligence: true,
    riskAssessment: true,
    customAlgorithms: []
  }
};

// To try enterprise pricing:
// const enterprisePricer = makeEnterprisePricer(defaultEnterpriseConfig);
// const quote = await enterprisePricer.calculateQuote(sampleEnterpriseAnswers, {
//   aiOptimization: true,
//   complianceChecks: true,
//   workflowEnabled: true
// });
// console.log(JSON.stringify(quote, null, 2));

// ------------------------------
// Legacy Exports for Backward Compatibility
// ------------------------------

export const defaultConfig = {
  baseRate: 1000,
  currency: "GBP",
  regionMultiplier: 1,
  defaultMarginPct: 0.25,
  contingencyPct: 0.10,
  discountPct: 0,
  roundingQuantum: 50,
  aggregationMode: "balanced",
  maxFeatureFactor: 3.0,
  hourlyRate: 65,
};

export const productTypes = {
  landing: { key: "landing", label: "Landing Page / One-Pager", factor: 0.6 },
  corporate: { key: "corporate", label: "Corporate Website (5–10 pages)", factor: 1.0 },
  ecommerce: { key: "ecommerce", label: "E-commerce Store", factor: 1.8 },
  marketplace: { key: "marketplace", label: "Marketplace", factor: 2.5 },
  saas_webapp: { key: "saas_webapp", label: "SaaS / Web Application", factor: 2.5 },
  mobile_native: { key: "mobile_native", label: "Mobile App (iOS/Android native)", factor: 2.2 },
  mobile_cross: { key: "mobile_cross", label: "Cross-platform Mobile App", factor: 2.8 },
  desktop_app: { key: "desktop_app", label: "Desktop Application", factor: 2.4 },
  design_only: { key: "design_only", label: "Design Only (UI/UX)", factor: 0.5 },
};

export const features = [
  { key: "auth", label: "Auth & Users", factor: 1.1, category: "core", weight: 2 },
  { key: "payments", label: "Payments", factor: 1.2, category: "payments", weight: 3 },
  { key: "database", label: "Database & API", factor: 1.3, category: "data", weight: 3 },
  { key: "ai", label: "AI/ML Features", factor: 1.6, min: 1.5, max: 2.0, category: "ai", weight: 4 },
  { key: "admin", label: "Admin Panel / CRM", factor: 1.4, category: "admin", weight: 3 },
  { key: "chat", label: "Chat / Messaging", factor: 1.2, category: "comm", weight: 2 },
  { key: "integrations", label: "3rd-party Integrations", factor: 1.1, category: "integrations", weight: 1 },
  { key: "i18n", label: "Multi-language", factor: 1.2, category: "i18n", weight: 2 },
  { key: "custom_animations", label: "Custom Animations", factor: 1.1, category: "ux", weight: 1 },
  { key: "security", label: "Enhanced Security (2FA/JWT)", factor: 1.2, category: "security", weight: 2 },
  { key: "seo", label: "SEO Setup", factor: 1.05, category: "seo", weight: 1, additiveUnits: 5 },
  { key: "analytics", label: "Analytics & Events", factor: 1.05, category: "analytics", weight: 1, additiveUnits: 5 },
  { key: "maps", label: "Maps / Geo", factor: 1.1, category: "maps", weight: 1 },
  { key: "file_storage", label: "File Storage/Uploads", factor: 1.1, category: "storage", weight: 1 },
  { key: "realtime", label: "Realtime (WS/RTC)", factor: 1.25, category: "realtime", weight: 3 },
  { key: "notifications", label: "Push/Email Notifications", factor: 1.1, category: "notifications", weight: 1 },
  { key: "search", label: "Advanced Search", factor: 1.15, category: "search", weight: 2 },
  { key: "roles", label: "Roles & Permissions", factor: 1.15, category: "roles", weight: 2 },
  { key: "booking", label: "Booking/Scheduling", factor: 1.2, category: "booking", weight: 2 },
  { key: "cms", label: "CMS", factor: 1.15, category: "cms", weight: 2 },
  { key: "marketplace_multivendor", label: "Multi-vendor Marketplace", factor: 1.3, category: "marketplace", weight: 4 },
  { key: "gdpr", label: "GDPR/Compliance", factor: 1.15, category: "compliance", weight: 3 },
];

export const designLevels = {
  basic_template: { key: "basic_template", label: "Basic / Template", factor: 0.8 },
  standard_modern: { key: "standard_modern", label: "Standard Modern", factor: 1.0 },
  custom_premium: { key: "custom_premium", label: "Custom Premium", factor: 1.4 },
  luxury: { key: "luxury", label: "Luxury / Motion-heavy", factor: 2.0 },
};

export const timelines = {
  relaxed: { key: "relaxed", label: "> 3 months", factor: 0.8 },
  standard: { key: "standard", label: "2–3 months", factor: 1.0 },
  urgent: { key: "urgent", label: "~ 1 month", factor: 1.3 },
  very_urgent: { key: "very_urgent", label: "< 2 weeks", factor: 1.7 },
};

export const teams = {
  solo: { key: "solo", label: "Solo Developer", factor: 1.0 },
  small: { key: "small", label: "Small Team (2–3)", factor: 1.4 },
  full: { key: "full", label: "Full Team (PM+Devs+Designer+QA)", factor: 2.0 },
};

export const supportPlans = {
  none: { key: "none", label: "No Support", factor: 1.0 },
  basic: { key: "basic", label: "1 month", factor: 1.1 },
  standard: { key: "standard", label: "3 months", factor: 1.3 },
  full: { key: "full", label: "12 months", factor: 1.6 },
};

export interface Questionnaire {
  productType: string;
  features: string[];
  pagesEstimate?: number;
  monthlyActiveUsers?: number;
  integrationsCount?: number;
  designLevel: string;
  timeline: string;
  team: string;
  supportPlan: string;
  isRegulatedIndustry?: boolean;
  contentProduction?: string;
  testingLevel?: string;
  dataMigration?: string;
  trainingSessions?: number;
  warrantyMonths?: number;
  extraLicensesCost?: number;
  extraHostingSetup?: boolean;
  // Business context properties
  industry?: string;
  marketPosition?: string;
  regulatoryEnvironment?: string;
  businessCriticality?: string;
}

export interface QuoteResult {
  currency: string;
  baseRate: number;
  subtotal: number;
  marginApplied: number;
  contingencyApplied: number;
  discountApplied: number;
  regionMultiplier: number;
  total: number;
  rangeLow: number;
  rangeHigh: number;
  riskScore: number;
  monthlySupportFee?: number;
  breakdown: any[];
}

export const makePricer = (config?: any) => {
  return {
    calculateQuote: (questionnaire: Questionnaire) => {
      // Simple calculation for backward compatibility
      let basePrice = config?.baseRate || 1000;
      let total = basePrice;
      
      // Apply basic factors
      if (questionnaire.features.length > 0) {
        total *= (1 + questionnaire.features.length * 0.1);
      }
      
      // Apply design level
      const designFactor = designLevels[questionnaire.designLevel as keyof typeof designLevels]?.factor || 1.0;
      total *= designFactor;
      
      // Apply timeline
      const timelineFactor = timelines[questionnaire.timeline as keyof typeof timelines]?.factor || 1.0;
      total *= timelineFactor;
      
      // Apply team
      const teamFactor = teams[questionnaire.team as keyof typeof teams]?.factor || 1.0;
      total *= teamFactor;
      
      // Apply support
      const supportFactor = supportPlans[questionnaire.supportPlan as keyof typeof supportPlans]?.factor || 1.0;
      total *= supportFactor;
      
      // Calculate margins
      const margin = total * (config?.defaultMarginPct || 0.25);
      const contingency = (total + margin) * (config?.contingencyPct || 0.10);
      
      const finalTotal = total + margin + contingency;
      
      return {
        currency: config?.currency || "GBP",
        baseRate: config?.baseRate || 1000,
        subtotal: Math.round(total),
        marginApplied: Math.round(margin),
        contingencyApplied: Math.round(contingency),
        discountApplied: 0,
        regionMultiplier: config?.regionMultiplier || 1,
        total: Math.round(finalTotal),
        rangeLow: Math.round(finalTotal * 0.85),
        rangeHigh: Math.round(finalTotal * 1.25),
        riskScore: 50,
        monthlySupportFee: undefined,
        breakdown: [],
      };
    }
  };
};
