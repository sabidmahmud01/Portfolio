import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const PROFILE = {
  name: "Sabid Mahmud",
  role: "Computer Science student building full-stack and AI-integrated software",
  summary:
    "Computer Science student at Texas State University with hands-on experience across Python, JavaScript, TypeScript, React, Next.js, FastAPI, Streamlit, and MERN projects. I like building practical software that is clear, testable, and useful.",
  location: "San Marcos, TX",
  email: "sabidmahmud01@gmail.com",
  phone: "(512) 214-0762",
  github: "https://github.com/sabidmahmud01",
  linkedin: "https://www.linkedin.com/in/sabidmahmud01",
  handshake: "https://txstate.joinhandshake.com/profiles/sabidmahmud",
  photo: `${import.meta.env.BASE_URL}headshot.jpg`,
  resume: `${import.meta.env.BASE_URL}CS%20Resume.pdf`,
};

const EDUCATION = {
  school: "Texas State University",
  location: "San Marcos, TX",
  degree: "Bachelor of Science in Computer Science",
  date: "Expected August 2028",
  focus:
    "Coursework and project focus: software engineering, data structures, web development, AI-integrated systems, and computer architecture.",
};

const PROJECTS = [
  {
    title: "AI-Powered Number Guessing Game",
    date: "Apr 2026",
    tagline:
      "An adaptive Streamlit game where a human player competes against a Gemini-powered AI opponent.",
    stack: ["Python", "Streamlit", "Google Gemini API", "pytest"],
    highlights: [
      "Built difficulty-based strategies, confidence scoring, and feedback-driven guessing logic.",
      "Separated Streamlit UI, session state, validation, AI strategy, and Gemini API calls for maintainable code.",
      "Implemented 15+ pytest cases, logging, error handling, and fallback logic for unreliable API responses.",
    ],
    repo: "https://github.com/sabidmahmud01",
  },
  {
    title: "AI Resume Analyzer",
    date: "Jan 2026",
    tagline:
      "Backend service that compares resumes against job descriptions with semantic scoring.",
    stack: ["Python", "FastAPI", "Sentence Transformers", "scikit-learn", "spaCy"],
    highlights: [
      "Used sentence embeddings and cosine similarity to generate semantic match scores.",
      "Added skill extraction and missing-skill identification to help users understand resume gaps.",
    ],
    repo: "https://github.com/sabidmahmud01",
  },
  {
    title: "LocalConnect",
    date: "Dec 2025",
    tagline:
      "MERN application concept connecting travelers with local guides through a structured client-server build.",
    stack: ["JavaScript", "MongoDB", "Express", "React", "Node.js", "HTML", "CSS"],
    highlights: [
      "Created separate frontend and backend folders for a clean full-stack architecture.",
      "Practiced reusable UI, API-based data flow, and database-backed application logic.",
    ],
    repo: "https://github.com/sabidmahmud01",
  },
  {
    title: "Membership QR Scanner for BSA TXST",
    date: "Dec 2025",
    tagline:
      "Deployed membership scanner project for a student organization.",
    stack: ["TypeScript", "Next.js"],
    highlights: [
      "Contributed to a QR scanner app while gaining experience with TypeScript, Next.js app structure, and web deployment workflows.",
    ],
    repo: "https://github.com/sabidmahmud01",
  },
  {
    title: "Portfolio Website",
    date: "Sep 2025",
    tagline:
      "Responsive personal portfolio with project, resume, contact, and about sections.",
    stack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Built component-based sections with React and Tailwind CSS.",
      "Used Vite and Framer Motion for fast development, page transitions, hover effects, and interactive UI behavior.",
    ],
    repo: "https://github.com/sabidmahmud01/Portfolio",
    demo: `${import.meta.env.BASE_URL}`,
  },
];

const SKILLS = {
  Languages: ["Python", "JavaScript", "TypeScript", "C++", "Java", "HTML", "CSS"],
  "Frameworks & Tools": [
    "React",
    "Next.js",
    "Vite",
    "Tailwind CSS",
    "FastAPI",
    "Streamlit",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
    "GitHub",
    "pytest",
  ],
  "AI & Data": [
    "Google Gemini API",
    "Sentence Embeddings",
    "Sentence Transformers",
    "scikit-learn",
    "spaCy",
    "Cosine Similarity",
    "Prompt Design",
    "Reliability Testing",
  ],
};

