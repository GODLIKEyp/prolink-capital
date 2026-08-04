import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container animate-fade-in-up">
        <h1>Secure the Best Loan for Your Future.<br/>Zero Stress. Zero Fees.</h1>
        <p className="hero-subtitle">
          Expert loan consultancy tailored to your unique profile. From home loans to business financing, 
          ProLink Capital matches you with the market's best rates and handles the paperwork—100% free for you.
        </p>
        <div className="hero-ctas">
          <a href="#contact" className="btn btn-primary">Book a Free Consultation</a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
