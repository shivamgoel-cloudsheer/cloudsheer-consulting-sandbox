import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle2, Star, ChevronRight,
} from 'lucide-react'

const CAL_LINK = 'https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true'

const HS_ORANGE      = '#FF7A59'
const HS_ORANGE_DARK = '#CC5535'
const HS_NAVY        = '#33475B'
const HS_BG_TINT     = '#FFF4F0'

// Page skeleton shared across all HubSpot Hub detail pages. Each hub passes
// `data` matching the shape used in SalesCloud.jsx — pain points, outcomes,
// capabilities, process, whyUs — plus hero copy and an optional tag icon.
export default function HubPageTemplate({ data }) {
  const {
    tagIcon: TagIcon,
    tagLabel,
    headlineTop,
    headlineGold,
    subhead,
    ctaLabel,
    painPoints,
    outcomes,
    capabilities,
    process,
    whyUs,
    finalCtaHeadlineTop,
    finalCtaHeadlineGold,
    finalCtaBody,
    finalCtaChecklist,
    finalCtaButton,
  } = data

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-20 sm:pt-24 pb-6 sm:pb-10 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${HS_NAVY} 0%, #4A6075 55%, ${HS_ORANGE_DARK} 100%)` }}>
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="glow-dot w-[500px] h-[500px] top-[-150px] right-[-80px]"
          style={{ backgroundColor: HS_ORANGE, opacity: 0.18 }} />

        <div className="section-wrap relative z-10 max-w-3xl mx-auto text-center">
          <div className="tag-white mx-auto mb-6 inline-flex">
            {TagIcon && <TagIcon className="w-3.5 h-3.5" />} {tagLabel}
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl 2xl:text-6xl font-black text-white leading-tight mb-4 sm:mb-6 animate-fade-up text-center">
            {headlineTop}<br />
            <span className="gradient-text-gold">{headlineGold}</span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-6 animate-fade-up-1"
            style={{ color: 'rgba(255,222,210,0.92)' }}>
            {subhead}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up-2">
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
              className="btn-gold text-base px-8 py-4">
              {ctaLabel} <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Pain Points ──────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag mx-auto mb-5" style={{ color: HS_ORANGE, backgroundColor: `${HS_ORANGE}12`, borderColor: `${HS_ORANGE}25` }}>
              Does This Sound Like Your Team?
            </div>
            <h2 className="section-title mb-4">
              Problems <span style={{ background: `linear-gradient(135deg, ${HS_ORANGE}, ${HS_ORANGE_DARK})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>We Eliminate</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {painPoints.map(({ pain, fix }) => (
              <div key={pain} className="glass-card p-5 grid sm:grid-cols-2 gap-4 items-center group hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: 'rgba(239,68,68,0.10)', color: '#EF4444' }}>
                    <span className="text-xs font-bold">✕</span>
                  </div>
                  <p className="text-sm font-medium" style={{ color: '#475569' }}>{pain}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: HS_ORANGE }} />
                  <p className="text-sm font-semibold" style={{ color: HS_NAVY }} dangerouslySetInnerHTML={{ __html: fix }} />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
              className="btn-primary inline-flex"
              style={{ backgroundColor: HS_ORANGE }}>
              Fix These Now <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Outcomes ─────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${HS_NAVY}, #4A6075)` }}>
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="section-wrap relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag-white mx-auto mb-5">Proven Business Outcomes</div>
            <h2 className="section-title-white mb-4">The Numbers Behind the Hub</h2>
            <p className="section-sub-white">
              Results reported by HubSpot customers across HubSpot Annual ROI Report and independent analyst studies.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {outcomes.map(({ icon: Icon, value, label, color }) => (
              <div key={label} className="dark-card p-6 text-center group hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${color}20`, color }}>
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-3xl font-black mb-2" style={{ color }}>{value}</p>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,222,210,0.80)' }}>{label}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
              className="btn-gold text-base px-8 py-4">
              Get These Results for Your Team <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Capabilities ─────────────────────────────────────── */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag mx-auto mb-5" style={{ color: HS_ORANGE, backgroundColor: `${HS_ORANGE}12`, borderColor: `${HS_ORANGE}25` }}>What You Get</div>
            <h2 className="section-title mb-4">
              Everything You Need <span style={{ background: `linear-gradient(135deg, ${HS_ORANGE}, ${HS_ORANGE_DARK})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>In One Hub</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map(({ area, icon: Icon, color, headline, points }) => (
              <div key={area} className="glass-card p-5 sm:p-7 flex flex-col group hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${color}15`, color }}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color }}>{area}</p>
                    <h3 className="font-black text-lg leading-tight" style={{ color: HS_NAVY }}>{headline}</h3>
                  </div>
                </div>
                <ul className="space-y-2 flex-grow">
                  {points.map(p => (
                    <li key={p} className="flex items-start gap-2 text-xs sm:text-sm" style={{ color: '#475569' }}>
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color }} />
                      <span dangerouslySetInnerHTML={{ __html: p }} />
                    </li>
                  ))}
                </ul>
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold mt-5 transition-all"
                  style={{ color }}
                  onMouseEnter={e => e.currentTarget.style.gap = '10px'}
                  onMouseLeave={e => e.currentTarget.style.gap = '6px'}>
                  See how this works for you <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Implement ─────────────────────────────────── */}
      <section className="py-10 sm:py-16" style={{ backgroundColor: HS_BG_TINT }}>
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag mx-auto mb-5" style={{ color: HS_ORANGE, backgroundColor: `${HS_ORANGE}12`, borderColor: `${HS_ORANGE}25` }}>Our Process</div>
            <h2 className="section-title mb-4">
              Live in Weeks, <span style={{ background: `linear-gradient(135deg, ${HS_ORANGE}, ${HS_ORANGE_DARK})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Not Months</span>
            </h2>
            <p className="section-sub">
              A structured, four-step delivery that gets your team on HubSpot fast — without the chaos of a typical migration project.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map(({ num, title, desc }, i) => (
              <div key={num} className="glass-card p-6 relative">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black text-white mb-4"
                  style={{ backgroundColor: HS_ORANGE }}>
                  {num}
                </div>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-11 right-0 w-5 h-0.5"
                    style={{ backgroundColor: `${HS_ORANGE}30` }} />
                )}
                <h4 className="font-bold mb-2" style={{ color: HS_NAVY }}>{title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Cloudsheer ───────────────────────────────────── */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag mx-auto mb-5" style={{ color: HS_ORANGE, backgroundColor: `${HS_ORANGE}12`, borderColor: `${HS_ORANGE}25` }}>
              <Star className="w-3.5 h-3.5" /> Why Cloudsheer
            </div>
            <h2 className="section-title mb-4">
              Why Work With Us <span style={{ background: `linear-gradient(135deg, ${HS_ORANGE}, ${HS_ORANGE_DARK})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Over Anyone Else?</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {whyUs.map(({ title, desc }) => (
              <div key={title} className="glass-card p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: HS_ORANGE }} />
                  <div>
                    <h4 className="font-bold mb-1.5" style={{ color: HS_NAVY }}>{title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className="py-14 sm:py-16 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${HS_NAVY} 0%, #4A6075 100%)` }}>
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="glow-dot w-[500px] h-[500px] top-[-100px] left-[50%] -translate-x-1/2"
          style={{ backgroundColor: HS_ORANGE, opacity: 0.25 }} />
        <div className="section-wrap relative z-10 text-center max-w-3xl mx-auto">
          <div className="tag-white mx-auto mb-6 inline-flex">
            {TagIcon && <TagIcon className="w-3.5 h-3.5" />} Free HubSpot Scoping Call
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-white mb-5">
            {finalCtaHeadlineTop}<br />
            <span className="gradient-text-gold">{finalCtaHeadlineGold}</span>
          </h2>
          <p className="text-lg mb-4" style={{ color: 'rgba(255,222,210,0.88)' }}>
            {finalCtaBody}
          </p>
          <ul className="flex flex-col sm:flex-row gap-3 justify-center mb-10 text-sm"
            style={{ color: 'rgba(255,222,210,0.85)' }}>
            {finalCtaChecklist.map(i => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" style={{ color: HS_ORANGE }} /> {i}
              </li>
            ))}
          </ul>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
            className="btn-gold text-lg px-10 py-5 animate-bounce-x">
            {finalCtaButton} <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  )
}
