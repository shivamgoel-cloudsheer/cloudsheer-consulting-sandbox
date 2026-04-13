import {
  ArrowRight, CheckCircle2, Zap, TrendingUp, Clock, DollarSign,
  Code, Layers, Package, Globe, Shield, Star, ChevronRight, Workflow,
} from 'lucide-react'

const CAL_LINK = 'https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true'

const painPoints = [
  { pain: "Custom app development takes 6-12 months and blows past budget before delivering value", fix: "<strong>Lightning Platform</strong> with LWC cuts delivery time by up to 70%" },
  { pain: "Critical business processes still run on spreadsheets, email chains, and disconnected tools", fix: "<strong>Screen Flows and Dynamic Forms</strong> connect to CRM data on any device" },
  { pain: "Every integration project turns into a custom-coded, fragile point-to-point connection", fix: "<strong>MuleSoft and Platform Events</strong> deliver governed integrations that scale" },
  { pain: "Manual workflows consume thousands of hours per year across sales, service, and operations", fix: "<strong>Flow Builder</strong> with Record-Triggered Flows eliminates 90% of manual work" },
  { pain: "You buy AppExchange apps that overlap, conflict, or create ungoverned technical debt", fix: "<strong>AppExchange governance</strong> with Custom Metadata Types ensures org health" },
]

const outcomes = [
  { icon: Clock,      value: '70%',      label: 'faster app delivery compared to traditional development - from months to weeks with low-code on Platform', color: '#0176D3' },
  { icon: DollarSign, value: '478%',     label: 'three-year ROI for Salesforce Platform investments, with payback in under three months (Forrester TEI)', color: '#10B981' },
  { icon: TrendingUp, value: '29%',      label: 'increase in employee productivity reported by organizations using Platform automations and custom apps', color: '#F59E0B' },
  { icon: Code,       value: '80%',      label: 'reduction in custom code when replacing legacy Apex triggers and Visualforce with Flow Builder and LWC', color: '#6366F1' },
  { icon: Package,    value: '10,000+',  label: 'apps, components, and solutions on AppExchange - the largest enterprise cloud marketplace in the world', color: '#06B6D4' },
  { icon: Globe,      value: '150K+',    label: 'companies worldwide running custom apps and automations on Salesforce Platform across every industry', color: '#0176D3' },
]

const useCases = [
  {
    dept: 'Custom App Development',
    icon: Code,
    color: '#0176D3',
    headline: 'Ship business apps in weeks, not quarters',
    points: [
      '<strong>Dynamic Forms</strong> and layouts built without code',
      '<strong>Lightning Web Components (LWC)</strong> replace Visualforce',
      '<strong>Apex</strong> for server-side logic and batch processing',
      '<strong>Lightning Platform</strong> mobile-ready apps with offline',
      '<strong>Change Data Capture</strong> with CI/CD governance',
    ],
  },
  {
    dept: 'Automation & Flow',
    icon: Workflow,
    color: '#10B981',
    headline: 'Eliminate manual work across every department',
    points: [
      '<strong>Flow Builder</strong> replaces manual workflows without code',
      '<strong>Record-Triggered Flows</strong> fire on record changes automatically',
      '<strong>Screen Flows</strong> automate approvals and SLA enforcement',
      '<strong>Flow Orchestrator</strong> for multi-department processes',
      '<strong>Platform Events</strong> consolidate legacy triggers into Flows',
    ],
  },
  {
    dept: 'Integration & APIs',
    icon: Globe,
    color: '#F59E0B',
    headline: 'Connect every system in your tech stack',
    points: [
      '<strong>MuleSoft</strong> connectors for 400+ systems including SAP',
      '<strong>Platform Events</strong> deliver real-time sync without polling',
      '<strong>Change Data Capture</strong> streams record changes externally',
      '<strong>Big Objects</strong> store billions of rows at scale',
      '<strong>Custom Metadata Types</strong> govern configuration as data',
    ],
  },
  {
    dept: 'AppExchange & Ecosystem',
    icon: Package,
    color: '#6366F1',
    headline: 'Extend your org with proven, vetted solutions',
    points: [
      '<strong>AppExchange</strong> with 10,000+ pre-built apps available',
      '<strong>Lightning Web Components</strong> for CPQ and e-signatures',
      '<strong>Security reviewed</strong> - every app passes Salesforce review',
      '<strong>AppExchange</strong> accelerates timelines over custom builds',
      '<strong>Expert evaluation</strong> to pick the right solution',
    ],
  },
]

