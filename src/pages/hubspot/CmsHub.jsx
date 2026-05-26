import { useEffect } from 'react'
import {
  FileText, Layout, Globe, Search, Lock, Zap, BarChart2,
} from 'lucide-react'
import { addPageSchema, faqPageSchema } from '../../seoConfig'
import HubPageTemplate from './HubPageTemplate'

const faqs = [
  { q: 'Why HubSpot CMS over WordPress?', a: 'CMS Hub is built on top of HubSpot CRM, so every form, CTA, page view, and conversion ties directly to a contact record. WordPress requires plugins and integrations that frequently break. If you already run HubSpot for marketing or sales, CMS Hub keeps everything in one system.' },
  { q: 'Can you build a fully custom theme?', a: 'Yes. We build custom themes from scratch using HubL, drag-and-drop modules, theme settings, and serverless functions. We can also start from a HubSpot marketplace theme and customize it heavily.' },
  { q: 'Do you handle memberships and gated content?', a: 'Yes. CMS Hub Enterprise supports memberships — private blogs, gated knowledge bases, partner portals, and customer-only resource libraries with login flows tied to CRM contact records.' },
]

const data = {
  tagIcon: FileText,
  tagLabel: 'HubSpot CMS Hub',
  headlineTop: 'A Website That Converts.',
  headlineGold: 'Connected to Your CRM by Default.',
  subhead: 'HubSpot CMS Hub builds — custom themes, modules, memberships, multi-language sites, and SEO-optimized pages all wired into your HubSpot CRM out of the box.',
  ctaLabel: 'Scope My CMS Hub Build',
  painPoints: [
    { pain: 'Website lives on WordPress and breaks every other plugin update', fix: '<strong>Managed CMS Hub hosting</strong> with automatic updates and 99.99% uptime SLA' },
    { pain: 'Forms submit to a black hole — sales never knows when leads come in', fix: '<strong>Native form integration</strong> creates/updates contacts in real time with full attribution' },
    { pain: 'Page builder is too rigid for marketers and too loose for design consistency', fix: '<strong>Custom modules + theme settings</strong> let marketers ship without breaking design' },
    { pain: 'SEO is an afterthought and rankings are slipping', fix: '<strong>Built-in SEO tools</strong> with on-page recommendations, schema markup, and Core Web Vitals' },
    { pain: 'Translating the site to new markets is a manual nightmare', fix: '<strong>Multi-language sites</strong> with shared content variants and language-specific URLs' },
    { pain: 'Membership site requires duct-taping 5 plugins together', fix: '<strong>CMS Hub Enterprise memberships</strong> with native login, gated content, and CRM-tied access control' },
  ],
  outcomes: [
    { icon: Globe,    value: '100%', label: 'managed hosting with global CDN, SSL, and DDoS protection — no separate hosting bill', color: '#FF7A59' },
    { icon: Zap,      value: '90+',  label: 'average Lighthouse performance score on CMS Hub sites we ship', color: '#F59E0B' },
    { icon: Search,   value: '2.4×', label: 'more organic conversions with built-in SEO recommendations and on-page optimization', color: '#6366F1' },
    { icon: Layout,   value: '40%',  label: 'faster page creation with custom modules vs. starting every page from scratch', color: '#06B6D4' },
    { icon: BarChart2,value: '99.99%', label: 'uptime SLA from HubSpot hosting (no plugin/server maintenance on your side)', color: '#10B981' },
    { icon: Lock,     value: 'SOC 2', label: 'Type II certified hosting with HSTS, SSL, and content-security defaults', color: '#FF7A59' },
  ],
  capabilities: [
    {
      area: 'Custom Themes & Modules',
      icon: Layout,
      color: '#FF7A59',
      headline: 'Pages that look custom, ship like a CMS',
      points: [
        '<strong>Custom themes</strong> built with HubL, fields, and theme settings',
        '<strong>Drag-and-drop modules</strong> with marketer-safe constraints',
        '<strong>Component library</strong> matched to your design system',
        '<strong>Global modules</strong> for headers, footers, and navigation',
        '<strong>Serverless functions</strong> for forms, lookups, and integrations',
      ],
    },
    {
      area: 'SEO & Performance',
      icon: Search,
      color: '#F59E0B',
      headline: 'Rank higher without an SEO agency on retainer',
      points: [
        '<strong>Built-in SEO recommendations</strong> on every page',
        '<strong>Schema markup</strong> for Organization, Article, Product, FAQ',
        '<strong>Core Web Vitals</strong> optimization with image CDN and lazy loading',
        '<strong>XML sitemap + robots.txt</strong> management',
        '<strong>Topic clusters + pillar pages</strong> for content strategy',
      ],
    },
    {
      area: 'Memberships & Gating',
      icon: Lock,
      color: '#6366F1',
      headline: 'Member experiences without plugin chaos',
      points: [
        '<strong>Membership login</strong> tied to CRM contact lists',
        '<strong>Gated blogs and knowledge bases</strong> by lifecycle stage or list',
        '<strong>Partner portals</strong> with branded experiences per audience',
        '<strong>Customer-only content libraries</strong> with role-based access',
        '<strong>Multi-language memberships</strong> for global communities',
      ],
    },
    {
      area: 'Multi-Language & Personalization',
      icon: Globe,
      color: '#06B6D4',
      headline: 'One site. Every market. Every visitor.',
      points: [
        '<strong>Multi-language variants</strong> with language-specific URLs and SEO',
        '<strong>Smart content</strong> personalized by lifecycle stage or device',
        '<strong>A/B testing</strong> on landing pages, headlines, and CTAs',
        '<strong>Adaptive testing</strong> with up to 5 variants',
        '<strong>Geolocation-based content</strong> for region-specific offers',
      ],
    },
  ],
  process: [
    { num: '01', title: 'Discovery & IA',         desc: "We map your information architecture, content inventory, conversion paths, and SEO baseline — plus any membership, multi-language, or gating requirements — before touching design." },
    { num: '02', title: 'Design System & Theme',  desc: "Custom theme built from your design system. Module library, component constraints, theme settings, and serverless functions for forms and integrations." },
    { num: '03', title: 'Build & Migration',      desc: "Pages built, content migrated from your existing CMS (WordPress, Webflow, Drupal, custom), forms wired to CRM, SEO redirects mapped one-to-one, and Core Web Vitals tuned." },
    { num: '04', title: 'Launch & Optimization',  desc: "DNS cutover with rollback plan, post-launch SEO monitoring, A/B test setup, and a hypercare window to fix anything that breaks in the first 30 days of live traffic." },
  ],
  whyUs: [
    { title: 'We Build for Marketers AND Designers',     desc: 'Custom modules with marketer-safe constraints — your team ships pages without breaking the design system. The most common mistake on CMS Hub builds is giving marketers too much rope.' },
    { title: 'CMS Tied to CRM, Not Bolted On',           desc: 'Every form, CTA, and personalization rule connects directly to contact records. No middleware, no Zapier, no integration debt to maintain.' },
    { title: 'Performance and SEO Are Non-Negotiable',   desc: 'We ship sites with 90+ Lighthouse scores, proper schema markup, Core Web Vitals in the green, and SEO redirect maps so rankings survive migration.' },
    { title: 'We Stay Until Conversions Move',           desc: "Hypercare, A/B test setup, and quarterly optimization reviews — because a fast site that doesn't convert is still a failure." },
  ],
  finalCtaHeadlineTop: 'Ready for a Website That',
  finalCtaHeadlineGold: 'Pays for Itself?',
  finalCtaBody: 'In 30 minutes we will audit your current site (or scope your migration), identify the highest-impact moves on SEO and conversion, and hand you a clear CMS Hub roadmap — at no cost.',
  finalCtaChecklist: ['Current site audit', 'Migration scoping if relevant', 'No obligation whatsoever'],
  finalCtaButton: 'Book My Free CMS Hub Call',
}

export default function CmsHub() {
  useEffect(() => {
    addPageSchema('faq', faqPageSchema(faqs))
    return () => addPageSchema('faq', null)
  }, [])
  return <HubPageTemplate data={data} />
}
