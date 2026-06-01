import { useEffect } from 'react'
import {
  Users, TrendingUp, Sparkles, Target, Mail, Database, BarChart2, Workflow,
} from 'lucide-react'
import { addPageSchema, faqPageSchema } from '../../seoConfig'
import DynamicsPageTemplate from './DynamicsPageTemplate'

const faqs = [
  { q: 'What is included in Dynamics 365 Customer Experience?', a: 'Microsoft groups two apps here: Dynamics 365 Sales (pipeline, opportunity, forecasting, Copilot for Sales) and Dynamics 365 Customer Insights (real-time journeys + CDP - formerly Marketing). They share the same Dataverse so sales and marketing work off one customer record.' },
  { q: 'How is Copilot for Sales different from regular Copilot?', a: 'Copilot for Sales adds CRM-aware actions on top of Microsoft 365 Copilot - summarizing meetings into CRM updates, drafting follow-up emails with deal context, surfacing pipeline insights inside Outlook and Teams. It works with both Dynamics 365 Sales and Salesforce.' },
  { q: 'How does Customer Insights compare to HubSpot Marketing or Marketo?', a: 'Customer Insights merges a Customer Data Platform with real-time journey orchestration. The journey engine is closer to Salesforce Marketing Cloud than to HubSpot - event-driven, sub-second triggering, and built for high-volume B2C and B2B-at-scale use cases.' },
  { q: 'Can we run Customer Experience alongside our existing CRM?', a: 'Yes - we wire dual-stack setups where Sales runs in Salesforce or HubSpot while Customer Insights handles journeys. Dataverse Virtual Tables and Power Automate keep records aligned without rip-and-replace.' },
]

