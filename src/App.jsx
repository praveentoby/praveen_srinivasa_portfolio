import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight, BriefcaseBusiness, Cloud, Code2, Database, Download, Github,
  GraduationCap, Linkedin, Mail, Menu, Network, Server, Sparkles, TestTube2, X,
} from 'lucide-react';

const profile = {
  name: 'Praveen Srinivasa',
  shortName: 'Praveen',
  role: 'Full Stack Developer',
  location: 'Bengaluru, Karnataka, India',
  phone: '+91 6363868431',
  email: 'praveentoby@gmail.com',
  github: 'https://github.com/praveentoby',
  linkedin: 'https://www.linkedin.com/in/praveen-srinivasa-a74561160/',
  resume: '/Praveen_Srinivasa_Resume_V3.2.pdf',
  photo: '/profile-photo.webp',
};

const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Paris', 'Development', 'Education', 'Contact'];

const skillGroups = [
  { title: 'Frontend development', icon: Code2, items: ['JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'Angular', 'jQuery', 'AJAX', 'HTML5', 'CSS3', 'SCSS', 'Bootstrap', 'Angular Material'] },
  { title: 'Backend & APIs', icon: Server, items: ['Node.js', 'NestJS', 'RESTful APIs', 'Microservices'] },
  { title: 'Databases', icon: Database, items: ['PostgreSQL', 'MySQL', 'Database design', 'MySQL views', 'Triggers', 'Stored procedures'] },
  { title: 'Testing & quality', icon: TestTube2, items: ['Jest', 'Unit testing', 'Integration testing', 'CRUD testing', 'Mock objects', 'Test data setup & cleanup'] },
  { title: 'Cloud, delivery & infrastructure', icon: Cloud, items: ['AWS (EC2, S3)', 'Google Cloud Platform', 'Docker', 'Kubernetes', 'GitLab CI/CD', 'ArgoCD'] },
  { title: 'Messaging, monitoring & tools', icon: Network, items: ['RabbitMQ', 'Datadog dashboards', 'Git', 'GitLab', 'Postman', 'Jira', 'Visual Studio Code', 'Agile / Scrum'] },
];

const experience = [
  {
    company: 'Skills Outsource Think Pvt Ltd', role: 'Full Stack Developer', period: '02 September 2021 – 30 January 2026', project: 'Believe / Believe Backstage',
    summary: 'A digital advertising campaign management platform for music artists and marketing teams. Users configure campaigns and connect advertising platforms to create and manage social media campaigns.',
    points: [
      'Developed and maintained frontend components and application features using React, Next.js, TypeScript and JavaScript.',
      'Rebuilt major parts of an existing Angular application in React, improving frontend structure and maintainability.',
      'Built and integrated RESTful APIs using Node.js and NestJS to support application workflows and data exchange.',
      'Contributed to a microservices-based application architecture, working on individual services and their integration with other application components.',
      'Wrote and maintained automated unit and integration tests using Jest and TypeScript (.test.ts and .spec.ts files).',
      'Developed unit tests with mock objects and integration tests involving database records, CRUD validation, test data creation and cleanup.',
      'Worked with GitLab CI/CD pipelines and ArgoCD to support automated build and deployment workflows and versioned releases to Kubernetes environments.',
      'Worked with Docker-containerised services and Kubernetes deployments in cloud environments established by the engineering team.',
      'Used AWS services including EC2 and S3, and participated in the team’s subsequent migration to Google Cloud Platform (GCP).',
      'Used ArgoCD dashboards to observe deployments and pod health, and Datadog monitoring dashboards as part of the team.',
      'Contributed to RabbitMQ-based asynchronous messaging for inter-service communication and reliability.',
      'Collaborated with cross-functional team members in an Agile/Scrum development environment.',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'NestJS', 'PostgreSQL', 'Jest', 'RabbitMQ', 'Docker', 'Kubernetes', 'GitLab CI/CD', 'ArgoCD', 'AWS', 'GCP', 'Datadog'],
  },
  {
    company: 'PHAPA Technologies Pvt Ltd', role: 'Full Stack Developer', period: '29 April 2019 – 26 August 2021', project: 'PHAPA Membership Program',
    summary: 'A membership platform designed to facilitate social and economic growth through people networks, connecting members with essential products, services and opportunities. The programme focused on helping construction, unorganised and migrant workers access schemes, services, group purchasing and opportunities.',
    points: [
      'Joined PHAPA after initially contributing to its application through Engage and Encapsulate, where PHAPA was a client; selected for direct employment based on technical contributions, client communication and requirements-handling capabilities.',
      'Worked directly with the project manager to understand business requirements, translate them into technical specifications and break larger requirements into smaller modules and actionable development tasks.',
      'Took ownership of implementing application modules from requirement understanding through development and integration.',
      'Built and integrated REST APIs to support the Angular web application and its connected services.',
      'Worked on Razorpay payment gateway integration and third-party services such as SMS gateways.',
      'Worked with MySQL database objects, including views, triggers and stored procedures, and handled database-related issues with guidance from a database expert.',
      'Coordinated with iClimb Systems, an external Android development team, explaining application modules and communicating technical and integration requirements.',
      'Developed and integrated APIs and application modules that enabled the web application to exchange citizen information with Aadhaar services through the external integration, retrieving and displaying returned details.',
      'Recommended former colleagues for the growing development team, helped coordinate an interview and supported their onboarding and transition into the project.',
      'Visited organisational branches to demonstrate application functionality, gather user feedback and resolve reported issues.',
    ],
    stack: ['Angular', 'JavaScript', 'MySQL', 'REST APIs', 'Razorpay', 'SMS gateway integration'],
  },
  {
    company: 'Engage and Encapsulate Softtech Pvt Ltd', role: 'Software Developer / UI & Web Developer', period: '22 August 2018 – 26 April 2019',
    summary: 'Joined as a fresher and gained early experience in web application development, client communication, requirement analysis and UI/UX implementation.',
    points: [
      'Entrusted with direct client communication within the first few days of joining, gathering requirements, clarifying business needs and translating them into actionable technical tasks for the development team.',
      'Broke application requirements into smaller modules and coordinated with developers to support implementation.',
      'Developed web application features using PHP, CodeIgniter, JavaScript, jQuery and AJAX.',
      'Implemented dynamic single-page application behaviour using JavaScript and jQuery AJAX.',
      'Worked on Angular application interfaces using Angular Material.',
      'Created user flows and prototype-based, user-centred designs by understanding business requirements and translating them into application interfaces.',
      'Participated in project status and review meetings and resolved issues based on user feedback.',
    ],
    stack: ['PHP', 'CodeIgniter', 'JavaScript', 'jQuery', 'AJAX', 'Angular', 'Angular Material', 'MySQL', 'Bootstrap', 'CSS'],
  },
];

const projects = [
  {
    title: 'Believe / Believe Backstage', company: 'Skills Outsource Think', category: 'Digital advertising platform',
    description: 'A platform for music artists and marketing teams to configure digital ad campaigns, connect advertising managers and create campaigns across social media platforms.',
    contributions: ['Developed campaign workflows and application features.', 'Rebuilt major areas of the legacy Angular application in React.', 'Built and integrated Node.js/NestJS APIs.', 'Contributed to microservices, RabbitMQ messaging, Jest tests and CI/CD delivery workflows.'],
    tags: ['React', 'Next.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'Jest', 'RabbitMQ', 'Docker', 'Kubernetes'],
  },
  {
    title: 'PHAPA Membership Program', company: 'PHAPA Technologies', category: 'Membership & social-impact platform',
    description: 'A membership programme connecting workers and communities with essential products, services and opportunities, with a focus on construction, unorganised and migrant workers.',
    contributions: ['Built and integrated REST APIs for the Angular application.', 'Integrated Razorpay and SMS gateway services.', 'Worked with an external Android team on integration requirements.', 'Integrated application flows to retrieve and display citizen details returned through Aadhaar service integration.', 'Collected feedback and resolved issues during visits to organisational branches.'],
    tags: ['Angular', 'JavaScript', 'MySQL', 'REST APIs', 'Razorpay'],
  },
  {
    title: 'KBOCWW', company: 'Engage and Encapsulate', category: 'Content management system',
    description: 'A CMS platform for Karnataka Building and Other Construction Workers Welfare, developed for PHAPA Technologies. It supported hierarchical users such as administrators, support personnel and employees, alongside content publishing, reporting and database management.',
    contributions: ['Worked on UI/UX design and implementation, database design and dynamic web page functionality.', 'Collected client requirements, divided them into modules and coordinated task allocation among developers.', 'Communicated project progress between clients and company management.'],
    tags: ['PHP', 'CodeIgniter', 'JavaScript', 'jQuery', 'AJAX', 'MySQL', 'UI/UX'],
  },
  {
    title: 'Challani’s Big Deal (CBD)', company: 'Engage and Encapsulate', category: 'Gold purchase & trading platform',
    description: 'A gold trading platform enabling users to purchase and sell gold coins with defined payback values.',
    contributions: ['Worked on UI development and implementation.', 'Handled data fetching and organisation.', 'Contributed to gold purchase workflows, bidding functionality and interest calculations based on daily schemes.'],
    tags: ['PHP', 'JavaScript', 'UI development', 'Business workflows'],
  },
  {
    title: 'Relex Health Services', company: 'Engage and Encapsulate', category: 'Healthcare services platform',
    description: 'A healthcare platform supporting people managing chronic conditions, including diabetes, hypertension and heart-related conditions.',
    contributions: ['Worked on UI design and frontend implementation of application forms.', 'Translated rough interface sketches and design structures into functional Angular pages.'],
    tags: ['Angular', 'Angular Material', 'JavaScript', 'Frontend'],
  },
];

const developmentTopics = ['JavaScript scope and declarations', 'Hoisting and execution context', 'Closures and lexical environments', 'Call stack and recursion', 'Array methods and immutable updates', 'Promises and asynchronous JavaScript', 'React components, props and state', 'Event handling and controlled inputs', 'Derived state, lists and keys'];
const fadeUp = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };

function SectionHeading({ eyebrow, title, children }) {
  return <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="mb-9 max-w-3xl">
    <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-accent"><Sparkles size={16} />{eyebrow}</p>
    <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
    {children ? <p className="mt-4 text-base leading-7 text-slate-300">{children}</p> : null}
  </motion.div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/75 backdrop-blur-xl">
    <nav className="section-shell flex h-16 items-center justify-between">
      <a href="#home" className="text-lg font-semibold text-white">Praveen<span className="text-accent">.</span></a>
      <div className="hidden items-center gap-5 lg:flex">{navItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-slate-300 transition hover:text-white">{item}</a>)}</div>
      <a href={profile.resume} download="Praveen_Srinivasa_Resume_V3.2.pdf" className="hidden items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink transition hover:bg-teal-300 md:inline-flex"><Download size={16} />Resume</a>
      <button type="button" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white lg:hidden" onClick={() => setOpen(v => !v)} aria-label="Toggle navigation">{open ? <X size={19} /> : <Menu size={19} />}</button>
    </nav>
    {open && <div className="section-shell pb-4 lg:hidden"><div className="glass rounded-lg p-3">{navItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="block rounded-md px-3 py-3 text-sm text-slate-200 hover:bg-white/10">{item}</a>)}<a href={profile.resume} download="Praveen_Srinivasa_Resume_V3.2.pdf" className="block rounded-md px-3 py-3 text-sm text-accent">Download resume</a></div></div>}
  </header>;
}

function Hero() {
  return <section id="home" className="section-shell flex min-h-screen items-center pt-24"><div className="grid w-full items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
    <motion.div initial="hidden" animate="show" variants={fadeUp}>
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-teal-100"><BriefcaseBusiness size={16} />7 years 5 months of professional experience</div>
      <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">Building thoughtful web experiences from interface to backend.</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">I’m Praveen, a Full Stack Developer with professional experience across React, JavaScript, TypeScript, Node.js, NestJS and Angular. I enjoy understanding real business needs, turning them into practical software and improving applications as they evolve.</p>
      <div className="mt-8 flex flex-wrap gap-4"><a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-semibold text-ink transition hover:bg-teal-300">Explore my work <ArrowUpRight size={18}/></a><a href={profile.resume} download="Praveen_Srinivasa_Resume_V3.2.pdf" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-semibold text-white transition hover:bg-white/10"><Download size={18}/>Download resume</a></div>
      <div className="mt-8 flex flex-wrap gap-3"><a className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-slate-200 hover:bg-white/10" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20}/></a><a className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-slate-200 hover:bg-white/10" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20}/></a><a className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-slate-200 hover:bg-white/10" href={`mailto:${profile.email}`} aria-label="Email"><Mail size={20}/></a><span className="self-center text-sm text-slate-400">{profile.location}</span></div>
    </motion.div>
    <motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:.6,delay:.1}}><div className="glass rounded-lg p-6 shadow-glow"><div className="mb-6 overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]"><img src={profile.photo} alt="Praveen Srinivasa" className="aspect-[4/3] w-full object-cover object-center"/></div><div className="mb-5 flex items-center justify-between gap-3"><div><p className="text-sm text-slate-400">Professional profile</p><h2 className="text-2xl font-semibold text-white">Full Stack Developer</h2></div><span className="rounded-full bg-coral/15 px-3 py-1 text-sm text-rose-100">Available to join</span></div><div className="space-y-3">{[['Frontend','React · Next.js · Angular'],['Backend','Node.js · NestJS · REST APIs'],['Quality','Jest · Unit & integration tests'],['Delivery','Docker · Kubernetes · CI/CD'],['Cloud','AWS · Google Cloud']].map(([a,b])=><div key={a} className="rounded-lg border border-white/10 bg-black/20 p-3"><p className="text-xs uppercase tracking-wider text-slate-400">{a}</p><p className="mt-1 font-medium text-white">{b}</p></div>)}</div></div></motion.div>
  </div></section>;
}

