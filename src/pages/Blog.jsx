import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Bot, Sparkles, TrendingUp, Database, Users, Zap, CheckCircle2, Award, Quote, Cloud, Layers, Megaphone } from 'lucide-react'
import FAQ from '../components/FAQ'
import BlogCoverArt from '../components/BlogCoverArt'
import { addPageSchema, faqPageSchema } from '../seoConfig'

const blogFaqs = [
  { q: 'Who writes these articles?', a: 'Our team of Salesforce architects and consultants - Rajat Sharma, Tushar Sharma, Shubham Bansal, and Shivam Goel. All content is based on real implementation experience.' },
  { q: 'How often do you publish?', a: 'We aim for 2-3 articles per month covering Agentforce, Salesforce best practices, and implementation guides.' },
  { q: 'Can I suggest a topic?', a: 'Yes! Email hello@cloudsheer.com with your topic idea. We prioritize content that helps Salesforce teams solve real problems.' },
]

const posts = [
  {
    slug: 'hubspot-2025-rebrand-smart-crm-content-data-commerce',
    category: 'HubSpot',
    categoryIcon: <Megaphone className="w-3 h-3" />,
    categoryColor: 'text-orange-600 bg-orange-50 border-orange-200',
    coverType: 'hub-stack',
    title: 'The 2025 HubSpot Rebrand: Smart CRM, Content Hub, Data Hub, Commerce Hub Explained',
    excerpt: 'HubSpot rebranded its core platform in 2024-2025: CMS Hub became Content Hub, Operations Hub became Data Hub, and Smart CRM and Commerce Hub joined the lineup. Here is what actually changed - and what to do about it.',
    image: '/blog/spring-25.svg',
    date: 'May 25, 2026', readTime: '8 min',
    author: 'Shubham Bansal', initials: 'SB', avatarColor: 'from-orange-500 to-rose-500',
    featured: false,
  },
  {
    slug: 'salesforce-to-hubspot-migration-playbook',
    category: 'HubSpot',
    categoryIcon: <Megaphone className="w-3 h-3" />,
    categoryColor: 'text-orange-600 bg-orange-50 border-orange-200',
    coverType: 'migration-arrow',
    coverProps: { leftLabel: 'SF', rightLabel: 'HS' },
    title: 'Salesforce to HubSpot Migration: A Real-World Playbook',
    excerpt: 'We have migrated mid-market teams off Salesforce onto HubSpot more times than we can count. Here is the actual playbook - data model, integrations, parallel-run, cutover - based on what works (and what breaks).',
    image: '/blog/implementation-checklist.svg',
    date: 'Apr 30, 2026', readTime: '11 min',
    author: 'Shivam Goel', initials: 'SG', avatarColor: 'from-cs-purple to-indigo-600',
    featured: false,
  },
  {
    slug: 'bedrock-vs-openai-production-ai-decision-framework',
    category: 'AWS',
    categoryIcon: <Cloud className="w-3 h-3" />,
    categoryColor: 'text-amber-700 bg-amber-50 border-amber-300',
    coverType: 'vs-split',
    coverProps: { leftLabel: 'AWS', rightLabel: 'OAI' },
    title: 'Bedrock vs OpenAI for Production AI: A Decision Framework',
    excerpt: 'Both can ship a working AI feature this quarter. The real question is what happens at month 18 when latency, cost, model swaps, and data residency start to matter. Here is the framework we use.',
    image: '/blog/data-cloud.svg',
    date: 'May 8, 2026', readTime: '9 min',
    author: 'Tushar Sharma', initials: 'TS', avatarColor: 'from-cs-blue to-cs-electric',
    featured: false,
  },
  {
    slug: 'aws-cost-optimization-mid-market-90-days',
    category: 'AWS',
    categoryIcon: <Cloud className="w-3 h-3" />,
    categoryColor: 'text-amber-700 bg-amber-50 border-amber-300',
    coverType: 'cost-chart',
    title: '5 AWS Cost Optimization Wins for Mid-Market in 90 Days',
    excerpt: 'Most mid-market AWS bills have 20-35% pure waste. Here are the five highest-leverage wins we ship in the first 90 days of an engagement - typically before any architectural work begins.',
    image: '/blog/roi-agentforce.svg',
    date: 'Apr 14, 2026', readTime: '7 min',
    author: 'Rajat Sharma', initials: 'RS', avatarColor: 'from-emerald-500 to-teal-500',
    featured: false,
  },
  {
    slug: 'dynamics-365-vs-salesforce-honest-comparison',
    category: 'Microsoft Dynamics',
    categoryIcon: <Layers className="w-3 h-3" />,
    categoryColor: 'text-sky-600 bg-sky-50 border-sky-200',
    coverType: 'vs-split',
    coverProps: { leftLabel: 'D365', rightLabel: 'SF' },
    title: 'Dynamics 365 vs Salesforce: An Honest Side-by-Side',
    excerpt: 'We implement both. The "which is better" question is the wrong one - the right question is which one matches your org, your stack, and your team. Here is the honest comparison we give clients on discovery calls.',
    image: '/blog/agentforce-vs-bots.svg',
    date: 'May 18, 2026', readTime: '10 min',
    author: 'Tushar Sharma', initials: 'TS', avatarColor: 'from-cs-blue to-cs-electric',
    featured: false,
  },
  {
    slug: 'business-central-vs-finance-scm-tier-decision-guide',
    category: 'Microsoft Dynamics',
    categoryIcon: <Layers className="w-3 h-3" />,
    categoryColor: 'text-sky-600 bg-sky-50 border-sky-200',
    coverType: 'tier-decision',
    title: 'Business Central or Finance + SCM? A Tier Decision Guide for Mid-Market',
    excerpt: "Microsoft has two enterprise ERP tracks for very different shapes of business. Picking the wrong one is the most expensive mistake we see in Dynamics rollouts. Here is how to know which fits.",
    image: '/blog/implementation-checklist.svg',
    date: 'May 2, 2026', readTime: '8 min',
    author: 'Shivam Goel', initials: 'SG', avatarColor: 'from-cs-purple to-indigo-600',
    featured: false,
  },
  {
    slug: 'what-is-headless-360-complete-guide',
    category: 'Agentforce',
    categoryIcon: <Bot className="w-3 h-3" />,
    categoryColor: 'text-cs-blue bg-cs-blue/8 border-cs-blue/20',
    coverType: 'api-nodes',
    title: 'What is Headless 360? A Complete Guide',
    excerpt: 'Salesforce Headless 360 makes the entire platform programmable via APIs, MCP tools, and CLI commands. This complete guide breaks down what it is, how it works, and what it means for your business.',
    image: '/blog/spring-25.svg',
    date: 'May 12, 2026', readTime: '9 min',
    author: 'Tushar Sharma', initials: 'TS', avatarColor: 'from-cs-blue to-cs-electric',
    featured: true,
  },
  {
    slug: 'salesforce-headless-360-tdx-2026',
    category: 'Salesforce News',
    categoryIcon: <Zap className="w-3 h-3" />,
    categoryColor: 'text-rose-500 bg-rose-50 border-rose-200',
    coverType: 'release-tag',
    title: 'Salesforce Headless 360: Everything You Need to Know from TDX 2026',
    excerpt: 'Salesforce just announced Headless 360 at TDX 2026 - making the entire platform programmable via APIs, MCP servers, and CLI commands. Here is what it means for your business.',
    image: '/blog/spring-25.svg',
    date: 'Apr 16, 2026', readTime: '7 min',
    author: 'Shivam Goel', initials: 'SG', avatarColor: 'from-cs-purple to-indigo-600',
    featured: false,
  },
  {
    slug: 'getting-started-agentforce-2026',
    category: 'Agentforce',
    categoryIcon: <Bot className="w-3 h-3" />,
    categoryColor: 'text-cs-blue bg-cs-blue/8 border-cs-blue/20',
    coverType: 'agent-bot',
    title: 'Getting Started with Agentforce: A Practical Guide for 2026',
    excerpt: 'Agentforce is reshaping how businesses operate on Salesforce. We walk through the core concepts, agent architecture, and your first deployment steps - based on lessons from 20+ live implementations.',
    image: '/blog/agentforce-guide.svg',
    date: 'Mar 18, 2026', readTime: '8 min',
    author: 'Rajat Sharma', initials: 'RS', avatarColor: 'from-emerald-500 to-teal-500',
    featured: false,
  },
  {
    slug: 'agentforce-vs-einstein-bots',
    category: 'Agentforce',
    categoryIcon: <Bot className="w-3 h-3" />,
    categoryColor: 'text-cs-blue bg-cs-blue/8 border-cs-blue/20',
    coverType: 'vs-split',
    coverProps: { leftLabel: 'AF', rightLabel: 'EB' },
    title: "Agentforce vs Einstein Bots: What's the Difference?",
    image: '/blog/agentforce-vs-bots.svg',
    excerpt: "Many clients ask how Agentforce differs from Einstein Bots. The answer has major implications for your automation strategy - we explain it clearly with real-world examples.",
    date: 'Feb 28, 2026', readTime: '5 min',
    author: 'Rajat Sharma', initials: 'RS', avatarColor: 'from-emerald-500 to-teal-500',
    featured: false,
  },
  {
    slug: 'salesforce-implementation-checklist',
    category: 'Implementation',
    categoryIcon: <Sparkles className="w-3 h-3" />,
    categoryColor: 'text-cs-gold bg-cs-gold/10 border-cs-gold/25',
    coverType: 'checklist',
    title: '10-Point Checklist for a Successful Salesforce Implementation',
    image: '/blog/implementation-checklist.svg',
    excerpt: 'After 250+ implementations we know exactly what separates a smooth go-live from a painful one. Here is our definitive pre-launch checklist.',
    date: 'Feb 10, 2026', readTime: '6 min',
    author: 'Tushar Sharma', initials: 'TS', avatarColor: 'from-cs-blue to-cs-electric',
    featured: false,
  },
  {
    slug: 'roi-agentforce-service-cloud',
    category: 'ROI & Results',
    categoryIcon: <TrendingUp className="w-3 h-3" />,
    categoryColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    coverType: 'growth-chart',
    title: 'Measuring the ROI of Agentforce: What Our Clients Actually See',
    image: '/blog/roi-agentforce.svg',
    excerpt: 'We tracked results across 20 Agentforce deployments - case deflection rates, response times, CSAT scores, and cost savings. Here is what the data shows.',
    date: 'Jan 22, 2026', readTime: '7 min',
    author: 'Tushar Sharma', initials: 'TS', avatarColor: 'from-cs-blue to-cs-electric',
    featured: false,
  },
  {
    slug: 'data-cloud-agentforce',
    category: 'Data Cloud',
    categoryIcon: <Database className="w-3 h-3" />,
    categoryColor: 'text-cs-purple bg-cs-purple/10 border-cs-purple/20',
    coverType: 'data-flow',
    title: 'How Data Cloud Makes Your Agentforce Agents Smarter',
    image: '/blog/data-cloud.svg',
    excerpt: 'Agentforce agents are only as intelligent as the data they can access. We show you exactly how Data Cloud unification supercharges agent responses and personalization.',
    date: 'Jan 8, 2026', readTime: '7 min',
    author: 'Shubham Bansal', initials: 'SB', avatarColor: 'from-orange-500 to-rose-500',
    featured: false,
  },
  {
    slug: 'crm-adoption-agentforce',
    category: 'Strategy',
    categoryIcon: <Users className="w-3 h-3" />,
    categoryColor: 'text-cs-teal bg-cs-teal/10 border-cs-teal/20',
    coverType: 'team-circle',
    title: '7 Ways Agentforce Drives Salesforce Adoption Across Your Team',
    image: '/blog/crm-adoption.svg',
    excerpt: "When agents do the admin, reps actually use Salesforce. We've seen it repeatedly - here are the adoption patterns Agentforce unlocks that training programs never could.",
    date: 'Dec 20, 2025', readTime: '5 min',
    author: 'Shivam Goel', initials: 'SG', avatarColor: 'from-cs-purple to-indigo-600',
    featured: false,
  },
  {
    slug: 'spring-25-agentforce',
    category: 'Salesforce News',
    categoryIcon: <Zap className="w-3 h-3" />,
    categoryColor: 'text-rose-500 bg-rose-50 border-rose-200',
    coverType: 'release-tag',
    title: "Top Agentforce Features in the Salesforce Spring '25 Release",
    image: '/blog/spring-25.svg',
    excerpt: "Spring '25 is the biggest Agentforce release yet. New agent templates, expanded action types, improved reasoning, and deeper Data Cloud integration - all covered here.",
    date: 'Dec 5, 2025', readTime: '9 min',
    author: 'Tushar Sharma', initials: 'TS', avatarColor: 'from-cs-blue to-cs-electric',
    featured: false,
  },
]

