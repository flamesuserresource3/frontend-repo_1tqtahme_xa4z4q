import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero3D from './components/Hero3D.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f14] font-inter">
      <Navbar />
      <Hero3D />
      <About />
      <Contact />
      <footer className="border-t border-white/5 bg-[#090d12] py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} TrackSence. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
