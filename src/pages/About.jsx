import { Link } from 'react-router-dom'
import { ArrowRight, Award, Heart, Lightbulb, Users, Sparkles, MapPin, Star, Linkedin } from 'lucide-react'

const values = [
  { icon: <Sparkles className="w-5 h-5" />, title: 'Agentforce-First Thinking', desc: 'Every engagement starts by asking: where can an AI agent create the most value? We are built around this question.' },
  { icon: <Award className="w-5 h-5" />,    title: 'Excellence',               desc: 'We hold ourselves to the highest standard - in our code quality, solution design, and client communication.' },
  { icon: <Heart className="w-5 h-5" />,    title: 'True Partnership',         desc: 'We invest in long-term relationships, not one-off projects. Your success is the only metric we care about.' },
  { icon: <Lightbulb className="w-5 h-5" />,title: 'Relentless Innovation',    desc: 'We stay at the frontier of Salesforce and Agentforce, bringing the latest capabilities to our clients first.' },
  { icon: <Users className="w-5 h-5" />,    title: 'People-First AI',          desc: 'AI agents should empower people, not replace them. We design every agent to make your team more effective.' },
]

const milestones = [
  { year: '2012', text: 'Founded as a boutique Salesforce consultancy' },
  { year: '2015', text: 'Achieved Salesforce Summit (Platinum) Partner status' },
  { year: '2018', text: 'Expanded to 50+ certified consultants across 12 industries' },
  { year: '2021', text: 'Launched dedicated Data Cloud & Einstein Analytics practice' },
  { year: '2024', text: "Restructured as the world's first Agentforce-centric partner" },
  { year: '2025', text: '150+ implementations, 98% client CSAT, agents running 24/7' },
]

const offices = [
  { city: 'Dallas',   flag: '🇺🇸' },
  { city: 'Delhi',    flag: '🇮🇳' },
  { city: 'London',   flag: '🇬🇧' },
  { city: 'New York', flag: '🇺🇸' },
]

const team = [
  { id: 1,  name: 'Tushar Sharma',      role: 'CEO',                              photo: null, linkedin: '#' },
  { id: 2,  name: 'Rajat Sharma',       role: 'Technical Delivery Head',          photo: null, linkedin: '#' },
  { id: 3,  name: 'Bharat Sharma',      role: 'Head of Operations - UK',          photo: null, linkedin: '#' },
  { id: 4,  name: 'Shubham Bansal',     role: 'Growth & Marketing - Head',        photo: null, linkedin: '#' },
  { id: 5,  name: 'Shainkey Pawaiya',   role: 'Project Manager',                  photo: null, linkedin: '#' },
  { id: 6,  name: 'Pranay Pandey',      role: 'Team Lead - QA',                   photo: null, linkedin: '#' },
  { id: 7,  name: 'Arihanta Jain',      role: 'Assistant Manager HR',             photo: null, linkedin: '#' },
  { id: 8,  name: 'Arti Bisht',         role: 'Senior Accountant',                photo: null, linkedin: '#' },
  { id: 9,  name: 'Shivam Goel',        role: 'Strategy & Growth - Associate',    photo: null, linkedin: '#' },
  { id: 10, name: 'Prateek Jain',       role: 'Growth & Marketing - Associate',   photo: null, linkedin: '#' },
  { id: 11, name: 'Tammana Gautam',     role: 'BA - Salesforce',                  photo: null, linkedin: '#' },
  { id: 12, name: 'Vishal Yadav',       role: 'BA - Salesforce',                  photo: null, linkedin: '#' },
  { id: 13, name: 'Abhishek Kaplesh',   role: 'Salesforce Developer',             photo: null, linkedin: '#' },
  { id: 14, name: 'Ishit Bansal',       role: 'Salesforce Developer',             photo: null, linkedin: '#' },
  { id: 15, name: 'Tania Arora',        role: 'Salesforce Developer',             photo: null, linkedin: '#' },
  { id: 16, name: 'Arun Kumar',         role: 'Associate Salesforce Developer',   photo: null, linkedin: '#' },
  { id: 17, name: 'Divyansh Sharma',    role: 'Associate Salesforce Developer',   photo: null, linkedin: '#' },
  { id: 18, name: 'Gaurav Khanna',      role: 'Associate Salesforce Developer',   photo: null, linkedin: '#' },
  { id: 19, name: 'Piyush Kumar Singh', role: 'Associate Salesforce Developer',   photo: null, linkedin: '#' },
  { id: 20, name: 'Rahul Babbar',       role: 'Associate Salesforce Developer',   photo: null, linkedin: '#' },
  { id: 21, name: 'Himanshu Yadav',     role: 'QA',                               photo: null, linkedin: '#' },
  { id: 22, name: 'Manish Pavadiya',    role: 'QA',                               photo: null, linkedin: '#' },
]

