"use client";

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import './HeroBanner.css';

const slides = [
  {
    image: '/banners/banner-1.jpg',
    heading: 'Your Dream Home Is Just One Step Away',
    subheading: 'Get the best home loan rates from 30+ partner banks. Zero consultancy fees.',
    cta: { text: 'Explore Home Loans', link: '/services/home-loan' },
  },
  {
    image: '/banners/banner-2.jpg',
    heading: 'Fuel Your Business Growth',
    subheading: 'Flexible business loans tailored to your ambitions. Quick approvals, minimal paperwork.',
    cta: { text: 'Explore Business Loans', link: '/services/business-loan' },
  },
  {
    image: '/banners/banner-3.jpg',
    heading: 'Invest in a Brighter Future',
    subheading: 'Education loans for top universities in India & abroad. Let nothing hold you back.',
    cta: { text: 'Explore Education Loans', link: '/services/education-loan' },
  },
];

function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((current + 1) % slides.length);
  }, [current, goToSlide]);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="hero-banner">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-banner__slide ${index === current ? 'hero-banner__slide--active' : ''}`}
        >
          <img src={slide.image} alt={slide.heading} className="hero-banner__image" />
          <div className="hero-banner__overlay" />
          <div className="hero-banner__container container">
            <div className="hero-banner__content">
              <h2 className="hero-banner__heading">{slide.heading}</h2>
              <p className="hero-banner__subheading">{slide.subheading}</p>
              <Link href={slide.cta.link} className="btn btn-primary hero-banner__cta">
                {slide.cta.text}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="hero-banner__dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-banner__dot ${index === current ? 'hero-banner__dot--active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow controls */}
      <button
        className="hero-banner__arrow hero-banner__arrow--prev"
        onClick={() => goToSlide((current - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        className="hero-banner__arrow hero-banner__arrow--next"
        onClick={() => goToSlide((current + 1) % slides.length)}
        aria-label="Next slide"
      >
        ›
      </button>
    </section>
  );
}

export default HeroBanner;
