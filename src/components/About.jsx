// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-3">About Me</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-10 leading-relaxed text-lg"
        >
          <p className="mb-6">
            I'm <span className="font-semibold">Abhinand</span>, a passionate
            learner who enjoys coding and solving problems. I focus on{" "}
            <span className="font-semibold text-primary-500">Python</span> and{" "}
            <span className="font-semibold text-primary-500">
              web technologies
            </span>
            , and I love turning ideas into real, working applications.
          </p>

          <p className="mb-6">
            I'm also a strong communicator and enjoy collaborating on projects.
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or learning about the latest
            trends in software development.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mt-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-primary-500/10 dark:bg-primary-500/20 shadow"
            >
              <h3 className="text-4xl font-bold text-primary-600 dark:text-primary-400">
                10+
              </h3>
              <p className="mt-1 font-semibold">Projects</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-purple-500/10 dark:bg-purple-500/20 shadow"
            >
              <h3 className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                5+
              </h3>
              <p className="mt-1 font-semibold">Technologies</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-pink-500/10 dark:bg-pink-500/20 shadow"
            >
              <h3 className="text-4xl font-bold text-pink-600 dark:text-pink-400">
                100%
              </h3>
              <p className="mt-1 font-semibold">Dedicated</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
