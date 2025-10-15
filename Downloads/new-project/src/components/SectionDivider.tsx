interface SectionDividerProps {
  fromColor: string;
  toColor: string;
  height?: 'sm' | 'md' | 'lg';
}

export function SectionDivider({ fromColor, toColor, height = 'md' }: SectionDividerProps) {
  const heightClass = {
    sm: 'h-10',
    md: 'h-16',
    lg: 'h-20',
  }[height];

  return (
    <div 
      className={`${heightClass} bg-gradient-to-b ${fromColor} ${toColor}`}
      aria-hidden="true"
    />
  );
}