const categories = ['All', 'Agentforce', 'HubSpot', 'AWS', 'Microsoft Dynamics', 'Implementation', 'ROI & Results', 'Data Cloud', 'Strategy', 'Salesforce News']

/* ─── Cover art per category ──────────────────────────────── */
const CATEGORY_GRADIENTS = {
  'Agentforce':         'linear-gradient(135deg, #0176D3 0%, #38BDF8 100%)',
  'HubSpot':            'linear-gradient(135deg, #FF7A59 0%, #FFA07A 100%)',
  'AWS':                'linear-gradient(135deg, #FF9900 0%, #FBBF24 100%)',
  'Microsoft Dynamics': 'linear-gradient(135deg, #0078D4 0%, #5EB0F0 100%)',
  'Implementation':     'linear-gradient(135deg, #D97706 0%, #FBBF24 100%)',
  'ROI & Results':      'linear-gradient(135deg, #059669 0%, #34D399 100%)',
  'Data Cloud':         'linear-gradient(135deg, #6366F1 0%, #A78BFA 100%)',
  'Strategy':           'linear-gradient(135deg, #0EA5A4 0%, #5EEAD4 100%)',
  'Salesforce News':    'linear-gradient(135deg, #DC2626 0%, #FB7185 100%)',
}

function CoverArt({ category, icon, large }) {
  const gradient = CATEGORY_GRADIENTS[category] || CATEGORY_GRADIENTS['Agentforce']
  const size = large ? 'h-full min-h-[260px]' : 'h-44'
  return (
    <div className={`relative rounded-2xl overflow-hidden ${size}`} style={{ background: gradient }}>
      {/* Decorative dot grid */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }} />
      {/* Glow accent */}
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-30" style={{ backgroundColor: 'rgba(255,255,255,0.4)', filter: 'blur(48px)' }} />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full opacity-25" style={{ backgroundColor: 'rgba(0,0,0,0.3)', filter: 'blur(60px)' }} />

      {/* Centered icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`${large ? 'w-24 h-24' : 'w-16 h-16'} rounded-2xl flex items-center justify-center backdrop-blur-md`}
          style={{ backgroundColor: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.30)' }}>
          <div className={large ? 'scale-[2.5]' : 'scale-[1.75]'} style={{ color: 'white' }}>
            {icon}
          </div>
        </div>
      </div>

      {/* Category chip pinned to bottom-left */}
      <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1.5 rounded-full"
        style={{ backgroundColor: 'rgba(255,255,255,0.95)', color: '#0A0A0A' }}>
        {category}
      </div>
    </div>
  )
}

