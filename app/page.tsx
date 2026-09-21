"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { PortfolioShell, GlassCard, PagePill, scrollToSection, StatCard } from "./components/portfolio-shell";
import { AboutSection } from "./about/page";
import { ExperienceSection } from "./experience/page";
import { ProjectsSection } from "./projects/page";
import { SkillsSection } from "./skills/page";
import { ContactSection } from "./contact/page";

const stats = [
  { value: "Python", label: "Backend Development" },
  { value: "Next.js", label: "Frontend Development" },
  { value: "SQL", label: "Databases" },
];

const skillsPreview = ["Python", "Django", "Next.js", "React.js", "REST APIs", "SQL", "Git & GitHub"];

export default function Home() {
  return (
    <PortfolioShell title="">
      <div className="grid w-full items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="min-w-0 space-y-8">
          <div className="space-y-5">
            <PagePill>Full Stack Software Engineer</PagePill>
            <h2 className="max-w-2xl  font-semibold  text-4xl text-[#00255B]">Muhammad Suliman Meer</h2>
            <p className="max-w-xl text-sm leading-6 text-[#00255B]/70">Full Stack Software Engineer working with Django, FastAPI, Next.js, React.js, and SQL databases to build reliable and user-friendly web applications.</p>
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
                <p className="mt-2 text-sm text-[#00255B]/65">Python backend development and modern JavaScript frontend technologies</p>
              </div>

            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {skillsPreview.map((skill) => (
                <span key={skill} className="rounded-full border border-[#00255B]/15 bg-[#00255B]/5 px-3 py-1 text-sm text-[#00255B]">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative min-w-0">
          <GlassCard className="relative h-full overflow-hidden p-0">
            <div className="absolute inset-0" />
            <div className="relative grid h-full gap-6 p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00255B]">Open to Opportunities</p>
                  <p className="mt-2 text-xl font-semibold text-[#00255B]">Full Stack Software Engineer</p>
                  <p className="mt-1 text-sm text-[#00255B]/65">Python · Django · FastAPI · Next.js · React.js</p>
                </div>
              </div>
              <div className="relative h-[300px] overflow-hidden rounded-[10px] border border-[#00255B]/15 bg-[#00255B]">
               <img
                  src="/SM big.png"
                  alt="Muhammad Suliman Meer"
                  className="absolute inset-6 h-[calc(100%)] w-[calc(100%)] rounded-[10px] object-contain object-center shadow-[0_20px_60px_rgba(0,37,91,0.2)]"
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

      <div className="mt-10 space-y-12 sm:mt-14 sm:space-y-16">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </PortfolioShell>
  );
}
