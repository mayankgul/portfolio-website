import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import { memo } from "react";

import { RootState } from "../../../redux/store.ts";

const AboutSection = () => {
  // managing screen size state
  const { isMobile, isTablet } = useSelector(
    (state: RootState) => state.screen
  );

  const handleLearnMoreClick = () => {
    // Implement navigation or scrolling logic here
    console.log("Learn more clicked");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className={clsx({
        "mt-10 text-center px-3": isMobile,
        "mt-12": isTablet,
        "mt-15": !isTablet && !isMobile,
      })}
    >
      {/* Heading */}
      <div
        className={clsx("flex items-center", {
          "justify-center space-x-3": isMobile,
          "flex items-center space-x-4": isTablet || (!isTablet && !isMobile),
        })}
      >
        <div
          className={clsx("h-[2px] bg-gray-400", {
            "w-6": isMobile,
            "w-8": isTablet,
            "w-9": !isTablet && !isMobile,
          })}
          aria-hidden="true"
        />

        <h3
          className={clsx(
            "text-poppins font-semibold tracking-widest text-gray-300",
            {
              "text-xs": isMobile,
              "text-sm": isTablet,
              "text-md": !isTablet && !isMobile,
            }
          )}
        >
          ABOUT ME
        </h3>

        {isMobile && (
          <div className="w-6 h-[2px] bg-gray-400" aria-hidden="true" />
        )}
      </div>

      {/* Bio Text */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className={clsx(
          "text-sans text-gray-200 leading-relaxed tracking-wider",
          {
            "text-sm max-w-xs mx-auto mt-4": isMobile,
            "text-base max-w-md mt-6": isTablet,
            "text-xl max-w-2xl mt-6": !isTablet && !isMobile,
          }
        )}
      >
        I'm a curious mind, always eager to explore new ideas and perspectives.
        Whether it's diving into a challenging problem or simply appreciating
        the little joys in life, I believe in constant growth and learning.
        <br />
        <br />
        When I'm not working, you'll probably find me swimming, playing chess,
        or lost in a great book.
      </motion.p>

      {/* Button to About Me Page */}
      <div
        className={clsx("relative w-full flex", {
          "justify-center": isMobile,
        })}
      >
        <motion.button
          onClick={handleLearnMoreClick}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#ffffff",
            color: "#000000",
          }}
          whileTap={{ scale: 0.95 }}
          className={clsx(
            "absolute rounded-lg border-1 border-white text-white bg-transparent transition-all duration-5 shadow-lg flex items-center justify-center",
            {
              "top-6 pl-6 pr-5 py-2 text-sm mx-auto gap-1": isMobile,
              "top-8 pl-8 pr-6 py-3 text-md gap-2 cursor-pointer": isTablet,
              "top-10 pl-8 pr-6 py-3 text-lg gap-2 cursor-pointer":
                !isMobile && !isTablet,
            }
          )}
          aria-label="Learn more about me"
        >
          Know more{" "}
          <ArrowRight
            className="w-4 h-4 transition-transform duration-5 group-hover:translate-x-1 ml-2"
            aria-hidden="true"
          />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default memo(AboutSection);
