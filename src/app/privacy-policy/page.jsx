export const metadata = { title: 'Privacy Policy' };
import '@/app/LegalPage.css';

function PrivacyPolicy() {
  return (
    <div className="legal-page page-content animate-fade-in-up">
      <div className="container">
        <div className="legal-header">
          <h1>Privacy Policy</h1>
          <p className="legal-effective">Effective Date: July 2026</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Introduction</h2>
            <p>
              Welcome to ProLink Capital. We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our loan consultancy services.
            </p>
            <p>
              By using our website, you consent to the data practices described in this policy.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Information We Collect</h2>
            <p>To provide you with the best possible loan consultancy, we may collect the following types of information:</p>
            <ul>
              <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and location.</li>
              <li><strong>Financial & Employment Information:</strong> Employment status (e.g., Salaried, Self-Employed, Professional), estimated income, loan requirements, and calculator inputs.</li>
              <li><strong>Documentation (If applicable):</strong> KYC documents, PAN Card, Aadhar Card, and bank statements submitted securely through our portal for application processing.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, and tracking data (such as UTM parameters from QR codes) to understand how you access our site.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Assess your loan eligibility and match you with the most suitable financial products.</li>
              <li>Contact you via phone, WhatsApp, or email regarding your loan inquiry.</li>
              <li>Facilitate the loan application process on your behalf.</li>
              <li>Improve our website, calculators, and customer service.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. How We Share Your Information</h2>
            <div className="legal-highlight">
              <p>
                ProLink Capital is a loan consultancy, not a direct lender. By submitting your information, you explicitly consent to ProLink Capital sharing your data with our <strong>partner banking institutions and Non-Banking Financial Companies (NBFCs)</strong> for the sole purpose of evaluating your loan eligibility and processing your application.
              </p>
            </div>
            <p>
              We do not sell, rent, or trade your personal information to third parties for marketing purposes. We may also disclose information if required by law, such as to comply with a subpoena or similar legal process.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Data Security</h2>
            <p>
              We implement industry-standard security measures, including secure databases and encryption, to protect your personal information from unauthorized access, alteration, or disclosure. However, no internet transmission is entirely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Your Rights</h2>
            <p>
              Under applicable Indian laws (including the Information Technology Act and DPDP Act), you have the right to:
            </p>
            <ul>
              <li>Request access to the personal data we hold about you.</li>
              <li>Request corrections to inaccurate data.</li>
              <li>Request the deletion of your data.</li>
            </ul>
            <p>To exercise these rights, please contact us using the details below.</p>
          </section>

          <section className="legal-section">
            <h2>7. Contact Us</h2>
            <p>If you have questions or concerns about this Privacy Policy, please contact us at:</p>
            <div className="legal-contact-card">
              <p><strong>ProLink Capital</strong></p>
              <p>Office No -S2, 2nd Floor, Jeevan Sahara Tower, Sector 2, Vikas Nagar,<br />Lucknow, Uttar Pradesh 226022</p>
              <p>Email: <a href="mailto:contact@prolinkcapital.com">contact@prolinkcapital.com</a></p>
              <p>Phone: <a href="tel:+917607708024">+91 7607708024</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
