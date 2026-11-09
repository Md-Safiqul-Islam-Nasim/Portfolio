import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, LayoutDashboard, Server, ShieldCheck, Wrench } from 'lucide-react';
import {
  siAlpinedotjs,
  siBitbucket,
  siCplusplus,
  siFilament,
  siFirebase,
  siGit,
  siGithub,
  siJira,
  siJsonwebtokens,
  siKotlin,
  siLaravel,
  siMysql,
  siNodedotjs,
  siOpenjdk,
  siPhp,
  siPostgresql,
  siPostman,
  siPython,
  siRedis,
  siSpringboot,
  siTailwindcss,
  siTypescript,
  type SimpleIcon,
} from 'simple-icons';
import { SKILL_CATEGORIES } from '../constants';
import type { SkillCategory } from '../types';
import SectionHeader, { Accent } from './ui/SectionHeader';
import { staggerChild, staggerParent } from './ui/Reveal';
import TiltCard from './ui/TiltCard';

const ICONS: Record<string, SimpleIcon> = {
  laravel: siLaravel,
  springboot: siSpringboot,
  nodedotjs: siNodedotjs,
  php: siPhp,
  openjdk: siOpenjdk,
  cplusplus: siCplusplus,
  python: siPython,
  typescript: siTypescript,
  mysql: siMysql,
  postgresql: siPostgresql,
  redis: siRedis,
  firebase: siFirebase,
  jsonwebtokens: siJsonwebtokens,
  tailwindcss: siTailwindcss,
  alpinedotjs: siAlpinedotjs,
  kotlin: siKotlin,
  git: siGit,
  github: siGithub,
  bitbucket: siBitbucket,
  jira: siJira,
  postman: siPostman,
  filament: siFilament,
};

const CATEGORY_ICONS: Record<SkillCategory['icon'], React.ElementType> = {
  code: Code2,
  server: Server,
  database: Database,
  shield: ShieldCheck,
  layout: LayoutDashboard,
  wrench: Wrench,
};

export const TechLogo: React.FC<{ icon: string; size?: number; className?: string }> = ({
  icon,
  size = 14,
  className,
}) => {
  const si = ICONS[icon];
  if (!si) return null;
  return (
    <svg
      role="img"
      aria-label={si.title}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d={si.path} />
    </svg>
  );
};

const Skills: React.FC<{ id: string }> = ({ id }) => (
  <section id={id} aria-labelledby="skills-title" className="relative py-24 sm:py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <SectionHeader
        id="skills-title"
        index="02"
        eyebrow="Technical Expertise"
        title={
          <>
            Production technologies &amp; <Accent>engineering capabilities.</Accent>
          </>
        }
        description="Organized by architectural layer — every language, framework, database, and tool listed below is backed by real project work."
      />

      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {SKILL_CATEGORIES.map((cat, i) => {
          const Icon = CATEGORY_ICONS[cat.icon];
          return (
            <motion.div key={cat.title} variants={staggerChild}>
              <TiltCard max={3.5} className="rounded-2xl">
                <article className="surface flex h-full flex-col rounded-2xl p-6 transition-colors hover:border-white/[0.14] sm:p-7">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-electric/25 bg-electric/10 text-electric-soft">
                      <Icon size={18} />
                    </div>
                    <span className="font-mono text-xs text-faint">0{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-fg">{cat.title}</h3>
                  <p className="mt-1.5 mb-6 text-sm leading-relaxed text-muted">{cat.blurb}</p>
                  <ul className="mt-auto flex flex-wrap gap-2">
                    {cat.skills.map((s) => (
                      <li
                        key={s.name}
                        className="chip transition-colors duration-200 hover:border-electric/40 hover:text-fg"
                      >
                        {s.icon && <TechLogo icon={s.icon} size={13} className="text-electric-soft" />}
                        {s.name}
                      </li>
                    ))}
                  </ul>
                </article>
              </TiltCard>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default Skills;
