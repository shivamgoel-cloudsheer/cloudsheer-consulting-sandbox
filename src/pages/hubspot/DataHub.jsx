import { useEffect } from 'react'
import {
  Database, RefreshCw, GitBranch, ShieldCheck, Layers, Sparkles, Server, Activity,
} from 'lucide-react'
import { addPageSchema, faqPageSchema } from '../../seoConfig'
import HubPageTemplate from './HubPageTemplate'

const faqs = [
  { q: 'What is the difference between Operations Hub and Data Hub?', a: 'HubSpot consolidated its data management story under "Data Hub" - the new name for what was Operations Hub Enterprise plus Breeze Intelligence enrichment. Data sync (formerly PieSync), data quality automation, custom datasets, programmable workflows, and warehouse integration all live here.' },
  { q: 'Can Data Hub sync with Salesforce and our data warehouse?', a: 'Yes. Native two-way data sync supports Salesforce, NetSuite, Microsoft Dynamics, Shopify, Stripe, and dozens of others. The Snowflake data share also pushes a read-only copy of HubSpot data into your warehouse on a schedule.' },
  { q: 'What does Breeze Intelligence enrichment actually add?', a: 'Breeze Intelligence enriches contact and company records with firmographic, technographic, and buyer intent data sourced from HubSpot’s 200M+ dataset. We wire it into lead scoring, segmentation, and routing so enriched data drives real decisions.' },
  { q: 'Can you fix our duplicate contacts and stale data?', a: 'Yes. We build data quality automation: deduplication rules, formatting standardization (phone, address, capitalization), date format normalization, and stale-record archival - all running on schedules with audit logs.' },
]

