import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = ({ children, type = 'gradient' }) => {
  const variants = {
    gradient: {
      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: 'linear',
      },
    },
    pulse: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 4,
        repeat: Infinity,
      },
    },
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      animate={variants[type]}
      className="relative w-full"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedBackground;
