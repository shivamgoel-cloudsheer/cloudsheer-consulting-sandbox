import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import {
  ArrowRight, Bot, RefreshCw, Sparkles, Workflow, Globe, Network, Shield,
  CheckCircle2, Layers, Zap, Database,
} from 'lucide-react'
import FAQ from '../components/FAQ'
import { addPageSchema, faqPageSchema } from '../seoConfig'

const ACCENT = '#7B4AE2'
const ACCENT_DARK = '#5B2DA6'
const DEEP = '#2E1065'
const TINT = 'rgba(123,74,226,0.10)'

const aiAgentsFaqs = [
  { q: 'When should we build a custom agent vs use Agentforce or Breeze?', a: 'Packaged AI (Agentforce, Breeze, Copilot Studio) wins when your work mostly lives inside that platform - e.g., a service agent that operates on Salesforce cases, or a Copilot that lives in Teams. A custom agent wins when (1) the work spans systems that no single platform owns, (2) you need to retire an aging system rather than extend it, or (3) you need control over the underlying LLM, evals, and observability. We will tell you which path fits in the discovery call.' },
  { q: 'Which LLMs do you build on?', a: 'Anthropic Claude, OpenAI GPT, Google Gemini, AWS Bedrock-hosted models (Claude, Llama, Titan), and open-weight models when self-hosting is required. We pick based on the workload - reasoning depth, tool use quality, latency, cost, and where your data must live.' },
  { q: 'How do you handle evals and quality?', a: 'Every agent ships with an eval suite from day one - golden test cases, scoring rubrics, regression detection. Production runs are logged and sampled for ongoing eval. When the agent fails, we know about it before the customer does, and we can compare versions against the same test set before rolling forward.' },
  { q: 'What about hallucination and safety?', a: 'Three layers: (1) Retrieval grounding - agents answer from your data, not the model weights. (2) Guardrails for PII, prompt injection, and out-of-scope requests. (3) Human-in-the-loop for high-stakes actions. We do not deploy agents that take destructive actions without confirmation.' },
  { q: 'Can the agent take actions, not just answer questions?', a: 'Yes. Through function calling and MCP, agents can update records in Salesforce / HubSpot / Dynamics, create tickets in Jira, send approved messages in Slack, run queries against your data warehouse, or trigger workflows in your existing systems. Tool access is RBAC-scoped so the agent can only do what its role allows.' },
  { q: 'How do you handle ongoing maintenance?', a: 'Custom agents need different ops than packaged tools - LLM versions change, prompts drift, business needs evolve. Our managed agent ops covers eval regression detection, prompt and model version management, cost monitoring, and quarterly capability reviews. Sized to your usage, not a fixed retainer.' },
]

