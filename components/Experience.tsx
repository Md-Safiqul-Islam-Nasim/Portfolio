import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { EXPERIENCES } from '../constants';
import SectionHeader, { Accent } from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import { highlightMetrics } from './ui/highlight';

const Experience: React.FC<{ id: string }> = ({ id }) => {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 70%', 'end 60%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <section id={id} aria-labelledby="experience-title" className="relative border-y border-white/[0.06] bg-ink-2/40 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          id="experience-title"
          index="03"
          eyebrow="Experience"
          title={
            <>
              Where I&rsquo;ve <Accent>shipped</Accent> real systems.
            </>
          }
          description="Production backends for universities, mobile apps and a multi-country ticketing platform."
        />

        <ol ref={listRef} className="relative">
          {/* Rail */}
          <div aria-hidden className="absolute top-2 bottom-2 left-[7px] w-px bg-white/[0.08] lg:left-[calc(28%+7px)]" />
          <motion.div
            aria-hidden
            style={{ scaleY: progress }}
            className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-gradient-to-b from-electric via-violet to-electric/0 lg:left-[calc(28%+7px)]"
          />

          {EXPERIENCES.map((exp, i) => (
            <li key={exp.company} className="relative grid gap-4 pb-14 pl-10 last:pb-0 lg:grid-cols-[28%_1fr] lg:gap-0 lg:pl-0">
              {/* Meta column */}
              <Reveal className="lg:sticky lg:top-32 lg:self-start lg:pr-12 lg:text-right">
                <div className="font-mono text-xs tracking-wider text-electric-soft">{exp.period}</div>
                <div className="mt-2 flex items-center gap-1.5 text-sm text-muted lg:justify-end">
                  <MapPin size={13} className="shrink-0" />
                  {exp.location}
                </div>
              </Reveal>

              {/* Node */}
              <span aria-hidden className="absolute top-1 left-0 flex h-[15px] w-[15px] items-center justify-center lg:left-[28%]">
                {exp.current && <span className="animate-pulse-ring absolute h-full w-full rounded-full bg-electric/60" />}
                <span className={`relative h-[15px] w-[15px] rounded-full border-2 ${exp.current ? 'border-electric bg-ink' : 'border-white/25 bg-ink'}`} />
              </span>

              {/* Card */}
              <Reveal delay={0.08} className="lg:pl-12">
                <article className="surface group rounded-3xl p-6 transition-colors duration-500 hover:border-white/[0.12] sm:p-8">
                  <header className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-fg sm:text-2xl">{exp.role}</h3>
                      <p className="mt-1 text-base text-soft">{exp.company}</p>
                    </div>
                    {exp.current && (
                      <span className="chip border-electric/30 bg-electric/10 text-electric-soft">
                        <span className="h-1.5 w-1.5 rounded-full bg-electric-soft" /> Current
                      </span>
                    )}
                    {exp.isInternship && <span className="chip">Internship</span>}
                  </header>

                  <ul className="mt-6 space-y-3">
                    {exp.description.map((d, j) => (
                      <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                        <span aria-hidden className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-electric-soft/70" />
                        <span>{highlightMetrics(d)}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-2 border-t border-white/[0.06] pt-6">
                    {exp.tech.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
              <span className="sr-only">Position {i + 1} of {EXPERIENCES.length}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;

