import {
  ArrowRight, CheckCircle2, Headphones, MessageSquare, BookOpen, Phone,
  Zap, BarChart2, Users, Shield, Clock, DollarSign, TrendingUp, Star,
  ChevronRight, Globe,
} from 'lucide-react'

const CAL_LINK = 'https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true'

const painPoints = [
  { pain: "Agents waste 25% of their day switching between disconnected tools to find customer context", fix: "<strong>Service Console</strong> surfaces channels, cases, and AI recommendations in one view" },
  { pain: "Customers wait hours for responses and repeat themselves every time they are transferred", fix: "<strong>Omni-Channel Routing</strong> delivers cases to the right agent with full history" },
  { pain: "Tier-1 tickets consume 60% of agent capacity on password resets, order tracking, and FAQs", fix: "<strong>Agentforce Service Agent</strong> resolves routine cases autonomously around the clock" },
  { pain: "SLA breaches go undetected until an angry customer escalates to leadership", fix: "<strong>Entitlement Management</strong> flags at-risk cases and auto-triggers escalation" },
  { pain: "Your knowledge base has thousands of articles but agents still cannot find the right answer quickly", fix: "<strong>Knowledge Base</strong> with Einstein surfaces the best article per case context" },
]

const outcomes = [
  { icon: Clock,      value: '30%',       label: 'faster case resolution reported by Service Cloud customers (Salesforce Customer Success Survey)', color: '#10B981' },
  { icon: DollarSign, value: '27%',       label: 'reduction in support costs driven by agent productivity gains and self-service deflection (Forrester TEI Study)', color: '#F59E0B' },
  { icon: Headphones, value: '32%',       label: 'increase in first-contact resolution with unified agent workspace and AI-recommended actions', color: '#0176D3' },
  { icon: TrendingUp, value: '30%+',      label: 'improvement in customer satisfaction (CSAT) scores after deploying omni-channel service operations', color: '#6366F1' },
  { icon: Users,      value: '150K+',     label: 'companies worldwide trust Service Cloud to run their customer support operations', color: '#06B6D4' },
  { icon: Globe,      value: '#1',        label: 'CRM platform for customer service - named a Leader in the Gartner Magic Quadrant 18 years running', color: '#0176D3' },
]

const useCases = [
  {
    dept: 'Omni-Channel Support',
    icon: MessageSquare,
    color: '#0176D3',
    headline: 'Every channel. One workspace. Zero context lost.',
    points: [
      '<strong>Service Console</strong> for email, chat, phone, SMS',
      '<strong>Omni-Channel Routing</strong> to the best-qualified agent',
      '<strong>Customer timeline</strong> with purchases, cases, sentiment',
      '<strong>Swarming</strong> pulls in experts with full context preserved',
      '<strong>Incident Management</strong> with real-time queue monitoring',
    ],
  },
  {
    dept: 'AI-Powered Self-Service',
    icon: Zap,
    color: '#10B981',
    headline: 'Resolve cases before they ever reach your team.',
    points: [
      '<strong>Agentforce Service Agent</strong> resolves Tier-1 and Tier-2 cases',
      '<strong>Einstein Reply Recommendations</strong> speed up agent responses',
      '<strong>Knowledge Base</strong> powers self-service portals and bots',
      '<strong>Einstein Case Classification</strong> routes and categorises automatically',
      '<strong>Human-in-the-loop</strong> escalation with full context preserved',
    ],
  },
  {
    dept: 'Field Service Management',
    icon: Phone,
    color: '#F59E0B',
    headline: 'Dispatch the right technician. First time. Every time.',
    points: [
      '<strong>Field Service Lightning</strong> dispatches by proximity and skills',
      '<strong>Visual Remote Assistant</strong> enables remote video diagnostics',
      '<strong>Mobile app</strong> with offline access for technicians',
      '<strong>Auto-created work orders</strong> from cases directly',
      '<strong>Inventory Management</strong> ensures parts availability on-site',
    ],
  },
  {
    dept: 'Service Analytics & SLAs',
    icon: BarChart2,
    color: '#6366F1',
    headline: 'See everything. Fix problems before customers notice.',
    points: [
      '<strong>Pre-built dashboards</strong> for CSAT, SLA, agent performance',
      '<strong>Entitlement Management</strong> with automatic breach alerts',
      '<strong>Einstein Case Classification</strong> flags at-risk escalations',
      '<strong>Omni-Channel Routing</strong> analytics per channel and queue',
      '<strong>Tableau integration</strong> for executive-ready service insights',
    ],
  },
]

