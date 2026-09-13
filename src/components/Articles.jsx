import React from 'react';
import { motion } from 'framer-motion';
import { FaMediumM, FaExternalLinkAlt } from 'react-icons/fa';

const Articles = () => {
  const articles = [
    {
      title: "What If Your Customers Are Quietly Leaving…?? (Part 2)",
      category: "Data Analytics",
      link: "https://medium.com/@DhanashriPetkar/what-if-your-customers-are-quietly-leaving-part-2-653d7064fb0f"
    },
    {
      title: "What If Your Customers Are Quietly Leaving…?? (Part 1)",
      category: "Data Analytics",
      link: "https://medium.com/@DhanashriPetkar/what-if-your-customers-are-quietly-leaving-part-1-ac32ab0e06b9"
    },
    {
      title: "Can Excel Actually Tell a Story…?? — Building an Interactive Sales Analysis Dashboard",
      category: "Business Intelligence",
      link: "https://medium.com/@DhanashriPetkar/can-excel-actually-tell-a-story-building-an-interactive-sales-analysis-dashboard-fcbd2a83c155"
    },
    {
      title: "Real-Time Speech to Sign Language Translator",
      category: "AI / NLP",
      link: "https://medium.com/@DhanashriPetkar/real-time-speech-to-sign-language-translator-868a9a920819"
    },
    {
      title: "The Weirdest AI Failures and What I Learned from Them",
      category: "AI / Insights",
      link: "https://medium.com/@DhanashriPetkar"
    },
    {
      title: "The 2 AM \"Emergency\": A Freelancer's Midnight Dilemma",
      category: "Freelancing",
      link: "https://medium.com/@DhanashriPetkar"
    },
    {
      title: "Through the Lens of an Introverted Techie: AI, Data, and a Dash of Caffeine",
      category: "Personal",
      link: "https://medium.com/@DhanashriPetkar"
    }
  ];

  return (
    <section id="articles" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Writing & Insights</h2>
          <div className="w-20 h-1 bg-primary rounded mx-auto"></div>
          <p className="mt-6 text-gray-400 max-w-xl mx-auto">
            I write about data science, machine learning, and the realities of freelancing on Medium.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {articles.map((article, index) => (
            <motion.a
              key={index}
              href={article.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass p-6 rounded-xl group hover:border-primary/50 transition-all block"
            >
              <span className="text-xs font-bold text-accent tracking-wider uppercase mb-3 block">{article.category}</span>
              <h3 className="text-base font-bold text-white group-hover:text-primary transition-colors mb-4 leading-snug">
                {article.title}
              </h3>
              <span className="text-sm text-primary font-medium inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                Read Article <FaExternalLinkAlt size={10} />
              </span>
            </motion.a>
          ))}
        </div>

        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a 
            href="https://medium.com/@DhanashriPetkar" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-white/10 text-white font-medium transition-colors"
          >
            <FaMediumM size={18} /> View all articles on Medium
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;
