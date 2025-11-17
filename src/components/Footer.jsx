// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-20 border-t border-gray-300/30 dark:border-gray-700/30">
      <div className="container mx-auto px-6 py-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
              AV
            </div>
            <span className="text-xl font-bold">Abhinand</span>
          </motion.div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-primary-500 transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300/40 dark:bg-gray-700/40 my-6"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} <span className="font-semibold">Abhinand Viswam</span>.  
            All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-500 mt-1 text-xs">
            Built with React, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