const whyUs = [
  { title: 'Full-Stack Platform Expertise', desc: "Apex, LWC, Flow, Platform Events, APIs, AppExchange - we build on every layer of Salesforce Platform. No generalist guesswork, just certified technical depth that delivers results." },
  { title: "Proven Delivery Track Record", desc: "Custom apps, ERP integrations, complex Flow orchestrations, multi-org architectures - we have delivered these across financial services, healthcare, manufacturing, and tech." },
  { title: 'Built for Maintainability', desc: "Every solution follows Salesforce Well-Architected principles: proper test coverage, governor limit compliance, documentation, and clean CI/CD pipelines so your team can own it long-term." },
  { title: 'Free Technical Discovery', desc: "Book a 30-minute call. We will assess your requirements, recommend the right approach - Flow vs Apex, build vs buy, native vs AppExchange - and deliver a clear build plan at no cost." },
]

export default function PlatformPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#032D60 0%,#0A3F80 55%,#0176D3 100%)' }}>
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="glow-dot w-[500px] h-[500px] top-[-150px] right-[-80px]"
          style={{ backgroundColor: '#38BDF8', opacity: 0.15 }} />

        <div className="section-wrap relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="tag-white mx-auto mb-6 inline-flex">
              <Layers className="w-3.5 h-3.5" /> Salesforce Platform & AppExchange
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4 sm:mb-6 animate-fade-up text-center md:text-left">
              Deliver Apps 70% Faster, Cut Manual Work by 90%, and{' '}
              <span className="gradient-text-gold">Drive 478% ROI</span>
            </h1>
            <p className="text-xl leading-relaxed mb-10 animate-fade-up-1"
              style={{ color: 'rgba(148,196,255,0.90)' }}>
              Salesforce Platform gives your business low-code automation, custom app development, 10,000+ AppExchange solutions, and enterprise APIs - all connected to your CRM. Cloudsheer architects, builds, and optimizes it so you ship faster and spend less.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-2">
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
                className="btn-gold text-base px-8 py-4">
                Discuss Your Platform Project <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm mt-5 animate-fade-up-3"
              style={{ color: 'rgba(148,196,255,0.60)' }}>
              Free 30-min technical discovery call · No commitment · We come with a build plan
            </p>
          </div>
        </div>
      </section>

      {/* ── Pain Points ──────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag mx-auto mb-5">Sound Familiar?</div>
            <h2 className="section-title mb-4">
              The Costly Problems <span className="gradient-text">Platform Eliminates</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {painPoints.map(({ pain, fix }) => (
              <div key={pain} className="glass-card p-5 grid sm:grid-cols-2 gap-4 items-center group hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: 'rgba(239,68,68,0.10)', color: '#EF4444' }}>
                    <span className="text-xs font-bold">&#x2715;</span>
                  </div>
                  <p className="text-sm font-medium" style={{ color: '#475569' }}>{pain}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#0176D3' }} />
                  <p className="text-sm font-semibold" style={{ color: '#032D60' }} dangerouslySetInnerHTML={{ __html: fix }} />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
              className="btn-primary inline-flex">
              Tell Us About Your Challenge <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Proof / Results ──────────────────────────────────── */}
      <section className="py-12 sm:py-16 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#032D60,#0A3F80)' }}>
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="section-wrap relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag-white mx-auto mb-5">Measured Results</div>
            <h2 className="section-title-white mb-4">
              The Business Case for Salesforce Platform
            </h2>
            <p className="section-sub-white">
              Independent research from Forrester and IDC confirms what 150,000+ companies already know - Platform delivers measurable ROI, faster delivery, and lower total cost of ownership.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {outcomes.map(({ icon: Icon, value, label, color }) => (
              <div key={label} className="dark-card p-6 text-center group hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${color}20`, color }}>
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-3xl font-black mb-2" style={{ color }}>{value}</p>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(148,196,255,0.80)' }}>{label}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
              className="btn-gold text-base px-8 py-4">
              See What We Can Build For You <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Use Cases / Capabilities ─────────────────────────── */}
      <section className="py-14 sm:py-10 sm:py-16 bg-white">
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag mx-auto mb-5">What We Deliver</div>
            <h2 className="section-title mb-4">
              Platform Capabilities That{' '}
              <span className="gradient-text">Accelerate Your Business</span>
            </h2>
            <p className="section-sub">
              From rapid app development to enterprise-scale integrations - we build on every layer of Salesforce Platform to cut costs, automate operations, and unlock growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map(({ dept, icon: Icon, color, headline, points }) => (
              <div key={dept} className="glass-card p-5 sm:p-7 flex flex-col group hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${color}15`, color }}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-0.5"
                      style={{ color }}>
                      {dept}
                    </p>
                    <h3 className="font-black text-lg leading-tight" style={{ color: '#032D60' }}>{headline}</h3>
                  </div>
                </div>
                <ul className="space-y-2 flex-grow">
                  {points.map(p => (
                    <li key={p} className="flex items-start gap-2 text-xs sm:text-sm" style={{ color: '#475569' }}>
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color }} />
                      <span dangerouslySetInnerHTML={{ __html: p }} />
                    </li>
                  ))}
                </ul>
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold mt-5 transition-all"
                  style={{ color }}
                  onMouseEnter={e => e.currentTarget.style.gap = '10px'}
                  onMouseLeave={e => e.currentTarget.style.gap = '6px'}>
                  Discuss this with us <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Cloudsheer ───────────────────────────────────── */}
      <section className="py-10 sm:py-16" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag mx-auto mb-5">
              <Star className="w-3.5 h-3.5" /> Why Cloudsheer
            </div>
            <h2 className="section-title mb-4">
              Why Build With Us <span className="gradient-text">Over Anyone Else?</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {whyUs.map(({ title, desc }) => (
              <div key={title} className="glass-card p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#0176D3' }} />
                  <div>
                    <h4 className="font-bold mb-1.5" style={{ color: '#032D60' }}>{title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className="py-14 sm:py-10 sm:py-16 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#032D60 0%,#0A3F80 100%)' }}>
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="glow-dot w-[500px] h-[500px] top-[-100px] left-[50%] -translate-x-1/2"
          style={{ backgroundColor: '#0176D3', opacity: 0.25 }} />
        <div className="section-wrap relative z-10 text-center max-w-3xl mx-auto">
          <div className="tag-white mx-auto mb-6 inline-flex">
            <Zap className="w-3.5 h-3.5" /> Free Technical Discovery Call
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-white mb-5">
            Ready to Build Faster and{' '}
            <span className="gradient-text-gold">Spend Less on Custom Development?</span>
          </h2>
          <p className="text-lg mb-4" style={{ color: 'rgba(148,196,255,0.85)' }}>
            In 30 minutes we will assess your requirements, recommend the right architecture - Flow vs Apex, native vs AppExchange, build vs buy - and deliver a concrete build plan with timeline and cost estimate. No charge, no obligation.
          </p>
          <ul className="flex flex-col sm:flex-row gap-3 justify-center mb-10 text-sm"
            style={{ color: 'rgba(148,196,255,0.80)' }}>
            {['We come with a technical build plan', 'No sales pitch - just architecture', 'You leave with a clear next step'].map(i => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" style={{ color: '#38BDF8' }} /> {i}
              </li>
            ))}
          </ul>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
            className="btn-gold text-lg px-10 py-5 animate-bounce-x">
            Book My Free Discovery Call <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  )
}