const whyUs = [
  { title: 'Service Cloud Specialists',     desc: "We focus deeply on Service Cloud - from straightforward case management rollouts to complex Omni-Channel Routing with Agentforce Service Agent, Field Service Lightning, and Entitlement Management." },
  { title: "Designed Around Your SLAs",      desc: "Every implementation maps to your specific support tiers, escalation rules, entitlements, and operating hours. No cookie-cutter templates - a system built around how your team actually delivers support." },
  { title: 'Fast Time to Value',            desc: "Most Service Cloud deployments go live within 6-8 weeks. We configure in sandbox, test with real-world scenarios, train your team, and get you to production without months of discovery workshops." },
  { title: 'No Commitment to Start',        desc: "Book a free 30-minute scoping call. We will review your current support operation, identify the highest-impact quick wins, and give you a clear deployment plan - completely free, zero obligation." },
]

export default function ServiceCloudPage() {
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
              <Headphones className="w-3.5 h-3.5" /> Salesforce Service Cloud
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4 sm:mb-6 animate-fade-up text-center md:text-left">
              Resolve Cases 30% Faster and{' '}
              <span className="gradient-text-gold">Cut Support Costs by 27%</span>
            </h1>
            <p className="text-xl leading-relaxed mb-10 animate-fade-up-1"
              style={{ color: 'rgba(148,196,255,0.90)' }}>
              Service Cloud brings every support channel, AI-powered automation, and customer insight into one workspace - so your team resolves issues faster, deflects routine tickets automatically, and delivers the experience that turns frustrated customers into loyal advocates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-2">
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
                className="btn-gold text-base px-8 py-4">
                Get a Free Service Cloud Assessment <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm mt-5 animate-fade-up-3"
              style={{ color: 'rgba(148,196,255,0.60)' }}>
              Free 30-min scoping call · No commitment · We come with a plan
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
              The Support Problems <span className="gradient-text">Service Cloud Eliminates</span>
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
              Tell Us About Your Support Challenges <ArrowRight className="w-4 h-4" />
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
            <div className="tag-white mx-auto mb-5">Proven Results</div>
            <h2 className="section-title-white mb-4">
              Measurable Outcomes From Real Service Cloud Deployments
            </h2>
            <p className="section-sub-white">
              These metrics come from Salesforce customer success surveys, Forrester Total Economic Impact studies, and Gartner analyst research.
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
              Get Results Like These For Your Team <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Use Cases / Capabilities ─────────────────────────── */}
      <section className="py-14 sm:py-10 sm:py-16 bg-white">
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag mx-auto mb-5">What You Get</div>
            <h2 className="section-title mb-4">
              A Complete Support Operation -{' '}
              <span className="gradient-text">Built For Your Business</span>
            </h2>
            <p className="section-sub">
              Service Cloud is not just a ticketing system. It is the AI-powered platform that the world's best support teams use to deliver fast, personalized, and cost-efficient service at scale.
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
                  See how this works for you <ChevronRight className="w-4 h-4" />
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
              Why Work With Us <span className="gradient-text">For Service Cloud?</span>
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
            <Headphones className="w-3.5 h-3.5" /> Free Scoping Call
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-white mb-5">
            Ready to Deliver Support That<br />
            <span className="gradient-text-gold">Drives Loyalty and Cuts Costs?</span>
          </h2>
          <p className="text-lg mb-4" style={{ color: 'rgba(148,196,255,0.85)' }}>
            In 30 minutes we will audit your current support operation, identify where you are losing time and money, and map out a Service Cloud deployment plan that delivers measurable ROI - at no cost and no obligation.
          </p>
          <ul className="flex flex-col sm:flex-row gap-3 justify-center mb-10 text-sm"
            style={{ color: 'rgba(148,196,255,0.80)' }}>
            {['We audit your current setup first', 'No sales pitch - just a plan', 'You leave with clear next steps'].map(i => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" style={{ color: '#38BDF8' }} /> {i}
              </li>
            ))}
          </ul>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
            className="btn-gold text-lg px-10 py-5 animate-bounce-x">
            Book My Free Service Cloud Assessment <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  )
}
