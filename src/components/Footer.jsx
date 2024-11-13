import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Contact Information */}
      <div className="footer-section contact-info">
        <h3>Roamio</h3>
        <div className="f">
          <p>
            <FiMapPin /> 123 Main Street, City, Country
          </p>
          <p>
            <FiPhone /> +1 234 567 890
          </p>
          <p>
            <FiMail /> contact@roamio.com
          </p>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="footer-section quick-links">
        <h4>Quick Links</h4>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/rooms">Rooms &amp; Suites</a>
          </li>
          <li>
            <a href="/amenities">Amenities</a>
          </li>
          <li>
            <a href="/dining">Dining</a>
          </li>
          <li>
            <a href="/offers">Offers</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>

      {/* Customer Support */}
      <div className="footer-section customer-support">
        <h4>Customer Support</h4>
        <ul>
          <li>
            <a href="/faqs">FAQs</a>
          </li>
          <li>
            <a href="/booking-policy">Booking Policy</a>
          </li>
          <li>
            <a href="/cancellation-policy">Cancellation Policy</a>
          </li>
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms-conditions">Terms &amp; Conditions</a>
          </li>
        </ul>
      </div>

      {/* Newsletter Subscription */}
      <div className="footer-section newsletter">
        <h4>Stay Updated</h4>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      {/* Language and Currency Options */}
      <div className="footer-section options">
        <h4>Options</h4>
        <div className="dropdowns">
          <select>
            <option>Language</option>
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            {/* Add more languages as needed */}
          </select>
          <select>
            <option>Currency</option>
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
            {/* Add more currencies as needed */}
          </select>
        </div>
      </div>

      {/* Map */}
      <div className="footer-section map">
        <h4>Find Us</h4>
        <iframe
          title="Roamio Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0192183622045!2d-122.41941548468148!3d37.77492977975944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c0c0c0c0c%3A0x0!2sRoamio!5e0!3m2!1sen!2sus!4v1614971904456!5m2!1sen!2sus"
          width="100%"
          height="150"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Testimonials */}
      <div className="footer-section testimonials">
        <h4>Testimonials</h4>
        <p>
          "Roamio provided an unforgettable experience. Highly recommended!" -
          Jane Doe
        </p>
        <p>
          "Exceptional service and stunning views. Will visit again!" - John
          Smith
        </p>
      </div>

      {/* Awards */}
      <div className="footer-section awards">
        <h4>Awards</h4>
        <ul>
          <li>Best Hotel 2023</li>
          <li>Top Customer Service 2022</li>
          <li>Eco-Friendly Hotel Award 2021</li>
        </ul>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">© 2024 Roamio. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
