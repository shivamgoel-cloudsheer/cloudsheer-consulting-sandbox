import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle2, Zap, TrendingUp, Clock, DollarSign,
  Headphones, Users, BarChart2, Shield, MessageSquare, Star,
  Bot, Globe,
} from 'lucide-react'
import WhatWeShip from '../../components/WhatWeShip'

const CAL_LINK = 'https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true'

const painPoints = [
  { pain: "Your support team spends 60%+ of their day on repetitive, low-value tickets", fix: "<strong>Agentforce Service Agent</strong> resolves routine cases autonomously around the clock" },
  { pain: "Leads slip through the cracks because response times are too slow", fix: "<strong>Agentforce SDR Agent</strong> engages every lead in seconds and books meetings 24/7" },
  { pain: "Every customer interaction costs $11+ when a human handles it", fix: "<strong>Agentforce</strong> conversations cost around $2 each - 80%+ cost reduction" },
  { pain: "Scaling your team means scaling payroll, training, and management overhead", fix: "<strong>Atlas Reasoning Engine</strong> handles demand spikes with no hiring needed" },
  { pain: "Customers get inconsistent answers depending on who they reach", fix: "<strong>Einstein Trust Layer</strong> ensures accurate, grounded responses every time" },
]

const outcomes = [
  { icon: Headphones, value: '40%',     label: 'increase in case resolution at Wiley after deploying Agentforce for customer support', color: '#0176D3' },
  { icon: Clock,      value: '73%',     label: 'of restaurant queries handled autonomously by OpenTable"s Agentforce deployment', color: '#10B981' },
  { icon: DollarSign, value: '$2 avg',  label: 'cost per Agentforce conversation vs. $11+ per human-handled interaction', color: '#F59E0B' },
  { icon: TrendingUp, value: '10,000+', label: 'Agentforce deals closed by Salesforce in the first months after launch', color: '#6366F1' },
  { icon: MessageSquare, value: '90%',  label: 'reduction in response time for customers using always-on AI agent support', color: '#06B6D4' },
  { icon: Users,      value: '83%',     label: 'of Agentforce customers report measurable productivity gains within the first quarter', color: '#0176D3' },
]

const whatWeShip = [
  { icon: Bot,    title: 'Agent design + build',    desc: 'Topics, Actions, Instructions, and Atlas reasoning tuned to your data and channels.' },
  { icon: Globe,  title: 'Headless 360 wiring',     desc: 'Surface every Salesforce capability as an API or MCP tool for agent use.' },
  { icon: Shield, title: 'Testing Center + evals',  desc: 'Custom scoring rubrics, Agent Script tests, and A/B validation before production.' },
  { icon: Zap,    title: 'Multi-channel deploy',    desc: 'Live across Slack, WhatsApp, voice, mobile, and Experience Layer in one build.' },
]

const whyUs = [
  { title: 'Agentforce Specialists',     desc: "We focus exclusively on Agentforce deployments. That singular focus means deeper expertise, faster delivery, and better outcomes than any generalist SI or consultancy." },
  { title: 'Proven Deployment Playbook',  desc: "Our team has delivered Agentforce across service, sales, ops, and commerce - in financial services, retail, tech, and more. We know what works on day one." },
  { title: 'Live in 4-6 Weeks',          desc: "Most pilots go from kickoff to production in under six weeks. We move fast with sandbox testing, iterative refinement, and a bias toward getting you live - not stuck in planning." },
  { title: 'Zero Risk to Start',         desc: "Book a free 30-minute discovery call. We will map your highest-impact use case, estimate ROI, and hand you a deployment plan - no cost, no commitment, no sales pitch." },
]

export default function AgentforcePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-20 sm:pt-24 pb-6 sm:pb-10 overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#032D60 0%,#0A3F80 55%,#0176D3 100%)' }}>
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="glow-dot w-[500px] h-[500px] top-[-150px] right-[-80px]"
          style={{ backgroundColor: '#38BDF8', opacity: 0.15 }} />

        <div className="section-wrap relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="tag-white mx-auto mb-6 inline-flex">
              <Zap className="w-3.5 h-3.5" /> Agentforce by Salesforce
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl 2xl:text-6xl font-black text-white leading-tight mb-4 sm:mb-6 animate-fade-up text-center">
              Build Once. Deploy Everywhere.
              <br /><span className="gradient-text-gold">Agentforce + Headless 360.</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed mb-6 animate-fade-up-1"
              style={{ color: 'rgba(148,196,255,0.90)' }}>
              Autonomous agents powered by Atlas Reasoning Engine, built with Agent Builder and 60+ MCP tools, deployed across every channel via Experience Layer - Slack, WhatsApp, voice, web, and mobile.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up-2">
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
                className="btn-gold text-base px-8 py-4">
                See What Agentforce Can Do For You <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Agentforce Builder screenshot */}
          <div className="mt-4 max-w-xl 2xl:max-w-2xl mx-auto hidden md:block animate-fade-up-3">
            <img loading="lazy" src={import.meta.env.BASE_URL + 'icons/agentforce-builder.webp'} alt="Agentforce Builder - Agent templates and configuration"
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
              The Costly Problems <span className="gradient-text">Agentforce Eliminates</span>
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
              Real Businesses. Real Outcomes.
            </h2>
            <p className="section-sub-white">
              These are verified results from companies already running Agentforce in production - not projections or pilot estimates.
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
              Get Results Like These in Your Business <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── What We Ship ─────────────────────────────────────── */}
      <WhatWeShip platformName="Agentforce" accentColor="#0176D3" items={whatWeShip} />

      {/* ── Why Cloudsheer ───────────────────────────────────── */}
      <section className="py-10 sm:py-16" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag mx-auto mb-5">
              <Star className="w-3.5 h-3.5" /> Why Cloudsheer
            </div>
            <h2 className="section-title mb-4">
              Why Businesses Choose Us <span className="gradient-text">For Agentforce</span>
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
            Find Out Exactly What<br />
            <span className="gradient-text-gold">Agentforce Can Deliver For You</span>
          </h2>
          <p className="text-lg mb-4" style={{ color: 'rgba(148,196,255,0.85)' }}>
            In 30 minutes we will analyze your business, identify the highest-ROI use case, and show you exactly what an Agentforce deployment would look like - with a timeline, cost estimate, and expected outcomes.
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
