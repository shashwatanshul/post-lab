import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Header = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Show the header when user has scrolled 25% of the page.
    if (latest > 0.05) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  useEffect(() => {
    // ensure iOS safe-area spacing doesn't hide the nav
    document.body.style.paddingBottom = "88px";
    return () => {
      document.body.style.paddingBottom = "";
    };
  }, []);

  const links = [
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  const navVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: 20, opacity: 0 },
  };

  return (
    <motion.nav
      className="fixed bottom-6 left-0 right-0 z-50 flex justify-center"
      variants={navVariants}
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-label="Primary"
      role="navigation"
    >
      <div className="relative rounded-full bg-gray-600/80 border-4 border-gray-500/80 shadow-xl backdrop-blur-sm">
        <ul className="relative flex items-center gap-1 px-1 py-1">
          {links.map(({ label, to }) => {
            const isActive = location.pathname === to;
            return (
              <li key={to} className="relative">
                <NavLink
                  to={to}
                  className="relative block px-6 py-2 rounded-full text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  aria-current={isActive ? "page" : undefined}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-hover-bg"
                      className="absolute inset-0 rounded-full bg-white"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                      }}
                    />
                  )}
                  <span
                    className={`relative z-10 ${
                      isActive ? "text-black" : "text-white"
                    }`}
                  >
                    {label}
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Header;
