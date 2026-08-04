import Link from 'next/link';
import './Services.css';

const services = [
  {
    title: 'Home Loan',
    slug: 'home-loan',
    description: 'Your Dream Home Awaits - Explore Our Range Of Home Loan Products.',
    image: '/services/home-loan.jpg'
  },
  {
    title: 'Loan against Property',
    slug: 'loan-against-property',
    description: 'Unlock your property\'s value with tailored loan solutions.',
    image: '/services/loan-against-property.jpg'
  },
  {
    title: 'Personal Loan',
    slug: 'personal-loan',
    description: 'Achieve your dreams with our versatile personal loan options.',
    image: '/services/personal-loan.jpg'
  },
  {
    title: 'Business Loan',
    slug: 'business-loan',
    description: 'Boost your business growth with our flexible financing options.',
    image: '/services/business-loan.jpg'
  },
  {
    title: 'Education Loan',
    slug: 'education-loan',
    description: 'Invest in your child\'s future with our specialized education loans.',
    image: '/services/education-loan.jpg'
  },
  {
    title: 'Car Loan',
    slug: 'car-loan',
    description: 'Drive your dream car with our quick and flexible car loans.',
    image: '/services/car-loan.jpg'
  },
  {
    title: 'Gold Loan',
    slug: 'gold-loan',
    description: 'Meet your financial needs with gold loans from trusted banks.',
    image: '/services/gold-loan.jpg'
  },
  {
    title: 'Credit Cards',
    slug: 'credit-cards',
    description: 'Upgrade your lifestyle with feature-packed, rewarding credit cards.',
    image: '/services/credit-cards.jpg'
  }
];

function Services() {
  return (
    <section id="services" className="section section-bg-light">
      <div className="container">
        <div className="section-header text-center animate-fade-in-up">
          <h2>Tailored Financing Solutions</h2>
          <p>We analyze your profile to match you with the perfect financial product.</p>
        </div>
        
        <div className="grid grid-4 services-grid">
          {services.map((service, index) => (
            <div className={`service-card animate-fade-in-up delay-${(index % 4 + 1) * 100}`} key={index}>
              <div className="service-card-image">
                <img src={service.image} alt={service.title} loading="lazy" />
              </div>
              <div className="service-card-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-card-footer">
                  <Link href={`/services/${service.slug}`} className="check-eligibility-link">
                    Check Eligibility <span className="arrow-circle">&gt;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