function About() {
  const facts = [['7y 5m','Professional experience'],['3','Companies'],['5','Professional projects documented'],['Full stack','Frontend, APIs & integrations']];
  return <section id="about" className="py-24"><div className="section-shell"><SectionHeading eyebrow="About me" title="A developer shaped by real product work">My career has taken me from UI and web development into full-stack application development, API integrations, application modernisation and production delivery. Along the way, I have worked directly with clients and project managers, translated business needs into technical tasks, coordinated with external development teams and supported applications used in real operational settings.</SectionHeading><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{facts.map(([n,l])=><motion.div key={l} variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}} className="glass rounded-lg p-6"><p className="text-3xl font-semibold text-accent">{n}</p><p className="mt-2 text-slate-300">{l}</p></motion.div>)}</div><div className="mt-6 glass rounded-lg p-6"><h3 className="text-xl font-semibold text-white">How I work</h3><p className="mt-3 leading-7 text-slate-300">I value understanding the problem before jumping into implementation. My experience includes clarifying requirements with clients, breaking work into manageable modules, collaborating with teammates, integrating external services, testing application behaviour and learning the systems needed to deliver a feature reliably. I’m a continuous learner, currently putting particular focus on strengthening my JavaScript fundamentals and practical React skills.</p></div></div></section>;
}

