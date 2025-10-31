import { Plus, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AgentsList() {
  const agents = [
    {
      name: 'Sarah Johnson',
      role: 'Real Estate Agent',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
      isOnline: true,
      stat: 'Completed 2 Inspections',
    },
    {
      name: 'Mike Chen',
      role: 'Property Consultant',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      isOnline: true,
      stat: 'Responds in under 2 hours',
    },
    {
      name: 'Emma Davis',
      role: 'Senior Agent',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
      isOnline: false,
      stat: 'Completed 5 Inspections',
    },
    {
      name: 'John Adeyemi',
      role: 'Real Estate Agent',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
      isOnline: true,
      stat: 'Responds in under 1 hour',
    },
  ];
  
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 sticky top-8">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg text-gray-900" style={{ fontWeight: 600 }}>Verified Agents</h3>
        <button className="w-8 h-8 rounded-lg hover:bg-gray-50 flex items-center justify-center transition-colors cursor-pointer">
          <Plus className="w-4 h-4 text-gray-600" />
        </button>
      </div>
      <p className="text-sm text-gray-600 mb-6">You've Interacted With</p>
      
      <div className="space-y-4">
        {agents.map((agent, index) => (
          <div key={index} className="group">
            <div className="flex items-start gap-3 mb-2">
              <div className="relative flex-shrink-0">
                <ImageWithFallback
                  src={agent.image}
                  alt={agent.name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                {agent.isOnline && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-gray-900 mb-0.5" style={{ fontWeight: 600 }}>{agent.name}</div>
                <div className="text-xs text-gray-500 mb-1">{agent.role}</div>
                <div className="text-xs text-gray-600 bg-[#E3F2FD] px-2 py-0.5 rounded inline-block">
                  {agent.stat}
                </div>
              </div>
            </div>
            <button className="w-full flex items-center justify-center gap-1.5 py-2 rounded-lg border border-gray-200 text-[#1565C0] text-xs hover:bg-[#E3F2FD] hover:border-[#90CAF9] transition-all group-hover:gap-2 cursor-pointer" style={{ fontWeight: 600 }}>
              <span>View Profile</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-6 py-3 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer" style={{ fontWeight: 600 }}>
        See All Agents
      </button>
    </div>
  );
}
