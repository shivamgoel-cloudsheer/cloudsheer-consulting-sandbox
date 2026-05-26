import { useEffect } from 'react'
import {
  Sparkles, Bot, FileText, MessageSquare, Database,
  TrendingUp, Target, Clock,
} from 'lucide-react'
import { addPageSchema, faqPageSchema } from '../../seoConfig'
import HubPageTemplate from './HubPageTemplate'

const faqs = [
  { q: 'What is the difference between Breeze Copilot and Breeze Agents?', a: 'Copilot is a chat assistant inside HubSpot — you ask, it answers using your CRM data and drafts content. Agents are autonomous — they take actions on their own (research accounts, draft outreach, answer customer questions, write social posts) on schedules or triggers, without a human in the loop for every step.' },
  { q: 'Is Breeze Intelligence the same as ZoomInfo or Clearbit?', a: 'Breeze Intelligence is HubSpot\'s native enrichment — built into the platform with no separate vendor. It covers firmographics, intent signals, and buyer fit scoring. For high-end account-based motions that need depth ZoomInfo offers, we set up Breeze for the long tail and route ZoomInfo budget at the strategic accounts.' },
  { q: 'Which HubSpot tier do we need for Breeze?', a: 'Breeze Copilot is available across tiers. Breeze Agents (Prospecting, Customer, Content, Social) require Professional or Enterprise on the relevant Hub. Breeze Intelligence is an add-on. We scope the right combination during discovery based on the use cases that matter most.' },
]

const data = {
  tagIcon: Sparkles,
  tagLabel: 'HubSpot Breeze AI',
  headlineTop: 'AI That Takes Action.',
  headlineGold: 'Not Just AI That Summarizes.',
  subhead: 'Breeze Copilot, Breeze Agents (Prospecting, Customer, Content, Social), and Breeze Intelligence enrichment — the autonomous AI layer wired across your full HubSpot stack.',
  ctaLabel: 'Scope My Breeze AI Deployment',
  platformName: 'Breeze AI',
  painPoints: [
    { pain: 'Reps spend 70% of their week on research and admin, not selling', fix: '<strong>Breeze Prospecting Agent</strong> researches accounts, drafts outreach, and books meetings 24/7' },
    { pain: 'Support team buried in tier-1 questions that have FAQ answers', fix: '<strong>Breeze Customer Agent</strong> deflects routine tickets using your knowledge base' },
    { pain: 'Content production is the slowest part of every campaign', fix: '<strong>Breeze Content Agent</strong> generates blog drafts, emails, and ad copy on-brand' },
    { pain: 'Social posting is inconsistent and brand voice drifts per channel', fix: '<strong>Breeze Social Agent</strong> creates and schedules posts with channel-specific tone' },
    { pain: 'Contact records are full of incomplete data and stale firmographics', fix: '<strong>Breeze Intelligence</strong> enriches records continuously with firmographics and intent' },
    { pain: 'No one on the team can pull the report leadership wants in real time', fix: '<strong>Breeze Copilot</strong> answers data questions in plain English across every object' },
  ],
  outcomes: [
    { icon: Bot,         value: '24/7', label: 'autonomous coverage from Breeze Agents — no headcount needed for off-hours work', color: '#FF7A59' },
    { icon: TrendingUp,  value: '3.4×', label: 'more meetings booked per rep with Breeze Prospecting Agent in the loop', color: '#F59E0B' },
    { icon: MessageSquare, value: '40%', label: 'tier-1 ticket deflection with Breeze Customer Agent against a cleaned knowledge base', color: '#6366F1' },
    { icon: FileText,    value: '40%',  label: 'less time on content production with Breeze Content Agent drafting on-brand', color: '#06B6D4' },
    { icon: Database,    value: '92%',  label: 'contact record completeness with Breeze Intelligence enrichment continuously running', color: '#10B981' },
    { icon: Clock,       value: '<2s',  label: 'Breeze Copilot response time on data questions — faster than navigating to the report', color: '#FF7A59' },
  ],
  whatWeShip: [
    { icon: Sparkles, title: 'Breeze Copilot setup',       desc: 'Brand-voice tuning, role-based access, and prompts that produce ship-ready output for every Hub.' },
    { icon: Bot,      title: 'Breeze Agent deployment',    desc: 'Prospecting, Customer, Content, and Social agents shipped with conservative guardrails first.' },
    { icon: Database, title: 'Breeze Intelligence wiring', desc: 'Continuous firmographic enrichment, intent signals, and fit scoring tuned to your ICP.' },
    { icon: Target,   title: 'Governance + audit',         desc: 'Brand voice library, action audit trail, human approval gates, and permission scopes per agent.' },
  ],
  process: [
    { num: '01', title: 'Use Case Discovery',     desc: "We map the highest-impact AI use cases for your business — outbound, support deflection, content production, enrichment — and stack-rank them by ROI before configuring a single agent." },
    { num: '02', title: 'Brand Voice + Data Prep', desc: "Brand voice library configured, knowledge base cleaned up (Customer Agent only works against good KB), ICP definitions tuned for Prospecting, and CRM data audited for enrichment readiness." },
    { num: '03', title: 'Agent Deployment',       desc: "Agents deployed one at a time with conservative guardrails. Human approval gates on outbound until performance is validated. Audit trails reviewed weekly during ramp." },
    { num: '04', title: 'Tuning & Hypercare',     desc: "Performance dashboards wired, prompts and guardrails tuned weekly based on real outputs, and a hypercare window before approval gates are loosened. Quarterly reviews thereafter." },
  ],
  whyUs: [
    { title: 'We Deploy Breeze the Way Anthropic Recommends Deploying AI', desc: 'Conservative guardrails first, human approval gates on outbound, audit trails reviewed weekly, gates loosened only after performance is validated. We do not ship and pray.' },
    { title: 'Cross-Platform Fluency Most Partners Lack',                 desc: 'We deploy Agentforce on Salesforce and Breeze on HubSpot. That pattern-matching across both platforms means we know which AI workflows generalize and which break — fewer surprises in your build.' },
    { title: 'Brand Voice That Actually Matches Your Brand',              desc: "Generic AI output is the fastest way to destroy brand equity. We tune Breeze against your real content — blogs you've published, emails that converted, social posts in your voice — so output is ship-ready, not slop." },
    { title: "We Stay Until the Numbers Move",                            desc: 'Hypercare, weekly prompt tuning, and quarterly reviews of agent performance dashboards keep Breeze delivering as use cases expand and your team gets more ambitious.' },
  ],
  finalCtaHeadlineTop: 'Ready to Put Breeze AI to',
  finalCtaHeadlineGold: 'Work Across Your Business?',
  finalCtaBody: 'In 30 minutes we will identify your highest-impact Breeze use cases (Prospecting, Customer, Content, Social, or Intelligence), show you what production deployment looks like, and hand you a clear roadmap — at no cost.',
  finalCtaChecklist: ['Use-case ROI scoring', 'Guardrail and audit plan', 'No obligation whatsoever'],
  finalCtaButton: 'Book My Free Breeze AI Call',
}

export default function BreezeAI() {
  useEffect(() => {
    addPageSchema('faq', faqPageSchema(faqs))
    return () => addPageSchema('faq', null)
  }, [])
  return <HubPageTemplate data={data} />
}
