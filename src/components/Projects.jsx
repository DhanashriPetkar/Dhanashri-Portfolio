import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: "Real-Time Speech to Sign Language Translation",
      category: "Machine Learning",
      problem: "Individuals with hearing impairments face significant communication barriers when interacting with spoken language.",
      description: "An AI-powered browser-based system that converts spoken language into text and displays corresponding sign-language visuals in real time to support communication for individuals with hearing impairments.",
      technologies: ["React.js", "Web Speech API", "Web Audio API", "Framer Motion", "NLP", "Gemini API"],
      outcome: "Successfully translates speech to text and maps to custom Indian Sign Language (ISL) visuals with sentiment analysis and punctuation restoration.",
      github: "https://github.com/DhanashriPetkar/Real_Time_Speech_to_Sign_Language_Translation",
      live: null,
      article: "https://medium.com/@DhanashriPetkar/real-time-speech-to-sign-language-translator-868a9a920819"
    },
    {
      title: "Customer Churn Analysis & Prediction",
      category: "Data Analytics",
      problem: "Identifying at-risk customers before they churn to enable targeted retention campaigns.",
      description: "An end-to-end customer churn analysis and prediction project built using SQL Server, Power BI, Python and Machine Learning.",
      technologies: ["SQL Server", "Power BI", "Python", "Scikit-learn", "Random Forest", "Pandas"],
      outcome: "Analyzed 1,732 churned customers (27% churn rate) and predicted 378 customers at risk using a Random Forest Classifier.",
      github: "https://github.com/DhanashriPetkar/Churn_Analysis_And_Prediction",
      live: null,
      article: "https://medium.com/@DhanashriPetkar/what-if-your-customers-are-quietly-leaving-part-1-ac32ab0e06b9"
    },
    {
      title: "Movie Recommendation System using Transformers",
      category: "Machine Learning",
      problem: "Providing personalized movie recommendations based on user emotions, genres, and past history.",
      description: "A Transformer-based movie recommendation project using real dialogue/transcript data and VAD emotion scores, developed during my IIT Bombay internship.",
      technologies: ["Python", "TensorFlow", "BERT", "Deep Learning", "Pandas", "NLP"],
      outcome: "Achieved approximately 0.7 Mean Absolute Error (MAE) on test data using a custom BERT sequence classification model.",
      github: "https://github.com/DhanashriPetkar/Dy.Tech",
      live: null
    },
    {
      title: "YouTube Comments Extraction & Sentiment Analysis",
      category: "Machine Learning",
      problem: "Manually analyzing YouTube comments for audience sentiment is time-consuming and difficult.",
      description: "A Python-based tool with a Tkinter GUI that extracts up to 600 YouTube comments, performs VADER sentiment analysis, visualizes distribution, and exports to Excel.",
      technologies: ["Python", "YouTube Data API", "VADER", "Pandas", "Matplotlib", "Tkinter"],
      outcome: "Automates comment extraction, cleaning, and sentiment categorization (Positive/Negative/Neutral) with visual charts and Excel exports.",
      github: "https://github.com/DhanashriPetkar/Youtube_comments_Extraction_and_Sentiment_Analysis",
      live: null
    },
    {
      title: "Sales Analysis Dashboard",
      category: "Data Analytics",
      problem: "Transforming raw transactional sales data into business-focused insights for strategic decision-making.",
      description: "An interactive Excel dashboard created to analyze sales trends, regional performance, profitability, and customer contribution across 500+ transactions.",
      technologies: ["Microsoft Excel", "PivotTables", "PivotCharts", "KPI Dashboards", "Data Modeling"],
      outcome: "Visualized $1.35M revenue, 5.3K units sold, 500 orders, and 206 customers to answer key business questions.",
      github: null,
      live: null,
      article: "https://medium.com/@DhanashriPetkar/can-excel-actually-tell-a-story-building-an-interactive-sales-analysis-dashboard-fcbd2a83c155"
    }
  ];

  const categories = ["All", "Machine Learning", "Data Analytics"];

  const orderedTitles = {
    All: [
      "Real-Time Speech to Sign Language Translation",
      "Customer Churn Analysis & Prediction",
      "Movie Recommendation System using Transformers",
      "YouTube Comments Extraction & Sentiment Analysis",
      "Sales Analysis Dashboard"
    ],
    "Machine Learning": [
      "YouTube Comments Extraction & Sentiment Analysis",
      "Real-Time Speech to Sign Language Translation",
      "Movie Recommendation System using Transformers"
    ],
    "Data Analytics": [
      "Customer Churn Analysis & Prediction",
      "Sales Analysis Dashboard"
    ]
  };

  const filteredProjects = (filter === 'All' ? projects : projects.filter(project => project.category === filter))
    .sort((a, b) => orderedTitles[filter].indexOf(a.title) - orderedTitles[filter].indexOf(b.title));

  return (
    <section id="projects" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary rounded mx-auto"></div>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat 
                  ? 'bg-primary text-white' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.title}
                className="glass rounded-2xl flex flex-col group border border-white/5 hover:border-primary/50 transition-colors"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-xs font-bold text-primary tracking-wider uppercase mb-2 block">{project.category}</span>
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-3 ml-4 shrink-0">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" title="View Source">
                          <FaGithub size={20} />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Live Demo">
                          <FaExternalLinkAlt size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="space-y-5 mb-8 flex-grow">
                    <div>
                      <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider block mb-1">Problem</span>
                      <p className="text-gray-300 text-sm leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider block mb-1">Solution</span>
                      <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                      <span className="text-primary text-xs font-semibold uppercase tracking-wider block mb-1">Outcome / Metrics</span>
                      <p className="text-gray-200 text-sm font-medium">{project.outcome}</p>
                    </div>
                  </div>

                  <div className="mt-auto">
                    {project.article && (
                      <a href={project.article} target="_blank" rel="noreferrer" className="inline-block mb-6 text-sm font-medium text-accent hover:text-white transition-colors">
                        → Read Case Study / Article
                      </a>
                    )}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-black/20 rounded text-xs font-mono text-gray-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/DhanashriPetkar"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-2 pb-1 text-base md:text-lg font-medium text-white/90 hover:text-primary transition-colors"
          >
            <span className="relative after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-px after:bg-primary/60 after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
              Explore more of my work on GitHub
            </span>
            <FaExternalLinkAlt size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
