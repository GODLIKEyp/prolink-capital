export const metadata = { title: 'Our Location' };
import './Location.css';
import { IconMapPin, IconPhone, IconMail, IconClock } from '@/components/Icons';

function Location() {
  return (
    <div className="location-page page-content animate-fade-in-up">
      <div className="container">
        <div className="location-grid">
          {/* Left Column */}
          <div className="location-info">
            <h2 className="location-title">Visit Our Office</h2>
            <p className="location-subtitle">We'd love to discuss your financial goals in person.</p>
            
            <ul className="contact-list">
              <li>
                <div className="contact-icon"><IconMapPin /></div>
                <div className="contact-text">
                  Office No -S2, 2nd Floor, Jeevan Sahara Tower<br />
                  Sector 2, Vikas Nagar<br />
                  Lucknow, Uttar Pradesh 226022
                </div>
              </li>
              <li>
                <div className="contact-icon"><IconPhone /></div>
                <div className="contact-text">+91 76077 08024</div>
              </li>
              <li>
                <div className="contact-icon"><IconMail /></div>
                <div className="contact-text">contact@prolinkcapital.com</div>
              </li>
              <li>
                <div className="contact-icon"><IconClock /></div>
                <div className="contact-text">Monday - Saturday: 10:00 AM - 6:30 PM (Sunday Closed)</div>
              </li>
            </ul>

            <div className="location-actions">
              <a href="https://maps.app.goo.gl/5udHAaGTr1KM1bGRA" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Get Directions
              </a>
              <a href="tel:+917607708024" className="btn btn-outline">
                Call Now
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.6258019808386!2d80.9507914!3d26.8836371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd79b29cf1bf%3A0xc6fbabaf4112e873!2sJeevan%20Sahara%20Tower!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ProLink Capital Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
