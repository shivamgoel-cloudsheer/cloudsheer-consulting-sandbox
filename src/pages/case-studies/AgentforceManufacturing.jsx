import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { applySEO } from '../../seoConfig'

/* ─── Styles (article typography) ─────────────────────────── */
function ArticleStyles() {
  return (
    <style>{`
      .case-study {
        background: #FAFAF7;
        color: #1A1A1A;
        font-family: 'Charter', 'Georgia', 'Times New Roman', serif;
      }
      .cs-wrap { max-width: 720px; margin: 0 auto; padding-left: 1.5rem; padding-right: 1.5rem; }
      @media (min-width: 1024px) {
        .cs-wrap { max-width: 1100px; }
      }
      .cs-eyebrow {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: #6B6B6B;
      }
      .cs-h1 {
        font-family: 'Charter', 'Georgia', serif;
        font-size: 2.25rem;
        line-height: 1.15;
        font-weight: 700;
        letter-spacing: -0.02em;
        color: #0A0A0A;
      }
      @media (min-width: 640px) {
        .cs-h1 { font-size: 3rem; }
      }
      @media (min-width: 1024px) {
        .cs-h1 { font-size: 3.5rem; }
      }
      .cs-dek {
        font-family: 'Charter', 'Georgia', serif;
        font-size: 1.125rem;
        line-height: 1.6;
        color: #3A3A3A;
        font-style: italic;
      }
      @media (min-width: 640px) {
        .cs-dek { font-size: 1.3125rem; }
      }
      .cs-body {
        font-family: 'Charter', 'Georgia', serif;
        font-size: 1.0625rem;
        line-height: 1.75;
        color: #2A2A2A;
      }
      @media (min-width: 640px) {
        .cs-body { font-size: 1.1875rem; line-height: 1.8; }
      }
      .cs-body p { margin-bottom: 1.4em; }
      .cs-body strong { font-weight: 700; color: #0A0A0A; }
      .cs-body a { color: #0A0A0A; text-decoration: underline; text-underline-offset: 3px; }
      .cs-h2 {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.6875rem;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        font-weight: 700;
        color: #6B6B6B;
        margin-top: 4rem;
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #D9D6CE;
      }
      .cs-pullquote {
        font-family: 'Charter', 'Georgia', serif;
        font-style: italic;
        font-size: 1.5rem;
        line-height: 1.4;
        color: #0A0A0A;
        margin: 3rem 0;
        padding-left: 1.5rem;
        border-left: 2px solid #0A0A0A;
      }
      @media (min-width: 640px) {
        .cs-pullquote { font-size: 1.875rem; }
      }
      .cs-pullquote-attr {
        display: block;
        margin-top: 1rem;
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.75rem;
        font-style: normal;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: #6B6B6B;
      }
      .cs-list { margin: 0 0 1.4em 0; padding: 0; list-style: none; }
      .cs-list li {
        position: relative;
        padding-left: 1.75rem;
        margin-bottom: 0.875rem;
        font-family: 'Charter', 'Georgia', serif;
        font-size: 1.0625rem;
        line-height: 1.7;
        color: #2A2A2A;
      }
      @media (min-width: 640px) {
        .cs-list li { font-size: 1.1875rem; }
      }
      .cs-list li::before {
        content: "—";
        position: absolute;
        left: 0;
        color: #9A9A9A;
      }
      .cs-mono li { font-family: 'JetBrains Mono', 'Menlo', monospace; font-size: 0.9rem; }
      @media (min-width: 640px) {
        .cs-mono li { font-size: 0.95rem; }
      }
      .cs-rule { height: 1px; background: #D9D6CE; border: 0; margin: 5rem 0; }
      .cs-meta {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.8125rem;
        color: #6B6B6B;
      }
      .cs-meta strong { color: #0A0A0A; font-weight: 600; }
      .cs-table {
        width: 100%;
        border-collapse: collapse;
        font-family: 'Inter', system-ui, sans-serif;
        margin: 2.5rem 0;
      }
      .cs-table th {
        font-size: 0.6875rem;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: #6B6B6B;
        text-align: left;
        font-weight: 600;
        padding: 0.75rem 0;
        border-bottom: 1px solid #0A0A0A;
      }
      .cs-table td {
        padding: 0.9rem 0;
        font-size: 0.9375rem;
        border-bottom: 1px solid #E8E5DC;
        color: #2A2A2A;
        vertical-align: top;
      }
      .cs-table td.tnum { font-variant-numeric: tabular-nums; }
      .cs-table td.after { font-weight: 600; color: #0A0A0A; }
      .cs-aside {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.875rem;
        line-height: 1.6;
        color: #4A4A4A;
        padding: 1.25rem 0 1.25rem 1.5rem;
        border-left: 2px solid #D9D6CE;
        margin: 2rem 0;
      }
      .cs-aside-label {
        display: block;
        font-size: 0.6875rem;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: #6B6B6B;
        font-weight: 600;
        margin-bottom: 0.5rem;
      }
      .cs-sidenote { color: #6B6B6B; font-size: 0.95rem; }
      .cs-byline {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.8125rem;
        color: #6B6B6B;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem 2rem;
        padding: 1.25rem 0;
        border-top: 1px solid #D9D6CE;
        border-bottom: 1px solid #D9D6CE;
      }
      .cs-byline-row { display: flex; gap: 0.5rem; }
      .cs-byline-label { color: #9A9A9A; }
      .cs-back {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.75rem;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        font-weight: 600;
        color: #6B6B6B;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        transition: color 0.15s ease;
      }
      .cs-back:hover { color: #0A0A0A; }
    `}</style>
  )
}