function Skills() {
  return <section id="skills" className="bg-black/20 py-24"><div className="section-shell"><SectionHeading eyebrow="Technical skills" title="Tools and technologies across the stack">A broad skill set built through hands-on project work, grouped by the areas I have contributed to.</SectionHeading><div className="grid gap-5 md:grid-cols-2">{skillGroups.map(({title,icon:Icon,items})=><motion.article key={title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}} whileHover={{y:-4}} className="glass rounded-lg p-6"><div className="mb-5 flex items-center gap-3"><div className="grid h-11 w-11 place-items-center rounded-lg bg-accent/15 text-accent"><Icon size={22}/></div><h3 className="text-xl font-semibold text-white">{title}</h3></div><div className="flex flex-wrap gap-2">{items.map(item=><span className="chip" key={item}>{item}</span>)}</div></motion.article>)}</div></div></section>;
}

function Experience() {
  return <section id="experience" className="py-24"><div className="section-shell"><SectionHeading eyebrow="Professional experience" title="My career journey">Three roles, with a progression from UI and web development to full-stack engineering, client-facing requirements work and modern application delivery.</SectionHeading><div className="space-y-6">{experience.map((job,index)=><motion.article key={job.company} variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}} className="glass rounded-lg p-6 sm:p-8"><div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between"><div><p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">{index===0?'Most recent role':index===1?'Previous role':'First professional role'}</p><h3 className="text-2xl font-semibold text-white">{job.role}</h3><p className="mt-1 text-slate-300">{job.company}</p></div><p className="w-fit rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-sm text-amber-100">{job.period}</p></div>{job.project&&<div className="mt-5 rounded-lg border border-accent/20 bg-accent/5 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-accent">Project</p><h4 className="mt-1 text-lg font-semibold text-white">{job.project}</h4><p className="mt-2 leading-7 text-slate-300">{job.summary}</p></div>}{!job.project&&<p className="mt-5 leading-7 text-slate-300">{job.summary}</p>}<ul className="mt-5 grid gap-3 text-slate-300">{job.points.map(point=><li key={point} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"/><span className="leading-7">{point}</span></li>)}</ul><div className="mt-6 border-t border-white/10 pt-5"><p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Technologies</p><div className="flex flex-wrap gap-2">{job.stack.map(t=><span className="chip" key={t}>{t}</span>)}</div></div></motion.article>)}</div></div></section>;
}

function Projects() {
  return <section id="projects" className="bg-black/20 py-24"><div className="section-shell"><SectionHeading eyebrow="Selected projects" title="The products and platforms behind my experience">These are professional projects from my employment history. The descriptions focus on the product purpose and the areas I personally contributed to.</SectionHeading><div className="space-y-5">{projects.map((p,i)=><motion.article key={p.title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}} className="glass rounded-lg p-6 sm:p-8"><div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between"><div><p className="text-sm font-medium text-accent">{p.category}</p><h3 className="mt-1 text-2xl font-semibold text-white">{p.title}</h3><p className="mt-1 text-sm text-slate-400">{p.company}</p></div><span className="w-fit rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">Project {String(i+1).padStart(2,'0')}</span></div><p className="mt-4 max-w-4xl leading-7 text-slate-300">{p.description}</p><h4 className="mt-5 font-semibold text-white">My contributions</h4><ul className="mt-3 grid gap-2 text-slate-300">{p.contributions.map(c=><li key={c} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"/><span className="leading-7">{c}</span></li>)}</ul><div className="mt-5 flex flex-wrap gap-2">{p.tags.map(t=><span className="chip" key={t}>{t}</span>)}</div></motion.article>)}</div></div></section>;
}


