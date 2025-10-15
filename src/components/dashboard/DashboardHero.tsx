import { Plus } from 'lucide-react';

export function DashboardHero() {
  return (
    <div className="relative bg-gradient-to-r from-[#E3F2FD] to-white rounded-3xl p-10 mb-8 overflow-hidden animate-fadeIn">
      {/* Subtle decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#90CAF9]/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 flex items-center justify-between">
        <div className="animate-slideUp">
          <h2 className="text-3xl text-[#0D1B2A] mb-2" style={{ fontWeight: 600 }}>
            Good Morning, Muhammad! ☀️
          </h2>
          <p className="text-base text-gray-600">
            Looking for anything new today?
          </p>
        </div>
        
        <button className="flex items-center gap-2 px-6 py-3.5 bg-[#90CAF9] text-white rounded-xl hover:bg-gradient-to-r hover:from-[#1565C0] hover:to-[#90CAF9] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 animate-fadeIn" style={{ fontWeight: 600, animationDelay: '200ms' }}>
          <Plus className="w-5 h-5" />
          <span>Create Property Request</span>
        </button>
      </div>
    </div>
  );
}
