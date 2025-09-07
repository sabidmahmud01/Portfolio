import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

// ===============
// Quick-start notes (delete me):
// 1) Put this file in src/App.jsx of a Vite React project with Tailwind enabled.
// 2) Add your real links in the PROFILE + PROJECTS data below.
// 3) Drop a PDF at /public/resume.pdf to make the Resume button work.
// 4) For GitHub Pages, set Vite's `base` to '/<your-repo>/' in vite.config.js.
// ===============

// ---- Editable profile data ----
const PROFILE = {
  name: "Sabid Mahmud",
  role: "Computer Science Student · Texas State University (’28)",
  summary:
    "Computer Science student skilled in C++ with experience in Python, Java, and web technologies. Built real-world CLI systems and a full‑stack notes app; fast learner with leadership and mentoring experience.",
  location: "Texas, USA",
  email: "sabidmahmud01@gmail.com",
  github: "https://github.com/sabidmahmud01",
  linkedin: "https://www.linkedin.com/in/sabidmahmud01",
  handshake: "https://txstate.joinhandshake.com/profiles/uqytf2",
  photo: `${import.meta.env.BASE_URL}headshot.jpg`
};

// ---- Editable projects data ----
const PROJECTS = [
  {
    title: "ThinkBoard (MERN Notes App)",
    tagline: "Full‑stack notes app with create/read/update/delete, deployed front/back.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Mongoose"],
    highlights: [
      "RESTful APIs with Express and MongoDB Atlas",
      "Reusable React components & hooks; stateful UI",
      "Error handling middleware & rate limiting; production deploys (Vercel + Render/Heroku)",
    ],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    repo: "https://github.com/sabidmahmud01", // update to specific repo when available
    demo: "", // add demo URL if deployed
  },
  {
    title: "Portfolio (this site)",
    tagline: "Next‑Level React + Tailwind portfolio with dark mode and SEO.",
    stack: ["React", "Vite", "Tailwind", "Framer Motion"],
    highlights: [
      "Responsive, accessible, and fast",
      "Configurable via PROFILE / PROJECTS data",
      "Deployed to GitHub Pages",
    ],
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    repo: "https://github.com/sabidmahmud01/Portfolio",
    demo: `${import.meta.env.BASE_URL}`,
  },
];

// ---- Skills ----
const SKILLS = {
  Languages: ["C++", "Python", "Java", "JavaScript"],
  Frameworks: ["React", "Node", "Express", "REST APIs", "Mongoose"],
  Cloud: ["MongoDB Atlas", "Git", "Linux/CLI", "Arduino", "Vercel", "Render/Heroku", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  // Add more categories as needed
};

// ---- Experience ----
const EXPERIENCE = [
  {
    company: "Texas State University",
    role: "New Student Orientation Leader",
    date: "2024",
    bullets: [
      "Facilitated 24 orientation sessions; delivered presentations and guided incoming students.",
      "Collaborated with staff and peers to ensure a welcoming, informative experience.",
    ],
  },
  {
    company: "ASIS Robotics Club, Dhaka",
    role: "Student Robotics Mentor",
    date: "Aug 2022",
    bullets: [
      "Taught Arduino/C++: sensor integration, motor control, and logic design.",
      "Helped organize internal hackathons to promote STEM learning.",
    ],
  },
];

// ---- Utilities ----
const useDarkMode = () => {
  const [dark, setDark] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("theme") === "dark" ||
        (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      : true
  );
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);
  return { dark, setDark };
};

const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
      {title}
    </h2>
    {children}
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium backdrop-blur border-zinc-200/50 dark:border-zinc-800/80">
    {children}
  </span>
);

