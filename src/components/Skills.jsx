import React from 'react';

const skillsData = [
  { 
    category: 'Programming Languages', 
    items: ['Java', 'JavaScript', 'Python', 'HTML/CSS'],
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    category: 'Databases', 
    items: ['PostgreSQL', 'MySQL', 'NoSQL (MongoDB)'],
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    category: 'Message brokers', 
    items: ['Kafka', 'RabbitMQ', 'SQS and SNS'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
  },
  { 
    category: 'Container management', 
    items: ['Docker', 'Kubernetes'],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    category: 'Version control', 
    items: ['Git', 'GitHub'],
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    category: 'Frameworks and libraries', 
    items: ['Django', 'Node.js', 'Express.js', 'React.js', 'Spring Boot', 'Next.js'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    category: 'Architecture', 
    items: ['Monolith', 'Microservices'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    category: 'Caching solutions', 
    items: ['Redis', 'Caffeine'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    category: 'Cloud technologies', 
    items: ['AWS (EC2, S3, RDS, Lambda, VPC)', 'cost optimization', 'scalable architecture'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
];

const Skills = () => {
  return (
    <section id="skills" style={{ padding: '60px 10%', backgroundColor: '#f4f4f4', color: '#333' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem' }}>Skills</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {skillsData.map((skill, index) => (
          <div 
            key={index} 
            style={{ 
              borderRadius: '16px', 
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              padding: '2rem',
              minHeight: '300px', 
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${skill.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              
              color: 'white',
              textAlign: 'center',
              
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center', 
              alignItems: 'center'
            }}
          >
            <h3 style={{ 
              fontSize: '1.8rem', 
              marginBottom: '1.2rem',
              fontWeight: '700',
              textShadow: '0 2px 4px rgba(0,0,0,0.5)' // Subtle shadow for readability
            }}>
              {skill.category}
            </h3>
            
            <ul style={{ 
              listStyleType: 'none', 
              padding: 0, 
              margin: 0,
              width: '100%' 
            }}>
              {skill.items.map((item, idx) => (
                <li key={idx} style={{ 
                  marginBottom: '0.6rem', 
                  fontSize: '1.1rem',
                  fontWeight: '500'
                }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;