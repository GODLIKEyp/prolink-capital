import './CallToAction.css';

function CallToAction() {
  return (
    <section id="contact" className="section cta-section">
      <div className="container">
        <div className="cta-box animate-fade-in-up">
          <h2>Ready to find your ideal loan?</h2>
          <p>Speak directly with our loan experts today and take the first step towards your financial goals.</p>
          <div className="cta-buttons">
            <a href="#" className="btn btn-primary">Schedule a Call</a>
            <a href="https://wa.me/917607708024" target="_blank" rel="noopener noreferrer" className="btn btn-outline whatsapp-btn">
              <span className="whatsapp-icon">📱</span> WhatsApp Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
