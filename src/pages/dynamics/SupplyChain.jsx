import { useEffect } from 'react'
import {
  Boxes, Truck, ShoppingCart, Factory, Activity, BarChart2, Globe, Layers,
} from 'lucide-react'
import { addPageSchema, faqPageSchema } from '../../seoConfig'
import DynamicsPageTemplate from './DynamicsPageTemplate'

const faqs = [
  { q: 'What is included in Dynamics 365 Supply Chain?', a: 'Microsoft groups two apps here: Supply Chain Management (planning, procurement, manufacturing, warehouse, asset management) and Commerce (POS, e-commerce, contact center for retail, B2B/B2C selling). Both run on shared Dataverse and integrate with Finance + Project Operations.' },
  { q: 'Is this for manufacturing only?', a: 'No. Supply Chain Management fits manufacturers, distributors, retailers, and any business that moves inventory. Commerce specifically targets retail (single-channel or omni), B2B commerce, and DTC brands that need POS + e-commerce on one stack.' },
  { q: 'Can Dynamics replace our WMS and POS?', a: 'Yes. Warehouse Management (mobile devices, RF scanning, wave + load planning) is included in SCM. Commerce includes a full POS, store ops app, and headless commerce APIs. We have replaced legacy WMS + POS stacks with these natively in customer rollouts.' },
  { q: 'How does demand planning work?', a: 'Demand planning in SCM uses statistical forecasting plus optional Azure ML models trained on your sales history, promotions, and seasonality. We tune the model, set planning cadences, and integrate exception alerts into Power BI for planners.' },
]

