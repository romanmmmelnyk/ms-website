import { ref, computed } from 'vue'

export interface PolicyVersion {
  id: string
  version: string
  effectiveDate: string
  description: string
  content?: string
  lastModified?: string
  status: 'active' | 'draft' | 'archived'
}

export interface PolicyDocument {
  id: string
  title: string
  documentType: string
  companyName: string
  currentVersion: string
  versions: PolicyVersion[]
}

// Mock data - in production, this would come from an API
const privacyPolicyVersions: PolicyVersion[] = [
  {
    id: 'v1.0',
    version: '1.0',
    effectiveDate: '1 September 2025',
    description: 'Comprehensive privacy notice with detailed data processing information and user rights',
    lastModified: '1 September 2025',
    status: 'active',
    content: `
      <div class="policy-content">
        <section class="document-section">
          <h2>PRIVACY NOTICE</h2>
          <p><strong>Last updated September 01, 2025</strong></p>
          
          <p>This Privacy Notice for __________ ('we', 'us', or 'our'), describes how and why we might access, collect, store, use, and/or share ('process') your personal information when you use our services ('Services'), including when you:</p>
          <ul>
            <li>Visit our website at https://moth.solutions or any website of ours that links to this Privacy Notice</li>
            <li>Use Software Development. Moth Solutions Ltd is an information technology company that provides a wide range of software development services. Our work includes the design, development, and maintenance of custom digital solutions such as customer relationship management (CRM) systems, corporate and personal websites, online portfolios, and other tailored applications. We focus on delivering solutions that meet the specific needs of businesses and individuals.</li>
            <li>Engage with us in other related ways, including any sales, marketing, or events</li>
          </ul>
          
          <p><strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services.</p>
        </section>

        <section class="document-section">
          <h2>SUMMARY OF KEY POINTS</h2>
          <p>This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.</p>
          
          <ul>
            <li><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</li>
            <li><strong>Do we process any sensitive personal information?</strong> Some of the information may be considered 'special' or 'sensitive' in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information.</li>
            <li><strong>Do we collect any information from third parties?</strong> We may collect information from public databases, marketing partners, social media platforms, and other outside sources.</li>
            <li><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</li>
            <li><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties.</li>
            <li><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</li>
            <li><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</li>
          </ul>
        </section>

        <section class="document-section">
          <h2>TABLE OF CONTENTS</h2>
          <ol>
            <li>WHAT INFORMATION DO WE COLLECT?</li>
            <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
            <li>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
            <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
            <li>HOW DO WE HANDLE YOUR SOCIAL LOGINS?</li>
            <li>IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</li>
            <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
            <li>DO WE COLLECT INFORMATION FROM MINORS?</li>
            <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
            <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
            <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
            <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
            <li>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</li>
          </ol>
        </section>

        <section class="document-section">
          <h2>1. WHAT INFORMATION DO WE COLLECT?</h2>
          
          <h3>Personal information you disclose to us</h3>
          <p><strong>In Short:</strong> We collect personal information that you provide to us.</p>
          <p>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
          <p><strong>Sensitive Information.</strong> We do not process sensitive information.</p>
          <p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>
          
          <h3>Information automatically collected</h3>
          <p><strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>
          <p>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>
          <p>Like many businesses, we also collect information through cookies and similar technologies.</p>
        </section>

        <section class="document-section">
          <h2>2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
          <p><strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>
          <p>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
        </section>

        <section class="document-section">
          <h2>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
          <p><strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following third parties.</p>
          <p>We may need to share your personal information in the following situations:</p>
          <ul>
            <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
            <li><strong>Affiliates.</strong> We may share your information with our affiliates, in which case we will require those affiliates to honour this Privacy Notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.</li>
            <li><strong>Business Partners.</strong> We may share your information with our business partners to offer you certain products, services, or promotions.</li>
          </ul>
        </section>

        <section class="document-section">
          <h2>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
          <p><strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your information.</p>
          <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.</p>
          <p>We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.</p>
          <p>Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>
        </section>

        <section class="document-section">
          <h2>5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>
          <p><strong>In Short:</strong> If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.</p>
          <p>Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or X logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.</p>
          <p>We will use the information we receive only for the purposes that are described in this Privacy Notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.</p>
        </section>

        <section class="document-section">
          <h2>6. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</h2>
          <p><strong>In Short:</strong> We may transfer, store, and process your information in countries other than your own.</p>
          <p>Our servers are located in. Regardless of your location, please be aware that your information may be transferred to, stored by, and processed by us in our facilities and in the facilities of the third parties with whom we may share your personal information (see 'WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?' above), including facilities in and other countries.</p>
          <p>If you are a resident in the European Economic Area (EEA), United Kingdom (UK), or Switzerland, then these countries may not necessarily have data protection laws or other similar laws as comprehensive as those in your country. However, we will take all necessary measures to protect your personal information in accordance with this Privacy Notice and applicable law.</p>
        </section>

        <section class="document-section">
          <h2>7. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
          <p><strong>In Short:</strong> We keep your information for as long as necessary to fulfil the purposes outlined in this Privacy Notice unless otherwise required by law.</p>
          <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).</p>
          <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>
        </section>

        <section class="document-section">
          <h2>8. DO WE COLLECT INFORMATION FROM MINORS?</h2>
          <p><strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years of age.</p>
          <p>We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at __________.</p>
        </section>

        <section class="document-section">
          <h2>9. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
          <p><strong>In Short:</strong> You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</p>
          
          <h3>Withdrawing your consent:</h3>
          <p>If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' below.</p>
          <p>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>
          
          <h3>Account Information</h3>
          <p>If you would at any time like to review or change the information in your account or terminate your account, you can:</p>
          <p>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</p>
        </section>

        <section class="document-section">
          <h2>10. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
          <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ('DNT') feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.</p>
        </section>

        <section class="document-section">
          <h2>11. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
          <p><strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
          <p>We may update this Privacy Notice from time to time. The updated version will be indicated by an updated 'Revised' date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</p>
        </section>

        <section class="document-section">
          <h2>12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
          <p>If you have questions or comments about this notice, you may contact us by post at:</p>
          <div class="contact-info">
            <p><strong>Email:</strong> {{ email }}</p>
            <p><strong>Phone:</strong> {{ phone }}</p>
            <p><strong>Address:</strong> {{ address }}</p>
          </div>
        </section>

        <section class="document-section">
          <h2>13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
          <p>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a data subject access request.</p>
        </section>
      </div>
    `
  },
  {
    id: 'v0.9',
    version: '0.9',
    effectiveDate: '1 December 2023',
    description: 'Draft version for legal review and stakeholder feedback',
    lastModified: '1 December 2023',
    status: 'archived',
    content: `
      <div class="policy-content">
        <section>
          <h2>1. Introduction</h2>
          <p>This is a draft version of our privacy policy that was created for internal review and stakeholder feedback.</p>
          <p><em>Note: This version is no longer active and is kept for historical reference only.</em></p>
        </section>
        
        <section>
          <h2>2. Data Collection</h2>
          <p>Draft content regarding data collection practices...</p>
        </section>
      </div>
    `
  }
]

