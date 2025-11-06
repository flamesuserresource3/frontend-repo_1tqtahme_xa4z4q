import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#090d12]/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg font-semibold tracking-tight text-white"
        >
          <span className="text-teal-400">Track</span>Sence
        </motion.a>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a className="hover:text-white" href="#features">Features</a>
          <a className="hover:text-white" href="#about">About</a>
          <a className="hover:text-white" href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="hidden rounded-md bg-teal-500 px-4 py-2 text-sm font-medium text-black shadow-teal-500/20 transition hover:bg-teal-400 md:inline-block">
          Get in touch
        </a>
      </div>
    </header>
  );
};

export default Navbar;
