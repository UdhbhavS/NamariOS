"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816]">
      
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[150px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
        <div className="text-2xl font-bold text-white">
          NamariOS
        </div>

        <div className="hidden gap-8 text-sm text-slate-300 lg:flex">
          <a href="#">Platform</a>
          <a href="#">NamariFlow</a>
          <a href="#">Security</a>
          <a href="#">Developers</a>
          <a href="#">Company</a>
        </div>

        <button className="rounded-xl border border-slate-700 px-5 py-3 text-white hover:bg-slate-900">
          Request Demo
        </button>
      </nav>

      {/* Announcement Bar */}
      <div className="relative z-20 mx-auto mt-4 flex w-fit items-center gap-3 rounded-full border border-slate-800 bg-slate-900/70 px-5 py-2 text-sm text-slate-300">
        <span>
          Introducing NamariFlow — The First Action-Layer Voice Agent
        </span>
        <span className="text-cyan-400">
          Learn More →
        </span>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 pt-24 lg:grid-cols-2">

        {/* Left */}
        <div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-6xl font-bold leading-tight text-white lg:text-7xl"
          >
            The{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Voice Kernel
            </span>
            <br />
            for Enterprise AI
          </motion.h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            NamariOS provides the infrastructure layer for autonomous
            voice intelligence—enabling organizations to deploy,
            govern, and scale AI agents with unprecedented reliability
            and global reach.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="rounded-xl bg-indigo-600 px-6 py-4 font-medium text-white transition hover:bg-indigo-500">
              Request Demo
            </button>

            <button className="rounded-xl border border-slate-700 px-6 py-4 font-medium text-white transition hover:bg-slate-900">
              Explore Platform
            </button>

          </div>

          {/* Metrics */}

          <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">

            <div>
              <h3 className="text-3xl font-bold text-white">
                99.99%
              </h3>
              <p className="text-slate-500">
                Availability
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                50ms
              </h3>
              <p className="text-slate-500">
                Kernel Latency
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                120+
              </h3>
              <p className="text-slate-500">
                Regions
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                Enterprise
              </h3>
              <p className="text-slate-500">
                Security
              </p>
            </div>

          </div>

        </div>

        {/* Right Side Visual */}

        <div className="relative flex justify-center">

          <div className="relative h-[550px] w-[550px]">

            {/* Center Kernel */}

            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(99,102,241,0.4)",
                  "0 0 60px rgba(99,102,241,0.8)",
                  "0 0 20px rgba(99,102,241,0.4)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
              className="absolute left-1/2 top-1/2 flex h-40 w-64 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-indigo-500 bg-slate-900 text-xl font-bold text-white"
            >
              Voice Kernel
            </motion.div>

            {/* Top Node */}

            <div className="absolute left-1/2 top-10 -translate-x-1/2">
              <div className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-white">
                Voice Agent
              </div>
            </div>

            {/* Bottom Nodes */}

            <div className="absolute bottom-16 left-0 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3">
              Security
            </div>

            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3">
              Runtime
            </div>

            <div className="absolute bottom-16 right-0 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3">
              Observability
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}