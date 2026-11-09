import React from 'react';
import { motion } from 'framer-motion';
import { Award, Terminal, Trophy } from 'lucide-react';
import { ACHIEVEMENTS, PROBLEM_SOLVING } from '../constants';
import SectionHeader, { Accent } from './ui/SectionHeader';
import Reveal, { staggerChild, staggerParent } from './ui/Reveal';
import TiltCard from './ui/TiltCard';

const ProblemSolving: React.FC<{ id?: string }> = ({ id = 'problem-solving' }) => (
  <section id={id} aria-labelledby="cp-title" className="relative border-y border-white/[0.06] bg-ink-2/40 py-24 sm:py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <SectionHeader
        id="cp-title"
        index="05"
        eyebrow="Algorithmic Foundation"
        title={
          <>
            2,400+ problems solved across <Accent>340+ contests.</Accent>
          </>
        }
        description="Competitive programming trained me to reason about time complexity, edge cases and data structures before writing production code."
      />

      {/* Platform cards */}
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {PROBLEM_SOLVING.map((stat) => (
          <motion.div key={stat.platform} variants={staggerChild}>
            <TiltCard max={4} className="rounded-3xl">
              <div className="surface flex h-full flex-col justify-between rounded-3xl p-6 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-soft">
                    <Terminal size={15} className="text-electric-soft" />
                    {stat.platform}
                  </span>
                  {stat.rank && (
                    <span className="chip border-electric/25 bg-electric/10 text-electric-soft">
                      {stat.rank}
                    </span>
                  )}
                </div>

                <div className="mt-6 flex items-baseline justify-between gap-4">
                  <div>
                    <div className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">{stat.count}</div>
                    <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                      Problems solved
                    </div>
                  </div>
                  {stat.maxRating && (
                    <div className="text-right">
                      <div className="font-mono text-lg font-semibold text-violet-soft">{stat.maxRating}</div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">Max rating</div>
                    </div>
                  )}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>

      {/* Competitive Programming & Leadership Achievements */}
      <Reveal className="mt-14">
        <div className="surface rounded-3xl p-6 sm:p-9">
          <div className="mb-6 flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-violet/10 text-violet-soft">
              <Trophy size={18} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-fg">Contests, Judging &amp; Mentorship</h3>
              <p className="text-xs text-muted">ICPC regional participation and community contributions at DIU</p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {ACHIEVEMENTS.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/[0.06] bg-ink/50 p-4 transition-colors hover:border-white/15"
              >
                <Award size={15} className="text-electric-soft" />
                <div className="mt-2.5 text-sm font-semibold text-fg">{item.title}</div>
                <div className="mt-1 text-xs leading-relaxed text-muted">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default ProblemSolving;

