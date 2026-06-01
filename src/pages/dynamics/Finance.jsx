import { useEffect } from 'react'
import {
  DollarSign, Briefcase, Users, BarChart2, Calculator, Calendar, ShieldCheck, Globe,
} from 'lucide-react'
import { addPageSchema, faqPageSchema } from '../../seoConfig'
import DynamicsPageTemplate from './DynamicsPageTemplate'

const faqs = [
  { q: 'What is included in Dynamics 365 Finance?', a: 'Microsoft groups three apps here: Finance (core financials, AP/AR, budgeting, tax, statutory reporting), Project Operations (project-based businesses - PSA, resourcing, time + expense, project billing), and Human Resources (core HR, benefits, leave, organizational management).' },
  { q: 'Is this the same as Finance & Operations?', a: 'Finance + Supply Chain Management together are what Microsoft historically called Finance & Operations (or AX). The apps now ship separately so customers can license only what they need - Finance without manufacturing, or vice versa.' },
  { q: 'How does Project Operations compare to NetSuite OpenAir or Mavenlink?', a: 'Project Operations is the strongest fit when project-based revenue runs alongside Sales (D365 Sales) and Finance on shared Dataverse - so opportunity-to-project-to-invoice stays connected. It is purpose-built for PSA, consulting, construction, and project-driven services.' },
  { q: 'Does HR include payroll?', a: 'D365 Human Resources covers core HR, benefits, leave, performance, and organizational structure. Payroll integrates with Microsoft-certified partners (ADP, Ceridian, regional providers) - it is not native, by design, to support global payroll diversity.' },
]

