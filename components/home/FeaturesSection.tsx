"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Globe,
  Activity,
  Workflow,
  Eye,
  Cpu,
} from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Voice Runtime",
    description:
      "A high-performance execution layer designed for autonomous voice intelligence.",
  },
  {
    icon: Workflow,
    title: "Agent Orchestration",
    description:
      "Coordinate multiple agents across systems, workflows, and enterprise functions.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Encryption, access control, governance, and auditability built into the platform.",
  },
  {
    icon: Globe,
    title: "Global Deployment",
    description:
      "Deploy voice intelligence close to users with low-latency worldwide infrastructure.",
  },
  {
    icon: Eye,
    title: "Human Oversight",
    description:
      "Approval workflows and operational guardrails for high-impact decisions.",
  },
  {
    icon: Activity,
    title: "Observability",
    description:
      "Real-time analytics, monitoring, tracing, and operational visibility.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#050816] py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">

          <div className="mb-6 inline-flex rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-400">
            Platform Capabilities
          </div>

          <h2 className="text-5xl font-bold text-white">
            Built For Enterprise Scale
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Every component of NamariOS is designed to provide
            reliability, governance, and operational excellence
            for autonomous voice systems.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/30 hover:bg-slate-900"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10">

                  <Icon
                    className="text-indigo-400"
                    size={28}
                  />

                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {feature.description}
                </p>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Statement */}

        <div className="mt-24 rounded-3xl border border-slate-800 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 p-10 text-center">

          <h3 className="text-3xl font-bold text-white">
            Infrastructure First
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-slate-400">
            NamariOS is not another voice assistant.
            It is the infrastructure layer that enables
            enterprises to deploy autonomous voice agents
            safely and at scale.
          </p>

        </div>

      </div>
    </section>
  );
}