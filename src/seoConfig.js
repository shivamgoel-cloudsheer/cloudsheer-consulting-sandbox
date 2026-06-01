export const SITE_URL = 'https://www.cloudsheer.com'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

export const HOMEPAGE_FAQS = [
  { q: "What if we're not ready for Agentforce?",
    a: "We assess your Salesforce org, data quality, and processes to determine readiness. Many clients start with a standard Salesforce implementation and add Agentforce later." },
  { q: "How is Cloudsheer different from a large SI like Deloitte or Accenture?",
    a: "We are a specialist Salesforce firm. Every consultant works with Salesforce and Agentforce daily. You get senior architects on your project, direct access to leadership, and lower overhead." },
  { q: "What does pricing look like?",
    a: "Fixed-price packages starting at $2,999 for standard Salesforce implementations. Agentforce deployments typically range from $9,999 to $50,000+. Every engagement starts with a free discovery call with a detailed estimate." },
  { q: "What happens after go-live?",
    a: "Every project includes 30 days of post-launch support. We offer ongoing managed services for agent monitoring, performance optimization, and new agent deployments." },
  { q: "Can you handle large or multi-cloud projects?",
    a: "Yes. Our 40+ person team spans 4 global offices and covers every major Salesforce cloud plus the full HubSpot stack. For larger engagements, we scale with certified specialists from our extended network." },
  { q: "Do you work on HubSpot too, or only Salesforce?",
    a: "Both. We implement and optimize the full HubSpot stack - Smart CRM, Breeze AI, Marketing, Sales, Service, Content, Data, Commerce Hubs, and the Small Business Bundle. We also handle Salesforce-to-HubSpot migrations, the reverse, and dual-stack integrations." },
  { q: "How do you handle data security and compliance?",
    a: "All work follows enterprise security standards - Salesforce's SOC 2 / HIPAA-eligible / GDPR framework on the Salesforce side, and HubSpot's SOC 2 Type II / GDPR-compliant tooling on the HubSpot side. We design data access, sharing rules, and encryption to match." },
]

const SEGMENT_NAMES = {
  '': 'Home',
  'solutions': 'Solutions',
  'services': 'Services',
  'about': 'About',
  'contact': 'Contact',
  'blog': 'Blog',
  'careers': 'Careers',
  'privacy': 'Privacy Policy',
  'terms': 'Terms & Conditions',
  'case-studies': 'Case Studies',
  'agentforce': 'Agentforce',
  'sales-cloud': 'Sales Cloud',
  'service-cloud': 'Service Cloud',
  'marketing-cloud': 'Marketing Cloud',
  'commerce-cloud': 'Commerce Cloud',
  'experience-cloud': 'Experience Cloud',
  'analytics': 'Analytics & Tableau',
  'platform': 'Platform & AppExchange',
  'slack': 'Slack',
  'health-cloud': 'Health Cloud',
  'financial-services-cloud': 'Financial Services Cloud',
  'life-sciences-cloud': 'Life Sciences Cloud',
  'education-cloud': 'Education Cloud',
  'nonprofit-cloud': 'Nonprofit Cloud',
  'agentforce-manufacturing': 'Agentforce Manufacturing',
  'hubspot': 'HubSpot',
  'hubspot-smart-crm': 'HubSpot Smart CRM',
  'hubspot-breeze-ai': 'HubSpot Breeze AI',
  'hubspot-marketing-hub': 'HubSpot Marketing Hub',
  'hubspot-sales-hub': 'HubSpot Sales Hub',
  'hubspot-service-hub': 'HubSpot Service Hub',
  'hubspot-content-hub': 'HubSpot Content Hub',
  'hubspot-data-hub': 'HubSpot Data Hub',
  'hubspot-commerce-hub': 'HubSpot Commerce Hub',
  'hubspot-small-business-bundle': 'HubSpot Small Business Bundle',
  'aws': 'AWS',
  'microsoft-dynamics': 'Microsoft Dynamics',
  'dynamics-365-customer-experience': 'Customer Experience',
  'dynamics-365-service': 'Service',
  'dynamics-365-supply-chain': 'Supply Chain',
  'dynamics-365-finance': 'Finance',
  'dynamics-365-business-central': 'Business Central',
  'microsoft-power-platform': 'Power Platform',
  'ai-agents': 'AI Agents',
}

