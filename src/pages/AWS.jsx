import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import {
  ArrowRight, Cloud, RefreshCw, GitBranch, Shield, DollarSign, Bot,
  CheckCircle2, ChevronRight, Sparkles, Server, Database, Zap, Layers,
} from 'lucide-react'
import FAQ from '../components/FAQ'
import { addPageSchema, faqPageSchema } from '../seoConfig'

const ACCENT = '#FF9900'
const ACCENT_DARK = '#CC7A00'
const DEEP = '#232F3E'
const TINT = 'rgba(255,153,0,0.10)'

const awsFaqs = [
  { q: 'Are you an AWS Partner?', a: 'Our AWS Partner Network application is in progress. While that completes we are running AWS workloads for clients using Well-Architected guidance, AWS-native tooling, and certified engineers on the team. We will publish the partner tier confirmation on this page as soon as it is granted.' },
  { q: 'How long does an AWS migration typically take?', a: 'A typical lift-and-shift wave runs 6-10 weeks per workload group. Re-platforming (containerizing, breaking up monoliths) takes 10-16 weeks. We start with a 2-3 week discovery and Migration Readiness Assessment before quoting a fixed timeline.' },
  { q: 'How much can we expect to save on our AWS bill?', a: 'Most clients we audit have 25-40% headroom in their AWS spend - usually from over-provisioned instances, unused EBS volumes, idle dev/test environments, and missing Savings Plans coverage. The discovery call includes a quick cost scan if you grant read-only Cost Explorer access.' },
  { q: 'Can you run AI workloads on AWS for us?', a: 'Yes. We deploy on Bedrock for managed foundation models (Claude, Titan, Llama), SageMaker for custom training and hosting, and ECS/EKS for self-hosted inference. RAG architectures typically use S3 + OpenSearch + Bedrock with Lambda orchestration.' },
  { q: 'Do you handle ongoing operations after migration?', a: 'Yes. Our Managed Cloud Operations practice covers 24/7 monitoring, incident response, patching, security posture reviews, and quarterly Well-Architected re-reviews. Sized to your environment - we do not push a fixed retainer that assumes a 200-account org.' },
  { q: 'Can you work with our existing DevOps team?', a: 'Yes. Most engagements are co-delivered. We bring AWS-specific expertise and proven IaC patterns; your team brings the application context. Knowledge transfer is built into every engagement so you are not stuck depending on us.' },
]

