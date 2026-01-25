import React from 'react';

const Card = ({
  children,
  className = '',
  hover = true,
  padding = 'md',
}) => {
  // Responsive padding - slightly smaller on mobile
  const paddingClasses = {
    sm: 'p-3 sm:p-4',
    md: 'p-4 sm:p-6',
    lg: 'p-5 sm:p-8',
    xl: 'p-6 sm:p-10',
  };

  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl
        glass-panel card-surface border border-white/60 card-glow
        ${hover ? 'transition-all duration-500 hover:shadow-lg hover:floating-layer hover:border-bee-yellow/40' : ''}
        ${paddingClasses[padding]}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
