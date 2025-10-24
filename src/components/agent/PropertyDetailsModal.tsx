import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, CheckCircle, Calendar, MessageSquare, Heart, Bed, Bath, Maximize } from 'lucide-react';
import { Badge } from './ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import type { VisibilityLevel } from './PropertyCard';

interface PropertyDetailsModalProps {
  open: boolean;
  onClose: () => void;
  property: {
    id: string;
    title: string;
    price: string;
    location: string;
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
  } | null;
  onScheduleInspection?: (id: string) => void;
  onMessageAgent?: () => void;
  onExpressInterest?: (id: string) => void;
}

export function PropertyDetailsModal({
  open,
  onClose,
  property,
  onScheduleInspection,
  onMessageAgent,
  onExpressInterest,
}: PropertyDetailsModalProps) {
  if (!property) return null;

  const isAvailable = property.visibilityLevel === 'available';
  const isActive = property.visibilityLevel === 'active';

  const getAvailabilityBadge = () => {
    if (property.visibilityLevel === 'locked') {
      return { label: 'Pending Confirmation', color: 'bg-gray-100 text-gray-600' };
    }
    if (property.visibilityLevel === 'active') {
      return { label: 'Available for Inspection', color: 'bg-[#90CAF9] text-[#1565C0]' };
    }
    return { label: 'Confirmed Available', color: 'bg-green-100 text-green-700' };
  };

  const badge = getAvailabilityBadge();

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{property.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image Carousel */}
          <Carousel className="w-full">
            <CarouselContent>
              {property.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-96 rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src={image}
                      alt={`${property.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          {/* Property Details */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-sm text-gray-500 mb-1">Price</div>
              <div className="text-xl" style={{ color: '#1565C0' }}>
                {property.price}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Location</div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span className="text-sm">{property.location}</span>
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Status</div>
              <Badge className={`${badge.color} text-xs px-3 py-1`}>
                {badge.label}
              </Badge>
            </div>
          </div>

          {/* Property Stats */}
          {(property.bedrooms || property.bathrooms || property.size) && (
            <div className="flex gap-6 py-4 border-y border-gray-100">
              {property.bedrooms && (
                <div className="flex items-center gap-2">
                  <Bed className="w-5 h-5 text-gray-500" />
                  <span>{property.bedrooms} Bedrooms</span>
                </div>
              )}
              {property.bathrooms && (
                <div className="flex items-center gap-2">
                  <Bath className="w-5 h-5 text-gray-500" />
                  <span>{property.bathrooms} Bathrooms</span>
                </div>
              )}
              {property.size && (
                <div className="flex items-center gap-2">
                  <Maximize className="w-5 h-5 text-gray-500" />
                  <span>{property.size}</span>
                </div>
              )}
            </div>
          )}

          {/* Description */}
          <div>
            <h4 className="mb-2">Description</h4>
            <p className="text-gray-600">{property.description}</p>
          </div>

          {/* Features */}
          <div>
            <h4 className="mb-3">Features & Amenities</h4>
            <div className="grid grid-cols-2 gap-2">
              {property.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4" style={{ color: '#90CAF9' }} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Agent Info */}
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#E3F2FD' }}>
            <div className="text-sm mb-3" style={{ color: '#1565C0' }}>
              Listed by
            </div>
            <div className="flex items-center gap-3">
              <Avatar className="w-12 h-12">
                <AvatarImage src={property.agent.avatar} alt={property.agent.name} />
                <AvatarFallback>
                  {property.agent.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span>{property.agent.name}</span>
                  {property.agent.verified && (
                    <CheckCircle className="w-4 h-4" style={{ color: '#1565C0' }} />
                  )}
                </div>
                {property.agent.phone && isAvailable && (
                  <div className="text-sm text-gray-600">{property.agent.phone}</div>
                )}
              </div>
            </div>
            
            {!isAvailable && (
              <div className="mt-3 text-sm text-gray-600">
                {isActive 
                  ? "Contact details will be available once availability is fully confirmed."
                  : "Waiting for agent to confirm availability."}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            {isActive && (
              <Button
                className="flex-1 text-white"
                style={{ backgroundColor: '#90CAF9' }}
                onClick={() => {
                  onExpressInterest?.(property.id);
                  onClose();
                }}
              >
                Express Interest
              </Button>
            )}
            
            {isAvailable && (
              <>
                <Button
                  className="flex-1 text-white"
                  style={{ backgroundColor: '#90CAF9' }}
                  onClick={() => {
                    onScheduleInspection?.(property.id);
                    onClose();
                  }}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Inspection
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    onMessageAgent?.();
                    onClose();
                  }}
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Message Agent
                </Button>
              </>
            )}
            
            <Button
              variant="outline"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
