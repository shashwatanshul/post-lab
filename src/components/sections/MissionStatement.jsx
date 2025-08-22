import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MissionStatement = () => {
  const text =
    "Post Labs is rethinking how digital media works for Canadians. Our mission is simple: make journalism profitable, sustainable, and trusted – built for Canadians, by Canadians.";
  const words = text.split(" ");

  const containerRef = useRef(null);

  useEffect(() => {
    const wordsInP = containerRef.current.querySelectorAll("span.word");

    const ctx = gsap.context(() => {
      gsap.to(wordsInP, {
        opacity: 1,
        stagger: 0.05,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 80%",
          scrub: 1.5,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden pt-[120px] pb-[150px] bg-white">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="floating-grid h-full max-w-[1400px] mx-auto">
          <div className="floating-grid-col first"></div>
          <div className="floating-grid-col"></div>
          <div className="floating-grid-col"></div>
          <div className="floating-grid-col last"></div>
        </div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-[30px]">
        <p
          ref={containerRef}
          className="text-3xl md:text-5xl font-medium leading-snug text-center text-gray-900"
        >
          {words.map((word, index) => (
            <span
              key={index}
              className="word inline-block"
              style={{ opacity: 0.15, marginRight: "0.25em" }}
            >
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default MissionStatement;
