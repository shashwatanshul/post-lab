import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnnouncementBar from "../components/sections/AnnouncementBar";
import PostLabIcon from "../components/sections/PostLabIcon";
import LetsTalk from "../components/sections/LetsTalk";
import ContactInfo from "../components/sections/ContactInfo";
import ContactForm from "../components/sections/ContactForm";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  return (
    <div className="contact-page">
      <AnnouncementBar />
      <PostLabIcon />
      <LetsTalk />
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contact;
