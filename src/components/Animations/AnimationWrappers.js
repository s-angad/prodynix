import React from 'react';
import { motion } from 'framer-motion';

const AnimationWrappers = {
  // Fade In
  FadeIn: ({ children, delay = 0, duration = 0.6 }) => (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration, delay }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  ),

  // Slide Up
  SlideUp: ({ children, delay = 0, duration = 0.6 }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  ),

  // Slide In from Left
  SlideInLeft: ({ children, delay = 0, duration = 0.6 }) => (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  ),

  // Slide In from Right
  SlideInRight: ({ children, delay = 0, duration = 0.6 }) => (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  ),

  // Zoom In
  ZoomIn: ({ children, delay = 0, duration = 0.6 }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration, delay }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  ),

  // Bounce
  Bounce: ({ children, delay = 0, duration = 0.6 }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        type: 'spring',
        damping: 10,
        stiffness: 100,
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  ),

  // Float (continuous)
  Float: ({ children, delay = 0 }) => (
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 3, delay, repeat: Infinity }}
    >
      {children}
    </motion.div>
  ),

  // Rotate
  Rotate: ({ children, delay = 0 }) => (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 4, delay, repeat: Infinity, ease: 'linear' }}
    >
      {children}
    </motion.div>
  ),

  // Glow Pulse
  GlowPulse: ({ children, delay = 0 }) => (
    <motion.div
      animate={{
        boxShadow: [
          '0 0 20px rgba(0, 217, 255, 0.3)',
          '0 0 40px rgba(0, 217, 255, 0.6)',
          '0 0 20px rgba(0, 217, 255, 0.3)',
        ],
      }}
      transition={{ duration: 2, delay, repeat: Infinity }}
    >
      {children}
    </motion.div>
  ),

  // Hover Scale
  HoverScale: ({ children }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  ),

  // Stagger Container
  StaggerContainer: ({ children, delay = 0 }) => (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.1, delayChildren: delay }}
    >
      {children}
    </motion.div>
  ),

  // Stagger Item
  StaggerItem: ({ children }) => (
    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
      {children}
    </motion.div>
  ),
};

export default AnimationWrappers;
