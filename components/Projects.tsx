import React from 'react';
import { ArrowUpRight, CheckCircle2, Cpu, Layers } from 'lucide-react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';
import SectionHeader, { Accent } from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import TiltCard from './ui/TiltCard';
import { GithubIcon } from './ui/BrandIcons';
import ProjectVisual from './projects/ProjectVisual';

const VISUAL_BG: Record<Project['visual'], string> = {
  screenshot:
    'bg-[radial-gradient(120%_120%_at_0%_0%,rgba(59,130,246,0.16),transparent_60%),radial-gradient(100%_100%_at_100%_100%,rgba(139,92,246,0.12),transparent_60%)]',
  diagram:
    'bg-[radial-gradient(120%_120%_at_100%_0%,rgba(139,92,246,0.14),transparent_60%),radial-gradient(100%_100%_at_0%_100%,rgba(59,130,246,0.12),transparent_60%)]',
  appIcon: 'bg-[radial-gradient(100%_100%_at_50%_50%,rgba(251,191,36,0.08),transparent_65%)]',
  logo: 'bg-[radial-gradient(100%_100%_at_50%_0%,rgba(59,130,246,0.14),transparent_65%)]',
  banner: '',
};

const ProjectLinks: React.FC<{ project: Project }> = ({ project }) => {
  if (!project.demo && !project.github) return null;
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary px-4 py-2 text-xs sm:text-sm"
        >
          {project.demoLabel ?? 'Live Demo'} <ArrowUpRight size={15} />
        </a>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost px-4 py-2 text-xs sm:text-sm"
        >
          <GithubIcon size={15} /> Source Code
        </a>
      )}
    </div>
  );
};

/** Full software-product showcase for flagship systems — problem, architecture, features, and metrics visible at a glance. */
const FeaturedShowcase: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const reversed = index % 2 === 1;
  return (
    <Reveal depth>
      <article className="surface overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-10">
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Visual Preview Column */}
          <div className={`lg:col-span-7 ${reversed ? 'lg:order-2' : ''}`}>
            <TiltCard max={4} className="rounded-2xl">
              <div
                className={`relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-ink ${VISUAL_BG[project.visual]}`}
              >
                <ProjectVisual project={project} />
              </div>
            </TiltCard>

            {/* Impact Metrics Bar */}
            {project.metrics && (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {project.metrics.map((m) => (
                  <span
                    key={m}
                    className="inline-flex items-center gap-2 rounded-lg border border-electric/25 bg-electric/10 px-3 py-1.5 text-xs font-medium text-electric-soft"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-electric" />
                    {m}
                  </span>
                ))}
                {project.note && <span className="text-xs text-faint italic">{project.note}</span>}
              </div>
            )}
          </div>

          {/* Engineering Breakdown Column */}
          <div className={`flex flex-col justify-between lg:col-span-5 ${reversed ? 'lg:order-1' : ''}`}>
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="eyebrow text-electric-soft">{project.type}</span>
                <span className="font-mono text-xs text-faint">0{index + 1}</span>
              </div>

              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-soft sm:text-[15px]">{project.summary}</p>

              {/* Problem & Technical Implementation Boxes */}
              {(project.challenge || project.approach) && (
                <div className="mt-5 space-y-3 rounded-2xl border border-white/[0.07] bg-ink/60 p-4">
                  {project.challenge && (
                    <div>
                      <div className="flex items-center gap-1.5 font-mono text-[11px] font-semibold tracking-wider text-amber-300/90 uppercase">
                        <Layers size={12} /> The Problem
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-muted sm:text-[13px]">{project.challenge}</p>
                    </div>
                  )}
                  {project.approach && (
                    <div className={project.challenge ? 'border-t border-white/[0.06] pt-3' : ''}>
                      <div className="flex items-center gap-1.5 font-mono text-[11px] font-semibold tracking-wider text-electric-soft uppercase">
                        <Cpu size={12} /> Technical Implementation
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-muted sm:text-[13px]">{project.approach}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Key Features */}
              <div className="mt-5">
                <div className="font-mono text-[11px] font-medium tracking-wider text-faint uppercase">
                  Key Engineering Features
                </div>
                <ul className="mt-2.5 space-y-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-xs leading-relaxed text-muted sm:text-[13.5px]">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-mint" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech Badges & Action Links */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.07] pt-5">
              <ul className="flex flex-wrap gap-1.5" aria-label="Technologies used">
                {project.tech.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
              <ProjectLinks project={project} />
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
};

/** Structured card for additional software systems. */
const SecondaryProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <Reveal delay={index * 0.08} className="h-full">
    <TiltCard max={3.5} className="rounded-3xl">
      <article className="surface flex h-full flex-col overflow-hidden rounded-3xl">
        <div
          className={`relative aspect-[16/9] overflow-hidden border-b border-white/[0.07] bg-ink ${VISUAL_BG[project.visual]}`}
        >
          <ProjectVisual project={project} />
        </div>

        <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="eyebrow text-electric-soft">{project.type}</span>
              {project.metrics?.[0] && (
                <span className="chip border-electric/25 bg-electric/10 text-electric-soft">
                  {project.metrics[0]}
                </span>
              )}
            </div>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-fg sm:text-2xl">{project.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-soft">{project.summary}</p>

            {project.approach && (
              <div className="mt-4 rounded-xl border border-white/[0.06] bg-ink/50 p-3.5">
                <div className="font-mono text-[10px] font-semibold tracking-wider text-electric-soft uppercase">
                  Technical Implementation
                </div>
                <p className="mt-1 text-xs leading-relaxed text-muted">{project.approach}</p>
              </div>
            )}

            <ul className="mt-4 space-y-1.5">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-xs leading-relaxed text-muted sm:text-[13px]">
                  <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-mint" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.07] pt-4">
            <ul className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>
            <ProjectLinks project={project} />
          </div>
        </div>
      </article>
    </TiltCard>
  </Reveal>
);

const Projects: React.FC<{ id: string }> = ({ id }) => {
  const featured = PROJECTS.filter((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section id={id} aria-labelledby="projects-title" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          id="projects-title"
          index="04"
          eyebrow="Project Showcase"
          title={
            <>
              Production systems &amp; <Accent>software products.</Accent>
            </>
          }
          description="Real backend architectures, admin platforms, and applications — detailing the problem solved, technical implementation, and measurable outcome."
        />

        <div className="space-y-10 sm:space-y-14">
          {featured.map((p, i) => (
            <FeaturedShowcase key={p.slug} project={p} index={i} />
          ))}
        </div>

        {others.length > 0 && (
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {others.map((p, i) => (
              <SecondaryProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
