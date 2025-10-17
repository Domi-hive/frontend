import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { CheckCircle, MapPin, Phone, MessageSquare, Calendar, Bed, Bath, Square } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface PropertyDetailsModalProps {
  open: boolean;
  onClose: () => void;
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
    visibilityLevel: 'available' | 'active' | 'locked';
    features: string[];
    description: string;
    bedrooms?: number;
    bathrooms?: number;
    size?: string;
  } | null;
  onScheduleInspection: (id: string) => void;
  onMessageAgent: () => void;
  onExpressInterest: (id: string) => void;
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
            Locked
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>{property.title}</span>
            {getAvailabilityBadge()}
          </DialogTitle>
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
                      alt={`${property.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          {/* Price and Location */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{property.price}</div>
              <div className="flex items-center gap-1 text-gray-600">
                <MapPin className="w-4 h-4" />
                {property.location}
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                {property.bedrooms && (
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    {property.bedrooms} bed
                  </div>
                )}
                {property.bathrooms && (
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    {property.bathrooms} bath
                  </div>
                )}
                {property.size && (
                  <div className="flex items-center gap-1">
                    <Square className="w-4 h-4" />
                    {property.size}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-600 leading-relaxed">{property.description}</p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Features & Amenities</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {property.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Agent Info */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3">Listed by</h3>
            <div className="flex items-center gap-3">
              <Avatar className="w-12 h-12">
                <AvatarImage src={property.agent.avatar} alt={property.agent.name} />
                <AvatarFallback>{property.agent.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-gray-900">{property.agent.name}</span>
                  {property.agent.verified && <CheckCircle className="w-4 h-4 text-green-600" />}
                </div>
                {property.agent.phone && (
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Phone className="w-3 h-3" />
                    {property.agent.phone}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              className="flex-1"
              onClick={() => onExpressInterest(property.id)}
            >
              Express Interest
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => onScheduleInspection(property.id)}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Inspection
            </Button>
            <Button
              variant="outline"
              onClick={onMessageAgent}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Message Agent
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}