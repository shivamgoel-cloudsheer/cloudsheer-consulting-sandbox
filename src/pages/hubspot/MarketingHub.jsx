import { useEffect } from 'react'
import {
  Megaphone, TrendingUp, Mail, Target, Users, BarChart2,
  Sparkles, DollarSign, Clock,
} from 'lucide-react'
import { addPageSchema, faqPageSchema } from '../../seoConfig'
import HubPageTemplate from './HubPageTemplate'

const faqs = [
  { q: 'Do we need Marketing Hub Pro or Enterprise?', a: 'Pro covers most teams: workflows, custom reporting, A/B testing, blog/SEO tools, and Breeze content. Enterprise adds advanced permissions, multi-touch revenue attribution, sandbox environments, and custom objects in marketing assets — relevant for $50M+ companies or compliance-heavy sectors.' },
  { q: 'Will you migrate our existing campaigns from Marketo or Pardot?', a: 'Yes. Standard migration covers email templates, automation workflows, lead-scoring models, list segments, custom fields, and historical engagement data. Parallel-run validation runs before final cutover.' },
  { q: 'How does Breeze AI fit into Marketing Hub?', a: 'Breeze powers content generation (blog drafts, email copy, social posts, ad copy), audience segmentation suggestions, and campaign performance summaries. Setup is included in every Marketing Hub engagement.' },
]

