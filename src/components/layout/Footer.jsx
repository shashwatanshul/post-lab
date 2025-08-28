import { Link } from "react-router-dom";

const MarqueeArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 57 57"
    fill="none"
  >
    <path
      d="M5.09082 0.823242L50.0605 45.7861L49.667 2.61621L49.665 2.36133L49.9199 2.36426L55.5625 2.42969L55.8076 2.43262L55.8096 2.67773L56.25 55.998L56.252 56.252L55.998 56.25C49.1732 56.1848 39.2577 56.1118 29.3418 56.0303L29.0938 56.0273V56.0107C19.2533 55.93 9.4295 55.8577 2.66113 55.793L2.41699 55.791L2.41309 55.5479L2.32422 49.9463L2.31934 49.6895L2.57617 49.6924C8.9767 49.7576 16.4211 49.815 24.0859 49.8721L34.5908 49.9512L44.9131 50.043L45.791 50.0527L0.823242 5.08984L0.646484 4.91309L0.823242 4.73633L4.7373 0.823242L4.91406 0.646484L5.09082 0.823242Z"
      fill="white"
      stroke="white"
      strokeWidth="0.5"
    ></path>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      {/* Marquee */}
      <div className="relative h-28 overflow-hidden">
        <div className="marquee-inner">
          <div className="marquee-text">
            Ready to Build the Future of Canadian Media?
            <Link to="/contact" className="marquee-contact">
              Contact Us
            </Link>
          </div>
          <div className="marquee-arrow">
            <MarqueeArrow />
          </div>
          <div className="marquee-text">
            Ready to Build the Future of Canadian Media?
            <Link to="/contact" className="marquee-contact">
              Contact Us
            </Link>
          </div>
          <div className="marquee-arrow">
            <MarqueeArrow />
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/682786273e6c31f3343c6700_postlabs-logo-white.svg"
              alt="Post Labs logo white"
              className="h-6"
            />
          </div>
          <div>
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

            <div className="mt-8">
              <h3 className="mb-4 text-sm">Sign Up for Our Newsletter</h3>
              <form className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-gray-500 py-2 text-sm focus:outline-none focus:border-white"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-2xl"
                  aria-label="Submit"
                >
                  &rarr;
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between text-sm text-gray-500">
            <p>© {currentYear} Post Labs, Inc. All rights reserved.</p>
            <p>
              Designed by{" "}
              <a
                href="https://gohrvst.com"
                target="_blank"
                rel="noopener noreferrer"
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
