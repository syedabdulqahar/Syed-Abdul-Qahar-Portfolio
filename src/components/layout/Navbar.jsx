import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks, personalInfo } from "../../data/portfolio";
import { useActiveSection, useIsMobile } from "../../hooks/useCustom";
import ThemeToggle from "../ui/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    const sectionId = href.replace("#", "");
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--color-bg-primary)]/80 backdrop-blur-lg border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={() => handleNavClick("#home")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="font-bold text-xl md:text-2xl gradient-text cursor-pointer"
        >
          {personalInfo.name.split(" ")[0]}
        </motion.a>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative px-4 py-2 text-sm font-medium"
                whileHover={{ color: "#06b6d4" }}
              >
                <span
                  className={`transition-colors ${
                    activeSection === link.href.replace("#", "")
                      ? "text-cyan-400"
                      : "text-[var(--color-text-secondary)]"
                  }`}
                >
                  {link.label}
                </span>
                {activeSection === link.href.replace("#", "") && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-electric"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}

            {/* Theme Toggle — Desktop */}
            <div className="ml-3">
              <ThemeToggle />
            </div>
          </div>
        )}

        {/* Mobile: Theme Toggle + Menu Button */}
        {isMobile && (
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--color-text-secondary)] hover:text-cyan-400 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.button>
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className={`overflow-hidden bg-[var(--color-bg-primary)]/95 backdrop-blur-lg border-b border-[var(--color-border)] ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="container-custom py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <motion.button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-left px-4 py-2 rounded-lg transition-colors ${
                activeSection === link.href.replace("#", "")
                  ? "bg-cyan-400/20 text-cyan-400"
                  : "text-[var(--color-text-secondary)] hover:bg-[var(--color-glass)]"
              }`}
              whileHover={{ x: 4 }}
            >
              {link.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
