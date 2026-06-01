import { useEffect } from 'react'
import {
  Building2, DollarSign, Boxes, Briefcase, Users, BarChart2, Rocket, Sparkles,
} from 'lucide-react'
import { addPageSchema, faqPageSchema } from '../../seoConfig'
import DynamicsPageTemplate from './DynamicsPageTemplate'

const faqs = [
  { q: 'What is Dynamics 365 Business Central?', a: 'Business Central is Microsoft’s all-in-one ERP for small and medium businesses - finance, sales, purchasing, inventory, projects, services, and warehouse in a single app. It is the modern successor to Dynamics NAV (Navision) and runs cloud-native on Azure.' },
  { q: 'How is Business Central different from Finance + SCM?', a: 'Finance + Supply Chain Management is enterprise-grade (multi-company, multi-currency, deep manufacturing, complex localizations). Business Central is purpose-built for SMBs - faster to implement, simpler to admin, and priced for 10-500 user businesses. We help you pick the right tier on the discovery call.' },
  { q: 'Can we extend Business Central with Power Platform and Copilot?', a: 'Yes. Business Central integrates natively with Power Apps (custom UI), Power Automate (workflow), Power BI (analytics), and Copilot for Business Central (AI assistance on records, marketing text generation, bank reconciliation). All run on the same Dataverse-adjacent stack.' },
  { q: 'How long does a Business Central implementation take?', a: 'Standard SMB rollouts ship in 8-14 weeks: chart of accounts, vendors + customers migrated, item master loaded, sales + purchase processes live, integrations to bank + payroll provider wired, and team trained. Complex rollouts with manufacturing add 4-8 weeks.' },
]

