import { useEffect } from 'react'
import {
  RefreshCw, Layers, Sparkles, ShieldCheck, GitBranch, Activity, Boxes, Database,
} from 'lucide-react'
import { addPageSchema, faqPageSchema } from '../../seoConfig'
import HubPageTemplate from './HubPageTemplate'

const faqs = [
  { q: 'What is HubSpot Smart CRM?', a: 'Smart CRM is the underlying CRM platform every HubSpot Hub runs on. It is the data model, automation engine, permission system, AI layer (Breeze + Breeze Intelligence), and reporting foundation - shared across Marketing, Sales, Service, Content, Commerce, and Data Hub.' },
  { q: 'Is Smart CRM free?', a: 'The core Smart CRM is free with HubSpot’s free tier - unlimited users, contacts, deals, tickets, and basic reporting. Advanced features (custom objects, AI assistants, advanced permissions, sandboxes) are unlocked by Pro and Enterprise editions of any Hub.' },
  { q: 'How is Smart CRM different from Salesforce?', a: 'Smart CRM ships with a unified data model, native AI (Breeze) baked in, and zero integration tax between modules - because Marketing, Sales, Service, Content, Commerce, and Data Hub all sit on the same database. Salesforce is more configurable at the enterprise edge; Smart CRM is faster to ship and operate. We help teams choose - see our Salesforce vs HubSpot scoping call.' },
  { q: 'Can we customize Smart CRM with custom objects?', a: 'Yes - Enterprise editions unlock custom objects, custom properties on any object, association labels, multi-currency, partitions, and field-level permissions. We architect the schema as part of every implementation.' },
]

