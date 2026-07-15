import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projectsData } from '../../data/portfolio';
import { staggerContainer, staggerItem } from '../../utils/animations';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(projectsData.map((p) => p.category))];
  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="section-wrap">
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20 text-center"
        >
          <span className="section-label">Portfolio</span>
          <h2 className="mt-5">Featured Projects</h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-cyan-400/30 light:bg-ink text-cyan-400 light:text-white border border-cyan-400 light:border-ink shadow-neon light:shadow-soft'
                  : 'bg-white/5 light:bg-surface text-gray-400 light:text-ink-muted border border-white/10 light:border-zinc-200 hover:border-cyan-400/50 light:hover:border-zinc-300 light:shadow-soft'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
                exit={{ opacity: 0, scale: 0.8 }}
                layout
                className="group"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="card-glass card-hover overflow-hidden h-full flex flex-col"
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-dark-800 light:bg-muted overflow-hidden mb-6 rounded-xl">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-6xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20">
                        📱
                      </div>
                    )}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-dark-900 light:from-offwhite/90 via-transparent to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    {/* Category Badge */}
                    <span className="inline-block w-fit px-3 py-1 rounded-full bg-cyan-400/20 light:bg-pastel-sky border border-cyan-400/30 light:border-sky-200/70 text-cyan-400 light:text-teal-800 text-xs font-medium mb-3">
                      {project.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg font-bold theme-heading mb-2 group-hover:text-cyan-400 light:group-hover:text-teal-700 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-400 light:text-ink-muted mb-4 flex-1 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded-full text-xs bg-white/5 light:bg-muted text-gray-400 light:text-ink-muted border border-white/10 light:border-zinc-200/80"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs text-gray-500">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto">
                      {project.link && project.link !== "#" && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/10 light:bg-muted hover:bg-cyan-400/20 light:hover:bg-zinc-200 text-gray-400 light:text-ink-muted hover:text-cyan-400 light:hover:text-ink transition-all font-medium text-sm"
                        >
                          <FaGithub size={16} /> Code
                        </motion.a>
                      )}
                      {project.demo && project.demo !== "#" && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-cyan-400/20 light:bg-ink hover:bg-cyan-400/40 light:hover:bg-zinc-800 text-cyan-400 light:text-white transition-all font-medium text-sm"
                        >
                          <FaExternalLinkAlt size={16} /> Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
