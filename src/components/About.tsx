import { motion } from 'framer-motion';
import { BookOpen, Target, Heart, Briefcase } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/motion';

const About = () => {
  const highlights = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Professional Goals",
      description: "Focused on gaining real experience through professional projects and building a strong personal brand as a developer."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Mission",
      description: "Help clients digitize their businesses with modern web applications, moving away from outdated desktop software."
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Learning Journey",
      description: "Student at EHEI, 4th-year Computer Science Engineering student, continuously learning and developing skills in tech and digital sectors."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Personal Interests",
      description: "Passionate about fantasy & romance books, new technologies, DevOps, and entrepreneurship. Creating beautiful, functional digital products."
    }
  ];
  

  return (
    <section id="about" className="py-20 bg-white">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm Mohammed Kasmi, a 22-year-old Computer Science Engineering student with a passion for full-stack development and creating impactful digital solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div variants={fadeInUp}>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <img 
                  src="/profile.jpg" 
                  alt="Mohammed Kasmi" 
                  className="w-20 h-20 rounded-full object-cover border-4 border-blue-600 shadow-lg mr-4"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">My Story</h3>
                  <p className="text-blue-600 font-medium">Computer Science Engineering Student</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                As a 4th-year Computer Science Engineering student, I'm dedicated to upskilling in the tech and digital sectors. My journey in web development started with a curiosity about creating beautiful, functional applications that solve real-world problems.
              </p>
              <p className="text-gray-700 mb-4">
                I believe in the power of technology to transform businesses and improve lives. My goal is to help clients transition from traditional desktop software to modern, scalable web applications that provide better user experiences and greater accessibility.
              </p>
              <p className="text-gray-700">
                When I'm not coding, you'll find me reading fantasy and romance novels (It Ends With Us and It Starts With Us are among my favorites) or exploring new technologies and entrepreneurship opportunities.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div variants={fadeInUp} className="text-center">
          <div className="bg-blue-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
            <p className="text-blue-100 mb-6">
              I'm always excited to collaborate on projects that make a difference. Whether you're looking to digitize your business or create something entirely new, let's discuss how we can bring your vision to life.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Start a Conversation
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;