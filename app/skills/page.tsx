"use client";

import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaLayerGroup, FaTools } from "react-icons/fa";
import { PortfolioShell, SectionTitle, GlassCard } from "../components/portfolio-shell";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: FaCode,
    items: ["Python", "JavaScript", "C++", "SQL"],
  },
  {
    title: "Frontend",
    icon: FaLayerGroup,
    items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Material UI (MUI)"],
  },
  {
    title: "Backend",
    icon: FaCode,
    items: ["Django", "Django REST Framework (DRF)", "RESTful API Development", "Object-Oriented Programming (OOP)"],
  },
  {
    title: "Database & Tools",
    icon: FaDatabase,
    items: ["SQL Databases", "Git", "GitHub"],
  },
  {
    title: "Professional Skills",
    icon: FaTools,
    items: ["Responsive Web Development", "Full Stack Development", "Problem Solving"],
  },
];

export default function SkillsPage() {
  return (
    <PortfolioShell title="Skills" eyebrow="Technical strengths">
      <div className="space-y-8">
        <SectionTitle
          eyebrow="Recruiter-friendly overview"
          title="A clear, structured view of my technical and professional capabilities."
          description="These are the core skills I use to build modern, scalable, and production-ready web applications."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <GlassCard className="h-full">
                  <div className="flex items-center gap-3 text-[#D8B36A]">
                    <Icon size={18} />
                    <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-[#C9A25A]/20 bg-[#050505] px-3 py-1 text-sm text-[#F2D28A]">
                        {item}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </PortfolioShell>
  );
}
