import { useEffect } from 'react'
import {
  ShoppingCart, DollarSign, FileText, RefreshCw, CreditCard, BarChart2, Repeat, ShieldCheck,
} from 'lucide-react'
import { addPageSchema, faqPageSchema } from '../../seoConfig'
import HubPageTemplate from './HubPageTemplate'

const faqs = [
  { q: 'What is HubSpot Commerce Hub?', a: 'Commerce Hub is HubSpot’s revenue collection layer - quotes, invoices, payment links, subscriptions, and CPQ - built natively on Smart CRM. It replaces the Stripe + Chargebee + DocuSign duct tape most go-to-market teams run on.' },
  { q: 'Do we still need Stripe or another payment processor?', a: 'Stripe is the underlying processor for Commerce Hub - HubSpot handles the customer-facing surface (quotes, invoices, payment links, subscription management, dunning) and the Smart CRM integration. You keep your Stripe account; Commerce Hub orchestrates on top.' },
  { q: 'Can Commerce Hub handle recurring subscriptions and upgrades?', a: 'Yes. Native subscription billing supports monthly/annual plans, mid-cycle upgrades, proration, dunning, and self-serve customer portals. We wire renewal forecasting and churn signals back into Sales Hub and Service Hub.' },
  { q: 'Does Commerce Hub work outside the US?', a: 'Commerce Hub payment processing is currently strongest in the US, UK, and parts of EU - check current country support with us during scoping. Quotes, invoices, and CPQ work globally; only the embedded payment collection has regional limits.' },
]

