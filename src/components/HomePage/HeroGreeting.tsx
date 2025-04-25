import { Typewriter } from "react-simple-typewriter";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { memo } from "react";

import { RootState } from "../../redux/store.ts";
import { SKILLS } from "./constants";

interface HeroGreetingProps {
  greetings: string[];
  greetingIndex: number;
}

const HeroGreeting = ({ greetings, greetingIndex }: HeroGreetingProps) => {
  // managing screen size state
  const { isMobile, isTablet } = useSelector(
    (state: RootState) => state.screen
  );

  // managing theme state
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <>
      {/* Greeting */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className={clsx("font-poppins font-bold", {
          "text-3xl": isMobile,
          "text-5xl": isTablet || (!isTablet && !isMobile),
          "text-white": theme === "dark",
          "text-black": theme === "light",
        })}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={greetings[greetingIndex]}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.35 }}
          >
            {greetings[greetingIndex]}
          </motion.span>
        </AnimatePresence>{" "}
        <span
          className={clsx({
            "text-blue-400": theme === "dark",
            "text-blue-600": theme === "light",
          })}
        >
          <Typewriter words={["I'm Mayank"]} loop={1} typeSpeed={100} />
        </span>
      </motion.h1>

      {/* Subheading */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className={clsx("font-poppins font-semibold", {
          "text-xl mt-2": isMobile,
          "text-3xl mt-3": isTablet,
          "text-3xl mt-4": !isMobile && !isTablet,
        })}
      >
        <span
          className={clsx("font-normal", {
            "tex-white": theme === "dark",
            "text-black": theme === "light",
          })}
        >
          a
        </span>{" "}
        <span
          className={clsx({
            "text-green-400": theme === "dark",
            "text-green-600": theme === "light",
          })}
        >
          <Typewriter words={SKILLS} loop typeSpeed={50} cursor />
        </span>
      </motion.h2>
    </>
  );
};

export default memo(HeroGreeting);
