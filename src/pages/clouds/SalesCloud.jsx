import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle2, TrendingUp, Clock, DollarSign, Zap,
  Target, Users, BarChart2, Star, ChevronRight, Phone, Mail, Calendar,
} from 'lucide-react'

const CAL_LINK = 'https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true'

const painPoints = [
  { pain: "Reps waste 72% of their week on non-selling activities", fix: "<strong>Einstein Activity Capture</strong> auto-logs calls, emails, and meetings automatically" },
  { pain: "Forecast calls are guesswork and leadership loses trust in the pipeline", fix: "<strong>Forecast Management</strong> delivers 42% more accurate pipeline predictions" },
  { pain: "Leads go cold because follow-up is slow or inconsistent", fix: "<strong>Sales Engagement</strong> cadences respond in minutes, converting 38% more leads" },
  { pain: "Stale deals clog the pipeline and mask the real revenue picture", fix: "<strong>Pipeline Inspection</strong> and Einstein Opportunity Scoring flag risks early" },
  { pain: "New hires take 6+ months to ramp and miss quota their first year", fix: "<strong>Buyer Assistant</strong> guides new reps to productivity in weeks" },
  { pain: "Quoting bottlenecks stall momentum on deals that are ready to close", fix: "<strong>CPQ (Configure Price Quote)</strong> generates approved proposals in minutes" },
]

const outcomes = [
  { icon: TrendingUp,  value: '29%',    label: "average revenue increase reported by Sales Cloud customers (Salesforce Customer Success Survey)", color: '#0176D3' },
  { icon: Target,      value: '44%',    label: "higher win rates with AI-guided opportunity management and Einstein scoring", color: '#F59E0B' },
  { icon: Users,       value: '34%',    label: "boost in sales rep productivity by automating admin and surfacing next best actions", color: '#6366F1' },
  { icon: BarChart2,   value: '42%',    label: "improvement in forecast accuracy with Einstein AI and Revenue Intelligence", color: '#06B6D4' },
  { icon: Clock,       value: '30%',    label: "faster deal cycles through automated follow-ups, guided selling, and CPQ", color: '#10B981' },
  { icon: DollarSign,  value: '5×',     label: "average ROI within three years of deployment (Forrester Total Economic Impact)", color: '#0176D3' },
]

const capabilities = [
  {
    area: 'Pipeline & Opportunity Management',
    icon: Target,
    color: '#0176D3',
    headline: 'Turn pipeline visibility into predictable revenue',
    points: [
      '<strong>Pipeline Inspection</strong> surfaces deal health at a glance',
      '<strong>Einstein Opportunity Scoring</strong> ranks deals by likelihood',
      '<strong>Revenue Intelligence</strong> flags stalled opportunities and risks',
      '<strong>Einstein Activity Capture</strong> shows all signals in one view',
      '<strong>Kanban pipeline</strong> with drag-and-drop stage progression',
    ],
  },
  {
    area: 'Sales AI & Automation',
    icon: Zap,
    color: '#10B981',
    headline: 'Automate the busywork - multiply rep selling time',
    points: [
      '<strong>Einstein Activity Capture</strong> syncs emails and calendar automatically',
      '<strong>Einstein Lead Scoring</strong> identifies highest-converting leads',
      '<strong>Sales Engagement</strong> automates multi-step outreach sequences',
      '<strong>Agentforce SDR Agent</strong> qualifies leads and books meetings',
      '<strong>Einstein Conversation Insights</strong> summarizes calls automatically',
    ],
  },
  {
    area: 'Forecasting & Revenue Intelligence',
    icon: BarChart2,
    color: '#F59E0B',
    headline: 'Commit your number with 42% more accuracy',
    points: [
      '<strong>Forecast Management</strong> with AI-powered pipeline predictions',
      '<strong>Revenue Intelligence</strong> dashboards for velocity and conversion',
      '<strong>Pipeline Inspection</strong> surfaces sandbagging and coverage gaps',
      '<strong>Einstein Lead Scoring</strong> prioritises high-converting prospects',
      '<strong>Custom roll-up reports</strong> by territory, product, segment',
    ],
  },
  {
    area: 'CPQ & Quote-to-Cash',
    icon: DollarSign,
    color: '#6366F1',
    headline: 'Eliminate quote delays that kill deal momentum',
    points: [
      '<strong>CPQ</strong> generates branded quotes in minutes',
      '<strong>Guided selling rules</strong> ensure correct product and pricing',
      '<strong>Automated approvals</strong> and pricing guardrails built in',
      '<strong>One-click quote-to-contract</strong> with e-signature integration',
      '<strong>Complex pricing support</strong> for subscriptions and renewals',
    ],
  },
]

