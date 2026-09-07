"use client";
//testing salman meer
import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";
import { PortfolioShell, SectionTitle } from "../components/portfolio-shell";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-28">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionTitle eyebrow="Experience" title="Building Production-Ready Applications using Python Django, React.js and Next.js" description="My journey has been shaped by hands-on learning, real project work, and steady growth in full stack development." />

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[10px] border border-[#00255B]/15 bg-white p-6 shadow-[0_18px_70px_rgba(0,37,91,0.12)] backdrop-blur-xl">
          <div className="flex items-center gap-2 text-[#00255B]">
            <FaRocket />
            <p className="text-sm font-semibold uppercase tracking-[0.28em]">4xcode Software House</p>
          </div>

          <h3 className="mt-4 text-2xl font-semibold text-[#00255B]">Internship and Current Job</h3>
          <p className="mt-3 text-lg leading-8 text-[#00255B]/70">I completed my internship at 4xcode and am currently working there as a Full Stack Developer. During this time, I have gained practical experience in building modern web applications and contributing to real client-focused products.</p>

          <div className="mt-6 rounded-[10px] border border-[#00255B]/15 bg-[#00255B]/5 p-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00255B]">What I have developed</p>
            <p className="mt-3 text-sm leading-7 text-[#00255B]/65">I have spent years learning programming through logical practice, DSA, OOP, web development, backend development, and project-based work. This experience has helped me improve my problem-solving skills and build dependable solutions for real-world needs.</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {['Django', 'Next.js', 'React.js', 'Tailwind CSS', 'DSA', 'OOP'].map((tech) => (
              <span key={tech} className="rounded-full border border-[#00255B]/15 bg-white px-3 py-1 text-sm text-[#00255B]">{tech}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ExperiencePage() {
  return (
    <PortfolioShell title="" eyebrow="Professional growth">
      <ExperienceSection />
    </PortfolioShell>
  );
}
