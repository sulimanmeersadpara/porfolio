"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp, FaBars, FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaTimes, FaWhatsapp } from "react-icons/fa";

const navItems = ["about", "experience", "projects", "skills", "contact"];

const projects = [
  { title: "Sulli Shopping Center", type: "Full-stack e-commerce platform", image: "/sulli.png", description: "My Final Year Project: a complete Django e-commerce platform with product variants, parent and child categories, filtering, search, reviews, orders, location-based delivery charges, OTP and Google authentication, JazzCash payments, email notifications, and a permission-based admin dashboard.", tech: "Django · Django REST Framework · Python · SQL · JazzCash", demo: "https://sullimeer.pythonanywhere.com/" },
  { title: "Vogue Fix My Motor", type: "Full-stack development", image: "/vogue.png", description: "A responsive website for a UK-based automotive business. I built reusable Next.js and React components, integrated dynamic content, and developed the Django REST Framework blog management API consumed by the frontend.", tech: "Next.js · React.js · Django REST Framework · Tailwind CSS", demo: "https://voguefixmymotor.co.uk/" },
  { title: "Blogs API Management", type: "Django REST Framework API", image: "/blogs.png", description: "A Django REST Framework backend for managing blogs through the built-in Django admin. It provides a blog listing API for frontend applications and a detail API that retrieves individual posts through their slugs, making content management and frontend publishing straightforward.", tech: "Python · Django · Django REST Framework · REST APIs", demo: "https://voguefixmymotor.co.uk/blog" },
  { title: "Range Rover Repairs", type: "Frontend development", image: "/range.png", description: "A UK-based automotive website built with Next.js. I converted Figma designs into responsive pages, created reusable React components, integrated dynamic content and REST APIs, and worked with Tailwind CSS and MUI.", tech: "Next.js · React.js · Tailwind CSS · MUI · REST APIs", demo: "https://rangeroverrepairs-test-development.vercel.app/" },
  { title: "Vogue Mercedes", type: "Service platform", image: "/voguemercedies.png", description: "A service-focused automotive website for a UK business. I developed responsive pages, reusable components, structured content, navigation and API-based sections so visitors can quickly understand and explore the available services.", tech: "Next.js · React.js · Tailwind CSS · REST APIs", demo: "https://voguemercedesdevelopmentengines.vercel.app/" },
  ];

const skillGroups = [
  ["Programming Languages", "Python, JavaScript, C++"],
  ["Backend Development", "Django, Django REST Framework, FastAPI, SQLAlchemy, Django ORM"],
  ["Frontend Development", "React.js, Next.js, Tailwind CSS, MUI, Bootstrap, HTML5, CSS3"],
  ["Databases", "MySQL, SQLite, PostgreSQL"],
  ["Authentication & Authorization", "JWT Authentication, OTP Authentication, Google Social Authentication, Authorization, REST APIs"],
  ["Payment Integration", "JazzCash"],
  ["Development Tools", "Git, GitHub, Postman, GitHub Copilot, Cursor"],
  ["Deployment", "PythonAnywhere, Railway, Vercel, Netlify"],
  ["Other Skills", "Object Oriented Programming, Data Structures & Algorithms, Problem Solving, Team Collaboration"],
];

function scrollToSection(event, id, onComplete) {
  event.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", window.location.pathname + window.location.search);
  onComplete?.();
}

function CursorDot() {
  const [position, setPosition] = useState({ x: -20, y: -20 });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(!event.target.closest("a, button, input, textarea, select, [role='button']"));
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    document.body.style.cursor = "none";
    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return <span aria-hidden="true" className={`pointer-events-none fixed z-[100] size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00255b] transition-opacity ${visible ? "opacity-100" : "opacity-0"}`} style={{ left: position.x, top: position.y }} />;
}

