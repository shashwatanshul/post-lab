import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnnouncementBar from "../components/sections/AnnouncementBar";
import PostLabIcon from "../components/sections/PostLabIcon";
import Privacy_policy from "../components/sections/privacy_policy";
import PrivacyPolicyContent from "../components/sections/PrivacyPolicyContent";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      <AnnouncementBar />
      <PostLabIcon />
      <Privacy_policy />
      <PrivacyPolicyContent />
    </div>
  );
};

export default PrivacyPolicy;
