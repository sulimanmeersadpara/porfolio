"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaBars, FaDownload, FaEnvelope, FaTimes } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 px-4 py-1 sm:px-6 lg:px-8">
      <nav className={`mx-auto flex max-w-7xl items-center justify-between rounded-[10px] border border-[#00255B]/20 bg-white/95 px-4 py-3 transition-all duration-300 sm:px-6 ${scrolled ? "shadow-[0_20px_70px_rgba(0,37,91,0.16)]" : "shadow-[0_12px_60px_rgba(0,37,91,0.08)]"}`}>
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-[0.32em] text-[#00255B]">
          <Image src="/favicon.png" alt="Suliman Meer logo" width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
          <span className="hidden sm:inline">SULIMAN MEER</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-[#00255B]/80 transition-colors duration-300 hover:text-[#00255B]"
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/SulimanMeerCV.pdf"
            download="SulimanMeerCV.pdf"
            className="hidden rounded-[8px] border border-[#00255B]/20 bg-white px-4 py-2 text-sm font-semibold text-[#00255B] transition duration-300 hover:-translate-y-0.5 hover:border-[#00255B] hover:bg-[#00255B]/5 sm:inline-flex"
          >
            <span className="inline-flex items-center gap-2"><FaDownload /> Download CV</span>
          </a>
        <Link
  href="#contact"
  className="hidden rounded-[8px] border border-[#00255B] bg-[#00255B] px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_35px_rgba(0,37,91,0.25)] sm:inline-flex flex items-center gap-2"
>
  <FaPhone className="scale-x-[-1]" />
  Contact Me
</Link>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-[8px] border border-[#00255B]/30 bg-white text-[#00255B] lg:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div className="fixed inset-0 z-40 bg-white/95 px-6 py-8 backdrop-blur-xl lg:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg font-semibold tracking-[0.3em] text-[#00255B]" onClick={() => setMenuOpen(false)}>
              SULIMAN MEER
            </Link>
            <button type="button" onClick={() => setMenuOpen(false)} className="rounded-[8px] border border-[#00255B]/30 p-3 text-[#00255B]">
              <FaTimes size={18} />
            </button>
          </div>
          <div className="mt-10 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-[8px] border border-[#00255B]/15 bg-white px-4 py-4 text-lg font-medium text-[#00255B]/80"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-10 rounded-[10px] border border-[#00255B]/15 bg-[#00255B] p-5 text-white">
            <p className="text-sm uppercase tracking-[0.28em] text-white/75">Available for new projects</p>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" onClick={() => setMenuOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-white px-4 py-2 font-semibold text-[#00255B]">
                <FaEnvelope /> Start a conversation
              </Link>
              <a
                href="/SulimanMeerCV.pdf"
                download="SulimanMeerCV.pdf"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-white/40 bg-white/10 px-4 py-2 font-semibold text-white"
              >
                <FaDownload /> Download CV
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
