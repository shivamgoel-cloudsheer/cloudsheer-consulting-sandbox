import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Careers from './pages/Careers'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Services from './pages/Services'
import AgentforcePage    from './pages/clouds/Agentforce'
import SalesCloudPage    from './pages/clouds/SalesCloud'
import ServiceCloudPage  from './pages/clouds/ServiceCloud'
import MarketingCloudPage from './pages/clouds/MarketingCloud'
import CommerceCloudPage from './pages/clouds/CommerceCloud'
import ExperienceCloudPage from './pages/clouds/ExperienceCloud'
import AnalyticsPage     from './pages/clouds/Analytics'
import PlatformPage      from './pages/clouds/Platform'
import SlackPage         from './pages/clouds/Slack'
import HealthCloudPage   from './pages/clouds/HealthCloud'
import FinancialServicesCloudPage from './pages/clouds/FinancialServicesCloud'
import LifeSciencesCloudPage from './pages/clouds/LifeSciencesCloud'
import EducationCloudPage from './pages/clouds/EducationCloud'
import NonprofitCloudPage from './pages/clouds/NonprofitCloud'
import HubSpotOverview            from './pages/hubspot/Overview'
import HubSpotSmartCRM            from './pages/hubspot/SmartCRM'
import HubSpotBreezeAI            from './pages/hubspot/BreezeAI'
import HubSpotMarketingHub        from './pages/hubspot/MarketingHub'
import HubSpotSalesHub            from './pages/hubspot/SalesHub'
import HubSpotServiceHub          from './pages/hubspot/ServiceHub'
import HubSpotContentHub          from './pages/hubspot/ContentHub'
import HubSpotDataHub             from './pages/hubspot/DataHub'
import HubSpotCommerceHub         from './pages/hubspot/CommerceHub'
import HubSpotSmallBusinessBundle from './pages/hubspot/SmallBusinessBundle'
import AWSPage from './pages/AWS'
import MicrosoftDynamicsPage from './pages/MicrosoftDynamics'
import DynamicsCustomerExperience from './pages/dynamics/CustomerExperience'
import DynamicsService            from './pages/dynamics/Service'
import DynamicsSupplyChain        from './pages/dynamics/SupplyChain'
import DynamicsFinance            from './pages/dynamics/Finance'
import DynamicsBusinessCentral    from './pages/dynamics/BusinessCentral'
import MicrosoftPowerPlatform     from './pages/dynamics/PowerPlatform'
import AIAgentsPage from './pages/AIAgents'
import AgentforceManufacturingCase from './pages/case-studies/AgentforceManufacturing'
import { ROUTE_META, applySEO, setPageSchemas, breadcrumbSchema, breadcrumbsFromPath,
         faqPageSchema, professionalServiceSchema, HOMEPAGE_FAQS } from './seoConfig'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function SEO() {
  const { pathname } = useLocation()
  useEffect(() => {
    // Blog post pages and the case study page set their own SEO + schemas
    if (pathname.startsWith('/blog/') && pathname !== '/blog') return
    if (pathname.startsWith('/case-studies/')) return

    const meta = ROUTE_META[pathname] || ROUTE_META['/']
    applySEO({ title: meta.title, description: meta.description, pathname })

    // Per-route structured data: always emit a Breadcrumb. Homepage gets
    // ProfessionalService + FAQPage on top. Pages with their own FAQs
    // attach FAQPage from within the page component using setPageSchemas.
    const schemas = []
    schemas.push(breadcrumbSchema(breadcrumbsFromPath(pathname)))
    if (pathname === '/') {
      schemas.push(professionalServiceSchema())
      schemas.push(faqPageSchema(HOMEPAGE_FAQS))
    }
    setPageSchemas(schemas)
  }, [pathname])
  return null
}

function GoogleAnalyticsTracker() {
  const { pathname, search } = useLocation()
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: pathname + search,
        page_location: window.location.href,
        page_title: document.title,
      })
    }
  }, [pathname, search])
  return null
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <GoogleAnalyticsTracker />
      <SEO />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/agentforce"       element={<AgentforcePage />} />
          <Route path="/solutions/sales-cloud"      element={<SalesCloudPage />} />
          <Route path="/solutions/service-cloud"    element={<ServiceCloudPage />} />
          <Route path="/solutions/marketing-cloud"  element={<MarketingCloudPage />} />
          <Route path="/solutions/commerce-cloud"   element={<CommerceCloudPage />} />
          <Route path="/solutions/experience-cloud" element={<ExperienceCloudPage />} />
          <Route path="/solutions/analytics"        element={<AnalyticsPage />} />
          <Route path="/solutions/platform"         element={<PlatformPage />} />
          <Route path="/solutions/slack"            element={<SlackPage />} />
          <Route path="/solutions/health-cloud"     element={<HealthCloudPage />} />
          <Route path="/solutions/financial-services-cloud" element={<FinancialServicesCloudPage />} />
          <Route path="/solutions/life-sciences-cloud"      element={<LifeSciencesCloudPage />} />
          <Route path="/solutions/education-cloud"          element={<EducationCloudPage />} />
          <Route path="/solutions/nonprofit-cloud"          element={<NonprofitCloudPage />} />
          <Route path="/solutions/hubspot"                       element={<HubSpotOverview />} />
          <Route path="/solutions/hubspot-smart-crm"             element={<HubSpotSmartCRM />} />
          <Route path="/solutions/hubspot-breeze-ai"             element={<HubSpotBreezeAI />} />
          <Route path="/solutions/hubspot-marketing-hub"         element={<HubSpotMarketingHub />} />
          <Route path="/solutions/hubspot-sales-hub"             element={<HubSpotSalesHub />} />
          <Route path="/solutions/hubspot-service-hub"           element={<HubSpotServiceHub />} />
          <Route path="/solutions/hubspot-content-hub"           element={<HubSpotContentHub />} />
          <Route path="/solutions/hubspot-data-hub"              element={<HubSpotDataHub />} />
          <Route path="/solutions/hubspot-commerce-hub"          element={<HubSpotCommerceHub />} />
          <Route path="/solutions/hubspot-small-business-bundle" element={<HubSpotSmallBusinessBundle />} />
          {/* Legacy URL redirects */}
          <Route path="/solutions/hubspot-cms-hub"        element={<Navigate to="/solutions/hubspot-content-hub" replace />} />
          <Route path="/solutions/hubspot-operations-hub" element={<Navigate to="/solutions/hubspot-data-hub"    replace />} />
          <Route path="/solutions/aws"                      element={<AWSPage />} />
          <Route path="/solutions/microsoft-dynamics"                  element={<MicrosoftDynamicsPage />} />
          <Route path="/solutions/dynamics-365-customer-experience"    element={<DynamicsCustomerExperience />} />
          <Route path="/solutions/dynamics-365-service"                element={<DynamicsService />} />
          <Route path="/solutions/dynamics-365-supply-chain"           element={<DynamicsSupplyChain />} />
          <Route path="/solutions/dynamics-365-finance"                element={<DynamicsFinance />} />
          <Route path="/solutions/dynamics-365-business-central"       element={<DynamicsBusinessCentral />} />
          <Route path="/solutions/microsoft-power-platform"            element={<MicrosoftPowerPlatform />} />
          <Route path="/solutions/ai-agents"                element={<AIAgentsPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/case-studies/agentforce-manufacturing" element={<AgentforceManufacturingCase />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
      <Analytics />
      <SpeedInsights />
    </div>
  )
}
