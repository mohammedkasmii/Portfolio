import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Globe, Smartphone, Users, Filter } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/motion';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "Bibliothèque Web App",
      description: "A comprehensive student platform for EHEI where users can post and access courses based on department, year, and filière (GI, IG, GSI). Features user authentication and role-based content management.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
      technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
      icon: <Database className="h-6 w-6" />,
      category: "web",
      categoryLabel: "Web Application",
      features: ["User Authentication", "Role-based Access", "Course Management", "Department Filtering"],
      status: "completed"
    },
    {
      title: "Leave Management System",
      description: "A simple yet effective CRUD web application for managing employee leave requests. Includes admin dashboard for approval/rejection and employee portal for request submission.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      icon: <Users className="h-6 w-6" />,
      category: "web",
      categoryLabel: "Business Application",
      features: ["CRUD Operations", "Admin Dashboard", "Request Tracking", "Email Notifications"],
      status: "completed"
    },
    {
      title: "Weather Mobile App",
      description: "Originally built as a JavaScript web application, later converted into a mobile app. Provides real-time weather information with a clean, intuitive interface.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["JavaScript", "API Integration", "Mobile Development", "CSS3"],
      icon: <Smartphone className="h-6 w-6" />,
      category: "mobile",
      categoryLabel: "Mobile Application",
      features: ["Real-time Data", "Location Services", "Responsive Design", "Cross-platform"],
      status: "completed"
    },
    {
      title: "Laravel Multi-Role System",
      description: "A sophisticated web application with SQL Server integration featuring three distinct user roles: student, admin, and contributor. Includes comprehensive authentication and authorization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Laravel", "SQL Server", "PHP", "Blade Templates"],
      icon: <Globe className="h-6 w-6" />,
      category: "web",
      categoryLabel: "Web Application",
      features: ["Multi-role Auth", "SQL Server", "Admin Panel", "User Management"],
      status: "completed"
    },
    {
      title: "Qt C++ PFE Requests App",
      description: "Desktop application where students can send supervision requests to professors for their final year projects (PFE). Professors can review, accept, or reject requests with detailed feedback.",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop",
      technologies: ["Qt", "C++", "SQLite", "Desktop UI"],
      icon: <Database className="h-6 w-6" />,
      category: "desktop",
      categoryLabel: "Desktop Application",
      features: ["Request Management", "Professor Dashboard", "Status Tracking", "Notification System"],
      status: "completed"
    },
    {
      title: "Portfolio Website",
      description: "This very portfolio you're viewing! Built with React, Tailwind CSS, and Framer Motion to showcase my skills and projects with smooth animations and responsive design.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Responsive Design"],
      icon: <Globe className="h-6 w-6" />,
      category: "web",
      categoryLabel: "Portfolio",
      features: ["Smooth Animations", "Responsive Design", "Modern UI", "Performance Optimized"],
      status: "completed"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Apps' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'desktop', label: 'Desktop' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Portfolio</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive showcase of my development journey, featuring web applications, mobile apps, and desktop software that demonstrate my full-stack capabilities.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeFilter === filter.key
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <Filter className="h-4 w-4" />
              <span>{filter.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-700"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <div className="bg-blue-600/90 backdrop-blur-sm rounded-lg p-2 text-white">
                    {project.icon}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.categoryLabel}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors">
                      <Github className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded border border-gray-600"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded-full border border-blue-600/30"
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
                    <span>View Project</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 hover:border-gray-500 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={fadeInUp} className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-600/30">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm passionate about creating digital solutions that help businesses grow. Let's discuss how I can help bring your ideas to life with modern web technologies.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg"
            >
              Let's Work Together
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Portfolio;