const EXPERIENCE = [
  {
    company: "Texas State University",
    role: "Orientation Leader, New Student & Family Experiences",
    date: "Summer 2025",
    bullets: [
      "Led campus tours, check-ins, information sessions, and group discussions for incoming students and families while representing Texas State professionally.",
      "Resolved student and family questions in fast-paced settings by communicating clearly, staying calm under pressure, and coordinating with supervisors when needed.",
    ],
  },
  {
    company: "Texas State University",
    role: "Academic Athletic Center Tutor",
    date: "2025",
    bullets: [
      "Tutored student-athletes by explaining academic concepts, reviewing assignments, and helping students strengthen study habits and problem-solving skills.",
      "Supported students with exam preparation, homework review, and concept mastery while adapting explanations to different learning styles.",
    ],
  },
  {
    company: "Texas State University",
    role: "IT Facilities Student Worker",
    date: "2025",
    bullets: [
      "Assisted with basic technical support, equipment setup, troubleshooting, and daily technology needs for campus facilities and staff.",
      "Helped organize devices, maintain workstations, communicate technical issues clearly, and support smooth technology operations in a professional office environment.",
    ],
  },
  {
    company: "Jones Dining Hall",
    role: "Food Service / Utilities Worker",
    date: "2025",
    bullets: [
      "Supported daily dining operations through sanitation, restocking, dishroom support, register assistance, and food-service preparation in a high-volume team environment.",
    ],
  },
];

const ACTIVITIES = [
  "Active GitHub portfolio with 16 public repositories across Python, JavaScript, TypeScript, and C++ projects.",
  "Interested in software engineering, AI-integrated applications, web development, and building clear, well-documented projects.",
];

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

const Section = ({ id, title, eyebrow, children }) => (
  <section id={id} className="scroll-mt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
    <div className="mb-7">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
    </div>
    {children}
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-zinc-300/70 dark:border-zinc-700/80 px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-200 bg-white/70 dark:bg-zinc-900/60">
    {children}
  </span>
);

const NavLink = ({ to, children }) => (
  <button
    onClick={() => document.getElementById(to)?.scrollIntoView({ behavior: "smooth", block: "start" })}
    className="text-sm font-medium text-zinc-700/90 dark:text-zinc-200/90 hover:text-teal-700 dark:hover:text-teal-300"
  >
    {children}
  </button>
);

const ProjectCard = ({ project }) => (
  <motion.article
    whileHover={{ y: -4 }}
    className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/70 p-5 shadow-sm transition-shadow hover:shadow-md"
  >
    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <span className="text-sm text-zinc-500 dark:text-zinc-400">{project.date}</span>
    </div>
    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{project.tagline}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {project.stack.map((item) => (
        <Pill key={item}>{item}</Pill>
      ))}
    </div>
    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
      {project.highlights.map((highlight) => (
        <li key={highlight}>{highlight}</li>
      ))}
    </ul>
    <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
      {project.demo && (
        <a className="text-teal-700 hover:underline dark:text-teal-300" href={project.demo}>
          Live demo
        </a>
      )}
      <a className="text-zinc-700 hover:underline dark:text-zinc-200" href={project.repo} target="_blank" rel="noreferrer">
        Source code
      </a>
    </div>
  </motion.article>
);

const Stat = ({ kpi, label }) => {
  const pretty = useMemo(() => (typeof kpi === "number" ? new Intl.NumberFormat().format(kpi) : kpi), [kpi]);

  return (
    <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 bg-white/75 dark:bg-zinc-950/60 p-4">
      <div className="text-3xl font-bold tracking-tight">{pretty}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">{label}</div>
    </div>
  );
};

