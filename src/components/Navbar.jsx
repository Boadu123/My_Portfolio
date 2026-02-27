import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ 
      backgroundColor: '#333', 
      padding: '1rem 5%', 
      position: 'fixed', 
      width: '100%', 
      top: 0, 
      zIndex: 1000,
      boxSizing: 'border-box'
    }}>
      <ul style={{ 
        listStyle: 'none', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        margin: 0, 
        padding: 0,
        flexWrap: 'wrap', // Wraps neatly if the screen gets too small
        gap: '1.5rem' // Uses gap instead of rigid margins
      }}>
        {['Home', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
          <li key={item}>
            <a 
              href={`#${item.toLowerCase().replace(' ', '')}`} 
              style={{ 
                color: 'white', 
                textDecoration: 'none',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                fontWeight: '500',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#ccc'}
              onMouseLeave={(e) => e.target.style.color = 'white'}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;