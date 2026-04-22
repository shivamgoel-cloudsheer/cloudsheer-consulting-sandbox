import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Privacy() {
  return (
    <section className="pt-28 sm:pt-32 pb-12 sm:pb-16">
      <div className="section-wrap max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-medium mb-8 transition-colors"
          style={{ color: '#0176D3' }}>
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-black mb-2" style={{ color: '#032D60' }}>Privacy Policy</h1>
        <p className="text-sm mb-10" style={{ color: '#94A3B8' }}>Last updated: April 8, 2026</p>

        <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#475569' }}>
          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#032D60' }}>1. Introduction</h2>
            <p>Cloudsheer Consulting ("we", "us", "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website (www.cloudsheer.com) or engage with our services.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#032D60' }}>2. Information We Collect</h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and company name submitted through our contact forms.</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent on pages, browser type, device type, and referring URLs collected automatically through analytics.</li>
              <li><strong>Cookies:</strong> We use essential cookies to ensure the website functions properly. Third-party services (Cal.com, Vercel Analytics) may set their own cookies.</li>
              <li><strong>Communication Data:</strong> Records of correspondence if you contact us via email or our contact form.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#032D60' }}>3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To respond to your enquiries and provide requested services</li>
              <li>To create and manage Lead records in our Salesforce CRM for sales follow-up</li>
              <li>To improve our website, content, and user experience</li>
              <li>To send relevant communications about our services (only with your consent)</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#032D60' }}>4. Salesforce Web-to-Lead</h2>
            <p>When you submit our contact form, your information is sent directly to Salesforce via their Web-to-Lead feature. This data is stored in our Salesforce org and is subject to Salesforce's security standards (SOC 2 Type II, ISO 27001). We use this data solely for responding to your enquiry and managing our client relationship.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#032D60' }}>5. Data Sharing</h2>
            <p className="mb-3">We do not sell, rent, or trade your personal data. We may share your data with:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Salesforce:</strong> Our CRM platform where contact form submissions are stored</li>
              <li><strong>Cal.com:</strong> Our scheduling platform when you book a discovery call</li>
              <li><strong>Vercel:</strong> Our website hosting provider</li>
              <li><strong>Legal authorities:</strong> If required by law or to protect our rights</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#032D60' }}>6. Data Retention</h2>
            <p>We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, typically for the duration of our business relationship plus 3 years. You can request deletion of your data at any time by contacting us.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#032D60' }}>7. Your Rights</h2>
            <p className="mb-3">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Portability:</strong> Request transfer of your data in a machine-readable format</li>
              <li><strong>Objection:</strong> Object to processing of your data for marketing purposes</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, contact us at <a href="mailto:hello@cloudsheer.com" style={{ color: '#0176D3' }}>hello@cloudsheer.com</a>.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#032D60' }}>8. Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal data, including encryption in transit (HTTPS), secure hosting on Vercel, and enterprise-grade security through Salesforce's platform.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#032D60' }}>9. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites (Salesforce, LinkedIn, AppExchange). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#032D60' }}>10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. Continued use of our website after changes constitutes acceptance of the updated policy.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#032D60' }}>11. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="mt-2"><strong>Email:</strong> <a href="mailto:hello@cloudsheer.com" style={{ color: '#0176D3' }}>hello@cloudsheer.com</a></p>
            <p><strong>Company:</strong> Cloudsheer Consulting</p>
            <p><strong>Offices:</strong> Dallas, USA | Delhi, India | London, UK | New York, USA</p>
          </div>
        </div>
      </div>
    </section>
  )
}
