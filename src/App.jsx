import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const PROFILE = {
  name: "Sabid Mahmud",
  role: "Software engineer focused on full-stack products, AI workflows, and polished user experiences.",
  summary:
    "Computer Science student at Texas State University building practical software across React, Next.js, Supabase, FastAPI, Streamlit, and MERN-style systems. I care about clean architecture, clear interfaces, and products that feel good to use.",
  location: "San Marcos, TX",
  email: "sabidmahmud01@gmail.com",
  phone: "(512) 214-0762",
  github: "https://github.com/sabidmahmud01",
  linkedin: "https://www.linkedin.com/in/sabidmahmud01",
  handshake: "https://txstate.joinhandshake.com/profiles/sabidmahmud",
  photo: `${import.meta.env.BASE_URL}headshot.jpg`,
  resume: `${import.meta.env.BASE_URL}CS%20Resume.pdf`,
};

const PROJECTS = [
  {
    title: "Next Play Task Board",
    type: "Featured assessment build",
    date: "Jul 2026",
    summary:
      "A polished Kanban sprint board with anonymous Supabase guest auth, RLS-protected persistence, drag-and-drop status updates, labels, comments, activity logs, team members, and responsive UI polish.",
    stack: ["JavaScript", "Supabase", "RLS", "Vercel", "HTML", "CSS"],
    impact: "Built as a full-stack internship assessment and shipped live with database-backed guest sessions.",
    highlights: [
      "Implemented Supabase anonymous auth so each guest only sees their own tasks.",
      "Designed a premium board UI with animated cards, column meters, drag feedback, and modal transitions.",
      "Documented setup, schema, tradeoffs, and advanced features for evaluator review.",
    ],
    repo: "https://github.com/sabidmahmud01/Next-Play-Task-Board",
    demo: "https://next-play-task-board-livid.vercel.app",
    accent: "teal",
  },
  {
    title: "AI Resume Analyzer",
    type: "AI backend project",
    date: "Jan 2026",
    summary:
      "A resume-to-job-description analyzer that uses semantic similarity and skill extraction to identify alignment gaps and produce actionable feedback.",
    stack: ["Python", "FastAPI", "Sentence Transformers", "scikit-learn", "spaCy"],
    impact: "Turns an ambiguous job search problem into measurable match scoring and targeted resume improvements.",
    highlights: [
      "Used embeddings and cosine similarity to score resume and job description alignment.",
      "Added missing-skill identification so users can understand why a match score changes.",
      "Structured the service so model logic and API concerns stay separated.",
    ],
    repo: "https://github.com/sabidmahmud01/ai-resume-analyzer",
    accent: "blue",
  },
  {
    title: "LocalConnect",
    type: "Full-stack application",
    date: "Dec 2025",
    summary:
      "A MERN-style app concept that connects travelers with local guides through a separate client-server architecture.",
    stack: ["JavaScript", "MongoDB", "Express", "React", "Node.js"],
    impact: "Practiced building a database-backed product with reusable UI, routes, and API-driven data flow.",
    highlights: [
      "Organized frontend and backend code into separate concerns for a clean full-stack layout.",
      "Built around reusable product flows rather than static portfolio pages.",
      "Used the project to strengthen API, state, and database design fundamentals.",
    ],
    repo: "https://github.com/sabidmahmud01/LocalConnect",
    accent: "gold",
  },
  {
    title: "Data Dashboard",
    type: "Analytics interface",
    date: "Jul 2026",
    summary:
      "A dashboard project focused on turning structured data into a readable interface with summaries, visual hierarchy, and interactive exploration.",
    stack: ["JavaScript", "React", "Data UI", "Charts", "CSS"],
    impact: "Shows dashboard thinking: scanning, filtering, comparison, and decision-oriented layout.",
    highlights: [
      "Built a dashboard-style interface for reading data quickly.",
      "Focused on clean states, component reuse, and useful visual hierarchy.",
      "Practiced turning raw project requirements into a product-like interface.",
    ],
    repo: "https://github.com/sabidmahmud01/Project6_Dashboard",
    accent: "slate",
  },
  {
    title: "Crewmates",
    type: "Interactive React project",
    date: "Jul 2026",
    summary:
      "A React project centered on creating, managing, and presenting a small set of user-generated entries with a clean interface.",
    stack: ["JavaScript", "React", "Vite", "State Management", "CSS"],
    impact: "Strengthened CRUD-style UI patterns, component organization, and interaction design.",
    highlights: [
      "Created a user-facing app flow around adding and managing entries.",
      "Used component-based React patterns to keep the interface maintainable.",
      "Improved frontend polish through layout, spacing, and visual feedback.",
    ],
    repo: "https://github.com/sabidmahmud01/Project7_Crewmates",
    accent: "violet",
  },
  {
    title: "Portfolio Website",
    type: "Personal brand system",
    date: "2026",
    summary:
      "A fast React and Vite portfolio designed to present software projects, technical strengths, experience, and contact paths clearly.",
    stack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    impact: "Serves as the home base for internship applications and project storytelling.",
    highlights: [
      "Built with reusable content objects so projects and experience are easy to update.",
      "Added motion thoughtfully for section reveals, hover states, and recruiter-friendly navigation.",
      "Structured around proof: project links, live demos, skills, experience, and resume access.",
    ],
    repo: "https://github.com/sabidmahmud01/Portfolio",
    accent: "green",
  },
];

