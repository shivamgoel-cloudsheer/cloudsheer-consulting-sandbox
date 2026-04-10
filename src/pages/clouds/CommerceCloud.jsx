import {
  ArrowRight, CheckCircle2, ShoppingCart, TrendingUp, Clock, DollarSign,
  Globe, Users, BarChart2, Star, ChevronRight, Package, CreditCard,
  RefreshCw, Zap, Search,
} from 'lucide-react'

const CAL_LINK = 'https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true'

const painPoints = [
  { pain: "Low conversion rates are leaving millions in unrealised revenue on the table", fix: "Einstein AI personalisation delivers up to 29% higher conversion rates through predictive product recommendations and tailored shopping journeys" },
  { pain: "Running separate B2B and B2C platforms doubles your total cost of ownership", fix: "A single unified commerce platform serves both buyer segments from one codebase - cutting platform costs by up to 50%" },
  { pain: "Cart abandonment above 70% means most of your traffic generates zero revenue", fix: "Optimised one-page checkout, persistent carts, and Einstein-driven recovery campaigns reduce abandonment by up to 32%" },
  { pain: "Your storefront crashes during peak traffic and cannot support global expansion", fix: "Cloud-native elastic infrastructure handles 500M+ page views per day across 50+ countries with 99.99% uptime SLA" },
  { pain: "Disconnected order, inventory, and customer data creates fulfilment errors and poor CX", fix: "Native integration with Sales Cloud, Service Cloud, and MuleSoft creates a single source of truth across every touchpoint" },
]

const outcomes = [
  { icon: TrendingUp,  value: '29%',     label: 'higher online conversion rates with AI-powered personalisation and predictive sort', color: '#0176D3' },
  { icon: DollarSign,  value: '25%',     label: 'increase in average order value through Einstein product recommendations and dynamic bundling', color: '#10B981' },
  { icon: ShoppingCart, value: '32%',     label: 'reduction in cart abandonment with optimised checkout and intelligent recovery workflows', color: '#F59E0B' },
  { icon: Clock,       value: '68%',     label: 'faster time-to-market for new storefronts compared to legacy commerce platforms', color: '#6366F1' },
  { icon: Globe,       value: '50+',     label: 'countries supported with multi-currency, multi-language, and localised tax compliance built in', color: '#06B6D4' },
  { icon: Users,       value: '$1B+',    label: 'in GMV processed annually by top Commerce Cloud merchants during peak shopping events', color: '#0176D3' },
]

const useCases = [
  {
    dept: 'B2C Storefronts',
    icon: ShoppingCart,
    color: '#0176D3',
    headline: 'High-converting storefronts built for speed',
    points: [
      'Composable or SFRA storefronts with sub-second page loads and Core Web Vitals optimisation',
      'Einstein AI recommendations that drive 7-15% of total site revenue through personalised product discovery',
      'Mobile-first PWA experiences - 72% of Commerce Cloud traffic now comes from mobile devices',
      'Built-in A/B testing, predictive sort, and conversion optimisation with no third-party tools required',
      'SEO-ready architecture with structured data, dynamic sitemaps, and pre-rendered meta tags',
    ],
  },
  {
    dept: 'B2B Commerce',
    icon: Package,
    color: '#10B981',
    headline: 'Self-service portals that accelerate revenue',
    points: [
      'Contract pricing, negotiated price books, and volume-tiered discounts per account hierarchy',
      'Bulk ordering, reorder lists, CSV upload, and punchout catalogue integration for procurement teams',
      'Role-based access with multi-level approval workflows and spending limits per buyer',
      'Real-time inventory availability, ATP checks, and estimated delivery dates at checkout',
      'Pre-built connectors for SAP, NetSuite, and major ERP/WMS systems via MuleSoft',
    ],
  },
  {
    dept: 'Order Management',
    icon: RefreshCw,
    color: '#F59E0B',
    headline: 'Fulfil from anywhere, faster',
    points: [
      'Unified order lifecycle spanning checkout, payment capture, fulfilment, and returns',
      'Distributed order management that routes orders to the optimal location - warehouse, store, or 3PL',
      'Ship-from-store, BOPIS, and curbside pickup orchestration that increases store revenue by up to 25%',
      'Automated returns, exchanges, and instant refund processing with configurable business rules',
      'Real-time order tracking and proactive notifications that reduce WISMO calls by up to 30%',
    ],
  },
  {
    dept: 'AI & Commerce Intelligence',
    icon: Zap,
    color: '#6366F1',
    headline: 'Let AI maximise every transaction',
    points: [
      'Einstein GPT-powered product recommendations on every page, email, and post-purchase touchpoint',
      'Predictive sort that reorders category pages per shopper - increasing click-through by up to 9.6%',
      'AI-powered search with natural language understanding, typo tolerance, and zero-result recovery',
      'Automated merchandising rules that optimise for margin, sell-through velocity, and inventory levels',
      'Commerce Insights dashboards with revenue attribution, funnel analysis, and basket trend detection',
    ],
  },
]

