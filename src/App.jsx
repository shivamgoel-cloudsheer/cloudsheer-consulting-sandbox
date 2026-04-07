import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Careers from './pages/Careers'
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

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
