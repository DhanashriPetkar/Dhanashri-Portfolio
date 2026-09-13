import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane, FaGithub, FaLinkedin, FaMediumM } from 'react-icons/fa';

const Contact = () => {
  const [state, handleSubmitForm] = useForm('mnpqkpbn');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (submitError) setSubmitError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setSubmitError('Please enter your name.');
      return;
    }

    if (!formData.email.trim()) {
      setSubmitError('Please enter your email address.');
      return;
    }

    if (!formData.message.trim()) {
      setSubmitError('Please enter a message.');
      return;
    }

    setSubmitError('');
    handleSubmitForm(e);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary rounded mx-auto"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            I'm currently available for freelance opportunities and full-time roles. 
            Whether you have a project idea, a question, or just want to say hi — feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-lg shrink-0">
                <FaEnvelope size={22} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Email</h4>
                <a href="mailto:work.dhanashripetkar@gmail.com" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  work.dhanashripetkar@gmail.com
                </a>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-lg shrink-0">
                <FaPhone size={22} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Phone</h4>
                <a href="tel:+917720885156" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  +91 772-088-5156
                </a>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-lg shrink-0">
                <FaMapMarkerAlt size={22} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Location</h4>
                <p className="text-gray-400 text-sm">
                  Kolhapur, Maharashtra, India
                </p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://github.com/DhanashriPetkar" target="_blank" rel="noreferrer" className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary text-gray-400 hover:text-white transition-all">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/dhanashri-petkar/" target="_blank" rel="noreferrer" className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary text-gray-400 hover:text-white transition-all">
                <FaLinkedin size={20} />
              </a>
              <a href="https://medium.com/@DhanashriPetkar" target="_blank" rel="noreferrer" className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary text-gray-400 hover:text-white transition-all">
                <FaMediumM size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Hi Dhanashri, I'd like to discuss..."
                ></textarea>
              </div>

              {submitError && (
                <p className="text-sm text-red-400" role="alert">{submitError}</p>
              )}

              {state.succeeded && (
                <p className="text-sm text-green-400" role="status">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              )}

              <ValidationError prefix="Name" field="name" errors={state.errors} />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <ValidationError prefix="Message" field="message" errors={state.errors} />

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-primary hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {state.submitting ? 'Sending...' : 'Send Message'} <FaPaperPlane size={16} />
              </button>

              {state.submitCount > 0 && !state.succeeded && !submitError && !state.submitting && (
                <p className="text-sm text-red-400" role="alert">
                  There was a problem sending your message. Please try again.
                </p>
              )}

              <p className="text-xs text-gray-600 text-center">
                I&apos;ll get back to you as soon as possible.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
