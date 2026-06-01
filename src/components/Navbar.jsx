import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Headphones, TrendingUp, Megaphone,
         ShoppingCart, Users, BarChart2, Package, MessageSquare, HeartPulse,
         Heart, Landmark, FlaskConical, GraduationCap, HandHeart,
         Sparkles, FileText, Workflow, Bot, Globe, Briefcase, Database,
         Cloud, Layers, Shield, DollarSign, GitBranch, RefreshCw, Network, Building2 } from 'lucide-react'
import {
  MarketingHubIcon, SalesHubIcon, ServiceHubIcon, ContentHubIcon, DataHubIcon,
  CommerceHubIcon, SmartCRMIcon, SmallBusinessBundleIcon, BreezeIcon,
} from './HubSpotIcons'

const clouds = [
  {
    label: 'Agentforce',
    to: '/solutions/agentforce',
    icon: null,
    image: 'icons/agentforce.svg',
    desc: 'Autonomous agents for every team',
    highlight: true,
  },
  {
    label: 'Sales Cloud',
    to: '/solutions/sales-cloud',
    icon: null,
    image: 'icons/sales.svg',
    desc: 'Close deals faster with AI-powered CRM',
  },
  {
    label: 'Service Cloud',
    to: '/solutions/service-cloud',
    icon: null,
    image: 'icons/service.svg',
    desc: 'World-class customer support at scale',
  },
  {
    label: 'Marketing Cloud',
    to: '/solutions/marketing-cloud',
    icon: null,
    image: 'icons/marketing.svg',
    desc: 'Personalized journeys across every channel',
  },
  {
    label: 'Commerce Cloud',
    to: '/solutions/commerce-cloud',
    icon: null,
    image: 'icons/commerce.svg',
    desc: 'Unified B2B & B2C commerce experiences',
  },
  {
    label: 'Experience Cloud',
    to: '/solutions/experience-cloud',
    icon: null,
    image: 'icons/experience.svg',
    desc: 'Portals & communities for partners & customers',
  },
  {
    label: 'Analytics / Tableau',
    to: '/solutions/analytics',
    icon: null,
    image: 'slack/tableau-logo.webp',
    desc: 'Real-time intelligence and visual reporting',
  },
  {
    label: 'Platform & AppExchange',
    to: '/solutions/platform',
    icon: null,
    image: 'icons/platform.svg',
    desc: 'Custom apps built on the #1 CRM platform',
  },
  {
    label: 'Slack',
    to: '/solutions/slack',
    icon: null,
    image: 'slack/slack-logo.webp',
    desc: 'AI-powered work OS connected to your CRM',
  },
  {
    label: 'Health Cloud',
    to: '/solutions/health-cloud',
    icon: Heart,
    desc: 'Patient 360 for healthcare & life sciences',
    industry: true,
    iconColor: '#EF4444',
  },
  {
    label: 'Financial Services Cloud',
    to: '/solutions/financial-services-cloud',
    icon: Landmark,
    desc: 'Banking, wealth, lending, insurance',
    industry: true,
    iconColor: '#0176D3',
  },
  {
    label: 'Life Sciences Cloud',
    to: '/solutions/life-sciences-cloud',
    icon: FlaskConical,
    desc: 'Clinical, medical, commercial, patient services',
    industry: true,
    iconColor: '#06B6D4',
  },
  {
    label: 'Education Cloud',
    to: '/solutions/education-cloud',
    icon: GraduationCap,
    desc: 'Recruitment, success, advancement',
    industry: true,
    iconColor: '#A855F7',
  },
  {
    label: 'Nonprofit Cloud',
    to: '/solutions/nonprofit-cloud',
    icon: HandHeart,
    desc: 'Fundraising, programs, volunteers',
    industry: true,
    iconColor: '#F59E0B',
  },
]

