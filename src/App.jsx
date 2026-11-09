// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />

      <Hero />

      <Skills />
      
      <Experience />

      <Contact />
    </div>
  );
}

export default App;
