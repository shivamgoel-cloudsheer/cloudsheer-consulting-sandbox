import { Routes, Route, useLocation } from 'react-router-dom'
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

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
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
          <Route path="/services" element={<Services />} />
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
