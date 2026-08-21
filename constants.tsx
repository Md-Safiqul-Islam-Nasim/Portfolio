
import { Project, Experience, SkillCategory, PlatformStat, Education } from './types';

export const PERSONAL_INFO = {
  name: "Md Safiqul Islam Nasim",
  role: "Backend Software Engineer",
  email: "mdsafiqulislamnasim1234@gmail.com",
  phone: "01931802944",
  location: "Dhaka, Bangladesh",
  tagline: "API Architect | Problem Solver | Backend Specialist",
  about: "Backend Software Engineer with close to 2 years of experience building and optimizing RESTful APIs in Laravel, including role-based access control, JWT authentication, and database performance tuning. Delivered backend systems and admin dashboards supporting 1,000+ active users. Strong problem-solving foundation with 2,400+ algorithmic problems solved and 340+ programming contests, including a Codeforces Pupil rating.",
  heroStats: [
    { label: "Problems Solved", value: 2400 },
    { label: "Contests", value: 340 },
    { label: "Experience", value: 2, suffix: "+" }
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    company: "CodeWare Limited",
    role: "Junior Software Engineer",
    period: "May 2025 – Present",
    location: "Dhaka, Bangladesh · On-site",
    tech: ["Laravel", "Filament", "JWT", "MySQL", "RBAC"],
    description: [
      "Independently built and led the backend (Laravel/MySQL) for a Medical University IRB (Institutional Review Board) management system used by 1,000+ users.",
      "Contributed to the backend (Laravel/MySQL) of a bus ticketing system deployed across 20+ countries, serving nearly 1 million users.",
      "Designed a Laravel-based RBAC system with JWT authentication, managing permissions for 500+ users.",
      "Built admin dashboards using Filament and optimized database queries, improving task management efficiency by 40% and reducing API response time by 35%."
    ]
  },
  {
    company: "Softvence",
    role: "Junior Laravel Developer",
    period: "Oct 2024 – May 2025",
    location: "Dhaka, Bangladesh · Remote",
    tech: ["Laravel 9", "MySQL", "REST API", "Real-time Systems"],
    description: [
      "Built a scalable RESTful API in Laravel 9 to power an Android application used by 1,000+ active users.",
      "Implemented real-time chat functionality and a notification queue system for the application.",
      "Developed an admin dashboard with approval workflows, cutting task processing time by 50%.",
      "Designed a real-time leaderboard system and player task-tracking modules.",
      "Optimized MySQL queries, improving database performance by 40%."
    ]
  },
  {
    company: "Medina Tech Ltd.",
    role: "Software Engineer Intern",
    period: "Oct 2023 – Nov 2023",
    location: "Dhaka, Bangladesh · On-site",
    isInternship: true,
    tech: ["Kotlin", "Android", "Bitbucket"],
    description: [
      "Android development using Kotlin as part of a structured internship program.",
      "Version control with Bitbucket within a collaborative team workflow."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend & Frameworks",
    skills: ["Laravel", "RESTful API Design", "Spring Boot", "Node.js (Basic)"],
    icon: "database"
  },
  {
    title: "Programming Languages",
    skills: ["PHP", "Java", "C++", "Python", "TypeScript"],
    icon: "code"
  },
  {
    title: "Databases & Cloud",
    skills: ["MySQL", "PostgreSQL", "Firebase", "Redis"],
    icon: "server"
  },
  {
    title: "Core Concepts & Architecture",
    skills: ["Data Structures & Algorithms", "OOP", "RBAC", "JWT Authentication"],
    icon: "monitor"
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Bitbucket", "Jira", "Postman"],
    icon: "wrench"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Beestera App",
    type: "Android App Backend",
    description: [
      "Developed scalable RESTful API for Android application using Laravel.",
      "Built admin dashboard with task approval workflows and leaderboard system.",
      "Implemented secure JWT authentication and player task management."
    ],
    tech: ["Laravel", "MySQL", "JWT", "REST API"],
    metrics: ["1000+ Active Users", "50% Task Efficiency Gain"],
    image: "/beestera.png",
    demo: "https://play.google.com/store/apps/details?id=kc.app.socor&hl=en"
  },
  {
    title: "University IRB Management System",
    type: "Institutional Platform",
    description: [
      "Independently built and led the full backend for Bangladesh Medical University's Institutional Review Board (IRB) system — serving 1,000+ active users across faculty, researchers, and administrators.",
      "Challenge: IRB workflows are multi-stage, multi-role processes with strict audit requirements — a single flat permission model wouldn't scale. Approach: Designed a layered RBAC system with role-specific portals, automated review routing, and PDF certificate generation triggered on approval state changes. Result: Eliminated manual approval bottlenecks, reducing review cycle time significantly.",
      "Extended the platform with Academic & Syndicate meeting management, decision tracking, and a dynamic CMS supporting multiple departmental subdomains via Filament."
    ],
    tech: ["Laravel", "Filament", "MySQL", "RBAC"],
    metrics: ["1,000+ Active Users", "Automated Review Workflows", "Multi-Subdomain CMS"],
    image: "/bmu_dashboard.jpg",
    demo: "https://www.bmu.ac.bd/"
  },
  {
    title: "Global Bus Ticketing System",
    type: "Large-Scale Backend",
    description: [
      "Contributed to the backend of a bus ticketing platform deployed across 20+ countries and serving nearly 1 million users — the largest-scale system in this portfolio.",
      "Challenge: A ticketing system at this scale must handle concurrent seat reservations across distributed operators without double-booking. Approach: Implemented transactional booking logic with database-level locking, operator-scoped RBAC, and a route/schedule management engine flexible enough to support diverse country-specific configurations. Result: System successfully handles high-throughput bookings reliably across all 20+ markets.",
      "Note: Client details are under NDA — scale metrics shared with permission."
    ],
    tech: ["Laravel", "MySQL", "REST API", "RBAC"],
    metrics: ["~1 Million Users", "20+ Countries", "High-Concurrency Bookings"]
  },
  {
    title: "DevFlow",
    type: "Agency Management System",
    description: [
      "Developed a comprehensive agency platform for tracking projects, feature milestones, and task assignments.",
      "Implemented robust time tracking and activity monitoring modules for development teams.",
      "Built financial management tools for client payment records, itemized billing, and automated developer payouts.",
      "Integrated collaboration features including task comments, file attachments, and role-based access control."
    ],
    tech: ["Laravel", "Tailwind CSS", "MySQL", "Alpine.js"],
    metrics: ["End-to-End Workflow", "Financial Tracking"],
    image: "/devflow_transparent.png"
  },
  {
    title: "Hotel Management System",
    type: "Desktop Application",
    description: [
      "Developed desktop application with user authentication and RBAC.",
      "Implemented CRUD operations for employee management and hotel car booking.",
      "Designed MySQL schema supporting 100+ concurrent users."
    ],
    tech: ["Java", "Java Swing", "MySQL", "JDBC"],
    metrics: ["Secure RBAC System"],
    image: "/hotel.png"
  }
];

export const PROBLEM_SOLVING: PlatformStat[] = [
  { platform: "Codeforces", count: "1350+", rank: "Pupil", maxRating: 1218 },
  { platform: "CodeChef", count: "140+", rank: "3-Star", maxRating: 1736 },
  { platform: "LeetCode", count: "260+", rank: "Top 15%" },
  { platform: "HackerRank", count: "200+" },
  { platform: "UVa", count: "290" },
  { platform: "Beecrowd", count: "262" }
];

export const ACHIEVEMENTS = [
  { title: "12th DIU Take-off", description: "Competitive Programming Contest Rank" },
  { title: "8th DIU Intersection", description: "Top Performing Team Rank" },
  { title: "428th Asia Dhaka Regional 2021", description: "ICPC Regional Participant" },
  { title: "Problem Setter & Judge", description: "DIU Contests (2022-2023)" },
  { title: "Programming Trainer", description: "Mentoring junior CP enthusiasts at DIU" }
];

export const EDUCATION: Education[] = [
  {
    institution: "Daffodil International University",
    degree: "BSc in Computer Science and Engineering",
    period: "06/2019 – 07/2023",
    location: "Dhaka, Bangladesh",
    description: "Focused on Data Structures, Algorithms, Software Engineering, Database Systems, and System Architecture."
  },
  {
    institution: "Bangladesh Navy College",
    degree: "Higher Secondary School Certificate (HSC)",
    period: "2016 – 2018",
    location: "Dhaka, Bangladesh",
    description: "Science background with emphasis on Higher Mathematics, Physics, and Chemistry."
  },
  {
    institution: "Bashir Uddin Ideal School & College",
    degree: "Secondary School Certificate (SSC)",
    period: "2009 – 2016",
    location: "Dhaka, Bangladesh",
    description: "Primary and secondary school education with foundational science background."
  }
];
