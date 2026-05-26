import {
  ArrowRight, CheckCircle2, TrendingUp, Clock, DollarSign,
  Users, Shield, Star, FlaskConical, Microscope, Beaker, Pill, Heart,
} from 'lucide-react'
import WhatWeShip from '../../components/WhatWeShip'

const CAL_LINK = 'https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true'

const painPoints = [
  { pain: "Clinical trial sponsors lose months coordinating sites, investigators, and patients across disconnected systems", fix: "<strong>Clinical Trial Management</strong> centralizes site activation, patient engagement, and study oversight" },
  { pain: "Medical Affairs teams cannot see HCP interactions across regions, leading to missed insights and duplicate outreach", fix: "<strong>HCP 360</strong> with Account Engagement Plans unifies every touchpoint and surfaces real signals" },
  { pain: "Commercial reps struggle to engage HCPs with compliant content and miss critical follow-ups", fix: "<strong>Veeva-style Engagement</strong> with content approval workflows keeps every interaction compliant" },
  { pain: "Patient services programs run on spreadsheets with no audit trail, putting access and reimbursement at risk", fix: "<strong>Patient Services</strong> with consent and adverse event tracking provides full audit visibility" },
  { pain: "Regulatory submissions take weeks to compile because data lives in clinical, manufacturing, and quality silos", fix: "<strong>Data Cloud and Intelligent Document Automation</strong> assemble submission-ready evidence in days" },
]

const outcomes = [
  { icon: FlaskConical,  value: '35%',   label: 'faster clinical trial activation through automated site readiness, contracting, and patient recruitment workflows', color: '#0176D3' },
  { icon: Users,         value: '2.5x',  label: 'increase in HCP engagement quality with unified 360 views and AI-driven Next Best Action recommendations', color: '#10B981' },
  { icon: Clock,         value: '60%',   label: 'reduction in patient enrollment time with digital intake, eligibility automation, and consent workflows', color: '#F59E0B' },
  { icon: DollarSign,    value: '28%',   label: 'lower cost-per-engagement in field medical and commercial operations through Salesforce automation', color: '#6366F1' },
  { icon: Shield,        value: '100%',  label: 'GxP and 21 CFR Part 11 ready with Shield encryption, audit trails, and validated change controls', color: '#06B6D4' },
  { icon: Microscope,    value: '40%',   label: 'faster medical inquiry handling with Agentforce Service Agent and unified medical content library', color: '#0176D3' },
]

const whatWeShip = [
  { icon: FlaskConical, title: 'Clinical Trial Management', desc: 'Protocol setup, site engagement, enrollment tracking, and IRB workflow automation.' },
  { icon: Users,        title: 'HCP 360 + medical affairs', desc: 'Healthcare professional records, sample management, and MSL field engagement.' },
  { icon: Shield,       title: 'GxP-validated build',       desc: 'GxP-compliant validation, audit trails, electronic signatures, and 21 CFR Part 11 controls.' },
  { icon: Heart,        title: 'Patient services + adherence', desc: 'Patient programs, adherence tracking, hub services, and reimbursement workflows.' },
]

const whyUs = [
  { title: 'Life Sciences Specialists',       desc: "We focus on Life Sciences Cloud for pharma, biotech, medical device, and CRO clients. Our team understands the data, regulations, and stakeholders that shape every implementation." },
  { title: 'GxP and Compliance Aware',         desc: "We design every implementation around 21 CFR Part 11, GDPR, HIPAA, and PDMA requirements. Shield, Event Monitoring, and validated workflows are part of the build, not afterthoughts." },
  { title: 'Live in 10 to 14 Weeks',           desc: "Most Life Sciences Cloud deployments move from kickoff to production in under fourteen weeks. We use proven accelerators and iterative build to deliver value early." },
  { title: 'Zero Risk to Start',               desc: "Book a free 30-minute discovery call. We will map your highest-impact use case, outline a GxP-ready architecture, and hand you a deployment plan - no cost, no commitment." },
]

export default function LifeSciencesCloudPage() {
  return (
    <>
      <section className="relative pt-20 sm:pt-24 pb-6 sm:pb-10 overflow-hidden" style={{ background: 'linear-gradient(135deg,#032D60 0%,#0A3F80 55%,#0176D3 100%)' }}>
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="glow-dot w-[500px] h-[500px] top-[-150px] right-[-80px]" style={{ backgroundColor: '#38BDF8', opacity: 0.15 }} />

        <div className="section-wrap relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="tag-white mx-auto mb-6 inline-flex">
              <FlaskConical className="w-3.5 h-3.5" /> Salesforce Life Sciences Cloud
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl 2xl:text-6xl font-black text-white leading-tight mb-4 sm:mb-6 animate-fade-up text-center">
              Speed Trials.{' '}
              <br /><span className="gradient-text-gold">Engage HCPs. Help Patients Stay on Therapy.</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed mb-6 animate-fade-up-1" style={{ color: 'rgba(148,196,255,0.90)' }}>
              Life Sciences Cloud gives pharma, biotech, and medical device organizations one platform to run clinical operations, medical affairs, commercial engagement, and patient services - all on a GxP-ready foundation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up-2">
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold text-base px-8 py-4">
                See What Life Sciences Cloud Can Do <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag mx-auto mb-5">Sound Familiar?</div>
            <h2 className="section-title mb-4">The Costly Problems <span className="gradient-text">Life Sciences Cloud Eliminates</span></h2>
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
            <h2 className="section-title-white mb-4">Real Life Sciences Organizations. Real Outcomes.</h2>
            <p className="section-sub-white">Outcomes achieved by pharma, biotech, and medical device organizations running Life Sciences Cloud in production.</p>
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
              Get Results Like These For Your Organization <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <WhatWeShip platformName="Life Sciences Cloud" accentColor="#0176D3" items={whatWeShip} />

      <section className="py-10 sm:py-16" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag mx-auto mb-5"><Star className="w-3.5 h-3.5" /> Why Cloudsheer</div>
            <h2 className="section-title mb-4">Why Life Sciences Teams Choose Us <span className="gradient-text">For LSC</span></h2>
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
          <div className="tag-white mx-auto mb-6 inline-flex"><FlaskConical className="w-3.5 h-3.5" /> Free Discovery Call</div>
          <h2 className="text-2xl md:text-4xl font-black text-white mb-5">
            Find Out Exactly What<br />
            <span className="gradient-text-gold">Life Sciences Cloud Can Deliver</span>
          </h2>
          <p className="text-lg mb-10" style={{ color: 'rgba(148,196,255,0.85)' }}>
            In 30 minutes we will assess your clinical, medical, and commercial landscape, identify the highest-impact use case, and show you what a deployment would look like.
          </p>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold text-lg px-10 py-5 animate-bounce-x">
            Book My Free Discovery Call <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  )
}
