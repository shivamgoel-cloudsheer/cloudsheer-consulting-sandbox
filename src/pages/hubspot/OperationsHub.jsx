import { useEffect } from 'react'
import {
  Workflow, RefreshCw, Database, Code, Shield, Zap, GitMerge, BarChart2,
} from 'lucide-react'
import { addPageSchema, faqPageSchema } from '../../seoConfig'
import HubPageTemplate from './HubPageTemplate'

const faqs = [
  { q: 'What does Operations Hub actually do?', a: 'Three core things: (1) two-way data sync between HubSpot and other systems (Salesforce, NetSuite, Shopify, custom apps) with field mapping and conflict rules; (2) programmable automation via custom-coded actions in workflows; (3) data quality automation — formatting, deduplication, and validation rules at the property level.' },
  { q: 'Do I need Operations Hub if I already use Zapier?', a: 'Zapier handles point-to-point triggers but breaks at scale, has unpredictable costs at high volume, and offers limited error handling. Operations Hub data sync is purpose-built for CRM use cases, scales to millions of records, and has audit trails Zapier does not. We commonly migrate clients off Zapier when complexity grows.' },
  { q: 'Can you build custom-coded actions in workflows?', a: 'Yes. Custom-coded actions run JavaScript inside HubSpot workflows — for API calls, complex calculations, or business logic that native actions cannot handle. Operations Hub Professional and Enterprise required.' },
]

