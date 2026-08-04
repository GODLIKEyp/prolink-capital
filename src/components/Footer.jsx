import Link from 'next/link';
import './Footer.css';
import { IconFacebook, IconInstagram } from './Icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link href="/">
              <img src="/logo.png" alt="ProLink Capital Logo" className="footer-logo" />
            </Link>
            <p className="footer-disclaimer">
              ProLink Capital is an independent loan consultancy. All loan approvals are subject to partner bank policies.
            </p>
          </div>
          
          <div className="footer-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/contact-us">Contact Info</Link>
          </div>
          
          <div className="footer-socials">
            <a href="https://www.facebook.com/profile.php?id=61591836633315" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
              <IconFacebook size={24} />
            </a>
            <a href="https://www.instagram.com/prolinkcapital/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <IconInstagram size={24} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ProLink Capital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
