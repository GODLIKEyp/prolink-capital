"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import './EmiCalculator.css';

const loanCategories = [
  { id: 'home', label: 'Home Loan', icon: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=100&q=80', bgImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80', defaultRate: 8.5, defaultTenure: 20, maxAmount: 10000000 },
  { id: 'business', label: 'Business Loan', icon: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=100&q=80', bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80', defaultRate: 12, defaultTenure: 7, maxAmount: 5000000 },
  { id: 'personal', label: 'Personal Loan', icon: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&w=100&q=80', bgImage: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&w=1200&q=80', defaultRate: 14, defaultTenure: 5, maxAmount: 2500000 },
  { id: 'professional', label: 'Professional Loan', icon: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=100&q=80', bgImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80', defaultRate: 10.5, defaultTenure: 10, maxAmount: 7500000 },
  { id: 'car', label: 'Car Loan', icon: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0637?auto=format&fit=crop&w=100&q=80', bgImage: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0637?auto=format&fit=crop&w=1200&q=80', defaultRate: 9.5, defaultTenure: 5, maxAmount: 3000000 },
  { id: 'education', label: 'Education Loan', icon: 'https://images.unsplash.com/photo-1523050854058-8df90110c476?auto=format&fit=crop&w=100&q=80', bgImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c476?auto=format&fit=crop&w=1200&q=80', defaultRate: 10, defaultTenure: 7, maxAmount: 5000000 },
  { id: 'gold', label: 'Gold Loan', icon: 'https://images.unsplash.com/photo-1610375461249-06e4f1c04ce7?auto=format&fit=crop&w=100&q=80', bgImage: 'https://images.unsplash.com/photo-1610375461249-06e4f1c04ce7?auto=format&fit=crop&w=1200&q=80', defaultRate: 7.5, defaultTenure: 3, maxAmount: 2500000 },
  { id: 'property', label: 'Loan Against Property', icon: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=100&q=80', bgImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80', defaultRate: 9, defaultTenure: 15, maxAmount: 10000000 },
];

function formatCurrency(num) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num);
}

function EmiCalculator({ loanType }) {
  const isLocked = !!loanType;

  const initialCategory = useMemo(() => {
    if (loanType) {
      return loanCategories.find(c => c.id === loanType) || loanCategories[0];
    }
    return loanCategories[0];
  }, [loanType]);

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [principal, setPrincipal] = useState(Math.round(initialCategory.maxAmount / 4));
  const [rate, setRate] = useState(initialCategory.defaultRate);
  const [tenure, setTenure] = useState(initialCategory.defaultTenure);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setRate(cat.defaultRate);
    setTenure(cat.defaultTenure);
    setPrincipal(Math.round(cat.maxAmount / 4));
  };

  // EMI Formula: EMI = P × r × (1+r)^n / ((1+r)^n - 1)
  const monthlyRate = rate / 12 / 100;
  const months = tenure * 12;
  let emi = 0;
  let totalPayment = 0;
  let totalInterest = 0;

  if (monthlyRate > 0 && months > 0 && principal > 0) {
    emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
    totalPayment = emi * months;
    totalInterest = totalPayment - principal;
  }

  const interestPercent = totalPayment > 0 ? (totalInterest / totalPayment) * 100 : 0;
  const principalPercent = totalPayment > 0 ? (principal / totalPayment) * 100 : 0;

  return (
    <section className={`section emi-section ${isLocked ? 'emi-section--locked' : ''}`}>
      <div className="container">
        {!isLocked && (
          <div className="section-header text-center animate-fade-in-up">
            <h2>EMI Calculator</h2>
            <p>Plan your finances. Calculate your monthly EMI across loan categories instantly.</p>
          </div>
        )}

        {/* Category Tabs - only when NOT locked to a specific loan type */}
        {!isLocked && (
          <div className="emi-tabs">
            {loanCategories.slice(0, 4).map((cat) => (
              <button
                key={cat.id}
                className={`emi-tab ${activeCategory.id === cat.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat)}
              >
                <img src={cat.icon} alt="" className="emi-tab-img" />
                {cat.label}
              </button>
            ))}
          </div>
        )}

        <div 
          className="emi-calculator-body"
          style={{
            backgroundImage: `linear-gradient(rgba(248, 250, 252, 0.92), rgba(248, 250, 252, 0.95)), url(${activeCategory.bgImage})`
          }}
        >
          {/* Sliders Panel */}
          <div className="emi-sliders">
            <div className="slider-group">
              <div className="slider-label">
                <span>Loan Amount</span>
                <span className="slider-value">{formatCurrency(principal)}</span>
              </div>
              <input
                type="range"
                min="100000"
                max={activeCategory.maxAmount}
                step="50000"
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="emi-slider"
              />
              <div className="slider-range">
                <span>₹1L</span>
                <span>{formatCurrency(activeCategory.maxAmount)}</span>
              </div>
            </div>

            <div className="slider-group">
              <div className="slider-label">
                <span>Interest Rate (% p.a.)</span>
                <span className="slider-value">{rate}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="24"
                step="0.25"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="emi-slider"
              />
              <div className="slider-range">
                <span>5%</span>
                <span>24%</span>
              </div>
            </div>

            <div className="slider-group">
              <div className="slider-label">
                <span>Loan Tenure (Years)</span>
                <span className="slider-value">{tenure} Yrs</span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="emi-slider"
              />
              <div className="slider-range">
                <span>1 Yr</span>
                <span>30 Yrs</span>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="emi-results">
            <div className="emi-donut-wrapper">
              <svg viewBox="0 0 36 36" className="emi-donut">
                <circle cx="18" cy="18" r="15.9155" className="donut-bg" />
                <circle
                  cx="18" cy="18" r="15.9155"
                  className="donut-principal"
                  strokeDasharray={`${principalPercent} ${100 - principalPercent}`}
                  strokeDashoffset="25"
                />
                <circle
                  cx="18" cy="18" r="15.9155"
                  className="donut-interest"
                  strokeDasharray={`${interestPercent} ${100 - interestPercent}`}
                  strokeDashoffset={`${25 - principalPercent}`}
                />
              </svg>
              <div className="emi-donut-center">
                <span className="emi-monthly-label">Monthly EMI</span>
                <span className="emi-monthly-value">{formatCurrency(Math.round(emi))}</span>
              </div>
            </div>

            <div className="emi-breakdown">
              <div className="emi-breakdown-item">
                <span className="dot dot-principal"></span>
                <div>
                  <span className="breakdown-label">Principal</span>
                  <span className="breakdown-value">{formatCurrency(principal)}</span>
                </div>
              </div>
              <div className="emi-breakdown-item">
                <span className="dot dot-interest"></span>
                <div>
                  <span className="breakdown-label">Total Interest</span>
                  <span className="breakdown-value">{formatCurrency(Math.round(totalInterest))}</span>
                </div>
              </div>
              <div className="emi-breakdown-item total">
                <div>
                  <span className="breakdown-label">Total Payment</span>
                  <span className="breakdown-value">{formatCurrency(Math.round(totalPayment))}</span>
                </div>
              </div>
            </div>

            <Link href="/apply" className="btn btn-primary emi-apply-btn">
              Apply Now →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmiCalculator;
