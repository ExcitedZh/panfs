import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '', dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 px-4 md:px-8 lg:px-16 ${dark ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-800'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            {title}
            <span className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 ${dark ? 'bg-[#E50112]' : 'bg-[#E50112]'}`}></span>
          </h2>
          {subtitle && (
            <p className={`mt-4 text-lg max-w-2xl mx-auto ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;