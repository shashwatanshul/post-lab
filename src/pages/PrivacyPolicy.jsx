// Import GSAP animation library for scroll-triggered animations
import { gsap } from "gsap";
// Import ScrollTrigger plugin for scroll-based animation triggers
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import component sections for the privacy policy page layout
import AnnouncementBar from "../components/sections/AnnouncementBar";
import PostLabIcon from "../components/sections/PostLabIcon";
import Privacy_policy from "../components/sections/privacy_policy";
import PrivacyPolicyContent from "../components/sections/PrivacyPolicyContent";

// Register GSAP ScrollTrigger plugin to enable scroll-based animations
gsap.registerPlugin(ScrollTrigger);

// Privacy Policy page component - displays legal privacy information
const PrivacyPolicy = () => {
  return (
    // Main container for the privacy policy page with identifying class
    <div className="privacy-policy-page">
      {/* Top announcement bar - typically contains important notices or updates */}
      <AnnouncementBar />

      {/* Company logo/icon section for brand identity */}
      <PostLabIcon />

      {/* Privacy policy header/title section */}
      <Privacy_policy />

      {/* Main privacy policy content with detailed legal text and policies */}
      <PrivacyPolicyContent />
    </div>
  );
};

// Export PrivacyPolicy component as default for use in routing (App.jsx)
export default PrivacyPolicy;
