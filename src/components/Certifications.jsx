import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      name: "Career Essentials in Data Analysis",
      issuer: "Microsoft",
      date: "June 2025",
      credentialId: "19467ac3043e4ead65bdb1150ece22ed0803ddb3f19f9798cbc5f7d61a587c6c",
      link: "https://www.linkedin.com/in/dhanashri-petkar/"
    }
    // Additional certifications can be added here following the same structure
  ];

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary rounded mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl hover:border-primary/50 transition-colors flex flex-col md:flex-row items-start gap-6 group"
            >
              <div className="p-4 bg-primary/10 text-primary rounded-xl shrink-0">
                <FaAward size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm mb-4">
                  <span className="text-gray-300 font-medium">{cert.issuer}</span>
                  <span className="text-gray-500">{cert.date}</span>
                </div>
                <p className="text-gray-500 text-xs font-mono break-all mb-4">
                  Credential ID: {cert.credentialId}
                </p>
                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-white transition-colors"
                  >
                    View Credential <FaExternalLinkAlt size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
