import { Heart, ShieldCheck } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export type VisibilityLevel = 'available' | 'active' | 'locked';

interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    price: string;
    location: string;
    image: string;
    images: string[];
    agent: {
      name: string;
      avatar: string;
      verified: boolean;
      phone?: string;
    };
    visibilityLevel: VisibilityLevel;
    features: string[];
    description: string;
    bedrooms?: number;
    bathrooms?: number;
    size?: string;
  };
  onExpressInterest: (id: string) => void;
  onScheduleInspection: (id: string) => void;
  onMessageAgent: () => void;
  onSaveWishlist: (id: string) => void;
  onViewDetails: (id: string) => void;
}

export function PropertyCard({
  property,
  onExpressInterest,
  onScheduleInspection,
  onMessageAgent,
  onSaveWishlist,
  onViewDetails,
}: PropertyCardProps) {
  const getInspectionStatus = () => {
    switch (property.visibilityLevel) {
      case 'available':
        return {
          status: 'Available for Inspection',
          color: 'bg-emerald-50 text-emerald-700',
        };
      case 'active':
        return {
          status: 'Available for Inspection',
          color: 'bg-emerald-50 text-emerald-700',
        };
      case 'locked':
        return {
          status: 'Inspection Scheduled',
          color: 'bg-blue-50 text-[#1565C0]',
        };
      default:
        return {
          status: 'Available for Inspection',
          color: 'bg-emerald-50 text-emerald-700',
        };
    }
  };

  const inspectionInfo = getInspectionStatus();

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 group cursor-pointer"
      onClick={() => onViewDetails(property.id)}
    >
      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <ImageWithFallback
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSaveWishlist(property.id);
          }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors z-10"
        >
          <Heart className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Price */}
        <div className="mb-2">
          <span className="text-lg text-[#1565C0]" style={{ fontWeight: 600 }}>{property.price}</span>
          <span className="text-sm text-gray-500">/month</span>
        </div>

        {/* Title & Location */}
        <h4 className="text-sm text-gray-900 mb-0.5" style={{ fontWeight: 600 }}>{property.title}</h4>
        <p className="text-xs text-gray-500 mb-3">{property.location}</p>

        {/* Inspection Status */}
        <div className="mb-3">
          <span className={`inline-flex px-2.5 py-1 rounded-lg ${inspectionInfo.color} text-xs`} style={{ fontWeight: 600 }}>
            {inspectionInfo.status}
          </span>
        </div>

        {/* Agent Info */}
        <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
          <ImageWithFallback
            src={property.agent.avatar}
            alt={property.agent.name}
            className="w-7 h-7 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1">
              <span className="text-xs text-gray-900 truncate" style={{ fontWeight: 600 }}>{property.agent.name}</span>
              {property.agent.verified && (
                <ShieldCheck className="w-3 h-3 text-[#1565C0] flex-shrink-0" />
              )}
            </div>
            <p className="text-xs text-gray-500">Verified Agent</p>
          </div>
        </div>
      </div>
    </div>
  );
}