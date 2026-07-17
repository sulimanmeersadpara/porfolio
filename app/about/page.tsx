"use client";

import { motion } from "framer-motion";
import { FaCode, FaGraduationCap, FaHeart, FaRocket, FaUser } from "react-icons/fa";
import { PortfolioShell, SectionTitle, GlassCard, StatCard } from "../components/portfolio-shell";

const highlights = [
  { value: "7+", label: "Years learning" },
  { value: "2025", label: "BS completed" },
  { value: "4xcode", label: "Internship & Job" },
  { value: "Lahore", label: "Currently living in" },
];

const favoriteGames = ["Football", "Volleyball", "Basketball"];
const favoriteFoods = ["Pizza", "Zinger Burger", "Chicken Karahi"];
const favoritePlaces = ["Hunza", "Naran Kaghan", "Fairy Meadows"];

const personalities = [
  { name: "Cristiano Ronaldo", role: "Footballer" },
  { name: "Ousmane Dembélé", role: "Footballer" },
  { name: "Goldberg", role: "WWE Fighter" },
  { name: "Khabib Nurmagomedov", role: "UFC Fighter" },
];

const journey = [
  { title: "DSA & OOP", text: "I have spent years strengthening problem-solving, logic building, and object-oriented programming fundamentals." },
  { title: "Practice-driven growth", text: "Daily practice questions and coding consistency have sharpened my reasoning and implementation skills." },
  { title: "Full stack delivery", text: "I build complete web products with clean architecture, scalable logic, and polished user experiences." },
];

export default function AboutPage() {
  return (
    <PortfolioShell title="" eyebrow="Full Stack Developer">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
          <SectionTitle eyebrow="About Me" title="Creating Modern Web Applications with Python, Django & Next.js." description="I’m Suliman Meer, a passionate Full Stack Developer from Skardu, now based in Lahore. I completed my BS in Computer Science from the University of Baltistan and have been learning and practicing programming for over 7 years." />
          <GlassCard className="space-y-6">
            <div className="flex items-center gap-3 text-[#D8B36A]">
              <FaUser size={20} />
              <p className="text-sm font-semibold uppercase tracking-[0.28em]">Biography</p>
            </div>
            <p className="text-lg leading-8 text-white/75">I have spent a lot of time building my foundation in DSA, OOP, practice questions, and logic building. I enjoy turning ideas into real-world applications with strong engineering discipline and clean execution. My focus is not just on writing code, but on creating products that are reliable, user-friendly, and maintainable.</p>
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
              <p className="font-semibold text-white">Internship and current work at 4xcode Software House</p>
              <p className="mt-2 text-white/70">I completed my internship at 4xcode and am currently doing my job there as a Full Stack Developer, contributing to production-ready digital products.</p>
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
          <p className="text-lg leading-8 text-white/75">I enjoy building practical web applications that are useful, clean, and easy to use. My interests are in full stack development, backend systems, problem solving, and creating solutions that actually help people. I like working with modern tools, improving my logic and coding skills, and turning ideas into working products with strong structure and real value.</p>
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
          <div className="rounded-2xl border border-[#C9A25A]/20 bg-[#050505] p-4">
            <p className="text-sm uppercase tracking-[0.28em] text-[#D8B36A]">Favorite games</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {favoriteGames.map((item) => (
                <span key={item} className="rounded-full border border-[#C9A25A]/20 px-3 py-1 text-sm text-[#F2D28A]">{item}</span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[#C9A25A]/20 bg-[#050505] p-4">
            <p className="text-sm uppercase tracking-[0.28em] text-[#D8B36A]">Favorite food</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {favoriteFoods.map((item) => (
                <span key={item} className="rounded-full border border-[#C9A25A]/20 px-3 py-1 text-sm text-[#F2D28A]">{item}</span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[#C9A25A]/20 bg-[#050505] p-4">
            <p className="text-sm uppercase tracking-[0.28em] text-[#D8B36A]">Favorite places</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {favoritePlaces.map((item) => (
                <span key={item} className="rounded-full border border-[#C9A25A]/20 px-3 py-1 text-sm text-[#F2D28A]">{item}</span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[#C9A25A]/20 bg-[#050505] p-4">
            <p className="text-sm uppercase tracking-[0.28em] text-[#D8B36A]">Favorite personalities</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {personalities.map((person) => (
                <span key={person.name} className="rounded-full border border-[#C9A25A]/20 px-3 py-2 text-sm text-white/80">
                  {person.name} · {person.role}
                </span>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>
    </PortfolioShell>
  );
}
