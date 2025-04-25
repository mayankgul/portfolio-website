import { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import clsx from "clsx";

import { RootState } from "../../redux/store.ts";
import BackgroundImage from "../../assets/images/hero-bg.jpg";
import {
  GREETING_INTERVAL_MS,
  GREETINGS,
  TECH_LOGOS,
  TABLET_TECH_LOGOS,
} from "./constants";

import HeroGreeting from "./HeroGreeting";
import AboutSection from "./AboutSection";
import JsonAnimation from "./JsonAnimation";
import TechSkills from "./TechSkills";
import TabletTechSkills from "./TabletTechSkills";
import HeroBackground from "./HeroBackground";

export const HeroSection = () => {
  // managing screen size state
  const { isMobile, isTablet } = useSelector(
    (state: RootState) => state.screen
  );

  // logic to loop between greetings
  const [greetingIndex, setGreetingIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % GREETINGS.length);
    }, GREETING_INTERVAL_MS);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Memoize the content section to prevent unnecessary re-renders
  const contentSection = useMemo(
    () => (
      <div
        className={clsx("relative w-full", {
          "max-w-sm mx-auto": isMobile,
          "max-w-md text-left": isTablet,
          "text-left": !isMobile && !isTablet,
        })}
      >
        <HeroGreeting greetings={GREETINGS} greetingIndex={greetingIndex} />
        <AboutSection />
      </div>
    ),
    [isMobile, isTablet, greetingIndex]
  );

  // Memoize the tablet content
  const tabletContent = useMemo(
    () => isTablet && <TabletTechSkills logos={TABLET_TECH_LOGOS} />,
    [isTablet]
  );

  // Memoize the desktop content section
  const desktopContent = useMemo(
    () =>
      !isMobile &&
      !isTablet && (
        <>
          <motion.div className="flex-1 z-10 ml-10">
            <JsonAnimation />
          </motion.div>
        </>
      ),
    [isMobile, isTablet]
  );

  // Separate TechSkills for desktop to ensure it's positioned correctly
  const desktopTechSkills = useMemo(
    () => !isMobile && !isTablet && <TechSkills logos={TECH_LOGOS} />,
    [isMobile, isTablet]
  );

  return (
    <section
      className={clsx("relative flex flex-col justify-center text-white", {
        "h-150 items-center px-8 text-center": isMobile,
        "h-170 items-start px-12": isTablet,
        "h-200 items-start px-12": !isMobile && !isTablet,
      })}
    >
      <HeroBackground backgroundImage={BackgroundImage} />

      <div
        className={clsx("flex flex-row flex-1", {
          "mt-32": isMobile,
          "mt-40": isTablet,
          "mt-45": !isMobile && !isTablet,
        })}
      >
        {contentSection}
        {tabletContent}
        {desktopContent}
      </div>
      {desktopTechSkills}
    </section>
  );
};
