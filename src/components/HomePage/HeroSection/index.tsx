import { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import clsx from "clsx";

import { RootState } from "../../../redux/store.ts";
import BackgroundImage from "../../../assets/images/hero-bg.jpg";
import {
  GREETING_INTERVAL_MS,
  GREETINGS,
  TECH_LOGOS,
  TABLET_TECH_LOGOS,
  MOBILE_TECH_LOGOS,
} from "./constants.ts";

import HeroGreeting from "./HeroGreeting.tsx";
import AboutSection from "./AboutSection.tsx";
import JsonAnimation from "./JsonAnimation.tsx";
import TechSkills from "./TechSkills.tsx";
import TabletTechSkills from "./TabletTechSkills.tsx";
import MobileSkills from "./MobileSkills.tsx";
import HeroBackground from "./HeroBackground.tsx";

const HeroSection = () => {
  // managing screen size state
  const { isMobile, isTablet } = useSelector(
    (state: RootState) => state.screen
  );
  const isDesktop = !isMobile && !isTablet;

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
          "text-left": isDesktop,
        })}
      >
        <HeroGreeting greetings={GREETINGS} greetingIndex={greetingIndex} />
        <AboutSection />
        {isMobile && <MobileSkills logos={MOBILE_TECH_LOGOS} />}
      </div>
    ),
    [isMobile, isTablet, isDesktop, greetingIndex]
  );

  // Memoize the tablet content
  const tabletContent = useMemo(
    () => isTablet && <TabletTechSkills logos={TABLET_TECH_LOGOS} />,
    [isTablet]
  );

  // Memoize the desktop content section
  const desktopContent = useMemo(
    () =>
      isDesktop && (
        <>
          <motion.div className="flex-1 z-10 ml-10">
            <JsonAnimation />
          </motion.div>
        </>
      ),
    [isDesktop]
  );

  // Separate TechSkills for desktop to ensure it's positioned correctly
  const desktopTechSkills = useMemo(
    () => isDesktop && <TechSkills logos={TECH_LOGOS} />,
    [isDesktop]
  );

  return (
    <section
      className={clsx(
        "relative flex flex-col justify-center text-white overflow-hidden",
        {
          "h-150 items-center px-8 text-center": isMobile,
          "h-170 items-start px-12": isTablet,
          "h-screen items-start px-12": isDesktop,
        }
      )}
      // On desktop, use 80vh height to match background and allow scrolling
      style={{
        height: isDesktop ? "80vh" : undefined,
        minHeight: isDesktop ? undefined : "100vh",
      }}
    >
      <HeroBackground backgroundImage={BackgroundImage} />

      <div
        className={clsx("flex flex-row flex-1 z-10", {
          "mt-32": isMobile,
          "mt-40": isTablet,
          "mt-45": isDesktop,
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

export default HeroSection;
