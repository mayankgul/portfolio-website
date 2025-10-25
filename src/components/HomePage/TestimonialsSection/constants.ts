import QuoteSymbol from "../../../assets/images/quote.svg";

// Interface for testimonial data
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatarUrl?: string; // Optional avatar image
}

// Sample testimonial data
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechVision",
    text: "Mayank delivered exceptional work that exceeded our expectations. His technical expertise and attention to detail resulted in a flawless application that our users love.",
    avatarUrl: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    id: "testimonial-2",
    name: "Michael Chen",
    role: "Product Manager",
    company: "Innovate Labs",
    text: "Working with Mayank was a fantastic experience. He understood our requirements perfectly and delivered a solution that was both elegant and performant.",
    avatarUrl: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    id: "testimonial-3",
    name: "Emma Williams",
    role: "Founder",
    company: "DesignFlow",
    text: "Mayank's technical skills and problem-solving abilities are truly impressive. He consistently delivered high-quality code and was a pleasure to work with.",
    avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export const QuoteIcon = QuoteSymbol;
