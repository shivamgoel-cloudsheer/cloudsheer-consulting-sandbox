import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Bot, Sparkles, TrendingUp, Database, Users, Zap } from 'lucide-react'

const posts = [
  {
    slug: 'getting-started-agentforce-2025',
    category: 'Agentforce',
    categoryIcon: <Bot className="w-3 h-3" />,
    categoryColor: 'text-cs-blue bg-cs-blue/8 border-cs-blue/20',
    title: 'Getting Started with Agentforce: A Practical Guide for 2025',
    excerpt: 'Agentforce is reshaping how businesses operate on Salesforce. We walk through the core concepts, agent architecture, and your first deployment steps - based on lessons from 20+ live implementations.',
    date: 'Mar 18, 2025', readTime: '8 min',
    author: 'Rajat Sharma', initials: 'RS', avatarColor: 'from-emerald-500 to-teal-500',
    featured: true,
  },
  {
    slug: 'agentforce-vs-einstein-bots',
    category: 'Agentforce',
    categoryIcon: <Bot className="w-3 h-3" />,
    categoryColor: 'text-cs-blue bg-cs-blue/8 border-cs-blue/20',
    title: "Agentforce vs Einstein Bots: What's the Difference?",
    excerpt: "Many clients ask how Agentforce differs from Einstein Bots. The answer has major implications for your automation strategy - we explain it clearly with real-world examples.",
    date: 'Feb 28, 2025', readTime: '5 min',
    author: 'Rajat Sharma', initials: 'RS', avatarColor: 'from-emerald-500 to-teal-500',
    featured: false,
  },
  {
    slug: 'salesforce-implementation-checklist',
    category: 'Implementation',
    categoryIcon: <Sparkles className="w-3 h-3" />,
    categoryColor: 'text-cs-gold bg-cs-gold/10 border-cs-gold/25',
    title: '10-Point Checklist for a Successful Salesforce Implementation',
    excerpt: 'After 150+ implementations we know exactly what separates a smooth go-live from a painful one. Here is our definitive pre-launch checklist.',
    date: 'Feb 10, 2025', readTime: '6 min',
    author: 'Tushar Sharma', initials: 'TS', avatarColor: 'from-cs-blue to-cs-electric',
    featured: false,
  },
  {
    slug: 'roi-agentforce-service-cloud',
    category: 'ROI & Results',
    categoryIcon: <TrendingUp className="w-3 h-3" />,
    categoryColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    title: 'Measuring the ROI of Agentforce: What Our Clients Actually See',
    excerpt: 'We tracked results across 20 Agentforce deployments - case deflection rates, response times, CSAT scores, and cost savings. Here is what the data shows.',
    date: 'Jan 22, 2025', readTime: '7 min',
    author: 'Tushar Sharma', initials: 'TS', avatarColor: 'from-cs-blue to-cs-electric',
    featured: false,
  },
  {
    slug: 'data-cloud-agentforce',
    category: 'Data Cloud',
    categoryIcon: <Database className="w-3 h-3" />,
    categoryColor: 'text-cs-purple bg-cs-purple/10 border-cs-purple/20',
    title: 'How Data Cloud Makes Your Agentforce Agents Smarter',
    excerpt: 'Agentforce agents are only as intelligent as the data they can access. We show you exactly how Data Cloud unification supercharges agent responses and personalisation.',
    date: 'Jan 8, 2025', readTime: '7 min',
    author: 'Shubham Bansal', initials: 'SB', avatarColor: 'from-orange-500 to-rose-500',
    featured: false,
  },
  {
    slug: 'crm-adoption-agentforce',
    category: 'Strategy',
    categoryIcon: <Users className="w-3 h-3" />,
    categoryColor: 'text-cs-teal bg-cs-teal/10 border-cs-teal/20',
    title: '7 Ways Agentforce Drives Salesforce Adoption Across Your Team',
    excerpt: "When agents do the admin, reps actually use Salesforce. We've seen it repeatedly - here are the adoption patterns Agentforce unlocks that training programmes never could.",
    date: 'Dec 20, 2024', readTime: '5 min',
    author: 'Shivam Goel', initials: 'SG', avatarColor: 'from-cs-purple to-indigo-600',
    featured: false,
  },
  {
    slug: 'spring-25-agentforce',
    category: 'Salesforce News',
    categoryIcon: <Zap className="w-3 h-3" />,
    categoryColor: 'text-rose-500 bg-rose-50 border-rose-200',
    title: "Top Agentforce Features in the Salesforce Spring '25 Release",
    excerpt: "Spring '25 is the biggest Agentforce release yet. New agent templates, expanded action types, improved reasoning, and deeper Data Cloud integration - all covered here.",
    date: 'Dec 5, 2024', readTime: '9 min',
    author: 'Tushar Sharma', initials: 'TS', avatarColor: 'from-cs-blue to-cs-electric',
    featured: false,
  },
]

