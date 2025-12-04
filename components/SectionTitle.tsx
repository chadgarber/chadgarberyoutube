import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, align = 'center' }) => {
  const alignmentClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={`flex flex-col mb-12 ${alignmentClass[align]}`}>
      <h2 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-neon-blue to-neon-pink mb-4 neon-text uppercase tracking-wide">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg md:text-xl font-light tracking-wide max-w-2xl font-sans">
          {subtitle}
        </p>
      )}
      <div className="h-1 w-24 bg-gradient-to-r from-neon-purple to-neon-blue mt-6 rounded-full" />
    </div>
  );
};

export default SectionTitle;