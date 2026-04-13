import {
  ArrowRight, CheckCircle2, Globe, Users, Shield, Zap,
  MessageSquare, BarChart2, Layout, Star, ChevronRight,
  Headphones, Clock, TrendingUp, DollarSign,
} from 'lucide-react'

const CAL_LINK = 'https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true'

const painPoints = [
  { pain: "Customers flood your support team with questions they could answer themselves", fix: "<strong>Self-service portals</strong> with AI-powered search deflect 40-60% of inbound tickets" },
  { pain: "Partners operate blind - no deal visibility, no shared pipeline, no collaboration tools", fix: "<strong>Partner community</strong> with deal registration, lead distribution, and pipeline dashboards" },
  { pain: "Onboarding new customers or partners is manual, slow, and expensive", fix: "<strong>Guided digital onboarding</strong> cuts onboarding time by 50% and eliminates manual handoffs" },
  { pain: "Your portal is disconnected from Salesforce - data is stale, syncs break, users lose trust", fix: "<strong>Native Salesforce integration</strong> - accounts, cases, and knowledge update in real time" },
  { pain: "Your digital experience looks generic and doesn't reflect your brand", fix: "<strong>Pixel-perfect branded portals</strong> with your domain and responsive layouts on every device" },
]

const outcomes = [
  { icon: Headphones, value: '48%',      label: 'average reduction in support case volume through self-service portals and knowledge deflection', color: '#0176D3' },
  { icon: TrendingUp, value: '3.4x',     label: 'ROI reported in Forrester Total Economic Impact studies of Experience Cloud deployments', color: '#10B981' },
  { icon: Clock,      value: '40%',      label: 'faster case resolution when customers use portal-based case tracking with knowledge articles', color: '#F59E0B' },
  { icon: DollarSign, value: '50%',      label: 'reduction in partner onboarding costs through guided digital journeys and automated provisioning', color: '#6366F1' },
  { icon: Users,      value: '88%',      label: 'of customers say the experience a company provides is as important as its products or services', color: '#06B6D4' },
  { icon: BarChart2,  value: '2.6x',     label: 'higher partner engagement rates when portal includes deal registration, MDF, and co-selling tools', color: '#0176D3' },
]

const useCases = [
  {
    dept: 'Customer Self-Service',
    icon: Globe,
    color: '#0176D3',
    headline: "Deflect tickets and delight customers at the same time",
    points: [
      '<strong>Branded portals</strong> for account views, order tracking, billing, and subscriptions',
      '<strong>Case creation</strong> and real-time status tracking - no phone calls required',
      '<strong>AI-powered knowledge base</strong> surfaces answers before a case is filed',
      '<strong>Agentforce AI chat</strong> resolves common requests instantly without human intervention',
      '<strong>Fully responsive</strong> across desktop, tablet, and mobile with consistent branding',
    ],
  },
  {
    dept: 'Partner Communities',
    icon: Users,
    color: '#10B981',
    headline: "Accelerate channel revenue with a portal partners actually use",
    points: [
      '<strong>Deal registration</strong> and shared pipeline visibility that drives co-selling',
      '<strong>MDF claims</strong> and co-marketing asset libraries in one place',
      '<strong>Automated onboarding</strong> with guided learning paths, certifications, and enablement',
      '<strong>Role-based access</strong> by partner tier - each level sees the right content and data',
      '<strong>Performance dashboards</strong> and leaderboards that motivate and retain top partners',
    ],
  },
  {
    dept: 'Employee Experience',
    icon: Shield,
    color: '#F59E0B',
    headline: "Replace your legacy intranet with a connected digital hub",
    points: [
      '<strong>Centralized hub</strong> for HR policies, IT requests, benefits, and company news',
      '<strong>Guided onboarding</strong> walks new hires from day one to full productivity',
      '<strong>Social feeds</strong> and discussion forums that drive team engagement',
      '<strong>Single sign-on</strong> - one login for Salesforce, portal, and connected apps',
      '<strong>Embedded AI agents</strong> answer common HR, IT, and policy questions instantly',
    ],
  },
  {
    dept: 'B2B Client Portals',
    icon: Layout,
    color: '#6366F1',
    headline: "Give every client a white-glove digital experience at scale",
    points: [
      '<strong>Project dashboards</strong> with milestone tracking and real-time progress updates',
      '<strong>Invoice viewing</strong>, payment history, contracts, and secure document sharing',
      '<strong>Direct messaging</strong> with your delivery team - conversations stay in context',
      '<strong>Granular role-based access</strong> so each client sees only their own data',
      '<strong>Fully branded</strong> to your business - your domain and your design system',
    ],
  },
]

