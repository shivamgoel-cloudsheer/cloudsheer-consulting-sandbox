import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import {
  ArrowRight, ChevronRight, CheckCircle2, Megaphone, TrendingUp,
  Headphones, FileText, Workflow, Sparkles, Star, RefreshCw, Globe,
  Bot,
} from 'lucide-react'
import { addPageSchema, faqPageSchema } from '../../seoConfig'
import WhatWeShip from '../../components/WhatWeShip'

const CAL_LINK = 'https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true'

const HS_ORANGE      = '#FF7A59'
const HS_ORANGE_DARK = '#CC5535'
const HS_NAVY        = '#33475B'
const HS_BG_TINT     = '#FFF4F0'

const hubs = [
  {
    to: '/solutions/hubspot-marketing-hub',
    icon: Megaphone,
    title: 'Marketing Hub',
    desc: 'Campaigns, workflows, lead scoring, and attribution reporting — wired into Breeze AI for content, copy, and segment generation.',
    tags: ['Campaigns', 'Workflows', 'Attribution', 'Breeze Content'],
  },
  {
    to: '/solutions/hubspot-sales-hub',
    icon: TrendingUp,
    title: 'Sales Hub',
    desc: 'Custom deal stages, sequences, forecasting, prospecting workspace, and Breeze AI lead scoring. Built around your sales motion.',
    tags: ['Deal Pipeline', 'Sequences', 'Forecasting', 'Prospecting'],
  },
  {
    to: '/solutions/hubspot-service-hub',
    icon: Headphones,
    title: 'Service Hub',
    desc: 'Ticketing, customer portal, knowledge base, SLA automation, CSAT/NPS surveys, and the Breeze customer agent for 24/7 deflection.',
    tags: ['Tickets', 'Portal', 'SLAs', 'Customer Agent'],
  },
  {
    to: '/solutions/hubspot-cms-hub',
    icon: FileText,
    title: 'CMS Hub',
    desc: 'Custom themes, modules, memberships, multi-language sites, and SEO-optimized pages — all connected to your HubSpot CRM out of the box.',
    tags: ['Themes', 'Modules', 'Memberships', 'SEO'],
  },
  {
    to: '/solutions/hubspot-operations-hub',
    icon: Workflow,
    title: 'Operations Hub',
    desc: 'Programmable automation, data sync (Salesforce, NetSuite, Shopify), data quality automation, custom datasets, and warehouse integration.',
    tags: ['Data Sync', 'Programmable', 'Datasets', 'Snowflake'],
  },
  {
    to: '/solutions/hubspot-breeze-ai',
    icon: Sparkles,
    title: 'Breeze AI',
    desc: 'Breeze Copilot, Breeze Agents (Prospecting, Customer, Content, Social), and Breeze Intelligence enrichment. The AI layer across your full HubSpot stack.',
    tags: ['Copilot', 'Agents', 'Intelligence', 'Content'],
    highlight: true,
  },
]

const services = [
  { icon: Globe,     title: 'Greenfield HubSpot',      desc: 'New HubSpot portal designed around your funnel from day one — objects, pipelines, automation, integrations.' },
  { icon: RefreshCw, title: 'Salesforce → HubSpot',   desc: 'Migration with full data mapping, automation rebuild, integration reconnection, and parallel-run validation.' },
  { icon: Sparkles,  title: 'Brownfield Optimization', desc: 'Audit and rework existing HubSpot portals — clean lists, fix workflows, restructure deal stages, layer on Breeze AI.' },
  { icon: TrendingUp,title: 'Dual-Stack Integration',  desc: 'Two-way Salesforce↔HubSpot sync via Operations Hub with field mapping, conflict rules, and observability.' },
]

const overviewFaqs = [
  {
    q: 'Are you a HubSpot Solutions Partner?',
    a: 'Our HubSpot Solutions Partner application is in progress. In the meantime, our team holds individual HubSpot certifications across every Hub, and we deliver implementation, migration, and managed services on the same engagement terms as our Salesforce work.',
  },
  {
    q: 'Which HubSpot tier do I need?',
    a: 'It depends on your team size and feature needs. Starter handles basics; Professional adds workflows, custom reporting, and Breeze AI; Enterprise adds advanced permissions, sandbox environments, and Operations Hub features like programmable automation. We assess your needs on the discovery call and recommend the minimum tier that meets them.',
  },
  {
    q: 'Can you migrate us from Salesforce to HubSpot?',
    a: 'Yes — and the reverse. Standard scope covers data migration (contacts, companies, deals, custom objects, activities, attachments), automation rebuild, integration reconnection, user permissions, and a parallel-run window where both systems are live before final cutover.',
  },
  {
    q: 'How long does a HubSpot implementation take?',
    a: 'Single Hub (e.g., Sales Hub only): 3-5 weeks. Marketing + Sales + Service Hub bundle: 6-10 weeks. Full HubSpot stack including CMS and Operations Hub: 10-14 weeks. Migrations from Salesforce typically run 8-12 weeks depending on object complexity.',
  },
  {
    q: 'Do you handle Breeze AI deployment?',
    a: 'Yes. Every implementation includes Breeze Copilot setup. Breeze Agents (Prospecting, Customer, Content, Social) and Breeze Intelligence enrichment are scoped based on your use cases. See the Breeze AI page for the full breakdown.',
  },
]

