import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({ text }) => {
  const words = text.split(" ");
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03 },
    },
  };
  const child = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.p
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: "inline-block", paddingRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

const ContactInfo = () => {
  const pinnedTextRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // Apply pinning only on screens wider than 768px (desktop)
        "(min-width: 768px)": function () {
          ScrollTrigger.create({
            trigger: pinnedTextRef.current,
            start: "top 20%",
            endTrigger: sectionRef.current,
            end: "bottom 80%",
            pin: true,
          });
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const mainText =
    "Whether you’re interested in investing, joining the team, or just have a question, we’re here to help. Use the form below to send us a message — you’ll be able to choose where to direct your note, and someone from our team will get back to you.";

  return (
    <section ref={sectionRef} className="relative bg-white py-24 md:py-32">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="floating-grid h-full max-w-[1400px] mx-auto">
          <div className="floating-grid-col first"></div>
          <div className="floating-grid-col"></div>
          <div className="floating-grid-col"></div>
          <div className="floating-grid-col last"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Pinned Text */}
          <div className="pt-2">
            <h2
              ref={pinnedTextRef}
              className="text-3xl font-medium text-gray-800"
            >
              We’d love to hear from you.
            </h2>
          </div>

          {/* Scrolling Content */}
          <div className="space-y-12">
            <div className="text-xl md:text-2xl leading-relaxed">
              <AnimatedText text={mainText} />
            </div>
            <div className="space-y-8 text-sm text-gray-600">
              <div>
                <p className="font-semibold">For investor enquiries:</p>
                <a href="mailto:invest@postlabs.com" className="underline">
                  invest@postlabs.com
                </a>
              </div>
              <div>
                <p className="font-semibold">
                  For careers and job applications:
                </p>
                <a href="mailto:careers@postlabs.com" className="underline">
                  careers@postlabs.com
                </a>
              </div>
              <div>
                <p className="font-semibold">For everything else:</p>
                <p>
                  Use the contact form below, and select the category that best
                  fits your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
