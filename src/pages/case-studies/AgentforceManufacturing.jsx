import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Quote, Calendar, Clock, User, Building2, Layers,
  TrendingUp, CheckCircle2, ArrowDown,
} from 'lucide-react'
import { applySEO } from '../../seoConfig'

/* ─── Header ───────────────────────────────────────────────── */
function Header() {
  return (
    <section className="pt-28 pb-8 sm:pt-32 sm:pb-12 bg-white">
      <div className="section-wrap max-w-4xl">
        <Link to="/blog" className="text-xs font-semibold uppercase tracking-widest inline-flex items-center gap-1.5 mb-6 transition-colors hover:opacity-70"
          style={{ color: '#0176D3' }}>
          <span style={{ transform: 'rotate(180deg)', display: 'inline-block' }}>→</span> Back
        </Link>

        <div className="flex items-center gap-3 mb-5">
          <span className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{ backgroundColor: 'rgba(1,118,211,0.08)', color: '#0176D3', border: '1px solid rgba(1,118,211,0.18)' }}>
            Case Study
          </span>
          <span className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{ backgroundColor: 'rgba(99,102,241,0.08)', color: '#6366F1', border: '1px solid rgba(99,102,241,0.18)' }}>
            Manufacturing
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6" style={{ color: '#032D60' }}>
          The Agentforce architecture<br />
          <span className="gradient-text">Salesforce said couldn't be built.</span>
        </h1>

        <p className="text-base sm:text-xl leading-relaxed mb-10 max-w-3xl" style={{ color: '#475569' }}>
          A leading outdoor products manufacturer needed to automate 12,000 warranty emails per
          month. Salesforce Support said the architecture wasn't possible. We shipped it to
          production in 11 weeks. It now resolves 92% of cases without human touch.
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pb-8 mb-2 text-sm" style={{ borderBottom: '1px solid rgba(1,118,211,0.10)', color: '#64748B' }}>
          <span className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
              style={{ background: 'linear-gradient(135deg, #0176D3, #6366F1)' }}>
              CS
            </div>
            Cloudsheer Engineering Team
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" /> Published April 2026
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" /> 9 min read
          </span>
        </div>
      </div>
    </section>
  )
}