const ProjectCard = ({ p }) => (
  <motion.a
    href={p.demo || p.repo}
    target="_blank"
    rel="noreferrer"
    whileHover={{ y: -4 }}
    className="group rounded-2xl border border-zinc-200/60 dark:border-zinc-800/80 overflow-hidden bg-white/60 dark:bg-zinc-900/50 backdrop-blur shadow-sm hover:shadow-md transition-shadow"
  >
    <div className="aspect-[16/9] overflow-hidden">
      <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform" />
    </div>
    <div className="p-5">
      <div className="flex flex-wrap gap-2 mb-3">
        {p.stack.map((s) => (
          <Pill key={s}>{s}</Pill>
        ))}
      </div>
      <h3 className="text-lg font-semibold">{p.title}</h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{p.tagline}</p>
      <ul className="list-disc pl-5 mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
        {p.highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
      <div className="flex gap-3 mt-4">
        {p.demo && (
          <a
            href={p.demo}
            target="_blank"
            rel="noreferrer"
            className="text-sm underline underline-offset-4 hover:no-underline"
          >
            Live Demo →
          </a>
        )}
        {p.repo && (
          <a
            href={p.repo}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-zinc-700 dark:text-zinc-300 hover:underline underline-offset-4"
          >
            Source Code
          </a>
        )}
      </div>
    </div>
  </motion.a>
);

const NavLink = ({ to, children }) => (
  <button
    onClick={() => {
      const el = document.getElementById(to);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }}
    className="text-sm font-medium text-zinc-700/90 dark:text-zinc-200/90 hover:text-zinc-900 dark:hover:text-white"
  >
    {children}
  </button>
);

export default function App() {
  const { dark, setDark } = useDarkMode();

  // Basic JSON-LD SEO (optional)
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: PROFILE.name,
      url: window.location.origin,
      sameAs: [PROFILE.github, PROFILE.linkedin, PROFILE.x].filter(Boolean),
      jobTitle: PROFILE.role,
      address: { "@type": "PostalAddress", addressLocality: PROFILE.location },
    });
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black text-zinc-900 dark:text-zinc-100">
      {/* Sticky header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/30 border-b border-zinc-200/50 dark:border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-500" />
            <span className="font-semibold tracking-tight">{PROFILE.name}</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6">
            <NavLink to="projects">Projects</NavLink>
            <NavLink to="skills">Skills</NavLink>
            <NavLink to="experience">Experience</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={`${import.meta.env.BASE_URL}CS%20Resume.pdf`}
              className="hidden sm:inline-flex items-center text-sm font-medium rounded-xl border border-zinc-200/70 dark:border-zinc-800/70 px-3 py-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              Resume
            </a>
            <button
              aria-label="Toggle theme"
              onClick={() => setDark(!dark)}
              className="rounded-xl border border-zinc-200/70 dark:border-zinc-800/70 px-3 py-1.5 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              {dark ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400">Portfolio</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mt-2">
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">{PROFILE.name}</span>
            </h1>
            <p className="mt-3 text-lg text-zinc-700 dark:text-zinc-300">{PROFILE.role}</p>
            <p className="mt-4 max-w-prose text-zinc-700/90 dark:text-zinc-300/90">{PROFILE.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center rounded-xl bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 px-4 py-2 text-sm font-semibold shadow hover:opacity-90">See Projects</a>
              <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center rounded-xl border border-zinc-200/70 dark:border-zinc-800/70 px-4 py-2 text-sm font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-900">Contact Me</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-500/30 via-sky-500/30 to-emerald-500/30 blur-2xl" />
              <div className="relative rounded-3xl border border-zinc-200/60 dark:border-zinc-800/80 p-6 bg-white/50 dark:bg-zinc-900/40 backdrop-blur">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <Stat kpi={PROJECTS.length} label="Projects" />
                  <Stat kpi={SKILLS.Languages.length + SKILLS.Frameworks.length + SKILLS.Cloud.length} label="Skills" />
                  <Stat kpi={year - 2022} label="Years coding" />
                </div>
                <div className="mt-6 rounded-xl border border-dashed border-zinc-200/70 dark:border-zinc-800/70 p-4 text-sm text-left">
                  Quick facts:
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-zinc-700 dark:text-zinc-300">
                    <li>Based in {PROFILE.location}</li>
                    <li>Open to SWE internships (Summer 2026)</li>
                    <li>Interested in full‑stack & systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(SKILLS).map(([cat, items]) => (
            <div key={cat} className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800/80 p-5 bg-white/50 dark:bg-zinc-900/40 backdrop-blur">
              <h3 className="font-semibold mb-3">{cat}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="space-y-6">
          {EXPERIENCE.map((e) => (
            <div key={e.company} className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800/80 p-5 bg-white/50 dark:bg-zinc-900/40 backdrop-blur">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <h3 className="font-semibold text-lg">{e.role} · {e.company}</h3>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">{e.date}</span>
              </div>
              <ul className="list-disc pl-5 mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Get in touch">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800/80 p-6 bg-white/50 dark:bg-zinc-900/40 backdrop-blur">
            <h3 className="font-semibold">Email</h3>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 mt-1">I read everything. Quickest way to reach me.</p>
            <a href={`mailto:${PROFILE.email}`} className="inline-flex mt-4 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 px-4 py-2 text-sm font-semibold shadow hover:opacity-90">Send an email</a>
          </div>
          <div className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800/80 p-6 bg-white/50 dark:bg-zinc-900/40 backdrop-blur">
            <h3 className="font-semibold">Social</h3>
            <div className="mt-3 flex flex-wrap gap-3">
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-sm underline underline-offset-4 hover:no-underline">GitHub</a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-sm underline underline-offset-4 hover:no-underline">LinkedIn</a>
              <a href={PROFILE.x} target="_blank" rel="noreferrer" className="text-sm underline underline-offset-4 hover:no-underline">X</a>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-zinc-200/60 dark:border-zinc-800/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <p className="text-zinc-600 dark:text-zinc-400">© {year} {PROFILE.name}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-zinc-600 dark:text-zinc-400">
            <a href="#" onClick={(e)=>{e.preventDefault(); window.scrollTo({top:0, behavior:'smooth'});}} className="hover:underline underline-offset-4">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Stat({ kpi, label }) {
  const pretty = useMemo(() => (typeof kpi === "number" ? new Intl.NumberFormat().format(kpi) : kpi), [kpi]);
  return (
    <div className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800/80 p-4 bg-white/50 dark:bg-zinc-900/40">
      <div className="text-3xl font-extrabold tracking-tight">{pretty}</div>
      <div className="text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mt-1">{label}</div>
    </div>
  );
}

// Tailwind helpers (optional): ensure your global CSS includes:
// html { scroll-behavior: smooth; }
// @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
