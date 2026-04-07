import { Link } from 'react-router-dom'
import { ArrowRight, Award, Heart, Lightbulb, Users, Sparkles, MapPin, Star, Linkedin } from 'lucide-react'

const values = [
  { icon: <Sparkles className="w-5 h-5" />, title: 'Agentforce-First Thinking', desc: 'Every engagement starts by asking: where can an AI agent create the most value? We are built around this question.' },
  { icon: <Award className="w-5 h-5" />,    title: 'Excellence',               desc: 'We hold ourselves to the highest standard - in our code quality, solution design, and client communication.' },
  { icon: <Heart className="w-5 h-5" />,    title: 'True Partnership',         desc: 'We invest in long-term relationships, not one-off projects. Your success is the only metric we care about.' },
  { icon: <Lightbulb className="w-5 h-5" />,title: 'Relentless Innovation',    desc: 'We stay at the frontier of Salesforce and Agentforce, bringing the latest capabilities to our clients first.' },
  { icon: <Users className="w-5 h-5" />,    title: 'People-First AI',          desc: 'AI agents should empower people, not replace them. We design every agent to make your team more effective.' },
]

const capabilities = [
  { icon: <Sparkles className="w-5 h-5" />, title: 'Agentforce & AI Agents', desc: 'Deploy autonomous agents that handle support, sales, and operations 24/7 - so your team focuses on growth.' },
  { icon: <Award className="w-5 h-5" />,    title: 'Full Salesforce Suite',   desc: 'Sales Cloud, Service Cloud, Marketing Cloud, Commerce Cloud, Experience Cloud, Analytics - all connected.' },
  { icon: <Users className="w-5 h-5" />,    title: 'Strategy & Implementation', desc: 'From discovery to deployment in 4-6 weeks. We design, build, test, and launch - with measurable ROI from day one.' },
  { icon: <Heart className="w-5 h-5" />,    title: 'Ongoing Optimisation',    desc: 'Continuous monitoring, performance tuning, and new agent deployments as your business scales.' },
]

const offices = [
  { city: 'Dallas',   flag: '🇺🇸' },
  { city: 'Delhi',    flag: '🇮🇳' },
  { city: 'London',   flag: '🇬🇧' },
  { city: 'New York', flag: '🇺🇸' },
]

