import React, { useState } from 'react';

const projects = [
  {
    title: 'Proximity Finder',
    description: 'Location-based marketplace connecting users with nearby professionals for tasks. Manages bookings, payments, real-time search, verified profiles, and dispute resolution.',
    tech: ['Spring Boot', 'Hibernate', 'PostgreSQL', 'Redis', 'Apache Kafka', 'MongoDB', 'AWS S3'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'ByteBite Restaurants',
    description: 'Microservices food ordering platform with Spring Boot, Kafka, Docker. Supports auth, browsing, orders, real-time notifications.',
    tech: ['Spring Boot', 'Apache Kafka', 'Docker'],
    link: 'https://github.com/Boadu123/ByteBites',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Real-Time Chat App',
    description: 'Messaging app for real-time login and message exchange, emphasizing speed and scalability.',
    tech: ['Spring Boot', 'Hibernate', 'PostgreSQL'],
    link: 'https://chat-j5rs.onrender.com/swagger-ui/index.html#/',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '320px',
        height: '320px',
        borderRadius: '16px',
        border: '1px solid #ddd',
        boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        

        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${project.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Default state - Title */}
      <h3 style={{
        fontSize: '1.8rem',
        margin: 0,
        color: 'white',
        zIndex: 2,
        fontWeight: '700',
        textShadow: '0 2px 4px rgba(0,0,0,0.6)',
        transition: 'opacity 0.3s ease',
        opacity: hovered ? 0 : 1
      }}>
        {project.title}
      </h3>

      {/* Hover overlay - slides up from bottom */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#2c2c2c',
        color: 'white',
        boxSizing: 'border-box',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        transform: hovered ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.4s ease-in-out',
        overflowY: 'auto'
      }}>
        <h3 style={{ fontSize: '1.4rem', marginTop: 0, marginBottom: '0.8rem' }}>
          {project.title}
        </h3>
        
        <p style={{ 
          fontSize: '0.95rem', 
          lineHeight: 1.5, 
          margin: '0 0 1.2rem 0',
          width: '100%',
          maxWidth: '280px'
        }}>
          {project.description}
        </p>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          justifyContent: 'center',
          marginBottom: '1.5rem',
          width: '100%'
        }}>
          {project.tech.map((t, i) => (
            <span key={i} style={{
              padding: '0.25rem 0.6rem',
              backgroundColor: 'rgba(255,255,255,0.15)',
              borderRadius: '999px',
              fontSize: '0.75rem',
              whiteSpace: 'nowrap'
            }}>
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '0.6rem 1.5rem',
            backgroundColor: 'white',
            color: '#2c2c2c',
            textDecoration: 'none',
            borderRadius: '50px',
            fontWeight: 'bold',
            fontSize: '0.9rem',
            transition: 'all 0.2s',
            marginTop: 'auto',
            marginBottom: '0.5rem'
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f0f0f0'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'white'}
        >
          View Project →
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '80px 10% 100px', backgroundColor: '#f8f9fa' }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '2.8rem',
        marginBottom: '3rem',
        color: '#222'
      }}>
        Projects
      </h2>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2.5rem'
      }}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;