function PostCard({ post, large }) {
  const { slug, category, categoryIcon, coverType, coverProps, title, excerpt, date, readTime, author, initials, avatarColor } = post
  const gradient = CATEGORY_GRADIENTS[category] || CATEGORY_GRADIENTS['Agentforce']

  if (large) {
    return (
      <Link to={`/blog/${slug}`}
        className="md:col-span-2 lg:col-span-3 block no-underline group transition-all duration-300"
        style={{
          backgroundColor: 'white',
          borderRadius: '24px',
          border: '1px solid rgba(1,118,211,0.10)',
          overflow: 'hidden',
        }}>
        <div className="grid md:grid-cols-2 gap-0 items-stretch">
          <div className="p-4 md:p-6 md:pr-3">
            <BlogCoverArt category={category} gradient={gradient} coverType={coverType} coverProps={coverProps} large />
          </div>
          <div className="flex flex-col justify-center p-6 md:py-10 md:pr-10 md:pl-3">
            <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: '#6B6B6B' }}>
              Featured · {date}
            </p>
            <h3 className="font-black text-2xl sm:text-3xl mb-4 group-hover:underline transition-all leading-[1.15]"
              style={{ color: '#0A0A0A', letterSpacing: '-0.01em' }}>
              {title}
            </h3>
            <p className="text-base leading-relaxed mb-6" style={{ color: '#475569' }}>
              {excerpt}
            </p>
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${avatarColor} flex items-center justify-center text-white text-xs font-bold`}>
                {initials}
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: '#032D60' }}>{author}</p>
                <p className="text-xs flex items-center gap-1" style={{ color: '#94A3B8' }}>
                  <Clock className="w-3 h-3" /> {readTime} read
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link to={`/blog/${slug}`}
      className="flex flex-col group no-underline transition-all duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: 'white',
        borderRadius: '20px',
        border: '1px solid rgba(1,118,211,0.10)',
        padding: '1rem',
      }}>
      <BlogCoverArt category={category} gradient={gradient} coverType={coverType} coverProps={coverProps} />

      <div className="flex flex-col flex-grow pt-5 pb-2 px-1">
        <h3 className="font-bold text-base mb-2.5 group-hover:underline transition-all leading-snug"
          style={{ color: '#0A0A0A', letterSpacing: '-0.005em' }}>
          {title}
        </h3>
        <p className="text-sm leading-relaxed mb-4 line-clamp-3" style={{ color: '#64748B' }}>
          {excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 mt-auto"
          style={{ borderTop: '1px solid rgba(1,118,211,0.08)' }}>
          <div className="flex items-center gap-2">
            <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${avatarColor} flex items-center justify-center text-white text-[10px] font-bold`}>
              {initials}
            </div>
            <span className="text-xs font-medium" style={{ color: '#475569' }}>{author}</span>
          </div>
          <span className="text-xs flex items-center gap-1.5" style={{ color: '#94A3B8' }}>
            <Clock className="w-3 h-3" /> {readTime}
          </span>
        </div>
      </div>
    </Link>
  )
}

