"use client";
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import '@/app/apply/ApplyForLoan.css';

const loanTypes = [
  'Home Loan',
  'Loan against Property',
  'Personal Loan',
  'Business Loan',
  'Education Loan',
  'Car Loan',
  'Gold Loan',
  'Credit Cards'
];

function ApplyForLoan() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    loanType: '',
    loanAmount: '',
    employmentType: '',
    monthlyIncome: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          client_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          loan_type: formData.loanType,
          amount: parseFloat(formData.loanAmount)
        }
      ]);

    setIsSubmitting(false);

    if (error) {
      console.error('Error submitting application:', error);
      setError('An error occurred while submitting your application. Please try again.');
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="section apply-page page-content animate-fade-in-up">
        <div className="container">
          <div className="apply-success">
            <div className="success-icon">✅</div>
            <h2>Application Submitted!</h2>
            <p>Thank you, {formData.fullName}. Our loan experts will review your application and get back to you within 24 hours.</p>
            <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Submit Another Application</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section apply-page page-content animate-fade-in-up">
      <div className="container">
        <div className="section-header text-center">
          <h2>Apply for a Loan</h2>
          <p>Fill out the form below and our experts will find the best loan match for your profile — completely free.</p>
        </div>

        <form className="apply-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. rahul@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 76077 08024"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="loanType">Loan Type *</label>
              <select
                id="loanType"
                name="loanType"
                value={formData.loanType}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select loan type</option>
                {loanTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="loanAmount">Desired Loan Amount (₹) *</label>
              <input
                type="number"
                id="loanAmount"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleChange}
                placeholder="e.g. 2500000"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="employmentType">Employment Type *</label>
              <select
                id="employmentType"
                name="employmentType"
                value={formData.employmentType}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select employment type</option>
                <option value="salaried">Salaried</option>
                <option value="self-employed">Self-Employed</option>
                <option value="business-owner">Business Owner</option>
                <option value="professional">Professional (Doctor/CA/Architect)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="monthlyIncome">Monthly Income (₹)</label>
              <input
                type="number"
                id="monthlyIncome"
                name="monthlyIncome"
                value={formData.monthlyIncome}
                onChange={handleChange}
                placeholder="e.g. 80000"
              />
            </div>
          </div>

          <div className="form-group form-group-full">
            <label htmlFor="message">Additional Details</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us anything else that would help us find the best loan for you..."
            ></textarea>
          </div>

          <div className="apply-form-footer">
            {error && <div className="form-error" style={{ color: 'red', marginBottom: '1rem', fontWeight: 'bold' }}>{error}</div>}
            <p className="form-disclaimer">By submitting this form, you agree to be contacted by ProLink Capital. Your data is secure and will never be shared with third parties.</p>
            <button type="submit" className="btn btn-primary apply-submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Application →'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ApplyForLoan;
