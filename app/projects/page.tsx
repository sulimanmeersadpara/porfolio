"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { PortfolioShell, SectionTitle } from "../components/portfolio-shell";

const projects = [
  {
    title: "Sulli Shopping Center (FYP)",
    image: "/sulli.png",
    description: "A full-featured ecommerce platform with authentication, OTP-based access, product variants, dynamic pricing, location-based delivery charges, and an online payment workflow.",
    tech: ["Django", "Authentication", "Payments", "Admin Dashboards"],
    demo: "https://sullimeer.pythonanywhere.com/",
    github: "https://github.com",
    highlights: [
      "Implemented product filters by categories, gender, price, and search.",
      "Built shopping cart, order management, and confirmation email flow.",
      "Integrated JazzCash and role-based employee permissions.",
    ],
  },
  {
    title: "Vogue Fix My Motor (4xcode)",
    image: "/vogue.png",
    description: "A production-ready automotive website converted from Figma into a responsive Next.js experience, backed by JSON and API-driven content.",
    tech: ["Next.js", "React.js", "APIs", "Responsive UI"],
    demo: "https://voguefixmymotor.co.uk/",
    github: "https://github.com",
    highlights: [
      "Translated UI concepts into a responsive and performance-focused website.",
      "Integrated dynamic content across sections for a polished user experience.",
      "Delivered a modern frontend experience for a UK automotive business.",
    ],
  },
  {
    title: "Vogue Mercedes Development Engines",
    image: "/voguemercedies.png",
    description: "A Next.js automotive website for Vogue Techniques, featuring Mercedes-focused services, service detail pages, service areas, area detail pages, JSON-driven content, blog API integration, and backend contact form submission.",
    tech: ["Next.js", "JSON Data", "Backend APIs", "Responsive UI"],
    demo: "https://voguemercedesdevelopmentengines.vercel.app/",
    highlights: [
      "Created dedicated service and service detail experiences for Mercedes engine development.",
      "Added service areas with individual area detail pages for a UK-based workshop.",
      "Integrated backend APIs for blogs and contact form submissions.",
    ],
  },
  {
    title: "Vogue Van Development Engines",
    image: "/voguevan.png",
    description: "A Next.js automotive platform for Vogue Techniques with van services, detailed service and area pages, brand and model browsing, engine listings and details, API-powered blogs, and backend contact form submission.",
    tech: ["Next.js", "JSON Data", "Backend APIs", "Responsive UI"],
    highlights: [
      "Built service and area detail journeys for Vogue Techniques van customers.",
      "Added brand, model, and engine browsing with dedicated engine detail pages.",
      "Integrated backend APIs for blogs and contact form submissions.",
    ],
  },
  {
    title: "Range Rover Repairs (4xcode)",
    image: "/range.png",
    description: "A refined automotive repair website with responsive components, dynamic content, and smooth product presentation built with modern frontend tooling.",
    tech: ["Next.js", "Tailwind CSS", "Material UI", "Performance"],
    demo: "https://rangeroverrepairs-test-development.vercel.app/",
    highlights: [
      "Built reusable and responsive interface components.",
      "Optimized frontend performance and user experience.",
      "Contributed to a production-ready website for a UK automotive brand.",
    ],
  },
  {
    title: "Gallery Project",
    image: "/gallery.png",
    description: "A Django-based gallery platform with an admin system for adding, updating, and deleting photos, designed as a personal photo showcase.",
    tech: ["Django", "Admin Panel", "Photos", "Deployment"],
    demo: "https://salmanmeergabbar.pythonanywhere.com/",
    highlights: [
      "Built a full gallery experience with photo management features.",
      "Included an admin dashboard for easy content updates.",
      "Deployed and made available for public access.",
    ],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-28 py-1">
      <div className="space-y-8">
        <SectionTitle eyebrow="Featured work" title="Selected projects" description="A few of my recent web products and implementations." />
        <div className="grid gap-6 xl:grid-cols-3 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -8, scale: 1.01 }} className="group flex h-full flex-col overflow-hidden rounded-[10px] border border-[#00255B]/15 bg-white shadow-[0_20px_90px_rgba(0,37,91,0.12)] backdrop-blur-xl">
              <div className="relative h-56 overflow-hidden bg-[#00255B]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.2),_transparent_35%)]" />
                <div className="absolute inset-0 transition duration-500 group-hover:scale-105" style={{ backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.14), transparent 70%)" }} />
                <div className="absolute inset-0 m-6 overflow-hidden rounded-[10px] border border-white/30 bg-[#00255B]/30 backdrop-blur-sm">
                  {project.image ? <img src={project.image} alt={project.title} className="h-full w-full object-cover" /> : null}
                </div>
              </div>
              <div className="relative flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-[#00255B]">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#00255B]/65">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="rounded-full border border-[#00255B]/15 bg-[#00255B]/5 px-3 py-1 text-sm font-medium text-[#00255B]">{tech}</span>)}</div>
                <ul className="mt-5 space-y-2 text-sm leading-7 text-[#00255B]/65">{project.highlights.map((item) => <li key={item} className="flex gap-2"><span className="mt-1 text-[#00255B]">•</span>{item}</li>)}</ul>
                <div className="mt-auto pt-4 pb-2">
                  {project.demo ? (
                    <Link href={project.demo} className="inline-flex items-center gap-2 rounded-[8px] bg-[#00255B] px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5">
                      <FaExternalLinkAlt /> Live Demo
                    </Link>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <PortfolioShell title="Projects" heading="Designed, Developed, and Delivered.">
      <ProjectsSection />
    </PortfolioShell>
  );
}
