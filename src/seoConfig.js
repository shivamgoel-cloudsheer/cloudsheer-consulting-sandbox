export const SITE_URL = 'https://www.cloudsheer.com'

export const ROUTE_META = {
  '/': {
    title: 'Cloudsheer Consulting | Salesforce & Agentforce Partner',
    description: 'Certified Salesforce & Agentforce partner. Cut support costs by 40%, respond to leads in under 2 seconds with AI agents that run 24/7 inside your CRM.',
  },
  '/services': {
    title: 'Salesforce Implementation Services | Cloudsheer Consulting',
    description: 'Greenfield, brownfield, integration, and managed services for Salesforce. Delivered by 40+ certified consultants across Dallas, Delhi, London, and NY.',
  },
  '/solutions': {
    title: 'Salesforce Solutions | Cloudsheer Consulting',
    description: 'Salesforce solutions across Sales, Service, Marketing, Commerce, Experience, Analytics, Platform, Slack, and Health Cloud — plus Agentforce AI agents.',
  },
  '/solutions/agentforce': {
    title: 'Agentforce AI Agent Deployment | Cloudsheer Consulting',
    description: 'Deploy autonomous Agentforce agents for support, sales, and operations inside Salesforce. Certified partner with proven ROI playbooks.',
  },
  '/solutions/sales-cloud': {
    title: 'Salesforce Sales Cloud Consulting | Cloudsheer',
    description: 'Sales Cloud implementation, optimization, and integration. Pipeline visibility, lead routing, forecasting, and AI-assisted selling for revenue teams.',
  },
  '/solutions/service-cloud': {
    title: 'Salesforce Service Cloud Consulting | Cloudsheer',
    description: 'Service Cloud setup with omni-channel routing, knowledge base, case automation, and Agentforce-powered self-service.',
  },
  '/solutions/marketing-cloud': {
    title: 'Salesforce Marketing Cloud Consulting | Cloudsheer',
    description: 'Marketing Cloud implementation: Journey Builder, Email Studio, audience segmentation, and Data Cloud unification.',
  },
  '/solutions/commerce-cloud': {
    title: 'Salesforce Commerce Cloud Consulting | Cloudsheer',
    description: 'Commerce Cloud B2C and B2B implementations. Storefronts, payments, catalog management, and AI-powered merchandising on Salesforce.',
  },
  '/solutions/experience-cloud': {
    title: 'Salesforce Experience Cloud Consulting | Cloudsheer',
    description: 'Build customer, partner, and employee portals on Experience Cloud. Branded sites surfacing Salesforce data with Agentforce agents.',
  },
  '/solutions/analytics': {
    title: 'CRM Analytics & Tableau Consulting | Cloudsheer',
    description: 'Real-time dashboards, AI predictions, and visual analytics embedded in Salesforce. CRM Analytics and Tableau implementation by certified specialists.',
  },
  '/solutions/platform': {
    title: 'Salesforce Platform Development | Cloudsheer',
    description: 'Custom Salesforce Platform builds: Lightning Web Components, Apex, Flow automation, integrations, and DevOps for enterprise orgs.',
  },
  '/solutions/slack': {
    title: 'Slack & Salesforce Integration | Cloudsheer',
    description: 'Slack integration with Salesforce: Sales Elevate, Service workflows, swarming channels, and Agentforce agents inside Slack.',
  },
  '/solutions/health-cloud': {
    title: 'Salesforce Health Cloud Consulting | Cloudsheer',
    description: 'Health Cloud implementation for providers, payers, and life sciences. HIPAA-aligned care management workflows with Agentforce.',
  },
  '/case-studies/agentforce-manufacturing': {
    title: 'Case Study: 92% Autonomous Cases with Agentforce | Cloudsheer',
    description: 'How Cloudsheer built the multi-agent Agentforce architecture Salesforce said was not possible. Shipped in 11 weeks, 12K+ cases/month, $340K saved annually.',
  },
  '/about': {
    title: 'About Cloudsheer | Salesforce & Agentforce Specialists',
    description: 'Cloudsheer is a 40+ person certified Salesforce and Agentforce consulting firm with offices in Dallas, New York, Delhi, and London.',
  },
  '/contact': {
    title: 'Contact Cloudsheer Consulting | Salesforce & Agentforce',
    description: 'Talk to Cloudsheer about Salesforce implementation or Agentforce deployment. Free 30-minute discovery call available.',
  },
  '/blog': {
    title: 'Salesforce & Agentforce Blog | Cloudsheer Insights',
    description: 'Salesforce and Agentforce news, implementation guides, and ROI analysis from Cloudsheer\'s certified consultants.',
  },
  '/careers': {
    title: 'Careers at Cloudsheer | Salesforce & Agentforce Jobs',
    description: 'Open roles at Cloudsheer Consulting for Salesforce developers, architects, and Agentforce specialists.',
  },
  '/privacy': {
    title: 'Privacy Policy | Cloudsheer Consulting',
    description: 'Cloudsheer Consulting privacy policy describing how we collect, use, and protect personal data.',
  },
  '/terms': {
    title: 'Terms & Conditions | Cloudsheer Consulting',
    description: 'Terms and conditions governing the use of Cloudsheer Consulting services and website.',
  },
}

function setMeta(attrName, attrValue, content) {
  let el = document.head.querySelector(`meta[${attrName}="${attrValue}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attrName, attrValue)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function applySEO({ title, description, pathname }) {
  const path = pathname === '/' ? '/' : pathname.replace(/\/$/, '')
  const url = `${SITE_URL}${path}`

  if (title) document.title = title
  if (description) setMeta('name', 'description', description)
  if (title) setMeta('property', 'og:title', title)
  if (description) setMeta('property', 'og:description', description)
  setMeta('property', 'og:url', url)
  if (title) setMeta('name', 'twitter:title', title)
  if (description) setMeta('name', 'twitter:description', description)
  setLink('canonical', url)
}
