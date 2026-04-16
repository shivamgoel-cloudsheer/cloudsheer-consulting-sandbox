import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Headphones, TrendingUp, Megaphone,
         ShoppingCart, Users, BarChart2, Package, MessageSquare, HeartPulse } from 'lucide-react'

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
    icon: null,
    image: 'icons/health.svg',
    desc: 'Patient 360 for healthcare & life sciences',
  },
]

const navLinks = [
  { label: 'About',   to: '/about' },
  { label: 'Blog',    to: '/blog' },
  { label: 'Careers', to: '/careers' },
]

export default function Navbar() {
  const [open, setOpen]         = useState(false)   // mobile menu
  const [dropOpen, setDropOpen] = useState(false)   // desktop dropdown
  const [mobileDropOpen, setMobileDropOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropRef  = useRef(null)


  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
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

            {/* Dropdown panel */}
            {dropOpen && (
              <div
                onMouseLeave={() => setDropOpen(false)}
                className="absolute left-1/2 mt-2 w-[600px] rounded-2xl overflow-hidden animate-scale-in"
                style={{
                  transform: 'translateX(-50%)',
                  background: '#ffffff',
                  border: '1px solid rgba(1,118,211,0.12)',
                  boxShadow: '0 20px 60px rgba(1,118,211,0.14)',
                }}
              >
                {/* Header bar */}
                <div className="px-5 py-3 flex items-center justify-between"
                  style={{ borderBottom: '1px solid rgba(1,118,211,0.08)', background: '#F0F7FF' }}>
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#0176D3' }}>
                    Salesforce Clouds &amp; Products
                  </span>
                  <Link
                    to="/solutions"
                    onClick={() => setDropOpen(false)}
                    className="text-xs font-semibold flex items-center gap-1 transition-colors"
                    style={{ color: '#0176D3' }}
                  >
                    View all solutions →
                  </Link>
                </div>

                {/* Grid - tiered */}
                <div className="p-3">
                  {/* Featured */}
                  <p className="text-[10px] font-bold uppercase tracking-widest px-3 pt-1 pb-1" style={{ color: '#94A3B8' }}>AI & Automation</p>
                  <div className="grid grid-cols-2 gap-0">
                    {clouds.filter(c => ['Agentforce', 'Slack'].includes(c.label)).map(({ label, to, icon: Icon, image, desc, highlight }) => (
                      <Link key={label} to={to} onClick={() => setDropOpen(false)}
                        className="flex items-start gap-3 px-3 py-2.5 rounded-xl transition-all duration-150"
                        style={{ textDecoration: 'none' }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(1,118,211,0.06)' }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}>
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                          style={{ backgroundColor: highlight ? 'rgba(1,118,211,0.10)' : 'rgba(1,118,211,0.06)', color: '#0176D3' }}>
                          {Icon ? <Icon className="w-4 h-4" /> : image && <img src={import.meta.env.BASE_URL + image} alt={label} className="w-5 h-5 rounded" />}
                        </div>
                        <div>
                          <p className="text-sm font-semibold" style={{ color: '#032D60' }}>{label}</p>
                          <p className="text-xs" style={{ color: '#94A3B8' }}>{desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest px-3 pt-2 pb-1" style={{ color: '#94A3B8' }}>Core Clouds</p>
                  <div className="grid grid-cols-2 gap-0">
                    {clouds.filter(c => ['Sales Cloud', 'Service Cloud', 'Marketing Cloud', 'Commerce Cloud'].includes(c.label)).map(({ label, to, icon: Icon, image, desc, highlight }) => (
                      <Link key={label} to={to} onClick={() => setDropOpen(false)}
                        className="flex items-start gap-3 px-3 py-2.5 rounded-xl transition-all duration-150"
                        style={{ textDecoration: 'none' }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(1,118,211,0.04)' }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}>
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                          style={{ backgroundColor: 'rgba(1,118,211,0.06)', color: '#0176D3' }}>
                          {Icon ? <Icon className="w-4 h-4" /> : image && <img src={import.meta.env.BASE_URL + image} alt={label} className="w-5 h-5 rounded" />}
                        </div>
                        <div>
                          <p className="text-sm font-semibold" style={{ color: '#032D60' }}>{label}</p>
                          <p className="text-xs" style={{ color: '#94A3B8' }}>{desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest px-3 pt-2 pb-1" style={{ color: '#94A3B8' }}>Extend & Analyse</p>
                  <div className="grid grid-cols-2 gap-0">
                    {clouds.filter(c => !['Agentforce', 'Slack', 'Sales Cloud', 'Service Cloud', 'Marketing Cloud', 'Commerce Cloud'].includes(c.label)).map(({ label, to, icon: Icon, image, desc, highlight }) => (
                      <Link key={label} to={to} onClick={() => setDropOpen(false)}
                        className="flex items-start gap-3 px-3 py-2.5 rounded-xl transition-all duration-150"
                        style={{ textDecoration: 'none' }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(1,118,211,0.04)' }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}>
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                          style={{ backgroundColor: 'rgba(1,118,211,0.06)', color: '#0176D3' }}>
                          {Icon ? <Icon className="w-4 h-4" /> : image && <img src={import.meta.env.BASE_URL + image} alt={label} className="w-5 h-5 rounded" />}
                        </div>
                        <div>
                          <p className="text-sm font-semibold" style={{ color: '#032D60' }}>{label}</p>
                          <p className="text-xs" style={{ color: '#94A3B8' }}>{desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
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
              <div className="ml-4 flex flex-col gap-0.5 mb-1">
                {clouds.map(({ label, to, icon: Icon, highlight }) => (
                  <Link
                    key={label}
                    to={to}
                    onClick={() => { setOpen(false); setMobileDropOpen(false) }}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm transition-colors hover:bg-blue-50"
                    style={{ color: highlight ? '#0176D3' : '#475569' }}
                  >
                    <Icon className="w-3.5 h-3.5 shrink-0" />
                    {label}
                    {highlight && (
                      <span className="ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                        style={{ background: 'rgba(1,118,211,0.10)', color: '#0176D3' }}>
                        AI
                      </span>
                    )}
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

            <div className="pt-3 mt-2" style={{ borderTop: '1px solid rgba(1,118,211,0.08)' }}>
              <Link to="/contact" onClick={() => setOpen(false)}
                className="btn-primary w-full justify-center text-sm">
                Free Consultation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
