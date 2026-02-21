// Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#333', padding: '1rem', position: 'fixed', width: '100%', top: 0, zIndex: 1000 }}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', margin: 0, padding: 0 }}>
        <li style={{ margin: '0 1rem' }}><a href="#hero" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
        <li style={{ margin: '0 1rem' }}><a href="#hero" style={{ color: 'white', textDecoration: 'none' }}>About Me</a></li>
        <li style={{ margin: '0 1rem' }}><a href="#projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</a></li>
        <li style={{ margin: '0 1rem' }}><a href="#skills" style={{ color: 'white', textDecoration: 'none' }}>Skills</a></li>
        <li style={{ margin: '0 1rem' }}><a href="#experience" style={{ color: 'white', textDecoration: 'none' }}>Experience</a></li>
        <li style={{ margin: '0 1rem' }}><a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;