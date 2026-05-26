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
  platformName: 'CMS Hub',
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
  whatWeShip: [
    { icon: Layout, title: 'Custom theme + module library', desc: 'HubL themes with marketer-safe drag-and-drop modules matched to your design system.' },
    { icon: Search, title: 'SEO + Core Web Vitals',          desc: 'Schema markup, image CDN, sitemap and redirect maps that protect rankings through migration.' },
    { icon: Lock,   title: 'Memberships + gating',           desc: 'Branded login, gated content, partner portals, and role-based access tied to CRM lists.' },
    { icon: Globe,  title: 'Multi-language + personalization', desc: 'Localized URLs, smart content, A/B and adaptive testing for every market and persona.' },
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
