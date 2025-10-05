import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">QuickOffTimers Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                This Privacy Policy describes how QuickOffTimers ("we," "our," or "us") collects, 
                uses, and protects your information when you use our timer service. We are committed to 
                protecting your privacy and ensuring the security of your personal data.
              </p>
              <p className="text-gray-700">
                QuickOffTimers is designed to help merchants create and manage countdown timers 
                for their online stores, enhancing customer engagement and driving sales through urgency 
                and time-sensitive offers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">2.1 Store Information</h3>
              <p className="text-gray-700 mb-4">
                We collect basic store information necessary to provide QuickOffTimers services, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Store URL and domain information</li>
                <li>Store plan details</li>
                <li>Store timezone and localization preferences</li>
                <li>Existing Discounts details for timer data</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">2.2 Timer Data</h3>
              <p className="text-gray-700 mb-4">
                We store timer configurations and settings created by store owners, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Timer titles and descriptions</li>
                <li>Countdown dates and times</li>
                <li>Display settings and styling preferences</li>
                <li>Timer placement and positioning data</li>
              </ul>

              {/* <h3 className="text-xl font-medium text-gray-800 mb-3">2.3 Usage Analytics</h3>
              <p className="text-gray-700 mb-4">
                We collect anonymous usage data to improve our services:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Feature usage statistics</li>
                <li>Performance metrics</li>
                <li>Error logs and debugging information</li>
                <li>App installation and update data</li>
              </ul> */}
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the collected information solely for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Providing and maintaining QuickOffTimers services</li>
                <li>Processing timer configurations and displaying them on your store</li>
                <li>Managing your QuickOffTimers app subscription and billing</li>
                <li>Providing customer support and technical assistance</li>
                <li>Improving QuickOffTimers performance and features</li>
                <li>Ensuring compliance with our terms of service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Protection and Security</h2>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">4.1 Data Minimization</h3>
              <p className="text-gray-700 mb-4">
                We follow the principle of data minimization, collecting only the minimum amount of 
                personal data required to provide QuickOffTimers functionality. We do not collect customer 
                personal information such as names, addresses, phone numbers, or email addresses.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3">4.2 Encryption and Security</h3>
              <p className="text-gray-700 mb-4">
                We implement robust security measures to protect your data:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>All data is encrypted in transit using TLS 1.2 or higher</li>
                <li>Data at rest is encrypted using industry-standard encryption methods</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Secure backup procedures with encrypted backups</li>
                <li>Access controls limiting staff access to necessary data only</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">4.3 Data Retention</h3>
              <p className="text-gray-700 mb-4">
                We retain your data only for as long as necessary to provide our services:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Store information: Retained while your subscription is active</li>
                <li>Timer data: After timer expiration the data stays till deletion or deletion can immediately delete the data</li>
                {/* <li>Usage analytics: Retained for 12 months in anonymized form</li> */}
                <li>Account data: Deleted immediately after account termination</li>
              </ul>
            </section>

            {/* <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Sharing and Third Parties</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share 
                information only in the following limited circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>With trusted service providers who assist in operating the QuickOffTimers platform (under strict confidentiality agreements)</li>
              </ul>
            </section> */}

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights and Choices</h2>
              <p className="text-gray-700 mb-4">
                You have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong>Rectification:</strong> Correct any inaccurate or incomplete data</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
                <li><strong>Restriction:</strong> Limit how we process your data</li>
                <li><strong>Objection:</strong> Object to certain types of data processing</li>
              </ul>
              <p className="text-gray-700">
                To exercise these rights, please contact us using the information provided in the 
                "Contact Us" section below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Compliance with Privacy Regulations</h2>
              <p className="text-gray-700 mb-4">
                Our privacy practices are designed to comply with applicable privacy laws and regulations, 
                including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>General Data Protection Regulation (GDPR)</li>
                <li>California Consumer Privacy Act (CCPA)</li>
                <li>Personal Information Protection and Electronic Documents Act (PIPEDA)</li>
                <li>Other applicable regional privacy laws</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any 
                material changes by posting the new Privacy Policy on this page and updating 
                the "Last updated" date. We encourage you to review this Privacy Policy 
                periodically for any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or QuickOffTimers data practices, 
                please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> support@quickofftimers.com
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Address:</strong> INNOVIZE NOTIME PVT LTD, Sharon Industries Kanjirmattom P.O Ernakulam Kerala India
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong> +91 9809873068
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Data Protection Officer</h2>
              <p className="text-gray-700 mb-4">
                For any data protection concerns or to exercise your rights under applicable 
                privacy laws, you may contact the QuickOffTimers Data Protection Officer:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> dpo@quickofftimers.com
                </p>
                <p className="text-gray-700">
                  <strong>Subject Line:</strong> "Data Protection Inquiry"
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
