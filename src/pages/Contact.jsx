import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Bot, Calendar } from 'lucide-react'

const contactInfo = [
  { icon: <Mail className="w-4 h-4" />,  label: 'Email',    value: 'hello@cloudsheer.com' },
  { icon: <Phone className="w-4 h-4" />, label: 'Phone',    value: '+1 (800) 000-0000' },
  { icon: <MapPin className="w-4 h-4" />,label: 'Location', value: 'United States' },
  { icon: <Clock className="w-4 h-4" />, label: 'Response', value: 'Within 1 business day' },
]

const interests = [
  'Agentforce Implementation',
  'Service Agent Deployment',
  'Sales Agent Deployment',
  'Salesforce Implementation',
  'Integration & Automation',
  'CRM Strategy & Health Check',
  'Analytics & Einstein AI',
  'Managed Support',
  'Other',
]

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', interest: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-5">
          <CheckCircle2 className="w-8 h-8 text-emerald-500" />
        </div>
        <h3 className="text-cs-navy text-2xl font-bold mb-2">Message Received</h3>
        <p className="text-cs-muted text-sm max-w-sm">
          Thanks for reaching out. A member of our Agentforce team will be in
          touch within one business day.
        </p>
      </div>
    )
  }

  const inputClass = "w-full bg-cs-bgsub border border-cs-blue/15 hover:border-cs-blue/30 focus:border-cs-blue/50 focus:ring-0 rounded-xl px-4 py-3 text-cs-navy text-sm placeholder-cs-muted/50 outline-none transition-colors"

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-cs-navy mb-1.5">Full Name <span className="text-cs-blue">*</span></label>
          <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Jane Smith" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-cs-navy mb-1.5">Work Email <span className="text-cs-blue">*</span></label>
          <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="jane@company.com" className={inputClass} />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-cs-navy mb-1.5">Company</label>
          <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Acme Inc." className={inputClass} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-cs-navy mb-1.5">Phone</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 555 000 0000" className={inputClass} />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-cs-navy mb-1.5">I'm interested in…</label>
        <select name="interest" value={form.interest} onChange={handleChange} className={inputClass + ' bg-cs-bgsub'}>
          <option value="">Select a service</option>
          {interests.map((i) => <option key={i} value={i}>{i}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-xs font-semibold text-cs-navy mb-1.5">Message <span className="text-cs-blue">*</span></label>
        <textarea name="message" required value={form.message} onChange={handleChange} rows={5}
          placeholder="Tell us about your project, current Salesforce setup, and what you're hoping to achieve…"
          className={inputClass + ' resize-none'} />
      </div>
      <button type="submit" className="btn-primary w-full justify-center">
        Send Message <Send className="w-4 h-4" />
      </button>
      <p className="text-center text-xs text-cs-muted">No spam. No commitment. Just a conversation.</p>
    </form>
  )
}

function CalEmbed() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.innerHTML = `
      (function (C, A, L) {
        let p = function (a, ar) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal; let ar = arguments;
          if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; }
          if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["-initNamespace", namespace]);} else p(cal, ar); return; }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", { origin: "https://cal.com" });
      Cal("inline", {
        elementOrSelector: "#cal-inline",
        calLink: "cloudsheer-consulting/30min",
        layout: "month_view"
      });
      Cal("ui", {
        styles: { branding: { brandColor: "#0176D3" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    `
    document.head.appendChild(script)
    return () => { document.head.removeChild(script) }
  }, [])

  return (
    <div className="glass-card overflow-hidden">
      <div className="flex items-center gap-3 px-6 pt-6 pb-4"
        style={{ borderBottom: '1px solid rgba(1,118,211,0.08)' }}>
        <div className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: 'rgba(1,118,211,0.10)', color: '#0176D3' }}>
          <Calendar className="w-4 h-4" />
        </div>
        <div>
          <p className="font-bold text-sm" style={{ color: '#032D60' }}>Book a Free 30-Min Discovery Call</p>
          <p className="text-xs" style={{ color: '#64748B' }}>Pick a time that works for you — no commitment</p>
        </div>
      </div>
      <div id="cal-inline" style={{ width: '100%', height: '600px', overflow: 'scroll' }} />
    </div>
  )
}

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="glow-dot w-[500px] h-[500px] bg-cs-blue/10 top-[-150px] left-[50%] -translate-x-1/2" />
        <div className="section-wrap relative z-10 text-center max-w-3xl mx-auto">
          <div className="tag mx-auto mb-6">Let's Talk</div>
          <h1 className="section-title mb-5">
            Start Your <span className="gradient-text">Agentforce Journey</span>
          </h1>
          <p className="section-sub">
            Book a free 30-minute discovery call. We'll map out which AI agents
            will have the biggest impact on your business — and how fast we can deploy them.
          </p>
        </div>
      </section>

      {/* Cal.com embed */}
      <section className="py-16" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="section-wrap max-w-4xl mx-auto">
          <CalEmbed />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-wrap grid lg:grid-cols-5 gap-10">
          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-5">
            {/* What to expect */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cs-blue to-cs-electric flex items-center justify-center shadow-glow-blue">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-cs-navy font-bold">Free Discovery Call</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Review your current Salesforce setup',
                  'Identify top Agentforce use cases',
                  'Estimate deployment timeline & ROI',
                  'No obligation, no sales pressure',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-cs-muted">
                    <CheckCircle2 className="w-4 h-4 text-cs-blue shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact details */}
            <div className="glass-card p-6 space-y-4">
              {contactInfo.map(({ icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-cs-blue/8 border border-cs-blue/15 flex items-center justify-center text-cs-blue">
                    {icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-cs-muted uppercase tracking-widest font-semibold">{label}</p>
                    <p className="text-cs-navy text-sm font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Partner badge */}
            <div className="glass-card p-5 border border-cs-blue/20 bg-cs-blue/3">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cs-blue animate-pulse" />
                <span className="text-cs-blue text-xs font-bold uppercase tracking-widest">Certified Partner</span>
              </div>
              <p className="text-cs-navy text-sm font-semibold mb-1">Salesforce & Agentforce Certified</p>
              <p className="text-cs-muted text-xs leading-relaxed">
                Cloudsheer is a registered Salesforce consulting partner with 50+
                certified experts across every Salesforce cloud.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 glass-card p-8">
            <h2 className="text-cs-navy font-bold text-2xl mb-2">Send Us a Message</h2>
            <p className="text-cs-muted text-sm mb-8">We typically respond within 4 business hours.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
