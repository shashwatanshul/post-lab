import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

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

const ContactForm = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("Select one...");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelectedSubject(option);
    setIsDropdownOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: "easeOut",
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="floating-grid h-full max-w-[1400px] mx-auto">
          <div className="floating-grid-col first"></div>
          <div className="floating-grid-col"></div>
          <div className="floating-grid-col"></div>
          <div className="floating-grid-col last"></div>
        </div>
      </div>
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>{/* Empty column for layout */}</div>
          <div>
            <motion.form
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
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
                  required
                />
              </motion.div>

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
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="contact-form-label">
                  SUBJECT*
                </label>
                <div ref={dropdownRef} className="relative mb-8">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="contact-form-field w-full text-left flex justify-between items-center"
                  >
                    <span>{selectedSubject}</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
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
                  required
                ></textarea>
              </motion.div>

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
