import { motion } from 'framer-motion';
import { experienceData } from '../../data/portfolio';
import { staggerContainer, staggerItem } from '../../utils/animations';

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">
            Career
          </span>
          <h2 className="mt-4">Work Experience</h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-electric to-purple-500 transform -translate-x-1/2"></div>

          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className={`mb-12 md:mb-0 md:mb-16 relative ${
                index % 2 === 0 ? 'md:pr-1/2 md:mr-auto md:w-1/2' : 'md:pl-1/2 md:ml-auto md:w-1/2'
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="hidden md:block absolute left-1/2 top-6 w-4 h-4 rounded-full bg-cyan-400 border-4 border-dark-900 transform -translate-x-1/2"
              />

              {/* Content Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className={`card-glass card-hover ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}
              >
                {/* Timeline Marker for Mobile */}
                <div className="md:hidden flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 flex-shrink-0"></div>
                  <span className="text-xs text-cyan-400 font-semibold uppercase tracking-widest">
                    {experience.period}
                  </span>
                </div>

                {/* Header */}
                <div className="md:hidden mb-4">
                  <h3 className="text-lg font-bold text-white">{experience.title}</h3>
                  <p className="text-cyan-400 font-semibold text-sm mt-1">{experience.company}</p>
                </div>

                {/* Desktop Header */}
                <div className="hidden md:block mb-4">
                  <p className="text-cyan-400 font-semibold text-sm mb-1">{experience.company}</p>
                  <h3 className="text-xl font-bold text-white mb-1">{experience.title}</h3>
                  <p className="text-xs text-gray-500">{experience.period}</p>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {experience.description}
                </p>

                {/* Responsibilities */}
                <ul className="space-y-2">
                  {experience.responsibilities.map((resp, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-2 text-sm text-gray-400"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0"></span>
                      {resp}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Looking for more details about my professional journey?</p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 rounded-lg bg-cyan-400/20 border border-cyan-400/50 text-cyan-400 font-semibold hover:bg-cyan-400/30 transition-all"
          >
            View Full Resume →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
