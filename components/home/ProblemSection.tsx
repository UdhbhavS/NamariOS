"use client";

import { motion } from "framer-motion";

const problems = [
  {
    title: "Traditional Voice Bots",
    points: [
      "Rigid decision trees",
      "Scripted conversations",
      "Limited task execution",
      "Poor contextual awareness",
    ],
  },
  {
    title: "LLM Wrappers",
    points: [
      "No governance layer",
      "Unpredictable behavior",
      "Difficult to monitor",
      "Not enterprise ready",
    ],
  },
  {
    title: "Enterprise Reality",
    points: [
      "Compliance requirements",
      "Security expectations",
      "Global scale demands",
      "Mission-critical reliability",
    ],
  },
];

export default function ProblemSection() {
  return (
    <section className="relative bg-[#050816] py-32">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >

          <div className="mb-6 inline-flex rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-400">
            The Problem
          </div>

          <h2 className="text-5xl font-bold text-white">
            Today's Voice AI Wasn't Built
            <br />
            For Enterprise Operations
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Most voice systems are designed to answer questions.
            Enterprises need systems that can reason, govern,
            and execute actions reliably at scale.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {problems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm transition-all hover:border-indigo-500/40 hover:bg-slate-900"
            >
              <h3 className="text-2xl font-semibold text-white">
                {item.title}
              </h3>

              <div className="mt-8 space-y-4">

                {item.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3"
                  >
                    <div className="h-2 w-2 rounded-full bg-red-400" />
                    <span className="text-slate-400">
                      {point}
                    </span>
                  </div>
                ))}

              </div>
            </motion.div>
          ))}
        </div>

        {/* Conclusion */}

        <div className="mt-20 rounded-3xl border border-indigo-500/20 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 p-10 text-center">

          <h3 className="text-3xl font-bold text-white">
            Enterprises Need Infrastructure,
            Not Another Chatbot.
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-slate-400">
            Autonomous voice intelligence requires governance,
            orchestration, observability, security, and reliability.
            That's why NamariOS exists.
          </p>

        </div>

      </div>
    </section>
  );
}