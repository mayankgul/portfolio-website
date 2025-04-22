import { Typewriter } from "react-simple-typewriter";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";

import { ArrowRight } from "lucide-react";

import { RootState } from "../redux/store.ts";
import JsonAnimation from "./JsonAnimation.tsx"

import BackgroundImage from "../assets/images/hero-bg.jpg";
import ReactLogo from "../assets/logos/react.svg"
import DockerLogo from "../assets/logos/docker.svg"
import ExpressLogo from "../assets/logos/express.svg"
import PostgresqlLogo from "../assets/logos/postgresql.svg"
import PythonLogo from "../assets/logos/python.svg"

const greetings: string[] = ["Hello!", "¡Hola!"];
const logos = [
  {src: ReactLogo, alt: "React"},
  {src: PythonLogo, alt: "Python"},
  {src: ExpressLogo, alt: "Express"},
  {src: PostgresqlLogo, alt: "PostgreSQL"},
  {src: DockerLogo, alt: "Docker"}
]

const Hero = () => {
  const { isMobile, isTablet } = useSelector(
    (state: RootState) => state.screen
  );
  const theme = useSelector((state: RootState) => state.theme.mode);

  // logic to loop between greetings
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={clsx("relative flex flex-col justify-center text-white", {
        "h-150 items-center px-8 text-center": isMobile,
        "h-170 items-start px-12": isTablet,
        "h-200 items-start px-12": !isMobile && !isTablet,
      })}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-[-1]"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      />

      {/* Image Overlay */}
      <div
        className={clsx(
          "absolute inset-0 transition-colors duration-300 ease-in-out backdrop-blur-xs",
          {
            "bg-white/50": theme === "light",
            "bg-black/80": theme === "dark",
          }
        )}
      />

      <div className={clsx("flex flex-row flex-1", {
        "mt-30": isMobile,
        "mt-45": isTablet || (!isMobile && !isTablet),
      })}>
        {/* Content */}
        <div
            className={clsx("relative w-full", {
              "max-w-sm mx-auto": isMobile,
              "max-w-lg text-left": isTablet,
              "text-left": !isMobile && !isTablet,
            })}
        >
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
            </AnimatePresence>
            {" "}
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
            <Typewriter
                words={[
                  "fullstack developer",
                  "devops engineer",
                  "cloud architect",
                ]}
                loop
                typeSpeed={50}
                cursor
            />
          </span>
          </motion.h2>

          {/* About Section */}
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
                  "flex items-center space-x-4":
                      isTablet || (!isTablet && !isMobile),
                })}
            >
              <div
                  className={clsx("h-[2px] bg-gray-400", {
                    "w-6": isMobile,
                    "w-8": isTablet,
                    "w-9": !isTablet && !isMobile,
                  })}
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

              {isMobile && <div className="w-6 h-[2px] bg-gray-400" />}
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
              I’m a curious mind, always eager to explore new ideas and
              perspectives. Whether it’s diving into a challenging problem or
              simply appreciating the little joys in life, I believe in constant
              growth and learning.
              <br />
              <br />
              When I’m not working, you’ll probably find me swimming, playing
              chess, or lost in a great book.
            </motion.p>

            {/* Button to About Me Page */}
            <div
                className={clsx("relative w-full flex", {
                  "justify-center": isMobile,
                })}
            >
              <motion.button
                  onClick={() => {}}
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
              >
                Know more
                {" "}
                <ArrowRight className="w-4 h-4 transition-transform duration-5 group-hover:translate-x-1 ml-2" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {!isMobile && !isTablet && (
            <>
              <motion.div className="flex-1 z-10 ml-10">
                <JsonAnimation />
              </motion.div>

              <motion.div
                  className="absolute right-20 mt-15 flex flex-col gap-6 items-center"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
              >
                {logos.map((logo, index) => (
                    <motion.div
                        key={index}
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


              {/*<motion.div*/}
              {/*    className="absolute right-20 mt-25 flex flex-col gap-6 items-center"*/}
              {/*    initial={{ opacity: 0, x: 50 }}*/}
              {/*    animate={{ opacity: 1, x: 0 }}*/}
              {/*    transition={{ duration: 0.7, delay: 0.5 }}*/}
              {/*>*/}
              {/*  {logos.map((logo, index) => (*/}
              {/*      <motion.div*/}
              {/*          key={index}*/}
              {/*          data-tooltip-id={`tooltip-${index}`}*/}
              {/*          data-tooltip-content={logo.alt}*/}
              {/*          className="w-17 h-17 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"*/}
              {/*          initial={{ opacity: 0, x: 20 }}*/}
              {/*          animate={{ opacity: 1, x: 0 }}*/}
              {/*          transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}*/}
              {/*          whileHover={{ scale: 1.2 }}*/}
              {/*      >*/}
              {/*        <img src={logo.src} alt={logo.alt} className="w-10 h-10" />*/}
              {/*         <Tooltip id={`tooltip-${index}`} place="left"  />*/}
              {/*      </motion.div>*/}
              {/*  ))}*/}
              {/*</motion.div>*/}
            </>
        )}
      </div>
    </section>
  );
};

export default Hero;
