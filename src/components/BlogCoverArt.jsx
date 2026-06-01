/* Blog cover art — editorial-style HTML/CSS/SVG illustrations that visually
   tell the post's story (mock UI panels, labeled diagrams, comparisons).
   Designed to read at both featured (large, min-h-260) and regular (h-44) sizes. */

const baseDeco = (
  <>
    <div className="absolute inset-0 opacity-12" style={{
      backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
      backgroundSize: '20px 20px',
    }} />
    <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-20" style={{ backgroundColor: 'rgba(255,255,255,0.4)', filter: 'blur(48px)' }} />
    <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full opacity-20" style={{ backgroundColor: 'rgba(0,0,0,0.3)', filter: 'blur(60px)' }} />
  </>
)

const CategoryChip = ({ category }) => (
  <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full z-10"
    style={{ backgroundColor: 'rgba(255,255,255,0.95)', color: '#0A0A0A' }}>
    {category}
  </div>
)

/* Reusable panel for UI mocks - translucent white card with content */
const Panel = ({ children, style, className = '' }) => (
  <div className={`rounded-lg ${className}`} style={{
    backgroundColor: 'rgba(255,255,255,0.95)',
    boxShadow: '0 10px 24px rgba(0,0,0,0.18)',
    color: '#0A0A0A',
    ...style,
  }}>
    {children}
  </div>
)

