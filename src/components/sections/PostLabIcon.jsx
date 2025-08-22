import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const words = ["The", "Future", "of", "News", "Starts", "Here"];

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

const PostLabIcon = () => {
  const containerRef = useRef(null);
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const springX = useSpring(glowX, { stiffness: 150, damping: 20, mass: 0.5 });
  const springY = useSpring(glowY, { stiffness: 150, damping: 20, mass: 0.5 });

  const cardsContainerRef = useRef(null);
  const cardRefs = useRef([]);
  cardRefs.current = [];

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = cardRefs.current;
      if (cards.length < 3) return;

      // Ensure cards are visible and set z-index for stacking effect
      gsap.set(cards, { opacity: 1 });
      gsap.set(cards[1], { zIndex: 3 }); // Middle card on top
      gsap.set(cards[0], { zIndex: 2 });
      gsap.set(cards[2], { zIndex: 1 });

      // Set initial "fanned out" state.
      // We translate them horizontally to counteract the grid layout and make them overlap.
      gsap.set(cards[0], { xPercent: 80, rotation: 8 });
      gsap.set(cards[2], { xPercent: -80, rotation: -8 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: "top 65%",
          end: "center 50%",
          scrub: 1.2,
        },
      });

      // Animate TO the final grid positions (0 translation and rotation)
      tl.to(cards[0], { xPercent: 0, rotation: 0 }).to(
        cards[2],
        { xPercent: 0, rotation: 0 },
        "<"
      );
    }, cardsContainerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const r = 450; // 900px glow radius
    glowX.set(x - r);
    glowY.set(y - r);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden"
      style={{ fontFamily: '"Inter Tight", Verdana, sans-serif' }}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="floating-grid h-full max-w-[1400px] mx-auto">
          <div className="floating-grid-col first"></div>
          <div className="floating-grid-col"></div>
          <div className="floating-grid-col"></div>
          <div className="floating-grid-col last"></div>
        </div>
      </div>

      {/* Header row (logo + intro text) */}
      <header className="w-full">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 items-start gap-6 pl-4 md:pl-8 pr-4 md:pr-8 relative z-10">
          <div className="py-6">
            <a href="/about" aria-label="Post Labs" className="inline-block">
              <img
                src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68227dfdc407523fbe5b56e7_post-labs-logo.svg"
                alt="Post Labs logo"
                className="h-4 md:h-5 w-auto"
              />
            </a>
          </div>
          <div className="py-6 md:ml-auto md:text-left max-w-[395px]">
            <motion.p
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-[14px] md:text-[16px] leading-6 text-black"
            >
              We’re building the backbone of Canadian digital media — a next-gen
              platform that gives creators the tools to thrive.
            </motion.p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default PostLabIcon;
