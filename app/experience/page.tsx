"use client";

import { motion } from "framer-motion";
import { FaCode, FaRocket } from "react-icons/fa";
import { PortfolioShell, SectionTitle } from "../components/portfolio-shell";

export default function ExperiencePage() {
  return (
    <PortfolioShell title="" eyebrow="Professional growth">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionTitle eyebrow="Experience" title="Building Production-Ready Applications using Python Django, React.js and Next.js" description="My journey has been shaped by hands-on learning, real project work, and steady growth in full stack development." />

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[28px] border border-[#C9A25A]/20 bg-[#111111]/90 p-6 shadow-[0_18px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl">
          <div className="flex items-center gap-2 text-[#D8B36A]">
            <FaRocket />
            <p className="text-sm font-semibold uppercase tracking-[0.28em]">4xcode Software House</p>
          </div>

          <h3 className="mt-4 text-2xl font-semibold text-white">Internship and Current Job</h3>
          <p className="mt-3 text-lg leading-8 text-white/75">I completed my internship at 4xcode and am currently working there as a Full Stack Developer. During this time, I have gained practical experience in building modern web applications and contributing to real client-focused products.</p>

          <div className="mt-6 rounded-2xl border border-[#C9A25A]/20 bg-[#050505] p-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#D8B36A]">What I have developed</p>
            <p className="mt-3 text-sm leading-7 text-white/70">I have spent years learning programming through logical practice, DSA, OOP, web development, backend development, and project-based work. This experience has helped me improve my problem-solving skills and build dependable solutions for real-world needs.</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {['Django', 'Next.js', 'React.js', 'Tailwind CSS', 'DSA', 'OOP'].map((tech) => (
              <span key={tech} className="rounded-full border border-[#C9A25A]/30 bg-[#050505] px-3 py-1 text-sm text-[#F2D28A]">{tech}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </PortfolioShell>
  );
}
