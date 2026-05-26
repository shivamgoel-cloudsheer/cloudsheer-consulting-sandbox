import {
  ArrowRight, CheckCircle2, TrendingUp, Clock, DollarSign,
  Users, Shield, Star, GraduationCap, BookOpen, School, Award,
  Target, Heart,
} from 'lucide-react'
import WhatWeShip from '../../components/WhatWeShip'

const CAL_LINK = 'https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true'

const painPoints = [
  { pain: "Recruitment, admissions, and enrollment teams work from disconnected systems with no unified view of the student journey", fix: "<strong>Student 360</strong> unifies inquiry, application, enrollment, and engagement into one record" },
  { pain: "Advisors lose track of at-risk students because alerts and academic signals never surface in one place", fix: "<strong>Success Plans</strong> with Einstein early-alert models surface at-risk students proactively" },
  { pain: "Application processing is manual, slow, and frustrates prospective students with long response times", fix: "<strong>Action Plans</strong> and Intelligent Document Automation cut application turnaround by 60%" },
  { pain: "Alumni and donor relationships fade because development teams cannot see meaningful engagement signals", fix: "<strong>Constituent 360</strong> with Engagement Plans surfaces giving opportunities at the right moment" },
  { pain: "Faculty and staff cannot collaborate on student support across registrar, advising, financial aid, and career services", fix: "<strong>Service Console</strong> with role-based routing connects every support team in one workspace" },
]

const outcomes = [
  { icon: Users,         value: '45%',  label: 'increase in enrollment conversion through automated nurturing, application workflows, and counselor productivity', color: '#0176D3' },
  { icon: TrendingUp,    value: '32%',  label: 'improvement in student retention with proactive advising, early-alert systems, and success interventions', color: '#10B981' },
  { icon: Clock,         value: '60%',  label: 'faster application processing through Intelligent Document Automation and approval routing', color: '#F59E0B' },
  { icon: DollarSign,    value: '38%',  label: 'lift in fundraising results with Constituent 360, giving propensity scoring, and Engagement Plans', color: '#6366F1' },
  { icon: Award,         value: '50%',  label: 'reduction in advising case backlog through Service Console, omnichannel, and Agentforce self-service', color: '#06B6D4' },
  { icon: GraduationCap, value: '3x',   label: 'faster alumni engagement growth with unified records, Marketing Cloud journeys, and event tracking', color: '#0176D3' },
]

const whatWeShip = [
  { icon: GraduationCap, title: 'Recruitment + admissions', desc: 'Applicant management, application review, and yield optimization workflows.' },
  { icon: Target,        title: 'Student success',          desc: 'Success plans, advising workflows, early-alert triggers, and intervention tracking.' },
  { icon: Heart,         title: 'Advancement + giving',     desc: 'Donor cycles, gift entry, prospect management, and engagement scoring.' },
  { icon: Shield,        title: 'FERPA-aware sharing',      desc: 'Sharing model, audit trail, and data handling that passes FERPA review.' },
]

const whyUs = [
  { title: 'Education Cloud Specialists',  desc: "We focus on Education Cloud for higher education, K-12, and continuing education clients. Our team understands the data, decisions, and timelines that shape every campus." },
  { title: 'Student-First Design',         desc: "Every implementation starts with the student journey. We design recruitment, admissions, success, and advancement workflows around real outcomes and FERPA-aware data handling." },
  { title: 'Live in 10 to 14 Weeks',       desc: "Most Education Cloud deployments move from kickoff to production in under fourteen weeks. We use proven accelerators and iterative builds tied to your academic calendar." },
  { title: 'Zero Risk to Start',           desc: "Book a free 30-minute discovery call. We will map your highest-impact use case, outline a FERPA-aware architecture, and hand you a deployment plan - no cost, no commitment." },
]

export default function EducationCloudPage() {
  return (
    <>
      <section className="relative pt-20 sm:pt-24 pb-6 sm:pb-10 overflow-hidden" style={{ background: 'linear-gradient(135deg,#032D60 0%,#0A3F80 55%,#0176D3 100%)' }}>
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="glow-dot w-[500px] h-[500px] top-[-150px] right-[-80px]" style={{ backgroundColor: '#38BDF8', opacity: 0.15 }} />

        <div className="section-wrap relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="tag-white mx-auto mb-6 inline-flex">
              <GraduationCap className="w-3.5 h-3.5" /> Salesforce Education Cloud
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl 2xl:text-6xl font-black text-white leading-tight mb-4 sm:mb-6 animate-fade-up text-center">
              Convert More Inquiries.{' '}
              <br /><span className="gradient-text-gold">Retain More Students. Engage More Alumni.</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed mb-6 animate-fade-up-1" style={{ color: 'rgba(148,196,255,0.90)' }}>
              Education Cloud gives universities, K-12 institutions, and continuing education programs one platform for the entire learner journey - from inquiry through alumni engagement - with built-in FERPA awareness.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up-2">
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold text-base px-8 py-4">
                See What Education Cloud Can Do <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag mx-auto mb-5">Sound Familiar?</div>
            <h2 className="section-title mb-4">The Costly Problems <span className="gradient-text">Education Cloud Eliminates</span></h2>
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
            <h2 className="section-title-white mb-4">Real Institutions. Real Outcomes.</h2>
            <p className="section-sub-white">Outcomes achieved by universities, colleges, and K-12 institutions running Education Cloud in production.</p>
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
              Get Results Like These For Your Institution <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <WhatWeShip platformName="Education Cloud" accentColor="#0176D3" items={whatWeShip} />

      <section className="py-10 sm:py-16" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag mx-auto mb-5"><Star className="w-3.5 h-3.5" /> Why Cloudsheer</div>
            <h2 className="section-title mb-4">Why Institutions Choose Us <span className="gradient-text">For Education Cloud</span></h2>
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
          <div className="tag-white mx-auto mb-6 inline-flex"><GraduationCap className="w-3.5 h-3.5" /> Free Discovery Call</div>
          <h2 className="text-2xl md:text-4xl font-black text-white mb-5">
            Find Out Exactly What<br />
            <span className="gradient-text-gold">Education Cloud Can Deliver</span>
          </h2>
          <p className="text-lg mb-10" style={{ color: 'rgba(148,196,255,0.85)' }}>
            In 30 minutes we will assess your enrollment, success, and engagement landscape, identify the highest-impact use case, and show you what a deployment would look like.
          </p>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold text-lg px-10 py-5 animate-bounce-x">
            Book My Free Discovery Call <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  )
}
