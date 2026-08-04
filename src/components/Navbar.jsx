"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconMenu, IconX } from './Icons';
import './Navbar.css';

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header className={`navbar ${isVisible ? '' : 'navbar-hidden'} ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-container">
          <Link href="/" className="logo">
            <img src="/logo.png" alt="ProLink Capital Logo" className="logo-img" />
          </Link>
          
          <nav className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/location">Location</Link>
            <Link href="/contact-us">Contact Us</Link>
            <Link href="/apply" className="nav-apply-link">Apply for Loan</Link>
          </nav>
          
          <Link href="/contact-us" className="btn btn-primary nav-cta">Book a Free Consultation</Link>

          {/* Mobile hamburger button */}
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <IconX size={26} /> : <IconMenu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      <div 
        className={`mobile-overlay ${mobileMenuOpen ? 'mobile-overlay-active' : ''}`} 
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile drawer */}
      <aside className={`mobile-drawer ${mobileMenuOpen ? 'mobile-drawer-open' : ''}`}>
        <nav className="mobile-nav-links">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link href="/about-us" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <Link href="/location" onClick={() => setMobileMenuOpen(false)}>Location</Link>
          <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
          <Link href="/apply" onClick={() => setMobileMenuOpen(false)}>Apply for Loan</Link>
        </nav>
        <div className="mobile-drawer-cta">
          <Link href="/contact-us" className="btn btn-primary mobile-cta-btn" onClick={() => setMobileMenuOpen(false)}>
            Book a Free Consultation
          </Link>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
