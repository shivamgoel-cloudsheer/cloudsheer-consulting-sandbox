import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import FAQ from '../components/FAQ'
import { addPageSchema, faqPageSchema } from '../seoConfig'
import {
  ArrowRight, MapPin, Clock, Briefcase, Users, Zap, Heart,
  TrendingUp, Globe, ChevronDown, ChevronUp, Send, CheckCircle2,
  Mail, Copy, Check,
} from 'lucide-react'

const openRoles = [
  {
    id: 'pm',
    title: 'Project Manager',
    type: 'Full-Time',
    location: 'Noida, India (Work From Office)',
    department: 'Delivery',
    badge: 'Hiring Now',
    badgeColor: '#10B981',
    summary:
      "We're looking for an experienced Project Manager to lead Salesforce implementation engagements end-to-end. You'll be the bridge between our clients and our technical team - owning the plan, the timeline, the risks, and the relationship.",
    responsibilities: [
      'Own end-to-end delivery of Salesforce implementation projects from kick-off to go-live',
      'Manage project plans, budgets, risk registers, and status reporting across multiple concurrent engagements',
      'Run daily stand-ups, sprint reviews, and stakeholder steering committees',
      'Serve as the primary point of contact for client project sponsors and executive stakeholders',
      'Coordinate cross-functional teams across consultants, developers, and QA across multiple time zones',
      'Identify and escalate scope creep, blockers, and risks with proposed mitigation plans',
      'Drive change management and user adoption planning alongside the technical team',
      'Contribute to internal delivery process improvement initiatives',
    ],
    requirements: [
      '3+ years of project management experience delivering CRM or enterprise software implementations',
      'Demonstrated experience with Salesforce projects (Sales Cloud, Service Cloud, or equivalent)',
      'Strong command of Agile, Scrum, and waterfall methodologies - and when to apply each',
      'Exceptional written and verbal communication with the ability to present to C-suite stakeholders',
      'Proficiency with project management tools (Jira, Monday.com, Asana, or equivalent)',
      'PMP, PRINCE2, or equivalent certification preferred',
      'Salesforce certifications (Admin, Business Analyst) are a strong plus',
      'Comfortable working across Dallas, Delhi, London, and New York time zones',
    ],
    niceToHave: [
      'Experience with Agentforce or Salesforce AI projects',
      'Background in financial services or professional services industries',
      'Salesforce Admin or Business Analyst certification',
    ],
  },
  {
    id: 'techlead',
    title: 'Tech Lead - Salesforce',
    type: 'Full-Time',
    location: 'Noida, India (Work From Office)',
    department: 'Engineering',
    badge: 'Hiring Now',
    badgeColor: '#10B981',
    summary:
      "We're looking for a hands-on Tech Lead to own technical delivery across our most complex Salesforce and Agentforce engagements. You'll set the architectural direction, lead a small pod of developers, write code yourself, and serve as the technical voice in client conversations.",
    responsibilities: [
      'Own end-to-end technical architecture for multi-cloud Salesforce and Agentforce implementations',
      'Lead a pod of 3-6 developers - assign work, run code reviews, and unblock the team daily',
      'Stay hands-on - write Apex, LWC, and Flow when complex problems need a senior touch',
      'Design Agentforce solutions - Topics, Actions, Trust Layer setup, and Agent Builder configurations',
      'Define integration architecture across Salesforce, MuleSoft, Data Cloud, and external systems',
      'Run technical discovery workshops and translate business goals into solution designs',
      'Establish coding standards, deployment patterns, and CI/CD practices across the engineering team',
      'Mentor junior and mid-level developers - grow the bench through pairing and structured feedback',
      'Partner with Project Managers on scoping, estimation, and risk management',
      'Be the technical face of Cloudsheer in client steering committees and architecture reviews',
    ],
    requirements: [
      '5+ years of hands-on Salesforce development with at least 2 years in a lead or architect role',
      'Deep expertise in Apex, LWC, SOQL, Flow, and Salesforce platform best practices',
      'Strong understanding of Salesforce architecture - sharing model, governor limits, LDV strategies',
      'Proven experience designing and building integrations (REST/SOAP, MuleSoft, middleware patterns)',
      'Track record of leading technical teams on enterprise Salesforce projects end-to-end',
      'Salesforce Platform Developer II certification (or equivalent senior cert) required',
      'Application Architect or System Architect certification strongly preferred',
      'Excellent communication skills with the ability to present to technical and business audiences',
      'Comfortable working across Dallas, Delhi, London, and New York time zones',
    ],
    niceToHave: [
      'Hands-on Agentforce experience - Agent Builder, Topics, Actions, Atlas Reasoning Engine',
      'Salesforce Technical Architect (CTA) credential or actively working toward it',
      'Experience with Data Cloud, Marketing Cloud, or Commerce Cloud',
      'MuleSoft certifications or significant integration platform experience',
      'Prior consulting background at a Salesforce SI or ISV partner',
    ],
  },
  {
    id: 'sfdev',
    title: 'Salesforce Developer',
    type: 'Full-Time',
    location: 'Noida, India (Work From Office)',
    department: 'Engineering',
    badge: 'Hiring Now',
    badgeColor: '#10B981',
    summary:
      "We're growing our engineering team and looking for a skilled Salesforce Developer to build and configure solutions across Sales Cloud, Service Cloud, and Agentforce. You'll work on challenging, varied projects for clients across industries - and be at the forefront of Agentforce development.",
    responsibilities: [
      'Design, build, and deploy custom Salesforce solutions using Apex, LWC, and Flow',
      'Develop Agentforce agents including topic design, action configuration, and Trust Layer setup',
      'Build REST/SOAP API integrations between Salesforce and external systems (ERP, marketing platforms, etc.)',
      'Write clean, well-tested Apex code with ≥75% test class coverage',
      'Conduct technical discovery workshops with clients to gather and translate requirements',
      'Perform code reviews, maintain technical documentation, and support junior developers',
      'Deploy changes using change sets, Salesforce CLI, and CI/CD pipelines',
      'Stay current with Salesforce release notes and Agentforce platform updates',
    ],
    requirements: [
      '2+ years of hands-on Salesforce development experience (Apex, LWC, SOQL)',
      'Solid understanding of Salesforce data model, governor limits, and platform best practices',
      'Experience with Salesforce Flow automation (Screen Flows, Record-Triggered Flows)',
      'Knowledge of REST API integration patterns and Salesforce integration tools',
      'At least one Salesforce certification (Platform Developer I minimum)',
      'Experience deploying with Salesforce CLI and scratch orgs',
      'Strong problem-solving skills and ability to translate business requirements into technical solutions',
    ],
    niceToHave: [
      'Agentforce or Einstein AI platform experience',
      'MuleSoft or other middleware integration experience',
      'Platform Developer II or Application Architect certification',
      'Experience with Salesforce DevOps Center or Copado',
    ],
  },
]

