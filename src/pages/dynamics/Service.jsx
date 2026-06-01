import { useEffect } from 'react'
import {
  Headphones, PhoneCall, Wrench, Bot, MapPin, Cpu, Activity, ShieldCheck,
} from 'lucide-react'
import { addPageSchema, faqPageSchema } from '../../seoConfig'
import DynamicsPageTemplate from './DynamicsPageTemplate'

const faqs = [
  { q: 'What is in Dynamics 365 Service?', a: 'Microsoft groups three apps here: Customer Service (omnichannel case management + Copilot for Service), Contact Center (voice + digital channel platform with IVR and agent assist), and Field Service (work orders, dispatch, asset management, and mixed reality assist).' },
  { q: 'Is Contact Center separate from Customer Service?', a: 'Yes - Microsoft now packages Contact Center as a standalone offering for organizations that want the omnichannel voice + digital channel layer (IVR, agent assist, Copilot, real-time analytics) without committing to the full Customer Service case management app.' },
  { q: 'How does Field Service compare to ServiceNow Field Service?', a: 'Field Service is the better fit for organizations already in Dynamics or Microsoft 365 - work orders share Dataverse with Customer Service cases, scheduling integrates with Outlook, and mixed reality (HoloLens / Remote Assist) is native. ServiceNow is stronger for IT-centric field ops.' },
  { q: 'Can Copilot really deflect tier-1 cases?', a: 'In live Microsoft customer studies, Copilot for Service handles 25-40% of routine cases end-to-end with human escalation only on edge cases. We instrument deflection rate, CSAT-on-deflected, and escalation reasons so the AI gets better over time, not worse.' },
]

