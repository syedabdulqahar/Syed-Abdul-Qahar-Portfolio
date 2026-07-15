import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import { personalInfo } from "../../data/portfolio";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-900 light:bg-surface border-t border-white/10 light:border-zinc-200 mt-20 light:shadow-navbar">
      <div className="container-custom py-14 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold gradient-text mb-2">
              {personalInfo.name}
            </h3>
            <p className="text-sm text-gray-400 light:text-ink-muted leading-relaxed">{personalInfo.tagline}</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold text-white light:text-ink mb-4 tracking-elegant">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400 light:text-ink-muted">
              <li>
                <a
                  href="#home"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-cyan-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold text-white light:text-ink mb-4 tracking-elegant">Connect</h4>
            <div className="flex gap-3">
              <motion.a
                href="https://www.github.com/syedabdulqahar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-xl bg-white/10 light:bg-muted flex items-center justify-center text-gray-400 light:text-ink-muted hover:text-cyan-400 light:hover:text-ink hover:bg-cyan-400/20 light:hover:bg-zinc-200 transition-all shadow-soft"
              >
                <FaGithub size={18} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/syed-abdul-qahar-47bb37274/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-xl bg-white/10 light:bg-muted flex items-center justify-center text-gray-400 light:text-ink-muted hover:text-cyan-400 light:hover:text-ink hover:bg-cyan-400/20 light:hover:bg-zinc-200 transition-all shadow-soft"
              >
                <FaLinkedin size={18} />
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-xl bg-white/10 light:bg-muted flex items-center justify-center text-gray-400 light:text-ink-muted hover:text-cyan-400 light:hover:text-ink hover:bg-cyan-400/20 light:hover:bg-zinc-200 transition-all shadow-soft"
              >
                <FaEnvelope size={18} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 light:border-zinc-200 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 light:text-ink-muted text-center md:text-left">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-xl bg-cyan-400/20 light:bg-muted flex items-center justify-center text-cyan-400 light:text-ink hover:bg-cyan-400/40 light:hover:bg-zinc-200 transition-colors shadow-soft"
            aria-label="Back to top"
          >
            <FaArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
