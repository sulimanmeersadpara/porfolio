"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaLinkedin, FaRocket, FaSmileBeam } from "react-icons/fa";
import { PortfolioShell, GlassCard, PagePill, StatCard } from "./components/portfolio-shell";
import { AboutSection } from "./about/page";
import { ExperienceSection } from "./experience/page";
import { ProjectsSection } from "./projects/page";
import { SkillsSection } from "./skills/page";
import { ContactSection } from "./contact/page";

const stats = [
  { value: "Django", label: "Backend Framework" },
  { value: "Next.js", label: "Frontend Framework" },
  { value: "React", label: "Frontend Library" },
];

const skillsPreview = ["Python", "JavaScript", "React.js", "Next.js", "Django", "DRF", "Tailwind CSS", "SQL", "Git & GitHub"];

export default function Home() {
  return (
    <PortfolioShell title="" eyebrow="Full Stack Developer">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center w-full">
        <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="space-y-8 min-w-0">
          <div className="space-y-5">
            <PagePill>Python Django | Next.js | React.js</PagePill>
            <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">SULIMAN MEER</h2>
            <p className="max-w-xl text-lg leading-8 text-white/75">Full Stack Developer with hands-on experience building production-ready web applications using Python Django, React.js, and Next.js.</p>
          </div>

          <div className="w-full max-w-full overflow-hidden min-w-0 sm:max-w-none">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap min-w-0">
              <Link href="#projects" className="inline-flex min-w-0 w-full max-w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#C9A25A] to-[#9A7235] px-5 py-3 font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_35px_rgba(201,162,90,0.25)] sm:w-auto">
                Explore projects <FaArrowRight />
              </Link>
              <Link href="#about" className="inline-flex min-w-0 w-full max-w-full items-center justify-center gap-2 rounded-full border border-[#C9A25A]/30 bg-[#111111] px-5 py-3 font-semibold text-[#F2D28A] transition duration-300 hover:-translate-y-0.5 hover:border-[#F2D28A] sm:w-auto">
                <FaSmileBeam /> Learn more
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>

          <div className="rounded-[24px] border border-[#C9A25A]/20 bg-[#0B0B0B] p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#D8B36A]">Core skill set</p>
                <p className="mt-2 text-sm text-white/70">Modern-friendly technologies and professional strengths</p>
              </div>
              <Link href="#skills" className="text-sm font-semibold text-[#F2D28A] transition hover:text-white">
                View full skills
              </Link>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {skillsPreview.map((skill) => (
                <span key={skill} className="rounded-full border border-[#C9A25A]/20 bg-[#111111] px-3 py-1 text-sm text-[#F2D28A]">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative min-w-0">
          <GlassCard className="relative overflow-hidden p-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(201,162,90,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(242,210,138,0.2),_transparent_35%)]" />
            <div className="relative grid gap-6 p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#D8B36A]">Open to Opportunities</p>
                  <p className="mt-2 text-2xl font-semibold text-white">Full Stack Developer</p>
                  <p className="mt-1 text-sm text-white/70">Python · Django · Next.js</p>
                </div>
                <div className="rounded-2xl border border-[#C9A25A]/30 bg-[#111111] p-3 text-[#F2D28A]">
                  <FaRocket size={18} />
                </div>
              </div>
              <div className="relative h-[300] overflow-hidden rounded-[30px] border border-[#C9A25A]/20 bg-gradient-to-br from-[#111111] via-[#161616] to-[#6F4E1F] ">
               <img
                  src="/SM big.png"
                  alt="Suliman Meer"
                  className="absolute inset-6 h-full  rounded-[24px] object-contain object-center shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                />
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
          </GlassCard>
        </motion.div>
      </div>

      <div className="mt-24 space-y-24">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </PortfolioShell>
  );
}