/* ── 1. API / Terminal scene (Headless 360) ── */
function ApiNodesArt() {
  return (
    <div className="absolute inset-0 p-4 flex flex-col justify-center">
      <Panel style={{ padding: '10px 12px', fontFamily: 'monospace' }}>
        {/* Mock terminal traffic lights */}
        <div className="flex items-center gap-1 mb-2">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#FF5F56' }} />
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#FFBD2E' }} />
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#27C93F' }} />
          <span className="text-[9px] font-bold ml-2" style={{ color: '#475569' }}>~/agentforce</span>
        </div>
        <div className="text-[10px] leading-tight" style={{ color: '#0A0A0A' }}>
          <div><span style={{ color: '#10B981' }}>$</span> sf agent invoke --mcp</div>
          <div className="opacity-70">{'>'} loading 60+ tools...</div>
          <div style={{ color: '#0176D3' }}>{'{'} "ok": true, "tools": 60 {'}'}</div>
        </div>
      </Panel>
      {/* Floating tag badges */}
      <div className="flex gap-1.5 mt-2 justify-center">
        {['API', 'MCP', 'CLI'].map(t => (
          <span key={t} className="text-[9px] font-bold px-2 py-0.5 rounded-full"
            style={{ backgroundColor: 'rgba(255,255,255,0.30)', color: 'white', border: '1px solid rgba(255,255,255,0.45)' }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── 2. Hub Stack — old vs new labels (HubSpot rebrand) ── */
function HubStackArt() {
  const rows = [
    { old: 'CMS Hub',        next: 'Content Hub',  arrow: true },
    { old: 'Operations Hub', next: 'Data Hub',     arrow: true },
    { old: null,             next: 'Commerce Hub', arrow: false, fresh: true },
    { old: null,             next: 'Smart CRM',    arrow: false, fresh: true },
  ]
  return (
    <div className="absolute inset-0 p-4 flex flex-col justify-center">
      <div className="flex items-center justify-between mb-2 px-1">
        <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.65)' }}>2024</span>
        <span className="text-[9px] font-bold uppercase tracking-widest text-white">2025</span>
      </div>
      <div className="space-y-1.5">
        {rows.map((r, i) => (
          <div key={i} className="flex items-center gap-1.5 text-[10px] font-bold">
            <div className="flex-1 text-right pr-1">
              {r.old ? (
                <span className="line-through" style={{ color: 'rgba(255,255,255,0.55)' }}>{r.old}</span>
              ) : (
                <span style={{ color: 'rgba(255,255,255,0.4)' }}>—</span>
              )}
            </div>
            <span className="text-white opacity-70">{r.arrow ? '→' : '+'}</span>
            <div className="flex-1 pl-1">
              <span className="px-2 py-0.5 rounded-md inline-block"
                style={{ backgroundColor: 'rgba(255,255,255,0.95)', color: '#0A0A0A' }}>
                {r.next}{r.fresh && <span className="ml-1 text-[8px] font-black" style={{ color: '#10B981' }}>NEW</span>}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── 3. Migration — record cards flying from source to destination ── */
function MigrationArrowArt({ leftLabel = 'SF', rightLabel = 'HS' }) {
  return (
    <div className="absolute inset-0 p-4 flex items-center justify-between gap-2">
      {/* Source side */}
      <div className="flex flex-col items-center gap-1">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: 'rgba(255,255,255,0.20)', border: '2px solid rgba(255,255,255,0.45)' }}>
          <span className="text-white text-lg font-black">{leftLabel}</span>
        </div>
        <span className="text-[8px] font-bold uppercase tracking-wider text-white opacity-70">Source</span>
      </div>

      {/* Flying records */}
      <div className="flex-1 flex flex-col gap-1 items-stretch px-1 relative">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)' }} />
        {['10K Contacts', '500 Deals', '20K Activities'].map((label, i) => (
          <div key={label} className="rounded-md py-0.5 px-2 text-[9px] font-bold text-center"
            style={{
              backgroundColor: 'rgba(255,255,255,0.92)',
              color: '#0A0A0A',
              transform: `translateY(${i === 1 ? '0' : i === 0 ? '-2px' : '2px'})`,
              boxShadow: '0 4px 8px rgba(0,0,0,0.18)',
            }}>
            {label} <span style={{ color: '#10B981' }}>✓</span>
          </div>
        ))}
      </div>

      {/* Destination */}
      <div className="flex flex-col items-center gap-1">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: 'rgba(255,255,255,0.95)', border: '2px solid white' }}>
          <span className="text-lg font-black" style={{ color: '#0A0A0A' }}>{rightLabel}</span>
        </div>
        <span className="text-[8px] font-bold uppercase tracking-wider text-white">Live</span>
      </div>
    </div>
  )
}

/* ── 4. VS Split — feature comparison table ── */
function VsSplitArt({ leftLabel = 'A', rightLabel = 'B' }) {
  return (
    <div className="absolute inset-0 p-4 flex flex-col justify-center">
      {/* Headers */}
      <div className="flex items-stretch gap-2 mb-1.5">
        <div className="flex-1 text-center py-1 rounded-md font-black text-[11px] text-white"
          style={{ backgroundColor: 'rgba(255,255,255,0.20)', border: '1.5px solid rgba(255,255,255,0.5)' }}>
          {leftLabel}
        </div>
        <div className="px-2 py-1 rounded-md font-black text-[10px]"
          style={{ backgroundColor: 'white', color: '#0A0A0A' }}>VS</div>
        <div className="flex-1 text-center py-1 rounded-md font-black text-[11px]"
          style={{ backgroundColor: 'white', color: '#0A0A0A' }}>
          {rightLabel}
        </div>
      </div>
      {/* Comparison rows */}
      <div className="space-y-1 text-[9px] font-bold">
        {[
          { l: '✓', r: '✓', label: 'Production-grade' },
          { l: '✓', r: '✗', label: 'Native data residency' },
          { l: '✗', r: '✓', label: 'Bleeding-edge models' },
        ].map(row => (
          <div key={row.label} className="flex items-center gap-2 rounded-sm px-1"
            style={{ backgroundColor: 'rgba(255,255,255,0.10)' }}>
            <span className="w-4 text-center font-black" style={{ color: row.l === '✓' ? '#10B981' : '#FCA5A5' }}>{row.l}</span>
            <span className="flex-1 text-center truncate text-white text-[9px]">{row.label}</span>
            <span className="w-4 text-center font-black" style={{ color: row.r === '✓' ? '#10B981' : '#FCA5A5' }}>{row.r}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── 5. Cost Chart — AWS cost dashboard mock ── */
function CostChartArt() {
  return (
    <div className="absolute inset-0 p-4 flex flex-col justify-center">
      <Panel style={{ padding: '10px 12px' }}>
        <div className="flex items-baseline justify-between mb-1.5">
          <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: '#64748B' }}>Monthly Spend</span>
          <span className="text-[10px] font-black" style={{ color: '#10B981' }}>-29%</span>
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="line-through text-sm font-bold" style={{ color: '#94A3B8' }}>$45K</span>
          <span className="text-xl font-black" style={{ color: '#0A0A0A' }}>$32K</span>
        </div>
        {/* Mini bar chart */}
        <div className="flex items-end gap-1 h-6">
          {[28, 22, 18, 14, 11].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm"
              style={{ height: `${h * 2}px`, backgroundColor: `rgba(255,153,0,${0.5 + i * 0.10})` }} />
          ))}
        </div>
        <div className="flex justify-between text-[7px] mt-0.5" style={{ color: '#94A3B8' }}>
          <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span>
        </div>
      </Panel>
      {/* Tiny line-item savings */}
      <div className="flex gap-1 mt-1.5 justify-center text-[8px] font-bold text-white">
        {['EC2 -22%', 'S3 -45%', 'Egress -18%'].map(s => (
          <span key={s} className="px-1.5 py-0.5 rounded-full"
            style={{ backgroundColor: 'rgba(255,255,255,0.20)', border: '1px solid rgba(255,255,255,0.35)' }}>{s}</span>
        ))}
      </div>
    </div>
  )
}

/* ── 6. Checklist — implementation phases ── */
function ChecklistArt() {
  const items = [
    { n: '01', label: 'Data Model Audit',  done: true },
    { n: '02', label: 'Sandbox Setup',     done: true },
    { n: '03', label: 'User Training',     done: true },
    { n: '04', label: 'Cutover Plan',      done: false },
    { n: '05', label: 'Go-Live + Hypercare', done: false },
  ]
  return (
    <div className="absolute inset-0 p-4 flex items-center">
      <Panel style={{ padding: '8px 10px', width: '100%' }}>
        <div className="text-[9px] font-bold uppercase tracking-wider mb-1.5" style={{ color: '#64748B' }}>
          Pre-Launch Checklist
        </div>
        <div className="space-y-1">
          {items.map(item => (
            <div key={item.n} className="flex items-center gap-1.5 text-[10px]">
              <div className="w-3.5 h-3.5 rounded-sm flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: item.done ? '#10B981' : 'transparent',
                  border: item.done ? 'none' : '1.5px solid #CBD5E1',
                }}>
                {item.done && (
                  <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6.5 L5 9 L10 3" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span className="font-black text-[9px]" style={{ color: '#94A3B8' }}>{item.n}</span>
              <span className={`font-bold flex-1 truncate ${item.done ? '' : ''}`}
                style={{ color: item.done ? '#0A0A0A' : '#64748B' }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  )
}

/* ── 7. Growth chart — KPI dashboard for ROI ── */
function GrowthChartArt() {
  return (
    <div className="absolute inset-0 p-4 flex flex-col justify-center gap-2">
      {/* Top KPI row */}
      <div className="grid grid-cols-3 gap-1.5">
        {[
          { val: '40%', label: 'Deflection' },
          { val: '3.4×', label: 'Response' },
          { val: '92%', label: 'CSAT' },
        ].map(k => (
          <Panel key={k.label} style={{ padding: '5px 4px', textAlign: 'center' }}>
            <div className="text-sm font-black leading-none" style={{ color: '#10B981' }}>{k.val}</div>
            <div className="text-[7px] font-bold uppercase tracking-wider mt-0.5" style={{ color: '#64748B' }}>{k.label}</div>
          </Panel>
        ))}
      </div>
      {/* Ascending chart row */}
      <Panel style={{ padding: '6px 10px' }}>
        <div className="flex items-end justify-between h-7 gap-1">
          {[20, 32, 28, 48, 56, 70, 88].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm"
              style={{ height: `${h * 0.4}px`, backgroundColor: `rgba(16,185,129,${0.5 + i * 0.07})` }} />
          ))}
        </div>
        <div className="flex items-center justify-between mt-1 text-[7px]" style={{ color: '#64748B' }}>
          <span className="font-bold">Mo 1</span>
          <span className="font-black" style={{ color: '#10B981' }}>↑ Trending</span>
          <span className="font-bold">Mo 7</span>
        </div>
      </Panel>
    </div>
  )
}

/* ── 8. Data Flow — pipeline stages with labels ── */
function DataFlowArt() {
  const stages = [
    { label: 'Sources',  detail: 'CRM · Web · Email' },
    { label: 'Identity', detail: 'Resolve · Match' },
    { label: 'Profile',  detail: '360° View' },
    { label: 'Agent',    detail: 'Smart Action' },
  ]
  return (
    <div className="absolute inset-0 p-3 flex items-center">
      <div className="flex items-center gap-1 w-full">
        {stages.map((s, i) => (
          <div key={s.label} className="contents">
            <Panel style={{ padding: '5px 3px', flex: 1, textAlign: 'center', minWidth: 0 }}>
              <div className="text-[9px] font-black truncate" style={{ color: '#0A0A0A' }}>{s.label}</div>
              <div className="text-[7px] truncate mt-0.5" style={{ color: '#64748B' }}>{s.detail}</div>
            </Panel>
            {i < stages.length - 1 && (
              <div className="flex flex-col items-center text-white text-[14px] leading-none font-black">→</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── 9. Agent Bot — robot with conversation bubble ── */
function AgentBotArt() {
  return (
    <div className="absolute inset-0 p-3 flex items-center gap-2">
      {/* Robot */}
      <svg viewBox="0 0 80 90" className="h-[80%] shrink-0">
        <line x1="40" y1="6" x2="40" y2="18" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="40" cy="6" r="4" fill="white" />
        <rect x="14" y="20" width="52" height="48" rx="10" fill="rgba(255,255,255,0.95)" />
        <circle cx="28" cy="40" r="5" fill="#0A0A0A" />
        <circle cx="52" cy="40" r="5" fill="#0A0A0A" />
        <circle cx="29" cy="38" r="1.5" fill="white" />
        <circle cx="53" cy="38" r="1.5" fill="white" />
        <path d="M 28 55 Q 40 64 52 55" stroke="#0A0A0A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <rect x="20" y="74" width="40" height="10" rx="3" fill="rgba(255,255,255,0.55)" />
      </svg>
      {/* Conversation bubbles */}
      <div className="flex-1 flex flex-col gap-1.5 min-w-0">
        <div className="rounded-lg rounded-tl-sm px-2 py-1 text-[9px]"
          style={{ backgroundColor: 'rgba(255,255,255,0.20)', color: 'white', border: '1px solid rgba(255,255,255,0.35)' }}>
          "Where's my order?"
        </div>
        <div className="rounded-lg rounded-bl-sm px-2 py-1 text-[9px] font-bold"
          style={{ backgroundColor: 'rgba(255,255,255,0.95)', color: '#0A0A0A' }}>
          Shipping today. Track #4821 →
        </div>
        <div className="flex gap-1 items-center">
          <div className="w-1 h-1 rounded-full bg-white opacity-60" />
          <div className="w-1 h-1 rounded-full bg-white opacity-80" />
          <div className="w-1 h-1 rounded-full bg-white" />
          <span className="text-[7px] text-white ml-1 opacity-70">resolved in 0.4s</span>
        </div>
      </div>
    </div>
  )
}

/* ── 10. Release Tag — calendar with what's new ── */
function ReleaseTagArt() {
  return (
    <div className="absolute inset-0 p-4 flex items-center gap-3">
      {/* Calendar block */}
      <Panel style={{ padding: '0', overflow: 'hidden', minWidth: 70 }}>
        <div className="text-[8px] font-black uppercase tracking-widest text-white text-center py-1"
          style={{ backgroundColor: '#DC2626' }}>
          APR
        </div>
        <div className="text-center py-1">
          <div className="text-2xl font-black leading-none" style={{ color: '#0A0A0A' }}>15</div>
          <div className="text-[8px] font-bold mt-0.5" style={{ color: '#64748B' }}>2026</div>
        </div>
      </Panel>
      {/* What's new list */}
      <div className="flex-1 min-w-0">
        <div className="inline-flex items-center gap-1 mb-1.5 px-2 py-0.5 rounded-full"
          style={{ backgroundColor: 'white', color: '#0A0A0A' }}>
          <span className="text-[8px] font-black">✦ WHAT&apos;S NEW</span>
        </div>
        <div className="space-y-1 text-[10px] font-bold text-white">
          <div className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-white" />
            <span className="truncate">Headless 360</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-white" />
            <span className="truncate">60+ MCP tools</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-white" />
            <span className="truncate">Data 360 APIs</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── 11. Tier Decision — two paths with criteria ── */
function TierDecisionArt() {
  return (
    <div className="absolute inset-0 p-3 flex flex-col justify-center gap-1.5">
      {/* SMB path */}
      <Panel style={{ padding: '6px 8px' }}>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md flex items-center justify-center font-black text-[10px] text-white shrink-0"
            style={{ backgroundColor: '#10B981' }}>SMB</div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-black truncate" style={{ color: '#0A0A0A' }}>Business Central</div>
            <div className="text-[8px] font-bold truncate" style={{ color: '#64748B' }}>Under $250M · 8-14 wk</div>
          </div>
        </div>
      </Panel>
      <div className="text-center text-white text-[9px] font-bold opacity-70 -my-0.5">OR</div>
      {/* Enterprise path */}
      <Panel style={{ padding: '6px 8px' }}>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md flex items-center justify-center font-black text-[10px] text-white shrink-0"
            style={{ backgroundColor: '#0078D4' }}>ENT</div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-black truncate" style={{ color: '#0A0A0A' }}>Finance + SCM</div>
            <div className="text-[8px] font-bold truncate" style={{ color: '#64748B' }}>$250M+ · 6-12 mo</div>
          </div>
        </div>
      </Panel>
    </div>
  )
}

/* ── 12. Team Circle — adoption % per role ── */
function TeamCircleArt() {
  const rows = [
    { name: 'Sales',     pct: 92 },
    { name: 'Service',   pct: 84 },
    { name: 'Marketing', pct: 76 },
    { name: 'Ops',       pct: 68 },
  ]
  return (
    <div className="absolute inset-0 p-3 flex items-center">
      <Panel style={{ padding: '8px 10px', width: '100%' }}>
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: '#64748B' }}>Team Adoption</span>
          <span className="text-[9px] font-black" style={{ color: '#10B981' }}>+24%</span>
        </div>
        <div className="space-y-1">
          {rows.map(r => (
            <div key={r.name} className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-black text-white shrink-0"
                style={{ backgroundColor: '#6366F1' }}>{r.name[0]}</div>
              <span className="text-[9px] font-bold w-12" style={{ color: '#0A0A0A' }}>{r.name}</span>
              <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: '#E2E8F0' }}>
                <div className="h-full rounded-full"
                  style={{ width: `${r.pct}%`, backgroundColor: '#10B981' }} />
              </div>
              <span className="text-[9px] font-black w-7 text-right" style={{ color: '#0A0A0A' }}>{r.pct}%</span>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  )
}

const COVER_VARIANTS = {
  'api-nodes':       ApiNodesArt,
  'hub-stack':       HubStackArt,
  'migration-arrow': MigrationArrowArt,
  'vs-split':        VsSplitArt,
  'cost-chart':      CostChartArt,
  'checklist':       ChecklistArt,
  'growth-chart':    GrowthChartArt,
  'data-flow':       DataFlowArt,
  'agent-bot':       AgentBotArt,
  'release-tag':     ReleaseTagArt,
  'tier-decision':   TierDecisionArt,
  'team-circle':     TeamCircleArt,
}

export default function BlogCoverArt({ category, gradient, coverType, coverProps = {}, large }) {
  const size = large ? 'h-full min-h-[260px]' : 'h-44'
  const Variant = COVER_VARIANTS[coverType] || ApiNodesArt
  return (
    <div className={`relative rounded-2xl overflow-hidden ${size}`} style={{ background: gradient }}>
      {baseDeco}
      <Variant {...coverProps} />
      <CategoryChip category={category} />
    </div>
  )
}
