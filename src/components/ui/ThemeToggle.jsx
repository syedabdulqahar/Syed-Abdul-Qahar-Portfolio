import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme, isLight } = useTheme();
  const [showTooltip, setShowTooltip] = useState(false);

  const label = isLight ? 'Switch to dark mode' : 'Switch to light mode';

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={label}
        title={label}
        className="relative w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 light:bg-surface border border-white/10 light:border-zinc-200 text-gray-300 light:text-ink-muted hover:text-cyan-400 light:hover:text-ink hover:border-cyan-400/50 light:hover:border-zinc-300 hover:bg-cyan-400/10 light:hover:bg-muted light:shadow-soft transition-all duration-300 overflow-hidden"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme}
            initial={{ y: 10, opacity: 0, rotate: -45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -10, opacity: 0, rotate: 45 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="flex items-center justify-center"
          >
            {isLight ? <FaMoon size={15} /> : <FaSun size={15} />}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap pointer-events-none z-50 bg-dark-800 light:bg-surface text-gray-200 light:text-ink-muted border border-white/10 light:border-zinc-200 shadow-card"
          >
            {label}
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-dark-800 light:bg-surface border-l border-t border-white/10 light:border-zinc-200" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeToggle;
