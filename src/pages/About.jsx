import { Link } from 'react-router-dom'
import { ArrowRight, Award, Heart, Lightbulb, Users, Sparkles, MapPin, Star } from 'lucide-react'
import FAQ from '../components/FAQ'

const aboutFaqs = [
  { q: 'How many Salesforce certifications does your team hold?', a: '60+ certifications across Sales Cloud, Service Cloud, Marketing Cloud, Platform Developer, Agentforce Specialist, and Data Cloud Consultant.' },
  { q: 'What industries do you work with?', a: 'Financial services, retail/e-commerce, healthcare, B2B SaaS, manufacturing, and professional services.' },
  { q: 'Where are your offices located?', a: 'Dallas (USA), Delhi/Noida (India), London (UK), and New York (USA). Our distributed team delivers round-the-clock coverage across 4 time zones.' },
  { q: 'Can I speak to a specific team member before engaging?', a: 'Yes. Book a discovery call and we will match you with the architect most relevant to your project.' },
]

const values = [
  { icon: <Sparkles className="w-5 h-5" />, title: 'Agentforce-First Thinking', desc: 'Every engagement starts by asking: where can an AI agent create the most value? We are built around this question.' },
  { icon: <Award className="w-5 h-5" />,    title: 'Excellence',               desc: 'We hold ourselves to the highest standard - in our code quality, solution design, and client communication.' },
  { icon: <Heart className="w-5 h-5" />,    title: 'True Partnership',         desc: 'We invest in long-term relationships, not one-off projects. Your success is the only metric we care about.' },
  { icon: <Lightbulb className="w-5 h-5" />,title: 'Relentless Innovation',    desc: 'We stay at the frontier of Salesforce and Agentforce, bringing the latest capabilities to our clients first.' },
  { icon: <Users className="w-5 h-5" />,    title: 'People-First AI',          desc: 'Agentforce should empower people, not replace them. We design every agent to make your team more effective.' },
]

const capabilities = [
  { icon: <Sparkles className="w-5 h-5" />, title: 'Agentforce Deployment', desc: 'Deploy autonomous agents that handle support, sales, and operations 24/7 - so your team focuses on growth.' },
  { icon: <Award className="w-5 h-5" />,    title: 'Full Salesforce Suite',   desc: 'Sales Cloud, Service Cloud, Marketing Cloud, Commerce Cloud, Experience Cloud, Analytics - all connected.' },
  { icon: <Users className="w-5 h-5" />,    title: 'Strategy & Implementation', desc: 'From discovery to deployment in 4-6 weeks. We design, build, test, and launch - with measurable ROI from day one.' },
  { icon: <Heart className="w-5 h-5" />,    title: 'Ongoing Optimization',    desc: 'Continuous monitoring, performance tuning, and new agent deployments as your business scales.' },
]

const offices = [
  { city: 'Dallas',   flag: '🇺🇸' },
  { city: 'Delhi',    flag: '🇮🇳' },
  { city: 'London',   flag: '🇬🇧' },
  { city: 'New York', flag: '🇺🇸' },
]

