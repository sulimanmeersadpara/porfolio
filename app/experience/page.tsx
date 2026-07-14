"use client";

import { motion } from "framer-motion";
import { FaCode, FaServer, FaStar } from "react-icons/fa";
import { PortfolioShell, SectionTitle, GlassCard, TimelineIcon } from "../components/portfolio-shell";

const experiences = [
  {
    company: "4xcode IT Company",
    role: "Full Stack Web Developer",
    period: "2022 — Present",
    tech: ["Next.js", "Django", "React.js", "Tailwind CSS"],
    responsibilities: [
      "Developed responsive web applications using Next.js from Figma designs.",
      "Integrated REST APIs and dynamic JSON data into production features.",
      "Built Django REST APIs for blog management and content workflows.",
      "Created reusable UI components and collaborated on delivery-ready products.",
    ],
    achievements: [
      "Delivered polished, responsive interfaces for client business websites.",
      "Contributed to production-ready applications with strong frontend and backend integration.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <PortfolioShell title="Experience" eyebrow="Professional growth">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionTitle eyebrow="Journey" title="Building modern web solutions from idea to launch." description="My experience combines frontend refinement, backend logic, and practical implementation for real business needs." />
        <div className="space-y-6">
          {experiences.map((item, index) => (
            <motion.div key={item.company} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -6, scale: 1.01 }} className="rounded-[28px] border border-[#C9A25A]/20 bg-[#111111]/90 p-6 shadow-[0_18px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[#D8B36A]">
                    <TimelineIcon />
                    <p className="text-sm font-semibold uppercase tracking-[0.28em]">{item.period}</p>
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{item.role}</h3>
                  <p className="mt-1 text-lg font-medium text-white/75">{item.company}</p>
                </div>
                <div className="flex flex-wrap gap-2">{item.tech.map((tech) => <span key={tech} className="rounded-full border border-[#C9A25A]/30 bg-[#050505] px-3 py-1 text-sm text-[#F2D28A]">{tech}</span>)}</div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-[#C9A25A]/20 bg-[#050505] p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#D8B36A]">Responsibilities</p>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-white/70">
                    {item.responsibilities.map((responsibility) => <li key={responsibility} className="flex gap-2"><FaCode className="mt-1 text-[#C9A25A]" /> {responsibility}</li>)}
                  </ul>
                </div>
                <div className="rounded-2xl border border-[#C9A25A]/20 bg-[#050505] p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#D8B36A]">Highlights</p>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-white/70">
                    {item.achievements.map((achievement) => <li key={achievement} className="flex gap-2"><FaStar className="mt-1 text-[#F2D28A]" /> {achievement}</li>)}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PortfolioShell>
  );
}
