import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="31"
    viewBox="0 0 30 31"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 12.2655L11.6557 19.6098L11 18.9541L18.3443 11.6098L19 12.2655Z"
      fill="currentColor"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.3444 19.6099L11.0001 12.2656L11.6558 11.6099L19.0001 18.9542L18.3444 19.6099Z"
      fill="currentColor"
    ></path>
  </svg>
);

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const CookieOption = ({ title, description, initiallyChecked = false }) => {
  const [isChecked, setIsChecked] = useState(initiallyChecked);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="py-4 bg-[rgb(248,248,242)] rounded-xl">
      <div className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center flex-1"
        >
          <div
            className={`transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <ArrowIcon />
          </div>
          <span className="ml-2 font-semibold text-gray-800">{title}</span>
        </button>
        {title === "Essential" ? (
          <span className="text-sm text-gray-600">Always Active</span>
        ) : (
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
          </label>
        )}
      </div>
      {isOpen && (
        <div className="mt-2 pl-8">
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      )}
    </div>
  );
};

const CookieConsentModal = ({ onClose }) => {
  useEffect(() => {
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  const handleWheel = (e) => {
    // Prevent wheel events from bubbling up to the window
    e.stopPropagation();
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] flex flex-col">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">
            Cookie preferences
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-500 hover:bg-black hover:text-white transition-colors duration-300"
          >
            <CloseIcon />
          </button>
        </div>
        <div
          className="p-6 overflow-y-auto"
          onWheel={handleWheel}
          data-lenis-prevent
        >
          <div>
            <h3 className="font-semibold text-gray-800">
              You control your data
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              You can control how your data is used on our website. Learn more
              below about the cookies we use and choose which cookies work for
              you.
            </p>
          </div>

          <div className="mt-4 space-y-3">
            <CookieOption
              title="Essential"
              description="These items are required to enable basic website functionality."
            />
            <CookieOption
              title="Marketing"
              description="These items are used to deliver advertising that is more relevant to you and your interests. They may also be used to limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns. Advertising networks usually place them with the website operator’s permission."
            />
            <CookieOption
              title="Personalization"
              description="These items allow the website to remember choices you make (such as your user name, language, or the region you are in) and provide enhanced, more personalized features. For example, a website may provide you with local weather reports or traffic news by storing data about your current location."
            />
            <CookieOption
              title="Analytics"
              description="These items help the website operator understand how its website performs, how visitors interact with the site, and whether there may be technical issues. This storage type usually doesn’t collect information that identifies a visitor."
            />
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-gray-800">More information</h3>
            <p className="mt-2 text-sm text-gray-600">
              For any queries concerning our policy on cookies and your choices,
              please contact us.
            </p>
          </div>
        </div>
        <div className="p-6 border-t border-gray-200 mt-auto bg-gray-50 rounded-b-lg flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-4">
            <button className="px-6 py-2 border border-gray-300 rounded-full text-sm font-semibold text-gray-700 hover:bg-black hover:text-white transition-colors duration-300">
              Accept All
            </button>
            <button className="px-6 py-2 border border-gray-300 rounded-full text-sm font-semibold text-gray-700 hover:bg-black hover:text-white transition-colors duration-300">
              Reject All
            </button>
          </div>
          <div>
            <button className="px-6 py-2 bg-gray-800 text-white rounded-full text-sm font-semibold hover:bg-gray-700">
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CookieConsentModal;
