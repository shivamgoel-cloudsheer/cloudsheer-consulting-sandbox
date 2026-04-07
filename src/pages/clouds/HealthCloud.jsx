import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle2, Zap, TrendingUp, Clock, DollarSign,
  Heart, Users, BarChart2, Shield, MessageSquare, Star, ChevronRight,
  Activity, FileText,
} from 'lucide-react'

const CAL_LINK = 'https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true'

const painPoints = [
  { pain: "Care teams work from disconnected systems with no unified view of the patient or member", fix: "Health Cloud builds a complete Patient/Member 360 - pulling in clinical, claims, and engagement data so every team member sees the full picture" },
  { pain: "Care coordination is manual, error-prone, and slows down treatment timelines", fix: "Automated care plans, task assignments, and real-time alerts cut coordination time by 40% and keep every provider in sync" },
  { pain: "Patients and members struggle to engage with their care outside of appointments", fix: "Self-service portals, secure messaging, and automated outreach keep patients connected and adherent to their care plans" },
  { pain: "EHR and claims data lives in silos that your CRM cannot access or act on", fix: "Native HL7 FHIR and EHR integrations bring clinical data directly into Salesforce - no middleware, no manual imports" },
  { pain: "Prior authorizations and utilization reviews take days and frustrate providers and patients alike", fix: "Automated utilization management workflows cut prior auth turnaround from days to hours while reducing denials" },
]

const outcomes = [
  { icon: Heart,          value: '30%',    label: 'improvement in patient satisfaction scores after deploying Health Cloud across care teams', color: '#0176D3' },
  { icon: DollarSign,     value: '25%',    label: 'reduction in administrative costs through automated workflows and streamlined care coordination', color: '#10B981' },
  { icon: Clock,          value: '40%',    label: 'faster care coordination with unified care plans, automated task routing, and real-time alerts', color: '#F59E0B' },
  { icon: TrendingUp,     value: '3x',     label: 'faster patient onboarding with digital intake forms, automated eligibility checks, and smart scheduling', color: '#6366F1' },
  { icon: Shield,         value: '100%',   label: 'HIPAA compliant on the Salesforce platform with built-in audit trails, encryption, and access controls', color: '#06B6D4' },
  { icon: Users,          value: '50%',    label: 'reduction in provider data management effort through automated credentialing and relationship tracking', color: '#0176D3' },
]

const capabilities = [
  {
    dept: 'Patient & Member 360',
    icon: Heart,
    color: '#0176D3',
    headline: 'One view of every patient. Every interaction. Every outcome.',
    points: [
      "Unifies clinical, claims, behavioral, and social determinants data into a single actionable patient profile",
      "Surfaces care gaps, medication adherence risks, and outstanding referrals so nothing falls through the cracks",
      "Gives care teams real-time visibility into the full care journey - across providers, facilities, and payers",
      "Integrates EHR data via HL7 FHIR APIs so clinical context is always current and accessible in Salesforce",
      "Supports both provider and payer workflows - from individual care plans to population health dashboards",
    ],
  },
  {
    dept: 'Care Coordination',
    icon: Activity,
    color: '#10B981',
    headline: 'Faster handoffs. Fewer gaps. Better outcomes.',
    points: [
      "Automates care plan creation with configurable templates for chronic conditions, post-discharge, and wellness programs",
      "Routes tasks to the right care team member automatically based on role, availability, and patient acuity",
      "Tracks care plan milestones in real time and escalates when patients fall behind on goals or appointments",
      "Enables seamless collaboration between PCPs, specialists, social workers, and community health partners",
      "Reduces readmission risk with automated post-discharge follow-up workflows and patient check-ins",
    ],
  },
  {
    dept: 'Patient Engagement',
    icon: MessageSquare,
    color: '#F59E0B',
    headline: 'Keep patients connected between visits.',
    points: [
      "Deploys branded patient portals where members can view care plans, message providers, and manage appointments",
      "Sends automated appointment reminders, medication alerts, and wellness nudges via SMS, email, or app notifications",
      "Powers secure two-way messaging between patients and care teams - fully compliant and audit-trailed",
      "Delivers personalized health content and education based on conditions, care plans, and engagement history",
      "Captures patient-reported outcomes and satisfaction surveys to drive continuous care improvement",
    ],
  },
  {
    dept: 'Utilization & Authorization',
    icon: FileText,
    color: '#6366F1',
    headline: 'Cut prior auth from days to hours.',
    points: [
      "Automates prior authorization submissions with rules-based routing, auto-population, and status tracking",
      "Gives utilization management teams a single workspace for reviewing, approving, and denying requests",
      "Reduces provider abrasion with real-time auth status visibility and automated update notifications",
      "Flags high-cost or outlier cases for clinical review while fast-tracking routine authorizations automatically",
      "Delivers analytics on denial rates, turnaround times, and approval patterns to optimize UM performance",
    ],
  },
]