function PageHero() {
  return (
    <section className="relative pt-24 sm:pt-28 pb-10 sm:pb-14 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #B8421C 0%, #E85A2E 35%, #FF7A59 70%, #FFA078 100%)' }}>
      <div className="absolute inset-0 bg-grid-dark opacity-25" />
      <div className="glow-dot w-[600px] h-[600px] top-[-200px] right-[-100px]"
        style={{ backgroundColor: '#FFFFFF', opacity: 0.18 }} />
      <div className="glow-dot w-[400px] h-[400px] bottom-[-100px] left-[-80px]"
        style={{ backgroundColor: '#8B2A0B', opacity: 0.25 }} />
      <div className="section-wrap relative z-10 max-w-3xl mx-auto text-center">
        <div className="tag-white mx-auto mb-6 inline-flex">
          <Sparkles className="w-3.5 h-3.5" /> HubSpot Consulting &amp; Implementation
        </div>
        <h1 className="text-2xl sm:text-4xl md:text-5xl 2xl:text-6xl font-black text-white leading-tight mb-4 sm:mb-6 animate-fade-up">
          The Full HubSpot Stack.<br />
          <span className="gradient-text-gold">Built Around Your Funnel.</span>
        </h1>
        <p className="text-base sm:text-lg leading-relaxed mb-6 animate-fade-up-1"
          style={{ color: 'rgba(255,222,210,0.92)' }}>
          End-to-end implementation, migration, and managed services across every HubSpot Hub —
          Marketing, Sales, Service, CMS, Operations, and Breeze AI. Plus Salesforce↔HubSpot migrations and dual-stack integrations.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up-2">
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
            className="btn-gold text-base px-8 py-4">
            Book a HubSpot Scoping Call <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

function Hubs() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="tag mx-auto mb-5"
            style={{ color: HS_ORANGE, backgroundColor: `${HS_ORANGE}12`, borderColor: `${HS_ORANGE}25` }}>
            HubSpot Hubs
          </div>
          <h2 className="section-title mb-4">
            One Platform. <span style={{ background: `linear-gradient(135deg, ${HS_ORANGE}, ${HS_ORANGE_DARK})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Every Hub Covered.</span>
          </h2>
          <p className="section-sub">
            Implementation and optimization across the full HubSpot platform. Click any Hub for the deep-dive.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {hubs.map(({ to, icon: Icon, title, desc, tags, highlight }) => (
            <Link key={title} to={to} className="glass-card p-6 group hover:-translate-y-1 transition-all duration-300 no-underline block"
              style={highlight ? { boxShadow: `0 0 0 1.5px ${HS_ORANGE}40, 0 8px 30px ${HS_ORANGE}15` } : undefined}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all"
                style={{ backgroundColor: `${HS_ORANGE}15`, color: HS_ORANGE }}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold mb-2 flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                style={{ color: HS_NAVY }}>
                {title}
                {highlight && (
                  <span className="text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-full"
                    style={{ backgroundColor: `${HS_ORANGE}18`, color: HS_ORANGE }}>
                    AI Layer
                  </span>
                )}
                <ChevronRight className="w-4 h-4 ml-auto" style={{ color: HS_ORANGE }} />
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748B' }}>{desc}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map(t => (
                  <span key={t} className="text-[11px] px-2.5 py-1 rounded-full"
                    style={{ color: '#64748B', backgroundColor: HS_BG_TINT, border: `1px solid ${HS_ORANGE}20` }}>
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceModel() {
  return (
    <section className="py-10 sm:py-16" style={{ backgroundColor: HS_BG_TINT }}>
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="tag mx-auto mb-5"
            style={{ color: HS_ORANGE, backgroundColor: `${HS_ORANGE}12`, borderColor: `${HS_ORANGE}25` }}>
            How We Engage
          </div>
          <h2 className="section-title mb-4">
            Four Ways We Deliver <span style={{ background: `linear-gradient(135deg, ${HS_ORANGE}, ${HS_ORANGE_DARK})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>HubSpot Work</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass-card p-6">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${HS_ORANGE}15`, color: HS_ORANGE }}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold mb-2" style={{ color: HS_NAVY }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  const reasons = [
    { title: 'CRM-Native, Not Marketing-Agency-Trained', desc: "We do not bolt HubSpot onto a content shop. Our team treats HubSpot like the relational CRM it is — modeling deals, custom objects, and lifecycle stages around how your business actually operates." },
    { title: 'Cross-Platform Fluency Most Partners Lack', desc: 'Salesforce-and-HubSpot consultancies are rare. We run both daily, which makes us the right partner for migrations, dual-stack ops, and Operations Hub sync work no single-platform shop can do well.' },
    { title: 'Senior Architects, Not Junior Consultants', desc: 'Every engagement gets an architect who owns the build end-to-end. No layered handoffs, no junior implementers learning HubSpot on your portal.' },
    { title: 'Breeze AI From Day One', desc: 'Every implementation we ship is Breeze-ready. Copilot, Agents, and Intelligence enrichment are scoped into the build — not deferred to a future phase.' },
  ]

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="tag mx-auto mb-5"
            style={{ color: HS_ORANGE, backgroundColor: `${HS_ORANGE}12`, borderColor: `${HS_ORANGE}25` }}>
            <Star className="w-3.5 h-3.5" /> Why Cloudsheer for HubSpot
          </div>
          <h2 className="section-title mb-4">
            Why a CRM Specialist <span style={{ background: `linear-gradient(135deg, ${HS_ORANGE}, ${HS_ORANGE_DARK})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Beats a Marketing Agency</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {reasons.map(({ title, desc }) => (
            <div key={title} className="glass-card p-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: HS_ORANGE }} />
                <div>
                  <h4 className="font-bold mb-1.5" style={{ color: HS_NAVY }}>{title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="py-14 sm:py-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #4A1F0E 0%, #8B3820 50%, #B8421C 100%)' }}>
      <div className="absolute inset-0 bg-grid-dark opacity-20" />
      <div className="glow-dot w-[600px] h-[600px] top-[-150px] left-[50%] -translate-x-1/2"
        style={{ backgroundColor: '#FF7A59', opacity: 0.30 }} />
      <div className="glow-dot w-[350px] h-[350px] bottom-[-100px] right-[-50px]"
        style={{ backgroundColor: '#FFFFFF', opacity: 0.06 }} />
      <div className="section-wrap relative z-10 text-center max-w-3xl mx-auto">
        <div className="tag-white mx-auto mb-6 inline-flex">
          <Sparkles className="w-3.5 h-3.5" /> Free HubSpot Discovery Call
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-white mb-5">
          Get a 30-Minute Read on Your<br />
          <span className="gradient-text-gold">HubSpot Setup or Migration</span>
        </h2>
        <p className="text-lg mb-4" style={{ color: 'rgba(255,222,210,0.88)' }}>
          We will audit your current portal (or your destination requirements), identify the highest-impact moves, and give you a clear scope — at no cost.
        </p>
        <ul className="flex flex-col sm:flex-row gap-3 justify-center mb-10 text-sm"
          style={{ color: 'rgba(255,222,210,0.85)' }}>
          {['Portal or migration audit', 'Scoped roadmap with timelines', 'No commitment, no pitch'].map(i => (
            <li key={i} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" style={{ color: HS_ORANGE }} /> {i}
            </li>
          ))}
        </ul>
        <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
          className="btn-gold text-lg px-10 py-5 animate-bounce-x">
          Book Free HubSpot Call <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}

const overviewWhatWeShip = [
  { icon: Globe,     title: 'Greenfield HubSpot builds',  desc: 'Portal designed around your funnel from day one — objects, pipelines, automation, integrations.' },
  { icon: RefreshCw, title: 'Salesforce ↔ HubSpot migrations', desc: 'Data mapping, automation rebuild, integration reconnection, and parallel-run validation either direction.' },
  { icon: Bot,       title: 'Breeze AI activation',       desc: 'Copilot, Agents, and Intelligence enrichment configured against your brand voice from day one.' },
  { icon: Workflow,  title: 'Dual-stack integration',     desc: 'Two-way Salesforce↔HubSpot sync via Operations Hub with field mapping and conflict rules.' },
]

export default function HubSpotOverview() {
  useEffect(() => {
    addPageSchema('faq', faqPageSchema(overviewFaqs))
    return () => addPageSchema('faq', null)
  }, [])
  return (
    <>
      <PageHero />
      <Hubs />
      <WhatWeShip
        platformName="HubSpot"
        accentColor="#FF7A59"
        items={overviewWhatWeShip}
        bgColor="#FFFFFF"
      />
      <ServiceModel />
      <WhyUs />
      <FinalCTA />
    </>
  )
}