const BASE = import.meta.env.BASE_URL
const team = [
  { id: 1,  name: 'Tushar Sharma',        role: 'CEO',                              photo: BASE + 'team-opt/Tushar Sharma.webp',        linkedin: 'https://www.linkedin.com/company/cloud-sheer/' },
  { id: 2,  name: 'Rajat Sharma',         role: 'Technical Delivery Head',          photo: BASE + 'team-opt/Rajat Sharma.webp',         linkedin: 'https://www.linkedin.com/company/cloud-sheer/' },
  { id: 3,  name: 'Shubham Bansal',       role: 'Growth & Marketing - Head',        photo: BASE + 'team-opt/Shubham Bansal.webp',       linkedin: 'https://www.linkedin.com/company/cloud-sheer/' },
  { id: 4,  name: 'Bharat Sharma',       role: 'Head of Operations',               photo: BASE + 'team-opt/Bharat Sharma.webp',       linkedin: 'https://www.linkedin.com/company/cloud-sheer/' },
  { id: 4,  name: 'Ankur Trivedi',        role: 'Salesforce Developer',             photo: BASE + 'team-opt/Ankur Trivedi.webp',        linkedin: 'https://www.linkedin.com/company/cloud-sheer/' },
  { id: 5,  name: 'Shainkey Pawaiya',     role: 'Project Manager',                  photo: BASE + 'team-opt/Shainkey Pawaiya.webp',     linkedin: 'https://www.linkedin.com/company/cloud-sheer/' },
  { id: 6,  name: 'Pranay Pandey',        role: 'Team Lead - QA',                   photo: BASE + 'team-opt/Pranay Pandey.webp',        linkedin: 'https://www.linkedin.com/company/cloud-sheer/' },
  { id: 7,  name: 'Arihanta Jain',        role: 'Assistant Manager HR',             photo: BASE + 'team-opt/Arihanta Jain.webp',        linkedin: 'https://www.linkedin.com/company/cloud-sheer/' },
  { id: 9,  name: 'Shivam Goel',          role: 'Strategy & Growth - Associate',    photo: BASE + 'team-opt/Shivam Goel.webp',          linkedin: 'https://www.linkedin.com/company/cloud-sheer/' },
  { id: 10, name: 'Prateek Jain',         role: 'Growth & Marketing - Associate',   photo: BASE + 'team-opt/Prateek Jain.webp',         linkedin: 'https://www.linkedin.com/company/cloud-sheer/' },
  { id: 11, name: 'Tammana Gautam',       role: 'BA - Salesforce',                  photo: BASE + 'team-opt/Tammana Gautam.webp',       linkedin: 'https://www.linkedin.com/company/cloud-sheer/' },
  { id: 12, name: 'Vishal Yadav',         role: 'BA - Salesforce',                  photo: BASE + 'team-opt/Vishal Yadav.webp',         linkedin: 'https://www.linkedin.com/company/cloud-sheer/' },
  { id: 13, name: 'Abhishek Kaplesh',     role: 'Salesforce Developer',             photo: BASE + 'team-opt/Abhishek Kaplesh.webp',     linkedin: 'https://www.linkedin.com/company/cloud-sheer/' },
  { id: 14, name: 'Ishit Bansal',         role: 'Salesforce Developer',             photo: BASE + 'team-opt/Ishit Bansal.webp',         linkedin: 'https://www.linkedin.com/company/cloud-sheer/' },
  { id: 15, name: 'Arun Kumar',           role: 'Salesforce Developer',              photo: BASE + 'team-opt/Arun Kumar.webp',           linkedin: 'https://www.linkedin.com/company/cloud-sheer/' },
  { id: 16, name: 'Divyansh Sharma',      role: 'Salesforce Developer',              photo: BASE + 'team-opt/Divyansh Sharma.webp',      linkedin: 'https://www.linkedin.com/company/cloud-sheer/' },
  { id: 17, name: 'Gaurav Khanna',        role: 'Salesforce Developer',              photo: BASE + 'team-opt/Gaurav Khanna.webp',        linkedin: 'https://www.linkedin.com/company/cloud-sheer/' },
  { id: 18, name: 'Piyush Kumar Singh',   role: 'Salesforce Developer',              photo: BASE + 'team-opt/Piyush Kumar Singh.webp',   linkedin: 'https://www.linkedin.com/company/cloud-sheer/' },
  { id: 19, name: 'Rahul Babbar',         role: 'Salesforce Developer',              photo: BASE + 'team-opt/Rahul Babbar.webp',         linkedin: 'https://www.linkedin.com/company/cloud-sheer/' },
  { id: 20, name: 'Vansh Nandan Mathur',  role: 'Associate Salesforce Developer',   photo: BASE + 'team-opt/Vansh Nandan Mathur.webp',  linkedin: 'https://www.linkedin.com/company/cloud-sheer/' },
  { id: 21, name: 'Aayush Gupta',         role: 'Associate Salesforce Developer',   photo: BASE + 'team-opt/Aayush Gupta.webp',         linkedin: 'https://www.linkedin.com/company/cloud-sheer/' },
  { id: 22, name: 'Himanshu Yadav',       role: 'QA',                               photo: BASE + 'team-opt/Himanshu Yadav.webp',       linkedin: 'https://www.linkedin.com/company/cloud-sheer/' },
  { id: 23, name: 'Manish Pavadiya',      role: 'Salesforce Consultant',             photo: BASE + 'team-opt/Manish Pavadiya.webp',      linkedin: 'https://www.linkedin.com/company/cloud-sheer/' },
  { id: 24, name: 'Sweety Singh',         role: 'Associate Salesforce Developer',    photo: BASE + 'team-opt/Sweety Singh.webp',         linkedin: 'https://www.linkedin.com/company/cloud-sheer/' },
  { id: 25, name: 'Alka Yadav',           role: 'HR Associate',                      photo: BASE + 'team-opt/Alka Yadav.webp',           linkedin: 'https://www.linkedin.com/company/cloud-sheer/' },
  { id: 26, name: 'Bhu Garima Yadav',     role: 'Associate Salesforce Developer',    photo: BASE + 'team-opt/Bhu Garima Yadav.webp',     linkedin: 'https://www.linkedin.com/company/cloud-sheer/' },
  { id: 27, name: 'Utkarsh',              role: 'Salesforce Developer',             photo: BASE + 'team-opt/Utkarsh.webp',              linkedin: 'https://www.linkedin.com/company/cloud-sheer/' },
]