const data = {
  tagIcon: Megaphone,
  tagLabel: 'HubSpot Marketing Hub',
  headlineTop: 'Campaigns That Convert.',
  headlineGold: 'Attribution You Can Trust.',
  subhead: 'HubSpot Marketing Hub built around your funnel — campaigns, automation, lead scoring, and revenue attribution wired into Breeze AI for content and audience generation.',
  ctaLabel: 'Scope My Marketing Hub Build',
  painPoints: [
    { pain: 'Marketing claims credit for revenue Sales says came from outbound', fix: '<strong>Multi-touch revenue attribution</strong> ties every dollar back to the campaigns that actually drove it' },
    { pain: 'Workflows are a tangled mess no one wants to touch', fix: '<strong>Workflow audit + rebuild</strong> with proper naming, branching, and observability' },
    { pain: 'Lead scoring is guesswork and reps ignore the scores', fix: '<strong>Predictive lead scoring</strong> trained on closed-won deals — reps trust the rankings' },
    { pain: 'Content production is the bottleneck on every campaign', fix: '<strong>Breeze Content Agent</strong> generates blog drafts, emails, and social copy on-brand' },
    { pain: 'Email engagement is flat and unsubscribes keep climbing', fix: '<strong>List segmentation rebuild</strong> with engagement-based suppression and re-engagement journeys' },
    { pain: 'Marketing reports do not match what leadership wants to see', fix: '<strong>Custom report builder</strong> dashboards mapped to your KPIs, refreshed in real time' },
  ],
  outcomes: [
    { icon: TrendingUp, value: '129%', label: 'average lead growth reported by Marketing Hub customers in HubSpot Annual ROI Report 2024', color: '#FF7A59' },
    { icon: Mail,       value: '54%',  label: 'more conversions for customers using workflows vs. manual nurture sequences', color: '#F59E0B' },
    { icon: Target,     value: '94%',  label: 'higher email open rates with Breeze-personalized subject lines and send time optimization', color: '#6366F1' },
    { icon: DollarSign, value: '3.4×', label: 'higher attributed revenue for teams using Pro or Enterprise multi-touch attribution', color: '#06B6D4' },
    { icon: Users,      value: '32%',  label: 'better SQL-to-customer conversion when lead scoring is rebuilt on actual closed-won data', color: '#10B981' },
    { icon: Clock,      value: '40%',  label: 'less time marketers spend on content production with Breeze Content Agent in the loop', color: '#FF7A59' },
  ],
  capabilities: [
    {
      area: 'Campaigns & Workflows',
      icon: Megaphone,
      color: '#FF7A59',
      headline: 'One pane of glass for every campaign',
      points: [
        '<strong>Campaigns tool</strong> ties emails, ads, social, and landing pages to one revenue goal',
        '<strong>Workflows</strong> with branching, delays, if/then logic, and goal-based completion',
        '<strong>A/B testing</strong> on emails, landing pages, and CTAs',
        '<strong>Lifecycle stage automation</strong> driven by behavior and form fills',
        '<strong>Smart content</strong> personalized by list, lifecycle stage, or device',
      ],
    },
    {
      area: 'Lead Scoring & Routing',
      icon: Target,
      color: '#F59E0B',
      headline: 'Reps work the right leads first',
      points: [
        '<strong>Predictive lead scoring</strong> trained on your closed-won deals',
        '<strong>Manual score overrides</strong> for known accounts and high-fit personas',
        '<strong>Round-robin assignment</strong> with skill-based and territory routing',
        '<strong>SLA tracking</strong> with escalation if leads sit untouched',
        '<strong>Lifecycle stage transitions</strong> automated from score thresholds',
      ],
    },
    {
      area: 'Breeze AI for Marketing',
      icon: Sparkles,
      color: '#6366F1',
      headline: 'AI that produces, not just summarizes',
      points: [
        '<strong>Breeze Content Agent</strong> generates blog drafts and email copy on-brand',
        '<strong>Breeze Social Agent</strong> creates and schedules posts per channel',
        '<strong>Breeze Copilot</strong> answers questions about your data in plain English',
        '<strong>Breeze Intelligence</strong> enriches contact records with firmographic data',
        '<strong>Subject line + send time optimization</strong> per recipient',
      ],
    },
    {
      area: 'Attribution & Reporting',
      icon: BarChart2,
      color: '#06B6D4',
      headline: 'Prove marketing impact to the board',
      points: [
        '<strong>Multi-touch revenue attribution</strong> across first-touch, last-touch, and U-shaped',
        '<strong>Custom report builder</strong> with cross-object joins (deals + contacts + activities)',
        '<strong>Campaign ROI dashboards</strong> by source, channel, and audience',
        '<strong>Funnel reports</strong> showing drop-off at every lifecycle stage',
        '<strong>Sales-marketing handoff reports</strong> showing MQL→SQL→Customer flow',
      ],
    },
  ],
  process: [
    { num: '01', title: 'Funnel & Persona Discovery', desc: "We map your actual funnel — ICP, personas, lifecycle stages, scoring criteria, and the campaigns that have historically driven pipeline — before configuring a single workflow." },
    { num: '02', title: 'Hub Build & Migration',      desc: "Properties, lists, workflows, lead scoring, email templates, and campaign structure. If you're migrating from Marketo, Pardot, or Mailchimp, we move templates, automations, and engagement history with parallel-run validation." },
    { num: '03', title: 'Breeze AI Activation',       desc: "Breeze Copilot, Content Agent, and Social Agent configured against your brand voice and asset library. Reps and marketers trained on prompts that produce ship-ready output, not generic AI slop." },
    { num: '04', title: 'Attribution & Hypercare',    desc: "Multi-touch attribution wired up, dashboards built around your KPIs, and a hypercare window to fix anything that breaks in the first 30 days of live traffic." },
  ],
  whyUs: [
    { title: 'We Treat HubSpot Like the CRM It Is',         desc: 'Most agencies treat Marketing Hub as a glorified email tool. We architect it like a CRM — modeling deals, custom objects, and revenue flow so attribution actually works.' },
    { title: 'Breeze AI Goes Live With the Hub, Not Later', desc: 'Every Marketing Hub we deliver ships with Breeze Content, Social, and Copilot configured against your brand voice — not deferred to a phase-two roadmap that never happens.' },
    { title: 'Migrations That Preserve Engagement History', desc: "Moving off Marketo or Pardot? We bring over open/click history, score history, and workflow membership — not just contact lists. Your re-engagement campaigns keep working on day one." },
    { title: 'We Stay Until the Pipeline Moves',            desc: "Marketing Hub is judged on MQLs and revenue, not features shipped. We stay engaged through hypercare and beyond until those numbers move." },
  ],
  finalCtaHeadlineTop: 'Ready to Turn Marketing Hub Into a',
  finalCtaHeadlineGold: 'Real Revenue Engine?',
  finalCtaBody: 'In 30 minutes we will audit your current setup (or scope your migration), show you where Marketing Hub will move the needle on pipeline, and hand you a clear implementation roadmap — at no cost.',
  finalCtaChecklist: ['Funnel audit included', 'Migration scoping if relevant', 'No obligation whatsoever'],
  finalCtaButton: 'Book My Free Marketing Hub Call',
}

export default function MarketingHub() {
  useEffect(() => {
    addPageSchema('faq', faqPageSchema(faqs))
    return () => addPageSchema('faq', null)
  }, [])
  return <HubPageTemplate data={data} />
}
