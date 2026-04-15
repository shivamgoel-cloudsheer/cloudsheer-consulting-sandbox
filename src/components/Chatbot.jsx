import { useState, useRef, useEffect } from 'react'
import { MessageSquare, X, Send, Bot, User, ArrowRight } from 'lucide-react'

const CAL_LINK = 'https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true'
const SF_ORG = '00D5i00000Cvxdu'

// Knowledge base - will be populated with Salesforce data
const knowledge = {
  // SALESFORCE GENERAL
  'what is salesforce': 'Salesforce is the world\'s #1 CRM platform used by 150,000+ companies. It helps businesses manage sales, service, marketing, and commerce from one connected platform powered by AI.',
  'what is crm': 'CRM (Customer Relationship Management) is software that helps businesses manage interactions with customers and prospects. Salesforce is the global leader in CRM with 23% market share.',
  'how much does salesforce cost': 'Salesforce pricing starts at $25/user/month for Starter Suite. Sales Cloud and Service Cloud range from $25-$500/user/month. Enterprise plans offer the most features. Contact us for a tailored recommendation.',
  'is salesforce cloud based': 'Yes, Salesforce is 100% cloud-based. No hardware or software installation needed. You access it through your browser from anywhere, and Salesforce handles all updates and security.',
  'what industries use salesforce': 'Salesforce serves every major industry including financial services, healthcare, retail, manufacturing, technology, education, nonprofit, and government. It has industry-specific clouds like Health Cloud and Financial Services Cloud.',
  'what is data cloud': 'Data Cloud is Salesforce\'s real-time data platform that unifies customer data from any source - CRM, ERP, websites, apps - into a single customer profile. It powers smarter AI agents, better segmentation, and personalized experiences.',
  'what is einstein': 'Einstein is Salesforce\'s AI technology embedded across all clouds. It includes Einstein Lead Scoring, Einstein Case Classification, Einstein Send Time Optimization, Einstein Discovery, and the Einstein Trust Layer that governs all AI actions.',
  'what is mulesoft': 'MuleSoft is Salesforce\'s integration platform. It connects Salesforce to any system - ERP, databases, legacy apps - using pre-built connectors and APIs. It enables real-time data flow between your tools.',
  'what is salesforce appexchange': 'AppExchange is Salesforce\'s marketplace with 7,000+ pre-built apps and components. You can find solutions for document generation, e-signatures, project management, and more - all installable directly into your Salesforce org.',
  'what is flow builder': 'Flow Builder is Salesforce\'s visual automation tool. You can build complex business processes with clicks, not code - automate approvals, send notifications, update records, and trigger actions across objects.',

  // AGENTFORCE
  'what is agentforce': 'Agentforce is Salesforce\'s platform for building autonomous AI agents. These agents handle customer service, sales, and operations 24/7 inside your CRM - resolving cases, qualifying leads, and updating records without human involvement.',
  'how does agentforce work': 'Agentforce uses the Atlas Reasoning Engine to understand requests, reason through problems, and take actions. Agents are built with Agent Builder where you define Topics (what the agent knows), Actions (what it can do), and Instructions (how it behaves).',
  'what is agent builder': 'Agent Builder is the tool for creating Agentforce agents. You configure Topics (scope), Actions (capabilities connected to Flows and Apex), and Instructions (natural language rules). No coding required for basic agents.',
  'what is atlas reasoning engine': 'The Atlas Reasoning Engine is the AI brain behind Agentforce. It processes requests, reasons through multi-step problems, accesses your CRM data, and decides which actions to take - all governed by the Einstein Trust Layer.',
  'what is einstein trust layer': 'The Einstein Trust Layer is Salesforce\'s AI safety framework. It ensures all agent actions are grounded in your data (no hallucination), logged and auditable, governed by your permissions, and compliant with your business rules.',
  'agentforce vs einstein bots': 'Einstein Bots follow pre-scripted decision trees and fail on unexpected queries. Agentforce agents use AI reasoning to handle any question, take multi-step actions, and learn from your data. Agentforce is far more capable.',
  'how much does agentforce cost': 'Agentforce is priced at $2 per conversation. Compare that to $11+ average cost for a human agent interaction. Most companies see ROI within 90 days of deployment.',
  'agentforce service agent': 'The Agentforce Service Agent resolves customer cases autonomously using your Knowledge Base and Einstein Case Classification. It handles order status, returns, FAQs, and escalates complex issues to humans with full context.',
  'agentforce sdr agent': 'The Agentforce SDR (Sales Development Rep) Agent qualifies inbound leads, responds in seconds using Einstein Lead Scoring, and books meetings directly into your reps\' calendars via Sales Engagement.',
  'can agentforce integrate with other systems': 'Yes, Agentforce agents can trigger MuleSoft integrations, call external APIs, execute Apex code, and trigger Flow Builder automations. They work across your entire tech stack, not just Salesforce.',

  // SALES CLOUD
  'what is sales cloud': 'Sales Cloud is Salesforce\'s CRM for sales teams. It includes Pipeline Inspection, Einstein Lead Scoring, Revenue Intelligence, Forecast Management, CPQ, and the Agentforce SDR Agent. Companies see 29% more revenue on average.',
  'what is pipeline inspection': 'Pipeline Inspection gives sales leaders real-time visibility into deal health, pipeline changes, and forecast accuracy. It uses AI to flag at-risk deals and highlight opportunities that need attention.',
  'what is einstein lead scoring': 'Einstein Lead Scoring uses AI to rank leads by their likelihood to convert. It analyzes historical data, engagement patterns, and firmographic info to tell reps which leads to prioritize.',
  'what is revenue intelligence': 'Revenue Intelligence combines CRM Analytics with Einstein AI to provide pipeline analytics, deal insights, and forecast predictions. It helps sales leaders make data-driven decisions about their pipeline.',
  'what is cpq': 'CPQ (Configure, Price, Quote) automates the quoting process. Sales reps configure products, apply pricing rules and discounts, and generate professional quotes in minutes instead of hours.',

  // SERVICE CLOUD
  'what is service cloud': 'Service Cloud is Salesforce\'s customer support platform. It includes the Service Console, Omni-Channel Routing, Einstein Case Classification, Knowledge Base, Incident Management, and Field Service Lightning. Companies see 30% faster case resolution.',
  'what is omni channel routing': 'Omni-Channel Routing automatically distributes cases, chats, calls, and social messages to the right agent based on skills, availability, and priority. It supports chat, email, SMS, WhatsApp, and phone.',
  'what is service console': 'The Service Console is a unified workspace where agents see customer history, case details, Knowledge Articles, and AI recommendations in one screen. It eliminates tab-switching and speeds up resolution.',
  'what is field service lightning': 'Field Service Lightning (FSL) manages mobile workforces. It handles scheduling, dispatching, work orders, inventory, and route optimization for technicians in the field.',
  'what is knowledge base': 'Salesforce Knowledge is a centralized article repository. Agents and customers can search for answers. Einstein Article Recommendations suggests relevant articles automatically during case resolution.',

  // MARKETING CLOUD
  'what is marketing cloud': 'Marketing Cloud Engagement is Salesforce\'s marketing automation platform. It includes Journey Builder, Email Studio, Einstein Send Time Optimization, Account Engagement (Pardot), and Content Builder. Companies see 28% higher marketing ROI.',
  'what is journey builder': 'Journey Builder creates automated, multi-channel customer journeys. You design paths based on customer behavior, triggers, and data - delivering personalized emails, SMS, ads, and push notifications at the right moment.',
  'what is account engagement': 'Account Engagement (formerly Pardot) is Salesforce\'s B2B marketing automation tool. It handles lead scoring, nurture campaigns, landing pages, and ROI reporting - all connected to Sales Cloud.',
  'what is einstein send time optimization': 'Einstein Send Time Optimization (STO) uses AI to determine the best time to send emails to each individual recipient, maximizing open rates and engagement.',

  // COMMERCE CLOUD
  'what is commerce cloud': 'Commerce Cloud powers B2B and B2C digital storefronts. It includes Composable Storefront, Einstein Product Recommendations, Order Management, and Page Designer. Companies see 29% higher conversion rates.',
  'what is composable storefront': 'Composable Storefront is Commerce Cloud\'s headless commerce architecture using PWA Kit. It delivers fast, mobile-first shopping experiences that can be customized with React components.',
  'b2b vs b2c commerce': 'B2C Commerce handles consumer-facing storefronts with product catalogs, promotions, and checkout. B2B Commerce handles complex business buying with account hierarchies, contract pricing, punchout catalogs, and bulk ordering.',

  // EXPERIENCE CLOUD
  'what is experience cloud': 'Experience Cloud lets you build branded portals, communities, and self-service sites connected to your Salesforce data. Templates include Customer Service, Partner Central, and Build Your Own (LWR). Companies see 48% ticket deflection.',
  'what is experience builder': 'Experience Builder is a drag-and-drop tool for creating Experience Cloud sites. It uses Lightning Web Runtime (LWR) for fast performance and Salesforce CMS for content management.',

  // ANALYTICS
  'what is crm analytics': 'CRM Analytics (formerly Tableau CRM) embeds AI-powered dashboards directly inside Salesforce. It includes Analytics Studio, Einstein Discovery, Einstein Predictions, and connects to Data Cloud for unified reporting. 382% ROI per Forrester.',
  'what is tableau': 'Tableau is Salesforce\'s visual analytics platform with 10M+ users. It connects to any data source and creates interactive dashboards. Combined with CRM Analytics, it provides both embedded and standalone analytics.',
  'what is einstein discovery': 'Einstein Discovery automatically analyzes your data, finds patterns, and generates predictions. It explains why metrics are trending and recommends actions - no data science skills required.',

  // PLATFORM
  'what is salesforce platform': 'Salesforce Platform (Lightning Platform) is the foundation for building custom apps. It includes Flow Builder, Lightning Web Components (LWC), Apex, AppExchange, MuleSoft integrations, and Platform Events. 478% ROI per Forrester.',
  'what are lightning web components': 'Lightning Web Components (LWC) is Salesforce\'s modern UI framework for building custom components. It uses standard web technologies (HTML, JavaScript, CSS) and renders 50% faster than older Aura components.',

  // SLACK
  'what is slack': 'Slack is Salesforce\'s AI-powered work operating system. It includes Channels, Slack AI, Huddles, Canvas, Workflow Builder, and Slack Sales Elevate. Teams see 47% productivity increase and 29% fewer meetings.',
  'what is slack sales elevate': 'Slack Sales Elevate surfaces pipeline data directly in Slack channels. Reps can update deals, view opportunity details, and log notes without switching to Salesforce CRM.',
  'what is slack ai': 'Slack AI summarizes channels, threads, and Canvas docs. It finds answers across your connected tools and conversations, reducing time spent searching by hours each week.',

  // HEALTH CLOUD
  'what is health cloud': 'Health Cloud is Salesforce\'s platform for healthcare and life sciences. It includes Patient 360, Care Plans, Utilization Management, Prior Authorization, and HL7 FHIR integration. Designed to support HIPAA compliance.',
  'is health cloud hipaa compliant': 'Health Cloud is designed to support HIPAA compliance. Salesforce provides a Business Associate Agreement (BAA) and the platform meets SOC 2 Type II, ISO 27001, and HITRUST certifications.',

  // ABOUT CLOUDSHEER
  'who is cloudsheer': 'Cloudsheer Consulting is a certified Salesforce and Agentforce implementation partner with 40+ team members across Dallas, Delhi, London, and New York. We hold 60+ Salesforce certifications and have delivered 250+ projects.',
  'where are your offices': 'We have offices in 4 locations: Dallas (USA), Delhi/Noida (India), London (UK), and New York (USA). Our distributed team provides round-the-clock coverage across time zones.',
  'how many team members': 'We have 40+ team members globally, with 60+ Salesforce certifications covering Sales Cloud, Service Cloud, Marketing Cloud, Platform Developer, Agentforce Specialist, and Data Cloud Consultant.',
  'what certifications do you hold': 'Our team holds 60+ Salesforce certifications including: Administrator, Platform Developer I & II, Sales Cloud Consultant, Service Cloud Consultant, Marketing Cloud Consultant, Agentforce Specialist, and Data Cloud Consultant.',
  'how long does implementation take': 'Timelines vary by project: Agentforce agents deploy in 3-6 weeks. Single cloud implementations take 4-8 weeks. Multi-cloud projects run 8-16 weeks. Every project starts with a scoped timeline during the free discovery call.',
  'what is your pricing': 'We offer fixed-price packages starting at $2,999 for standard Salesforce implementations. Agentforce deployments typically range from $9,999 to $50,000+ depending on complexity. Every engagement starts with a free discovery call.',
  'do you offer ongoing support': 'Yes. Every project includes 30 days of post-launch support. After that, we offer managed services for agent monitoring, performance optimization, and new deployments as your business scales.',
  'what industries do you work with': 'We serve financial services, retail/e-commerce, healthcare, B2B SaaS, manufacturing, and professional services. Our cross-industry experience means we bring proven patterns to every project.',
  'how do i get started': 'Book a free 30-minute discovery call with one of our Salesforce architects. We\'ll review your current setup, identify quick wins, and give you a clear plan with timeline and cost estimate. No commitment required.',
  'who are your clients': 'We work with mid-market and enterprise companies including Beta Agency, Trexo Robotics, Green Light Offer, Camp Quality, Mr-Manhole, Airius LLC, Givergy, and Hope-Bio.',
  'what makes cloudsheer different': 'We\'re Salesforce specialists, not generalists. Every consultant works exclusively with Salesforce and Agentforce. You get senior architects on your project, direct access to leadership, and we deploy in 4-6 weeks - not months.',
}