const data = {
  tagIcon: ShoppingCart,
  tagLabel: 'HubSpot Commerce Hub',
  headlineTop: 'Quote to Cash.',
  headlineGold: 'In One Platform. On Your CRM.',
  subhead: 'Commerce Hub builds: CPQ, branded quotes, invoices, payment links, subscriptions, and self-serve customer portals - all natively wired into Smart CRM so revenue, finance, and CS see the same numbers.',
  ctaLabel: 'Scope My Commerce Hub Build',
  platformName: 'Commerce Hub',
  painPoints: [
    { pain: 'Sales builds quotes in Google Docs and chases signatures in DocuSign', fix: '<strong>Native CPQ + quotes</strong> with e-sign, branded templates, and version control inside HubSpot' },
    { pain: 'Invoices live in QuickBooks; payment status is invisible to sales and CS', fix: '<strong>Invoices on the deal record</strong> with real-time payment status and automatic CRM updates' },
    { pain: 'Subscription billing is duct-taped from Stripe + Chargebee + custom scripts', fix: '<strong>Native subscriptions</strong> with proration, upgrades, dunning, and renewal forecasting' },
    { pain: 'Customers email AR for an invoice copy or to update a credit card', fix: '<strong>Self-serve customer portal</strong> for invoices, payment methods, and subscription changes' },
    { pain: 'Finance and revenue argue over MRR, ARR, and churn definitions every quarter', fix: '<strong>Single source of truth</strong> - one revenue model across Sales Hub, Service Hub, and finance reports' },
    { pain: 'Dunning is a manual chase - failed payments turn into churn before anyone notices', fix: '<strong>Automated dunning sequences</strong> with retry logic, customer emails, and CS alerts' },
  ],
  outcomes: [
    { icon: FileText,     value: '3×',   label: 'faster quote-to-signature cycle with native CPQ + e-sign vs. Docs + DocuSign workflow', color: '#FF7A59' },
    { icon: DollarSign,   value: '12%',  label: 'reduction in failed-payment churn within 90 days of automated dunning going live', color: '#F59E0B' },
    { icon: Repeat,       value: '90%',  label: 'of subscription changes self-served by customers - AR queue shrinks by ~70%', color: '#6366F1' },
    { icon: BarChart2,    value: 'Real-time', label: 'MRR, ARR, and net revenue retention dashboards - no monthly Excel rebuild', color: '#06B6D4' },
    { icon: ShieldCheck,  value: 'PCI',  label: 'compliant payment handling - card data never touches your servers or HubSpot directly', color: '#10B981' },
    { icon: CreditCard,   value: '+24%', label: 'win rate on deals with branded, interactive quotes vs. static PDFs', color: '#FF7A59' },
  ],
  whatWeShip: [
    { icon: FileText,    title: 'CPQ + branded quote templates', desc: 'Product catalog, pricing rules, approval workflows, branded templates, and embedded e-signature.' },
    { icon: DollarSign,  title: 'Invoicing + payment links',      desc: 'One-off invoices, recurring invoices, payment links with real-time status on the deal record.' },
    { icon: Repeat,      title: 'Subscription billing',            desc: 'Plans, proration, upgrades, downgrades, dunning, and renewal forecasting wired into Sales Hub.' },
    { icon: CreditCard,  title: 'Customer self-serve portal',      desc: 'Branded portal for invoices, payment methods, plan changes, and billing history.' },
    { icon: BarChart2,   title: 'Revenue reporting',               desc: 'Real-time MRR, ARR, churn, and NRR dashboards - one source of truth for finance, sales, and CS.' },
    { icon: ShieldCheck, title: 'Finance system integration',      desc: 'Two-way sync with QuickBooks, NetSuite, or Xero so the GL stays clean without manual reconciliation.' },
  ],
  process: [
    { num: '01', title: 'Revenue Model Audit', desc: "We map your product catalog, pricing rules, discount approvals, subscription plans, dunning policy, and finance system - plus where quote-to-cash currently leaks time or money." },
    { num: '02', title: 'CPQ + Billing Design',  desc: "Catalog architecture, pricing logic, quote templates, subscription plan structure, dunning rules, and finance system sync map signed off by sales, CS, and finance." },
    { num: '03', title: 'Build, Migrate, Test',  desc: "CPQ live, quote templates branded, subscription plans configured, payment links and portal styled, finance sync running, and end-to-end test cycles before any customer touches it." },
    { num: '04', title: 'Launch & Optimize',     desc: "Phased rollout (typically by product line or segment), AR team training, finance reconciliation validation, and 30-day hypercare. Quarterly pricing and dunning reviews follow." },
  ],
  whyUs: [
    { title: 'Quote-to-Cash, Not Just Quotes',    desc: 'Most agencies stop at CPQ. We design the full quote → invoice → payment → subscription → renewal flow with finance system sync, so revenue ops and AR stop reconciling spreadsheets.' },
    { title: 'Subscription Billing Done Right',   desc: "Proration, mid-cycle upgrades, dunning, and renewal forecasting are where most Commerce Hub builds break. We've shipped these for SaaS and recurring-services clients - the edge cases are mapped." },
    { title: 'Finance, Sales, and CS Aligned',    desc: 'One revenue model across HubSpot and your GL. Finance gets reconciled books, sales sees real subscription status on the deal, CS knows who is past due before the renewal call.' },
    { title: 'We Stay Through First Renewal',     desc: 'Most Commerce Hub launches look fine for 30 days and fall apart at the first renewal cycle. We stay through the first full renewal wave to catch the issues that only surface in production.' },
  ],
  finalCtaHeadlineTop: 'Ready to Collapse Your',
  finalCtaHeadlineGold: 'Quote-to-Cash Stack?',
  finalCtaBody: 'In 30 minutes we will audit your current revenue collection workflow - quotes, invoices, subscriptions, dunning, finance sync - and hand you a clear Commerce Hub roadmap at no cost.',
  finalCtaChecklist: ['Revenue stack audit', 'CPQ + billing scoping', 'No obligation whatsoever'],
  finalCtaButton: 'Book My Free Commerce Hub Call',
}

export default function CommerceHub() {
  useEffect(() => {
    addPageSchema('faq', faqPageSchema(faqs))
    return () => addPageSchema('faq', null)
  }, [])
  return <HubPageTemplate data={data} />
}