const data = {
  tagIcon: Building2,
  tagLabel: 'Dynamics 365 Business Central',
  headlineTop: 'All-in-One ERP.',
  headlineGold: 'Built for Growing Businesses.',
  subhead: 'Business Central builds: finance, sales, purchasing, inventory, projects, and services in a single ERP - cloud-native on Azure, Copilot-assisted, and priced for SMB scale.',
  ctaLabel: 'Scope My Business Central Build',
  platformName: 'Business Central',
  painPoints: [
    { pain: 'QuickBooks broke the day we hit 50 employees', fix: '<strong>Business Central</strong> scales from 10 to 500+ users without rip-and-replace and handles multi-currency, multi-warehouse natively' },
    { pain: 'Inventory lives in 3 spreadsheets and a Shopify dashboard', fix: '<strong>Item master + warehouse</strong> with bin-level tracking, costing methods (FIFO/LIFO/Average), and Shopify/Amazon connectors' },
    { pain: 'Sales orders, purchase orders, and invoices are 3 disconnected tools', fix: '<strong>Order-to-cash + procure-to-pay</strong> in one ERP with three-way matching and approval workflows' },
    { pain: 'Month-end takes a week and the bookkeeper does everything manually', fix: '<strong>Finance automation + bank reconciliation</strong> with Copilot-suggested matches and a streamlined close process' },
    { pain: 'Reporting is QuickBooks PDF exports manually re-keyed into Excel', fix: '<strong>Real-time Power BI dashboards</strong> for P&L, cash, inventory turn, and customer profitability' },
    { pain: 'We bought BC two years ago and only use 20% of it', fix: '<strong>Capability rollout roadmap</strong> + admin training so your team uses BC fully without us in the loop for every change' },
  ],
  outcomes: [
    { icon: DollarSign,  value: '-65%',  label: 'reduction in monthly bookkeeping time after AP automation + bank reconciliation with Copilot', color: '#5EB0F0' },
    { icon: Boxes,       value: 'Real-time', label: 'inventory across stores, warehouses, and e-commerce - no overselling or oversold reconciliation calls', color: '#F59E0B' },
    { icon: Rocket,      value: '8-14 wk', label: 'standard implementation timeline for SMB rollouts including data migration and training', color: '#6366F1' },
    { icon: Sparkles,    value: 'Copilot', label: 'native in Business Central - line item suggestions, bank reconciliation, and marketing text generation', color: '#06B6D4' },
    { icon: BarChart2,   value: 'Power BI', label: 'embedded dashboards for finance, sales, inventory, and customer profitability included', color: '#10B981' },
    { icon: Building2,   value: 'Multi-co', label: 'multi-company and intercompany support - run holdings + subsidiaries in one BC tenant', color: '#5EB0F0' },
  ],
  whatWeShip: [
    { icon: DollarSign,  title: 'Finance + close',                desc: 'Chart of accounts, AP/AR, dimensions, bank rec with Copilot, and close cockpit.' },
    { icon: Boxes,       title: 'Inventory + warehouse',           desc: 'Item master, bin-level tracking, costing methods, and Shopify/Amazon/POS connectors.' },
    { icon: Briefcase,   title: 'Sales + purchase ops',            desc: 'Order-to-cash, procure-to-pay, three-way matching, vendor catalogs, and approval workflows.' },
    { icon: Users,       title: 'Projects + service',              desc: 'Project costing, time + expense, service order management for project-based and field service businesses.' },
    { icon: Sparkles,    title: 'Copilot + Power Automate',        desc: 'Copilot for BC rollout plus Power Automate flows for approvals, alerts, and external integrations.' },
    { icon: BarChart2,   title: 'Power BI dashboards',             desc: 'P&L, cash, AR aging, inventory turn, and customer profitability dashboards embedded in BC and Teams.' },
  ],
  process: [
    { num: '01', title: 'Business Audit',         desc: "We map your chart of accounts, item master, customer/vendor lists, sales + purchase processes, current tool stack, and the 3 things you want to fix most before designing anything." },
    { num: '02', title: 'Architecture & Design',  desc: "BC company setup, chart of accounts + dimensions, item categories + locations, sales + purchase flows, Power BI dashboards, and integrations roadmap signed off before configuration." },
    { num: '03', title: 'Build, Migrate, Train',  desc: "BC configured, master data migrated (customers, vendors, items, GL balances, open orders), bank + e-comm + payroll integrations wired, and team training delivered in 2-hour role-based sessions." },
    { num: '04', title: 'Launch & Hypercare',     desc: "Go-live with daily check-ins for week 1, weekly through month 2, and 30-day hypercare through first full close. Quarterly admin office hours follow." },
  ],
  whyUs: [
    { title: 'BC Implementations We Actually Finish',  desc: 'Most BC partners take 6-9 months and leave 40% of the modules unused. We ship in 8-14 weeks with a capability roadmap so your team rolls out the rest themselves over the next year.' },
    { title: 'SMB Pricing + SMB Pace',                 desc: 'Enterprise consultancies charge enterprise prices for BC work. We staff BC engagements with senior consultants who specialize in SMB scope - faster decisions, no account-manager layers.' },
    { title: 'We Migrate the Data Properly',           desc: "Master data migration is where BC rollouts collapse. Customer, vendor, item, and historical GL balances are validated, dimensionalized, and reconciled before go-live - not after." },
    { title: 'You Own It After We Leave',              desc: 'Written runbooks, recorded role training, and admin enablement - so your team can extend BC themselves without us in the loop for every change.' },
  ],
  finalCtaHeadlineTop: 'Ready to Outgrow',
  finalCtaHeadlineGold: 'QuickBooks for Good?',
  finalCtaBody: 'In 30 minutes we will scope your Business Central migration - confirm BC fits, map your data migration, and lock in an 8-14 week go-live timeline at no cost.',
  finalCtaChecklist: ['Current stack audit', 'BC fit confirmation', 'No obligation whatsoever'],
  finalCtaButton: 'Book My Free Business Central Call',
}

export default function BusinessCentral() {
  useEffect(() => {
    addPageSchema('faq', faqPageSchema(faqs))
    return () => addPageSchema('faq', null)
  }, [])
  return <DynamicsPageTemplate data={data} />
}
