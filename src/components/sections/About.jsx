import { motion } from 'framer-motion';
import { aboutData, personalInfo } from '../../data/portfolio';
import { staggerContainer, staggerItem } from '../../utils/animations';

const About = () => {
  return (
    <section id="about" className="section-wrap">
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center"
        >
          <span className="section-label">
            About Me
          </span>
          <h2 className="mt-5">Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
          {/* Left: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-400/40 via-cyan-400/10 to-purple-500/40 light:from-pastel-sky light:via-surface light:to-pastel-violet p-[3px] shadow-[0_0_50px_rgba(34,211,238,0.12)] light:shadow-card transition-shadow duration-500 hover:shadow-[0_0_60px_rgba(34,211,238,0.25)] light:hover:shadow-elevated">
              <div className="relative w-full h-full rounded-[13px] overflow-hidden bg-white light:shadow-soft">
                <motion.img
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  src="/projects/dp.png"
                  alt={`${personalInfo.name} - Profile`}
                  className="w-full h-full object-cover object-[center_15%]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/25 via-transparent to-cyan-400/5 light:from-zinc-900/5 light:to-transparent pointer-events-none" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 light:ring-zinc-200/60 pointer-events-none" />
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.2 }}
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.p
              variants={staggerItem}
              className="text-gray-400 light:text-ink-muted text-lg leading-relaxed light:leading-loose"
            >
              {aboutData.intro}
            </motion.p>

            {/* Interests */}
            <motion.div variants={staggerItem}>
              <h4 className="theme-heading font-semibold mb-5">My Interests</h4>
              <div className="flex flex-wrap gap-2">
                {aboutData.interests.map((interest, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 rounded-full bg-cyan-400/20 light:bg-pastel-sky border border-cyan-400/50 light:border-sky-200/80 text-cyan-400 light:text-teal-800 text-sm font-medium hover:bg-cyan-400/30 light:hover:bg-pastel-cyan transition-colors shadow-soft"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Highlights Stats */}
            <motion.div variants={staggerItem} className="grid grid-cols-2 gap-5 pt-8 border-t border-white/10 light:border-zinc-200">
              {aboutData.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-5 rounded-2xl bg-white/5 light:bg-surface hover:bg-white/10 light:hover:bg-muted transition-colors light:shadow-soft light:border light:border-zinc-200/60"
                >
                  <div className="text-2xl font-bold text-cyan-400 light:text-teal-700 mb-1">
                    {highlight.label}
                  </div>
                  <p className="text-sm text-gray-500 light:text-ink-muted">{highlight.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
