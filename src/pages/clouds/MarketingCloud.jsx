import {
  ArrowRight, CheckCircle2, Zap, TrendingUp, Clock, DollarSign,
  Mail, Users, BarChart2, Target, Star, ChevronRight, Megaphone,
  RefreshCw, Globe, MousePointerClick,
} from 'lucide-react'

const CAL_LINK = 'https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true'

const painPoints = [
  { pain: "Batch-and-blast emails are tanking your deliverability and engagement", fix: "<strong>Einstein Send Time Optimization</strong> personalises delivery per subscriber" },
  { pain: "Marketing can't prove its impact on pipeline or revenue", fix: "<strong>Marketing Cloud Intelligence</strong> ties every campaign to pipeline and revenue" },
  { pain: "Leads sit untouched because nurture sequences are manual or missing", fix: "<strong>Journey Builder</strong> triggers multi-channel sequences from any CRM event" },
  { pain: "Customer data is siloed across email tools, CRM, and ad platforms", fix: "<strong>Data Cloud segments</strong> unify every interaction into one real-time profile" },
  { pain: "Your team wastes hours building emails and pulling lists manually", fix: "<strong>Content Builder</strong> and Email Studio templates cut build time by 50%+" },
]

const outcomes = [
  { icon: DollarSign,        value: '$36:$1', label: 'average email marketing ROI - the highest of any digital channel (Litmus, 2024)', color: '#0176D3' },
  { icon: TrendingUp,        value: '25%',    label: 'average increase in marketing ROI reported by Marketing Cloud customers (Salesforce Customer Success Survey)', color: '#10B981' },
  { icon: MousePointerClick, value: '41%',    label: 'higher click-through rates when using Einstein Send Time Optimization vs. manual sends', color: '#F59E0B' },
  { icon: Mail,              value: '26%',    label: 'lift in email revenue from dynamic, personalized content powered by CRM data (Salesforce State of Marketing)', color: '#6366F1' },
  { icon: Users,             value: '23%',    label: "higher customer lifetime value for brands running personalized lifecycle journeys (McKinsey Next in Personalization)", color: '#06B6D4' },
  { icon: Clock,             value: '50%',    label: 'reduction in campaign build time with Journey Builder templates and reusable content blocks', color: '#0176D3' },
]

const useCases = [
  {
    dept: 'Email & Journey Automation',
    icon: RefreshCw,
    color: '#0176D3',
    headline: 'Automated journeys that nurture, convert, and retain',
    points: [
      '<strong>Journey Builder</strong> orchestrates multi-channel CRM-triggered flows',
      '<strong>Email Studio</strong> templates for welcome, cart, win-back',
      '<strong>Content Builder</strong> swaps dynamic blocks per subscriber',
      '<strong>Einstein Send Time Optimization</strong> per contact delivery',
      '<strong>Marketing Cloud Engagement</strong> testing at scale',
    ],
  },
  {
    dept: 'Audience Segmentation & Data Cloud',
    icon: Target,
    color: '#10B981',
    headline: 'One unified profile. Limitless segmentation.',
    points: [
      '<strong>Data Cloud segments</strong> unify all data into one profile',
      '<strong>Audience Studio</strong> with behavioral and transactional filters',
      '<strong>Real-time activation</strong> to email, SMS, ads, web',
      '<strong>Native ad sync</strong> to Google, Meta, LinkedIn',
      '<strong>Einstein Engagement Scoring</strong> predicts churn and LTV',
    ],
  },
  {
    dept: 'Analytics & Revenue Attribution',
    icon: BarChart2,
    color: '#F59E0B',
    headline: 'Prove exactly which campaigns drive revenue',
    points: [
      '<strong>Marketing Cloud Intelligence</strong> ties campaigns to revenue',
      '<strong>Real-time dashboards</strong> for deliverability, conversions, ROI',
      '<strong>Einstein Engagement Scoring</strong> predicts opens and clicks',
      '<strong>Campaign influence</strong> on every pipeline deal shown',
      '<strong>Path analysis</strong> reveals deal-accelerating channels',
    ],
  },
  {
    dept: 'B2B Marketing (Account Engagement)',
    icon: Users,
    color: '#6366F1',
    headline: 'Turn anonymous traffic into qualified pipeline',
    points: [
      '<strong>Account Engagement (Pardot)</strong> scores sales-ready prospects',
      '<strong>Automated nurture</strong> advances MQLs with personalized content',
      '<strong>Bi-directional CRM sync</strong> for real-time engagement visibility',
      '<strong>Landing pages and forms</strong> built and attributed natively',
      '<strong>Engagement Studio</strong> for complex B2B buying journeys',
    ],
  },
]