function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${DEEP} 0%, #1A2330 50%, #2C3A4F 100%)` }}>
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="glow-dot w-[700px] h-[700px] top-[-200px] left-[-100px]"
        style={{ backgroundColor: 'rgba(255,153,0,0.18)' }} />
      <div className="glow-dot w-[500px] h-[500px] bottom-[-150px] right-[-50px] hidden md:block"
        style={{ backgroundColor: 'rgba(255,122,89,0.12)' }} />

      <div className="section-wrap relative z-10 pt-24 pb-12 sm:pt-32 sm:pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="tag-white inline-flex mb-6 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse-slow" style={{ backgroundColor: ACCENT }} />
            AWS Cloud Practice
          </div>
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6 animate-fade-up-1"
            style={{ color: 'rgba(255,255,255,0.65)', backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse-slow" style={{ backgroundColor: '#94A3B8' }} />
            AWS Partnership track in progress
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6 tracking-tight animate-fade-up-1">
            Cloud Infrastructure<br />
            <span style={{ background: `linear-gradient(135deg, ${ACCENT}, #FFB84D)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Done Right.
            </span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto animate-fade-up-2"
            style={{ color: 'rgba(255,255,255,0.80)' }}>
            From first VPC to multi-account landing zone - migration, modernization, security, and FinOps under one roof. Built on AWS Well-Architected principles, delivered by senior engineers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up-3">
            <a href="https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-medium px-7 py-3.5 rounded-xl transition-all duration-200 text-sm sm:text-base"
              style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_DARK})`, color: 'white', boxShadow: `0 8px 28px ${ACCENT}50` }}>
              Book Cloud Discovery Call <ArrowRight className="w-4 h-4" />
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
      id: 'migration',
      icon: <RefreshCw className="w-6 h-6" />,
      title: 'Cloud Migration',
      desc: 'Discovery, Migration Readiness Assessment, wave planning, application dependency mapping, cutover, and post-migration validation.',
      points: [
        'AWS Migration Acceleration Program (MAP) playbook',
        'Lift-and-shift, re-platform, and refactor paths',
        '6-Rs assessment (rehost, replatform, repurchase, refactor, retain, retire)',
        'Database migration via DMS, with schema conversion where needed',
      ],
    },
    {
      id: 'devops',
      icon: <GitBranch className="w-6 h-6" />,
      title: 'Infrastructure & DevOps',
      desc: 'Production-grade IaC, CI/CD pipelines, container platforms, and serverless patterns - tested in real workloads, not just demos.',
      points: [
        'Terraform / AWS CDK with reusable module library',
        'CI/CD on CodePipeline, GitHub Actions, or GitLab',
        'ECS Fargate, EKS, and Lambda + Step Functions',
        'Observability: CloudWatch, X-Ray, OpenTelemetry',
      ],
    },
    {
      id: 'security',
      icon: <Shield className="w-6 h-6" />,
      title: 'Security & Compliance',
      desc: 'Well-Architected security pillar, IAM hardening, threat detection, and compliance-aligned baselines for regulated workloads.',
      points: [
        'AWS Control Tower multi-account landing zone',
        'IAM Identity Center + permission boundaries',
        'GuardDuty, Security Hub, Inspector, Macie',
        'SOC 2, HIPAA, PCI-aligned reference architectures',
      ],
    },
    {
      id: 'cost',
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Cost Optimization',
      desc: 'Right-sizing, Savings Plans coverage, FinOps practice setup. Typical clients see 25-40% reduction on their AWS bill within 90 days.',
      points: [
        'Cost Explorer + Compute Optimizer deep audit',
        'Savings Plans and Reserved Instance strategy',
        'Idle resource cleanup, EBS gp2 to gp3 migration',
        'FinOps dashboards in QuickSight or Grafana',
      ],
    },
    {
      id: 'ai-ml',
      icon: <Bot className="w-6 h-6" />,
      title: 'AI/ML on AWS',
      desc: 'Bedrock for managed foundation models, SageMaker for custom training, and serverless RAG pipelines over your business data.',
      points: [
        'Bedrock Agents with Knowledge Bases (Claude, Llama, Titan)',
        'SageMaker training, hosting, and pipelines',
        'RAG with S3 + OpenSearch + Lambda orchestration',
        'Guardrails for PII, prompt injection, and policy compliance',
      ],
    },
    {
      id: 'managed',
      icon: <Server className="w-6 h-6" />,
      title: 'Managed Cloud Operations',
      desc: '24/7 monitoring, incident response, patching, and continuous Well-Architected reviews after go-live. We do not disappear after migration.',
      points: [
        'Tiered on-call with documented runbooks',
        'Quarterly Well-Architected re-reviews',
        'Patch management for OS, container images, and Lambda runtimes',
        'Drift detection and automated remediation',
      ],
    },
  ]

  return (
    <section className="py-16 sm:py-20" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="section-wrap">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="tag mx-auto mb-5" style={{ color: ACCENT, backgroundColor: TINT, borderColor: `${ACCENT}40` }}>
            <Cloud className="w-3.5 h-3.5" /> What We Deliver
          </div>
          <h2 className="section-title mb-4">
            Six AWS Capabilities, <span style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_DARK})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>One Team</span>
          </h2>
          <p className="section-sub">
            End-to-end coverage from first migration wave to ongoing operations. Each capability is led by senior engineers - you do not get juniors learning on your account.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ id, icon, title, desc, points }) => (
            <div key={id} id={id} className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: 'white', border: `1px solid ${ACCENT}20`, boxShadow: `0 2px 12px ${ACCENT}08` }}>
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
    { n: '01', title: 'Assess', desc: 'AWS Migration Readiness Assessment, application portfolio review, dependency mapping, and a written cost/timeline estimate.' },
    { n: '02', title: 'Design', desc: 'Target landing zone, networking, security baselines, and migration wave plan signed off by your stakeholders.' },
    { n: '03', title: 'Build & Migrate', desc: 'IaC for the landing zone, automated migration runs, cutover rehearsals, and validation against acceptance criteria.' },
    { n: '04', title: 'Operate & Optimize', desc: 'Managed operations, ongoing Well-Architected reviews, FinOps cycles, and incremental modernization.' },
  ]
  return (
    <section className="py-16 sm:py-20" style={{ backgroundColor: '#FFF8EB' }}>
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="tag mx-auto mb-5" style={{ color: ACCENT, backgroundColor: 'rgba(255,255,255,0.7)', borderColor: `${ACCENT}40` }}>
            How It Works
          </div>
          <h2 className="section-title mb-4">
            From Discovery to <span style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_DARK})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Production</span>
          </h2>
          <p className="section-sub">A proven four-phase delivery model that minimizes risk and maximizes the value of each migration wave.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 z-0"
            style={{ background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT_DARK})` }} />
          {steps.map(({ n, title, desc }, i) => (
            <div key={n} className="rounded-2xl p-6 text-center relative z-10 animate-fade-up"
              style={{ backgroundColor: 'white', border: `1px solid ${ACCENT}20`, boxShadow: `0 4px 16px ${ACCENT}10`, animationDelay: `${i * 100}ms` }}>
              <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-black text-lg"
                style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_DARK})`, boxShadow: `0 6px 20px ${ACCENT}50` }}>
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
      tag: 'On-prem to AWS',
      title: 'Mid-market manufacturer migration',
      challenge: 'Aging data center, end-of-life hardware, no DR strategy. Forecast 18-month colo lease renewal at 2x the cost.',
      result: '120-server estate migrated to AWS in 4 months across 8 waves. EKS for containerized apps, RDS for databases, S3 + Glacier for archive. 32% lower TCO than colo renewal, with DR built in.',
      metrics: ['32% lower TCO', '4-month delivery', 'RTO < 1 hour'],
    },
    {
      tag: 'FinOps',
      title: 'SaaS company AWS cost rescue',
      challenge: 'AWS bill grew 60% in 12 months while revenue grew 20%. CTO under board pressure to bring spend back under control.',
      result: 'Cost Explorer + Compute Optimizer audit identified $480k/year in waste. Right-sizing, Savings Plans, EBS gp3 migration, and dev/test scheduler delivered 38% reduction within 90 days.',
      metrics: ['$480k saved', '38% bill reduction', '90 days to impact'],
    },
    {
      tag: 'AI on AWS',
      title: 'RAG-powered support agent on Bedrock',
      challenge: 'Customer support team drowning in tier-1 tickets. Wanted an AI agent that could answer from their internal documentation - but with audit trails and PII guardrails.',
      result: 'Bedrock Agent with Knowledge Bases, S3 + OpenSearch RAG, Lambda orchestration, CloudWatch + custom evals. 64% tier-1 ticket deflection, all answers traceable to source docs.',
      metrics: ['64% deflection', 'Full audit trail', 'PII guardrails'],
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
            Three Scenarios <span style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_DARK})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>We See Often</span>
          </h2>
          <p className="section-sub max-w-2xl mx-auto">Anonymized results from recent AWS engagements. If your situation looks similar, the discovery call will tell you in 30 minutes.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map(({ tag, title, challenge, result, metrics }) => (
            <div key={title} className="rounded-2xl p-6 flex flex-col"
              style={{ backgroundColor: 'white', border: `1px solid ${ACCENT}20`, boxShadow: `0 4px 16px ${ACCENT}08` }}>
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
    { icon: <Sparkles className="w-5 h-5" />, title: 'Senior Engineers Only',  desc: 'Every engagement is staffed with engineers who have run AWS workloads in production. No junior consultants learning on your account.' },
    { icon: <Layers className="w-5 h-5" />,   title: 'IaC From Day One',       desc: 'Reusable Terraform / CDK modules battle-tested across previous engagements. You inherit production-grade code, not a one-off script collection.' },
    { icon: <DollarSign className="w-5 h-5" />, title: 'FinOps Built In',      desc: 'Cost is a first-class design constraint, not an afterthought. We surface trade-offs at architecture time so you do not get a surprise bill.' },
    { icon: <Shield className="w-5 h-5" />,   title: 'Security at the Foundation', desc: 'Landing zone, IAM, GuardDuty, Security Hub on day one. We do not bolt security on later when the auditor shows up.' },
  ]
  return (
    <section className="py-16 sm:py-20" style={{ backgroundColor: '#FFF8EB' }}>
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="tag mx-auto mb-5" style={{ color: ACCENT, backgroundColor: 'rgba(255,255,255,0.7)', borderColor: `${ACCENT}40` }}>Why Cloudsheer for AWS</div>
          <h2 className="section-title mb-4">
            Why Teams Choose Us <span style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_DARK})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Over a Generalist SI</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {reasons.map(({ icon, title, desc }) => (
            <div key={title} className="rounded-2xl p-6"
              style={{ backgroundColor: 'white', border: `1px solid ${ACCENT}20`, boxShadow: `0 2px 12px ${ACCENT}08` }}>
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
      style={{ background: `linear-gradient(135deg, ${DEEP} 0%, #1A2330 50%, #2C3A4F 100%)` }}>
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="glow-dot w-[500px] h-[500px] top-[-100px] left-[20%]"
        style={{ backgroundColor: 'rgba(255,153,0,0.12)' }} />
      <div className="section-wrap relative z-10 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-5">
          Ready to <span style={{ background: `linear-gradient(135deg, ${ACCENT}, #FFB84D)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Build on AWS?</span>
        </h2>
        <p className="text-base sm:text-lg mb-10" style={{ color: 'rgba(255,255,255,0.80)' }}>
          30-minute call with a senior cloud architect. Bring your AWS bill and your biggest infrastructure headache - we will give you a clear plan.
        </p>
        <a href="https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-xl transition-all duration-200"
          style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_DARK})`, color: 'white', boxShadow: `0 8px 28px ${ACCENT}60` }}>
          Book Cloud Discovery Call <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}

export default function AWS() {
  useEffect(() => {
    addPageSchema('faq', faqPageSchema(awsFaqs))
    return () => addPageSchema('faq', null)
  }, [])
  return (
    <>
      <Hero />
      <Capabilities />
      <Process />
      <UseCases />
      <WhyUs />
      <FAQ title="AWS FAQs" items={awsFaqs} />
      <CTA />
    </>
  )
}
