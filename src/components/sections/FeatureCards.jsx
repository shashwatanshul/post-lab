import { motion } from "framer-motion";

const cards = [
  {
    icon: "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68239a34145625a862ba3d54_icon-1.svg",
    text: "Empowering Creators.",
  },
  {
    icon: "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68239b7ac5ddc2008b2da9b7_icon-2.svg",
    text: "Transforming Publishing.",
  },
  {
    icon: "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68239b7ab5708009ef8f649e_icon-3.svg",
    text: "Reclaiming Canadian Media.",
  },
];

const FeatureCards = () => {
  return (
    <section className="w-full">
      <div className="max-w-[1400px] px-4 md:px-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <motion.div
              key={c.text}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 * i }}
              className="rounded-[36px] bg-black text-white min-h-[440px] p-8 flex flex-col justify-end"
              style={{ fontFamily: '"Inter Tight", Verdana, sans-serif' }}
            >
              <img
                src={c.icon}
                alt=""
                className="absolute top-8 left-8 h-10 w-10"
              />
              <div className="text-[28px] md:text-[32px] leading-tight">
                {c.text}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
