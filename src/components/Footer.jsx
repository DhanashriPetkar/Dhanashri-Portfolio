import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaMediumM } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-secondary/20 pt-12 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Dhanashri Petkar
            </a>
            <p className="text-gray-400 mt-2 text-sm max-w-sm text-center md:text-left">
              Data Scientist | Machine Learning Engineer | Data Analyst
            </p>
          </div>

          <div className="flex gap-4">
            <SocialLink href="https://github.com/DhanashriPetkar" icon={<FaGithub size={20} />} />
            <SocialLink href="https://www.linkedin.com/in/dhanashri-petkar/" icon={<FaLinkedin size={20} />} />
            <SocialLink href="mailto:work.dhanashripetkar@gmail.com" icon={<FaEnvelope size={20} />} />
            <SocialLink href="https://medium.com/@DhanashriPetkar" icon={<FaMediumM size={20} />} />
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>Designed and built by Dhanashri Petkar</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary hover:text-white transition-all duration-300 text-gray-400"
  >
    {icon}
  </a>
);

export default Footer;
