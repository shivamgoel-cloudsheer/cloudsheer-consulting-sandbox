import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react'

export default function CloudPage({ cloud }) {
  const {
    tag, TagIcon,
    title, titleHighlight,
    subtitle,
    accentColor = '#0176D3',
    accentBg   = 'rgba(1,118,211,0.08)',
    accentBorder = 'rgba(1,118,211,0.18)',
    stats,
    overviewTitle, overviewBody,
    features,
    approach,
    useCases,
    deliverables,
    cta,
  } = cloud

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#032D60 0%,#0A3F80 60%,#0176D3 100%)' }}
      >
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        {/* glow blobs */}
        <div className="glow-dot w-[500px] h-[500px] top-[-150px] right-[-100px]"
          style={{ backgroundColor: accentColor, opacity: 0.18 }} />
        <div className="glow-dot w-[300px] h-[300px] bottom-[-80px] left-[5%]"
          style={{ backgroundColor: '#38BDF8', opacity: 0.12 }} />

        <div className="section-wrap relative z-10 text-center max-w-3xl mx-auto">
          <div className="tag-white mx-auto mb-6 inline-flex">
            {TagIcon && <TagIcon className="w-3.5 h-3.5" />}
            {tag}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 animate-fade-up">
            {title}{' '}
            <span className="gradient-text-bright">{titleHighlight}</span>
          </h1>
          <p className="text-lg leading-relaxed mb-10 animate-fade-up-1"
            style={{ color: 'rgba(148,196,255,0.85)' }}>
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-2">
            <a href="https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="btn-gold text-base px-8 py-4">
              Book Free Consultation <ArrowRight className="w-5 h-5" />
            </a>
            <Link to="/solutions" className="btn-ghost text-base px-8 py-4"
              style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'white' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.10)' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent' }}
            >
              All Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats strip ──────────────────────────────────────── */}
      {stats && (
        <section style={{ background: accentColor }}>
          <div className="section-wrap py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-3xl font-black text-white">{value}</p>
                  <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.75)' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Overview + Features ──────────────────────────────── */}
      <section className="py-10 sm:py-16 bg-white relative overflow-hidden">
        <div className="glow-dot w-[400px] h-[400px] top-[-100px] right-[-80px]"
          style={{ backgroundColor: accentColor, opacity: 0.06 }} />
        <div className="section-wrap relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="tag mb-5" style={{ color: accentColor, backgroundColor: accentBg, borderColor: accentBorder }}>
                {TagIcon && <TagIcon className="w-3.5 h-3.5" />}
                {tag}
              </div>
              <h2 className="section-title mb-5">{overviewTitle}</h2>
              <p className="section-sub mb-8">{overviewBody}</p>
              <a href="https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex"
                style={{ backgroundColor: accentColor }}>
                Start Your Project <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map(({ Icon, title: ftitle, desc }) => (
                <div key={ftitle} className="glass-card p-5 group hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: accentBg, border: `1px solid ${accentBorder}`, color: accentColor }}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm mb-1" style={{ color: '#032D60' }}>{ftitle}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: '#64748B' }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Approach ─────────────────────────────────────── */}
      <section className="py-10 sm:py-16 relative overflow-hidden" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag mx-auto mb-5" style={{ color: accentColor, backgroundColor: accentBg, borderColor: accentBorder }}>
              How We Deliver
            </div>
            <h2 className="section-title mb-4">{approach.title}</h2>
            <p className="section-sub">{approach.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {approach.steps.map(({ num, title: stitle, desc }, i) => (
              <div key={stitle} className="glass-card p-6 relative">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-black mb-4"
                  style={{ backgroundColor: accentColor, color: 'white' }}>
                  {num || i + 1}
                </div>
                {i < approach.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 right-0 w-5 h-0.5"
                    style={{ backgroundColor: accentBorder }} />
                )}
                <h4 className="font-bold mb-2" style={{ color: '#032D60' }}>{stitle}</h4>
                <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ────────────────────────────────────────── */}
      {useCases && (
        <section className="py-10 sm:py-16 bg-white">
          <div className="section-wrap">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
              <div className="tag mx-auto mb-5" style={{ color: accentColor, backgroundColor: accentBg, borderColor: accentBorder }}>
                Use Cases
              </div>
              <h2 className="section-title mb-4">Real Results for <span className="gradient-text">Real Businesses</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {useCases.map(({ title: utitle, desc, tags }) => (
                <div key={utitle} className="glass-card p-6 flex flex-col group hover:-translate-y-1 transition-all duration-300">
                  <h4 className="font-bold mb-2 text-base" style={{ color: '#032D60' }}>{utitle}</h4>
                  <p className="text-sm leading-relaxed mb-4 flex-grow" style={{ color: '#64748B' }}>{desc}</p>
                  {tags && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {tags.map(t => (
                        <span key={t} className="text-[11px] px-2.5 py-1 rounded-full border"
                          style={{ color: accentColor, backgroundColor: accentBg, borderColor: accentBorder }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Deliverables ─────────────────────────────────────── */}
      {deliverables && (
        <section className="py-12 sm:py-16 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg,#032D60 0%,#0A3F80 100%)' }}>
          <div className="absolute inset-0 bg-grid-dark opacity-30" />
          <div className="section-wrap relative z-10">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="tag-white mb-5">What You Get</div>
                <h2 className="section-title-white mb-4">Everything Included in <br />
                  <span className="gradient-text-gold">Every Engagement</span>
                </h2>
                <p className="section-sub-white mb-8">{deliverables.intro}</p>
                <a href="https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="btn-gold">
                  Get Started <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <ul className="grid sm:grid-cols-2 gap-3">
                {deliverables.items.map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm"
                    style={{ color: 'rgba(148,196,255,0.85)' }}>
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#38BDF8' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="section-wrap text-center max-w-2xl mx-auto">
          <div className="tag mx-auto mb-5" style={{ color: accentColor, backgroundColor: accentBg, borderColor: accentBorder }}>
            Get Started
          </div>
          <h2 className="section-title mb-4">{cta?.title || 'Ready to Get Started?'}</h2>
          <p className="section-sub mb-8">{cta?.body || 'Book a free 30-minute discovery call with our certified team.'}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="btn-primary"
              style={{ backgroundColor: accentColor }}>
              Book Free Call <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/solutions" className="btn-ghost">
              Explore All Solutions <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