const whyUs = [
  { title: 'Commerce Cloud Specialists',  desc: "We implement and optimise Salesforce Commerce Cloud every day - B2C storefronts, B2B portals, headless composable builds, and Salesforce Order Management. That singular focus means deeper expertise and fewer costly mistakes." },
  { title: "Proven Multi-Cloud Delivery",  desc: "Our team has delivered international multi-site rollouts, complex B2B self-service portals, and high-traffic D2C storefronts. We integrate Commerce Cloud with Sales, Service, and Marketing Cloud for a unified customer experience." },
  { title: 'Fast Time to Revenue',         desc: "Most Commerce Cloud MVPs launch within 8-12 weeks. We prioritise revenue-generating features first, validate with real customer data, and iterate - so you start earning before competitors finish their discovery phase." },
  { title: 'No Commitment to Start',       desc: "Book a free 30-minute commerce scoping call. We will audit your current setup, identify the highest-impact revenue opportunities, and deliver a clear implementation roadmap - completely free, no strings attached." },
]

export default function CommerceCloudPage() {
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
              <ShoppingCart className="w-3.5 h-3.5" /> Salesforce Commerce Cloud
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 animate-fade-up">
              Convert More Buyers, Grow AOV, and{' '}
              <span className="gradient-text-gold">Scale Without Limits</span>
            </h1>
            <p className="text-xl leading-relaxed mb-10 animate-fade-up-1"
              style={{ color: 'rgba(148,196,255,0.90)' }}>
              Salesforce Commerce Cloud powers the world's leading B2B and B2C buying experiences - with AI-driven personalisation that lifts conversion rates by up to 29%, unified order management, and native CRM integration. Cloudsheer builds commerce experiences that generate revenue from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-2">
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
                className="btn-gold text-base px-8 py-4">
                Get a Free Commerce Strategy Session <ArrowRight className="w-5 h-5" />
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
              The Revenue Problems <span className="gradient-text">Commerce Cloud Solves</span>
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
                  <p className="text-sm font-semibold" style={{ color: '#032D60' }}>{fix}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
              className="btn-primary inline-flex">
              Talk To Us About Your Commerce Challenges <ArrowRight className="w-4 h-4" />
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
            <div className="tag-white mx-auto mb-5">Proven Results</div>
            <h2 className="section-title-white mb-4">
              Commerce Cloud Delivers Measurable Revenue Impact
            </h2>
            <p className="section-sub-white">
              Real outcomes from businesses running Salesforce Commerce Cloud - backed by Forrester research and Salesforce Shopping Index data.
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
              Get Results Like These For Your Store <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Use Cases / Capabilities ─────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="tag mx-auto mb-5">What We Build</div>
            <h2 className="section-title mb-4">
              Commerce Capabilities That <span className="gradient-text">Drive Growth</span>
            </h2>
            <p className="section-sub">
              From storefront launch to global multi-site rollout - we build commerce experiences that convert, scale, and integrate across your entire Salesforce ecosystem.
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
                      {p}
                    </li>
                  ))}
                </ul>
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold mt-5 transition-all"
                  style={{ color }}
                  onMouseEnter={e => e.currentTarget.style.gap = '10px'}
                  onMouseLeave={e => e.currentTarget.style.gap = '6px'}>
                  Discuss this for your business <ChevronRight className="w-4 h-4" />
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
              Why Work With Us <span className="gradient-text">For Commerce Cloud?</span>
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
      <section className="py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#032D60 0%,#0A3F80 100%)' }}>
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="glow-dot w-[500px] h-[500px] top-[-100px] left-[50%] -translate-x-1/2"
          style={{ backgroundColor: '#0176D3', opacity: 0.25 }} />
        <div className="section-wrap relative z-10 text-center max-w-3xl mx-auto">
          <div className="tag-white mx-auto mb-6 inline-flex">
            <ShoppingCart className="w-3.5 h-3.5" /> Free Commerce Scoping Call
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-5">
            Ready to Launch or Scale Your<br />
            <span className="gradient-text-gold">Commerce Revenue Engine?</span>
          </h2>
          <p className="text-lg mb-4" style={{ color: 'rgba(148,196,255,0.85)' }}>
            In 30 minutes we will audit your current commerce setup, identify the highest-impact revenue opportunities, and deliver a clear implementation roadmap - at no cost and no commitment.
          </p>
          <ul className="flex flex-col sm:flex-row gap-3 justify-center mb-10 text-sm"
            style={{ color: 'rgba(148,196,255,0.80)' }}>
            {['We come with a commerce plan', 'No sales pitch - just strategy', 'You leave with a clear roadmap'].map(i => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" style={{ color: '#38BDF8' }} /> {i}
              </li>
            ))}
          </ul>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
            className="btn-gold text-lg px-10 py-5 animate-bounce-x">
            Book My Free Commerce Strategy Call <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  )
}
