"use client";

import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaLayerGroup, FaTools } from "react-icons/fa";
import { PortfolioShell, SectionTitle, GlassCard } from "../components/portfolio-shell";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: FaCode,
    description: "Python, JavaScript, C++",
    items: ["Python", "JavaScript", "C++"],
  },
  {
    title: "Frontend",
    icon: FaLayerGroup,
    description: "React.js, Next.js, Tailwind CSS, MUI, HTML5, CSS3",
    items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Material UI (MUI)"],
  },
  {
    title: "Backend",
    icon: FaCode,
    description: "Django, Django REST Framework, FastAPI, SQLAlchemy",
    items: ["Django", "FastAPI", "Django REST Framework (DRF)", "RESTful API Development", "Object-Oriented Programming (OOP)"],
  },
  {
    title: "Database & Tools",
    icon: FaDatabase,
    description: "MySQL, PostgreSQL, SQLite, Git, GitHub, Postman",
    items: ["MySQL", "PostgreSQL", "SQLite", "Git", "GitHub", "Postman"],
  },
  {
    title: "Professional Skills",
    icon: FaTools,
    description: "Problem Solving, Team Collaboration, API Integration, Debugging, Clean Code",
    items: ["Problem Solving", "Team Collaboration", "API Integration", "Debugging", "Clean Code"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-28">
      <div className="space-y-[10px]">
        <SectionTitle eyebrow="Technical overview" title="Core Skills and Strengths" description="My main skills are focused on full-stack web development, with a strong focus on Python backend development and modern JavaScript frontend technologies." />

        <div className="grid gap-[10px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
                  <div className="flex items-center gap-3 text-[#00255B]">
                    <Icon size={18} />
                    <h3 className="text-2xl font-semibold text-[#00255B] md:text-3xl lg:text-4xl">{group.title}</h3>
                  </div>
                  <p className="mt-[5px] text-sm leading-6 text-[#00255B]/65 sm:text-base lg:text-lg">{group.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-[#00255B]/15 bg-[#00255B]/5 px-3 py-1 text-sm text-[#00255B]">
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
    </section>
  );
}

export default function SkillsPage() {
  return (
    <PortfolioShell title="Skills" heading="Core Skills and Technologies">
      <SkillsSection />
    </PortfolioShell>
  );
}
