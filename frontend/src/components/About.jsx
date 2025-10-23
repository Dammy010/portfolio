import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Database,
  Smartphone,
  Camera,
  BookOpen,
  Heart,
} from "lucide-react";

const About = () => {
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

  const skills = [
    {
      icon: Code,
      name: "Frontend Development",
      description: "React, JavaScript, HTML5, CSS3",
    },
    {
      icon: Database,
      name: "Backend Development",
      description: "Node.js, Express, MongoDB, SQL",
    },
    {
      icon: Palette,
      name: "UI/UX Design",
      description: "Figma, Adobe XD, Responsive Design",
    },
    {
      icon: Smartphone,
      name: "Mobile Development",
      description: "React Native, Progressive Web Apps",
    },
  ];

  const hobbies = [
    {
      icon: Camera,
      name: "Photography",
      description: "Capturing moments and telling stories through the lens",
    },
    {
      icon: BookOpen,
      name: "Writing",
      description: "Sharing knowledge through technical articles and tutorials",
    },
    {
      icon: Heart,
      name: "Open Source",
      description: "Contributing to projects that make a difference",
    },
    {
      icon: Code,
      name: "Learning",
      description: "Always exploring new technologies and frameworks",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            About <span className="text-teal-400">Me</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            I'm a passionate full-stack developer focused on building
            accessible, user-friendly websites and applications. I love turning
            ideas into reality in the browser and creating digital experiences
            that make a difference.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Skills Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-8"
            >
              Technical Skills
            </motion.h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-500 p-3 rounded-lg">
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {skill.name}
                      </h4>
                      <p className="text-gray-400">{skill.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hobbies Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-8"
            >
              Beyond Code
            </motion.h3>
            <div className="space-y-6">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={hobby.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-cyan-500 p-3 rounded-lg">
                      <hobby.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {hobby.name}
                      </h4>
                      <p className="text-gray-400">{hobby.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Personal Statement */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="bg-teal-500/10 backdrop-blur-sm rounded-2xl p-8 border border-teal-500/20"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 italic"
            >
              "I believe technology should be accessible to everyone. My mission
              is to create digital experiences that not only look beautiful but
              also solve real-world problems and make a positive impact on
              people's lives."
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mt-4 text-teal-400 font-semibold"
            >
              - Damilare Akinola
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
