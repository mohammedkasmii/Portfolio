import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Globe, Smartphone, Users } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/motion';

const Projects = () => {
  const projects = [
    {
      title: "Bibliothèque Web App",
      description: "A comprehensive student platform for EHEI where users can post and access courses based on department, year, and filière (GI, IG, GSI). Features user authentication and role-based content management.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
      technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
      icon: <Database className="h-6 w-6" />,
      category: "Web Application",
      features: ["User Authentication", "Role-based Access", "Course Management", "Department Filtering"]
    },
    {
      title: "Leave Management System",
      description: "A simple yet effective CRUD web application for managing employee leave requests. Includes admin dashboard for approval/rejection and employee portal for request submission.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      icon: <Users className="h-6 w-6" />,
      category: "Business Application",
      features: ["CRUD Operations", "Admin Dashboard", "Request Tracking", "Email Notifications"]
    },
    {
      title: "Weather Mobile App",
      description: "Originally built as a JavaScript web application, later converted into a mobile app. Provides real-time weather information with a clean, intuitive interface.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["JavaScript", "API Integration", "Mobile Development", "CSS3"],
      icon: <Smartphone className="h-6 w-6" />,
      category: "Mobile Application",
      features: ["Real-time Data", "Location Services", "Responsive Design", "Cross-platform"]
    },
    {
      title: "Laravel Multi-Role System",
      description: "A sophisticated web application with SQL Server integration featuring three distinct user roles: student, admin, and contributor. Includes comprehensive authentication and authorization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Laravel", "SQL Server", "PHP", "Blade Templates"],
      icon: <Globe className="h-6 w-6" />,
      category: "Web Application",
      features: ["Multi-role Auth", "SQL Server", "Admin Panel", "User Management"]
    },
    {
      title: "Qt C++ PFE Requests App",
      description: "Desktop application where students can send supervision requests to professors for their final year projects (PFE). Professors can review, accept, or reject requests with detailed feedback.",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop",
      technologies: ["Qt", "C++", "SQLite", "Desktop UI"],
      icon: <Database className="h-6 w-6" />,
      category: "Desktop Application",
      features: ["Request Management", "Professor Dashboard", "Status Tracking", "Notification System"]
    },
    {
      title: "Portfolio Website",
      description: "This very portfolio you're viewing! Built with React, Tailwind CSS, and Framer Motion to showcase my skills and projects with smooth animations and responsive design.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Responsive Design"],
      icon: <Globe className="h-6 w-6" />,
      category: "Portfolio",
      features: ["Smooth Animations", "Responsive Design", "Modern UI", "Performance Optimized"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my development work, from web applications to mobile apps and desktop software, demonstrating my full-stack capabilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 text-blue-600">
                    {project.icon}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>View Details</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeInUp} className="mt-16 text-center">
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to See More?</h3>
            <p className="text-gray-600 mb-6">
              These are just a few highlights from my portfolio. I'm always working on new projects and exploring innovative solutions.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Let's Discuss Your Project
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;