import { useSelector } from "react-redux";
import clsx from "clsx";
import { memo } from "react";

import { RootState } from "../../redux/store.ts";

interface HeroBackgroundProps {
  backgroundImage: string;
}

const HeroBackground = ({ backgroundImage }: HeroBackgroundProps) => {
  // managing theme state
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-[-1]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
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
    </>
  );
};

export default memo(HeroBackground);
