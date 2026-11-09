import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { EDUCATION } from '../constants';
import SectionHeader, { Accent } from './ui/SectionHeader';
import { staggerChild, staggerParent } from './ui/Reveal';
import TiltCard from './ui/TiltCard';

const Education: React.FC<{ id: string }> = ({ id }) => (
  <section id={id} aria-labelledby="education-title" className="relative py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <SectionHeader
        id="education-title"
        index="06"
        eyebrow="Education"
        title={
          <>
            Academic <Accent>foundation.</Accent>
          </>
        }
        description="Formal training in Computer Science & Engineering and foundational sciences."
      />

      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        className="grid gap-5 lg:grid-cols-3"
      >
        {EDUCATION.map((edu, idx) => (
          <motion.div key={edu.institution} variants={staggerChild}>
            <TiltCard max={4} className="rounded-3xl">
              <article className="surface flex h-full flex-col justify-between rounded-3xl p-6 sm:p-8">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-electric-soft">
                      <GraduationCap size={20} />
                    </span>
                    <span className="font-mono text-xs text-electric-soft">{edu.period}</span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-fg">{edu.degree}</h3>
                  <p className="mt-1.5 text-sm font-medium text-soft">{edu.institution}</p>

                  {edu.description && (
                    <p className="mt-4 text-sm leading-relaxed text-muted">{edu.description}</p>
                  )}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4 text-xs text-faint">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={12} /> {edu.location}
                  </span>
                  <span className="font-mono">0{idx + 1}</span>
                </div>
              </article>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Education;
