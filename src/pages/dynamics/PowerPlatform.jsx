import { useEffect } from 'react'
import {
  Zap, Layers, Workflow, BarChart2, Bot, ShieldCheck, GitBranch, Database,
} from 'lucide-react'
import { addPageSchema, faqPageSchema } from '../../seoConfig'
import DynamicsPageTemplate from './DynamicsPageTemplate'

const faqs = [
  { q: 'What is Power Platform?', a: 'Power Platform is Microsoft’s low-code extensibility stack: Power Apps (custom apps), Power Automate (workflow + RPA), Power BI (analytics), Power Pages (external portals), and Copilot Studio (custom AI agents). It runs on Dataverse and integrates natively with Dynamics 365 and Microsoft 365.' },
  { q: 'Is Power Platform separate from Dynamics 365?', a: 'Yes - Power Platform is a standalone Microsoft offering that also serves as the extensibility layer for Dynamics 365. We position it here because most CloudSheer Dynamics engagements use Power Platform for custom apps, automation, and Copilot agents on top of D365.' },
  { q: 'How does Copilot Studio compare to building agents on Claude or Bedrock?', a: 'Copilot Studio is the right fit when the agent lives inside the Microsoft Graph - Teams, Outlook, SharePoint, Dynamics. For broader boundaries (cross-cloud, custom model selection, complex multi-agent orchestration), custom builds on Bedrock or the Claude API are typically a better fit. We help you pick - and ship both.' },
  { q: 'Are Power Apps real apps or just glorified forms?', a: 'Both, depending on use. Canvas apps are production-grade for inspection, dispatch, approvals, and field workflows. Model-driven apps are the right pattern for record-heavy CRM-style apps on Dataverse. We architect against the right pattern, not always canvas.' },
]

