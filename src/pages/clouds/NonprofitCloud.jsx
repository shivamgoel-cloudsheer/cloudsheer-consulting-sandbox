import {
  ArrowRight, CheckCircle2, TrendingUp, Clock, DollarSign,
  Users, Shield, ChevronRight, Star, Heart, HandHeart, Gift, Megaphone,
} from 'lucide-react'

const CAL_LINK = 'https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true'

const painPoints = [
  { pain: "Development teams chase donors across spreadsheets, email, and stale CRM data with no single view", fix: "<strong>Constituent 360</strong> unifies giving history, engagement, and affinity in one record" },
  { pain: "Major gift cultivation depends on tribal knowledge that walks out the door when staff turns over", fix: "<strong>Engagement Plans</strong> and structured moves management standardize cultivation across teams" },
  { pain: "Program teams cannot show outcomes to funders because case management lives outside the CRM", fix: "<strong>Program Management</strong> with case workflows captures impact data ready for grants and reports" },
  { pain: "Marketing campaigns are one-size-fits-all because supporter segments are not connected to behavior", fix: "<strong>Marketing Cloud</strong> with Constituent 360 powers journeys that match donor and supporter intent" },
  { pain: "Grant management runs on email and document folders with no visibility into deadlines or deliverables", fix: "<strong>Grants Management</strong> tracks the full lifecycle from prospect through report" },
]

const outcomes = [
  { icon: Gift,          value: '42%',  label: 'increase in annual fundraising results with Constituent 360, giving propensity scoring, and personalized journeys', color: '#0176D3' },
  { icon: Users,         value: '60%',  label: 'improvement in volunteer retention through better matching, recognition, and engagement workflows', color: '#10B981' },
  { icon: Clock,         value: '50%',  label: 'less staff time on administrative work through automated workflows, document generation, and intake', color: '#F59E0B' },
  { icon: DollarSign,    value: '35%',  label: 'lift in donor retention with Engagement Plans, stewardship cadence, and Einstein recommendations', color: '#6366F1' },
  { icon: HandHeart,     value: '3x',   label: 'faster grant reporting through Program Management dashboards and outcome tracking built into the system', color: '#06B6D4' },
  { icon: Heart,         value: '100%', label: 'on the Salesforce Power of Us program for qualifying nonprofits with discounted licensing and resources', color: '#0176D3' },
]

const capabilities = [
  {
    dept: 'Fundraising',
    icon: Gift,
    color: '#0176D3',
    headline: 'Raise more. Retain more. Steward better.',
    points: [
      "<strong>Constituent 360</strong> with giving and engagement history",
      "<strong>Major gifts moves management</strong> with Engagement Plans",
      "<strong>Recurring giving</strong> with retention dashboards",
      "<strong>Online giving forms</strong> with Experience Cloud",
      "<strong>Einstein</strong> scores giving propensity and capacity",
    ],
  },
  {
    dept: 'Programs & Impact',
    icon: HandHeart,
    color: '#10B981',
    headline: 'Track impact. Report outcomes. Win more grants.",',
    points: [
      "<strong>Program Management</strong> with cohort and case workflows",
      "<strong>Outcome capture</strong> ready for grant reports",
      "<strong>Service delivery tracking</strong> across locations",
      "<strong>Case management</strong> on Service Console",
      "<strong>Beneficiary engagement</strong> through Experience Cloud",
    ],
  },
  {
    dept: 'Volunteers & Community',
    icon: Users,
    color: '#F59E0B',
    headline: 'Activate volunteers. Build community.',
    points: [
      "<strong>Volunteer 360</strong> with skills and availability",
      "<strong>Shift management</strong> and event coordination",
      "<strong>Recognition and stewardship</strong> automation",
      "<strong>Community portal</strong> with Experience Cloud",
      "<strong>Mobile check-in</strong> for events and service days",
    ],
  },
  {
    dept: 'Marketing & Engagement',
    icon: Megaphone,
    color: '#6366F1',
    headline: 'Reach the right supporters with the right message.',
    points: [
      "<strong>Marketing Cloud</strong> journeys across the supporter lifecycle",
      "<strong>Email Studio and Account Engagement</strong> for nurturing",
      "<strong>Mobile and SMS</strong> for urgent appeals and reminders",
      "<strong>Event Management</strong> for galas, walks, and campaigns",
      "<strong>Einstein</strong> Send Time Optimization lifts response",
    ],
  },
]

const whyUs = [
  { title: 'Nonprofit Cloud Specialists',  desc: "We focus on Nonprofit Cloud for foundations, social services, faith, education, and advocacy organizations. Our team understands mission-driven workflows and limited bench capacity." },
  { title: 'Power of Us Aware',            desc: "We help eligible nonprofits maximize the Salesforce Power of Us program, stretch budgets, and pair discounted licensing with smart architecture that grows with your mission." },
  { title: 'Live in 8 to 12 Weeks',        desc: "Most Nonprofit Cloud implementations move from kickoff to production in under twelve weeks. We use proven accelerators and iterative builds tied to your funding cycles." },
  { title: 'Zero Risk to Start',           desc: "Book a free 30-minute discovery call. We will map your highest-impact use case, outline an affordable architecture, and hand you a deployment plan - no cost, no commitment." },
]