const data = {
  tagIcon: DollarSign,
  tagLabel: 'Dynamics 365 Finance',
  headlineTop: 'Finance, Projects, People.',
  headlineGold: 'On One Enterprise Backbone.',
  subhead: 'Finance, Project Operations, and Human Resources builds: core financials, AP/AR automation, project-based PSA, time + expense, statutory reporting, and HR - integrated with Supply Chain and Sales.',
  ctaLabel: 'Scope My Finance + HR Build',
  platformName: 'Finance',
  painPoints: [
    { pain: 'Month-end close takes 12+ business days; finance team is burned out', fix: '<strong>Dynamics 365 Finance</strong> with AP automation, intercompany consolidation, and close cockpit - typical close compresses to 4-6 days' },
    { pain: 'Project billing is hand-rolled in Excel; revenue recognition is a fight', fix: '<strong>Project Operations</strong> with quote-to-project-to-invoice flow and ASC 606 / IFRS 15 revenue recognition built in' },
    { pain: 'HR runs on SharePoint forms and a 2018-era HRIS', fix: '<strong>D365 Human Resources</strong> with employee self-service, leave automation, and benefits enrollment workflows' },
    { pain: 'Statutory reports for 6 countries are manual every period', fix: '<strong>Country-specific localizations</strong> built into Finance with electronic reporting for tax, VAT, and statutory filings' },
    { pain: 'Resource planning happens in 3 spreadsheets and a Slack thread', fix: '<strong>Project Operations Resource Manager</strong> with skills, availability, utilization, and forecast pipelines' },
    { pain: 'AP fraud risk is real but vendor onboarding is mostly manual', fix: '<strong>Vendor master + 3-way matching + Copilot anomaly detection</strong> on payment runs and approvals' },
  ],
  outcomes: [
    { icon: Calculator,  value: '-50%',  label: 'reduction in month-end close cycle time after Finance + close cockpit go live (Microsoft TEI)', color: '#5EB0F0' },
    { icon: Briefcase,   value: '+8%',   label: 'project margin improvement after Project Operations replaces spreadsheet-based PSA tracking', color: '#F59E0B' },
    { icon: Users,       value: '+22%',  label: 'HR self-service adoption within 90 days - reduces HR ticket volume substantially', color: '#6366F1' },
    { icon: ShieldCheck, value: 'Audit', label: 'ready - segregation of duties, approval matrices, and immutable audit logs for SOX/equivalent', color: '#06B6D4' },
    { icon: Globe,       value: 'Multi-country', label: 'localizations, tax engines, and statutory reporting for global rollouts', color: '#10B981' },
    { icon: Calendar,    value: 'Real-time', label: 'financial + project + HR dashboards - no monthly Excel rebuild for the CFO', color: '#5EB0F0' },
  ],
  whatWeShip: [
    { icon: Calculator,  title: 'Core Finance + close cockpit',    desc: 'Chart of accounts, GL, AP, AR, fixed assets, intercompany, consolidation, and close cockpit workflow.' },
    { icon: Briefcase,   title: 'Project Operations PSA',           desc: 'Quote-to-project, resource scheduling, time + expense, project billing, and revenue recognition.' },
    { icon: Users,       title: 'Human Resources core',             desc: 'Employee records, org structure, leave, benefits enrollment, performance, and self-service.' },
    { icon: Globe,       title: 'Country localizations',            desc: 'Tax, VAT, electronic invoicing, statutory reporting per country, and multi-currency consolidation.' },
    { icon: ShieldCheck, title: 'Controls + audit',                 desc: 'Segregation of duties, approval matrices, audit trails, and Copilot anomaly detection for AP runs.' },
    { icon: BarChart2,   title: 'CFO + ops dashboards',             desc: 'Real-time P&L, cash, project margin, utilization, and workforce dashboards in Power BI.' },
  ],
  process: [
    { num: '01', title: 'Finance + HR Audit',     desc: "We map your chart of accounts, close calendar, project billing model, HR workflows, statutory reporting requirements, and the audit findings + controls gaps before designing." },
    { num: '02', title: 'Architecture & Design',  desc: "GL structure, AP/AR automation rules, project billing model, revenue recognition logic, HR workflow blueprints, localization plan, and dashboards signed off by CFO and CHRO." },
    { num: '03', title: 'Build & Parallel-Run',   desc: "Finance configured, Project Operations + HR live, localizations and tax engines tuned, integrations to Sales + Supply Chain wired, and 1-2 month parallel-run against your existing GL to validate." },
    { num: '04', title: 'Cutover & Stabilize',    desc: "Cutover with close-period rollback plan, finance + HR + project team training, 30-day hypercare through first full close, and quarterly controls reviews going forward." },
  ],
  whyUs: [
    { title: 'We Run Parallel Before We Cutover', desc: "Finance migrations that big-bang cutover without parallel-run end up restating two quarters later. We parallel-run for at least one full close and reconcile to the penny before cutover." },
    { title: 'PSA + Finance Done Together',        desc: 'Project Operations and Finance share a revenue recognition engine. Most consultancies wire them as if they were separate products and end up with reconciliation nightmares. We architect them as one.' },
    { title: 'Localizations Are Not Optional',      desc: "If you operate in EU, India, Brazil, or any e-invoicing country, statutory reporting is not configuration - it is risk. We have shipped country localizations and stay current with regulatory changes." },
    { title: 'CFO-Grade Controls',                  desc: 'Segregation of duties, approval matrices, vendor onboarding controls, and audit trails are designed before configuration. Audit-ready on day one, not retrofitted after a finding.' },
  ],
  finalCtaHeadlineTop: 'Ready for Finance + HR',
  finalCtaHeadlineGold: 'That Closes on Time?',
  finalCtaBody: 'In 30 minutes we will audit your current finance, project, and HR stack - close cycle, billing, localizations, controls - and hand you a clear roadmap at no cost.',
  finalCtaChecklist: ['Finance + project + HR audit', 'Close + controls scoping', 'No obligation whatsoever'],
  finalCtaButton: 'Book My Free Finance Call',
}

export default function Finance() {
  useEffect(() => {
    addPageSchema('faq', faqPageSchema(faqs))
    return () => addPageSchema('faq', null)
  }, [])
  return <DynamicsPageTemplate data={data} />
}
