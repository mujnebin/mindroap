import React from 'react';

interface AtelierLayoutProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  grid?: boolean;
}

export function AtelierLayout({ 
  children, 
  id, 
  className = '', 
  containerClassName = 'max-w-7xl'
}: AtelierLayoutProps) {
  return (
    <section id={id} className={`py-20 px-4 relative ${className}`}>
      <div className={`mx-auto relative z-10 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
