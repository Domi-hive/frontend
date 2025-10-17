import { Lock, Heart, CheckCircle, MapPin, Calendar, MessageSquare } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
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

  const getAvailabilityBadge = () => {
    switch (property.visibilityLevel) {
      case 'available':
        return (
          <Badge className="bg-green-100 text-green-700 text-xs px-3 py-1">
            <CheckCircle className="w-3 h-3 mr-1" />
            Confirmed Available
          </Badge>
        );
      case 'active':
        return (
          <Badge className="bg-[#90CAF9] text-[#1565C0] text-xs px-3 py-1">
            <Calendar className="w-3 h-3 mr-1" />
            Available for Inspection
          </Badge>
        );
      case 'locked':
        return (
          <Badge className="bg-gray-100 text-gray-600 text-xs px-3 py-1">
            <Lock className="w-3 h-3 mr-1" />
            Pending Confirmation
          </Badge>
        );
      default:
        return null;
    }
  };

  const handleCardClick = (e: React.MouseEvent) => {
    // Don't trigger card click if clicking on buttons
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    onViewDetails(property.id);
  };

  const isLocked = property.visibilityLevel === 'locked';

  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md ${isLocked ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      onClick={handleCardClick}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />

        {/* Availability Badge */}
        <div className="absolute top-3 left-3">
          {getAvailabilityBadge()}
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors">
          <Heart className="w-4 h-4 text-gray-600" />
        </button>

        {/* Lock Overlay */}
        {isLocked && (
          <TooltipProvider>
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="bg-white rounded-lg p-4 shadow-lg">
                    <Lock className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-900 font-medium">Premium Property</p>
                    <p className="text-xs text-gray-600">Contact agent to unlock</p>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This property requires agent verification</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg mb-1">{property.title}</h3>
        <div className="text-xl mb-2" style={{ color: 'rgb(21, 101, 192)' }}>{property.price}</div>
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{property.location}</span>
        </div>

        {/* Features */}
        <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100">
          <Avatar className="w-8 h-8">
            <AvatarImage
              src={property.agent.avatar}
              alt={property.agent.name}
            />
            <AvatarFallback>
              {property.agent.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium text-gray-900">{property.agent.name}</span>
              {property.agent.verified && <CheckCircle className="w-4 h-4 text-green-600" />}
            </div>
            <div className="text-xs text-gray-600">
              {property.bedrooms && `${property.bedrooms} bed • `}
              {property.bathrooms && `${property.bathrooms} bath • `}
              {property.size}
            </div>
          </div>
        </div>

        {/* Actions */}
        {isLocked ? (
          <div data-state="closed" data-slot="tooltip-trigger">
            <Button
              className="w-full opacity-50 cursor-not-allowed"
              disabled
            >
              Contact Available Soon
            </Button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-2">
              <Button
                className="w-full text-white"
                style={{ backgroundColor: 'rgb(144, 202, 249)' }}
                onClick={(e) => {
                  e.stopPropagation();
                  onScheduleInspection(property.id);
                }}
              >
                <Calendar className="w-4 h-4 mr-1" />
                Schedule
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={(e) => {
                  e.stopPropagation();
                  onMessageAgent();
                }}
              >
                <MessageSquare className="w-4 h-4 mr-1" />
                Message
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}