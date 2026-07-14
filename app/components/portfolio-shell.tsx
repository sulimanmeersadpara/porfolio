"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import {
  FaBars,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTimes,
} from "react-icons/fa";
import { MdAutoAwesome, MdOutlineRocketLaunch, MdWorkOutline } from "react-icons/md";

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

export function PortfolioShell({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
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
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(201,162,90,0.18),_transparent_36%),radial-gradient(circle_at_90%_10%,_rgba(242,210,138,0.14),_transparent_28%),linear-gradient(135deg,_#000000_0%,_#0f0f0f_50%,_#050505_100%)] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-24 h-64 w-64 rounded-full bg-[#C9A25A]/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[#F2D28A]/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[#9A7235]/15 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
        <nav className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[#C9A25A]/40 bg-black/80 px-4 py-3 backdrop-blur-2xl transition-all duration-300 sm:px-6 ${scrolled ? "shadow-[0_20px_70px_rgba(201,162,90,0.18)]" : "shadow-[0_12px_60px_rgba(0,0,0,0.25)]"}`}>
          <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-[0.32em] text-[#F2D28A]">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A25A] bg-[#111111] text-base font-semibold text-white">
              SM
            </span>
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
            <button type="button" onClick={() => setMenuOpen((prev) => !prev)} className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A25A]/40 bg-[#111111] text-[#F2D28A] lg:hidden" aria-label="Toggle navigation">
              {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.25 }} className="fixed inset-0 z-40 bg-black/90 px-6 py-8 backdrop-blur-xl lg:hidden">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-lg font-semibold tracking-[0.3em] text-[#F2D28A]" onClick={() => setMenuOpen(false)}>
                SULIMAN MEER
              </Link>
              <button type="button" onClick={() => setMenuOpen(false)} className="rounded-full border border-[#C9A25A]/40 p-3 text-[#F2D28A]">
                <FaTimes size={18} />
              </button>
            </div>
            <div className="mt-10 flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.div key={item.href} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.06 * index }}>
                  <Link href={item.href} onClick={() => setMenuOpen(false)} className={`block rounded-2xl border px-4 py-4 text-lg font-medium ${isActive(pathname, item.href) ? "border-[#C9A25A]/50 bg-[#111111] text-[#F2D28A]" : "border-white/10 bg-white/5 text-white/80"}`}>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mt-10 rounded-3xl border border-[#C9A25A]/20 bg-[#111111] p-5 text-white">
              <p className="text-sm uppercase tracking-[0.28em] text-[#D8B36A]">Available for new projects</p>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="mt-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C9A25A] to-[#9A7235] px-4 py-2 font-semibold text-black">
                <FaEnvelope /> Start a conversation
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <main className="relative px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-10">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="mx-auto flex max-w-7xl flex-col gap-8">
          <div className="flex items-center gap-3 self-start rounded-full border border-[#C9A25A]/30 bg-black/70 px-4 py-2 text-sm font-medium text-[#F2D28A] shadow-sm backdrop-blur">
            <MdAutoAwesome className="text-[#C9A25A]" />
            {eyebrow ?? "Full Stack Developer"}
          </div>

          <div className="rounded-[32px] border border-[#C9A25A]/20 bg-[#0B0B0B]/90 p-6 shadow-[0_30px_120px_rgba(201,162,90,0.14)] backdrop-blur-xl sm:p-8 lg:p-12">
            <div className="mb-6 flex flex-col gap-2 border-b border-[#C9A25A]/20 pb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#D8B36A]">{title}</p>
              <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">Built with precision, delivered with purpose.</h1>
            </div>
            {children}
          </div>
        </motion.div>
      </main>

      <footer className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[32px] border border-[#C9A25A]/20 bg-[#050505] px-6 py-8 text-white shadow-[0_24px_100px_rgba(0,0,0,0.3)] sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A25A] bg-[#111111] text-sm font-semibold text-[#F2D28A]">SM</span>
              <div>
                <p className="text-lg font-semibold">Suliman Meer</p>
                <p className="text-sm text-[#D8B36A]">Full Stack Developer</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-white/70">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-[#F2D28A]">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="https://github.com/sulimanmeersadpara" target="_blank" rel="noreferrer" className="rounded-full border border-[#C9A25A]/30 p-3 text-[#D8B36A] transition hover:border-[#F2D28A] hover:text-[#F2D28A]">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/salman-meer-07b48b365/" target="_blank" rel="noreferrer" className="rounded-full border border-[#C9A25A]/30 p-3 text-[#D8B36A] transition hover:border-[#F2D28A] hover:text-[#F2D28A]">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#D8B36A]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-white/75">{description}</p>
    </div>
  );
}

export function GlassCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-[28px] border border-[#C9A25A]/20 bg-[#111111]/90 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl ${className}`}>{children}</div>;
}

export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[24px] border border-[#C9A25A]/20 bg-[#050505] p-6 text-white shadow-[0_20px_70px_rgba(0,0,0,0.25)]">
      <p className="text-3xl font-semibold text-[#F2D28A]">{value}</p>
      <p className="mt-2 text-sm uppercase tracking-[0.28em] text-[#D8B36A]">{label}</p>
    </div>
  );
}

export function PagePill({ children }: { children: ReactNode }) {
  return <span className="inline-flex items-center gap-2 rounded-full border border-[#C9A25A]/30 bg-[#111111] px-3 py-1 text-sm font-medium text-[#F2D28A]"> <MdOutlineRocketLaunch /> {children}</span>;
}

export function TimelineIcon() {
  return <MdWorkOutline className="text-[#C9A25A]" />;
}

export function ContactDetails() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 rounded-2xl border border-[#C9A25A]/20 bg-[#050505] p-4 shadow-sm">
        <FaPhoneAlt className="text-[#C9A25A]" />
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-[#D8B36A]">Phone (WhatsApp)</p>
          <a href="tel:+923117480168" className="font-medium text-white">+92 311 7480168</a>
        </div>
      </div>
      <div className="flex items-center gap-3 rounded-2xl border border-[#C9A25A]/20 bg-[#050505] p-4 shadow-sm">
        <FaPhoneAlt className="text-[#C9A25A]" />
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-[#D8B36A]">Phone (Calls)</p>
          <a href="tel:+923376393423" className="font-medium text-white">+92 337 6393423</a>
        </div>
      </div>
      <div className="flex items-center gap-3 rounded-2xl border border-[#C9A25A]/20 bg-[#050505] p-4 shadow-sm">
        <FaEnvelope className="text-[#C9A25A]" />
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-[#D8B36A]">Email</p>
          <a href="mailto:sulimanmeersadpara@gmail.com" className="font-medium text-white">sulimanmeersadpara@gmail.com</a>
        </div>
      </div>
      <div className="flex items-center gap-3 rounded-2xl border border-[#C9A25A]/20 bg-[#050505] p-4 shadow-sm">
        <FaMapMarkerAlt className="text-[#C9A25A]" />
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-[#D8B36A]">Location</p>
          <p className="font-medium text-white">Johar Town, Lahore</p>
        </div>
      </div>
    </div>
  );
}
