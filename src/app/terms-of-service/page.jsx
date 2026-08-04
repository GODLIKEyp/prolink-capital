export const metadata = { title: 'Terms of Service' };
import '@/app/LegalPage.css';

function TermsOfService() {
  return (
    <div className="legal-page page-content animate-fade-in-up">
      <div className="container">
        <div className="legal-header">
          <h1>Terms of Service</h1>
          <p className="legal-effective">Effective Date: July 2026</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the ProLink Capital website and services, you agree to comply with and be bound by these Terms of Service. If you do not agree with these terms, please do not use our website.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Nature of Service</h2>
            <div className="legal-highlight">
              <p>
                ProLink Capital operates strictly as an <strong>independent loan consultancy and lead generation service</strong>. We are not a bank, NBFC, or direct lender. Our service involves connecting prospective borrowers with partner financial institutions. All final decisions regarding loan approval, interest rates, and disbursement are made solely by the respective partner banks based on their internal credit policies.
              </p>
            </div>
          </section>

          <section className="legal-section">
            <h2>3. No Financial Advice</h2>
            <p>
              The content provided on this website, including articles, service descriptions, and outputs from our EMI Calculators, is for <strong>informational and estimation purposes only</strong>. It does not constitute formal financial, legal, or professional advice. Actual loan terms may vary based on your credit profile and bank policies.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. User Responsibilities</h2>
            <p>
              When applying for a loan consultation, you agree to provide accurate, current, and complete information. Providing false or misleading information (including forged KYC or income documents) may result in:
            </p>
            <ul>
              <li>Immediate rejection of your application by our partner banks.</li>
              <li>Potential legal consequences under applicable Indian law.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Fees and Charges</h2>
            <div className="legal-highlight legal-highlight--green">
              <p>
                ProLink Capital provides its consultancy services to users <strong>completely free of charge</strong>. We are compensated directly by our partner banks and financial institutions for successful lead generation and loan disbursements. We will never ask you for an upfront consultancy fee to process your loan.
              </p>
            </div>
          </section>

          <section className="legal-section">
            <h2>6. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services (such as partner banks). ProLink Capital has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, ProLink Capital and its representatives shall not be liable for any direct, indirect, incidental, or consequential damages resulting from:
            </p>
            <ul>
              <li>Your use of our website or reliance on our EMI calculators.</li>
              <li>The rejection of any loan application by a third-party lender.</li>
              <li>Any actions taken by partner banks or financial institutions.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>8. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the <strong>laws of India</strong>. Any disputes arising out of these terms shall be subject to the exclusive jurisdiction of the courts located in <strong>Lucknow, Uttar Pradesh</strong>.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Contact Us</h2>
            <p>For any questions regarding these Terms, please reach out to us:</p>
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

export default TermsOfService;
