import { useState } from 'react'
import { HelpCircle, ChevronDown } from 'lucide-react'

export default function FAQ({ title, subtitle, items }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="section-wrap max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="tag mx-auto mb-5"><HelpCircle className="w-3.5 h-3.5" /> FAQ</div>
          <h2 className="section-title text-2xl">{title || 'Frequently Asked Questions'}</h2>
          {subtitle && <p className="section-sub mt-3">{subtitle}</p>}
        </div>
        <div className="grid md:grid-cols-2 gap-3 items-start">
          {items.map(({ q, a }, i) => (
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
