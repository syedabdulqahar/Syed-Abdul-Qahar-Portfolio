import { motion } from 'framer-motion';
import { aboutData } from '../../data/portfolio';
import { fadeInUp, staggerContainer, staggerItem } from '../../utils/animations';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">
            About Me
          </span>
          <h2 className="mt-4">Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-400/20 to-purple-500/20 p-1">
              <div className="w-full h-full bg-gradient-to-br from-cyan-400/10 to-purple-500/10 rounded-2xl flex items-center justify-center overflow-visible">
                <div className="relative">
                  {/* Gradient halo */}
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-400/30 to-purple-500/30 blur-2xl transform rotate-6" aria-hidden="true" />

                  {/* Circular avatar */}
                  <div className="relative rounded-full overflow-hidden w-56 h-56 md:w-72 md:h-72 shadow-2xl ring-1 ring-white/10 transition-transform hover:scale-105">
                    <img src="/projects/dp.png" alt="Syed Abdul Qahar" loading="lazy" className="w-full h-full object-cover" />
                  </div>

                  {/* Name / Role caption */}
                  <div className="mt-4 text-center">
                    <div className="text-white font-semibold text-lg">Syed Abdul Qahar</div>
                    <div className="text-sm text-gray-400">Frontend Developer & AI Enthusiast</div>
                  </div>
                </div>
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
            className="space-y-6"
          >
            <motion.p
              variants={staggerItem}
              className="text-gray-400 text-lg leading-relaxed"
            >
              {aboutData.intro}
            </motion.p>

            {/* Interests */}
            <motion.div variants={staggerItem}>
              <h4 className="text-white font-semibold mb-4">My Interests</h4>
              <div className="flex flex-wrap gap-2">
                {aboutData.interests.map((interest, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 rounded-lg bg-cyan-400/20 border border-cyan-400/50 text-cyan-400 text-sm font-medium hover:bg-cyan-400/30 transition-colors"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Highlights Stats */}
            <motion.div variants={staggerItem} className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
              {aboutData.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="text-2xl font-bold text-cyan-400 mb-1">
                    {highlight.label}
                  </div>
                  <p className="text-sm text-gray-500">{highlight.description}</p>
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
