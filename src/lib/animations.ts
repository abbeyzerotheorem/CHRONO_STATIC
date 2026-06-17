import { Variants, Transition } from 'framer-motion';

// ── Easing Curves ──
export const easings = {
  smooth: [0.16, 1, 0.3, 1] as [number, number, number, number],
  spring: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
  expo: [0.19, 1, 0.22, 1] as [number, number, number, number],
  inOut: [0.76, 0, 0.24, 1] as [number, number, number, number],
  elastic: [0.68, -0.6, 0.32, 1.6] as [number, number, number, number],
};

// ── Transitions ──
export const transitions = {
  fast: { duration: 0.15, ease: easings.smooth },
  normal: { duration: 0.3, ease: easings.smooth },
  slow: { duration: 0.5, ease: easings.expo },
  xslow: { duration: 0.8, ease: easings.expo },
  spring: { type: 'spring' as const, stiffness: 300, damping: 30 },
  springLight: { type: 'spring' as const, stiffness: 200, damping: 20 },
};

// ── Page Transitions ──
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: transitions.slow,
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: transitions.fast,
  },
};

export const pageSlide: Variants = {
  initial: { opacity: 0, x: -30 },
  animate: {
    opacity: 1,
    x: 0,
    transition: transitions.slow,
  },
  exit: {
    opacity: 0,
    x: 30,
    transition: transitions.normal,
  },
};

// ── Section Reveals ──
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easings.expo },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.slow },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easings.smooth },
  },
};

// ── Stagger Container ──
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easings.expo },
  },
};

// ── Text Animations ──
export const textReveal: Variants = {
  hidden: { y: '100%' },
  visible: {
    y: 0,
    transition: { duration: 0.7, ease: easings.expo },
  },
};

export const textStagger: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: easings.expo,
    },
  }),
};

// ── Image Reveal ──
export const imageReveal: Variants = {
  hidden: { clipPath: 'inset(0 0 100% 0)' },
  visible: {
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 0.8, ease: easings.expo },
  },
};

export const imageRevealHorizontal: Variants = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 0.8, ease: easings.expo },
  },
};

// ── Card Hover ──
export const cardHover = {
  rest: { scale: 1, y: 0, transition: transitions.normal },
  hover: {
    scale: 1.02,
    y: -4,
    transition: { duration: 0.3, ease: easings.smooth },
  },
};

// ── Drawer / Modal ──
export const drawerRight: Variants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { duration: 0.4, ease: easings.smooth },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.3, ease: easings.smooth },
  },
};

export const modalOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.normal },
  exit: { opacity: 0, transition: transitions.fast },
};

export const modalContent: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: easings.smooth },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: 0.2, ease: easings.smooth },
  },
};

// ── Button ──
export const buttonTap = { scale: 0.97 };
export const buttonHover = { scale: 1.02 };

// ── Counter ──
export const counterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easings.expo },
  },
};

// ── Parallax ──
export function parallaxY(offset: number = 50): Variants {
  return {
    hidden: { y: offset, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: easings.expo },
    },
  };
}

// ── Scale Reveal ──
export const scaleReveal: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: easings.smooth },
  },
};

// ── List stagger for nav items ──
export const navStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

export const navItem: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easings.smooth },
  },
};