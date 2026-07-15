import { motion } from 'framer-motion';
import { skillsData } from '../../data/portfolio';
import { staggerContainer, staggerItem } from '../../utils/animations';

const Skills = () => {
  const categories = Object.entries(skillsData);

  return (
    <section id="skills" className="section-wrap">
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20 text-center"
        >
          <span className="section-label">Expertise</span>
          <h2 className="mt-5">Technical Skills</h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {categories.map(([key, category]) => (
            <motion.div
              key={key}
              variants={staggerItem}
              whileHover={{ y: -8, boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)' }}
              className="card-glass card-hover group"
            >
              {/* Category Title */}
              <h3 className="theme-heading font-bold mb-6 group-hover:text-cyan-400 light:group-hover:text-teal-700 transition-colors">
                {category.title}
              </h3>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1.5 rounded-full bg-cyan-400/20 light:bg-pastel-sky border border-cyan-400/30 light:border-sky-200/70 text-cyan-400 light:text-teal-800 text-xs font-medium hover:bg-cyan-400/40 light:hover:bg-pastel-cyan hover:border-cyan-400/60 transition-all cursor-default shadow-soft"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Skill Level Indicator */}
              <div className="mt-6 pt-6 border-t border-white/10 light:border-zinc-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500 light:text-ink-muted">Proficiency</span>
                  <span className="text-xs text-cyan-400 light:text-teal-700 font-semibold">Expert</span>
                </div>
                <div className="w-full h-1 bg-white/10 light:bg-zinc-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-gradient-to-r from-cyan-400 to-electric rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
