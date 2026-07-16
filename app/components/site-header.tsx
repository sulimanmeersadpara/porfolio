"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars, FaEnvelope, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === href;
  }
  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
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
    <header className="sticky top-0 z-50 bg-black w-full px-4 py-1 sm:px-6 lg:px-8">
      <nav className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[#C9A25A]/40 bg-black/80 px-4 py-3 transition-all duration-300 sm:px-6 ${scrolled ? "shadow-[0_20px_70px_rgba(201,162,90,0.18)]" : "shadow-[0_12px_60px_rgba(0,0,0,0.25)]"}`}>
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-[0.32em] text-[#F2D28A]">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A25A] bg-[#111111] text-base font-semibold text-white">SM</span>
          <span className="hidden sm:inline">SULIMAN MEER</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-colors duration-300 ${active ? "text-[#F2D28A]" : "text-white/80 hover:text-[#F2D28A]"}`}
              >
                {item.label}
                {active ? <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[#C9A25A]" /> : null}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden rounded-full border border-[#C9A25A] bg-gradient-to-r from-[#C9A25A] to-[#9A7235] px-4 py-2 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_35px_rgba(201,162,90,0.25)] sm:inline-flex">
            Contact Me
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A25A]/40 bg-[#111111] text-[#F2D28A] lg:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div className="fixed inset-0 z-40 bg-black/90 px-6 py-8 backdrop-blur-xl lg:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg font-semibold tracking-[0.3em] text-[#F2D28A]" onClick={() => setMenuOpen(false)}>
              SULIMAN MEER
            </Link>
            <button type="button" onClick={() => setMenuOpen(false)} className="rounded-full border border-[#C9A25A]/40 p-3 text-[#F2D28A]">
              <FaTimes size={18} />
            </button>
          </div>
          <div className="mt-10 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-2xl border px-4 py-4 text-lg font-medium ${isActive(pathname, item.href) ? "border-[#C9A25A]/50 bg-[#111111] text-[#F2D28A]" : "border-white/10 bg-white/5 text-white/80"}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-10 rounded-3xl border border-[#C9A25A]/20 bg-[#111111] p-5 text-white">
            <p className="text-sm uppercase tracking-[0.28em] text-[#D8B36A]">Available for new projects</p>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="mt-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C9A25A] to-[#9A7235] px-4 py-2 font-semibold text-black">
              <FaEnvelope /> Start a conversation
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