/* ─── Body: 2-column layout ────────────────────────────────── */
function Body() {
  return (
    <section className="pb-16 sm:pb-24 bg-white">
      <div className="section-wrap max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Sticky sidebar */}
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <div className="lg:sticky lg:top-28 space-y-6">
              <SidebarBlock label="Client" value="Outdoor & lifestyle products manufacturer" sublabel="Name withheld under NDA" />
              <SidebarBlock label="Industry" value="Manufacturing / Consumer Goods" />
              <SidebarBlock label="Platform" value="Salesforce Service Cloud + Agentforce" />
              <SidebarBlock label="Timeline" value="11 weeks" sublabel="Discovery to production" />
              <SidebarBlock label="Engagement" value="Multi-agent architecture, ConnectApi Foundation Layer, Apex, Flow Orchestration, Prompt Engineering" />

              <div className="pt-6" style={{ borderTop: '1px solid rgba(1,118,211,0.10)' }}>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: '#94A3B8' }}>Headline Outcomes</p>
                <ul className="space-y-2.5">
                  {[
                    { metric: '92%', label: 'autonomous resolution' },
                    { metric: '12K+', label: 'cases / month' },
                    { metric: '~$340K', label: 'annual cost avoided' },
                    { metric: '0', label: 'user-facing errors since launch' },
                  ].map(({ metric, label }) => (
                    <li key={label} className="flex items-baseline gap-2">
                      <span className="text-base font-black" style={{ color: '#0176D3' }}>{metric}</span>
                      <span className="text-xs" style={{ color: '#64748B' }}>{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Article body */}
          <article className="lg:col-span-9 order-1 lg:order-2 prose-cs">
            <ProseSection>
              <PullQuote>
                Salesforce Support told our client this architecture wasn't possible on Agentforce.
                We shipped it to production in 11 weeks and it now resolves 92% of inbound warranty
                cases without human touch.
              </PullQuote>
            </ProseSection>

            <Heading>The verdict from Salesforce: "not possible"</Heading>
            <p>
              When the client first scoped this build with Salesforce Support and Solution
              Engineering, the response was direct. <Strong>The architecture wasn't supported. It
              wasn't recommended. It shouldn't be attempted on Agentforce.</Strong>
            </p>
            <p>The objections were structural. Salesforce believed these patterns would fail:</p>
            <BulletList items={[
              'A coordinated three-agent topology (Dispatcher + B2B Specialist + B2C Specialist) with programmatic dispatch between agents',
              'A custom Foundation Layer using direct ConnectApi.EinsteinLlm execution outside standard declarative Agentforce patterns',
              'Grounding an LLM against an unstructured Excel ContentDocument for live warranty validation',
              'Operator-controlled "Trap Doors" that let humans bypass AI execution on demand',
              'Stable recovery from nested call chains — Dispatcher → Apex → Specialist → Dispatcher',
            ]} />
            <p>
              The client brought the problem to Cloudsheer. We built every piece Salesforce said
              couldn't be built natively, on-platform, while keeping the Einstein Trust Layer fully
              intact. And we shipped it in 11 weeks.
            </p>

            <Heading>The business problem</Heading>
            <p>
              The client operates in a B2B2C support model. Customers don't contact the manufacturer
              directly. A product fails, the customer contacts the retailer, the retailer emails
              the manufacturer's support team with receipts, photos, and warranty details.
            </p>
            <p>
              Before Cloudsheer, the workflow was entirely manual. Roughly 12,000 inbound emails per
              month, 100% manually triaged. Every case required manual data entry. Warranty
              validation depended on human lookup. Customers waited around 14 hours for a first
              response.
            </p>
            <InlineStats stats={[
              { val: '~8 min', label: 'avg. triage per email' },
              { val: '~6 min', label: 'manual warranty validation' },
              { val: '~14 hrs', label: 'time to first response' },
            ]} />
            <p>
              Meanwhile, the support team faced two completely different interaction patterns on
              the same channel. Vendors sent structured submissions — receipts, invoices, customer
              details, photos. The system needed structured extraction. End customers sent
              incomplete conversations — missing order numbers, missing product details, partial
              warranty data. The system needed conversational slot-filling.
            </p>
            <p>
              One monolithic agent couldn't do both well. A specialized pair of agents coordinated
              by a dispatcher could. That dispatcher architecture is exactly what Salesforce said
              couldn't be built reliably.
            </p>

            <Heading>Architecture at a glance</Heading>
            <p>
              We designed the platform as four cooperating layers. Each layer represented a piece
              of the "not possible" answer. Together, they now autonomously process 12,000+
              inbound cases per month.
            </p>
            <ArchitectureLayers />

            <Heading>The Foundation Layer</Heading>
            <p>
              This was the layer Salesforce Solution Engineers were most skeptical about. Instead
              of relying only on declarative Prompt Templates, we built a dedicated Foundation
              Layer that directly communicates with the Einstein LLM.
            </p>
            <p>
              <Strong>ConnectApiWrapper</Strong> owns all live LLM execution — a centralized,
              fully audited execution path. <Strong>PromptService</Strong> standardizes payload
              structure and ensures consistency across all AI interactions. Every AI request flows
              through this layer: intent classification, summarization, warranty validation, email
              drafting.
            </p>
            <Callout color="#F59E0B">
              <Strong>Production result:</Strong> mean LLM latency under 1.4 seconds. Fast enough
              to keep customer interactions feeling instant.
            </Callout>

            <Heading>The three agents</Heading>
            <p>
              <Strong>The Dispatcher</Strong> is the entry point for every interaction. It handles
              conversation routing, escalation orchestration, vendor/customer classification, and
              safety validation before delegation. A custom metadata-driven lookup identifies
              vendors, customers, and registered domains. The result: 100+ vendor domains
              classified with 100% deterministic accuracy. No model guessing required.
            </p>
            <p>
              <Strong>The B2B Specialist</Strong> is purpose-built for structured ingestion. Case
              operations scoped to vendor portfolios, OCR + LLM receipt extraction, attachment
              parsing, and predictable JSON normalization. Vendor receipt processing runs end-to-end
              in under four seconds.
            </p>
            <p>
              <Strong>The B2C Specialist</Strong> is purpose-built for conversational support and
              slot-filling. Warranty validation, product Q&A, manual retrieval, and case history
              retrieval. 78% of customer interactions now resolve in a single contact — without
              human involvement.
            </p>

            <Heading>Grounding against an Excel ContentDocument</Heading>
            <p>
              The client's warranty master existed entirely inside an Excel file. Not a custom
              object. Not a database table. <Strong>An Excel document.</Strong>
            </p>
            <p>
              We intentionally avoided forcing unnecessary migration work onto the business. Instead,
              the system loads the ContentDocument directly and grounds the LLM against it in real
              time. The AI returns a deterministic result — covered or expired.
            </p>
            <p>Salesforce said this couldn't be grounded reliably against free-form Excel data. In production, it works at scale.</p>
            <BeforeAfter
              before={{ val: '~6 min', label: 'Manual lookup' }}
              after={{ val: '~3 sec', label: 'Autonomous validation' }}
              accent={{ val: '99.4%', label: 'match rate against source-of-truth catalog' }}
            />

            <Heading>The Apex Core</Heading>
            <p>
              A major part of the engagement involved decomposing monolithic Apex into focused
              services. Each service does one job, uses one prompt, follows one execution path:
            </p>
            <BulletList items={[
              'IntentDetectionService — backed by Intent_Classifier',
              'CaseDataExtractionService — backed by Generate_Case_Summary',
              'EmailCommunicationService — backed by Draft_Email_to_customer',
              'CustomerRecordService — customer matching and record creation',
              'PromptService — centralized prompt execution',
            ]} mono />
            <p>The result: roughly 1,800 lines of brittle Apex retired.</p>

            <Heading>The Trap Door pattern</Heading>
            <p>
              Most AI guardrails rely entirely on automated fallbacks. We added something
              different: <Strong>manual operator kill switches.</Strong> Two critical invocables —
              ThreadAnalyzerAction and ParsePromptResponse — include admin-controlled Trap Doors.
            </p>
            <p>
              If automation becomes unsafe, the AI step is bypassed, the case routes directly to a
              human, and routing completes in under five seconds. This wasn't exception handling.
              It was intentional operator control by design.
            </p>

            <Heading>The guardrails Salesforce said would break the system</Heading>
            <p>
              Salesforce specifically flagged the nested orchestration chain as unstable. We
              hardened the system across four layers:
            </p>
            <BulletList items={[
              'Pre-delegation safety validation on every agent handoff',
              'UUID crash protection inside ApexAgentUtils.cls',
              'Einstein Trust Layer enforcement on all grounding and policy checks',
              'Operator Trap Doors on every critical invocable',
            ]} />
            <Callout color="#10B981">
              <Strong>Production outcome:</Strong> zero user-facing system errors since launch.
            </Callout>

            <Heading>Testing infrastructure</Heading>
            <p>
              Production-grade agent systems require real testing infrastructure. Most Agentforce
              implementations skip this entirely. We shipped IntentWrapperMock, reusable mock
              frameworks, universal Apex harness coverage, and regression coverage across every
              named agent path. The result: 94% Apex test coverage at deployment.
            </p>

            <Heading>The business impact</Heading>
            <p>
              The architecture wasn't just technically novel. It materially changed operational
              performance.
            </p>
            <ImpactGrid />

            <Heading>The takeaway</Heading>
            <p>
              Salesforce Support told the client this architecture wasn't possible on Agentforce.
              Cloudsheer built it anyway. The platform now handles 12,000+ cases per month,
              resolves 92% autonomously, operates with operator-grade controls, and runs fully
              inside Salesforce — all delivered in 11 weeks.
            </p>
            <PullQuote>
              If your Agentforce roadmap is stuck behind a "not possible" answer, that's usually
              where Cloudsheer starts.
            </PullQuote>
          </article>
        </div>
      </div>
    </section>
  )
}

/* ─── Sidebar block ────────────────────────────────────────── */
function SidebarBlock({ label, value, sublabel }) {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: '#94A3B8' }}>{label}</p>
      <p className="text-sm font-semibold leading-snug" style={{ color: '#032D60' }}>{value}</p>
      {sublabel && <p className="text-xs mt-1" style={{ color: '#94A3B8' }}>{sublabel}</p>}
    </div>
  )
}

