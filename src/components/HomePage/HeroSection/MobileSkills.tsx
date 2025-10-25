import { motion } from "framer-motion";
import { memo } from "react";

interface Logo {
  src: string;
  alt: string;
}

interface MobileSkillsProps {
  logos: Logo[];
}

const MobileSkills = ({ logos }: MobileSkillsProps) => {
  return (
    <motion.div
      className="mt-28 w-full flex justify-center items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.6 }}
    >
      <div className="flex flex-row gap-8 justify-center">
        {logos.map((logo, index) => (
          <motion.div
            key={`mobile-tech-${logo.alt}-${index}`}
            className="flex items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8 + index * 0.1, duration: 0.3 }}
          >
            <motion.div
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              aria-label={logo.alt}
            >
              <img src={logo.src} alt={logo.alt} className="w-9 h-9" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default memo(MobileSkills);
