import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const Hero3D = () => {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-[#0b0f14]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0f14]/50 via-[#0b0f14]/70 to-[#0b0f14]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-6 pt-24 pb-20 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-teal-300 backdrop-blur"
        >
          <Rocket className="h-4 w-4" />
          <span className="text-sm">Introducing TrackSence</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Intelligent expense tracking, reimagined.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 max-w-2xl text-lg text-slate-300"
        >
          TrackSence brings a futuristic experience to managing your money — real-time insights, crystal-clear analytics, and a delightful interface powered by 3D interactions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#features"
            className="rounded-lg bg-teal-500 px-5 py-3 text-sm font-medium text-black shadow-lg shadow-teal-500/20 transition hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-[#0b0f14]"
          >
            Explore features
          </a>
          <a
            href="#about"
            className="rounded-lg border border-teal-500/40 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-[#0b0f14]"
          >
            Learn more
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero3D;
