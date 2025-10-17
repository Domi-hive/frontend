import { Lock, Heart, CheckCircle, MapPin, Calendar, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
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
  const [isWishlisted, setIsWishlisted] = useState(false);

  const getAvailabilityBadge = () => {
    switch (property.visibilityLevel) {
      case 'available':
        return (
          <Badge className="bg-green-100 text-green-800 border-green-200">
            <CheckCircle className="w-3 h-3 mr-1" />
            Available
          </Badge>
        );
      case 'active':
        return (
          <Badge className="bg-blue-100 text-blue-800 border-blue-200">
            <Calendar className="w-3 h-3 mr-1" />
            Active
          </Badge>
        );
      case 'locked':
        return (
          <Badge className="bg-gray-100 text-gray-800 border-gray-200">
            <Lock className="w-3 h-3 mr-1" />
            Locked
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
      className="bg-white rounded-xl border border-gray-200 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
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
        <TooltipProvider>
          <div className="absolute top-3 right-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsWishlisted(!isWishlisted);
                    onSaveWishlist(property.id);
                  }}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    isWishlisted
                      ? 'bg-red-500 text-white'
                      : 'bg-white/80 text-gray-600 hover:bg-white'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>

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
        {/* Price and Location */}
        <div className="mb-2">
          <div className="text-lg font-semibold text-gray-900 mb-1">{property.price}</div>
          <div className="flex items-center gap-1 text-gray-600 text-sm">
            <MapPin className="w-4 h-4" />
            {property.location}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2">{property.title}</h3>

        {/* Features */}
        <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100">
          <Avatar className="w-8 h-8">
            <ImageWithFallback
              src={property.agent.avatar}
              alt={property.agent.name}
              className="w-full h-full object-cover rounded-full"
            />
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
          <Button
            className="w-full"
            onClick={(e) => {
              e.stopPropagation();
              onMessageAgent();
            }}
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Contact Agent
          </Button>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onExpressInterest(property.id);
                }}
              >
                Express Interest
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onScheduleInspection(property.id);
                }}
              >
                Schedule Visit
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}