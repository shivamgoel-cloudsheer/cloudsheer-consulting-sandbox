import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, ArrowDown, CheckCircle2, X, Sparkles, Bot, Layers,
  Shield, Zap, Database, FileText, Mail, AlertTriangle, GitBranch,
  Clock, TrendingUp, Award, DollarSign, Users, Quote, ChevronRight,
  Activity, Lock, Cpu, FlaskConical, ShieldCheck,
} from 'lucide-react'
import { applySEO } from '../../seoConfig'

/* ─── Hero ──────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #032D60 0%, #0A3F80 50%, #0176D3 100%)' }}>
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="glow-dot w-[700px] h-[700px] top-[-250px] right-[-150px]"
        style={{ backgroundColor: 'rgba(0,169,255,0.18)' }} />
      <div className="glow-dot w-[500px] h-[500px] bottom-[-200px] left-[-100px]"
        style={{ backgroundColor: 'rgba(245,158,11,0.12)' }} />
      <div className="glow-dot w-[400px] h-[400px] top-[40%] left-[40%]"
        style={{ backgroundColor: 'rgba(99,102,241,0.10)' }} />

      <div className="section-wrap relative z-10 pt-28 pb-20 sm:pt-32 sm:pb-24">
        <div className="max-w-4xl">
          <div className="tag-white inline-flex mb-6 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse-slow" style={{ backgroundColor: '#F59E0B' }} />
            Case Study · Manufacturing · Agentforce
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-8 animate-fade-up-1">
            The Agentforce Architecture<br />
            <span className="gradient-text-gold">Salesforce Said Couldn't Be Built</span>
          </h1>

          {/* Quote card */}
          <div className="relative max-w-3xl mb-10 rounded-2xl p-6 sm:p-8 animate-fade-up-2"
            style={{ backgroundColor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)' }}>
            <Quote className="absolute -top-4 -left-2 w-10 h-10" style={{ color: '#F59E0B' }} />
            <p className="text-base sm:text-xl leading-relaxed italic pl-6" style={{ color: 'rgba(255,255,255,0.95)' }}>
              Salesforce Support told our client this architecture wasn't possible on Agentforce.
              We shipped it to production in 11 weeks and it now resolves 92% of inbound warranty
              cases without human touch.
            </p>
          </div>

          {/* Hero stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 animate-fade-up-3">
            {[
              { val: '92%',  label: 'Autonomous resolution', color: '#F59E0B' },
              { val: '11',   label: 'Weeks to production', color: '#38BDF8' },
              { val: '12K+', label: 'Cases / month handled', color: '#A78BFA' },
              { val: '$340K', label: 'Annual cost avoided', color: '#34D399' },
            ].map(({ val, label, color }) => (
              <div key={label}>
                <p className="text-3xl sm:text-5xl font-black mb-1" style={{ color }}>{val}</p>
                <p className="text-xs sm:text-sm" style={{ color: 'rgba(186,220,255,0.75)' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Engagement summary ───────────────────────────────────── */
function EngagementSummary() {
  const rows = [
    { label: 'Client',        value: 'Outdoor & lifestyle products manufacturer (under NDA)' },
    { label: 'Industry',      value: 'Manufacturing / Consumer Goods' },
    { label: 'Platform',      value: 'Salesforce Service Cloud + Agentforce' },
    { label: 'Engagement',    value: 'Multi-Agent Architecture, ConnectApi Foundation Layer, Custom Apex, Flow Orchestration, Prompt Engineering' },
    { label: 'Delivered by',  value: 'Cloudsheer Consulting' },
  ]

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="section-wrap">
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden"
          style={{ border: '1px solid rgba(1,118,211,0.12)', boxShadow: '0 4px 24px rgba(1,118,211,0.06)' }}>
          <div className="px-6 sm:px-8 py-5"
            style={{ background: 'linear-gradient(135deg, #032D60 0%, #0A3F80 100%)' }}>
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(186,220,255,0.7)' }}>Engagement Snapshot</p>
          </div>
          {rows.map(({ label, value }, i) => (
            <div key={label} className="grid grid-cols-3 sm:grid-cols-4 gap-4 px-6 sm:px-8 py-4"
              style={{ borderTop: i > 0 ? '1px solid rgba(1,118,211,0.06)' : 'none', backgroundColor: i % 2 === 0 ? '#FAFCFF' : 'white' }}>
              <p className="text-xs sm:text-sm font-bold col-span-1" style={{ color: '#0176D3' }}>{label}</p>
              <p className="text-xs sm:text-sm col-span-2 sm:col-span-3" style={{ color: '#334155' }}>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Impact at a glance ───────────────────────────────────── */
function ImpactGlance() {
  const metrics = [
    { metric: 'Autonomous case resolution',         before: '0%',         after: '92%',        delta: '+92 pts',  positive: true },
    { metric: 'Avg. triage time per email',          before: '~8 min',     after: '~14 sec',    delta: '−97%',     positive: true },
    { metric: 'Time-to-first-response',              before: '~14 hrs',    after: '<90 sec',    delta: '−99.8%',   positive: true },
    { metric: 'First-contact resolution rate',       before: '31%',        after: '78%',        delta: '+47 pts',  positive: true },
    { metric: 'Manual escalation rate',              before: '100%',       after: '17%',        delta: '−83 pts',  positive: true },
    { metric: 'Warranty validation time',            before: '~6 min manual', after: '~3 sec automated', delta: '−99%', positive: true },
    { metric: 'CSAT (rolling 90-day)',               before: '64',         after: '86',         delta: '+22 pts',  positive: true },
    { metric: 'Vendor & customer emails / month',    before: 'Manual',     after: '12,000+',    delta: 'Autonomous', positive: true },
    { metric: 'FTEs redeployed from manual triage',  before: '—',          after: '4 FTEs',     delta: 'Higher-value work', positive: true },
    { metric: 'Annual labor cost avoided',           before: '—',          after: '~$340K',     delta: 'Recurring', positive: true },
    { metric: 'Time to production',                  before: '—',          after: '11 weeks',   delta: 'End-to-end', positive: true },
    { metric: 'User-facing system errors since launch', before: '—',       after: '0',          delta: 'Trust Layer + Trap Doors', positive: true },
  ]

  return (
    <section className="py-12 sm:py-20 bg-cs-bgsub">
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="tag mx-auto mb-5"><TrendingUp className="w-3.5 h-3.5" /> Impact at a Glance</div>
          <h2 className="section-title mb-4">The Numbers <span className="gradient-text">That Matter</span></h2>
          <p className="section-sub">Before and after, side by side. No interpretation needed.</p>
        </div>

        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden bg-white"
          style={{ border: '1px solid rgba(1,118,211,0.10)', boxShadow: '0 4px 24px rgba(1,118,211,0.06)' }}>
          {/* Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4"
            style={{ background: 'linear-gradient(135deg, #032D60 0%, #0A3F80 100%)' }}>
            <p className="col-span-5 text-xs font-bold uppercase tracking-wider" style={{ color: 'rgba(186,220,255,0.8)' }}>Metric</p>
            <p className="col-span-2 text-xs font-bold uppercase tracking-wider" style={{ color: 'rgba(186,220,255,0.8)' }}>Before</p>
            <p className="col-span-2 text-xs font-bold uppercase tracking-wider" style={{ color: 'rgba(186,220,255,0.8)' }}>After</p>
            <p className="col-span-3 text-xs font-bold uppercase tracking-wider" style={{ color: 'rgba(186,220,255,0.8)' }}>Δ Change</p>
          </div>

          {metrics.map(({ metric, before, after, delta }, i) => (
            <div key={metric}
              className="grid grid-cols-2 md:grid-cols-12 gap-2 md:gap-4 px-4 sm:px-6 py-4 transition-colors hover:bg-blue-50/40"
              style={{ borderTop: i > 0 ? '1px solid rgba(1,118,211,0.05)' : 'none' }}>
              <p className="col-span-2 md:col-span-5 text-sm font-semibold" style={{ color: '#032D60' }}>{metric}</p>
              <div className="md:col-span-2">
                <p className="text-[10px] font-bold uppercase tracking-wider md:hidden mb-0.5" style={{ color: '#94A3B8' }}>Before</p>
                <p className="text-sm" style={{ color: '#EF4444' }}>{before}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-[10px] font-bold uppercase tracking-wider md:hidden mb-0.5" style={{ color: '#94A3B8' }}>After</p>
                <p className="text-sm font-bold" style={{ color: '#10B981' }}>{after}</p>
              </div>
              <div className="col-span-2 md:col-span-3 mt-1 md:mt-0">
                <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: 'rgba(16,185,129,0.10)', color: '#059669', border: '1px solid rgba(16,185,129,0.25)' }}>
                  {delta}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── The Verdict ──────────────────────────────────────────── */
function TheVerdict() {
  const objections = [
    'A coordinated three-agent topology with programmatic dispatch between agents',
    'A custom Foundation Layer using direct ConnectApi.EinsteinLlm execution outside standard declarative patterns',
    'Grounding an LLM against an unstructured Excel ContentDocument for live warranty validation',
    'Operator-controlled "Trap Doors" that let humans bypass AI execution on demand',
    'Stable recovery from nested call chains: Dispatcher → Apex → Specialist → Dispatcher',
  ]

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="section-wrap">
        <div className="max-w-4xl mx-auto">
          <div className="tag mb-5" style={{ color: '#DC2626', backgroundColor: 'rgba(239,68,68,0.08)', borderColor: 'rgba(239,68,68,0.20)' }}>
            <AlertTriangle className="w-3.5 h-3.5" /> The Verdict From Salesforce
          </div>
          <h2 className="text-2xl sm:text-4xl font-black mb-6" style={{ color: '#032D60' }}>
            "Not Possible.<br /><span style={{ color: '#DC2626' }}>Not Recommended.</span> Don't Attempt It."
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: '#475569' }}>
            When the client first scoped this build with Salesforce Support and Solution Engineering, the
            response was direct. The architecture wasn't supported. It wasn't recommended. And it
            shouldn't be attempted on Agentforce. The objections were structural.
          </p>

          <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: '#94A3B8' }}>
            Salesforce believed these patterns would fail
          </p>
          <ul className="space-y-3 mb-10">
            {objections.map((o) => (
              <li key={o} className="flex items-start gap-3 p-4 rounded-xl"
                style={{ backgroundColor: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.12)' }}>
                <X className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#DC2626' }} />
                <span className="text-sm sm:text-base leading-relaxed" style={{ color: '#334155' }}>{o}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-2xl p-6 sm:p-8"
            style={{ background: 'linear-gradient(135deg, rgba(1,118,211,0.05), rgba(99,102,241,0.05))', border: '1px solid rgba(1,118,211,0.15)' }}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl shrink-0 flex items-center justify-center text-white"
                style={{ background: 'linear-gradient(135deg, #0176D3, #6366F1)' }}>
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold mb-2" style={{ color: '#032D60' }}>Cloudsheer's response:</p>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#475569' }}>
                  We built every piece Salesforce said couldn't be built natively, on-platform, while keeping the
                  Einstein Trust Layer fully intact. Shipped in 11 weeks. Zero user-facing system errors since launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Business problem ────────────────────────────────────── */
function BusinessProblem() {
  return (
    <section className="py-12 sm:py-20 bg-cs-bgsub">
      <div className="section-wrap">
        <div className="max-w-4xl mx-auto">
          <div className="tag mb-5"><AlertTriangle className="w-3.5 h-3.5" /> The Business Problem</div>
          <h2 className="text-2xl sm:text-4xl font-black mb-6" style={{ color: '#032D60' }}>
            A B2B2C Support Model<br />
            <span className="gradient-text">Drowning in Manual Triage</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-10" style={{ color: '#475569' }}>
            The client operates in a B2B2C support model. Customers don't contact the manufacturer
            directly. Instead, a product fails → customer contacts retailer → retailer emails the
            manufacturer's support team with receipts, photos, and warranty details.
          </p>

          {/* Flow */}
          <div className="rounded-2xl p-6 sm:p-8 mb-10"
            style={{ backgroundColor: 'white', border: '1px solid rgba(1,118,211,0.10)' }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: '#94A3B8' }}>Before Cloudsheer</p>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-center">
              {[
                { icon: <Users className="w-5 h-5" />, label: 'Customer', detail: 'Product fails' },
                { icon: <Mail className="w-5 h-5" />, label: 'Retailer', detail: 'Emails manufacturer' },
                { icon: <FileText className="w-5 h-5" />, label: 'Email Inbox', detail: '12,000 / month' },
                { icon: <Cpu className="w-5 h-5" />, label: 'Manual Triage', detail: '8 min per email' },
                { icon: <Clock className="w-5 h-5" />, label: 'First Response', detail: '14 hours' },
              ].map((step, i) => (
                <div key={step.label} className="flex items-center sm:flex-col gap-3 sm:gap-2 sm:text-center">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: i === 4 ? 'rgba(239,68,68,0.10)' : 'rgba(1,118,211,0.08)', color: i === 4 ? '#DC2626' : '#0176D3', border: '1px solid ' + (i === 4 ? 'rgba(239,68,68,0.20)' : 'rgba(1,118,211,0.15)') }}>
                    {step.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold" style={{ color: '#032D60' }}>{step.label}</p>
                    <p className="text-[11px]" style={{ color: '#94A3B8' }}>{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Two patterns */}
          <p className="text-base sm:text-lg leading-relaxed mb-6" style={{ color: '#475569' }}>
            The support team faced two completely different interaction patterns on the same channel.
            <strong> One monolithic agent couldn't do both well.</strong> A specialized pair of agents
            coordinated by a dispatcher could.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="glass-card p-6">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'linear-gradient(135deg, #0176D3, #38BDF8)', color: 'white' }}>
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-bold mb-2" style={{ color: '#032D60' }}>Vendors</h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: '#64748B' }}>
                Structured submissions: receipts, invoices, customer details, photos.
              </p>
              <p className="text-xs font-semibold" style={{ color: '#0176D3' }}>
                → Needs structured extraction
              </p>
            </div>
            <div className="glass-card p-6">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'linear-gradient(135deg, #6366F1, #A78BFA)', color: 'white' }}>
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold mb-2" style={{ color: '#032D60' }}>End Customers</h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: '#64748B' }}>
                Incomplete conversations: missing order numbers, products, partial warranty data.
              </p>
              <p className="text-xs font-semibold" style={{ color: '#6366F1' }}>
                → Needs conversational slot-filling
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Architecture overview ───────────────────────────────── */
function Architecture() {
  const layers = [
    {
      title: 'Multi-Agent Routing',
      icon: <GitBranch className="w-5 h-5" />,
      gradient: 'linear-gradient(135deg, #0176D3, #38BDF8)',
      components: 'Dispatcher → B2B Specialist / B2C Specialist',
    },
    {
      title: 'Apex Invocables',
      icon: <Zap className="w-5 h-5" />,
      gradient: 'linear-gradient(135deg, #6366F1, #A78BFA)',
      components: 'ThreadAnalyzerAction, ParsePromptResponse',
    },
    {
      title: 'Apex Core',
      icon: <Cpu className="w-5 h-5" />,
      gradient: 'linear-gradient(135deg, #059669, #34D399)',
      components: 'IntentDetectionService, CaseDataExtractionService, EmailCommunicationService, CustomerRecordService, PromptService',
    },
    {
      title: 'Foundation Layer',
      icon: <Database className="w-5 h-5" />,
      gradient: 'linear-gradient(135deg, #D97706, #FBBF24)',
      components: 'ConnectApiWrapper → live execution via ConnectApi.EinsteinLlm',
    },
  ]

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="tag mx-auto mb-5"><Layers className="w-3.5 h-3.5" /> Architecture at a Glance</div>
          <h2 className="section-title mb-4">Four Cooperating <span className="gradient-text">Layers</span></h2>
          <p className="section-sub">
            Each layer represented a piece of the "not possible" answer. Together, they process
            12,000+ inbound cases per month autonomously.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {layers.map(({ title, icon, gradient, components }, i) => (
            <div key={title} className="rounded-2xl overflow-hidden"
              style={{ background: gradient, padding: '2px' }}>
              <div className="rounded-[14px] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4"
                style={{ backgroundColor: '#FAFCFF' }}>
                <div className="flex items-center gap-4 shrink-0 sm:w-[280px]">
                  <span className="text-2xl font-black w-8" style={{ color: '#94A3B8' }}>0{i + 1}</span>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shrink-0"
                    style={{ background: gradient }}>
                    {icon}
                  </div>
                  <p className="font-bold text-base sm:text-lg" style={{ color: '#032D60' }}>{title}</p>
                </div>
                <p className="text-sm leading-relaxed flex-1" style={{ color: '#475569' }}>
                  {components}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Foundation Layer deep dive ──────────────────────────── */
function FoundationLayer() {
  return (
    <section className="py-12 sm:py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #032D60 0%, #0A3F80 100%)' }}>
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="glow-dot w-[500px] h-[500px] top-[-150px] right-[-100px]"
        style={{ backgroundColor: 'rgba(245,158,11,0.10)' }} />

      <div className="section-wrap relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="tag-white inline-flex mb-5"><Database className="w-3.5 h-3.5" /> The Foundation Layer</div>
          <h2 className="text-2xl sm:text-4xl font-black text-white mb-6">
            Direct <span className="gradient-text-gold">ConnectApi.EinsteinLlm</span> Execution
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: 'rgba(186,220,255,0.85)' }}>
            This was the layer Salesforce Solution Engineers were most skeptical about. Instead of relying
            only on declarative Prompt Templates, Cloudsheer built a dedicated Foundation Layer that
            directly communicates with the Einstein LLM.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            <div className="dark-card p-6">
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#F59E0B' }}>ConnectApiWrapper</p>
              <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#34D399' }} /> Owns all live LLM execution</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#34D399' }} /> Centralized execution path</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#34D399' }} /> Fully audited</li>
              </ul>
            </div>
            <div className="dark-card p-6">
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#F59E0B' }}>PromptService</p>
              <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#34D399' }} /> Standardizes payload structure</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#34D399' }} /> Consistent across all AI interactions</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#34D399' }} /> Every request flows through here</li>
              </ul>
            </div>
          </div>

          {/* Production result callout */}
          <div className="rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
            style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(245,158,11,0.05))', border: '1px solid rgba(245,158,11,0.30)' }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
              style={{ background: 'linear-gradient(135deg, #F59E0B, #FBBF24)' }}>
              <Zap className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#F59E0B' }}>Production Result</p>
              <p className="text-lg sm:text-xl font-bold text-white mb-1">Mean LLM latency: under 1.4 seconds</p>
              <p className="text-sm" style={{ color: 'rgba(186,220,255,0.7)' }}>Fast enough to keep customer interactions feeling instant.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Three Agents ────────────────────────────────────────── */
function ThreeAgents() {
  const agents = [
    {
      name: 'The Dispatcher',
      role: 'Entry point for every interaction',
      color: '#0176D3',
      gradient: 'linear-gradient(135deg, #0176D3, #38BDF8)',
      capabilities: ['Conversation routing', 'Escalation orchestration', 'Vendor / customer classification', 'Safety validation before delegation'],
      stat: '100+',
      statLabel: 'vendor domains classified, 100% deterministic',
    },
    {
      name: 'B2B Specialist',
      role: 'Vendor-facing structured ingestion',
      color: '#6366F1',
      gradient: 'linear-gradient(135deg, #6366F1, #A78BFA)',
      capabilities: ['Case operations scoped to vendor portfolios', 'OCR + LLM receipt extraction', 'Attachment parsing', 'Predictable JSON normalization'],
      stat: '<4s',
      statLabel: 'vendor receipt processing end-to-end',
    },
    {
      name: 'B2C Specialist',
      role: 'Conversational support & slot-filling',
      color: '#059669',
      gradient: 'linear-gradient(135deg, #059669, #34D399)',
      capabilities: ['Warranty validation', 'Product Q&A', 'Manual retrieval', 'Case history retrieval'],
      stat: '78%',
      statLabel: 'of customer interactions resolved in one contact',
    },
  ]

  return (
    <section className="py-12 sm:py-20 bg-cs-bgsub">
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="tag mx-auto mb-5"><Bot className="w-3.5 h-3.5" /> The Three Agents</div>
          <h2 className="section-title mb-4">
            One Dispatcher.<br />
            <span className="gradient-text">Two Specialists.</span>
          </h2>
          <p className="section-sub">Each agent purpose-built for one interaction pattern. Coordinated by deterministic dispatch logic.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {agents.map(({ name, role, color, gradient, capabilities, stat, statLabel }) => (
            <div key={name} className="rounded-3xl overflow-hidden"
              style={{ background: gradient, padding: '2px' }}>
              <div className="rounded-[22px] h-full flex flex-col p-6"
                style={{ backgroundColor: 'white' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-4"
                  style={{ background: gradient, boxShadow: `0 8px 24px ${color}30` }}>
                  <Bot className="w-6 h-6" />
                </div>
                <h3 className="font-black text-lg mb-1" style={{ color: '#032D60' }}>{name}</h3>
                <p className="text-xs font-semibold mb-5" style={{ color }}>{role}</p>

                <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: '#94A3B8' }}>Capabilities</p>
                <ul className="space-y-2 mb-6 flex-grow">
                  {capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm" style={{ color: '#475569' }}>
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color }} />
                      {c}
                    </li>
                  ))}
                </ul>

                <div className="pt-4" style={{ borderTop: `1px solid ${color}15` }}>
                  <p className="text-3xl font-black mb-1" style={{ color }}>{stat}</p>
                  <p className="text-xs leading-snug" style={{ color: '#64748B' }}>{statLabel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Warranty validation ─────────────────────────────────── */
function WarrantyValidation() {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="section-wrap">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="tag mb-5"><FileText className="w-3.5 h-3.5" /> Warranty Validation</div>
              <h2 className="text-2xl sm:text-4xl font-black mb-6" style={{ color: '#032D60' }}>
                Grounding an LLM Against<br /><span className="gradient-text">an Excel ContentDocument</span>
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#475569' }}>
                The client's warranty master existed entirely inside an Excel file. Not a custom object.
                Not a database table. <strong>An Excel document.</strong>
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#475569' }}>
                Cloudsheer intentionally avoided forcing unnecessary migration work onto the business.
                Instead, the system loads the ContentDocument directly and grounds the LLM against it in
                real time.
              </p>
              <p className="text-sm font-semibold mb-2" style={{ color: '#0176D3' }}>
                The AI returns a deterministic result: <span className="font-mono px-2 py-0.5 rounded" style={{ backgroundColor: 'rgba(16,185,129,0.10)', color: '#059669' }}>covered</span> or <span className="font-mono px-2 py-0.5 rounded" style={{ backgroundColor: 'rgba(239,68,68,0.10)', color: '#DC2626' }}>expired</span>
              </p>
            </div>

            {/* Comparison visual */}
            <div className="space-y-4">
              <div className="rounded-2xl p-6"
                style={{ backgroundColor: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.15)' }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#DC2626' }}>Before</p>
                <p className="text-3xl font-black mb-1" style={{ color: '#DC2626' }}>~6 minutes</p>
                <p className="text-sm" style={{ color: '#64748B' }}>Manual lookup per case</p>
              </div>
              <div className="flex justify-center">
                <ArrowDown className="w-8 h-8" style={{ color: '#94A3B8' }} />
              </div>
              <div className="rounded-2xl p-6"
                style={{ backgroundColor: 'rgba(16,185,129,0.04)', border: '1px solid rgba(16,185,129,0.20)' }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#059669' }}>After</p>
                <p className="text-3xl font-black mb-1" style={{ color: '#059669' }}>~3 seconds</p>
                <p className="text-sm" style={{ color: '#64748B' }}>Autonomous validation</p>
              </div>
              <div className="rounded-2xl p-5 text-center"
                style={{ background: 'linear-gradient(135deg, rgba(1,118,211,0.05), rgba(99,102,241,0.05))', border: '1px solid rgba(1,118,211,0.15)' }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#0176D3' }}>Accuracy</p>
                <p className="text-2xl font-black gradient-text">99.4% match rate</p>
                <p className="text-xs mt-1" style={{ color: '#64748B' }}>against source-of-truth catalog</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Apex Core ───────────────────────────────────────────── */
function ApexCore() {
  const services = [
    { name: 'IntentDetectionService',    desc: 'Backed by Intent_Classifier' },
    { name: 'CaseDataExtractionService', desc: 'Backed by Generate_Case_Summary' },
    { name: 'EmailCommunicationService', desc: 'Backed by Draft_Email_to_customer' },
    { name: 'CustomerRecordService',     desc: 'Customer matching + record creation' },
    { name: 'PromptService',             desc: 'Centralized prompt execution' },
  ]

  return (
    <section className="py-12 sm:py-20 bg-cs-bgsub">
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="tag mx-auto mb-5"><Cpu className="w-3.5 h-3.5" /> The Apex Core</div>
          <h2 className="section-title mb-4">Single-Purpose <span className="gradient-text">Services</span></h2>
          <p className="section-sub">Each service does one job, uses one prompt, follows one execution path.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {services.map(({ name, desc }) => (
              <div key={name} className="glass-card p-5 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'rgba(1,118,211,0.08)', color: '#0176D3' }}>
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-mono text-sm font-bold" style={{ color: '#032D60' }}>{name}</p>
                  <p className="text-xs mt-0.5" style={{ color: '#64748B' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-6 text-center"
            style={{ background: 'linear-gradient(135deg, #032D60, #0A3F80)' }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#F59E0B' }}>Result</p>
            <p className="text-2xl sm:text-3xl font-black text-white">
              ~1,800 lines of brittle Apex <span className="gradient-text-gold">retired</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Trap Door pattern ───────────────────────────────────── */
function TrapDoor() {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="section-wrap">
        <div className="max-w-4xl mx-auto">
          <div className="tag mb-5" style={{ color: '#D97706', backgroundColor: 'rgba(245,158,11,0.10)', borderColor: 'rgba(245,158,11,0.25)' }}>
            <Shield className="w-3.5 h-3.5" /> The Trap Door Pattern
          </div>
          <h2 className="text-2xl sm:text-4xl font-black mb-6" style={{ color: '#032D60' }}>
            Operator Override<br /><span className="gradient-text">On Every AI Invocable</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: '#475569' }}>
            Most AI guardrails rely entirely on automated fallbacks. Cloudsheer added something different:
            <strong> manual operator kill switches.</strong> Two critical invocables, <span className="font-mono text-sm">ThreadAnalyzerAction</span> and <span className="font-mono text-sm">ParsePromptResponse</span>, include admin-controlled Trap Doors.
          </p>

          <div className="rounded-2xl p-6 sm:p-8 mb-6"
            style={{ background: 'linear-gradient(135deg, rgba(217,119,6,0.06), rgba(245,158,11,0.06))', border: '1px solid rgba(245,158,11,0.20)' }}>
            <p className="text-sm font-bold mb-4" style={{ color: '#D97706' }}>If automation becomes unsafe:</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { icon: <X className="w-5 h-5" />, label: 'AI step is bypassed' },
                { icon: <Users className="w-5 h-5" />, label: 'Case routes directly to a human' },
                { icon: <Clock className="w-5 h-5" />, label: 'Routing completes in under 5 seconds' },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-3 p-4 rounded-xl"
                  style={{ backgroundColor: 'white', border: '1px solid rgba(245,158,11,0.15)' }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'linear-gradient(135deg, #D97706, #FBBF24)', color: 'white' }}>
                    {icon}
                  </div>
                  <p className="text-sm font-semibold" style={{ color: '#032D60' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm italic text-center" style={{ color: '#64748B' }}>
            This wasn't exception handling. It was intentional operator control by design.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── Protection stack ────────────────────────────────────── */
function ProtectionStack() {
  const layers = [
    { icon: <ShieldCheck className="w-5 h-5" />, label: 'Pre-delegation safety validation',  desc: 'Every agent handoff is validated before execution' },
    { icon: <Lock className="w-5 h-5" />,         label: 'UUID crash protection',              desc: 'Inside ApexAgentUtils.cls — prevents nested chain failures' },
    { icon: <Sparkles className="w-5 h-5" />,    label: 'Einstein Trust Layer enforcement',   desc: 'All grounding, redaction, and policy checks intact' },
    { icon: <Shield className="w-5 h-5" />,       label: 'Operator Trap Doors',                desc: 'On every critical invocable for instant manual override' },
  ]

  return (
    <section className="py-12 sm:py-20 bg-cs-bgsub">
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="tag mx-auto mb-5"><Shield className="w-3.5 h-3.5" /> Protection Stack</div>
          <h2 className="section-title mb-4">
            The Guardrails Salesforce Said<br />
            <span className="gradient-text">Would Break the System</span>
          </h2>
          <p className="section-sub">
            Salesforce flagged the nested orchestration chain as unstable. Cloudsheer hardened the system across four layers.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4 mb-10">
          {layers.map(({ icon, label, desc }, i) => (
            <div key={label} className="glass-card p-5 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-white"
                style={{ background: 'linear-gradient(135deg, #0176D3, #6366F1)' }}>
                {icon}
              </div>
              <div>
                <p className="font-bold text-sm mb-1" style={{ color: '#032D60' }}>0{i + 1}. {label}</p>
                <p className="text-xs leading-relaxed" style={{ color: '#64748B' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Production outcome */}
        <div className="max-w-2xl mx-auto rounded-2xl p-6 sm:p-8 text-center"
          style={{ background: 'linear-gradient(135deg, #032D60 0%, #0A3F80 100%)' }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#34D399' }}>Production Outcome</p>
          <p className="text-3xl sm:text-5xl font-black text-white mb-2">Zero</p>
          <p className="text-sm" style={{ color: 'rgba(186,220,255,0.75)' }}>user-facing system errors since launch</p>
        </div>
      </div>
    </section>
  )
}

/* ─── Testing infrastructure ──────────────────────────────── */
function Testing() {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="section-wrap">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-5 gap-8 items-center">
            <div className="sm:col-span-3">
              <div className="tag mb-5"><FlaskConical className="w-3.5 h-3.5" /> Testing Infrastructure</div>
              <h2 className="text-2xl sm:text-3xl font-black mb-4" style={{ color: '#032D60' }}>
                Production-grade agent systems<br />
                <span className="gradient-text">need real test coverage</span>
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#475569' }}>
                Most Agentforce implementations skip this entirely. Cloudsheer shipped:
              </p>
              <ul className="space-y-2.5">
                {[
                  'IntentWrapperMock',
                  'Reusable mock frameworks',
                  'Universal Apex harness coverage',
                  'Regression coverage across every named agent path',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: '#475569' }}>
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#0176D3' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:col-span-2">
              <div className="rounded-2xl p-6 text-center"
                style={{ background: 'linear-gradient(135deg, #059669 0%, #34D399 100%)', boxShadow: '0 12px 40px rgba(5,150,105,0.30)' }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.75)' }}>At Deployment</p>
                <p className="text-5xl sm:text-6xl font-black text-white mb-1">94%</p>
                <p className="text-sm font-semibold text-white">Apex test coverage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Business Impact (final summary) ─────────────────────── */
function BusinessImpact() {
  const groups = [
    {
      title: 'Time & Efficiency',
      icon: <Clock className="w-5 h-5" />,
      gradient: 'linear-gradient(135deg, #0176D3, #38BDF8)',
      items: [
        { from: '~8 minutes', to: '~14 seconds', label: 'Triage time' },
        { from: '~14 hours',  to: '<90 seconds', label: 'Time-to-first-response' },
        { from: '~6 minutes', to: '~3 seconds',  label: 'Warranty validation' },
      ],
    },
    {
      title: 'Cost & Headcount',
      icon: <DollarSign className="w-5 h-5" />,
      gradient: 'linear-gradient(135deg, #059669, #34D399)',
      items: [
        { to: '4 FTEs', label: 'Redeployed to higher-value work' },
        { to: '~$340K', label: 'Annual labor cost avoided' },
        { to: '~1,800 lines', label: 'Apex retired' },
      ],
    },
    {
      title: 'Volume & Scale',
      icon: <Activity className="w-5 h-5" />,
      gradient: 'linear-gradient(135deg, #6366F1, #A78BFA)',
      items: [
        { to: '12,000+', label: 'Emails / month autonomously processed' },
        { to: '92%', label: 'Autonomous resolution rate' },
        { to: '100+', label: 'Vendor domains classified deterministically' },
      ],
    },
    {
      title: 'Quality & CX',
      icon: <Award className="w-5 h-5" />,
      gradient: 'linear-gradient(135deg, #D97706, #FBBF24)',
      items: [
        { from: '64',   to: '86',  label: 'CSAT (rolling 90-day)' },
        { from: '31%',  to: '78%', label: 'First-contact resolution' },
        { from: '100%', to: '17%', label: 'Manual escalation' },
        { to: '0', label: 'User-facing system errors' },
      ],
    },
  ]

  return (
    <section className="py-12 sm:py-20 bg-cs-bgsub">
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="tag mx-auto mb-5"><TrendingUp className="w-3.5 h-3.5" /> The Business Impact</div>
          <h2 className="section-title mb-4">
            Not Just Technically Novel.<br />
            <span className="gradient-text">Operationally Transformational.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {groups.map(({ title, icon, gradient, items }) => (
            <div key={title} className="glass-card p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white shrink-0"
                  style={{ background: gradient }}>
                  {icon}
                </div>
                <h3 className="font-black text-lg" style={{ color: '#032D60' }}>{title}</h3>
              </div>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label} className="flex items-center justify-between gap-3 pb-3"
                    style={{ borderBottom: '1px dashed rgba(1,118,211,0.10)' }}>
                    <p className="text-sm flex-1" style={{ color: '#475569' }}>{item.label}</p>
                    <div className="flex items-center gap-2 shrink-0">
                      {item.from && (
                        <>
                          <span className="text-xs line-through" style={{ color: '#94A3B8' }}>{item.from}</span>
                          <ChevronRight className="w-3 h-3" style={{ color: '#CBD5E1' }} />
                        </>
                      )}
                      <span className="text-sm font-black" style={{ color: '#059669' }}>{item.to}</span>
                    </div>
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

/* ─── Takeaway / CTA ──────────────────────────────────────── */
function Takeaway() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #032D60 0%, #0A3F80 60%, #0176D3 100%)' }}>
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="glow-dot w-[500px] h-[500px] top-[-100px] left-[50%] -translate-x-1/2"
        style={{ backgroundColor: 'rgba(245,158,11,0.12)' }} />
      <div className="glow-dot w-[400px] h-[400px] bottom-[-150px] right-[10%]"
        style={{ backgroundColor: 'rgba(99,102,241,0.10)' }} />

      <div className="section-wrap relative z-10 text-center max-w-3xl mx-auto">
        <div className="tag-white inline-flex mb-6">The Takeaway</div>
        <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-6">
          Salesforce said this couldn't be done.<br />
          <span className="gradient-text-gold">Cloudsheer built it anyway.</span>
        </h2>
        <p className="text-base sm:text-lg mb-10" style={{ color: 'rgba(186,220,255,0.85)' }}>
          The platform now handles 12,000+ cases per month, resolves 92% autonomously, operates with
          operator-grade controls, and runs fully inside Salesforce. All delivered in 11 weeks.
        </p>
        <div className="rounded-2xl p-6 sm:p-8 mb-10 max-w-2xl mx-auto"
          style={{ backgroundColor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)' }}>
          <p className="text-base sm:text-lg italic" style={{ color: 'rgba(255,255,255,0.95)' }}>
            If your Agentforce roadmap is stuck behind a "not possible" answer — that's usually where Cloudsheer starts.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="btn-gold text-base px-8 py-4">
            Book a 30-min Architecture Call <ArrowRight className="w-5 h-5 animate-bounce-x" />
          </a>
          <Link to="/solutions/agentforce"
            className="inline-flex items-center justify-center gap-2 font-medium text-base px-8 py-4 rounded-xl transition-all duration-200"
            style={{ border: '1.5px solid rgba(255,255,255,0.25)', color: 'white' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.10)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
            Explore Agentforce Solutions
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Page ─────────────────────────────────────────────────── */
export default function AgentforceManufacturing() {
  useEffect(() => {
    applySEO({
      title: 'Case Study: 92% Autonomous Case Resolution with Agentforce | Cloudsheer',
      description: 'How Cloudsheer built the multi-agent Salesforce Agentforce architecture Salesforce Support said couldn\'t be done — shipped in 11 weeks, 12K+ cases/month, $340K saved.',
      pathname: '/case-studies/agentforce-manufacturing',
    })
  }, [])

  return (
    <>
      <Hero />
      <EngagementSummary />
      <ImpactGlance />
      <TheVerdict />
      <BusinessProblem />
      <Architecture />
      <FoundationLayer />
      <ThreeAgents />
      <WarrantyValidation />
      <ApexCore />
      <TrapDoor />
      <ProtectionStack />
      <Testing />
      <BusinessImpact />
      <Takeaway />
    </>
  )
}
