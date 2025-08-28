// React Router for internal navigation links
import { Link } from "react-router-dom";

/**
 * MarqueeArrow Component
 *
 * SVG arrow icon used in the scrolling marquee section.
 * Features a diagonal arrow pointing up-right to complement
 * the call-to-action messaging in the marquee.
 */
const MarqueeArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%" // Responsive width
    height="100%" // Responsive height
    viewBox="0 0 57 57" // Square viewBox for consistent scaling
    fill="none"
  >
    {/* Arrow path with white fill and stroke */}
    <path
      d="M5.09082 0.823242L50.0605 45.7861L49.667 2.61621L49.665 2.36133L49.9199 2.36426L55.5625 2.42969L55.8076 2.43262L55.8096 2.67773L56.25 55.998L56.252 56.252L55.998 56.25C49.1732 56.1848 39.2577 56.1118 29.3418 56.0303L29.0938 56.0273V56.0107C19.2533 55.93 9.4295 55.8577 2.66113 55.793L2.41699 55.791L2.41309 55.5479L2.32422 49.9463L2.31934 49.6895L2.57617 49.6924C8.9767 49.7576 16.4211 49.815 24.0859 49.8721L34.5908 49.9512L44.9131 50.043L45.791 50.0527L0.823242 5.08984L0.646484 4.91309L0.823242 4.73633L4.7373 0.823242L4.91406 0.646484L5.09082 0.823242Z"
      fill="white"
      stroke="white"
      strokeWidth="0.5"
    ></path>
  </svg>
);

/**
 * Footer Component
 *
 * Comprehensive site footer with multiple sections:
 * - Animated marquee with call-to-action messaging
 * - Main content area with logo, navigation, and newsletter signup
 * - Copyright section with credits and legal links
 * Features CSS-based marquee animation and responsive layout.
 */
const Footer = () => {
  // Get current year for copyright notice
  const currentYear = new Date().getFullYear();

  return (
    // Main footer container with black background
    <footer className="bg-black text-white">
      {/* Animated marquee section */}
      <div className="relative h-28 overflow-hidden">
        {" "}
        {/* Fixed height with hidden overflow for marquee effect */}
        {/* Marquee content container - animated via CSS */}
        <div className="marquee-inner">
          {/* First marquee text block */}
          <div className="marquee-text">
            Ready to Build the Future of Canadian Media?
            <Link to="/contact" className="marquee-contact">
              Contact Us
            </Link>
          </div>

          {/* First arrow separator */}
          <div className="marquee-arrow">
            <MarqueeArrow />
          </div>

          {/* Second marquee text block (duplicate for seamless loop) */}
          <div className="marquee-text">
            Ready to Build the Future of Canadian Media?
            <Link to="/contact" className="marquee-contact">
              Contact Us
            </Link>
          </div>

          {/* Second arrow separator */}
          <div className="marquee-arrow">
            <MarqueeArrow />
          </div>
        </div>
      </div>

      {/* Main footer content area */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-16">
        {/* Two-column layout: logo + navigation/newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column: Company logo */}
          <div>
            <img
              src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/682786273e6c31f3343c6700_postlabs-logo-white.svg"
              alt="Post Labs logo white"
              className="h-6" // Fixed height for consistent branding
            />
          </div>

          {/* Right column: Navigation and newsletter signup */}
          <div>
            {/* Footer navigation links */}
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="footer-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
              <li>
                <a href="/privacy-policy" className="footer-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Cookie Policy
                </a>
              </li>
            </ul>

            {/* Newsletter signup section */}
            <div className="mt-8">
              <h3 className="mb-4 text-sm">Sign Up for Our Newsletter</h3>
              {/* Newsletter form with inline submit button */}
              <form className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-gray-500 py-2 text-sm focus:outline-none focus:border-white"
                  required // HTML5 email validation
                />
                {/* Submit button positioned absolutely inside input */}
                <button
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-2xl"
                  aria-label="Submit" // Accessibility label for icon button
                >
                  &rarr; {/* Right arrow character */}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright and credits section */}
      <div className="border-t border-gray-800">
        {" "}
        {/* Top border separator */}
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8">
          {/* Responsive layout: stacked on mobile, side-by-side on desktop */}
          <div className="flex flex-col md:flex-row justify-between text-sm text-gray-500">
            {/* Copyright notice with dynamic year */}
            <p>© {currentYear} Post Labs, Inc. All rights reserved.</p>

            {/* Design credits */}
            <p>
              Designed by{" "}
              <a
                href="https://gohrvst.com"
                target="_blank" // Open in new tab
                rel="noopener noreferrer" // Security attributes for external links
                className="underline"
              >
                HRVST
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