const BASE = import.meta.env.BASE_URL
const team = [
  { id: 1,  name: 'Tushar Sharma',        role: 'CEO',                              photo: BASE + 'team-opt/Tushar Sharma.webp',        linkedin: '#' },
  { id: 2,  name: 'Rajat Sharma',         role: 'Technical Delivery Head',          photo: BASE + 'team-opt/Rajat Sharma.webp',         linkedin: '#' },
  { id: 3,  name: 'Shubham Bansal',       role: 'Growth & Marketing - Head',        photo: BASE + 'team-opt/Shubham Bansal.webp',       linkedin: '#' },
  { id: 4,  name: 'Ankur Trivedi',        role: 'Salesforce Architect',             photo: BASE + 'team-opt/Ankur Trivedi.webp',        linkedin: '#' },
  { id: 5,  name: 'Shainkey Pawaiya',     role: 'Project Manager',                  photo: BASE + 'team-opt/Shainkey Pawaiya.webp',     linkedin: '#' },
  { id: 6,  name: 'Pranay Pandey',        role: 'Team Lead - QA',                   photo: BASE + 'team-opt/Pranay Pandey.webp',        linkedin: '#' },
  { id: 7,  name: 'Arihanta Jain',        role: 'Assistant Manager HR',             photo: BASE + 'team-opt/Arihanta Jain.webp',        linkedin: '#' },
  { id: 8,  name: 'Arti Bisht',           role: 'Senior Accountant',                photo: BASE + 'team-opt/Arti Bisht.webp',           linkedin: '#' },
  { id: 9,  name: 'Shivam Goel',          role: 'Strategy & Growth - Associate',    photo: BASE + 'team-opt/Shivam Goel.webp',          linkedin: '#' },
  { id: 10, name: 'Prateek Jain',         role: 'Growth & Marketing - Associate',   photo: BASE + 'team-opt/Prateek Jain.webp',         linkedin: '#' },
  { id: 11, name: 'Tammana Gautam',       role: 'BA - Salesforce',                  photo: BASE + 'team-opt/Tammana Gautam.webp',       linkedin: '#' },
  { id: 12, name: 'Vishal Yadav',         role: 'BA - Salesforce',                  photo: BASE + 'team-opt/Vishal Yadav.webp',         linkedin: '#' },
  { id: 13, name: 'Abhishek Kaplesh',     role: 'Salesforce Developer',             photo: BASE + 'team-opt/Abhishek Kaplesh.webp',     linkedin: '#' },
  { id: 14, name: 'Ishit Bansal',         role: 'Salesforce Developer',             photo: BASE + 'team-opt/Ishit Bansal.webp',         linkedin: '#' },
  { id: 15, name: 'Arun Kumar',           role: 'Salesforce Developer',              photo: BASE + 'team-opt/Arun Kumar.webp',           linkedin: '#' },
  { id: 16, name: 'Divyansh Sharma',      role: 'Salesforce Developer',              photo: BASE + 'team-opt/Divyansh Sharma.webp',      linkedin: '#' },
  { id: 17, name: 'Gaurav Khanna',        role: 'Salesforce Developer',              photo: BASE + 'team-opt/Gaurav Khanna.webp',        linkedin: '#' },
  { id: 18, name: 'Piyush Kumar Singh',   role: 'Salesforce Developer',              photo: BASE + 'team-opt/Piyush Kumar Singh.webp',   linkedin: '#' },
  { id: 19, name: 'Rahul Babbar',         role: 'Salesforce Developer',              photo: BASE + 'team-opt/Rahul Babbar.webp',         linkedin: '#' },
  { id: 20, name: 'Vansh Nandan Mathur',  role: 'Associate Salesforce Developer',   photo: BASE + 'team-opt/Vansh Nandan Mathur.webp',  linkedin: '#' },
  { id: 21, name: 'Aayush Gupta',         role: 'Associate Salesforce Developer',   photo: BASE + 'team-opt/Aayush Gupta.webp',         linkedin: '#' },
  { id: 22, name: 'Himanshu Yadav',       role: 'QA',                               photo: BASE + 'team-opt/Himanshu Yadav.webp',       linkedin: '#' },
  { id: 23, name: 'Manish Pavadiya',      role: 'Salesforce Consultant',             photo: BASE + 'team-opt/Manish Pavadiya.webp',      linkedin: '#' },
  { id: 24, name: 'Sweety Singh',         role: 'Associate Salesforce Developer',    photo: BASE + 'team-opt/Sweety Singh.webp',         linkedin: '#' },
  { id: 25, name: 'Alka Yadav',           role: 'HR Associate',                      photo: BASE + 'team-opt/Alka Yadav.webp',           linkedin: '#' },
  { id: 26, name: 'Bhu Garima Yadav',     role: 'Associate Salesforce Developer',    photo: BASE + 'team-opt/Bhu Garima Yadav.webp',     linkedin: '#' },
  { id: 27, name: 'Utkarsh',              role: 'Salesforce Developer',             photo: BASE + 'team-opt/Utkarsh.webp',              linkedin: '#' },
]

