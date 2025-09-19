import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={fadeInUp} className="mb-8">
          <div className="flex flex-col items-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-600 shadow-2xl mb-6"
            >
              <img 
                src="/profile.jpg" 
                alt="Mohammed Kasmi" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-blue-600">Mohammed</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              22-year-old Computer Science Engineering Student & Full-Stack Developer passionate about creating beautiful, functional digital experiences
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              React.js
            </span>
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              Laravel
            </span>
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              Full-Stack
            </span>
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              Jobintech Program
            </span>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-12">
          <div className="flex justify-center space-x-6">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Get In Touch
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex justify-center space-x-6">
          <motion.a
            whileHover={{ y: -3 }}
            href="https://github.com"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Github className="h-6 w-6" />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            href="https://linkedin.com"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            href="mailto:mohammed@example.com"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Mail className="h-6 w-6" />
          </motion.a>
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="h-6 w-6 text-gray-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;