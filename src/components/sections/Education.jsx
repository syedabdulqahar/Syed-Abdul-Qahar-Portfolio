import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaTrophy } from 'react-icons/fa';
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
        gradeColor: 'text-emerald-400',
        gradeBorder: 'border-emerald-400/40',
        gradeGlow: 'from-emerald-400/20 to-emerald-500/10',
        ringColor: '#34d399',
      };
    case 'intermediate':
    case 'highschool':
    case 'higher_school':
      return {
        icon: <FaBuildingColumns className="text-3xl text-purple-400" />,
        badgeBg: 'bg-purple-500/10 border-purple-500/30 group-hover:border-purple-400',
        label: 'Higher School',
        gradeColor: 'text-purple-400',
        gradeBorder: 'border-purple-400/40',
        gradeGlow: 'from-purple-400/20 to-purple-500/10',
        ringColor: '#c084fc',
      };
    case 'university':
    case 'degree':
    default:
      return {
        icon: <FaGraduationCap className="text-3xl text-cyan-400" />,
        badgeBg: 'bg-cyan-500/10 border-cyan-500/30 group-hover:border-cyan-400',
        label: 'University / Degree',
        gradeColor: 'text-cyan-400',
        gradeBorder: 'border-cyan-400/40',
        gradeGlow: 'from-cyan-400/20 to-cyan-500/10',
        ringColor: '#22d3ee',
      };
  }
};

/* Animated circular grade badge component */
const GradeBadge = ({ grade, gradeLabel, gradeMax, iconConfig }) => {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;

  // Calculate fill percentage for the ring
  let fillPercent = 85; // default for letter grades
  if (gradeMax && !isNaN(parseFloat(grade)) && !isNaN(parseFloat(gradeMax))) {
    fillPercent = (parseFloat(grade) / parseFloat(gradeMax)) * 100;
  } else if (grade === 'A+') {
    fillPercent = 98;
  } else if (grade === 'A') {
    fillPercent = 90;
  } else if (grade === 'B') {
    fillPercent = 75;
  }

  const dashOffset = circumference - (fillPercent / 100) * circumference;

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative w-24 h-24">
        {/* SVG Ring */}
        <svg className="w-full h-full -rotate-90" viewBox="0 0 88 88">
          {/* Background ring */}
          <circle
            cx="44"
            cy="44"
            r={radius}
            fill="none"
            stroke="var(--color-border)"
            strokeWidth="4"
          />
          {/* Animated fill ring */}
          <motion.circle
            cx="44"
            cy="44"
            r={radius}
            fill="none"
            stroke={iconConfig.ringColor}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: dashOffset }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
            style={{ filter: `drop-shadow(0 0 6px ${iconConfig.ringColor}40)` }}
          />
        </svg>

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            className={`text-xl font-black ${iconConfig.gradeColor}`}
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {grade}
          </motion.span>
          <span className="text-[10px] font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider">
            {gradeLabel}
          </span>
        </div>
      </div>
    </motion.div>
  );
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
            className="text-2xl font-bold text-[var(--color-text-primary)] mb-8 flex items-center gap-3"
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
                    className={`absolute inset-0 bg-gradient-to-br ${iconConfig.gradeGlow} -z-10`}
                  />

                  <div>
                    {/* Top Row: Level Icon + Grade Badge */}
                    <div className="flex items-start justify-between mb-5">
                      {/* Left: Icon + Label */}
                      <div className="flex flex-col gap-2">
                        <div className={`p-3.5 rounded-xl border backdrop-blur-md transition-all duration-300 ${iconConfig.badgeBg}`}>
                          {iconConfig.icon}
                        </div>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--color-glass)] border border-[var(--color-border)] text-[var(--color-text-tertiary)]">
                          {iconConfig.label}
                        </span>
                      </div>

                      {/* Right: Circular Grade Badge */}
                      {edu.grade && (
                        <GradeBadge
                          grade={edu.grade}
                          gradeLabel={edu.gradeLabel}
                          gradeMax={edu.gradeMax}
                          iconConfig={iconConfig}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <h4 className="text-[var(--color-text-primary)] font-bold mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {edu.degree}
                    </h4>

                    <p className="text-cyan-400 text-sm font-semibold mb-2">{edu.school}</p>

                    <p className="text-[var(--color-text-tertiary)] text-sm mb-3 font-mono">{edu.year}</p>

                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{edu.description}</p>

                    {/* Achievement Pills */}
                    {edu.achievements && edu.achievements.length > 0 && (
                      <motion.div
                        className="flex flex-wrap gap-2 mt-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                      >
                        {edu.achievements.map((achievement, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold"
                          >
                            <FaTrophy className="text-[10px]" />
                            {achievement}
                          </span>
                        ))}
                      </motion.div>
                    )}
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
            className="text-2xl font-bold text-[var(--color-text-primary)] mb-8 flex items-center gap-3"
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
                <h4 className="text-[var(--color-text-primary)] font-bold mb-2 group-hover:text-cyan-400 transition-colors pr-8">
                  {cert.title}
                </h4>

                <p className="text-cyan-400 text-sm font-semibold mb-2">{cert.issuer}</p>

                <p className="text-[var(--color-text-tertiary)] text-sm mb-4">{cert.date}</p>

                {/* Credential ID */}
                <div className="pt-4 border-t border-[var(--color-border)]">
                  <p className="text-xs text-[var(--color-text-tertiary)] mb-3">Credential ID</p>
                  <code className="text-xs text-cyan-400 font-mono bg-[var(--color-glass)] px-2 py-1 rounded block break-all">
                    {cert.credentialId}
                  </code>
                </div>

                {/* View Link */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="mt-4 pt-4 border-t border-[var(--color-border)] text-cyan-400 text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all"
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