function humanize(slug) {
  return SEGMENT_NAMES[slug] || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

export function breadcrumbsFromPath(pathname) {
  if (!pathname || pathname === '/') return [{ name: 'Home', url: '/' }]
  const parts = pathname.split('/').filter(Boolean)
  const crumbs = [{ name: 'Home', url: '/' }]
  let acc = ''
  for (const p of parts) {
    acc += `/${p}`
    crumbs.push({ name: humanize(p), url: acc })
  }
  return crumbs
}

export const ROUTE_META = {
  '/': {
    title: 'Cloudsheer Consulting | Salesforce, HubSpot, AWS, Dynamics & AI Agents',
    description: 'Platform-agnostic implementation partner. Salesforce, HubSpot, AWS, Microsoft Dynamics, and custom AI agents that retire legacy systems - one team for the platforms your business runs on.',
  },
  '/services': {
    title: 'Multi-Platform Implementation Services | Cloudsheer',
    description: 'Greenfield, brownfield, integration, and managed services across Salesforce, HubSpot, AWS, Microsoft Dynamics, and custom AI agents. Delivered by 40+ senior consultants in Dallas, Delhi, London, and NY.',
  },
  '/solutions': {
    title: 'Solutions Across Every Platform You Run | Cloudsheer Consulting',
    description: 'Salesforce and HubSpot for CRM. AWS for cloud infrastructure. Microsoft Dynamics for ERP. Plus custom AI agents that retire the legacy systems none of them fit.',
  },
  '/solutions/aws': {
    title: 'AWS Cloud Consulting | Migration, DevOps, FinOps, AI | Cloudsheer',
    description: 'AWS cloud infrastructure done right - migration, DevOps, security, cost optimization, and Bedrock for AI workloads. AWS partnership track in progress.',
  },
  '/solutions/microsoft-dynamics': {
    title: 'Microsoft Dynamics 365 & Power Platform Consulting | Cloudsheer',
    description: 'Dynamics 365 across Customer Experience, Service, Supply Chain, Finance, and Business Central - plus Power Platform extensibility. Microsoft partnership track in progress.',
  },
  '/solutions/dynamics-365-customer-experience': {
    title: 'Dynamics 365 Customer Experience Consulting | Cloudsheer',
    description: 'Dynamics 365 Sales + Customer Insights builds: pipeline, forecasting, Copilot for Sales, real-time journey orchestration, CDP segmentation, and predictive scoring on shared Dataverse.',
  },
  '/solutions/dynamics-365-service': {
    title: 'Dynamics 365 Service Consulting (Customer Service, Contact Center, Field) | Cloudsheer',
    description: 'Dynamics 365 Customer Service, Contact Center, and Field Service: omnichannel cases, voice + digital channels, work order dispatch, IoT, and Copilot agent assist.',
  },
  '/solutions/dynamics-365-supply-chain': {
    title: 'Dynamics 365 Supply Chain & Commerce Consulting | Cloudsheer',
    description: 'Dynamics 365 Supply Chain Management + Commerce: demand planning, warehouse management, manufacturing, POS, e-commerce, and B2B/B2C - integrated with Finance.',
  },
  '/solutions/dynamics-365-finance': {
    title: 'Dynamics 365 Finance, Project Operations & HR Consulting | Cloudsheer',
    description: 'Dynamics 365 Finance, Project Operations, and Human Resources: close, PSA, statutory reporting, multi-country localizations, controls, and CFO-grade dashboards.',
  },
  '/solutions/dynamics-365-business-central': {
    title: 'Dynamics 365 Business Central Implementation | Cloudsheer',
    description: 'Dynamics 365 Business Central all-in-one ERP for small and medium business - finance, sales, purchasing, inventory, projects, and Copilot - live in 8-14 weeks.',
  },
  '/solutions/microsoft-power-platform': {
    title: 'Microsoft Power Platform Consulting | Cloudsheer',
    description: 'Power Apps, Power Automate, Power BI, Power Pages, and Copilot Studio - low-code apps, automation, analytics, and AI agents with Center of Excellence governance.',
  },
  '/solutions/ai-agents': {
    title: 'Custom AI Agents to Replace Legacy Systems | Cloudsheer',
    description: 'When a box product cannot be made to fit, we build the agent that does. Production-ready, observable, and safe to put in front of customers - across LLMs and your data.',
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
  '/solutions/financial-services-cloud': {
    title: 'Salesforce Financial Services Cloud Consulting | Cloudsheer',
    description: 'Financial Services Cloud implementation for banks, wealth firms, lenders, and insurers. Client 360, automated onboarding, and built-in compliance.',
  },
  '/solutions/life-sciences-cloud': {
    title: 'Salesforce Life Sciences Cloud Consulting | Cloudsheer',
    description: 'Life Sciences Cloud for pharma, biotech, and medical device. Clinical trials, HCP 360, medical affairs, commercial, and patient services - GxP-ready.',
  },
  '/solutions/education-cloud': {
    title: 'Salesforce Education Cloud Consulting | Cloudsheer',
    description: 'Education Cloud for universities, K-12, and continuing education. Recruitment, admissions, student success, advancement, and FERPA-aware workflows.',
  },
  '/solutions/nonprofit-cloud': {
    title: 'Salesforce Nonprofit Cloud Consulting | Cloudsheer',
    description: 'Nonprofit Cloud for foundations, social services, advocacy, and faith organizations. Fundraising, programs, volunteers, and grants on one platform.',
  },
  '/solutions/hubspot': {
    title: 'HubSpot Consulting & Implementation | Cloudsheer',
    description: 'End-to-end HubSpot implementation on Smart CRM - Marketing, Sales, Service, Content, Data, Commerce Hubs - plus Breeze AI rollout, Salesforce migrations, and dual-CRM integrations.',
  },
  '/solutions/hubspot-smart-crm': {
    title: 'HubSpot Smart CRM Consulting | Cloudsheer',
    description: 'Smart CRM architecture, schema design, permissions, automation, and Breeze AI rollout. The CRM foundation under every HubSpot Hub - built for Pro and Enterprise editions.',
  },
  '/solutions/hubspot-breeze-ai': {
    title: 'HubSpot Breeze AI Consulting & Deployment | Cloudsheer',
    description: 'Deploy HubSpot Breeze AI: Breeze Copilot, Breeze Agents (Prospecting, Customer, Content, Social), and Breeze Intelligence enrichment. Wired into your full HubSpot stack.',
  },
  '/solutions/hubspot-marketing-hub': {
    title: 'HubSpot Marketing Hub Consulting | Cloudsheer',
    description: 'HubSpot Marketing Hub implementation: campaigns, workflows, lead scoring, attribution reporting, and Breeze-powered content. Built around your funnel, not a template.',
  },
  '/solutions/hubspot-sales-hub': {
    title: 'HubSpot Sales Hub Consulting | Cloudsheer',
    description: 'HubSpot Sales Hub setup with custom deal stages, sequences, forecasting, prospecting workspace, and Breeze AI lead scoring. Ramp reps in weeks, not quarters.',
  },
  '/solutions/hubspot-service-hub': {
    title: 'HubSpot Service Hub Consulting | Cloudsheer',
    description: 'HubSpot Service Hub deployments: ticketing, customer portal, knowledge base, SLA automation, CSAT/NPS surveys, and Breeze customer agent.',
  },
  '/solutions/hubspot-content-hub': {
    title: 'HubSpot Content Hub Consulting & Development | Cloudsheer',
    description: 'HubSpot Content Hub builds: AI co-writer with brand voice, podcast hosting, content remix, memberships, multi-language sites, and SEO pages tied to Smart CRM.',
  },
  '/solutions/hubspot-data-hub': {
    title: 'HubSpot Data Hub Consulting | Cloudsheer',
    description: 'HubSpot Data Hub setup: two-way sync, Breeze Intelligence enrichment, programmable workflows, data quality automation, custom datasets, and Snowflake data share.',
  },
  '/solutions/hubspot-commerce-hub': {
    title: 'HubSpot Commerce Hub Consulting | Cloudsheer',
    description: 'HubSpot Commerce Hub: CPQ, branded quotes, invoices, payment links, subscriptions, and self-serve customer portals - all wired into Smart CRM.',
  },
  '/solutions/hubspot-small-business-bundle': {
    title: 'HubSpot Small Business Bundle Setup | Cloudsheer',
    description: 'Done-for-you HubSpot Starter Bundle setup - Marketing, Sales, Service, Content, Commerce, Operations Starter editions live in 2-3 weeks for startups and SMBs.',
  },
  '/case-studies/agentforce-manufacturing': {
    title: 'Case Study: 92% Autonomous Cases with Agentforce | Cloudsheer',
    description: 'How Cloudsheer built the multi-agent Agentforce architecture Salesforce said was not possible. Shipped in 11 weeks, 12K+ cases/month, $340K saved annually.',
  },
  '/about': {
    title: 'About Cloudsheer | Salesforce, Agentforce & HubSpot Specialists',
    description: 'Cloudsheer is a 40+ person certified consulting firm covering the full Salesforce stack, Agentforce, and HubSpot - with offices in Dallas, New York, Delhi, and London.',
  },
  '/contact': {
    title: 'Contact Cloudsheer Consulting | Salesforce, Agentforce, HubSpot',
    description: 'Talk to Cloudsheer about Salesforce, Agentforce, or HubSpot - or migrating between them. Free 30-minute discovery call available.',
  },
  '/blog': {
    title: 'Salesforce, Agentforce & HubSpot Blog | Cloudsheer Insights',
    description: 'Implementation guides, ROI analysis, and platform deep-dives across Salesforce, Agentforce, and HubSpot from Cloudsheer\'s certified consultants.',
  },
  '/careers': {
    title: 'Careers at Cloudsheer | Salesforce, Agentforce & HubSpot Jobs',
    description: 'Open roles at Cloudsheer Consulting for Salesforce developers, Agentforce specialists, and HubSpot architects.',
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

/* ─── DOM helpers ───────────────────────────────────────────── */

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

/* ─── Per-page meta + canonical + OG/Twitter ────────────────── */

export function applySEO({ title, description, pathname, image }) {
  const path = pathname === '/' ? '/' : pathname.replace(/\/$/, '')
  const url = `${SITE_URL}${path}`
  const imageUrl = image || DEFAULT_OG_IMAGE

  if (title) document.title = title
  if (description) setMeta('name', 'description', description)
  if (title) setMeta('property', 'og:title', title)
  if (description) setMeta('property', 'og:description', description)
  setMeta('property', 'og:url', url)
  setMeta('property', 'og:image', imageUrl)
  if (title) setMeta('name', 'twitter:title', title)
  if (description) setMeta('name', 'twitter:description', description)
  setMeta('name', 'twitter:image', imageUrl)
  setLink('canonical', url)
}

/* ─── JSON-LD schema injection (per-route, replaces on navigation) */

const SCHEMA_ATTR = 'data-page-schema'

export function setPageSchemas(schemas) {
  // Remove any previously injected per-page schemas
  document.head.querySelectorAll(`script[${SCHEMA_ATTR}]`).forEach(el => el.remove())
  // Inject the new ones (caller passes an array of objects)
  const list = Array.isArray(schemas) ? schemas : [schemas]
  list.filter(Boolean).forEach((schema) => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute(SCHEMA_ATTR, 'true')
    script.text = JSON.stringify(schema)
    document.head.appendChild(script)
  })
}

// Adds (or replaces by key) a single per-page schema without wiping others.
// Pages call this from their useEffect to layer onto the breadcrumb that
// App.jsx already emitted for the route.
export function addPageSchema(key, schema) {
  document.head.querySelectorAll(`script[data-schema-key="${key}"]`).forEach(el => el.remove())
  if (!schema) return
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.setAttribute(SCHEMA_ATTR, 'true')
  script.setAttribute('data-schema-key', key)
  script.text = JSON.stringify(schema)
  document.head.appendChild(script)
}

/* ─── Schema generators ─────────────────────────────────────── */

const ORG_REF = {
  '@type': 'Organization',
  name: 'Cloudsheer Consulting',
  url: SITE_URL,
  logo: `${SITE_URL}/cloudsheer-logo.png`,
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url.startsWith('http') ? it.url : `${SITE_URL}${it.url}`,
    })),
  }
}

