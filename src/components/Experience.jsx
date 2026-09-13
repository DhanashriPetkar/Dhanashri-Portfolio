import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      role: "Machine Learning Freelancer",
      company: "Self-Employed Freelancer",
      date: "October 2023 – Present",
      description: [
        "Work on freelance projects related to data science, AI and machine learning.",
        "Collaborate with clients to gather requirements and define project scope.",
        "Translate business needs into analytical and data-driven solutions.",
        "Analyze datasets to identify trends, patterns and actionable insights.",
        "Develop data-driven and machine learning solutions using Python, SQL and related tools.",
        "Communicate results in a clear, business-friendly manner.",
        "Stay updated with industry trends and emerging technologies."
      ]
    },
    {
      role: "Coding Club Mentor",
      company: "Coding Club, DY Patil College of Engineering & Technology",
      date: "",
      description: [
        "Taught C and Python programming languages to second-year Mechanical Engineering students through the college's Coding Club."
      ]
    },
    {
      role: "Data Science Intern",
      company: "IIT Bombay & EdTech Society",
      date: "June 2024 – September 2024",
      description: [
        "Developed a Transformer-based Recommendation System for movie recommendation.",
        "Designed scalable ML pipelines for large-scale datasets.",
        "Implemented deep learning models for personalized recommendations.",
        "Collaborated with a team of four.",
        "Achieved approximately 0.7 Mean Absolute Error (MAE)."
      ]
    },
    {
      role: "Data Science Intern",
      company: "Earth Logicware Technologies",
      date: "June 2023 – August 2023",
      description: [
        "Worked on Python-based image recognition projects.",
        "Built three image recognition models using Python.",
        "Gained experience with XAMPP for database management.",
        "Worked with AI techniques."
      ]
    },
    {
      role: "Placement Coordinator",
      company: "DYPCET Kolhapur",
      date: "June 2024 – April 2025",
      description: [
        "Coordinated communication between students, placement teams, recruiters and college stakeholders.",
        "Managed student and recruitment-related information.",
        "Assisted with schedules, requirements, updates and process-related issues.",
        "Coordinated multiple stakeholders to support placement activities and documentation.",
        "Developed communication, coordination, problem-solving and stakeholder-management skills."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary rounded mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-primary/30 ml-3 md:ml-0 md:pl-0">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12 md:pl-10 pl-8 relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-9px] md:left-[-9px] top-1.5 w-4 h-4 bg-background border-4 border-primary rounded-full"></div>
                
                <div className="glass p-8 rounded-2xl hover:border-primary/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <div className="text-primary font-medium mt-2 flex items-center gap-2">
                        <FaBriefcase size={16} />
                        {exp.company}
                      </div>
                    </div>
                    {exp.date && (
                      <div className="text-gray-400 flex items-center gap-2 text-sm font-medium bg-white/5 px-4 py-2 rounded-full">
                        <FaCalendarAlt size={14} />
                        {exp.date}
                      </div>
                    )}
                  </div>
                  
                  <ul className="space-y-3 text-gray-400">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-primary mt-1.5 text-lg leading-none">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
