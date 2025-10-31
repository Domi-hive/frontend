import { Heart, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function ContinueSearching() {
  const properties = [
    {
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600',
      price: '₦2,700,000',
      period: '/month',
      title: 'Modern 2-Bedroom in Wuse II',
      location: 'Wuse II, Abuja',
      agent: 'John Adeyemi',
      agentVerified: true,
      agentImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      inspectionStatus: 'Available for Inspection',
      inspectionColor: 'bg-emerald-50 text-emerald-700',
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600',
      price: '₦4,500,000',
      period: '/month',
      title: 'Luxury Duplex in Maitama',
      location: 'Maitama, Abuja',
      agent: 'Ada Okafor',
      agentVerified: true,
      agentImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
      inspectionStatus: 'Available for Inspection',
      inspectionColor: 'bg-emerald-50 text-emerald-700',
    },
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600',
      price: '₦1,800,000',
      period: '/month',
      title: 'Cozy Studio in Garki',
      location: 'Garki, Abuja',
      agent: 'Chidi Eze',
      agentVerified: true,
      agentImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
      inspectionStatus: 'Inspection Scheduled',
      inspectionColor: 'bg-blue-50 text-[#1565C0]',
    },
    {
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600',
      price: '₦3,200,000',
      period: '/month',
      title: 'Family House in Asokoro',
      location: 'Asokoro, Abuja',
      agent: 'Sarah Johnson',
      agentVerified: true,
      agentImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
      inspectionStatus: 'Available for Inspection',
      inspectionColor: 'bg-emerald-50 text-emerald-700',
    },
  ];
  
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl text-gray-900 mb-1" style={{ fontWeight: 600 }}>Matched Properties</h3>
          <p className="text-sm text-gray-600">Properties that meet your request preferences</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-[#1565C0] hover:text-white hover:border-[#1565C0] transition-all cursor-pointer">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-[#1565C0] hover:text-white hover:border-[#1565C0] transition-all cursor-pointer">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-5">
        {properties.slice(0, 3).map((property, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 group"
          >
            {/* Image */}
            <div className="relative h-40 overflow-hidden">
              <ImageWithFallback
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors cursor-pointer">
                <Heart className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-4">
              {/* Price */}
              <div className="mb-2">
                <span className="text-lg text-[#1565C0]" style={{ fontWeight: 600 }}>{property.price}</span>
                <span className="text-sm text-gray-500">{property.period}</span>
              </div>
              
              {/* Title & Location */}
              <h4 className="text-sm text-gray-900 mb-0.5" style={{ fontWeight: 600 }}>{property.title}</h4>
              <p className="text-xs text-gray-500 mb-3">{property.location}</p>
              
              {/* Inspection Status */}
              <div className="mb-3">
                <span className={`inline-flex px-2.5 py-1 rounded-lg ${property.inspectionColor} text-xs`} style={{ fontWeight: 600 }}>
                  {property.inspectionStatus}
                </span>
              </div>
              
              {/* Agent Info */}
              <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                <ImageWithFallback
                  src={property.agentImage}
                  alt={property.agent}
                  className="w-7 h-7 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-900 truncate" style={{ fontWeight: 600 }}>{property.agent}</span>
                    {property.agentVerified && (
                      <ShieldCheck className="w-3 h-3 text-[#1565C0] flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-gray-500">Verified Agent</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