const parisMainPhotos = [
  { src: '/images/paris-main/IMG-20230918-WA0031.webp', alt: 'Team visit near the Eiffel Tower' },
  { src: '/images/paris-main/IMG-20230925-WA0055.webp', alt: 'Team photo in Paris' },
  { src: '/images/paris-main/IMG-20230926-WA0012.webp', alt: 'Engineering team collaborating in the Paris office' },
  { src: '/images/paris-main/PXL_20230920_161819331.MP.webp', alt: 'Believe office building in Paris' },
  { src: '/images/paris-main/PXL_20230924_115204899.MP.webp', alt: 'Exploring Paris during the business assignment' },
  { src: '/images/paris-main/PXL_20230927_195456746.MP.webp', alt: 'Team dinner in Paris' },
  { src: '/images/paris-main/PXL_20230928_161744379.MP.webp', alt: 'Colleagues together at the Paris office' },
  { src: '/images/paris-main/PXL_20230928_162246261.MP.webp', alt: 'Engineering team group photo' },
];
const parisGalleryPhotos = [
  'IMG-20230918-WA0016.webp','IMG-20230927-WA0009.webp','IMG_0001.webp','IMG_9321.webp','IMG_9433.webp','IMG_9994.webp',
  'PXL_20230919_101626503.MP.webp','PXL_20230919_104447692.webp','PXL_20230920_161758580.MP.webp','PXL_20230920_171231499.MP.webp',
  'PXL_20230920_182121154.MP.webp','PXL_20230922_183732855.MP.webp','PXL_20230923_115756606.MP.webp','PXL_20230924_115115889.MP.webp',
  'PXL_20230924_132913416.MP.webp','PXL_20230926_120353446.MP.webp','PXL_20230927_164447322.MP.webp','PXL_20230927_180151500.MP.webp',
  'PXL_20230927_180153072.MP.webp','PXL_20230928_065506254.MP.webp','PXL_20230928_105522478.MP.webp','PXL_20230928_162817131.MP.webp',
  'PXL_20230928_175729299.MP.webp','PXL_20231001_163653212.MP.webp','PXL_20231001_171645381.MP.webp','PXL_20231001_173841961.MP.webp',
  'PXL_20231001_190043589.MP.webp','PXL_20231003_044821201.MP.webp'
].map((name) => ({ src: `/images/paris-gallery/${name}`, alt: 'Photo from the Paris business assignment' }));