/* ─── Prose primitives ────────────────────────────────────── */
function ProseSection({ children }) {
  return <div className="mb-6">{children}</div>
}

function Heading({ children }) {
  return (
    <h2 className="text-xl sm:text-2xl font-black mt-12 mb-5" style={{ color: '#032D60' }}>
      {children}
    </h2>
  )
}

function Strong({ children }) {
  return <strong style={{ color: '#032D60', fontWeight: 700 }}>{children}</strong>
}

function PullQuote({ children }) {
  return (
    <blockquote className="relative my-10 py-6 px-6 sm:px-8 rounded-2xl"
      style={{ background: 'linear-gradient(135deg, rgba(1,118,211,0.04), rgba(99,102,241,0.04))', borderLeft: '4px solid #0176D3' }}>
      <Quote className="absolute -top-3 -left-3 w-8 h-8" style={{ color: '#0176D3' }} />
      <p className="text-base sm:text-lg italic leading-relaxed" style={{ color: '#1E293B' }}>
        {children}
      </p>
    </blockquote>
  )
}

function BulletList({ items, mono }) {
  return (
    <ul className="space-y-3 mb-6 pl-1">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckCircle2 className="w-4 h-4 shrink-0 mt-1" style={{ color: '#0176D3' }} />
          <span className={mono ? 'font-mono text-sm leading-relaxed' : 'leading-relaxed'} style={{ color: '#334155' }}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}

function InlineStats({ stats }) {
  return (
    <div className="grid sm:grid-cols-3 gap-3 my-8">
      {stats.map(({ val, label }) => (
        <div key={label} className="rounded-xl p-4 text-center"
          style={{ backgroundColor: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.12)' }}>
          <p className="text-2xl font-black mb-1" style={{ color: '#DC2626' }}>{val}</p>
          <p className="text-xs" style={{ color: '#64748B' }}>{label}</p>
        </div>
      ))}
    </div>
  )
}

function Callout({ children, color }) {
  return (
    <div className="my-8 rounded-2xl p-5"
      style={{ backgroundColor: `${color}08`, border: `1px solid ${color}30`, borderLeft: `4px solid ${color}` }}>
      <p className="text-sm leading-relaxed" style={{ color: '#334155' }}>{children}</p>
    </div>
  )
}

function ArchitectureLayers() {
  const layers = [
    { num: '01', title: 'Multi-Agent Routing', desc: 'Dispatcher → B2B Specialist / B2C Specialist' },
    { num: '02', title: 'Apex Invocables',    desc: 'ThreadAnalyzerAction, ParsePromptResponse' },
    { num: '03', title: 'Apex Core',          desc: 'IntentDetectionService, CaseDataExtractionService, EmailCommunicationService, CustomerRecordService, PromptService' },
    { num: '04', title: 'Foundation Layer',   desc: 'ConnectApiWrapper → ConnectApi.EinsteinLlm' },
  ]
  return (
    <div className="my-8 rounded-2xl overflow-hidden"
      style={{ border: '1px solid rgba(1,118,211,0.12)' }}>
      {layers.map(({ num, title, desc }, i) => (
        <div key={num} className="flex items-start gap-4 p-5"
          style={{ borderTop: i > 0 ? '1px solid rgba(1,118,211,0.08)' : 'none', backgroundColor: i % 2 === 0 ? '#FAFCFF' : 'white' }}>
          <span className="text-xs font-black shrink-0 mt-0.5 w-6" style={{ color: '#0176D3' }}>{num}</span>
          <div>
            <p className="font-bold text-sm" style={{ color: '#032D60' }}>{title}</p>
            <p className="text-xs mt-0.5 leading-relaxed" style={{ color: '#64748B' }}>{desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function BeforeAfter({ before, after, accent }) {
  return (
    <div className="my-8 rounded-2xl overflow-hidden"
      style={{ border: '1px solid rgba(1,118,211,0.10)' }}>
      <div className="grid sm:grid-cols-2">
        <div className="p-5 text-center" style={{ backgroundColor: 'rgba(239,68,68,0.04)' }}>
          <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: '#DC2626' }}>Before</p>
          <p className="text-2xl font-black mb-1" style={{ color: '#DC2626' }}>{before.val}</p>
          <p className="text-xs" style={{ color: '#64748B' }}>{before.label}</p>
        </div>
        <div className="p-5 text-center" style={{ backgroundColor: 'rgba(16,185,129,0.04)' }}>
          <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: '#059669' }}>After</p>
          <p className="text-2xl font-black mb-1" style={{ color: '#059669' }}>{after.val}</p>
          <p className="text-xs" style={{ color: '#64748B' }}>{after.label}</p>
        </div>
      </div>
      <div className="p-4 text-center" style={{ borderTop: '1px solid rgba(1,118,211,0.06)', backgroundColor: '#F8FAFC' }}>
        <span className="text-sm font-bold" style={{ color: '#0176D3' }}>{accent.val}</span>
        <span className="text-xs ml-2" style={{ color: '#64748B' }}>{accent.label}</span>
      </div>
    </div>
  )
}

function ImpactGrid() {
  const rows = [
    { metric: 'Autonomous case resolution',  before: '0%',          after: '92%' },
    { metric: 'Avg. triage time per email',   before: '~8 min',      after: '~14 sec' },
    { metric: 'Time-to-first-response',       before: '~14 hrs',     after: '<90 sec' },
    { metric: 'First-contact resolution',     before: '31%',         after: '78%' },
    { metric: 'Manual escalation rate',       before: '100%',        after: '17%' },
    { metric: 'Warranty validation time',     before: '~6 min',      after: '~3 sec' },
    { metric: 'CSAT (rolling 90-day)',        before: '64',          after: '86' },
    { metric: 'Emails handled / month',       before: 'Manual',      after: '12,000+' },
    { metric: 'FTEs redeployed',              before: '—',           after: '4' },
    { metric: 'Annual labor cost avoided',    before: '—',           after: '~$340K' },
    { metric: 'User-facing system errors',    before: '—',           after: '0' },
  ]
  return (
    <div className="my-8 rounded-2xl overflow-hidden"
      style={{ border: '1px solid rgba(1,118,211,0.10)' }}>
      <div className="hidden sm:grid grid-cols-12 gap-2 px-5 py-3"
        style={{ background: '#032D60' }}>
        <p className="col-span-6 text-[10px] font-bold uppercase tracking-wider" style={{ color: 'rgba(186,220,255,0.8)' }}>Metric</p>
        <p className="col-span-3 text-[10px] font-bold uppercase tracking-wider" style={{ color: 'rgba(186,220,255,0.8)' }}>Before</p>
        <p className="col-span-3 text-[10px] font-bold uppercase tracking-wider" style={{ color: 'rgba(186,220,255,0.8)' }}>After</p>
      </div>
      {rows.map(({ metric, before, after }, i) => (
        <div key={metric} className="grid grid-cols-2 sm:grid-cols-12 gap-2 px-5 py-3"
          style={{ borderTop: i > 0 ? '1px solid rgba(1,118,211,0.06)' : 'none', backgroundColor: i % 2 === 0 ? '#FAFCFF' : 'white' }}>
          <p className="col-span-2 sm:col-span-6 text-sm" style={{ color: '#334155' }}>{metric}</p>
          <p className="text-xs sm:col-span-3" style={{ color: '#DC2626' }}>
            <span className="sm:hidden font-bold mr-1" style={{ color: '#94A3B8' }}>Before:</span>
            {before}
          </p>
          <p className="text-xs sm:col-span-3 font-bold" style={{ color: '#059669' }}>
            <span className="sm:hidden font-bold mr-1" style={{ color: '#94A3B8' }}>After:</span>
            {after}
          </p>
        </div>
      ))}
    </div>
  )
}

/* ─── Footer CTA ──────────────────────────────────────────── */
function FooterCTA() {
  return (
    <section className="py-12 sm:py-20" style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid rgba(1,118,211,0.08)' }}>
      <div className="section-wrap max-w-3xl text-center">
        <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: '#0176D3' }}>Need a build like this?</p>
        <h2 className="text-2xl sm:text-3xl font-black mb-4" style={{ color: '#032D60' }}>
          Talk to the team that ships<br />
          <span className="gradient-text">"not possible"</span> architectures.
        </h2>
        <p className="text-sm sm:text-base mb-8" style={{ color: '#64748B' }}>
          30 minutes with a Salesforce architect. No pitch. Just a clear assessment of what's
          buildable on Agentforce for your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book a 30-min Architecture Call <ArrowRight className="w-4 h-4" />
          </a>
          <Link to="/blog" className="btn-ghost">
            Back to all stories
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Article body wrapper ────────────────────────────────── */
function ArticleStyles() {
  return (
    <style>{`
      .prose-cs { color: #334155; font-size: 1rem; line-height: 1.75; }
      .prose-cs p { margin-bottom: 1.25rem; }
      @media (min-width: 640px) {
        .prose-cs { font-size: 1.0625rem; line-height: 1.8; }
      }
    `}</style>
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
      <ArticleStyles />
      <Header />
      <Body />
      <FooterCTA />
    </>
  )
}
