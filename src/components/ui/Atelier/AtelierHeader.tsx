import { AtelierLabel } from './AtelierLabel';

interface AtelierHeaderProps {
  label: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
  lineWidth?: string;
}

export function AtelierHeader({ 
  label, 
  title, 
  subtitle, 
  alignment = 'left', 
  className = '', 
  lineWidth = '100px' 
}: AtelierHeaderProps) {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  const headerAlignmentClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end'
  };

  return (
    <div className={`flex flex-col gap-2 ${alignmentClasses[alignment]} ${className}`}>
      <div className={`flex items-center gap-2 ${headerAlignmentClasses[alignment]}`}>
        <AtelierLabel tracking="widest">{label}</AtelierLabel>
      </div>
      
      <h2 className="text-5xl md:text-8xl font-light text-[#111111] tracking-tighter leading-[0.85]">
        {title}
        {subtitle && (
          <>
            <br />
            <span className="text-gray-400/80 italic">{subtitle}</span>
          </>
        )}
      </h2>
    </div>
  );
}