function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-[#00255b]/10 bg-[#f4f1eb]/95 px-5 backdrop-blur-md transition-shadow md:px-11 ${scrolled ? "shadow-sm" : ""}`}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between">
        <a href="#top" onClick={(event) => scrollToSection(event, "top")} className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.14em] text-[#00255b]"><span className="grid size-7 place-items-center bg-[#00255b] text-[10px] text-white">SM</span> Muhammad Suliman Meer</a>
        <div className="hidden items-center gap-6 lg:flex">{navItems.map((item) => <a className="text-[10px] font-bold uppercase tracking-[.14em] text-[#647084] transition-colors hover:text-[#00255b]" key={item} href={`#${item}`} onClick={(event) => scrollToSection(event, item)}>{item}</a>)}</div>
        <div className="flex items-center gap-4"><a href="/SulimanMeerCV.pdf" download="SulimanMeerCV.pdf" className="hidden items-center gap-2 text-[10px] font-bold uppercase tracking-[.12em] text-[#647084] lg:flex"><FaDownload /> CV</a><a href="#contact" onClick={(event) => scrollToSection(event, "contact")} className="hidden border-b border-[#00255b] pb-1 text-[10px] font-bold uppercase tracking-[.12em] text-[#00255b] lg:block">Contact</a><button type="button" onClick={() => setMenuOpen((open) => !open)} className="p-2 text-[#00255b] lg:hidden" aria-label="Toggle navigation">{menuOpen ? <FaTimes /> : <FaBars />}</button></div>
      </nav>
      {menuOpen ? <div className="fixed inset-0 z-50 bg-[#00255b]/25 px-4 py-4 lg:hidden"><div className="mx-auto min-h-full max-w-7xl rounded-2xl border border-[#00255b]/15 bg-[#f4f1eb] px-5 py-4 shadow-2xl"><div className="flex h-12 justify-end"><button type="button" onClick={() => setMenuOpen(false)} className="p-2 text-[#00255b]" aria-label="Close navigation"><FaTimes /></button></div><div className="mt-10 flex flex-col gap-2">{navItems.map((item) => <a className="border-b border-[#00255b]/15 py-4 text-2xl font-bold capitalize text-[#00255b]" href={`#${item}`} key={item} onClick={(event) => scrollToSection(event, item, () => setMenuOpen(false))}>{item}</a>)}</div><a href="/SulimanMeerCV.pdf" download="SulimanMeerCV.pdf" onClick={() => setMenuOpen(false)} className="mt-8 inline-flex items-center gap-2 border-b border-[#00255b] pb-2 text-xs font-bold uppercase tracking-[.12em] text-[#00255b]"><FaDownload /> Download CV</a></div></div> : null}
    </header>
  );
}

const Eyebrow = ({ children }) => <p className="m-0 text-[10px] font-bold uppercase tracking-[.18em] text-[#00255b]">{children}</p>;
const Section = ({ id, children, className = "" }) => <section id={id} className={`border-t border-[#00255b]/15 py-12 md:py-16 ${className}`}>{children}</section>;