export default function NonprofitCloudPage() {
  return (
    <>
      <section className="relative pt-20 sm:pt-24 pb-6 sm:pb-10 overflow-hidden" style={{ background: 'linear-gradient(135deg,#032D60 0%,#0A3F80 55%,#0176D3 100%)' }}>
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="glow-dot w-[500px] h-[500px] top-[-150px] right-[-80px]" style={{ backgroundColor: '#38BDF8', opacity: 0.15 }} />

        <div className="section-wrap relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="tag-white mx-auto mb-6 inline-flex">
              <Heart className="w-3.5 h-3.5" /> Salesforce Nonprofit Cloud
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl 2xl:text-6xl font-black text-white leading-tight mb-4 sm:mb-6 animate-fade-up text-center">
              Raise More.{' '}
              <br /><span className="gradient-text-gold">Retain More Donors. Show Real Impact.</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed mb-6 animate-fade-up-1" style={{ color: 'rgba(148,196,255,0.90)' }}>
              Nonprofit Cloud gives mission-driven organizations one platform for fundraising, programs, volunteers, and marketing - so your team spends less time on admin and more time advancing your mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up-2">
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold text-base px-8 py-4">
                See What Nonprofit Cloud Can Do <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag mx-auto mb-5">Sound Familiar?</div>
            <h2 className="section-title mb-4">The Costly Problems <span className="gradient-text">Nonprofit Cloud Eliminates</span></h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {painPoints.map(({ pain, fix }) => (
              <div key={pain} className="glass-card p-5 grid sm:grid-cols-2 gap-4 items-center group hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(239,68,68,0.10)', color: '#EF4444' }}>
                    <span className="text-xs font-bold">✕</span>
                  </div>
                  <p className="text-sm font-medium" style={{ color: '#475569' }}>{pain}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#0176D3' }} />
                  <p className="text-sm font-semibold" style={{ color: '#032D60' }} dangerouslySetInnerHTML={{ __html: fix }} />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">
              Tell Us Your Biggest Challenge <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#032D60,#0A3F80)' }}>
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="section-wrap relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag-white mx-auto mb-5">Proven Results</div>
            <h2 className="section-title-white mb-4">Real Nonprofits. Real Outcomes.</h2>
            <p className="section-sub-white">Outcomes achieved by foundations, social service, education, and advocacy organizations running Nonprofit Cloud in production.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {outcomes.map(({ icon: Icon, value, label, color }) => (
              <div key={label} className="dark-card p-6 text-center group hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${color}20`, color }}>
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-3xl font-black mb-2" style={{ color }}>{value}</p>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(148,196,255,0.80)' }}>{label}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold text-base px-8 py-4">
              Get Results Like These For Your Mission <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-10 sm:py-16 bg-white">
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag mx-auto mb-5">Where It Delivers</div>
            <h2 className="section-title mb-4">A Platform Built for Mission-Driven Orgs <span className="gradient-text">From the Ground Up</span></h2>
            <p className="section-sub">Nonprofit Cloud is purpose-built around fundraising, programs, volunteers, and the budget realities of mission-driven organizations.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map(({ dept, icon: Icon, color, headline, points }) => (
              <div key={dept} className="glass-card p-5 sm:p-7 flex flex-col group hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${color}15`, color }}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color }}>{dept}</p>
                    <h3 className="font-black text-lg leading-tight" style={{ color: '#032D60' }}>{headline}</h3>
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
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold mt-5 transition-all" style={{ color }}>
                  See how this works for you <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag mx-auto mb-5"><Star className="w-3.5 h-3.5" /> Why Cloudsheer</div>
            <h2 className="section-title mb-4">Why Nonprofits Choose Us <span className="gradient-text">For Nonprofit Cloud</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {whyUs.map(({ title, desc }) => (
              <div key={title} className="glass-card p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#0176D3' }} />
                  <div>
                    <h4 className="font-bold mb-1.5" style={{ color: '#032D60' }}>{title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-10 sm:py-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#032D60 0%,#0A3F80 100%)' }}>
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="glow-dot w-[500px] h-[500px] top-[-100px] left-[50%] -translate-x-1/2" style={{ backgroundColor: '#0176D3', opacity: 0.25 }} />
        <div className="section-wrap relative z-10 text-center max-w-3xl mx-auto">
          <div className="tag-white mx-auto mb-6 inline-flex"><Heart className="w-3.5 h-3.5" /> Free Discovery Call</div>
          <h2 className="text-2xl md:text-4xl font-black text-white mb-5">
            Find Out Exactly What<br />
            <span className="gradient-text-gold">Nonprofit Cloud Can Deliver</span>
          </h2>
          <p className="text-lg mb-10" style={{ color: 'rgba(148,196,255,0.85)' }}>
            In 30 minutes we will assess your fundraising, programs, and engagement landscape, identify the highest-impact use case, and show you what a deployment would look like.
          </p>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold text-lg px-10 py-5 animate-bounce-x">
            Book My Free Discovery Call <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  )
}
