import { useEffect } from 'react'
import {
  FileText, Mic, Languages, Sparkles, Search, Lock, Zap, BarChart2, Repeat,
} from 'lucide-react'
import { addPageSchema, faqPageSchema } from '../../seoConfig'
import HubPageTemplate from './HubPageTemplate'

const faqs = [
  { q: 'What is the difference between CMS Hub and Content Hub?', a: 'HubSpot rebranded CMS Hub to Content Hub in 2024 and added AI content creation, brand voice profiles, podcast hosting, content remix, and audio narration on top of the existing CMS, theme, and membership tooling. Existing CMS Hub portals automatically gained the new features.' },
  { q: 'Does Content Hub replace our blog, podcast, and website tools?', a: 'It can replace all three. Content Hub hosts your website (themes, modules, memberships), your blog (with AI co-writer and brand voice), and your podcasts (native hosting, transcripts, episode pages) - all tied to the same Smart CRM, so every content interaction maps to a contact record.' },
  { q: 'Can the AI co-writer match our brand voice?', a: 'Yes. Brand voice profiles let you train the AI on tone, style guides, sample copy, and approved messaging. Every blog draft, email, or social post the AI generates can be constrained to that voice before it goes out.' },
  { q: 'Do you migrate existing WordPress, Webflow, or Drupal content?', a: 'Yes. We migrate pages, blog posts, authors, redirect maps, SEO metadata, schema markup, and media assets into Content Hub. We also rebuild custom post types as HubDB tables or custom objects where needed.' },
]

const data = {
  tagIcon: FileText,
  tagLabel: 'HubSpot Content Hub',
  headlineTop: 'Content That Converts.',
  headlineGold: 'AI-Powered, Brand-Safe, CRM-Connected.',
  subhead: 'Content Hub builds: AI co-writer with brand voice, podcast hosting, content remix, memberships, multi-language sites, and SEO pages - all natively wired into HubSpot Smart CRM.',
  ctaLabel: 'Scope My Content Hub Build',
  platformName: 'Content Hub',
  painPoints: [
    { pain: 'Marketing ships content in WordPress; sales has no idea what is converting', fix: '<strong>Native attribution</strong> ties every page view, podcast play, and gated download to a contact and a deal' },
    { pain: 'AI tools generate copy that sounds nothing like your brand', fix: '<strong>Brand voice profiles</strong> train the AI on your style guide, sample copy, and tone rules' },
    { pain: 'One blog post takes a week to spin into LinkedIn, email, and a short video', fix: '<strong>Content remix</strong> turns one asset into 6 derivatives in minutes, brand voice intact' },
    { pain: 'Podcast lives on a third-party host with zero CRM data', fix: '<strong>Native podcast hosting</strong> with transcripts, episode pages, and listener-to-contact mapping' },
    { pain: 'Membership site is duct-taped from 5 plugins and breaks monthly', fix: '<strong>Content Hub memberships</strong> with native login, gated content, and role-based access tied to CRM lists' },
    { pain: 'Localizing the site for new markets is a manual translation nightmare', fix: '<strong>Multi-language variants</strong> with auto-translate, language-specific URLs, and per-locale SEO' },
  ],
  outcomes: [
    { icon: Sparkles, value: '5×',    label: 'faster content production with AI co-writer + brand voice + content remix workflow', color: '#FF7A59' },
    { icon: Mic,      value: '0',     label: 'separate podcast hosts to manage - episodes, transcripts, and analytics live in HubSpot', color: '#F59E0B' },
    { icon: Search,   value: '2.4×',  label: 'more organic conversions with built-in SEO recommendations and schema automation', color: '#6366F1' },
    { icon: Zap,      value: '90+',   label: 'average Lighthouse performance score on Content Hub sites we ship', color: '#06B6D4' },
    { icon: BarChart2,value: '99.99%',label: 'uptime SLA from HubSpot hosting - no plugin upkeep, no separate hosting bill', color: '#10B981' },
    { icon: Lock,     value: 'SOC 2', label: 'Type II certified hosting with HSTS, SSL, and content-security defaults', color: '#FF7A59' },
  ],
  whatWeShip: [
    { icon: FileText,  title: 'Custom theme + module library',     desc: 'HubL themes with marketer-safe drag-and-drop modules matched to your design system.' },
    { icon: Sparkles,  title: 'Brand voice + AI co-writer setup',  desc: 'Voice profiles trained on your style guide so AI-generated drafts ship without rewriting.' },
    { icon: Mic,       title: 'Podcast + audio narration',         desc: 'Native podcast hosting, episode pages, transcripts, and one-click audio narration for blog posts.' },
    { icon: Repeat,    title: 'Content remix pipelines',           desc: 'Templates that turn a single pillar piece into blog, email, social, and short video on brand.' },
    { icon: Languages, title: 'Multi-language + memberships',      desc: 'Localized URLs, smart content, gated portals, and role-based access tied to CRM segments.' },
    { icon: Search,    title: 'SEO + Core Web Vitals',              desc: 'Schema markup, image CDN, sitemap, redirect maps, and Lighthouse tuning through migration.' },
  ],
  process: [
    { num: '01', title: 'Content Audit & Brand Voice', desc: "We inventory your existing content, build brand voice profiles from your style guide and best-performing copy, and map your conversion paths before any design work begins." },
    { num: '02', title: 'Design System & Theme',        desc: "Custom HubL theme from your design system. Marketer-safe modules, theme settings, podcast templates, and serverless functions for forms and integrations." },
    { num: '03', title: 'Build, Migrate, Train',        desc: "Pages built, content migrated from your existing CMS (WordPress, Webflow, Drupal), SEO redirects mapped one-to-one, brand voice trained, and the team onboarded on AI co-writer and remix workflows." },
    { num: '04', title: 'Launch & Optimization',        desc: "DNS cutover with rollback plan, post-launch SEO monitoring, A/B test setup on hero pages, and a 30-day hypercare window to fix anything that breaks in live traffic." },
  ],
  whyUs: [
    { title: 'We Train Brand Voice for Real Output',    desc: 'Most teams turn on AI co-writer, get generic output, and turn it off. We train voice profiles on your top-performing assets so the AI drafts ship with light edits, not full rewrites.' },
    { title: 'Content Tied to Pipeline, Not Vanity',    desc: 'Every blog, podcast episode, and gated asset connects to contact records, deals, and revenue - so marketing can prove influence and stop arguing about attribution.' },
    { title: 'Performance and SEO Are Non-Negotiable',  desc: 'We ship Content Hub sites with 90+ Lighthouse, proper schema, Core Web Vitals in the green, and one-to-one redirect maps so rankings survive migration.' },
    { title: 'We Stay Until Conversions Move',          desc: "Hypercare, A/B test setup, and quarterly content reviews - because a fast site with on-brand AI content that doesn't convert is still a failure." },
  ],
  finalCtaHeadlineTop: 'Ready for Content That',
  finalCtaHeadlineGold: 'Pulls Its Weight?',
  finalCtaBody: 'In 30 minutes we will audit your current content stack (or scope your migration), identify the highest-impact moves on SEO, voice, and conversion, and hand you a clear Content Hub roadmap - at no cost.',
  finalCtaChecklist: ['Content + SEO audit', 'Migration scoping if relevant', 'No obligation whatsoever'],
  finalCtaButton: 'Book My Free Content Hub Call',
}

export default function ContentHub() {
  useEffect(() => {
    addPageSchema('faq', faqPageSchema(faqs))
    return () => addPageSchema('faq', null)
  }, [])
  return <HubPageTemplate data={data} />
}
