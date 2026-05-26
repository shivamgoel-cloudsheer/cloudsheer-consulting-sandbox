import {
  ArrowRight, CheckCircle2, TrendingUp, Clock, DollarSign,
  Users, Shield, Star, Briefcase, Landmark, Workflow,
} from 'lucide-react'
import WhatWeShip from '../../components/WhatWeShip'

const CAL_LINK = 'https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true'

const painPoints = [
  { pain: "Wealth advisors and bankers waste hours stitching together client data from disconnected systems", fix: "<strong>Client 360</strong> unifies banking, wealth, and insurance into one relationship view" },
  { pain: "Onboarding new clients takes weeks of manual KYC, document chase, and compliance reviews", fix: "<strong>Action Plans</strong> and Intelligent Document Automation cut onboarding to days" },
  { pain: "Cross-sell opportunities are missed because relationship signals never surface in time", fix: "<strong>Einstein Relationship Insights</strong> and Next Best Action drive 33% more cross-sell" },
  { pain: "Compliance officers spend days assembling audit trails for every regulator request", fix: "<strong>Compliant Data Sharing</strong> and Event Monitoring give one-click audit-ready records" },
  { pain: "Branch, advisor, and digital channels operate in silos with inconsistent client experiences", fix: "<strong>Experience Cloud</strong> and Service Console deliver one omnichannel client journey" },
]

const outcomes = [
  { icon: Users,         value: '40%',  label: 'increase in advisor productivity by removing data hunting and admin overhead with Client 360', color: '#0176D3' },
  { icon: TrendingUp,    value: '33%',  label: 'more cross-sell revenue with Einstein Relationship Insights and Next Best Action recommendations', color: '#10B981' },
  { icon: Clock,         value: '50%',  label: 'faster client onboarding through automated KYC, document workflows, and approval routing', color: '#F59E0B' },
  { icon: DollarSign,    value: '27%',  label: 'lower cost-to-serve in retail banking with Service Cloud automation and self-service portals', color: '#6366F1' },
  { icon: Shield,        value: '100%', label: 'audit-ready compliance posture with built-in Event Monitoring and field-level encryption', color: '#06B6D4' },
  { icon: Landmark,      value: '3x',   label: 'faster mortgage and lending decisions with Intelligent Document Automation and routing rules', color: '#0176D3' },
]

const whatWeShip = [
  { icon: Briefcase, title: 'Client 360 architecture',     desc: 'Households, financial accounts, holdings, and goals modeled to your book of business.' },
  { icon: Workflow,  title: 'Action Plans + onboarding',   desc: 'Templated workflows for onboarding, KYC, lending, and life-event servicing.' },
  { icon: Shield,    title: 'Compliance + audit',          desc: 'Disclosures, retention rules, sharing model, and audit trail mapped to FINRA / SEC needs.' },
  { icon: Users,     title: 'Relationship intelligence',   desc: 'Referral tracking, household roll-ups, and cross-sell scoring across advisors and channels.' },
]

const whyUs = [
  { title: 'Financial Services Specialists',  desc: "We focus on Financial Services Cloud across banking, wealth, insurance, and lending. Our team understands the workflows, data models, and compliance constraints firms actually live with." },
  { title: 'Regulatory and Security Fluent',  desc: "We design every implementation around SOC 2, FINRA, SEC, FFIEC, and GDPR expectations. Compliant Data Sharing, Event Monitoring, and Shield are baked in, not bolted on." },
  { title: 'Live in 8 to 12 Weeks',           desc: "Most FSC implementations go from kickoff to production in under twelve weeks. We move fast with proven accelerators, iterative builds, and a focus on advisor and banker value early." },
  { title: 'Zero Risk to Start',              desc: "Book a free 30-minute discovery call. We will map your highest-impact use case, outline a compliant architecture, and hand you a deployment plan - no cost, no commitment, no sales pitch." },
]

export default function FinancialServicesCloudPage() {
  return (
    <>
      <section className="relative pt-20 sm:pt-24 pb-6 sm:pb-10 overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#032D60 0%,#0A3F80 55%,#0176D3 100%)' }}>
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="glow-dot w-[500px] h-[500px] top-[-150px] right-[-80px]" style={{ backgroundColor: '#38BDF8', opacity: 0.15 }} />

        <div className="section-wrap relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="tag-white mx-auto mb-6 inline-flex">
              <Briefcase className="w-3.5 h-3.5" /> Salesforce Financial Services Cloud
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl 2xl:text-6xl font-black text-white leading-tight mb-4 sm:mb-6 animate-fade-up text-center">
              Grow Wallet Share.{' '}
              <br /><span className="gradient-text-gold">Cut Onboarding 50%. Lift Cross-Sell 33%.</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed mb-6 animate-fade-up-1" style={{ color: 'rgba(148,196,255,0.90)' }}>
              Financial Services Cloud gives banks, wealth firms, lenders, and insurers a single client view, automated onboarding, and built-in compliance - so advisors spend more time growing relationships and less time chasing data.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up-2">
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold text-base px-8 py-4">
                See What FSC Can Do For You <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag mx-auto mb-5">Sound Familiar?</div>
            <h2 className="section-title mb-4">The Costly Problems <span className="gradient-text">FSC Eliminates</span></h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {painPoints.map(({ pain, fix }) => (
              <div key={pain} className="glass-card p-5 grid sm:grid-cols-2 gap-4 items-center group hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(239,68,68,0.10)', color: '#EF4444' }}>
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
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">
              Tell Us Your Biggest Challenge <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#032D60,#0A3F80)' }}>
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="section-wrap relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag-white mx-auto mb-5">Proven Results</div>
            <h2 className="section-title-white mb-4">Real Financial Firms. Real Outcomes.</h2>
            <p className="section-sub-white">Outcomes achieved by banks, wealth firms, and insurers running FSC in production.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {outcomes.map(({ icon: Icon, value, label, color }) => (
              <div key={label} className="dark-card p-6 text-center group hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${color}20`, color }}>
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-3xl font-black mb-2" style={{ color }}>{value}</p>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(148,196,255,0.80)' }}>{label}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold text-base px-8 py-4">
              Get Results Like These For Your Firm <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <WhatWeShip platformName="Financial Services Cloud" accentColor="#0176D3" items={whatWeShip} />

      <section className="py-10 sm:py-16" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag mx-auto mb-5"><Star className="w-3.5 h-3.5" /> Why Cloudsheer</div>
            <h2 className="section-title mb-4">Why Financial Firms Choose Us <span className="gradient-text">For FSC</span></h2>
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

      <section className="py-14 sm:py-10 sm:py-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#032D60 0%,#0A3F80 100%)' }}>
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="glow-dot w-[500px] h-[500px] top-[-100px] left-[50%] -translate-x-1/2" style={{ backgroundColor: '#0176D3', opacity: 0.25 }} />
        <div className="section-wrap relative z-10 text-center max-w-3xl mx-auto">
          <div className="tag-white mx-auto mb-6 inline-flex"><Briefcase className="w-3.5 h-3.5" /> Free Discovery Call</div>
          <h2 className="text-2xl md:text-4xl font-black text-white mb-5">
            Find Out Exactly What<br />
            <span className="gradient-text-gold">FSC Can Deliver For You</span>
          </h2>
          <p className="text-lg mb-10" style={{ color: 'rgba(148,196,255,0.85)' }}>
            In 30 minutes we will assess your client data landscape, identify the highest-impact use case, and show you exactly what a Financial Services Cloud deployment would look like.
          </p>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold text-lg px-10 py-5 animate-bounce-x">
            Book My Free Discovery Call <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  )
}
