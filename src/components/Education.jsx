import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Data Science",
      institution: "DY Patil College of Engineering & Technology",
      date: "2021 – 2025",
      details: "CGPA: 7.60 / 10",
      coursework: "Machine Learning, Deep Learning, Statistical Modeling, Big Data Analytics, Database Management, Data Visualization"
    },
    {
      degree: "HSC (Higher Secondary Certificate)",
      institution: "Swami Vivekanand College",
      date: "2021",
      details: "Score: 90.50%",
      coursework: null
    },
    {
      degree: "SSC (Secondary School Certificate)",
      institution: "Private High School",
      date: "2019",
      details: "Score: 91.80%",
      coursework: null
    }
  ];

  return (
    <section id="education" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary rounded mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl border-l-4 border-l-primary"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-3">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-3">
                    <FaGraduationCap className="text-primary shrink-0" size={24} />
                    {edu.degree}
                  </h3>
                  <div className="text-gray-300 font-medium mt-2 ml-9">
                    {edu.institution}
                  </div>
                </div>
                <div className="text-gray-400 flex items-center gap-2 text-sm font-medium bg-white/5 px-4 py-2 rounded-full shrink-0">
                  <FaCalendarAlt size={14} />
                  {edu.date}
                </div>
              </div>
              <div className="ml-9 mt-4">
                <span className="text-primary font-semibold">{edu.details}</span>
                {edu.coursework && (
                  <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                    <span className="text-gray-500 font-medium">Relevant Coursework:</span> {edu.coursework}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
