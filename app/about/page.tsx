"use client";

import { motion } from "framer-motion";
import { FaCode, FaGraduationCap, FaHeart, FaRocket, FaUser } from "react-icons/fa";
import { PortfolioShell, SectionTitle, GlassCard, StatCard } from "../components/portfolio-shell";

const highlights = [
  { value: "26", label: "Years old" },
  { value: "2025", label: "BS completed" },
  { value: "4xcode", label: "Current workplace" },
  { value: "Skardu → Lahore", label: "Based in" },
];

const journey = [
  { title: "Full stack delivery", text: "I build complete web solutions from UI to backend services." },
  { title: "Reliable product work", text: "I focus on clean architecture, reusable components, and maintainable code." },
  { title: "User-first thinking", text: "Every product I build is shaped for speed, clarity, and a strong experience." },
];

export default function AboutPage() {
  return (
    <PortfolioShell title="About" eyebrow="Full Stack Developer">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
          <SectionTitle eyebrow="Professional profile" title="Building polished digital products with strong engineering discipline." description="I’m Suliman Meer, a Full Stack Developer from Skardu currently based in Lahore. I’m 26 years old and completed my BS in Computer Science from the University of Baltistan in 2025." />
          <GlassCard className="space-y-6">
            <div className="flex items-center gap-3 text-[#D8B36A]">
              <FaUser size={20} />
              <p className="text-sm font-semibold uppercase tracking-[0.28em]">Biography</p>
            </div>
            <p className="text-lg leading-8 text-white/75">My work blends modern frontend development, scalable backend logic, and thoughtful product execution. I enjoy turning ideas into reliable systems that feel fast, clean, and professional.</p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-[#C9A25A]/20 bg-[#050505] p-4">
                <p className="text-sm uppercase tracking-[0.28em] text-[#D8B36A]">Core stack</p>
                <p className="mt-2 font-semibold text-white">Python Django, Next.js, React.js</p>
              </div>
              <div className="rounded-2xl border border-[#C9A25A]/20 bg-[#050505] p-4">
                <p className="text-sm uppercase tracking-[0.28em] text-[#D8B36A]">Approach</p>
                <p className="mt-2 font-semibold text-white">Thoughtful, production-ready, and user-focused</p>
              </div>
            </div>
            <div className="rounded-2xl border border-[#C9A25A]/20 bg-[#050505] p-4">
              <p className="text-sm uppercase tracking-[0.28em] text-[#D8B36A]">Selected skills</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Python', 'JavaScript', 'React.js', 'Next.js', 'Django', 'DRF', 'Tailwind CSS', 'SQL', 'GitHub'].map((skill) => (
                  <span key={skill} className="rounded-full border border-[#C9A25A]/20 px-3 py-1 text-sm text-[#F2D28A]">{skill}</span>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
          <GlassCard className="space-y-6">
            <div className="flex items-center gap-3 text-[#D8B36A]">
              <FaGraduationCap size={20} />
              <p className="text-sm font-semibold uppercase tracking-[0.28em]">Education</p>
            </div>
            <div className="rounded-2xl border border-[#C9A25A]/20 bg-[#050505] p-5">
              <p className="font-semibold text-white">BS in Computer Science</p>
              <p className="mt-2 text-white/70">University of Baltistan · Completed in 2025</p>
            </div>
            <div className="rounded-2xl border border-[#C9A25A]/20 bg-[#050505] p-5">
              <p className="font-semibold text-white">Currently working at 4xcode Software House</p>
              <p className="mt-2 text-white/70">Serving as a Full Stack Developer and contributing to production-ready digital products.</p>
            </div>
          </GlassCard>

          <div className="grid gap-4 sm:grid-cols-2">{highlights.map((item) => <StatCard key={item.label} value={item.value} label={item.label} />)}</div>
        </motion.div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <GlassCard className="space-y-5">
          <div className="flex items-center gap-3 text-[#D8B36A]">
            <FaRocket size={18} />
            <p className="text-sm font-semibold uppercase tracking-[0.28em]">Career objective</p>
          </div>
          <p className="text-lg leading-8 text-white/75">I’m focused on building reliable digital products for companies that value modern engineering, thoughtful UX, and dependable delivery while continuing to grow as a full stack developer.</p>
        </GlassCard>

        <GlassCard className="space-y-5">
          <div className="flex items-center gap-3 text-[#D8B36A]">
            <FaHeart size={18} />
            <p className="text-sm font-semibold uppercase tracking-[0.28em]">What drives me</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {journey.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#C9A25A]/20 bg-[#050505] p-4">
                <div className="flex items-center gap-2 text-[#F2D28A]"><FaCode /> <span className="font-semibold">{item.title}</span></div>
                <p className="mt-2 text-sm leading-7 text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </PortfolioShell>
  );
}
