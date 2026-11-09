export type ProjectVisual = 'screenshot' | 'logo' | 'appIcon' | 'banner' | 'diagram';

export interface Project {
  slug: string;
  title: string;
  type: string;
  summary: string;
  highlights: string[];
  challenge?: string;
  approach?: string;
  result?: string;
  note?: string;
  tech: string[];
  metrics?: string[];
  image?: string;
  imageAlt?: string;
  visual: ProjectVisual;
  github?: string;
  demo?: string;
  demoLabel?: string;
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
  tech: string[];
  isInternship?: boolean;
  current?: boolean;
}

export interface Skill {
  name: string;
  /** simple-icons slug key, resolved in the Skills section */
  icon?: string;
}

export interface SkillCategory {
  title: string;
  blurb: string;
  skills: Skill[];
  icon: 'code' | 'server' | 'database' | 'shield' | 'layout' | 'wrench';
}

export interface PlatformStat {
  platform: string;
  count: string;
  rank?: string;
  maxRating?: number;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  description?: string;
}

export interface Achievement {
  title: string;
  description: string;
}
