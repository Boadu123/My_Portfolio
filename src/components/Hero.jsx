import React from 'react';
import profilePicture from '../assets/my_picture.png'; // Make sure this path stays correct!

const Hero = () => {
  const summarizedIntro = "Versatile Software Engineer with 3+ years of experience, specializing in robust, scalable applications. Thrives in dynamic environments, optimizing performance for seamless user experiences.";

  return (
    <section id="home" style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      minHeight: '100vh', 
      padding: '100px 5% 40px', 
      backgroundColor: '#f4f4f4', 
      color: '#333',
      flexWrap: 'wrap-reverse', // Image goes to top on mobile
      gap: '2rem'
    }}>
      <div style={{ flex: '1 1 300px', minWidth: '300px' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', marginBottom: '1rem', lineHeight: '1.2' }}>Benedict Boadu-Boateng</h1>
        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '1rem', color: '#555' }}>Software Engineer</h2>
        <p style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)', marginBottom: '2rem', lineHeight: '1.6' }}>{summarizedIntro}</p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#projects" style={{ padding: '0.8rem 1.5rem', backgroundColor: '#333', color: 'white', textDecoration: 'none', borderRadius: '5px', textAlign: 'center', flex: '1 1 auto' }}>View Projects</a>
          <a href="#contact" style={{ padding: '0.8rem 1.5rem', backgroundColor: '#333', color: 'white', textDecoration: 'none', borderRadius: '5px', textAlign: 'center', flex: '1 1 auto' }}>Contact Me</a>
        </div>
      </div>
      <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={profilePicture} alt="Profile Picture" style={{ width: '100%', maxWidth: '350px', borderRadius: '50%', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
      </div>
    </section>
  );
};

export default Hero;