const data = {
  tagIcon: Workflow,
  tagLabel: 'HubSpot Operations Hub',
  headlineTop: 'Sync Without Spaghetti.',
  headlineGold: 'Automate Without Limits.',
  subhead: 'HubSpot Operations Hub deployments — programmable automation, two-way data sync, data quality automation, custom datasets, and warehouse integration.',
  ctaLabel: 'Scope My Operations Hub Build',
  painPoints: [
    { pain: 'Salesforce and HubSpot drift apart — contact info contradicts in each', fix: '<strong>Two-way data sync</strong> with field-level mapping, conflict rules, and audit trails' },
    { pain: 'Zapier setup is fragile and bills are climbing', fix: '<strong>Operations Hub data sync</strong> scales to millions of records with native error handling' },
    { pain: 'Workflows hit native-action limits and we have to send to external tools', fix: '<strong>Custom-coded actions</strong> run JavaScript inside workflows for any logic or API call' },
    { pain: 'Phone numbers and addresses arrive in 17 different formats', fix: '<strong>Data quality automation</strong> formats, validates, and standardizes on save' },
    { pain: 'Duplicates pile up faster than the team can clean them', fix: '<strong>Programmable deduplication</strong> with merge rules and master-record logic' },
    { pain: 'Reporting needs cross-object joins HubSpot reporting cannot do', fix: '<strong>Custom datasets</strong> with calculated fields and reusable joins for any report' },
  ],
  outcomes: [
    { icon: RefreshCw, value: '99.5%', label: 'sync reliability with Operations Hub data sync vs. typical Zapier/iPaaS deployments', color: '#FF7A59' },
    { icon: Database,  value: '10M+',  label: 'record-volume support per sync — far beyond what point-to-point tools can handle', color: '#F59E0B' },
    { icon: Zap,       value: '60%',   label: 'fewer manual data corrections per quarter after data quality automation rules go live', color: '#6366F1' },
    { icon: GitMerge,  value: '100+',  label: 'native app integrations available with no coding required', color: '#06B6D4' },
    { icon: Shield,    value: 'SOC 2', label: 'Type II audit trail on every sync, automation, and custom action — for compliance reviews', color: '#10B981' },
    { icon: BarChart2, value: '3.4×',  label: 'faster reporting velocity with custom datasets vs. manual cross-object analysis', color: '#FF7A59' },
  ],
  capabilities: [
    {
      area: 'Data Sync',
      icon: RefreshCw,
      color: '#FF7A59',
      headline: 'Bidirectional sync that actually stays in sync',
      points: [
        '<strong>Native syncs</strong> for Salesforce, NetSuite, Shopify, Stripe, and 100+ more',
        '<strong>Field-level mapping</strong> with type coercion and transformation',
        '<strong>Conflict resolution rules</strong> per field — master record by source or recency',
        '<strong>Historical sync</strong> for backfilling years of data',
        '<strong>Audit log + error retry</strong> for every sync event',
      ],
    },
    {
      area: 'Programmable Automation',
      icon: Code,
      color: '#F59E0B',
      headline: 'When workflows need to do more than native actions allow',
      points: [
        '<strong>Custom-coded actions</strong> in workflows — JavaScript with API access',
        '<strong>Webhooks</strong> trigger workflows from any external system',
        '<strong>Bot framework</strong> for chatbots with branching logic and CRM lookups',
        '<strong>Scheduled workflows</strong> with cron-style timing',
        '<strong>Error branches</strong> to handle API failures gracefully',
      ],
    },
    {
      area: 'Data Quality Automation',
      icon: Shield,
      color: '#6366F1',
      headline: 'Data hygiene without manual cleanup',
      points: [
        '<strong>Format automation</strong> for phone, email, addresses, and capitalization',
        '<strong>Property validation rules</strong> with required formats and dropdowns',
        '<strong>Programmable deduplication</strong> with merge precedence rules',
        '<strong>Date and timezone normalization</strong> across global teams',
        '<strong>AI-powered duplicate detection</strong> with fuzzy matching',
      ],
    },
    {
      area: 'Custom Datasets & Warehouse',
      icon: Database,
      color: '#06B6D4',
      headline: 'Reporting beyond HubSpot native limits',
      points: [
        '<strong>Custom datasets</strong> join objects, calculate fields, and serve any report',
        '<strong>Snowflake data share</strong> push HubSpot data to your warehouse natively',
        '<strong>BigQuery, Redshift connectors</strong> via Fivetran or HubSpot sync',
        '<strong>Reverse ETL</strong> push enriched warehouse data back into HubSpot',
        '<strong>Calculated properties</strong> at the contact, company, and deal level',
      ],
    },
  ],
  process: [
    { num: '01', title: 'Data Architecture Audit',  desc: "We map every system that talks to HubSpot today, the data quality state of your existing properties, sync conflicts you have lived with, and the reports you cannot build with native tools — before configuring a single sync." },
    { num: '02', title: 'Sync & Automation Build',  desc: "Data syncs configured with field mapping and conflict rules. Programmable workflows built where native actions fall short. Data quality automation deployed against your dirtiest properties first." },
    { num: '03', title: 'Custom Datasets + Warehouse', desc: "Custom datasets built for the reports you have been hacking around. Warehouse integration scoped if you need Snowflake, BigQuery, or Redshift in the loop." },
    { num: '04', title: 'Observability & Hypercare', desc: "Sync error dashboards, automation logs, and data quality reports wired up. Hypercare window to fine-tune conflict rules and dedup logic as real data flows." },
  ],
  whyUs: [
    { title: 'We Know Where iPaaS Tools Break',           desc: 'Most Operations Hub builds we inherit are recovering from Zapier or Workato sprawl. We know which patterns scale and which collapse — and we design syncs that survive 10x volume growth.' },
    { title: 'Salesforce ↔ HubSpot Is Our Bread and Butter', desc: 'Dual-stack environments are most consultancies\' nightmare. They\'re ours by design — we run both platforms daily and know exactly where the two object models conflict and how to map them cleanly.' },
    { title: 'Custom Code With Long-Term Maintainability',  desc: 'Programmable workflows are easy to write and hard to maintain. We code with idempotency, error handling, and documentation that lets the next person — or AI — modify them safely.' },
    { title: "We Stay Until Sync Hits 99.5%",              desc: 'A sync that "mostly works" is a slow-bleeding data problem. We tune conflict rules and error handling through hypercare until reliability is rock-solid.' },
  ],
  finalCtaHeadlineTop: 'Ready to Untangle Your',
  finalCtaHeadlineGold: 'CRM Data Layer?',
  finalCtaBody: 'In 30 minutes we will audit your current integrations and data quality, identify the highest-impact moves on sync reliability and reporting, and hand you a clear Operations Hub roadmap — at no cost.',
  finalCtaChecklist: ['Integration audit included', 'Data quality assessment', 'No obligation whatsoever'],
  finalCtaButton: 'Book My Free Operations Hub Call',
}

export default function OperationsHub() {
  useEffect(() => {
    addPageSchema('faq', faqPageSchema(faqs))
    return () => addPageSchema('faq', null)
  }, [])
  return <HubPageTemplate data={data} />
}
