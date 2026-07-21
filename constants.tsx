
import { Project, Experience, SkillCategory, PlatformStat, Education } from './types';

export const PERSONAL_INFO = {
  name: "Md Safiqul Islam Nasim",
  role: "Backend Software Engineer",
  email: "mdsafiqulislamnasim1234@gmail.com",
  phone: "01931802944",
  location: "Dhaka, Bangladesh",
  tagline: "API Architect | Problem Solver | Backend Specialist",
  about: "Backend Software Engineer passionate about building scalable, high-performance server-side applications. 2+ years of experience developing RESTful APIs with Laravel, optimizing database queries, and implementing secure authentication systems.",
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
    period: "05/2024 – Present",
    tech: ["Laravel", "Filament", "JWT", "MySQL", "RBAC"],
    description: [
      "Develop and maintain backend systems with RBAC managing 500+ users across multiple permission levels.",
      "Built responsive admin dashboards using Filament, improving task management efficiency by 40%.",
      "Optimized database queries reducing average API response time by 35%.",
      "Implemented JWT-based authentication and secured 15+ RESTful API endpoints."
    ]
  },
  {
    company: "Softvence",
    role: "Junior Laravel Developer",
    period: "10/2023 – 05/2024",
    tech: ["Laravel 9", "MySQL", "REST API", "Real-time Systems"],
    description: [
      "Developed scalable RESTful API for Android application serving 1000+ active users using Laravel 9.",
      "Created admin dashboard with approval workflows, reducing task processing time by 50%.",
      "Built real-time leaderboard system and player task tracking modules.",
      "Optimized MySQL queries improving database performance by 40%."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend Development",
    skills: ["Laravel", "Spring Boot", "C#", "Node.js (Basic)"],
    icon: "database"
  },
  {
    title: "Programming Languages",
    skills: ["C++", "Java", "Python", "PHP", "TypeScript"],
    icon: "code"
  },
  {
    title: "Databases & Cloud",
    skills: ["MySQL", "PostgreSQL", "Firebase", "Redis"],
    icon: "server"
  },
  {
    title: "Frontend & Mobile",
    skills: ["React.js", "Angular", "Tailwind CSS", "Flutter", "Kotlin"],
    icon: "monitor"
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "Bitbucket", "Jira", "Postman", "Docker"],
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
    title: "BMU Admin & Research System",
    type: "University Management Platform",
    description: [
      "Built comprehensive administrative and research management platform for Bangladesh Medical University.",
      "Developed Institutional Review Board (IRB) module with automated review workflows and PDF certificate generation.",
      "Implemented Academic & Syndicate meeting management with decision tracking and member portals.",
      "Created dynamic CMS supporting multiple subdomains for departmental portals using Filament."
    ],
    tech: ["Laravel", "Filament", "MySQL", "RBAC"],
    metrics: ["Automated Workflows", "Dynamic Subdomains"],
    image: "/bmu.png",
    demo: "https://www.bmu.ac.bd/"
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
  { platform: "HackerRank", count: "200+", rank: "5-Star Gold" },
  { platform: "UVa", count: "290", rank: "Top Solvers" },
  { platform: "Beecrowd", count: "262", rank: "Elite" }
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
    degree: "Higher Secondary School Certificate",
    period: "2016 – 2018",
    location: "Dhaka, Bangladesh",
    description: "Science background with emphasis on Higher Mathematics, Physics, and Chemistry."
  }
];