const termsOfServiceVersions: PolicyVersion[] = [
  {
    id: 'v1.0',
    version: '1.0',
    effectiveDate: '15 January 2024',
    description: 'Initial terms of service with comprehensive service agreements',
    lastModified: '15 January 2024',
    status: 'active',
    content: `
      <div class="policy-content">
        <section>
          <h2>1. General Information</h2>
          <p>By accessing and using Moth Solutions' website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
          <p>These Terms of Service govern your use of our website and all services provided by Moth Solutions.</p>
        </section>
        
        <section>
          <h2>2. Description of Service</h2>
          <p>Moth Solutions provides digital development services including:</p>
          <ul>
            <li>Web development and design</li>
            <li>Software development and solutions</li>
            <li>Digital marketing services</li>
            <li>UI/UX design and automation</li>
            <li>Project consultation and cost estimation</li>
          </ul>
        </section>
        
        <section>
          <h2>3. Project Terms</h2>
          <h3>3.1 Project Scope</h3>
          <p>All project scopes will be clearly defined in written agreements before work begins. Any changes to scope may result in additional charges.</p>
          
          <h3>3.2 Payment Terms</h3>
          <p>Payment terms will be specified in individual project agreements. Generally, we require:</p>
          <ul>
            <li>50% deposit before project commencement</li>
            <li>50% upon project completion</li>
            <li>Payment within 30 days of invoice date</li>
          </ul>
          
          <h3>3.3 Timeline</h3>
          <p>Project timelines are estimates and may vary based on project complexity and client feedback cycles.</p>
        </section>
        
        <section>
          <h2>4. Intellectual Property</h2>
          <p>Upon full payment, clients will own the final deliverables created specifically for their project. Moth Solutions retains rights to:</p>
          <ul>
            <li>General methodologies and processes</li>
            <li>Pre-existing code libraries and frameworks</li>
            <li>Portfolio rights to showcase completed work</li>
          </ul>
        </section>
        
        <section>
          <h2>5. Limitation of Liability</h2>
          <p>In no event shall Moth Solutions or its suppliers be liable for any damages arising out of the use or inability to use our services.</p>
        </section>
        
        <section>
          <h2>6. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom.</p>
        </section>
        
        <section>
          <h2>7. Contact Information</h2>
          <p>If you have any questions about these Terms of Service, please contact us:</p>
          <div class="contact-info">
            <p><strong>Email:</strong> hello@mothsolutions.com</p>
            <p><strong>Phone:</strong> +44 7787 292197</p>
            <p><strong>Address:</strong> United Kingdom</p>
          </div>
        </section>
      </div>
    `
  },
  {
    id: 'v0.9',
    version: '0.9',
    effectiveDate: '1 December 2023',
    description: 'Draft version for legal review and business requirements',
    lastModified: '1 December 2023',
    status: 'archived',
    content: `
      <div class="policy-content">
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>This is a draft version of our terms of service that was created for internal review and legal consultation.</p>
          <p><em>Note: This version is no longer active and is kept for historical reference only.</em></p>
        </section>
        
        <section>
          <h2>2. Service Description</h2>
          <p>Draft content regarding service descriptions...</p>
        </section>
      </div>
    `
  }
]

