// c:\Users\mansi shah\Desktop\dhanvi_postfolio\src\components\Skills.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDatabase, FaPython, FaTrophy, FaUsers, FaBrain, FaClock, FaComments, FaLightbulb } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiCodeforces, SiLeetcode ,SiNextdotjs} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const competitiveProgramming = {
    title: "Competitive Programming",
    achievements: [
      { platform: "Codeforces", rating: "max-1250+ (pupil)", icon: <SiCodeforces /> },
      { platform: "LeetCode", solved: "5 achievement badges", icon: <SiLeetcode /> },
      { platform: "CodeChef", participated: "max-1601 (3⭐)", icon: <FaTrophy /> }
    ]
  };

  const softSkills = [
    { name: 'Problem Solving', icon: <FaBrain />, level: 95 },
    { name: 'Team Collaboration', icon: <FaUsers />, level: 90 },
    { name: 'Communication', icon: <FaComments />, level: 85 },
    { name: 'Time Management', icon: <FaClock />, level: 88 },
    { name: 'Critical Thinking', icon: <FaLightbulb />, level: 92 }
  ];

  const technicalSkills = [
    { name: 'React', icon: <FaReact />, level: 90 },
    { name: 'Nextjs', icon: <SiNextdotjs />, level: 85 },
    { name: 'Node.js', icon: <FaNodeJs />, level: 80 },
    { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
    { name: 'MongoDB', icon: <SiMongodb />, level: 75 },
    { name: 'Express.js', icon: <SiExpress />, level: 80 },
   
    { name: 'Git', icon: <FaGitAlt />, level: 85 },
    { name: 'SQL', icon: <FaDatabase />, level: 50 }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>

        {/* Competitive Programming Card */}
        <motion.div
          className="competitive-programming-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="card-title">{competitiveProgramming.title}</h3>
          <div className="achievements-grid">
            {competitiveProgramming.achievements.map((achievement, index) => (
              <div key={index} className="achievement-item">
                <div className="achievement-icon">{achievement.icon}</div>
                <div className="achievement-details">
                  <h4>{achievement.platform}</h4>
                  <p>{achievement.rating || achievement.solved || achievement.participated}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid Container */}
        <div className="skills-categories">
          {/* Soft Skills */}
          <motion.div
            className="skills-category"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="category-title">Soft Skills</h3>
            <div className="skills-grid horizontal">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-card horizontal-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="skill-content">
                    <div className="skill-icon">
                      {skill.icon}
                    </div>
                    <div className="skill-info">
                      <h3>{skill.name}</h3>
                      <div className="skill-progress">
                        <div 
                          className="skill-progress-bar"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            className="skills-category"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="category-title">Technical Skills</h3>
            <div className="skills-grid horizontal">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-card horizontal-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="skill-content">
                    <div className="skill-icon">
                      {skill.icon}
                    </div>
                    <div className="skill-info">
                      <h3>{skill.name}</h3>
                      <div className="skill-progress">
                        <div 
                          className="skill-progress-bar"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;