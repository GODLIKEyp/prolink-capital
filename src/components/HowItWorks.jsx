import './HowItWorks.css';

const steps = [
  {
    num: '01',
    title: 'Consultation',
    description: 'Tell us your requirements, financial goals, and current profile.'
  },
  {
    num: '02',
    title: 'Market Match',
    description: 'We find the best bank, interest rate, and terms for your unique profile.'
  },
  {
    num: '03',
    title: 'Application & Approval',
    description: 'We handle the heavy lifting and all paperwork to ensure fast approval.'
  },
  {
    num: '04',
    title: 'Disbursement',
    description: 'You get funded quickly, and our service remains 100% free for you.'
  }
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <div className="section-header text-center animate-fade-in-up">
          <h2>Your Path to the Perfect Loan</h2>
          <p>A seamless, transparent, and hassle-free process from start to finish.</p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div className="step-item animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }} key={index}>
              <div className="step-number">{step.num}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
