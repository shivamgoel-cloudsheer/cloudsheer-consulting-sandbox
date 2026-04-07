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
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="section-wrap relative z-10">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-black mb-2">
              <span className="gradient-text">Connected</span>{' '}
              <span style={{ color: '#032D60' }}>Across the Globe</span>
            </h2>
            <p className="text-sm font-semibold mb-2" style={{ color: '#F59E0B' }}>
              Dallas &bull; Delhi &bull; London &bull; New York
            </p>
            <p className="text-sm max-w-lg mx-auto" style={{ color: '#64748B' }}>
              Cloudsheer came together out of a shared belief that collaboration and team
              dynamics are the way to help our clients.
            </p>
          </div>

          {/* World Map */}
          <div className="relative max-w-5xl mx-auto">
            <svg viewBox="0 0 1200 600" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Detailed world map - filled continents */}
              <g fill="#C7D9F0" opacity="0.7">
                {/* North America */}
                <path d="M120,90 L135,70 L160,55 L185,50 L210,48 L235,52 L258,60 L275,55 L290,60 L300,68 L305,80 L310,92 L305,105 L295,110 L288,120 L290,130 L298,138 L305,148 L300,160 L288,165 L275,170 L265,178 L260,190 L255,200 L248,210 L240,215 L228,218 L218,222 L210,230 L200,235 L188,232 L178,225 L165,218 L155,212 L148,205 L142,195 L135,185 L130,175 L125,162 L118,150 L115,138 L112,125 L115,110 L118,100 Z" />
                {/* Greenland */}
                <path d="M280,30 L300,25 L325,28 L340,35 L348,48 L345,60 L335,68 L320,70 L305,65 L292,55 L285,42 Z" />
                {/* Central America */}
                <path d="M200,235 L210,240 L218,248 L225,255 L230,262 L228,268 L222,272 L215,268 L208,262 L202,255 L198,248 L196,242 Z" />
                {/* South America */}
                <path d="M228,275 L240,270 L255,272 L268,280 L278,292 L285,308 L290,325 L292,345 L290,365 L285,382 L278,398 L268,412 L258,422 L248,428 L238,430 L228,425 L222,415 L218,400 L215,382 L218,362 L220,342 L222,322 L225,302 L226,288 Z" />
                {/* Europe */}
                <path d="M450,58 L462,52 L478,50 L492,52 L505,58 L515,65 L522,75 L525,85 L528,98 L525,108 L518,115 L510,120 L500,125 L490,128 L478,130 L468,128 L458,122 L450,115 L445,108 L442,98 L440,88 L442,78 L445,68 Z" />
                {/* UK & Ireland */}
                <path d="M430,62 L438,55 L445,52 L450,55 L452,62 L450,70 L445,76 L438,78 L432,75 L428,68 Z" />
                <path d="M422,65 L428,60 L432,62 L430,68 L425,72 L420,70 Z" />
                {/* Scandinavia */}
                <path d="M468,28 L478,22 L490,25 L498,32 L502,42 L498,52 L490,48 L482,42 L475,38 L470,32 Z" />
                {/* Africa */}
                <path d="M455,155 L470,148 L488,145 L505,148 L518,155 L528,168 L535,182 L540,200 L542,220 L540,242 L535,262 L528,280 L520,298 L510,312 L498,322 L485,328 L472,325 L462,318 L455,308 L448,295 L445,278 L442,260 L445,240 L448,220 L450,200 L452,178 Z" />
                {/* Middle East */}
                <path d="M540,140 L558,135 L575,138 L588,145 L595,155 L592,168 L585,175 L575,178 L562,175 L550,168 L542,158 L540,148 Z" />
                {/* Russia/Central Asia */}
                <path d="M525,30 L560,25 L600,22 L640,20 L680,22 L720,28 L755,35 L780,42 L795,52 L800,65 L792,75 L778,80 L760,82 L740,80 L718,78 L695,80 L672,82 L648,80 L625,78 L602,75 L580,72 L558,68 L538,62 L528,52 L522,42 Z" />
                {/* India */}
                <path d="M620,145 L638,138 L655,140 L668,148 L678,160 L685,175 L690,192 L688,210 L682,228 L675,242 L665,255 L652,262 L640,258 L632,248 L625,235 L620,218 L618,200 L615,182 L616,165 Z" />
                {/* Southeast Asia */}
                <path d="M700,165 L718,160 L735,162 L748,170 L755,182 L752,195 L745,205 L735,210 L722,208 L712,200 L705,190 L702,178 Z" />
                {/* China/East Asia */}
                <path d="M700,80 L722,72 L745,70 L768,75 L785,85 L795,98 L798,112 L792,125 L782,135 L768,140 L752,142 L738,138 L722,132 L710,122 L702,110 L698,98 L698,88 Z" />
                {/* Japan */}
                <path d="M808,90 L815,85 L822,88 L825,98 L822,110 L818,118 L812,122 L808,115 L805,105 L805,95 Z" />
                {/* Australia */}
                <path d="M760,340 L782,330 L808,325 L832,328 L852,338 L865,352 L868,370 L862,385 L848,395 L830,400 L810,398 L792,390 L778,378 L768,365 L762,350 Z" />
                {/* New Zealand */}
                <path d="M878,395 L885,388 L892,392 L892,402 L888,410 L882,412 L878,405 Z" />
                {/* Indonesia */}
                <path d="M718,275 L735,270 L752,272 L765,278 L768,288 L762,295 L748,298 L732,295 L722,288 L718,280 Z" />
              </g>

              {/* Map pin markers - Pin shape (teardrop) */}
              {/* Dallas - x:210 y:195 */}
              <g>
                <circle cx="210" cy="195" r="18" fill="rgba(3,45,96,0.12)">
                  <animate attributeName="r" values="18;26;18" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.2;0.05;0.2" dur="3s" repeatCount="indefinite" />
                </circle>
                <path d="M210,178 C216.6,178 222,183.4 222,190 C222,198.5 210,210 210,210 C210,210 198,198.5 198,190 C198,183.4 203.4,178 210,178Z" fill="#032D60" />
                <circle cx="210" cy="189" r="4.5" fill="white" />
                <text x="210" y="224" textAnchor="middle" fill="#032D60" fontSize="13" fontWeight="800" fontFamily="Inter,sans-serif">Dallas</text>
              </g>

              {/* New York - x:268 y:178 */}
              <g>
                <circle cx="268" cy="178" r="18" fill="rgba(3,45,96,0.12)">
                  <animate attributeName="r" values="18;26;18" dur="3s" begin="0.7s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.2;0.05;0.2" dur="3s" begin="0.7s" repeatCount="indefinite" />
                </circle>
                <path d="M268,161 C274.6,161 280,166.4 280,173 C280,181.5 268,193 268,193 C268,193 256,181.5 256,173 C256,166.4 261.4,161 268,161Z" fill="#032D60" />
                <circle cx="268" cy="172" r="4.5" fill="white" />
                <text x="268" y="207" textAnchor="middle" fill="#032D60" fontSize="13" fontWeight="800" fontFamily="Inter,sans-serif">New York</text>
              </g>

              {/* London - x:445 y:72 */}
              <g>
                <circle cx="445" cy="72" r="18" fill="rgba(3,45,96,0.12)">
                  <animate attributeName="r" values="18;26;18" dur="3s" begin="1.4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.2;0.05;0.2" dur="3s" begin="1.4s" repeatCount="indefinite" />
                </circle>
                <path d="M445,55 C451.6,55 457,60.4 457,67 C457,75.5 445,87 445,87 C445,87 433,75.5 433,67 C433,60.4 438.4,55 445,55Z" fill="#032D60" />
                <circle cx="445" cy="66" r="4.5" fill="white" />
                <text x="445" y="101" textAnchor="middle" fill="#032D60" fontSize="13" fontWeight="800" fontFamily="Inter,sans-serif">London</text>
              </g>

              {/* Delhi - x:648 y:195 */}
              <g>
                <circle cx="648" cy="195" r="18" fill="rgba(3,45,96,0.12)">
                  <animate attributeName="r" values="18;26;18" dur="3s" begin="2.1s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.2;0.05;0.2" dur="3s" begin="2.1s" repeatCount="indefinite" />
                </circle>
                <path d="M648,178 C654.6,178 660,183.4 660,190 C660,198.5 648,210 648,210 C648,210 636,198.5 636,190 C636,183.4 641.4,178 648,178Z" fill="#032D60" />
                <circle cx="648" cy="189" r="4.5" fill="white" />
                <text x="648" y="224" textAnchor="middle" fill="#032D60" fontSize="13" fontWeight="800" fontFamily="Inter,sans-serif">Delhi</text>
              </g>
            </svg>
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
