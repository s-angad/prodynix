import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoader = ({ isLoading = false }) => {
  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 bg-bee-dark z-50 flex items-center justify-center overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-bee-yellow/10 via-bee-dark to-bee-highlight/10" />

          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />

          {/* Main loader container */}
          <div className="relative w-40 h-40 flex items-center justify-center">
            {/* Outer rotating ring */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-bee-yellow border-r-bee-yellow"
            />

            {/* Middle rotating ring (reverse) */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: -360 }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-4 rounded-full border-2 border-transparent border-b-bee-highlight border-l-bee-highlight"
            />

            {/* Inner pulsing circle */}
            <motion.div
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-16 h-16 rounded-full bg-gradient-to-r from-bee-yellow to-bee-highlight shadow-lg shadow-bee-yellow/50"
            />

            {/* Center dot */}
            <motion.div
              initial={{ scale: 1 }}
              animate={{
                scale: [1, 0.8, 1],
              }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-2 h-2 bg-bee-white rounded-full"
            />

            {/* Orbiting particles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ rotate: 0 }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 3.5 + i * 0.7,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0"
              >
                <div
                  className="absolute w-1.5 h-1.5 rounded-full top-0 left-1/2 -translate-x-1/2"
                  style={{
                    background: `hsl(${270 + i * 60}, 100%, 60%)`,
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Loading text */}
          <div className="absolute bottom-20 flex flex-col items-center gap-4">
            <motion.div
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="text-bee-slate-300 text-sm font-medium"
            >
              Loading
            </motion.div>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                  className="w-1 h-1 rounded-full bg-bee-yellow"
                />
              ))}
            </div>
          </div>

          {/* Floating elements background */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`float-${i}`}
              initial={{ y: 0, opacity: 0.1 }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 2.5 + i * 0.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: `${40 + i * 20}px`,
                height: `${40 + i * 20}px`,
                background: `radial-gradient(circle, ${i % 2 === 0 ? '#8b5cf6' : '#f472b6'} 0%, transparent 70%)`,
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
