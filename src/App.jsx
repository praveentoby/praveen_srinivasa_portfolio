import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  Server,
  Sparkles,
  X,
} from 'lucide-react';

const profile = {
  name: 'Praveen S',
  role: 'Full Stack Developer',
  phone: '+91 6363868431',
  email: 'praveentoby@gmail.com',
  github: 'https://github.com/praveentoby',
  linkedin: 'https://linkedin.com/in/praveen-srinivasa-a74561160',
  resume: '/Praveen_Resume_Updated.pdf',
  photo: '/profile-photo.jpg',
};

const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

const skills = [
  {
    title: 'Frontend',
    icon: Code2,
    items: ['React.js', 'TypeScript', 'JavaScript ES6+', 'Redux', 'HTML5', 'CSS3', 'SCSS', 'Bootstrap', 'Material UI'],
  },
  {
    title: 'Backend',
    icon: Server,
    items: ['Node.js', 'NestJS', 'PHP', 'CodeIgniter', 'REST APIs', 'Microservices'],
  },
  {
    title: 'Data',
    icon: Database,
    items: ['PostgreSQL', 'MySQL', 'Database design', 'Query optimization'],
  },
  {
    title: 'Cloud and DevOps',
    icon: Cloud,
    items: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'GitLab CI/CD', 'RabbitMQ'],
  },
];

const experience = [
  {
    company: 'Skills Outsource Think Pvt Ltd',
    role: 'Full Stack Developer',
    period: 'Sep 2021 - Jan 2026',
    points: [
      'Built and maintained full-stack applications with React, TypeScript, NestJS, Node.js, and PostgreSQL.',
      'Modernized legacy Angular modules by rebuilding key product areas in React.',
      'Integrated third-party platforms, advertising services, and external APIs.',
      'Worked across Docker, Kubernetes, AWS, GCP, RabbitMQ, and Agile delivery workflows.',
    ],
  },
  {
    company: 'PHAPA Technologies Pvt Ltd',
    role: 'Full Stack Developer',
    period: 'Apr 2019 - Aug 2021',
    points: [
      'Developed web applications with React, PHP, CodeIgniter, MySQL, and REST APIs.',
      'Integrated payment gateways, SMS services, and third-party systems.',
      'Designed and optimized database structures and queries for business applications.',
    ],
  },
  {
    company: 'Engage And Encapsulate Softtech Pvt Ltd',
    role: 'Software Developer',
    period: 'Aug 2018 - Apr 2019',
    points: [
      'Developed responsive web applications using PHP, CodeIgniter, JavaScript, and MySQL.',
      'Implemented SPA features using AJAX and JavaScript for smoother user flows.',
    ],
  },
];

