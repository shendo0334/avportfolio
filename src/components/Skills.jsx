// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Skills",
      skills: [
        { name: "Coding", level: 90 },
        { name: "Communication", level: 85 },
        { name: "Problem Solving", level: 88 },
        { name: "Team Collaboration", level: 82 },
      ],
    },
    {
      title: "Languages & Technologies",
      skills: [
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 78 },
        { name: "HTML/CSS", level: 90 },
        { name: "React", level: 75 },
        { name: "Git", level: 80 },
        { name: "Flask / Django", level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-3">Skills</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-primary-500 font-medium">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-300/50 dark:bg-gray-700/50 h-3 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="h-full bg-gradient-to-r from-primary-500 to-purple-600 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Tech Badges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">
            Other Technologies & Tools
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Tailwind CSS",
              "REST APIs",
              "SQL",
              "MongoDB",
              "Linux",
              "VS Code",
              "Figma",
            ].map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1, y: -4 }}
                className="px-5 py-2 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-full font-medium shadow"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
