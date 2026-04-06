import { Link } from 'react-router-dom'
import {
  ArrowRight, Bot, Settings, Zap, TrendingUp,
  BarChart3, Users, RefreshCw, ShieldCheck, ChevronRight, CheckCircle2,
} from 'lucide-react'

/* ─── Fixed-price packages ──────────────────────────────────── */
const packages = [
  {
    title: 'Sales Cloud Implementation',
    price: '$2,999',
    border: 'border-cs-blue/25',
    badge: null,
    items: [
      'Discovery session & lead-to-sale process review',
      'Sales KPIs definition & custom reporting setup',
      'User roles, security, and access configuration',
      'Lead management: assignment rules, web-to-lead, scoring',
      'Opportunity tracking with custom sales stages & alerts',
      'Workflow automation for follow-ups & approvals',
      'Email/calendar integration (Outlook/Gmail)',
      'Reports & dashboards: pipeline, forecasting, win/loss',
      'Includes 30 days of post-launch support and sales team training',
    ],
  },
  {
    title: 'Service Cloud Implementation',
    price: '$5,499',
    border: 'border-cs-electric/25',
    badge: null,
    items: [
      'Discovery session & support workflow review',
      'SLA, escalation rules & service KPI setup',
      'Integration planning (telephony, email, chat)',
      'Multi-channel case management (email, web, social, chat)',
      'Custom Service Console for agents',
      'Knowledge base setup & self-service enablement',
      'Omni-channel routing & automation',
      'CSAT tracking, performance dashboards & training',
      'Includes 30 days of post-launch support',
    ],
  },
  {
    title: 'Sales Engagement Setup',
    price: '$2,499',
    border: 'border-cs-purple/25',
    badge: null,
    items: [
      'Discovery session & platform configuration',
      'User roles, permissions & access setup',
      'Email & calendar integration (Outlook/Gmail)',
      'Lead & contact tracking with real-time insights',
      'Setup of 2 cadences with automated email/task sequences',
      'Call logging & activity tracking',
      'Sales rep training on engagement best practices',
      'Performance dashboards & 30 days post-launch support',
    ],
  },
  {
    title: 'Agentforce Implementation',
    price: '$9,999',
    border: 'border-cs-gold/40',
    badge: 'Most Popular',
    items: [
      'Discovery sessions & Agentforce setup',
      'User roles, permissions & security configuration',
      'Custom Agent Workspace with 360° customer view',
      'Omni-Channel case routing (email, chat, phone, social)',
      'Smart workflows, case assignment & escalation automation',
      'Knowledge base & AI chatbot for self-service and agent support',
      'Call logging, interaction tracking & performance dashboards',
      'Agent/admin training with 30 days post-launch support',
    ],
  },
]

/* ─── Detailed services ──────────────────────────────────────── */
const services = [
  {
    icon: <Bot className="w-6 h-6" />,
    badge: 'Core Speciality',
    badgeColor: 'bg-cs-blue/8 text-cs-blue border-cs-blue/20',
    title: 'Agentforce Implementation',
    desc: 'End-to-end design and deployment of autonomous AI agents. From use-case discovery and agent architecture through to prompt engineering, testing, and go-live - we own the full delivery.',
    deliverables: ['Agent use-case discovery & business case', 'Custom agent design & prompt engineering', 'Topic, action & flow configuration', 'Human hand-off orchestration', 'Einstein Trust Layer governance setup', 'Performance monitoring & ongoing tuning'],
  },
  {
    icon: <Settings className="w-6 h-6" />,
    badge: null, badgeColor: '',
    title: 'Salesforce Implementation',
    desc: 'Full-lifecycle Salesforce implementations - from requirements and solution design through configuration, data migration, UAT, and go-live support.',
    deliverables: ['Solution architecture & design docs', 'Salesforce org configuration', 'Data migration & cleansing', 'User acceptance testing support', 'Go-live hypercare (30 days)', 'Post-go-live optimisation review'],
  },
  {
    icon: <Zap className="w-6 h-6" />,
    badge: null, badgeColor: '',
    title: 'Integration & Automation',
    desc: 'Connect Salesforce and Agentforce to your wider tech stack. REST, SOAP, MuleSoft, Boomi - robust, scalable integrations that keep your data flowing.',
    deliverables: ['Integration architecture design', 'REST, SOAP & event-driven APIs', 'MuleSoft & Boomi flows', 'Real-time & batch data sync', 'Agentforce action APIs', 'Error handling & monitoring'],
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    badge: null, badgeColor: '',
    title: 'CRM Strategy & Health Check',
    desc: 'Not getting enough value from Salesforce? Our consultants audit your org, identify adoption gaps, and build a prioritised roadmap - including where Agentforce can have the biggest immediate impact.',
    deliverables: ['Full org health & adoption audit', 'Agentforce readiness assessment', 'Process gap analysis', 'Prioritised improvement roadmap', 'Licence optimisation review', 'Executive strategy presentation'],
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    badge: null, badgeColor: '',
    title: 'Analytics & Einstein AI',
    desc: 'Turn Salesforce data into competitive advantage with CRM Analytics dashboards, Einstein prediction models, and Agentforce-powered insight alerts.',
    deliverables: ['Custom CRM Analytics dashboards', 'Einstein Prediction Builder models', 'KPI library & metric definitions', 'Agentforce insight & alert actions', 'Self-service analytics training', 'Automated report scheduling'],
  },
  {
    icon: <Users className="w-6 h-6" />,
    badge: null, badgeColor: '',
    title: 'Training & Change Management',
    desc: 'AI and Salesforce are only as powerful as the people using them. Role-based training, bespoke learning content, and adoption programmes that actually stick.',
    deliverables: ['Role-based Agentforce & Salesforce training', 'Custom learning materials & videos', 'Sandbox training environments', 'Adoption metrics & reporting', 'Executive change management playbook', 'Ongoing coaching sessions'],
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    badge: null, badgeColor: '',
    title: 'Managed Support & Admin',
    desc: 'Keep your Salesforce org and Agentforce agents running at peak performance. Flexible managed service covering day-to-day admin, release management, and proactive monitoring.',
    deliverables: ['Dedicated admin resource pool', 'SLA-backed ticket support', 'Salesforce & Agentforce release management', 'Proactive org & agent monitoring', 'Monthly health & performance reports', 'Priority access to Cloudsheer experts'],
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    badge: null, badgeColor: '',
    title: 'Security & Compliance',
    desc: 'Protect customer data and meet regulatory requirements. We design and audit your Salesforce security model - including Agentforce governance.',
    deliverables: ['Security model design & review', 'Profile & permission set optimisation', 'GDPR / HIPAA / SOC 2 readiness', 'Agentforce Trust Layer configuration', 'Field-level security audit', 'Salesforce Shield configuration'],
  },
]

