import { useEffect } from 'react'
import {
  Briefcase, Zap, DollarSign, Layers, Rocket, Megaphone, TrendingUp, Headphones,
} from 'lucide-react'
import { addPageSchema, faqPageSchema } from '../../seoConfig'
import HubPageTemplate from './HubPageTemplate'

const faqs = [
  { q: 'What is the HubSpot Small Business Bundle?', a: 'The Small Business Bundle is HubSpot’s Starter edition of every Hub - Marketing, Sales, Service, Content, Commerce, and Operations - packaged together at a deeply discounted bundle price. Built for startups and small businesses that want the full HubSpot stack without enterprise pricing.' },
  { q: 'Is the Starter Bundle enough, or will we outgrow it fast?', a: 'It is genuinely production-grade for teams up to ~10-20 users. You will hit Starter limits when you need custom objects, advanced permissions, custom reporting, multi-step workflows, or AI features - then we upgrade specific Hubs to Pro/Enterprise rather than the whole bundle.' },
  { q: 'How fast can we go live on the Starter Bundle?', a: 'Our standard Starter Bundle setup ships in 2-3 weeks: branded portal, base properties + pipeline, lead-capture forms, basic sequences, ticket pipeline, payment links, and team training. Faster than self-serve setup, slower than ignoring it.' },
  { q: 'Can we start on the Starter Bundle and upgrade later?', a: 'Yes - HubSpot supports per-Hub upgrades. Most clients start on the bundle, run for 6-12 months, and upgrade Sales Hub or Marketing Hub first when usage grows. We help you choose what to upgrade and when.' },
]

