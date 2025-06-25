import { Layout } from "@/components/layout"

export default function TermsOfServicePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Terms of <span className="text-[#0081FB]">Service</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Please read these terms and conditions carefully before using our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto prose prose-invert">
            <div className="space-y-8">
              <div>
                <p className="text-muted-foreground mb-4">
                  <strong>Last updated:</strong> December 25, 2024
                </p>
                <p className="text-muted-foreground">
                  These Terms of Service ("Terms") govern your use of METABYTE's website and services. By accessing
                  or using our services, you agree to be bound by these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using METABYTE's services, you accept and agree to be bound by the terms and
                  provision of this agreement. If you do not agree to abide by the above, please do not use this
                  service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
                <div className="text-muted-foreground space-y-2">
                  <p>METABYTE provides IT services including but not limited to:</p>
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
                <h2 className="text-2xl font-bold mb-4">3. User Obligations</h2>
                <div className="text-muted-foreground space-y-4">
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
                <h2 className="text-2xl font-bold mb-4">4. Service Availability</h2>
                <p className="text-muted-foreground">
                  We strive to maintain high service availability but cannot guarantee uninterrupted access to our
                  services. We may temporarily suspend services for maintenance, updates, or other operational reasons.
                  We will provide reasonable notice when possible.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Payment Terms</h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Fees and Payment</h3>
                    <p>
                      Payment terms will be specified in individual service agreements. Unless otherwise agreed,
                      invoices are due within 30 days of the invoice date.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Late Payments</h3>
                    <p>
                      Late payments may incur additional charges and may result in suspension of services until payment
                      is received.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Refunds</h3>
                    <p>
                      Refund policies will be specified in individual service agreements. Generally, payments for
                      completed work are non-refundable.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Our IP</h3>
                    <p>
                      All content, trademarks, and intellectual property on our website and in our services remain the
                      property of METABYTE unless otherwise specified.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Client IP</h3>
                    <p>
                      Upon full payment, clients retain ownership of custom-developed solutions, subject to any
                      third-party licenses and our retained rights to general methodologies and know-how.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Confidentiality</h2>
                <p className="text-muted-foreground">
                  We maintain strict confidentiality regarding client information and projects. Both parties agree to
                  protect confidential information disclosed during the course of our business relationship.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  To the maximum extent permitted by law, METABYTE shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages, including without limitation, loss of
                  profits, data, use, goodwill, or other intangible losses.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">9. Indemnification</h2>
                <p className="text-muted-foreground">
                  You agree to indemnify and hold harmless METABYTE from any claims, damages, or expenses arising
                  from your use of our services or violation of these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">10. Termination</h2>
                <div className="text-muted-foreground space-y-2">
                  <p>Either party may terminate services:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>With written notice as specified in the service agreement</li>
                    <li>Immediately for material breach of these Terms</li>
                    <li>Immediately if the other party becomes insolvent</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
                <p className="text-muted-foreground">
                  These Terms shall be governed by and construed in accordance with the laws of the State of California,
                  without regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">12. Dispute Resolution</h2>
                <p className="text-muted-foreground">
                  Any disputes arising from these Terms or our services shall be resolved through binding arbitration in
                  accordance with the rules of the American Arbitration Association.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">13. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these Terms at any time. We will notify users of any material changes.
                  Continued use of our services after changes constitutes acceptance of the new Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">14. Severability</h2>
                <p className="text-muted-foreground">
                  If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in
                  full force and effect.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">15. Contact Information</h2>
                <div className="text-muted-foreground space-y-2">
                  <p>For questions about these Terms of Service, please contact us:</p>
                  <ul className="space-y-1">
                    <li>Email: legal@metabyte.tech</li>
                    <li>Phone: +1 (555) 123-4567</li>
                    <li>Address: 123 Tech Street, Silicon Valley, CA 94000</li>
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