export function faqPageSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

export function articleSchema({ headline, description, image, datePublished, dateModified, author, slug, articleType = 'Article' }) {
  return {
    '@context': 'https://schema.org',
    '@type': articleType,
    headline,
    description,
    image: image || DEFAULT_OG_IMAGE,
    datePublished,
    dateModified: dateModified || datePublished,
    author: { '@type': 'Person', name: author },
    publisher: {
      '@type': 'Organization',
      name: 'Cloudsheer Consulting',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/cloudsheer-logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}${slug}` },
  }
}

export function howToSchema({ name, description, steps, totalTime, image }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    image: image || DEFAULT_OG_IMAGE,
    ...(totalTime ? { totalTime } : {}),
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  }
}

export function professionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Cloudsheer Consulting',
    url: SITE_URL,
    image: `${SITE_URL}/cloudsheer-logo.png`,
    description: 'Certified Salesforce, Agentforce, and HubSpot consulting partner. We help mid-market and enterprise businesses cut costs, close more deals, and scale operations across the full revenue stack.',
    email: 'hello@cloudsheer.com',
    priceRange: '$$$',
    areaServed: ['US', 'IN', 'GB'],
    serviceType: [
      'Salesforce Implementation',
      'Agentforce AI Agent Deployment',
      'HubSpot Implementation',
      'HubSpot Consulting',
      'Sales Cloud Consulting',
      'Service Cloud Consulting',
      'Marketing Cloud Consulting',
      'Commerce Cloud Consulting',
      'Salesforce Health Cloud',
      'Financial Services Cloud',
      'Life Sciences Cloud',
      'Education Cloud',
      'Nonprofit Cloud',
      'CRM Analytics & Tableau',
      'Salesforce Platform Development',
      'Slack Integration',
      'HubSpot Smart CRM',
      'HubSpot Breeze AI',
      'HubSpot Marketing Hub',
      'HubSpot Sales Hub',
      'HubSpot Service Hub',
      'HubSpot Content Hub',
      'HubSpot Data Hub',
      'HubSpot Commerce Hub',
      'HubSpot Small Business Bundle',
      'Salesforce to HubSpot Migration',
      'HubSpot to Salesforce Migration',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'CRM Solutions',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Agentforce AI Agent Deployment',
          description: 'Deploy autonomous Agentforce agents that handle support, sales, and operations 24/7 inside Salesforce.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Salesforce Implementation',
          description: 'Full Salesforce cloud implementation including Sales, Service, Marketing, Commerce, and Experience Cloud.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'HubSpot Implementation',
          description: 'End-to-end HubSpot implementation on Smart CRM - Marketing, Sales, Service, Content, Data, Commerce Hubs - plus Breeze AI rollout and the Small Business Bundle.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CRM Analytics & Tableau',
          description: 'Real-time dashboards, AI predictions, and visual analytics embedded in Salesforce.' } },
      ],
    },
  }
}

export function localBusinessSchemas() {
  const offices = [
    { id: '#dallas',   name: 'Cloudsheer Consulting - Dallas',   addressLocality: 'Dallas',   addressRegion: 'TX', addressCountry: 'US' },
    { id: '#delhi',    name: 'Cloudsheer Consulting - Delhi',    addressLocality: 'Delhi',                          addressCountry: 'IN' },
    { id: '#london',   name: 'Cloudsheer Consulting - London',   addressLocality: 'London',                         addressCountry: 'GB' },
    { id: '#new-york', name: 'Cloudsheer Consulting - New York', addressLocality: 'New York', addressRegion: 'NY', addressCountry: 'US' },
  ]
  return offices.map(o => ({
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/about${o.id}`,
    name: o.name,
    url: `${SITE_URL}/about`,
    image: `${SITE_URL}/cloudsheer-logo.png`,
    email: 'hello@cloudsheer.com',
    parentOrganization: ORG_REF,
    address: {
      '@type': 'PostalAddress',
      addressLocality: o.addressLocality,
      ...(o.addressRegion ? { addressRegion: o.addressRegion } : {}),
      addressCountry: o.addressCountry,
    },
  }))
}
