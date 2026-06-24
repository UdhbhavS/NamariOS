"use client";

import { motion } from "framer-motion";

export default function ArchitectureSection() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-32">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">

          <div className="mb-6 inline-flex rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-400">
            The Solution
          </div>

          <h2 className="text-5xl font-bold text-white">
            Introducing NamariOS
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            A secure execution layer designed to power autonomous
            voice intelligence across enterprise environments.
          </p>

        </div>

        {/* Architecture Diagram */}

        <div className="mt-24 flex justify-center">

          <div className="w-full max-w-4xl">

            {/* Applications */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto w-fit rounded-2xl border border-slate-700 bg-slate-900 px-8 py-5"
            >
              <h3 className="text-lg font-semibold text-white">
                Enterprise Applications
              </h3>
            </motion.div>

            <div className="mx-auto h-12 w-[2px] bg-indigo-500" />

            {/* NamariFlow */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="mx-auto w-fit rounded-2xl border border-cyan-500/40 bg-cyan-500/10 px-10 py-6"
            >
              <h3 className="text-xl font-semibold text-white">
                NamariFlow
              </h3>

              <p className="mt-2 text-center text-sm text-slate-400">
                Action-Layer Voice Agent
              </p>
            </motion.div>

            <div className="mx-auto h-12 w-[2px] bg-indigo-500" />

            {/* Kernel */}

            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(99,102,241,.2)",
                  "0 0 60px rgba(99,102,241,.5)",
                  "0 0 20px rgba(99,102,241,.2)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="mx-auto rounded-3xl border border-indigo-500 bg-slate-900 p-10"
            >
              <h3 className="text-center text-3xl font-bold text-white">
                Voice Kernel
              </h3>

              <p className="mt-4 text-center text-slate-400">
                The infrastructure layer powering enterprise voice intelligence
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-4">

                <div className="rounded-xl bg-slate-800 p-4 text-center">
                  <h4 className="font-semibold text-white">
                    Runtime
                  </h4>
                </div>

                <div className="rounded-xl bg-slate-800 p-4 text-center">
                  <h4 className="font-semibold text-white">
                    Security
                  </h4>
                </div>

                <div className="rounded-xl bg-slate-800 p-4 text-center">
                  <h4 className="font-semibold text-white">
                    Governance
                  </h4>
                </div>

                <div className="rounded-xl bg-slate-800 p-4 text-center">
                  <h4 className="font-semibold text-white">
                    Observability
                  </h4>
                </div>

              </div>

            </motion.div>

            <div className="mx-auto h-12 w-[2px] bg-indigo-500" />

            {/* Systems */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="mx-auto w-fit rounded-2xl border border-slate-700 bg-slate-900 px-8 py-5"
            >
              <h3 className="text-lg font-semibold text-white">
                Enterprise Systems & APIs
              </h3>
            </motion.div>

          </div>

        </div>

        {/* Explanation */}

        <div className="mt-24 grid gap-8 lg:grid-cols-3">

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
            <h3 className="text-xl font-semibold text-white">
              Reason
            </h3>

            <p className="mt-4 text-slate-400">
              Understand context and evaluate complex situations.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
            <h3 className="text-xl font-semibold text-white">
              Govern
            </h3>

            <p className="mt-4 text-slate-400">
              Apply enterprise controls, approvals, and compliance.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
            <h3 className="text-xl font-semibold text-white">
              Execute
            </h3>

            <p className="mt-4 text-slate-400">
              Safely perform actions across connected systems.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}