import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store.ts";
// import { toggleTheme } from "../redux/features/themeSlice.ts";
import { github, linkedin } from "../assets/links.ts";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const menuItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Projects", path: "/projects" },
  { title: "Skills", path: "/skills" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile, isTablet } = useSelector(
    (state: RootState) => state.screen
  );
  const theme = useSelector((state: RootState) => state.theme.mode);

  // const dispatch = useDispatch<AppDispatch>();

  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //     const handleScroll = () => {
  //         setIsScrolled(window.scrollY > 50);
  //     };
  //
  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full px-6 py-4 z-50 transition-all",
        {
          "bg-black/90": theme === "dark",
          "bg-white/80 shadow-md": theme === "light",
        }
      )}
    >
      {
        /* Mobile Navbar*/ isMobile && (
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <h1
              className={clsx("font-poppins text-2xl font-bold", {
                "text-white": theme === "dark",
                "text-black": theme === "light",
              })}
            >
              Mayank.
            </h1>

            {/* Mobile Menu Button */}
            <button
              className={theme === "dark" ? "text-white" : "text-dark"}
              onClick={() => setIsOpen(!isOpen)}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <motion.div
                    initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </motion.div>
            </button>
          </div>
        )
      }

      {
        /* Tablet and Desktop Navbar */ !isMobile && (
          <div className="container mx-auto flex justify-between items-center">
            {/* Left Side Logo */}
            <h1
              className={clsx("font-poppins text-2xl font-bold", {
                "text-white": theme === "dark",
                "text-black": theme === "light",
              })}
            >
              {isTablet ? "M." : "Mayank."}
            </h1>

            {/* Centered Navigation Links */}
            <div
              className={clsx("flex space-x-6", {
                "text-white": theme === "dark",
                "text-black": theme === "light",
              })}
            >
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  smooth
                  duration={500}
                  className="font-poppins cursor-pointer hover:text-blue-400 transition"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Right Side GitHub Icon */}
            <div className="flex items-center space-x-4 text-white">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <AiFillGithub size={25} />
              </a>

              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <AiFillLinkedin size={25} />
              </a>
            </div>

            {/* Right Side Theme Toggle Button with Smooth Transition */}
            {/* <motion.button
              className={theme === "dark" ? "text-white" : "text-black"}
              onClick={() => dispatch(toggleTheme())}
              initial={{ scale: 0.9, opacity: 0.8 }}
              animate={{
                scale: 1,
                opacity: 1,
                rotate: theme === "light" ? 180 : 0,
              }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {theme === "light" ? <Sun size={24} /> : <Moon size={24} />}
            </motion.button> */}
          </div>
        )
      }

      {
        /* Mobile Drawer Menu */ isMobile && (
          <div
            className={clsx(
              "fixed top-16 right-0 h-screen w-64 shadow-2xl transition-transform p-6 bg-black/90",
              {
                "bg-black/90 text-white": theme === "dark",
                "bg-white/80 shadow-md text-black": theme === "light",
                "translate-x-0": isOpen,
                "translate-x-full": !isOpen,
              }
            )}
          >
            <div className="mt-5 flex flex-col space-y-6">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  smooth
                  duration={500}
                  className="font-poppins cursor-pointer hover:text-blue-400 transition"
                  onClick={() => setIsOpen(false)} // Close on click
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )
      }

      {/*
        isMobile && (
          <motion.button
            className="fixed bottom-6 right-6 p-4 rounded-full shadow-lg"
            onClick={() => dispatch(toggleTheme())}
            initial={{ scale: 0.9, opacity: 0.8 }}
            animate={{
              scale: 1,
              opacity: 1,
              backgroundColor: theme === "light" ? "white" : "black",
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {theme === "light" ? (
              <Sun color="black" size={24} />
            ) : (
              <Moon color="white" size={24} />
            )}
          </motion.button>
        )
      */}
    </nav>
  );
};

export default Navbar;
