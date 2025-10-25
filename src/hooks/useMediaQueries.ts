import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useMemo } from "react";

/**
 * Hook that provides the current screen size state from Redux
 * @returns Object containing isMobile, isTablet, and isDesktop flags
 */
export const useMediaQueries = () => {
  const { isMobile, isTablet } = useSelector(
    (state: RootState) => state.screen
  );

  const isDesktop = useMemo(() => {
    return !isMobile && !isTablet;
  }, [isMobile, isTablet]);

  return { isMobile, isTablet, isDesktop };
};
