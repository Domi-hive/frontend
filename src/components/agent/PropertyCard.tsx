import { Lock, Heart, CheckCircle, MapPin, Calendar, MessageSquare } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

export type VisibilityLevel = 'locked' | 'active' | 'available';

interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    price: string;
    location: string;
    image: string;
    agent: {
      name: string;
      avatar: string;
      verified: boolean;
    };
    visibilityLevel: VisibilityLevel;
    features?: string[];
    description?: string;
  };
  onExpressInterest?: (id: string) => void;
  onScheduleInspection?: (id: string) => void;
  onMessageAgent?: () => void;
  onSaveWishlist?: (id: string) => void;
  onViewDetails?: (id: string) => void;
}

export function PropertyCard({
  property,
  onExpressInterest,
  onScheduleInspection,
  onMessageAgent,
  onSaveWishlist,
  onViewDetails,
}: PropertyCardProps) {
  const isLocked = property.visibilityLevel === 'locked';
  const isActive = property.visibilityLevel === 'active';
  const isAvailable = property.visibilityLevel === 'available';

  const getAvailabilityBadge = () => {
    if (isLocked) {
      return { label: 'Pending Confirmation', color: 'bg-gray-100 text-gray-600' };
    }
    if (isActive) {
      return { label: 'Available for Inspection', color: 'bg-[#90CAF9] text-[#1565C0]' };
    }
    return { label: 'Confirmed Available', color: 'bg-green-100 text-green-700' };
  };

  const badge = getAvailabilityBadge();

  const handleCardClick = () => {
    if (!isLocked && onViewDetails) {
      onViewDetails(property.id);
    }
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md ${
        isLocked ? 'cursor-not-allowed' : 'cursor-pointer'
      }`}
      onClick={handleCardClick}
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={property.image}
          alt={property.title}
          className={`w-full h-full object-cover transition-all ${
            isLocked ? 'blur-sm opacity-40' : ''
          }`}
        />
        
        {/* Lock Overlay */}
        {isLocked && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="bg-white rounded-full p-3 shadow-lg">
                    <Lock className="w-6 h-6 text-gray-600" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Awaiting availability confirmation from agent</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )}

        {/* Availability Badge */}
        <div className="absolute top-3 left-3">
          <Badge className={`${badge.color} text-xs px-3 py-1`}>
            {badge.label}
          </Badge>
        </div>

        {/* Wishlist Button */}
        {!isLocked && (
          <button
            className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onSaveWishlist?.(property.id);
            }}
          >
            <Heart className="w-4 h-4 text-gray-600" />
          </button>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4">
        <div className="mb-3">
          <h3 className="text-lg mb-1">{property.title}</h3>
          <div className="text-xl mb-2" style={{ color: '#1565C0' }}>
            {property.price}
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{property.location}</span>
          </div>
        </div>

        {/* Agent Info */}
        <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100">
          <Avatar className="w-8 h-8">
            <AvatarImage src={property.agent.avatar} alt={property.agent.name} />
            <AvatarFallback>{property.agent.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-1 text-sm">
              <span>{property.agent.name}</span>
              {property.agent.verified && (
                <CheckCircle className="w-3 h-3" style={{ color: '#90CAF9' }} />
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          {isLocked && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <Button
                      variant="outline"
                      className="w-full opacity-50 cursor-not-allowed"
                      disabled
                      onClick={(e) => e.stopPropagation()}
                    >
                      Contact Available Soon
                    </Button>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Contact available once availability is confirmed</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}

          {isActive && (
            <>
              <Button
                className="w-full text-white"
                style={{ backgroundColor: '#90CAF9' }}
                onClick={(e) => {
                  e.stopPropagation();
                  onExpressInterest?.(property.id);
                }}
              >
                Express Interest
              </Button>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div>
                      <Button
                        variant="outline"
                        className="w-full opacity-50 cursor-not-allowed"
                        disabled
                        onClick={(e) => e.stopPropagation()}
                      >
                        Contact Available Soon
                      </Button>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Contact available once availability is confirmed</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </>
          )}

          {isAvailable && (
            <div className="grid grid-cols-2 gap-2">
              <Button
                className="w-full text-white"
                style={{ backgroundColor: '#90CAF9' }}
                onClick={(e) => {
                  e.stopPropagation();
                  onScheduleInspection?.(property.id);
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
                  onMessageAgent?.();
                }}
              >
                <MessageSquare className="w-4 h-4 mr-1" />
                Message
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
