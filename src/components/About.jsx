import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#0b0f14] py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold text-white md:text-4xl"
        >
          About TrackSence
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mx-auto mt-6 max-w-3xl text-center text-slate-300"
        >
          TrackSence is built with a mission to make expense tracking effortless and insightful. We believe great financial tools should feel intuitive, look stunning, and deliver clarity. Our approach blends data visualization with delightful micro-interactions so you can understand your spending at a glance and make smarter decisions.
        </motion.p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="rounded-xl border border-teal-500/20 bg-white/5 p-6 text-slate-300 backdrop-blur"
            >
              <h3 className="text-lg font-semibold text-white">{['Mission', 'Design', 'Impact'][i - 1]}</h3>
              <p className="mt-2 text-sm leading-relaxed">
                {[
                  'Empower users with intelligent tools that simplify personal finance.',
                  'A dark modern interface with teal accents, crafted for focus and flow.',
                  'Turn raw transactions into meaningful insights you can act on.',
                ][i - 1]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