const SKILLS = {
  Languages: ["Python", "JavaScript", "TypeScript", "C++", "Java", "HTML", "CSS", "SQL"],
  Frontend: ["React", "Next.js", "Vite", "Tailwind CSS", "Responsive Design", "Framer Motion"],
  Backend: ["FastAPI", "Node.js", "Express", "Supabase", "MongoDB", "REST APIs", "RLS"],
  "AI & Data": ["Google Gemini API", "Sentence Embeddings", "scikit-learn", "spaCy", "Prompt Design", "pytest"],
  Workflow: ["Git", "GitHub", "Vercel", "Debugging", "Documentation", "Code Review"],
};

const EXPERIENCE = [
  {
    company: "Nexus Games Labs",
    role: "Game Development Intern",
    date: "2026",
    bullets: [
      "Used AI-assisted architecture review to understand a large game codebase before planning gameplay changes.",
      "Studied relationships between client, server, rendering, game state, and gameplay systems to make safer implementation decisions.",
    ],
  },
  {
    company: "Texas State University",
    role: "Orientation Leader, New Student & Family Experiences",
    date: "Summer 2025",
    bullets: [
      "Led campus tours, check-ins, information sessions, and group discussions for incoming students and families.",
      "Handled questions in fast-paced settings by communicating clearly and coordinating with supervisors when needed.",
    ],
  },
  {
    company: "Texas State University",
    role: "Academic Athletic Center Tutor",
    date: "2025",
    bullets: [
      "Tutored student-athletes by explaining academic concepts, reviewing assignments, and strengthening study habits.",
      "Adapted explanations to different learning styles while supporting exam preparation and concept mastery.",
    ],
  },
  {
    company: "Texas State University",
    role: "IT Facilities Student Worker",
    date: "2025",
    bullets: [
      "Assisted with basic technical support, equipment setup, troubleshooting, and daily technology needs.",
      "Helped organize devices, maintain workstations, and communicate technical issues in a professional office environment.",
    ],
  },
];

const EDUCATION = {
  school: "Texas State University",
  degree: "Bachelor of Science in Computer Science",
  date: "Expected August 2028",
  focus: "Software engineering, data structures, web development, AI-integrated systems, and computer architecture.",
};

const STATS = [
  ["16+", "Public repositories"],
  ["6", "Featured projects"],
  ["Full-stack", "Primary focus"],
  ["2028", "BSCS expected"],
];

