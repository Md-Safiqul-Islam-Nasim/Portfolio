import type {
  Project,
  Experience,
  SkillCategory,
  PlatformStat,
  Education,
  Achievement,
} from './types';

export const PERSONAL_INFO = {
  name: 'Md Safiqul Islam Nasim',
  shortName: 'Nasim',
  monogram: 'SN',
  role: 'Backend Engineer | Software Developer',
  email: 'mdsafiqulislamnasim1234@gmail.com',
  phone: '01931802944',
  location: 'Dhaka, Bangladesh',
  currentCompany: 'CodeWare Limited',
  currentRole: 'Junior Software Engineer',
  resume: '/Md_Safiqul_Islam_Nasim_Resume.pdf',
  resumeFileName: 'Md_Safiqul_Islam_Nasim_Resume.pdf',
  photo: '/profile.webp',
  tagline: 'Backend Architecture · RESTful APIs · Database Optimization',
  about:
    'Backend Software Engineer with close to 2 years of experience building and optimizing RESTful APIs in Laravel, including role-based access control, JWT authentication, and database performance tuning. Delivered backend systems and admin dashboards supporting 1,000+ active users. Strong problem-solving foundation with 2,400+ algorithmic problems solved and 340+ programming contests, including a Codeforces Pupil rating.',
};

export const SOCIALS = {
  github: 'https://github.com/Md-Safiqul-Islam-Nasim',
  linkedin: 'https://www.linkedin.com/in/md-safiqul-islam-nasim/',
  email: `mailto:${PERSONAL_INFO.email}`,
  phone: `tel:${PERSONAL_INFO.phone}`,
};

export const NAV_LINKS = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

