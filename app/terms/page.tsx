import { Layout } from "@/components/layout"

export default function TermsOfServicePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900">
                Terms of <span className="text-[#0081FB]">Service</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Please read these terms and conditions carefully before using our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto prose prose-gray">
            <div className="space-y-8">
              <div>
                <p className="text-gray-600 mb-4">
                  <strong>Last updated:</strong> December 25, 2024
                </p>
                <p className="text-gray-600">
                  These Terms of Service ("Terms") govern your use of METABYTE.TECH's website and services. By accessing
                  or using our services, you agree to be bound by these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Acceptance of Terms</h2>
                <p className="text-gray-600">
                  By accessing and using METABYTE.TECH's services, you accept and agree to be bound by the terms and
                  provision of this agreement. If you do not agree to abide by the above, please do not use this
                  service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Description of Service</h2>
                <div className="text-gray-600 space-y-2">
                  <p>METABYTE.TECH provides IT outsourcing services including but not limited to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Cloud solutions and migration services</li>
                    <li>Web and mobile application development</li>
                    <li>Database design and management</li>
                    <li>Team augmentation services</li>
                    <li>Digital transformation consulting</li>
                    <li>Technical support and maintenance</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">3. User Obligations</h2>
                <div className="text-gray-600 space-y-4">
                  <p>As a user of our services, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the confidentiality of your account credentials</li>
                    <li>Use our services only for lawful purposes</li>
                    <li>Not interfere with or disrupt our services</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Respect intellectual property rights</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Service Availability</h2>
                <p className="text-gray-600">
                  We strive to maintain high service availability but cannot guarantee uninterrupted access to our
                  services. We may temporarily suspend services for maintenance, updates, or other operational reasons.
                  We will provide reasonable notice when possible.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Payment Terms</h2>
                <div className="text-gray-600 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Fees and Payment</h3>
                    <p>
                      Payment terms will be specified in individual service agreements. Unless otherwise agreed,
                      invoices are due within 30 days of the invoice date.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Late Payments</h3>
                    <p>
                      Late payments may incur additional charges and may result in suspension of services until payment
                      is received.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Refunds</h3>
                    <p>
                      Refund policies will be specified in individual service agreements. Generally, payments for
                      completed work are non-refundable.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Intellectual Property</h2>
                <div className="text-gray-600 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Our IP</h3>
                    <p>
                      All content, trademarks, and intellectual property on our website and in our services remain the
                      property of METABYTE.TECH unless otherwise specified.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Client IP</h3>
                    <p>
                      Upon full payment, clients retain ownership of custom-developed solutions, subject to any
                      third-party licenses and our retained rights to general methodologies and know-how.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Confidentiality</h2>
                <p className="text-gray-600">
                  We maintain strict confidentiality regarding client information and projects. Both parties agree to
                  protect confidential information disclosed during the course of our business relationship.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Limitation of Liability</h2>
                <p className="text-gray-600">
                  To the maximum extent permitted by law, METABYTE.TECH shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages, including without limitation, loss of
                  profits, data, use, goodwill, or other intangible losses.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Indemnification</h2>
                <p className="text-gray-600">
                  You agree to indemnify and hold harmless METABYTE.TECH from any claims, damages, or expenses arising
                  from your use of our services or violation of these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Termination</h2>
                <div className="text-gray-600 space-y-2">
                  <p>Either party may terminate services:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>With written notice as specified in the service agreement</li>
                    <li>Immediately for material breach of these Terms</li>
                    <li>Immediately if the other party becomes insolvent</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">11. Governing Law</h2>
                <p className="text-gray-600">
                  These Terms shall be governed by and construed in accordance with the laws of New South Wales,
                  Australia, without regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">12. Dispute Resolution</h2>
                <p className="text-gray-600">
                  Any disputes arising from these Terms or our services shall be resolved through binding arbitration in
                  accordance with the rules of the Australian Centre for International Commercial Arbitration.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">13. Changes to Terms</h2>
                <p className="text-gray-600">
                  We reserve the right to modify these Terms at any time. We will notify users of any material changes.
                  Continued use of our services after changes constitutes acceptance of the new Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">14. Severability</h2>
                <p className="text-gray-600">
                  If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in
                  full force and effect.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">15. Contact Information</h2>
                <div className="text-gray-600 space-y-2">
                  <p>For questions about these Terms of Service, please contact us:</p>
                  <ul className="space-y-1">
                    <li>Email: legal@metabyte.tech</li>
                    <li>Address: Nexus Norwest, 4 Columbia Ct, Norwest NSW 2153</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
