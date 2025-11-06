import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Wallet, NotebookPen, Shield } from 'lucide-react';

const features = [
  {
    icon: Wallet,
    title: 'Expense Overview',
    desc: 'See all your spending in one clean view with categories, trends, and real-time updates.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    desc: 'Powerful, visual insights with breakdowns, forecasts, and smart alerts when habits shift.',
  },
  {
    icon: NotebookPen,
    title: 'Notes Management',
    desc: 'Attach context to every transaction with rich notes, receipts, and tags for clarity.',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    desc: 'Enterprise-grade encryption and privacy-first design keep your data safe and in your control.',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-[#0b0f14] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold text-white md:text-4xl"
        >
          What makes TrackSence different
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.6 }}
              className="group relative overflow-hidden rounded-xl border border-teal-500/20 bg-white/5 p-6 text-slate-300 shadow-lg backdrop-blur hover:border-teal-500/40"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-teal-500/10 blur-2xl transition group-hover:bg-teal-500/20" />
              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/20 text-teal-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
