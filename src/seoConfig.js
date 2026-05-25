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
    a: "Yes. Our 40+ person team spans 4 global offices and covers every major Salesforce cloud. For larger engagements, we scale with certified specialists from our extended network." },
  { q: "How do you handle data security and compliance?",
    a: "All work is done within Salesforce's enterprise security framework (SOC 2 Type II, HIPAA-eligible, GDPR compliant). We follow Salesforce Well-Architected principles for data access, sharing rules, and encryption." },
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
    description: 'Certified Salesforce & Agentforce consulting partner. We help mid-market and enterprise businesses cut costs, close more deals, and scale operations with Agentforce agents.',
    email: 'hello@cloudsheer.com',
    priceRange: '$$$',
    areaServed: ['US', 'IN', 'GB'],
    serviceType: [
      'Salesforce Implementation',
      'Agentforce AI Agent Deployment',
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
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Salesforce Solutions',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Agentforce AI Agent Deployment',
          description: 'Deploy autonomous Agentforce agents that handle support, sales, and operations 24/7 inside Salesforce.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Salesforce Implementation',
          description: 'Full Salesforce cloud implementation including Sales, Service, Marketing, Commerce, and Experience Cloud.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CRM Analytics & Tableau',
          description: 'Real-time dashboards, AI predictions, and visual analytics embedded in Salesforce.' } },
      ],
    },
  }
}

export function localBusinessSchemas() {
  const offices = [
    { id: '#dallas',   name: 'Cloudsheer Consulting — Dallas',   addressLocality: 'Dallas',   addressRegion: 'TX', addressCountry: 'US' },
    { id: '#delhi',    name: 'Cloudsheer Consulting — Delhi',    addressLocality: 'Delhi',                          addressCountry: 'IN' },
    { id: '#london',   name: 'Cloudsheer Consulting — London',   addressLocality: 'London',                         addressCountry: 'GB' },
    { id: '#new-york', name: 'Cloudsheer Consulting — New York', addressLocality: 'New York', addressRegion: 'NY', addressCountry: 'US' },
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
