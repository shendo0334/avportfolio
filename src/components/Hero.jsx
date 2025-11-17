// src/components/Hero.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "Aspiring Developer",
  "Python Enthusiast",
  "Tech Learner",
  "Problem Solver",
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  // Rotate roles every 2.5s
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    // Dummy CV download – replace href with real file later
    const link = document.createElement("a");
    link.href = "#";
    link.download = "Abhinand_Viswam_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-white px-4 py-16 dark:bg-gray-900"
    >
      {/* Soft gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-500/5 via-purple-500/5 to-pink-500/5" />
      <div className="pointer-events-none absolute -left-10 top-16 h-32 w-32 rounded-full bg-primary-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-8 bottom-10 h-28 w-28 rounded-full bg-purple-500/30 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Avatar */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-purple-600 text-3xl font-bold text-white shadow-2xl"
        >
          AV
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary-500"
        >
          Welcome to my portfolio
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent">
            Abhinand Viswam
          </span>
        </motion.h1>

        {/* Rotating role */}
        <motion.p
          key={currentRole}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 text-lg font-semibold text-gray-600 dark:text-gray-300 md:text-2xl"
        >
          {roles[currentRole]}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-300 md:text-base"
        >
          I love building digital solutions and improving my coding skills every
          day. I focus on Python and web technologies, and I enjoy turning ideas
          into real, working applications.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToProjects}
            className="w-full rounded-full bg-primary-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/40 transition hover:bg-primary-600 sm:w-auto"
          >
            View Projects
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={downloadCV}
            className="w-full rounded-full border border-gray-300 px-8 py-3 text-sm font-semibold text-gray-800 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 sm:w-auto"
          >
            Download CV
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 flex flex-col items-center gap-2 text-xs text-gray-400"
        >
          <span>Scroll down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="flex h-10 w-6 items-start justify-center rounded-full border border-gray-300 dark:border-gray-600"
          >
            <motion.div
              animate={{ y: [2, 14, 2] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="mt-1 h-2 w-1 rounded-full bg-gray-400 dark:bg-gray-500"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
