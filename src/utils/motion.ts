import type { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: {
    y: 60,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const fadeInLeft: Variants = {
  hidden: {
    x: -60,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const fadeInRight: Variants = {
  hidden: {
    x: 60,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const scaleIn: Variants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const slideInFromTop: Variants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
export const slideInFromBottom: Variants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8,
      ease: "easeOut",
    },
  },
};