export const HERO_STATS = [
  { value: '2+ Yrs', label: 'Backend engineering experience' },
  { value: '~1M', label: 'Users on platforms contributed to' },
  { value: '−35%', label: 'API latency via query optimization' },
  { value: '2,400+', label: 'Algorithmic problems solved' },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'CodeWare Limited',
    role: 'Junior Software Engineer',
    period: 'May 2025 – Present',
    location: 'Dhaka, Bangladesh · On-site',
    current: true,
    tech: ['Laravel', 'Filament', 'JWT', 'MySQL', 'RBAC', 'REST API'],
    description: [
      'Independently built and led the backend (Laravel/MySQL) for a Medical University IRB (Institutional Review Board) management system used by 1,000+ users.',
      'Contributed to the backend (Laravel/MySQL) of a bus ticketing system deployed across 20+ countries, serving nearly 1 million users.',
      'Designed a Laravel-based RBAC system with JWT authentication, managing permissions for 500+ users.',
      'Built admin dashboards using Filament and optimized database queries, improving task management efficiency by 40% and reducing API response time by 35%.',
    ],
  },
  {
    company: 'Softvence',
    role: 'Junior Laravel Developer',
    period: 'Oct 2024 – May 2025',
    location: 'Dhaka, Bangladesh · Remote',
    tech: ['Laravel 9', 'MySQL', 'REST API', 'JWT', 'Real-time Systems', 'Queue Workers'],
    description: [
      'Built a scalable RESTful API in Laravel 9 to power an Android application used by 1,000+ active users.',
      'Implemented real-time chat functionality and a notification queue system for the application.',
      'Developed an admin dashboard with approval workflows, cutting task processing time by 50%.',
      'Designed a real-time leaderboard system and player task-tracking modules.',
      'Optimized MySQL queries, improving database performance by 40%.',
    ],
  },
  {
    company: 'Medina Tech Ltd.',
    role: 'Software Engineer Intern',
    period: 'Oct 2023 – Nov 2023',
    location: 'Dhaka, Bangladesh · On-site',
    isInternship: true,
    tech: ['Kotlin', 'Android', 'Bitbucket'],
    description: [
      'Android development using Kotlin as part of a structured internship program.',
      'Version control with Bitbucket within a collaborative team workflow.',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    blurb: 'Core server-side, systems, and application languages used across production and algorithmic work.',
    icon: 'code',
    skills: [
      { name: 'PHP', icon: 'php' },
      { name: 'Java', icon: 'openjdk' },
      { name: 'C++', icon: 'cplusplus' },
      { name: 'Python', icon: 'python' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Kotlin', icon: 'kotlin' },
    ],
  },
  {
    title: 'Backend Frameworks & APIs',
    blurb: 'Architecting modular RESTful APIs, background queues, and multi-tenant workflows.',
    icon: 'server',
    skills: [
      { name: 'Laravel', icon: 'laravel' },
      { name: 'RESTful API Design' },
      { name: 'Filament', icon: 'filament' },
      { name: 'Spring Boot', icon: 'springboot' },
      { name: 'Node.js (Basic)', icon: 'nodedotjs' },
      { name: 'Real-time Chat & Notification Queues' },
    ],
  },
  {
    title: 'Database & Caching Systems',
    blurb: 'Relational schema design, indexing, transactional locking, and query optimization.',
    icon: 'database',
    skills: [
      { name: 'MySQL', icon: 'mysql' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Redis', icon: 'redis' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'Query Performance Tuning' },
      { name: 'Transactional Locking' },
    ],
  },
  {
    title: 'Authentication & System Design',
    blurb: 'Securing multi-role platforms and applying algorithmic rigor to backend systems.',
    icon: 'shield',
    skills: [
      { name: 'JWT Authentication', icon: 'jsonwebtokens' },
      { name: 'Role-Based Access Control (RBAC)' },
      { name: 'Data Structures & Algorithms' },
      { name: 'Object-Oriented Programming (OOP)' },
      { name: 'Multi-Subdomain CMS Architecture' },
    ],
  },
  {
    title: 'Admin Panels, Web & Mobile',
    blurb: 'Building administrative interfaces, dashboards, and client applications.',
    icon: 'layout',
    skills: [
      { name: 'Filament Dashboards', icon: 'filament' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Alpine.js', icon: 'alpinedotjs' },
      { name: 'React.js' },
      { name: 'HTML & CSS' },
      { name: 'Java Swing' },
      { name: 'Flutter' },
    ],
  },
  {
    title: 'Development & Workflow Tools',
    blurb: 'Version control, API verification, and agile issue tracking across engineering teams.',
    icon: 'wrench',
    skills: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Bitbucket', icon: 'bitbucket' },
      { name: 'Jira', icon: 'jira' },
      { name: 'Postman', icon: 'postman' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    slug: 'irb',
    title: 'University IRB Management System',
    type: 'Institutional Backend Platform',
    featured: true,
    summary:
      "Independently built and led the full backend for Bangladesh Medical University's Institutional Review Board (IRB) platform — serving 1,000+ active users across faculty, researchers, and administrators.",
    challenge:
      "IRB research approvals are multi-stage, multi-role processes with strict institutional audit requirements — a single flat permission model couldn't scale across departments.",
    approach:
      'Architected a layered RBAC system in Laravel & MySQL with role-specific portals, automated review routing, PDF certificate generation triggered on approval state transitions, and a multi-subdomain CMS built with Filament.',
    result:
      'Eliminated manual approval bottlenecks, streamlined Academic & Syndicate meeting decision tracking, and significantly reduced research protocol review cycle times.',
    highlights: [
      'Layered RBAC managing granular permissions across faculty, reviewers, and admins',
      'Automated multi-stage review routing & state-triggered PDF certificate generation',
      'Academic & Syndicate meeting management with institutional decision tracking',
      'Dynamic multi-subdomain departmental CMS powered by Filament',
    ],
    tech: ['Laravel', 'Filament', 'MySQL', 'RBAC', 'REST API'],
    metrics: ['1,000+ Active Users', 'Automated Review Workflows', 'Multi-Subdomain CMS'],
    image: '/projects/bmu_dashboard.webp',
    imageAlt: 'University IRB Protocol Manager dashboard showing research applications and approval statuses',
    visual: 'screenshot',
    demo: 'https://www.bmu.ac.bd/',
    demoLabel: 'Live Platform (bmu.ac.bd)',
  },
  {
    slug: 'bus',
    title: 'Global Bus Ticketing System',
    type: 'High-Concurrency Distributed Backend',
    featured: true,
    summary:
      'Contributed to the core backend of an international bus ticketing platform deployed across 20+ countries and serving nearly 1 million users — the highest-scale production system in this portfolio.',
    challenge:
      'At multi-country scale, concurrent seat reservations across distributed bus operators risk race conditions and double-bookings if not strictly serialized.',
    approach:
      'Implemented transactional seat booking logic with database-level locking in Laravel & MySQL, operator-scoped RBAC, and a flexible route, schedule, and fare engine adaptable to country-specific regulations.',
    result:
      'Reliably processes high-concurrency ticket reservations and operator settlements across 20+ international markets without inventory conflicts.',
    note: 'Client brand details are under NDA — scale metrics and architectural overview shared with permission.',
    highlights: [
      'Transactional seat reservation engine with MySQL row-level locking to prevent double-booking',
      'Operator-scoped RBAC isolating routes, fleets, and financial reports per partner',
      'Multi-country route, schedule, and pricing configuration engine across 20+ markets',
    ],
    tech: ['Laravel', 'MySQL', 'REST API', 'RBAC', 'Transactional Locking'],
    metrics: ['~1 Million Users', '20+ Countries', 'High-Concurrency Bookings'],
    image: '/projects/bus_ticketing.webp',
    imageAlt: 'Global Bus Ticketing System admin dashboard displaying international routes and booking analytics',
    visual: 'screenshot',
  },
  {
    slug: 'beestera',
    title: 'Beestera App Backend & Admin Portal',
    type: 'Mobile Application Backend (REST API)',
    featured: true,
    summary:
      'Engineered the Laravel 9 RESTful API and administrative backend powering the Beestera Soccer Android application, supporting 1,000+ active players and coaches.',
    challenge:
      'The mobile app required low-latency API responses for player leaderboards, real-time chat, and task verification without overloading the database.',
    approach:
      'Built a JWT-authenticated REST API with queued notification dispatch, real-time leaderboard calculation, MySQL query indexing (+40% DB performance), and a structured approval dashboard.',
    result:
      'Cut administrative task approval processing time by 50% while maintaining fast mobile API response times for 1,000+ active users.',
    highlights: [
      'JWT-secured RESTful API endpoints powering the Android client',
      'Real-time chat and queued notification delivery pipeline',
      'Admin approval workflow dashboard that reduced task processing time by 50%',
      'Real-time player leaderboard & task-tracking modules with 40% faster MySQL queries',
    ],
    tech: ['Laravel', 'MySQL', 'JWT', 'REST API', 'Notification Queues'],
    metrics: ['1,000+ Active Users', '50% Faster Task Processing', '+40% DB Performance'],
    image: '/projects/beestera.webp',
    imageAlt: 'Beestera Soccer Android application icon and backend overview',
    visual: 'appIcon',
    demo: 'https://play.google.com/store/apps/details?id=kc.app.socor&hl=en',
    demoLabel: 'Google Play Store',
  },
  {
    slug: 'devflow',
    title: 'DevFlow — Agency Management System',
    type: 'Full-Stack Operations & Billing Platform',
    summary:
      'Developed an end-to-end software agency platform for managing client projects, feature milestones, developer task assignments, time tracking, and financial payouts.',
    challenge:
      'Software agencies often juggle disconnected tools for task tracking, developer hours, client invoicing, and team payouts.',
    approach:
      'Built a unified Laravel, MySQL, Tailwind CSS, and Alpine.js platform combining RBAC-protected project workspaces, activity monitoring, itemized client billing, and automated developer payout records.',
    highlights: [
      'Project, milestone, and developer task assignment workflows with RBAC',
      'Granular time tracking and team activity monitoring modules',
      'Client payment ledger, itemized billing, and automated developer payout tracking',
      'In-context collaboration with task comments and file attachments',
    ],
    tech: ['Laravel', 'MySQL', 'Tailwind CSS', 'Alpine.js', 'RBAC'],
    metrics: ['End-to-End Agency Workflow', 'Integrated Financial & Payout Tracking'],
    image: '/projects/devflow.webp',
    imageAlt: 'DevFlow agency management platform brand mark',
    visual: 'logo',
  },
  {
    slug: 'hotel',
    title: 'Hotel Management System',
    type: 'Desktop Operations Application',
    summary:
      'Designed and built a multi-user Java Swing & MySQL desktop application for hotel reception, employee management, and vehicle booking operations.',
    challenge:
      'Needed a role-segregated desktop system capable of handling concurrent front-desk reservations and staff records reliably.',
    approach:
      'Implemented JDBC-backed CRUD modules with user authentication, role-based access control, and a normalized MySQL schema supporting 100+ concurrent users.',
    highlights: [
      'Role-based authentication separating admin and front-desk staff permissions',
      'Employee management, room administration, and hotel car booking CRUD workflows',
      'Normalized MySQL schema engineered for 100+ concurrent connections',
    ],
    tech: ['Java', 'Java Swing', 'MySQL', 'JDBC', 'RBAC'],
    metrics: ['100+ Concurrent Users', 'Role-Based Access Control'],
    image: '/projects/hotel.webp',
    imageAlt: 'Hotel Management System interface overview',
    visual: 'banner',
  },
];

export const PROBLEM_SOLVING: PlatformStat[] = [
  { platform: 'Codeforces', count: '1350+', rank: 'Pupil', maxRating: 1218 },
  { platform: 'CodeChef', count: '140+', rank: '3-Star', maxRating: 1736 },
  { platform: 'LeetCode', count: '260+', rank: 'Top 15%' },
  { platform: 'UVa Online Judge', count: '290' },
  { platform: 'Beecrowd', count: '262' },
  { platform: 'HackerRank', count: '200+' },
];

export const ACHIEVEMENTS: Achievement[] = [
  { title: '428th — ICPC Asia Dhaka Regional 2021', description: 'ICPC Regional Contest Participant' },
  { title: '8th — DIU Intersection', description: 'Top Performing Team Rank' },
  { title: '12th — DIU Take-off Programming Contest', description: 'Individual Competitive Programming Rank' },
  { title: 'Problem Setter & Judge (2022–2023)', description: 'Authored problems and judged DIU programming contests' },
  { title: 'Programming Trainer — DIU', description: 'Mentored junior competitive programmers in algorithms & data structures' },
];

export const EDUCATION: Education[] = [
  {
    institution: 'Daffodil International University',
    degree: 'BSc in Computer Science and Engineering',
    period: '06/2019 – 07/2023',
    location: 'Dhaka, Bangladesh',
    description:
      'Focused on Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Software Engineering, and System Architecture.',
  },
  {
    institution: 'Bangladesh Navy College',
    degree: 'Higher Secondary School Certificate (HSC)',
    period: '2016 – 2018',
    location: 'Dhaka, Bangladesh',
    description: 'Science group with concentration in Higher Mathematics, Physics, and Chemistry.',
  },
  {
    institution: 'Bashir Uddin Ideal School & College',
    degree: 'Secondary School Certificate (SSC)',
    period: '2009 – 2016',
    location: 'Dhaka, Bangladesh',
    description: 'Secondary education in Science.',
  },
];
