import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle2, Zap, TrendingUp, Clock, DollarSign,
  MessageSquare, Users, BarChart2, Shield, Star, ChevronRight,
  Hash, Workflow, BrainCircuit, Layers,
} from 'lucide-react'

const CAL_LINK = 'https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true'

const painPoints = [
  { pain: "Critical decisions stall because context is buried across email threads, docs, and meetings", fix: "<strong>Slack Channels</strong> keep every conversation and decision in one searchable place" },
  { pain: "Your sales team wastes hours toggling between CRM, email, and chat to update deals", fix: "<strong>Sales Elevate</strong> surfaces pipeline data - reps update deals without leaving Slack" },
  { pain: "New hires take weeks to get up to speed because institutional knowledge lives in people's heads", fix: "<strong>Slack AI</strong> summarises channels, threads, and Canvas docs - answers in seconds" },
  { pain: "Your team sits through 10+ meetings a week that could have been a message or a quick huddle", fix: "<strong>Huddles and Clips</strong> replace meetings with async video and live audio" },
  { pain: "Manual handoffs between teams cause delays, errors, and dropped tasks", fix: "<strong>Workflow Builder</strong> automates approvals, routing, and notifications - no code required" },
]

const outcomes = [
  { icon: TrendingUp,    value: '47%',  label: 'increase in productivity reported by organisations after deploying Slack as their work operating system', color: '#0176D3' },
  { icon: Clock,         value: '29%',  label: 'reduction in meetings - teams replace status updates and syncs with async channels and huddles', color: '#10B981' },
  { icon: MessageSquare, value: '32%',  label: 'fewer emails sent internally - conversations move to channels where everyone has context', color: '#F59E0B' },
  { icon: Users,         value: '85%',  label: 'of Slack users say it improves communication and collaboration across their organisation', color: '#6366F1' },
  { icon: DollarSign,    value: '3x',   label: 'faster cross-functional decision-making when teams centralise communication in Slack channels', color: '#06B6D4' },
  { icon: BarChart2,     value: '26%',  label: 'improvement in employee satisfaction scores after consolidating tools and reducing context-switching', color: '#0176D3' },
]

const useCases = [
  {
    dept: 'Sales & Revenue',
    icon: TrendingUp,
    color: '#0176D3',
    headline: 'Close deals faster without leaving the conversation.',
    points: [
      "<strong>Sales Elevate</strong> pulls pipeline data into channels - manage deals without switching to CRM",
      "<strong>Account channels</strong> surface deal alerts, renewal dates, and contact activity from Salesforce",
      "<strong>Huddles</strong> loop in solutions engineers, legal, or leadership instantly - no scheduling needed",
      "<strong>Slack AI</strong> summarises deal threads so anyone joining mid-cycle gets full context in seconds",
      "<strong>Automated workflows</strong> route discount and contract approvals - days of back-and-forth to minutes",
    ],
  },
  {
    dept: 'Operations & IT',
    icon: Workflow,
    color: '#10B981',
    headline: 'Automate handoffs. Eliminate busywork.',
    points: [
      "<strong>Workflow Builder</strong> creates no-code automations for approvals, onboarding, and request routing",
      "<strong>2,600+ app integrations</strong> - Salesforce, Jira, Google Workspace, ServiceNow - all in one place",
      "<strong>Slack AI</strong> finds answers across connected tools and conversations, saving hours weekly",
      "<strong>Canvas docs</strong> turn tribal knowledge into living documents pinned inside channels",
      "<strong>Incident channels</strong> spin up instantly with the right people, runbooks, and status updates",
    ],
  },
  {
    dept: 'Customer Success',
    icon: Users,
    color: '#F59E0B',
    headline: 'Retain more customers with faster, coordinated responses.',
    points: [
      "<strong>Slack Connect</strong> brings your team and clients into one space for real-time collaboration",
      "<strong>Account health alerts</strong> from Salesforce surface in channels so CSMs catch churn signals early",
      "<strong>Slack AI</strong> summarises customer threads so CSM handoffs lose no details or commitments",
      "<strong>Workflow automations</strong> trigger QBR prep, renewal reminders, and escalation paths from CRM data",
      "<strong>Huddles</strong> let your team swarm on urgent customer issues in seconds - no calendar invites",
    ],
  },
  {
    dept: 'Leadership & Strategy',
    icon: BarChart2,
    color: '#6366F1',
    headline: 'Make faster decisions with complete visibility.',
    points: [
      "<strong>Executive channels</strong> centralise updates from every department - no chasing status reports",
      "<strong>Slack AI</strong> generates daily digests and summaries so leaders stay informed effortlessly",
      "<strong>Canvas docs</strong> serve as living strategy briefs, decision logs, and project trackers",
      "<strong>Automated dashboards</strong> push KPI updates from Salesforce and Tableau into leadership channels",
      "<strong>Searchable history</strong> creates institutional memory - decisions and outcomes are never lost",
    ],
  },
]

