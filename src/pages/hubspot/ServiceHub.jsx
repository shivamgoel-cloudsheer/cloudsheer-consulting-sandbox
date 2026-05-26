import { useEffect } from 'react'
import {
  Headphones, MessageSquare, Star, Sparkles, Clock,
  Target, Users, Zap,
} from 'lucide-react'
import { addPageSchema, faqPageSchema } from '../../seoConfig'
import HubPageTemplate from './HubPageTemplate'

const faqs = [
  { q: 'How is Service Hub different from Salesforce Service Cloud?', a: 'Both ticket and resolve cases. Service Hub is faster to deploy, more affordable for SMB and mid-market, and ships with the Breeze customer agent native. Service Cloud handles enterprise-grade workflows, omni-channel routing across more channels, and deep integration with Salesforce industry clouds.' },
  { q: 'Does Breeze Customer Agent actually deflect tickets?', a: 'Yes — typical deployments see 30-50% deflection on tier-1 questions when the knowledge base is well-structured. It handles password resets, order status, shipping, returns, account changes, and routine product questions. Complex cases escalate to humans with full context.' },
  { q: 'Can we use the customer portal for B2B account management?', a: 'Yes. The customer portal supports company-level access (multiple users per company), custom views by lifecycle stage, branded white-labeling, and embedded forms for support requests, billing inquiries, or feature requests.' },
]

const data = {
  tagIcon: Headphones,
  tagLabel: 'HubSpot Service Hub',
  headlineTop: 'Deflect 40% of Tickets.',
  headlineGold: 'Resolve the Rest in Half the Time.',
  subhead: 'HubSpot Service Hub built for retention — ticketing, customer portal, knowledge base, SLA automation, CSAT/NPS surveys, and the Breeze customer agent for 24/7 deflection.',
  ctaLabel: 'Scope My Service Hub Build',
  platformName: 'Service Hub',
  painPoints: [
    { pain: 'Support team drowning in tier-1 questions that have FAQ answers', fix: '<strong>Breeze Customer Agent</strong> deflects routine questions using your knowledge base' },
    { pain: 'Tickets sit in queues for hours and SLAs are missed', fix: '<strong>SLA automation</strong> with auto-assignment, escalation, and breach alerts' },
    { pain: 'Customers ask the same question 3 times across email, chat, and portal', fix: '<strong>Conversations inbox</strong> unifies every channel into one threaded view' },
    { pain: 'Knowledge base is outdated and no one can find anything', fix: '<strong>KB audit + Breeze-suggested articles</strong> based on common ticket themes' },
    { pain: "We don't know if customers are happy until they churn", fix: '<strong>CSAT, NPS, and CES surveys</strong> trigger on resolution and at lifecycle milestones' },
    { pain: 'Service has no visibility into deals or account history', fix: '<strong>Unified contact + company timeline</strong> shows tickets, deals, and engagement in one view' },
  ],
  outcomes: [
    { icon: Headphones, value: '37%',  label: 'increase in CSAT scores reported by Service Hub customers in HubSpot Annual ROI Report 2024', color: '#FF7A59' },
    { icon: Zap,        value: '50%',  label: 'faster first-response times with automated routing and Breeze-assisted replies', color: '#F59E0B' },
    { icon: MessageSquare, value: '40%', label: 'tier-1 ticket deflection rate when Breeze Customer Agent is wired to a clean knowledge base', color: '#6366F1' },
    { icon: Star,       value: '32%',  label: 'higher NPS scores when post-resolution surveys feed back into agent coaching', color: '#06B6D4' },
    { icon: Clock,      value: '24/7', label: 'coverage with Breeze Customer Agent — no headcount needed for off-hours and weekends', color: '#10B981' },
    { icon: Users,      value: '2.1×', label: 'agent productivity with conversations inbox and Breeze Copilot drafting replies', color: '#FF7A59' },
  ],
  whatWeShip: [
    { icon: MessageSquare, title: 'Conversations + ticket pipelines', desc: 'Unified inbox across email, chat, and forms with custom pipelines, routing, and automation.' },
    { icon: Target,        title: 'SLA + escalation automation',      desc: 'Response and resolution targets with breach alerts and auto-escalation to managers.' },
    { icon: Sparkles,      title: 'Breeze Customer Agent',            desc: 'KB-grounded deflection that hands off cleanly to humans with full conversation context.' },
    { icon: Star,          title: 'Portal + survey loop',             desc: 'Branded customer portal, KB build, and CSAT/NPS surveys feeding agent coaching dashboards.' },
  ],
  process: [
    { num: '01', title: 'Support Process Audit',  desc: "We map your current ticket volume by category, channel mix, response and resolution times, SLA breach causes, and the questions your agents answer the most — before configuring a single pipeline." },
    { num: '02', title: 'Hub Build & KB Cleanup', desc: "Ticket pipelines, routing rules, SLAs, customer portal, and a knowledge base rebuild prioritized by your top deflection opportunities. Existing tickets and conversations migrated with history intact." },
    { num: '03', title: 'Breeze Customer Agent',  desc: "Breeze Customer Agent deployed against your cleaned KB with conservative guardrails. We tune deflection thresholds and human-handoff triggers based on live performance for the first 30 days." },
    { num: '04', title: 'Feedback Loop & Hypercare', desc: "CSAT/NPS surveys wired up, agent coaching dashboards built, and a hypercare window to fine-tune routing rules and deflection thresholds as real traffic flows through." },
  ],
  whyUs: [
    { title: 'We Engineer for Retention, Not Just Resolution', desc: 'Tickets resolved is a vanity metric. We design Service Hub around CSAT, retention, and expansion — the metrics that actually move the business.' },
    { title: 'Breeze Customer Agent Goes Live With the Hub', desc: 'Most partners punt AI deflection to a future phase. We ship Breeze Customer Agent with the build, against a knowledge base we cleaned up first so deflection actually works.' },
    { title: 'KB That Actually Gets Used',                  desc: "We do not just dump your old KB into HubSpot. We audit which articles are read, which are stale, what tickets reveal as missing, and we rewrite for the question — not the policy." },
    { title: "We Stay Until CSAT Moves",                    desc: 'Hypercare, monthly tuning of Breeze deflection thresholds, and quarterly reviews of agent coaching dashboards keep Service Hub delivering as ticket volume grows.' },
  ],
  finalCtaHeadlineTop: 'Ready to Turn Service Hub Into a',
  finalCtaHeadlineGold: 'Retention Engine?',
  finalCtaBody: 'In 30 minutes we will audit your current support setup, show you where Breeze Customer Agent and SLA automation will move the needle on CSAT and ticket cost, and hand you a clear roadmap — at no cost.',
  finalCtaChecklist: ['Support process audit', 'KB deflection assessment', 'No obligation whatsoever'],
  finalCtaButton: 'Book My Free Service Hub Call',
}

export default function ServiceHub() {
  useEffect(() => {
    addPageSchema('faq', faqPageSchema(faqs))
    return () => addPageSchema('faq', null)
  }, [])
  return <HubPageTemplate data={data} />
}
