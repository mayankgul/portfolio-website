import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import { TESTIMONIALS } from "./constants";
import { useMediaQueries } from "../../../hooks/useMediaQueries";
import ChevronLeft from "../../../assets/images/chevron-left.svg";
import ChevronRight from "../../../assets/images/chevron-right.svg";

const TestimonialsSection = () => {
  const { isDesktop } = useMediaQueries();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Minimal delay before showing content
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1700); // Increased from 1500ms to 1700ms (+200ms)

    return () => clearTimeout(timer);
  }, []);

  // Auto-cycling functionality
  const CYCLE_DELAY = 5000; // 5 seconds

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const handlePrevious = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  // Set up auto-cycling
  useEffect(() => {
    if (!isVisible) return; // Don't start cycling until visible

    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, CYCLE_DELAY);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [handleNext, isAnimating, isVisible]);

  if (!TESTIMONIALS.length) return null;

  if (!isDesktop) {
    return null;
  }

  // Animation variants with minimal delays
  const contentVariants = {
    hidden: { opacity: 0, y: -20 }, // Coming from top (negative y value)
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const controlsVariants = {
    hidden: { opacity: 0, y: 20 }, // Coming from bottom (positive y value)
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="w-full relative bg-gray-900 overflow-hidden pb-5"
    >
      <div className="w-full flex flex-col items-center">
        <motion.div
          className="w-full"
          variants={contentVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <TestimonialCard testimonial={TESTIMONIALS[currentIndex]} />
        </motion.div>

        {/* Navigation and pagination */}
        <motion.div
          className="flex justify-between w-full pl-16 pr-13 mt-8"
          variants={controlsVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Pagination dots */}
          <div className="flex items-center gap-3">
            {TESTIMONIALS.map((_, i) => (
              <div
                key={i}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-white scale-110"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                onClick={() => {
                  if (i !== currentIndex && !isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(i);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                style={{ cursor: "pointer" }}
                aria-label={
                  i === currentIndex
                    ? `Testimonial ${i + 1}, current`
                    : `Testimonial ${i + 1}`
                }
              />
            ))}
          </div>

          <div className="flex items-center gap-5">
            {/* Previous button */}
            <button
              onClick={handlePrevious}
              className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-700 transition-colors duration-200"
              disabled={isAnimating}
              aria-label="Previous testimonial"
            >
              <img
                src={ChevronLeft}
                alt="Previous"
                width={16}
                height={16}
                className="hover:scale-110 transition-transform duration-200"
              />
            </button>

            {/* Next button */}
            <button
              onClick={handleNext}
              className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-700 transition-colors duration-200"
              disabled={isAnimating}
              aria-label="Next testimonial"
            >
              <img
                src={ChevronRight}
                alt="Next"
                width={16}
                height={16}
                className="hover:scale-110 transition-transform duration-200"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
