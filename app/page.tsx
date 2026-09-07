"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin, FaRocket, FaSmileBeam } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
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
  const cvUrl = "/SulimanMeerCV.pdf";

  return (
    <PortfolioShell title="" eyebrow="Full Stack Developer">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center w-full">
        <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="space-y-8 min-w-0">
          <div className="space-y-5">
            <PagePill>Python Django | Next.js | React.js</PagePill>
            <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-[#00255B] sm:text-5xl lg:text-6xl">SULIMAN MEER</h2>
            <p className="max-w-xl text-lg leading-8 text-[#00255B]/70">Full Stack Developer with hands-on experience building production-ready web applications using Python Django, React.js, and Next.js.</p>
          </div>

          <div className="w-full max-w-full overflow-hidden min-w-0 sm:max-w-none">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap min-w-0">
              <Link href="#projects" className="inline-flex min-w-0 w-full max-w-full items-center justify-center gap-2 rounded-[8px] bg-[#00255B] px-5 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_35px_rgba(0,37,91,0.25)] sm:w-auto">
                Explore projects <FaArrowRight />
              </Link>
              <Link href="#about" className="inline-flex min-w-0 w-full max-w-full items-center justify-center gap-2 rounded-[8px] border border-[#00255B]/20 bg-white px-5 py-3 font-semibold text-[#00255B] transition duration-300 hover:-translate-y-0.5 hover:border-[#00255B] sm:w-auto">
                <FaSmileBeam /> Learn more
              </Link>
       
            </div>
          </div>

         

          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>

          <div className="rounded-[10px] border border-[#00255B]/15 bg-white p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00255B]">Core skill set</p>
                <p className="mt-2 text-sm text-[#00255B]/65">Modern-friendly technologies and professional strengths</p>
              </div>
              <Link href="#skills" className="text-sm font-semibold text-[#00255B] transition hover:text-[#00255B]/70">
                View full skills
              </Link>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {skillsPreview.map((skill) => (
                <span key={skill} className="rounded-full border border-[#00255B]/15 bg-[#00255B]/5 px-3 py-1 text-sm text-[#00255B]">
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
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00255B]">Open to Opportunities</p>
                  <p className="mt-2 text-2xl font-semibold text-[#00255B]">Full Stack Developer</p>
                  <p className="mt-1 text-sm text-[#00255B]/65">Python · Django · Next.js</p>
                </div>
                <div className="rounded-[8px] border border-[#00255B]/20 bg-[#00255B] p-3 text-white">
                  <FaRocket size={18} />
                </div>
              </div>
              <div className="relative h-[300] overflow-hidden rounded-[10px] border border-[#00255B]/15 bg-[#00255B] ">
               <img
                  src="/SM big.png"
                  alt="Suliman Meer"
                  className="absolute inset-6 h-full rounded-[10px] object-contain object-center shadow-[0_20px_60px_rgba(0,37,91,0.2)]"
                />
              </div>
              <div className="flex items-center gap-3">
              
                 <div className="flex flex-wrap w-full justify-center items-center gap-3 pt-1">
            <a
              href="https://github.com/sulimanmeersadpara"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#00255B]/20 bg-white text-[#00255B] transition duration-300 hover:-translate-y-0.5 hover:border-[#00255B] hover:bg-[#00255B] hover:text-white hover:shadow-[0_12px_30px_rgba(0,37,91,0.18)]"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/salman-meer-07b48b365/"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#00255B]/20 bg-white text-[#00255B] transition duration-300 hover:-translate-y-0.5 hover:border-[#00255B] hover:bg-[#00255B] hover:text-white hover:shadow-[0_12px_30px_rgba(0,37,91,0.18)]"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
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
