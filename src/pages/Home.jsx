import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Bot, Zap, ShieldCheck, BarChart3,
  CheckCircle2, ChevronRight, Star, Users, TrendingUp,
  Sparkles, Clock, Settings, HelpCircle, ChevronDown, Award, Building2, UserCheck,
} from 'lucide-react'

/* ─── Hero ─────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #032D60 0%, #0A3F80 50%, #0176D3 100%)' }}>
      <div className="absolute inset-0 bg-grid-dark" />

      {/* Glow orbs */}
      <div className="glow-dot w-[700px] h-[700px] top-[-200px] left-[-100px]"
        style={{ backgroundColor: 'rgba(0,169,255,0.18)' }} />
      <div className="glow-dot w-[500px] h-[500px] bottom-[-150px] right-[-50px] hidden md:block"
        style={{ backgroundColor: 'rgba(99,102,241,0.15)' }} />
      <div className="glow-dot w-[300px] h-[300px] top-[40%] right-[25%] hidden md:block"
        style={{ backgroundColor: 'rgba(245,158,11,0.08)' }} />

      {/* Decorative spinning ring - desktop only */}
      <div className="absolute top-20 right-[8%] w-72 h-72 rounded-full border border-white/5 animate-spin-slow hidden md:block" />
      <div className="absolute top-32 right-[10%] w-48 h-48 rounded-full border border-white/8 animate-spin-slow hidden md:block"
        style={{ animationDirection: 'reverse', animationDuration: '8s' }} />

      <div className="section-wrap relative z-10 pt-16 pb-6 sm:pt-20 sm:pb-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="tag-white inline-flex mb-8 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse-slow" style={{ backgroundColor: '#F59E0B' }} />
              Salesforce & Agentforce Implementation Partner
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl 2xl:text-8xl font-black leading-[1.05] mb-4 sm:mb-6 tracking-tight animate-fade-up-1 text-center md:text-left">
              <span className="text-white">Build Once.</span><br />
              <span className="shimmer-text">Deploy Everywhere.</span>
            </h1>

            <p className="text-sm sm:text-base md:text-xl leading-relaxed mb-5 md:mb-10 max-w-lg animate-fade-up-2 text-center md:text-left"
              style={{ color: 'rgba(186,220,255,0.85)' }}>
              Agentforce agents that work 24/7 across Slack, WhatsApp, voice, and every channel. Powered by Headless 360 and the Atlas Reasoning Engine.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-4 sm:mb-6 animate-fade-up-3">
              <a href="https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="btn-gold text-sm sm:text-base px-5 py-2.5 sm:px-7 sm:py-3.5 justify-center">
                Book Free Discovery Call <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce-x" />
              </a>
              <Link to="/solutions/agentforce"
                className="inline-flex items-center justify-center gap-2 font-medium px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-xl transition-all duration-200 text-sm sm:text-base"
                style={{ border: '1.5px solid rgba(255,255,255,0.25)', color: 'white' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.10)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                Explore Solutions
              </Link>
            </div>
            <p className="text-xs mb-8 sm:mb-12 animate-fade-up-3 text-center md:text-left" style={{ color: 'rgba(186,220,255,0.55)' }}>
              30-min call with a Salesforce architect. No pitch.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-5 sm:gap-8 animate-fade-up-4">
              {[
                { val: '40%', label: 'Lower Support Costs' },
                { val: '3×',  label: 'Faster Lead Response' },
                { val: '24/7', label: 'Always-On Agents' },
              ].map(({ val, label }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl sm:text-3xl font-black text-white">{val}</p>
                  <p className="text-sm" style={{ color: 'rgba(186,220,255,0.70)' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative hidden md:flex justify-center animate-fade-in">
            <AgentVisual />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 inset-x-0">
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

        {/* Bottom action bar */}
        <div className="px-5 py-3 flex items-center gap-2" style={{ borderTop: '1px solid #E2E8F0', backgroundColor: 'white' }}>
          <div className="flex-1 rounded-lg px-3 py-2 text-xs" style={{ backgroundColor: '#F1F5F9', color: '#94A3B8' }}>
            Type a message...
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
                  <img src={client.logo} alt={client.name} className="h-7 sm:h-9 w-auto" />
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

/* ─── Why Agentforce-first ──────────────────────────────────── */
function WhyAgentforce() {
  const points = [
    { icon: <Clock className="w-5 h-5" />,      title: 'Headless 360',                desc: 'Every Salesforce capability is now an API, MCP tool, or CLI command. Build agents that work across Slack, WhatsApp, voice, and any channel.' },
    { icon: <Zap className="w-5 h-5" />,         title: 'Agentforce Service Agent',    desc: 'Resolves Tier-1 cases autonomously using Knowledge Base and Einstein Case Classification. 78% deflection across every channel.' },
    { icon: <ShieldCheck className="w-5 h-5" />, title: 'Einstein Trust Layer',        desc: 'Every agent action is grounded in your CRM data, logged, and auditable. Built-in guardrails prevent hallucination and unauthorized actions.' },
    { icon: <BarChart3 className="w-5 h-5" />,   title: 'Agent Builder + Vibes 2.0',   desc: 'Configure Topics, Actions, and Instructions with natural language. Vibe-code with Claude Sonnet 4.5 and 60+ MCP tools.' },
    { icon: <Users className="w-5 h-5" />,        title: 'Experience Layer',            desc: 'Build once, render everywhere. Same agent logic works natively across Slack, mobile, web, Teams, ChatGPT, and voice.' },
    { icon: <Settings className="w-5 h-5" />,    title: 'Data Cloud Grounding',        desc: 'Agents access unified customer profiles from Data Cloud - real-time ingestion, identity resolution, and calculated insights.' },
  ]

  return (
    <section className="py-16 sm:py-16 relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="glow-dot w-[500px] h-[500px] top-0 left-[-100px]"
        style={{ backgroundColor: 'rgba(1,118,211,0.06)' }} />
      <div className="section-wrap relative z-10">
        <div className="max-w-3xl mb-10 sm:mb-10">
          <div className="tag mb-5 animate-fade-up"><Sparkles className="w-3.5 h-3.5" /> Business Impact</div>
          <h2 className="section-title mb-5 animate-fade-up-1">
            What Changes When You<br />
            <span className="gradient-text">Add Agentforce</span>
          </h2>
          <p className="section-sub animate-fade-up-2">
            Your competitors are already automating support, sales, and operations
            with Agentforce. Here is what it means for your bottom line.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {points.map(({ icon, title, desc }, i) => (
            <div key={title} className="glass-card p-6 group animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: 'rgba(1,118,211,0.08)', border: '1px solid rgba(1,118,211,0.15)', color: '#0176D3' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor='#0176D3'; e.currentTarget.style.color='white'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor='rgba(1,118,211,0.08)'; e.currentTarget.style.color='#0176D3'; }}>
                {icon}
              </div>
              <h3 className="font-semibold mb-2" style={{ color: '#032D60' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{desc}</p>
            </div>
          ))}
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

/* ─── Stats ─────────────────────────────────────────────────── */
function Stats() {
  const items = [
    { val: '40%',  label: 'Case Resolution Increase', sub: 'Wiley, Agentforce Service Agent' },
    { val: '73%',  label: 'Autonomous Resolution',      sub: 'OpenTable, Agentforce deployment' },
    { val: '<2s',  label: 'Agentforce SDR Response',    sub: 'vs. 4+ hours without agents' },
    { val: '$2',   label: 'Cost Per Conversation',      sub: 'Agentforce vs. $11+ human agent' },
  ]

  return (
    <section className="py-12 sm:py-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0176D3 0%, #032D60 100%)' }}>
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="glow-dot w-[600px] h-[400px] top-[-100px] left-[50%] -translate-x-1/2"
        style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />
      <div className="section-wrap relative z-10">
        <p className="text-center text-xs mb-6" style={{ color: 'rgba(186,220,255,0.45)' }}>Source: Salesforce Customer Success Metrics & published case studies</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
          {items.map(({ val, label, sub }, i) => (
            <div key={label} className="animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              <p className="text-2xl sm:text-4xl 2xl:text-5xl font-black text-white mb-1">{val}</p>
              <p className="text-sm font-semibold mb-0.5" style={{ color: 'rgba(186,220,255,0.9)' }}>{label}</p>
              <p className="text-xs" style={{ color: 'rgba(186,220,255,0.55)' }}>{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Process ───────────────────────────────────────────────── */
function Process() {
  const steps = [
    { n: '01', title: 'Discovery & Org Audit',      desc: 'Audit your Salesforce org, map processes, identify highest-impact Agentforce use cases using your CRM data and Headless 360 capabilities.' },
    { n: '02', title: 'Agent Builder + Vibes',     desc: 'Define Topics, Actions, and Instructions. Leverage Agentforce Vibes 2.0 with 60+ MCP tools for rapid development.' },
    { n: '03', title: 'Testing Center & Evals',    desc: 'Use Testing Center, Custom Scoring Evals, and Agent Script to validate agent behavior. A/B test before production.' },
    { n: '04', title: 'Deploy Everywhere',         desc: 'Go live across every channel via Experience Layer - Slack, WhatsApp, mobile, web, voice. Monitor with Session Tracing.' },
  ]

  return (
    <section className="py-16 sm:py-16 relative" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-10">
          <div className="tag mx-auto mb-5 animate-fade-up">How It Works</div>
          <h2 className="section-title mb-4 animate-fade-up-1">From Problem to <span className="gradient-text">Results in 4 Weeks</span></h2>
          <p className="section-sub animate-fade-up-2">A clear, proven path from identifying your biggest cost or revenue gap to a working AI agent that closes it.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 z-0"
            style={{ background: 'linear-gradient(90deg, #0176D3, #6366F1)' }} />
          {steps.map(({ n, title, desc }, i) => (
            <div key={n} className="glass-card p-6 text-center relative z-10 animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}>
              <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-black text-lg"
                style={{ background: 'linear-gradient(135deg,#0176D3,#6366F1)', boxShadow: '0 6px 20px rgba(1,118,211,0.30)' }}>
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

/* ─── Case Studies (anonymized) ─────────────────────────────── */
function CaseStudies() {
  const cases = [
    {
      industry: 'Financial Services',
      size: '200+ Service Cloud users',
      challenge: 'Tier-1 support cases were consuming 60% of agent capacity. Average response time was 4+ hours. CSAT was declining quarter over quarter.',
      result: 'Deployed an Agentforce Service Agent in 5 weeks. 42% of cases now resolved without human involvement. First response time dropped to under 10 seconds. CSAT improved from 3.6 to 4.3.',
      metrics: ['42% case deflection', 'Response: 4hrs to 10s', 'CSAT: 3.6 to 4.3'],
      color: '#0176D3',
    },
    {
      industry: 'B2B SaaS',
      size: '50-person sales team',
      challenge: 'Inbound leads sat untouched for hours. Reps spent 70% of their time on admin instead of selling. Pipeline forecasting was unreliable.',
      result: 'Built an Agentforce Sales Agent that qualifies and responds to leads in under 5 seconds. Reps reclaimed 10+ hours per week. Pipeline accuracy improved by 35%.',
      metrics: ['Lead response: 5s', '10+ hrs/week saved', '35% better forecasts'],
      color: '#6366F1',
    },
    {
      industry: 'Retail / E-commerce',
      size: '15,000+ monthly support tickets',
      challenge: 'Order status and return inquiries overwhelmed the support team during peak seasons. Hiring seasonal agents was expensive and slow.',
      result: 'Agentforce handles order lookups, return initiation, and shipping updates autonomously. Peak season headcount needs dropped by 30%. Cost per interaction fell from $12 to $2.40.',
      metrics: ['30% fewer seasonal hires', 'Cost: $12 to $2.40', '24/7 coverage'],
      color: '#059669',
    },
  ]

  return (
    <section className="py-16 sm:py-16" style={{ backgroundColor: '#EFF6FF' }}>
      <div className="section-wrap">
        <div className="text-center mb-10 sm:mb-10">
          <div className="tag mx-auto mb-5 animate-fade-up">Real Results</div>
          <h2 className="section-title animate-fade-up-1">What Businesses Like Yours <span className="gradient-text">Actually Achieved</span></h2>
          <p className="section-sub mt-4 animate-fade-up-2">Anonymized results from recent Agentforce deployments across industries.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map(({ industry, size, challenge, result, metrics, color }, i) => (
            <div key={industry} className="glass-card p-4 sm:p-7 flex flex-col animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color }}>{industry}</span>
              </div>
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
        <div className="text-center mt-10">
          <a href="https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="btn-primary">
            See If This Works for Your Business <ArrowRight className="w-4 h-4" />
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
          Find Out What Agentforce<br />
          <span className="gradient-text-gold">Can Do for Your Business</span>
        </h2>
        <p className="text-lg md:text-xl mb-10 mx-auto animate-fade-up-2"
          style={{ color: 'rgba(186,220,255,0.80)', maxWidth: '640px' }}>
          In 30 minutes, we will identify your highest-impact use case and show you
          exactly how much you can save - with a clear plan to get there.
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
          No commitment. No sales pitch. Just clarity on how Agentforce fits your business.
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
      a: "We are a specialist Salesforce firm, not a generalist. Every consultant on our team works with Salesforce and Agentforce daily. You get senior architects on your project - not junior consultants learning on your dime. Our size means faster decisions, lower overhead, and direct access to leadership.",
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
      q: "Can you handle large or multi-cloud projects?",
      a: "Yes. Our 40+ person team spans 4 global offices and covers every major Salesforce cloud. For larger engagements, we scale by bringing in certified specialists from our extended network. We have delivered multi-cloud implementations across Sales, Service, Marketing, and Experience Cloud simultaneously.",
    },
    {
      q: "How do you handle data security and compliance?",
      a: "All work is done within Salesforce's enterprise security framework (SOC 2 Type II, HIPAA-eligible, GDPR compliant). We follow Salesforce Well-Architected principles for data access, sharing rules, and encryption. For regulated industries, we have delivered Health Cloud implementations with full HIPAA compliance.",
    },
  ]

  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="section-wrap max-w-3xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="tag mx-auto mb-5"><HelpCircle className="w-3.5 h-3.5" /> Common Questions</div>
          <h2 className="section-title">Questions We Hear <span className="gradient-text">Before Every Call</span></h2>
        </div>
        <div className="space-y-3">
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

/* ─── Why Cloudsheer ───────────────────────────────────────── */
function WhyCloudsheer() {
  const reasons = [
    {
      icon: <Award className="w-5 h-5" />,
      title: 'Specialists, Not Generalists',
      problem: 'Large SIs spread thin across 50 technologies',
      us: 'Every consultant on our team works exclusively with Salesforce and Agentforce. You get senior architects on your project, not junior consultants learning on your org.',
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Live in 4 Weeks, Not 4 Months',
      problem: 'Traditional partners take 3-6 months to go live',
      us: 'Our deployment playbooks and pre-built agent templates cut timelines by 60%. We have gone live with production agents in as little as 3 weeks.',
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      title: 'Boutique Agility, Enterprise Capability',
      problem: 'Big firms = slow decisions, layers of account managers',
      us: 'Direct access to leadership, fast decisions, and lower overhead. You talk to the people who build your solution, not a sales team.',
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      title: "We Don't Disappear After Go-Live",
      problem: 'Many partners vanish once the SOW is signed off',
      us: 'Every engagement includes 30 days post-launch support. We offer ongoing managed services for monitoring, optimization, and new agent deployments as you scale.',
    },
  ]

  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="tag mx-auto mb-5"><Award className="w-3.5 h-3.5" /> Why Cloudsheer</div>
          <h2 className="section-title mb-4">Why Businesses Choose Us <span className="gradient-text">Over Larger Partners</span></h2>
          <p className="section-sub">You have options. Here is why mid-market and enterprise teams pick a specialist over a generalist.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {reasons.map(({ icon, title, problem, us }, i) => (
            <div key={title} className="glass-card p-4 sm:p-6 animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(1,118,211,0.08)', border: '1px solid rgba(1,118,211,0.15)', color: '#0176D3' }}>
                  {icon}
                </div>
                <h3 className="font-bold" style={{ color: '#032D60' }}>{title}</h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{us}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs mt-8" style={{ color: '#94A3B8' }}>
          Client references available on request.
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
      <WhyAgentforce />
      <AgentforceShowcase />
      <Stats />
      <Process />
      <CaseStudies />
      <WhyCloudsheer />
      <FAQ />
      <CTA />
    </>
  )
}
