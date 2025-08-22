import { motion } from "framer-motion";

const features = [
  {
    text: "Post Labs is building a homegrown platform designed for Canadians and the future of Canadian media.",
    icon: "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68266ea52e91d548861b8d20_icon-1-transparent.svg",
    align: "left",
  },
  {
    text: "At its core is PostOS, our made-in-Canada publishing engine that connects local voices, communities, and trusted journalism in one seamless digital experience.",
    icon: "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68267094af8c90b6a17e323a_icon-2-transparent.svg",
    align: "right",
  },
  {
    text: "Built by Canadians, for Canadians, PostOS is more than just technology — it’s a way to bring our stories home.",
    icon: "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68267087adfa3ad7422b8753_icon-3-transparent.svg",
    align: "left",
  },
];

const AnimatedWords = ({ text }) => {
  const words = text.split(" ");
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const wordVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.p
      className="relative z-10 text-xl md:text-2xl leading-relaxed"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block"
          style={{ marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

const FeatureText = () => {
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
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 space-y-32">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex items-start ${
              feature.align === "right" ? "justify-end" : "justify-start"
            }`}
          >
            <div className="relative max-w-2xl">
              <img
                src={feature.icon}
                alt=""
                className="absolute -top-8 -left-12 w-24 h-24 opacity-50 z-0"
              />
              <AnimatedWords text={feature.text} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureText;
