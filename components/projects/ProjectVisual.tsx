import React from 'react';
import type { Project } from '../../types';

/** Browser chrome frame around a real screenshot. */
const BrowserFrame: React.FC<{ project: Project }> = ({ project }) => (
  <div className="relative flex h-full w-full items-center justify-center p-5 sm:p-8 lg:p-10">
    <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1.5 group-hover:scale-[1.015]">
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-ink-2 px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="mx-auto hidden truncate rounded-md bg-white/[0.04] px-3 py-1 font-mono text-[10px] text-faint sm:block">
          {project.demo ? new URL(project.demo).host : 'internal.app'}
        </span>
      </div>
      <img
        src={project.image}
        alt={project.imageAlt ?? project.title}
        loading="lazy"
        decoding="async"
        width={1376}
        height={768}
        className="aspect-[1376/768] w-full object-cover"
      />
    </div>
  </div>
);

/** Large app icon on an ambient panel. */
const AppIconVisual: React.FC<{ project: Project }> = ({ project }) => (
  <div className="relative flex h-full w-full items-center justify-center overflow-hidden p-10">
    <div aria-hidden className="absolute h-64 w-64 rounded-full bg-amber-400/20 blur-[90px]" />
    <div className="relative transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:rotate-[-3deg]">
      <img
        src={project.image}
        alt={project.imageAlt ?? project.title}
        loading="lazy"
        decoding="async"
        width={512}
        height={512}
        className="h-40 w-40 rounded-[2.2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] sm:h-52 sm:w-52 sm:rounded-[2.8rem]"
      />
      <img
        aria-hidden
        src={project.image}
        alt=""
        className="absolute top-full mt-2 h-40 w-40 scale-y-[-1] rounded-[2.2rem] opacity-[0.12] blur-[2px] [mask-image:linear-gradient(to_top,#000,transparent_45%)] sm:h-52 sm:w-52 sm:rounded-[2.8rem]"
      />
    </div>
  </div>
);

/** Brand mark on dark — inverts the light logo artwork to suit the theme. */
const LogoVisual: React.FC<{ project: Project }> = ({ project }) => (
  <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
    <div aria-hidden className="bg-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(circle,#000,transparent_70%)]" />
    <img
      src={project.image}
      alt={project.imageAlt ?? project.title}
      loading="lazy"
      decoding="async"
      width={1000}
      height={667}
      className="relative w-[78%] max-w-sm mix-blend-screen [filter:invert(1)_hue-rotate(180deg)_brightness(1.1)] transition-transform duration-700 group-hover:scale-105"
    />
  </div>
);

/** Full-bleed cover artwork. */
const BannerVisual: React.FC<{ project: Project }> = ({ project }) => (
  <img
    src={project.image}
    alt={project.imageAlt ?? project.title}
    loading="lazy"
    decoding="async"
    width={1400}
    height={933}
    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
  />
);

/** Architecture overview for NDA-protected work (no screenshots shared). */
const DiagramVisual: React.FC = () => {
  const Box: React.FC<{ label: string; sub: string; accent?: boolean }> = ({ label, sub, accent }) => (
    <div
      className={`rounded-xl border px-3 py-2.5 text-center backdrop-blur sm:px-4 sm:py-3 ${
        accent ? 'border-electric/40 bg-electric/10' : 'border-white/10 bg-white/[0.03]'
      }`}
    >
      <div className={`text-[11px] font-semibold sm:text-xs ${accent ? 'text-electric-soft' : 'text-fg'}`}>{label}</div>
      <div className="mt-0.5 font-mono text-[9px] text-faint sm:text-[10px]">{sub}</div>
    </div>
  );
  const Flow: React.FC = () => (
    <div aria-hidden className="relative mx-auto h-6 w-px overflow-hidden bg-white/10 sm:h-7">
      <span className="absolute inset-x-0 top-0 h-3 animate-flow bg-gradient-to-b from-transparent via-electric-soft to-transparent" />
    </div>
  );
  return (
    <div className="relative flex h-full w-full items-center justify-center p-6 sm:p-10">
      <div aria-hidden className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(circle,#000,transparent_75%)]" />
      <figure className="relative w-full max-w-md" aria-label="High-level architecture of the bus ticketing backend">
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <Box label="Operators" sub="scoped RBAC" />
          <Box label="Passengers" sub="REST clients" />
          <Box label="Admins" sub="dashboards" />
        </div>
        <Flow />
        <Box label="Laravel REST API" sub="auth · routing · validation" accent />
        <Flow />
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          <Box label="Booking Engine" sub="DB-level locking" />
          <Box label="Route & Schedule" sub="per-country config" />
        </div>
        <Flow />
        <Box label="MySQL" sub="transactional seat inventory" />
        <figcaption className="mt-5 flex items-center justify-center gap-2">
          <span className="chip border-amber-400/25 bg-amber-400/10 text-amber-200">20+ countries</span>
          <span className="chip border-amber-400/25 bg-amber-400/10 text-amber-200">~1M users</span>
          <span className="chip text-faint">NDA</span>
        </figcaption>
      </figure>
    </div>
  );
};

export const ProjectVisual: React.FC<{ project: Project }> = ({ project }) => {
  switch (project.visual) {
    case 'screenshot':
      return <BrowserFrame project={project} />;
    case 'appIcon':
      return <AppIconVisual project={project} />;
    case 'logo':
      return <LogoVisual project={project} />;
    case 'banner':
      return <BannerVisual project={project} />;
    case 'diagram':
    default:
      return <DiagramVisual />;
  }
};

export default ProjectVisual;
