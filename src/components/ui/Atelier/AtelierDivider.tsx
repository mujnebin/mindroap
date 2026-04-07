import React from 'react';

interface AtelierDividerProps {
  width?: string;
  className?: string;
  vertical?: boolean;
}

export function AtelierDivider({ width = '100px', className = '', vertical = false }: AtelierDividerProps) {
  if (vertical) {
    return (
      <div 
        className={`w-[1px] bg-gray-200/50 relative overflow-hidden ${className}`}
        style={{ height: width }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent animate-pulse" />
      </div>
    );
  }

  return (
    <div 
      className={`h-[1px] bg-gray-200/50 relative overflow-hidden ${className}`}
      style={{ width }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />
    </div>
  );
}
