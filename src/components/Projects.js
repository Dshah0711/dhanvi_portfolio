// c:\Users\mansi shah\Desktop\dhanvi_postfolio\src\components\Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'SLIFTEX- A Title Verifier',
      description: 'Built a website for the Press General of India helping them to filter new titles based on how lexically, semantically and phonetically close they are to the existing titles.',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'FastAPI', 'LangChain', 'OpenAI', 'MongoDB', 'AWS EC2'],
      github: 'https://github.com/unknownsideofme/SLIFTEX',
      live: 'https://sliftex.vercel.app/'
    },
    {
      id: 2,
      title: 'SensAI-AI-Powered Career Coach Platform',
      description: 'Developed AI-driven assessment engine with adaptive testing, behavioral interview simulation, and personalized career path recommendations generating real-time feedback and improvement strategies.',
      technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Shadcn/ui', 'Next.js API Routes', 'Prisma ORM', 'PostgreSQL', 'Google Gemini Pro API', 'Clerk', 'Serverless Architecture'],
      github: 'https://github.com/Dshah0711/sensai',
      live: 'https://sensai-five-lilac.vercel.app/'
    },
    {
id: 3,
title: 'CarePulse- AI-Enhanced Healthcare Management Platform',
description: 'Developed patient management system with automated scheduling, secure document handling, and admin dashboard featuring real-time SMS notifications for improved healthcare workflows.',
technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Shadcn/ui', 'Appwrite (BaaS)', 'Appwrite Database', 
'Twilio SMS API', 'Appwrite Auth', 'Appwrite Storage', 'Full-stack serverless'],
      github: 'https://github.com/Dshah0711/CarePulse',
      live: 'https://care-pulse-8co1-bac7shoek-dshah0711s-projects.vercel.app/'
    }
    
  ];

  console.log('Projects component is rendering');
  console.log('Projects array:', projects);

  return (
    <section id="projects" className="section projects-section" style={{backgroundColor: '#1a1a1a', minHeight: '100vh', padding: '80px 0'}}>
      <div className="container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
        <h2 className="section-title" style={{fontSize: '3rem', textAlign: 'center', marginBottom: '4rem', color: '#64ffda'}}>
          Featured Projects
        </h2>
        <div className="projects-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem'}}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{
                background: 'rgba(100, 255, 218, 0.05)',
                borderRadius: '15px',
                border: '1px solid rgba(100, 255, 218, 0.1)',
                minHeight: '250px'
              }}
            >
              <div className="project-content" style={{padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column'}}>
                <div className="project-header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem'}}>
                  <h3 style={{fontSize: '1.5rem', color: '#64ffda', flex: 1, marginRight: '1rem', margin: 0}}>
                    {project.title}
                  </h3>
                  <div className="project-links" style={{display: 'flex', gap: '0.5rem'}}>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                        background: 'rgba(100, 255, 218, 0.1)',
                        borderRadius: '50%',
                        color: '#64ffda',
                        fontSize: '1.2rem'
                      }}>
                        <FaGithub />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                        background: 'rgba(100, 255, 218, 0.1)',
                        borderRadius: '50%',
                        color: '#64ffda',
                        fontSize: '1.2rem'
                      }}>
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
                <p style={{color: '#a0a0a0', lineHeight: '1.6', marginBottom: '1.5rem'}}>
                  {project.description}
                </p>
                <div className="project-technologies" style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto'}}>
                  {project.technologies && project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag" style={{
                      background: 'linear-gradient(45deg, #64ffda, #00bcd4)',
                      color: '#0a0a0a',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '15px',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{textAlign: 'center', marginTop: '4rem'}}>
          <a 
            href="https://github.com/Dshah0711" 
            target="_blank" 
            rel="noopener noreferrer"
            className="view-more-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              background: 'linear-gradient(45deg, #64ffda, #00bcd4)',
              color: '#0a0a0a',
              textDecoration: 'none',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <FaGithub style={{fontSize: '1.2rem'}} />
            View More Work on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;