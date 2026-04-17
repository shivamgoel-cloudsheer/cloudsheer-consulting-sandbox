import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle2, Sparkles, Layers, RefreshCw,
  Cable, Headphones, ChevronRight, HelpCircle, ChevronDown,
  Rocket, Wrench, Building2, Shield,
} from 'lucide-react'
import { useState } from 'react'
import FAQ from '../components/FAQ'

const services = [
  {
    id: 'greenfield',
    icon: <Rocket className="w-6 h-6" />,
    title: 'Greenfield Implementation',
    tagline: 'Start fresh. Build it right the first time.',
    color: '#0176D3',
    desc: 'Deploying Salesforce for the first time? We design and build your CRM from scratch - data model, automation, integrations, and Agentforce agents - so you launch with a system that scales from day one.',
    benefits: [
      'Full org design - objects, fields, page layouts, and security model',
      'Sales, Service, or Marketing Cloud configured to your processes',
      'Data migration from spreadsheets, legacy CRMs, or ERPs',
      'Agentforce agents built and deployed from the start',
      'User training and adoption playbooks included',
      'Go live in 4-8 weeks with post-launch support',
    ],
    ideal: 'Companies new to Salesforce who want to skip the costly mistakes and get it right from the start.',
  },
  {
    id: 'brownfield',
    icon: <Wrench className="w-6 h-6" />,
    title: 'Brownfield Implementation',
    tagline: 'Fix what is broken. Unlock what is possible.',
    color: '#6366F1',
    desc: 'Already on Salesforce but not getting the results you expected? We audit your existing org, clean up technical debt, optimize workflows, and layer on Agentforce to transform what you already have.',
    benefits: [
      'Full org health check - automation audit, data quality, and security review',
      'Technical debt cleanup - redundant flows, unused fields, broken automations',
      'Process re-engineering aligned to current business needs',
      'Agentforce agents layered onto your existing data and processes',
      'Performance optimization for Large Data Volumes (LDV)',
      'Zero disruption - phased rollout with parallel testing',
    ],
    ideal: 'Companies with an existing Salesforce org that needs optimization, cleanup, or new capabilities.',
  },
  {
    id: 'integration',
    icon: <Cable className="w-6 h-6" />,
    title: 'Integration Services',
    tagline: 'Connect everything. Break the silos.',
    color: '#059669',
    desc: 'Salesforce is most powerful when it talks to your other systems. We build reliable, scalable integrations between Salesforce and your ERP, marketing tools, payment platforms, data warehouses, and custom applications.',
    benefits: [
      'API-led connectivity using MuleSoft or native Salesforce APIs',
      'ERP integrations - SAP, NetSuite, Microsoft Dynamics, QuickBooks',
      'Marketing platform sync - HubSpot, Marketo, Mailchimp, Account Engagement',
      'Data Cloud ingestion from any source - batch or real-time streaming',
      'Custom middleware and webhook-based integrations',
      'SSO and identity management via SAML 2.0 or OpenID Connect',
    ],
    ideal: 'Businesses running multiple systems that need a unified view of customers, orders, and operations.',
  },
  {
    id: 'managed',
    icon: <Shield className="w-6 h-6" />,
    title: 'Managed Services',
    tagline: 'We keep it running. You keep growing.',
    color: '#D97706',
    desc: 'After go-live, your Salesforce org needs ongoing care - bug fixes, new features, agent tuning, user support, and release management. Our managed services team acts as your dedicated Salesforce department.',
    benefits: [
      'Dedicated Salesforce admin and developer support on retainer',
      'Agentforce agent monitoring, tuning, and performance optimization',
      'Salesforce release management - seasonal updates, sandbox testing',
      'New feature development and enhancement requests',
      'User training, onboarding, and adoption tracking',
      'Monthly health reports with actionable recommendations',
    ],
    ideal: 'Companies that want expert Salesforce support without hiring a full-time team.',
  },
]

const serviceFaqs = [
  { q: 'How do I know if I need a greenfield or brownfield implementation?', a: 'If you are deploying Salesforce for the first time, that is greenfield. If you already have a Salesforce org and want to improve, optimize, or add new capabilities, that is brownfield. Not sure? Book a discovery call and we will assess your situation.' },
  { q: 'Can you handle integrations with custom or legacy systems?', a: 'Yes. We have built integrations with everything from modern REST APIs to legacy SOAP services and flat-file imports. If it has an API or data export, we can connect it to Salesforce.' },
  { q: 'What is included in managed services?', a: 'A dedicated team handles admin support, bug fixes, new feature requests, Agentforce agent tuning, release management, and monthly health reports. Think of it as your outsourced Salesforce department.' },
  { q: 'How quickly can you start?', a: 'Most engagements kick off within 1-2 weeks of signing. Managed services can begin immediately. Every engagement starts with a free 30-minute discovery call to scope the work.' },
  { q: 'Do you offer fixed-price or time-and-materials?', a: 'Both. Greenfield and brownfield implementations are typically fixed-price after scoping. Integration projects can be either. Managed services are a monthly retainer based on hours and scope.' },
]

