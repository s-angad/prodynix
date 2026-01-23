import React from 'react';

const SectionHeading = ({
  title,
  subtitle,
  description,
  align = 'center',
  className = '',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`max-w-3xl px-1 ${alignmentClasses[align]} ${className}`}>
      {subtitle && (
        <span className="inline-block text-bee-yellow font-medium text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-bee-white leading-tight mb-3 sm:mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-bee-slate-400 text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