const data = {
  tagIcon: Zap,
  tagLabel: 'Microsoft Power Platform',
  headlineTop: 'Low-Code on Microsoft.',
  headlineGold: 'Apps, Automation, AI, Analytics.',
  subhead: 'Power Platform builds: Power Apps, Power Automate flows, Power BI dashboards, Power Pages portals, and Copilot Studio agents - extending Dynamics 365 and Microsoft 365 without bespoke development.',
  ctaLabel: 'Scope My Power Platform Build',
  platformName: 'Power Platform',
  painPoints: [
    { pain: 'Every internal request goes to IT and waits 6+ months', fix: '<strong>Citizen developer enablement</strong> with Power Apps + Power Automate governance so business users build safely' },
    { pain: 'We bought Power Platform licenses but only IT actually uses it', fix: '<strong>Center of Excellence (CoE)</strong> rollout with templates, app catalogs, and training to drive adoption' },
    { pain: 'Custom Dynamics extensions are bespoke C# nobody can maintain', fix: '<strong>Model-driven apps + PCF controls</strong> on Dataverse - lower maintenance, native upgrades' },
    { pain: 'Approvals happen in email; nothing is logged or audited', fix: '<strong>Power Automate approval flows</strong> with audit logs, escalation, and SLA tracking' },
    { pain: 'Reporting is a 90-page PDF emailed monthly', fix: '<strong>Power BI workspaces</strong> with real-time datasets, row-level security, and embedded dashboards in Teams' },
    { pain: 'We want a custom AI agent but cannot maintain a Bedrock build', fix: '<strong>Copilot Studio agents</strong> for Teams + Outlook + Dynamics use cases - low-code with enterprise guardrails' },
  ],
  outcomes: [
    { icon: Layers,      value: '10×',   label: 'faster delivery on internal apps with Power Apps vs. traditional .NET dev (typical client outcome)', color: '#5EB0F0' },
    { icon: Workflow,    value: '+38%',  label: 'process automation coverage within 90 days of Center of Excellence rollout', color: '#F59E0B' },
    { icon: Bot,         value: 'Native',label: 'Copilot Studio agents for Teams, Outlook, and Dynamics - shipped in weeks, not months', color: '#6366F1' },
    { icon: BarChart2,   value: 'Real-time', label: 'Power BI dashboards with row-level security and Teams embedding for every team', color: '#06B6D4' },
    { icon: ShieldCheck, value: 'CoE',   label: 'governance with DLP policies, environments strategy, and citizen developer guardrails', color: '#10B981' },
    { icon: GitBranch,   value: 'ALM',   label: 'application lifecycle - solutions, pipelines, dev/test/prod environments, source control', color: '#5EB0F0' },
  ],
  whatWeShip: [
    { icon: Layers,      title: 'Power Apps (canvas + model-driven)', desc: 'Production-grade apps with PCF controls, custom connectors, offline support, and Dataverse modeling.' },
    { icon: Workflow,    title: 'Power Automate flows + RPA',         desc: 'Approval flows, integration flows, scheduled flows, and Power Automate Desktop for legacy UI automation.' },
    { icon: BarChart2,   title: 'Power BI workspaces',                desc: 'Real-time datasets, row-level security, custom themes, Teams embedding, and paginated reports.' },
    { icon: Bot,         title: 'Copilot Studio agents',              desc: 'Custom topics, knowledge grounding, plugins to Dataverse + APIs, and Teams + Outlook deployment.' },
    { icon: ShieldCheck, title: 'Center of Excellence + governance',  desc: 'DLP policies, environments strategy, app catalog, maker enablement, and ALM with solutions + pipelines.' },
    { icon: Database,    title: 'Dataverse + integrations',           desc: 'Dataverse schema, virtual tables to D365 + external systems, and custom connectors for legacy APIs.' },
  ],
  process: [
    { num: '01', title: 'Platform & Use-Case Audit', desc: "We map your current Power Platform footprint, license utilization, top 5 business asks, makers + IT relationship, and the security + DLP posture before recommending architecture." },
    { num: '02', title: 'Architecture & CoE Design', desc: "Environments strategy, DLP policies, Dataverse schema, ALM pipeline, app + flow standards, and a Center of Excellence rollout plan signed off by IT + business leadership." },
    { num: '03', title: 'Build & Enable',             desc: "Priority apps + flows + dashboards + Copilot agents built, CoE templates published, citizen developer enablement sessions, and ALM pipelines configured for solutions deployment." },
    { num: '04', title: 'Govern & Scale',             desc: "App catalog + maker community launched, monthly office hours, DLP + license utilization monitoring, and quarterly CoE health reviews. Optional managed services for ongoing platform operations." },
  ],
  whyUs: [
    { title: 'We Treat Power Platform as a Platform, Not a Toy', desc: 'Most Power Platform rollouts are one-off apps that decay. We design environments, ALM, DLP, and a maker community so the platform scales with use - not despite it.' },
    { title: 'We Pick the Right Pattern Per Use Case',           desc: 'Canvas vs. model-driven, cloud flow vs. desktop flow, Copilot Studio vs. custom agent - each pattern has a sweet spot. We pick based on use case, not because we sell one.' },
    { title: 'Center of Excellence That Survives',               desc: "CoEs collapse without ongoing engagement. We design adoption KPIs, monthly office hours, and a maker community structure that keeps the platform from rotting six months in." },
    { title: 'Honest on Copilot Studio vs. Custom',              desc: "If your agent use case is broader than the Microsoft Graph, we will say so and recommend a custom build on Bedrock or the Claude API. We ship both - the choice is honest." },
  ],
  finalCtaHeadlineTop: 'Ready to Run Low-Code',
  finalCtaHeadlineGold: 'Like a Platform Practice?',
  finalCtaBody: 'In 30 minutes we will audit your current Power Platform footprint, identify the highest-value apps and agents to ship next, and hand you a clear roadmap + CoE plan at no cost.',
  finalCtaChecklist: ['Platform audit', 'CoE + ALM scoping', 'No obligation whatsoever'],
  finalCtaButton: 'Book My Free Power Platform Call',
}

export default function PowerPlatform() {
  useEffect(() => {
    addPageSchema('faq', faqPageSchema(faqs))
    return () => addPageSchema('faq', null)
  }, [])
  return <DynamicsPageTemplate data={data} />
}
