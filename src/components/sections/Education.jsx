import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';
import { FaBuildingColumns } from 'react-icons/fa6';
import { educationData, certificatesData } from '../../data/portfolio';
import { staggerContainer, staggerItem } from '../../utils/animations';

const getEducationIconConfig = (level) => {
  switch (level?.toLowerCase()) {
    case 'matriculation':
    case 'school':
      return {
        icon: <FaSchool className="text-3xl text-emerald-400" />,
        badgeBg: 'bg-emerald-500/10 border-emerald-500/30 group-hover:border-emerald-400',
        label: 'School',
      };
    case 'intermediate':
    case 'highschool':
    case 'higher_school':
      return {
        icon: <FaBuildingColumns className="text-3xl text-purple-400" />,
        badgeBg: 'bg-purple-500/10 border-purple-500/30 group-hover:border-purple-400',
        label: 'Higher School',
      };
    case 'university':
    case 'degree':
    default:
      return {
        icon: <FaGraduationCap className="text-3xl text-cyan-400" />,
        badgeBg: 'bg-cyan-500/10 border-cyan-500/30 group-hover:border-cyan-400',
        label: 'University / Degree',
      };
  }
};

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">
            Learning
          </span>
          <h2 className="mt-4">Education & Certifications</h2>
        </motion.div>

        {/* Education Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
          >
            <FaGraduationCap className="text-cyan-400" />
            Education History
          </motion.h3>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {educationData.map((edu, index) => {
              const iconConfig = getEducationIconConfig(edu.level);
              return (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  whileHover={{ y: -8 }}
                  className="card-glass card-hover group relative overflow-hidden flex flex-col justify-between"
                >
                  {/* Gradient Background on Hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 -z-10"
                  />

                  <div>
                    {/* Level Icon Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3.5 rounded-xl border backdrop-blur-md transition-all duration-300 ${iconConfig.badgeBg}`}>
                        {iconConfig.icon}
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
                        {iconConfig.label}
                      </span>
                    </div>

                    {/* Content */}
                    <h4 className="text-white font-bold mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {edu.degree}
                    </h4>

                    <p className="text-cyan-400 text-sm font-semibold mb-2">{edu.school}</p>

                    <p className="text-gray-500 text-sm mb-3 font-mono">{edu.year}</p>

                    <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Certificates Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
          >
            <span className="text-3xl">📜</span>
            Certifications
          </motion.h3>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                <h4 className="text-white font-bold mb-2 group-hover:text-cyan-400 transition-colors pr-8">
                  {cert.title}
                </h4>

                <p className="text-cyan-400 text-sm font-semibold mb-2">{cert.issuer}</p>

                <p className="text-gray-500 text-sm mb-4">{cert.date}</p>

                {/* Credential ID */}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-gray-500 mb-3">Credential ID</p>
                  <code className="text-xs text-cyan-400 font-mono bg-white/5 px-2 py-1 rounded block break-all">
                    {cert.credentialId}
                  </code>
                </div>

                {/* View Link */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="mt-4 pt-4 border-t border-white/10 text-cyan-400 text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all"
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