export default function About() {
  return (
    <>
      {/* spacer for navbar */}
      <div className="pt-24" />

      {/* ── Connected Across the Globe ───────────────────────── */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#032D60 0%,#0A3F80 60%,#0176D3 100%)' }}>
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="section-wrap relative z-10">
          <div className="text-center mb-10">
            <div className="tag-white mx-auto mb-6 inline-flex">
              <MapPin className="w-3.5 h-3.5" />
              Global Presence
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Connected Across the Globe
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(148,196,255,0.75)' }}>
              Our distributed team delivers round-the-clock capability across 4 time zones.
            </p>
          </div>

          {/* World Map with office markers */}
          <div className="relative max-w-4xl mx-auto mb-10">
            <svg viewBox="0 0 1000 500" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Simplified world map outline */}
              <g opacity="0.15" stroke="rgba(148,196,255,0.6)" strokeWidth="0.8" fill="none">
                {/* North America */}
                <path d="M150,120 C160,100 180,85 200,80 C220,75 250,78 270,85 C280,88 285,92 290,98 C295,105 298,115 295,125 C292,135 288,140 280,148 C275,152 268,158 260,162 C250,168 240,175 230,180 C220,185 210,190 200,195 C190,198 178,200 168,195 C158,190 152,180 148,170 C144,160 142,148 145,138 C147,130 148,125 150,120Z" />
                {/* USA */}
                <path d="M130,155 C140,148 155,145 170,148 C185,150 200,158 215,165 C230,172 240,180 248,190 C255,200 258,210 255,220 C252,228 245,232 235,235 C225,238 212,238 200,235 C188,232 178,225 168,218 C158,210 148,200 142,190 C136,180 132,168 130,155Z" />
                {/* South America */}
                <path d="M230,270 C238,258 248,250 258,248 C268,246 275,250 280,258 C285,266 288,278 290,290 C292,302 290,315 285,328 C280,340 272,350 265,358 C258,365 250,370 242,368 C234,365 228,358 225,348 C222,338 222,325 224,312 C226,298 228,282 230,270Z" />
                {/* Europe */}
                <path d="M440,95 C450,88 462,85 475,88 C488,90 498,98 505,108 C510,115 512,125 508,132 C504,138 498,142 490,145 C482,148 472,148 465,145 C458,142 452,135 448,128 C444,120 442,108 440,95Z" />
                {/* UK */}
                <path d="M430,85 C432,78 436,74 442,72 C448,70 452,74 454,80 C456,86 455,92 452,98 C449,102 445,105 440,104 C435,102 432,98 430,92 C429,88 429,86 430,85Z" />
                {/* Africa */}
                <path d="M460,180 C468,170 480,165 492,168 C504,170 512,180 518,192 C524,204 528,220 528,238 C528,255 524,272 518,288 C512,302 504,312 494,318 C484,322 474,320 466,312 C458,304 452,290 450,275 C448,258 450,240 454,222 C457,205 458,190 460,180Z" />
                {/* Asia / India */}
                <path d="M620,130 C635,122 655,118 675,120 C695,122 712,130 725,142 C738,154 745,170 748,188 C750,205 745,222 738,235 C730,248 718,258 705,262 C692,265 678,262 665,255 C652,248 642,238 635,225 C628,212 624,198 622,182 C620,168 620,150 620,130Z" />
                {/* India subcontinent */}
                <path d="M665,200 C672,195 680,194 688,198 C696,202 700,212 702,225 C704,238 702,252 698,265 C694,275 688,282 680,280 C672,278 666,270 662,258 C658,246 658,232 660,220 C661,210 663,204 665,200Z" />
                {/* East Asia */}
                <path d="M740,110 C752,105 768,105 780,110 C792,115 800,125 805,138 C810,150 810,165 805,175 C800,185 792,190 782,188 C772,186 762,180 755,170 C748,160 744,148 742,135 C740,125 740,115 740,110Z" />
                {/* Australia */}
                <path d="M780,320 C792,312 808,310 822,315 C835,320 845,332 848,345 C850,358 845,370 835,378 C825,385 812,385 800,380 C788,375 780,365 776,352 C772,340 774,328 780,320Z" />
              </g>

              {/* Connection lines between offices */}
              <g>
                <line x1="215" y1="185" x2="445" y2="90" stroke="rgba(56,189,248,0.25)" strokeWidth="1" strokeDasharray="4,4">
                  <animate attributeName="stroke-dashoffset" from="8" to="0" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="445" y1="90" x2="680" y2="210" stroke="rgba(56,189,248,0.25)" strokeWidth="1" strokeDasharray="4,4">
                  <animate attributeName="stroke-dashoffset" from="8" to="0" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="215" y1="185" x2="680" y2="210" stroke="rgba(56,189,248,0.25)" strokeWidth="1" strokeDasharray="4,4">
                  <animate attributeName="stroke-dashoffset" from="8" to="0" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="215" y1="185" x2="255" y2="175" stroke="rgba(56,189,248,0.25)" strokeWidth="1" strokeDasharray="4,4">
                  <animate attributeName="stroke-dashoffset" from="8" to="0" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="255" y1="175" x2="445" y2="90" stroke="rgba(56,189,248,0.25)" strokeWidth="1" strokeDasharray="4,4">
                  <animate attributeName="stroke-dashoffset" from="8" to="0" dur="2s" repeatCount="indefinite" />
                </line>
              </g>

              {/* Office markers with pulse animation */}
              {/* Dallas */}
              <g>
                <circle cx="215" cy="185" r="12" fill="rgba(56,189,248,0.15)">
                  <animate attributeName="r" values="12;18;12" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="215" cy="185" r="5" fill="#38BDF8" />
                <circle cx="215" cy="185" r="2.5" fill="white" />
              </g>
              {/* New York */}
              <g>
                <circle cx="255" cy="175" r="12" fill="rgba(56,189,248,0.15)">
                  <animate attributeName="r" values="12;18;12" dur="3s" begin="0.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" begin="0.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="255" cy="175" r="5" fill="#38BDF8" />
                <circle cx="255" cy="175" r="2.5" fill="white" />
              </g>
              {/* London */}
              <g>
                <circle cx="445" cy="90" r="12" fill="rgba(245,158,11,0.15)">
                  <animate attributeName="r" values="12;18;12" dur="3s" begin="1s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" begin="1s" repeatCount="indefinite" />
                </circle>
                <circle cx="445" cy="90" r="5" fill="#F59E0B" />
                <circle cx="445" cy="90" r="2.5" fill="white" />
              </g>
              {/* Delhi */}
              <g>
                <circle cx="680" cy="210" r="12" fill="rgba(99,102,241,0.15)">
                  <animate attributeName="r" values="12;18;12" dur="3s" begin="1.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" begin="1.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="680" cy="210" r="5" fill="#6366F1" />
                <circle cx="680" cy="210" r="2.5" fill="white" />
              </g>

              {/* City labels */}
              <text x="215" y="210" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="Inter,sans-serif">Dallas</text>
              <text x="255" y="162" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="Inter,sans-serif">New York</text>
              <text x="445" y="78" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="Inter,sans-serif">London</text>
              <text x="680" y="235" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="Inter,sans-serif">Delhi</text>
            </svg>
          </div>

          {/* Office cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {offices.map(({ city, flag }) => (
              <div key={city} className="text-center rounded-xl p-4"
                style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}>
                <span className="text-2xl mb-2 block">{flag}</span>
                <p className="text-white font-bold text-sm">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Do ─────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="tag mx-auto mb-5">What We Do</div>
            <h2 className="section-title mb-4">
              Your Salesforce Partner for<br />
              <span className="gradient-text">AI-Powered Growth</span>
            </h2>
            <p className="section-sub">
              We help businesses cut costs, close more deals, and scale operations
              with Salesforce and Agentforce - from strategy to deployment to ongoing optimisation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto mb-10">
            {capabilities.map(({ icon, title, desc }) => (
              <div key={title} className="glass-card p-6 group hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                  style={{ backgroundColor: 'rgba(1,118,211,0.08)', border: '1px solid rgba(1,118,211,0.15)', color: '#0176D3' }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#0176D3'; e.currentTarget.style.color = 'white' }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(1,118,211,0.08)'; e.currentTarget.style.color = '#0176D3' }}>
                  {icon}
                </div>
                <h3 className="font-semibold mb-2" style={{ color: '#032D60' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/contact" className="btn-primary">
              Work With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Expertise Meets Knowledge ────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="glow-dot w-[350px] h-[350px] bottom-0 right-0"
          style={{ backgroundColor: 'rgba(99,102,241,0.06)' }} />
        <div className="section-wrap relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="tag mb-5">
                <Star className="w-3.5 h-3.5" />
                Our Expertise
              </div>
              <h2 className="section-title mb-6">
                Expertise Meets <span className="gradient-text">Knowledge</span>
              </h2>
              <p className="section-sub mb-6">
                Multiple decades in the financial sector. Leading teams and building systems.
                60+ Salesforce certifications in-house and a genuine enjoyment of the work
                we get to do.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
                We are fortunate to have the skills and experience within our company to
                serve clients across industries - from enterprise financial institutions to
                high-growth technology businesses. Every project benefits from the full
                depth of our collective knowledge.
              </p>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: '60+',    label: 'Salesforce Certifications',     color: '#0176D3' },
                { value: '27',     label: 'Team Members Globally',         color: '#6366F1' },
                { value: '4',      label: 'Global Office Locations',       color: '#06B6D4' },
                { value: '150+',   label: 'Successful Implementations',    color: '#F59E0B' },
              ].map(({ value, label, color }) => (
                <div key={label} className="glass-card p-6 text-center">
                  <p className="text-4xl font-black mb-2" style={{ color }}>{value}</p>
                  <p className="text-sm font-medium" style={{ color: '#475569' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="section-wrap relative z-10">
          <div className="text-center mb-14">
            <div className="tag mx-auto mb-5">What Drives Us</div>
            <h2 className="section-title">Our Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="glass-card p-6 group hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                  style={{ backgroundColor: 'rgba(1,118,211,0.08)', border: '1px solid rgba(1,118,211,0.15)', color: '#0176D3' }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#0176D3'; e.currentTarget.style.color = 'white' }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(1,118,211,0.08)'; e.currentTarget.style.color = '#0176D3' }}
                >
                  {icon}
                </div>
                <h3 className="font-semibold mb-2" style={{ color: '#032D60' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team Members ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="section-wrap">
          <div className="text-center mb-14">
            <div className="tag mx-auto mb-5">
              <Users className="w-3.5 h-3.5" />
              Our People
            </div>
            <h2 className="section-title mb-4">Meet the Team</h2>
            <p className="section-sub max-w-2xl mx-auto">
              27 experts across Dallas, Delhi, London, and New York - united by a shared passion
              for Salesforce, Agentforce, and delivering outcomes that matter.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {team.map(({ id, name, role, photo, linkedin }) => (
              <div key={id}
                className="glass-card p-4 flex flex-col items-center text-center group cursor-pointer"
                style={{ transition: 'transform 0.25s ease, box-shadow 0.25s ease' }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.12) translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(1,118,211,0.18)'
                  e.currentTarget.style.zIndex = '10'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1) translateY(0)'
                  e.currentTarget.style.boxShadow = ''
                  e.currentTarget.style.zIndex = ''
                }}
              >
                {/* Photo / Placeholder */}
                <div className="w-16 h-16 rounded-2xl mb-3 overflow-hidden relative shrink-0"
                  style={{ backgroundColor: '#EFF6FF', border: '1px solid rgba(1,118,211,0.12)' }}>
                  {photo ? (
                    <img src={photo} alt={name} className="w-full h-full object-cover" />
                  ) : (
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                      <rect width="64" height="64" fill="#EFF6FF" />
                      <circle cx="32" cy="24" r="11" fill="rgba(1,118,211,0.20)" />
                      <ellipse cx="32" cy="58" rx="20" ry="13" fill="rgba(1,118,211,0.13)" />
                    </svg>
                  )}
                </div>

                {/* Name & Role */}
                <p className="text-xs font-bold leading-tight" style={{ color: '#032D60' }}>{name}</p>
                <p className="text-[10px] mt-0.5 leading-tight" style={{ color: '#64748B' }}>{role}</p>

                {/* LinkedIn - visible on hover */}
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="mt-2.5 flex items-center gap-1 text-[10px] font-semibold px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200"
                  style={{ backgroundColor: '#0176D3', color: 'white' }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#032D60' }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#0176D3' }}
                >
                  <Linkedin className="w-3 h-3" /> LinkedIn
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-sm mt-10" style={{ color: '#94A3B8' }}>
            Want to connect with a specific team member? Reach out to{' '}
            <a href="mailto:hello@cloudsheer.com" className="font-medium"
              style={{ color: '#0176D3' }}>
              hello@cloudsheer.com
            </a>
          </p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: '#032D60' }}>
        <div className="section-wrap text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Want to join the <span className="gradient-text-gold">Agentforce revolution?</span>
          </h2>
          <p className="mb-8" style={{ color: 'rgba(148,196,255,0.80)' }}>
            Whether you are a client or a consultant - we would love to talk.
          </p>
          <a href="https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="btn-gold">
            Book a Call <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  )
}
