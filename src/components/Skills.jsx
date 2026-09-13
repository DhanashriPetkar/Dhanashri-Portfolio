import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  { title: 'Programming', skills: ['Python', 'SQL', 'JavaScript'] },
  { title: 'Data Science & Analytics', skills: ['Pandas', 'NumPy', 'Exploratory Data Analysis', 'Data Cleaning', 'Statistical Analysis', 'Data Visualization', 'Reporting'] },
  { title: 'Machine Learning & Deep Learning', skills: ['Regression', 'Classification', 'CNN', 'RNN', 'LSTM', 'Transformers', 'Recommendation Systems', 'Natural Language Processing'] },
  { title: 'Generative AI', skills: ['Prompt Engineering', 'LLM Fundamentals', 'RAG Fundamentals', 'Gemini API'] },
  { title: 'Business Analysis', skills: ['Requirement Gathering', 'Requirement Analysis', 'Stakeholder Communication', 'Business Process Analysis', 'Gap Analysis', 'Root Cause Analysis', 'Use Cases', 'User Stories', 'Acceptance Criteria', 'KPI Analysis'] },
  { title: 'BI & Visualization', skills: ['Microsoft Power BI', 'Dashboard Development', 'KPI Dashboards', 'Interactive Reports', 'Microsoft Excel', 'PivotTables', 'PivotCharts', 'Slicers', 'Matplotlib', 'Seaborn'] },
  { title: 'Databases', skills: ['Microsoft SQL Server', 'MySQL', 'SQL Joins', 'SQL Subqueries'] },
  { title: 'Development & Tools', skills: ['React', 'REST APIs', 'Flask', 'Git', 'GitHub', 'Jupyter Notebook', 'VS Code', 'Jira', 'PowerPoint'] },
  { title: 'Methodologies', skills: ['Agile', 'Scrum', 'SDLC'] },
];

const columns = [[skillCategories[0], skillCategories[3], skillCategories[6]], [skillCategories[1], skillCategories[4], skillCategories[7]], [skillCategories[2], skillCategories[5], skillCategories[8]]];

const Skills = () => <section id="skills" className="py-24">
  <div className="container mx-auto px-6 md:px-12">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16 md:mb-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
      <div className="w-20 h-1 bg-primary rounded mx-auto" />
    </motion.div>
    <div className="skills-columns">
      {columns.map((column, columnIndex) => <div className="skills-column" key={columnIndex}>
        {column.map((category, index) => <motion.div key={category.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (columnIndex * 3 + index) * 0.05 }} className="skills-group">
          <h3>{category.title}</h3>
          <div>{category.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
        </motion.div>)}
      </div>)}
    </div>
  </div>
</section>;

export default Skills;
