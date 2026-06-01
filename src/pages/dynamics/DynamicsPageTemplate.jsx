import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle2, Star,
} from 'lucide-react'
import WhatWeShip from '../../components/WhatWeShip'

const CAL_LINK = 'https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true'

const MS_BLUE      = '#0078D4'
const MS_BLUE_DARK = '#002050'
const MS_NAVY      = '#0B1F45'
const MS_BG_TINT   = '#EFF6FF'

// Shared Dynamics page skeleton. Each module-group page passes a `data` object
// with the same shape as the HubSpot pages so editorial flow stays consistent.
export default function DynamicsPageTemplate({ data }) {
  const {
    tagIcon: TagIcon,
    tagLabel,
    headlineTop,
    headlineGold,
    subhead,
    ctaLabel,
    platformName,
    painPoints,
    outcomes,
    whatWeShip,
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
        style={{ background: `linear-gradient(135deg, ${MS_BLUE_DARK} 0%, #0A3F80 50%, ${MS_BLUE} 100%)` }}>
        <div className="absolute inset-0 bg-grid-dark opacity-25" />
        <div className="glow-dot w-[600px] h-[600px] top-[-200px] right-[-100px]"
          style={{ backgroundColor: '#5EB0F0', opacity: 0.18 }} />
        <div className="glow-dot w-[400px] h-[400px] bottom-[-100px] left-[-80px]"
          style={{ backgroundColor: '#002050', opacity: 0.30 }} />

        <div className="section-wrap relative z-10 max-w-3xl mx-auto text-center">
          <div className="tag-white mx-auto mb-6 inline-flex">
            {TagIcon && <TagIcon className="w-3.5 h-3.5" />} {tagLabel}
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl 2xl:text-6xl font-black text-white leading-tight mb-4 sm:mb-6 animate-fade-up text-center">
            {headlineTop}<br />
            <span style={{ background: 'linear-gradient(135deg, #5EB0F0, #B3D7F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{headlineGold}</span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-6 animate-fade-up-1"
            style={{ color: 'rgba(255,255,255,0.85)' }}>
            {subhead}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up-2">
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-medium px-7 py-3.5 rounded-xl transition-all duration-200 text-base"
              style={{ background: `linear-gradient(135deg, ${MS_BLUE}, #00538E)`, color: 'white', boxShadow: `0 8px 28px ${MS_BLUE}60` }}>
              {ctaLabel} <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Pain Points ──────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag mx-auto mb-5" style={{ color: MS_BLUE, backgroundColor: `${MS_BLUE}12`, borderColor: `${MS_BLUE}25` }}>
              Does This Sound Like Your Team?
            </div>
            <h2 className="section-title mb-4">
              Problems <span style={{ background: `linear-gradient(135deg, ${MS_BLUE}, ${MS_BLUE_DARK})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>We Eliminate</span>
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
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: MS_BLUE }} />
                  <p className="text-sm font-semibold" style={{ color: MS_NAVY }} dangerouslySetInnerHTML={{ __html: fix }} />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
              className="btn-primary inline-flex"
              style={{ backgroundColor: MS_BLUE }}>
              Fix These Now <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Outcomes ─────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${MS_BLUE_DARK} 0%, #0A3F80 50%, ${MS_BLUE} 100%)` }}>
        <div className="absolute inset-0 bg-grid-dark opacity-15" />
        <div className="glow-dot w-[500px] h-[500px] top-[-150px] right-[-100px]"
          style={{ backgroundColor: '#5EB0F0', opacity: 0.18 }} />
        <div className="glow-dot w-[400px] h-[400px] bottom-[-120px] left-[-80px]"
          style={{ backgroundColor: '#002050', opacity: 0.25 }} />
        <div className="section-wrap relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag-white mx-auto mb-5">Proven Business Outcomes</div>
            <h2 className="section-title-white mb-4">The Numbers Behind {platformName}</h2>
            <p className="section-sub-white">
              Results reported by Microsoft Dynamics customers across Microsoft Total Economic Impact studies and independent analyst research.
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
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.80)' }}>{label}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-xl transition-all duration-200 text-base"
              style={{ backgroundColor: '#F59E0B', color: MS_NAVY, boxShadow: '0 8px 28px rgba(245,158,11,0.45)' }}>
              Get These Results for Your Team <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── What We Ship ─────────────────────────────────────── */}
      <WhatWeShip
        platformName={platformName}
        accentColor={MS_BLUE}
        items={whatWeShip}
        bgColor="#FFFFFF"
      />

      {/* ── How We Implement ─────────────────────────────────── */}
      <section className="py-10 sm:py-16" style={{ backgroundColor: MS_BG_TINT }}>
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag mx-auto mb-5" style={{ color: MS_BLUE, backgroundColor: `${MS_BLUE}12`, borderColor: `${MS_BLUE}25` }}>Our Process</div>
            <h2 className="section-title mb-4">
              Predictable Delivery, <span style={{ background: `linear-gradient(135deg, ${MS_BLUE}, ${MS_BLUE_DARK})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>No Surprises</span>
            </h2>
            <p className="section-sub">
              A structured, four-phase delivery model built around Microsoft Success-by-Design and FastTrack guidance.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map(({ num, title, desc }, i) => (
              <div key={num} className="glass-card p-6 relative">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black text-white mb-4"
                  style={{ backgroundColor: MS_BLUE }}>
                  {num}
                </div>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-11 right-0 w-5 h-0.5"
                    style={{ backgroundColor: `${MS_BLUE}30` }} />
                )}
                <h4 className="font-bold mb-2" style={{ color: MS_NAVY }}>{title}</h4>
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
            <div className="tag mx-auto mb-5" style={{ color: MS_BLUE, backgroundColor: `${MS_BLUE}12`, borderColor: `${MS_BLUE}25` }}>
              <Star className="w-3.5 h-3.5" /> Why Cloudsheer
            </div>
            <h2 className="section-title mb-4">
              Why Work With Us <span style={{ background: `linear-gradient(135deg, ${MS_BLUE}, ${MS_BLUE_DARK})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Over Anyone Else?</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {whyUs.map(({ title, desc }) => (
              <div key={title} className="glass-card p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: MS_BLUE }} />
                  <div>
                    <h4 className="font-bold mb-1.5" style={{ color: MS_NAVY }}>{title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
              style={{ color: '#64748B', backgroundColor: '#F1F5F9', border: '1px solid #E2E8F0' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse-slow" style={{ backgroundColor: '#94A3B8' }} />
              Microsoft Partnership track in progress
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className="py-14 sm:py-16 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${MS_BLUE_DARK} 0%, #0A3F80 50%, ${MS_BLUE} 100%)` }}>
        <div className="absolute inset-0 bg-grid-dark opacity-15" />
        <div className="glow-dot w-[600px] h-[600px] top-[-150px] left-[50%] -translate-x-1/2"
          style={{ backgroundColor: '#5EB0F0', opacity: 0.18 }} />
        <div className="glow-dot w-[350px] h-[350px] bottom-[-100px] right-[-50px]"
          style={{ backgroundColor: '#FFFFFF', opacity: 0.08 }} />
        <div className="section-wrap relative z-10 text-center max-w-3xl mx-auto">
          <div className="tag-white mx-auto mb-6 inline-flex">
            {TagIcon && <TagIcon className="w-3.5 h-3.5" />} Free Dynamics Scoping Call
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-white mb-5">
            {finalCtaHeadlineTop}<br />
            <span style={{ background: 'linear-gradient(135deg, #5EB0F0, #B3D7F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{finalCtaHeadlineGold}</span>
          </h2>
          <p className="text-lg mb-4" style={{ color: 'rgba(255,255,255,0.85)' }}>
            {finalCtaBody}
          </p>
          <ul className="flex flex-col sm:flex-row gap-3 justify-center mb-10 text-sm"
            style={{ color: 'rgba(255,255,255,0.80)' }}>
            {finalCtaChecklist.map(i => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" style={{ color: '#5EB0F0' }} /> {i}
              </li>
            ))}
          </ul>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-bold px-10 py-5 rounded-xl transition-all duration-200 text-lg animate-bounce-x"
            style={{ backgroundColor: '#F59E0B', color: MS_NAVY, boxShadow: '0 8px 28px rgba(245,158,11,0.45)' }}>
            {finalCtaButton} <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  )
}
