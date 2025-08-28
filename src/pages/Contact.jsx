// Import GSAP animation library for scroll-triggered animations
import { gsap } from "gsap";
// Import ScrollTrigger plugin for scroll-based animation triggers
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import component sections for the contact page layout
import AnnouncementBar from "../components/sections/AnnouncementBar";
import PostLabIcon from "../components/sections/PostLabIcon";
import LetsTalk from "../components/sections/LetsTalk";
import ContactInfo from "../components/sections/ContactInfo";
import ContactForm from "../components/sections/ContactForm";

// Register GSAP ScrollTrigger plugin to enable scroll-based animations
gsap.registerPlugin(ScrollTrigger);

// Contact page component - provides multiple ways for users to get in touch
const Contact = () => {
  return (
    // Main container for the contact page with identifying class
    <div className="contact-page">
      {/* Top announcement bar - typically contains important notices or updates */}
      <AnnouncementBar />

      {/* Company logo/icon section for brand identity */}
      <PostLabIcon />

      {/* Contact introduction/call-to-action section */}
      <LetsTalk />

      {/* Contact information display (phone, email, address, etc.) */}
      <ContactInfo />

      {/* Interactive contact form for user inquiries */}
      <ContactForm />
    </div>
  );
};

// Export Contact component as default for use in routing (App.jsx)
export default Contact;
