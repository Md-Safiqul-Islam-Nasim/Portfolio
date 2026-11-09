import React, { Suspense, lazy, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Download, Layers, MapPin, Server, ShieldCheck } from 'lucide-react';
import { HERO_STATS, PERSONAL_INFO, SOCIALS } from '../constants';
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons';
import Magnetic from './ui/Magnetic';
import { hasWebGL, useIsDesktop, useReducedMotion } from '../hooks/useMedia';

const HeroScene = lazy(() => import('./three/HeroScene'));

const EASE = [0.22, 1, 0.36, 1] as const;
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: EASE },
});

/** Clean architectural diagram fallback while WebGL initializes or if disabled. */
const ArchitectureFallback: React.FC = () => (
  <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
    <div className="relative h-64 w-64">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.22)_0%,rgba(139,92,246,0.12)_50%,transparent_72%)] blur-xl" />
      <div className="absolute inset-8 rounded-full border border-electric/25" />
      <div className="absolute inset-16 rounded-full border border-violet/20" />
    </div>
  </div>
);

const Hero: React.FC<{ id: string }> = ({ id }) => {
  const isDesktop = useIsDesktop();
  const reduced = useReducedMotion();
  const [webgl, setWebgl] = useState<boolean | null>(null);
  const [mountScene, setMountScene] = useState(false);

  useEffect(() => {
    setWebgl(hasWebGL());
    const ric: (cb: () => void) => number =
      (window as any).requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 150));
    const handle = ric(() => setMountScene(true));
    return () => {
      (window as any).cancelIdleCallback?.(handle);
      clearTimeout(handle);
    };
  }, []);

  return (
    <section
      id={id}
      aria-label="Introduction"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-28 lg:pb-20"
    >
      {/* Subtle architectural grid & ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid mask-radial absolute inset-0 opacity-75" />
        <div className="absolute -top-48 right-[-8%] h-[560px] w-[560px] rounded-full bg-electric/15 blur-[140px]" />
        <div className="absolute top-[35%] right-[18%] h-[420px] w-[420px] rounded-full bg-violet/12 blur-[140px]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* ---------- Left Column: Executive Introduction ---------- */}
          <div className="relative z-10 lg:col-span-7">
            <motion.div
              {...fadeUp(0.05)}
              className="mb-6 inline-flex flex-wrap items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pr-3.5 pl-2.5 text-xs text-soft"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-mint" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
              </span>
              <span className="font-medium text-fg">Available for Backend / Software Engineer roles</span>
              <span className="text-white/20">·</span>
              <span className="inline-flex items-center gap-1 text-muted">
                <MapPin size={12} /> {PERSONAL_INFO.location}
              </span>
            </motion.div>

            <motion.div {...fadeUp(0.12)} className="flex flex-wrap items-center gap-2.5">
              <span className="font-mono text-xs font-medium tracking-wider text-electric-soft uppercase">
                Hello, I&rsquo;m {PERSONAL_INFO.name}
              </span>
              <span className="h-1 w-1 rounded-full bg-white/25" />
              <span className="font-mono text-xs text-muted">{PERSONAL_INFO.role}</span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.18)}
              className="mt-4 text-[2.35rem] leading-[1.08] font-semibold tracking-[-0.038em] text-fg sm:text-5xl lg:text-[3.55rem]"
            >
              Engineering reliable{' '}
              <span className="text-gradient">backend architectures,</span> RESTful APIs &amp; high-throughput databases.
            </motion.h1>

            <motion.p
              {...fadeUp(0.26)}
              className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-[1.08rem]"
            >
              Backend Software Engineer with nearly <span className="font-medium text-soft">2 years</span> of production
              experience building <span className="font-medium text-soft">Laravel &amp; MySQL</span> systems — from
              independently leading a university IRB platform (<span className="font-medium text-soft">1,000+ active users</span>)
              to contributing to a multi-country bus ticketing backend serving{' '}
              <span className="font-medium text-soft">nearly 1 million users</span>. Backed by{' '}
              <span className="font-medium text-soft">2,400+ algorithmic problems</span> solved across 340+ contests.
            </motion.p>

            {/* Core Technical Specializations */}
            <motion.div {...fadeUp(0.32)} className="mt-6 flex flex-wrap gap-2">
              {[
                { label: 'Laravel & REST APIs', icon: Server },
                { label: 'MySQL & Query Optimization', icon: Database },
                { label: 'JWT & Multi-Role RBAC', icon: ShieldCheck },
                { label: 'Filament Admin & System Design', icon: Layers },
              ].map(({ label, icon: Icon }) => (
                <span key={label} className="chip">
                  <Icon size={13} className="text-electric-soft" />
                  {label}
                </span>
              ))}
            </motion.div>

            {/* Primary CTAs & Verified Profiles */}
            <motion.div {...fadeUp(0.38)} className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic>
                <a href="#contact" className="btn-primary group">
                  Contact Me
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </Magnetic>
              <Magnetic>
                <a href={PERSONAL_INFO.resume} download={PERSONAL_INFO.resumeFileName} className="btn-ghost">
                  <Download size={16} />
                  Download Resume
                </a>
              </Magnetic>
              <a href="#projects" className="btn-ghost">
                View Projects
              </a>

              <div className="ml-1 flex items-center gap-2">
                <a
                  href={SOCIALS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="icon-btn"
                >
                  <GithubIcon size={17} />
                </a>
                <a
                  href={SOCIALS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="icon-btn"
                >
                  <LinkedinIcon size={16} />
                </a>
              </div>
            </motion.div>

            {/* Quantified Engineering Metrics */}
            <motion.dl
              {...fadeUp(0.46)}
              className="mt-11 grid grid-cols-2 gap-4 border-t border-white/[0.08] pt-7 sm:grid-cols-4 sm:gap-6"
            >
              {HERO_STATS.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-2xl font-semibold tracking-tight text-fg sm:text-[1.7rem]">{s.value}</dd>
                  <dd className="mt-1 text-xs leading-snug text-muted">{s.label}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* ---------- Right Column: 3D Architecture Visual + Engineer Identity Card ---------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15, ease: EASE }}
            className="relative lg:col-span-5"
          >
            <div className="surface relative h-[420px] w-full overflow-hidden rounded-3xl sm:h-[490px] lg:h-[540px]">
              <span aria-hidden className="gradient-border opacity-50" />

              {/* Top Telemetry Header inside the 3D Viewport */}
              <div className="relative z-10 flex items-center justify-between border-b border-white/[0.07] bg-ink/60 px-4 py-3 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-mint" />
                  <span className="font-mono text-[11px] font-medium text-soft">
                    system.topology // 3-tier-backend
                  </span>
                </div>
                <span className="font-mono text-[10px] text-muted">INTERACTIVE 3D</span>
              </div>

              {/* 3D Software Architecture Canvas */}
              <div className="relative h-[calc(100%-3rem)] w-full">
                {webgl && mountScene ? (
                  <Suspense fallback={<ArchitectureFallback />}>
                    <HeroScene lite={!isDesktop} reducedMotion={reduced} />
                  </Suspense>
                ) : (
                  <ArchitectureFallback />
                )}

                {/* Tier Labels Overlay */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute top-4 left-4 flex flex-col gap-1.5 font-mono text-[10px]"
                >
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-md border border-white/10 bg-ink/75 px-2.5 py-1 text-electric-soft backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-electric" />
                    T1 · API Gateway &amp; JWT/RBAC
                  </span>
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-md border border-white/10 bg-ink/75 px-2.5 py-1 text-violet-soft backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet" />
                    T2 · Laravel Services &amp; Queues
                  </span>
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-md border border-white/10 bg-ink/75 px-2.5 py-1 text-mint backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                    T3 · MySQL Cluster &amp; Redis
                  </span>
                </div>

                {/* Anchored Engineer Identity Card with Portrait */}
                <div className=" glass absolute inset-x-3 bottom-3 z-10 flex items-center justify-between gap-3 rounded-2xl p-3 shadow-2xl sm:inset-x-4 sm:bottom-4 sm:p-3.5">
                  <div className="flex min-w-0 items-center gap-3">
                    <img
                      src={PERSONAL_INFO.photo}
                      alt={PERSONAL_INFO.name}
                      width={48}
                      height={48}
                      className="h-11 w-11 shrink-0 rounded-xl border border-white/15 object-cover object-top"
                    />
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold text-fg">{PERSONAL_INFO.name}</div>
                      <div className="truncate text-xs text-muted">
                        {PERSONAL_INFO.currentRole} @ <span className="text-soft">{PERSONAL_INFO.currentCompany}</span>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#projects"
                    className="shrink-0 rounded-lg border border-electric/30 bg-electric/15 px-2.5 py-1.5 font-mono text-[11px] font-medium text-electric-soft transition-colors hover:bg-electric/25"
                  >
                    5 Systems →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
