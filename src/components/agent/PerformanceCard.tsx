import { useEffect, useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface PerformanceCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  suffix?: string;
  delay?: number;
  onClick?: () => void;
}

export function PerformanceCard({ title, value, icon: Icon, suffix = '', delay = 0, onClick }: PerformanceCardProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 1000; // 1 second animation
    const steps = 30;
    const increment = value / steps;
    let current = 0;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(interval);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <button
      onClick={onClick}
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: '#E3F2FD' }}>
          <Icon className="w-6 h-6" style={{ color: '#1565C0' }} />
        </div>
      </div>
      <div className="text-3xl mb-1" style={{ color: '#1565C0' }}>
        {displayValue}{suffix}
      </div>
      <div className="text-sm text-gray-600">{title}</div>
    </button>
  );
}
