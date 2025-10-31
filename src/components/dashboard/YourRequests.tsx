import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function YourRequests() {
  const requests = [
    {
      agent: 'Sarah Johnson',
      agentImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
      date: '2/16/2024',
      category: 'DUPLEX',
      categoryColor: 'bg-purple-50 text-purple-600',
      title: 'Find 3-Bedroom Duplex',
      description: 'In Maitama area, modern design',
    },
  ];
  
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
        <h3 className="text-lg text-gray-900" style={{ fontWeight: 600 }}>Your Requests</h3>
        <button className="text-sm text-[#1565C0] hover:text-[#0D47A1] transition-colors cursor-pointer" style={{ fontWeight: 600 }}>
          See all
        </button>
      </div>
      
      {/* Table Header */}
      <div className="grid grid-cols-[200px_120px_1fr_100px] gap-4 px-6 py-4 bg-gray-50 border-b border-gray-100">
        <div className="text-xs text-black" style={{ fontWeight: 600, letterSpacing: '0.5px' }}>AGENT</div>
        <div className="text-xs text-black" style={{ fontWeight: 600, letterSpacing: '0.5px' }}>DATE</div>
        <div className="text-xs text-black" style={{ fontWeight: 600, letterSpacing: '0.5px' }}>REQUEST</div>
        <div className="text-xs text-black" style={{ fontWeight: 600, letterSpacing: '0.5px' }}>ACTION</div>
      </div>
      
      {/* Table Rows */}
      {requests.map((request, index) => (
        <div
          key={index}
          className="grid grid-cols-[200px_120px_1fr_100px] gap-4 px-6 py-5 hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <ImageWithFallback
              src={request.agentImage}
              alt={request.agent}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <div className="text-sm text-gray-900" style={{ fontWeight: 600 }}>{request.agent}</div>
              <div className="text-xs text-gray-500">{request.date}</div>
            </div>
          </div>
          <div className="flex items-center">
            <span className={`inline-flex px-3 py-1.5 rounded-lg ${request.categoryColor} text-xs`} style={{ fontWeight: 600 }}>
              {request.category}
            </span>
          </div>
          <div className="flex items-center">
            <div>
              <div className="text-sm text-gray-900 mb-0.5" style={{ fontWeight: 600 }}>{request.title}</div>
              <div className="text-xs text-gray-500">{request.description}</div>
            </div>
          </div>
          <div className="flex items-center">
            <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#1565C0] hover:border-[#1565C0] hover:text-white transition-all group cursor-pointer">
              <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
