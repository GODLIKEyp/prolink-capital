export const metadata = { title: 'About Us' };
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="section section-bg-light page-content animate-fade-in-up">
      <div className="container">
        <div className="section-header text-center">
          <h2>About Us</h2>
          <p>Learn more about ProLink Capital and our mission.</p>
        </div>
        <div className="about-intro">
          <p>
            At ProLink Capital, we believe that securing financing should be a transparent, straightforward, and stress-free experience. Founded by a team of ex-bankers and financial experts, we understand the intricacies of bank policies and use our insider knowledge to secure the most favorable terms for our clients.
          </p>
          <p>
            Our mission is to bridge the gap between individuals and top-tier financial institutions. We operate on a bank-paid lead generation model, which means our expert consultancy comes at absolutely zero cost to you. Your financial success is our priority.
          </p>
        </div>

        {/* ─── Founder Quote Section ─── */}
        <section className="founder-quote-section">
          {/* Decorative circles */}
          <span className="deco-circle deco-circle--tl"></span>
          <span className="deco-circle deco-circle--tr"></span>
          <span className="deco-circle deco-circle--bl"></span>

          <div className="founder-quote-inner">
            {/* Left: Photo */}
            <div className="founder-photo-col">
              <div className="founder-photo-frame">
                <img src="/ajay-pandey.jpg" alt="Ajay Pandey — Founder, ProLink Capital" />
              </div>
            </div>

            {/* Right: Quote */}
            <div className="founder-text-col">
              <span className="quote-icon">"</span>
              <h3 className="quote-heading">We Empower Our Clients by Giving the Right Financial Advice</h3>
              <div className="quote-body">
                <p>
                  "Our value, motto &amp; mission remains to instil the right financial knowledge among our clients and bestow the finest services to individuals seeking credit aid. Leveraging upon new-age technologies, we endeavour to create a financial environment where we can serve a large segment of the population. With the mission to 'help you borrow right,' our core aim remains to impart principled information and bridge the gap between the credit-seeking individuals and authentic lenders."
                </p>
              </div>
              <div className="quote-author">
                <span className="quote-author-name">Ajay Pandey</span>
                <span className="quote-author-title">Founder of ProLink Capital</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
