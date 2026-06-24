export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#050816]">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-5">

          {/* Brand */}

          <div className="lg:col-span-2">

            <h3 className="text-3xl font-bold text-white">
              NamariOS
            </h3>

            <p className="mt-6 max-w-md leading-7 text-slate-400">
              The Voice Kernel for Enterprise AI.
              Deploy, orchestrate, and scale autonomous
              voice intelligence with enterprise-grade
              reliability.
            </p>

          </div>

          {/* Platform */}

          <div>

            <h4 className="font-semibold text-white">
              Platform
            </h4>

            <ul className="mt-6 space-y-4 text-slate-400">
              <li>NamariOS</li>
              <li>NamariFlow</li>
              <li>Security</li>
              <li>Architecture</li>
            </ul>

          </div>

          {/* Resources */}

          <div>

            <h4 className="font-semibold text-white">
              Resources
            </h4>

            <ul className="mt-6 space-y-4 text-slate-400">
              <li>Documentation</li>
              <li>Developers</li>
              <li>Research</li>
              <li>Blog</li>
            </ul>

          </div>

          {/* Company */}

          <div>

            <h4 className="font-semibold text-white">
              Company
            </h4>

            <ul className="mt-6 space-y-4 text-slate-400">
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
              <li>Privacy</li>
            </ul>

          </div>

        </div>

        <div className="mt-16 border-t border-slate-800 pt-8">

          <div className="flex flex-col gap-4 md:flex-row md:justify-between">

            <p className="text-slate-500">
              © 2025–2026 NamariOS. All rights reserved.
            </p>

            <p className="text-slate-500">
              Founded in 2025
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}