function ParisAssignment() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);
  const closeViewer = () => setActivePhoto(null);
  return <section id="paris" className="bg-black/20 py-24">
    <div className="section-shell">
      <SectionHeading eyebrow="Beyond borders · Paris, France" title="A meaningful chapter of collaboration">From 14 September to 5 October 2022, I joined the Believe engineering team for a 22-day business assignment at the client’s Paris office. Working face-to-face with the French engineering team created space for deeper collaboration, technical exchange and stronger working relationships.</SectionHeading>
      <div className="grid gap-5 lg:grid-cols-[1.05fr_.95fr]">
        <article className="glass rounded-lg p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">The collaboration</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Engineering without borders</h3>
          <p className="mt-4 leading-7 text-slate-300">I took part in technical workshops, tool evaluations and discussions around system improvements and application upgrades. The experience brought engineers together to share context, discuss practical solutions and work through priorities as one team.</p>
          <p className="mt-4 leading-7 text-slate-300">My contributions included UI improvements, investigating application behaviour through Datadog, supporting Argo CD releases, fixing parts of existing campaign automation and restructuring legacy campaign-creation functionality in NestJS.</p>
          <p className="mt-4 leading-7 text-slate-300">I also helped a new colleague get set up with Node.js on Linux and walked through the application architecture and project workflows, making knowledge-sharing part of the day-to-day collaboration.</p>
        </article>
        <article className="glass rounded-lg p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">What I took away</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Confidence through connection</h3>
          <p className="mt-4 leading-7 text-slate-300">Working alongside people from a different country, language and professional culture helped me appreciate different approaches to communication, teamwork and problem-solving. I learned that meaningful professional relationships grow through openness, humility, curiosity and a willingness to learn.</p>
          <p className="mt-4 leading-7 text-slate-300">It strengthened my confidence in collaborating with international teams and remains one of the most memorable milestones in my professional journey.</p>
          <div className="mt-6 flex flex-wrap gap-2">{['Paris office collaboration','Technical workshops','Cross-team knowledge sharing','NestJS modernisation','Team onboarding'].map(x=><span className="chip" key={x}>{x}</span>)}</div>
          <a href="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7523661521231605760?collapsed=1" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-accent transition hover:text-teal-200">View LinkedIn recommendation <ArrowUpRight size={17}/></a>
        </article>
      </div>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="text-sm font-semibold uppercase tracking-wider text-accent">Photo journal</p><h3 className="mt-2 text-2xl font-semibold text-white">A few moments from Paris</h3><p className="mt-2 text-slate-400">The main photos are displayed here. Open the gallery for the rest of the collection.</p></div>
        <button type="button" onClick={() => setGalleryOpen(true)} className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-5 py-3 font-semibold text-ink transition hover:bg-teal-300"><span>Explore all 28 gallery photos</span><ArrowUpRight size={18}/></button>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
        {parisMainPhotos.map((photo, i) => <button type="button" key={photo.src} onClick={() => setActivePhoto(photo)} className={`group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 text-left ${i===0?'col-span-2 row-span-2':''}`} aria-label={`View photo ${i+1}`}>
          <img src={photo.src} alt={photo.alt} loading={i<2?'eager':'lazy'} className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${i===0?'aspect-[4/3] min-h-64':'aspect-[4/3]'}`}/>
          <span className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70"/>
          <span className="absolute bottom-3 left-3 rounded-full bg-black/50 px-3 py-1 text-xs text-white backdrop-blur">{i===2||i===6?'Team & office':'Paris moments'}</span>
        </button>)}
      </div>
      {galleryOpen && <div className="fixed inset-0 z-[70] overflow-y-auto bg-slate-950/95 p-4 backdrop-blur-sm sm:p-8" role="dialog" aria-modal="true" aria-label="Paris photo gallery">
        <div className="mx-auto max-w-6xl"><div className="sticky top-0 z-10 mb-5 flex items-center justify-between gap-4 border-b border-white/10 bg-slate-950/95 py-4"><div><p className="text-sm font-semibold uppercase tracking-wider text-accent">Paris photo gallery</p><h3 className="text-2xl font-semibold text-white">28 moments from the trip</h3></div><button type="button" onClick={() => setGalleryOpen(false)} className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white hover:bg-white/10" aria-label="Close gallery"><X/></button></div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{parisGalleryPhotos.map((photo,i)=><button type="button" key={photo.src} onClick={() => setActivePhoto(photo)} className="group overflow-hidden rounded-lg border border-white/10 bg-white/5"><img src={photo.src} alt={photo.alt} loading="lazy" className="aspect-[4/3] h-full w-full object-cover transition duration-500 group-hover:scale-105"/><span className="sr-only">Open gallery photo {i+1}</span></button>)}</div>
        </div>
      </div>}
      {activePhoto && <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/95 p-4" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={closeViewer}><button type="button" onClick={closeViewer} className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white" aria-label="Close photo"><X/></button><img src={activePhoto.src} alt={activePhoto.alt} onClick={e=>e.stopPropagation()} className="max-h-[88vh] max-w-full rounded-lg object-contain"/></div>}
    </div>
  </section>;
}

function Development() {
  return <section id="development" className="py-24"><div className="section-shell"><SectionHeading eyebrow="Career break & independent development" title="Continuing to learn, practise and sharpen the fundamentals">After completing my role at Skills Outsource Think in January 2026, I took a personal career break. I resumed focused technical development in July/August 2026, revisiting JavaScript fundamentals and strengthening practical React knowledge through hands-on exercises and application work.</SectionHeading><div className="grid gap-5 lg:grid-cols-[.8fr_1.2fr]"><div className="glass rounded-lg p-6"><p className="text-sm text-slate-400">Period</p><h3 className="mt-2 text-2xl font-semibold text-white">February 2026 – Present</h3><p className="mt-4 leading-7 text-slate-300">Independent technical development, with a focused return to JavaScript and React.</p></div><div className="glass rounded-lg p-6"><h3 className="text-xl font-semibold text-white">Current learning and practice</h3><div className="mt-4 flex flex-wrap gap-2">{developmentTopics.map(t=><span key={t} className="chip">{t}</span>)}</div><p className="mt-5 leading-7 text-slate-300">React practice includes component composition, props and callback flows, state management, event handling, controlled inputs, immutable updates, task filtering and derived counts. This work is intended to reinforce practical understanding and keep my skills moving forward.</p></div></div></div></section>;
}

function Education() {
  const items=[{qualification:'Diploma in Computer Science & Engineering',institution:'Bharath Polytechnic, Bangarpet',period:'2011 – 2014',result:'Distinction · 81%'},{qualification:'Bachelor of Engineering – Computer Science',institution:'Government SKSJ Technological Institute, Bengaluru · VTU',period:'2014 – 2018',result:'Degree not completed'}];
  return <section id="education" className="bg-black/20 py-24"><div className="section-shell"><SectionHeading eyebrow="Education" title="Academic background"/><div className="grid gap-5 md:grid-cols-2">{items.map(item=><article key={item.qualification} className="glass rounded-lg p-6"><div className="mb-4 grid h-11 w-11 place-items-center rounded-lg bg-accent/15 text-accent"><GraduationCap size={22}/></div><h3 className="text-xl font-semibold text-white">{item.qualification}</h3><p className="mt-2 text-slate-300">{item.institution}</p><div className="mt-5 flex flex-wrap items-center justify-between gap-2 text-sm"><span className="text-slate-400">{item.period}</span><span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-teal-100">{item.result}</span></div></article>)}</div></div></section>;
}

function GitHubStats() {
  const [stats,setStats]=useState(null); const [repos,setRepos]=useState([]);
  useEffect(()=>{const controller=new AbortController(); async function load(){try{const [a,b]=await Promise.all([fetch('https://api.github.com/users/praveentoby',{signal:controller.signal}),fetch('https://api.github.com/users/praveentoby/repos?sort=updated&per_page=6',{signal:controller.signal})]);if(!a.ok||!b.ok)return;setStats(await a.json());setRepos(await b.json());}catch(e){if(e.name!=='AbortError'){setStats(null);setRepos([]);}}}load();return()=>controller.abort();},[]);
  const summary=useMemo(()=>[['Public repositories',stats?.public_repos??'—'],['Followers',stats?.followers??'—'],['Following',stats?.following??'—']],[stats]);
  return <section className="py-24"><div className="section-shell"><SectionHeading eyebrow="GitHub" title="A window into my code">Live public GitHub profile information and recently updated repositories.</SectionHeading><div className="grid gap-4 md:grid-cols-3">{summary.map(([label,value])=><div key={label} className="glass rounded-lg p-6"><p className="text-3xl font-semibold text-white">{value}</p><p className="mt-2 text-slate-400">{label}</p></div>)}</div><div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{repos.map(repo=><a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer" className="glass rounded-lg p-5 transition hover:border-accent/40"><div className="flex items-start justify-between gap-3"><h3 className="font-semibold text-white">{repo.name}</h3><ArrowUpRight className="shrink-0 text-accent" size={17}/></div><p className="mt-3 line-clamp-2 min-h-12 text-sm leading-6 text-slate-300">{repo.description||'Public repository on GitHub.'}</p><p className="mt-4 text-sm text-slate-400">{repo.language||'Code'}</p></a>)}</div><a href={profile.github} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-accent hover:text-teal-200">Explore GitHub <ArrowUpRight size={17}/></a></div></section>;
}

function Contact() {
  return <section id="contact" className="bg-black/20 py-24"><div className="section-shell"><div className="glass rounded-lg p-8 sm:p-10"><SectionHeading eyebrow="Contact" title="Let’s build something useful">I’m open to Full Stack Developer and frontend-focused opportunities, and available to join immediately. If my experience aligns with what your team is building, I’d be glad to connect.</SectionHeading><div className="flex flex-wrap gap-4"><a className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-semibold text-ink hover:bg-teal-300" href={`mailto:${profile.email}`}><Mail size={18}/>Email me</a><a className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-semibold text-white hover:bg-white/10" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18}/>LinkedIn</a><a className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-semibold text-white hover:bg-white/10" href={profile.github} target="_blank" rel="noreferrer"><Github size={18}/>GitHub</a><a className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-semibold text-white hover:bg-white/10" href={`tel:${profile.phone}`}><BriefcaseBusiness size={18}/>Call me</a></div><p className="mt-6 text-sm text-slate-400">{profile.location} · {profile.phone} · {profile.email}</p></div></div></section>;
}

export default function App() {
  return <><Header/><main><Hero/><About/><Skills/><Experience/><Projects/><ParisAssignment/><Development/><Education/><GitHubStats/><Contact/></main><footer className="border-t border-white/10 py-7"><div className="section-shell flex flex-col gap-2 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} {profile.name}. Built with React, Vite, Tailwind CSS and Framer Motion.</p><a href={`mailto:${profile.email}`} className="hover:text-white">{profile.email}</a></div></footer></>;
}
