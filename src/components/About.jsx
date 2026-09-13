import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed glass p-8 md:p-12 rounded-2xl"
          >
            <p>
              I am a Data Science engineering graduate with hands-on experience in data analysis, machine learning, artificial intelligence, Natural Language Processing, recommendation systems, transformer models, computer vision, generative AI, data visualization, and business-oriented analytics.
            </p>
            <p>
              My approach combines technical implementation with understanding business requirements, identifying patterns in data, and communicating insights clearly. I believe in bridging the gap between raw data and actionable intelligence.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold text-white mb-4">Areas of Interest</h3>
              <div className="flex flex-wrap gap-3">
                {["Machine Learning", "Generative AI", "Large Language Models", "NLP", "Intelligent Systems", "Data Analytics", "Business-focused Data Solutions"].map((interest, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
