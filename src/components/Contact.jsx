import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate async submission
    await new Promise((r) => setTimeout(r, 900));
    setStatus('success');

    (e.target).reset();
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="relative w-full bg-[#0b0f14] py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold text-white md:text-4xl"
        >
          Get in touch
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mx-auto mt-10 max-w-2xl space-y-6 rounded-xl border border-teal-500/20 bg-white/5 p-6 backdrop-blur"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative">
              <input
                id="name"
                name="name"
                required
                className="peer w-full rounded-md border border-white/10 bg-transparent px-4 py-3 text-white placeholder-transparent outline-none transition focus:border-teal-500"
                placeholder="Your name"
              />
              <label htmlFor="name" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-transparent px-1 text-slate-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:text-teal-300">
                Name
              </label>
            </div>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="peer w-full rounded-md border border-white/10 bg-transparent px-4 py-3 text-white placeholder-transparent outline-none transition focus:border-teal-500"
                placeholder="you@example.com"
              />
              <label htmlFor="email" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-transparent px-1 text-slate-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:text-teal-300">
                Email
              </label>
            </div>
          </div>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="peer w-full rounded-md border border-white/10 bg-transparent px-4 py-3 text-white placeholder-transparent outline-none transition focus:border-teal-500"
              placeholder="Your message"
            />
            <label htmlFor="message" className="pointer-events-none absolute left-3 top-4 bg-transparent px-1 text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:text-teal-300">
              Message
            </label>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full rounded-lg bg-teal-500 px-6 py-3 font-medium text-black transition hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-[#0b0f14] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'loading' ? 'Sending…' : status === 'success' ? 'Message sent!' : 'Send message'}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