const process = [
  { num: '01', title: 'Sales Process Discovery', desc: "We interview reps, managers, and leadership to map your actual sales motion - stages, qualification criteria, handoff rules, and the metrics that matter - before configuring a single field." },
  { num: '02', title: 'CRM Architecture & Build', desc: "Objects, fields, page layouts, validation rules, automation flows, and permission sets designed around your process. Every configuration decision ties back to a revenue outcome." },
  { num: '03', title: 'Data Migration & Integration', desc: "Clean migration of your existing CRM data with deduplication and enrichment. We connect email, calendar, marketing automation, ERP, and any tools your team relies on." },
  { num: '04', title: 'Training, Adoption & Hypercare', desc: "Role-based training for reps and managers, adoption dashboards to track usage, and a dedicated hypercare window to resolve issues fast and lock in habits." },
]

const whyUs = [
  { title: 'We Engineer Around Your Revenue Process', desc: "We do not install a generic Sales Cloud template. We study how your team qualifies, progresses, and closes deals - then build Salesforce to accelerate that exact motion." },
  { title: 'Agentforce AI Is Wired In from Day One', desc: "Every Sales Cloud we deliver is AI-ready. Agentforce SDR agents, Einstein scoring, and automated cadences are live at launch - not a future roadmap item." },
  { title: 'Clean Data That Reps Actually Trust', desc: "Bad data is the number one CRM adoption killer. We migrate, deduplicate, and enrich your records so reps trust what they see from the first login." },
  { title: "We Stay Until Your Numbers Move", desc: "We do not disappear after go-live. Hypercare support, adoption tracking, and quarterly optimization reviews ensure Sales Cloud keeps delivering results as your team grows." },
]

