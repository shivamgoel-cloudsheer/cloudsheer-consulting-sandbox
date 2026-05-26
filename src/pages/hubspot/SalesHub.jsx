import { useEffect } from 'react'
import {
  TrendingUp, Target, Users, Sparkles, Clock, DollarSign,
} from 'lucide-react'
import { addPageSchema, faqPageSchema } from '../../seoConfig'
import HubPageTemplate from './HubPageTemplate'

const faqs = [
  { q: 'How is Sales Hub different from Salesforce Sales Cloud?', a: 'Both are full CRMs. Sales Hub is faster to deploy, has a lower learning curve, and ships with Breeze AI native. Sales Cloud is more customizable, handles complex enterprise workflows better, and integrates deeper into Salesforce industry clouds. For most teams under 200 reps, Sales Hub wins on time-to-value.' },
  { q: 'Can we run Sales Hub alongside Salesforce?', a: 'Yes. We commonly set up dual-stack environments via Operations Hub data sync — marketing runs HubSpot, enterprise sales runs Salesforce, and the two stay in sync with field mapping and conflict resolution rules.' },
  { q: 'Does Breeze AI replace SDRs?', a: 'No. Breeze Prospecting Agent surfaces high-fit accounts, drafts personalized outreach, and books meetings — but humans still own the relationship, qualification calls, and deal closing. Think of it as a 24/7 research and outreach assistant per rep.' },
]

