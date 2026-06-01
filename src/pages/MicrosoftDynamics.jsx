import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import {
  ArrowRight, Layers, TrendingUp, Headphones, Megaphone, BarChart3, Building2, Zap,
  CheckCircle2, Sparkles, Shield, Database, Users, Workflow, DollarSign,
} from 'lucide-react'
import FAQ from '../components/FAQ'
import { addPageSchema, faqPageSchema } from '../seoConfig'

const ACCENT = '#0078D4'
const ACCENT_DARK = '#002050'
const TINT = 'rgba(0,120,212,0.10)'

const dynamicsFaqs = [
  { q: 'Are you a Microsoft Partner?', a: 'Our Microsoft Partner application is in progress. While that completes we are delivering Dynamics 365 and Power Platform engagements using Microsoft Learn-certified engineers and the official solution playbooks. We will publish the partner designation on this page as soon as it is granted.' },
  { q: 'When does Dynamics make more sense than Salesforce?', a: 'Three common cases: (1) you are already deep in Microsoft 365 / Teams / Azure and want one vendor relationship, (2) you need integrated ERP plus CRM (Finance & Operations + Sales), or (3) Power Platform extensibility is more valuable to you than Salesforce platform extensibility. We do the platform-fit assessment in the discovery call - no pressure to pick Dynamics if Salesforce is the better fit.' },
  { q: 'Can you migrate from Salesforce or HubSpot to Dynamics?', a: 'Yes. We have run migrations in both directions. The work is in the data model and integration mapping, not the tool - we do that part with the same care whether the target is Salesforce, HubSpot, or Dynamics.' },
  { q: 'Do you cover both Dynamics customer engagement and ERP?', a: 'Yes. Sales, Customer Service, Customer Insights on the engagement side; Finance & Operations and Business Central on the ERP side. We also handle the Dataverse and Power Platform layer that ties them together.' },
  { q: 'What about Copilot Studio for custom agents?', a: 'Copilot Studio is a strong fit for agents tightly bound to the Microsoft Graph (Outlook, Teams, SharePoint, Dynamics) - especially when your users live in Teams. We build there when that is the right fit, and recommend custom agents (Bedrock, Claude API, etc.) when the boundaries are wider.' },
  { q: 'How long does a typical Dynamics implementation take?', a: 'Single-app Customer Engagement (Sales or Customer Service): 6-10 weeks. Multi-app engagement: 10-16 weeks. Business Central: 8-14 weeks. Finance & Operations is enterprise-grade and runs 4-9 months depending on scope. The discovery call produces a scoped fixed estimate.' },
]