function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) return

    const iframe = document.createElement('iframe')
    iframe.name = 'sf_newsletter_iframe'
    iframe.style.display = 'none'
    document.body.appendChild(iframe)

    const sfForm = document.createElement('form')
    sfForm.method = 'POST'
    sfForm.action = 'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D5i00000Cvxdu'
    sfForm.target = 'sf_newsletter_iframe'

    const fields = {
      oid: '00D5i00000Cvxdu',
      retURL: 'https://www.cloudsheer.com/blog',
      email: email,
      lead_source: 'Website Newsletter',
    }

    Object.entries(fields).forEach(([key, value]) => {
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = key
      input.value = value
      sfForm.appendChild(input)
    })

    document.body.appendChild(sfForm)
    sfForm.submit()
    sfForm.remove()

    setSubscribed(true)
    setTimeout(() => iframe.remove(), 5000)
  }

  return (
    <section className="py-12 sm:py-16 bg-white border-t border-cs-blue/8">
      <div className="section-wrap max-w-xl mx-auto text-center">
        <div className="tag mx-auto mb-5"><Zap className="w-3.5 h-3.5" /> Stay Ahead</div>
        <h2 className="section-title text-2xl mb-3">Get Agentforce Insights Monthly</h2>
        <p className="text-cs-muted text-sm mb-7">
          Join 2,000+ Salesforce professionals. No spam - just the most useful
          Agentforce content, delivered once a month.
        </p>
        {subscribed ? (
          <div className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl" style={{ backgroundColor: 'rgba(5,150,105,0.08)', border: '1px solid rgba(5,150,105,0.2)' }}>
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <span className="text-sm font-semibold" style={{ color: '#059669' }}>Subscribed! Check your inbox.</span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex gap-3">
            <input
              type="email" required placeholder="your@email.com" value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-cs-bgsub border border-cs-blue/15 focus:border-cs-blue/40 rounded-xl px-4 py-3 text-cs-navy text-sm placeholder-cs-muted/50 outline-none transition-colors"
            />
            <button type="submit" className="btn-primary shrink-0 px-5 py-3 text-sm">
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    addPageSchema('faq', faqPageSchema(blogFaqs))
    return () => addPageSchema('faq', null)
  }, [])

  const filtered = activeCategory === 'All' ? posts : posts.filter(p => p.category === activeCategory)
  const featured = filtered.find(p => p.featured)
  const rest = filtered.filter(p => !p.featured)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="glow-dot w-[500px] h-[500px] bg-cs-blue/10 top-[-150px] left-[50%] -translate-x-1/2" />
        <div className="section-wrap relative z-10 text-center max-w-3xl mx-auto">
          <div className="tag mx-auto mb-6"><Sparkles className="w-3.5 h-3.5" /> Insights & Resources</div>
          <h1 className="section-title mb-5">
            The Agentforce <span className="gradient-text">Playbook</span>
          </h1>
          <p className="section-sub">
            Practical guides, real client results, and deep dives into
            Salesforce Agentforce - from the team that deploys it every day.
          </p>
        </div>
      </section>

      {/* Featured Case Study banner */}
      <section className="pb-2 pt-6 sm:pt-10 bg-white">
        <div className="section-wrap">
          <Link to="/case-studies/agentforce-manufacturing"
            className="block relative rounded-3xl overflow-hidden group no-underline"
            style={{ background: 'linear-gradient(135deg, #032D60 0%, #0A3F80 50%, #0176D3 100%)' }}>
            <div className="absolute inset-0 bg-grid-dark opacity-60" />
            <div className="glow-dot w-[500px] h-[500px] top-[-200px] right-[-100px]"
              style={{ backgroundColor: 'rgba(245,158,11,0.18)' }} />
            <div className="glow-dot w-[400px] h-[400px] bottom-[-180px] left-[-80px]"
              style={{ backgroundColor: 'rgba(99,102,241,0.18)' }} />

            <div className="relative z-10 p-6 sm:p-10 lg:p-12 grid lg:grid-cols-5 gap-8 items-center">
              {/* Left: content */}
              <div className="lg:col-span-3">
                <div className="tag-white inline-flex mb-5">
                  <Award className="w-3.5 h-3.5" /> Featured Case Study
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight mb-4">
                  The Agentforce Architecture<br />
                  <span className="gradient-text-gold">Salesforce Said Couldn't Be Built</span>
                </h2>
                <p className="text-sm sm:text-base mb-6 max-w-xl" style={{ color: 'rgba(186,220,255,0.85)' }}>
                  How Cloudsheer shipped a multi-agent Service Cloud architecture in 11 weeks that now resolves 92% of warranty cases autonomously - handling 12,000+ emails per month.
                </p>
                <span className="inline-flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded-xl transition-all group-hover:gap-3"
                  style={{ backgroundColor: '#F59E0B', color: '#032D60' }}>
                  Read the Case Study <ArrowRight className="w-4 h-4" />
                </span>
              </div>

              {/* Right: metric pills */}
              <div className="lg:col-span-2 grid grid-cols-2 gap-3">
                {[
                  { val: '92%',   label: 'Autonomous resolution', color: '#F59E0B' },
                  { val: '11 wks', label: 'To production', color: '#38BDF8' },
                  { val: '12K+',  label: 'Cases / month', color: '#A78BFA' },
                  { val: '$340K', label: 'Annual cost saved', color: '#34D399' },
                ].map(({ val, label, color }) => (
                  <div key={label} className="rounded-2xl p-4 text-center"
                    style={{ backgroundColor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.12)' }}>
                    <p className="text-2xl sm:text-3xl font-black mb-1" style={{ color }}>{val}</p>
                    <p className="text-[11px]" style={{ color: 'rgba(186,220,255,0.75)' }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-cs-bgsub">
        <div className="section-wrap">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                  activeCategory === cat
                    ? 'bg-cs-blue text-white border-cs-blue shadow-glow-blue'
                    : 'text-cs-muted border-cs-blue/15 bg-white hover:border-cs-blue/30 hover:text-cs-blue'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeCategory === 'All' && featured && (
              <PostCard key={featured.slug} post={featured} large />
            )}
            {(activeCategory === 'All' ? rest : filtered).map((post) => (
              <PostCard key={post.slug} post={post} large={false} />
            ))}
          </div>
        </div>
      </section>

      <FAQ title="Blog FAQ" items={blogFaqs} />

      {/* Newsletter */}
      <NewsletterSection />
    </>
  )
}