const data = {
  tagIcon: Database,
  tagLabel: 'HubSpot Smart CRM',
  headlineTop: 'The CRM Under the Hubs.',
  headlineGold: 'AI-Native. Unified. Customizable.',
  subhead: 'Smart CRM is the platform every Hub runs on - the data model, AI layer, automation engine, and permission system that makes Marketing, Sales, Service, Content, Commerce, and Data Hub feel like one product.',
  ctaLabel: 'Scope My Smart CRM Build',
  platformName: 'Smart CRM',
  painPoints: [
    { pain: 'CRM is a glorified contact list - no custom objects, no real automation, no AI', fix: '<strong>Smart CRM Enterprise</strong> unlocks custom objects, multi-step workflows, and native Breeze AI assistants' },
    { pain: 'Marketing, sales, and service all run different systems with brittle Zaps between', fix: '<strong>One unified data model</strong> - every Hub reads and writes the same contacts, deals, tickets' },
    { pain: 'Reports lie because each team has its own definition of MQL, opportunity, churn', fix: '<strong>Shared property definitions</strong> + custom datasets - one source of truth for every metric' },
    { pain: 'Permissions are all-or-nothing - sales sees CS notes, contractors see commission data', fix: '<strong>Field-level permissions + partitions</strong> + role-based access tied to teams and territories' },
    { pain: 'New AI features go live and nobody knows how to safely roll them out', fix: '<strong>Breeze rollout strategy</strong> with brand voice, eval suites, sandbox testing, and audit logs' },
    { pain: 'Sandbox? Versioning? Change management? Everything happens in prod', fix: '<strong>Sandbox + change management</strong> - test workflows, schema changes, and AI configs before production' },
  ],
  outcomes: [
    { icon: Layers,      value: '0',     label: 'integration tax between Hubs - every module shares the same database and automation engine', color: '#FF7A59' },
    { icon: Sparkles,    value: 'Native',label: 'Breeze AI baked into every record, list, workflow, and report - no add-on plugins or seats', color: '#F59E0B' },
    { icon: RefreshCw,   value: '5 min', label: 'to launch a new custom object with properties, associations, and pipeline - vs. weeks elsewhere', color: '#6366F1' },
    { icon: ShieldCheck, value: 'SOC 2', label: 'Type II + GDPR + ISO 27001 - permission, partition, and audit log defaults for regulated industries', color: '#06B6D4' },
    { icon: Activity,    value: 'Real-time', label: 'reporting on every object - no overnight batch, no separate BI tool for basic dashboards', color: '#10B981' },
    { icon: GitBranch,   value: 'API + Webhooks', label: 'full REST + GraphQL + webhook surface for custom apps and integrations', color: '#FF7A59' },
  ],
  whatWeShip: [
    { icon: Database,    title: 'CRM data model + schema',      desc: 'Custom objects, properties, association labels, and pipelines mapped to how your business actually works.' },
    { icon: ShieldCheck, title: 'Permissions + partitions',     desc: 'Role-based access, field-level rules, team partitions, and territory assignments - audited and documented.' },
    { icon: Sparkles,    title: 'Breeze AI rollout strategy',   desc: 'Brand voice profiles, eval suites, sandbox testing, and audit logs so AI features go live safely.' },
    { icon: GitBranch,   title: 'Workflow + automation engine', desc: 'Reusable workflow patterns, programmable actions, and a workflow library your ops team can extend.' },
    { icon: Boxes,       title: 'Custom apps + API integrations', desc: 'Private apps, webhook subscribers, custom UI cards, and CRM extensions for your stack.' },
    { icon: Activity,    title: 'Reporting + custom datasets',  desc: 'Joined-object datasets, real-time dashboards, and KPI definitions shared across Marketing, Sales, Service.' },
  ],
  process: [
    { num: '01', title: 'Schema & Process Audit', desc: "We inventory every object you actually need - contacts, companies, deals, tickets, plus the custom objects your business runs on (projects, subscriptions, assets, whatever). Plus your team structure and access rules." },
    { num: '02', title: 'CRM Architecture',        desc: "Schema design, association map, pipeline stages, property dictionary, permission model, partition strategy, and Breeze rollout plan signed off before any configuration." },
    { num: '03', title: 'Build & Configure',       desc: "Objects created, properties standardized, workflows built, permissions enforced, sandboxes set up, Breeze trained, custom UI cards shipped, and integrations connected to the rest of your stack." },
    { num: '04', title: 'Train, Launch, Govern',   desc: "Admin training, end-user enablement, audit log setup, change management process, and a 30-day hypercare window. Optional managed services for ongoing CRM governance." },
  ],
  whyUs: [
    { title: 'We Architect the CRM, Not Just Configure It', desc: "Schema and permission decisions made wrong on day one cost months to undo later. We design the data model around how your business will work in 3 years, not just how it looks today." },
    { title: 'Breeze AI Rolled Out Safely',                 desc: 'Most teams turn on Breeze, hit an embarrassing AI output in front of a customer, and turn it off. We build brand voice, eval suites, sandbox tests, and audit logs - so AI ships with guardrails.' },
    { title: 'One Source of Truth for Every Team',          desc: "Custom datasets and shared property definitions kill the 'whose number is right' argument. Finance, sales, marketing, and CS report on the same data with the same definitions." },
    { title: 'Governance That Survives Year Two',           desc: 'We document schema, permissions, automation, and AI configs - and set up sandboxes + change management so your team can extend without breaking what we built.' },
  ],
  finalCtaHeadlineTop: 'Ready to Treat HubSpot',
  finalCtaHeadlineGold: 'Like a Real CRM Platform?',
  finalCtaBody: 'In 30 minutes we will audit your current Smart CRM setup - schema, permissions, automation, Breeze readiness - and hand you a clear architecture roadmap at no cost.',
  finalCtaChecklist: ['CRM architecture audit', 'Breeze readiness scoping', 'No obligation whatsoever'],
  finalCtaButton: 'Book My Free Smart CRM Call',
}

export default function SmartCRM() {
  useEffect(() => {
    addPageSchema('faq', faqPageSchema(faqs))
    return () => addPageSchema('faq', null)
  }, [])
  return <HubPageTemplate data={data} />
}
