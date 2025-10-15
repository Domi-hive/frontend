import { FileText, Calendar, Users, ArrowRight } from 'lucide-react';

export function ProgressCards() {
  const cards = [
    {
      icon: FileText,
      iconBg: 'bg-white',
      iconColor: 'text-[#1565C0]',
      label: 'Active Requests',
      value: '2',
      description: 'ongoing property requests',
      action: 'View all',
    },
    {
      icon: Calendar,
      iconBg: 'bg-white',
      iconColor: 'text-[#1565C0]',
      label: 'Upcoming Inspections',
      value: 'Wed, 2 PM',
      description: 'Next inspection scheduled',
      action: 'See details',
    },
    {
      icon: Users,
      iconBg: 'bg-white',
      iconColor: 'text-[#1565C0]',
      label: 'Verified Agents',
      value: '3',
      description: 'responding to your latest request',
      action: 'View agents',
    },
  ];
  
  return (
    <div className="grid grid-cols-3 gap-6 mb-8">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <div
            key={index}
            className="relative bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB]/30 rounded-2xl p-6 border border-blue-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 group overflow-hidden"
          >
            {/* Subtle decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${card.iconBg} shadow-sm flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${card.iconColor}`} />
                </div>
              </div>
              
              {/* Value */}
              <div className="mb-1">
                <span className="text-3xl text-[#0D1B2A]" style={{ fontWeight: 600 }}>
                  {card.value}
                </span>
              </div>
              
              {/* Description */}
              <div className="text-sm text-gray-700 mb-1">{card.description}</div>
              
              {/* Label */}
              <div className="text-xs text-gray-600 mb-4" style={{ fontWeight: 600, letterSpacing: '0.3px' }}>
                {card.label}
              </div>
              
              {/* Action Link */}
              <button className="flex items-center gap-1.5 text-xs text-[#1565C0] hover:text-[#0D47A1] transition-colors group-hover:gap-2 duration-300" style={{ fontWeight: 600 }}>
                <span>{card.action}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
