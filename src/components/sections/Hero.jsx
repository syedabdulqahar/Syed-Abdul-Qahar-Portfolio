import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { personalInfo } from "../../data/portfolio";
import { Typewriter } from "../ui/Typewriter";

const Hero = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/30 light:bg-pastel-cyan/50 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 light:bg-pastel-violet/60 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-electric/20 light:bg-pastel-sky/50 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container-custom z-10 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center md:text-left"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-cyan-400/20 light:bg-pastel-sky border border-cyan-400/50 light:border-sky-200 text-cyan-400 light:text-teal-800 text-sm font-medium tracking-elegant shadow-soft"
            >
              👋 Welcome to my portfolio
            </motion.span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-bold light:font-semibold mb-8 leading-[1.1] tracking-tight"
          >
            <span>Hi, I'm </span>
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          {/* Title with Typewriter */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="text-2xl md:text-3xl text-gray-300 light:text-ink-soft font-medium">
              <span className="text-gray-400 light:text-ink-muted">A </span>
              <Typewriter
                words={[
                  "Frontend Developer",
                  "AI Enthusiast",
                  "Generative AI Explorer",
                  "Python Developer",
                ]}
                typingSpeed={80}
                deletingSpeed={60}
                delayBetweenWords={2000}
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 light:text-ink-muted text-lg md:text-xl max-w-2xl mb-10 leading-relaxed light:leading-loose mx-auto md:mx-0"
          >
            {personalInfo.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-14 justify-center md:justify-start"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(6, 182, 212, 0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll("projects")}
              className="btn-primary"
            >
              View Projects <FaArrowRight />
            </motion.button>

            <motion.a
              href={personalInfo.resume}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
              style={{ display: "flex", gap: "10px", alignItems: "center" }}
            >
              Resume <FaDownload />
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 md:gap-10 pt-10 border-t border-white/10 light:border-zinc-200"
          >
            {[
              { number: "3+", label: "Certifications" },
              { number: "Dean's", label: "Honor Roll" },
              { number: "2027", label: "Graduating" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center light:bg-surface light:rounded-2xl light:py-5 light:shadow-soft light:border light:border-zinc-200/60"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <p className="text-sm text-gray-500 light:text-ink-muted">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cyan-400 light:border-zinc-300 rounded-full flex items-center justify-center">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-cyan-400 light:bg-zinc-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
