import { motion } from "framer-motion";

const AnimatedText = ({ text }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.p
      className="text-base text-gray-700 leading-relaxed"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ display: "inline-block", paddingRight: "0.25em" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

const ContactCta = () => {
  const investorsText =
    "We’re raising capital to scale fast. If you’re an investor who believes in the future of independent Canadian media, we’d love to speak with you.";
  const buildersText =
    "We’re hiring. If you’re passionate about media, technology, and the future of Canada’s digital ecosystem, come build with us. We’re always looking for great people. Check out our jobs page for current opportunities.";

  const fadeUp = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative bg-white pt-24 pb-48 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="floating-grid h-full max-w-[1400px] mx-auto">
          <div className="floating-grid-col first"></div>
          <div className="floating-grid-col"></div>
          <div className="floating-grid-col"></div>
          <div className="floating-grid-col last"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
          {/* For Investors */}
          <div className="space-y-6 max-w-md">
            <motion.h2
              className="text-5xl md:text-6xl font-medium"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              variants={fadeUp}
            >
              For Investors
            </motion.h2>
            <AnimatedText text={investorsText} />
            <motion.a
              href="mailto:invest@postlabs.com"
              className="text-lg font-medium text-black underline"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              variants={fadeUp}
            >
              invest@postlabs.com
            </motion.a>
          </div>

          {/* For Builders */}
          <div className="space-y-6 md:mt-48 max-w-md">
            <motion.h2
              className="text-5xl md:text-6xl font-medium"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              variants={fadeUp}
            >
              For Builders
            </motion.h2>
            <AnimatedText text={buildersText} />
            <motion.a
              href="mailto:careers@postlabs.com"
              className="text-lg font-medium text-black underline"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              variants={fadeUp}
            >
              careers@postlabs.com
            </motion.a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-yellow-200 via-yellow-100 to-transparent z-0 pointer-events-none"></div>
    </section>
  );
};

export default ContactCta;
