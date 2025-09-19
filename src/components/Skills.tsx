import { motion } from 'framer-motion';
import { Code, Database, Globe, Wrench } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/motion';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Frontend Development",
      color: "bg-blue-500",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Framer Motion", level: 75 }
      ]
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Backend Development",
      color: "bg-green-500",
      skills: [
        { name: "PHP", level: 85 },
        { name: "Laravel", level: 80 },
        { name: "C++", level: 75 },
        { name: "Java", level: 70 },
        { name: ".NET", level: 65 }
      ]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database & Tools",
      color: "bg-purple-500",
      skills: [
        { name: "SQL Server", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Prisma", level: 70 },
        { name: "Git/GitHub", level: 85 }
      ]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Frameworks & Others",
      color: "bg-orange-500",
      skills: [
        { name: "Next.js", level: 60 },
        { name: "Qt with C++", level: 75 },
        { name: "Laravel", level: 80 },
        { name: "Responsive Design", level: 90 },
        { name: "API Development", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across frontend, backend, databases, and modern development tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className={`${category.color} text-white p-3 rounded-lg mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className={`h-2 rounded-full ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeInUp} className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Currently Learning</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                DevOps
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Advanced Next.js
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Cloud Technologies
              </span>
              <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                Entrepreneurship
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;