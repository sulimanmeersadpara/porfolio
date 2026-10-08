"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaBars,
  FaBriefcase,
  FaCode,
  FaDatabase,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaHeart,
  FaLaptopCode,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPython,
  FaReact,
  FaServer,
  FaTimes,
} from "react-icons/fa";

const sectionLinks = [
  { id: "top", label: "Home", href: "/" },
  { id: "about", label: "About", href: "/about" },
  { id: "experience", label: "Experience", href: "/experience" },
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "skills", label: "Skills", href: "/skills" },
  { id: "education", label: "Education", href: "/education" },
  { id: "contact", label: "Contact", href: "/contact" },
];

function SectionLink({ section, children, ...props }) {
  const destination = sectionLinks.find((item) => item.id === section);

  return (
    <Link href={destination.href} scroll={false} {...props}>
      {children}
    </Link>
  );
}

function SiteHeader({ activeSection, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <SectionLink className="brand" section="top" aria-label="Muhammad Suliman Meer, home">
          <Image className="brand-logo" src="/logo.png" alt="" width={40} height={40} priority />
          <span className="brand-copy">
            <strong>Muhammad Suliman Meer</strong>
            <small>Full Stack Developer</small>
          </span>
        </SectionLink>
        <nav className="desktop-nav" aria-label="Portfolio sections">
          {sectionLinks.map(({ id, href, label }) => (
            <Link
              key={id}
              className={activeSection === id ? "active" : undefined}
              href={href}
              scroll={false}
              aria-current={activeSection === id ? "page" : undefined}
              onClick={() => onNavigate(id)}
            >
              {label}
            </Link>
          ))}
        </nav>
        <a className="header-download" href="/SulimanMeerCV.pdf" download="SulimanMeerCV.pdf">
          <FaDownload /> Download CV
        </a>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
      {menuOpen && (
        <nav className="mobile-nav" aria-label="Portfolio sections">
          {sectionLinks.map(({ id, href, label }) => (
            <Link
              key={id}
              className={activeSection === id ? "active" : undefined}
              href={href}
              scroll={false}
              aria-current={activeSection === id ? "page" : undefined}
              onClick={() => {
                onNavigate(id);
                setMenuOpen(false);
              }}
            >
              {label}
            </Link>
          ))}
          <a className="mobile-cv" href="/SulimanMeerCV.pdf" download="SulimanMeerCV.pdf" onClick={() => setMenuOpen(false)}>
            <FaDownload /> Download CV
          </a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-content">
        <p className="eyebrow">Full Stack Developer</p>
        <h1>Muhammad<br /><span>Suliman Meer</span></h1>
        <h2>Full Stack Developer</h2>
        <p className="hero-description">
          I build modern web applications with Python, Django, FastAPI, Next.js, and React.js.
          I enjoy working across backend and frontend development, from designing APIs and
          database logic to creating responsive and user-friendly interfaces.
        </p>
        <div className="hero-actions">
          <SectionLink className="button button-primary" section="projects">View My Projects <FaArrowRight /></SectionLink>
          <a className="button button-outline" href="/SulimanMeerCV.pdf" download="SulimanMeerCV.pdf"><FaDownload /> Download CV</a>
        </div>
        <div className="tech-strip" aria-label="Technologies">
          <span><FaPython /> Python</span>
          <span><b className="django-mark">dj</b> Django</span>
          <span><b className="fastapi-mark">+</b> FastAPI</span>
          <span><b className="next-mark">N</b> Next.js</span>
          <span><FaReact /> React</span>
        </div>
        <a className="hero-phone" href="tel:+923117480168"><FaPhoneAlt /> +923117480168</a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section image-section" id="about">
      <div className="section-copy about-copy">
        <p className="eyebrow">About Me</p>
        <h2>Building useful web<br className="desktop-break" /> applications with Python<br className="desktop-break" /> and Next.js.</h2>
        <p>
          I am a Computer Science graduate and Full Stack Developer who enjoys turning ideas
          and requirements into working web applications.
        </p>
        <p>
          My main experience is with Python, Django, Django REST Framework, FastAPI, Next.js,
          React.js, and SQL databases. I work with APIs, authentication, responsive pages,
          reusable components and dashboards.
        </p>
        <p>
          I have worked on real-world projects for UK-based clients, contributing to website
          development, API integration and improving existing applications.
        </p>
        <div className="value-pills">
          <span>Clean Code<br />Best Practices</span>
          <span>Problem Solver<br />Team Player</span>
          <span>Always<br />Learning</span>
        </div>
        <SectionLink className="button button-outline about-link" section="experience">Learn More About Me <FaArrowRight /></SectionLink>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience-section image-section" id="experience">
      <div className="section-heading">
        <p className="eyebrow">Work Experience</p>
        <h2>Professional Experience</h2>
      </div>
      <div className="experience-card glass-card">
        <div className="experience-details">
          <div className="company-row">
            <Image
              className="company-logo"
              src="/4xcode-logo.webp"
              alt="4xCode logo"
              width={40}
              height={40}
            />
            <span><strong>4xCode Software House</strong><small>2026 — Present</small></span>
            <span className="experience-date">2026 — Present</span>
          </div>
          <h3>Full Stack Developer</h3>
          <p>
            I develop and maintain web applications for different projects and UK-based clients.
            On the backend I build APIs, handle database operations and implement application
            logic using Python, Django, Django REST Framework and FastAPI.
          </p>
          <p>
            On the frontend I build responsive pages, reusable components and dynamic interfaces
            with Next.js and React.js, alongside API integration and debugging.
          </p>
        </div>
        <Image className="experience-image" src="/3302d5dd-7176-45ba-a988-a4a3050303e2 - Copy.png" alt="Laptop displaying code beside a plant" width={1000} height={524} sizes="(max-width: 680px) 100vw, 30vw" />
        <div className="experience-highlights">
          <span><FaBriefcase /> Real World Projects</span>
          <span><FaMapMarkerAlt /> UK Clients</span>
          <span><FaCode /> Clean Code</span>
          <span><FaLaptopCode /> Team Collaboration</span>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="projects-section image-section" id="projects">
      <div className="projects-heading">
        <div>
          <p className="eyebrow">Selected Projects</p>
          <h2>Projects built from backend logic<br className="desktop-break" /> to polished interfaces.</h2>
          <p className="section-subtitle">E-commerce, APIs and production websites.</p>
        </div>
        <SectionLink className="button button-outline" section="projects">View All Projects <FaArrowRight /></SectionLink>
      </div>
      <div className="project-grid">
        <article className="project-card">
          <a className="project-image" href="https://sullimeer.pythonanywhere.com/" target="_blank" rel="noreferrer">
            <Image src="/sulli.png" alt="Sulli Shopping Center website" width={1920} height={896} sizes="(max-width: 680px) 50vw, 30vw" />
          </a>
          <div className="project-content">
            <h3>Sulli Shopping Center</h3>
            <div className="project-tags"><span>Django</span><span>React</span><span>PostgreSQL</span></div>
            <p>A complete e-commerce platform with product variants, cart, checkout and admin panel.</p>
            <a className="project-link" href="https://sullimeer.pythonanywhere.com/" target="_blank" rel="noreferrer">View Project <FaArrowRight /></a>
          </div>
        </article>
        <article className="project-card">
          <a className="project-image" href="https://voguefixmymotor.co.uk/" target="_blank" rel="noreferrer">
            <Image src="/vogue.png" alt="Vogue Fix My Motor website" width={1892} height={860} sizes="(max-width: 680px) 50vw, 30vw" />
          </a>
          <div className="project-content">
            <h3>Vogue Fix My Motor</h3>
            <div className="project-tags"><span>Next.js</span><span>Tailwind CSS</span><span>API</span></div>
            <p>A website for a UK-based automobile business with dynamic content and modern UI.</p>
            <a className="project-link" href="https://voguefixmymotor.co.uk/" target="_blank" rel="noreferrer">View Project <FaArrowRight /></a>
          </div>
        </article>
        <article className="project-card">
          <a className="project-image" href="https://voguefixmymotor.co.uk/blog" target="_blank" rel="noreferrer">
            <Image src="/blogs.png" alt="Blogs API Management website" width={1920} height={880} sizes="(max-width: 680px) 50vw, 30vw" />
          </a>
          <div className="project-content">
            <h3>Blogs API Management</h3>
            <div className="project-tags"><span>Django</span><span>Python</span><span>PostgreSQL</span></div>
            <p>Blog platform with API, admin panel and content management system.</p>
            <a className="project-link" href="https://voguefixmymotor.co.uk/blog" target="_blank" rel="noreferrer">View Project <FaArrowRight /></a>
          </div>
        </article>
        <article className="project-card">
          <a className="project-image" href="https://rangeroverrepairs-test-development.vercel.app/" target="_blank" rel="noreferrer">
            <Image src="/range.png" alt="Range Rover Repairs website" width={1920} height={878} sizes="(max-width: 680px) 50vw, 30vw" />
          </a>
          <div className="project-content">
            <h3>Range Rover Repairs</h3>
            <div className="project-tags"><span>Next.js</span><span>Tailwind CSS</span><span>API</span></div>
            <p>Vehicle repair and maintenance platform with service booking and tracking.</p>
            <a className="project-link" href="https://rangeroverrepairs-test-development.vercel.app/" target="_blank" rel="noreferrer">View Project <FaArrowRight /></a>
          </div>
        </article>
        <article className="project-card">
          <a className="project-image" href="https://voguemercedesdevelopmentengines.vercel.app/" target="_blank" rel="noreferrer">
            <Image src="/voguemercedies.png" alt="Vogue Mercedes website" width={1896} height={856} sizes="(max-width: 680px) 50vw, 30vw" />
          </a>
          <div className="project-content">
            <h3>Vogue Mercedes</h3>
            <div className="project-tags"><span>Next.js</span><span>Tailwind CSS</span><span>API</span></div>
            <p>Mercedes service center with vehicle repair booking and customer management.</p>
            <a className="project-link" href="https://voguemercedesdevelopmentengines.vercel.app/" target="_blank" rel="noreferrer">View Project <FaArrowRight /></a>
          </div>
        </article>
        <article className="project-card project-coming">
          <SectionLink className="coming-image" section="contact" aria-label="Get in touch about upcoming projects">
            <span>More Projects<br />Coming Soon</span>
            <b><FaArrowRight /></b>
          </SectionLink>
        </article>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills-section image-section" id="skills">
      <div className="skills-intro">
        <p className="eyebrow">Technical Skills</p>
        <h2>Tools and technologies I use.</h2>
        <p>A wide range of modern tools and technologies for building scalable, secure and high-performance web applications.</p>
        <SectionLink className="button button-outline" section="contact">View All Skills <FaArrowRight /></SectionLink>
      </div>
      <div className="skills-board glass-card">
        <div className="skill-group">
          <h3><FaCode /> Languages</h3>
          <p><FaPython /> Python <span>JavaScript</span><span>C++</span></p>
        </div>
        <div className="skill-group">
          <h3><FaServer /> Backend</h3>
          <p><b className="django-mark">dj</b> Django <span>FastAPI</span><span>SQLAlchemy</span></p>
        </div>
        <div className="skill-group">
          <h3><FaLaptopCode /> Frontend</h3>
          <p><FaReact /> React <span>Next.js</span><span>Tailwind CSS</span></p>
        </div>
        <div className="skill-group">
          <h3><FaDatabase /> Databases</h3>
          <p><span>MySQL</span><span>SQLite</span><span>PostgreSQL</span></p>
        </div>
        <div className="skill-group">
          <h3><FaHeart /> Auth &amp; Payment</h3>
          <p><span>JWT</span><span>Google OAuth</span><span>JazzCash</span></p>
        </div>
        <div className="skill-group">
          <h3><FaBriefcase /> Tools &amp; Deployment</h3>
          <p><span>Git</span><span>GitHub</span><span>Postman</span><span>Vercel</span></p>
        </div>
        <div className="skill-group skill-group-wide">
          <h3><FaGraduationCap /> Other Skills</h3>
          <p><span>OOP</span><span>DSA</span><span>Problem Solving</span><span>Team Collaboration</span></p>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="education-section image-section" id="education">
      <div className="education-title">
        <FaGraduationCap />
        <div>
          <p className="eyebrow">Education</p>
          <h2>BS in Computer Science</h2>
          <p>University of Baltistan</p>
          <small>◷ &nbsp;Mar 2022 — Dec 2025</small>
        </div>
      </div>
      <div className="education-copy">
        During my degree, I developed a foundation in programming, software development,
        databases, algorithms and data structures. My Final Year Project, Sulli Shopping
        Center, gave me practical experience building a complete full-stack application.
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section image-section" id="contact">
      <p className="eyebrow">Contact</p>
      <h2>Have a good problem?<br /><span>Let&apos;s make something useful.</span></h2>
      <div className="contact-cards">
        <a href="mailto:sulimanmeersadpara@gmail.com"><FaEnvelope /><span><small>Email</small>sulimanmeersadpara@gmail.com</span></a>
        <a href="tel:+923117480168"><FaPhoneAlt /><span><small>Phone</small>+92 311 7480168</span></a>
        <div><FaMapMarkerAlt /><span><small>Location</small>Johar Town, Lahore</span></div>
        <a className="button button-primary contact-button" href="mailto:sulimanmeersadpara@gmail.com">Get In Touch <FaArrowRight /></a>
      </div>
    </section>
  );
}

function SiteFooter({ activeSection, onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <SectionLink className="brand footer-brand" section="top">
          <Image className="brand-logo" src="/logo.png" alt="" width={40} height={40} />
          <span className="brand-copy"><strong>Muhammad Suliman Meer</strong><small>Full Stack Developer</small></span>
        </SectionLink>
        <nav aria-label="Footer navigation">
          {sectionLinks.map(({ id, href, label }) => (
            <Link
              key={id}
              href={href}
              scroll={false}
              aria-current={activeSection === id ? "page" : undefined}
              onClick={() => onNavigate(id)}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="footer-socials">
          <a href="https://github.com/sulimanmeersadpara" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/salman-meer-07b48b365/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Muhammad Suliman Meer. All rights reserved.</span>
        <span>Built with <b>Next.js</b> + <b>Tailwind CSS</b> <FaHeart /></span>
      </div>
    </footer>
  );
}

export default function Home({ initialSection = "top" }) {
  const [activeSection, setActiveSection] = useState(initialSection);

  useEffect(() => {
    const animationFrame = window.requestAnimationFrame(() => {
      setActiveSection(initialSection);
      const section = document.getElementById(initialSection);

      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, [initialSection]);

  useEffect(() => {
    let animationFrame;

    const updateActiveSection = () => {
      animationFrame = undefined;

      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        setActiveSection("contact");
        return;
      }

      const activationLine = window.scrollY + Math.max(90, window.innerHeight * 0.3);
      const visibleSection = [...sectionLinks]
        .reverse()
        .find(({ id }) => {
          const section = document.getElementById(id);
          return section && section.offsetTop <= activationLine;
        });

      setActiveSection(visibleSection?.id ?? "top");
    };

    const handleScroll = () => {
      if (animationFrame === undefined) {
        animationFrame = window.requestAnimationFrame(updateActiveSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (animationFrame !== undefined) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  const handleNavigate = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <SiteHeader activeSection={activeSection} onNavigate={handleNavigate} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <SiteFooter activeSection={activeSection} onNavigate={handleNavigate} />
    </>
  );
}
