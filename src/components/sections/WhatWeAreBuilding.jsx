import { motion } from "framer-motion";

const WhatWeAreBuilding = () => {
  const title = "What We’re Building";
  const words = title.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

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
      <div className="relative z-10 max-w-[1400px] px-4 md:px-8">
        <motion.h1
          className="text-6xl md:text-8xl font-medium tracking-tight text-black"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span variants={wordVariants} className="inline-block mr-4">
            {words[0]}
          </motion.span>
          <motion.span variants={wordVariants} className="inline-block">
            {words[1]}
          </motion.span>
          <br />
          <motion.span variants={wordVariants} className="inline-block">
            {words[2]}
          </motion.span>
        </motion.h1>
      </div>
    </section>
  );
};

export default WhatWeAreBuilding;
