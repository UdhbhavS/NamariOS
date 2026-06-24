"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  KeyRound,
  FileText,
  CheckCircle2,
  Eye,
} from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description:
      "Protect voice interactions and data flows with enterprise-grade encryption.",
  },
  {
    icon: KeyRound,
    title: "Role-Based Access Control",
    description:
      "Granular permissions and access policies for teams and systems.",
  },
  {
    icon: FileText,
    title: "Audit Trails",
    description:
      "Track every decision, action, and workflow execution across agents.",
  },
  {
    icon: Eye,
    title: "Observability",
    description:
      "Full visibility into agent behavior, performance, and execution paths.",
  },
  {
    icon: CheckCircle2,
    title: "Compliance Ready",
    description:
      "Designed to support enterprise governance and regulatory requirements.",
  },
  {
    icon: Shield,
    title: "Human Approval Flows",
    description:
      "Require approval before high-impact actions are executed.",
  },
];

export default function SecuritySection() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-32">

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto max-w-4xl text-center">

          <div className="mb-6 inline-flex rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-400">
            Security & Governance
          </div>

          <h2 className="text-5xl font-bold text-white">
            Enterprise Security By Design
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            NamariOS was built for organizations where reliability,
            governance, and operational control are non-negotiable.
          </p>

        </div>

        {/* Security Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {securityFeatures.map((feature, index) => {
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
                className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm hover:border-indigo-500/30 transition-all"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10">

                  <Icon
                    size={28}
                    className="text-indigo-400"
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

        {/* Trust Panel */}

        <div className="mt-24 rounded-3xl border border-indigo-500/20 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 p-12">

          <div className="grid gap-10 lg:grid-cols-2">

            <div>
              <h3 className="text-3xl font-bold text-white">
                Built For Mission-Critical Operations
              </h3>

              <p className="mt-6 text-slate-400 leading-8">
                Autonomous voice agents require more than intelligence.
                They require governance, accountability, transparency,
                and control. NamariOS provides the foundation needed
                to deploy AI responsibly at enterprise scale.
              </p>
            </div>

            <div className="grid gap-4">

              <div className="rounded-xl bg-slate-900 p-5">
                ✓ Secure Runtime Environment
              </div>

              <div className="rounded-xl bg-slate-900 p-5">
                ✓ Governance Layer
              </div>

              <div className="rounded-xl bg-slate-900 p-5">
                ✓ Real-Time Monitoring
              </div>

              <div className="rounded-xl bg-slate-900 p-5">
                ✓ Human Oversight Controls
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}