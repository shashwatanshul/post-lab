import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const words = ["The", "Future", "of", "News", "Starts", "Here"];

const HeroIntro = () => {
  const containerRef = useRef(null);
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const springX = useSpring(glowX, { stiffness: 150, damping: 20, mass: 0.5 });
  const springY = useSpring(glowY, { stiffness: 150, damping: 20, mass: 0.5 });

  const handleMouseMove = (e) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // Center a 900x900 glow on the cursor
    glowX.set(x - 450);
    glowY.set(y - 450);
  };
  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden"
      style={{ fontFamily: '"Inter Tight", Verdana, sans-serif' }}
    >
      {/* floating yellow glow */}
      <motion.div
        className="pointer-events-none absolute rounded-full opacity-90"
        style={{
          top: 0,
          left: 0,
          width: 900,
          height: 900,
          x: springX,
          y: springY,
          background:
            "radial-gradient(closest-side, rgba(255,230,92,0.9), rgba(255,230,92,0.45), rgba(255,230,92,0))",
          filter: "blur(20px)",
        }}
      />

      {/* top mini header row */}
      <header className="w-full">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 items-start gap-6 pl-4 md:pl-8 pr-4 md:pr-8">
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

      {/* big hero title + down arrow */}
      <section className="w-full pt-[160px]">
        <div className="max-w-[1400px] px-4 md:px-8 pb-10">
          <div className="relative">
            <h1 className="sr-only">The Future of News Starts Here</h1>
            <div
              aria-hidden="true"
              className="text-black font-normal tracking-tight leading-[0.95] select-none"
            >
              {words.map((w, i) => (
                <motion.span
                  key={w + i}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.15 * i,
                  }}
                  className="inline-block text-[12vw] md:text-[8vw] mr-4 align-top"
                >
                  {w}
                </motion.span>
              ))}

              <motion.img
                src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68238111591ea94a69065212_Vector.svg"
                alt="Down arrow"
                className="mt-8 h-12 md:h-16"
                initial={false}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                style={{
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                  transform: "translateZ(0)",
                  opacity: 1,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroIntro;