export default function SalesCloudPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#032D60 0%,#0A3F80 55%,#0176D3 100%)' }}>
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="glow-dot w-[500px] h-[500px] top-[-150px] right-[-80px]"
          style={{ backgroundColor: '#38BDF8', opacity: 0.14 }} />

        <div className="section-wrap relative z-10 max-w-3xl mx-auto text-center">
          <div className="tag-white mx-auto mb-6 inline-flex">
            <TrendingUp className="w-3.5 h-3.5" /> Sales Cloud by Salesforce
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4 sm:mb-6 animate-fade-up text-center md:text-left">
            29% More Revenue.<br />
            <span className="gradient-text-gold">44% Higher Win Rates.</span>
          </h1>
          <p className="text-xl leading-relaxed mb-10 animate-fade-up-1"
            style={{ color: 'rgba(148,196,255,0.90)' }}>
            Salesforce Sales Cloud combines AI-powered automation, real-time pipeline intelligence, and guided selling to help your team close more deals, faster - with less manual effort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-2">
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
              className="btn-gold text-base px-8 py-4">
              See What Sales Cloud Can Do for Your Revenue <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm mt-5 animate-fade-up-3"
            style={{ color: 'rgba(148,196,255,0.60)' }}>
            Free 30-min scoping call · No commitment · We come with a plan
          </p>
        </div>
      </section>

      {/* ── Pain Points ──────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag mx-auto mb-5">Does This Sound Like Your Team?</div>
            <h2 className="section-title mb-4">
              Revenue Problems <span className="gradient-text">We Eliminate</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {painPoints.map(({ pain, fix }) => (
              <div key={pain} className="glass-card p-5 grid sm:grid-cols-2 gap-4 items-center group hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: 'rgba(239,68,68,0.10)', color: '#EF4444' }}>
                    <span className="text-xs font-bold">✕</span>
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
              Fix These Revenue Leaks Now <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Proof ────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#032D60,#0A3F80)' }}>
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="section-wrap relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag-white mx-auto mb-5">Proven Business Outcomes</div>
            <h2 className="section-title-white mb-4">The Numbers Behind Sales Cloud</h2>
            <p className="section-sub-white">
              Results reported by Sales Cloud customers across Salesforce success surveys and independent analyst studies.
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
              Get These Results for Your Team <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Capabilities ─────────────────────────────────────── */}
      <section className="py-14 sm:py-10 sm:py-16 bg-white">
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag mx-auto mb-5">What You Get</div>
            <h2 className="section-title mb-4">
              A Complete Revenue Engine <span className="gradient-text">Not Just a CRM</span>
            </h2>
            <p className="section-sub">
              Sales Cloud combines pipeline management, AI automation, revenue intelligence, and CPQ into one platform - every feature designed to drive measurable revenue outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map(({ area, icon: Icon, color, headline, points }) => (
              <div key={area} className="glass-card p-5 sm:p-7 flex flex-col group hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${color}15`, color }}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color }}>{area}</p>
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
                  See how this drives revenue for you <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Implement ─────────────────────────────────── */}
      <section className="py-10 sm:py-16" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag mx-auto mb-5">Our Process</div>
            <h2 className="section-title mb-4">
              Live in Weeks, <span className="gradient-text">Not Months</span>
            </h2>
            <p className="section-sub">
              A structured, four-step delivery that gets your team selling on Salesforce fast - without the chaos of a typical CRM project.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map(({ num, title, desc }, i) => (
              <div key={num} className="glass-card p-6 relative">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black text-white mb-4"
                  style={{ backgroundColor: '#0176D3' }}>
                  {num}
                </div>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-11 right-0 w-5 h-0.5"
                    style={{ backgroundColor: 'rgba(1,118,211,0.20)' }} />
                )}
                <h4 className="font-bold mb-2" style={{ color: '#032D60' }}>{title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Cloudsheer ───────────────────────────────────── */}
      <section className="py-14 sm:py-10 sm:py-16 bg-white">
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag mx-auto mb-5">
              <Star className="w-3.5 h-3.5" /> Why Cloudsheer
            </div>
            <h2 className="section-title mb-4">
              Why Work With Us <span className="gradient-text">Over Anyone Else?</span>
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
            <TrendingUp className="w-3.5 h-3.5" /> Free Sales Cloud Scoping Call
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-white mb-5">
            Ready to Turn Your CRM Into a<br />
            <span className="gradient-text-gold">Revenue Growth Engine?</span>
          </h2>
          <p className="text-lg mb-4" style={{ color: 'rgba(148,196,255,0.85)' }}>
            In 30 minutes we will audit your current sales process, show you exactly where Sales Cloud and Agentforce AI will move the needle on revenue, and hand you a clear implementation roadmap - at no cost.
          </p>
          <ul className="flex flex-col sm:flex-row gap-3 justify-center mb-10 text-sm"
            style={{ color: 'rgba(148,196,255,0.80)' }}>
            {['We audit your current pipeline', 'You get a revenue-focused roadmap', 'No obligation whatsoever'].map(i => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" style={{ color: '#38BDF8' }} /> {i}
              </li>
            ))}
          </ul>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
            className="btn-gold text-lg px-10 py-5 animate-bounce-x">
            Book My Free Sales Cloud Call <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  )
}
