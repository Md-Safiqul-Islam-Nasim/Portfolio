import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useFinePointer, useReducedMotion } from '../../hooks/useMedia';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  /** Max tilt in degrees */
  max?: number;
  /** Show a soft light glare following the cursor */
  glare?: boolean;
}

/** Perspective tilt with cursor-following glare. Disabled on touch & reduced-motion. */
export const TiltCard: React.FC<TiltCardProps> = ({ children, className = '', max = 6, glare = true }) => {
  const ref = useRef<HTMLDivElement>(null);
  const fine = useFinePointer();
  const reduced = useReducedMotion();
  const enabled = fine && !reduced;

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 160, damping: 20, mass: 0.5 };
  const rx = useSpring(useTransform(py, [0, 1], [max, -max]), spring);
  const ry = useSpring(useTransform(px, [0, 1], [-max, max]), spring);
  const gx = useTransform(px, (v) => `${v * 100}%`);
  const gy = useTransform(py, (v) => `${v * 100}%`);
  const glareBg = useMotionTemplate`radial-gradient(600px circle at ${gx} ${gy}, rgba(141,182,255,0.10), transparent 40%)`;

  const onMove = (e: React.MouseEvent) => {
    if (!enabled || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <div style={{ perspective: 1200 }} className="h-full">
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        style={enabled ? { rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' } : undefined}
        className={`group relative h-full ${className}`}
      >
        {children}
        {enabled && glare && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{ background: glareBg }}
          />
        )}
      </motion.div>
    </div>
  );
};

export default TiltCard;