function PageHero() {
  return (
    <section className="relative pt-36 pb-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="glow-dot w-[500px] h-[500px] bg-cs-blue/10 top-[-150px] left-[50%] -translate-x-1/2" />
      <div className="section-wrap relative z-10 text-center max-w-3xl mx-auto">
        <div className="tag mx-auto mb-6">What We Deliver</div>
        <h1 className="section-title mb-5">
          Agentforce-First Services.<br />
          <span className="gradient-text">Salesforce Expertise.</span>
        </h1>
        <p className="section-sub">
          Every engagement starts with the question: where can an AI agent
          make the biggest difference? Then we build outward from there.
        </p>
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <>
      <PageHero />

      {/* Fixed-price packages */}
      <section className="py-20 bg-cs-bgsub">
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="tag mx-auto mb-5">Fixed-Price Packages</div>
            <h2 className="section-title mb-4">
              Get Started Fast with a{' '}
              <span className="gradient-text">Fixed-Price Package</span>
            </h2>
            <p className="section-sub">
              Clear scope, clear pricing, no surprises - choose the package
              that fits your needs and we'll get you live fast.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {packages.map(({ title, price, border, badge, items }) => (
              <div key={title}
                className={`glass-card p-7 flex flex-col border ${border} hover:-translate-y-1 transition-all duration-300 relative overflow-hidden`}>
                {badge && (
                  <div className="absolute top-0 right-0">
                    <span className="inline-block bg-cs-gold text-cs-navy text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-2xl">
                      {badge}
                    </span>
                  </div>
                )}
                <h3 className="text-cs-navy font-bold text-xl mb-1 pr-28">{title}</h3>
                <p className="text-3xl font-black gradient-text mb-6">{price}</p>
                <ul className="space-y-2.5 flex-grow mb-8">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-cs-muted">
                      <CheckCircle2 className="w-4 h-4 text-cs-blue shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-primary justify-center">
                  Enquire Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed services */}
      <section className="py-20 bg-white">
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="tag mx-auto mb-5">Full Service Catalogue</div>
            <h2 className="section-title mb-4">
              Everything You Need to<br />
              <span className="gradient-text">Succeed with Salesforce</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map(({ icon, badge, badgeColor, title, desc, deliverables }) => (
              <div key={title}
                className="glass-card p-7 group hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-cs-blue/8 border border-cs-blue/15 flex items-center justify-center text-cs-blue group-hover:bg-cs-blue group-hover:text-white group-hover:border-cs-blue transition-all">
                    {icon}
                  </div>
                  {badge && (
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${badgeColor}`}>
                      {badge}
                    </span>
                  )}
                </div>
                <h3 className="text-cs-navy font-bold text-xl mb-3">{title}</h3>
                <p className="text-cs-muted text-sm leading-relaxed mb-5">{desc}</p>
                <ul className="grid grid-cols-2 gap-y-1.5 gap-x-4 mb-6">
                  {deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-xs text-cs-muted">
                      <span className="w-1 h-1 rounded-full bg-cs-blue shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
                <Link to="/contact"
                  className="flex items-center gap-1.5 text-cs-blue text-sm font-semibold hover:gap-2.5 transition-all">
                  Enquire <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cs-navy">
        <div className="section-wrap text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">Not sure where to start?</h2>
          <p className="text-blue-200 mb-8">
            Book a free discovery call. We'll recommend exactly which services
            will have the fastest, biggest impact on your business.
          </p>
          <Link to="/contact" className="btn-gold">
            Book Free Call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
