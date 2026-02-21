// Hero.jsx
import React from 'react';
import profilePicture from '../assets/my_picture.png';

const Hero = () => {
  const summarizedIntro = "Versatile Software Engineer with 3+ years of experience, specializing in robust, scalable applications. Thrives in dynamic environments, optimizing performance for seamless user experiences.";

  return (
    <section id="home" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70vh', padding: '60px 10% 0', backgroundColor: '#f4f4f4', color: '#333' }}>
      <div style={{ flex: 1, maxWidth: '50%' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Benedict Boadu-Boateng</h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Software Engineer</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>{summarizedIntro}</p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="#projects" style={{ padding: '0.8rem 1.5rem', backgroundColor: '#333', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>View Projects</a>
          <a href="#contact" style={{ padding: '0.8rem 1.5rem', backgroundColor: '#333', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>Contact Me</a>
        </div>
      </div>
      <div style={{ flex: 1, maxWidth: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={profilePicture} alt="Profile Picture" style={{ maxWidth: '60%', borderRadius: '50%', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
      </div>
    </section>
  );
};

export default Hero;