const data = {
  tagIcon: Users,
  tagLabel: 'Dynamics 365 Customer Experience',
  headlineTop: 'Pipeline + Journeys.',
  headlineGold: 'One Customer Record, AI-Native.',
  subhead: 'Dynamics 365 Sales and Customer Insights builds: pipeline, forecasting, Copilot for Sales, real-time journey orchestration, CDP segmentation, and predictive scoring - all on shared Dataverse.',
  ctaLabel: 'Scope My Customer Experience Build',
  platformName: 'Customer Experience',
  painPoints: [
    { pain: 'Sales runs on Excel; forecasts are guesses by Friday', fix: '<strong>Dynamics 365 Sales pipeline</strong> with weighted forecasting and Copilot opportunity insights' },
    { pain: 'Marketing campaigns are blind to what sales sees on the deal', fix: '<strong>Customer Insights + Sales</strong> on shared Dataverse - one record, one truth, journeys aware of pipeline stage' },
    { pain: 'Reps copy-paste between Outlook, Teams, and CRM all day', fix: '<strong>Copilot for Sales</strong> embedded in Outlook and Teams - summarize meetings, update CRM, draft follow-ups in place' },
    { pain: 'Lead scoring is a rule we wrote in 2022 and never revisited', fix: '<strong>Predictive lead and opportunity scoring</strong> trained on your historical conversion data' },
    { pain: 'Journey builder is batch - by the time the email sends, the customer moved on', fix: '<strong>Real-time journey orchestration</strong> with event triggers in under a second' },
    { pain: 'Segmentation lives in spreadsheets pulled monthly from the data warehouse', fix: '<strong>Customer Insights CDP</strong> stitches data sources into unified profiles and live segments' },
  ],
  outcomes: [
    { icon: TrendingUp,  value: '24%',  label: 'higher win rate reported by Sales customers using Copilot insights and pipeline manager (Microsoft TEI)', color: '#5EB0F0' },
    { icon: Sparkles,    value: '+12%', label: 'increase in marketing-attributed pipeline after Customer Insights replaces batch-and-blast journeys', color: '#F59E0B' },
    { icon: Mail,        value: '3.4×', label: 'more responses on Copilot-drafted follow-up emails vs. rep-written outreach', color: '#6366F1' },
    { icon: Target,      value: '70%',  label: 'reduction in lead-to-meeting time with predictive scoring + auto-routing to the right rep', color: '#06B6D4' },
    { icon: Database,    value: 'Unified', label: 'customer profile across CRM, web, product, and ad networks via Customer Insights CDP', color: '#10B981' },
    { icon: BarChart2,   value: 'Real-time', label: 'pipeline + journey analytics with Power BI embedded - one source of truth for revenue', color: '#5EB0F0' },
  ],
  whatWeShip: [
    { icon: TrendingUp, title: 'Sales pipeline + forecasting',     desc: 'Custom stages, qualification criteria, weighted forecasting, and territory + quota assignments.' },
    { icon: Sparkles,   title: 'Copilot for Sales deployment',     desc: 'Outlook + Teams integration, meeting summaries, CRM auto-update, and Copilot-drafted outreach.' },
    { icon: Target,     title: 'Predictive scoring',               desc: 'Lead and opportunity scoring models trained on your historical conversion data.' },
    { icon: Database,   title: 'Customer Insights CDP',            desc: 'Source connections, identity resolution, unified profile schema, and live segment definitions.' },
    { icon: Workflow,   title: 'Real-time journey orchestration',  desc: 'Event-driven journeys with sub-second triggering, branching, and channel orchestration.' },
    { icon: BarChart2,  title: 'Power BI revenue dashboards',      desc: 'Embedded pipeline, journey performance, and CDP segment dashboards for revenue leadership.' },
  ],
  process: [
    { num: '01', title: 'Discovery & Audit',     desc: "We map your sales process, qualification criteria, marketing journeys, channel mix, lead sources, and the current state of CRM data quality before designing anything." },
    { num: '02', title: 'Architecture & Design', desc: "Dataverse schema, custom tables, sales process flow, scoring models, CDP source map, journey blueprints, and Copilot rollout plan signed off by sales and marketing leadership." },
    { num: '03', title: 'Build & Test',          desc: "Pipeline configured, Copilot deployed, predictive models trained on historical data, CDP sources connected, real-time journeys built, Power BI dashboards live, and UAT cycles complete before go-live." },
    { num: '04', title: 'Launch & Adopt',        desc: "Phased rollout by team or geography, enablement sessions for reps and marketers, Copilot prompt libraries, and 30-day hypercare. Quarterly optimization reviews follow." },
  ],
  whyUs: [
    { title: 'We Architect for Adoption',          desc: "Most Sales rollouts fail because reps refuse to update CRM. We design pipeline UX, Copilot-assisted updates, and Outlook-first capture so the system gets the data without manual entry." },
    { title: 'Real-Time Journeys, Done Right',     desc: 'Customer Insights real-time journeys have replaced the older outbound marketing engine. We have shipped the new engine - identity, triggers, branching - not just migrated the old one.' },
    { title: 'CDP That Drives Revenue, Not Vanity',desc: 'Most CDP implementations end in pretty unified profiles that nobody uses. We wire CDP segments into Sales territories, journey audiences, and ad audience syncs so the data shapes revenue actions.' },
    { title: 'Dual-Stack Honesty',                 desc: 'If you already run Salesforce or HubSpot for Sales, we architect Customer Insights to coexist - not force you into a Sales migration. Honest recommendations on what to move and when.' },
  ],
  finalCtaHeadlineTop: 'Ready for Pipeline + Journeys',
  finalCtaHeadlineGold: 'On One Customer Record?',
  finalCtaBody: 'In 30 minutes we will audit your current sales and marketing stack, identify where Customer Experience pays back fastest, and hand you a clear Dynamics roadmap at no cost.',
  finalCtaChecklist: ['Sales + marketing audit', 'CDP + journey scoping', 'No obligation whatsoever'],
  finalCtaButton: 'Book My Free Customer Experience Call',
}

export default function CustomerExperience() {
  useEffect(() => {
    addPageSchema('faq', faqPageSchema(faqs))
    return () => addPageSchema('faq', null)
  }, [])
  return <DynamicsPageTemplate data={data} />
}
