import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Headphones, TrendingUp, Megaphone,
         ShoppingCart, Users, BarChart2, Package } from 'lucide-react'

const clouds = [
  {
    label: 'Agentforce',
    to: '/solutions/agentforce',
    icon: Zap,
    desc: 'Autonomous AI agents for every team',
    highlight: true,
  },
  {
    label: 'Sales Cloud',
    to: '/solutions/sales-cloud',
    icon: TrendingUp,
    desc: 'Close deals faster with AI-powered CRM',
  },
  {
    label: 'Service Cloud',
    to: '/solutions/service-cloud',
    icon: Headphones,
    desc: 'World-class customer support at scale',
  },
  {
    label: 'Marketing Cloud',
    to: '/solutions/marketing-cloud',
    icon: Megaphone,
    desc: 'Personalised journeys across every channel',
  },
  {
    label: 'Commerce Cloud',
    to: '/solutions/commerce-cloud',
    icon: ShoppingCart,
    desc: 'Unified B2B & B2C commerce experiences',
  },
  {
    label: 'Experience Cloud',
    to: '/solutions/experience-cloud',
    icon: Users,
    desc: 'Portals & communities for partners & customers',
  },
  {
    label: 'Analytics / Tableau',
    to: '/solutions/analytics',
    icon: BarChart2,
    desc: 'Real-time intelligence and visual reporting',
  },
  {
    label: 'Platform & AppExchange',
    to: '/solutions/platform',
    icon: Package,
    desc: 'Custom apps built on the #1 CRM platform',
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
        ? { backgroundColor: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(16px)', boxShadow: '0 1px 0 rgba(1,118,211,0.10)', padding: '12px 0' }
        : { backgroundColor: 'rgba(255,255,255,0.80)', backdropFilter: 'blur(8px)', padding: '20px 0' }
      }
    >
      <div className="section-wrap flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center animate-fade-in group">
          <img
            src={import.meta.env.BASE_URL + "cloudsheer-logo.svg"}
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

                {/* Grid */}
                <div className="grid grid-cols-2 gap-0 p-3">
                  {clouds.map(({ label, to, icon: Icon, desc, highlight }) => (
                    <Link
                      key={label}
                      to={to}
                      onClick={() => setDropOpen(false)}
                      className="flex items-start gap-3 px-3 py-3 rounded-xl transition-all duration-150 group/item"
                      style={{ textDecoration: 'none' }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = highlight ? 'rgba(1,118,211,0.06)' : 'rgba(1,118,211,0.04)'
                      }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                        style={{
                          background: highlight ? 'rgba(1,118,211,0.10)' : 'rgba(1,118,211,0.06)',
                          color: highlight ? '#0176D3' : '#64748B',
                        }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-0.5 flex items-center gap-1.5"
                          style={{ color: highlight ? '#0176D3' : '#1E293B' }}>
                          {label}
                          {highlight && (
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                              style={{ background: 'rgba(1,118,211,0.12)', color: '#0176D3' }}>
                              AI
                            </span>
                          )}
                        </p>
                        <p className="text-xs leading-relaxed" style={{ color: '#64748B' }}>{desc}</p>
                      </div>
                    </Link>
                  ))}
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
          <img
            src={import.meta.env.BASE_URL + "salesforce-partner-badge.svg"}
            alt="Salesforce Partner"
            className="h-14 w-auto"
            title="Certified Salesforce Partner"
          />
          <Link to="/contact" className="btn-primary text-sm px-5 py-2">Free Consultation</Link>
        </div>

        {/* Mobile burger */}
        <button className="md:hidden p-2 rounded-lg transition-colors hover:bg-gray-50"
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
