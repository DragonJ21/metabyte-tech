import { Layout } from "@/components/layout"

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900">
                Privacy <span className="text-[#0081FB]">Policy</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto prose prose-gray">
            <div className="space-y-8">
              <div>
                <p className="text-gray-600 mb-4">
                  <strong>Last updated:</strong> December 25, 2024
                </p>
                <p className="text-gray-600">
                  METABYTE.TECH ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                  explains how your personal information is collected, used, and disclosed by METABYTE.TECH.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Information We Collect</h2>
                <div className="space-y-4 text-gray-600">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Personal Information</h3>
                    <p>
                      We may collect personal information you provide directly to us, such as when you create an
                      account, contact us, or use our services. This may include:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Name and contact information (email address, mailing address)</li>
                      <li>Company information and job title</li>
                      <li>Project requirements and technical specifications</li>
                      <li>Payment and billing information</li>
                      <li>Communications with us</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Automatically Collected Information</h3>
                    <p>
                      When you visit our website, we may automatically collect certain information about your device,
                      including:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>IP address and location data</li>
                      <li>Browser type and version</li>
                      <li>Pages visited and time spent on our site</li>
                      <li>Referring website addresses</li>
                      <li>Device identifiers and characteristics</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">How We Use Your Information</h2>
                <div className="text-gray-600 space-y-2">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices, updates, and support messages</li>
                    <li>Respond to your comments, questions, and customer service requests</li>
                    <li>Communicate with you about products, services, and events</li>
                    <li>Monitor and analyze trends, usage, and activities</li>
                    <li>Detect, investigate, and prevent fraudulent transactions</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Information Sharing and Disclosure</h2>
                <div className="text-gray-600 space-y-4">
                  <p>We may share your personal information in the following situations:</p>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Service Providers</h3>
                    <p>
                      We may employ third-party companies and individuals to facilitate our services, provide services
                      on our behalf, or assist us in analyzing how our services are used.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Legal Requirements</h3>
                    <p>
                      We may disclose your information if required to do so by law or in response to valid requests by
                      public authorities.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Business Transfers</h3>
                    <p>
                      If we are involved in a merger, acquisition, or asset sale, your personal information may be
                      transferred.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Data Security</h2>
                <p className="text-gray-600">
                  We implement appropriate technical and organizational security measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction. However, no method of
                  transmission over the internet or electronic storage is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Data Retention</h2>
                <p className="text-gray-600">
                  We retain personal information for as long as necessary to fulfill the purposes outlined in this
                  Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Your Rights</h2>
                <div className="text-gray-600 space-y-2">
                  <p>Depending on your location, you may have the following rights:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Access to your personal information</li>
                    <li>Correction of inaccurate personal information</li>
                    <li>Deletion of your personal information</li>
                    <li>Restriction of processing</li>
                    <li>Data portability</li>
                    <li>Objection to processing</li>
                    <li>Withdrawal of consent</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Cookies and Tracking Technologies</h2>
                <p className="text-gray-600">
                  We use cookies and similar tracking technologies to track activity on our website and store certain
                  information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                  sent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">International Data Transfers</h2>
                <p className="text-gray-600">
                  Your information may be transferred to and maintained on computers located outside of your state,
                  province, country, or other governmental jurisdiction where data protection laws may differ.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Changes to This Privacy Policy</h2>
                <p className="text-gray-600">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Contact Us</h2>
                <div className="text-gray-600 space-y-2">
                  <p>If you have any questions about this Privacy Policy, please contact us:</p>
                  <ul className="space-y-1">
                    <li>Email: privacy@metabyte.tech</li>
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