const perks = [
  { icon: Globe,       title: 'Global Exposure',        desc: 'Work alongside colleagues across Dallas, Delhi, London, and New York on real international projects.' },
  { icon: TrendingUp,  title: 'Career Growth',         desc: 'Dedicated training budget, Salesforce cert support, and a clear progression path.' },
  { icon: Zap,         title: 'Agentforce-First',      desc: "Work on the industry's most exciting AI platform before anyone else." },
  { icon: Users,       title: 'Tight-Knit Team',       desc: '40+ people who genuinely enjoy working together and learning from each other.' },
  { icon: Heart,       title: 'Flexible Culture',      desc: 'Async-friendly, outcome-driven, and respectful of your time outside of work.' },
  { icon: Briefcase,   title: 'Varied Projects',       desc: 'No two clients are the same - you will constantly learn across industries.' },
]

function RoleCard({ role }) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const subject = `Application: ${role.title}`
  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=hr@cloudsheer.com&su=${encodeURIComponent(subject)}`
  const gmailAppUrl = `googlegmail://co?to=hr@cloudsheer.com&subject=${encodeURIComponent(subject)}`
  const mailtoUrl = `mailto:hr@cloudsheer.com?subject=${encodeURIComponent(subject)}`

  const copyEmail = () => {
    navigator.clipboard?.writeText('hr@cloudsheer.com').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }).catch(() => {})
  }

  const handleGmailClick = (e) => {
    const ua = navigator.userAgent
    const isIOS = /iPhone|iPad|iPod/i.test(ua)
    const isAndroid = /Android/i.test(ua)

    if (isIOS) {
      e.preventDefault()
      window.location.href = gmailAppUrl
      setTimeout(() => { window.location.href = mailtoUrl }, 1500)
    } else if (isAndroid) {
      e.preventDefault()
      window.location.href = mailtoUrl
    }
  }

  return (
    <div
      className="glass-card overflow-hidden transition-all duration-300"
      style={{ border: open ? '1px solid rgba(1,118,211,0.30)' : '1px solid rgba(1,118,211,0.10)' }}
    >
      {/* Header */}
      <button
        className="w-full text-left p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        onClick={() => setOpen(v => !v)}
      >
        <div className="flex-grow">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full text-white"
              style={{ backgroundColor: role.badgeColor }}>
              {role.badge}
            </span>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full"
              style={{ backgroundColor: 'rgba(1,118,211,0.07)', color: '#0176D3', border: '1px solid rgba(1,118,211,0.18)' }}>
              {role.department}
            </span>
          </div>
          <h3 className="text-xl font-black mb-3" style={{ color: '#032D60' }}>{role.title}</h3>
          <div className="flex flex-wrap gap-4 text-sm" style={{ color: '#64748B' }}>
            <span className="flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" style={{ color: '#0176D3' }} /> {role.type}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" style={{ color: '#0176D3' }} /> {role.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" style={{ color: '#0176D3' }} /> Active
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-sm font-semibold hidden sm:block" style={{ color: '#0176D3' }}>
            {open ? 'Hide details' : 'View details'}
          </span>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: 'rgba(1,118,211,0.08)', color: '#0176D3' }}>
            {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </div>
      </button>

      {/* Expanded body */}
      {open && (
        <div className="px-7 pb-8 border-t" style={{ borderColor: 'rgba(1,118,211,0.08)' }}>
          <p className="text-sm leading-relaxed mt-6 mb-8" style={{ color: '#475569' }}>
            {role.summary}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Responsibilities */}
            <div>
              <h4 className="font-bold text-sm mb-4" style={{ color: '#032D60' }}>
                What you will do
              </h4>
              <ul className="space-y-2.5">
                {role.responsibilities.map(r => (
                  <li key={r} className="flex items-start gap-2.5 text-sm" style={{ color: '#475569' }}>
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#0176D3' }} />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div>
              <h4 className="font-bold text-sm mb-4" style={{ color: '#032D60' }}>
                What we are looking for
              </h4>
              <ul className="space-y-2.5">
                {role.requirements.map(r => (
                  <li key={r} className="flex items-start gap-2.5 text-sm" style={{ color: '#475569' }}>
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#0176D3' }} />
                    {r}
                  </li>
                ))}
              </ul>

              {role.niceToHave?.length > 0 && (
                <>
                  <h4 className="font-bold text-sm mt-6 mb-4" style={{ color: '#032D60' }}>
                    Nice to have
                  </h4>
                  <ul className="space-y-2.5">
                    {role.niceToHave.map(r => (
                      <li key={r} className="flex items-start gap-2.5 text-sm" style={{ color: '#64748B' }}>
                        <div className="w-4 h-4 shrink-0 mt-0.5 rounded-full border-2 flex-shrink-0"
                          style={{ borderColor: '#0176D3' }} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          {/* Apply CTA */}
          <div className="pt-6" style={{ borderTop: '1px solid rgba(1,118,211,0.08)' }}>
            <p className="text-sm font-bold mb-3" style={{ color: '#032D60' }}>
              Send your CV to apply
            </p>

            {/* Email address with copy button */}
            <div className="flex items-center gap-2 mb-4 p-3 rounded-xl"
              style={{ backgroundColor: 'rgba(1,118,211,0.05)', border: '1px solid rgba(1,118,211,0.12)' }}>
              <Mail className="w-4 h-4 shrink-0" style={{ color: '#0176D3' }} />
              <span className="text-sm font-semibold flex-1 break-all" style={{ color: '#032D60' }}>
                hr@cloudsheer.com
              </span>
              <button onClick={copyEmail}
                className="shrink-0 flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all"
                style={{ backgroundColor: copied ? '#10B981' : 'white', color: copied ? 'white' : '#0176D3', border: '1px solid ' + (copied ? '#10B981' : 'rgba(1,118,211,0.20)') }}>
                {copied ? <><Check className="w-3.5 h-3.5" /> Copied</> : <><Copy className="w-3.5 h-3.5" /> Copy</>}
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href={gmailWebUrl} target="_blank" rel="noopener noreferrer" onClick={handleGmailClick}
                className="btn-primary gap-2 justify-center">
                <Send className="w-4 h-4" />
                Apply via Gmail
              </a>
              <a href={mailtoUrl} className="btn-ghost gap-2 justify-center">
                <Mail className="w-4 h-4" />
                Open in Mail App
              </a>
            </div>
            <p className="text-xs mt-3" style={{ color: '#94A3B8' }}>
              Attach your CV in the email. We reply to every application within 48 hours.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

const careerFaqs = [
  { q: 'What is the interview process?', a: '3 steps: 30-min intro call with our hiring lead, a technical/case assessment, and a final culture-fit conversation with leadership. Typically completed in 2 weeks.' },
  { q: 'Is the role fully remote?', a: 'Our current openings are Work From Office in Noida, India. We offer flexibility within office hours and support async collaboration across time zones.' },
  { q: 'Do you sponsor Salesforce certifications?', a: 'Yes. We cover exam fees and provide study time for all Salesforce certifications. We currently hold 60+ certs across the team.' },
  { q: 'What if my role is not listed?', a: 'We are always open to exceptional Salesforce talent. Send your CV to hr@cloudsheer.com with a note about what you are looking for.' },
]

export default function Careers() {
  useEffect(() => {
    addPageSchema('faq', faqPageSchema(careerFaqs))
    return () => addPageSchema('faq', null)
  }, [])
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#032D60 0%,#0A3F80 60%,#0176D3 100%)' }}
      >
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="glow-dot w-[500px] h-[500px] top-[-150px] right-[-80px]"
          style={{ backgroundColor: '#38BDF8', opacity: 0.14 }} />
        <div className="glow-dot w-[300px] h-[300px] bottom-[-60px] left-[5%]"
          style={{ backgroundColor: '#0176D3', opacity: 0.20 }} />

        <div className="section-wrap relative z-10 text-center max-w-3xl mx-auto">
          <div className="tag-white mx-auto mb-6 inline-flex">
            <Briefcase className="w-3.5 h-3.5" /> Careers at Cloudsheer
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 animate-fade-up">
            Build Your Future{' '}
            <span className="gradient-text-gold">with Cloudsheer</span>
          </h1>
          <p className="text-lg leading-relaxed mb-10 animate-fade-up-1"
            style={{ color: 'rgba(148,196,255,0.85)' }}>
            Join a tight-knit, globally distributed team at the world's first
            Agentforce-centric Salesforce consultancy. We are ambitious, collaborative,
            and working on the most exciting technology in the CRM space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-2">
            <a href="#open-roles" className="btn-gold text-base px-8 py-4">
              View Open Roles <ArrowRight className="w-5 h-5" />
            </a>
            <a href="mailto:hr@cloudsheer.com?subject=CV Submission - Cloudsheer Careers" className="btn-ghost text-base px-8 py-4"
              style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'white' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.10)' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent' }}
            >
              Send Speculative CV
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats strip ──────────────────────────────────────── */}
      <section style={{ backgroundColor: '#0176D3' }}>
        <div className="section-wrap py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '40+',   label: 'Team Members Globally' },
              { value: '4',     label: 'Office Locations' },
              { value: '60+',   label: 'Salesforce Certifications' },
              { value: '3',     label: 'Roles Open Now' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl font-black text-white">{value}</p>
                <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.75)' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Hiring Process ───────────────────────────────── */}
      <section className="py-10 sm:py-16" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag mx-auto mb-5">Our Process</div>
            <h2 className="section-title mb-4">Simple. Transparent. <span className="gradient-text">Fast.</span></h2>
            <p className="section-sub">We respect your time - our hiring process is designed to move quickly and give you a clear picture of the role.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            {[
              { num: '01', title: 'Apply',         desc: 'Send your CV to hr@cloudsheer.com or click Apply on the role below. We review every application personally.' },
              { num: '02', title: 'Intro Call',    desc: 'A 30-minute video call with our hiring lead. We want to understand your background and answer your questions.' },
              { num: '03', title: 'Skills Review', desc: 'A short take-home task or technical interview relevant to the role - no whiteboard marathons.' },
              { num: '04', title: 'Final & Offer', desc: 'A conversation with a senior leader, followed by a fast decision. We aim to complete the process in under 2 weeks.' },
            ].map(({ num, title, desc }, i) => (
              <div key={num} className="glass-card p-6 relative">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black text-white mb-4"
                  style={{ backgroundColor: '#0176D3' }}>
                  {num}
                </div>
                {i < 3 && (
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

      {/* ── Open Roles ───────────────────────────────────────── */}
      <section id="open-roles" className="py-10 sm:py-16 bg-white">
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag mx-auto mb-5">
              <Zap className="w-3.5 h-3.5" /> Open Positions
            </div>
            <h2 className="section-title mb-4">
              We Are <span className="gradient-text">Currently Hiring</span>
            </h2>
            <p className="section-sub">
              Three roles open right now. Click any role to see the full job description and apply directly.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-5">
            {openRoles.map(role => (
              <RoleCard key={role.id} role={role} />
            ))}
          </div>

          {/* Speculative applications */}
          <div className="max-w-4xl mx-auto mt-8 rounded-2xl p-7 flex flex-col sm:flex-row items-center justify-between gap-5"
            style={{ background: 'linear-gradient(135deg,#032D60,#0A3F80)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div>
              <p className="text-white font-bold text-lg mb-1">
                Do not see the right role?
              </p>
              <p className="text-sm" style={{ color: 'rgba(148,196,255,0.80)' }}>
                We are always interested in exceptional Salesforce talent. Send us your CV
                and we will reach out when a suitable role opens.
              </p>
            </div>
            <a
              href="mailto:hr@cloudsheer.com?subject=Speculative Application"
              className="btn-gold shrink-0"
            >
              Send Your CV <Send className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <FAQ title="Careers FAQ" items={careerFaqs} />
    </>
  )
}