const whyUs = [
  { title: 'Portal Specialists, Not Generalists',  desc: "We have delivered Experience Cloud portals across industries - financial services, manufacturing, tech, and professional services. Every portal we build is designed for adoption, not just deployment." },
  { title: 'CRM-Native Architecture',              desc: "Every portal connects directly to your Salesforce data - cases, accounts, opportunities, knowledge articles, and custom objects. No middleware, no sync delays, no data discrepancies." },
  { title: 'Live in 6-8 Weeks',                    desc: "We follow a rapid delivery methodology that gets your portal into users' hands fast. Design, build, test, and launch - without months of requirements gathering or scope creep." },
  { title: 'Free Strategy Session to Start',        desc: "Book a 30-minute scoping call. We will map your portal requirements, sketch the architecture, identify quick wins, and give you a deployment plan - completely free, no commitment." },
]

export default function ExperienceCloudPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#032D60 0%,#0A3F80 55%,#0176D3 100%)' }}>
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="glow-dot w-[500px] h-[500px] top-[-150px] right-[-80px]"
          style={{ backgroundColor: '#38BDF8', opacity: 0.15 }} />

        <div className="section-wrap relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="tag-white mx-auto mb-6 inline-flex">
              <Globe className="w-3.5 h-3.5" /> Experience Cloud
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6 animate-fade-up">
              Turn Your Portal Into a{' '}
              <span className="gradient-text-gold">Revenue and Retention Engine</span>
            </h1>
            <p className="text-xl leading-relaxed mb-10 animate-fade-up-1"
              style={{ color: 'rgba(148,196,255,0.90)' }}>
              Companies using Salesforce Experience Cloud deflect up to 48% of support tickets, cut partner onboarding costs in half, and deliver digital experiences that drive loyalty. Cloudsheer builds the portals that make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-2">
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
                className="btn-gold text-base px-8 py-4">
                Get a Free Portal Strategy Call <ArrowRight className="w-5 h-5" />
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
      <section className="py-20 bg-white">
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="tag mx-auto mb-5">Sound Familiar?</div>
            <h2 className="section-title mb-4">
              The Problems <span className="gradient-text">Experience Cloud Solves</span>
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
              Tell Us About Your Portal Needs <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Proof / Results ──────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#032D60,#0A3F80)' }}>
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="section-wrap relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="tag-white mx-auto mb-5">Real Results</div>
            <h2 className="section-title-white mb-4">
              Portals That Deliver Measurable Business Outcomes
            </h2>
            <p className="section-sub-white">
              These are the outcomes organizations achieve when they replace disconnected tools with a CRM-native Experience Cloud portal - backed by Forrester research and Salesforce customer data.
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
              Get Results Like These For Your Business <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Use Cases / Capabilities ─────────────────────────── */}
      <section className="py-14 sm:py-24 bg-white">
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="tag mx-auto mb-5">What You Can Build</div>
            <h2 className="section-title mb-4">
              Portals For Every <span className="gradient-text">Audience and Use Case</span>
            </h2>
            <p className="section-sub">
              Experience Cloud is not a one-size-fits-all tool. Cloudsheer configures it to match exactly what your customers, partners, or employees need - with the data, workflows, and branding that drive adoption.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map(({ dept, icon: Icon, color, headline, points }) => (
              <div key={dept} className="glass-card p-7 group hover:-translate-y-1 transition-all duration-300">
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
                <ul className="space-y-2.5">
                  {points.map(p => (
                    <li key={p} className="flex items-start gap-2.5 text-sm" style={{ color: '#475569' }}>
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
      <section className="py-24" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="tag mx-auto mb-5">
              <Star className="w-3.5 h-3.5" /> Why Cloudsheer
            </div>
            <h2 className="section-title mb-4">
              Why Build Your Portal <span className="gradient-text">With Us?</span>
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
      <section className="py-14 sm:py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#032D60 0%,#0A3F80 100%)' }}>
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="glow-dot w-[500px] h-[500px] top-[-100px] left-[50%] -translate-x-1/2"
          style={{ backgroundColor: '#0176D3', opacity: 0.25 }} />
        <div className="section-wrap relative z-10 text-center max-w-3xl mx-auto">
          <div className="tag-white mx-auto mb-6 inline-flex">
            <Globe className="w-3.5 h-3.5" /> Free Scoping Call
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-5">
            Ready to Launch a Portal That<br />
            <span className="gradient-text-gold">Drives Revenue and Reduces Cost?</span>
          </h2>
          <p className="text-lg mb-4" style={{ color: 'rgba(148,196,255,0.85)' }}>
            In 30 minutes we will map your portal requirements, sketch the architecture, identify the highest-impact use cases, and give you a clear deployment plan - at no cost, no commitment.
          </p>
          <ul className="flex flex-col sm:flex-row gap-3 justify-center mb-10 text-sm"
            style={{ color: 'rgba(148,196,255,0.80)' }}>
            {["Portal designed for adoption, not just deployment", "No sales pitch - just a clear plan", "You leave with architecture, timeline, and ROI estimate"].map(i => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" style={{ color: '#38BDF8' }} /> {i}
              </li>
            ))}
          </ul>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
            className="btn-gold text-lg px-10 py-5 animate-bounce-x">
            Book My Free Portal Strategy Call <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  )
}
