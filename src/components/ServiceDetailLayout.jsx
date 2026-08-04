"use client";

import { useState } from 'react';
import Link from 'next/link';
import EmiCalculator from './EmiCalculator';
import { IconCheckCircle, IconFileText } from './Icons';
import './ServiceDetailLayout.css';

/**
 * ServiceDetailLayout — A reusable, modern service detail page template.
 *
 * Props:
 * @param {string}   title         - Page heading (e.g., "Home Loan Services")
 * @param {string}   subtitle      - Short intro paragraph
 * @param {Array}    features      - Array of { icon: ReactNode, title: string, description: string }
 * @param {string}   loanType      - EMI calculator loan type id (e.g., "home", "business")
 * @param {string}   emiDescription - Optional description text above the EMI calculator
 * @param {Array}    tabs          - Array of { id, label, eligibility: string[], documents: string[] }
 * @param {Array}    feesData      - Array of { particular: string, charge: string }
 * @param {string}   feesNote      - Optional footnote below the fees table
 * @param {React.ReactNode}  extraContent - Optional additional content rendered before the EMI section
 */
function ServiceDetailLayout({
  title,
  subtitle,
  features = [],
  loanType,
  emiDescription,
  tabs = [],
  feesData = [],
  feesNote,
  extraContent,
}) {
  const [activeTab, setActiveTab] = useState(tabs.length > 0 ? tabs[0].id : null);
  const currentTab = tabs.find(t => t.id === activeTab);

  return (
    <div className="page-content sdl animate-fade-in-up">
      {/* ─── 1. HERO ─── */}
      <section className="sdl-hero">
        <div className="container">
          <h1 className="sdl-hero__title">{title}</h1>
          <p className="sdl-hero__subtitle">{subtitle}</p>
          <div className="sdl-hero__actions">
            <Link href="/apply" className="btn btn-primary btn--lg">Apply Now</Link>
            <Link href="/contact-us" className="btn btn-outline btn--lg">Book a Consultation</Link>
          </div>
        </div>
      </section>

      {/* ─── 2. FEATURES GRID ─── */}
      {features.length > 0 && (
        <section className="sdl-features">
          <div className="container">
            <h2 className="sdl-section-title">Features & Benefits</h2>
            <div className={`sdl-features__grid ${features.length <= 4 ? 'sdl-features__grid--2col' : ''}`}>
              {features.map((feat, i) => (
                <div className="sdl-feature-card" key={i}>
                  <div className="sdl-feature-card__icon">{feat.icon}</div>
                  <div>
                    <h3 className="sdl-feature-card__title">{feat.title}</h3>
                    <p className="sdl-feature-card__desc">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── EXTRA CONTENT (optional, e.g. "How to Apply" for Gold Loan) ─── */}
      {extraContent && (
        <section className="sdl-extra">
          <div className="container">
            {extraContent}
          </div>
        </section>
      )}

      {/* ─── 3. EMI CALCULATOR ─── */}
      <section className="sdl-emi">
        <div className="container">
          <h2 className="sdl-section-title">EMI Calculator</h2>
          {emiDescription && <p className="sdl-emi__desc">{emiDescription}</p>}
          <EmiCalculator loanType={loanType} />
        </div>
      </section>

      {/* ─── 4. ELIGIBILITY & DOCUMENTS (TABBED) ─── */}
      {tabs.length > 0 && (
        <section className="sdl-eligibility">
          <div className="container">
            <h2 className="sdl-section-title">Eligibility & Documentation</h2>

            <div className="sdl-tabs">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`sdl-tab ${activeTab === tab.id ? 'sdl-tab--active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {currentTab && (
              <div className="sdl-tab-panel">
                <div className="sdl-tab-panel__col">
                  <h3 className="sdl-tab-panel__heading">
                    <IconCheckCircle size={20} color="var(--emerald)" /> Eligibility Criteria
                  </h3>
                  <ul className="sdl-check-list">
                    {currentTab.eligibility.map((item, i) => (
                      <li key={i}>
                        <svg className="sdl-check-icon" viewBox="0 0 20 20" fill="var(--emerald)">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sdl-tab-panel__col">
                  <h3 className="sdl-tab-panel__heading">
                    <IconFileText size={20} color="var(--navy)" /> Required Documents
                  </h3>
                  <ul className="sdl-doc-list">
                    {currentTab.documents.map((doc, i) => (
                      <li key={i}>
                        <svg className="sdl-doc-icon" viewBox="0 0 20 20" fill="var(--slate)">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"/>
                        </svg>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ─── 5. MID-PAGE CTA BANNER ─── */}
      <section className="sdl-cta-banner">
        <div className="container">
          <h2>Ready to get started?</h2>
          <p>Check your exact eligibility in 2 minutes.</p>
          <Link href="/apply" className="btn btn-primary btn--lg">Apply Now →</Link>
        </div>
      </section>

      {/* ─── 6. FEES & CHARGES TABLE ─── */}
      {feesData.length > 0 && (
        <section className="sdl-fees">
          <div className="container">
            <h2 className="sdl-section-title">Fees & Charges</h2>
            <div className="sdl-fees__table-wrap">
              <table className="sdl-fees__table">
                <thead>
                  <tr>
                    <th>Particulars</th>
                    <th>Charges</th>
                  </tr>
                </thead>
                <tbody>
                  {feesData.map((row, i) => (
                    <tr key={i}>
                      <td>{row.particular}</td>
                      <td>{row.charge}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {feesNote && <p className="sdl-fees__note">{feesNote}</p>}
          </div>
        </section>
      )}
    </div>
  );
}

export default ServiceDetailLayout;