const hubspotProducts = [
  {
    label: 'HubSpot Overview',
    to: '/solutions/hubspot',
    icon: SmallBusinessBundleIcon,
    desc: 'Full HubSpot stack - all hubs in one place',
    highlight: true,
    iconColor: '#FF7A59',
  },
  {
    label: 'Breeze AI',
    to: '/solutions/hubspot-breeze-ai',
    icon: BreezeIcon,
    desc: 'AI agents and Intelligence enrichment',
    highlight: true,
    iconColor: '#FF7A59',
  },
  {
    label: 'Smart CRM',
    to: '/solutions/hubspot-smart-crm',
    icon: SmartCRMIcon,
    desc: 'AI-powered, flexible CRM foundation',
    iconColor: '#FF7A59',
  },
  {
    label: 'Marketing Hub',
    to: '/solutions/hubspot-marketing-hub',
    icon: MarketingHubIcon,
    desc: 'Marketing automation software',
    iconColor: '#FF7A59',
  },
  {
    label: 'Sales Hub',
    to: '/solutions/hubspot-sales-hub',
    icon: SalesHubIcon,
    desc: 'Sales software',
    iconColor: '#FF7A59',
  },
  {
    label: 'Service Hub',
    to: '/solutions/hubspot-service-hub',
    icon: ServiceHubIcon,
    desc: 'Customer service software',
    iconColor: '#FF7A59',
  },
  {
    label: 'Content Hub',
    to: '/solutions/hubspot-content-hub',
    icon: ContentHubIcon,
    desc: 'Content marketing software',
    iconColor: '#FF7A59',
  },
  {
    label: 'Data Hub',
    to: '/solutions/hubspot-data-hub',
    icon: DataHubIcon,
    desc: 'Data management software',
    iconColor: '#FF7A59',
  },
  {
    label: 'Commerce Hub',
    to: '/solutions/hubspot-commerce-hub',
    icon: CommerceHubIcon,
    desc: 'CPQ, billing, and payments',
    iconColor: '#FF7A59',
  },
  {
    label: 'Small Business Bundle',
    to: '/solutions/hubspot-small-business-bundle',
    icon: SmallBusinessBundleIcon,
    desc: 'Starter editions for startups and SMBs',
    iconColor: '#FF7A59',
  },
]

const awsProducts = [
  { label: 'AWS Overview',         to: '/solutions/aws',                  icon: Cloud,        desc: 'Cloud architecture, migration, managed services', highlight: true, iconColor: '#FF9900' },
  { label: 'Cloud Migration',      to: '/solutions/aws#migration',        icon: RefreshCw,    desc: 'Lift-and-shift, re-platform, modernize',            iconColor: '#FF9900' },
  { label: 'Infrastructure & DevOps', to: '/solutions/aws#devops',        icon: GitBranch,    desc: 'CI/CD, IaC, container & serverless platforms',      iconColor: '#FF9900' },
  { label: 'Security & Compliance',to: '/solutions/aws#security',         icon: Shield,       desc: 'Well-Architected, IAM, SOC 2, HIPAA',               iconColor: '#FF9900' },
  { label: 'Cost Optimization',    to: '/solutions/aws#cost',             icon: DollarSign,   desc: 'Right-sizing, savings plans, FinOps',               iconColor: '#FF9900' },
  { label: 'AI/ML on AWS',         to: '/solutions/aws#ai-ml',            icon: Bot,          desc: 'Bedrock, SageMaker, custom model deployment',       iconColor: '#FF9900' },
]

const dynamicsProducts = [
  { label: 'Dynamics 365 Overview',     to: '/solutions/microsoft-dynamics',                        icon: Layers,     desc: 'Full Dynamics + Power Platform stack',                         highlight: true, iconColor: '#0078D4' },
  { label: 'Customer Experience',       to: '/solutions/dynamics-365-customer-experience',          icon: Users,      desc: 'Sales + Customer Insights on shared Dataverse',                iconColor: '#0078D4' },
  { label: 'Service',                   to: '/solutions/dynamics-365-service',                      icon: Headphones, desc: 'Customer Service, Contact Center, Field Service',             iconColor: '#0078D4' },
  { label: 'Supply Chain',              to: '/solutions/dynamics-365-supply-chain',                 icon: Workflow,   desc: 'Supply Chain Management + Commerce',                           iconColor: '#0078D4' },
  { label: 'Finance',                   to: '/solutions/dynamics-365-finance',                      icon: DollarSign, desc: 'Finance, Project Operations, Human Resources',                iconColor: '#0078D4' },
  { label: 'Business Central',          to: '/solutions/dynamics-365-business-central',             icon: Building2,  desc: 'All-in-one ERP for small and medium business',                iconColor: '#0078D4' },
  { label: 'Power Platform',            to: '/solutions/microsoft-power-platform',                  icon: Zap,        desc: 'Power Apps, Automate, BI, Copilot Studio',                    iconColor: '#0078D4' },
]

