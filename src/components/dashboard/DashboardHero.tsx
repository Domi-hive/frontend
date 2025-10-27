import { Plus } from 'lucide-react';

interface DashboardHeroProps {
  onCreateRequest: () => void;
}

export function DashboardHero({ onCreateRequest }: DashboardHeroProps) {
  const userData = localStorage.getItem('userData');
  const user = userData ? JSON.parse(userData) : null;
  const userName = user?.fullName || 'User';

  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) return 'Good Morning';
    if (hour >= 12 && hour < 17) return 'Good Afternoon';
    if (hour >= 17 && hour < 22) return 'Good Evening';
    return 'Good Night';
  };

  const greeting = getTimeBasedGreeting();
  return (
    <div className="relative bg-gradient-to-r from-[#E3F2FD] to-white rounded-3xl p-10 mb-8 overflow-hidden animate-fadeIn">
      {/* Subtle decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#90CAF9]/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 flex items-center justify-between">
        <div className="animate-slideUp">
          <h2 className="text-3xl text-[#0D1B2A] mb-2" style={{ fontWeight: 600 }}>
            {greeting}, {userName}! ☀️
          </h2>
          <p className="text-base text-gray-600">
            Looking for anything new today?
          </p>
        </div>
        
        <button
          onClick={onCreateRequest}
          className="flex items-center gap-2 px-6 py-3.5 bg-[#90CAF9] text-white rounded-xl hover:bg-gradient-to-r hover:from-[#1565C0] hover:to-[#90CAF9] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 animate-fadeIn cursor-pointer"
          style={{ fontWeight: 600, animationDelay: '200ms' }}
        >
          <Plus className="w-5 h-5" />
          <span>Create Property Request</span>
        </button>
      </div>
    </div>
  );
}
