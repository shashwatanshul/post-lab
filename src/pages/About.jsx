import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnnouncementBar from "../components/sections/AnnouncementBar";
import HeroWithCards from "../components/sections/HeroWithCards";
import MissionStatement from "../components/sections/MissionStatement";
import ExpandingVideo from "../components/sections/ExpandingVideo";
import WhatWeAreBuilding from "../components/sections/WhatWeAreBuilding";
import FeatureText from "../components/sections/FeatureText";
import ScrollingVideoText from "../components/sections/ScrollingVideoText";
import ContactCta from "../components/sections/ContactCta";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  return (
    <div className="about-page">
      <AnnouncementBar />
      <HeroWithCards />
      <MissionStatement />
      <ExpandingVideo />
      <WhatWeAreBuilding />
      <FeatureText />
      <ScrollingVideoText />
      <ContactCta />
    </div>
  );
};

export default About;
