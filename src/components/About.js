// src/components/About.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  const achievements = [
    {
      title: "Smart India Hackathon Winner",
      description: "Winner of Smart India Hackathon 2024 - National level innovation competition",
      icon: "🏆"
    },
    {
      title: "Version Beta Hackathon Finalist",
      description: "Achieved finalist position in Version Beta Hackathon, showcasing technical excellence",
      icon: "🥈"
    },
    {
      title: "Inter NIT Competition",
      description: "Secured position among top 15 teams from all NITs in inter-collegiate competition",
      icon: "🎯"
    },
   
  ];

  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Electronics and Communication",
      institution: "NIT Bhopal",
      year: "2023-2027",
      grade: "CGPA: 9.12"
    },
    {
      degree: "Higher Secondary",
      field: "Maths Stream",
      institution: "Shree Gujarati Samaj School AMN English Medium School",
      year: "2023",
      grade: "Percentage: 93.8%"
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 data-aos="fade-up">About Me</h2>
        <div className="about-content">
          <div className="about-text" data-aos="fade-up" data-aos-delay="200">
            <p>
              I am a highly motivated and detail-oriented individual with a passion for innovation and problem-solving. With a strong foundation in DSA and a keen interest in web development,
            </p>
          </div>
          
          <div className="achievements-section">
            <h3 data-aos="fade-up" data-aos-delay="300">Achievements</h3>
            <div className="cards-grid">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="achievement-card"
                  data-aos="fade-up"
                  data-aos-delay={400 + (index * 100)}
                >
                  <div className="card-icon">{achievement.icon}</div>
                  <h4>{achievement.title}</h4>
                  <p>{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="education-section">
            <h3 data-aos="fade-up" data-aos-delay="800">Education</h3>
            <div className="education-cards">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="education-card"
                  data-aos="fade-up"
                  data-aos-delay={900 + (index * 100)}
                >
                  <div className="education-header">
                    <h4>{edu.degree}</h4>
                    <span className="year">{edu.year}</span>
                  </div>
                  <p className="field">{edu.field}</p>
                  <p className="institution">{edu.institution}</p>
                  <p className="grade">{edu.grade}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;