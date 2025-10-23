import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/Dammy010", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/dammy8642?s=21", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:akindare2025@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background gradients removed */}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="z-10"
          >
            {/* Main heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              I'm <span className="text-teal-400">Damilare Akinola</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-4"
            >
              Web Developer Building the Future of the Web
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 mb-8 max-w-lg"
            >
              Full Stack Developer passionate about creating innovative digital
              experiences
            </motion.p>

            {/* Call to action buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 flex items-center gap-2"
              >
                <Mail size={20} />
                Get In Touch
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-teal-500 text-teal-400 px-8 py-3 rounded-full font-semibold hover:bg-teal-500 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <Download size={20} />
                View My Work
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Image Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main image placeholder */}
              <motion.div
                variants={itemVariants}
                className="w-80 h-80 bg-gray-800 rounded-2xl flex items-center justify-center relative overflow-hidden"
              >
                {/* Your Photo */}
                <img
                  src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
                  alt="Damilare Akinola"
                  className="w-full h-full object-cover rounded-2xl"
                />

                {/* Floating icons */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-8 left-8 w-12 h-12 bg-teal-500/20 border-2 border-teal-500/50 rounded-full flex items-center justify-center backdrop-blur-sm"
                >
                  <span className="text-white text-lg">&lt;/&gt;</span>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute top-16 right-8 w-12 h-12 bg-teal-500/20 border-2 border-teal-500/50 rounded-full flex items-center justify-center backdrop-blur-sm"
                >
                  <span className="text-white text-lg">⚡</span>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute bottom-16 right-12 w-12 h-12 bg-teal-500/20 border-2 border-teal-500/50 rounded-full flex items-center justify-center backdrop-blur-sm"
                >
                  <span className="text-white text-lg">{}</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
