"use client";

import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-32">

      {/* Glow */}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        <div className="rounded-[40px] border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-16 text-center">

          <div className="inline-flex rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
            Start Building
          </div>

          <h2 className="mx-auto mt-8 max-w-4xl text-5xl font-bold text-white">
            Ready to Deploy Autonomous
            Voice Intelligence?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Build on the Voice Kernel designed for
            mission-critical AI operations. Deploy,
            govern, and scale autonomous voice agents
            with enterprise-grade reliability.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <button className="rounded-xl bg-indigo-600 px-8 py-4 font-medium text-white transition hover:bg-indigo-500">
              Request Demo
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-8 py-4 font-medium text-white transition hover:bg-slate-900">

              Contact Sales

              <ArrowRight size={18} />

            </button>

          </div>

          {/* Metrics */}

          <div className="mt-16 grid gap-8 md:grid-cols-4">

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
                Latency
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

      </div>

    </section>
  );
}