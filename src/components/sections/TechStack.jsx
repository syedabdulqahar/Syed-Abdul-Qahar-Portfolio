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
    <section id="tech-stack" className="section-wrap">
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20 text-center"
        >
          <span className="section-label">Tools & Technologies</span>
          <h2 className="mt-5">Tech Stack</h2>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
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
                className="group relative p-6 rounded-2xl bg-white/5 light:bg-surface border border-white/10 light:border-zinc-200/80 light:shadow-soft hover:bg-white/10 light:hover:bg-muted transition-all duration-300 cursor-default"
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
                <h4 className="theme-heading font-semibold mb-1 group-hover:text-cyan-400 light:group-hover:text-teal-700 transition-colors">
                  {tech.name}
                </h4>

                {/* Category */}
                <p className="text-xs text-gray-500 light:text-ink-muted group-hover:text-cyan-400/60 light:group-hover:text-teal-600/70 transition-colors">
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
          className="text-center text-gray-400 light:text-ink-muted mt-14 text-sm max-w-2xl mx-auto leading-relaxed"
        >
          I'm constantly learning and integrating new technologies. This represents my core
          technical toolkit and the technologies I use most frequently in my projects.
        </motion.p>
      </div>
    </section>
  );
};

export default TechStack;
