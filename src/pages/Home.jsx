import { useState, useRef, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import {
  SalesforceLogo, HubSpotLogo, AWSLogo, MicrosoftLogo, AIAgentsLogo,
} from '../components/BrandLogos'
import {
  ArrowRight, Bot, Zap, ShieldCheck, BarChart3,
  CheckCircle2, ChevronRight, ChevronLeft, Star, Users, TrendingUp,
  Sparkles, Clock, Settings, HelpCircle, ChevronDown, Award, Building2, UserCheck,
  Headphones, Database, Megaphone, Globe, Cloud, Layers, Pause, Play,
  Network, Mail, GitBranch, Workflow, DollarSign, Shield, Activity, Server, Cpu,
  RefreshCw, Boxes, FileCheck,
  Landmark, Heart, ShoppingCart, FlaskConical, GraduationCap, Factory, Briefcase, MapPin,
} from 'lucide-react'

/* ─── Hero platforms (click a button to swap) ───────────────── */
const heroSlides = [
  {
    key: 'salesforce',
    buttonLabel: 'Salesforce',
    buttonTagline: 'CRM + Agentforce',
    ButtonIcon: SalesforceLogo,
    badge: 'Salesforce, Agentforce & HubSpot Implementation Partner',
    badgeDot: '#F59E0B',
    bg: 'linear-gradient(135deg, #032D60 0%, #0A3F80 50%, #0176D3 100%)',
    glow1: 'rgba(0,169,255,0.20)',
    glow2: 'rgba(245,158,11,0.10)',
    accent: '#0176D3',
    accentLight: '#5EB0F0',
    shimmer: 'linear-gradient(135deg, #5EB0F0 0%, #B3D7F5 100%)',
    h1Top: 'Build Once.',
    h1Bottom: 'Deploy Everywhere.',
    subtitle: 'AI-powered CRM across Salesforce and HubSpot - Agentforce agents that work 24/7 across every channel, and Breeze AI wired into your full HubSpot stack.',
    chips: ['Agentforce', 'Einstein AI', 'Headless 360', 'All 14 Clouds'],
    stats: [
      { val: '40%',  label: 'Lower Support Costs' },
      { val: '3×',   label: 'Faster Lead Response' },
      { val: '24/7', label: 'Always-On Agents' },
    ],
    ctaTo: '/solutions',
    ctaText: 'Explore Solutions',
  },
  {
    key: 'hubspot',
    buttonLabel: 'HubSpot',
    buttonTagline: 'CRM + Breeze AI',
    ButtonIcon: HubSpotLogo,
    badge: 'HubSpot Implementation Partner',
    badgeDot: '#FFD0B8',
    bg: 'linear-gradient(135deg, #8B2E15 0%, #CC4A2A 50%, #FF7A59 100%)',
    glow1: 'rgba(255,200,170,0.22)',
    glow2: 'rgba(255,255,255,0.08)',
    accent: '#FF7A59',
    accentLight: '#FFB69E',
    shimmer: 'linear-gradient(135deg, #FFD0B8 0%, #FFEFE5 100%)',
    h1Top: 'HubSpot,',
    h1Bottom: 'Connected.',
    subtitle: 'Every Hub wired together on Smart CRM with Breeze AI. Marketing, Sales, Service, Content, Commerce, and Data on one unified customer record - from first form fill to closed-won deal.',
    chips: ['Smart CRM', 'Breeze AI', 'Content Hub', 'Commerce Hub'],
    stats: [
      { val: '40%',  label: 'Agent Deflection' },
      { val: '3.4×', label: 'Prospecting Meetings' },
      { val: '92%',  label: 'Record Completeness' },
    ],
    ctaTo: '/solutions/hubspot',
    ctaText: 'Explore HubSpot',
  },
  {
    key: 'aws',
    buttonLabel: 'AWS',
    buttonTagline: 'Cloud Infrastructure',
    ButtonIcon: AWSLogo,
    badge: 'AWS Partnership in Progress',
    badgeDot: '#FF9900',
    bg: 'linear-gradient(135deg, #232F3E 0%, #1A2330 50%, #2C3A4F 100%)',
    glow1: 'rgba(255,153,0,0.20)',
    glow2: 'rgba(255,122,89,0.10)',
    accent: '#FF9900',
    accentLight: '#FFB84D',
    shimmer: 'linear-gradient(135deg, #FFB84D 0%, #FFD699 100%)',
    h1Top: 'AWS Cloud,',
    h1Bottom: 'Done Right.',
    subtitle: 'From first VPC to multi-account landing zone. Migration, security, FinOps, and Bedrock for AI workloads - delivered by senior engineers, not certs-on-paper.',
    chips: ['Migration', 'DevOps', 'Security', 'FinOps', 'Bedrock'],
    stats: [
      { val: '25-40%', label: 'Bill Reduction' },
      { val: 'WAF',    label: 'Well-Architected' },
      { val: '24/7',   label: 'Managed Ops' },
    ],
    ctaTo: '/solutions/aws',
    ctaText: 'Explore AWS',
  },
  {
    key: 'ai-agents',
    buttonLabel: 'AI Agents',
    buttonTagline: 'Replace Legacy',
    ButtonIcon: AIAgentsLogo,
    badge: 'New Capability',
    badgeDot: '#A78BFA',
    bg: 'linear-gradient(135deg, #2E1065 0%, #1E0A4D 50%, #5B2DA6 100%)',
    glow1: 'rgba(167,139,250,0.25)',
    glow2: 'rgba(123,74,226,0.15)',
    accent: '#7B4AE2',
    accentLight: '#A78BFA',
    shimmer: 'linear-gradient(135deg, #A78BFA 0%, #DDD6FE 100%)',
    h1Top: 'AI Agents That',
    h1Bottom: 'Retire Legacy.',
    subtitle: 'When a box product cannot be made to fit, we build the agent that does. Production-grade, observable, and safe to put in front of customers.',
    chips: ['Custom Build', 'Evals First', 'Multi-LLM', 'MCP + RAG'],
    stats: [
      { val: 'Day 1', label: 'Eval Suite' },
      { val: 'PII',   label: 'Guardrails' },
      { val: 'Audit', label: 'Trail' },
    ],
    ctaTo: '/solutions/ai-agents',
    ctaText: 'Explore AI Agents',
  },
  {
    key: 'dynamics',
    buttonLabel: 'Microsoft',
    buttonTagline: 'Dynamics 365 + Power',
    ButtonIcon: MicrosoftLogo,
    badge: 'Microsoft Partnership in Progress',
    badgeDot: '#5EB0F0',
    bg: 'linear-gradient(135deg, #002050 0%, #003B73 50%, #0078D4 100%)',
    glow1: 'rgba(94,176,240,0.22)',
    glow2: 'rgba(134,97,197,0.12)',
    accent: '#0078D4',
    accentLight: '#5EB0F0',
    shimmer: 'linear-gradient(135deg, #5EB0F0 0%, #B3D7F5 100%)',
    h1Top: 'Dynamics 365',
    h1Bottom: '+ Power Platform.',
    subtitle: 'Customer engagement and ERP on the Microsoft stack. Extended with Power Platform, Power BI, and Copilot Studio - one team for the entire surface.',
    chips: ['Customer Experience', 'Service', 'Supply Chain', 'Finance', 'Business Central'],
    stats: [
      { val: 'CRM',     label: '+ ERP Unified' },
      { val: 'Power',   label: 'Platform Native' },
      { val: 'Copilot', label: 'Studio Agents' },
    ],
    ctaTo: '/solutions/microsoft-dynamics',
    ctaText: 'Explore Dynamics',
  },
]

/* ─── Hero (button-driven platform selector) ──────────────── */
function Hero() {
  const [selectedKey, setSelectedKey] = useState('salesforce')
  const current = heroSlides.find(s => s.key === selectedKey) || heroSlides[0]

  // Keyboard navigation: ↑/↓ or ←/→ to cycle platforms
  useEffect(() => {
    const onKey = (e) => {
      const idx = heroSlides.findIndex(s => s.key === selectedKey)
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        setSelectedKey(heroSlides[(idx + 1) % heroSlides.length].key)
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        setSelectedKey(heroSlides[(idx - 1 + heroSlides.length) % heroSlides.length].key)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selectedKey])

  return (
    <section className="relative min-h-screen overflow-hidden" role="region" aria-label="Cloudsheer platform selector">
      {/* Background layers - one per platform, crossfade */}
      {heroSlides.map(s => {
        const active = s.key === selectedKey
        return (
          <div key={`bg-${s.key}`}
            className="absolute inset-0 transition-opacity ease-out"
            style={{
              background: s.bg,
              opacity: active ? 1 : 0,
              transitionDuration: '900ms',
              zIndex: 1,
            }}>
            <div className="absolute inset-0 bg-grid-dark" />
            <div className="glow-dot w-[700px] h-[700px] top-[-200px] left-[-100px]"
              style={{ backgroundColor: s.glow1 }} />
            <div className="glow-dot w-[500px] h-[500px] bottom-[-150px] right-[-50px] hidden md:block"
              style={{ backgroundColor: s.glow2 }} />
          </div>
        )
      })}

      {/* Mobile platform pills (above content, horizontal scroll) */}
      <div className="absolute top-20 inset-x-0 z-30 lg:hidden">
        <div className="section-wrap">
          <div className="flex gap-2 overflow-x-auto pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {heroSlides.map(s => {
              const active = s.key === selectedKey
              const Icon = s.ButtonIcon
              return (
                <button key={`pill-${s.key}`} onClick={() => setSelectedKey(s.key)}
                  className="shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-full transition-all duration-200 text-xs font-semibold"
                  style={{
                    backgroundColor: active ? 'white' : 'rgba(255,255,255,0.10)',
                    color: active ? s.accent : 'white',
                    border: active ? `1px solid ${s.accent}` : '1px solid rgba(255,255,255,0.20)',
                  }}>
                  <Icon className="w-3.5 h-3.5" />
                  {s.buttonLabel}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="section-wrap relative z-20 min-h-screen flex items-center pt-32 pb-32 lg:pt-24 lg:pb-28">
        <div className="w-full grid lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_340px] gap-10 lg:gap-12 items-center">

          {/* LEFT: dynamic platform content (keyed to re-trigger entry animations) */}
          <div key={selectedKey} className="text-center lg:text-left">
            {/* Badge */}
            <div className="tag-white inline-flex mb-6 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse-slow" style={{ backgroundColor: current.badgeDot }} />
              {current.badge}
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-black leading-[1.05] mb-5 tracking-tight animate-fade-up-1">
              <span className="text-white">{current.h1Top}</span><br />
              <span style={{
                background: current.shimmer,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>{current.h1Bottom}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0 animate-fade-up-2"
              style={{ color: 'rgba(255,255,255,0.84)' }}>
              {current.subtitle}
            </p>

            {/* Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-7 animate-fade-up-2">
              {current.chips.map(chip => (
                <span key={chip}
                  className="text-[11px] sm:text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{
                    color: 'white',
                    backgroundColor: 'rgba(255,255,255,0.10)',
                    border: '1px solid rgba(255,255,255,0.18)',
                  }}>
                  {chip}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-7 justify-center lg:justify-start animate-fade-up-3">
              <a href="https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm sm:text-base"
                style={{
                  background: `linear-gradient(135deg, ${current.accent}, ${current.accentLight})`,
                  color: 'white',
                  boxShadow: `0 10px 32px ${current.accent}55`,
                }}>
                Book Free Discovery Call <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <Link to={current.ctaTo}
                className="inline-flex items-center justify-center gap-2 font-medium px-6 py-3 rounded-xl transition-all duration-200 text-sm sm:text-base"
                style={{ border: '1.5px solid rgba(255,255,255,0.30)', color: 'white' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.10)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                {current.ctaText}
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-8 animate-fade-up-4">
              {current.stats.map(({ val, label }) => (
                <div key={label} className="text-center lg:text-left">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-black text-white">{val}</p>
                  <p className="text-[10px] sm:text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: vertical platform buttons (desktop only - mobile uses pills above) */}
          <div className="hidden lg:flex flex-col gap-2.5 animate-fade-in">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-1 px-1" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Explore Our Practice
            </p>
            {heroSlides.map(s => {
              const active = s.key === selectedKey
              const Icon = s.ButtonIcon
              return (
                <button key={`btn-${s.key}`} onClick={() => setSelectedKey(s.key)}
                  className="group flex items-center gap-3 p-3.5 rounded-xl w-full text-left transition-all duration-300"
                  style={{
                    backgroundColor: active ? '#ffffff' : 'rgba(255,255,255,0.07)',
                    border: active ? `1.5px solid ${s.accent}` : '1.5px solid rgba(255,255,255,0.15)',
                    boxShadow: active ? `0 12px 32px ${s.accent}40` : 'none',
                    transform: active ? 'translateX(-6px)' : 'translateX(0)',
                  }}
                  onMouseEnter={e => { if (!active) { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.30)' } }}
                  onMouseLeave={e => { if (!active) { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)' } }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors"
                    style={{
                      backgroundColor: active ? `${s.accent}15` : 'rgba(255,255,255,0.10)',
                      color: active ? s.accent : 'white',
                      border: active ? `1px solid ${s.accent}30` : '1px solid rgba(255,255,255,0.15)',
                    }}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm leading-tight"
                      style={{ color: active ? '#032D60' : 'white' }}>
                      {s.buttonLabel}
                    </p>
                    <p className="text-[11px] leading-tight mt-0.5"
                      style={{ color: active ? '#64748B' : 'rgba(255,255,255,0.65)' }}>
                      {s.buttonTagline}
                    </p>
                  </div>
                  {active && <ChevronRight className="w-4 h-4 shrink-0" style={{ color: s.accent }} />}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 inset-x-0 z-20">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}

/* ─── Agent visual (Salesforce-style inbox + chat) ─────────── */
function AgentVisual() {
  return (
    <div className="relative w-full max-w-lg animate-float">
      {/* ── Sidebar panel (behind, offset left) ── */}
      <div className="absolute -left-10 top-6 w-24 rounded-2xl overflow-hidden"
        style={{ height: '320px', background: 'linear-gradient(180deg,#7B4AE2 0%,#5B5FC7 50%,#38BDF8 100%)', boxShadow: '0 20px 50px rgba(0,0,0,0.30)', border: '1px solid rgba(255,255,255,0.15)' }}>
        {/* Window dots */}
        <div className="flex items-center gap-1.5 px-3 pt-3 pb-4">
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#FF5F57' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#FFBD2E' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#28CA42' }} />
        </div>
        {/* Nav items */}
        {[
          { icon: <Bot className="w-4 h-4" />, label: 'Agents' },
          { icon: <Users className="w-4 h-4" />, label: 'Cases' },
          { icon: <TrendingUp className="w-4 h-4" />, label: 'Leads' },
        ].map(({ icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-1 py-3 mx-2 rounded-lg mb-1"
            style={{ backgroundColor: label === 'Agents' ? 'rgba(255,255,255,0.20)' : 'transparent' }}>
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>{icon}</span>
            <span className="text-[9px] font-semibold" style={{ color: 'rgba(255,255,255,0.8)' }}>{label}</span>
          </div>
        ))}
        {/* Inbox list placeholders */}
        <div className="px-3 mt-2 space-y-2">
          {[1, 2, 3].map(i => (
            <div key={i} className="rounded-md p-1.5" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
              <div className="h-1.5 rounded-full mb-1" style={{ backgroundColor: 'rgba(255,255,255,0.25)', width: '75%' }} />
              <div className="h-1 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.12)', width: '50%' }} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Main chat window ── */}
      <div className="relative ml-10 rounded-2xl overflow-hidden"
        style={{ backgroundColor: 'white', boxShadow: '0 25px 60px rgba(0,0,0,0.30)', border: '1px solid rgba(0,0,0,0.08)' }}>
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3"
          style={{ background: 'linear-gradient(135deg,#5B5FC7 0%,#7B4AE2 100%)' }}>
          <div className="flex items-center gap-2">
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>←</span>
            <div className="h-2.5 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.35)', width: '120px' }} />
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)' }}>
            <span className="text-[10px] font-semibold text-white">Inbox</span>
            <span className="text-white text-xs">×</span>
          </div>
        </div>

        {/* Chat body */}
        <div className="px-5 py-4 space-y-5" style={{ backgroundColor: '#F8FAFC' }}>
          {/* Customer message */}
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full shrink-0 flex items-center justify-center text-white text-xs font-bold"
              style={{ background: 'linear-gradient(135deg,#0176D3,#38BDF8)' }}>
              JR
            </div>
            <div>
              <p className="text-xs font-bold" style={{ color: '#032D60' }}>
                James Rivera <span className="font-normal" style={{ color: '#94A3B8' }}>to Agent</span>
              </p>
              <div className="mt-2 rounded-xl px-4 py-3" style={{ backgroundColor: 'white', border: '1px solid #E2E8F0' }}>
                <p className="text-sm" style={{ color: '#334155' }}>
                  Our sales team is spending too much time on manual data entry. Can Agentforce help?
                </p>
              </div>
            </div>
          </div>

          {/* Agent response */}
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full shrink-0 flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg,#7B4AE2,#A78BFA)' }}>
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-xs font-bold" style={{ color: '#7B4AE2' }}>
                Agent <span className="font-normal" style={{ color: '#94A3B8' }}>to James Rivera</span>
              </p>
              <div className="mt-2 rounded-xl px-4 py-3" style={{ backgroundColor: 'white', border: '1px solid #E2E8F0' }}>
                <p className="text-sm mb-3" style={{ color: '#334155' }}>
                  Absolutely. Based on your Salesforce data, here is what an Operations Agent can do:
                </p>
                <ul className="space-y-1.5 mb-3">
                  {[
                    'Auto-update records after every call',
                    'Generate pipeline reports weekly',
                    'Sync data across your CRM & ERP',
                  ].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: '#7B4AE2' }} />
                      <span style={{ color: '#334155' }}><strong>{item.split(' ')[0]}</strong> {item.split(' ').slice(1).join(' ')}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm" style={{ color: '#334155' }}>
                  This typically saves teams <strong>12+ hours/week</strong>. Would you like to book a call to see a live demo?
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Typing indicator + bottom action bar */}
        <div className="px-5 py-2 flex items-center gap-2" style={{ backgroundColor: '#F8FAFC' }}>
          <div className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg,#7B4AE2,#A78BFA)' }}>
            <Sparkles className="w-3 h-3 text-white" />
          </div>
          <div className="flex items-center gap-1 rounded-2xl px-3 py-2" style={{ backgroundColor: 'white', border: '1px solid #E2E8F0' }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#7B4AE2', animation: 'typingDot 1.4s ease-in-out infinite' }} />
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#7B4AE2', animation: 'typingDot 1.4s 0.2s ease-in-out infinite' }} />
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#7B4AE2', animation: 'typingDot 1.4s 0.4s ease-in-out infinite' }} />
          </div>
        </div>
        <div className="px-5 py-3 flex items-center gap-2" style={{ borderTop: '1px solid #E2E8F0', backgroundColor: 'white' }}>
          <div className="flex-1 rounded-lg px-3 py-2 text-xs flex items-center" style={{ backgroundColor: '#F1F5F9', color: '#94A3B8' }}>
            Type a message
            <span className="ml-0.5 inline-block w-0.5 h-3" style={{ backgroundColor: '#7B4AE2', animation: 'blinkCursor 1s steps(2,end) infinite' }} />
          </div>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg,#7B4AE2,#5B5FC7)' }}>
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <div className="absolute -top-4 right-2 rounded-xl px-3 py-2 flex items-center gap-2 animate-float-delay"
        style={{ backgroundColor: 'white', boxShadow: '0 4px 20px rgba(1,118,211,0.15)', border: '1px solid rgba(1,118,211,0.12)' }}>
        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
        <span className="text-xs font-semibold" style={{ color: '#032D60' }}>Case resolved in 8s</span>
      </div>
      <div className="absolute -bottom-4 left-2 rounded-xl px-3 py-2 flex items-center gap-2 animate-float"
        style={{ backgroundColor: 'white', boxShadow: '0 4px 20px rgba(1,118,211,0.15)', border: '1px solid rgba(1,118,211,0.12)', animationDelay: '1s' }}>
        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
        <span className="text-xs font-semibold" style={{ color: '#032D60' }}>12 hrs/week saved</span>
      </div>
    </div>
  )
}

/* ─── HubSpot Visual: marketing workflow ─────────────────── */
function HubSpotVisual() {
  return (
    <div className="relative w-full max-w-md animate-float mx-auto">
      <div className="rounded-2xl overflow-hidden"
        style={{ backgroundColor: 'white', boxShadow: '0 25px 60px rgba(204,85,53,0.30)', border: '1px solid rgba(0,0,0,0.08)' }}>
        {/* Top bar */}
        <div className="px-4 py-3 flex items-center gap-2" style={{ background: 'linear-gradient(135deg, #FF7A59 0%, #CC5535 100%)' }}>
          <Sparkles className="w-4 h-4 text-white" />
          <p className="text-xs font-bold text-white">Welcome Workflow</p>
          <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full"
            style={{ backgroundColor: 'rgba(255,255,255,0.20)', color: 'white' }}>ACTIVE</span>
        </div>

        {/* Workflow */}
        <div className="p-4 space-y-2" style={{ backgroundColor: '#FFF9F6' }}>
          {/* Trigger */}
          <div className="rounded-lg p-3 flex items-center gap-3"
            style={{ backgroundColor: 'white', border: '1px solid rgba(255,122,89,0.25)', boxShadow: '0 2px 8px rgba(255,122,89,0.08)' }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: 'rgba(255,122,89,0.10)', color: '#FF7A59' }}>
              <Mail className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: '#FF7A59' }}>Trigger</p>
              <p className="text-sm font-semibold" style={{ color: '#33475B' }}>Form Submitted</p>
            </div>
          </div>

          <div className="flex justify-center"><div className="relative w-0.5 h-4 overflow-hidden" style={{ backgroundColor: '#FFB69E' }}>
            <span className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#FF7A59', boxShadow: '0 0 8px rgba(255,122,89,0.6)', animation: 'flowDownConnector 2.2s ease-in-out infinite' }} />
          </div></div>

          {/* Action */}
          <div className="rounded-lg p-3 flex items-center gap-3"
            style={{ backgroundColor: 'white', border: '1px solid rgba(255,122,89,0.25)', boxShadow: '0 2px 8px rgba(255,122,89,0.08)' }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: 'rgba(255,122,89,0.10)', color: '#FF7A59' }}>
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: '#FF7A59' }}>Breeze AI · Action</p>
              <p className="text-sm font-semibold" style={{ color: '#33475B' }}>Personalized Email Sent</p>
            </div>
          </div>

          <div className="flex justify-center"><div className="relative w-0.5 h-4 overflow-hidden" style={{ backgroundColor: '#FFB69E' }}>
            <span className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#FF7A59', boxShadow: '0 0 8px rgba(255,122,89,0.6)', animation: 'flowDownConnector 2.2s ease-in-out infinite' }} />
          </div></div>

          {/* Branch */}
          <div className="text-center">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full"
              style={{ color: '#FF7A59', backgroundColor: 'rgba(255,122,89,0.10)' }}>
              <GitBranch className="w-3 h-3 inline mr-1" />
              Did they open?
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg p-2.5 text-center"
              style={{ backgroundColor: 'white', border: '1px solid rgba(16,185,129,0.30)', boxShadow: '0 2px 8px rgba(16,185,129,0.06)' }}>
              <p className="text-[10px] font-bold uppercase" style={{ color: '#10B981' }}>Yes</p>
              <p className="text-xs font-semibold mt-1" style={{ color: '#33475B' }}>Hot Leads</p>
              <p className="text-[10px] mt-1" style={{ color: '#94A3B8' }}>42 contacts</p>
            </div>
            <div className="rounded-lg p-2.5 text-center"
              style={{ backgroundColor: 'white', border: '1px solid rgba(148,163,184,0.25)' }}>
              <p className="text-[10px] font-bold uppercase" style={{ color: '#64748B' }}>Wait 3d</p>
              <p className="text-xs font-semibold mt-1" style={{ color: '#33475B' }}>Resend</p>
              <p className="text-[10px] mt-1" style={{ color: '#94A3B8' }}>28 contacts</p>
            </div>
          </div>
        </div>

        {/* Footer stats */}
        <div className="px-4 py-3 flex items-center justify-between"
          style={{ borderTop: '1px solid #F1F5F9', backgroundColor: 'white' }}>
          <p className="text-[10px]" style={{ color: '#94A3B8' }}>Last 7 days</p>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-[9px] uppercase tracking-wider" style={{ color: '#94A3B8' }}>Open</p>
              <p className="text-sm font-black" style={{ color: '#FF7A59' }}>38%</p>
            </div>
            <div className="text-right">
              <p className="text-[9px] uppercase tracking-wider" style={{ color: '#94A3B8' }}>CTR</p>
              <p className="text-sm font-black" style={{ color: '#FF7A59' }}>12%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating chip */}
      <div className="absolute -top-3 -right-2 rounded-xl px-3 py-2 flex items-center gap-2 animate-float-delay"
        style={{ backgroundColor: 'white', boxShadow: '0 4px 20px rgba(255,122,89,0.25)', border: '1px solid rgba(255,122,89,0.20)' }}>
        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
        <span className="text-xs font-semibold" style={{ color: '#33475B' }}>+18 deals MTD</span>
      </div>
    </div>
  )
}

/* ─── AWS Visual: architecture diagram ───────────────────── */
function AWSServiceBlock({ icon: Icon, label, sub, wide }) {
  return (
    <div className={`flex flex-col items-center gap-1 px-2 py-2 rounded-lg ${wide ? 'flex-1' : 'flex-1'}`}
      style={{ backgroundColor: 'white', border: '1px solid rgba(255,153,0,0.35)', boxShadow: '0 2px 8px rgba(255,153,0,0.10)' }}>
      <div className="w-7 h-7 rounded-md flex items-center justify-center"
        style={{ backgroundColor: 'rgba(255,153,0,0.12)', color: '#FF9900' }}>
        <Icon className="w-3.5 h-3.5" />
      </div>
      <p className="text-[10px] font-bold leading-tight text-center" style={{ color: '#232F3E' }}>{label}</p>
      {sub && <p className="text-[9px] leading-tight text-center" style={{ color: '#94A3B8' }}>{sub}</p>}
    </div>
  )
}

function AWSVisual() {
  return (
    <div className="relative w-full max-w-md animate-float mx-auto">
      <div className="rounded-2xl overflow-hidden"
        style={{ backgroundColor: 'white', boxShadow: '0 25px 60px rgba(0,0,0,0.40)', border: '1px solid rgba(0,0,0,0.10)' }}>
        {/* Top bar */}
        <div className="px-4 py-3 flex items-center gap-2" style={{ background: '#232F3E' }}>
          <Cloud className="w-4 h-4" style={{ color: '#FF9900' }} />
          <p className="text-xs font-bold text-white">prod-vpc-us-east-1</p>
          <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full"
            style={{ backgroundColor: 'rgba(16,185,129,0.20)', color: '#86EFAC' }}>HEALTHY</span>
        </div>

        {/* Architecture */}
        <div className="p-4" style={{ backgroundColor: '#F8FAFC' }}>
          {/* Row 1: CDN + Edge */}
          <div className="grid grid-cols-2 gap-2 mb-2">
            <AWSServiceBlock icon={Globe} label="CloudFront" sub="148 edges" />
            <AWSServiceBlock icon={Shield} label="WAF + Shield" sub="0 threats" />
          </div>

          <div className="flex justify-center mb-2"><div className="relative w-0.5 h-4 overflow-hidden" style={{ backgroundColor: '#FF9900' }}>
            <span className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#FFB84D', boxShadow: '0 0 8px rgba(255,153,0,0.7)', animation: 'flowDownConnector 1.8s ease-in-out infinite' }} />
          </div></div>

          {/* Row 2: ALB */}
          <div className="mb-2">
            <AWSServiceBlock icon={Network} label="Application Load Balancer" sub="2.4k req/s" wide />
          </div>

          <div className="flex justify-center mb-2"><div className="relative w-0.5 h-4 overflow-hidden" style={{ backgroundColor: '#FF9900' }}>
            <span className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#FFB84D', boxShadow: '0 0 8px rgba(255,153,0,0.7)', animation: 'flowDownConnector 1.8s ease-in-out infinite' }} />
          </div></div>

          {/* Row 3: Compute */}
          <div className="mb-2">
            <div className="px-3 py-2.5 rounded-lg"
              style={{ backgroundColor: 'white', border: '1px dashed rgba(255,153,0,0.40)' }}>
              <p className="text-[9px] font-bold uppercase tracking-wider mb-2" style={{ color: '#94A3B8' }}>Private Subnets</p>
              <div className="grid grid-cols-2 gap-2">
                <AWSServiceBlock icon={Server} label="ECS Fargate" sub="4 tasks" />
                <AWSServiceBlock icon={Zap} label="Lambda" sub="12 fns" />
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-2"><div className="relative w-0.5 h-4 overflow-hidden" style={{ backgroundColor: '#FF9900' }}>
            <span className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#FFB84D', boxShadow: '0 0 8px rgba(255,153,0,0.7)', animation: 'flowDownConnector 1.8s ease-in-out infinite' }} />
          </div></div>

          {/* Row 4: Data */}
          <div className="grid grid-cols-3 gap-2">
            <AWSServiceBlock icon={Database} label="RDS" sub="Multi-AZ" />
            <AWSServiceBlock icon={Layers} label="S3" sub="14 TB" />
            <AWSServiceBlock icon={Bot} label="Bedrock" sub="Claude" />
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-3 flex items-center justify-between"
          style={{ borderTop: '1px solid #E2E8F0', backgroundColor: 'white' }}>
          <div>
            <p className="text-[9px] uppercase tracking-wider" style={{ color: '#94A3B8' }}>Cost / mo</p>
            <p className="text-sm font-black" style={{ color: '#FF9900' }}>$8,420</p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-wider" style={{ color: '#94A3B8' }}>vs forecast</p>
            <p className="text-sm font-black text-emerald-500">-32%</p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-wider" style={{ color: '#94A3B8' }}>P99</p>
            <p className="text-sm font-black" style={{ color: '#232F3E' }}>87ms</p>
          </div>
        </div>
      </div>

      {/* Floating savings chip */}
      <div className="absolute -bottom-3 -left-3 rounded-xl px-3 py-2 flex items-center gap-2 animate-float-delay"
        style={{ backgroundColor: 'white', boxShadow: '0 4px 20px rgba(255,153,0,0.25)', border: '1px solid rgba(255,153,0,0.25)' }}>
        <DollarSign className="w-4 h-4" style={{ color: '#FF9900' }} />
        <span className="text-xs font-semibold" style={{ color: '#232F3E' }}>$480k saved YTD</span>
      </div>
    </div>
  )
}

/* ─── Dynamics Visual: sales pipeline dashboard ─────────── */
function DynamicsVisual() {
  const stages = [
    { name: 'Discovery', count: 12, color: '#5EB0F0', pct: 100 },
    { name: 'Qualified', count: 8,  color: '#0078D4', pct: 78 },
    { name: 'Proposal',  count: 4,  color: '#003B73', pct: 52 },
    { name: 'Closed Won',count: 6,  color: '#10B981', pct: 38 },
  ]
  const opps = [
    { name: 'Acme Corp',   value: '$450k', heat: 'Hot',  heatColor: '#EF4444' },
    { name: 'Globex Inc',  value: '$280k', heat: 'Warm', heatColor: '#F59E0B' },
    { name: 'Initech Ltd', value: '$120k', heat: 'Cool', heatColor: '#94A3B8' },
  ]
  return (
    <div className="relative w-full max-w-md animate-float mx-auto">
      <div className="rounded-2xl overflow-hidden"
        style={{ backgroundColor: 'white', boxShadow: '0 25px 60px rgba(0,32,80,0.35)', border: '1px solid rgba(0,0,0,0.08)' }}>
        {/* Top bar */}
        <div className="px-4 py-3 flex items-center gap-2" style={{ background: 'linear-gradient(135deg, #002050 0%, #0078D4 100%)' }}>
          <Layers className="w-4 h-4 text-white" />
          <p className="text-xs font-bold text-white">Q4 Pipeline</p>
          <span className="ml-auto text-xs font-black text-white">$2.4M</span>
        </div>

        {/* Pipeline funnel */}
        <div className="p-4" style={{ backgroundColor: '#F0F7FF' }}>
          <p className="text-[10px] font-bold uppercase tracking-wider mb-3" style={{ color: '#003B73' }}>Pipeline by Stage</p>
          <div className="space-y-1.5 mb-4">
            {stages.map((s, i) => (
              <div key={s.name} className="flex items-center gap-2">
                <p className="text-[10px] w-20 shrink-0 font-semibold" style={{ color: '#475569' }}>{s.name}</p>
                <div className="flex-1 h-5 rounded-md overflow-hidden" style={{ backgroundColor: 'white', border: '1px solid #E2E8F0' }}>
                  <div className="h-full relative overflow-hidden flex items-center justify-end pr-2"
                    style={{ width: `${s.pct}%`, background: `linear-gradient(90deg, ${s.color}33, ${s.color})` }}>
                    <span className="absolute inset-y-0 w-1/3 pointer-events-none"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent)',
                        animation: `shimmerBar 3.2s ${i * 0.4}s ease-in-out infinite`,
                      }} />
                    <span className="text-[10px] font-bold text-white relative z-10">{s.count}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: '#003B73' }}>Top Opportunities</p>
          <div className="space-y-1.5">
            {opps.map(o => (
              <div key={o.name} className="flex items-center justify-between rounded-md px-2.5 py-1.5"
                style={{ backgroundColor: 'white', border: '1px solid rgba(0,120,212,0.15)' }}>
                <p className="text-xs font-semibold" style={{ color: '#003B73' }}>{o.name}</p>
                <div className="flex items-center gap-2">
                  <p className="text-xs font-black" style={{ color: '#0078D4' }}>{o.value}</p>
                  <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-full"
                    style={{ color: o.heatColor, backgroundColor: `${o.heatColor}15`, border: `1px solid ${o.heatColor}40` }}>
                    {o.heat}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer - Copilot insight */}
        <div className="px-4 py-3 flex items-center gap-2"
          style={{ borderTop: '1px solid #E2E8F0', backgroundColor: 'white' }}>
          <Sparkles className="w-4 h-4" style={{ color: '#0078D4' }} />
          <p className="text-[11px]" style={{ color: '#475569' }}>
            <span className="font-bold" style={{ color: '#0078D4' }}>Copilot:</span> 92% forecast confidence
          </p>
        </div>
      </div>

      {/* Floating chip */}
      <div className="absolute -top-3 right-2 rounded-xl px-3 py-2 flex items-center gap-2 animate-float-delay"
        style={{ backgroundColor: 'white', boxShadow: '0 4px 20px rgba(0,120,212,0.25)', border: '1px solid rgba(0,120,212,0.20)' }}>
        <TrendingUp className="w-4 h-4" style={{ color: '#0078D4' }} />
        <span className="text-xs font-semibold" style={{ color: '#003B73' }}>+34% vs Q3</span>
      </div>
    </div>
  )
}

/* ─── AI Agents Visual: multi-agent orchestration flow ──── */
function AIAgentsVisual() {
  return (
    <div className="relative w-full max-w-md animate-float mx-auto">
      <div className="rounded-2xl overflow-hidden"
        style={{ backgroundColor: 'white', boxShadow: '0 25px 60px rgba(91,45,166,0.40)', border: '1px solid rgba(0,0,0,0.08)' }}>
        {/* Top bar */}
        <div className="px-4 py-3 flex items-center gap-2" style={{ background: 'linear-gradient(135deg, #5B2DA6 0%, #7B4AE2 100%)' }}>
          <Bot className="w-4 h-4 text-white" />
          <p className="text-xs font-bold text-white">RFP Response Agent</p>
          <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full"
            style={{ backgroundColor: 'rgba(255,255,255,0.20)', color: 'white' }}>RUNNING</span>
        </div>

        {/* Agent flow */}
        <div className="p-4 space-y-2" style={{ backgroundColor: '#F5F0FF' }}>
          {/* Planner */}
          <div className="rounded-lg p-2.5 flex items-center gap-2.5"
            style={{ backgroundColor: 'white', border: '1px solid rgba(123,74,226,0.30)', boxShadow: '0 2px 8px rgba(123,74,226,0.10)' }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: 'rgba(123,74,226,0.12)', color: '#7B4AE2' }}>
              <Cpu className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: '#7B4AE2' }}>Planner Agent</p>
              <p className="text-xs font-semibold" style={{ color: '#1E1B4B' }}>Broke RFP into 4 sections</p>
            </div>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>

          <div className="flex justify-center"><div className="relative w-0.5 h-4 overflow-hidden" style={{ backgroundColor: '#A78BFA' }}>
            <span className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#7B4AE2', boxShadow: '0 0 8px rgba(123,74,226,0.7)', animation: 'flowDownConnector 2s ease-in-out infinite' }} />
          </div></div>

          {/* Executors */}
          <p className="text-[9px] font-bold uppercase tracking-wider px-1" style={{ color: '#7B4AE2' }}>Executor Agents · in parallel</p>
          <div className="grid grid-cols-2 gap-2">
            {[
              { name: 'Security', icon: Shield, status: 'done' },
              { name: 'Pricing',  icon: DollarSign, status: 'done' },
              { name: 'Tech Arch',icon: Layers, status: 'running' },
              { name: 'Compliance',icon: CheckCircle2, status: 'queued' },
            ].map(({ name, icon: Icon, status }) => (
              <div key={name} className="rounded-md p-2 flex items-center gap-1.5"
                style={{ backgroundColor: 'white', border: '1px solid rgba(123,74,226,0.20)' }}>
                <div className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'rgba(123,74,226,0.10)', color: '#7B4AE2' }}>
                  <Icon className="w-3 h-3" />
                </div>
                <p className="text-[10px] font-semibold flex-1" style={{ color: '#1E1B4B' }}>{name}</p>
                {status === 'done' && <CheckCircle2 className="w-3 h-3 text-emerald-500" />}
                {status === 'running' && <div className="w-2 h-2 rounded-full animate-pulse-slow" style={{ backgroundColor: '#F59E0B' }} />}
                {status === 'queued' && <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#CBD5E1' }} />}
              </div>
            ))}
          </div>

          <div className="flex justify-center"><div className="relative w-0.5 h-4 overflow-hidden" style={{ backgroundColor: '#A78BFA' }}>
            <span className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#7B4AE2', boxShadow: '0 0 8px rgba(123,74,226,0.7)', animation: 'flowDownConnector 2s ease-in-out infinite' }} />
          </div></div>

          {/* Reviewer */}
          <div className="rounded-lg p-2.5 flex items-center gap-2.5"
            style={{ backgroundColor: 'white', border: '1px solid rgba(123,74,226,0.30)' }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: 'rgba(123,74,226,0.12)', color: '#7B4AE2' }}>
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: '#7B4AE2' }}>Reviewer · Evals</p>
              <p className="text-xs font-semibold" style={{ color: '#1E1B4B' }}>Citations + tone check</p>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
              style={{ color: '#7B4AE2', backgroundColor: 'rgba(123,74,226,0.10)' }}>WAITING</span>
          </div>
        </div>

        {/* Footer metrics */}
        <div className="px-4 py-3 flex items-center justify-between"
          style={{ borderTop: '1px solid #E2E8F0', backgroundColor: 'white' }}>
          <div>
            <p className="text-[9px] uppercase tracking-wider" style={{ color: '#94A3B8' }}>Tokens</p>
            <p className="text-sm font-black" style={{ color: '#7B4AE2' }}>248k</p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-wider" style={{ color: '#94A3B8' }}>Cost</p>
            <p className="text-sm font-black" style={{ color: '#7B4AE2' }}>$3.84</p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-wider" style={{ color: '#94A3B8' }}>Saved</p>
            <p className="text-sm font-black text-emerald-500">~6 hrs</p>
          </div>
        </div>
      </div>

      {/* Floating chip */}
      <div className="absolute -top-3 -right-2 rounded-xl px-3 py-2 flex items-center gap-2 animate-float-delay"
        style={{ backgroundColor: 'white', boxShadow: '0 4px 20px rgba(123,74,226,0.30)', border: '1px solid rgba(123,74,226,0.20)' }}>
        <Activity className="w-4 h-4" style={{ color: '#7B4AE2' }} />
        <span className="text-xs font-semibold" style={{ color: '#1E1B4B' }}>Evals: 18/20 pass</span>
      </div>
    </div>
  )
}

/* ─── Trusted By ──────────────────────────────────────────── */
function TrustedBy() {
  const B = import.meta.env.BASE_URL
  const clients = [
    { name: 'Beta Agency', logo: B + 'clients/beta.svg' },
    { name: 'Trexo Robotics', logo: B + 'clients/trexo.webp' },
    { name: 'Green Light Offer', logo: B + 'clients/greenlight.webp' },
    { name: 'Camp Quality', logo: B + 'clients/camp-quality.svg' },
    { name: 'Mr-Manhole', logo: B + 'clients/manhole.webp' },
    { name: 'Airius LLC', logo: B + 'clients/airius.webp' },
    { name: 'Givergy', logo: B + 'clients/givergy.webp' },
    { name: 'Hope-Bio', logo: B + 'clients/hopebio.avif' },
  ]
  const scrollItems = [...clients, ...clients]
  const scrollRef = useRef(null)
  const [paused, setPaused] = useState(false)

  // Allow manual drag/touch scroll
  const handlePointerDown = (e) => {
    setPaused(true)
    const el = scrollRef.current
    const startX = e.clientX || e.touches?.[0]?.clientX
    const scrollLeft = el.scrollLeft
    const onMove = (ev) => {
      const x = ev.clientX || ev.touches?.[0]?.clientX
      el.scrollLeft = scrollLeft - (x - startX)
    }
    const onUp = () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
      document.removeEventListener('touchmove', onMove)
      document.removeEventListener('touchend', onUp)
      setTimeout(() => setPaused(false), 2000)
    }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
    document.addEventListener('touchmove', onMove)
    document.addEventListener('touchend', onUp)
  }

  return (
    <section style={{ borderBottom: '1px solid rgba(1,118,211,0.15)', backgroundColor: '#D4E2F5', overflow: 'hidden' }}>
      <div className="py-6 flex items-center gap-6">
        <p className="text-xs uppercase tracking-widest shrink-0 font-semibold pl-6 md:pl-12"
          style={{ color: '#64748B' }}>Trusted by</p>
        <div className="relative flex-1 overflow-hidden cursor-grab active:cursor-grabbing"
          ref={scrollRef}
          onMouseDown={handlePointerDown}
          onTouchStart={handlePointerDown}
          style={{ maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)', overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="flex items-center gap-10 whitespace-nowrap select-none"
            style={{ animation: paused ? 'none' : 'scroll-left 25s linear infinite' }}>
            {scrollItems.map((client, i) => (
              <span key={i} className="shrink-0 flex items-center">
                {client.logo ? (
                  <img src={client.logo} alt={client.name} className="h-7 sm:h-9 w-auto pointer-events-none" draggable="false" />
                ) : (
                  <span className="font-bold text-sm tracking-wide" style={{ color: '#032D60' }}>{client.name}</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        [ref]::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  )
}

/* ─── Five Platform Pillars ─────────────────────────────────── */
function PlatformPillars() {
  const pillars = [
    {
      name: 'Salesforce',
      tagline: 'CRM + Agentforce',
      desc: 'Full Salesforce suite plus Agentforce agents for sales, service, and operations.',
      color: '#0176D3',
      tint: 'rgba(1,118,211,0.08)',
      icon: <Sparkles className="w-5 h-5" />,
      to: '/solutions',
      status: 'Salesforce Partner',
      statusBg: 'rgba(1,118,211,0.10)',
      statusColor: '#0176D3',
    },
    {
      name: 'HubSpot',
      tagline: 'CRM + Breeze AI',
      desc: 'Every Hub plus the Breeze AI layer wired across marketing, sales, and service.',
      color: '#FF7A59',
      tint: 'rgba(255,122,89,0.08)',
      icon: <Megaphone className="w-5 h-5" />,
      to: '/solutions/hubspot',
      status: 'Implementation Partner',
      statusBg: 'rgba(255,122,89,0.10)',
      statusColor: '#FF7A59',
    },
    {
      name: 'AWS',
      tagline: 'Cloud Infrastructure',
      desc: 'Migration, DevOps, security, cost optimization, and Bedrock for AI workloads.',
      color: '#FF9900',
      tint: 'rgba(255,153,0,0.10)',
      icon: <Cloud className="w-5 h-5" />,
      to: '/solutions/aws',
      status: 'Partnership in progress',
      statusBg: 'rgba(148,163,184,0.12)',
      statusColor: '#64748B',
    },
    {
      name: 'Microsoft Dynamics',
      tagline: 'Dynamics 365 + Power Platform',
      desc: 'Customer Experience, Service, Supply Chain, Finance, Business Central, and Power Platform extensions.',
      color: '#0078D4',
      tint: 'rgba(0,120,212,0.08)',
      icon: <Layers className="w-5 h-5" />,
      to: '/solutions/microsoft-dynamics',
      status: 'Partnership in progress',
      statusBg: 'rgba(148,163,184,0.12)',
      statusColor: '#64748B',
    },
    {
      name: 'AI Agents',
      tagline: 'Replace Legacy Systems',
      desc: 'Custom agents that retire aging CRMs, ERPs, ticketing tools, and manual workflows.',
      color: '#7B4AE2',
      tint: 'rgba(123,74,226,0.08)',
      icon: <Bot className="w-5 h-5" />,
      to: '/solutions/ai-agents',
      status: 'New Capability',
      statusBg: 'rgba(123,74,226,0.10)',
      statusColor: '#7B4AE2',
    },
  ]

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="glow-dot w-[500px] h-[500px] top-0 right-[-100px]"
        style={{ backgroundColor: 'rgba(123,74,226,0.05)' }} />
      <div className="glow-dot w-[500px] h-[500px] bottom-0 left-[-100px]"
        style={{ backgroundColor: 'rgba(1,118,211,0.05)' }} />

      <div className="section-wrap relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="tag mx-auto mb-5 animate-fade-up"><Layers className="w-3.5 h-3.5" /> What We Do</div>
          <h2 className="section-title mb-5 animate-fade-up-1">
            Five Pillars.<br />
            <span className="gradient-text">One Senior Team.</span>
          </h2>
          <p className="section-sub animate-fade-up-2">
            End-to-end implementation, custom development, and managed services across CRM, cloud infrastructure, ERP, and custom AI - the platforms your business actually runs on.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {pillars.map(({ name, tagline, desc, color, tint, icon, to, status, statusBg, statusColor }, i) => (
            <Link key={name} to={to}
              className="rounded-2xl p-5 group transition-all duration-300 hover:-translate-y-1 animate-fade-up no-underline block"
              style={{
                backgroundColor: 'white',
                border: `1px solid ${color}20`,
                boxShadow: `0 2px 12px ${color}08`,
                animationDelay: `${i * 80}ms`,
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${color}60`; e.currentTarget.style.boxShadow = `0 12px 32px ${color}20` }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = `${color}20`; e.currentTarget.style.boxShadow = `0 2px 12px ${color}08` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: tint, color, border: `1px solid ${color}25` }}>
                  {icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full"
                  style={{ color: statusColor, backgroundColor: statusBg }}>
                  {status}
                </span>
              </div>
              <h3 className="font-black text-lg leading-tight mb-1" style={{ color: '#032D60' }}>{name}</h3>
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color }}>{tagline}</p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748B' }}>{desc}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold transition-all duration-200 group-hover:gap-2"
                style={{ color }}>
                Explore <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        <p className="text-center text-xs mt-8" style={{ color: '#94A3B8' }}>
          Salesforce Partner verified on AppExchange. AWS and Microsoft partnership tracks in progress.
        </p>
      </div>
    </section>
  )
}

/* ─── What We Deliver - concrete service categories ────────── */
function WhatWeDeliver() {
  const services = [
    {
      icon: Layers,
      color: '#0176D3',
      tint: 'rgba(1,118,211,0.08)',
      title: 'End-to-End Implementation',
      desc: 'Discovery to launch on Salesforce, HubSpot, AWS, or Dynamics. Senior architects, fixed-scope phases, measurable acceptance criteria - not open-ended T&M.',
      tags: ['Discovery → Launch', 'Fixed Scope', '4-16 weeks'],
    },
    {
      icon: Bot,
      color: '#7B4AE2',
      tint: 'rgba(123,74,226,0.08)',
      title: 'Custom AI Agents',
      desc: 'Production-grade agents that retire legacy systems. Evals from day one, RBAC tool access, full audit trail. Multi-LLM (Claude, GPT, Bedrock, open-weight).',
      tags: ['Evals First', 'RBAC Tools', 'Multi-LLM'],
    },
    {
      icon: Cloud,
      color: '#FF9900',
      tint: 'rgba(255,153,0,0.10)',
      title: 'Cloud Architecture',
      desc: 'AWS landing zones, multi-account setup, networking and security baselines. Well-Architected from day one - not bolted on after the auditor shows up.',
      tags: ['Terraform / CDK', 'Multi-Account', 'Well-Architected'],
    },
    {
      icon: GitBranch,
      color: '#06B6D4',
      tint: 'rgba(6,182,212,0.10)',
      title: 'DevOps & Platform Engineering',
      desc: 'CI/CD pipelines, observability stack, container and serverless platforms - tested in real production workloads, not slide decks.',
      tags: ['CI/CD', 'Containers + Serverless', 'Observability'],
    },
    {
      icon: RefreshCw,
      color: '#6366F1',
      tint: 'rgba(99,102,241,0.10)',
      title: 'Platform Migrations',
      desc: 'Salesforce ↔ HubSpot ↔ Dynamics, on-prem → AWS, legacy → custom AI. Zero data loss, parallel-run validation, phased cutover with rollback plans.',
      tags: ['Zero Data Loss', 'Parallel Run', 'Phased Cutover'],
    },
    {
      icon: Network,
      color: '#EC4899',
      tint: 'rgba(236,72,153,0.10)',
      title: 'Integration & Data',
      desc: 'Data Hub, Dataverse, MCP, RAG pipelines. Connect every system to every other system reliably - with monitoring and retry semantics built in.',
      tags: ['MCP + Function Calling', 'RAG', 'Multi-System Sync'],
    },
    {
      icon: Shield,
      color: '#10B981',
      tint: 'rgba(16,185,129,0.10)',
      title: 'Security & Compliance',
      desc: 'SOC 2, HIPAA, PCI-aligned baselines. Well-Architected security reviews. IAM hardening, threat detection, audit trails for the regulated workloads.',
      tags: ['SOC 2', 'HIPAA', 'IAM Hardening'],
    },
    {
      icon: DollarSign,
      color: '#F59E0B',
      tint: 'rgba(245,158,11,0.10)',
      title: 'FinOps & Managed Ops',
      desc: '25-40% cloud bill reduction is typical. 24/7 monitoring, incident response, patch management, quarterly Well-Architected re-reviews after go-live.',
      tags: ['25-40% Saved', '24/7 Ops', 'Quarterly Reviews'],
    },
  ]

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden" style={{ backgroundColor: '#F0F7FF' }}>
      <div className="glow-dot w-[500px] h-[500px] top-0 right-[-100px]"
        style={{ backgroundColor: 'rgba(99,102,241,0.06)' }} />
      <div className="glow-dot w-[500px] h-[500px] bottom-0 left-[-100px]"
        style={{ backgroundColor: 'rgba(1,118,211,0.06)' }} />

      <div className="section-wrap relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="tag mx-auto mb-5 animate-fade-up"><Boxes className="w-3.5 h-3.5" /> What We Deliver</div>
          <h2 className="section-title mb-5 animate-fade-up-1">
            Concrete Outcomes,<br />
            <span className="gradient-text">Across Every Platform</span>
          </h2>
          <p className="section-sub animate-fade-up-2">
            Tangible deliverables, not vague promises. Here is what you actually get from a Cloudsheer engagement - whichever platform fits your business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, color, tint, title, desc, tags }, i) => (
            <div key={title} className="rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              style={{
                backgroundColor: 'white',
                border: `1px solid ${color}20`,
                boxShadow: `0 2px 12px ${color}08`,
                animationDelay: `${i * 60}ms`,
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${color}50`; e.currentTarget.style.boxShadow = `0 12px 32px ${color}20` }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = `${color}20`; e.currentTarget.style.boxShadow = `0 2px 12px ${color}08` }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: tint, color, border: `1px solid ${color}25` }}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base mb-2 leading-tight" style={{ color: '#032D60' }}>{title}</h3>
              <p className="text-[13px] leading-relaxed mb-4" style={{ color: '#64748B' }}>{desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map(t => (
                  <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                    style={{ color, backgroundColor: tint, border: `1px solid ${color}30` }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/solutions" className="btn-primary">
            See Every Service Area <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="btn-ghost">
            Scope Your Project on a Call
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── Industries We Serve - workflow snippet per sector ────── */
function IndustryFlow({ steps, color }) {
  return (
    <div className="flex items-center gap-1 mb-4">
      {steps.map(({ Icon, label }, i) => (
        <Fragment key={label}>
          <div className="flex flex-col items-center gap-1.5 flex-1 min-w-0">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
              style={{ backgroundColor: `${color}15`, color, border: `1px solid ${color}35` }}>
              <Icon className="w-4 h-4" />
            </div>
            <p className="text-[10px] font-bold leading-tight text-center px-1" style={{ color: '#475569' }}>
              {label}
            </p>
          </div>
          {i < steps.length - 1 && (
            <div className="relative h-0.5 w-3 sm:w-5 shrink-0 overflow-hidden rounded-full"
              style={{ backgroundColor: `${color}50`, marginBottom: '20px' }}>
              <span className="absolute top-1/2 w-1.5 h-1.5 rounded-full pointer-events-none"
                style={{
                  backgroundColor: color,
                  boxShadow: `0 0 6px ${color}90`,
                  marginTop: '-3px',
                  animation: `flowAcrossLine 2.4s ${i * 0.3}s ease-in-out infinite`,
                }} />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  )
}

function Industries() {
  const industries = [
    {
      icon: Landmark,
      color: '#0176D3',
      colorDark: '#003B73',
      tint: 'rgba(1,118,211,0.08)',
      name: 'Financial Services',
      problem: 'Underwriting touches every deal four times - and servicing routes every routine question to a human.',
      ships: [
        'Financial Services Cloud with custom underwriting flows + approval matrix',
        'Agentforce service agents handling balance, statement, and status inquiries 24/7',
        'Audit-ready data model with full trails for SOC 2 and regulatory exams',
      ],
      mix: ['SF FSC', 'Dynamics F&O', 'Custom AI'],
    },
    {
      icon: Heart,
      color: '#EF4444',
      colorDark: '#991B1B',
      tint: 'rgba(239,68,68,0.10)',
      name: 'Healthcare & Life Sciences',
      problem: 'Patient intake, scheduling, and trial recruitment running on five disconnected systems.',
      ships: [
        'HIPAA-aligned Health Cloud with unified patient 360 across visits and providers',
        'Clinical trial recruitment + screening agents on Life Sciences Cloud',
        'Provider and patient portals with role-gated PHI access and consent workflows',
      ],
      mix: ['Health Cloud', 'Life Sciences', 'HIPAA AWS'],
    },
    {
      icon: Cpu,
      color: '#6366F1',
      colorDark: '#3730A3',
      tint: 'rgba(99,102,241,0.10)',
      name: 'B2B SaaS',
      problem: 'Enterprise sales runs on Salesforce, PLG runs on HubSpot - and support is drowning in ticket volume.',
      ships: [
        'Dual-stack CRM (Salesforce for enterprise, HubSpot for PLG) kept in sync',
        'Bedrock RAG over product docs powering customer-facing support agents',
        'PQL scoring + customer-health automation tied to renewal forecasting',
      ],
      mix: ['HubSpot + SF', 'AWS Bedrock', 'Custom Agents'],
    },
    {
      icon: ShoppingCart,
      color: '#F59E0B',
      colorDark: '#B45309',
      tint: 'rgba(245,158,11,0.10)',
      name: 'Retail & E-commerce',
      problem: 'Order ops on point tools - inventory, fulfillment, and post-purchase support never agree on truth.',
      ships: [
        'Commerce Cloud or HubSpot Commerce wired to Shopify + Stripe + 3PL',
        'AWS auto-scaling architecture sized for Black Friday and launch peaks',
        'AI agents for order status, returns, and shipping inquiries with CRM context',
      ],
      mix: ['Commerce Cloud', 'AWS Scale', 'AI Service'],
    },
    {
      icon: Factory,
      color: '#7B4AE2',
      colorDark: '#5B2DA6',
      tint: 'rgba(123,74,226,0.10)',
      name: 'Manufacturing & Industrial',
      problem: 'Field service, shop floor, and order management on separate systems - visibility ends at the warehouse door.',
      ships: [
        'Sales Cloud + Field Service for distributor and field-tech operations',
        'Dynamics 365 Supply Chain + Finance for production planning and ERP',
        'AWS IIoT pipelines for equipment telemetry and predictive maintenance models',
      ],
      mix: ['Sales + FSC', 'Dynamics F&O', 'IIoT on AWS'],
    },
    {
      icon: Briefcase,
      color: '#10B981',
      colorDark: '#047857',
      tint: 'rgba(16,185,129,0.10)',
      name: 'Professional Services',
      problem: 'Project margin invisible until 30 days after delivery - sales, ops, and billing live in different worlds.',
      ships: [
        'Salesforce + HubSpot for opportunity-to-project handoff with no rekeying',
        'Business Central or D365 Project Operations for PSA, time, and project billing',
        'Custom AI agents for proposal generation, RFP responses, and time-entry parsing',
      ],
      mix: ['SF + HubSpot', 'BC for PSA', 'Custom AI'],
    },
  ]

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="section-wrap">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="tag mx-auto mb-5 animate-fade-up"><Globe className="w-3.5 h-3.5" /> Industries</div>
          <h2 className="section-title mb-5 animate-fade-up-1">
            What We Ship <span className="gradient-text">Per Sector</span>
          </h2>
          <p className="section-sub animate-fade-up-2">
            Six sectors we work in regularly. Each card names the specific problem we solve and the exact stack we ship to fix it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map(({ icon: Icon, color, colorDark, tint, name, problem, ships, mix }, i) => (
            <div key={name} className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 animate-fade-up flex flex-col"
              style={{
                backgroundColor: 'white',
                border: `1px solid ${color}20`,
                boxShadow: `0 2px 12px ${color}10`,
                animationDelay: `${i * 70}ms`,
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 12px 32px ${color}25` }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = `0 2px 12px ${color}10` }}
            >
              {/* Colored header bar */}
              <div className="px-5 py-3 flex items-center gap-3"
                style={{ background: `linear-gradient(135deg, ${color}, ${colorDark})` }}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'rgba(255,255,255,0.20)', border: '1px solid rgba(255,255,255,0.25)' }}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-black text-white text-sm leading-tight">{name}</h3>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col">
                {/* What hurts */}
                <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: '#94A3B8' }}>The Problem</p>
                <p className="text-[13px] leading-relaxed mb-5 italic" style={{ color: '#475569' }}>
                  &ldquo;{problem}&rdquo;
                </p>

                {/* What we ship */}
                <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: '#94A3B8' }}>What We Ship</p>
                <ul className="space-y-2 mb-5 flex-1">
                  {ships.map(s => (
                    <li key={s} className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: '#334155' }}>
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color }} />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>

                {/* Stack chips */}
                <div className="pt-3 mt-auto" style={{ borderTop: `1px solid ${color}15` }}>
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: '#94A3B8' }}>Stack</p>
                  <div className="flex flex-wrap gap-1.5">
                    {mix.map(m => (
                      <span key={m} className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{ color, backgroundColor: tint, border: `1px solid ${color}30` }}>
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Live Workflows - interactive showcase across 5 platforms ─ */
function LiveWorkflows() {
  const platforms = [
    {
      key: 'salesforce',
      name: 'Salesforce',
      Icon: Sparkles,
      color: '#0176D3',
      tint: 'rgba(1,118,211,0.10)',
      Visual: AgentVisual,
      title: 'Agentforce on Service Cloud',
      blurb: 'Tier-1 case resolution running 24/7. The agent reads the question, queries your CRM, pulls from Knowledge, and drafts a response - every action audited, every escalation full-context.',
      features: ['Auto-classifies cases via Einstein', 'Drafts responses from Knowledge Base', 'Escalates with full conversation context'],
    },
    {
      key: 'hubspot',
      name: 'HubSpot',
      Icon: Megaphone,
      color: '#FF7A59',
      tint: 'rgba(255,122,89,0.10)',
      Visual: HubSpotVisual,
      title: 'Marketing Automation + Breeze AI',
      blurb: 'Form fill triggers a personalized Breeze AI email. Branch based on engagement. Hot leads route to sales, cold leads get a nurture sequence - all tracked back to the deal.',
      features: ['Personalization at scale (Breeze AI)', 'Behavior-based branching', 'Full attribution into Sales Hub'],
    },
    {
      key: 'aws',
      name: 'AWS',
      Icon: Cloud,
      color: '#FF9900',
      tint: 'rgba(255,153,0,0.10)',
      Visual: AWSVisual,
      title: 'Production-Ready AWS Architecture',
      blurb: 'Multi-AZ landing zone - CloudFront, WAF, ALB, ECS, Lambda, RDS, S3, Bedrock. Cost-optimized from day one. Observable, secure, FinOps-instrumented.',
      features: ['Multi-account landing zone with Control Tower', 'Auto-scaling compute (ECS / Lambda)', 'Bedrock + S3 + OpenSearch for AI workloads'],
    },
    {
      key: 'ai-agents',
      name: 'AI Agents',
      Icon: Bot,
      color: '#7B4AE2',
      tint: 'rgba(123,74,226,0.10)',
      Visual: AIAgentsVisual,
      title: 'Multi-Agent Orchestration',
      blurb: 'Planner breaks the task into sections. Executor agents run in parallel. Reviewer agent verifies citations and tone. Every step audited, costed, and replayable.',
      features: ['Planner → Executor → Reviewer pattern', 'Parallel execution with token budgets', 'Eval-gated outputs before human review'],
    },
    {
      key: 'dynamics',
      name: 'Microsoft',
      Icon: Layers,
      color: '#0078D4',
      tint: 'rgba(0,120,212,0.10)',
      Visual: DynamicsVisual,
      title: 'Dynamics 365 Sales + Copilot',
      blurb: 'Real-time pipeline visibility. Top opportunities surfaced with Copilot insights. Forecast confidence built into the same view leadership already uses.',
      features: ['Real-time pipeline + forecast', 'Copilot insights and summaries', 'Power BI dashboards embedded native'],
    },
  ]

  const [selected, setSelected] = useState('salesforce')
  const current = platforms.find(p => p.key === selected) || platforms[0]
  const Visual = current.Visual

  const resolveTo = (key) => {
    if (key === 'salesforce') return '/solutions'
    if (key === 'hubspot') return '/solutions/hubspot'
    if (key === 'aws') return '/solutions/aws'
    if (key === 'ai-agents') return '/solutions/ai-agents'
    if (key === 'dynamics') return '/solutions/microsoft-dynamics'
    return '/solutions'
  }

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at top, #11254A 0%, #0B1A36 60%, #060F25 100%)' }}>
      {/* Decorative top hairline */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${current.color}, transparent)`, transition: 'background 700ms ease' }} />

      {/* Background ambience */}
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      <div className="glow-dot w-[800px] h-[800px] top-[-250px] left-[-150px]"
        style={{ backgroundColor: `${current.color}20`, transition: 'background-color 800ms ease' }} />
      <div className="glow-dot w-[600px] h-[600px] bottom-[-200px] right-[-150px]"
        style={{ backgroundColor: `${current.color}12`, transition: 'background-color 800ms ease' }} />

      <div className="section-wrap relative z-10">
        {/* Platform tabs - segmented control */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl"
            style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)' }}>
            {platforms.map(p => {
              const isActive = p.key === selected
              const Icon = p.Icon
              return (
                <button key={p.key} onClick={() => setSelected(p.key)}
                  className="relative flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300"
                  style={{
                    backgroundColor: isActive ? '#ffffff' : 'transparent',
                    color: isActive ? p.color : 'rgba(255,255,255,0.65)',
                    boxShadow: isActive ? `0 10px 28px ${p.color}55` : 'none',
                  }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'white' }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.65)' }}
                >
                  <Icon className="w-4 h-4" />
                  {p.name}
                </button>
              )
            })}
          </div>
        </div>

        {/* Main showcase: visual + content */}
        <div key={selected} className="grid lg:grid-cols-[460px_1fr] gap-12 lg:gap-20 items-center">
          {/* LEFT: Visual with showcase frame */}
          <div className="relative flex justify-center">
            {/* Outer glow halo */}
            <div className="absolute -inset-10 rounded-[40px] pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at center, ${current.color}35 0%, transparent 65%)`,
                transition: 'background 700ms ease',
                filter: 'blur(24px)',
              }} />
            {/* Subtle ring */}
            <div className="absolute -inset-3 rounded-3xl pointer-events-none"
              style={{
                border: `1px solid ${current.color}25`,
                transition: 'border-color 700ms ease',
              }} />
            {/* Floating "Now playing" tab */}
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full whitespace-nowrap animate-fade-up"
              style={{
                backgroundColor: '#0B1A36',
                border: `1px solid ${current.color}50`,
                boxShadow: `0 8px 24px ${current.color}30`,
              }}>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ backgroundColor: current.color, animation: 'ringExpand 2s ease-out infinite' }} />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: current.color }} />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                {current.name} &middot; Live
              </span>
            </div>

            <div className="relative animate-fade-up">
              <Visual />
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="animate-fade-up-2">
            {/* Step indicator */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: 'rgba(186,220,255,0.45)' }}>
                Workflow {platforms.findIndex(p => p.key === selected) + 1} / {platforms.length}
              </span>
              <span className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${current.color}50, transparent)`, transition: 'background 700ms ease' }} />
            </div>

            {/* Workflow badge */}
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full"
              style={{ backgroundColor: current.tint, border: `1px solid ${current.color}40`, transition: 'background-color 700ms ease, border-color 700ms ease' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse-slow" style={{ backgroundColor: current.color, transition: 'background-color 700ms ease' }} />
              <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: current.color, transition: 'color 700ms ease' }}>
                {current.name} Workflow &middot; Production
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-5 leading-tight tracking-tight">
              {current.title}
            </h3>

            {/* Blurb */}
            <p className="text-sm sm:text-base leading-relaxed mb-7" style={{ color: 'rgba(186,220,255,0.85)' }}>
              {current.blurb}
            </p>

            {/* Feature list */}
            <ul className="space-y-3 mb-8">
              {current.features.map((f, i) => (
                <li key={f} className="flex items-start gap-3 animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: current.tint, border: `1px solid ${current.color}40`, color: current.color, transition: 'all 700ms ease' }}>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-sm sm:text-base" style={{ color: 'rgba(255,255,255,0.88)' }}>{f}</p>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link to={resolveTo(selected)}
                className="inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm sm:text-base"
                style={{
                  background: `linear-gradient(135deg, ${current.color}, ${current.color}CC)`,
                  color: 'white',
                  boxShadow: `0 10px 28px ${current.color}50`,
                }}>
                Explore {current.name} Solutions <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-sm transition-all"
                style={{ color: 'rgba(186,220,255,0.65)' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.gap = '0.625rem' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(186,220,255,0.65)'; e.currentTarget.style.gap = '0.375rem' }}>
                or talk through your use case <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── What Changes When You Add AI to Your CRM ──────────────── */
function WhyAgentforce() {
  const agentforcePoints = [
    { icon: <Zap className="w-4 h-4" />,         title: 'Service Agent',          desc: 'Resolves Tier-1 cases autonomously using Knowledge Base and Einstein Case Classification.', metric: '78% deflection' },
    { icon: <ShieldCheck className="w-4 h-4" />, title: 'Einstein Trust Layer',   desc: 'Every action grounded in your CRM data, logged, and auditable. Guardrails prevent hallucination.', metric: 'SOC 2 + audit' },
    { icon: <Globe className="w-4 h-4" />,       title: 'Headless 360',           desc: 'Every Salesforce capability is now an API, MCP tool, or CLI command - agents work across any channel.', metric: 'Slack · voice · web' },
  ]

  const breezePoints = [
    { icon: <Headphones className="w-4 h-4" />, title: 'Customer Agent',        desc: 'Resolves tier-1 tickets 24/7 against your HubSpot knowledge base with full human handoff.', metric: '40% deflection' },
    { icon: <TrendingUp className="w-4 h-4" />, title: 'Prospecting Agent',     desc: 'Researches accounts, drafts personalized outreach, and books meetings into rep calendars autonomously.', metric: '3.4× meetings' },
    { icon: <Database className="w-4 h-4" />,   title: 'Breeze Intelligence',   desc: 'Continuous firmographic enrichment, buyer intent signals, and fit scoring native to HubSpot.', metric: '92% record completeness' },
  ]

  const PlatformColumn = ({ platform, products, color, colorDark, points, badgeIcon: BadgeIcon, badgeLabel }) => (
    <div className="rounded-3xl overflow-hidden h-full"
      style={{ background: `linear-gradient(180deg, ${color}08 0%, transparent 100%)`, border: `1px solid ${color}20` }}>
      {/* Header bar */}
      <div className="px-6 py-4 flex items-center justify-between"
        style={{ background: `linear-gradient(135deg, ${color}, ${colorDark})` }}>
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: 'rgba(255,255,255,0.20)', color: 'white' }}>
            <BadgeIcon className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.75)' }}>
              {badgeLabel}
            </p>
            <p className="text-base font-black text-white leading-tight">{platform}</p>
          </div>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{ backgroundColor: 'rgba(255,255,255,0.18)', color: 'white' }}>
          {products}
        </span>
      </div>

      {/* Capability cards */}
      <div className="p-5 space-y-3">
        {points.map(({ icon, title, desc, metric }, i) => (
          <div key={title} className="rounded-2xl p-4 transition-all duration-300 hover:-translate-y-0.5 animate-fade-up"
            style={{ backgroundColor: 'white', border: `1px solid ${color}15`, boxShadow: `0 2px 12px ${color}08`, animationDelay: `${i * 80}ms` }}>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${color}12`, color }}>
                {icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="font-bold text-sm leading-tight" style={{ color: '#032D60' }}>{title}</h4>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap"
                    style={{ color, backgroundColor: `${color}10`, border: `1px solid ${color}20` }}>
                    {metric}
                  </span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: '#64748B' }}>{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="glow-dot w-[500px] h-[500px] top-0 left-[-100px]"
        style={{ backgroundColor: 'rgba(1,118,211,0.06)' }} />
      <div className="glow-dot w-[500px] h-[500px] top-0 right-[-100px]"
        style={{ backgroundColor: 'rgba(255,122,89,0.06)' }} />

      <div className="section-wrap relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto mb-10 sm:mb-12 text-center">
          <div className="tag mx-auto mb-5 animate-fade-up"><Sparkles className="w-3.5 h-3.5" /> Business Impact</div>
          <h2 className="section-title mb-5 animate-fade-up-1">
            What Changes When You Add<br />
            <span className="gradient-text">AI to Your CRM</span>
          </h2>
          <p className="section-sub animate-fade-up-2">
            Whether you run Salesforce, HubSpot, or both - your competitors are already automating
            support, sales, and prospecting. Here is what each platform brings to the table.
          </p>
        </div>

        {/* Two-column platform split */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <div className="animate-fade-up-2">
            <PlatformColumn
              platform="Agentforce"
              products="On Salesforce"
              color="#0176D3"
              colorDark="#032D60"
              points={agentforcePoints}
              badgeIcon={Bot}
              badgeLabel="Salesforce AI Layer"
            />
          </div>
          <div className="animate-fade-up-3">
            <PlatformColumn
              platform="Breeze AI"
              products="On HubSpot"
              color="#FF7A59"
              colorDark="#CC5535"
              points={breezePoints}
              badgeIcon={Sparkles}
              badgeLabel="HubSpot AI Layer"
            />
          </div>
        </div>

        {/* Unifying message */}
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#475569' }}>
            <strong style={{ color: '#032D60' }}>Running both?</strong> We architect dual-stack environments where Agentforce handles enterprise sales and service while Breeze runs marketing and prospecting - kept in sync via Data Hub.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/solutions/agentforce" className="btn-ghost text-sm"
              style={{ color: '#0176D3', borderColor: 'rgba(1,118,211,0.30)' }}>
              Explore Agentforce <ChevronRight className="w-4 h-4" />
            </Link>
            <Link to="/solutions/hubspot-breeze-ai" className="btn-ghost text-sm"
              style={{ color: '#FF7A59', borderColor: 'rgba(255,122,89,0.30)' }}>
              Explore Breeze AI <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Agentforce showcase ───────────────────────────────────── */
function AgentforceShowcase() {
  const agents = [
    { name: 'Agentforce Service Agent', metric: '40% lower costs', desc: 'Uses Einstein Case Classification and Knowledge Base to resolve cases autonomously. Handles Omni-Channel queries across chat, email, SMS, and WhatsApp.', iconBg: 'rgba(1,118,211,0.10)',   iconColor: '#0176D3' },
    { name: 'Agentforce SDR Agent',     metric: '3x more meetings',  desc: 'Powered by Atlas Reasoning Engine, qualifies leads using Einstein Lead Scoring and books meetings directly into Sales Engagement calendars.',                iconBg: 'rgba(245,158,11,0.10)',  iconColor: '#D97706' },
    { name: 'Custom Agentforce Agent',   metric: '12 hrs/week back',   desc: 'Built with Agent Builder using Topics, Actions, and Flow triggers. Automates record updates, report generation, and cross-object workflows.',                     iconBg: 'rgba(99,102,241,0.10)', iconColor: '#6366F1' },
  ]

  return (
    <section className="py-16 sm:py-16 relative" style={{ backgroundColor: '#EFF6FF' }}>
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-10">
          <div className="tag mx-auto mb-5 animate-fade-up"><Bot className="w-3.5 h-3.5" /> What You Get</div>
          <h2 className="section-title mb-4 animate-fade-up-1">Agentforce That Deliver<br /><span className="gradient-text">Measurable Results</span></h2>
          <p className="section-sub animate-fade-up-2">Every agent directly impacts your revenue, costs, or customer satisfaction - here is how.</p>
        </div>
        <div className="grid md:grid-cols-3 2xl:gap-8 gap-6 mb-10">
          {agents.map(({ name, metric, desc, iconBg, iconColor  }, i) => (
            <div key={name} className="glass-card p-4 sm:p-7 flex flex-col animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{ backgroundColor: iconBg, color: iconColor }}>
                  <Bot className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ color: '#059669', backgroundColor: 'rgba(5,150,105,0.08)', border: '1px solid rgba(5,150,105,0.20)' }}>
                  {metric}
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#032D60' }}>{name}</h3>
              <p className="text-sm leading-relaxed flex-grow mb-5" style={{ color: '#64748B' }}>{desc}</p>
              <Link to="/solutions" className="flex items-center gap-1 text-sm font-semibold transition-all duration-200 group"
                style={{ color: '#0176D3' }}>
                Learn more <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center animate-fade-up-3">
          <Link to="/solutions" className="btn-primary">
            Explore All Agentforce Solutions <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── CountUp: animates number from 0 → target when in view ─── */
function CountUp({ value, duration = 1800 }) {
  const match = String(value).match(/^(\d+(?:\.\d+)?)(.*)$/)
  const [displayed, setDisplayed] = useState(match ? 0 : value)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!match || !ref.current) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStarted(true)
        observer.disconnect()
      }
    }, { threshold: 0.3 })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [match])

  useEffect(() => {
    if (!started || !match) return
    const target = parseFloat(match[1])
    const startTime = performance.now()
    let raf
    const step = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = target * eased
      setDisplayed(target >= 100 ? Math.floor(current) : Math.round(current * 10) / 10)
      if (progress < 1) raf = requestAnimationFrame(step)
      else setDisplayed(target)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [started, match, duration])

  if (!match) return <span ref={ref}>{value}</span>
  return <span ref={ref}>{displayed}{match[2]}</span>
}

/* ─── Stats ─────────────────────────────────────────────────── */
function Stats() {
  const items = [
    { val: '500+', label: 'Projects Delivered',     sub: 'Salesforce · HubSpot · AWS · Custom AI' },
    { val: '99%',  label: 'Client Satisfaction',    sub: 'Repeat engagement rate' },
    { val: '60+',  label: 'Platform Certifications',sub: 'Across all four practices' },
    { val: '50K+', label: 'Engineering Hours',      sub: 'Combined senior team' },
    { val: '4',    label: 'Global Offices',         sub: 'Dallas · Delhi · London · New York' },
    { val: '5',    label: 'Platform Pillars',       sub: 'SF · HubSpot · AWS · Dynamics · AI' },
  ]

  return (
    <section className="py-10 sm:py-14 relative"
      style={{ backgroundColor: '#021838' }}>
      <div className="section-wrap relative">
        {/* Header - compact */}
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] mb-2"
            style={{ color: 'rgba(186,220,255,0.45)' }}>
            By the Numbers
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight tracking-tight">
            Receipts, not <span style={{ color: '#F59E0B' }}>marketing.</span>
          </h2>
        </div>

        {/* Stats - 6-col on desktop, numbers prominent */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-4 sm:gap-x-6">
            {items.map(({ val, label, sub }, i) => (
              <div key={label}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${i * 50}ms` }}>
                <p
                  className="text-5xl sm:text-6xl lg:text-[3.75rem] font-black mb-2 leading-none tracking-tight"
                  style={{
                    background: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 50%, #FFFFFF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: '0 0 40px rgba(245,158,11,0.15)',
                    filter: 'drop-shadow(0 2px 12px rgba(245,158,11,0.25))',
                  }}>
                  {val}
                </p>
                <p className="text-[12px] font-bold mb-0.5 uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.95)' }}>
                  {label}
                </p>
                <p className="text-[10px] leading-tight" style={{ color: 'rgba(186,220,255,0.50)' }}>
                  {sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust footer */}
        <p className="text-center text-[10px] tracking-wide mt-8" style={{ color: 'rgba(186,220,255,0.35)' }}>
          Sources: Salesforce AppExchange listing · client references on request · internal certification tracker
        </p>
      </div>
    </section>
  )
}

/* ─── Process ───────────────────────────────────────────────── */
function Process() {
  const steps = [
    { n: '01', title: 'Discovery & Audit',     desc: 'Whichever platform fits - Salesforce, HubSpot, AWS, Dynamics, or custom AI - we map your processes, current systems, and the highest-impact opportunities.' },
    { n: '02', title: 'Architect & Design',    desc: 'Target architecture, data model, integration plan, and a sequenced rollout signed off by your stakeholders. Honest trade-offs surfaced up front.' },
    { n: '03', title: 'Build & Eval',          desc: 'Production-grade implementation: IaC for cloud, customized config for CRM/ERP, eval suites for AI agents. Validated before any production traffic.' },
    { n: '04', title: 'Deploy & Operate',      desc: 'Phased go-live with monitoring. Optional managed services for ongoing operations, optimization, and capability expansion.' },
  ]

  return (
    <section className="py-16 sm:py-16 relative" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-10">
          <div className="tag mx-auto mb-5 animate-fade-up">How It Works</div>
          <h2 className="section-title mb-4 animate-fade-up-1">From Discovery to <span className="gradient-text">Production</span></h2>
          <p className="section-sub animate-fade-up-2">A four-phase delivery model that fits every platform we ship on - from a single Agentforce skill to a multi-account AWS migration to a custom AI agent replacing a legacy CRM.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Connector line with gradient + flowing animated dot */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 z-0"
            style={{ background: 'linear-gradient(90deg, #0176D3, #6366F1)' }}>
            {/* Animated traveling glow */}
            <div className="absolute top-1/2 h-5 w-5 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(99,102,241,0) 70%)',
                animation: 'processFlow 4s ease-in-out infinite',
                marginTop: '-10px',
                marginLeft: '-10px',
              }} />
          </div>
          {steps.map(({ n, title, desc }, i) => (
            <div key={n} className="glass-card p-6 text-center relative z-10 animate-fade-up group"
              style={{ animationDelay: `${i * 100}ms` }}>
              <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-black text-lg relative"
                style={{
                  background: 'linear-gradient(135deg,#0176D3,#6366F1)',
                  boxShadow: '0 6px 20px rgba(1,118,211,0.30)',
                  animation: `processPulse 4s ease-in-out infinite`,
                  animationDelay: `${i * 1}s`,
                }}>
                {n}
                {/* Outer ring pulse */}
                <span className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    border: '2px solid #0176D3',
                    animation: `processRing 4s ease-out infinite`,
                    animationDelay: `${i * 1}s`,
                    opacity: 0,
                  }} />
              </div>
              <h3 className="font-bold mb-2" style={{ color: '#032D60' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{desc}</p>
            </div>
          ))}
          <style>{`
            @keyframes processFlow {
              0%   { left: 0%; opacity: 0; }
              10%  { opacity: 1; }
              90%  { opacity: 1; }
              100% { left: 100%; opacity: 0; }
            }
            @keyframes processPulse {
              0%, 100% { transform: scale(1); }
              50%      { transform: scale(1.08); box-shadow: 0 10px 30px rgba(1,118,211,0.50); }
            }
            @keyframes processRing {
              0%   { transform: scale(1); opacity: 0.6; }
              80%  { transform: scale(1.6); opacity: 0; }
              100% { transform: scale(1.6); opacity: 0; }
            }
          `}</style>
        </div>
      </div>
    </section>
  )
}

/* ─── Case Studies (anonymized, platform-diverse) ─────────── */
function CaseStudies() {
  const cases = [
    {
      industry: 'Financial Services',
      platform: 'Salesforce + Agentforce',
      platformBg: 'rgba(1,118,211,0.10)',
      platformColor: '#0176D3',
      size: '200+ Service Cloud users',
      challenge: 'Tier-1 support cases were consuming 60% of agent capacity. Average response time was 4+ hours. CSAT was declining quarter over quarter.',
      result: 'Deployed an Agentforce Service Agent in 5 weeks. 42% of cases now resolved without human involvement. First response time dropped to under 10 seconds. CSAT improved from 3.6 to 4.3.',
      metrics: ['42% case deflection', 'Response: 4hrs to 10s', 'CSAT: 3.6 to 4.3'],
      color: '#0176D3',
    },
    {
      industry: 'B2B SaaS',
      platform: 'AWS Migration + FinOps',
      platformBg: 'rgba(255,153,0,0.10)',
      platformColor: '#FF9900',
      size: '120-server estate, multi-region',
      challenge: 'AWS bill grew 60% in 12 months while revenue grew 20%. Aging data center end-of-life in 18 months. CTO under board pressure to cut spend and modernize.',
      result: 'Migrated to AWS in 4 months across 8 waves (EKS, RDS, S3+Glacier). Cost Explorer audit identified $480k/year in waste. Right-sizing + Savings Plans + dev/test scheduler delivered 38% reduction within 90 days.',
      metrics: ['$480k saved', '38% bill reduction', '4-mo migration'],
      color: '#FF9900',
    },
    {
      industry: 'Manufacturing',
      platform: 'Custom AI Agent (Legacy retirement)',
      platformBg: 'rgba(123,74,226,0.10)',
      platformColor: '#7B4AE2',
      size: '15-year-old custom CRM, no docs',
      challenge: 'In-house CRM built 15 years ago. Original developers long gone. Adding any new field took 3 weeks of dev work. Vendor support nonexistent. Users hated the UI.',
      result: 'Built a custom AI agent on top of the existing database (read mode first), surfaced data through chat + a lightweight modern UI. Six months later the legacy UI was decommissioned. Full audit trail, eval suite, multi-LLM ready.',
      metrics: ['15-yr legacy retired', '6-mo cutover', 'No data migration'],
      color: '#7B4AE2',
    },
  ]

  return (
    <section className="py-16 sm:py-16" style={{ backgroundColor: '#EFF6FF' }}>
      <div className="section-wrap">
        <div className="text-center mb-10 sm:mb-10">
          <div className="tag mx-auto mb-5 animate-fade-up">Real Results</div>
          <h2 className="section-title animate-fade-up-1">What Businesses Like Yours <span className="gradient-text">Actually Achieved</span></h2>
          <p className="section-sub mt-4 animate-fade-up-2">Anonymized results from recent engagements - one Salesforce + Agentforce, one AWS migration, one custom AI agent. Same team, different platforms.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map(({ industry, platform, platformBg, platformColor, size, challenge, result, metrics, color }, i) => (
            <div key={industry} className="glass-card p-4 sm:p-7 flex flex-col animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color }}>{industry}</span>
                </div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full self-start mb-3"
                style={{ color: platformColor, backgroundColor: platformBg, border: `1px solid ${platformColor}30` }}>
                {platform}
              </span>
              <p className="text-xs mb-4" style={{ color: '#94A3B8' }}>{size}</p>
              <div className="mb-4">
                <p className="text-xs font-semibold mb-1" style={{ color: '#032D60' }}>Challenge</p>
                <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{challenge}</p>
              </div>
              <div className="mb-5 flex-grow">
                <p className="text-xs font-semibold mb-1" style={{ color: '#032D60' }}>Result</p>
                <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{result}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: '1px solid rgba(1,118,211,0.08)' }}>
                {metrics.map(m => (
                  <span key={m} className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: `${color}10`, color, border: `1px solid ${color}25` }}>
                    {m}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/case-studies/agentforce-manufacturing" className="btn-primary">
            Read the Featured Case Study <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="btn-ghost">
            See If This Works for Your Business
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ───────────────────────────────────────────────────── */
function CTA() {
  return (
    <section className="py-12 sm:py-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #032D60 0%, #0A3F80 60%, #0176D3 100%)' }}>
      <div className="absolute inset-0 bg-grid-dark" />

      {/* Animated floating orbs */}
      <div className="absolute w-[400px] h-[400px] rounded-full top-[-100px] left-[-100px] animate-float"
        style={{ backgroundColor: 'rgba(0,169,255,0.12)', filter: 'blur(80px)' }} />
      <div className="absolute w-[300px] h-[300px] rounded-full bottom-[-80px] right-[-60px] animate-float"
        style={{ backgroundColor: 'rgba(245,158,11,0.10)', filter: 'blur(60px)', animationDelay: '2s' }} />
      <div className="absolute w-[200px] h-[200px] rounded-full top-[30%] right-[15%] animate-float"
        style={{ backgroundColor: 'rgba(99,102,241,0.08)', filter: 'blur(50px)', animationDelay: '4s' }} />

      {/* Animated spinning rings */}
      <div className="absolute top-10 left-[10%] w-64 h-64 rounded-full border border-white/5 animate-spin-slow" />
      <div className="absolute bottom-10 right-[8%] w-48 h-48 rounded-full border border-white/5 animate-spin-slow"
        style={{ animationDirection: 'reverse', animationDuration: '12s' }} />

      {/* Floating particles */}
      <div className="absolute top-[20%] left-[20%] w-2 h-2 rounded-full animate-pulse-slow" style={{ backgroundColor: 'rgba(56,189,248,0.4)' }} />
      <div className="absolute top-[60%] left-[75%] w-1.5 h-1.5 rounded-full animate-pulse-slow" style={{ backgroundColor: 'rgba(245,158,11,0.4)', animationDelay: '1s' }} />
      <div className="absolute top-[40%] left-[85%] w-2 h-2 rounded-full animate-pulse-slow" style={{ backgroundColor: 'rgba(99,102,241,0.4)', animationDelay: '2s' }} />
      <div className="absolute top-[70%] left-[10%] w-1.5 h-1.5 rounded-full animate-pulse-slow" style={{ backgroundColor: 'rgba(56,189,248,0.3)', animationDelay: '3s' }} />
      <div className="absolute top-[15%] left-[60%] w-1 h-1 rounded-full animate-pulse-slow" style={{ backgroundColor: 'rgba(255,255,255,0.3)', animationDelay: '1.5s' }} />

      <div className="relative z-10 px-6 md:px-12 lg:px-20 text-center mx-auto" style={{ maxWidth: '1000px' }}>
        <div className="tag-white inline-flex mb-6 animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full animate-pulse-slow" style={{ backgroundColor: '#F59E0B' }} />
          Get Started Today
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-5 leading-tight animate-fade-up-1">
          Find Out What the Right Stack<br />
          <span className="gradient-text-gold">Can Do for Your Business</span>
        </h2>
        <p className="text-lg md:text-xl mb-10 mx-auto animate-fade-up-2"
          style={{ color: 'rgba(186,220,255,0.80)', maxWidth: '640px' }}>
          In 30 minutes, we will map your highest-impact use case across CRM, cloud, and AI agents - with a clear plan and a realistic estimate to get there.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up-3">
          <a href="https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="btn-gold text-base px-8 py-4">
            Book Free Discovery Call <ArrowRight className="w-5 h-5 animate-bounce-x" />
          </a>
          <Link to="/solutions"
            className="inline-flex items-center gap-2 font-medium text-base px-8 py-4 rounded-xl transition-all duration-200"
            style={{ border: '1.5px solid rgba(255,255,255,0.25)', color: 'white' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.10)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
            Explore Solutions
          </Link>
        </div>
        <p className="text-sm mt-6 animate-fade-in" style={{ color: 'rgba(186,220,255,0.55)' }}>
          No commitment. No sales pitch. Just clarity on how the right platforms fit your business.
        </p>
      </div>
    </section>
  )
}

/* ─── FAQ ──────────────────────────────────────────────────── */
function FAQ() {
  const faqs = [
    {
      q: "What if we're not ready for Agentforce?",
      a: "That's exactly what the discovery call is for. We will assess your Salesforce org, data quality, and processes to determine if you are ready - or what needs to happen first. Many clients start with a standard Salesforce implementation and add Agentforce later.",
    },
    {
      q: "How is Cloudsheer different from a large SI like Deloitte or Accenture?",
      a: "We are a specialist CRM firm, not a generalist. Every consultant on our team works with Salesforce, Agentforce, or HubSpot daily. You get senior architects on your project - not junior consultants learning on your dime. Our size means faster decisions, lower overhead, and direct access to leadership.",
    },
    {
      q: "What does pricing look like?",
      a: "We offer fixed-price packages starting at $2,999 for standard Salesforce implementations. Agentforce deployments are scoped based on complexity and typically range from $9,999 to $50,000+. Every engagement starts with a free discovery call where we provide a detailed estimate - no surprises.",
    },
    {
      q: "What happens after go-live?",
      a: "Every project includes 30 days of post-launch support. After that, we offer ongoing managed services - agent monitoring, performance optimization, and new agent deployments as your needs grow. We don't disappear after launch.",
    },
    {
      q: "What if we don't see the ROI you promised?",
      a: "We set measurable KPIs before every engagement - case deflection rate, response time, cost per interaction. If we are not tracking toward those targets within 90 days, we work with you to diagnose and fix the issue at no additional cost.",
    },
    {
      q: "What does the discovery call look like?",
      a: "It's a 30-minute video call with a Salesforce architect (not a sales rep). We will ask about your current setup, biggest pain points, and goals. You will leave with a clear picture of what's possible, a rough timeline, and an honest assessment of whether we are the right fit.",
    },
    {
      q: "Can you handle large or multi-platform projects?",
      a: "Yes. Our 40+ person team spans 4 global offices and covers every major Salesforce cloud plus the full HubSpot stack - Smart CRM, Breeze AI, Marketing, Sales, Service, Content, Data, Commerce, and the Small Business Bundle. For larger engagements, we scale by bringing in certified specialists from our extended network. We regularly run dual-stack engagements where Salesforce and HubSpot both live in production.",
    },
    {
      q: "Do you work on HubSpot too, or only Salesforce?",
      a: "Both. We deliver HubSpot implementations across every Hub, run Salesforce↔HubSpot migrations in either direction, and integrate the two when clients keep both. The Hub pages under Solutions cover the specifics.",
    },
    {
      q: "How do you handle data security and compliance?",
      a: "All work follows enterprise security standards - Salesforce's SOC 2 Type II / HIPAA-eligible / GDPR framework on the Salesforce side, and HubSpot's SOC 2 Type II / GDPR-compliant tooling on the HubSpot side. We design data access, sharing rules, and encryption accordingly. For regulated industries we have delivered HIPAA-aligned Health Cloud implementations.",
    },
  ]

  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="section-wrap max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="tag mx-auto mb-5"><HelpCircle className="w-3.5 h-3.5" /> Common Questions</div>
          <h2 className="section-title">Questions We Hear <span className="gradient-text">Before Every Call</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-3 items-start">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="glass-card overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-sm pr-4" style={{ color: '#032D60' }}>{q}</span>
                <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`} style={{ color: '#0176D3' }} />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Engagement Models ────────────────────────────────────── */
function EngagementModels() {
  const models = [
    {
      icon: Zap,
      color: '#F59E0B',
      tint: 'rgba(245,158,11,0.10)',
      name: 'Discovery Sprint',
      best: 'You need a clear plan and quote before committing.',
      includes: ['1-3 week scoped engagement', 'Architecture + roadmap', 'Fixed price estimate for Phase 2'],
      price: 'From $4.9k',
      tag: 'START HERE',
    },
    {
      icon: Layers,
      color: '#0176D3',
      tint: 'rgba(1,118,211,0.10)',
      name: 'Fixed-Scope Implementation',
      best: 'A defined project with clear acceptance criteria.',
      includes: ['4-16 week phased delivery', 'Fixed price, fixed scope', 'Senior architects throughout', '30-day post-launch support'],
      price: 'From $14.9k',
      tag: 'MOST POPULAR',
    },
    {
      icon: Bot,
      color: '#7B4AE2',
      tint: 'rgba(123,74,226,0.10)',
      name: 'AI Agent Pilot',
      best: 'You want a production-grade agent in weeks, not months.',
      includes: ['4-6 weeks prototype → production', 'Evals + guardrails from day one', 'Multi-LLM, your data, your tools', 'Shadow-mode rollout plan'],
      price: 'From $24.9k',
      tag: 'NEW',
    },
    {
      icon: Activity,
      color: '#10B981',
      tint: 'rgba(16,185,129,0.10)',
      name: 'Managed Services',
      best: 'You need ongoing operations and continued tuning post-launch.',
      includes: ['24/7 monitoring + incident response', 'Quarterly Well-Architected reviews', 'New capability sprints on demand', 'Cost + adoption optimization'],
      price: 'Sized to env',
      tag: 'ONGOING',
    },
  ]

  return (
    <section className="py-16 sm:py-20" style={{ backgroundColor: '#EFF6FF' }}>
      <div className="section-wrap">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="tag mx-auto mb-5 animate-fade-up"><Briefcase className="w-3.5 h-3.5" /> How We Engage</div>
          <h2 className="section-title mb-5 animate-fade-up-1">
            Four Ways <span className="gradient-text">to Work With Us</span>
          </h2>
          <p className="section-sub animate-fade-up-2">
            Pick the model that fits where you are. Most clients start with a discovery sprint, then progress to a fixed-scope build, then settle into managed services after go-live.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {models.map(({ icon: Icon, color, tint, name, best, includes, price, tag }, i) => (
            <div key={name} className="rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              style={{
                backgroundColor: 'white',
                border: `1px solid ${color}25`,
                boxShadow: `0 4px 16px ${color}10`,
                animationDelay: `${i * 80}ms`,
              }}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: tint, color, border: `1px solid ${color}30` }}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-full"
                  style={{ color, backgroundColor: tint, border: `1px solid ${color}30` }}>
                  {tag}
                </span>
              </div>
              <h3 className="font-bold text-lg mb-1" style={{ color: '#032D60' }}>{name}</h3>
              <p className="text-xs leading-relaxed mb-4" style={{ color: '#64748B' }}>{best}</p>
              <ul className="space-y-2 mb-5 flex-grow">
                {includes.map(item => (
                  <li key={item} className="flex items-start gap-2 text-xs" style={{ color: '#475569' }}>
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4" style={{ borderTop: `1px solid ${color}15` }}>
                <p className="text-[10px] uppercase tracking-wider mb-1" style={{ color: '#94A3B8' }}>Starting at</p>
                <p className="text-lg font-black" style={{ color }}>{price}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs mt-8" style={{ color: '#94A3B8' }}>
          Every engagement starts with a 30-minute discovery call. No commitment, no sales pitch - just a real assessment.
        </p>
      </div>
    </section>
  )
}

/* ─── Why Cloudsheer (strengths as journey workflow) ────────── */
function WhyCloudsheer() {
  const phases = [
    {
      step: '01',
      name: 'Discovery',
      color: '#0176D3',
      colorDark: '#003B73',
      tint: 'rgba(1,118,211,0.08)',
      primary: {
        icon: Layers,
        title: 'Platform-Agnostic Recommendation',
        desc: 'We pick the platform that fits your business - not the one that fits our certifications. The discovery call ends with an honest call either way.',
      },
    },
    {
      step: '02',
      name: 'Build',
      color: '#6366F1',
      colorDark: '#3730A3',
      tint: 'rgba(99,102,241,0.08)',
      primary: {
        icon: Award,
        title: 'Senior Engineers Only',
        desc: 'Architects who have shipped this work in production. No juniors learning on your org, your AWS account, or your Dynamics tenant.',
      },
    },
    {
      step: '03',
      name: 'Launch',
      color: '#F59E0B',
      colorDark: '#B45309',
      tint: 'rgba(245,158,11,0.10)',
      primary: {
        icon: Zap,
        title: 'Boutique Speed',
        desc: 'Direct access to leadership. Fast decisions. No account-manager layers between you and the engineers building your system.',
      },
    },
    {
      step: '04',
      name: 'Operate',
      color: '#10B981',
      colorDark: '#047857',
      tint: 'rgba(16,185,129,0.10)',
      primary: {
        icon: UserCheck,
        title: "We Don't Disappear After Launch",
        desc: '30 days of post-launch support on every project. Optional managed services for ongoing operations, optimization, and capability expansion.',
      },
    },
  ]

  return (
    <section className="py-12 sm:py-20 bg-white relative overflow-hidden">
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="tag mx-auto mb-5"><Award className="w-3.5 h-3.5" /> Our Strengths</div>
          <h2 className="section-title mb-4">
            Where We Beat the <span className="gradient-text">Generalist SI</span>
          </h2>
          <p className="section-sub">
            Four things mid-market teams say tipped the decision toward Cloudsheer - mapped to the phase of your engagement where each shows up.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Horizontal connector line with flowing dot - desktop only */}
          <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-0.5 z-0"
            style={{ background: 'linear-gradient(90deg, #0176D3 0%, #6366F1 33%, #F59E0B 66%, #10B981 100%)' }}>
            <span className="absolute h-5 w-5 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(99,102,241,0) 70%)',
                animation: 'flowAcrossLine 5s ease-in-out infinite',
                top: '-9px',
                marginLeft: '-10px',
              }} />
          </div>

          {/* Phases grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 relative z-10">
            {phases.map((p, i) => {
              const PIcon = p.primary.icon
              const SIcon = p.secondary?.icon
              return (
                <div key={p.step} className="flex flex-col items-center text-center animate-fade-up h-full"
                  style={{ animationDelay: `${i * 120}ms` }}>
                  {/* Phase number badge */}
                  <div className="w-14 h-14 rounded-full flex items-center justify-center font-black text-white text-base relative mb-4 shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${p.color}, ${p.colorDark})`,
                      boxShadow: `0 6px 20px ${p.color}50`,
                    }}>
                    {p.step}
                    {/* Pulsing ring */}
                    <span className="absolute inset-0 rounded-full pointer-events-none"
                      style={{
                        border: `2px solid ${p.color}`,
                        animation: 'ringExpand 3s ease-out infinite',
                        animationDelay: `${i * 0.7}s`,
                      }} />
                  </div>

                  {/* Phase name */}
                  <p className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: p.color }}>
                    {p.name}
                  </p>

                  {/* Primary strength card */}
                  <div className="rounded-2xl p-5 w-full flex-1 flex flex-col text-left transition-all duration-300 hover:-translate-y-1"
                    style={{
                      backgroundColor: 'white',
                      border: `1px solid ${p.color}25`,
                      boxShadow: `0 4px 16px ${p.color}10`,
                    }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{ backgroundColor: p.tint, color: p.color, border: `1px solid ${p.color}30` }}>
                      <PIcon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-sm mb-2 leading-tight" style={{ color: '#032D60' }}>
                      {p.primary.title}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: '#64748B' }}>
                      {p.primary.desc}
                    </p>
                  </div>

                  {/* Secondary strength card (compact) */}
                  {p.secondary && (
                    <div className="rounded-xl p-3 w-full mt-3 text-left"
                      style={{
                        backgroundColor: p.tint,
                        border: `1px dashed ${p.color}35`,
                      }}>
                      <div className="flex items-center gap-2 mb-1.5">
                        <SIcon className="w-3.5 h-3.5 shrink-0" style={{ color: p.color }} />
                        <h4 className="font-bold text-[12px] leading-tight" style={{ color: '#032D60' }}>
                          {p.secondary.title}
                        </h4>
                      </div>
                      <p className="text-[11px] leading-relaxed" style={{ color: '#64748B' }}>
                        {p.secondary.desc}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <p className="text-center text-xs mt-12" style={{ color: '#94A3B8' }}>
          Client references available on request - across Salesforce, HubSpot, AWS, and custom AI engagements.
        </p>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <LiveWorkflows />
      <Industries />
      <Stats />
      <Process />
      <CaseStudies />
      <WhyCloudsheer />
      <FAQ />
      <CTA />
    </>
  )
}
