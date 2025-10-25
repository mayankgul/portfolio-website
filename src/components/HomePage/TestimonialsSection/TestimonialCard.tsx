import { memo, useEffect, useState } from "react";
import { QuoteIcon, Testimonial } from "./constants";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  // Animation states
  const [isVisible, setIsVisible] = useState(false);

  // Reset animation when testimonial changes
  useEffect(() => {
    setIsVisible(false);

    // Start animation sequence with minimal delay
    const showContent = setTimeout(() => setIsVisible(true), 30);

    return () => {
      clearTimeout(showContent);
    };
  }, [testimonial.id]);

  return (
    <div className="bg-gray-900 w-full flex flex-col justify-center relative px-8 py-12 pb-0">
      {/* Author info and quote icon in horizontal layout */}
      <div className="absolute top-14 right-15 flex items-center gap-6">
        {/* Author info container with simple fade animation */}
        <div
          className={`flex items-center gap-4 shrink-0 transition-opacity duration-500 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Name and role content (right-aligned) */}
          <div className="text-right">
            <p className="text-white font-semibold text-base">
              —&nbsp;&nbsp;{testimonial.name}
            </p>
            <p className="text-white/70 text-sm">{testimonial.role}</p>
          </div>

          {/* Avatar on right */}
          {testimonial.avatarUrl && (
            <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0 border border-white/30">
              <img
                src={testimonial.avatarUrl}
                alt={testimonial.name}
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Vertical divider - static */}
        <div className="h-10 w-px bg-gray-600"></div>

        {/* Quote Icon - static */}
        <div>
          <img src={QuoteIcon} alt="Quotation mark" width={30} height={30} />
        </div>
      </div>

      {/* Content Container */}
      <div className="mx-auto w-full flex flex-row items-center justify-between gap-10">
        {/* Testimonial Content with simple fade animation */}
        <div className="flex-1 ml-8 max-w-[60%]">
          <div
            className={`relative transition-opacity duration-500 ease-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-white text-xl font-light leading-relaxed font-proxima tracking-wide p-0">
              {testimonial.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(TestimonialCard);