const aiAgentsProducts = [
  { label: 'AI Agents Overview',       to: '/solutions/ai-agents',                  icon: Bot,        desc: 'Custom agents to retire legacy systems', highlight: true, iconColor: '#7B4AE2' },
  { label: 'Legacy Modernization',     to: '/solutions/ai-agents#legacy',           icon: RefreshCw,  desc: 'Replace aging CRMs, ERPs, ticketing tools',                iconColor: '#7B4AE2' },
  { label: 'Custom Agent Development', to: '/solutions/ai-agents#custom',           icon: Sparkles,   desc: 'Domain-specific agents built for your data',               iconColor: '#7B4AE2' },
  { label: 'RPA & Workflow Replace',   to: '/solutions/ai-agents#rpa',              icon: Workflow,   desc: 'AI-native automation beyond brittle RPA',                  iconColor: '#7B4AE2' },
  { label: 'LLM & Tool Integration',   to: '/solutions/ai-agents#llm',              icon: Globe,      desc: 'MCP, function calling, RAG over your data',                iconColor: '#7B4AE2' },
  { label: 'Multi-Agent Orchestration',to: '/solutions/ai-agents#orchestration',    icon: Network,    desc: 'Specialist agents that coordinate to ship work',           iconColor: '#7B4AE2' },
]

const navLinks = [
  { label: 'Services', to: '/services' },
  { label: 'About',   to: '/about' },
  { label: 'Blog',    to: '/blog' },
  { label: 'Careers', to: '/careers' },
]