/* ─── Article ─────────────────────────────────────────────── */
function Article() {
  return (
    <article className="case-study">
      <div className="cs-wrap" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>

        {/* Back link */}
        <Link to="/blog" className="cs-back">← Back to stories</Link>

        {/* Title block */}
        <header style={{ marginTop: '3rem', marginBottom: '3rem', maxWidth: '900px' }}>
          <p className="cs-eyebrow" style={{ marginBottom: '1.5rem' }}>
            Case Study · Manufacturing · April 2026
          </p>
          <h1 className="cs-h1" style={{ marginBottom: '1.75rem' }}>
            The Agentforce architecture Salesforce said couldn't be built.
          </h1>
          <p className="cs-dek">
            A leading outdoor products manufacturer needed to automate twelve thousand
            warranty emails per month. Salesforce Support said the architecture wasn't
            possible. Cloudsheer shipped it in eleven weeks. It now resolves 92% of cases
            without human touch.
          </p>
        </header>

        {/* Byline / metadata */}
        <div className="cs-byline" style={{ marginBottom: '4rem', maxWidth: '900px' }}>
          <div className="cs-byline-row"><span className="cs-byline-label">By</span> <strong>Cloudsheer Engineering</strong></div>
          <div className="cs-byline-row"><span className="cs-byline-label">Published</span> April 23, 2026</div>
          <div className="cs-byline-row"><span className="cs-byline-label">Read</span> 9 minutes</div>
        </div>

        {/* Body */}
        <div className="cs-body" style={{ maxWidth: '720px', margin: '0 auto' }}>

          {/* Engagement summary - inline */}
          <p className="cs-meta" style={{ marginBottom: '3rem', maxWidth: '600px' }}>
            <strong>Client:</strong> Outdoor & lifestyle products manufacturer, name withheld
            under NDA. <strong>Industry:</strong> Manufacturing and consumer goods.{' '}
            <strong>Platform:</strong> Salesforce Service Cloud with Agentforce.{' '}
            <strong>Engagement:</strong> Multi-agent architecture, ConnectApi Foundation
            Layer, custom Apex, Flow orchestration, prompt engineering.
          </p>

          <p>
            When the client first scoped this build with Salesforce Support and Solution
            Engineering, the response was direct. <strong>The architecture wasn't
            supported. It wasn't recommended. It shouldn't be attempted on Agentforce.</strong>
          </p>

          <p>The objections were structural. Salesforce believed these patterns would fail:</p>

          <ul className="cs-list">
            <li>A coordinated three-agent topology with programmatic dispatch between agents.</li>
            <li>A custom Foundation Layer using direct ConnectApi.EinsteinLlm execution outside standard declarative Agentforce patterns.</li>
            <li>Grounding an LLM against an unstructured Excel ContentDocument for live warranty validation.</li>
            <li>Operator-controlled "Trap Doors" that let humans bypass AI execution on demand.</li>
            <li>Stable recovery from nested call chains — Dispatcher to Apex to Specialist back to Dispatcher.</li>
          </ul>

          <p>
            The client brought the problem to Cloudsheer. We built every piece Salesforce
            said couldn't be built natively, on-platform, while keeping the Einstein Trust
            Layer fully intact. And we shipped it in eleven weeks.
          </p>

          {/* The business problem */}
          <h2 className="cs-h2">The business problem</h2>

          <p>
            The client operates in a B2B2C support model. Customers don't contact the
            manufacturer directly. A product fails, the customer contacts the retailer, the
            retailer emails the manufacturer's support team with receipts, photos, and
            warranty details.
          </p>

          <p>
            Before Cloudsheer, the workflow was entirely manual. Roughly twelve thousand
            inbound emails per month, all manually triaged. Every case required manual data
            entry. Warranty validation depended on human lookup. Customers waited around
            fourteen hours for a first response. Average handling effort before a case
            even existed was eight minutes per email. Warranty validation took six minutes
            of manual lookup on top of that.
          </p>

          <p>
            The support team faced two completely different interaction patterns on the
            same channel. Vendors sent structured submissions — receipts, invoices,
            customer details, photos. That work needed structured extraction. End
            customers sent incomplete conversations with missing order numbers, missing
            product details, and partial warranty data. That work needed conversational
            slot-filling.
          </p>

          <p>
            <strong>One monolithic agent couldn't do both well.</strong> A specialized pair
            of agents coordinated by a dispatcher could. That dispatcher architecture is
            exactly what Salesforce said couldn't be built reliably.
          </p>

          {/* Architecture */}
          <h2 className="cs-h2">Architecture</h2>

          <p>
            We designed the platform as four cooperating layers. Each layer represented a
            piece of the "not possible" answer.
          </p>

          <ol className="cs-list" style={{ counterReset: 'arch' }}>
            <li><strong>Multi-Agent Routing.</strong> Dispatcher routing to a B2B Specialist or B2C Specialist.</li>
            <li><strong>Apex Invocables.</strong> ThreadAnalyzerAction and ParsePromptResponse.</li>
            <li><strong>Apex Core.</strong> IntentDetectionService, CaseDataExtractionService, EmailCommunicationService, CustomerRecordService, and PromptService.</li>
            <li><strong>Foundation Layer.</strong> ConnectApiWrapper executing live against ConnectApi.EinsteinLlm.</li>
          </ol>

          {/* Foundation Layer */}
          <h2 className="cs-h2">The Foundation Layer</h2>

          <p>
            This was the layer Salesforce Solution Engineers were most skeptical about.
            Instead of relying only on declarative Prompt Templates, we built a dedicated
            Foundation Layer that directly communicates with the Einstein LLM.
          </p>

          <p>
            <strong>ConnectApiWrapper</strong> owns all live LLM execution — a centralized,
            fully audited execution path. <strong>PromptService</strong> standardizes
            payload structure and ensures consistency across every AI interaction. Every
            request flows through this layer: intent classification, summarization,
            warranty validation, email drafting.
          </p>

          <p>In production, mean LLM latency runs under <strong>1.4 seconds</strong>. Fast enough that customer interactions feel instant.</p>

          {/* Three Agents */}
          <h2 className="cs-h2">The three agents</h2>

          <p>
            <strong>The Dispatcher</strong> is the entry point for every interaction. It
            handles conversation routing, escalation orchestration, vendor and customer
            classification, and safety validation before delegation. A custom
            metadata-driven lookup identifies vendors, customers, and registered domains.
            More than one hundred vendor domains are now classified with 100% deterministic
            accuracy — no model guessing required.
          </p>

          <p>
            <strong>The B2B Specialist</strong> is purpose-built for structured ingestion.
            Case operations scoped to vendor portfolios, OCR and LLM receipt extraction,
            attachment parsing, predictable JSON normalization. Vendor receipt processing
            runs end-to-end in under four seconds.
          </p>

          <p>
            <strong>The B2C Specialist</strong> is purpose-built for conversational support
            and slot-filling. Warranty validation, product Q&A, manual retrieval, case
            history retrieval. Seventy-eight percent of customer interactions now resolve in
            a single contact without human involvement.
          </p>

          {/* Warranty validation */}
          <h2 className="cs-h2">Grounding against an Excel document</h2>

          <p>
            The client's warranty master existed entirely inside an Excel file. Not a
            custom object. Not a database table. <strong>An Excel document.</strong>
          </p>

          <p>
            We intentionally avoided forcing unnecessary migration work onto the business.
            Instead, the system loads the ContentDocument directly and grounds the LLM
            against it in real time. The AI returns a deterministic result — covered or
            expired. Manual lookup used to take six minutes per case. Autonomous validation
            now runs in three seconds with a 99.4% match rate against the source-of-truth
            catalog.
          </p>

          <p>Salesforce said this couldn't be grounded reliably against free-form Excel data. In production, it works at scale.</p>

          {/* Apex Core */}
          <h2 className="cs-h2">The Apex Core</h2>

          <p>
            A major part of the engagement involved decomposing monolithic Apex into
            focused services. Each service does one job, uses one prompt, follows one
            execution path:
          </p>

          <ul className="cs-list cs-mono">
            <li>IntentDetectionService — backed by Intent_Classifier</li>
            <li>CaseDataExtractionService — backed by Generate_Case_Summary</li>
            <li>EmailCommunicationService — backed by Draft_Email_to_customer</li>
            <li>CustomerRecordService — customer matching and record creation</li>
            <li>PromptService — centralized prompt execution</li>
          </ul>

          <p>The result: roughly <strong>1,800 lines of brittle Apex retired.</strong></p>

          {/* Trap Door */}
          <h2 className="cs-h2">The Trap Door pattern</h2>

          <p>
            Most AI guardrails rely entirely on automated fallbacks. We added something
            different: <strong>manual operator kill switches.</strong> Two critical
            invocables — ThreadAnalyzerAction and ParsePromptResponse — include
            admin-controlled Trap Doors.
          </p>

          <p>
            If automation becomes unsafe, the AI step is bypassed, the case routes directly
            to a human, and routing completes in under five seconds. This wasn't exception
            handling. It was intentional operator control by design.
          </p>

          {/* Guardrails */}
          <h2 className="cs-h2">Guardrails</h2>

          <p>
            Salesforce specifically flagged the nested orchestration chain as unstable. We
            hardened the system across four layers: pre-delegation safety validation on
            every agent handoff; UUID crash protection inside ApexAgentUtils.cls; Einstein
            Trust Layer enforcement on all grounding and policy checks; and Operator Trap
            Doors on every critical invocable.
          </p>

          <p>Since launch, the system has logged <strong>zero user-facing errors.</strong></p>

          {/* Testing */}
          <h2 className="cs-h2">Testing</h2>

          <p>
            Production-grade agent systems require real testing infrastructure. Most
            Agentforce implementations skip this entirely. We shipped IntentWrapperMock,
            reusable mock frameworks, universal Apex harness coverage, and regression
            coverage across every named agent path. The result was <strong>94% Apex test
            coverage at deployment.</strong>
          </p>

          {/* Impact table */}
          <h2 className="cs-h2">The impact</h2>

          <table className="cs-table">
            <thead>
              <tr>
                <th style={{ width: '50%' }}>Metric</th>
                <th>Before</th>
                <th>After</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Autonomous case resolution</td><td className="tnum">0%</td><td className="after tnum">92%</td></tr>
              <tr><td>Triage time per email</td><td className="tnum">~8 min</td><td className="after tnum">~14 sec</td></tr>
              <tr><td>Time to first response</td><td className="tnum">~14 hrs</td><td className="after tnum">&lt;90 sec</td></tr>
              <tr><td>First-contact resolution</td><td className="tnum">31%</td><td className="after tnum">78%</td></tr>
              <tr><td>Manual escalation rate</td><td className="tnum">100%</td><td className="after tnum">17%</td></tr>
              <tr><td>Warranty validation</td><td className="tnum">~6 min</td><td className="after tnum">~3 sec</td></tr>
              <tr><td>CSAT (rolling 90-day)</td><td className="tnum">64</td><td className="after tnum">86</td></tr>
              <tr><td>Emails handled per month</td><td>Manual</td><td className="after tnum">12,000+</td></tr>
              <tr><td>FTEs redeployed</td><td>—</td><td className="after">4</td></tr>
              <tr><td>Annual labor cost avoided</td><td>—</td><td className="after tnum">~$340K</td></tr>
              <tr><td>User-facing errors since launch</td><td>—</td><td className="after">0</td></tr>
              <tr><td>Time to production</td><td>—</td><td className="after">11 weeks</td></tr>
            </tbody>
          </table>

          {/* Takeaway */}
          <h2 className="cs-h2">The takeaway</h2>

          <p>
            Salesforce Support told the client this architecture wasn't possible on
            Agentforce. Cloudsheer built it anyway. The platform now handles twelve
            thousand cases per month, resolves 92% autonomously, operates with
            operator-grade controls, and runs fully inside Salesforce — all delivered in
            eleven weeks.
          </p>

          <blockquote className="cs-pullquote">
            If your Agentforce roadmap is stuck behind a "not possible" answer, that's
            usually where Cloudsheer starts.
            <span className="cs-pullquote-attr">— Cloudsheer Engineering</span>
          </blockquote>

          <hr className="cs-rule" />

          {/* Footer */}
          <p className="cs-sidenote">
            Want a build like this? <a href="https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">Book a 30-minute architecture call →</a>
          </p>
          <p className="cs-sidenote" style={{ marginTop: '0.75rem' }}>
            <Link to="/blog">Read more stories from the team →</Link>
          </p>
        </div>
      </div>
    </article>
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
      <Article />
    </>
  )
}
