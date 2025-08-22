import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollingVideoText = () => {
  const sectionRef = useRef(null);
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const video3Ref = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state: "Scale" is active, others are dimmed.
      gsap.set(text1Ref.current, { opacity: 1 });
      gsap.set(text2Ref.current, { opacity: 0.3 });
      gsap.set(text3Ref.current, { opacity: 0.3 });

      gsap.set(video1Ref.current, { opacity: 1 });
      gsap.set(video2Ref.current, { opacity: 0 });
      gsap.set(video3Ref.current, { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000",
          scrub: 1,
          pin: true,
        },
      });

      // Animate from "Scale" to "Creators"
      tl.to(text1Ref.current, { opacity: 0.3, duration: 0.5 }, 1)
        .to(video1Ref.current, { opacity: 0, duration: 0.5 }, 1)
        .to(text2Ref.current, { opacity: 1, duration: 0.5 }, 1)
        .to(video2Ref.current, { opacity: 1, duration: 0.5 }, 1);

      // Animate from "Creators" to "Canada"
      tl.to(text2Ref.current, { opacity: 0.3, duration: 0.5 }, 2)
        .to(video2Ref.current, { opacity: 0, duration: 0.5 }, 2)
        .to(text3Ref.current, { opacity: 1, duration: 0.5 }, 2)
        .to(video3Ref.current, { opacity: 1, duration: 0.5 }, 2);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          ref={video1Ref}
          className="absolute inset-0 w-full h-full object-cover"
          src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2%2F6827802fb93caba00853824a_video2-transcode.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <video
          ref={video2Ref}
          className="absolute inset-0 w-full h-full object-cover"
          src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2%2F682dd7a24d93a7df690274d9_post-labs-video-3-transcode.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <video
          ref={video3Ref}
          className="absolute inset-0 w-full h-full object-cover"
          src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2%2F683a0051a4448581c2d2e587_post-labs-video-mobile-4-transcode.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="relative z-10 h-full flex items-center justify-start text-white pl-4 md:pl-16">
        <div className="flex items-start text-4xl md:text-6xl font-medium">
          <span className="mr-4 mt-2">Built for</span>
          <div className="flex flex-col">
            <div ref={text1Ref}>Scale</div>
            <div ref={text2Ref}>Creators</div>
            <div ref={text3Ref}>Canada</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollingVideoText;