function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${DEEP} 0%, #1E0A4D 50%, ${ACCENT_DARK} 100%)` }}>
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="glow-dot w-[700px] h-[700px] top-[-200px] left-[-100px]"
        style={{ backgroundColor: 'rgba(123,74,226,0.30)' }} />
      <div className="glow-dot w-[500px] h-[500px] bottom-[-150px] right-[-50px] hidden md:block"
        style={{ backgroundColor: 'rgba(167,139,250,0.20)' }} />

      <div className="section-wrap relative z-10 pt-24 pb-12 sm:pt-32 sm:pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="tag-white inline-flex mb-6 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse-slow" style={{ backgroundColor: '#A78BFA' }} />
            Custom AI Agents
          </div>
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6 animate-fade-up-1"
            style={{ color: '#E9D5FF', backgroundColor: 'rgba(167,139,250,0.15)', border: '1px solid rgba(167,139,250,0.35)' }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse-slow" style={{ backgroundColor: '#A78BFA' }} />
            New capability
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6 tracking-tight animate-fade-up-1">
            AI Agents That<br />
            <span style={{ background: 'linear-gradient(135deg, #A78BFA, #DDD6FE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Retire Legacy Systems.
            </span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto animate-fade-up-2"
            style={{ color: 'rgba(255,255,255,0.85)' }}>
            When a box product cannot be made to fit, we build the agent that does - production-ready, observable, and safe to put in front of customers. Bring your aging CRM, ERP, or ticketing tool; we will give you the agent that replaces it.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up-3">
            <a href="https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-medium px-7 py-3.5 rounded-xl transition-all duration-200 text-sm sm:text-base"
              style={{ background: `linear-gradient(135deg, ${ACCENT}, #A78BFA)`, color: 'white', boxShadow: `0 8px 28px ${ACCENT}70` }}>
              Book AI Agent Discovery Call <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/solutions"
              className="inline-flex items-center justify-center gap-2 font-medium px-7 py-3.5 rounded-xl transition-all duration-200 text-sm sm:text-base"
              style={{ border: '1.5px solid rgba(255,255,255,0.25)', color: 'white' }}>
              Back to Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function Capabilities() {
  const items = [
    {
      id: 'legacy',
      icon: <RefreshCw className="w-6 h-6" />,
      title: 'Legacy System Modernization',
      desc: 'Replace aging CRMs, ERPs, ticketing tools, and home-grown apps with agents that work against the same underlying data - without the box-product tax.',
      points: [
        'Read-only mode first - agent works alongside the legacy system',
        'Gradual cut-over - shift one workflow at a time, not a big bang',
        'Data preservation - migrate or proxy, never lose history',
        'Run-rate cost reductions - kill the legacy license at the right moment',
      ],
    },
    {
      id: 'custom',
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Custom Agent Development',
      desc: 'Domain-specific agents built on your data, your rules, your workflows. Production-grade evals, guardrails, and observability from day one.',
      points: [
        'Eval suite with golden test cases, scoring rubrics',
        'Prompt and model version control',
        'Cost and latency monitoring',
        'Human-in-the-loop for high-stakes actions',
      ],
    },
    {
      id: 'rpa',
      icon: <Workflow className="w-6 h-6" />,
      title: 'RPA & Workflow Replacement',
      desc: 'AI-native automation beyond brittle screen-scraping bots. Reasoning over context, not just clicking buttons in a fixed sequence.',
      points: [
        'Replace fragile UI bots with API-driven agents',
        'Handle exceptions the legacy bot could not',
        'Decisioning based on context, not just rules',
        'Audit trail of every action and decision',
      ],
    },
    {
      id: 'llm',
      icon: <Globe className="w-6 h-6" />,
      title: 'LLM & Tool Integration',
      desc: 'Function calling, MCP, and RAG over your knowledge base. Plug agents into Salesforce, HubSpot, Dynamics, Slack, Jira, and your data warehouse.',
      points: [
        'Model Context Protocol (MCP) for clean tool boundaries',
        'Function calling with strict schemas',
        'RAG with vector search + reranking',
        'API gateways and rate-limit-aware retries',
      ],
    },
    {
      id: 'orchestration',
      icon: <Network className="w-6 h-6" />,
      title: 'Multi-Agent Orchestration',
      desc: 'Specialist agents that coordinate to ship work end-to-end - planner, executor, reviewer, verifier - with audit trails at every step.',
      points: [
        'Planner / executor / verifier patterns',
        'Stateful conversation across handoffs',
        'Token and cost budgets per workflow',
        'Replayable runs for incident review',
      ],
    },
    {
      id: 'safety',
      icon: <Shield className="w-6 h-6" />,
      title: 'Trust, Safety & Governance',
      desc: 'PII redaction, prompt-injection defenses, role-based tool access, and full conversation logs for compliance review.',
      points: [
        'PII detection and redaction in prompts and outputs',
        'Prompt-injection and jailbreak defenses',
        'Role-based access on the tool layer',
        'Conversation log retention with redaction policy',
      ],
    },
  ]

  return (
    <section className="py-16 sm:py-20" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="section-wrap">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="tag mx-auto mb-5" style={{ color: ACCENT, backgroundColor: TINT, borderColor: `${ACCENT}40` }}>
            <Bot className="w-3.5 h-3.5" /> What We Build
          </div>
          <h2 className="section-title mb-4">
            Six Capabilities for <span style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_DARK})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Production-Grade Agents</span>
          </h2>
          <p className="section-sub">
            Not demos. Not POCs. Agents that run in production, with the evals, observability, and guardrails it takes to keep them there.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ id, icon, title, desc, points }) => (
            <div key={id} id={id} className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: 'white', border: `1px solid ${ACCENT}20`, boxShadow: `0 2px 12px ${ACCENT}10` }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: TINT, color: ACCENT, border: `1px solid ${ACCENT}25` }}>
                {icon}
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#032D60' }}>{title}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748B' }}>{desc}</p>
              <ul className="space-y-2">
                {points.map(p => (
                  <li key={p} className="flex items-start gap-2 text-sm" style={{ color: '#475569' }}>
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: ACCENT }} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  const steps = [
    { n: '01', title: 'Discover',  desc: 'Understand the workflow being replaced, the data the agent needs access to, and the failure modes that cannot happen in production.' },
    { n: '02', title: 'Prototype', desc: 'Build the agent against a representative slice of your data. Get to a working demo in 2-3 weeks - not 3 months.' },
    { n: '03', title: 'Eval',      desc: 'Golden test cases, scoring rubrics, side-by-side comparisons. Quantitative pass/fail before going anywhere near production.' },
    { n: '04', title: 'Deploy',    desc: 'Production rollout in shadow mode, then read-only, then write access on a graduated basis. Continuous monitoring after go-live.' },
  ]
  return (
    <section className="py-16 sm:py-20" style={{ backgroundColor: '#F5F0FF' }}>
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="tag mx-auto mb-5" style={{ color: ACCENT, backgroundColor: 'white', borderColor: `${ACCENT}40` }}>
            How It Works
          </div>
          <h2 className="section-title mb-4">
            From Prompt to <span style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_DARK})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Production-Grade Agent</span>
          </h2>
          <p className="section-sub">A four-phase delivery model designed for the LLM era - tight loops, quantitative evals, and shadow-mode rollouts.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 z-0"
            style={{ background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT_DARK})` }} />
          {steps.map(({ n, title, desc }, i) => (
            <div key={n} className="rounded-2xl p-6 text-center relative z-10 animate-fade-up"
              style={{ backgroundColor: 'white', border: `1px solid ${ACCENT}20`, boxShadow: `0 4px 16px ${ACCENT}10`, animationDelay: `${i * 100}ms` }}>
              <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-black text-lg"
                style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_DARK})`, boxShadow: `0 6px 20px ${ACCENT}60` }}>
                {n}
              </div>
              <h3 className="font-bold mb-2" style={{ color: '#032D60' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function UseCases() {
  const cases = [
    {
      tag: 'Legacy CRM replacement',
      title: 'Retiring a 15-year-old custom CRM',
      challenge: 'In-house CRM built 15 years ago. Original developers long gone. UI hated by users. Adding any new field takes 3 weeks of dev work. Vendor support nonexistent.',
      result: 'Agent built on top of the existing database (read mode first), surfacing the data through chat plus a lightweight modern UI. Six months later, the legacy UI was decommissioned. Users got their time back, IT got the maintenance bill back.',
      metrics: ['15-yr legacy retired', '6-mo cutover', 'No data migration'],
    },
    {
      tag: 'Custom domain agent',
      title: 'AI underwriting assistant',
      challenge: 'Insurance underwriters spending 60% of their time gathering and cross-referencing data from policy docs, credit reports, and internal systems before they could even start a decision.',
      result: 'Custom agent that ingests application packets, queries internal systems, summarizes credit reports, flags policy exceptions, and produces a structured underwriting recommendation. Underwriter approves or overrides. 4.5x faster cycle time, full audit trail.',
      metrics: ['4.5x faster', 'Full audit trail', 'Human-in-loop'],
    },
    {
      tag: 'Multi-agent orchestration',
      title: 'End-to-end RFP response automation',
      challenge: 'Sales engineering team drowning in RFPs. 3-5 day response time, missing easy questions, copying answers from old responses that no longer match product reality.',
      result: 'Planner agent breaks RFP into question batches, executor agents draft answers using a continuously updated knowledge base, reviewer agent cross-checks claims against product docs, human approves. Response time down from days to hours.',
      metrics: ['Days to hours', 'Fresh source claims', '4-agent pipeline'],
    },
  ]
  return (
    <section className="py-16 sm:py-20" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="section-wrap">
        <div className="text-center mb-12">
          <div className="tag mx-auto mb-5" style={{ color: ACCENT, backgroundColor: TINT, borderColor: `${ACCENT}40` }}>
            Real Results
          </div>
          <h2 className="section-title mb-4">
            Three Scenarios <span style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_DARK})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Custom Agents Solve</span>
          </h2>
          <p className="section-sub max-w-2xl mx-auto">Anonymized results from recent custom AI agent engagements across industries.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map(({ tag, title, challenge, result, metrics }) => (
            <div key={title} className="rounded-2xl p-6 flex flex-col"
              style={{ backgroundColor: 'white', border: `1px solid ${ACCENT}20`, boxShadow: `0 4px 16px ${ACCENT}10` }}>
              <span className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: ACCENT }}>{tag}</span>
              <h3 className="font-bold text-lg mb-3" style={{ color: '#032D60' }}>{title}</h3>
              <div className="mb-4">
                <p className="text-xs font-semibold mb-1" style={{ color: '#032D60' }}>Challenge</p>
                <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{challenge}</p>
              </div>
              <div className="mb-5 flex-grow">
                <p className="text-xs font-semibold mb-1" style={{ color: '#032D60' }}>Result</p>
                <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{result}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: `1px solid ${ACCENT}20` }}>
                {metrics.map(m => (
                  <span key={m} className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: TINT, color: ACCENT, border: `1px solid ${ACCENT}30` }}>
                    {m}
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

function WhyUs() {
  const reasons = [
    { icon: <Layers className="w-5 h-5" />,   title: 'Evals-First Engineering', desc: 'Every agent ships with an eval suite from day one. We can quantitatively compare versions before rolling forward - no vibes-based decisions.' },
    { icon: <Database className="w-5 h-5" />, title: 'Grounded in Your Data',   desc: 'Agents answer from your knowledge base, not the model weights. Retrieval architectures designed and tuned per workload - no copy-paste RAG.' },
    { icon: <Shield className="w-5 h-5" />,   title: 'Safety as a Default',     desc: 'PII redaction, prompt-injection defenses, RBAC on tool access, and human-in-the-loop for high-stakes actions. We do not ship agents that can do damage they should not.' },
    { icon: <Zap className="w-5 h-5" />,      title: 'Production-Ready, Not POC', desc: 'We have shipped agents to production - cost monitoring, version control, replayable runs, on-call. Most demos do not survive contact with reality. Ours do.' },
  ]
  return (
    <section className="py-16 sm:py-20" style={{ backgroundColor: '#F5F0FF' }}>
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="tag mx-auto mb-5" style={{ color: ACCENT, backgroundColor: 'white', borderColor: `${ACCENT}40` }}>Why Cloudsheer for AI Agents</div>
          <h2 className="section-title mb-4">
            Why Teams Choose Us <span style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_DARK})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Over an AI Demo Shop</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {reasons.map(({ icon, title, desc }) => (
            <div key={title} className="rounded-2xl p-6"
              style={{ backgroundColor: 'white', border: `1px solid ${ACCENT}20`, boxShadow: `0 2px 12px ${ACCENT}10` }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: TINT, color: ACCENT, border: `1px solid ${ACCENT}25` }}>
                  {icon}
                </div>
                <h3 className="font-bold" style={{ color: '#032D60' }}>{title}</h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${DEEP} 0%, #1E0A4D 50%, ${ACCENT_DARK} 100%)` }}>
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="glow-dot w-[500px] h-[500px] top-[-100px] left-[20%]"
        style={{ backgroundColor: 'rgba(167,139,250,0.25)' }} />
      <div className="section-wrap relative z-10 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-5">
          What Legacy System <span style={{ background: 'linear-gradient(135deg, #A78BFA, #DDD6FE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Are You Replacing?</span>
        </h2>
        <p className="text-base sm:text-lg mb-10" style={{ color: 'rgba(255,255,255,0.85)' }}>
          30-minute call. Bring the workflow you wish you could retire, and we will tell you whether a custom agent is the right answer - and what it would take to ship one.
        </p>
        <a href="https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-xl transition-all duration-200"
          style={{ background: `linear-gradient(135deg, ${ACCENT}, #A78BFA)`, color: 'white', boxShadow: `0 8px 28px ${ACCENT}70` }}>
          Book AI Agent Discovery Call <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}

export default function AIAgents() {
  useEffect(() => {
    addPageSchema('faq', faqPageSchema(aiAgentsFaqs))
    return () => addPageSchema('faq', null)
  }, [])
  return (
    <>
      <Hero />
      <Capabilities />
      <Process />
      <UseCases />
      <WhyUs />
      <FAQ title="AI Agent FAQs" items={aiAgentsFaqs} />
      <CTA />
    </>
  )
}