const navItems = [
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["contact", "Contact"],
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const useDarkMode = () => {
  const [dark, setDark] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("theme") === "dark" ||
        (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)
      : true
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return { dark, setDark };
};

const Section = ({ id, eyebrow, title, intro, children }) => (
  <section id={id} className="scroll-mt-24 border-t border-zinc-200/80 bg-white/55 py-16 dark:border-white/10 dark:bg-zinc-950/40">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        className="mb-9 max-w-3xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={fadeUp}
        transition={{ duration: 0.45 }}
      >
        <p className="text-xs font-bold uppercase text-teal-700 dark:text-teal-300">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-black text-zinc-950 sm:text-4xl dark:text-white">{title}</h2>
        {intro && <p className="mt-4 text-base leading-7 text-zinc-650 dark:text-zinc-300">{intro}</p>}
      </motion.div>
      {children}
    </div>
  </section>
);

const Pill = ({ children, strong = false }) => (
  <span
    className={`inline-flex items-center rounded-[8px] border px-3 py-1.5 text-xs font-bold ${
      strong
        ? "border-teal-700 bg-teal-700 text-white dark:border-teal-300 dark:bg-teal-300 dark:text-zinc-950"
        : "border-zinc-200 bg-white text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
    }`}
  >
    {children}
  </span>
);

const NavButton = ({ target, children }) => (
  <button
    onClick={() => document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" })}
    className="rounded-[8px] px-3 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-200 dark:hover:bg-white/10 dark:hover:text-white"
  >
    {children}
  </button>
);

const LinkButton = ({ href, children, primary = false }) => (
  <a
    href={href}
    target={href?.startsWith("http") ? "_blank" : undefined}
    rel={href?.startsWith("http") ? "noreferrer" : undefined}
    className={`inline-flex min-h-10 items-center justify-center rounded-[8px] px-4 py-2 text-sm font-extrabold transition ${
      primary
        ? "bg-zinc-950 text-white shadow-[0_16px_36px_rgba(15,23,42,0.18)] hover:-translate-y-0.5 hover:bg-teal-800 dark:bg-teal-300 dark:text-zinc-950 dark:hover:bg-teal-200"
        : "border border-zinc-300 bg-white/80 text-zinc-900 hover:-translate-y-0.5 hover:border-teal-700 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-teal-300"
    }`}
  >
    {children}
  </a>
);

const ProjectCard = ({ project, index }) => (
  <motion.article
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.24) }}
    whileHover={{ y: -5 }}
    className={`project-card accent-${project.accent}`}
  >
    <div className="flex flex-wrap items-center justify-between gap-3">
      <Pill strong={index === 0}>{project.type}</Pill>
      <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">{project.date}</span>
    </div>

    <div>
      <h3 className="mt-5 text-2xl font-black text-zinc-950 dark:text-white">{project.title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-650 dark:text-zinc-300">{project.summary}</p>
    </div>

    <div className="rounded-[8px] border border-zinc-200 bg-zinc-50 p-4 text-sm font-semibold text-zinc-800 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100">
      {project.impact}
    </div>

    <div className="flex flex-wrap gap-2">
      {project.stack.map((item) => (
        <Pill key={item}>{item}</Pill>
      ))}
    </div>

    <ul className="space-y-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
      {project.highlights.map((highlight) => (
        <li key={highlight} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-teal-700 dark:bg-teal-300" />
          <span>{highlight}</span>
        </li>
      ))}
    </ul>

    <div className="mt-auto flex flex-wrap gap-3 pt-2">
      {project.demo && <LinkButton href={project.demo} primary>Live demo</LinkButton>}
      <LinkButton href={project.repo}>Source code</LinkButton>
    </div>
  </motion.article>
);

