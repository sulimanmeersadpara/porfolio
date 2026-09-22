"use client";

import { type ReactNode } from "react";
import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";

export function scrollToSection(event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) {
  event.preventDefault();
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
}

export function PortfolioShell({
  title,
  children,
  heading,
}: {
  title: string;
  heading?: string;
  children: ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,_rgba(0,37,91,0.12),_transparent_36%),radial-gradient(circle_at_90%_10%,_rgba(0,37,91,0.08),_transparent_28%),linear-gradient(135deg,_#ffffff_0%,_#f5f8fc_50%,_#ffffff_100%)] text-[#00255B]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-24 h-64 w-64 rounded-full bg-[#00255B]/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[#00255B]/8 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[#00255B]/8 blur-3xl" />
      </div>

      <main className="relative min-w-0 px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pt-8">
        <div className="mx-auto flex max-w-7xl min-w-0 flex-col gap-[10px]">
          <div className="rounded-[10px] border border-[#00255B]/15 bg-white/95 p-5 shadow-[0_30px_120px_rgba(0,37,91,0.12)] backdrop-blur-xl sm:p-8 lg:p-10">
            {title ? (
            <div className="mb-6 flex flex-col gap-2 border-b border-[#00255B]/15 pb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#00255B]">{title}</p>
              <h1 className="max-w-3xl text-2xl font-semibold tracking-tight text-[#00255B] md:text-3xl lg:text-4xl">{heading}</h1>
            </div>
          ) : null}
            {children}
          </div>
        </div>
      </main>

      <footer className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[10px] border border-[#00255B]/15 bg-[#00255B] px-6 py-8 text-white shadow-[0_24px_100px_rgba(0,37,91,0.2)] sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/favicon.png" alt="Muhammad Suliman Meer logo" width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold">Muhammad Suliman Meer</p>
                <p className="text-sm text-white/75">Full Stack Software Engineer</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://github.com/sulimanmeersadpara" target="_blank" rel="noreferrer" className="rounded-full border border-white/30 p-3 text-white transition hover:border-white hover:bg-white hover:text-[#00255B]">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/salman-meer-07b48b365/" target="_blank" rel="noreferrer" className="rounded-full border border-white/30 p-3 text-white transition hover:border-white hover:bg-white hover:text-[#00255B]">
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
    
    <div className="w-full">
      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#00255B]">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#00255B] md:text-3xl lg:text-4xl">{title}</h2>
      <p className="mt-[5px] text-sm leading-6 text-[#00255B]/70 sm:text-base lg:text-lg">{description}</p>
  
    </div>
  );
}

export function GlassCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`w-full overflow-hidden rounded-[10px] border border-[#00255B]/15 bg-white/95 p-6 text-[#00255B] shadow-[0_20px_70px_rgba(0,37,91,0.12)] backdrop-blur-xl ${className}`}>{children}</div>;
}

export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="w-full overflow-hidden rounded-[10px] border border-[#00255B]/15 bg-[#00255B] p-6 text-white shadow-[0_20px_70px_rgba(0,37,91,0.16)]">
      <p className="text-xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm uppercase tracking-[0.28em] text-white/75">{label}</p>
    </div>
  );
}

export function PagePill({ children }: { children: ReactNode }) {
  return <span className="inline-flex items-center rounded-full border border-[#00255B]/20 bg-white px-3 py-1 text-sm font-medium text-[#00255B]">{children}</span>;
}

export function TimelineIcon() {
  return <MdWorkOutline className="text-[#00255B]" />;
}

export function ContactDetails() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 rounded-[10px] border border-[#00255B]/15 bg-white p-4 shadow-sm">
        <FaPhoneAlt className="text-[#00255B]" />
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-[#00255B]">Phone</p>
          <a href="tel:+923117480168" className="font-medium text-[#00255B]">+92 311 7480168</a>
        </div>
      </div>
      <div className="flex items-center gap-3 rounded-[10px] border border-[#00255B]/15 bg-white p-4 shadow-sm">
        <FaEnvelope className="text-[#00255B]" />
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-[#00255B]">Email</p>
          <a href="mailto:sulimanmeersadpara@gmail.com" className="font-medium text-[#00255B]">sulimanmeersadpara@gmail.com</a>
        </div>
      </div>
      <div className="flex items-center gap-3 rounded-[10px] border border-[#00255B]/15 bg-white p-4 shadow-sm">
        <FaMapMarkerAlt className="text-[#00255B]" />
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-[#00255B]">Location</p>
          <p className="font-medium text-[#00255B]">Lahore, Pakistan</p>
        </div>
      </div>
    </div>
  );
}
