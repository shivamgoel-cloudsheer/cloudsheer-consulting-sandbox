import { Link } from 'react-router-dom'
import { ArrowRight, Linkedin, Mail, MapPin, Store } from 'lucide-react'

const cols = [
  {
    heading: 'Salesforce Clouds',
    links: [
      { label: 'Agentforce',            to: '/solutions/agentforce' },
      { label: 'Sales Cloud',           to: '/solutions/sales-cloud' },
      { label: 'Service Cloud',         to: '/solutions/service-cloud' },
      { label: 'Marketing Cloud',       to: '/solutions/marketing-cloud' },
      { label: 'Commerce Cloud',        to: '/solutions/commerce-cloud' },
    ],
  },
  {
    heading: 'More Solutions',
    links: [
      { label: 'Experience Cloud',      to: '/solutions/experience-cloud' },
      { label: 'Analytics / Tableau',   to: '/solutions/analytics' },
      { label: 'Platform & AppExchange',to: '/solutions/platform' },
      { label: 'Slack',                 to: '/solutions/slack' },
      { label: 'Health Cloud',          to: '/solutions/health-cloud' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us',          to: '/about' },
      { label: 'Blog & Insights',   to: '/blog' },
      { label: 'Careers',           to: '/careers' },
      { label: 'Contact',           to: '/contact' },
      { label: 'Free Consultation', to: 'https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true', external: true },
    ],
  },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#032D60' }}>
      {/* CTA strip */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.10)' }}>
        <div className="section-wrap py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-xl mb-1">
              Ready to build your first AI Agent?
            </p>
            <p className="text-sm" style={{ color: 'rgba(148,196,255,0.85)' }}>
              Book a free 30-min Agentforce discovery call with our team.
            </p>
          </div>
          <a href="https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="btn-gold shrink-0 animate-bounce-x">
            Book Free Discovery Call <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main */}
      <div className="section-wrap py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex mb-5 group">
              <img
                src={import.meta.env.BASE_URL + "cloudsheer-logo.png"}
                alt="Cloudsheer Consulting"
                className="h-10 w-auto transition-opacity duration-200 group-hover:opacity-85 rounded"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-5"
              style={{ color: 'rgba(148,196,255,0.80)' }}>
              Helping businesses cut costs, close more deals, and scale operations
              with AI agents built on Salesforce Agentforce.
            </p>

            {/* Contact micro */}
            <div className="space-y-2 mb-5">
              {[
                { icon: <Mail className="w-3.5 h-3.5" />,  text: 'hello@cloudsheer.com' },
                { icon: <MapPin className="w-3.5 h-3.5" />,text: 'Dallas | Delhi | London | New York' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-xs"
                  style={{ color: 'rgba(148,196,255,0.70)' }}>
                  <span style={{ color: '#38BDF8' }}>{icon}</span>
                  {text}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {[
                { Icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/cloud-sheer/' },
                { Icon: Store,    label: 'AppExchange', href: 'https://appexchange.salesforce.com/appxConsultingListingDetail?listingId=78cae982-5a1e-4fb2-a8c9-b52a994f69d7' },
                { Icon: Mail,     label: 'Email', href: 'mailto:hello@cloudsheer.com' },
              ].map(({ Icon, label, href }) => (
                <a key={label} href={href || '#'} target={label !== 'Email' ? '_blank' : undefined} rel={label !== 'Email' ? 'noopener noreferrer' : undefined} aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'rgba(148,196,255,0.7)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#38BDF8'; e.currentTarget.style.color = '#38BDF8'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(148,196,255,0.7)'; }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {cols.map(({ heading, links }) => (
            <div key={heading}>
              <p className="text-white text-sm font-semibold mb-4">{heading}</p>
              <ul className="space-y-2.5">
                {links.map(({ label, to, external }) => (
                  <li key={label}>
                    {external ? (
                      <a href={to} target="_blank" rel="noopener noreferrer"
                        className="text-sm transition-colors duration-200"
                        style={{ color: 'rgba(148,196,255,0.70)' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(148,196,255,0.70)'}
                      >
                        {label}
                      </a>
                    ) : (
                      <Link to={to}
                        className="text-sm transition-colors duration-200"
                        style={{ color: 'rgba(148,196,255,0.70)' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(148,196,255,0.70)'}
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
          className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs"
          style2={{ color: 'rgba(148,196,255,0.55)' }}>
          <p style={{ color: 'rgba(148,196,255,0.55)' }}>
            © {new Date().getFullYear()} Cloudsheer Consulting. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5" style={{ color: 'rgba(148,196,255,0.55)' }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse-slow"
              style={{ backgroundColor: '#38BDF8' }} />
            Certified Salesforce & Agentforce Partner
          </div>
        </div>
      </div>
    </footer>
  )
}
