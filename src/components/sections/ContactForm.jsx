// React hooks for state management, DOM references, and lifecycle
import { useState, useRef, useEffect } from "react";
// Framer Motion for scroll-triggered form field animations
import { motion } from "framer-motion";

// Predefined subject categories for the contact form dropdown
const subjectOptions = [
  "General Enquiry",
  "Investor Relations",
  "Career Opportunities",
  "Partnerships & Collaborations",
  "Media & Press",
  "Legal & Privacy",
  "Feedback or Suggestions",
  "Technical Support",
  "Other",
];

/**
 * ContactForm Component
 *
 * Interactive contact form with animated field reveals and custom dropdown.
 * Features staggered animations as form fields enter the viewport, a custom
 * subject dropdown with click-outside handling, and proper form validation.
 * Positioned in the right column to align with the ContactInfo layout.
 */
const ContactForm = () => {
  // State for managing custom dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // State for tracking selected subject option
  const [selectedSubject, setSelectedSubject] = useState("Select one...");
  // Reference to dropdown container for click-outside detection
  const dropdownRef = useRef(null);

  // Set up click-outside handler to close dropdown when clicking elsewhere
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close dropdown if click occurred outside the dropdown element
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    // Add event listener for click detection
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function to remove event listener
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []); // Empty dependency array - set up once on mount

  // Handle subject option selection
  const handleSelect = (option) => {
    setSelectedSubject(option); // Update selected subject
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  // Animation variants for the form container - controls overall reveal and stagger timing
  const containerVariants = {
    hidden: { opacity: 0 }, // Initial state: invisible
    visible: {
      opacity: 1, // Final state: fully visible
      transition: {
        staggerChildren: 0.1, // Delay each form field by 100ms
        ease: "easeOut", // Smooth deceleration
        duration: 0.8, // 800ms total duration for container
      },
    },
  };

  // Animation variants for individual form fields - controls movement and fade-in
  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Start 30px below and invisible
    visible: {
      opacity: 1, // End fully visible
      y: 0, // End at normal position
      transition: { duration: 0.8, ease: "easeOut" }, // 800ms smooth animation
    },
  };

  return (
    // Main section container with generous vertical padding
    <section className="relative bg-white py-24 md:py-32">
      {/* Background decorative grid - positioned behind content */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="floating-grid h-full max-w-[1400px] mx-auto">
          {/* Grid columns for visual structure */}
          <div className="floating-grid-col first"></div>
          <div className="floating-grid-col"></div>
          <div className="floating-grid-col"></div>
          <div className="floating-grid-col last"></div>
        </div>
      </div>

      {/* Content container - positioned above background grid */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Two-column layout: empty left column + form right column */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>{/* Empty column for layout alignment with ContactInfo */}</div>
          <div>
            {/* Animated form with staggered field reveals */}
            <motion.form
              variants={containerVariants}
              initial="hidden" // Start with hidden state
              whileInView="visible" // Animate when 20% of form is in view
              viewport={{ once: true, amount: 0.2 }} // Trigger once at 20% visibility
            >
              {/* Name field with validation */}
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="contact-form-label">
                  YOUR NAME*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full name"
                  className="contact-form-field"
                  required // HTML5 validation
                />
              </motion.div>

              {/* Email field with validation */}
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="contact-form-label">
                  YOUR EMAIL*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email address"
                  className="contact-form-field"
                  required // HTML5 email validation
                />
              </motion.div>

              {/* Custom dropdown for subject selection */}
              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="contact-form-label">
                  SUBJECT*
                </label>
                <div ref={dropdownRef} className="relative mb-8">
                  {/* Dropdown trigger button */}
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="contact-form-field w-full text-left flex justify-between items-center"
                  >
                    <span>{selectedSubject}</span>
                    {/* Animated chevron icon */}
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`} // Rotate 180deg when open
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>

                  {/* Dropdown options list (conditionally rendered) */}
                  {isDropdownOpen && (
                    <ul className="absolute z-10 w-full bg-white border border-gray-200 mt-1 rounded-md shadow-lg">
                      {subjectOptions.map((option) => (
                        <li
                          key={option}
                          onClick={() => handleSelect(option)}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>

              {/* Message textarea field */}
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="contact-form-label">
                  YOUR MESSAGE*
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write a message..."
                  rows="4"
                  className="contact-form-textarea"
                  required // HTML5 validation
                ></textarea>
              </motion.div>

              {/* Submit button */}
              <motion.div variants={itemVariants}>
                <button type="submit" className="contact-form-btn">
                  Submit Request
                </button>
              </motion.div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
