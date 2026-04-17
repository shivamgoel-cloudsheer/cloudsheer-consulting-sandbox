import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  ArrowRight, CheckCircle2, Sparkles, Layers,
  Cable, ChevronRight, Rocket, Wrench, Shield,
  TrendingUp, Clock, Users, Zap, Target, GitMerge,
  RefreshCw, Database, Lock, BarChart3, Workflow,
  ArrowUpRight, Circle,
} from 'lucide-react'
import FAQ from '../components/FAQ'

/* ─── Data ──────────────────────────────────────────────────── */
const services = [
  {
    id: 'greenfield',
    icon: <Rocket className="w-6 h-6" />,
    title: 'Greenfield Implementation',
    tagline: 'Start fresh. Build it right the first time.',
    color: '#0176D3',
    gradient: 'linear-gradient(135deg, #0176D3 0%, #38BDF8 100%)',
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
    stat: '4-8 weeks',
    statLabel: 'avg. go-live',
    visual: [
      { icon: <Database className="w-4 h-4" />, label: 'Data Model' },
      { icon: <Workflow className="w-4 h-4" />, label: 'Automation' },
      { icon: <Users className="w-4 h-4" />, label: 'Training' },
    ],
  },
  {
    id: 'brownfield',
    icon: <Wrench className="w-6 h-6" />,
    title: 'Brownfield Implementation',
    tagline: 'Fix what is broken. Unlock what is possible.',
    color: '#6366F1',
    gradient: 'linear-gradient(135deg, #6366F1 0%, #A78BFA 100%)',
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
    stat: '250+',
    statLabel: 'orgs optimized',
    visual: [
      { icon: <RefreshCw className="w-4 h-4" />, label: 'Audit' },
      { icon: <Zap className="w-4 h-4" />, label: 'Optimize' },
      { icon: <TrendingUp className="w-4 h-4" />, label: 'Scale' },
    ],
  },
  {
    id: 'integration',
    icon: <Cable className="w-6 h-6" />,
    title: 'Integration Services',
    tagline: 'Connect everything. Break the silos.',
    color: '#059669',
    gradient: 'linear-gradient(135deg, #059669 0%, #34D399 100%)',
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
    stat: '100+',
    statLabel: 'integrations built',
    visual: [
      { icon: <GitMerge className="w-4 h-4" />, label: 'APIs' },
      { icon: <Lock className="w-4 h-4" />, label: 'SSO' },
      { icon: <Database className="w-4 h-4" />, label: 'Data Cloud' },
    ],
  },
  {
    id: 'managed',
    icon: <Shield className="w-6 h-6" />,
    title: 'Managed Services',
    tagline: 'We keep it running. You keep growing.',
    color: '#D97706',
    gradient: 'linear-gradient(135deg, #D97706 0%, #FBBF24 100%)',
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
    stat: '24/7',
    statLabel: 'support coverage',
    visual: [
      { icon: <BarChart3 className="w-4 h-4" />, label: 'Reports' },
      { icon: <RefreshCw className="w-4 h-4" />, label: 'Updates' },
      { icon: <Shield className="w-4 h-4" />, label: 'Monitor' },
    ],
  },
]

const serviceFaqs = [
  { q: 'How do I know if I need a greenfield or brownfield implementation?', a: 'If you are deploying Salesforce for the first time, that is greenfield. If you already have a Salesforce org and want to improve, optimize, or add new capabilities, that is brownfield. Not sure? Book a discovery call and we will assess your situation.' },
  { q: 'Can you handle integrations with custom or legacy systems?', a: 'Yes. We have built integrations with everything from modern REST APIs to legacy SOAP services and flat-file imports. If it has an API or data export, we can connect it to Salesforce.' },
  { q: 'What is included in managed services?', a: 'A dedicated team handles admin support, bug fixes, new feature requests, Agentforce agent tuning, release management, and monthly health reports. Think of it as your outsourced Salesforce department.' },
  { q: 'How quickly can you start?', a: 'Most engagements kick off within 1-2 weeks of signing. Managed services can begin immediately. Every engagement starts with a free 30-minute discovery call to scope the work.' },
  { q: 'Do you offer fixed-price or time-and-materials?', a: 'Both. Greenfield and brownfield implementations are typically fixed-price after scoping. Integration projects can be either. Managed services are a monthly retainer based on hours and scope.' },
]

