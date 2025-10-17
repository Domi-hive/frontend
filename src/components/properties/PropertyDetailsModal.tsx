import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { CheckCircle, MapPin, Phone, MessageSquare, Calendar, Bed, Bath, Square, X } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState } from 'react';

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
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

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
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 9999,
      display: open ? 'flex' : 'none',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div
        className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-lg border shadow-lg"
        style={{ zIndex: 10000 }}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold">{property.title}</h2>
          {getAvailabilityBadge()}
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Image Carousel */}
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {property.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-64 rounded-lg overflow-hidden cursor-pointer">
                      <ImageWithFallback
                        src={image}
                        alt={`${property.title} ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div
                        className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center"
                        onClick={() => setFullscreenImage(image)}
                      >
                        <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2">
                          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>

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
          <div className="flex gap-3 pt-6 border-t">
            <button
              className="flex-1 bg-[#90CAF9] text-white px-4 py-2 rounded-lg hover:bg-[#1565C0] transition-colors"
              onClick={() => onExpressInterest(property.id)}
            >
              Express Interest
            </button>
            <button
              className="flex-1 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => onScheduleInspection(property.id)}
            >
              <Calendar className="w-4 h-4 mr-2 inline" />
              Schedule Inspection
            </button>
            <button
              className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={onMessageAgent}
            >
              <MessageSquare className="w-4 h-4 mr-2 inline" />
              Message Agent
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black flex items-center justify-center"
          style={{ zIndex: 10001 }}
          onClick={() => setFullscreenImage(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setFullscreenImage(null);
            }}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
            style={{ zIndex: 10002 }}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={fullscreenImage}
            alt="Fullscreen property image"
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}