export default function App() {
  const { dark, setDark } = useDarkMode();
  const year = new Date().getFullYear();
  const skillCount = Object.values(SKILLS).reduce((total, group) => total + group.length, 0);

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
    <div className="min-h-screen bg-stone-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-stone-50/85 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <img
              src={PROFILE.photo}
              alt={PROFILE.name}
              className="h-9 w-9 rounded-lg border border-zinc-200 object-cover dark:border-zinc-800"
            />
            <span className="font-semibold tracking-tight">{PROFILE.name}</span>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <NavLink to="projects">Projects</NavLink>
            <NavLink to="skills">Skills</NavLink>
            <NavLink to="experience">Experience</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={PROFILE.resume}
              className="hidden rounded-lg border border-zinc-300 px-3 py-1.5 text-sm font-medium hover:bg-white dark:border-zinc-700 dark:hover:bg-zinc-900 sm:inline-flex"
            >
              Resume
            </a>
            <button
              aria-label="Toggle theme"
              onClick={() => setDark(!dark)}
              className="rounded-lg border border-zinc-300 px-3 py-1.5 text-sm font-medium hover:bg-white dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              {dark ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-12 pt-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-300">
              Portfolio
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {PROFILE.name}
            </h1>
            <p className="mt-3 text-xl text-zinc-700 dark:text-zinc-300">{PROFILE.role}</p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-700 dark:text-zinc-300">
              {PROFILE.summary}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-lg bg-teal-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-800 dark:bg-teal-400 dark:text-zinc-950 dark:hover:bg-teal-300"
              >
                See projects
              </a>
              <a
                href={PROFILE.resume}
                className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold hover:bg-white dark:border-zinc-700 dark:hover:bg-zinc-900"
              >
                View resume
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold hover:bg-white dark:border-zinc-700 dark:hover:bg-zinc-900"
              >
                Contact
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.55 }}
            className="rounded-lg border border-zinc-200/80 bg-white/80 p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/70"
          >
            <div className="grid grid-cols-3 gap-3 text-center">
              <Stat kpi={PROJECTS.length} label="Projects" />
              <Stat kpi={skillCount} label="Skills" />
              <Stat kpi="2028" label="BSCS" />
            </div>
            <div className="mt-6 border-t border-zinc-200 pt-5 dark:border-zinc-800">
              <h2 className="text-lg font-semibold">{EDUCATION.school}</h2>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {EDUCATION.degree}, {EDUCATION.date}
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">{EDUCATION.focus}</p>
            </div>
          </motion.div>
        </section>

        <Section id="projects" title="Projects" eyebrow="Selected work">
          <div className="grid gap-5 lg:grid-cols-2">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section id="skills" title="Technical Skills" eyebrow="Toolbox">
          <div className="grid gap-5 md:grid-cols-3">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div
                key={category}
                className="rounded-lg border border-zinc-200/70 bg-white/80 p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/70"
              >
                <h3 className="font-semibold">{category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience" eyebrow="Work">
          <div className="space-y-5">
            {EXPERIENCE.map((item) => (
              <article
                key={`${item.role}-${item.company}`}
                className="rounded-lg border border-zinc-200/70 bg-white/80 p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/70"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-semibold">
                    {item.role} | {item.company}
                  </h3>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">{item.date}</span>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Get In Touch" eyebrow="Contact">
          <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-lg border border-zinc-200/70 bg-white/80 p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/70">
              <h3 className="font-semibold">Contact</h3>
              <div className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                <p>{PROFILE.location}</p>
                <p>
                  <a className="hover:underline" href={`mailto:${PROFILE.email}`}>
                    {PROFILE.email}
                  </a>
                </p>
                <p>{PROFILE.phone}</p>
              </div>
            </div>
            <div className="rounded-lg border border-zinc-200/70 bg-white/80 p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/70">
              <h3 className="font-semibold">Activities</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                {ACTIVITIES.map((activity) => (
                  <li key={activity}>{activity}</li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
                <a className="text-teal-700 hover:underline dark:text-teal-300" href={PROFILE.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="text-teal-700 hover:underline dark:text-teal-300" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a className="text-teal-700 hover:underline dark:text-teal-300" href={PROFILE.handshake} target="_blank" rel="noreferrer">
                  Handshake
                </a>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-zinc-200/80 dark:border-zinc-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-zinc-500 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>Copyright {year} {PROFILE.name}. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-fit hover:text-teal-700 hover:underline dark:hover:text-teal-300"
          >
            Back to top
          </button>
        </div>
      </footer>
    </div>
  );
}