// Find best matching answer
function findAnswer(input) {
  const q = input.toLowerCase().trim()

  // Direct match
  for (const [key, val] of Object.entries(knowledge)) {
    if (q.includes(key) || key.includes(q)) return val
  }

  // Keyword matching
  const words = q.split(/\s+/).filter(w => w.length > 3)
  let bestMatch = null
  let bestScore = 0

  for (const [key, val] of Object.entries(knowledge)) {
    let score = 0
    for (const word of words) {
      if (key.includes(word)) score += 2
      if (val.toLowerCase().includes(word)) score += 1
    }
    if (score > bestScore) {
      bestScore = score
      bestMatch = val
    }
  }

  if (bestScore >= 3) return bestMatch

  // Fallback responses
  if (q.includes('price') || q.includes('cost') || q.includes('pricing'))
    return knowledge['what is your pricing']
  if (q.includes('agent') && (q.includes('force') || q.includes('ai')))
    return knowledge['what is agentforce']
  if (q.includes('help') || q.includes('start') || q.includes('contact') || q.includes('talk') || q.includes('book') || q.includes('call'))
    return knowledge['how do i get started']

  return null
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! I\'m the Cloudsheer assistant. Ask me anything about Salesforce, Agentforce, or our services. How can I help?' }
  ])
  const [input, setInput] = useState('')
  const [leadCaptured, setLeadCaptured] = useState(false)
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [leadData, setLeadData] = useState({ name: '', email: '', company: '' })
  const [msgCount, setMsgCount] = useState(0)
  const chatRef = useRef(null)

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight
  }, [messages])

  const sendMessage = () => {
    if (!input.trim()) return
    const userMsg = input.trim()
    setInput('')
    setMessages(prev => [...prev, { from: 'user', text: userMsg }])
    setMsgCount(c => c + 1)

    setTimeout(() => {
      const answer = findAnswer(userMsg)
      if (answer) {
        setMessages(prev => [...prev, { from: 'bot', text: answer }])

        // After 3 messages and no lead captured, prompt for lead
        if (msgCount >= 2 && !leadCaptured && !showLeadForm) {
          setTimeout(() => {
            setMessages(prev => [...prev, {
              from: 'bot',
              text: 'Want me to connect you with one of our architects for a deeper dive? Just share your name and email and we\'ll reach out within 4 hours.',
              isLeadPrompt: true
            }])
            setShowLeadForm(true)
          }, 1500)
        }
      } else {
        setMessages(prev => [...prev, {
          from: 'bot',
          text: "I don't have a specific answer for that, but our team can help! Book a free 30-minute discovery call and we'll answer all your questions personally."
        }])
        if (!leadCaptured) {
          setTimeout(() => {
            setShowLeadForm(true)
            setMessages(prev => [...prev, {
              from: 'bot',
              text: 'Or leave your email below and we\'ll get back to you within 4 hours.',
              isLeadPrompt: true
            }])
          }, 1000)
        }
      }
    }, 600)
  }

  const submitLead = () => {
    if (!leadData.email) return

    // Send to Salesforce Web-to-Lead
    const iframe = document.createElement('iframe')
    iframe.name = 'sf_chat_lead'
    iframe.style.display = 'none'
    document.body.appendChild(iframe)

    const form = document.createElement('form')
    form.method = 'POST'
    form.action = 'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=' + SF_ORG
    form.target = 'sf_chat_lead'

    const fields = {
      oid: SF_ORG,
      retURL: window.location.href,
      first_name: leadData.name.split(' ')[0] || '',
      last_name: leadData.name.split(' ').slice(1).join(' ') || leadData.name,
      email: leadData.email,
      company: leadData.company || 'Not provided',
      lead_source: 'Website Chatbot',
      description: 'Lead captured via website chatbot. Conversation: ' + messages.filter(m => m.from === 'user').map(m => m.text).join(' | '),
    }

    Object.entries(fields).forEach(([k, v]) => {
      const inp = document.createElement('input')
      inp.type = 'hidden'
      inp.name = k
      inp.value = v
      form.appendChild(inp)
    })

    document.body.appendChild(form)
    form.submit()
    form.remove()
    setTimeout(() => iframe.remove(), 5000)

    setLeadCaptured(true)
    setShowLeadForm(false)
    setMessages(prev => [...prev, {
      from: 'bot',
      text: 'Thanks ' + (leadData.name.split(' ')[0] || '') + '! Our team will reach out within 4 hours. In the meantime, feel free to keep asking questions!'
    }])
  }

  const quickQuestions = [
    'What is Agentforce?',
    'How much does it cost?',
    'How long does implementation take?',
    'What makes Cloudsheer different?',
  ]

  const agentIcon = import.meta.env.BASE_URL + 'icons/agentforce.svg'

  return (
    <>
      {/* Toggle button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 z-50 group"
          aria-label="Open chat"
        >
          <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #032D60, #0176D3)', boxShadow: '0 8px 30px rgba(1,118,211,0.4)' }}>
            <img src={agentIcon} alt="Chat" className="w-10 h-10" />
          </div>
          <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white animate-pulse" />
          <span className="absolute -top-8 right-0 bg-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ color: '#032D60' }}>
            Ask me anything!
          </span>
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-5 right-5 z-50 w-[340px] sm:w-[380px] rounded-2xl overflow-hidden flex flex-col"
          style={{ height: '500px', boxShadow: '0 20px 60px rgba(3,45,96,0.25)', border: '1px solid rgba(1,118,211,0.12)', backgroundColor: 'white' }}>

          {/* Header */}
          <div className="px-4 py-3 flex items-center justify-between shrink-0"
            style={{ background: 'linear-gradient(135deg, #032D60 0%, #0A3F80 60%, #0176D3 100%)' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: 'rgba(255,255,255,0.12)', border: '1.5px solid rgba(255,255,255,0.2)' }}>
                <img src={agentIcon} alt="Agentforce" className="w-7 h-7" />
              </div>
              <div>
                <p className="text-white text-sm font-bold">Cloudsheer AI</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-[10px]" style={{ color: 'rgba(186,220,255,0.8)' }}>Powered by Agentforce</p>
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="w-7 h-7 rounded-full flex items-center justify-center transition-colors"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
              aria-label="Close chat">
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Messages */}
          <div ref={chatRef} className="flex-1 overflow-y-auto px-3 py-3 space-y-3" style={{ backgroundColor: '#F0F4FA' }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.from === 'bot' && (
                  <div className="w-6 h-6 rounded-full shrink-0 mt-1 flex items-center justify-center" style={{ backgroundColor: '#EFF6FF', border: '1px solid rgba(1,118,211,0.1)' }}>
                    <img src={agentIcon} alt="" className="w-4 h-4" />
                  </div>
                )}
                <div className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                  msg.from === 'user'
                    ? 'text-white rounded-br-sm'
                    : 'rounded-bl-sm'
                }`} style={msg.from === 'user'
                  ? { background: 'linear-gradient(135deg, #0176D3, #0A3F80)' }
                  : { backgroundColor: 'white', color: '#334155', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }
                }>
                  {msg.text}
                </div>
                {msg.from === 'user' && (
                  <div className="w-6 h-6 rounded-full shrink-0 mt-1 flex items-center justify-center" style={{ backgroundColor: '#0176D3' }}>
                    <User className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
            ))}

            {/* Lead capture form */}
            {showLeadForm && !leadCaptured && (
              <div className="rounded-xl p-3.5 space-y-2.5" style={{ background: 'linear-gradient(135deg, #F0F7FF, #E8F0FE)', border: '1px solid rgba(1,118,211,0.12)' }}>
                <p className="text-xs font-bold" style={{ color: '#032D60' }}>Connect with our team</p>
                <input type="text" placeholder="Your name"
                  value={leadData.name} onChange={e => setLeadData({ ...leadData, name: e.target.value })}
                  className="w-full text-xs px-3 py-2 rounded-lg border outline-none focus:border-blue-400" style={{ borderColor: '#D4E2F5' }} />
                <input type="email" placeholder="Work email *" required
                  value={leadData.email} onChange={e => setLeadData({ ...leadData, email: e.target.value })}
                  className="w-full text-xs px-3 py-2 rounded-lg border outline-none focus:border-blue-400" style={{ borderColor: '#D4E2F5' }} />
                <input type="text" placeholder="Company"
                  value={leadData.company} onChange={e => setLeadData({ ...leadData, company: e.target.value })}
                  className="w-full text-xs px-3 py-2 rounded-lg border outline-none focus:border-blue-400" style={{ borderColor: '#D4E2F5' }} />
                <button onClick={submitLead}
                  className="w-full text-xs font-bold py-2.5 rounded-lg text-white transition-opacity hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #0176D3, #032D60)' }}>
                  Connect Me With Your Team
                </button>
              </div>
            )}

            {/* Quick questions */}
            {messages.length <= 2 && (
              <div className="space-y-1.5 pt-1">
                <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: '#94A3B8' }}>Popular questions</p>
                {quickQuestions.map(q => (
                  <button key={q}
                    onClick={() => { setInput(q); setTimeout(() => { setInput(''); setMessages(prev => [...prev, { from: 'user', text: q }]); setMsgCount(c => c + 1); setTimeout(() => { const a = findAnswer(q); if (a) setMessages(prev => [...prev, { from: 'bot', text: a }]); }, 600) }, 50) }}
                    className="block w-full text-left text-xs px-3 py-2 rounded-lg border transition-all hover:shadow-sm"
                    style={{ color: '#0176D3', borderColor: 'rgba(1,118,211,0.12)', backgroundColor: 'white' }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#F0F7FF'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = 'white'}>
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Book a call banner */}
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
            className="mx-3 mb-2 flex items-center justify-center gap-1.5 text-[11px] font-bold py-2 rounded-lg transition-all hover:shadow-md"
            style={{ background: 'linear-gradient(135deg, #F59E0B, #D97706)', color: 'white' }}>
            Book Free Discovery Call <ArrowRight className="w-3 h-3" />
          </a>

          {/* Input */}
          <div className="px-3 pb-3 shrink-0">
            <div className="flex items-center gap-2 rounded-xl px-3 py-2 transition-all"
              style={{ backgroundColor: '#F0F4FA', border: '1.5px solid transparent' }}
              onFocus={e => e.currentTarget.style.borderColor = '#0176D3'}
              onBlur={e => e.currentTarget.style.borderColor = 'transparent'}>
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                placeholder="Ask about Salesforce..."
                className="flex-1 text-xs outline-none bg-transparent"
                style={{ color: '#334155' }}
              />
              <button onClick={sendMessage} className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all"
                style={{ background: input.trim() ? 'linear-gradient(135deg, #0176D3, #032D60)' : '#D4E2F5' }}>
                <Send className="w-3.5 h-3.5" style={{ color: input.trim() ? 'white' : '#94A3B8' }} />
              </button>
            </div>
            <p className="text-center text-[9px] mt-1.5" style={{ color: '#C0C8D4' }}>Powered by Cloudsheer x Agentforce</p>
          </div>
        </div>
      )}
    </>
  )
}
