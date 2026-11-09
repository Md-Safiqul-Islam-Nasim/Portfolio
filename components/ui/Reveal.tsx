import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

interface RevealProps extends HTMLMotionProps<'div'> {
  delay?: number;
  y?: number;
  /** Adds a subtle depth (scale) entrance */
  depth?: boolean;
}

/** Scroll-triggered entrance. Transforms are skipped automatically for reduced-motion users via MotionConfig. */
export const Reveal: React.FC<RevealProps> = ({ delay = 0, y = 28, depth = false, children, ...rest }) => (
  <motion.div
    initial={{ opacity: 0, y, scale: depth ? 0.96 : 1 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: '0px 0px -12% 0px' }}
    transition={{ duration: 0.9, delay, ease: EASE }}
    {...rest}
  >
    {children}
  </motion.div>
);

export const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const staggerChild = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export default Reveal;

