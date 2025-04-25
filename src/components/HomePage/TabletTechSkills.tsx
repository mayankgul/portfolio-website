import { motion } from "framer-motion";
import { memo } from "react";

interface Logo {
  src: string;
  alt: string;
}

interface TabletTechSkillsProps {
  logos: Logo[];
}

const TabletTechSkills = ({ logos }: TabletTechSkillsProps) => {
  // Split logos into two columns
  const leftColumnLogos = logos.slice(0, Math.ceil(logos.length / 2));
  const rightColumnLogos = logos.slice(Math.ceil(logos.length / 2));

  return (
    <motion.div
      className="absolute right-20 top-52 flex flex-row gap-10 items-start justify-end"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
    >
      {/* Left Column */}
      <div className="flex flex-col gap-10">
        {leftColumnLogos.map((logo, index) => (
          <motion.div
            key={`tablet-tech-left-${logo.alt}-${index}`}
            className="flex items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
          >
            {/* Logo Icon */}
            <motion.div
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"
              whileHover={{
                scale: 1.15,
                boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              aria-label={logo.alt}
            >
              <img src={logo.src} alt={logo.alt} className="w-10 h-10" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-10">
        {rightColumnLogos.map((logo, index) => (
          <motion.div
            key={`tablet-tech-right-${logo.alt}-${index}`}
            className="flex items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.4 + (index + leftColumnLogos.length) * 0.2,
              duration: 0.5,
            }}
          >
            {/* Logo Icon */}
            <motion.div
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"
              whileHover={{
                scale: 1.15,
                boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              aria-label={logo.alt}
            >
              <img src={logo.src} alt={logo.alt} className="w-10 h-10" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default memo(TabletTechSkills);
