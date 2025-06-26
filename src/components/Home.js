// c:\Users\mansi shah\Desktop\dhanvi_postfolio\src\components\Home.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const name = "Dhanvi Shah";

  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume_dhanvi (8).pdf'; // Updated to match your actual filename
    link.download = 'Dhanvi_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="home-content">
          <motion.div 
            className="home-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>
              Hi, I'm{" "}
              <span className="gradient-text animated-name">
                {name.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    className="animated-letter"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [
                        0, // start invisible
                        0, // stay invisible until it's time to appear
                        1, // appear
                        1, // stay visible
                        0, // disappear
                        0, // stay invisible
                        1  // reappear
                      ]
                    }}
                    transition={{
                      duration: 6,
                      times: [0, 0.15 + (index * 0.08), 0.2 + (index * 0.08), 0.7, 0.75 + (index * 0.08), 0.9, 0.95 + (index * 0.08)],
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut"
                    }}
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitFontSmoothing: 'antialiased',
                      textRendering: 'optimizeLegibility',
                      transform: 'translateZ(0)',
                      willChange: 'opacity'
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </span>
            </h1>
            <h2 className="subtitle">Engineer & Problem Solver</h2>
            <p className="description">
               <span> Pre Final Year at NIT-B.</span><br></br>
Passionate about leveraging data structures, algorithms, and 
               creating beautiful, functional, and user-friendly applications. 
              I love turning complex problems into simple, elegant solutions.
            </p>
            <div className="cta-buttons">
              <a href="#contact" className="btn primary">Get In Touch</a>
              <a href="#projects" className="btn secondary">View My Work</a>
            </div>
            <div className="social-links">
              <a href="https://github.com/Dshah0711" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/dhanvi-shah-084080294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:dhanvishah0711@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope />
              </a>
              <button 
                className="btn download" 
                onClick={handleDownloadCV}
              >
                Download CV
              </button>
            </div>
          </motion.div>
          <motion.div 
            className="home-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="image-container">
              <img src="/assets/WhatsApp Image 2025-06-25 at 17.09.28_02b5ef8b.jpg" alt="Dhanvi" />
              <div className="image-overlay"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;