const whyUs = [
  { title: 'Health Cloud Specialists',       desc: "We focus on Health Cloud implementations for payers, providers, pharma, and life sciences. That specialization means faster delivery, fewer surprises, and outcomes that actually move your metrics." },
  { title: 'Healthcare Data Expertise',      desc: "Our team understands HL7 FHIR, EHR integrations, claims data models, and HIPAA compliance requirements. We connect your clinical and operational data without cutting corners on security." },
  { title: 'Live in 8-12 Weeks',             desc: "Most Health Cloud implementations go from kickoff to production in under twelve weeks. We move fast with proven accelerators, iterative builds, and a focus on getting your care teams value early." },
  { title: 'Zero Risk to Start',             desc: "Book a free 30-minute discovery call. We will map your highest-impact use case, outline a compliance-ready architecture, and hand you a deployment plan - no cost, no commitment, no sales pitch." },
]

export default function HealthCloudPage() {
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
              <Heart className="w-3.5 h-3.5" /> Salesforce Health Cloud
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 animate-fade-up">
              Transform Patient Outcomes.{' '}
              <span className="gradient-text-gold">Cut Admin Costs 25%. Coordinate Care 40% Faster.</span>
            </h1>
            <p className="text-xl leading-relaxed mb-10 animate-fade-up-1"
              style={{ color: 'rgba(148,196,255,0.90)' }}>
              Health Cloud gives payers, providers, and life sciences organizations a single platform to unify patient data, automate care coordination, and drive measurable improvements in outcomes and efficiency - all on a HIPAA-compliant foundation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-2">
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
                className="btn-gold text-base px-8 py-4">
                See What Health Cloud Can Do For You <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm mt-5 animate-fade-up-3"
              style={{ color: 'rgba(148,196,255,0.60)' }}>
              Free 30-min discovery call · No commitment · We come with a plan
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
              The Costly Problems <span className="gradient-text">Health Cloud Eliminates</span>
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
              Tell Us Your Biggest Challenge <ArrowRight className="w-4 h-4" />
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
              Real Healthcare Organizations. Real Outcomes.
            </h2>
            <p className="section-sub-white">
              These are outcomes achieved by healthcare organizations running Health Cloud in production - across payers, providers, and life sciences.
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
              Get Results Like These For Your Organization <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Capabilities ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="tag mx-auto mb-5">Where It Delivers</div>
            <h2 className="section-title mb-4">
              A Platform Built for Healthcare <span className="gradient-text">From the Ground Up</span>
            </h2>
            <p className="section-sub">
              Health Cloud is not a generic CRM with a healthcare skin. It is purpose-built for the data models, workflows, and compliance requirements that payers, providers, and life sciences organizations demand.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map(({ dept, icon: Icon, color, headline, points }) => (
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
              Why Healthcare Organizations Choose Us <span className="gradient-text">For Health Cloud</span>
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
        <div className="section-wrap relative z-10 text-center max-w-2xl mx-auto">
          <div className="tag-white mx-auto mb-6 inline-flex">
            <Heart className="w-3.5 h-3.5" /> Free Discovery Call
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Find Out Exactly What<br />
            <span className="gradient-text-gold">Health Cloud Can Deliver For You</span>
          </h2>
          <p className="text-lg mb-4" style={{ color: 'rgba(148,196,255,0.85)' }}>
            In 30 minutes we will assess your patient data landscape, identify the highest-impact use case, and show you exactly what a Health Cloud deployment would look like - with a timeline, compliance roadmap, and expected outcomes.
          </p>
          <ul className="flex flex-col sm:flex-row gap-3 justify-center mb-10 text-sm"
            style={{ color: 'rgba(148,196,255,0.80)' }}>
            {['Custom deployment plan included', 'HIPAA compliance roadmap', 'Walk away with actionable next steps'].map(i => (
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
