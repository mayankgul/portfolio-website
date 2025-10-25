import { motion } from "framer-motion";
import { memo } from "react";

import useTypewriter from "../../../hooks/useTypewriter.ts";
import { jsonLines } from "../../../assets/about.ts";

const JsonAnimation = () => {
  const typedLines = useTypewriter(jsonLines, 1.5);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="bg-[#1f1e22] text-[#d4d4d4] font-mono rounded-lg overflow-hidden shadow-2xl border border-gray-700 w-150 h-134 break-all"
    >
      {/* Top bar */}
      <div className="bg-[#2d2d2d] flex items-center px-4 py-2 space-x-2">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        <div className="ml-4 text-sm text-white">about.json</div>
      </div>

      {/* Editor content */}
      <div className="flex px-4 py-3 overflow-x-auto">
        {/* Line numbers */}
        <div className="pr-4 text-gray-500 select-none text-right">
          {Array.from({ length: typedLines.length }).map((_, i) => (
            <div key={`line-${i}`} className="leading-6">
              {i + 1}
            </div>
          ))}
        </div>

        {/* Code */}
        <div className="whitespace-pre text-left text-sm leading-6">
          {typedLines.map((line, i) => (
            <motion.div
              key={`content-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
            >
              {line}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default memo(JsonAnimation);
