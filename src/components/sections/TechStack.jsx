import { motion } from 'framer-motion';
import { techStackData } from '../../data/portfolio';
import { staggerContainer, staggerItem } from '../../utils/animations';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGit,
  FaGithub,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiPython,
  SiTailwindcss,
  SiVite,
  SiVercel,
} from 'react-icons/si';
import {
  TbBrandOpenai,
  TbBrandVscode,
} from 'react-icons/tb';

// Map icon string names to actual icon components
const iconMap = {
  FaReact: FaReact,
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  FaGit: FaGit,
  FaGithub: FaGithub,
  SiJavascript: SiJavascript,
  SiPython: SiPython,
  SiTailwindcss: SiTailwindcss,
  SiVite: SiVite,
  TbBrandOpenai: TbBrandOpenai,
  TbBrandVscode: TbBrandVscode,
  SiVercel: SiVercel,
};

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20 md:py-28 relative">
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">
            Tools & Technologies
          </span>
          <h2 className="mt-4">Tech Stack</h2>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {techStackData.map((tech, index) => {
            const IconComponent = iconMap[tech.icon];
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{
                  y: -8,
                  boxShadow: '0 0 30px rgba(6, 182, 212, 0.6)',
                  borderColor: 'rgba(6, 182, 212, 0.8)',
                }}
                className="group p-6 rounded-xl bg-[var(--color-glass)] border border-[var(--color-border)] hover:bg-[var(--color-glass)] transition-all duration-300 cursor-default"
              >
                {/* Tech Icon */}
                <div className="text-4xl mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                  {IconComponent ? (
                    <IconComponent className="group-hover:text-cyan-400 transition-colors" />
                  ) : (
                    <span className="group-hover:text-cyan-400 transition-colors">{tech.icon}</span>
                  )}
                </div>

                {/* Tech Name */}
                <h4 className="text-[var(--color-text-primary)] font-semibold mb-1 group-hover:text-cyan-400 transition-colors">
                  {tech.name}
                </h4>

                {/* Category */}
                <p className="text-xs text-[var(--color-text-tertiary)] group-hover:text-cyan-400/60 transition-colors">
                  {tech.category}
                </p>

                {/* Glow Effect on Hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400/10 to-electric/10 -z-10"
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-[var(--color-text-secondary)] mt-12 text-sm max-w-2xl mx-auto"
        >
          I'm constantly learning and integrating new technologies. This represents my core
          technical toolkit and the technologies I use most frequently in my projects.
        </motion.p>
      </div>
    </section>
  );
};

export default TechStack;