const whyUs = [
  { title: 'Deep Marketing Cloud Expertise',   desc: "We specialise in Marketing Cloud and Account Engagement - not everything Salesforce sells. That focus means faster implementations, fewer issues, and better results than a generalist partner." },
  { title: "Proven Across Industries",         desc: "Our team has delivered Marketing Cloud for B2B lead nurture, e-commerce lifecycle journeys, financial services onboarding, and nonprofit donor engagement - with measurable ROI in every case." },
  { title: 'Live in 6-8 Weeks, Not 6 Months',  desc: "We use a phased delivery model: core journeys and integrations go live fast, then we iterate. You start seeing value in weeks, not quarters." },
  { title: 'Free Roadmap - No Strings',         desc: "Book a 30-minute scoping call and walk away with a personalization roadmap, a gap analysis of your current stack, and a clear implementation plan - whether you hire us or not." },
]

export default function MarketingCloudPage() {
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
              <Megaphone className="w-3.5 h-3.5" /> Salesforce Marketing Cloud
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4 sm:mb-6 animate-fade-up text-center">
              Turn Every Customer Touchpoint Into{' '}
              <br /><span className="gradient-text-gold">Measurable Revenue.</span>
            </h1>
            <p className="text-xl leading-relaxed mb-10 animate-fade-up-1"
              style={{ color: 'rgba(148,196,255,0.90)' }}>
              Email delivers $36 for every $1 spent - but only when it is personalized, automated, and connected to your CRM. We build Marketing Cloud engines that turn data into pipeline and customers into lifetime value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-2">
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
                className="btn-gold text-base px-8 py-4">
                Get a Free Marketing Cloud Roadmap <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm mt-5 animate-fade-up-3"
              style={{ color: 'rgba(148,196,255,0.60)' }}>
              Free 30-min scoping call · No commitment · Personalization roadmap included
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
              The Revenue Problems <span className="gradient-text">Marketing Cloud Solves</span>
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
              Tell Us About Your Marketing Challenges <ArrowRight className="w-4 h-4" />
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
            <div className="tag-white mx-auto mb-5">Real Results</div>
            <h2 className="section-title-white mb-4">
              The Numbers Behind Marketing Cloud
            </h2>
            <p className="section-sub-white">
              Industry benchmarks and customer-reported outcomes from Salesforce, Litmus, and McKinsey research.
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
      <section className="py-14 sm:py-10 sm:py-16 bg-white">
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag mx-auto mb-5">What It Does For You</div>
            <h2 className="section-title mb-4">
              Four Engines That <span className="gradient-text">Drive Marketing Revenue</span>
            </h2>
            <p className="section-sub">
              Marketing Cloud connects your customer data, automates personalized journeys, and attributes every conversion back to the campaign that caused it.
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
              Why Work With Us <span className="gradient-text">For Marketing Cloud?</span>
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
            <Zap className="w-3.5 h-3.5" /> Free Scoping Call
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-white mb-5">
            Ready to Make Every Campaign<br />
            <span className="gradient-text-gold">Prove Its Revenue Impact?</span>
          </h2>
          <p className="text-lg mb-4" style={{ color: 'rgba(148,196,255,0.85)' }}>
            In 30 minutes we will audit your current marketing stack, identify your highest-impact personalization opportunities, and map out a phased Marketing Cloud roadmap - at no cost.
          </p>
          <ul className="flex flex-col sm:flex-row gap-3 justify-center mb-10 text-sm"
            style={{ color: 'rgba(148,196,255,0.80)' }}>
            {['Personalization roadmap included', 'Revenue attribution plan', 'You leave with a clear next step'].map(i => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" style={{ color: '#38BDF8' }} /> {i}
              </li>
            ))}
          </ul>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
            className="btn-gold text-lg px-10 py-5 animate-bounce-x">
            Book My Free Marketing Cloud Call <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  )
}