export default function About() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="glow-dot w-[500px] h-[500px] top-[-150px] left-[50%] -translate-x-1/2"
          style={{ backgroundColor: 'rgba(1,118,211,0.08)' }} />
        <div className="section-wrap relative z-10 text-center max-w-3xl mx-auto">
          <div className="tag mx-auto mb-6">Our Story</div>
          <h1 className="section-title mb-5">
            Built by Believers in <span className="gradient-text">Autonomous AI</span>
          </h1>
          <p className="section-sub">
            We did not just add Agentforce to our service list - we rebuilt our entire
            practice around it. Because we believe it is the most important shift in
            enterprise software since the cloud itself.
          </p>
        </div>
      </section>

      {/* ── Connected Across the Globe ───────────────────────── */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#032D60 0%,#0A3F80 60%,#0176D3 100%)' }}>
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="glow-dot w-[400px] h-[400px] top-[-100px] right-[-80px]"
          style={{ backgroundColor: '#38BDF8', opacity: 0.12 }} />
        <div className="section-wrap relative z-10 text-center">
          <div className="tag-white mx-auto mb-6 inline-flex">
            <MapPin className="w-3.5 h-3.5" />
            Global Presence
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Connected Across the Globe
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {offices.map(({ city, flag }, i) => (
              <div key={city} className="flex items-center gap-2">
                <span className="inline-flex items-center gap-2 text-white font-semibold text-lg">
                  <span>{flag}</span> {city}
                </span>
                {i < offices.length - 1 && (
                  <span className="text-blue-400 font-light text-xl select-none">•</span>
                )}
              </div>
            ))}
          </div>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'rgba(148,196,255,0.85)' }}>
            Cloudsheer came together out of a shared belief that collaboration and team
            dynamics are the way to help our clients. Our globally distributed team means
            we bring diverse perspectives and round-the-clock capability to every engagement.
          </p>
        </div>
      </section>

      {/* ── Story + Timeline ─────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="section-wrap grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="tag mb-5">Who We Are</div>
            <h2 className="section-title mb-6">
              A Decade of Salesforce.<br />
              <span className="gradient-text">A Mission for AI.</span>
            </h2>
            <div className="space-y-4 leading-relaxed text-sm" style={{ color: '#64748B' }}>
              <p>
                Cloudsheer Consulting was founded with a single belief: that Salesforce,
                implemented correctly, can transform any organisation. Over the next decade
                we built a reputation for rigorous delivery, deep technical expertise, and
                long-term client partnerships.
              </p>
              <p>
                When Salesforce launched Agentforce, we saw something different to most
                partners - not just a new feature, but a fundamental shift in how work
                gets done. We made a deliberate decision to rebuild our entire practice
                around it.
              </p>
              <p>
                Today, Cloudsheer is the world's first Agentforce-centric consulting
                partner. Every engagement we take on asks the same first question:
                where can an autonomous AI agent create the most value for your business?
              </p>
            </div>
            <Link to="/contact" className="btn-primary mt-8">
              Work With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px"
              style={{ background: 'linear-gradient(to bottom,#0176D3,#0099E6,#6366F1)' }} />
            <div className="space-y-8 pl-12">
              {milestones.map(({ year, text }) => (
                <div key={year} className="relative">
                  <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-white border-2"
                    style={{ borderColor: '#0176D3', boxShadow: '0 0 0 4px rgba(1,118,211,0.12)' }} />
                  <p className="text-sm font-bold mb-1" style={{ color: '#0176D3' }}>{year}</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{text}</p>
                </div>
              ))}
            </div>
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
                { value: '22',     label: 'Team Members Globally',         color: '#6366F1' },
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
              22 experts across Dallas, Delhi, London, and New York - united by a shared passion
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