const whyUs = [
  { title: 'Slack + Salesforce Integration Experts',  desc: "We specialise in connecting Slack to your Salesforce ecosystem - CRM, Service Cloud, Marketing Cloud - so data flows seamlessly and your team works from one platform." },
  { title: 'Adoption-First Methodology',              desc: "A Slack deployment only works if people actually use it. We design channel structures, workflows, and governance that drive adoption from day one - not shelfware." },
  { title: 'Live in 2-4 Weeks',                       desc: "From channel architecture to workflow automation to Salesforce integration, we get your team running on Slack fast - with training, templates, and support included." },
  { title: 'Zero Risk to Start',                      desc: "Book a free 30-minute discovery call. We will assess your current collaboration stack, identify quick wins, and hand you a deployment roadmap - no cost, no commitment." },
]

export default function SlackPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#032D60 0%,#0A3F80 55%,#4A154B 100%)' }}>
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="glow-dot w-[500px] h-[500px] top-[-150px] right-[-80px]"
          style={{ backgroundColor: '#E01E5A', opacity: 0.15 }} />

        <div className="section-wrap relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="tag-white mx-auto mb-6 inline-flex">
              <Zap className="w-3.5 h-3.5" /> Salesforce Slack
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4 sm:mb-6 animate-fade-up text-center md:text-left">
              Cut meetings 29%. Kill email overload.{' '}
              <span className="gradient-text-gold">Make every team 47% more productive.</span>
            </h1>
            <p className="text-xl leading-relaxed mb-10 animate-fade-up-1"
              style={{ color: 'rgba(148,196,255,0.90)' }}>
              Slack is the AI-powered work operating system that connects your people, tools, and Salesforce data in one place - so decisions happen faster, context is never lost, and your team spends time on work that matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-2">
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
                className="btn-gold text-base px-8 py-4">
                See What Slack Can Do For Your Team <ArrowRight className="w-5 h-5" />
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
              The Productivity Killers <span className="gradient-text">Slack Eliminates</span>
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
              Real Teams. Real Productivity Gains.
            </h2>
            <p className="section-sub-white">
              These are verified results from organisations running Slack as their primary collaboration platform - not theoretical projections.
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

      {/* ── Use Cases by Department ──────────────────────────── */}
      <section className="py-14 sm:py-24 bg-white">
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="tag mx-auto mb-5">Where It Delivers</div>
            <h2 className="section-title mb-4">
              One Platform That Drives Results <span className="gradient-text">Across Every Team</span>
            </h2>
            <p className="section-sub">
              Slack does not just replace email - it becomes the operating system where your people, data, and workflows come together to move faster.
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
              Why Businesses Choose Us <span className="gradient-text">For Slack</span>
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
            <Zap className="w-3.5 h-3.5" /> Free Discovery Call
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-white mb-5">
            Find Out Exactly How Slack<br />
            <span className="gradient-text-gold">Transforms Your Team's Productivity</span>
          </h2>
          <p className="text-lg mb-4" style={{ color: 'rgba(148,196,255,0.85)' }}>
            In 30 minutes we will assess your current collaboration stack, identify the workflows costing you the most time, and show you exactly how a Slack deployment with Salesforce integration would work - with a timeline and expected outcomes.
          </p>
          <ul className="flex flex-col sm:flex-row gap-3 justify-center mb-10 text-sm"
            style={{ color: 'rgba(148,196,255,0.80)' }}>
            {['Custom deployment plan included', 'No sales pitch - just strategy', 'Walk away with actionable next steps'].map(i => (
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