export default function Home() {
  return (
    <>
      <CursorDot />
      <main className="min-h-screen overflow-hidden bg-[#f4f1eb] pt-16 font-sans text-[#00255b]">
      <SiteHeader />
      <div className="mx-auto max-w-7xl px-5 md:px-11">
        <section id="top" className="grid items-center gap-10 py-14 md:grid-cols-[1.05fr_.95fr] md:gap-16 md:py-20">
          <div>
            <Eyebrow>Full Stack Software Engineer <span className="ml-1 inline-block size-1.5 rounded-full bg-[#c9a25a]" /></Eyebrow>
            <h1 className="my-5 max-w-3xl text-[clamp(2.6rem,7vw,5.4rem)] font-bold leading-[.92] tracking-[-.06em] text-[#00255b]">Muhammad<br /><span className="text-[#c9a25a]">Suliman Meer</span></h1>
            <p className="max-w-xl text-sm leading-7 text-[#647084]">I build modern web applications with <strong>Python, Django, FastAPI, Next.js, and React.js</strong>. I enjoy working across backend and frontend development, from designing APIs and database logic to creating responsive and user-friendly interfaces.</p>
            <div className="mt-7 flex flex-wrap items-center gap-5"><a className="inline-flex items-center gap-3 rounded-lg bg-[#00255b] px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-[#0a397e]" href="#projects" onClick={(event) => scrollToSection(event, "projects")}>View my projects <FaArrowUp className="rotate-[135deg] text-[10px]" /></a><a className="border-b border-[#00255b] pb-1 text-xs font-bold text-[#00255b] transition-colors hover:border-[#c9a25a] hover:text-[#c9a25a]" href="tel:+923117480168 ">&#128241;+923117480168 <span className="text-[#c9a25a]"></span></a></div>
          </div>
          <div className="flex justify-center md:justify-end"><div className="w-full max-w-md overflow-hidden rounded-[10px] border-4 border-[#c9a25a] bg-[#f4f1eb] ">
            <center> <img className="mt-8 w-[50%] mix-blend-multiply" src="/68f40f5b-a68d-4725-a524-6b24f10e5af4.png" alt="Technology logos" /></center>
       
            <img className="h-auto w-full object-contain" src="/SM big.png" alt="Muhammad Suliman Meer" />
          
          </div>
          </div>
        </section>
        <div className="flex justify-between border-t border-[#00255b]/15 py-3 text-[9px] font-bold uppercase tracking-[.16em] text-[#647084]"><span>Full Stack Developer</span><span>Available for select projects</span></div>

        <Section id="about" className="grid gap-10 md:grid-cols-[minmax(0,1fr)_220px] md:gap-16"><div><Eyebrow>About me</Eyebrow><h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-[#00255b] md:text-4xl">Building useful web applications with Python and Next.js.</h2><div className="mt-5 max-w-2xl space-y-4 text-sm leading-7 text-[#647084]"><p>I am a Computer Science graduate and Full Stack Developer who enjoys turning ideas and requirements into working web applications.</p><p>My main experience is with <strong>Python, Django, Django REST Framework, FastAPI, Next.js, React.js, and SQL databases</strong>. I work with APIs, databases, authentication, authorization, business logic, integrations, responsive pages, reusable components, forms and dashboards.</p><p>I have worked on real-world projects for UK-based clients, contributing to website development, API integration, responsive interfaces, debugging and improving existing applications. I enjoy understanding how things work and building solutions that are simple, reliable and easy to use.</p></div></div><div className="self-end border-t-2 border-[#00255b] pt-3 text-xs leading-6 text-[#647084]"><span className="block uppercase tracking-[.12em]">Currently</span><strong className="my-2 block text-[#00255b]">Full Stack Developer</strong><span>Working with Python, Django, FastAPI, Next.js, React.js, REST APIs and databases.</span></div></Section>

        <Section id="experience"><Eyebrow>Work experience</Eyebrow><h2 className="mt-3 text-3xl font-bold tracking-tight text-[#00255b] md:text-4xl">Full Stack Developer</h2><p className="mt-2 text-sm font-bold uppercase tracking-[.12em] text-[#c9a25a]">4xCode Software House</p><div className="mt-8 grid gap-8 border-t border-[#00255b]/15 pt-5 md:grid-cols-[150px_1fr_1fr]"><p className="text-xs font-bold uppercase tracking-[.15em] text-[#00255b]">2026 — present</p><p className="text-sm leading-7 text-[#647084]">I develop and maintain web applications for different projects and UK-based clients. On the backend I build APIs, handle database operations, implement application logic, and work with authentication and permissions using Python, Django, Django REST Framework and FastAPI.</p><p className="text-sm leading-7 text-[#647084]">On the frontend I build responsive pages, reusable components, forms and dynamic interfaces with Next.js and React.js. My work also includes API integration, debugging, performance improvements and making changes safely in existing codebases.</p></div><center>
           </center>
          </Section>

        <Section id="projects"><div className="flex flex-wrap items-end justify-between gap-4"><div><Eyebrow>Selected projects</Eyebrow><h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-[#00255b] md:text-4xl">Projects built from backend logic to polished interfaces.</h2></div><p className="text-xs leading-6 text-[#647084]">E-commerce, APIs and<br />production websites.</p></div><div className="mt-10 space-y-12">{projects.map((project, index) => <motion.article className={`grid items-center gap-6 md:grid-cols-2 md:gap-12 ${index % 2 ? "md:[&>*:first-child]:order-2" : ""}`} key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: .45 }}><div className="aspect-[1.55] overflow-hidden rounded-[10px] bg-[#00255b]"><img className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]" src={project.image} alt={project.title} /></div><div className="max-w-xl"><Eyebrow>{project.type}</Eyebrow><h3 className="mt-3 text-2xl font-bold tracking-tight text-[#00255b] md:text-3xl">{project.title}</h3><p className="mt-3 text-sm leading-7 text-[#647084]">{project.description}</p><p className="mt-3 text-[10px] font-bold uppercase tracking-[.12em] text-[#00255b]">{project.tech}</p><a className="mt-5 inline-block border-b border-[#00255b] pb-1 text-xs font-bold text-[#00255b] hover:border-[#c9a25a] hover:text-[#c9a25a]" href={project.demo} target="_blank" rel="noreferrer">View project ↗</a></div></motion.article>)}</div></Section>

        <Section id="skills"><Eyebrow>Technical skills</Eyebrow><h2 className="mt-3 text-3xl font-bold tracking-tight text-[#00255b] md:text-4xl">Tools and technologies I use.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-[#647084]">My experience covers backend and frontend development, databases, authentication, APIs, payment integration, development tools and deployment platforms.</p><div className="mt-8 grid gap-0 md:grid-cols-2">{skillGroups.map(([title, items]) => <div className="border-t border-[#00255b]/15 py-4 pr-5" key={title}><h3 className="text-base font-bold text-[#00255b]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#647084]">{items}</p></div>)}</div></Section>

        <Section id="education" className="grid gap-10 md:grid-cols-2"><div><Eyebrow>Education</Eyebrow><h2 className="mt-3 text-3xl font-bold text-[#00255b]">BS in Computer Science</h2><p className="mt-2 text-sm font-bold text-[#c9a25a]">University of Baltistan</p></div><div className="text-sm leading-7 text-[#647084]"><p>March 2022 — December 2025</p><p className="mt-4">During my degree, I developed a foundation in programming, software development, databases, algorithms and data structures. My Final Year Project, Sulli Shopping Center, gave me practical experience building a complete full-stack application.</p></div></Section>

        <Section id="contact" className="py-8 md:py-10"><Eyebrow>Contact</Eyebrow><h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-[#00255b] md:text-4xl">Have a good problem?<br /><span className="text-[#c9a25a]">Let&apos;s make something useful.</span></h2><div className="mt-7 grid gap-7 border-t border-[#00255b]/15 pt-5 md:grid-cols-[1fr_1fr] md:items-end"><div className="space-y-3 text-sm text-[#647084]"><a className="flex items-center gap-3 text-xl font-bold text-[#00255b] hover:text-[#c9a25a]" href="mailto:sulimanmeersadpara@gmail.com"><FaEnvelope className="text-base" /> sulimanmeersadpara@gmail.com</a><a className="flex items-center gap-3 hover:text-[#c9a25a]" href="tel:+923117480168"><FaPhoneAlt /> +92 311 7480168</a><a className="flex items-center gap-3 hover:text-[#c9a25a]" href="https://wa.me/923117480168" target="_blank" rel="noreferrer"><FaWhatsapp /> WhatsApp: +92 311 7480168</a><p className="flex items-center gap-3"><FaMapMarkerAlt /> Johar Town, Lahore</p></div><div className="flex flex-wrap gap-5 text-xs font-bold uppercase tracking-[.1em] text-[#00255b]"><a className="hover:text-[#c9a25a]" href="https://github.com/sulimanmeersadpara" target="_blank" rel="noreferrer"><FaGithub className="mr-2 inline" />GitHub</a><a className="hover:text-[#c9a25a]" href="https://www.linkedin.com/in/salman-meer-07b48b365/" target="_blank" rel="noreferrer"><FaLinkedin className="mr-2 inline" />LinkedIn</a></div></div></Section>

        <footer className="flex flex-wrap justify-between gap-4 border-t border-[#00255b]/15 py-5 text-[10px] font-bold uppercase tracking-[.12em] text-[#647084]"><span>© 2026 Muhammad Suliman Meer · Python · Django · FastAPI · Next.js · React.js</span><a href="#top" onClick={(event) => scrollToSection(event, "top")} className="hover:text-[#00255b]">Back to top ↑</a><span>Lahore, Pakistan</span></footer>
      </div>
      </main>
    </>
  );
}
