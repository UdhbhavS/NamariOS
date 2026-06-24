"use client";

import { motion } from "framer-motion";
import {
  Building2,
  HeartPulse,
  Headphones,
  Truck,
  Briefcase,
  Users,
} from "lucide-react";

const useCases = [
  {
    icon: Building2,
    title: "Financial Services",
    description:
      "Automate verification, customer operations, compliance workflows, and transaction assistance.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Coordinate patient engagement, scheduling, follow-ups, and operational workflows.",
  },
  {
    icon: Headphones,
    title: "Contact Centers",
    description:
      "Resolve customer issues end-to-end instead of routing calls between departments.",
  },
  {
    icon: Truck,
    title: "Logistics",
    description:
      "Manage dispatch coordination, shipment updates, and operational communication.",
  },
  {
    icon: Briefcase,
    title: "Internal Operations",
    description:
      "Support HR, IT, procurement, and enterprise knowledge workflows.",
  },
  {
    icon: Users,
    title: "Customer Success",
    description:
      "Deliver proactive engagement and automated service resolution at scale.",
  },
];

export default function UseCasesSection() {
  return (
    <section className="bg-[#050816] py-32">

      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto max-w-4xl text-center">

          <div className="mb-6 inline-flex rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-400">
            Industry Applications
          </div>

          <h2 className="text-5xl font-bold text-white">
            Built For Real-World Operations
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Deploy autonomous voice intelligence across industries,
            departments, and mission-critical workflows.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {useCases.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30 hover:bg-slate-900"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">

                  <Icon
                    size={28}
                    className="text-cyan-400"
                  />

                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {item.description}
                </p>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}

        <div className="mt-24 rounded-3xl border border-slate-800 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 p-10">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>

              <h3 className="text-3xl font-bold text-white">
                One Platform. Unlimited Workflows.
              </h3>

              <p className="mt-5 text-slate-400">
                Whether you're serving customers,
                managing operations, or supporting
                employees, NamariOS provides the
                infrastructure to deploy voice agents
                safely and at enterprise scale.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-xl bg-slate-900 p-5">
                <h4 className="text-xl font-bold text-white">
                  500M+
                </h4>
                <p className="text-slate-400">
                  Voice Events
                </p>
              </div>

              <div className="rounded-xl bg-slate-900 p-5">
                <h4 className="text-xl font-bold text-white">
                  120+
                </h4>
                <p className="text-slate-400">
                  Regions
                </p>
              </div>

              <div className="rounded-xl bg-slate-900 p-5">
                <h4 className="text-xl font-bold text-white">
                  99.99%
                </h4>
                <p className="text-slate-400">
                  Uptime
                </p>
              </div>

              <div className="rounded-xl bg-slate-900 p-5">
                <h4 className="text-xl font-bold text-white">
                  24/7
                </h4>
                <p className="text-slate-400">
                  Availability
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}