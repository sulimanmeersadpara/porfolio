"use client";

import { motion } from "framer-motion";
import { FaCode, FaGraduationCap, FaUser } from "react-icons/fa";
import { PortfolioShell, SectionTitle, GlassCard, StatCard } from "../components/portfolio-shell";



const journey = [
  { title: "Thoughtful", text: "I understand the requirements first and plan solutions around real user and business needs." },
  { title: "Practical", text: "I build simple, reusable, and maintainable solutions that work reliably in production." },
  { title: "User-focused", text: "I care about clear interfaces and making applications easy and pleasant to use." },
];

export function AboutSection() {
  return (
    <>
    <section id="about" className="scroll-mt-28 py-1">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
          <SectionTitle eyebrow="About Me" title="Building Modern Web Applications with Python, Django & Next.js" description="I am a Full Stack Software Engineer with a background in Computer Science. I work at 4xCode Software House, where I build and maintain web applications for different projects and clients. I work mainly with Python, Django, FastAPI, Next.js, React.js, REST APIs, and SQL databases." />
       
        </motion.div>
   <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="h-full space-y-8">
          <div className="h-full space-y-6">
            <div className="flex items-center gap-3 text-[#00255B]">
              <FaUser size={20} />
              <p className="text-sm font-semibold uppercase tracking-[0.28em]">Biography</p>
            </div>
            <p className="text-sm leading-6 text-[#00255B]/70">I’m Muhammad Suliman Meer, a Full Stack Software Engineer and Computer Science graduate from Skardu. I completed my BS in Computer Science from the University of Baltistan in 2025. Currently based in Lahore, I work on building modern web applications using Python and modern JavaScript technologies. I’m passionate about solving real-world problems, learning new technologies, and continuously growing as a developer.</p>
            <div className="grid gap-4 md:grid-cols-2">

            </div>
        
          </div>
        </motion.div>
      
      </div>

    
    </section>
     <div className="w-full flex flex-wrap">
           <GlassCard className="w-full  lg:w-1/2">
           <div className="mx-5">
            <div className="flex items-center mt-5 gap-3 text-[#00255B]">
              <FaGraduationCap size={20} />
              <p className="text-sm font-semibold uppercase tracking-[0.28em]">Education</p>
            </div>
            <div className="rounded-[10px] border border-[#00255B]/15 bg-[#00255B]/5 p-5">
              <p className="font-semibold text-[#00255B]">BS in Computer Science</p>
              <p className="mt-2 text-[#00255B]/65">University of Baltistan · 2022 – 2025</p>
            </div>
            <div className="rounded-[10px] mt-5 border border-[#00255B]/15 bg-[#00255B]/5 p-5">
              <p className="font-semibold text-[#00255B]">4xCode Software House</p>
              <p className="mt-2 text-[#00255B]/65">I work as a Full Stack Software Engineer, building and maintaining web applications for different projects and clients.</p>
            </div>
            </div>
          </GlassCard>
  <div className="w-full lg:w-1/2">
  <div className="ml-0 lg:ml-5 ">
          <div className="flex items-center gap-3 text-[#00255B]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em]">Career objective</p>
          </div>
            <p className="mt-5 text-sm leading-6 text-[#00255B]/70">My goal is to grow into a strong Full Stack AI Developer with strong expertise in Python for backend development and JavaScript technologies for modern frontend development. I want to build solid experience by working on real-world applications, designing reliable APIs, working with databases, and developing scalable software solutions. In the long term, I aim to combine my full-stack development skills with AI by integrating AI APIs, LLMs, and intelligent features into web applications to create software that is not only functional, but also smarter and more useful.</p>
       </div>
        </div>
        
       </div>
       </>
  );
}

export default function AboutPage() {
  return (
    <PortfolioShell title="">
      <AboutSection />
    </PortfolioShell>
  );
}