const data = {
  tagIcon: Headphones,
  tagLabel: 'Dynamics 365 Service',
  headlineTop: 'Cases, Calls, and Field Visits.',
  headlineGold: 'Resolved Faster, on One Platform.',
  subhead: 'Customer Service, Contact Center, and Field Service builds: omnichannel case management, voice + digital channels with Copilot agent assist, work order dispatch, and mixed reality field support.',
  ctaLabel: 'Scope My Service Build',
  platformName: 'Service',
  painPoints: [
    { pain: 'Case backlog grows weekly; CSAT slides every quarter', fix: '<strong>Omnichannel Customer Service</strong> with Copilot drafting responses and routing cases to the right queue automatically' },
    { pain: 'Contact center runs on a 12-year-old PBX with no analytics', fix: '<strong>Dynamics 365 Contact Center</strong> - cloud voice + digital channels with IVR, agent assist, and real-time analytics' },
    { pain: 'Field techs get dispatched via WhatsApp and write reports on paper', fix: '<strong>Field Service mobile app</strong> with work orders, route optimization, parts inventory, and digital sign-off' },
    { pain: 'Same customer calls 3 times, gets 3 different answers', fix: '<strong>Unified case view</strong> across phone, email, chat, social, and field visits - one timeline, one truth' },
    { pain: 'Knowledge base lives in Confluence; agents never find it', fix: '<strong>Knowledge management in Customer Service</strong> with semantic search and Copilot-suggested articles in the case workspace' },
    { pain: 'IoT-connected equipment fails silently; service finds out from the customer', fix: '<strong>IoT-triggered work orders</strong> via Azure IoT Hub or Connected Field Service - cases open before customers notice' },
  ],
  outcomes: [
    { icon: Bot,         value: '25-40%', label: 'tier-1 case deflection with Copilot for Service handling routine inquiries end-to-end', color: '#5EB0F0' },
    { icon: PhoneCall,   value: '-32%',   label: 'average handle time on calls with Contact Center agent assist and real-time Copilot suggestions', color: '#F59E0B' },
    { icon: Wrench,      value: '+18%',   label: 'first-time-fix rate on field visits after Field Service routing + knowledge integration', color: '#6366F1' },
    { icon: MapPin,      value: '-22%',   label: 'travel time per tech with route optimization in Field Service Scheduler', color: '#06B6D4' },
    { icon: Activity,    value: 'Real-time', label: 'service dashboards covering case queues, contact center voice, and field utilization', color: '#10B981' },
    { icon: ShieldCheck, value: 'SLA',    label: 'automation with milestone tracking, breach alerts, and entitlement management', color: '#5EB0F0' },
  ],
  whatWeShip: [
    { icon: Headphones, title: 'Omnichannel Customer Service',       desc: 'Case workspace, queues, routing rules, SLAs, knowledge integration, and Copilot for Service.' },
    { icon: PhoneCall,  title: 'Contact Center setup',                desc: 'IVR design, call flows, digital channels (chat, SMS, social), agent assist, and analytics.' },
    { icon: Wrench,     title: 'Field Service implementation',        desc: 'Work order types, scheduling board, mobile app rollout, parts inventory, and customer signature flow.' },
    { icon: Cpu,        title: 'IoT + Connected Field Service',       desc: 'Azure IoT Hub integration that opens work orders from equipment alerts before customers report issues.' },
    { icon: Bot,        title: 'Copilot rollout + guardrails',        desc: 'Copilot for Service prompt design, knowledge grounding, deflection thresholds, and audit logs.' },
    { icon: Activity,   title: 'Service performance dashboards',      desc: 'Power BI dashboards for case backlog, AHT, first-time-fix, deflection rate, and SLA compliance.' },
  ],
  process: [
    { num: '01', title: 'Service Audit',         desc: "We map your channels, case volumes, AHT baselines, current contact center stack, field workforce structure, knowledge base, and the top 5 case reasons before any design." },
    { num: '02', title: 'Architecture & Design', desc: "Case workspace, queue + routing logic, IVR + agent assist plan, work order schema, scheduling rules, Copilot grounding strategy, and dashboard map signed off by service leadership." },
    { num: '03', title: 'Build & Train',         desc: "Customer Service configured, Contact Center call flows live, Field Service mobile app rolled out, IoT triggers wired (if applicable), Copilot trained on knowledge, and agent/tech training delivered." },
    { num: '04', title: 'Launch & Optimize',     desc: "Phased rollout by channel or region, deflection threshold tuning, AHT and FTF tracking, and 30-day hypercare. Quarterly Copilot retraining and KB grooming follow." },
  ],
  whyUs: [
    { title: 'We Tune Copilot Until It Earns Its Seat', desc: 'Most service Copilot rollouts hit 8-12% deflection and stall. We instrument grounding, prompt patterns, knowledge gaps, and retraining cycles to push deflection past 25% without CSAT regression.' },
    { title: 'Contact Center is a Real Discipline',     desc: 'Call flows, IVR routing, and agent assist are not just configuration - they decide whether a customer hangs up. We design these like a contact center practice would, not as a generalist Dynamics consultancy.' },
    { title: 'Field Service That Survives Reality',      desc: 'Field rollouts collapse when the mobile app is unusable on a job site. We pilot with techs, fix UX before scaling, and design for offline-first patterns.' },
    { title: 'One Customer View Across Channels',        desc: 'Phone, email, chat, social, and field visits all land on the same case timeline. No more "let me check with my colleague" - the next agent sees everything that happened before.' },
  ],
  finalCtaHeadlineTop: 'Ready for Service That',
  finalCtaHeadlineGold: 'Actually Scales?',
  finalCtaBody: 'In 30 minutes we will audit your current service stack - cases, contact center, field ops - and hand you a clear Dynamics Service roadmap at no cost.',
  finalCtaChecklist: ['Service stack audit', 'Copilot + Contact Center scoping', 'No obligation whatsoever'],
  finalCtaButton: 'Book My Free Service Call',
}

export default function Service() {
  useEffect(() => {
    addPageSchema('faq', faqPageSchema(faqs))
    return () => addPageSchema('faq', null)
  }, [])
  return <DynamicsPageTemplate data={data} />
}
