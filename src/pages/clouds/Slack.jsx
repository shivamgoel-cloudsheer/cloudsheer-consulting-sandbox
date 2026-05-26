import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle2, Zap, TrendingUp, Clock, DollarSign,
  MessageSquare, Users, BarChart2, Shield, Star,
  Hash, Workflow, BrainCircuit, Layers, RefreshCw, Code,
} from 'lucide-react'
import WhatWeShip from '../../components/WhatWeShip'

const CAL_LINK = 'https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true'
const BASE = import.meta.env.BASE_URL

const painPoints = [
  { pain: "Critical decisions stall because context is buried across email threads, docs, and meetings", fix: "<strong>Channels</strong> keep every conversation and decision in one searchable place" },
  { pain: "Your sales team wastes hours toggling between CRM, email, and chat to update deals", fix: "<strong>Slack Sales Elevate</strong> surfaces pipeline - reps update deals without leaving" },
  { pain: "New hires take weeks to get up to speed because institutional knowledge lives in people's heads", fix: "<strong>Slack AI</strong> summarizes Channels, threads, and Canvas - answers in seconds" },
  { pain: "Your team sits through 10+ meetings a week that could have been a message or a quick huddle", fix: "<strong>Huddles and Clips</strong> replace meetings with async video and live audio" },
  { pain: "Manual handoffs between teams cause delays, errors, and dropped tasks", fix: "<strong>Workflow Builder</strong> automates approvals, routing, and notifications - no code" },
]

const outcomes = [
  { icon: TrendingUp,    value: '47%',  label: 'increase in productivity reported by organizations after deploying Slack as their work operating system', color: '#0176D3' },
  { icon: Clock,         value: '29%',  label: 'reduction in meetings - teams replace status updates and syncs with async channels and huddles', color: '#10B981' },
  { icon: MessageSquare, value: '32%',  label: 'fewer emails sent internally - conversations move to channels where everyone has context', color: '#F59E0B' },
  { icon: Users,         value: '85%',  label: 'of Slack users say it improves communication and collaboration across their organization', color: '#6366F1' },
  { icon: DollarSign,    value: '3x',   label: 'faster cross-functional decision-making when teams centralise communication in Slack channels', color: '#06B6D4' },
  { icon: BarChart2,     value: '26%',  label: 'improvement in employee satisfaction scores after consolidating tools and reducing context-switching', color: '#0176D3' },
]

const whatWeShip = [
  { icon: Workflow,      title: 'Workflow automation',       desc: 'Slack Workflows with conditional logic, approvals, and Salesforce write-back triggers.' },
  { icon: MessageSquare, title: 'Channel design + governance', desc: 'Channel taxonomy, naming conventions, and bot governance that scale past 1,000 channels.' },
  { icon: RefreshCw,     title: 'Salesforce ↔ Slack sync',   desc: 'Sales Elevate, Service swarming channels, and Agentforce agents embedded inside Slack.' },
  { icon: Code,          title: 'Custom Slack apps',         desc: 'Modals, slash commands, and Block Kit experiences built against your Slack workspace.' },
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
      <section className="relative pt-20 sm:pt-24 pb-6 sm:pb-10 overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#032D60 0%,#0A3F80 55%,#4A154B 100%)' }}>
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="glow-dot w-[500px] h-[500px] top-[-150px] right-[-80px]"
          style={{ backgroundColor: '#E01E5A', opacity: 0.15 }} />

        <div className="section-wrap relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="tag-white mx-auto mb-6 inline-flex">
              <Zap className="w-3.5 h-3.5" /> Slack from Salesforce
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl 2xl:text-6xl font-black text-white leading-tight mb-4 sm:mb-6 animate-fade-up text-center">
              Cut meetings 29%. Kill email overload.
              <br /><span className="gradient-text-gold">Make every team 47% more productive.</span>
            </h1>
            <p className="text-sm sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-8 animate-fade-up-1"
              style={{ color: 'rgba(148,196,255,0.90)' }}>
              Slack connects your people, tools, and Salesforce data in one place. Decisions happen faster, context is never lost.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up-2">
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
                className="btn-gold text-base px-8 py-4">
                See What Slack Can Do For Your Team <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Slack desktop screenshot */}
          <div className="mt-4 max-w-xl 2xl:max-w-2xl mx-auto hidden md:block animate-fade-up-2">
            <img loading="lazy" src={BASE + 'slack/slack-desktop.webp'} alt="Slack desktop interface"
              className="w-full rounded-xl"
              style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)' }} />
          </div>
        </div>
      </section>

      {/* ── Pain Points ──────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
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
      <section className="py-12 sm:py-16 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#032D60,#0A3F80)' }}>
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="section-wrap relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag-white mx-auto mb-5">Proven Results</div>
            <h2 className="section-title-white mb-4">
              Real Teams. Real Productivity Gains.
            </h2>
            <p className="section-sub-white">
              These are verified results from organizations running Slack as their primary collaboration platform - not theoretical projections.
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

      {/* ── What We Ship ─────────────────────────────────────── */}
      <WhatWeShip platformName="Slack" accentColor="#0176D3" items={whatWeShip} />

      {/* ── Why Cloudsheer ───────────────────────────────────── */}
      <section className="py-10 sm:py-16" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
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
      <section className="py-14 sm:py-10 sm:py-16 relative overflow-hidden"
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
