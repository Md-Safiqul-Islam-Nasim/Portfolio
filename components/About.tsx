import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Download, Layers, MapPin, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import SectionHeader, { Accent } from './ui/SectionHeader';
import Reveal, { staggerChild, staggerParent } from './ui/Reveal';
import TiltCard from './ui/TiltCard';

const ENGINEERING_PILLARS = [
  {
    icon: Layers,
    title: 'Backend Architecture & RESTful APIs',
    body: 'Designing modular Laravel APIs with clean service boundaries, structured request validation, and background notification queues.',
  },
  {
    icon: ShieldCheck,
    title: 'Authentication & Multi-Role RBAC',
    body: 'Implementing JWT authentication and layered role-based access control managing granular permissions across 500+ to 1,000+ users.',
  },
  {
    icon: Database,
    title: 'Database Design & Query Tuning',
    body: 'Structuring normalized MySQL schemas, transactional locking, and query optimizations that reduced API latency by 35% and improved DB performance by 40%.',
  },
  {
    icon: Cpu,
    title: 'Algorithmic Problem Solving',
    body: '2,400+ algorithmic problems solved and 340+ programming contests (Codeforces Pupil, CodeChef 3-Star, ICPC Dhaka Regional participant).',
  },
];

const About: React.FC<{ id: string }> = ({ id }) => (
  <section id={id} aria-labelledby="about-title" className="relative border-t border-white/[0.06] bg-ink-2/40 py-24 sm:py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <SectionHeader
        id="about-title"
        index="01"
        eyebrow="About Me"
        title={
          <>
            A backend engineer focused on <Accent>clarity, security, and scale.</Accent>
          </>
        }
        description="Combining production Laravel & MySQL engineering with a strong foundation in algorithms and system design."
      />

      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Left: Portrait & Verified Snapshot */}
        <Reveal depth className="mx-auto w-full max-w-sm lg:col-span-4 lg:mx-0 lg:max-w-none">
          <TiltCard max={4} className="rounded-3xl">
            <div className="surface overflow-hidden rounded-3xl p-2.5">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={PERSONAL_INFO.photo}
                  alt={`Portrait of ${PERSONAL_INFO.name}`}
                  width={800}
                  height={1067}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/4.6] w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/15 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-2">
                  <div>
                    <div className="text-base font-semibold text-fg">{PERSONAL_INFO.name}</div>
                    <div className="text-xs text-soft">
                      {PERSONAL_INFO.currentRole} · {PERSONAL_INFO.currentCompany}
                    </div>
                  </div>
                  <span className="chip bg-ink/80 backdrop-blur">
                    <MapPin size={11} className="text-electric-soft" /> Dhaka
                  </span>
                </div>
              </div>

              <div className="mt-2.5 grid grid-cols-2 gap-2 rounded-2xl bg-ink/60 p-3 text-center">
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5">
                  <div className="text-lg font-semibold text-fg">40%</div>
                  <div className="text-[11px] text-muted">DB &amp; Task Efficiency Gain</div>
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5">
                  <div className="text-lg font-semibold text-fg">35%</div>
                  <div className="text-[11px] text-muted">Faster API Response Time</div>
                </div>
              </div>
            </div>
          </TiltCard>
        </Reveal>

        {/* Right: Professional Narrative & Engineering Pillars */}
        <div className="lg:col-span-8">
          <Reveal className="surface rounded-3xl p-6 sm:p-8">
            <div className="space-y-4 text-base leading-relaxed text-soft">
              <p>{PERSONAL_INFO.about}</p>
              <p className="text-muted">
                At <span className="font-medium text-fg">CodeWare Limited</span>, I independently architected and led
                the backend for Bangladesh Medical University&rsquo;s Institutional Review Board (IRB) management system
                (supporting 1,000+ active researchers, faculty, and administrators) and contributed to a multi-country
                bus ticketing platform operating across 20+ countries for nearly 1 million users. Previously at{' '}
                <span className="font-medium text-fg">Softvence</span>, I built RESTful APIs, real-time chat, queued
                notification systems, and approval dashboards for mobile applications.
              </p>
              <p className="text-muted">
                My competitive programming background (<span className="text-soft">2,400+ problems solved</span> across
                Codeforces, CodeChef, LeetCode, UVa, Beecrowd, and HackerRank) shapes how I approach production
                engineering: writing clean, predictable code, designing normalized schemas, and eliminating performance
                bottlenecks before they reach users.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.07] pt-5">
              <div className="flex flex-wrap gap-2 text-xs text-muted">
                <span className="chip">BSc in CSE · Daffodil International University</span>
                <span className="chip">ICPC Asia Dhaka Regional 2021</span>
              </div>
              <a
                href={PERSONAL_INFO.resume}
                download={PERSONAL_INFO.resumeFileName}
                className="inline-flex items-center gap-2 text-xs font-semibold text-electric-soft hover:underline"
              >
                <Download size={14} /> Download Full Resume (PDF)
              </a>
            </div>
          </Reveal>

          <motion.ul
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            className="mt-5 grid gap-4 sm:grid-cols-2"
          >
            {ENGINEERING_PILLARS.map(({ icon: Icon, title, body }) => (
              <motion.li
                key={title}
                variants={staggerChild}
                className="surface rounded-2xl p-5 transition-colors hover:border-white/[0.14] sm:p-6"
              >
                <div className="mb-3.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-electric/25 bg-electric/10 text-electric-soft">
                  <Icon size={17} />
                </div>
                <h3 className="text-base font-semibold text-fg">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{body}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;
