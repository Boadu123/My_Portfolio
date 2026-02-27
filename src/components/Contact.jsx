import React from 'react';
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

const Contact = () => {
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: <FaLinkedinIn />, 
      color: '#0077B5', 
      link: 'https://www.linkedin.com/in/benedict-boadu-boateng'
    },
    { 
      name: 'GitHub', 
      icon: <FaGithub />, 
      color: '#4E5D6C', 
      link: 'https://github.com/Boadu123'
    },
  ];

  return (
    <section id="contact" style={{ padding: '80px 5%', backgroundColor: '#f4f4f4', color: '#333', textAlign: 'center' }}>
      <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '2.5rem' }}>Contact</h2>

      {/* Direct Contact Info */}
      <div style={{ marginBottom: '3rem', lineHeight: '1.8', wordBreak: 'break-word' }}>
        <p style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)', margin: '5px 0' }}>
           <strong>Email:</strong> <a href="mailto:bboaduboateng2000@gmail.com" style={{ color: '#333', textDecoration: 'none' }}>bboaduboateng2000@gmail.com</a>
        </p>
        <p style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)', margin: '5px 0' }}>
          <strong>Phone:</strong> +233 556907573
        </p>
        <p style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)', margin: '5px 0' }}>
          <strong>Location:</strong> Accra, Ghana
        </p>
      </div>

      {/* Focused Social Icon Row */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '20px', 
        flexWrap: 'wrap' 
      }}>
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            title={social.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '65px',
              height: '65px',
              backgroundColor: social.color,
              color: 'white',
              fontSize: '2rem',
              borderRadius: '14px',
              transition: 'transform 0.2s, filter 0.2s',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.filter = 'brightness(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.filter = 'brightness(1)';
            }}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;