/* ─── Hero ──────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #032D60 0%, #0A3F80 50%, #0176D3 100%)' }}>
      <div className="absolute inset-0 bg-grid-dark" />

      {/* Animated orbs */}
      <div className="glow-dot w-[700px] h-[700px] top-[-250px] right-[-150px]"
        style={{ backgroundColor: 'rgba(0,169,255,0.18)' }} />
      <div className="glow-dot w-[500px] h-[500px] bottom-[-200px] left-[-100px]"
        style={{ backgroundColor: 'rgba(99,102,241,0.15)' }} />
      <div className="glow-dot w-[300px] h-[300px] top-[30%] left-[60%] hidden md:block"
        style={{ backgroundColor: 'rgba(245,158,11,0.08)' }} />

      {/* Spinning rings */}
      <div className="absolute top-16 right-[8%] w-72 h-72 rounded-full border border-white/5 animate-spin-slow hidden lg:block" />
      <div className="absolute bottom-20 left-[5%] w-48 h-48 rounded-full border border-white/8 animate-spin-slow hidden lg:block"
        style={{ animationDirection: 'reverse', animationDuration: '8s' }} />

      {/* Floating particles */}
      <div className="absolute top-[25%] left-[15%] w-2 h-2 rounded-full animate-pulse-slow hidden md:block" style={{ backgroundColor: 'rgba(56,189,248,0.5)' }} />
      <div className="absolute top-[65%] left-[80%] w-1.5 h-1.5 rounded-full animate-pulse-slow hidden md:block" style={{ backgroundColor: 'rgba(245,158,11,0.5)', animationDelay: '1s' }} />
      <div className="absolute top-[45%] left-[90%] w-2 h-2 rounded-full animate-pulse-slow hidden md:block" style={{ backgroundColor: 'rgba(99,102,241,0.5)', animationDelay: '2s' }} />

      <div className="section-wrap relative z-10 pt-28 pb-20 sm:pt-32 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="tag-white inline-flex mb-6 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse-slow" style={{ backgroundColor: '#F59E0B' }} />
              Our Services
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 animate-fade-up-1">
              From First Setup to<br />
              <span className="shimmer-text">Ongoing Growth</span>
            </h1>
            <p className="text-base sm:text-lg mb-8 max-w-lg animate-fade-up-2" style={{ color: 'rgba(186,220,255,0.85)' }}>
              Whether you are starting fresh, fixing what is broken, connecting your systems, or need ongoing support - we have a service that fits.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-up-3">
              <a href="https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="btn-gold text-base px-8 py-3.5">
                Book Free Discovery Call <ArrowRight className="w-5 h-5 animate-bounce-x" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center gap-2 font-medium px-7 py-3.5 rounded-xl transition-all duration-200 text-sm sm:text-base"
                style={{ border: '1.5px solid rgba(255,255,255,0.25)', color: 'white' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.10)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                Explore Services
              </a>
            </div>
          </div>

          {/* Right - service cards preview */}
          <div className="hidden lg:flex flex-col gap-3 animate-fade-in">
            {services.map(({ icon, title, stat, statLabel, gradient, color }, i) => (
              <a href={`#${services[i].id}`} key={title}
                className="flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group cursor-pointer"
                style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor = `${color}60`; e.currentTarget.style.transform = 'translateX(8px)' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; e.currentTarget.style.transform = 'translateX(0)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-white"
                  style={{ background: gradient }}>
                  {icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm">{title}</p>
                  <p className="text-xs" style={{ color: 'rgba(186,220,255,0.6)' }}>{stat} {statLabel}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white/80 transition-colors shrink-0" />
              </a>
            ))}
          </div>
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

/* ─── Stats bar ─────────────────────────────────────────────── */
function StatsBar() {
  const stats = [
    { val: '250+', label: 'Projects Delivered' },
    { val: '60+', label: 'Salesforce Certifications' },
    { val: '40+', label: 'Team Members' },
    { val: '100%', label: 'Project Success Rate' },
  ]

  return (
    <section className="py-10 sm:py-12 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0176D3 0%, #032D60 100%)' }}>
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="section-wrap relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(({ val, label }, i) => (
            <div key={label} className="animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              <p className="text-3xl sm:text-4xl font-black text-white mb-1">{val}</p>
              <p className="text-sm font-medium" style={{ color: 'rgba(186,220,255,0.7)' }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Service detail sections (alternating layout) ──────────── */
function ServiceSections() {
  return (
    <section className="bg-white" id="services">
      {services.map(({ id, icon, title, tagline, color, gradient, desc, benefits, ideal, stat, statLabel, visual }, i) => {
        const isEven = i % 2 === 0
        return (
          <div key={id} id={id} className={`py-12 sm:py-20 ${isEven ? 'bg-white' : 'bg-cs-bgsub'}`}>
            <div className="section-wrap">
              <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${!isEven ? 'lg:direction-rtl' : ''}`}>

                {/* Content side */}
                <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                  {/* Number + tag */}
                  <div className="flex items-center gap-3 mb-5 animate-fade-up">
                    <span className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-black"
                      style={{ background: gradient }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="tag" style={{ color, backgroundColor: `${color}10`, borderColor: `${color}25` }}>
                      {tagline}
                    </div>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-black mb-4 animate-fade-up-1" style={{ color: '#032D60' }}>
                    {title}
                  </h2>
                  <p className="text-base leading-relaxed mb-6 animate-fade-up-2" style={{ color: '#64748B' }}>
                    {desc}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-3 mb-6 animate-fade-up-3">
                    {benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm" style={{ color: '#475569' }}>
                        <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{ backgroundColor: `${color}12` }}>
                          <CheckCircle2 className="w-3.5 h-3.5" style={{ color }} />
                        </div>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-3 animate-fade-up-4">
                    <Link to="/contact" className="btn-primary text-sm px-6 py-3"
                      style={{ backgroundColor: color }}
                      onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 8px 30px ${color}40` }}
                      onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none' }}>
                      Get Started <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a href="https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer"
                      className="btn-ghost text-sm px-6 py-3" style={{ color, borderColor: `${color}30` }}>
                      Book Discovery Call
                    </a>
                  </div>
                </div>

                {/* Visual side */}
                <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="relative animate-fade-in">
                    {/* Main card */}
                    <div className="rounded-3xl overflow-hidden"
                      style={{ background: gradient, padding: '2px' }}>
                      <div className="rounded-[22px] p-6 sm:p-8" style={{ backgroundColor: '#FAFCFF' }}>
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white"
                              style={{ background: gradient, boxShadow: `0 8px 24px ${color}30` }}>
                              {icon}
                            </div>
                            <div>
                              <p className="font-bold text-sm" style={{ color: '#032D60' }}>{title}</p>
                              <p className="text-xs" style={{ color: '#94A3B8' }}>{tagline}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-black" style={{ color }}>{stat}</p>
                            <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: '#94A3B8' }}>{statLabel}</p>
                          </div>
                        </div>

                        {/* Visual workflow */}
                        <div className="flex items-center justify-between mb-6 px-2">
                          {visual.map((v, vi) => (
                            <div key={v.label} className="flex items-center gap-2">
                              <div className="flex flex-col items-center gap-2">
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300"
                                  style={{ backgroundColor: `${color}10`, border: `1.5px solid ${color}20`, color }}>
                                  {v.icon}
                                </div>
                                <span className="text-[11px] font-semibold" style={{ color: '#64748B' }}>{v.label}</span>
                              </div>
                              {vi < visual.length - 1 && (
                                <div className="flex items-center mx-1 mb-5">
                                  <div className="w-6 sm:w-10 h-0.5" style={{ backgroundColor: `${color}25` }} />
                                  <ChevronRight className="w-3 h-3 -ml-1" style={{ color: `${color}50` }} />
                                </div>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Ideal for */}
                        <div className="rounded-xl p-4"
                          style={{ backgroundColor: `${color}06`, border: `1px solid ${color}15` }}>
                          <div className="flex items-start gap-2">
                            <Target className="w-4 h-4 shrink-0 mt-0.5" style={{ color }} />
                            <div>
                              <p className="text-xs font-bold mb-1" style={{ color }}>Ideal for</p>
                              <p className="text-xs leading-relaxed" style={{ color: '#64748B' }}>{ideal}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating accent chips */}
                    {i === 0 && (
                      <>
                        <div className="absolute -top-3 -right-3 rounded-xl px-3 py-2 flex items-center gap-2 animate-float hidden sm:flex"
                          style={{ backgroundColor: 'white', boxShadow: '0 8px 30px rgba(1,118,211,0.15)', border: '1px solid rgba(1,118,211,0.12)' }}>
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          <span className="text-xs font-semibold" style={{ color: '#032D60' }}>Zero legacy debt</span>
                        </div>
                        <div className="absolute -bottom-3 -left-3 rounded-xl px-3 py-2 flex items-center gap-2 animate-float-delay hidden sm:flex"
                          style={{ backgroundColor: 'white', boxShadow: '0 8px 30px rgba(1,118,211,0.15)', border: '1px solid rgba(1,118,211,0.12)' }}>
                          <Sparkles className="w-4 h-4" style={{ color: '#F59E0B' }} />
                          <span className="text-xs font-semibold" style={{ color: '#032D60' }}>Agentforce-ready</span>
                        </div>
                      </>
                    )}
                    {i === 1 && (
                      <>
                        <div className="absolute -top-3 -left-3 rounded-xl px-3 py-2 flex items-center gap-2 animate-float hidden sm:flex"
                          style={{ backgroundColor: 'white', boxShadow: '0 8px 30px rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.15)' }}>
                          <TrendingUp className="w-4 h-4 text-emerald-500" />
                          <span className="text-xs font-semibold" style={{ color: '#032D60' }}>3x performance</span>
                        </div>
                      </>
                    )}
                    {i === 2 && (
                      <>
                        <div className="absolute -top-3 -right-3 rounded-xl px-3 py-2 flex items-center gap-2 animate-float hidden sm:flex"
                          style={{ backgroundColor: 'white', boxShadow: '0 8px 30px rgba(5,150,105,0.15)', border: '1px solid rgba(5,150,105,0.15)' }}>
                          <GitMerge className="w-4 h-4" style={{ color: '#059669' }} />
                          <span className="text-xs font-semibold" style={{ color: '#032D60' }}>Real-time sync</span>
                        </div>
                      </>
                    )}
                    {i === 3 && (
                      <>
                        <div className="absolute -bottom-3 -right-3 rounded-xl px-3 py-2 flex items-center gap-2 animate-float hidden sm:flex"
                          style={{ backgroundColor: 'white', boxShadow: '0 8px 30px rgba(217,119,6,0.15)', border: '1px solid rgba(217,119,6,0.15)' }}>
                          <Clock className="w-4 h-4" style={{ color: '#D97706' }} />
                          <span className="text-xs font-semibold" style={{ color: '#032D60' }}>Always covered</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

/* ─── Quick comparison ──────────────────────────────────────── */
function Comparison() {
  const rows = [
    { label: 'Best for', greenfield: 'New to Salesforce', brownfield: 'Existing Salesforce org', integration: 'Multi-system environments', managed: 'Post go-live support' },
    { label: 'Timeline', greenfield: '4-8 weeks', brownfield: '3-6 weeks', integration: '2-8 weeks', managed: 'Ongoing' },
    { label: 'Engagement', greenfield: 'Fixed price', brownfield: 'Fixed price', integration: 'Fixed or T&M', managed: 'Monthly retainer' },
    { label: 'Agentforce', greenfield: 'Built-in', brownfield: 'Added on', integration: 'Connected', managed: 'Monitored & tuned' },
  ]

  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="tag mx-auto mb-5"><Layers className="w-3.5 h-3.5" /> Compare Services</div>
          <h2 className="section-title mb-4">Find Your <span className="gradient-text">Perfect Fit</span></h2>
          <p className="section-sub">A quick comparison to help you choose the right engagement type.</p>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-hidden rounded-2xl"
          style={{ border: '1px solid rgba(1,118,211,0.12)' }}>
          {/* Header */}
          <div className="grid grid-cols-5 gap-0"
            style={{ background: 'linear-gradient(135deg, #032D60 0%, #0A3F80 100%)' }}>
            <div className="p-5">
              <p className="text-white/60 text-xs font-semibold uppercase tracking-wider">Feature</p>
            </div>
            {services.map(({ title, color, gradient, icon }) => (
              <div key={title} className="p-5 text-center" style={{ borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="w-9 h-9 rounded-xl mx-auto mb-2 flex items-center justify-center text-white"
                  style={{ background: gradient }}>
                  {icon}
                </div>
                <p className="text-white text-xs font-bold">{title.split(' ')[0]}</p>
              </div>
            ))}
          </div>
          {/* Rows */}
          {rows.map(({ label, greenfield, brownfield, integration, managed }, ri) => (
            <div key={label} className="grid grid-cols-5 gap-0"
              style={{ backgroundColor: ri % 2 === 0 ? '#FAFCFF' : 'white', borderTop: '1px solid rgba(1,118,211,0.08)' }}>
              <div className="p-4 flex items-center">
                <p className="text-sm font-semibold" style={{ color: '#032D60' }}>{label}</p>
              </div>
              {[greenfield, brownfield, integration, managed].map((val, ci) => (
                <div key={ci} className="p-4 text-center flex items-center justify-center"
                  style={{ borderLeft: '1px solid rgba(1,118,211,0.06)' }}>
                  <span className="text-sm" style={{ color: '#475569' }}>{val}</span>
                </div>
              ))}
            </div>
          ))}
          {/* CTA row */}
          <div className="grid grid-cols-5 gap-0" style={{ borderTop: '1px solid rgba(1,118,211,0.08)', backgroundColor: '#F0F7FF' }}>
            <div className="p-4" />
            {services.map(({ id, color }) => (
              <div key={id} className="p-4 text-center" style={{ borderLeft: '1px solid rgba(1,118,211,0.06)' }}>
                <a href={`#${id}`} className="text-xs font-bold hover:underline" style={{ color }}>
                  Learn more <ArrowUpRight className="w-3 h-3 inline" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {services.map(({ id, title, color, gradient, icon, stat, statLabel }) => (
            <a href={`#${id}`} key={id} className="glass-card p-4 text-center">
              <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center text-white"
                style={{ background: gradient }}>
                {icon}
              </div>
              <p className="text-sm font-bold mb-1" style={{ color: '#032D60' }}>{title.split(' ')[0]}</p>
              <p className="text-lg font-black" style={{ color }}>{stat}</p>
              <p className="text-[10px] uppercase tracking-wider" style={{ color: '#94A3B8' }}>{statLabel}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Process ───────────────────────────────────────────────── */
function HowWeWork() {
  const steps = [
    { n: '01', title: 'Discovery Call', desc: '30-minute call with a Salesforce architect. We understand your goals, assess your current state, and identify the right engagement.', icon: <Target className="w-5 h-5" /> },
    { n: '02', title: 'Scoping & SOW', desc: 'Detailed scope, timeline, and fixed-price proposal. No surprises, no hidden fees, no ambiguity.', icon: <Layers className="w-5 h-5" /> },
    { n: '03', title: 'Build & Iterate', desc: 'Agile delivery in 2-week sprints. You see progress every cycle, give feedback, and stay in control.', icon: <Zap className="w-5 h-5" /> },
    { n: '04', title: 'Launch & Support', desc: 'Go live with confidence. Post-launch support and optional managed services for ongoing care.', icon: <Rocket className="w-5 h-5" /> },
  ]

  return (
    <section className="py-12 sm:py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #032D60 0%, #0A3F80 60%, #0176D3 100%)' }}>
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="glow-dot w-[400px] h-[400px] top-[-100px] left-[-100px]"
        style={{ backgroundColor: 'rgba(0,169,255,0.12)' }} />
      <div className="glow-dot w-[300px] h-[300px] bottom-[-100px] right-[-50px]"
        style={{ backgroundColor: 'rgba(99,102,241,0.10)' }} />

      <div className="section-wrap relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="tag-white inline-flex mb-5 animate-fade-up">
            <Sparkles className="w-3.5 h-3.5" /> Our Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 animate-fade-up-1">
            How Every Engagement <span className="gradient-text-gold">Works</span>
          </h2>
          <p className="text-base sm:text-lg animate-fade-up-2" style={{ color: 'rgba(186,220,255,0.75)' }}>
            A clear, predictable process from first call to go-live.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-5 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 z-0"
            style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.15), rgba(245,158,11,0.4), rgba(255,255,255,0.15))' }} />

          {steps.map(({ n, title, desc, icon }, i) => (
            <div key={n} className="relative z-10 text-center animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="dark-card p-6 h-full">
                <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-black text-lg relative"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))', border: '1px solid rgba(255,255,255,0.15)' }}>
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black"
                    style={{ background: 'linear-gradient(135deg, #F59E0B, #FBBF24)', color: '#032D60' }}>
                    {n}
                  </span>
                  {icon}
                </div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(186,220,255,0.65)' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ───────────────────────────────────────────────────── */
function CTA() {
  return (
    <section className="py-12 sm:py-16 bg-white relative overflow-hidden">
      <div className="glow-dot w-[500px] h-[500px] top-[-150px] left-[50%] -translate-x-1/2"
        style={{ backgroundColor: 'rgba(1,118,211,0.06)' }} />
      <div className="section-wrap relative z-10 text-center max-w-2xl mx-auto">
        <div className="tag mx-auto mb-5"><Sparkles className="w-3.5 h-3.5" /> Get Started</div>
        <h2 className="section-title mb-5">
          Not Sure Which Service<br /><span className="gradient-text">You Need?</span>
        </h2>
        <p className="section-sub mb-8">
          Book a free 30-minute discovery call. We will assess your situation and recommend the right engagement - no commitment, no sales pitch.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="btn-gold text-base px-8 py-4">
            Book Free Discovery Call <ArrowRight className="w-5 h-5 animate-bounce-x" />
          </a>
          <Link to="/contact" className="btn-ghost text-base px-8 py-4">
            Contact Us
          </Link>
        </div>
        <p className="text-xs mt-6" style={{ color: '#94A3B8' }}>
          30-min call with a Salesforce architect. No pitch. Just clarity.
        </p>
      </div>
    </section>
  )
}

/* ─── Page ──────────────────────────────────────────────────── */
export default function Services() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServiceSections />
      <Comparison />
      <HowWeWork />
      <FAQ title="Services FAQ" items={serviceFaqs} />
      <CTA />
    </>
  )
}
