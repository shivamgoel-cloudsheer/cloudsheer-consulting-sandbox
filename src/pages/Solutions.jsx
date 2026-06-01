import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import {
  ArrowRight, Bot, CheckCircle2, Sparkles, ChevronRight,
  ShoppingCart, Headphones, Mail, Database, BarChart3, Zap,
  Heart, Briefcase, FlaskConical, GraduationCap, HandHeart,
  Megaphone, TrendingUp, FileText, Workflow, Globe,
  Cloud, Layers, Shield, DollarSign, GitBranch, RefreshCw, Network, Building2,
} from 'lucide-react'
import FAQ from '../components/FAQ'
import { addPageSchema, faqPageSchema } from '../seoConfig'
import {
  MarketingHubIcon, SalesHubIcon, ServiceHubIcon, ContentHubIcon, DataHubIcon,
  CommerceHubIcon, SmartCRMIcon, SmallBusinessBundleIcon, BreezeIcon,
} from '../components/HubSpotIcons'

const solutionFaqs = [
  { q: 'Which platform should I start with - Salesforce or HubSpot?', a: 'It depends on team size, complexity, and existing investment. Mid-market and enterprise teams with complex workflows usually fit Salesforce; SMB and product-led-growth teams usually fit HubSpot. We assess on the discovery call. Many clients run both - Salesforce for enterprise sales/service, HubSpot for marketing - and we set up Operations Hub sync between them.' },
  { q: 'Which Salesforce cloud should I start with?', a: 'It depends on your biggest pain point. If support costs are high, start with Service Cloud + Agentforce. If leads are going cold, Sales Cloud + Agentforce SDR Agent. Book a discovery call and we will recommend based on your data.' },
  { q: 'Can you implement multiple clouds or hubs at once?', a: 'Yes. We regularly deliver multi-cloud Salesforce implementations (Sales + Service + Marketing) and multi-hub HubSpot bundles (Marketing + Sales + Service). Our team of 40+ covers every major Salesforce cloud and every HubSpot Hub.' },
  { q: 'How long does a typical implementation take?', a: 'Salesforce: Agentforce agents 3-6 weeks, single cloud 4-8 weeks, multi-cloud 8-16 weeks. HubSpot: single Hub 3-5 weeks, multi-Hub bundle 6-10 weeks, full stack 10-14 weeks. Every project starts with a scoped timeline during the discovery call.' },
  { q: 'Do you work with companies that already have Salesforce or HubSpot?', a: 'Absolutely. Most of our clients have existing orgs or portals. We audit your current setup, identify gaps, and optimize before adding new capabilities. We also handle Salesforce↔HubSpot migrations in either direction.' },
]

