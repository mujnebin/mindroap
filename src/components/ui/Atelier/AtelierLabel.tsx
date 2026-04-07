import React from 'react';

interface AtelierLabelProps {
  children: React.ReactNode;
  className?: string;
  tracking?: 'normal' | 'wide' | 'wider' | 'widest';
}

export function AtelierLabel({ children, className = '', tracking = 'widest' }: AtelierLabelProps) {
  const trackingClasses = {
    normal: 'tracking-[0.1em]',
    wide: 'tracking-[0.3em]',
    wider: 'tracking-[0.4em]',
    widest: 'tracking-[0.5em]',
  };

  return (
    <span className={`text-[10px] font-bold uppercase ${trackingClasses[tracking]} text-gray-700 ${className}`}>
      {children}
    </span>
  );
}
