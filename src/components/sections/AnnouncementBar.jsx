import { motion } from "framer-motion";

const AnnouncementBar = ({
  message = "Help shape the future of digital journalism — we’re hiring!",
}) => {
  return (
    <section
      id="top"
      className="announcement-bar"
      role="region"
      aria-label="Announcement"
    >
      <div className="w-full">
        <motion.div
          data-animation="fadeup"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full flex items-center justify-center px-4 py-2 bg-black text-base text-white"
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            fontFamily: '"Inter Tight", Verdana, sans-serif',
            fontSize: "16px",
          }}
        >
          {message}
        </motion.div>
      </div>
    </section>
  );
};

export default AnnouncementBar;