function PageHero() {
  return (
    <div className="pt-16"></div>
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
        'Sends personalized outreach sequences',
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
    <section className="py-10 sm:py-16 bg-cs-bgsub">
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-10">
          <div className="tag mx-auto mb-5"><Layers className="w-3.5 h-3.5" /> Five Platform Pillars</div>
          <h1 className="section-title mb-4">
            Solutions Across <span className="gradient-text">Every Platform You Run</span>
          </h1>
          <p className="section-sub">Salesforce and HubSpot for CRM. AWS for cloud infrastructure. Microsoft Dynamics for ERP. Plus custom AI agents that retire the legacy systems none of them fit.</p>
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
    <section className="py-10 sm:py-16 bg-white relative overflow-hidden">
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
  { icon: <ShoppingCart className="w-6 h-6" />, title: 'Sales Cloud + Agentforce',       desc: 'Einstein Lead Scoring, Pipeline Inspection, Revenue Intelligence, and Agentforce SDR Agent. Close 29% more deals with AI-guided selling.', tags: ['Einstein Lead Scoring', 'Pipeline Inspection', 'Revenue Intelligence'] },
  { icon: <Headphones className="w-6 h-6" />,   title: 'Service Cloud + Agentforce',     desc: 'Agentforce Service Agent with Einstein Case Classification, Omni-Channel Routing, and Knowledge Base. 78% case deflection.', tags: ['Einstein Case Classification', 'Omni-Channel', 'Service Console'] },
  { icon: <Mail className="w-6 h-6" />,         title: 'Marketing Cloud Engagement',     desc: 'Journey Builder, Einstein Send Time Optimization, Content Builder, and Account Engagement (Pardot). 28% higher marketing ROI.', tags: ['Journey Builder', 'Einstein STO', 'Account Engagement'] },
  { icon: <Database className="w-6 h-6" />,     title: 'Data Cloud',                     desc: 'Unified customer profiles, identity resolution, calculated insights, and real-time segments. Power smarter agents and personalization.', tags: ['Unified Profiles', 'Identity Resolution', 'Real-Time Segments'] },
  { icon: <BarChart3 className="w-6 h-6" />,    title: 'CRM Analytics + Tableau',        desc: 'Analytics Studio, Einstein Discovery, Einstein Predictions, and Tableau dashboards embedded inside Salesforce. 382% ROI.', tags: ['Einstein Discovery', 'Analytics Studio', 'Tableau'] },
  { icon: <Bot className="w-6 h-6" />,          title: 'Custom Agentforce Agents',       desc: 'Built with Agent Builder + Vibes 2.0, 60+ MCP tools, and Headless 360. Deploy across every channel via Experience Layer.', tags: ['Headless 360', 'Vibes 2.0', 'MCP Tools'] },
]

function SalesforceClouds() {
  return (
    <section className="py-10 sm:py-16 bg-cs-bgsub">
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
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

const industryClouds = [
  { icon: <Heart className="w-6 h-6" />,          to: '/solutions/health-cloud',              title: 'Health Cloud',              desc: 'Patient 360, care coordination, HL7 FHIR integrations, and HIPAA compliance for payers, providers, and health systems.',                tags: ['Patient 360', 'Care Plans', 'HIPAA'] },
  { icon: <Briefcase className="w-6 h-6" />,      to: '/solutions/financial-services-cloud',  title: 'Financial Services Cloud',  desc: 'Client 360, Action Plans, and compliant workflows for banks, wealth firms, lenders, and insurers. Lift cross-sell 33%.',              tags: ['Client 360', 'Action Plans', 'Compliance'] },
  { icon: <FlaskConical className="w-6 h-6" />,   to: '/solutions/life-sciences-cloud',       title: 'Life Sciences Cloud',       desc: 'Clinical trials, HCP 360, medical affairs, and patient services for pharma, biotech, and medical device. GxP-ready.',                 tags: ['Clinical Trials', 'HCP 360', 'GxP'] },
  { icon: <GraduationCap className="w-6 h-6" />,  to: '/solutions/education-cloud',           title: 'Education Cloud',           desc: 'Recruitment, admissions, student success, and advancement for universities, K-12, and continuing education. FERPA-aware.',            tags: ['Student 360', 'Success Plans', 'FERPA'] },
  { icon: <HandHeart className="w-6 h-6" />,      to: '/solutions/nonprofit-cloud',           title: 'Nonprofit Cloud',           desc: 'Fundraising, programs, volunteers, and grants for mission-driven organizations. Power of Us program eligible.',                       tags: ['Constituent 360', 'Program Mgmt', 'Power of Us'] },
]

function IndustryClouds() {
  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="tag mx-auto mb-5"><Sparkles className="w-3.5 h-3.5" /> Industry Clouds</div>
          <h2 className="section-title mb-4">Built for <span className="gradient-text">Your Sector</span></h2>
          <p className="section-sub">Salesforce industry clouds bring purpose-built data models, workflows, and compliance into one platform - so you can ship in weeks instead of building from scratch.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industryClouds.map(({ icon, to, title, desc, tags }) => (
            <Link key={title} to={to} className="glass-card p-6 group hover:-translate-y-1 transition-all duration-300 no-underline block">
              <div className="w-11 h-11 rounded-xl bg-cs-blue/8 border border-cs-blue/15 flex items-center justify-center text-cs-blue mb-4 group-hover:bg-cs-blue group-hover:text-white transition-all">
                {icon}
              </div>
              <h3 className="text-cs-navy font-bold mb-2 flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                {title} <ChevronRight className="w-4 h-4 text-cs-blue" />
              </h3>
              <p className="text-cs-muted text-sm leading-relaxed mb-4">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="text-[11px] text-cs-muted bg-cs-bgsub border border-cs-blue/10 px-2.5 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

const hubspotHubs = [
  { icon: <SmallBusinessBundleIcon className="w-6 h-6" />, to: '/solutions/hubspot',                          title: 'HubSpot Overview',       desc: 'End-to-end HubSpot implementation, migration, and managed services - the full stack in one place.',                                  tags: ['Full Stack', 'Migration', 'Managed'] },
  { icon: <BreezeIcon className="w-6 h-6" />,              to: '/solutions/hubspot-breeze-ai',                title: 'Breeze AI',              desc: 'Breeze Copilot, Breeze Agents, and Breeze Intelligence enrichment - wired across the whole HubSpot stack.',                            tags: ['Copilot', 'Agents', 'Intelligence'] },
  { icon: <SmartCRMIcon className="w-6 h-6" />,            to: '/solutions/hubspot-smart-crm',                title: 'Smart CRM',              desc: 'The AI-powered CRM foundation under every Hub - schema, permissions, automation, and Breeze rollout strategy.',                       tags: ['Schema', 'Permissions', 'AI-Native'] },
  { icon: <MarketingHubIcon className="w-6 h-6" />,        to: '/solutions/hubspot-marketing-hub',            title: 'Marketing Hub',          desc: 'Campaigns, workflows, lead scoring, and multi-touch attribution. Built around your funnel, not a template.',                          tags: ['Campaigns', 'Attribution', 'Workflows'] },
  { icon: <SalesHubIcon className="w-6 h-6" />,            to: '/solutions/hubspot-sales-hub',                title: 'Sales Hub',              desc: 'Custom deal stages, sequences, forecasting, prospecting workspace, and Breeze AI lead scoring.',                                     tags: ['Pipeline', 'Sequences', 'Forecasting'] },
  { icon: <ServiceHubIcon className="w-6 h-6" />,          to: '/solutions/hubspot-service-hub',              title: 'Service Hub',            desc: 'Ticketing, customer portal, knowledge base, SLA automation, surveys, and the Breeze customer agent.',                                tags: ['Tickets', 'Portal', 'Customer Agent'] },
  { icon: <ContentHubIcon className="w-6 h-6" />,          to: '/solutions/hubspot-content-hub',              title: 'Content Hub',            desc: 'AI co-writer with brand voice, podcast hosting, content remix, memberships, multi-language sites, and SEO pages.',                     tags: ['Brand Voice', 'Podcasts', 'SEO'] },
  { icon: <DataHubIcon className="w-6 h-6" />,             to: '/solutions/hubspot-data-hub',                 title: 'Data Hub',               desc: 'Two-way sync, Breeze Intelligence enrichment, programmable workflows, custom datasets, and Snowflake data share.',                    tags: ['Data Sync', 'Enrichment', 'Datasets'] },
  { icon: <CommerceHubIcon className="w-6 h-6" />,         to: '/solutions/hubspot-commerce-hub',             title: 'Commerce Hub',           desc: 'CPQ, branded quotes, invoices, payment links, subscriptions, and self-serve customer portals - all native to Smart CRM.',           tags: ['CPQ', 'Billing', 'Subscriptions'] },
  { icon: <SmallBusinessBundleIcon className="w-6 h-6" />, to: '/solutions/hubspot-small-business-bundle',    title: 'Small Business Bundle',  desc: 'Starter editions of every Hub - configured for go-live in 2-3 weeks. Built for startups and small teams.',                            tags: ['Starter', 'Fast Launch', 'Bundle'] },
]

function HubSpotHubs() {
  return (
    <section className="py-10 sm:py-16" style={{ backgroundColor: '#FFF4F0' }}>
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="tag mx-auto mb-5" style={{ color: '#FF7A59', backgroundColor: 'rgba(255,122,89,0.10)', borderColor: 'rgba(255,122,89,0.25)' }}>
            <Sparkles className="w-3.5 h-3.5" /> HubSpot Solutions
          </div>
          <h2 className="section-title mb-4">
            The Full HubSpot Stack <span style={{ background: 'linear-gradient(135deg, #FF7A59, #CC5535)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Under One Roof</span>
          </h2>
          <p className="section-sub">
            Every Hub - Marketing, Sales, Service, Content, Commerce, Data - on top of Smart CRM, powered by Breeze AI. Implementation, migration, and managed services.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {hubspotHubs.map(({ icon, to, title, desc, tags }) => (
            <Link key={title} to={to} className="glass-card p-6 group hover:-translate-y-1 transition-all duration-300 no-underline block">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all"
                style={{ backgroundColor: 'rgba(255,122,89,0.10)', border: '1px solid rgba(255,122,89,0.20)', color: '#FF7A59' }}>
                {icon}
              </div>
              <h3 className="font-bold mb-2 flex items-center gap-1.5 group-hover:gap-2.5 transition-all" style={{ color: '#33475B' }}>
                {title} <ChevronRight className="w-4 h-4" style={{ color: '#FF7A59' }} />
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748B' }}>{desc}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map(t => (
                  <span key={t} className="text-[11px] px-2.5 py-1 rounded-full"
                    style={{ color: '#64748B', backgroundColor: '#FFFFFF', border: '1px solid rgba(255,122,89,0.20)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function PillarSection({ id, tagLabel, title, titleSpan, subtitle, accent, accentDark, tint, bg, items, ctaText, ctaTo, statusLabel }) {
  return (
    <section id={id} className="py-10 sm:py-16" style={{ backgroundColor: bg }}>
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="tag mx-auto mb-5" style={{ color: accent, backgroundColor: tint, borderColor: `${accent}40` }}>
            {tagLabel}
          </div>
          {statusLabel && (
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4"
              style={{ color: '#64748B', backgroundColor: 'rgba(148,163,184,0.12)', border: '1px solid rgba(148,163,184,0.25)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#94A3B8' }} />
              {statusLabel}
            </div>
          )}
          <h2 className="section-title mb-4">
            {title} <span style={{ background: `linear-gradient(135deg, ${accent}, ${accentDark})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{titleSpan}</span>
          </h2>
          <p className="section-sub">{subtitle}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {items.map(({ icon, title: itemTitle, desc, tags, to }) => {
            const CardInner = (
              <>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all"
                  style={{ backgroundColor: tint, border: `1px solid ${accent}25`, color: accent }}>
                  {icon}
                </div>
                <h3 className="font-bold mb-2" style={{ color: '#032D60' }}>{itemTitle}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748B' }}>{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map(t => (
                    <span key={t} className="text-[11px] px-2.5 py-1 rounded-full"
                      style={{ color: '#64748B', backgroundColor: '#FFFFFF', border: `1px solid ${accent}25` }}>
                      {t}
                    </span>
                  ))}
                </div>
              </>
            )
            return to ? (
              <Link key={itemTitle} to={to} className="glass-card p-6 group hover:-translate-y-1 transition-all duration-300 no-underline block">
                {CardInner}
              </Link>
            ) : (
              <div key={itemTitle} className="glass-card p-6 group hover:-translate-y-1 transition-all duration-300">
                {CardInner}
              </div>
            )
          })}
        </div>
        <div className="text-center">
          <Link to={ctaTo} className="inline-flex items-center gap-2 font-semibold px-7 py-3 rounded-xl transition-all duration-200"
            style={{ background: `linear-gradient(135deg, ${accent}, ${accentDark})`, color: 'white', boxShadow: `0 6px 20px ${accent}40` }}>
            {ctaText} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function AWSSection() {
  const items = [
    { icon: <RefreshCw className="w-6 h-6" />,  title: 'Cloud Migration',           desc: 'Lift-and-shift, re-platform, or refactor. Discovery, wave planning, cutover, and post-migration validation.',                          tags: ['Discovery', 'MAP', 'Cutover'] },
    { icon: <GitBranch className="w-6 h-6" />,  title: 'Infrastructure & DevOps',   desc: 'IaC with Terraform/CDK, CI/CD pipelines, container platforms (ECS, EKS), serverless (Lambda, Step Functions).',                tags: ['Terraform', 'EKS', 'CI/CD'] },
    { icon: <Shield className="w-6 h-6" />,     title: 'Security & Compliance',     desc: 'Well-Architected reviews, IAM hardening, GuardDuty, Security Hub, SOC 2 / HIPAA / PCI-aligned baselines.',                       tags: ['IAM', 'GuardDuty', 'SOC 2'] },
    { icon: <DollarSign className="w-6 h-6" />, title: 'Cost Optimization',         desc: 'Right-sizing, Savings Plans, Compute Optimizer, FinOps practice setup. Typical 25-40% AWS bill reduction.',                       tags: ['Savings Plans', 'FinOps', 'Right-sizing'] },
    { icon: <Bot className="w-6 h-6" />,        title: 'AI/ML on AWS',              desc: 'Bedrock model deployments, SageMaker pipelines, custom model fine-tuning, RAG over your data with OpenSearch + S3.',           tags: ['Bedrock', 'SageMaker', 'RAG'] },
    { icon: <Cloud className="w-6 h-6" />,      title: 'Managed Cloud Operations',  desc: 'Monitoring, incident response, patching, and continuous Well-Architected reviews after go-live.',                                tags: ['24/7 Ops', 'Monitoring', 'WAF Reviews'] },
  ]
  return (
    <PillarSection
      id="aws"
      tagLabel={<><Cloud className="w-3.5 h-3.5" /> AWS Cloud</>}
      title="Cloud Infrastructure"
      titleSpan="Done Right"
      subtitle="From first VPC to multi-account landing zone - migration, modernization, security, and FinOps under one roof. AWS partnership track in progress."
      accent="#FF9900"
      accentDark="#CC7A00"
      tint="rgba(255,153,0,0.10)"
      bg="#FFF8EB"
      items={items}
      ctaText="Explore AWS Solutions"
      ctaTo="/solutions/aws"
      statusLabel="Partnership in progress"
    />
  )
}

function DynamicsSection() {
  const items = [
    { icon: <Megaphone className="w-6 h-6" />,  to: '/solutions/dynamics-365-customer-experience', title: 'Customer Experience', desc: 'Dynamics 365 Sales + Customer Insights on shared Dataverse. Pipeline, Copilot for Sales, CDP, and real-time journeys.',           tags: ['Sales', 'Customer Insights', 'Copilot'] },
    { icon: <Headphones className="w-6 h-6" />, to: '/solutions/dynamics-365-service',             title: 'Service',             desc: 'Customer Service, Contact Center, and Field Service - omnichannel cases, voice + digital channels, work orders, and Copilot agent assist.', tags: ['Cases', 'Contact Center', 'Field Service'] },
    { icon: <Workflow className="w-6 h-6" />,   to: '/solutions/dynamics-365-supply-chain',        title: 'Supply Chain',        desc: 'Supply Chain Management + Commerce. Demand planning, warehouse, manufacturing, POS, and e-commerce on one operational backbone.',  tags: ['SCM', 'Warehouse', 'Commerce'] },
    { icon: <DollarSign className="w-6 h-6" />, to: '/solutions/dynamics-365-finance',             title: 'Finance',             desc: 'Finance, Project Operations, and Human Resources. Close, PSA, statutory reporting, HR, and CFO-grade controls.',                     tags: ['Finance', 'PSA', 'HR'] },
    { icon: <Building2 className="w-6 h-6" />,  to: '/solutions/dynamics-365-business-central',    title: 'Business Central',    desc: 'All-in-one ERP for small and medium business. Finance, sales, purchasing, inventory, and projects in one cloud app.',               tags: ['SMB', 'ERP', 'Cloud-native'] },
    { icon: <Zap className="w-6 h-6" />,        to: '/solutions/microsoft-power-platform',         title: 'Power Platform',      desc: 'Power Apps for custom UX, Power Automate for workflows, Power BI for analytics, Copilot Studio for agents - low-code extensibility.', tags: ['Power Apps', 'Automate', 'Copilot Studio'] },
  ]
  return (
    <PillarSection
      id="dynamics"
      tagLabel={<><Layers className="w-3.5 h-3.5" /> Microsoft Dynamics 365</>}
      title="Dynamics 365 +"
      titleSpan="Power Platform"
      subtitle="Customer engagement and ERP on Microsoft's stack - extended with Power Platform and Copilot Studio. Microsoft partnership track in progress."
      accent="#0078D4"
      accentDark="#003B73"
      tint="rgba(0,120,212,0.10)"
      bg="#F0F7FF"
      items={items}
      ctaText="Explore Dynamics Solutions"
      ctaTo="/solutions/microsoft-dynamics"
      statusLabel="Partnership in progress"
    />
  )
}

function AIAgentsSection() {
  const items = [
    { icon: <RefreshCw className="w-6 h-6" />, title: 'Legacy System Modernization', desc: 'Replace aging CRMs, ERPs, ticketing tools, and home-grown apps with agents that work against the same data - without the box product tax.', tags: ['CRM Replacement', 'ERP Replacement', 'Data Migration'] },
    { icon: <Sparkles className="w-6 h-6" />,  title: 'Custom Agent Development',    desc: 'Domain-specific agents built on your data, your rules, your workflows. Production-grade evals, guardrails, and observability.', tags: ['Evals', 'Guardrails', 'Observability'] },
    { icon: <Workflow className="w-6 h-6" />,  title: 'RPA & Workflow Replacement',  desc: 'AI-native automation beyond brittle screen-scraping bots. Reasoning over context, not just clicking buttons.',                          tags: ['Process Automation', 'Decisioning', 'Triggers'] },
    { icon: <Globe className="w-6 h-6" />,     title: 'LLM & Tool Integration',      desc: 'Function calling, MCP, RAG over your knowledge base. Plug agents into Salesforce, HubSpot, Slack, Jira, and your data warehouse.',     tags: ['MCP', 'RAG', 'Function Calling'] },
    { icon: <Network className="w-6 h-6" />,   title: 'Multi-Agent Orchestration',   desc: 'Specialist agents that coordinate to ship work end-to-end - planner, executor, reviewer, verifier - with audit trails.',                  tags: ['Planner-Executor', 'Verifier', 'Audit'] },
    { icon: <Shield className="w-6 h-6" />,    title: 'Trust, Safety & Governance',  desc: 'PII redaction, prompt-injection defenses, role-based tool access, full conversation logs for compliance review.',                       tags: ['PII', 'RBAC', 'Audit Logs'] },
  ]
  return (
    <PillarSection
      id="ai-agents"
      tagLabel={<><Bot className="w-3.5 h-3.5" /> AI Agents</>}
      title="AI Agents That"
      titleSpan="Retire Legacy Systems"
      subtitle="When a box product can't be made to fit, we build the agent that does. Production-ready, observable, and safe to put in front of customers."
      accent="#7B4AE2"
      accentDark="#5B2DA6"
      tint="rgba(123,74,226,0.10)"
      bg="#F5F0FF"
      items={items}
      ctaText="Explore AI Agent Solutions"
      ctaTo="/solutions/ai-agents"
      statusLabel="New Capability"
    />
  )
}

function CTA() {
  return (
    <section className="py-10 sm:py-16 bg-cs-navy relative overflow-hidden">
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
  useEffect(() => {
    addPageSchema('faq', faqPageSchema(solutionFaqs))
    return () => addPageSchema('faq', null)
  }, [])
  return (
    <>
      <PageHero />
      <AgentforceHero />
      <TrustLayer />
      <SalesforceClouds />
      <IndustryClouds />
      <HubSpotHubs />
      <AWSSection />
      <DynamicsSection />
      <AIAgentsSection />
      <FAQ title="Solutions FAQ" items={solutionFaqs} />
      <CTA />
    </>
  )
}
