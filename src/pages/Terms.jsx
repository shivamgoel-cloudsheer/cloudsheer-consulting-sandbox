import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Terms() {
  return (
    <section className="pt-28 sm:pt-32 pb-12 sm:pb-16">
      <div className="section-wrap max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-medium mb-8 transition-colors"
          style={{ color: '#0176D3' }}>
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-black mb-2" style={{ color: '#032D60' }}>Terms & Conditions</h1>
        <p className="text-sm mb-10" style={{ color: '#94A3B8' }}>Last updated: April 8, 2026</p>

        <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#475569' }}>
          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#032D60' }}>1. Agreement to Terms</h2>
            <p>By accessing and using the Cloudsheer Consulting website (www.cloudsheer.com), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not use our website.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#032D60' }}>2. Services</h2>
            <p>Cloudsheer Consulting provides Salesforce consulting, implementation, and Agentforce AI agent deployment services. The specific scope, deliverables, timeline, and pricing for any engagement will be defined in a separate Statement of Work (SOW) or service agreement signed by both parties. Nothing on this website constitutes a binding offer or contract for services.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#032D60' }}>3. Intellectual Property</h2>
            <p className="mb-3">All content on this website - including text, graphics, logos, images, icons, and software - is the property of Cloudsheer Consulting or its content suppliers and is protected by intellectual property laws. You may not:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Reproduce, distribute, or modify any content without our prior written consent</li>
              <li>Use our trademarks, logos, or branding in any manner that suggests endorsement or affiliation without permission</li>
              <li>Scrape, extract, or collect content from our website for commercial purposes</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#032D60' }}>4. Use of Website</h2>
            <p className="mb-3">You agree to use our website only for lawful purposes and in a manner that does not:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Attempt to gain unauthorised access to our systems or data</li>
              <li>Transmit malicious code, viruses, or harmful content</li>
              <li>Interfere with the proper functioning of the website</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#032D60' }}>5. Disclaimers</h2>
            <p className="mb-3"><strong>Website Content:</strong> The information on this website is provided for general informational purposes only. While we strive to keep the content accurate and up to date, we make no warranties or representations about the completeness, accuracy, or reliability of any information.</p>
            <p className="mb-3"><strong>Results and Statistics:</strong> Performance metrics, case studies, and statistics referenced on this website are based on published Salesforce data, industry benchmarks, and aggregated client outcomes. Individual results may vary depending on your Salesforce org configuration, data quality, business processes, and other factors.</p>
            <p><strong>Third-Party Services:</strong> Our website integrates with third-party services including Salesforce, Cal.com, and Vercel. We are not responsible for the availability, accuracy, or practices of these third-party services.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#032D60' }}>6. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Cloudsheer Consulting shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or our services. Our total liability for any claim arising from or related to this website shall not exceed the amount you have paid to us in the 12 months preceding the claim, or $100, whichever is greater.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#032D60' }}>7. Confidentiality</h2>
            <p>Any information you share with us through our contact forms, discovery calls, or email communications will be treated as confidential. We will not disclose your business information to third parties without your consent, except as required by law or as described in our Privacy Policy.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#032D60' }}>8. Engagement Terms</h2>
            <p>All consulting engagements are governed by a separate Statement of Work (SOW) that will specify scope, deliverables, timeline, pricing, payment terms, and termination conditions. These Terms and Conditions apply to website usage only and do not replace engagement-specific agreements.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#032D60' }}>9. Links to Third Parties</h2>
            <p>Our website contains links to external websites (Salesforce, LinkedIn, AppExchange, Cal.com). These links are provided for convenience and do not imply endorsement. We are not responsible for the content, terms, or privacy practices of linked websites.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#032D60' }}>10. Governing Law</h2>
            <p>These Terms and Conditions are governed by and construed in accordance with the laws of the United States. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Dallas, Texas, USA.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#032D60' }}>11. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms and Conditions at any time. Changes will be posted on this page with an updated "Last updated" date. Your continued use of the website after changes constitutes acceptance of the revised terms.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#032D60' }}>12. Contact</h2>
            <p>For questions about these Terms and Conditions, contact us at:</p>
            <p className="mt-2"><strong>Email:</strong> <a href="mailto:hello@cloudsheer.com" style={{ color: '#0176D3' }}>hello@cloudsheer.com</a></p>
            <p><strong>Company:</strong> Cloudsheer Consulting</p>
            <p><strong>Offices:</strong> Dallas, USA | Delhi, India | London, UK | New York, USA</p>
          </div>
        </div>
      </div>
    </section>
  )
}