export default function About() {
  return (
    <>
      {/* spacer for navbar */}
      <div className="pt-24" />

      {/* ── Connected Across the Globe ───────────────────────── */}
      <section className="py-12 sm:py-16 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#032D60 0%,#0A3F80 60%,#0176D3 100%)' }}>
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="glow-dot w-[400px] h-[400px] top-[-100px] right-[-80px]"
          style={{ backgroundColor: '#38BDF8', opacity: 0.12 }} />
        <div className="section-wrap relative z-10 text-center">
          <div className="tag-white mx-auto mb-6 inline-flex">
            <MapPin className="w-3.5 h-3.5" />
            Global Presence
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-white mb-4">
            Connected Across the Globe
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {offices.map(({ city, flag }, i) => (
              <div key={city} className="flex items-center gap-2">
                <span className="inline-flex items-center gap-2 text-white font-semibold text-base sm:text-lg">
                  <span>{flag}</span> {city}
                </span>
                {i < offices.length - 1 && (
                  <span className="text-blue-400 font-light text-xl select-none">&bull;</span>
                )}
              </div>
            ))}
          </div>
          <p className="text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'rgba(148,196,255,0.85)' }}>
            Cloudsheer came together out of a shared belief that collaboration and team
            dynamics are the way to help our clients. Our globally distributed team means
            we bring diverse perspectives and round-the-clock capability to every engagement.
          </p>
        </div>
      </section>
      {/* ── What We Do ─────────────────────────────────────── */}
      <section className="py-10 sm:py-16" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="tag mx-auto mb-5">What We Do</div>
            <h2 className="section-title mb-4">
              Your Salesforce Partner for<br />
              <span className="gradient-text">AI-Powered Growth</span>
            </h2>
            <p className="section-sub">
              We help businesses cut costs, close more deals, and scale operations
              with Salesforce and Agentforce - from strategy to deployment to ongoing optimization.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto mb-10">
            {capabilities.map(({ icon, title, desc }) => (
              <div key={title} className="glass-card p-4 sm:p-6 group hover:-translate-y-1 transition-all duration-300">
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
      <section className="py-10 sm:py-16 bg-white relative overflow-hidden">
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
                60+ Salesforce certifications. 10 clouds. 4 offices. Every project gets
                a senior architect - not a junior learning on your org.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
                Our team has delivered Salesforce across financial services, retail, healthcare,
                SaaS, and manufacturing. That cross-industry experience means we bring
                proven patterns to your project instead of figuring it out as we go.
              </p>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: '60+',    label: 'Salesforce Certifications',     color: '#0176D3' },
                { value: '40+',    label: 'Team Members Globally',         color: '#6366F1' },
                { value: '4',      label: 'Global Office Locations',       color: '#06B6D4' },
                { value: '250+',   label: 'Successful Projects',    color: '#F59E0B' },
              ].map(({ value, label, color }) => (
                <div key={label} className="glass-card p-6 text-center">
                  <p className="text-2xl sm:text-4xl 2xl:text-5xl font-black mb-2" style={{ color }}>{value}</p>
                  <p className="text-sm font-medium" style={{ color: '#475569' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────── */}
      <section className="py-10 sm:py-16 relative overflow-hidden" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="section-wrap relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <div className="tag mx-auto mb-5">What Drives Us</div>
            <h2 className="section-title">Our Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="glass-card p-4 sm:p-6 group hover:-translate-y-1 transition-all duration-300">
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
      <section className="py-10 sm:py-16 bg-white">
        <div className="section-wrap">
          <div className="text-center mb-8 sm:mb-12">
            <div className="tag mx-auto mb-5">
              <Users className="w-3.5 h-3.5" />
              Our People
            </div>
            <h2 className="section-title mb-4">Meet the Team</h2>
            <p className="section-sub max-w-2xl mx-auto">
              40+ experts across Dallas, Delhi, London, and New York - united by a shared passion
              for Salesforce, Agentforce, and delivering outcomes that matter.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 2xl:grid-cols-9 gap-4">
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
                    <img loading="lazy" src={photo} alt={name} className="w-full h-full object-cover" />
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

      <FAQ title="About Cloudsheer" items={aboutFaqs} />

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16" style={{ backgroundColor: '#032D60' }}>
        <div className="section-wrap text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Ready to See What We Can <span className="gradient-text-gold">Build for You?</span>
          </h2>
          <p className="mb-8" style={{ color: 'rgba(148,196,255,0.80)' }}>
            30-minute call with a Salesforce architect. We will assess your setup, identify quick wins, and give you a clear plan.
          </p>
          <a href="https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="btn-gold">
            Book Free Discovery Call <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  )
}
