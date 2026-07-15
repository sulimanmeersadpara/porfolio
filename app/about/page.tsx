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

const personalities = [
  {
    name: "Cristiano Ronaldo",
    role: "Footballer",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Cristiano_Ronaldo_Croatia_v_Portugal_2_July_2026-075_%28cropped%29.jpg/500px-Cristiano_Ronaldo_Croatia_v_Portugal_2_July_2026-075_%28cropped%29.jpg",
  },
  {
    name: "Ousmane Dembélé",
    role: "Footballer",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Ousmane_Dembele_France_v_Senegal_16_June_2026-341_%28cropped%29_2.jpg/500px-Ousmane_Dembele_France_v_Senegal_16_June_2026-341_%28cropped%29_2.jpg",
  },
  {
    name: "Goldberg",
    role: "WWE Fighter",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Bill_Goldberg_Boerne_01_%28cropped%29.jpg/500px-Bill_Goldberg_Boerne_01_%28cropped%29.jpg",
  },
  {
    name: "Khabib Nurmagomedov",
    role: "UFC Fighter",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Khabib_nurmagomedov.jpg/500px-Khabib_nurmagomedov.jpg",
  },
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
          <SectionTitle eyebrow="About Me" title="Building polished digital products with strong engineering discipline." description="I’m Suliman Meer, a passionate Full Stack Developer from Skardu, now based in Lahore. I completed my BS in Computer Science from the University of Baltistan and have been learning and practicing programming for over 7 years." />
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
          <p className="text-lg leading-8 text-white/75">I’m focused on building reliable digital products for companies that value modern engineering, thoughtful UX, and dependable delivery. In my final year project, I built a full ecommerce website in Django, which strengthened my backend development experience and helped me connect theory with real implementation.</p>
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
            <p className="text-sm uppercase tracking-[0.28em] text-[#D8B36A]">Personal interests</p>
            <p className="mt-3 text-sm leading-7 text-white/70">I love football, exploring new places, making new friends, and staying curious about life beyond work. I’m also deeply connected to my roots in Skardu and currently living in Johar Town, Lahore.</p>
          </div>
          <div className="rounded-2xl border border-[#C9A25A]/20 bg-[#050505] p-4">
            <p className="text-sm uppercase tracking-[0.28em] text-[#D8B36A]">Favorite personalities</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {personalities.map((person) => (
                <div key={person.name} className="overflow-hidden rounded-2xl border border-[#C9A25A]/20 bg-[#111111]">
                  <img src={person.image} alt={person.name} className="h-56 w-full object-cover object-center" />
                  <div className="p-4">
                    <p className="font-semibold text-white">{person.name}</p>
                    <p className="mt-1 text-sm text-[#D8B36A]">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>
    </PortfolioShell>
  );
}