const data = {
  tagIcon: Briefcase,
  tagLabel: 'HubSpot Small Business Bundle',
  headlineTop: 'The Full HubSpot Stack.',
  headlineGold: 'Starter Pricing. Production-Grade Setup.',
  subhead: 'Starter editions of every Hub - Marketing, Sales, Service, Content, Commerce, Operations - configured for go-live in 2-3 weeks. Built for startups and small businesses that want the full stack without enterprise pricing.',
  ctaLabel: 'Scope My Starter Bundle Setup',
  platformName: 'Small Business Bundle',
  painPoints: [
    { pain: 'We bought the Starter Bundle and the portal is still empty 6 weeks later', fix: '<strong>Done-for-you Starter setup</strong> - branded portal, base properties, pipeline, forms, sequences live in 2-3 weeks' },
    { pain: 'Marketing is in Mailchimp, sales in Pipedrive, support in a Gmail label', fix: '<strong>Consolidate onto one stack</strong> - we migrate contacts, deals, and tickets and shut down the duct tape' },
    { pain: 'We want HubSpot but enterprise pricing makes no sense for a 5-person team', fix: '<strong>Starter Bundle</strong> gives you every Hub at a steep discount - upgrade specific Hubs only when you need to' },
    { pain: 'No idea how to set up pipelines, sequences, or forms without spending weeks in HubSpot Academy', fix: '<strong>Pre-built templates</strong> for your industry - we configure, then train your team in 60 minutes' },
    { pain: 'Payments live on Stripe, invoices in QuickBooks, quotes in Google Docs', fix: '<strong>Commerce Hub Starter</strong> - payment links, simple invoices, quotes inside HubSpot from day one' },
    { pain: 'Worried we’ll outgrow Starter and have to rip everything out', fix: '<strong>Per-Hub upgrade path</strong> - we architect the Starter setup so Pro/Enterprise upgrades are clean, not rip-and-replace' },
  ],
  outcomes: [
    { icon: DollarSign,  value: 'Up to 90%', label: 'savings on combined SaaS spend vs. running 4-6 separate point tools for a small team', color: '#FF7A59' },
    { icon: Rocket,      value: '2-3 wk',    label: 'time-to-live on a full HubSpot stack with our Starter Bundle setup package', color: '#F59E0B' },
    { icon: Layers,      value: '6 Hubs',    label: 'covered in one bundle - Marketing, Sales, Service, Content, Commerce, Operations', color: '#6366F1' },
    { icon: Zap,         value: 'Free',      label: 'Smart CRM included - unlimited users, contacts, deals, tickets at the Starter tier', color: '#06B6D4' },
    { icon: TrendingUp,  value: '+3×',       label: 'lead response speed reported by small teams after consolidating onto HubSpot from point tools', color: '#10B981' },
    { icon: Briefcase,   value: 'Per-Hub',   label: 'upgrade path - move Sales or Marketing to Pro/Enterprise without rebuilding from scratch', color: '#FF7A59' },
  ],
  whatWeShip: [
    { icon: Briefcase,  title: 'Branded portal + base setup',     desc: 'Logo, brand colors, email templates, signature, time zones, currencies, and account hierarchy configured.' },
    { icon: Megaphone,  title: 'Marketing Hub Starter',           desc: 'Forms, landing pages, basic workflows, email templates, contact lists, and lead-capture wired to your site.' },
    { icon: TrendingUp, title: 'Sales Hub Starter',               desc: 'Deal pipeline, deal stages, basic sequences, meeting scheduler, quote templates, and sales dashboard.' },
    { icon: Headphones, title: 'Service Hub Starter',             desc: 'Ticket pipeline, shared inbox, basic SLAs, knowledge base shell, and customer feedback surveys.' },
    { icon: Zap,        title: 'Commerce + Content Hub Starter',  desc: 'Payment links, simple invoices, branded blog/site theme, and basic SEO setup for inbound.' },
    { icon: Rocket,     title: 'Team training + 30-day support',  desc: '60-minute live training, recorded reference videos, written runbooks, and email support for the first 30 days.' },
  ],
  process: [
    { num: '01', title: 'Kickoff & Scoping',    desc: "A single 60-minute call to map your business, current tools, pipeline stages, and the top 3 workflows we will configure. We confirm the bundle is right for you - or recommend Pro/Enterprise if not." },
    { num: '02', title: 'Configuration',         desc: "Branded portal, base properties, pipelines, forms, email templates, sequences, ticket pipeline, payment links, and Commerce/Content Hub Starter setup - typically 5-7 business days." },
    { num: '03', title: 'Migration & Training',  desc: "Contacts, deals, and tickets migrated from your existing tools. 60-minute live team training. Recorded reference videos and written runbooks shipped." },
    { num: '04', title: 'Launch & Hypercare',    desc: "Go-live, daily check-ins for the first week, email support for 30 days, and a 30-day review call to plan the first Hub upgrade if needed." },
  ],
  whyUs: [
    { title: 'We Do This Every Week',                    desc: 'Starter Bundle setup is our highest-volume engagement. We have a proven 2-3 week playbook, not a custom guess each time - you get a fast, predictable launch at a fixed scope.' },
    { title: 'Architected for the Upgrade Path',         desc: 'Most Starter setups have to be rebuilt when you upgrade to Pro. We design the schema, pipeline, and automation so the Pro/Enterprise upgrade is additive, not a rebuild.' },
    { title: 'You Own It After We Leave',                desc: 'Written runbooks, recorded training, and admin enablement - so your team can extend HubSpot themselves without us in the loop for every small change.' },
    { title: 'Honest Recommendations',                   desc: "If the Starter Bundle isn't right for you, we'll say so. We've turned away clients who needed Pro from day one - because the wrong tier costs more in rebuild than it saves in license fees." },
  ],
  finalCtaHeadlineTop: 'Want the Full HubSpot Stack',
  finalCtaHeadlineGold: 'Without Enterprise Pricing?',
  finalCtaBody: 'In 30 minutes we will scope your Starter Bundle setup - confirm the bundle fits, map your migration, and lock in a 2-3 week go-live timeline at no cost.',
  finalCtaChecklist: ['Current stack audit', 'Bundle fit confirmation', 'No obligation whatsoever'],
  finalCtaButton: 'Book My Free Starter Bundle Call',
}

export default function SmallBusinessBundle() {
  useEffect(() => {
    addPageSchema('faq', faqPageSchema(faqs))
    return () => addPageSchema('faq', null)
  }, [])
  return <HubPageTemplate data={data} />
}