export default function Navbar() {
  const [open, setOpen]         = useState(false)   // mobile menu
  const [dropOpen, setDropOpen] = useState(false)   // desktop dropdown
  const [mobileDropOpen, setMobileDropOpen] = useState(false)
  const [platformTab, setPlatformTab] = useState('salesforce') // 'salesforce' | 'hubspot'
  const [scrolled, setScrolled] = useState(false)
  const dropRef  = useRef(null)
  const panelRef = useRef(null)


  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // close dropdown on outside click (covers button and portaled panel)
  useEffect(() => {
    const handler = (e) => {
      const inButton = dropRef.current && dropRef.current.contains(e.target)
      const inPanel  = panelRef.current && panelRef.current.contains(e.target)
      if (!inButton && !inPanel) {
        setDropOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={scrolled
        ? { backgroundColor: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(16px)', boxShadow: '0 1px 0 rgba(1,118,211,0.10)', padding: '6px 0' }
        : { backgroundColor: 'rgba(255,255,255,0.80)', backdropFilter: 'blur(8px)', padding: '10px 0' }
      }
    >
      <div className="section-wrap flex items-center justify-between 2xl:px-12">

        {/* Logo */}
        <Link to="/" className="flex items-center animate-fade-in group">
          <img
            src={import.meta.env.BASE_URL + "cloudsheer-logo.png"}
            alt="Cloudsheer Consulting"
            className="h-10 w-auto transition-opacity duration-200 group-hover:opacity-85"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 animate-fade-in">

          {/* Solutions dropdown trigger */}
          <div className="relative" ref={dropRef}>
            <button
              onClick={() => setDropOpen(v => !v)}
              onMouseEnter={() => setDropOpen(true)}
              className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gray-50"
              style={{ color: dropOpen ? '#0176D3' : '#475569' }}
            >
              Solutions
              <ChevronDown
                className="w-3.5 h-3.5 transition-transform duration-200"
                style={{ transform: dropOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            </button>

            {/* Dropdown panel - mega menu with platform tabs (portaled to body) */}
            {dropOpen && (() => {
              const platforms = [
                { key: 'salesforce', label: 'Salesforce',          accent: '#0176D3', tint: 'rgba(1,118,211,0.08)',  headerBg: '#F0F7FF' },
                { key: 'hubspot',    label: 'HubSpot',             accent: '#FF7A59', tint: 'rgba(255,122,89,0.08)', headerBg: '#FFF4F0' },
                { key: 'aws',        label: 'AWS',                 accent: '#FF9900', tint: 'rgba(255,153,0,0.10)',  headerBg: '#FFF8EB' },
                { key: 'dynamics',   label: 'Microsoft Dynamics',  accent: '#0078D4', tint: 'rgba(0,120,212,0.08)',  headerBg: '#EFF6FF' },
                { key: 'ai-agents',  label: 'AI Agents',           accent: '#7B4AE2', tint: 'rgba(123,74,226,0.08)', headerBg: '#F5F0FF' },
              ]
              const active = platforms.find(p => p.key === platformTab) || platforms[0]
              const accent = active.accent
              const accentTint = active.tint
              const headerBg = active.headerBg

              const isCore = c => ['Sales Cloud', 'Service Cloud', 'Marketing Cloud', 'Commerce Cloud'].includes(c.label)
              const isAI   = c => ['Agentforce', 'Slack'].includes(c.label)
              const isExtend = c => !c.industry && !isCore(c) && !isAI(c)

              const tiersByPlatform = {
                salesforce: [
                  { label: 'AI & Automation', items: clouds.filter(isAI) },
                  { label: 'Core Clouds',     items: clouds.filter(isCore) },
                  { label: 'Extend & Analyse',items: clouds.filter(isExtend) },
                  { label: 'Industry Clouds', items: clouds.filter(c => c.industry) },
                ],
                hubspot: [
                  { label: 'Overview',     items: hubspotProducts.filter(p => ['HubSpot Overview'].includes(p.label)) },
                  { label: 'Foundation',   items: hubspotProducts.filter(p => ['Smart CRM', 'Breeze AI'].includes(p.label)) },
                  { label: 'Core Hubs',    items: hubspotProducts.filter(p => ['Marketing Hub', 'Sales Hub', 'Service Hub'].includes(p.label)) },
                  { label: 'Content & Commerce', items: hubspotProducts.filter(p => ['Content Hub', 'Commerce Hub'].includes(p.label)) },
                  { label: 'Data & SMB',   items: hubspotProducts.filter(p => ['Data Hub', 'Small Business Bundle'].includes(p.label)) },
                ],
                aws: [
                  { label: 'Overview',           items: awsProducts.filter(p => ['AWS Overview'].includes(p.label)) },
                  { label: 'Migrate & Build',    items: awsProducts.filter(p => ['Cloud Migration', 'Infrastructure & DevOps'].includes(p.label)) },
                  { label: 'Secure & Optimize',  items: awsProducts.filter(p => ['Security & Compliance', 'Cost Optimization'].includes(p.label)) },
                  { label: 'AI Workloads',       items: awsProducts.filter(p => ['AI/ML on AWS'].includes(p.label)) },
                ],
                dynamics: [
                  { label: 'Overview',          items: dynamicsProducts.filter(p => ['Dynamics 365 Overview'].includes(p.label)) },
                  { label: 'Customer-Facing',   items: dynamicsProducts.filter(p => ['Customer Experience', 'Service'].includes(p.label)) },
                  { label: 'Operations',        items: dynamicsProducts.filter(p => ['Supply Chain', 'Finance'].includes(p.label)) },
                  { label: 'SMB & Extensibility', items: dynamicsProducts.filter(p => ['Business Central', 'Power Platform'].includes(p.label)) },
                ],
                'ai-agents': [
                  { label: 'Overview',  items: aiAgentsProducts.filter(p => ['AI Agents Overview'].includes(p.label)) },
                  { label: 'Modernize', items: aiAgentsProducts.filter(p => ['Legacy Modernization', 'RPA & Workflow Replace'].includes(p.label)) },
                  { label: 'Build',     items: aiAgentsProducts.filter(p => ['Custom Agent Development', 'LLM & Tool Integration'].includes(p.label)) },
                  { label: 'Scale',     items: aiAgentsProducts.filter(p => ['Multi-Agent Orchestration'].includes(p.label)) },
                ],
              }
              const tiers = tiersByPlatform[active.key]
              const isHubspot = active.key === 'hubspot'

              return createPortal((
                <div
                  ref={panelRef}
                  onMouseLeave={() => setDropOpen(false)}
                  style={{
                    position: 'fixed',
                    top: scrolled ? '60px' : '72px',
                    left: 0,
                    right: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    pointerEvents: 'none',
                    zIndex: 100,
                  }}>
                <div
                  className="rounded-2xl overflow-hidden animate-scale-in"
                  style={{
                    pointerEvents: 'auto',
                    width: 'min(1100px, calc(100vw - 32px))',
                    background: '#ffffff',
                    border: `1px solid ${accent}20`,
                    boxShadow: `0 20px 60px ${accent}24`,
                  }}
                >
                  {/* Platform tabs */}
                  <div className="px-3 pt-3 pb-0 flex items-center gap-1 flex-wrap" style={{ background: headerBg, borderBottom: `1px solid ${accentTint}` }}>
                    {platforms.map(p => {
                      const isActive = p.key === active.key
                      return (
                        <button
                          key={p.key}
                          onClick={() => setPlatformTab(p.key)}
                          className="px-3 py-2 rounded-t-lg text-[11px] font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-150"
                          style={{
                            background: isActive ? '#ffffff' : 'transparent',
                            color: isActive ? p.accent : '#64748B',
                            borderBottom: isActive ? `2px solid ${p.accent}` : '2px solid transparent',
                          }}>
                          {p.label}
                        </button>
                      )
                    })}
                    <div className="ml-auto pb-2 pr-2">
                      <Link
                        to="/solutions"
                        onClick={() => setDropOpen(false)}
                        className="text-xs font-semibold flex items-center gap-1 transition-colors"
                        style={{ color: accent }}
                      >
                        View all solutions →
                      </Link>
                    </div>
                  </div>

                  {/* 4-column grid */}
                  <div className="grid grid-cols-4 gap-0 p-3">
                    {tiers.map(({ label: tierLabel, items }, tIdx) => (
                      <div key={tierLabel}
                        className="px-2"
                        style={{ borderLeft: tIdx > 0 ? `1px solid ${accentTint}` : 'none' }}>
                        <p className="text-[10px] font-bold uppercase tracking-widest px-2 pt-1 pb-2" style={{ color: '#94A3B8' }}>
                          {tierLabel}
                        </p>
                        <div className="flex flex-col gap-0.5">
                          {items.map(({ label, to, icon: Icon, image, highlight, iconColor }) => {
                            const color = iconColor || accent
                            return (
                              <Link key={label} to={to} onClick={() => setDropOpen(false)}
                                className="flex items-center gap-2.5 px-2 py-2 rounded-lg transition-all duration-150"
                                style={{ textDecoration: 'none' }}
                                onMouseEnter={e => { e.currentTarget.style.background = `${color}10` }}
                                onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}>
                                <div className="w-7 h-7 rounded-md flex items-center justify-center shrink-0"
                                  style={{ backgroundColor: `${color}14`, color }}>
                                  {Icon ? <Icon className="w-3.5 h-3.5" /> : image && <img src={import.meta.env.BASE_URL + image} alt={label} className="w-4 h-4 rounded" />}
                                </div>
                                <span className="text-[13px] font-semibold leading-tight" style={{ color: '#032D60' }}>{label}</span>
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                </div>
              ), document.body)
            })()}
          </div>

          {/* Other links */}
          {navLinks.map(({ label, to }) => (
            <NavLink key={label} to={to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive ? 'bg-blue-50' : 'hover:bg-gray-50'}`
              }
              style={({ isActive }) => ({ color: isActive ? '#0176D3' : '#475569' })}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3 animate-fade-in">
          <a href="https://appexchange.salesforce.com/appxConsultingListingDetail?listingId=78cae982-5a1e-4fb2-a8c9-b52a994f69d7" target="_blank" rel="noopener noreferrer">
            <img
              src={import.meta.env.BASE_URL + "salesforce-partner-badge.png"}
              alt="Salesforce Partner"
              className="h-14 w-auto hover:opacity-80 transition-opacity"
              title="Verified on Salesforce AppExchange - Click to verify"
            />
          </a>
          <Link to="/contact" className="btn-primary text-sm px-5 py-2">Free Consultation</Link>
        </div>

        {/* Mobile burger */}
        <button className="md:hidden p-2 rounded-lg transition-colors hover:bg-gray-50" aria-label="Toggle menu"
          style={{ color: '#032D60' }}
          onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white shadow-lg animate-fade-in"
          style={{ borderColor: 'rgba(1,118,211,0.08)' }}>
          <nav className="section-wrap flex flex-col py-4 gap-1">

            {/* Solutions accordion */}
            <button
              onClick={() => setMobileDropOpen(v => !v)}
              className="flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
              style={{ color: '#475569' }}
            >
              Solutions
              <ChevronDown
                className="w-4 h-4 transition-transform duration-200"
                style={{ transform: mobileDropOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            </button>

            {mobileDropOpen && (
              <div className="ml-2 flex flex-col gap-0.5 mb-1">
                <p className="text-[10px] font-bold uppercase tracking-widest px-3 pt-2 pb-1" style={{ color: '#0176D3' }}>Salesforce</p>
                {clouds.map(({ label, to, icon: Icon, image, highlight }) => (
                  <Link
                    key={label}
                    to={to}
                    onClick={() => { setOpen(false); setMobileDropOpen(false) }}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm transition-colors hover:bg-blue-50"
                    style={{ color: highlight ? '#0176D3' : '#475569' }}
                  >
                    {Icon ? <Icon className="w-4 h-4 shrink-0" /> : image ? <img src={import.meta.env.BASE_URL + image} alt="" className="w-5 h-5 shrink-0 rounded" /> : null}
                    {label}
                  </Link>
                ))}
                <p className="text-[10px] font-bold uppercase tracking-widest px-3 pt-3 pb-1" style={{ color: '#FF7A59' }}>HubSpot</p>
                {hubspotProducts.map(({ label, to, icon: Icon, highlight }) => (
                  <Link
                    key={label}
                    to={to}
                    onClick={() => { setOpen(false); setMobileDropOpen(false) }}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm transition-colors"
                    style={{ color: highlight ? '#FF7A59' : '#475569' }}
                  >
                    {Icon ? <Icon className="w-4 h-4 shrink-0" /> : null}
                    {label}
                  </Link>
                ))}
                <p className="text-[10px] font-bold uppercase tracking-widest px-3 pt-3 pb-1" style={{ color: '#FF9900' }}>AWS</p>
                {awsProducts.map(({ label, to, icon: Icon, highlight }) => (
                  <Link
                    key={label}
                    to={to}
                    onClick={() => { setOpen(false); setMobileDropOpen(false) }}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm transition-colors"
                    style={{ color: highlight ? '#FF9900' : '#475569' }}
                  >
                    {Icon ? <Icon className="w-4 h-4 shrink-0" /> : null}
                    {label}
                  </Link>
                ))}
                <p className="text-[10px] font-bold uppercase tracking-widest px-3 pt-3 pb-1" style={{ color: '#0078D4' }}>Microsoft Dynamics</p>
                {dynamicsProducts.map(({ label, to, icon: Icon, highlight }) => (
                  <Link
                    key={label}
                    to={to}
                    onClick={() => { setOpen(false); setMobileDropOpen(false) }}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm transition-colors"
                    style={{ color: highlight ? '#0078D4' : '#475569' }}
                  >
                    {Icon ? <Icon className="w-4 h-4 shrink-0" /> : null}
                    {label}
                  </Link>
                ))}
                <p className="text-[10px] font-bold uppercase tracking-widest px-3 pt-3 pb-1" style={{ color: '#7B4AE2' }}>AI Agents</p>
                {aiAgentsProducts.map(({ label, to, icon: Icon, highlight }) => (
                  <Link
                    key={label}
                    to={to}
                    onClick={() => { setOpen(false); setMobileDropOpen(false) }}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm transition-colors"
                    style={{ color: highlight ? '#7B4AE2' : '#475569' }}
                  >
                    {Icon ? <Icon className="w-4 h-4 shrink-0" /> : null}
                    {label}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.map(({ label, to }) => (
              <NavLink key={label} to={to} onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-blue-50' : 'hover:bg-gray-50'}`
                }
                style={({ isActive }) => ({ color: isActive ? '#0176D3' : '#475569' })}>
                {label}
              </NavLink>
            ))}

            <div className="pt-3 mt-2 flex items-center gap-3" style={{ borderTop: '1px solid rgba(1,118,211,0.08)' }}>
              <Link to="/contact" onClick={() => setOpen(false)}
                className="btn-primary flex-1 justify-center text-sm">
                Free Consultation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
