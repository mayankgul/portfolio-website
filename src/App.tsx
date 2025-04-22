import "./globals.css";
import Navbar from "./components/Navbar.tsx";
import HeroSection from "./components/Hero.tsx";
import { Provider as ReduxProvider, useDispatch } from "react-redux";
import { AppDispatch, store } from "./redux/store.ts";
import { useEffect } from "react";
import { updateScreenSize } from "./redux/features/screenSlice.ts";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const handleResize = () => {
      dispatch(
        updateScreenSize({
          isMobile: window.matchMedia("(max-width: 768px)").matches,
          isTablet: window.matchMedia(
            "(min-width: 769px) and (max-width: 1530px)"
          ).matches,
        })
      );
    };

    // Listen for screen resize
    window.addEventListener("resize", handleResize);

    // Initial call
    // handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
};

const WrappedApp = () => {
  return (
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  );
};

export default WrappedApp;
