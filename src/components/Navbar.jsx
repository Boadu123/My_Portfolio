import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ 
      backgroundColor: '#333', 
      padding: '1rem', 
      position: 'fixed', 
      width: '100%', 
      top: 0, 
      zIndex: 1000,
      boxSizing: 'border-box'
    }}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', margin: 0, padding: 0 }}>
        {['Home', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
          <li key={item} style={{ margin: '0 1.5rem' }}>
            <a 
              href={`#${item.toLowerCase().replace(' ', '')}`} 
              style={{ 
                color: 'white', 
                textDecoration: 'none',
                fontSize: '1.2rem',
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