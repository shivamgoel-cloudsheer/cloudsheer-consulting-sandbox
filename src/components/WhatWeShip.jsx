// Two-column section: left text block + right stacked capability cards.
// Used on every solution page to replace the dense 4-quadrant capabilities
// grid with a cleaner "the work we do" summary. Pass a platform-specific
// list of items (icon + title + description) and the platform accent color.

export default function WhatWeShip({
  platformName,
  accentColor = '#0176D3',
  tagLabel = 'Capabilities',
  headlineLead = 'What we ship for',
  subhead = "Every engagement is custom, but here is the work we do most often, and the work we are known for.",
  items,
  bgColor = '#FAFAFA',
}) {
  return (
    <section className="py-14 sm:py-20" style={{ backgroundColor: bgColor }}>
      <div className="section-wrap">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">

          {/* ── Left: text block ─────────────────────────── */}
          <div className="animate-fade-up">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-5" style={{ color: accentColor }}>
              {tagLabel}
            </p>
            <h2 className="text-3xl sm:text-4xl 2xl:text-5xl font-black leading-[1.1] mb-5"
              style={{ color: '#032D60' }}>
              {headlineLead}<br />
              <span style={{ color: accentColor }}>{platformName}.</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed max-w-md"
              style={{ color: '#64748B' }}>
              {subhead}
            </p>
          </div>

          {/* ── Right: stacked capability cards ──────────── */}
          <div className="rounded-2xl overflow-hidden animate-fade-up-1"
            style={{
              backgroundColor: '#FFFFFF',
              border: `1px solid ${accentColor}1A`,
              boxShadow: `0 2px 12px ${accentColor}08`,
            }}>
            {items.map(({ icon: Icon, title, desc }, i) => (
              <div key={title}
                className="flex items-start gap-4 px-6 sm:px-8 py-5 sm:py-6 transition-colors duration-200"
                style={{
                  borderTop: i > 0 ? `1px solid ${accentColor}12` : 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = `${accentColor}06` }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: `${accentColor}12`, color: accentColor }}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-black leading-tight mb-1.5"
                    style={{ color: '#032D60' }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
