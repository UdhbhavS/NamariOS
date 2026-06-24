"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Workflow,
  Zap,
  ArrowRight,
} from "lucide-react";

export default function NamariFlowSection() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-32">

      {/* Background Glow */}

      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="max-w-3xl">

          <div className="mb-6 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Built on NamariOS
          </div>

          <h2 className="text-5xl font-bold text-white">
            Meet NamariFlow
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            The first Action-Layer Voice Agent.
            Designed for reasoning-heavy workflows,
            enterprise execution, and end-to-end task completion.
          </p>

        </div>

        {/* Main Grid */}

        <div className="mt-20 grid gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <div className="space-y-10">

              <div className="flex gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10">
                  <Brain
                    className="text-indigo-400"
                    size={28}
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Reason
                  </h3>

                  <p className="mt-2 text-slate-400">
                    Understand context, evaluate
                    complex situations, and determine
                    the optimal next action.
                  </p>
                </div>

              </div>

              <div className="flex gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
                  <Workflow
                    className="text-cyan-400"
                    size={28}
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Decide
                  </h3>

                  <p className="mt-2 text-slate-400">
                    Apply business logic,
                    governance policies,
                    and operational controls.
                  </p>
                </div>

              </div>

              <div className="flex gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10">
                  <Zap
                    className="text-green-400"
                    size={28}
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Act
                  </h3>

                  <p className="mt-2 text-slate-400">
                    Execute actions across
                    enterprise systems and
                    complete workflows end-to-end.
                  </p>
                </div>

              </div>

            </div>

            {/* CTA */}

            <button className="mt-12 flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-4 text-white hover:bg-slate-900">

              Explore NamariFlow

              <ArrowRight size={18} />

            </button>

          </div>

          {/* Right Dashboard */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">

              <div className="flex items-center justify-between">

                <h3 className="text-xl font-semibold text-white">
                  NamariFlow Console
                </h3>

                <div className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                  Active
                </div>

              </div>

              {/* Metrics */}

              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="rounded-xl bg-slate-800 p-4">
                  <p className="text-sm text-slate-400">
                    Active Agents
                  </p>

                  <h4 className="mt-2 text-3xl font-bold text-white">
                    24
                  </h4>
                </div>

                <div className="rounded-xl bg-slate-800 p-4">
                  <p className="text-sm text-slate-400">
                    Tasks Completed
                  </p>

                  <h4 className="mt-2 text-3xl font-bold text-white">
                    18.2K
                  </h4>
                </div>

              </div>

              {/* Workflow */}

              <div className="mt-8 rounded-2xl bg-slate-800 p-6">

                <p className="text-sm text-slate-500">
                  Current Workflow
                </p>

                <div className="mt-5 flex items-center gap-3">

                  <div className="rounded-lg bg-indigo-500/20 px-3 py-2 text-indigo-300">
                    Voice Input
                  </div>

                  <ArrowRight size={18} />

                  <div className="rounded-lg bg-cyan-500/20 px-3 py-2 text-cyan-300">
                    Reason
                  </div>

                  <ArrowRight size={18} />

                  <div className="rounded-lg bg-green-500/20 px-3 py-2 text-green-300">
                    Execute
                  </div>

                </div>

              </div>

              {/* Status */}

              <div className="mt-8 rounded-2xl bg-slate-800 p-6">

                <p className="text-sm text-slate-500">
                  System Health
                </p>

                <div className="mt-3 flex justify-between">

                  <span className="text-slate-400">
                    Availability
                  </span>

                  <span className="text-white">
                    99.99%
                  </span>

                </div>

                <div className="mt-3 flex justify-between">

                  <span className="text-slate-400">
                    Latency
                  </span>

                  <span className="text-white">
                    48ms
                  </span>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}