const data = {
  tagIcon: Boxes,
  tagLabel: 'Dynamics 365 Supply Chain',
  headlineTop: 'Plan, Make, Move, Sell.',
  headlineGold: 'On One Operational Backbone.',
  subhead: 'Supply Chain Management and Commerce builds: demand planning, procurement, manufacturing, warehouse, POS, e-commerce, and B2B/B2C selling - integrated with Finance on shared Dataverse.',
  ctaLabel: 'Scope My Supply Chain Build',
  platformName: 'Supply Chain',
  painPoints: [
    { pain: 'Demand forecasts are spreadsheets that nobody trusts', fix: '<strong>Demand planning in SCM</strong> with statistical + ML forecasting tuned on your sales, promotions, and seasonality' },
    { pain: 'Warehouse runs on paper picklists and a 2008-era WMS', fix: '<strong>Warehouse Management</strong> with RF scanning, wave + load planning, and a mobile app for warehouse workers' },
    { pain: 'POS and e-commerce are different systems with different inventory views', fix: '<strong>Dynamics 365 Commerce</strong> unifies POS, e-commerce, and contact center on a single product + inventory catalog' },
    { pain: 'Procurement is email-and-PDF; PO approvals take a week', fix: '<strong>Procurement and sourcing</strong> with vendor catalogs, approval workflows, and 3-way matching to invoices' },
    { pain: 'Manufacturing scheduling is gut feel; we miss promised dates', fix: '<strong>Master planning + production scheduling</strong> with finite + infinite capacity views and shop floor execution' },
    { pain: 'Inventory write-offs spike every quarter; nobody knows where shrink happens', fix: '<strong>Cycle counting + lot/serial tracking</strong> with audit trails and Power BI shrink dashboards by location' },
  ],
  outcomes: [
    { icon: Activity,    value: '+15%',  label: 'forecast accuracy after switching from spreadsheets to SCM demand planning (typical client outcome)', color: '#5EB0F0' },
    { icon: Truck,       value: '-20%',  label: 'cycle time on warehouse outbound after Warehouse Management + RF scanning go live', color: '#F59E0B' },
    { icon: ShoppingCart,value: 'Unified',label: 'inventory across POS, web, and contact center - no overselling, no orphan stock in stores', color: '#6366F1' },
    { icon: Factory,     value: '+12%',  label: 'on-time-in-full (OTIF) improvement from master planning + production scheduling discipline', color: '#06B6D4' },
    { icon: BarChart2,   value: 'Real-time', label: 'operational dashboards on inventory, OTIF, shrink, and procurement cycle times', color: '#10B981' },
    { icon: Globe,       value: 'Multi-co', label: 'multi-company, multi-currency, multi-warehouse architecture - global rollouts done right', color: '#5EB0F0' },
  ],
  whatWeShip: [
    { icon: Activity,    title: 'Demand planning + forecasting', desc: 'Statistical + ML forecasts, planning cadences, exception alerts, and planner dashboards in Power BI.' },
    { icon: Truck,       title: 'Warehouse Management',           desc: 'Mobile device profiles, wave + load planning, cycle counts, lot/serial tracking, and 3PL integrations.' },
    { icon: Factory,     title: 'Manufacturing execution',         desc: 'BOMs, routes, production orders, shop floor terminals, and finite-capacity scheduling.' },
    { icon: ShoppingCart,title: 'Commerce (POS + e-commerce)',     desc: 'Store ops app, omnichannel catalog, pricing + promotions engine, and headless commerce APIs.' },
    { icon: Layers,      title: 'Procurement + sourcing',          desc: 'Vendor catalogs, approval workflows, 3-way invoice matching, and category management.' },
    { icon: BarChart2,   title: 'Operations dashboards',           desc: 'Inventory, OTIF, shrink, procurement cycle, and Commerce sales dashboards embedded in Teams.' },
  ],
  process: [
    { num: '01', title: 'Operations Audit',      desc: "We map your forecast accuracy, warehouse layout, manufacturing flow, procurement cycle, POS/e-comm state, and the inventory pain points hurting margin most before designing." },
    { num: '02', title: 'Architecture & Design', desc: "SCM schema, warehouse + mobile device profiles, master planning rules, procurement workflows, Commerce channel + catalog model, and dashboards signed off by ops and finance leadership." },
    { num: '03', title: 'Build & Pilot',         desc: "SCM configured, Warehouse Management piloted on one site, Commerce piloted on one store/channel, integrations to Finance + Customer Insights live, and UAT cycles complete before broad rollout." },
    { num: '04', title: 'Rollout & Stabilize',   desc: "Phased rollout by site, store, or channel. Daily standups in week 1, weekly through month 3, and 30-day hypercare. Cycle count + planning cadence governance follows." },
  ],
  whyUs: [
    { title: 'We Pilot Before We Scale',               desc: "Operations rollouts that big-bang every site or store fail in production. We pilot on one site, one warehouse, or one channel - fix the gaps, then scale with a tested playbook." },
    { title: 'Real Manufacturing + Retail Experience', desc: 'BOM modeling, finite scheduling, omnichannel inventory, and POS-to-warehouse atomic transactions are not generalist work. Our SCM and Commerce architects have shipped this in production.' },
    { title: 'Forecasting That Actually Moves',         desc: 'Most SCM forecast modules ship and never get tuned. We instrument forecast accuracy, hold quarterly retros, and integrate planner feedback loops so the model improves with use.' },
    { title: 'Integrated With Finance, Not Bolted On',  desc: 'Cost of goods, inventory valuation, intercompany transfers, and revenue recognition stay clean because SCM, Commerce, and Finance share Dataverse - not stitched via middleware.' },
  ],
  finalCtaHeadlineTop: 'Ready to Run Operations',
  finalCtaHeadlineGold: 'on One Backbone?',
  finalCtaBody: 'In 30 minutes we will audit your current operations stack - planning, warehouse, manufacturing, retail - and hand you a clear Supply Chain + Commerce roadmap at no cost.',
  finalCtaChecklist: ['Operations stack audit', 'SCM + Commerce scoping', 'No obligation whatsoever'],
  finalCtaButton: 'Book My Free Supply Chain Call',
}

export default function SupplyChain() {
  useEffect(() => {
    addPageSchema('faq', faqPageSchema(faqs))
    return () => addPageSchema('faq', null)
  }, [])
  return <DynamicsPageTemplate data={data} />
}