const data = {
  tagIcon: Database,
  tagLabel: 'HubSpot Data Hub',
  headlineTop: 'Clean Data. Synced Systems.',
  headlineGold: 'AI Enrichment That Actually Routes Leads.',
  subhead: 'Data Hub builds: two-way data sync with Salesforce, NetSuite, Shopify and Stripe, Breeze Intelligence enrichment, programmable workflows, custom datasets, and Snowflake data share - all under one ops layer.',
  ctaLabel: 'Scope My Data Hub Build',
  platformName: 'Data Hub',
  painPoints: [
    { pain: 'Salesforce and HubSpot drift apart - same contact, two truths', fix: '<strong>Native two-way data sync</strong> with field-level rules and conflict resolution, not duct-taped Zaps' },
    { pain: 'New leads route by ZIP code while sales scrambles to enrich them manually', fix: '<strong>Breeze Intelligence</strong> enriches firmographics, technographics, and intent on form submit' },
    { pain: 'Duplicate companies, "John smith" vs "John Smith", and 2019 leads still in active lists', fix: '<strong>Data quality automation</strong> dedupes, normalizes, and archives on a schedule with audit logs' },
    { pain: 'Workflows hit a wall on edge cases - no way to call an API or run real logic', fix: '<strong>Programmable workflows</strong> in JavaScript or Python with secrets, retries, and observability' },
    { pain: 'Finance asks for a custom HubSpot+Stripe+billing report and nothing fits', fix: '<strong>Custom datasets</strong> let you join objects and surface them as reusable report sources' },
    { pain: 'Data team wants HubSpot data in Snowflake but the ETL bill is brutal', fix: '<strong>Snowflake data share</strong> pushes a read-only HubSpot copy to your warehouse natively' },
  ],
  outcomes: [
    { icon: RefreshCw,    value: '99.9%', label: 'two-way sync reliability across Salesforce, NetSuite, Shopify, and other connected systems', color: '#FF7A59' },
    { icon: Sparkles,     value: '70%',   label: 'higher conversion on enriched inbound leads vs. unenriched (Breeze Intelligence outcome study)', color: '#F59E0B' },
    { icon: ShieldCheck,  value: '40%',   label: 'reduction in duplicate contacts within 60 days of data quality automation going live', color: '#6366F1' },
    { icon: GitBranch,    value: '10×',   label: 'faster automation development with programmable workflows vs. building bespoke middleware', color: '#06B6D4' },
    { icon: Server,       value: 'Native',label: 'Snowflake data share - no ETL pipeline to maintain or third-party reverse ETL bill', color: '#10B981' },
    { icon: Activity,     value: 'Audit', label: 'logs and observability on every sync, enrichment, and workflow run for compliance and debugging', color: '#FF7A59' },
  ],
  whatWeShip: [
    { icon: RefreshCw,   title: 'Two-way data sync',           desc: 'Field-level rules and conflict resolution for Salesforce, NetSuite, Dynamics, Shopify, Stripe and more.' },
    { icon: Sparkles,    title: 'Breeze Intelligence wiring',  desc: 'Enrichment on form submit + nightly batch, fed into scoring, routing, and segmentation.' },
    { icon: ShieldCheck, title: 'Data quality automation',     desc: 'Deduplication, normalization, stale-record archival, and audit trails running on schedules.' },
    { icon: GitBranch,   title: 'Programmable workflows',      desc: 'Custom JavaScript or Python actions with secrets, retries, and observability built in.' },
    { icon: Layers,      title: 'Custom datasets + reporting', desc: 'Reusable joined-object datasets surfaced as report sources for revenue and ops teams.' },
    { icon: Server,      title: 'Snowflake data share',        desc: 'Native read-only HubSpot copy in your warehouse - no ETL, no reverse-ETL bill.' },
  ],
  process: [
    { num: '01', title: 'Data Audit & Source Map', desc: "We inventory every system HubSpot touches - CRMs, ERPs, payment, ecommerce, warehouse - plus current data quality issues, sync gaps, and enrichment needs before any wiring." },
    { num: '02', title: 'Architecture & Rules',     desc: "Source-of-truth decisions per object, field-level sync rules, enrichment criteria, dedupe logic, and the workflow + dataset roadmap signed off by ops and revenue stakeholders." },
    { num: '03', title: 'Build & Backfill',         desc: "Sync connections live, Breeze Intelligence enriching existing records, dedupe and normalization workflows running, programmable workflows for edge cases, and Snowflake share configured." },
    { num: '04', title: 'Monitor & Operate',        desc: "Sync health dashboards, enrichment hit-rate tracking, dedupe audit logs, and a 30-day hypercare window. Optional managed services for ongoing data ops." },
  ],
  whyUs: [
    { title: 'We Treat Data Hub as Plumbing, Not a Toy', desc: 'Most agencies treat Operations Hub as a Zapier replacement. We architect it as the data backbone of your revenue stack - with sync contracts, error budgets, and observability.' },
    { title: 'Breeze Intelligence That Drives Decisions', desc: 'Enrichment alone is vanity. We wire it into scoring, routing, segmentation, and account assignment so enriched fields actually change what happens to a lead.' },
    { title: 'Programmable Workflows by Engineers',       desc: 'Our team writes production JavaScript and Python - not workflow-builder duct tape. Edge cases get real code with retries, logging, and tests.' },
    { title: 'We Stay Until Data Quality Holds',          desc: 'Dedupe and normalization decay without ongoing rules. Quarterly data health reviews and managed services keep the work from rotting six months in.' },
  ],
  finalCtaHeadlineTop: 'Tired of Fighting',
  finalCtaHeadlineGold: 'Dirty Data and Broken Syncs?',
  finalCtaBody: 'In 30 minutes we will audit your current data layer - sync gaps, dedupe debt, enrichment coverage, and warehouse strategy - and hand you a clear Data Hub roadmap at no cost.',
  finalCtaChecklist: ['Data + sync audit', 'Enrichment + dedupe scoping', 'No obligation whatsoever'],
  finalCtaButton: 'Book My Free Data Hub Call',
}

export default function DataHub() {
  useEffect(() => {
    addPageSchema('faq', faqPageSchema(faqs))
    return () => addPageSchema('faq', null)
  }, [])
  return <HubPageTemplate data={data} />
}
