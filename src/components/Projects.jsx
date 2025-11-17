import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ALL_PROJECTS = [
  {
    id: 1,
    title: "Online Voting System",
    description:
      "A secure and user-friendly online voting platform that allows users to register, log in, and cast their votes digitally.",
    fullDescription:
      "This platform ensures secure and transparent digital voting with user authentication, role-based access, and an admin dashboard for managing votes and results.",
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "SQLite"],
    category: "Python",
    featured: true,
    liveDemo: "#",
    github: "#",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "A basic e-commerce web application where users can browse products, add items to the cart, and proceed to checkout.",
    fullDescription:
      "Full-featured e-commerce solution with product catalog, cart system, basic authentication, and mock payment flow.",
    tech: ["React", "Tailwind CSS", "REST API"],
    category: "Web",
    featured: true,
    liveDemo: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "A productivity application for managing daily tasks with drag-and-drop functionality and progress tracking.",
    fullDescription:
      "Interactive task manager with Kanban-style board, status tracking, and smooth animations using Framer Motion.",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Web",
    featured: false,
    liveDemo: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "Real-time weather application with location-based forecasts and interactive charts.",
    fullDescription:
      "Shows current conditions and 7-day forecast using a public weather API, with clean visual layout.",
    tech: ["JavaScript", "API", "CSS"],
    category: "Web",
    featured: false,
    liveDemo: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Data Analysis Tool",
    description:
      "Python-based tool for data analysis and visualization for multiple data formats.",
    fullDescription:
      "Command line + notebook based workflow using Pandas, NumPy, and Matplotlib for quick insights and plots.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
    category: "Python",
    featured: false,
    liveDemo: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "Modern responsive portfolio website built with React and Tailwind CSS.",
    fullDescription:
      "This very website — built with React, Tailwind CSS, and Framer Motion to showcase my projects and skills.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    category: "Web",
    featured: false,
    liveDemo: "#",
    github: "#",
  },
];

const FILTERS = ["All", "Web", "Python"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
  hover: {
    y: -8,
    scale: 1.03,
    transition: { duration: 0.25 },
  },
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section title */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Projects
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full" />
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
              A selection of the projects I&apos;ve worked on, showing my
              experience with Python, web development, and building interactive
              UIs.
            </p>
          </motion.div>

          {/* Filter buttons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-10"
          >
            <div className="inline-flex rounded-xl bg-white dark:bg-gray-800 shadow-md p-1">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 sm:px-6 py-2 text-sm font-medium rounded-lg transition-all ${
                    activeFilter === filter
                      ? "bg-primary-500 text-white shadow-sm"
                      : "text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Project cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col border border-gray-100 dark:border-gray-700"
                >
                  {/* Image / header block */}
                  <div className="relative overflow-hidden">
                    <div className="h-40 bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">
                        AV
                      </span>
                    </div>

                    {/* Hover overlay using Tailwind (no JS error risk) */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                      <p className="text-xs sm:text-sm text-white text-center">
                        {project.fullDescription}
                      </p>
                    </div>

                    {project.featured && (
                      <div className="absolute top-3 right-3 bg-yellow-400 text-xs font-semibold text-gray-900 px-3 py-1 rounded-full shadow">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-5 flex flex-col">
                    <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-full bg-primary-500/10 text-primary-700 dark:text-primary-300 text-[11px] font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="mt-auto flex gap-3">
                      <motion.a
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        href={project.liveDemo}
                        className="flex-1 text-center text-xs sm:text-sm bg-primary-500 text-white py-2 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                      >
                        Live Demo
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        href={project.github}
                        className="flex-1 text-center text-xs sm:text-sm border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 py-2 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        GitHub
                      </motion.a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