const categories = ['All', 'Agentforce', 'Implementation', 'ROI & Results', 'Data Cloud', 'Strategy', 'Salesforce News']

function PostCard({ post, large }) {
  const { slug, category, categoryIcon, categoryColor, title, excerpt, date, readTime, author, initials, avatarColor } = post

  if (large) {
    return (
      <Link to={`/blog/${slug}`} className="glass-card p-8 group cursor-pointer hover:-translate-y-1 transition-all duration-300 md:col-span-2 block no-underline">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="h-52 bg-gradient-to-br from-cs-bgsub to-cs-blue/10 rounded-xl flex items-center justify-center border border-cs-blue/10">
            <div className="w-16 h-16 rounded-2xl bg-white border border-cs-blue/20 shadow-card flex items-center justify-center">
              <Bot className="w-8 h-8 text-cs-blue" />
            </div>
          </div>
          <div>
            <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryColor} mb-4`}>
              {categoryIcon} {category}
            </span>
            <h3 className="text-cs-navy font-bold text-xl mb-3 group-hover:text-cs-blue transition-colors leading-snug">
              {title}
            </h3>
            <p className="text-cs-muted text-sm leading-relaxed mb-5">{excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${avatarColor} flex items-center justify-center text-white text-xs font-bold`}>
                  {initials}
                </div>
                <span className="text-cs-navy text-sm font-medium">{author}</span>
              </div>
              <span className="text-cs-muted text-xs flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {readTime} · {date}
              </span>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link to={`/blog/${slug}`} className="glass-card p-6 flex flex-col group cursor-pointer hover:-translate-y-1 transition-all duration-300 no-underline">
      <div className="h-36 bg-gradient-to-br from-cs-bgsub to-cs-blue/8 rounded-xl mb-5 flex items-center justify-center border border-cs-blue/8">
        <div className="w-10 h-10 rounded-xl bg-white border border-cs-blue/15 shadow-sm flex items-center justify-center text-cs-blue">
          <Bot className="w-5 h-5" />
        </div>
      </div>
      <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border self-start mb-3 ${categoryColor}`}>
        {categoryIcon} {category}
      </span>
      <h3 className="text-cs-navy font-bold mb-2 flex-grow group-hover:text-cs-blue transition-colors leading-snug">
        {title}
      </h3>
      <p className="text-cs-muted text-xs leading-relaxed mb-5 line-clamp-3">{excerpt}</p>
      <div className="flex items-center justify-between pt-4 border-t border-cs-blue/8">
        <div className="flex items-center gap-2">
          <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${avatarColor} flex items-center justify-center text-white text-[10px] font-bold`}>
            {initials}
          </div>
          <span className="text-cs-muted text-xs">{author}</span>
        </div>
        <span className="text-cs-muted text-xs flex items-center gap-1">
          <Clock className="w-3 h-3" /> {readTime}
        </span>
      </div>
    </Link>
  )
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All' ? posts : posts.filter(p => p.category === activeCategory)
  const featured = filtered.find(p => p.featured)
  const rest = filtered.filter(p => !p.featured)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-white overflow-hidden">
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

      <section className="py-20 bg-cs-bgsub">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured && activeCategory === 'All' && <PostCard post={featured} large />}
            {rest.map((post) => <PostCard key={post.slug} post={post} large={false} />)}
            {!featured && filtered.map((post) => <PostCard key={post.slug} post={post} large={false} />)}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white border-t border-cs-blue/8">
        <div className="section-wrap max-w-xl mx-auto text-center">
          <div className="tag mx-auto mb-5"><Zap className="w-3.5 h-3.5" /> Stay Ahead</div>
          <h2 className="section-title text-2xl mb-3">Get Agentforce Insights Monthly</h2>
          <p className="text-cs-muted text-sm mb-7">
            Join 2,000+ Salesforce professionals. No spam - just the most useful
            Agentforce content, delivered once a month.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-3">
            <input
              type="email" required placeholder="your@email.com"
              className="flex-grow bg-cs-bgsub border border-cs-blue/15 focus:border-cs-blue/40 rounded-xl px-4 py-3 text-cs-navy text-sm placeholder-cs-muted/50 outline-none transition-colors"
            />
            <button type="submit" className="btn-primary shrink-0 px-5 py-3 text-sm">
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
