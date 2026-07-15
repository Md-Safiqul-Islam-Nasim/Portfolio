
export interface Project {
  title: string;
  type: string;
  description: string[];
  tech: string[];
  image: string;
  metrics?: string[];
  github?: string;
  demo?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  tech: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface PlatformStat {
  platform: string;
  count: string;
  rank?: string;
  maxRating?: number;
}
