import { motion } from "framer-motion";
import { memo } from "react";

interface Logo {
  src: string;
  alt: string;
}

interface TechSkillsProps {
  logos: Logo[];
}

const TechSkills = ({ logos }: TechSkillsProps) => {
  return (
    <motion.div
      className="absolute right-20 flex flex-col gap-6 items-center"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      style={{ top: "180px", right: "80px" }}
    >
      {logos.map((logo, index) => (
        <motion.div
          key={`tech-${logo.alt}-${index}`}
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
        >
          {/* Text Label */}
          <motion.span
            className="text-white text-lg mr-2 font-poppins font-medium w-24 text-right"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
          >
            {logo.alt}
          </motion.span>

          {/* Logo Icon */}
          <motion.div
            className="w-17 h-17 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"
            whileHover={{ scale: 1.2 }}
          >
            <img src={logo.src} alt={logo.alt} className="w-10 h-10" />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default memo(TechSkills);
