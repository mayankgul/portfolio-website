import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { memo } from "react";

import { RootState } from "../../../redux/store.ts";

interface HeroBackgroundProps {
  backgroundImage: string;
}

const HeroBackground = ({ backgroundImage }: HeroBackgroundProps) => {
  // managing theme state
  const theme = useSelector((state: RootState) => state.theme.mode);
  const [scrollPosition, setScrollPosition] = useState(0);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate parallax effect (background moves slower than scroll)
  const yPos = scrollPosition * 0.4; // Adjust the multiplier to control parallax speed

  return (
    <>
      {/* Background Image with Parallax */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center z-[-1] will-change-transform"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: `translate3d(0, ${yPos}px, 0)`,
          height: "100%", // Add extra height to avoid seeing the edge during parallax
          backgroundAttachment: "scroll", // Override default fixed behavior
        }}
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
        style={{
          transform: `translate3d(0, ${yPos}px, 0)`,
          height: "100%", // Match the background image extra height
        }}
      />
    </>
  );
};

export default memo(HeroBackground);