function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${ACCENT_DARK} 0%, #0A3F80 50%, ${ACCENT} 100%)` }}>
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="glow-dot w-[700px] h-[700px] top-[-200px] left-[-100px]"
        style={{ backgroundColor: 'rgba(0,120,212,0.20)' }} />
      <div className="glow-dot w-[500px] h-[500px] bottom-[-150px] right-[-50px] hidden md:block"
        style={{ backgroundColor: 'rgba(134,97,197,0.15)' }} />

      <div className="section-wrap relative z-10 pt-24 pb-12 sm:pt-32 sm:pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="tag-white inline-flex mb-6 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse-slow" style={{ backgroundColor: '#5EB0F0' }} />
            Microsoft Dynamics Practice
          </div>
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6 animate-fade-up-1"
            style={{ color: 'rgba(255,255,255,0.65)', backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse-slow" style={{ backgroundColor: '#94A3B8' }} />
            Microsoft Partnership track in progress
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6 tracking-tight animate-fade-up-1">
            Dynamics 365 +<br />
            <span style={{ background: 'linear-gradient(135deg, #5EB0F0, #B3D7F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Power Platform.
            </span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto animate-fade-up-2"
            style={{ color: 'rgba(255,255,255,0.85)' }}>
            Customer engagement and ERP on Microsoft's stack - extended with Power Platform, Power BI, and Copilot Studio. One team for the entire Microsoft business apps surface.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up-3">
            <a href="https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-medium px-7 py-3.5 rounded-xl transition-all duration-200 text-sm sm:text-base"
              style={{ background: `linear-gradient(135deg, ${ACCENT}, #00538E)`, color: 'white', boxShadow: `0 8px 28px ${ACCENT}60` }}>
              Book Dynamics Discovery Call <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/solutions"
              className="inline-flex items-center justify-center gap-2 font-medium px-7 py-3.5 rounded-xl transition-all duration-200 text-sm sm:text-base"
              style={{ border: '1.5px solid rgba(255,255,255,0.25)', color: 'white' }}>
              Back to Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function Capabilities() {
  const items = [
    {
      id: 'customer-experience',
      to: '/solutions/dynamics-365-customer-experience',
      icon: <Users className="w-6 h-6" />,
      title: 'Customer Experience',
      desc: 'Dynamics 365 Sales + Customer Insights on shared Dataverse - pipeline, Copilot for Sales, CDP, and real-time journey orchestration.',
      points: [
        'Sales pipeline, forecasting, Copilot for Sales',
        'Customer Insights CDP + identity resolution',
        'Real-time event-driven journey orchestration',
        'LinkedIn Sales Navigator embedded in CRM',
      ],
    },
    {
      id: 'service',
      to: '/solutions/dynamics-365-service',
      icon: <Headphones className="w-6 h-6" />,
      title: 'Service',
      desc: 'Customer Service, Contact Center, and Field Service - omnichannel cases, voice + digital channels, work orders, and Copilot agent assist.',
      points: [
        'Omnichannel case management + SLAs',
        'Contact Center with IVR and agent assist',
        'Field Service work orders + scheduling',
        'Copilot for Service deflection + KB grounding',
      ],
    },
    {
      id: 'supply-chain',
      to: '/solutions/dynamics-365-supply-chain',
      icon: <Workflow className="w-6 h-6" />,
      title: 'Supply Chain',
      desc: 'Supply Chain Management + Commerce - demand planning, warehouse, manufacturing, POS, and e-commerce on one operational backbone.',
      points: [
        'Demand planning + statistical/ML forecasting',
        'Warehouse Management + RF scanning',
        'Manufacturing execution + finite scheduling',
        'Commerce (POS + e-commerce + B2B)',
      ],
    },
    {
      id: 'finance',
      to: '/solutions/dynamics-365-finance',
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Finance',
      desc: 'Finance, Project Operations, and Human Resources - close cycle, PSA, multi-country localizations, controls, and CFO dashboards.',
      points: [
        'Multi-entity, multi-currency financials + close',
        'Project Operations PSA + revenue recognition',
        'Human Resources core + self-service',
        'Country localizations + statutory reporting',
      ],
    },
    {
      id: 'business-central',
      to: '/solutions/dynamics-365-business-central',
      icon: <Building2 className="w-6 h-6" />,
      title: 'Business Central',
      desc: 'All-in-one ERP for small and medium business - finance, sales, purchasing, inventory, projects, and Copilot in one cloud app.',
      points: [
        'Finance, sales, purchasing, inventory in one app',
        'Jobs and project tracking',
        'Copilot for BC + bank reconciliation',
        'Shopify, Amazon, and POS connectors',
      ],
    },
    {
      id: 'power-platform',
      to: '/solutions/microsoft-power-platform',
      icon: <Zap className="w-6 h-6" />,
      title: 'Power Platform',
      desc: 'Power Apps for custom UX, Power Automate for workflows, Power BI for analytics, Copilot Studio for agents - the extensibility layer.',
      points: [
        'Canvas and model-driven apps on Dataverse',
        'Cloud and desktop flow automation',
        'Embedded Power BI dashboards',
        'Copilot Studio agents in Teams and Dynamics',
      ],
    },
  ]

  return (
    <section className="py-16 sm:py-20" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="section-wrap">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="tag mx-auto mb-5" style={{ color: ACCENT, backgroundColor: TINT, borderColor: `${ACCENT}40` }}>
            <Layers className="w-3.5 h-3.5" /> What We Deliver
          </div>
          <h2 className="section-title mb-4">
            The Full Microsoft <span style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_DARK})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Business Apps Surface</span>
          </h2>
          <p className="section-sub">
            Customer engagement, ERP, and the Power Platform extension layer - covered by one team that understands how Dataverse ties it all together.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ id, to, icon, title, desc, points }) => (
            <Link key={id} id={id} to={to}
              className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 no-underline block group"
              style={{ backgroundColor: 'white', border: `1px solid ${ACCENT}20`, boxShadow: `0 2px 12px ${ACCENT}08` }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: TINT, color: ACCENT, border: `1px solid ${ACCENT}25` }}>
                {icon}
              </div>
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2" style={{ color: '#032D60' }}>
                {title}
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" style={{ color: ACCENT }} />
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748B' }}>{desc}</p>
              <ul className="space-y-2">
                {points.map(p => (
                  <li key={p} className="flex items-start gap-2 text-sm" style={{ color: '#475569' }}>
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: ACCENT }} />
                    {p}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  const steps = [
    { n: '01', title: 'Assess',     desc: 'Platform-fit assessment - is Dynamics the right answer, or would Salesforce / HubSpot serve you better? Honest recommendation either way.' },
    { n: '02', title: 'Architect',  desc: 'Data model on Dataverse, integration plan with Microsoft 365 / Azure / external systems, security and licensing strategy.' },
    { n: '03', title: 'Implement',  desc: 'Config, custom Power Apps where needed, data migration, training, UAT, and a cutover plan with clear acceptance criteria.' },
    { n: '04', title: 'Optimize',   desc: 'Adoption monitoring, Copilot rollout, Power Platform extensions, and continued tuning based on real usage signals.' },
  ]
  return (
    <section className="py-16 sm:py-20" style={{ backgroundColor: '#F0F7FF' }}>
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="tag mx-auto mb-5" style={{ color: ACCENT, backgroundColor: 'white', borderColor: `${ACCENT}40` }}>
            How It Works
          </div>
          <h2 className="section-title mb-4">
            A Path That Starts with <span style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_DARK})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>An Honest Assessment</span>
          </h2>
          <p className="section-sub">Discovery first, recommendation second, build third. We will not push Dynamics if it is not the right fit for your business.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 z-0"
            style={{ background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT_DARK})` }} />
          {steps.map(({ n, title, desc }, i) => (
            <div key={n} className="rounded-2xl p-6 text-center relative z-10 animate-fade-up"
              style={{ backgroundColor: 'white', border: `1px solid ${ACCENT}20`, boxShadow: `0 4px 16px ${ACCENT}10`, animationDelay: `${i * 100}ms` }}>
              <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-black text-lg"
                style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_DARK})`, boxShadow: `0 6px 20px ${ACCENT}50` }}>
                {n}
              </div>
              <h3 className="font-bold mb-2" style={{ color: '#032D60' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function UseCases() {
  const cases = [
    {
      tag: 'Microsoft-first stack',
      title: 'Switching from a scattered tool set',
      challenge: 'Sales on one CRM, ticketing on another, marketing on a third - none of them connected. Half the team lives in Teams; the rest live in their tools.',
      result: 'Unified on Dynamics Sales + Customer Service + Customer Insights, all surfaced inside Teams via Copilot for Sales and Copilot for Service. One vendor, one license relationship, one customer record.',
      metrics: ['1 unified CRM', '4 tools retired', 'In-Teams Copilot'],
    },
    {
      tag: 'ERP modernization',
      title: 'Replacing an aging on-prem ERP',
      challenge: 'Decades-old on-prem ERP, manual workarounds for financial close, no real-time visibility for the CFO. Vendor support sunset in 18 months.',
      result: 'Business Central rollout in 12 weeks - finance, inventory, projects. Power BI dashboards for CFO real-time view. Integration to existing CRM via Dataverse, plus Power Automate flows for legacy systems we did not retire.',
      metrics: ['12-week BC rollout', 'Real-time CFO view', 'Power Automate bridge'],
    },
    {
      tag: 'Power Platform',
      title: 'Custom UX on top of Dynamics',
      challenge: 'Field service teams needed a mobile-first work order experience that Dynamics out-of-the-box did not give them. IT did not want to maintain a custom mobile app.',
      result: 'Power Apps canvas app on Dataverse - mobile-first work orders, offline-capable, photo capture, signature. Power Automate flows for dispatch and approval. Zero custom code, fully maintained by the business team.',
      metrics: ['No custom code', 'Offline-capable', 'Business-owned'],
    },
  ]
  return (
    <section className="py-16 sm:py-20" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="section-wrap">
        <div className="text-center mb-12">
          <div className="tag mx-auto mb-5" style={{ color: ACCENT, backgroundColor: TINT, borderColor: `${ACCENT}40` }}>
            Real Results
          </div>
          <h2 className="section-title mb-4">
            Three Scenarios <span style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_DARK})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Where Dynamics Fits</span>
          </h2>
          <p className="section-sub max-w-2xl mx-auto">Anonymized results from recent Dynamics 365 and Power Platform engagements.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map(({ tag, title, challenge, result, metrics }) => (
            <div key={title} className="rounded-2xl p-6 flex flex-col"
              style={{ backgroundColor: 'white', border: `1px solid ${ACCENT}20`, boxShadow: `0 4px 16px ${ACCENT}08` }}>
              <span className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: ACCENT }}>{tag}</span>
              <h3 className="font-bold text-lg mb-3" style={{ color: '#032D60' }}>{title}</h3>
              <div className="mb-4">
                <p className="text-xs font-semibold mb-1" style={{ color: '#032D60' }}>Challenge</p>
                <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{challenge}</p>
              </div>
              <div className="mb-5 flex-grow">
                <p className="text-xs font-semibold mb-1" style={{ color: '#032D60' }}>Result</p>
                <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{result}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: `1px solid ${ACCENT}20` }}>
                {metrics.map(m => (
                  <span key={m} className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: TINT, color: ACCENT, border: `1px solid ${ACCENT}30` }}>
                    {m}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  const reasons = [
    { icon: <Sparkles className="w-5 h-5" />, title: 'Honest Platform-Fit Calls', desc: 'We work across Salesforce, HubSpot, and Dynamics. That means we tell you when Dynamics is wrong for you - not just when it is right.' },
    { icon: <Database className="w-5 h-5" />, title: 'Dataverse Depth',           desc: 'Most Dynamics partners focus on a single app. We design at the Dataverse layer first, so Sales, Service, F&O, and your custom Power Apps share one clean data model.' },
    { icon: <Zap className="w-5 h-5" />,      title: 'Power Platform-Native',     desc: 'Power Apps and Power Automate are first-class, not afterthoughts. Most of the "we need a custom app" requests can be solved on Power Platform in days.' },
    { icon: <Shield className="w-5 h-5" />,   title: 'Migration Specialists',     desc: 'We have moved data in and out of Dynamics multiple times. Your data model and integration mapping is the work, not the tool. We do that part with the same care every time.' },
  ]
  return (
    <section className="py-16 sm:py-20" style={{ backgroundColor: '#F0F7FF' }}>
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="tag mx-auto mb-5" style={{ color: ACCENT, backgroundColor: 'white', borderColor: `${ACCENT}40` }}>Why Cloudsheer for Dynamics</div>
          <h2 className="section-title mb-4">
            Why Teams Choose Us <span style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_DARK})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>For Dynamics</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {reasons.map(({ icon, title, desc }) => (
            <div key={title} className="rounded-2xl p-6"
              style={{ backgroundColor: 'white', border: `1px solid ${ACCENT}20`, boxShadow: `0 2px 12px ${ACCENT}08` }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: TINT, color: ACCENT, border: `1px solid ${ACCENT}25` }}>
                  {icon}
                </div>
                <h3 className="font-bold" style={{ color: '#032D60' }}>{title}</h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${ACCENT_DARK} 0%, #0A3F80 50%, ${ACCENT} 100%)` }}>
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="glow-dot w-[500px] h-[500px] top-[-100px] left-[20%]"
        style={{ backgroundColor: 'rgba(94,176,240,0.18)' }} />
      <div className="section-wrap relative z-10 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-5">
          Is Dynamics <span style={{ background: 'linear-gradient(135deg, #5EB0F0, #B3D7F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Right for You?</span>
        </h2>
        <p className="text-base sm:text-lg mb-10" style={{ color: 'rgba(255,255,255,0.85)' }}>
          30-minute call. Walk through your current stack and we will give you an honest read on whether Dynamics, Salesforce, HubSpot, or something custom is the better fit.
        </p>
        <a href="https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-xl transition-all duration-200"
          style={{ background: `linear-gradient(135deg, #5EB0F0, ${ACCENT})`, color: 'white', boxShadow: `0 8px 28px ${ACCENT}60` }}>
          Book Dynamics Discovery Call <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}

export default function MicrosoftDynamics() {
  useEffect(() => {
    addPageSchema('faq', faqPageSchema(dynamicsFaqs))
    return () => addPageSchema('faq', null)
  }, [])
  return (
    <>
      <Hero />
      <Capabilities />
      <Process />
      <UseCases />
      <WhyUs />
      <FAQ title="Microsoft Dynamics FAQs" items={dynamicsFaqs} />
      <CTA />
    </>
  )
}