const data = {
  tagIcon: TrendingUp,
  tagLabel: 'HubSpot Sales Hub',
  headlineTop: 'Ramp Reps in Weeks.',
  headlineGold: 'Forecast Like a Public Company.',
  subhead: 'HubSpot Sales Hub built around your sales motion — custom deal stages, sequences, forecasting, prospecting workspace, and Breeze AI lead scoring that reps actually trust.',
  ctaLabel: 'Scope My Sales Hub Build',
  painPoints: [
    { pain: 'New reps take 4-6 months to ramp and miss their first quarter', fix: '<strong>Onboarding playbooks + sequences</strong> get reps productive in weeks' },
    { pain: 'Forecast roll-ups are guesswork — leadership lost trust', fix: '<strong>Forecast tool</strong> with weighted pipeline, deal-stage probability, and AI-suggested commits' },
    { pain: 'Reps waste hours every day on data entry and admin', fix: '<strong>Activity capture + email integration</strong> auto-logs calls, emails, and meetings' },
    { pain: 'Sales and marketing argue over which leads matter', fix: '<strong>Breeze lead scoring</strong> trained on closed-won deals — both teams agree on prioritization' },
    { pain: 'Outbound prospecting is inconsistent and reps reinvent the wheel', fix: '<strong>Prospecting workspace + templates</strong> standardize cadences while keeping personalization' },
    { pain: 'Deal cycles drag because quoting and approvals are manual', fix: '<strong>Quotes tool + approval workflows</strong> generate and route proposals in minutes' },
  ],
  outcomes: [
    { icon: TrendingUp, value: '28%',  label: 'higher win rates reported by Sales Hub customers in HubSpot Annual ROI Report 2024', color: '#FF7A59' },
    { icon: Clock,      value: '50%',  label: 'less time on data entry with activity capture and email integration', color: '#F59E0B' },
    { icon: Target,     value: '36%',  label: 'better forecast accuracy when forecast tool replaces spreadsheets', color: '#6366F1' },
    { icon: Users,      value: '3.4×', label: 'more meetings booked per rep with Breeze Prospecting Agent in the loop', color: '#06B6D4' },
    { icon: DollarSign, value: '24%',  label: 'larger average deal size with structured deal stages and exit criteria', color: '#10B981' },
    { icon: Sparkles,   value: '2×',   label: 'faster rep ramp time with onboarding sequences and playbook automation', color: '#FF7A59' },
  ],
  capabilities: [
    {
      area: 'Pipeline & Deal Management',
      icon: Target,
      color: '#FF7A59',
      headline: 'Pipeline visibility your CFO will believe',
      points: [
        '<strong>Custom deal stages</strong> with required fields and exit criteria',
        '<strong>Deal pipelines</strong> for multi-product or multi-segment teams',
        '<strong>Forecast tool</strong> with weighted pipeline and AI-suggested commits',
        '<strong>Pipeline analytics</strong> showing velocity, conversion, and stage time',
        '<strong>Deal scoring</strong> flags at-risk and stalled opportunities',
      ],
    },
    {
      area: 'Sequences & Prospecting',
      icon: TrendingUp,
      color: '#F59E0B',
      headline: 'Outbound that scales without losing personalization',
      points: [
        '<strong>Sequences</strong> with multi-step email, task, and call cadences',
        '<strong>Prospecting workspace</strong> consolidates leads, tasks, and meetings',
        '<strong>Snippets + templates</strong> keep messaging consistent and on-brand',
        '<strong>Documents tool</strong> tracks proposal opens and engagement',
        '<strong>Meeting links</strong> with round-robin and group availability',
      ],
    },
    {
      area: 'Breeze AI for Sales',
      icon: Sparkles,
      color: '#6366F1',
      headline: 'Every rep gets a 24/7 research assistant',
      points: [
        '<strong>Breeze Prospecting Agent</strong> finds high-fit accounts and drafts outreach',
        '<strong>Breeze Copilot</strong> answers questions about deals, contacts, and history',
        '<strong>Breeze Intelligence</strong> enriches records with firmographic data',
        '<strong>AI-generated forecast commits</strong> based on deal signals',
        '<strong>Call summary + next-step extraction</strong> from recorded calls',
      ],
    },
    {
      area: 'Quoting & Quote-to-Cash',
      icon: DollarSign,
      color: '#06B6D4',
      headline: 'Stop losing momentum on deals that are ready to close',
      points: [
        '<strong>Quotes tool</strong> generates branded proposals in minutes',
        '<strong>Product library</strong> with pricing, currency, and discount rules',
        '<strong>Approval workflows</strong> for non-standard pricing or terms',
        '<strong>E-signature integration</strong> via DocuSign or HubSpot signatures',
        '<strong>Renewal tracking</strong> with auto-created renewal opportunities',
      ],
    },
  ],
  process: [
    { num: '01', title: 'Sales Process Discovery', desc: "We interview reps, managers, and leadership to map your actual sales motion — stages, qualification criteria, handoff rules, and the metrics that matter — before configuring a single deal stage." },
    { num: '02', title: 'Hub Build & Migration',  desc: "Custom objects, deal pipelines, properties, sequences, scoring, and quoting workflows configured around your motion. If migrating from another CRM, we move open deals, activity history, and pipeline structure with parallel-run validation." },
    { num: '03', title: 'Breeze AI Activation',   desc: "Breeze Prospecting Agent, Copilot, and Intelligence configured. Reps trained on prompts and account-research workflows that produce ship-ready output." },
    { num: '04', title: 'Adoption & Hypercare',   desc: "Role-based training for reps and managers, adoption dashboards to track usage, and a hypercare window to resolve issues fast and lock in habits." },
  ],
  whyUs: [
    { title: 'We Engineer Around Your Revenue Motion', desc: 'We do not install a generic Sales Hub template. We study how your team qualifies, progresses, and closes deals — then build HubSpot to accelerate that exact motion.' },
    { title: 'Breeze AI Is Wired In from Day One',      desc: 'Every Sales Hub we deliver ships with Breeze Prospecting Agent, Copilot, and Intelligence configured against real deal data — not deferred to a future roadmap item.' },
    { title: 'Clean Data Reps Actually Trust',           desc: 'Bad data is the number one CRM adoption killer. We migrate, deduplicate, and enrich your records so reps trust what they see from the first login.' },
    { title: "We Stay Until Your Numbers Move",          desc: 'We do not disappear after go-live. Hypercare support, adoption tracking, and quarterly optimization reviews ensure Sales Hub keeps delivering results as your team grows.' },
  ],
  finalCtaHeadlineTop: 'Ready to Turn Sales Hub Into a',
  finalCtaHeadlineGold: 'Revenue Growth Engine?',
  finalCtaBody: 'In 30 minutes we will audit your current sales process, show you exactly where Sales Hub and Breeze AI will move the needle on revenue, and hand you a clear implementation roadmap — at no cost.',
  finalCtaChecklist: ['Pipeline audit included', 'Migration scoping if relevant', 'No obligation whatsoever'],
  finalCtaButton: 'Book My Free Sales Hub Call',
}

export default function SalesHub() {
  useEffect(() => {
    addPageSchema('faq', faqPageSchema(faqs))
    return () => addPageSchema('faq', null)
  }, [])
  return <HubPageTemplate data={data} />
}
