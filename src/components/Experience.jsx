import React from 'react';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'FirstBank Ghana',
    location: 'Accra, Ghana / On-site',
    dates: '06/2026 - Present',
    bullets: [
      'Developed and maintained enterprise Java applications using Java, Jakarta EE, and JPA.',
      'Implemented maker-checker workflows and role-based approval processes.',
      'Integrated banking systems with internal and third-party APIs.',
      'Managed database migrations, schema updates, and deployment activities.',
      'Troubleshot and resolved application, database, and integration issues on WildFly servers.',
      'Collaborated with cross-functional teams to deliver secure and reliable banking solutions.'
    ]
  },
  {
    title: 'Backend Engineer',
    company: 'Amalitech',
    location: 'Accra, Ghana / Hybrid',
    dates: '04/2025 – 01/2026',
    bullets: [
      'Designed and developed enterprise-grade backend systems using Spring Boot 3, following both monolith and microservices architectures, to support local service discovery, user-to-provider connections, and scalable booking workflows.',
      'Engineered a Request-to-Book workflow system using Spring Boot, Hibernate, and PostgreSQL, enabling providers to manage job acceptance while supporting admin-led dispute resolution.',
      'Implemented project, task, and food-order management APIs using Spring Boot and RESTful services, supporting team collaboration, service bookings, and restaurant ordering workflows.',
      'Optimized application performance and scalability using Hibernate pagination, query tuning, and Redis caching, significantly improving API response times and system throughput.',
      'Integrated Apache Kafka for asynchronous communication between services and used MongoDB for handling logs and auxiliary data, improving system resilience and observability.',
      'Integrated AWS S3 for secure file storage and collaborated within an agile engineering team to deliver clean, maintainable, and production-ready solutions.'
    ]
  },
  {
    title: 'AWS Cloud Engineer',
    company: 'Amalitech',
    location: 'Accra, Ghana / Hybrid',
    dates: '08/2025 – 09/2025',
    bullets: [
      'Designed and deployed secure, highly available AWS cloud infrastructure using CloudFormation, enabling consistent and automated environment provisioning.',
      'Implemented CI/CD pipelines by integrating GitHub Actions with AWS CodeDeploy, achieving faster, low-latency, and reliable production deployments.',
      'Applied cloud governance and FinOps best practices, leveraging AWS Cost Explorer and Trusted Advisor to optimize infrastructure costs while maintaining security and compliance.'
    ]
  },
  {
    title: 'Full-Stack Web Developer',
    company: 'Core Extreme',
    location: 'Accra, Ghana / On-site',
    dates: '11/2024 – 03/2025',
    bullets: [
      'Full-Stack Architecture: Architected scalable web solutions using Node.js and Express.js, overseeing the entire development lifecycle from debugging to automated deployment.',
      'Backend Optimization: Enhanced system performance and data integrity by designing efficient schemas with Mongoose and MongoDB, significantly improving API response times and user experience.'
    ]
  }
];

const educations = [
  {
    degree: 'Grow Web Development Program',
    institution: 'MEST AFRICA',
    dates: '09/2024 – 11/2024'
  },
  {
    degree: 'BSc. Electrical and Electronic Engineering',
    institution: 'UNIVERSITY OF ENERGY AND NATURAL RESOURCE',
    location: 'Sunyani, Ghana',
    dates: '09/2018 – 10/2022'
  }
];

const Experience = () => {
  return (
    <section id="experience" style={{ padding: '80px 5%', backgroundColor: '#f4f4f4', color: '#333' }}>
      
      {/* PROFESSIONAL EXPERIENCE SECTION */}
      <h2 style={{ textAlign: 'center', fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '2rem' }}>Experience</h2>
      <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '1.5rem' }}>Professional Experience</h3>
      
      {experiences.map((exp, index) => (
        <div key={index} style={{ marginBottom: '2rem', backgroundColor: 'white', padding: 'clamp(1rem, 3vw, 1.5rem)', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <h4 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', marginBottom: '0.5rem' }}>{exp.title} at {exp.company}</h4>
          <p style={{ fontSize: '1rem', marginBottom: '1rem', color: '#666' }}>{exp.dates} | {exp.location}</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            {exp.bullets.map((bullet, idx) => (
              <li key={idx} style={{ marginBottom: '0.5rem', fontSize: '0.95rem', lineHeight: '1.6' }}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
      
      {/* EDUCATION SECTION */}
      <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '1.5rem', marginTop: '3rem' }}>Education</h3>
      
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '2rem', 
        justifyContent: 'space-between' 
      }}>
        {educations.map((edu, index) => (
          <div 
            key={index} 
            style={{ 
              flex: '1 1 250px', // Responsive flex base
              backgroundColor: 'white', 
              padding: 'clamp(1rem, 3vw, 1.5rem)', 
              borderRadius: '10px', 
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <h4 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.4rem)', marginBottom: '0.8rem', color: '#222' }}>{edu.degree}</h4>
            <p style={{ fontSize: '1rem', marginBottom: '0.4rem', fontWeight: 'bold' }}>{edu.institution}</p>
            {edu.location && <p style={{ fontSize: '0.95rem', marginBottom: '0.4rem', color: '#555' }}>{edu.location}</p>}
            <p style={{ fontSize: '0.95rem', color: '#888', marginTop: 'auto' }}>{edu.dates}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Experience;