const projects = [
  {
    title: 'Believe Backstage',
    type: 'Professional project',
    description:
      'A campaign management platform for music artists and marketing teams to create and manage digital advertising campaigns.',
    impact: 'Re-engineered major Angular modules in React, integrated advertising systems, shipped new features, and resolved production issues.',
    tags: ['React', 'Angular', 'TypeScript', 'NestJS', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS', 'GCP', 'RabbitMQ'],
  },
  {
    title: 'Legacy Application Modernization',
    type: 'Architecture work',
    description:
      'Modernized older application modules while preserving production behavior and improving maintainability.',
    impact: 'Moved key user workflows toward React and TypeScript while continuing support for existing Angular and PHP systems.',
    tags: ['React', 'Angular', 'TypeScript', 'PHP', 'CodeIgniter'],
  },
  {
    title: 'API and Integration Systems',
    type: 'Backend and integrations',
    description:
      'Built REST API flows and integrated business systems including payment gateways, SMS services, third-party platforms, and advertising services.',
    impact: 'Delivered practical integrations that connected frontend workflows with external business services.',
    tags: ['REST APIs', 'Node.js', 'NestJS', 'MySQL', 'PostgreSQL'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

function SectionHeading({ eyebrow, title, children }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className="mb-9 max-w-3xl"
    >
      <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
        <Sparkles size={16} />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {children ? <p className="mt-4 text-base leading-7 text-slate-300">{children}</p> : null}
    </motion.div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/75 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#home" className="text-lg font-semibold text-white">
          Praveen<span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-slate-300 transition hover:text-white">
              {item}
            </a>
          ))}
        </div>

        <a
          href={profile.resume}
          className="hidden items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink transition hover:bg-teal-300 md:inline-flex"
        >
          <Download size={16} />
          Resume
        </a>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {open ? (
        <div className="section-shell pb-4 md:hidden">
          <div className="glass rounded-lg p-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-3 text-sm text-slate-200 hover:bg-white/10"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="section-shell flex min-h-screen items-center pt-24">
      <div className="grid w-full items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-teal-100">
            <BriefcaseBusiness size={16} />
            7+ years building production web applications
          </div>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            Full-stack developer focused on modern web apps, APIs, and reliable product delivery.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I build and maintain scalable applications with React, TypeScript, Node.js, NestJS, PHP, CodeIgniter, Docker,
            Kubernetes, AWS, and GCP.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-semibold text-ink transition hover:bg-teal-300"
            >
              View Projects
              <ArrowUpRight size={18} />
            </a>
            <a
              href={profile.resume}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
          <div className="mt-8 flex gap-3">
            <a className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-slate-200 hover:bg-white/10" href={profile.github} aria-label="GitHub">
              <Github size={20} />
            </a>
            <a className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-slate-200 hover:bg-white/10" href={profile.linkedin} aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-slate-200 hover:bg-white/10" href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.12 }}>
          <div className="glass rounded-lg p-6 shadow-glow">
            <div className="mb-6 overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
              <img
                src={profile.photo}
                alt={`${profile.name} profile`}
                className="aspect-[4/3] w-full object-cover object-center"
              />
            </div>
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Current focus</p>
                <h2 className="text-2xl font-semibold text-white">Frontend + Full Stack</h2>
              </div>
              <div className="rounded-full bg-coral/15 px-3 py-1 text-sm text-rose-100">Immediate joiner</div>
            </div>
            <div className="space-y-4">
              {[
                ['Frontend modernization', 'React, TypeScript'],
                ['Backend systems', 'Node.js, NestJS, PHP, CodeIgniter'],
                ['Production delivery', 'Docker, Kubernetes, AWS, GCP'],
                ['Integrations', 'REST APIs, payments, SMS, advertising platforms'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-white/10 bg-black/20 p-4">
                  <p className="text-sm text-slate-400">{label}</p>
                  <p className="mt-1 font-medium text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="About" title="A practical developer for real product systems">
          I have 7+ years of experience designing, developing, modernizing, and maintaining business-critical web applications.
          My work spans frontend interfaces, backend APIs, database design, cloud deployments, and third-party integrations.
        </SectionHeading>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['7+', 'Years of professional development'],
            ['3', 'Companies across full-stack roles'],
            ['1', 'Flagship music marketing platform'],
          ].map(([number, label]) => (
            <motion.div
              key={label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="glass rounded-lg p-6"
            >
              <p className="text-4xl font-semibold text-accent">{number}</p>
              <p className="mt-2 text-slate-300">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-black/20 py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Skills" title="A stack shaped by production work">
          Group your skills by the problems you solve. This reads stronger than a long flat list and helps recruiters scan your fit quickly.
        </SectionHeading>
        <div className="grid gap-5 md:grid-cols-2">
          {skills.map(({ title, icon: Icon, items }) => (
            <motion.article
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="glass rounded-lg p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent/15 text-accent">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Experience" title="Career timeline">
          Lead with outcomes, modernization, integrations, and production ownership. That is what separates your profile from a starter portfolio.
        </SectionHeading>
        <div className="space-y-5">
          {experience.map((job) => (
            <motion.article
              key={job.company}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="glass rounded-lg p-6"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                  <p className="text-slate-300">{job.company}</p>
                </div>
                <p className="rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-sm text-amber-100">{job.period}</p>
              </div>
              <ul className="mt-5 grid gap-3 text-slate-300">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-black/20 py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Projects" title="Projects that prove the story">
          Start with professional projects and architecture work, then add public GitHub repositories as you polish them.
        </SectionHeading>
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="glass flex min-h-[25rem] flex-col rounded-lg p-6"
            >
              <p className="mb-3 text-sm font-medium text-accent">{project.type}</p>
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
              <p className="mt-4 leading-7 text-slate-200">{project.impact}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {project.tags.map((tag) => (
                  <span className="chip" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GitHubStats() {
  const [stats, setStats] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function loadGitHub() {
      try {
        const [profileResponse, reposResponse] = await Promise.all([
          fetch('https://api.github.com/users/praveentoby', { signal: controller.signal }),
          fetch('https://api.github.com/users/praveentoby/repos?sort=updated&per_page=6', { signal: controller.signal }),
        ]);

        if (!profileResponse.ok || !reposResponse.ok) return;

        const profileData = await profileResponse.json();
        const reposData = await reposResponse.json();
        setStats(profileData);
        setRepos(reposData);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setStats(null);
          setRepos([]);
        }
      }
    }

    loadGitHub();
    return () => controller.abort();
  }, []);

  const summary = useMemo(
    () => [
      ['Public repos', stats?.public_repos ?? '--'],
      ['Followers', stats?.followers ?? '--'],
      ['Following', stats?.following ?? '--'],
    ],
    [stats],
  );

  return (
    <section className="py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="GitHub" title="Public code presence">
          This section fetches your live GitHub data. It will show stats and recently updated repositories when the site is online.
        </SectionHeading>
        <div className="grid gap-4 md:grid-cols-3">
          {summary.map(([label, value]) => (
            <div key={label} className="glass rounded-lg p-6">
              <p className="text-3xl font-semibold text-white">{value}</p>
              <p className="mt-2 text-slate-400">{label}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <a key={repo.id} href={repo.html_url} className="glass rounded-lg p-5 transition hover:border-accent/40">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-white">{repo.name}</h3>
                <ArrowUpRight className="shrink-0 text-accent" size={17} />
              </div>
              <p className="mt-3 line-clamp-2 min-h-12 text-sm leading-6 text-slate-300">
                {repo.description || 'Repository from Praveen S on GitHub.'}
              </p>
              <p className="mt-4 text-sm text-slate-400">{repo.language || 'Code'}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-black/20 py-24">
      <div className="section-shell">
        <div className="glass rounded-lg p-8 sm:p-10">
          <SectionHeading eyebrow="Contact" title="Let us build something useful">
            I am available to join immediately and open to frontend or full-stack developer roles.
          </SectionHeading>
          <div className="flex flex-wrap gap-4">
            <a className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-semibold text-ink hover:bg-teal-300" href={`mailto:${profile.email}`}>
              <Mail size={18} />
              Send Message
            </a>
            <a className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-semibold text-white hover:bg-white/10" href={profile.linkedin}>
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-semibold text-white hover:bg-white/10" href={profile.github}>
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GitHubStats />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-7">
        <div className="section-shell flex flex-col gap-2 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. Built with React, Tailwind, and Framer Motion.</p>
          <a href={`mailto:${profile.email}`} className="hover:text-white">{profile.email}</a>
        </div>
      </footer>
    </>
  );
}