function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #032D60 0%, #0A3F80 50%, #0176D3 100%)' }}>
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="glow-dot w-[600px] h-[600px] top-[-200px] right-[-100px]"
        style={{ backgroundColor: 'rgba(0,169,255,0.15)' }} />
      <div className="glow-dot w-[400px] h-[400px] bottom-[-150px] left-[-100px]"
        style={{ backgroundColor: 'rgba(99,102,241,0.12)' }} />

      <div className="section-wrap relative z-10 text-center max-w-3xl mx-auto">
        <div className="tag-white inline-flex mb-6 animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full animate-pulse-slow" style={{ backgroundColor: '#F59E0B' }} />
          Our Services
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 animate-fade-up-1">
          From First Setup to<br />
          <span className="gradient-text-gold">Ongoing Growth</span>
        </h1>
        <p className="text-base sm:text-lg mb-8 animate-fade-up-2" style={{ color: 'rgba(186,220,255,0.85)' }}>
          Whether you are starting fresh, fixing what is broken, connecting your systems, or need ongoing support - we have a service that fits.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up-3">
          <a href="https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="btn-gold text-base px-8 py-3.5">
            Book Free Discovery Call <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}

function ServiceCards() {
  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="tag mx-auto mb-5"><Layers className="w-3.5 h-3.5" /> What We Do</div>
          <h2 className="section-title mb-4">
            Four Ways We Help You <span className="gradient-text">Win with Salesforce</span>
          </h2>
          <p className="section-sub">Every business is at a different stage of their Salesforce journey. Pick the service that matches where you are today.</p>
        </div>

        <div className="space-y-8">
          {services.map(({ id, icon, title, tagline, color, desc, benefits, ideal }, i) => (
            <div key={id} id={id} className="glass-card overflow-hidden animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Left - info */}
                <div className="lg:col-span-2 p-6 sm:p-8 flex flex-col justify-center"
                  style={{ borderRight: '1px solid rgba(1,118,211,0.08)' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${color}15`, color }}>
                    {icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black mb-2" style={{ color: '#032D60' }}>{title}</h3>
                  <p className="text-sm font-semibold mb-4" style={{ color }}>{tagline}</p>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: '#64748B' }}>{desc}</p>
                  <p className="text-xs leading-relaxed px-3 py-2 rounded-lg" style={{ backgroundColor: `${color}08`, color: '#475569', border: `1px solid ${color}20` }}>
                    <span className="font-semibold" style={{ color }}>Ideal for:</span> {ideal}
                  </p>
                </div>

                {/* Right - benefits */}
                <div className="lg:col-span-3 p-6 sm:p-8" style={{ backgroundColor: '#F8FAFC' }}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: '#94A3B8' }}>What is included</p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm" style={{ color: '#475569' }}>
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all" style={{ color }}>
                      Get started with {title.split(' ')[0].toLowerCase()} <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowWeWork() {
  const steps = [
    { n: '01', title: 'Discovery Call', desc: '30-minute call with a Salesforce architect. We understand your goals, assess your current state, and identify the right engagement type.' },
    { n: '02', title: 'Scoping & SOW', desc: 'We deliver a detailed scope, timeline, and fixed-price proposal. No surprises, no hidden fees, no ambiguity.' },
    { n: '03', title: 'Build & Iterate', desc: 'Agile delivery in 2-week sprints. You see progress every cycle, give feedback, and stay in control throughout.' },
    { n: '04', title: 'Launch & Support', desc: 'Go live with confidence. Every engagement includes post-launch support and optional managed services for ongoing care.' },
  ]

  return (
    <section className="py-10 sm:py-16" style={{ backgroundColor: '#EFF6FF' }}>
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="tag mx-auto mb-5"><Sparkles className="w-3.5 h-3.5" /> Our Process</div>
          <h2 className="section-title mb-4">How Every Engagement <span className="gradient-text">Works</span></h2>
          <p className="section-sub">A clear, predictable process from first call to go-live - regardless of which service you choose.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 z-0"
            style={{ background: 'linear-gradient(90deg, #0176D3, #6366F1)' }} />
          {steps.map(({ n, title, desc }, i) => (
            <div key={n} className="glass-card p-6 text-center relative z-10 animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}>
              <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-black text-lg"
                style={{ background: 'linear-gradient(135deg,#0176D3,#6366F1)', boxShadow: '0 6px 20px rgba(1,118,211,0.30)' }}>
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

function CTA() {
  return (
    <section className="py-10 sm:py-16 bg-cs-navy relative overflow-hidden">
      <div className="glow-dot w-[600px] h-[600px] bg-cs-blue/30 top-[-200px] left-[50%] -translate-x-1/2" />
      <div className="section-wrap relative z-10 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-5">
          Not Sure Which Service<br /><span className="gradient-text-gold">You Need?</span>
        </h2>
        <p className="text-blue-200 mb-8">
          Book a free 30-minute discovery call. We will assess your situation and recommend the right engagement - no commitment, no sales pitch.
        </p>
        <a href="https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="btn-gold text-base px-8 py-4">
          Book Free Discovery Call <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <HowWeWork />
      <FAQ title="Services FAQ" items={serviceFaqs} />
      <CTA />
    </>
  )
}
