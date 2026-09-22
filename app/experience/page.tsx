"use client";
import { motion } from "framer-motion";
import { PortfolioShell, SectionTitle } from "../components/portfolio-shell";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-28">
      <div className="flex flex-col gap-[10px]">
        <div>
        <SectionTitle eyebrow="EXPERIENCE" title="Building Production-Ready Applications using Python, Django, React.js and Next.js" description="I am working as a Full Stack Software Engineer at 4xCode Software House, where I develop and maintain web applications for different projects and clients. I mainly work with Python, Django, Django REST Framework, FastAPI, Next.js, React.js, REST APIs, and SQL databases.

I work across frontend and backend development, building responsive interfaces and scalable backend services. I have experience with REST APIs, databases, authentication, dynamic content, reusable components, debugging, and performance improvements." />
        <img className="mx-auto mt-[10px] w-[60%]" src="/68f40f5b-a68d-4725-a524-6b24f10e5af4.png" alt="Technology logos" />
        </div>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[10px] border border-[#00255B]/15 bg-white p-6 shadow-[0_18px_70px_rgba(0,37,91,0.12)] backdrop-blur-xl">
          <div className="flex items-center gap-2 text-[#00255B]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em]">4xcode Software House</p>
          </div>

          <h3 className="mt-4 text-2xl font-semibold text-[#00255B] md:text-3xl lg:text-4xl">Full Stack Software Engineer</h3>
          <p className="mt-[5px] text-sm leading-6 text-[#00255B]/70 sm:text-base lg:text-lg">My work includes backend development, API integration, database management, responsive frontend development, debugging, performance improvements, and building reusable components. I also use Git and GitHub for version control and collaborate with other developers to deliver production-ready applications.</p>

          <div className="mt-6 rounded-[10px] border border-[#00255B]/15 bg-[#00255B]/5 p-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00255B]">What I have developed</p>
            <p className="mt-[5px] text-sm leading-7 text-[#00255B]/65 sm:text-base lg:text-lg">I have worked on e-commerce platforms, business websites, content management systems, and API-based applications. My experience includes Django and FastAPI backend systems, Next.js and React.js frontend applications, REST API integration, and SQL databases.</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {['Full Stack Web Applications', 'REST APIs', 'E-commerce Systems', 'Business Websites', 'Database-Driven Applications', 'Responsive Web Interfaces'].map((tech) => (
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
    <PortfolioShell title="">
      <ExperienceSection />
    </PortfolioShell>
  );
}
