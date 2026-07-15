import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { educationData, certificatesData } from '../../data/portfolio';
import { staggerContainer, staggerItem } from '../../utils/animations';

const Education = () => {
  return (
    <section id="education" className="section-wrap">
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20 text-center"
        >
          <span className="section-label">Learning</span>
          <h2 className="mt-5">Education & Certifications</h2>
        </motion.div>

        {/* Education Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold theme-heading mb-10 flex items-center gap-3"
          >
            <FaGraduationCap className="text-cyan-400" />
            Education
          </motion.h3>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                className="card-glass card-hover group relative overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 -z-10"
                />

                {/* Icon */}
                <div className="text-5xl mb-4 opacity-60 group-hover:opacity-100 transition-opacity">
                  🎓
                </div>

                {/* Content */}
                <h4 className="theme-heading font-bold mb-2 group-hover:text-cyan-400 light:group-hover:text-teal-700 transition-colors line-clamp-2">
                  {edu.degree}
                </h4>

                <p className="text-cyan-400 light:text-teal-700 text-sm font-semibold mb-2">{edu.school}</p>

                <p className="text-gray-500 text-sm mb-3">{edu.year}</p>

                <p className="text-gray-400 light:text-ink-muted text-sm leading-relaxed">{edu.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certificates Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold theme-heading mb-10 flex items-center gap-3"
          >
            <span className="text-3xl">📜</span>
            Certifications
          </motion.h3>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {certificatesData.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={staggerItem}
                whileHover={{ y: -8 }}
                className="card-glass card-hover group cursor-pointer block relative overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-electric/10 to-cyan-400/10 -z-10"
                />

                {/* Badge Icon */}
                <div className="absolute top-4 right-4 text-3xl opacity-20 group-hover:opacity-40 transition-opacity">
                  ⭐
                </div>

                {/* Content */}
                <h4 className="theme-heading font-bold mb-2 group-hover:text-cyan-400 light:group-hover:text-teal-700 transition-colors pr-8">
                  {cert.title}
                </h4>

                <p className="text-cyan-400 light:text-teal-700 text-sm font-semibold mb-2">{cert.issuer}</p>

                <p className="text-gray-500 text-sm mb-4">{cert.date}</p>

                {/* Credential ID */}
                <div className="pt-4 border-t border-white/10 light:border-zinc-200">
                  <p className="text-xs text-gray-500 light:text-ink-muted mb-3">Credential ID</p>
                  <code className="text-xs text-cyan-400 light:text-teal-700 font-mono bg-white/5 light:bg-muted px-2 py-1 rounded-lg block break-all">
                    {cert.credentialId}
                  </code>
                </div>

                {/* View Link */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="mt-4 pt-4 border-t border-white/10 light:border-zinc-200 text-cyan-400 light:text-teal-700 text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  View Certificate →
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
