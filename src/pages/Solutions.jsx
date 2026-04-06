import { Link } from 'react-router-dom'
import {
  ArrowRight, Bot, CheckCircle2, Sparkles, ChevronRight,
  ShoppingCart, Headphones, Mail, Database, BarChart3, Zap,
} from 'lucide-react'

function PageHero() {
  return (
    <section className="relative pt-36 pb-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="glow-dot w-[600px] h-[600px] bg-cs-blue/10 top-[-200px] left-[50%] -translate-x-1/2" />
      <div className="section-wrap relative z-10 text-center max-w-3xl mx-auto">
        <div className="tag mx-auto mb-6"><Bot className="w-3.5 h-3.5" /> Solutions</div>
        <h1 className="section-title mb-5">
          Cut Costs. Close More Deals.{' '}
          <span className="gradient-text">Scale Without Hiring.</span>
        </h1>
        <p className="section-sub">
          Every solution we build is designed to deliver one thing: measurable business
          outcomes - lower costs, faster revenue, and happier customers.
        </p>
      </div>
    </section>
  )
}

function AgentforceHero() {
  const agents = [
    {
      name: 'Service Agent',
      icon: <Headphones className="w-5 h-5" />,
      metric: '78% deflection',
      metricColor: 'text-cs-blue bg-cs-blue/8 border-cs-blue/20',
      border: 'border-cs-blue/20 hover:border-cs-blue/40',
      features: [
        'Resolves Tier-1 & Tier-2 cases autonomously',
        'Searches knowledge base in real time',
        'Updates case fields, status & resolution',
        'Seamless human escalation with full context',
        'Handles email, chat & messaging channels',
        'Learns from every resolved interaction',
      ],
    },
    {
      name: 'Sales Development Agent',
      icon: <ShoppingCart className="w-5 h-5" />,
      metric: '3× faster response',
      metricColor: 'text-cs-gold bg-cs-gold/10 border-cs-gold/25',
      border: 'border-cs-electric/20 hover:border-cs-electric/40',
      features: [
        'Qualifies inbound leads instantly, 24/7',
        'Sends personalised outreach sequences',
        'Books discovery calls into rep calendars',
        'Updates lead & opportunity records',
        'Enriches contact data via connected sources',
        'Hands off hot leads to reps with context',
      ],
    },
    {
      name: 'Operations Agent',
      icon: <Zap className="w-5 h-5" />,
      metric: '12 hrs/week saved',
      metricColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      border: 'border-cs-purple/20 hover:border-cs-purple/40',
      features: [
        'Automates routine record updates & hygiene',
        'Generates and distributes scheduled reports',
        'Triggers cross-system data sync workflows',
        'Monitors pipeline health & alerts on risk',
        'Manages approval routing & notifications',
        'Tracks SLAs and escalates automatically',
      ],
    },
  ]

  return (
    <section className="py-24 bg-cs-bgsub">
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="tag mx-auto mb-5"><Bot className="w-3.5 h-3.5" /> Agentforce Agents</div>
          <h2 className="section-title mb-4">
            Agents That Drive <span className="gradient-text">Real Business Results</span>
          </h2>
          <p className="section-sub">Each agent is built to solve a specific business problem - reducing costs, accelerating revenue, or improving customer experience.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {agents.map(({ name, icon, metric, metricColor, border, features }) => (
            <div key={name} className={`glass-card border ${border} p-7 flex flex-col hover:-translate-y-1 transition-all duration-300`}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-cs-blue/8 border border-cs-blue/15 flex items-center justify-center text-cs-blue">
                  {icon}
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${metricColor}`}>{metric} avg.</span>
              </div>
              <h3 className="text-cs-navy font-bold text-lg mb-5">{name}</h3>
              <ul className="space-y-2.5 flex-grow mb-6">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-cs-muted">
                    <CheckCircle2 className="w-4 h-4 text-cs-blue shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="flex items-center gap-1.5 text-cs-blue text-sm font-semibold hover:gap-2.5 transition-all">
                Build this agent <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TrustLayer() {
  const pillars = [
    { title: 'Zero Hallucination Risk',    desc: 'Agents only use your verified Salesforce data - your customers never get a wrong answer.' },
    { title: 'Full Audit Trail',          desc: 'Every action is logged and traceable. Your compliance team gets complete visibility.' },
    { title: 'Your Rules, Always',        desc: 'Agents follow the guardrails you set - permissions, escalation rules, and business logic.' },
    { title: 'Human Handoff in One Click', desc: 'Any conversation can be escalated to a human with full context - no information lost.' },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="glow-dot w-[400px] h-[400px] bg-cs-blue/8 top-[-100px] right-[-100px]" />
      <div className="section-wrap relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="tag mb-5"><Sparkles className="w-3.5 h-3.5" /> Built-In Trust</div>
            <h2 className="section-title mb-5">
              AI Your Compliance Team<br /><span className="gradient-text">Will Actually Approve.</span>
            </h2>
            <p className="section-sub mb-8">
              Every AI agent runs on Salesforce's Einstein Trust Layer - meaning
              your data stays safe, every action is auditable, and your customers
              always get accurate, governed responses.
            </p>
            <a href="https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="btn-primary">
              See How It Protects Your Business <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {pillars.map(({ title, desc }) => (
              <div key={title} className="glass-card p-5">
                <div className="w-8 h-8 rounded-lg bg-cs-blue/8 border border-cs-blue/15 flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-4 h-4 text-cs-blue" />
                </div>
                <h4 className="text-cs-navy font-semibold text-sm mb-1.5">{title}</h4>
                <p className="text-cs-muted text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const clouds = [
  { icon: <ShoppingCart className="w-6 h-6" />, title: 'Sales Cloud + Agentforce',       desc: 'Close 29% more deals with AI-powered lead qualification, pipeline visibility, and automated follow-ups that never let a lead go cold.', tags: ['29% More Revenue', 'Faster Deals', 'AI Forecasting'] },
  { icon: <Headphones className="w-6 h-6" />,   title: 'Service Cloud + Agentforce',     desc: 'Resolve 78% of support cases without a human. Cut costs by 40% while keeping CSAT above 4.8/5.',             tags: ['78% Deflection', '40% Cost Savings', 'Omni-Channel'] },
  { icon: <Mail className="w-6 h-6" />,         title: 'Marketing Cloud',                desc: 'Increase marketing ROI by 28% with AI-personalised journeys, smart send times, and full attribution reporting.',                  tags: ['28% Higher ROI', '67% Conversion Lift', 'Einstein AI'] },
  { icon: <Database className="w-6 h-6" />,     title: 'Data Cloud',                     desc: 'Unify every customer data source in real time - powering smarter agents, sharper segmentation, and better decisions.',       tags: ['Real-Time Data', 'Single Customer View', 'AI-Ready'] },
  { icon: <BarChart3 className="w-6 h-6" />,    title: 'CRM Analytics',                  desc: 'Cut reporting time by 65% and improve forecast accuracy by 28% with dashboards embedded where your team already works.',      tags: ['65% Faster Reports', '28% Better Forecasts', 'Einstein AI'] },
  { icon: <Bot className="w-6 h-6" />,          title: 'Custom Agentforce Builds',       desc: 'Got a unique process? We build custom AI agents for HR, Finance, Operations - any function where automation drives ROI.',         tags: ['Custom Workflows', 'Any Department', 'Measurable ROI'] },
]

function SalesforceClouds() {
  return (
    <section className="py-24 bg-cs-bgsub">
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="tag mx-auto mb-5">Full Salesforce Suite</div>
          <h2 className="section-title mb-4">One Platform. <span className="gradient-text">Every Business Outcome Covered.</span></h2>
          <p className="section-sub">Whether you need to sell more, support better, market smarter, or operate leaner - there is a Salesforce solution that delivers measurable results.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {clouds.map(({ icon, title, desc, tags }) => (
            <div key={title} className="glass-card p-6 group hover:-translate-y-1 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-cs-blue/8 border border-cs-blue/15 flex items-center justify-center text-cs-blue mb-4 group-hover:bg-cs-blue group-hover:text-white transition-all">
                {icon}
              </div>
              <h3 className="text-cs-navy font-bold mb-2">{title}</h3>
              <p className="text-cs-muted text-sm leading-relaxed mb-4">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="text-[11px] text-cs-muted bg-cs-bgsub border border-cs-blue/10 px-2.5 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="py-24 bg-cs-navy relative overflow-hidden">
      <div className="glow-dot w-[600px] h-[600px] bg-cs-blue/30 top-[-200px] left-[50%] -translate-x-1/2" />
      <div className="section-wrap relative z-10 text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-black text-white mb-5">
          Ready to Build Your<br /><span className="gradient-text-gold">First AI Agent?</span>
        </h2>
        <p className="text-blue-200 mb-8">
          In 30 minutes, we will identify your highest-impact use case, estimate the ROI, and give you a clear plan to get there - no commitment required.
        </p>
        <a href="https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="btn-gold text-base px-8 py-4">
          Book Free Discovery Call <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}

export default function Solutions() {
  return (
    <>
      <PageHero />
      <AgentforceHero />
      <TrustLayer />
      <SalesforceClouds />
      <CTA />
    </>
  )
}
