import './ValueProposition.css';

const benefits = [
  {
    title: 'Unbiased Advice',
    description: 'We work for you, not the banks. Our recommendations are strictly based on what is best for your financial health.',
    icon: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=100&q=80'
  },
  {
    title: 'Market Expertise',
    description: 'With years of industry experience, we know how to navigate complex bank policies to get you approved faster.',
    icon: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=100&q=80'
  },
  {
    title: 'Zero Fees for You',
    description: 'Our service is completely free for our customers. We earn our fee directly from the partner banks upon successful loan disbursal.',
    icon: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=100&q=80'
  },
  {
    title: 'End-to-End Support',
    description: 'From documentation collection to final disbursement, we handle the entire process so you don\'t have to.',
    icon: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=100&q=80'
  }
];

function ValueProposition() {
  return (
    <section className="section section-bg-navy">
      <div className="container">
        <div className="value-prop-layout">
          <div className="value-prop-text animate-fade-in-up">
            <h2>Why Choose ProLink Capital?</h2>
            <p className="lead">We bridge the gap between you and top-tier banks, ensuring you secure the optimal financing solution without the stress.</p>
            <a href="#contact" className="btn btn-gold mt-4">Consult with an Expert</a>
          </div>
          
          <div className="value-prop-grid">
            {benefits.map((benefit, index) => (
              <div className={`benefit-card animate-fade-in-up delay-${(index + 1) * 100}`} key={index}>
                <img src={benefit.icon} alt="" className="benefit-img" />
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValueProposition;
