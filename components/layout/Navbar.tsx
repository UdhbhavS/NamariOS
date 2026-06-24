"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () =>
      setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all ${
        scrolled
          ? "border-b border-slate-800 bg-[#050816]/80 backdrop-blur-xl"
          : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-2xl font-bold text-white"
        >
          NamariOS
        </Link>

        <div className="hidden gap-8 lg:flex">
          <Link href="/platform">Platform</Link>
          <Link href="/namariflow">NamariFlow</Link>
          <Link href="/security">Security</Link>
          <Link href="/company">Company</Link>
        </div>

        <button className="rounded-xl bg-indigo-600 px-5 py-3 text-white">
          Request Demo
        </button>
      </nav>
    </header>
  );
}