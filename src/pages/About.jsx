// Import GSAP animation library for scroll-triggered animations
import { gsap } from "gsap";
// Import ScrollTrigger plugin for scroll-based animation triggers
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import component sections for the about page layout
import AnnouncementBar from "../components/sections/AnnouncementBar";
import HeroWithCards from "../components/sections/HeroWithCards";
import MissionStatement from "../components/sections/MissionStatement";
import ExpandingVideo from "../components/sections/ExpandingVideo";
import WhatWeAreBuilding from "../components/sections/WhatWeAreBuilding";
import FeatureText from "../components/sections/FeatureText";
import ScrollingVideoText from "../components/sections/ScrollingVideoText";
import ContactCta from "../components/sections/ContactCta";

// Register GSAP ScrollTrigger plugin to enable scroll-based animations
gsap.registerPlugin(ScrollTrigger);

// About page component - main landing page showcasing company story and features
// This serves as the primary entry point for users (default route redirects here)
const About = () => {
  return (
    // Main container for the about page with identifying class
    <div className="about-page">
      {/* Top announcement bar - typically contains important notices or updates */}
      <AnnouncementBar />

      {/* Hero section with featured cards - primary visual introduction */}
      <HeroWithCards />

      {/* Company mission and vision statement section */}
      <MissionStatement />

      {/* Interactive video section that expands on scroll/interaction */}
      <ExpandingVideo />

      {/* Product/service overview section explaining what the company builds */}
      <WhatWeAreBuilding />

      {/* Feature highlights with descriptive text */}
      <FeatureText />

      {/* Scrolling video with overlaid text for dynamic storytelling */}
      <ScrollingVideoText />

      {/* Call-to-action section encouraging user contact/engagement */}
      <ContactCta />
    </div>
  );
};

// Export About component as default for use in routing (App.jsx)
// This component serves as the main landing page and default route
export default About;