const SkillGroup = ({ category, items }) => (
  <motion.article
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.45 }}
    className="rounded-[8px] border border-zinc-200 bg-white p-5 shadow-[0_14px_34px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-zinc-900/70"
  >
    <h3 className="text-lg font-black">{category}</h3>
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((item) => (
        <Pill key={item}>{item}</Pill>
      ))}
    </div>
  </motion.article>
);

const ExperienceItem = ({ item, index }) => (
  <motion.article
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.45, delay: index * 0.05 }}
    className="relative rounded-[8px] border border-zinc-200 bg-white p-5 shadow-[0_14px_34px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-zinc-900/70"
  >
    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h3 className="text-lg font-black text-zinc-950 dark:text-white">{item.role}</h3>
        <p className="font-semibold text-teal-700 dark:text-teal-300">{item.company}</p>
      </div>
      <span className="rounded-[8px] bg-zinc-100 px-3 py-1 text-sm font-bold text-zinc-600 dark:bg-white/10 dark:text-zinc-300">
        {item.date}
      </span>
    </div>
    <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
      {item.bullets.map((bullet) => (
        <li key={bullet} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-950 dark:bg-white" />
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  </motion.article>
);

export default function App() {
  const { dark, setDark } = useDarkMode();
  const year = new Date().getFullYear();
  const skillCount = useMemo(() => Object.values(SKILLS).flat().length, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: PROFILE.name,
      url: window.location.origin,
      email: PROFILE.email,
      telephone: PROFILE.phone,
      sameAs: [PROFILE.github, PROFILE.linkedin, PROFILE.handshake],
      jobTitle: PROFILE.role,
      address: { "@type": "PostalAddress", addressLocality: PROFILE.location },
    });
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f2ea] text-zinc-950 dark:bg-[#080b11] dark:text-white">
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-[#f5f2ea]/90 backdrop-blur-xl dark:border-white/10 dark:bg-[#080b11]/88">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 rounded-[8px] text-left"
          >
            <img src={PROFILE.photo} alt={PROFILE.name} className="h-10 w-10 rounded-[8px] object-cover ring-1 ring-zinc-200 dark:ring-white/15" />
            <span className="hidden font-black sm:block">{PROFILE.name}</span>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map(([target, label]) => (
              <NavButton key={target} target={target}>{label}</NavButton>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={PROFILE.resume}
              className="hidden rounded-[8px] border border-zinc-300 bg-white/75 px-3 py-2 text-sm font-bold hover:border-teal-700 dark:border-white/15 dark:bg-white/5 dark:hover:border-teal-300 sm:inline-flex"
            >
              Resume
            </a>
            <button
              aria-label="Toggle theme"
              onClick={() => setDark(!dark)}
              className="rounded-[8px] border border-zinc-300 bg-white/75 px-3 py-2 text-sm font-bold hover:border-teal-700 dark:border-white/15 dark:bg-white/5 dark:hover:border-teal-300"
            >
              {dark ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(245,242,234,0.98)_0%,rgba(245,242,234,0.92)_42%,rgba(245,242,234,0.25)_78%)] dark:bg-[linear-gradient(90deg,rgba(8,11,17,0.98)_0%,rgba(8,11,17,0.88)_46%,rgba(8,11,17,0.34)_82%)]" />
          <img
            src={PROFILE.photo}
            alt=""
            className="absolute inset-y-0 right-0 hidden h-full w-[48%] object-cover object-center opacity-75 md:block"
          />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(23,25,31,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(23,25,31,0.08)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35 dark:opacity-20" />

          <div className="relative mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl content-center gap-10 px-4 py-16 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="max-w-3xl"
            >
              <p className="text-sm font-black uppercase text-teal-700 dark:text-teal-300">Software Engineering Portfolio</p>
              <h1 className="mt-5 text-5xl font-black leading-[0.98] text-zinc-950 sm:text-6xl lg:text-7xl dark:text-white">
                {PROFILE.name}
              </h1>
              <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-zinc-800 dark:text-zinc-200">{PROFILE.role}</p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-700 dark:text-zinc-300">{PROFILE.summary}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton href="#projects" primary>View selected work</LinkButton>
                <LinkButton href={PROFILE.resume}>Resume</LinkButton>
                <LinkButton href={`mailto:${PROFILE.email}`}>Email me</LinkButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.55 }}
              className="grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {STATS.map(([value, label]) => (
                <div key={label} className="rounded-[8px] border border-zinc-200 bg-white/78 p-4 shadow-[0_16px_38px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-zinc-950/72">
                  <strong className="block text-2xl font-black">{value}</strong>
                  <span className="mt-1 block text-xs font-bold uppercase text-zinc-500 dark:text-zinc-400">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <Section
          id="projects"
          eyebrow="Selected work"
          title="Projects that show product thinking and engineering depth."
          intro="These are the projects I would want an interviewer to open first: deployed work, AI systems, full-stack builds, dashboards, and frontend projects with clear interaction design."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </Section>

        <Section
          id="skills"
          eyebrow="Technical range"
          title={`${skillCount} tools and concepts across product development.`}
          intro="My strongest work sits where frontend polish, backend structure, AI features, and practical deployment meet."
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {Object.entries(SKILLS).map(([category, items]) => (
              <SkillGroup key={category} category={category} items={items} />
            ))}
          </div>
        </Section>

        <section className="border-t border-zinc-200/80 bg-[#10151f] py-16 text-white dark:border-white/10">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
            >
              <p className="text-xs font-black uppercase text-teal-300">Education</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">{EDUCATION.school}</h2>
              <p className="mt-4 text-lg font-semibold text-zinc-200">{EDUCATION.degree}</p>
              <p className="mt-2 text-zinc-400">{EDUCATION.date}</p>
              <p className="mt-5 leading-7 text-zinc-300">{EDUCATION.focus}</p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-3">
              {["Product UI", "AI Workflows", "Full-stack Systems"].map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45 }}
                  className="rounded-[8px] border border-white/10 bg-white/6 p-5"
                >
                  <h3 className="font-black">{item}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    I like projects where the technical architecture and the user experience support each other.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Section
          id="experience"
          eyebrow="Experience"
          title="Communication, technical support, tutoring, and engineering practice."
          intro="My work experience has helped me explain ideas clearly, support people under pressure, and approach technical problems with patience."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            {EXPERIENCE.map((item, index) => (
              <ExperienceItem key={`${item.company}-${item.role}`} item={item} index={index} />
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Open to software engineering internships and product-minded engineering teams."
          intro="The fastest way to reach me is email. I am especially interested in full-stack, AI-integrated, sports-tech, and user-facing software roles."
        >
          <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[8px] border border-zinc-200 bg-white p-6 shadow-[0_14px_34px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-zinc-900/70">
              <h3 className="text-xl font-black">Reach me</h3>
              <div className="mt-5 grid gap-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                <a className="hover:text-teal-700 dark:hover:text-teal-300" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
                <p>{PROFILE.phone}</p>
                <p>{PROFILE.location}</p>
              </div>
            </div>
            <div className="rounded-[8px] border border-zinc-200 bg-white p-6 shadow-[0_14px_34px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-zinc-900/70">
              <h3 className="text-xl font-black">Profiles</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                <LinkButton href={PROFILE.github} primary>GitHub</LinkButton>
                <LinkButton href={PROFILE.linkedin}>LinkedIn</LinkButton>
                <LinkButton href={PROFILE.handshake}>Handshake</LinkButton>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-zinc-200 bg-white py-8 dark:border-white/10 dark:bg-zinc-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-sm font-semibold text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>Copyright {year} {PROFILE.name}. All rights reserved.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="w-fit rounded-[8px] hover:text-teal-700 dark:hover:text-teal-300">
            Back to top
          </button>
        </div>
      </footer>
    </div>
  );
}
