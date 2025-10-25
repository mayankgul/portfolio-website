import { memo } from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-16">
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>

      <motion.div
        className="w-24 h-1 bg-primary mx-auto mb-6"
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: 96 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      />

      <motion.p
        className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {subtitle}
      </motion.p>
    </div>
  );
};

export default memo(SectionHeader);