const policies = ref<PolicyDocument[]>([
  {
    id: 'privacy-policy',
    title: 'MOTH SOLUTIONS - PRIVACY POLICY',
    documentType: 'Privacy Policy',
    companyName: 'Moth Solutions',
    currentVersion: 'v1.0',
    versions: privacyPolicyVersions
  },
  {
    id: 'terms-of-service',
    title: 'MOTH SOLUTIONS - TERMS OF SERVICE',
    documentType: 'Terms of Service',
    companyName: 'Moth Solutions',
    currentVersion: 'v1.0',
    versions: termsOfServiceVersions
  }
])

export function usePolicies() {
  const getPolicy = (policyId: string) => {
    return computed(() => policies.value.find(p => p.id === policyId))
  }

  const getPolicyVersion = (policyId: string, versionId: string) => {
    return computed(() => {
      const policy = policies.value.find(p => p.id === policyId)
      return policy?.versions.find(v => v.id === versionId)
    })
  }

  const getPolicyHistory = (policyId: string) => {
    return computed(() => {
      const policy = policies.value.find(p => p.id === policyId)
      return policy?.versions || []
    })
  }

  const getCurrentVersion = (policyId: string) => {
    return computed(() => {
      const policy = policies.value.find(p => p.id === policyId)
      return policy?.versions.find(v => v.id === policy.currentVersion)
    })
  }

  const addPolicyVersion = (policyId: string, version: PolicyVersion) => {
    const policy = policies.value.find(p => p.id === policyId)
    if (policy) {
      policy.versions.unshift(version)
      policy.currentVersion = version.id
    }
  }

  const updatePolicyVersion = (policyId: string, versionId: string, updates: Partial<PolicyVersion>) => {
    const policy = policies.value.find(p => p.id === policyId)
    if (policy) {
      const version = policy.versions.find(v => v.id === versionId)
      if (version) {
        Object.assign(version, updates)
      }
    }
  }

  return {
    policies: computed(() => policies.value),
    getPolicy,
    getPolicyVersion,
    getPolicyHistory,
    getCurrentVersion,
    addPolicyVersion,
    updatePolicyVersion
  }
}
